const https = require('https');  
const http = require('http');
const fs = require('fs');
const path = require('path');
const { Telegraf } = require('telegraf');
const crypto = require('crypto');
require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const url = require('url');

// Константа с ценами в звездах (нужна только для создания инвойса)
const CUBE_PRICES = {
  'cube1': 50,
  'cube2': 97,
  'cube3': 497,
  'cube4': 5000
};
// slot price
const SLOT_PRICES = {
  stars: 149,
  ton: 0.90
};

const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.wasm': 'application/wasm'
};

// Функция для проверки статических запросов
const isStaticRequest = (pathname) => {
  const ext = path.extname(pathname).toLowerCase();
  return MIME_TYPES[ext] !== undefined;
};

// Функция для проверки хешированных ассетов
const isHashedAsset = (pathname) => {
  return pathname.startsWith('/assets/') && pathname.match(/[-_][a-zA-Z0-9]{8,}\./);
};

// Редис для уведомлений
const ADMIN_ID = process.env.ADMIN_TELEGRAM_ID;
const Redis = require('ioredis');
const redis = new Redis({
    host: '127.0.0.1',
    port: 6379,
    retryStrategy: function(times) {
        const delay = Math.min(times * 50, 2000);
        return delay;
    },
    maxRetriesPerRequest: null
});

redis.on('error', (err) => {
    console.error('Redis connection error:', err);
});

redis.on('connect', () => {
    console.log('Successfully connected to Redis');
});

const isAdmin = (telegramId) => {
  return telegramId.toString() === ADMIN_ID;
};

// Создаем подключение к базе данных с логами только об ошибках, создавая пул в 50 подключений к бд
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD, 
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: false, // Отключаем стандартные SQL логи
    logQueryParameters: false,
    benchmark: false,
    // Настраиваем кастомный logger
    logger: {
      error: (err) => {
        // Логируем ошибки БД
        if (err.original) { // Ошибки базы данных
          console.error('Database Error:', {
            message: err.original.message,
            code: err.original.code,
            timestamp: new Date().toISOString()
          });
        } else if (err.name === 'SequelizeValidationError') { // Ошибки валидации
          console.error('Validation Error:', {
            message: err.message,
            errors: err.errors.map(e => e.message),
            timestamp: new Date().toISOString()
          });
        } else { // Другие ошибки запросов
          console.error('Query Error:', {
            message: err.message,
            timestamp: new Date().toISOString()
          });
        }
      }
    },
    pool: {
      max: 50,
      min: 10,
      acquire: 30000,
      idle: 10000
    }
  }
);
sequelize.authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// Если нужно отслеживать отключение:
process.on('SIGINT', async () => {
  try {
    await sequelize.close();
    console.log('Database connection closed.');
    process.exit(0);
  } catch (err) {
    console.error('Error closing database connection:', err);
    process.exit(1);
  }
});

// Определяем модель User
const User = sequelize.define('User', {
  telegramId: {
    type: DataTypes.BIGINT, // Изменить тип с STRING на BIGINT
    allowNull: false,
    unique: true,
    index: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: true
  },
  referralCode: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    index: true
  },
  referredBy: {
    type: DataTypes.STRING,
    allowNull: true
  },
  referralRewardsCount: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    allowNull: false
  },
  rootBalance: {
    type: DataTypes.DECIMAL(10, 2), // для хранения значений с 2 знаками после запятой
    defaultValue: 0,
    index: true
  },
  maxEnergy: {
    type: DataTypes.INTEGER,
    defaultValue: 100
  },
  purchasedModes: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    defaultValue: [], 
    allowNull: false
  },
  miners: {
    type: DataTypes.JSONB, // Используем JSONB для хранения массива майнеров
    defaultValue: [],
    allowNull: false
  },
  maxSlots: {
    type: DataTypes.INTEGER,
    defaultValue: 5,  // Начальное значение - 5 слотов
    allowNull: false
  }
});

// Синхронизируем модель с базой данных
sequelize.sync({ alter: true });
// Создаем экземпляр бота с вашим токеном
const bot = new Telegraf(process.env.POKO_BOT_TOKEN);
// WebApp URL
const webAppUrl = 'https://pokoapp.space';

// Обработчик команды /start
bot.command('start', async (ctx) => {
  const telegramId = ctx.from.id.toString();
  // Используем first_name если username отсутствует
  const username = ctx.from.username || ctx.from.first_name || `user_${telegramId}`;
  const referralCode = ctx.message.text.split(' ')[1];

  try {
    let user = await User.findOne({ where: { telegramId } });

    if (!user) {
      const newReferralCode = crypto.randomBytes(4).toString('hex');
      
      user = await User.create({
        telegramId,
        username,
        referralCode: newReferralCode,
        referredBy: referralCode || null
      });

      if (referralCode) {
        const referrer = await User.findOne({ where: { referralCode } });
        if (referrer) {
          console.log(`User ${telegramId} was referred by ${referrer.telegramId}`);
        }
      }
    } else {
      // Обновляем username если он изменился
      if (user.username !== username) {
        await user.update({ username });
      }
      
      // Если пользователь уже существует, но не имеет реферера и предоставлен реферальный код
      if (!user.referredBy && referralCode) {
        const referrer = await User.findOne({ where: { referralCode } });
        if (referrer && referrer.telegramId !== telegramId) { // Проверяем что это не самореферал
          await user.update({ referredBy: referralCode });
          console.log(`Existing user ${telegramId} was referred by ${referrer.telegramId}`);
        }
      }
    }

     // First message with fire emoji
     await ctx.reply('I see you\'ve located me. I\'ve had my eye on you.');
    
     // Wait 2 seconds
     await new Promise(resolve => setTimeout(resolve, 2000));
     
     // Second message
     await ctx.reply('I sense great power within you. Allegiance to my vision will bring you prosperity.');
     
     // Wait 2 seconds
     await new Promise(resolve => setTimeout(resolve, 2000));
     
     // Third message with fire emoji and webApp button
     await ctx.reply('Will you venture further into the unknown??', {
       reply_markup: {
         inline_keyboard: [
           [{ text: 'Join Poko 👁', web_app: { url: webAppUrl } }]
         ]
       }
     });
 
   } catch (error) {
     console.error('Error in start command:', error);
     ctx.reply('An error occurred. Please try again later.');
   }
 });

// Добавляем обработчик команды /paysupport
bot.command('paysupport', async (ctx) => {
  try {
    await ctx.reply('If you have any issues or questions, please contact our moderator:\n@mirror_of_callandra\n\nWith ❤️,\nPOKO Team.');
  } catch (error) {
    console.error('Error in paysupport command:', error);
  }
});

// Запускаем бота
bot.launch();
bot.on('pre_checkout_query', async (ctx) => {
  try {
    await ctx.answerPreCheckoutQuery(true);
  } catch (error) {
    console.error('Error in pre_checkout_query:', error);
  }
});

// Обработка successful_payment
bot.on('successful_payment', async (ctx) => {
  try {
    console.log('=== PAYMENT HANDLER TRIGGERED ===');
    const payment = ctx.message.successful_payment;
    console.log('Payment data:', payment);

    const payload = payment.invoice_payload;
    console.log('Full payload:', payload);

    // Разбираем payload
    const parts = payload.split('_');
    const type = parts[0];
    const telegramId = parts[1];
    
    console.log('Parsed payment type:', type);

    const user = await User.findOne({ where: { telegramId } });
    if (!user) {
      console.error('User not found:', telegramId);
      return;
    }

    if (type === 'cube') {
      const cubeType = parts[2];
      console.log(`User ${telegramId} purchased cube: ${cubeType}`);
      
      // Создаём объект майнера точно так же, как он создаётся 
      // для обычных кубов в вашей системе
      const newMiner = {
        type: cubeType,
        purchaseDate: new Date(),
        id: Date.now()
      };
      
      const currentMiners = user.miners || [];
      const updatedMiners = [newMiner, ...currentMiners];
      
      await user.update({ miners: updatedMiners });
      
      // Используем названия кубов для сообщения
      const cubeNames = {
        'cube1': 'Superior',
        'cube2': 'Enhanced',
        'cube3': 'Excellent',
        'cube4': 'Prime'
      };
      
      await ctx.reply(`🎁 Вы успешно приобрели ${cubeNames[cubeType]} куб!`);
    } else if (type === 'slot') {
      console.log(`User ${telegramId} purchased additional slot`);
      
      // Получаем текущее количество слотов и увеличиваем на 1
      const currentSlots = user.maxSlots || 5;
      const newMaxSlots = currentSlots + 1;
      
      // Обновляем количество слотов в базе данных
      await user.update({ maxSlots: newMaxSlots });
      
      // Отправляем сообщение об успешной покупке
      await ctx.reply(`🎯 Вы успешно приобрели дополнительный слот!\nТеперь у вас ${newMaxSlots} слотов.`);
      
      console.log(`Updated slots for user ${telegramId}: ${newMaxSlots}`);
    } else {
      console.error('Unknown payment type:', type);
      await ctx.reply('❌ Произошла ошибка при обработке платежа. Пожалуйста, обратитесь в поддержку.');
    }
  } catch (error) {
    console.error('Error in successful_payment:', error);
    console.error('Full error:', error.stack);
    try {
      await ctx.reply('❌ Произошла ошибка при обработке платежа. Пожалуйста, обратитесь в поддержку.');
    } catch (replyError) {
      console.error('Error sending error message:', replyError);
    }
  }
});

function validateInitData(initData) {
  const urlParams = new URLSearchParams(initData);
  const hash = urlParams.get('hash');
  urlParams.delete('hash');
  
  // Сортируем оставшиеся параметры
  const params = Array.from(urlParams.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([key, value]) => `${key}=${value}`)
    .join('\n');
    
  // Создаем HMAC
  const secret = crypto.createHmac('sha256', 'WebAppData')
    .update(process.env.POKO_BOT_TOKEN)
    .digest();
    
  const generatedHash = crypto.createHmac('sha256', secret)
    .update(params)
    .digest('hex');
    
  return generatedHash === hash;
}

async function authMiddleware(req, res) {
  const initData = req.headers['x-telegram-init-data'];
  if (!initData || !validateInitData(initData)) {
    return { status: 401, body: { error: 'Unauthorized' } };
  }
  return null;
}

const getRequestBody = (req) => {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      try {
        resolve(JSON.parse(body));
      } catch (error) {
        reject(error);
      }
    });
  });
};

const routes = {
  GET: {
 '/get-user': async (req, res, query) => {
  // Добавляем проверку авторизации
  const authError = await authMiddleware(req, res);
  if (authError) return authError;

  const telegramId = query.telegramId;
  
  if (!telegramId) {
    return { 
      status: 400, 
      body: { error: 'Telegram ID is required' } 
    };
  }

  try {
    // Проверяем соответствие ID пользователя из initData с запрашиваемым ID
    const initData = new URLSearchParams(req.headers['x-telegram-init-data']);
    const userData = JSON.parse(initData.get('user'));
    if (userData.id.toString() !== telegramId) {
      return { 
        status: 403, 
        body: { error: 'Unauthorized: User ID mismatch' } 
      };
    }

    let user = await User.findOne({ where: { telegramId } });
    
    if (user) {
      // Проверяем наличие реферального кода
      if (!user.referralCode) {
        const newReferralCode = Math.random().toString(36).substring(2, 8).toUpperCase();
        await user.update({ referralCode: newReferralCode });
        user = await User.findOne({ where: { telegramId } }); // Получаем обновленного пользователя
      }

      return { 
        status: 200, 
        body: {
          success: true,
          user: {
            id: user.id,
            telegramId: user.telegramId,
            username: user.username,
            referralCode: user.referralCode,
            rootBalance: user.rootBalance,
            referredBy: user.referredBy,
            maxSlots: user.maxSlots
          }
        }
      };
    }
    return { 
      status: 404, 
      body: { 
        success: false,
        error: 'User not found' 
      } 
    };
  } catch (error) {
    console.error('Error getting user:', error);
    return { 
      status: 500, 
      body: { error: 'Failed to get user' } 
    };
  }
},
    '/get-root-balance': async (req, res, query) => {
      const telegramId = query.telegramId;
      
      if (!telegramId) {
        return { 
          status: 400, 
          body: { error: 'Missing telegramId parameter' } 
        };
      }
  
      try {
        const user = await User.findOne({ where: { telegramId } });
        if (!user) {
          return { 
            status: 404, 
            body: { 
              success: false,
              error: 'User not found' 
            } 
          };
        }
  
        return { 
          status: 200, 
          body: { 
            success: true,
            rootBalance: user.rootBalance,
            user: {
              telegramId: user.telegramId,
              username: user.username,
              referralCode: user.referralCode
            }
          } 
        };
      } catch (error) {
        console.error('Error getting root balance:', error);
        return { 
          status: 500, 
          body: { 
            success: false,
            error: 'Internal server error' 
          } 
        };
      }
    },
    '/get-referral-link': async (req, res, query) => {
      console.log('Получен запрос на /get-referral-link');
      const telegramId = query.telegramId;
      
      if (!telegramId) {
        console.log('Отсутствует telegramId');
        return { status: 400, body: { error: 'Missing telegramId parameter' } };
      }

      try {
        console.log('Поиск пользователя с telegramId:', telegramId);
        const user = await User.findOne({ where: { telegramId } });
        if (user) {
          const inviteLink = `https://t.me/ThePokoBot?start=${user.referralCode}`;
          console.log('Сгенерирована ссылка:', inviteLink);
          return { status: 200, body: { inviteLink } };
        } else {
          console.log('Пользователь не найден');
          return { status: 404, body: { error: 'User not found' } };
        }
      } catch (error) {
        console.error('Ошибка при обработке запроса:', error);
        return { status: 500, body: { error: 'Internal server error' } };
      }
    },
    
    '/get-referral-count': async (req, res, query) => {
      const authError = await authMiddleware(req, res);
      if (authError) return authError;

      console.log('Request query:', query);
      console.log('Request URL:', req.url);
      
      const telegramId = query?.telegramId;
      
      if (!telegramId) {
        console.error('No telegramId provided in request');
        return { 
          status: 400, 
          body: { 
            success: false, 
            error: 'Telegram ID is required' 
          } 
        };
      }

      try {
        const user = await User.findOne({ where: { telegramId } });
        console.log('Found user:', user);

        if (!user) {
          return { 
            status: 404, 
            body: { 
              success: false, 
              error: 'User not found' 
            } 
          };
        }

        // Получаем список рефералов
        const referrals = await User.findAll({
          where: { referredBy: user.referralCode },
          attributes: ['telegramId', 'username', 'createdAt'],
          raw: true
        });

        console.log('Found referrals:', referrals);

        // Форматируем данные для фронтенда
        const formattedReferrals = referrals.map(ref => ({
          id: ref.telegramId,
          username: ref.username || `User_${ref.telegramId}`,
          joinDate: ref.createdAt
        }));

        return {
          status: 200,
          body: {
            success: true,
            count: referrals.length,
            referrals: formattedReferrals
          }
        };
      } catch (error) {
        console.error('Error in get-referral-count:', error);
        return { 
          status: 500, 
          body: { 
            success: false, 
            error: 'Server error' 
          } 
        };
      }
    },
    
    '/check-channel-subscription': async (req, res, query) => {
      const { telegramId, channel } = query;
      
      console.log('Проверка подписки:', { telegramId, channel });
      
      if (!telegramId) {
        return { 
          status: 400, 
          body: { error: 'Missing telegramId parameter' } 
        };
      }

      try {
        // Проверяем подписку пользователя на указанный канал
        const chatMember = await bot.telegram.getChatMember(`@${channel}`, telegramId);
        console.log('Статус подписки:', chatMember.status);

        const isSubscribed = ['member', 'administrator', 'creator'].includes(chatMember.status);

        if (isSubscribed) {
          const user = await User.findOne({ where: { telegramId } });
          if (!user) {
            return { status: 404, body: { error: 'User not found' } };
          }

          const currentBalance = parseFloat(user.rootBalance) || 0;
          const newBalance = currentBalance + 1000;
          
          await user.update({ rootBalance: newBalance });

          const updatedUser = await User.findOne({ where: { telegramId } });
          
          console.log('Баланс обновлен:', {
            oldBalance: currentBalance,
            newBalance: updatedUser.rootBalance
          });

          return { 
            status: 200, 
            body: { 
              success: true, 
              message: 'Reward claimed successfully!',
              newBalance: updatedUser.rootBalance
            } 
          };
        } else {
          console.log('Пользователь не подписан. Статус:', chatMember.status);
          return { 
            status: 400, 
            body: { 
              success: false, 
              error: 'You are not subscribed to the channel',
              status: chatMember.status
            } 
          };
        }
      } catch (error) {
        console.error('Ошибка проверки подписки:', error);
        return { 
          status: 500, 
          body: { 
            error: 'Failed to check subscription',
            details: error.message 
          } 
        };
      }
    },
'/create-cube-invoice': async (req, res, query) => {
    const { telegramId, cubeType } = query;
    
    if (!telegramId || !cubeType) {
        return { status: 400, body: { error: 'Missing required parameters' } };
    }

    try {
        const user = await User.findOne({ where: { telegramId } });
        if (!user) {
            return { status: 404, body: { error: 'User not found' } };
        }

        // Убедимся, что этот куб существует в нашем прайсе
        if (!CUBE_PRICES[cubeType]) {
            return { status: 400, body: { error: 'Invalid cube type' } };
        }

        // Имена кубов для красивого отображения в инвойсе
        const cubeNames = {
            'cube1': 'Superior',
            'cube2': 'Enhanced',
            'cube3': 'Excellent',
            'cube4': 'Prime'
        };

        const title = 'POKO Cube';
        const description = `Purchase ${cubeNames[cubeType]} Cube`;

        const invoice = await bot.telegram.createInvoiceLink({
            title,
            description,
            payload: `cube_${telegramId}_${cubeType}`,
            provider_token: "",
            currency: 'XTR',
            prices: [{
                label: '⭐️ Purchase',
                amount: CUBE_PRICES[cubeType]
            }]
        });

        return { status: 200, body: { slug: invoice } };
    } catch (error) {
        console.error('Error creating cube invoice:', error);
        return { status: 500, body: { error: 'Failed to create invoice' } };
    }
},
'/create-slot-invoice': async (req, res, query) => {
  console.log('Запрос на создание инвойса для слота:', query);
  const { telegramId } = query;
  
  if (!telegramId) {
    console.error('Отсутствует telegramId');
    return { status: 400, body: { error: 'Missing telegramId parameter' } };
  }

  try {
    const user = await User.findOne({ where: { telegramId } });
    if (!user) {
      console.error('Пользователь не найден:', telegramId);
      return { status: 404, body: { error: 'User not found' } };
    }

    const title = 'POKO Slot';
    const description = 'Purchase Additional Slot';

    
    const invoice = await bot.telegram.createInvoiceLink({
      title,
      description,
      payload: `slot_${telegramId}`,
      provider_token: "",
      currency: 'XTR',
      prices: [{
        label: '⭐️ Additional Slot',
        amount: SLOT_PRICES.stars
      }]
    });

    console.log('Создан инвойс для слота:', invoice);
    return { status: 200, body: { slug: invoice } };
  } catch (error) {
    console.error('Error creating slot invoice:', error);
    return { status: 500, body: { error: 'Failed to create invoice: ' + error.message } };
  }
},
    '/get-friends-leaderboard': async (req, res, query) => {
    const telegramId = query.telegramId;
    
    if (!telegramId) {
        return { status: 400, body: { error: 'Missing telegramId parameter' } };
    }

    try {
        // Получаем текущего пользователя
        const currentUser = await User.findOne({ 
            where: { telegramId },
            attributes: ['telegramId', 'username', 'highScore']
        });

        if (!currentUser) {
            return { status: 404, body: { error: 'User not found' } };
        }

        // Получаем топ-100 игроков с наивысшими рекордами
        const topPlayers = await User.findAll({
          where: {
              highScore: {
                  [Sequelize.Op.gt]: 0
              }
          },
          attributes: ['telegramId', 'username', 'highScore'],
          order: [['highScore', 'DESC']],
          limit: 50  // Уменьшаем лимит до 50
      });

        // Преобразуем данные
        const leaderboardData = topPlayers.map(player => ({
            id: player.telegramId,
            username: player.username,
            highScore: player.highScore,
            isCurrentUser: player.telegramId === telegramId
        }));

        // Если текущий пользователь не в топ-100, добавляем его отдельно
        if (!leaderboardData.some(player => player.isCurrentUser)) {
            leaderboardData.push({
                id: currentUser.telegramId,
                username: currentUser.username,
                highScore: currentUser.highScore,
                isCurrentUser: true
            });
        }

        return { 
            status: 200, 
            body: { 
                leaderboard: leaderboardData,
                timestamp: Date.now()
            } 
        };
    } catch (error) {
        console.error('Error getting leaderboard:', error);
        return { status: 500, body: { error: 'Internal server error' } };
    }
},
'/get-user-slots': async (req, res, query) => {
  const authError = await authMiddleware(req, res);
  if (authError) return authError;

  const { telegramId } = query;
  
  if (!telegramId) {
    return { 
      status: 400, 
      body: { error: 'Telegram ID is required' } 
    };
  }

  try {
    const user = await User.findOne({ where: { telegramId } });
    if (!user) {
      return { 
        status: 404, 
        body: { error: 'User not found' } 
      };
    }

    return { 
      status: 200, 
      body: { 
        success: true,
        maxSlots: user.maxSlots 
      } 
    };
  } catch (error) {
    console.error('Error getting slots:', error);
    return { 
      status: 500, 
      body: { error: 'Failed to get slots' } 
    };
  }
},
'/get-user-miners': async (req, res, query) => {
  const authError = await authMiddleware(req, res);
  if (authError) return authError;

  const { telegramId } = query;
  
  if (!telegramId) {
    console.log('No telegramId provided');
    return { 
      status: 400, 
      body: { error: 'Telegram ID is required' } 
    };
  }

  try {
    const user = await User.findOne({ where: { telegramId } });
    if (!user) {
      console.log(`User ${telegramId} not found`);
      return { 
        status: 404, 
        body: { error: 'User not found' } 
      };
    }

    // Подсчитываем количество каждого типа майнеров
    const minerCounts = (user.miners || []).reduce((acc, miner) => {
      acc[miner.type] = (acc[miner.type] || 0) + 1;
      return acc;
    }, {});

    return { 
      status: 200, 
      body: { 
        success: true,
        miners: user.miners || [],
        minerCounts: minerCounts
      } 
    };
  } catch (error) {
    console.error('Error getting miners:', error);
    return { 
      status: 500, 
      body: { error: 'Failed to get miners' } 
    };
  }
}
},
    POST: {
      '/update-root-balance': async (req, res) => {
        const authError = await authMiddleware(req, res);
        if (authError) return authError;
      
        let body = '';
        req.on('data', chunk => { body += chunk; });
        
        return new Promise((resolve) => {
          req.on('end', async () => {
            try {
              const data = JSON.parse(body);
              const { telegramId, rootBalance } = data;
      
              if (!telegramId || rootBalance === undefined) {
                resolve({ status: 400, body: { error: 'Missing required parameters' } });
                return;
              }
      
              const user = await User.findOne({ where: { telegramId } });
              if (!user) {
                resolve({ status: 404, body: { error: 'User not found' } });
                return;
              }
      
              await user.update({ rootBalance });
      
              resolve({
                status: 200,
                body: { 
                  success: true,
                  rootBalance: user.rootBalance
                }
              });
            } catch (error) {
              console.error('Error updating root balance:', error);
              resolve({ 
                status: 500, 
                body: { error: 'Internal server error' } 
              });
            }
          });
        });
      },
  '/create-user': async (req, res) => {
  const authError = await authMiddleware(req, res);
  if (authError) return authError;

  let body = '';
  req.on('data', chunk => { body += chunk; });
  
  return new Promise((resolve) => {
    req.on('end', async () => {
      try {
        const data = JSON.parse(body);
        const { telegramId, username, referralCode, referredBy } = data;
        
        if (!telegramId || !referralCode) {
          resolve({ 
            status: 400, 
            body: { error: 'Telegram ID and referral code are required' } 
          });
          return;
        }

        // Проверяем существующего пользователя
        let user = await User.findOne({ where: { telegramId } });
        
        if (user) {
          resolve({
            status: 200,
            body: {
              success: true,
              user: {
                id: user.id,
                telegramId: user.telegramId,
                username: user.username,
                referralCode: user.referralCode,
                rootBalance: user.rootBalance,
                referredBy: user.referredBy
              }
            }
          });
          return;
        }

        // Проверяем реферальный код если он есть
        if (referredBy) {
          const referrer = await User.findOne({ 
            where: { referralCode: referredBy } 
          });
          
          if (referrer) {
            console.log(`User ${telegramId} was referred by ${referrer.telegramId}`);
            
            try {
              // Отправляем уведомление рефереру
              await bot.telegram.sendMessage(
                referrer.telegramId,
                `🎉 New referral! User ${username} joined using your link!\n\nKeep sharing to earn more rewards!`
              );

              // Получаем количество рефералов
              const referralCount = await User.count({
                where: { referredBy: referrer.referralCode }
              });

              // Проверяем, нужно ли выдать награду
              const newRewardsCount = Math.floor(referralCount / 3);
              const currentRewardsCount = referrer.referralRewardsCount || 0;

              if (newRewardsCount > currentRewardsCount) {
                // Вычисляем количество новых наград
                const rewardsToGive = newRewardsCount - currentRewardsCount;
                const rewardAmount = rewardsToGive * 0.5;

                // Обновляем баланс и счетчик наград реферера
                await referrer.update({
                  rootBalance: Number((referrer.rootBalance + rewardAmount).toFixed(2)),
                  referralRewardsCount: newRewardsCount
                });

                // Отправляем уведомление о награде
                await bot.telegram.sendMessage(
                  referrer.telegramId,
                  `🎯 Congratulations! You've earned ${rewardAmount} ROOT for inviting ${rewardsToGive * 3} friends!\n\nKeep inviting to earn more!`
                );
              }

            } catch (error) {
              console.error('Failed to process referral rewards:', error);
            }
          } else {
            referredBy = null;
          }
        }

        // Создаем нового пользователя
        user = await User.create({
          telegramId,
          username,
          referralCode,
          rootBalance: 0,
          referredBy: referredBy || null,
          referralRewardsCount: 0
        });

        resolve({
          status: 200,
          body: {
            success: true,
            user: {
              id: user.id,
              telegramId: user.telegramId,
              username: user.username,
              referralCode: user.referralCode,
              rootBalance: user.rootBalance,
              referredBy: user.referredBy
            }
          }
        });
      } catch (error) {
        console.error('Error creating user:', error);
        resolve({ 
          status: 500, 
          body: { error: 'Failed to create user' } 
        });
      }
    });
  });
},
// Покупка слота за TON
'/purchase-slot-ton': async (req, res) => {
  const authError = await authMiddleware(req, res);
  if (authError) return authError;

  let body = '';
  req.on('data', chunk => { body += chunk; });
  
  return new Promise((resolve) => {
    req.on('end', async () => {
      try {
        const data = JSON.parse(body);
        console.log('Получены данные о покупке слота за TON:', data);

        const { telegramId, transactionBoc, userAddress } = data;

        if (!telegramId || !transactionBoc) {
          resolve({ status: 400, body: { error: 'Отсутствуют обязательные параметры' } });
          return;
        }

        const user = await User.findOne({ where: { telegramId } });
        if (!user) {
          resolve({ status: 404, body: { error: 'Пользователь не найден' } });
          return;
        }

        console.log('Обработка покупки слота для пользователя:', {
          telegramId,
          userAddress
        });

        // Увеличиваем количество слотов
        const newMaxSlots = (user.maxSlots || 5) + 1;
        await user.update({ maxSlots: newMaxSlots });
        
        console.log('Покупка слота за TON успешна:', {
          telegramId,
          newMaxSlots,
          userAddress
        });

        resolve({
          status: 200,
          body: { 
            success: true,
            message: 'Дополнительный слот успешно приобретен',
            user: {
              maxSlots: newMaxSlots,
              telegramId: user.telegramId,
              userAddress
            }
          }
        });
        return;

      } catch (error) {
        console.error('Ошибка обработки покупки слота за TON:', error);
        resolve({ 
          status: 500, 
          body: { 
            error: 'Не удалось обработать покупку',
            details: error.message 
          }
        });
        return;
      }
    });
  });
},
'/purchase-with-ton': async (req, res) => {
  const authError = await authMiddleware(req, res);
  if (authError) return authError;

  let body = '';
  req.on('data', chunk => { body += chunk; });
  
  return new Promise((resolve) => {
    req.on('end', async () => {
      try {
        const data = JSON.parse(body);
        console.log('Получены данные о покупке за TON:', data);

        const { telegramId, cubeType, transactionBoc, userAddress } = data;

        if (!telegramId || !cubeType || !transactionBoc) {
          resolve({ status: 400, body: { error: 'Отсутствуют обязательные параметры' } });
          return;
        }

        // Проверяем валидность cubeType
        const validCubeTypes = ['cube1', 'cube2', 'cube3', 'cube4'];
        if (!validCubeTypes.includes(cubeType)) {
          console.error(`Неверный формат куба:`, cubeType);
          resolve({ 
            status: 400, 
            body: { error: `Неверный формат куба: ${cubeType}` } 
          });
          return;
        }

        const user = await User.findOne({ where: { telegramId } });
        if (!user) {
          resolve({ status: 404, body: { error: 'Пользователь не найден' } });
          return;
        }

        console.log('Обработка покупки куба для пользователя:', {
          telegramId,
          cubeType,
          userAddress
        });

        // Создаём объект майнера
        const newMiner = {
          type: cubeType,
          purchaseDate: new Date(),
          id: Date.now()
        };
        
        const currentMiners = user.miners || [];
        const updatedMiners = [newMiner, ...currentMiners];
        
        await user.update({ miners: updatedMiners });
        
        // Имена кубов для сообщения
        const cubeNames = {
          'cube1': 'Superior',
          'cube2': 'Enhanced',
          'cube3': 'Excellent',
          'cube4': 'Prime'
        };
        
        console.log('Покупка куба за TON успешна:', {
          telegramId,
          cubeType,
          cubeName: cubeNames[cubeType],
          userAddress
        });

        resolve({
          status: 200,
          body: { 
            success: true,
            message: `Куб ${cubeNames[cubeType]} успешно приобретен`,
            user: {
              miners: updatedMiners,
              telegramId: user.telegramId,
              userAddress
            }
          }
        });
        return;

      } catch (error) {
        console.error('Ошибка обработки покупки за TON:', error);
        resolve({ 
          status: 500, 
          body: { 
            error: 'Не удалось обработать покупку',
            details: error.message 
          }
        });
      }
    });
  });
},
'/update-user-miners': async (req, res) => {
    const authError = await authMiddleware(req, res);
    if (authError) return authError;

    let body = '';
    req.on('data', chunk => { body += chunk; });
    
    return new Promise((resolve) => {
      req.on('end', async () => {
        try {
          const data = JSON.parse(body);
          const { telegramId, miners } = data;

          if (!telegramId || !Array.isArray(miners)) {
            resolve({ 
              status: 400, 
              body: { error: 'Invalid request data' } 
            });
            return;
          }

          const user = await User.findOne({ where: { telegramId } });
          if (!user) {
            resolve({ 
              status: 404, 
              body: { error: 'User not found' } 
            });
            return;
          }

          await user.update({ miners });

          resolve({
            status: 200,
            body: { 
              success: true,
              miners: user.miners
            }
          });
        } catch (error) {
          console.error('Error updating miners:', error);
          resolve({ 
            status: 500, 
            body: { error: 'Failed to update miners' } 
          });
        }
      });
    });
  },
'/admin/add-wallet': async (req, res) => {
  const authError = await authMiddleware(req, res);
  if (authError) return authError;

  let body = '';
  req.on('data', chunk => { body += chunk; });
  
  return new Promise((resolve) => {
    req.on('end', async () => {
      try {
        const data = JSON.parse(body);
        const { adminId, address, balance, mnemonic } = data;
        
        // Преобразуем balance в число с плавающей точкой
        const numericBalance = parseFloat(balance);
        
        if (isNaN(numericBalance)) {
          resolve({
            status: 400,
            body: { error: 'Invalid balance value' }
          });
          return;
        }

        const wallet = await ActiveWallet.create({
          address,
          balance: numericBalance,
          mnemonic,
          status: 'active'
        });

        resolve({
          status: 200,
          body: { 
            success: true,
            wallet
          }
        });
      } catch (error) {
        console.error('Add wallet error:', error);
        resolve({ 
          status: 500, 
          body: { 
            error: 'Failed to add wallet',
            details: error.message 
          }
        });
          }
        });
      });
    },
    // Добавьте новый роут в объект routes.POST
'/update-max-slots': async (req, res) => {
  const authError = await authMiddleware(req, res);
  if (authError) return authError;

  let body = '';
  req.on('data', chunk => { body += chunk; });
  
  return new Promise((resolve) => {
    req.on('end', async () => {
      try {
        const data = JSON.parse(body);
        const { telegramId, newMaxSlots } = data;

        if (!telegramId) {
          resolve({ 
            status: 400, 
            body: { error: 'Telegram ID is required' } 
          });
          return;
        }

        const user = await User.findOne({ where: { telegramId } });
        if (!user) {
          resolve({ 
            status: 404, 
            body: { error: 'User not found' } 
          });
          return;
        }

        // Проверяем, достаточно ли у пользователя ROOT
        if (user.rootBalance < 5000) {
          resolve({
            status: 400,
            body: { error: 'Insufficient funds' }
          });
          return;
        }

        // Обновляем баланс и количество слотов
        await user.update({ 
          maxSlots: newMaxSlots,
          rootBalance: user.rootBalance - 5000
        });

        resolve({
          status: 200,
          body: { 
            success: true,
            maxSlots: newMaxSlots,
            rootBalance: user.rootBalance - 5000
          }
        });
      } catch (error) {
        console.error('Error updating max slots:', error);
        resolve({ 
          status: 500, 
          body: { error: 'Failed to update max slots' } 
        });
      }
    });
  });
},
  '/admin/broadcast': async (req, res) => {
    const authError = await authMiddleware(req, res);
    if (authError) return authError;
    
    let body = '';
    req.on('data', chunk => { body += chunk; });
    
    return new Promise((resolve) => {
        req.on('end', async () => {
            try {
                const data = JSON.parse(body);
                const adminId = data.adminId.toString();
                
                if (!isAdmin(adminId)) {  // Используем функцию isAdmin
                    resolve({
                        status: 403,
                        body: { error: 'Unauthorized: Admin access required' }
                    });
                    return;
                }
  
                      const { message, button } = data;
                      
                      // Получаем всех пользователей
                      const users = await User.findAll();
                      const results = {
                          total: users.length,
                          success: 0,
                          failed: 0
                      };
  
                      // Отправляем сообщение каждому пользователю
                      for (const user of users) {
                          try {
                              const messageData = {
                                  chat_id: user.telegramId,
                                  text: message,
                                  parse_mode: 'HTML'
                              };
  
                              // Если есть кнопка, добавляем её
                              if (button) {
                                  messageData.reply_markup = {
                                      inline_keyboard: [[{
                                          text: button.text,
                                          web_app: { url: button.url }
                                      }]]
                                  };
                              }
  
                              await bot.telegram.sendMessage(
                                  user.telegramId,
                                  message,
                                  messageData
                              );
                              results.success++;
                          } catch (error) {
                              console.error(`Failed to send message to ${user.telegramId}:`, error);
                              results.failed++;
                          }
                          
                          // Добавляем задержку между сообщениями
                          await new Promise(resolve => setTimeout(resolve, 50));
                      }
  
                      resolve({
                          status: 200,
                          body: { 
                              success: true,
                              results
                          }
                      });
                  } catch (error) {
                      console.error('Error in broadcast:', error);
                      resolve({ 
                          status: 500, 
                          body: { error: 'Internal server error: ' + error.message }
                      });
                  }
              });
          });
      }
    }
  };

// Функция для обработки статических файлов
const serveStaticFile = (filePath, res) => {
  const extname = String(path.extname(filePath)).toLowerCase();
  const contentType = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.webp': 'image/webp',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
  }[extname] || 'application/octet-stream';

  fs.readFile(filePath, (error, content) => {
    if (error) {
      if(error.code === 'ENOENT') {
        // Если файл не найден, возвращаем index.html для SPA
        fs.readFile(path.join(__dirname, 'dist', 'index.html'), (error, content) => {
          if (error) {
            res.writeHead(404);
            res.end('Файл не найден');
          } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content, 'utf-8');
          }
        });
      } else {
        res.writeHead(500);
        res.end('Ошибка сервера: ' + error.code);
      }
    } else {
      // Добавляем заголовки кеширования для изображений
      const headers = { 'Content-Type': contentType };
      
      // Если это изображение, добавляем заголовки кеширования
      if (['.png', '.jpg', '.webp', '.gif', '.svg'].includes(extname)) {
        // Кешировать на 1 неделю (604800 секунд)
        headers['Cache-Control'] = 'public, max-age=604800, immutable';
        headers['Expires'] = new Date(Date.now() + 604800000).toUTCString();
      }
      
      res.writeHead(200, headers);
      res.end(content, 'utf-8');
    }
  });
};

const options = {
    key: fs.readFileSync('/etc/letsencrypt/live/pokoapp.space/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/pokoapp.space/fullchain.pem')
};
//
const server = https.createServer(options, async (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const method = req.method;

  // Логируем только не-статические запросы
  if (!pathname.startsWith('/assets/') && !pathname.includes('.jpg')) {
    console.log('Incoming request:', { 
      method, 
      pathname,
      query: parsedUrl.query 
    });
  }

  // Проверяем существование роута в routes
  if (routes[method]?.[pathname]) {
    try {
      const handler = routes[method][pathname];
      const result = await handler(req, res, parsedUrl.query);
      
      res.writeHead(result.status, { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type, X-Telegram-Init-Data'
      });
      
      res.end(JSON.stringify(result.body));
      return;
    } catch (error) {
      console.error('Route handler error:', error);
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Internal Server Error' }));
      return;
    }
  }

  // Если роут не найден - обрабатываем как статический файл
  let filePath = path.join(__dirname, 'dist', req.url === '/' ? 'index.html' : req.url);
  serveStaticFile(filePath, res);
});

const httpsPort = 999;
const httpPort = 997;

server.listen(httpsPort, () => {
  console.log(`HTTPS Сервер запущен на порту ${httpsPort}`);
  console.log('Telegram бот запущен');
  console.log(`HTTPS Сервер запущен на https://pokoapp.space`);
});

// HTTP to HTTPS redirect
http.createServer((req, res) => {
  res.writeHead(301, { "Location": "https://" + req.headers['host'] + req.url });
  res.end();
}).listen(httpPort, () => {
  console.log(`HTTP сервер запущен на порту ${httpPort} для перенаправления на HTTPS`);
});

// Graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));