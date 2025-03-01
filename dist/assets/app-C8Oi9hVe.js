(async () => {
  (function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
    new MutationObserver((l) => {
      for (const o of l) if (o.type === "childList") for (const i of o.addedNodes) i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function n(l) {
      const o = {};
      return l.integrity && (o.integrity = l.integrity), l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy), l.crossOrigin === "use-credentials" ? o.credentials = "include" : l.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o;
    }
    function r(l) {
      if (l.ep) return;
      l.ep = true;
      const o = n(l);
      fetch(l.href, o);
    }
  })();
  function Nd(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
  }
  var Xa = {
    exports: {}
  }, Ml = {}, Ja = {
    exports: {}
  }, I = {};
  var kr = Symbol.for("react.element"), Sd = Symbol.for("react.portal"), Cd = Symbol.for("react.fragment"), Ed = Symbol.for("react.strict_mode"), Pd = Symbol.for("react.profiler"), _d = Symbol.for("react.provider"), Ld = Symbol.for("react.context"), Fd = Symbol.for("react.forward_ref"), Rd = Symbol.for("react.suspense"), Td = Symbol.for("react.memo"), Od = Symbol.for("react.lazy"), Ls = Symbol.iterator;
  function Md(e) {
    return e === null || typeof e != "object" ? null : (e = Ls && e[Ls] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Za = {
    isMounted: function() {
      return false;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, qa = Object.assign, eu = {};
  function En(e, t, n) {
    this.props = e, this.context = t, this.refs = eu, this.updater = n || Za;
  }
  En.prototype.isReactComponent = {};
  En.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState");
  };
  En.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
  };
  function tu() {
  }
  tu.prototype = En.prototype;
  function Ei(e, t, n) {
    this.props = e, this.context = t, this.refs = eu, this.updater = n || Za;
  }
  var Pi = Ei.prototype = new tu();
  Pi.constructor = Ei;
  qa(Pi, En.prototype);
  Pi.isPureReactComponent = true;
  var Fs = Array.isArray, nu = Object.prototype.hasOwnProperty, _i = {
    current: null
  }, ru = {
    key: true,
    ref: true,
    __self: true,
    __source: true
  };
  function lu(e, t, n) {
    var r, l = {}, o = null, i = null;
    if (t != null) for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (o = "" + t.key), t) nu.call(t, r) && !ru.hasOwnProperty(r) && (l[r] = t[r]);
    var u = arguments.length - 2;
    if (u === 1) l.children = n;
    else if (1 < u) {
      for (var a = Array(u), c = 0; c < u; c++) a[c] = arguments[c + 2];
      l.children = a;
    }
    if (e && e.defaultProps) for (r in u = e.defaultProps, u) l[r] === void 0 && (l[r] = u[r]);
    return {
      $$typeof: kr,
      type: e,
      key: o,
      ref: i,
      props: l,
      _owner: _i.current
    };
  }
  function Id(e, t) {
    return {
      $$typeof: kr,
      type: e.type,
      key: t,
      ref: e.ref,
      props: e.props,
      _owner: e._owner
    };
  }
  function Li(e) {
    return typeof e == "object" && e !== null && e.$$typeof === kr;
  }
  function Ad(e) {
    var t = {
      "=": "=0",
      ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
      return t[n];
    });
  }
  var Rs = /\/+/g;
  function to(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Ad("" + e.key) : t.toString(36);
  }
  function Xr(e, t, n, r, l) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var i = false;
    if (e === null) i = true;
    else switch (o) {
      case "string":
      case "number":
        i = true;
        break;
      case "object":
        switch (e.$$typeof) {
          case kr:
          case Sd:
            i = true;
        }
    }
    if (i) return i = e, l = l(i), e = r === "" ? "." + to(i, 0) : r, Fs(l) ? (n = "", e != null && (n = e.replace(Rs, "$&/") + "/"), Xr(l, t, n, "", function(c) {
      return c;
    })) : l != null && (Li(l) && (l = Id(l, n + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(Rs, "$&/") + "/") + e)), t.push(l)), 1;
    if (i = 0, r = r === "" ? "." : r + ":", Fs(e)) for (var u = 0; u < e.length; u++) {
      o = e[u];
      var a = r + to(o, u);
      i += Xr(o, t, n, a, l);
    }
    else if (a = Md(e), typeof a == "function") for (e = a.call(e), u = 0; !(o = e.next()).done; ) o = o.value, a = r + to(o, u++), i += Xr(o, t, n, a, l);
    else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return i;
  }
  function Fr(e, t, n) {
    if (e == null) return e;
    var r = [], l = 0;
    return Xr(e, r, "", "", function(o) {
      return t.call(n, o, l++);
    }), r;
  }
  function zd(e) {
    if (e._status === -1) {
      var t = e._result;
      t = t(), t.then(function(n) {
        (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
      }, function(n) {
        (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
      }), e._status === -1 && (e._status = 0, e._result = t);
    }
    if (e._status === 1) return e._result.default;
    throw e._result;
  }
  var me = {
    current: null
  }, Jr = {
    transition: null
  }, Dd = {
    ReactCurrentDispatcher: me,
    ReactCurrentBatchConfig: Jr,
    ReactCurrentOwner: _i
  };
  function ou() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  I.Children = {
    map: Fr,
    forEach: function(e, t, n) {
      Fr(e, function() {
        t.apply(this, arguments);
      }, n);
    },
    count: function(e) {
      var t = 0;
      return Fr(e, function() {
        t++;
      }), t;
    },
    toArray: function(e) {
      return Fr(e, function(t) {
        return t;
      }) || [];
    },
    only: function(e) {
      if (!Li(e)) throw Error("React.Children.only expected to receive a single React element child.");
      return e;
    }
  };
  I.Component = En;
  I.Fragment = Cd;
  I.Profiler = Pd;
  I.PureComponent = Ei;
  I.StrictMode = Ed;
  I.Suspense = Rd;
  I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Dd;
  I.act = ou;
  I.cloneElement = function(e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = qa({}, e.props), l = e.key, o = e.ref, i = e._owner;
    if (t != null) {
      if (t.ref !== void 0 && (o = t.ref, i = _i.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
      for (a in t) nu.call(t, a) && !ru.hasOwnProperty(a) && (r[a] = t[a] === void 0 && u !== void 0 ? u[a] : t[a]);
    }
    var a = arguments.length - 2;
    if (a === 1) r.children = n;
    else if (1 < a) {
      u = Array(a);
      for (var c = 0; c < a; c++) u[c] = arguments[c + 2];
      r.children = u;
    }
    return {
      $$typeof: kr,
      type: e.type,
      key: l,
      ref: o,
      props: r,
      _owner: i
    };
  };
  I.createContext = function(e) {
    return e = {
      $$typeof: Ld,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null
    }, e.Provider = {
      $$typeof: _d,
      _context: e
    }, e.Consumer = e;
  };
  I.createElement = lu;
  I.createFactory = function(e) {
    var t = lu.bind(null, e);
    return t.type = e, t;
  };
  I.createRef = function() {
    return {
      current: null
    };
  };
  I.forwardRef = function(e) {
    return {
      $$typeof: Fd,
      render: e
    };
  };
  I.isValidElement = Li;
  I.lazy = function(e) {
    return {
      $$typeof: Od,
      _payload: {
        _status: -1,
        _result: e
      },
      _init: zd
    };
  };
  I.memo = function(e, t) {
    return {
      $$typeof: Td,
      type: e,
      compare: t === void 0 ? null : t
    };
  };
  I.startTransition = function(e) {
    var t = Jr.transition;
    Jr.transition = {};
    try {
      e();
    } finally {
      Jr.transition = t;
    }
  };
  I.unstable_act = ou;
  I.useCallback = function(e, t) {
    return me.current.useCallback(e, t);
  };
  I.useContext = function(e) {
    return me.current.useContext(e);
  };
  I.useDebugValue = function() {
  };
  I.useDeferredValue = function(e) {
    return me.current.useDeferredValue(e);
  };
  I.useEffect = function(e, t) {
    return me.current.useEffect(e, t);
  };
  I.useId = function() {
    return me.current.useId();
  };
  I.useImperativeHandle = function(e, t, n) {
    return me.current.useImperativeHandle(e, t, n);
  };
  I.useInsertionEffect = function(e, t) {
    return me.current.useInsertionEffect(e, t);
  };
  I.useLayoutEffect = function(e, t) {
    return me.current.useLayoutEffect(e, t);
  };
  I.useMemo = function(e, t) {
    return me.current.useMemo(e, t);
  };
  I.useReducer = function(e, t, n) {
    return me.current.useReducer(e, t, n);
  };
  I.useRef = function(e) {
    return me.current.useRef(e);
  };
  I.useState = function(e) {
    return me.current.useState(e);
  };
  I.useSyncExternalStore = function(e, t, n) {
    return me.current.useSyncExternalStore(e, t, n);
  };
  I.useTransition = function() {
    return me.current.useTransition();
  };
  I.version = "18.3.1";
  Ja.exports = I;
  var v = Ja.exports;
  const Fo = Nd(v);
  var $d = v, Bd = Symbol.for("react.element"), Ud = Symbol.for("react.fragment"), Wd = Object.prototype.hasOwnProperty, Hd = $d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Vd = {
    key: true,
    ref: true,
    __self: true,
    __source: true
  };
  function iu(e, t, n) {
    var r, l = {}, o = null, i = null;
    n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (i = t.ref);
    for (r in t) Wd.call(t, r) && !Vd.hasOwnProperty(r) && (l[r] = t[r]);
    if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
    return {
      $$typeof: Bd,
      type: e,
      key: o,
      ref: i,
      props: l,
      _owner: Hd.current
    };
  }
  Ml.Fragment = Ud;
  Ml.jsx = iu;
  Ml.jsxs = iu;
  Xa.exports = Ml;
  var s = Xa.exports, Ro = {}, su = {
    exports: {}
  }, Ce = {}, au = {
    exports: {}
  }, uu = {};
  (function(e) {
    function t(F, L) {
      var P = F.length;
      F.push(L);
      e: for (; 0 < P; ) {
        var T = P - 1 >>> 1, O = F[T];
        if (0 < l(O, L)) F[T] = L, F[P] = O, P = T;
        else break e;
      }
    }
    function n(F) {
      return F.length === 0 ? null : F[0];
    }
    function r(F) {
      if (F.length === 0) return null;
      var L = F[0], P = F.pop();
      if (P !== L) {
        F[0] = P;
        e: for (var T = 0, O = F.length, G = O >>> 1; T < G; ) {
          var Z = 2 * (T + 1) - 1, Mt = F[Z], Me = Z + 1, Ie = F[Me];
          if (0 > l(Mt, P)) Me < O && 0 > l(Ie, Mt) ? (F[T] = Ie, F[Me] = P, T = Me) : (F[T] = Mt, F[Z] = P, T = Z);
          else if (Me < O && 0 > l(Ie, P)) F[T] = Ie, F[Me] = P, T = Me;
          else break e;
        }
      }
      return L;
    }
    function l(F, L) {
      var P = F.sortIndex - L.sortIndex;
      return P !== 0 ? P : F.id - L.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var o = performance;
      e.unstable_now = function() {
        return o.now();
      };
    } else {
      var i = Date, u = i.now();
      e.unstable_now = function() {
        return i.now() - u;
      };
    }
    var a = [], c = [], p = 1, h = null, g = 3, w = false, b = false, x = false, N = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, d = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function m(F) {
      for (var L = n(c); L !== null; ) {
        if (L.callback === null) r(c);
        else if (L.startTime <= F) r(c), L.sortIndex = L.expirationTime, t(a, L);
        else break;
        L = n(c);
      }
    }
    function y(F) {
      if (x = false, m(F), !b) if (n(a) !== null) b = true, ft(j);
      else {
        var L = n(c);
        L !== null && On(y, L.startTime - F);
      }
    }
    function j(F, L) {
      b = false, x && (x = false, f(E), E = -1), w = true;
      var P = g;
      try {
        for (m(L), h = n(a); h !== null && (!(h.expirationTime > L) || F && !X()); ) {
          var T = h.callback;
          if (typeof T == "function") {
            h.callback = null, g = h.priorityLevel;
            var O = T(h.expirationTime <= L);
            L = e.unstable_now(), typeof O == "function" ? h.callback = O : h === n(a) && r(a), m(L);
          } else r(a);
          h = n(a);
        }
        if (h !== null) var G = true;
        else {
          var Z = n(c);
          Z !== null && On(y, Z.startTime - L), G = false;
        }
        return G;
      } finally {
        h = null, g = P, w = false;
      }
    }
    var S = false, k = null, E = -1, _ = 5, M = -1;
    function X() {
      return !(e.unstable_now() - M < _);
    }
    function Pe() {
      if (k !== null) {
        var F = e.unstable_now();
        M = F;
        var L = true;
        try {
          L = k(true, F);
        } finally {
          L ? qe() : (S = false, k = null);
        }
      } else S = false;
    }
    var qe;
    if (typeof d == "function") qe = function() {
      d(Pe);
    };
    else if (typeof MessageChannel < "u") {
      var Jt = new MessageChannel(), Zt = Jt.port2;
      Jt.port1.onmessage = Pe, qe = function() {
        Zt.postMessage(null);
      };
    } else qe = function() {
      N(Pe, 0);
    };
    function ft(F) {
      k = F, S || (S = true, qe());
    }
    function On(F, L) {
      E = N(function() {
        F(e.unstable_now());
      }, L);
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(F) {
      F.callback = null;
    }, e.unstable_continueExecution = function() {
      b || w || (b = true, ft(j));
    }, e.unstable_forceFrameRate = function(F) {
      0 > F || 125 < F ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : _ = 0 < F ? Math.floor(1e3 / F) : 5;
    }, e.unstable_getCurrentPriorityLevel = function() {
      return g;
    }, e.unstable_getFirstCallbackNode = function() {
      return n(a);
    }, e.unstable_next = function(F) {
      switch (g) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = g;
      }
      var P = g;
      g = L;
      try {
        return F();
      } finally {
        g = P;
      }
    }, e.unstable_pauseExecution = function() {
    }, e.unstable_requestPaint = function() {
    }, e.unstable_runWithPriority = function(F, L) {
      switch (F) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          F = 3;
      }
      var P = g;
      g = F;
      try {
        return L();
      } finally {
        g = P;
      }
    }, e.unstable_scheduleCallback = function(F, L, P) {
      var T = e.unstable_now();
      switch (typeof P == "object" && P !== null ? (P = P.delay, P = typeof P == "number" && 0 < P ? T + P : T) : P = T, F) {
        case 1:
          var O = -1;
          break;
        case 2:
          O = 250;
          break;
        case 5:
          O = 1073741823;
          break;
        case 4:
          O = 1e4;
          break;
        default:
          O = 5e3;
      }
      return O = P + O, F = {
        id: p++,
        callback: L,
        priorityLevel: F,
        startTime: P,
        expirationTime: O,
        sortIndex: -1
      }, P > T ? (F.sortIndex = P, t(c, F), n(a) === null && F === n(c) && (x ? (f(E), E = -1) : x = true, On(y, P - T))) : (F.sortIndex = O, t(a, F), b || w || (b = true, ft(j))), F;
    }, e.unstable_shouldYield = X, e.unstable_wrapCallback = function(F) {
      var L = g;
      return function() {
        var P = g;
        g = L;
        try {
          return F.apply(this, arguments);
        } finally {
          g = P;
        }
      };
    };
  })(uu);
  au.exports = uu;
  var Kd = au.exports;
  var Qd = v, Se = Kd;
  function C(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var cu = /* @__PURE__ */ new Set(), rr = {};
  function Yt(e, t) {
    wn(e, t), wn(e + "Capture", t);
  }
  function wn(e, t) {
    for (rr[e] = t, e = 0; e < t.length; e++) cu.add(t[e]);
  }
  var it = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), To = Object.prototype.hasOwnProperty, Gd = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ts = {}, Os = {};
  function Yd(e) {
    return To.call(Os, e) ? true : To.call(Ts, e) ? false : Gd.test(e) ? Os[e] = true : (Ts[e] = true, false);
  }
  function Xd(e, t, n, r) {
    if (n !== null && n.type === 0) return false;
    switch (typeof t) {
      case "function":
      case "symbol":
        return true;
      case "boolean":
        return r ? false : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return false;
    }
  }
  function Jd(e, t, n, r) {
    if (t === null || typeof t > "u" || Xd(e, t, n, r)) return true;
    if (r) return false;
    if (n !== null) switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === false;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
    return false;
  }
  function pe(e, t, n, r, l, o, i) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = i;
  }
  var ie = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    ie[e] = new pe(e, 0, false, e, null, false, false);
  });
  [
    [
      "acceptCharset",
      "accept-charset"
    ],
    [
      "className",
      "class"
    ],
    [
      "htmlFor",
      "for"
    ],
    [
      "httpEquiv",
      "http-equiv"
    ]
  ].forEach(function(e) {
    var t = e[0];
    ie[t] = new pe(t, 1, false, e[1], null, false, false);
  });
  [
    "contentEditable",
    "draggable",
    "spellCheck",
    "value"
  ].forEach(function(e) {
    ie[e] = new pe(e, 2, false, e.toLowerCase(), null, false, false);
  });
  [
    "autoReverse",
    "externalResourcesRequired",
    "focusable",
    "preserveAlpha"
  ].forEach(function(e) {
    ie[e] = new pe(e, 2, false, e, null, false, false);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    ie[e] = new pe(e, 3, false, e.toLowerCase(), null, false, false);
  });
  [
    "checked",
    "multiple",
    "muted",
    "selected"
  ].forEach(function(e) {
    ie[e] = new pe(e, 3, true, e, null, false, false);
  });
  [
    "capture",
    "download"
  ].forEach(function(e) {
    ie[e] = new pe(e, 4, false, e, null, false, false);
  });
  [
    "cols",
    "rows",
    "size",
    "span"
  ].forEach(function(e) {
    ie[e] = new pe(e, 6, false, e, null, false, false);
  });
  [
    "rowSpan",
    "start"
  ].forEach(function(e) {
    ie[e] = new pe(e, 5, false, e.toLowerCase(), null, false, false);
  });
  var Fi = /[\-:]([a-z])/g;
  function Ri(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Fi, Ri);
    ie[t] = new pe(t, 1, false, e, null, false, false);
  });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Fi, Ri);
    ie[t] = new pe(t, 1, false, e, "http://www.w3.org/1999/xlink", false, false);
  });
  [
    "xml:base",
    "xml:lang",
    "xml:space"
  ].forEach(function(e) {
    var t = e.replace(Fi, Ri);
    ie[t] = new pe(t, 1, false, e, "http://www.w3.org/XML/1998/namespace", false, false);
  });
  [
    "tabIndex",
    "crossOrigin"
  ].forEach(function(e) {
    ie[e] = new pe(e, 1, false, e.toLowerCase(), null, false, false);
  });
  ie.xlinkHref = new pe("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
  [
    "src",
    "href",
    "action",
    "formAction"
  ].forEach(function(e) {
    ie[e] = new pe(e, 1, false, e.toLowerCase(), null, true, true);
  });
  function Ti(e, t, n, r) {
    var l = ie.hasOwnProperty(t) ? ie[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Jd(t, n, l, r) && (n = null), r || l === null ? Yd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? false : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === true ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var ct = Qd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Rr = Symbol.for("react.element"), tn = Symbol.for("react.portal"), nn = Symbol.for("react.fragment"), Oi = Symbol.for("react.strict_mode"), Oo = Symbol.for("react.profiler"), du = Symbol.for("react.provider"), fu = Symbol.for("react.context"), Mi = Symbol.for("react.forward_ref"), Mo = Symbol.for("react.suspense"), Io = Symbol.for("react.suspense_list"), Ii = Symbol.for("react.memo"), ht = Symbol.for("react.lazy"), mu = Symbol.for("react.offscreen"), Ms = Symbol.iterator;
  function Mn(e) {
    return e === null || typeof e != "object" ? null : (e = Ms && e[Ms] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Q = Object.assign, no;
  function Hn(e) {
    if (no === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      no = t && t[1] || "";
    }
    return `
` + no + e;
  }
  var ro = false;
  function lo(e, t) {
    if (!e || ro) return "";
    ro = true;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t) if (t = function() {
        throw Error();
      }, Object.defineProperty(t.prototype, "props", {
        set: function() {
          throw Error();
        }
      }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (c) {
          r = c;
        }
        e();
      }
    } catch (c) {
      if (c && r && typeof c.stack == "string") {
        for (var l = c.stack.split(`
`), o = r.stack.split(`
`), i = l.length - 1, u = o.length - 1; 1 <= i && 0 <= u && l[i] !== o[u]; ) u--;
        for (; 1 <= i && 0 <= u; i--, u--) if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1) do
            if (i--, u--, 0 > u || l[i] !== o[u]) {
              var a = `
` + l[i].replace(" at new ", " at ");
              return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a;
            }
          while (1 <= i && 0 <= u);
          break;
        }
      }
    } finally {
      ro = false, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? Hn(e) : "";
  }
  function Zd(e) {
    switch (e.tag) {
      case 5:
        return Hn(e.type);
      case 16:
        return Hn("Lazy");
      case 13:
        return Hn("Suspense");
      case 19:
        return Hn("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = lo(e.type, false), e;
      case 11:
        return e = lo(e.type.render, false), e;
      case 1:
        return e = lo(e.type, true), e;
      default:
        return "";
    }
  }
  function Ao(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case nn:
        return "Fragment";
      case tn:
        return "Portal";
      case Oo:
        return "Profiler";
      case Oi:
        return "StrictMode";
      case Mo:
        return "Suspense";
      case Io:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case fu:
        return (e.displayName || "Context") + ".Consumer";
      case du:
        return (e._context.displayName || "Context") + ".Provider";
      case Mi:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Ii:
        return t = e.displayName || null, t !== null ? t : Ao(e.type) || "Memo";
      case ht:
        t = e._payload, e = e._init;
        try {
          return Ao(e(t));
        } catch {
        }
    }
    return null;
  }
  function qd(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Ao(t);
      case 8:
        return t === Oi ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function _t(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function pu(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function ef(e) {
    var t = pu(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var l = n.get, o = n.set;
      return Object.defineProperty(e, t, {
        configurable: true,
        get: function() {
          return l.call(this);
        },
        set: function(i) {
          r = "" + i, o.call(this, i);
        }
      }), Object.defineProperty(e, t, {
        enumerable: n.enumerable
      }), {
        getValue: function() {
          return r;
        },
        setValue: function(i) {
          r = "" + i;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function Tr(e) {
    e._valueTracker || (e._valueTracker = ef(e));
  }
  function hu(e) {
    if (!e) return false;
    var t = e._valueTracker;
    if (!t) return true;
    var n = t.getValue(), r = "";
    return e && (r = pu(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), true) : false;
  }
  function cl(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function zo(e, t) {
    var n = t.checked;
    return Q({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked
    });
  }
  function Is(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = _t(t.value != null ? t.value : n), e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    };
  }
  function gu(e, t) {
    t = t.checked, t != null && Ti(e, "checked", t, false);
  }
  function Do(e, t) {
    gu(e, t);
    var n = _t(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? $o(e, t.type, n) : t.hasOwnProperty("defaultValue") && $o(e, t.type, _t(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function As(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function $o(e, t, n) {
    (t !== "number" || cl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Vn = Array.isArray;
  function pn(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = true;
      for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = true);
    } else {
      for (n = "" + _t(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          e[l].selected = true, r && (e[l].defaultSelected = true);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = true);
    }
  }
  function Bo(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(C(91));
    return Q({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue
    });
  }
  function zs(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(C(92));
        if (Vn(n)) {
          if (1 < n.length) throw Error(C(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = {
      initialValue: _t(n)
    };
  }
  function vu(e, t) {
    var n = _t(t.value), r = _t(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function Ds(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function yu(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Uo(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? yu(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var Or, xu = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, l);
      });
    } : e;
  }(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (Or = Or || document.createElement("div"), Or.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Or.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function lr(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Gn = {
    animationIterationCount: true,
    aspectRatio: true,
    borderImageOutset: true,
    borderImageSlice: true,
    borderImageWidth: true,
    boxFlex: true,
    boxFlexGroup: true,
    boxOrdinalGroup: true,
    columnCount: true,
    columns: true,
    flex: true,
    flexGrow: true,
    flexPositive: true,
    flexShrink: true,
    flexNegative: true,
    flexOrder: true,
    gridArea: true,
    gridRow: true,
    gridRowEnd: true,
    gridRowSpan: true,
    gridRowStart: true,
    gridColumn: true,
    gridColumnEnd: true,
    gridColumnSpan: true,
    gridColumnStart: true,
    fontWeight: true,
    lineClamp: true,
    lineHeight: true,
    opacity: true,
    order: true,
    orphans: true,
    tabSize: true,
    widows: true,
    zIndex: true,
    zoom: true,
    fillOpacity: true,
    floodOpacity: true,
    stopOpacity: true,
    strokeDasharray: true,
    strokeDashoffset: true,
    strokeMiterlimit: true,
    strokeOpacity: true,
    strokeWidth: true
  }, tf = [
    "Webkit",
    "ms",
    "Moz",
    "O"
  ];
  Object.keys(Gn).forEach(function(e) {
    tf.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), Gn[t] = Gn[e];
    });
  });
  function wu(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Gn.hasOwnProperty(e) && Gn[e] ? ("" + t).trim() : t + "px";
  }
  function bu(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, l = wu(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
    }
  }
  var nf = Q({
    menuitem: true
  }, {
    area: true,
    base: true,
    br: true,
    col: true,
    embed: true,
    hr: true,
    img: true,
    input: true,
    keygen: true,
    link: true,
    meta: true,
    param: true,
    source: true,
    track: true,
    wbr: true
  });
  function Wo(e, t) {
    if (t) {
      if (nf[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(C(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(C(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(C(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(C(62));
    }
  }
  function Ho(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return false;
      default:
        return true;
    }
  }
  var Vo = null;
  function Ai(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Ko = null, hn = null, gn = null;
  function $s(e) {
    if (e = Sr(e)) {
      if (typeof Ko != "function") throw Error(C(280));
      var t = e.stateNode;
      t && (t = $l(t), Ko(e.stateNode, e.type, t));
    }
  }
  function ku(e) {
    hn ? gn ? gn.push(e) : gn = [
      e
    ] : hn = e;
  }
  function ju() {
    if (hn) {
      var e = hn, t = gn;
      if (gn = hn = null, $s(e), t) for (e = 0; e < t.length; e++) $s(t[e]);
    }
  }
  function Nu(e, t) {
    return e(t);
  }
  function Su() {
  }
  var oo = false;
  function Cu(e, t, n) {
    if (oo) return e(t, n);
    oo = true;
    try {
      return Nu(e, t, n);
    } finally {
      oo = false, (hn !== null || gn !== null) && (Su(), ju());
    }
  }
  function or(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = $l(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
      default:
        e = false;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(C(231, t, typeof n));
    return n;
  }
  var Qo = false;
  if (it) try {
    var In = {};
    Object.defineProperty(In, "passive", {
      get: function() {
        Qo = true;
      }
    }), window.addEventListener("test", In, In), window.removeEventListener("test", In, In);
  } catch {
    Qo = false;
  }
  function rf(e, t, n, r, l, o, i, u, a) {
    var c = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, c);
    } catch (p) {
      this.onError(p);
    }
  }
  var Yn = false, dl = null, fl = false, Go = null, lf = {
    onError: function(e) {
      Yn = true, dl = e;
    }
  };
  function of(e, t, n, r, l, o, i, u, a) {
    Yn = false, dl = null, rf.apply(lf, arguments);
  }
  function sf(e, t, n, r, l, o, i, u, a) {
    if (of.apply(this, arguments), Yn) {
      if (Yn) {
        var c = dl;
        Yn = false, dl = null;
      } else throw Error(C(198));
      fl || (fl = true, Go = c);
    }
  }
  function Xt(e) {
    var t = e, n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, t.flags & 4098 && (n = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function Eu(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function Bs(e) {
    if (Xt(e) !== e) throw Error(C(188));
  }
  function af(e) {
    var t = e.alternate;
    if (!t) {
      if (t = Xt(e), t === null) throw Error(C(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var o = l.alternate;
      if (o === null) {
        if (r = l.return, r !== null) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === o.child) {
        for (o = l.child; o; ) {
          if (o === n) return Bs(l), e;
          if (o === r) return Bs(l), t;
          o = o.sibling;
        }
        throw Error(C(188));
      }
      if (n.return !== r.return) n = l, r = o;
      else {
        for (var i = false, u = l.child; u; ) {
          if (u === n) {
            i = true, n = l, r = o;
            break;
          }
          if (u === r) {
            i = true, r = l, n = o;
            break;
          }
          u = u.sibling;
        }
        if (!i) {
          for (u = o.child; u; ) {
            if (u === n) {
              i = true, n = o, r = l;
              break;
            }
            if (u === r) {
              i = true, r = o, n = l;
              break;
            }
            u = u.sibling;
          }
          if (!i) throw Error(C(189));
        }
      }
      if (n.alternate !== r) throw Error(C(190));
    }
    if (n.tag !== 3) throw Error(C(188));
    return n.stateNode.current === n ? e : t;
  }
  function Pu(e) {
    return e = af(e), e !== null ? _u(e) : null;
  }
  function _u(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = _u(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Lu = Se.unstable_scheduleCallback, Us = Se.unstable_cancelCallback, uf = Se.unstable_shouldYield, cf = Se.unstable_requestPaint, J = Se.unstable_now, df = Se.unstable_getCurrentPriorityLevel, zi = Se.unstable_ImmediatePriority, Fu = Se.unstable_UserBlockingPriority, ml = Se.unstable_NormalPriority, ff = Se.unstable_LowPriority, Ru = Se.unstable_IdlePriority, Il = null, Ye = null;
  function mf(e) {
    if (Ye && typeof Ye.onCommitFiberRoot == "function") try {
      Ye.onCommitFiberRoot(Il, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var Be = Math.clz32 ? Math.clz32 : gf, pf = Math.log, hf = Math.LN2;
  function gf(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (pf(e) / hf | 0) | 0;
  }
  var Mr = 64, Ir = 4194304;
  function Kn(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function pl(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, l = e.suspendedLanes, o = e.pingedLanes, i = n & 268435455;
    if (i !== 0) {
      var u = i & ~l;
      u !== 0 ? r = Kn(u) : (o &= i, o !== 0 && (r = Kn(o)));
    } else i = n & ~l, i !== 0 ? r = Kn(i) : o !== 0 && (r = Kn(o));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & l) && (l = r & -r, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Be(t), l = 1 << n, r |= e[n], t &= ~l;
    return r;
  }
  function vf(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function yf(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
      var i = 31 - Be(o), u = 1 << i, a = l[i];
      a === -1 ? (!(u & n) || u & r) && (l[i] = vf(u, t)) : a <= t && (e.expiredLanes |= u), o &= ~u;
    }
  }
  function Yo(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Tu() {
    var e = Mr;
    return Mr <<= 1, !(Mr & 4194240) && (Mr = 64), e;
  }
  function io(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function jr(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Be(t), e[t] = n;
  }
  function xf(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - Be(n), o = 1 << l;
      t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o;
    }
  }
  function Di(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - Be(n), l = 1 << r;
      l & t | e[r] & t && (e[r] |= t), n &= ~l;
    }
  }
  var z = 0;
  function Ou(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Mu, $i, Iu, Au, zu, Xo = false, Ar = [], bt = null, kt = null, jt = null, ir = /* @__PURE__ */ new Map(), sr = /* @__PURE__ */ new Map(), vt = [], wf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Ws(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        bt = null;
        break;
      case "dragenter":
      case "dragleave":
        kt = null;
        break;
      case "mouseover":
      case "mouseout":
        jt = null;
        break;
      case "pointerover":
      case "pointerout":
        ir.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        sr.delete(t.pointerId);
    }
  }
  function An(e, t, n, r, l, o) {
    return e === null || e.nativeEvent !== o ? (e = {
      blockedOn: t,
      domEventName: n,
      eventSystemFlags: r,
      nativeEvent: o,
      targetContainers: [
        l
      ]
    }, t !== null && (t = Sr(t), t !== null && $i(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function bf(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return bt = An(bt, e, t, n, r, l), true;
      case "dragenter":
        return kt = An(kt, e, t, n, r, l), true;
      case "mouseover":
        return jt = An(jt, e, t, n, r, l), true;
      case "pointerover":
        var o = l.pointerId;
        return ir.set(o, An(ir.get(o) || null, e, t, n, r, l)), true;
      case "gotpointercapture":
        return o = l.pointerId, sr.set(o, An(sr.get(o) || null, e, t, n, r, l)), true;
    }
    return false;
  }
  function Du(e) {
    var t = Dt(e.target);
    if (t !== null) {
      var n = Xt(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = Eu(n), t !== null) {
            e.blockedOn = t, zu(e.priority, function() {
              Iu(n);
            });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Zr(e) {
    if (e.blockedOn !== null) return false;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Jo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        Vo = r, n.target.dispatchEvent(r), Vo = null;
      } else return t = Sr(n), t !== null && $i(t), e.blockedOn = n, false;
      t.shift();
    }
    return true;
  }
  function Hs(e, t, n) {
    Zr(e) && n.delete(t);
  }
  function kf() {
    Xo = false, bt !== null && Zr(bt) && (bt = null), kt !== null && Zr(kt) && (kt = null), jt !== null && Zr(jt) && (jt = null), ir.forEach(Hs), sr.forEach(Hs);
  }
  function zn(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Xo || (Xo = true, Se.unstable_scheduleCallback(Se.unstable_NormalPriority, kf)));
  }
  function ar(e) {
    function t(l) {
      return zn(l, e);
    }
    if (0 < Ar.length) {
      zn(Ar[0], e);
      for (var n = 1; n < Ar.length; n++) {
        var r = Ar[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (bt !== null && zn(bt, e), kt !== null && zn(kt, e), jt !== null && zn(jt, e), ir.forEach(t), sr.forEach(t), n = 0; n < vt.length; n++) r = vt[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < vt.length && (n = vt[0], n.blockedOn === null); ) Du(n), n.blockedOn === null && vt.shift();
  }
  var vn = ct.ReactCurrentBatchConfig, hl = true;
  function jf(e, t, n, r) {
    var l = z, o = vn.transition;
    vn.transition = null;
    try {
      z = 1, Bi(e, t, n, r);
    } finally {
      z = l, vn.transition = o;
    }
  }
  function Nf(e, t, n, r) {
    var l = z, o = vn.transition;
    vn.transition = null;
    try {
      z = 4, Bi(e, t, n, r);
    } finally {
      z = l, vn.transition = o;
    }
  }
  function Bi(e, t, n, r) {
    if (hl) {
      var l = Jo(e, t, n, r);
      if (l === null) vo(e, t, r, gl, n), Ws(e, r);
      else if (bf(l, e, t, n, r)) r.stopPropagation();
      else if (Ws(e, r), t & 4 && -1 < wf.indexOf(e)) {
        for (; l !== null; ) {
          var o = Sr(l);
          if (o !== null && Mu(o), o = Jo(e, t, n, r), o === null && vo(e, t, r, gl, n), o === l) break;
          l = o;
        }
        l !== null && r.stopPropagation();
      } else vo(e, t, r, null, n);
    }
  }
  var gl = null;
  function Jo(e, t, n, r) {
    if (gl = null, e = Ai(r), e = Dt(e), e !== null) if (t = Xt(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = Eu(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return gl = e, null;
  }
  function $u(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (df()) {
          case zi:
            return 1;
          case Fu:
            return 4;
          case ml:
          case ff:
            return 16;
          case Ru:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var xt = null, Ui = null, qr = null;
  function Bu() {
    if (qr) return qr;
    var e, t = Ui, n = t.length, r, l = "value" in xt ? xt.value : xt.textContent, o = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++) ;
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === l[o - r]; r++) ;
    return qr = l.slice(e, 1 < r ? 1 - r : void 0);
  }
  function el(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function zr() {
    return true;
  }
  function Vs() {
    return false;
  }
  function Ee(e) {
    function t(n, r, l, o, i) {
      this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
      for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(o) : o[u]);
      return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === false) ? zr : Vs, this.isPropagationStopped = Vs, this;
    }
    return Q(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = true;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = false), this.isDefaultPrevented = zr);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = true), this.isPropagationStopped = zr);
      },
      persist: function() {
      },
      isPersistent: zr
    }), t;
  }
  var Pn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Wi = Ee(Pn), Nr = Q({}, Pn, {
    view: 0,
    detail: 0
  }), Sf = Ee(Nr), so, ao, Dn, Al = Q({}, Nr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Hi,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Dn && (Dn && e.type === "mousemove" ? (so = e.screenX - Dn.screenX, ao = e.screenY - Dn.screenY) : ao = so = 0, Dn = e), so);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : ao;
    }
  }), Ks = Ee(Al), Cf = Q({}, Al, {
    dataTransfer: 0
  }), Ef = Ee(Cf), Pf = Q({}, Nr, {
    relatedTarget: 0
  }), uo = Ee(Pf), _f = Q({}, Pn, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Lf = Ee(_f), Ff = Q({}, Pn, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), Rf = Ee(Ff), Tf = Q({}, Pn, {
    data: 0
  }), Qs = Ee(Tf), Of = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Mf = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, If = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Af(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = If[e]) ? !!t[e] : false;
  }
  function Hi() {
    return Af;
  }
  var zf = Q({}, Nr, {
    key: function(e) {
      if (e.key) {
        var t = Of[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = el(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Mf[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Hi,
    charCode: function(e) {
      return e.type === "keypress" ? el(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? el(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), Df = Ee(zf), $f = Q({}, Al, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Gs = Ee($f), Bf = Q({}, Nr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Hi
  }), Uf = Ee(Bf), Wf = Q({}, Pn, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Hf = Ee(Wf), Vf = Q({}, Al, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Kf = Ee(Vf), Qf = [
    9,
    13,
    27,
    32
  ], Vi = it && "CompositionEvent" in window, Xn = null;
  it && "documentMode" in document && (Xn = document.documentMode);
  var Gf = it && "TextEvent" in window && !Xn, Uu = it && (!Vi || Xn && 8 < Xn && 11 >= Xn), Ys = " ", Xs = false;
  function Wu(e, t) {
    switch (e) {
      case "keyup":
        return Qf.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return true;
      default:
        return false;
    }
  }
  function Hu(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var rn = false;
  function Yf(e, t) {
    switch (e) {
      case "compositionend":
        return Hu(t);
      case "keypress":
        return t.which !== 32 ? null : (Xs = true, Ys);
      case "textInput":
        return e = t.data, e === Ys && Xs ? null : e;
      default:
        return null;
    }
  }
  function Xf(e, t) {
    if (rn) return e === "compositionend" || !Vi && Wu(e, t) ? (e = Bu(), qr = Ui = xt = null, rn = false, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Uu && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Jf = {
    color: true,
    date: true,
    datetime: true,
    "datetime-local": true,
    email: true,
    month: true,
    number: true,
    password: true,
    range: true,
    search: true,
    tel: true,
    text: true,
    time: true,
    url: true,
    week: true
  };
  function Js(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Jf[e.type] : t === "textarea";
  }
  function Vu(e, t, n, r) {
    ku(r), t = vl(t, "onChange"), 0 < t.length && (n = new Wi("onChange", "change", null, n, r), e.push({
      event: n,
      listeners: t
    }));
  }
  var Jn = null, ur = null;
  function Zf(e) {
    nc(e, 0);
  }
  function zl(e) {
    var t = sn(e);
    if (hu(t)) return e;
  }
  function qf(e, t) {
    if (e === "change") return t;
  }
  var Ku = false;
  if (it) {
    var co;
    if (it) {
      var fo = "oninput" in document;
      if (!fo) {
        var Zs = document.createElement("div");
        Zs.setAttribute("oninput", "return;"), fo = typeof Zs.oninput == "function";
      }
      co = fo;
    } else co = false;
    Ku = co && (!document.documentMode || 9 < document.documentMode);
  }
  function qs() {
    Jn && (Jn.detachEvent("onpropertychange", Qu), ur = Jn = null);
  }
  function Qu(e) {
    if (e.propertyName === "value" && zl(ur)) {
      var t = [];
      Vu(t, ur, e, Ai(e)), Cu(Zf, t);
    }
  }
  function em(e, t, n) {
    e === "focusin" ? (qs(), Jn = t, ur = n, Jn.attachEvent("onpropertychange", Qu)) : e === "focusout" && qs();
  }
  function tm(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return zl(ur);
  }
  function nm(e, t) {
    if (e === "click") return zl(t);
  }
  function rm(e, t) {
    if (e === "input" || e === "change") return zl(t);
  }
  function lm(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var We = typeof Object.is == "function" ? Object.is : lm;
  function cr(e, t) {
    if (We(e, t)) return true;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return false;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return false;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!To.call(t, l) || !We(e[l], t[l])) return false;
    }
    return true;
  }
  function ea(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function ta(e, t) {
    var n = ea(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (r = e + n.textContent.length, e <= t && r >= t) return {
          node: n,
          offset: t - e
        };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = ea(n);
    }
  }
  function Gu(e, t) {
    return e && t ? e === t ? true : e && e.nodeType === 3 ? false : t && t.nodeType === 3 ? Gu(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : false : false;
  }
  function Yu() {
    for (var e = window, t = cl(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = false;
      }
      if (n) e = t.contentWindow;
      else break;
      t = cl(e.document);
    }
    return t;
  }
  function Ki(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function om(e) {
    var t = Yu(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Gu(n.ownerDocument.documentElement, n)) {
      if (r !== null && Ki(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var l = n.textContent.length, o = Math.min(r.start, l);
          r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = ta(n, o);
          var i = ta(n, r);
          l && i && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({
        element: e,
        left: e.scrollLeft,
        top: e.scrollTop
      });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var im = it && "documentMode" in document && 11 >= document.documentMode, ln = null, Zo = null, Zn = null, qo = false;
  function na(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    qo || ln == null || ln !== cl(r) || (r = ln, "selectionStart" in r && Ki(r) ? r = {
      start: r.selectionStart,
      end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
      anchorNode: r.anchorNode,
      anchorOffset: r.anchorOffset,
      focusNode: r.focusNode,
      focusOffset: r.focusOffset
    }), Zn && cr(Zn, r) || (Zn = r, r = vl(Zo, "onSelect"), 0 < r.length && (t = new Wi("onSelect", "select", null, t, n), e.push({
      event: t,
      listeners: r
    }), t.target = ln)));
  }
  function Dr(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var on = {
    animationend: Dr("Animation", "AnimationEnd"),
    animationiteration: Dr("Animation", "AnimationIteration"),
    animationstart: Dr("Animation", "AnimationStart"),
    transitionend: Dr("Transition", "TransitionEnd")
  }, mo = {}, Xu = {};
  it && (Xu = document.createElement("div").style, "AnimationEvent" in window || (delete on.animationend.animation, delete on.animationiteration.animation, delete on.animationstart.animation), "TransitionEvent" in window || delete on.transitionend.transition);
  function Dl(e) {
    if (mo[e]) return mo[e];
    if (!on[e]) return e;
    var t = on[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in Xu) return mo[e] = t[n];
    return e;
  }
  var Ju = Dl("animationend"), Zu = Dl("animationiteration"), qu = Dl("animationstart"), ec = Dl("transitionend"), tc = /* @__PURE__ */ new Map(), ra = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Rt(e, t) {
    tc.set(e, t), Yt(t, [
      e
    ]);
  }
  for (var po = 0; po < ra.length; po++) {
    var ho = ra[po], sm = ho.toLowerCase(), am = ho[0].toUpperCase() + ho.slice(1);
    Rt(sm, "on" + am);
  }
  Rt(Ju, "onAnimationEnd");
  Rt(Zu, "onAnimationIteration");
  Rt(qu, "onAnimationStart");
  Rt("dblclick", "onDoubleClick");
  Rt("focusin", "onFocus");
  Rt("focusout", "onBlur");
  Rt(ec, "onTransitionEnd");
  wn("onMouseEnter", [
    "mouseout",
    "mouseover"
  ]);
  wn("onMouseLeave", [
    "mouseout",
    "mouseover"
  ]);
  wn("onPointerEnter", [
    "pointerout",
    "pointerover"
  ]);
  wn("onPointerLeave", [
    "pointerout",
    "pointerover"
  ]);
  Yt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
  Yt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
  Yt("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]);
  Yt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
  Yt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
  Yt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Qn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), um = new Set("cancel close invalid load scroll toggle".split(" ").concat(Qn));
  function la(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, sf(r, t, void 0, e), e.currentTarget = null;
  }
  function nc(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], l = r.event;
      r = r.listeners;
      e: {
        var o = void 0;
        if (t) for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i], a = u.instance, c = u.currentTarget;
          if (u = u.listener, a !== o && l.isPropagationStopped()) break e;
          la(l, u, c), o = a;
        }
        else for (i = 0; i < r.length; i++) {
          if (u = r[i], a = u.instance, c = u.currentTarget, u = u.listener, a !== o && l.isPropagationStopped()) break e;
          la(l, u, c), o = a;
        }
      }
    }
    if (fl) throw e = Go, fl = false, Go = null, e;
  }
  function B(e, t) {
    var n = t[li];
    n === void 0 && (n = t[li] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (rc(t, e, 2, false), n.add(r));
  }
  function go(e, t, n) {
    var r = 0;
    t && (r |= 4), rc(n, e, r, t);
  }
  var $r = "_reactListening" + Math.random().toString(36).slice(2);
  function dr(e) {
    if (!e[$r]) {
      e[$r] = true, cu.forEach(function(n) {
        n !== "selectionchange" && (um.has(n) || go(n, false, e), go(n, true, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[$r] || (t[$r] = true, go("selectionchange", false, t));
    }
  }
  function rc(e, t, n, r) {
    switch ($u(t)) {
      case 1:
        var l = jf;
        break;
      case 4:
        l = Nf;
        break;
      default:
        l = Bi;
    }
    n = l.bind(null, t, n, e), l = void 0, !Qo || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = true), r ? l !== void 0 ? e.addEventListener(t, n, {
      capture: true,
      passive: l
    }) : e.addEventListener(t, n, true) : l !== void 0 ? e.addEventListener(t, n, {
      passive: l
    }) : e.addEventListener(t, n, false);
  }
  function vo(e, t, n, r, l) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || u.nodeType === 8 && u.parentNode === l) break;
        if (i === 4) for (i = r.return; i !== null; ) {
          var a = i.tag;
          if ((a === 3 || a === 4) && (a = i.stateNode.containerInfo, a === l || a.nodeType === 8 && a.parentNode === l)) return;
          i = i.return;
        }
        for (; u !== null; ) {
          if (i = Dt(u), i === null) return;
          if (a = i.tag, a === 5 || a === 6) {
            r = o = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
    Cu(function() {
      var c = o, p = Ai(n), h = [];
      e: {
        var g = tc.get(e);
        if (g !== void 0) {
          var w = Wi, b = e;
          switch (e) {
            case "keypress":
              if (el(n) === 0) break e;
            case "keydown":
            case "keyup":
              w = Df;
              break;
            case "focusin":
              b = "focus", w = uo;
              break;
            case "focusout":
              b = "blur", w = uo;
              break;
            case "beforeblur":
            case "afterblur":
              w = uo;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              w = Ks;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              w = Ef;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              w = Uf;
              break;
            case Ju:
            case Zu:
            case qu:
              w = Lf;
              break;
            case ec:
              w = Hf;
              break;
            case "scroll":
              w = Sf;
              break;
            case "wheel":
              w = Kf;
              break;
            case "copy":
            case "cut":
            case "paste":
              w = Rf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              w = Gs;
          }
          var x = (t & 4) !== 0, N = !x && e === "scroll", f = x ? g !== null ? g + "Capture" : null : g;
          x = [];
          for (var d = c, m; d !== null; ) {
            m = d;
            var y = m.stateNode;
            if (m.tag === 5 && y !== null && (m = y, f !== null && (y = or(d, f), y != null && x.push(fr(d, y, m)))), N) break;
            d = d.return;
          }
          0 < x.length && (g = new w(g, b, null, n, p), h.push({
            event: g,
            listeners: x
          }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (g = e === "mouseover" || e === "pointerover", w = e === "mouseout" || e === "pointerout", g && n !== Vo && (b = n.relatedTarget || n.fromElement) && (Dt(b) || b[st])) break e;
          if ((w || g) && (g = p.window === p ? p : (g = p.ownerDocument) ? g.defaultView || g.parentWindow : window, w ? (b = n.relatedTarget || n.toElement, w = c, b = b ? Dt(b) : null, b !== null && (N = Xt(b), b !== N || b.tag !== 5 && b.tag !== 6) && (b = null)) : (w = null, b = c), w !== b)) {
            if (x = Ks, y = "onMouseLeave", f = "onMouseEnter", d = "mouse", (e === "pointerout" || e === "pointerover") && (x = Gs, y = "onPointerLeave", f = "onPointerEnter", d = "pointer"), N = w == null ? g : sn(w), m = b == null ? g : sn(b), g = new x(y, d + "leave", w, n, p), g.target = N, g.relatedTarget = m, y = null, Dt(p) === c && (x = new x(f, d + "enter", b, n, p), x.target = m, x.relatedTarget = N, y = x), N = y, w && b) t: {
              for (x = w, f = b, d = 0, m = x; m; m = qt(m)) d++;
              for (m = 0, y = f; y; y = qt(y)) m++;
              for (; 0 < d - m; ) x = qt(x), d--;
              for (; 0 < m - d; ) f = qt(f), m--;
              for (; d--; ) {
                if (x === f || f !== null && x === f.alternate) break t;
                x = qt(x), f = qt(f);
              }
              x = null;
            }
            else x = null;
            w !== null && oa(h, g, w, x, false), b !== null && N !== null && oa(h, N, b, x, true);
          }
        }
        e: {
          if (g = c ? sn(c) : window, w = g.nodeName && g.nodeName.toLowerCase(), w === "select" || w === "input" && g.type === "file") var j = qf;
          else if (Js(g)) if (Ku) j = rm;
          else {
            j = tm;
            var S = em;
          }
          else (w = g.nodeName) && w.toLowerCase() === "input" && (g.type === "checkbox" || g.type === "radio") && (j = nm);
          if (j && (j = j(e, c))) {
            Vu(h, j, n, p);
            break e;
          }
          S && S(e, g, c), e === "focusout" && (S = g._wrapperState) && S.controlled && g.type === "number" && $o(g, "number", g.value);
        }
        switch (S = c ? sn(c) : window, e) {
          case "focusin":
            (Js(S) || S.contentEditable === "true") && (ln = S, Zo = c, Zn = null);
            break;
          case "focusout":
            Zn = Zo = ln = null;
            break;
          case "mousedown":
            qo = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            qo = false, na(h, n, p);
            break;
          case "selectionchange":
            if (im) break;
          case "keydown":
          case "keyup":
            na(h, n, p);
        }
        var k;
        if (Vi) e: {
          switch (e) {
            case "compositionstart":
              var E = "onCompositionStart";
              break e;
            case "compositionend":
              E = "onCompositionEnd";
              break e;
            case "compositionupdate":
              E = "onCompositionUpdate";
              break e;
          }
          E = void 0;
        }
        else rn ? Wu(e, n) && (E = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (E = "onCompositionStart");
        E && (Uu && n.locale !== "ko" && (rn || E !== "onCompositionStart" ? E === "onCompositionEnd" && rn && (k = Bu()) : (xt = p, Ui = "value" in xt ? xt.value : xt.textContent, rn = true)), S = vl(c, E), 0 < S.length && (E = new Qs(E, e, null, n, p), h.push({
          event: E,
          listeners: S
        }), k ? E.data = k : (k = Hu(n), k !== null && (E.data = k)))), (k = Gf ? Yf(e, n) : Xf(e, n)) && (c = vl(c, "onBeforeInput"), 0 < c.length && (p = new Qs("onBeforeInput", "beforeinput", null, n, p), h.push({
          event: p,
          listeners: c
        }), p.data = k));
      }
      nc(h, t);
    });
  }
  function fr(e, t, n) {
    return {
      instance: e,
      listener: t,
      currentTarget: n
    };
  }
  function vl(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e, o = l.stateNode;
      l.tag === 5 && o !== null && (l = o, o = or(e, n), o != null && r.unshift(fr(e, o, l)), o = or(e, t), o != null && r.push(fr(e, o, l))), e = e.return;
    }
    return r;
  }
  function qt(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function oa(e, t, n, r, l) {
    for (var o = t._reactName, i = []; n !== null && n !== r; ) {
      var u = n, a = u.alternate, c = u.stateNode;
      if (a !== null && a === r) break;
      u.tag === 5 && c !== null && (u = c, l ? (a = or(n, o), a != null && i.unshift(fr(n, a, u))) : l || (a = or(n, o), a != null && i.push(fr(n, a, u)))), n = n.return;
    }
    i.length !== 0 && e.push({
      event: t,
      listeners: i
    });
  }
  var cm = /\r\n?/g, dm = /\u0000|\uFFFD/g;
  function ia(e) {
    return (typeof e == "string" ? e : "" + e).replace(cm, `
`).replace(dm, "");
  }
  function Br(e, t, n) {
    if (t = ia(t), ia(e) !== t && n) throw Error(C(425));
  }
  function yl() {
  }
  var ei = null, ti = null;
  function ni(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var ri = typeof setTimeout == "function" ? setTimeout : void 0, fm = typeof clearTimeout == "function" ? clearTimeout : void 0, sa = typeof Promise == "function" ? Promise : void 0, mm = typeof queueMicrotask == "function" ? queueMicrotask : typeof sa < "u" ? function(e) {
    return sa.resolve(null).then(e).catch(pm);
  } : ri;
  function pm(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function yo(e, t) {
    var n = t, r = 0;
    do {
      var l = n.nextSibling;
      if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
        if (r === 0) {
          e.removeChild(l), ar(t);
          return;
        }
        r--;
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = l;
    } while (n);
    ar(t);
  }
  function Nt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function aa(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var _n = Math.random().toString(36).slice(2), Ge = "__reactFiber$" + _n, mr = "__reactProps$" + _n, st = "__reactContainer$" + _n, li = "__reactEvents$" + _n, hm = "__reactListeners$" + _n, gm = "__reactHandles$" + _n;
  function Dt(e) {
    var t = e[Ge];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[st] || n[Ge]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = aa(e); e !== null; ) {
          if (n = e[Ge]) return n;
          e = aa(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Sr(e) {
    return e = e[Ge] || e[st], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function sn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(C(33));
  }
  function $l(e) {
    return e[mr] || null;
  }
  var oi = [], an = -1;
  function Tt(e) {
    return {
      current: e
    };
  }
  function U(e) {
    0 > an || (e.current = oi[an], oi[an] = null, an--);
  }
  function $(e, t) {
    an++, oi[an] = e.current, e.current = t;
  }
  var Lt = {}, ce = Tt(Lt), ye = Tt(false), Ht = Lt;
  function bn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Lt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var l = {}, o;
    for (o in n) l[o] = t[o];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function xe(e) {
    return e = e.childContextTypes, e != null;
  }
  function xl() {
    U(ye), U(ce);
  }
  function ua(e, t, n) {
    if (ce.current !== Lt) throw Error(C(168));
    $(ce, t), $(ye, n);
  }
  function lc(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(C(108, qd(e) || "Unknown", l));
    return Q({}, n, r);
  }
  function wl(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Lt, Ht = ce.current, $(ce, e), $(ye, ye.current), true;
  }
  function ca(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(C(169));
    n ? (e = lc(e, t, Ht), r.__reactInternalMemoizedMergedChildContext = e, U(ye), U(ce), $(ce, e)) : U(ye), $(ye, n);
  }
  var tt = null, Bl = false, xo = false;
  function oc(e) {
    tt === null ? tt = [
      e
    ] : tt.push(e);
  }
  function vm(e) {
    Bl = true, oc(e);
  }
  function Ot() {
    if (!xo && tt !== null) {
      xo = true;
      var e = 0, t = z;
      try {
        var n = tt;
        for (z = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(true);
          while (r !== null);
        }
        tt = null, Bl = false;
      } catch (l) {
        throw tt !== null && (tt = tt.slice(e + 1)), Lu(zi, Ot), l;
      } finally {
        z = t, xo = false;
      }
    }
    return null;
  }
  var un = [], cn = 0, bl = null, kl = 0, _e = [], Le = 0, Vt = null, nt = 1, rt = "";
  function At(e, t) {
    un[cn++] = kl, un[cn++] = bl, bl = e, kl = t;
  }
  function ic(e, t, n) {
    _e[Le++] = nt, _e[Le++] = rt, _e[Le++] = Vt, Vt = e;
    var r = nt;
    e = rt;
    var l = 32 - Be(r) - 1;
    r &= ~(1 << l), n += 1;
    var o = 32 - Be(t) + l;
    if (30 < o) {
      var i = l - l % 5;
      o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, nt = 1 << 32 - Be(t) + l | n << l | r, rt = o + e;
    } else nt = 1 << o | n << l | r, rt = e;
  }
  function Qi(e) {
    e.return !== null && (At(e, 1), ic(e, 1, 0));
  }
  function Gi(e) {
    for (; e === bl; ) bl = un[--cn], un[cn] = null, kl = un[--cn], un[cn] = null;
    for (; e === Vt; ) Vt = _e[--Le], _e[Le] = null, rt = _e[--Le], _e[Le] = null, nt = _e[--Le], _e[Le] = null;
  }
  var Ne = null, je = null, W = false, $e = null;
  function sc(e, t) {
    var n = Fe(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [
      n
    ], e.flags |= 16) : t.push(n);
  }
  function da(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ne = e, je = Nt(t.firstChild), true) : false;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ne = e, je = null, true) : false;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Vt !== null ? {
          id: nt,
          overflow: rt
        } : null, e.memoizedState = {
          dehydrated: t,
          treeContext: n,
          retryLane: 1073741824
        }, n = Fe(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ne = e, je = null, true) : false;
      default:
        return false;
    }
  }
  function ii(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function si(e) {
    if (W) {
      var t = je;
      if (t) {
        var n = t;
        if (!da(e, t)) {
          if (ii(e)) throw Error(C(418));
          t = Nt(n.nextSibling);
          var r = Ne;
          t && da(e, t) ? sc(r, n) : (e.flags = e.flags & -4097 | 2, W = false, Ne = e);
        }
      } else {
        if (ii(e)) throw Error(C(418));
        e.flags = e.flags & -4097 | 2, W = false, Ne = e;
      }
    }
  }
  function fa(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Ne = e;
  }
  function Ur(e) {
    if (e !== Ne) return false;
    if (!W) return fa(e), W = true, false;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ni(e.type, e.memoizedProps)), t && (t = je)) {
      if (ii(e)) throw ac(), Error(C(418));
      for (; t; ) sc(e, t), t = Nt(t.nextSibling);
    }
    if (fa(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(C(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                je = Nt(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        je = null;
      }
    } else je = Ne ? Nt(e.stateNode.nextSibling) : null;
    return true;
  }
  function ac() {
    for (var e = je; e; ) e = Nt(e.nextSibling);
  }
  function kn() {
    je = Ne = null, W = false;
  }
  function Yi(e) {
    $e === null ? $e = [
      e
    ] : $e.push(e);
  }
  var ym = ct.ReactCurrentBatchConfig;
  function $n(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(C(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(C(147, e));
        var l = r, o = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(i) {
          var u = l.refs;
          i === null ? delete u[o] : u[o] = i;
        }, t._stringRef = o, t);
      }
      if (typeof e != "string") throw Error(C(284));
      if (!n._owner) throw Error(C(290, e));
    }
    return e;
  }
  function Wr(e, t) {
    throw e = Object.prototype.toString.call(t), Error(C(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function ma(e) {
    var t = e._init;
    return t(e._payload);
  }
  function uc(e) {
    function t(f, d) {
      if (e) {
        var m = f.deletions;
        m === null ? (f.deletions = [
          d
        ], f.flags |= 16) : m.push(d);
      }
    }
    function n(f, d) {
      if (!e) return null;
      for (; d !== null; ) t(f, d), d = d.sibling;
      return null;
    }
    function r(f, d) {
      for (f = /* @__PURE__ */ new Map(); d !== null; ) d.key !== null ? f.set(d.key, d) : f.set(d.index, d), d = d.sibling;
      return f;
    }
    function l(f, d) {
      return f = Pt(f, d), f.index = 0, f.sibling = null, f;
    }
    function o(f, d, m) {
      return f.index = m, e ? (m = f.alternate, m !== null ? (m = m.index, m < d ? (f.flags |= 2, d) : m) : (f.flags |= 2, d)) : (f.flags |= 1048576, d);
    }
    function i(f) {
      return e && f.alternate === null && (f.flags |= 2), f;
    }
    function u(f, d, m, y) {
      return d === null || d.tag !== 6 ? (d = Co(m, f.mode, y), d.return = f, d) : (d = l(d, m), d.return = f, d);
    }
    function a(f, d, m, y) {
      var j = m.type;
      return j === nn ? p(f, d, m.props.children, y, m.key) : d !== null && (d.elementType === j || typeof j == "object" && j !== null && j.$$typeof === ht && ma(j) === d.type) ? (y = l(d, m.props), y.ref = $n(f, d, m), y.return = f, y) : (y = sl(m.type, m.key, m.props, null, f.mode, y), y.ref = $n(f, d, m), y.return = f, y);
    }
    function c(f, d, m, y) {
      return d === null || d.tag !== 4 || d.stateNode.containerInfo !== m.containerInfo || d.stateNode.implementation !== m.implementation ? (d = Eo(m, f.mode, y), d.return = f, d) : (d = l(d, m.children || []), d.return = f, d);
    }
    function p(f, d, m, y, j) {
      return d === null || d.tag !== 7 ? (d = Wt(m, f.mode, y, j), d.return = f, d) : (d = l(d, m), d.return = f, d);
    }
    function h(f, d, m) {
      if (typeof d == "string" && d !== "" || typeof d == "number") return d = Co("" + d, f.mode, m), d.return = f, d;
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case Rr:
            return m = sl(d.type, d.key, d.props, null, f.mode, m), m.ref = $n(f, null, d), m.return = f, m;
          case tn:
            return d = Eo(d, f.mode, m), d.return = f, d;
          case ht:
            var y = d._init;
            return h(f, y(d._payload), m);
        }
        if (Vn(d) || Mn(d)) return d = Wt(d, f.mode, m, null), d.return = f, d;
        Wr(f, d);
      }
      return null;
    }
    function g(f, d, m, y) {
      var j = d !== null ? d.key : null;
      if (typeof m == "string" && m !== "" || typeof m == "number") return j !== null ? null : u(f, d, "" + m, y);
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case Rr:
            return m.key === j ? a(f, d, m, y) : null;
          case tn:
            return m.key === j ? c(f, d, m, y) : null;
          case ht:
            return j = m._init, g(f, d, j(m._payload), y);
        }
        if (Vn(m) || Mn(m)) return j !== null ? null : p(f, d, m, y, null);
        Wr(f, m);
      }
      return null;
    }
    function w(f, d, m, y, j) {
      if (typeof y == "string" && y !== "" || typeof y == "number") return f = f.get(m) || null, u(d, f, "" + y, j);
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case Rr:
            return f = f.get(y.key === null ? m : y.key) || null, a(d, f, y, j);
          case tn:
            return f = f.get(y.key === null ? m : y.key) || null, c(d, f, y, j);
          case ht:
            var S = y._init;
            return w(f, d, m, S(y._payload), j);
        }
        if (Vn(y) || Mn(y)) return f = f.get(m) || null, p(d, f, y, j, null);
        Wr(d, y);
      }
      return null;
    }
    function b(f, d, m, y) {
      for (var j = null, S = null, k = d, E = d = 0, _ = null; k !== null && E < m.length; E++) {
        k.index > E ? (_ = k, k = null) : _ = k.sibling;
        var M = g(f, k, m[E], y);
        if (M === null) {
          k === null && (k = _);
          break;
        }
        e && k && M.alternate === null && t(f, k), d = o(M, d, E), S === null ? j = M : S.sibling = M, S = M, k = _;
      }
      if (E === m.length) return n(f, k), W && At(f, E), j;
      if (k === null) {
        for (; E < m.length; E++) k = h(f, m[E], y), k !== null && (d = o(k, d, E), S === null ? j = k : S.sibling = k, S = k);
        return W && At(f, E), j;
      }
      for (k = r(f, k); E < m.length; E++) _ = w(k, f, E, m[E], y), _ !== null && (e && _.alternate !== null && k.delete(_.key === null ? E : _.key), d = o(_, d, E), S === null ? j = _ : S.sibling = _, S = _);
      return e && k.forEach(function(X) {
        return t(f, X);
      }), W && At(f, E), j;
    }
    function x(f, d, m, y) {
      var j = Mn(m);
      if (typeof j != "function") throw Error(C(150));
      if (m = j.call(m), m == null) throw Error(C(151));
      for (var S = j = null, k = d, E = d = 0, _ = null, M = m.next(); k !== null && !M.done; E++, M = m.next()) {
        k.index > E ? (_ = k, k = null) : _ = k.sibling;
        var X = g(f, k, M.value, y);
        if (X === null) {
          k === null && (k = _);
          break;
        }
        e && k && X.alternate === null && t(f, k), d = o(X, d, E), S === null ? j = X : S.sibling = X, S = X, k = _;
      }
      if (M.done) return n(f, k), W && At(f, E), j;
      if (k === null) {
        for (; !M.done; E++, M = m.next()) M = h(f, M.value, y), M !== null && (d = o(M, d, E), S === null ? j = M : S.sibling = M, S = M);
        return W && At(f, E), j;
      }
      for (k = r(f, k); !M.done; E++, M = m.next()) M = w(k, f, E, M.value, y), M !== null && (e && M.alternate !== null && k.delete(M.key === null ? E : M.key), d = o(M, d, E), S === null ? j = M : S.sibling = M, S = M);
      return e && k.forEach(function(Pe) {
        return t(f, Pe);
      }), W && At(f, E), j;
    }
    function N(f, d, m, y) {
      if (typeof m == "object" && m !== null && m.type === nn && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case Rr:
            e: {
              for (var j = m.key, S = d; S !== null; ) {
                if (S.key === j) {
                  if (j = m.type, j === nn) {
                    if (S.tag === 7) {
                      n(f, S.sibling), d = l(S, m.props.children), d.return = f, f = d;
                      break e;
                    }
                  } else if (S.elementType === j || typeof j == "object" && j !== null && j.$$typeof === ht && ma(j) === S.type) {
                    n(f, S.sibling), d = l(S, m.props), d.ref = $n(f, S, m), d.return = f, f = d;
                    break e;
                  }
                  n(f, S);
                  break;
                } else t(f, S);
                S = S.sibling;
              }
              m.type === nn ? (d = Wt(m.props.children, f.mode, y, m.key), d.return = f, f = d) : (y = sl(m.type, m.key, m.props, null, f.mode, y), y.ref = $n(f, d, m), y.return = f, f = y);
            }
            return i(f);
          case tn:
            e: {
              for (S = m.key; d !== null; ) {
                if (d.key === S) if (d.tag === 4 && d.stateNode.containerInfo === m.containerInfo && d.stateNode.implementation === m.implementation) {
                  n(f, d.sibling), d = l(d, m.children || []), d.return = f, f = d;
                  break e;
                } else {
                  n(f, d);
                  break;
                }
                else t(f, d);
                d = d.sibling;
              }
              d = Eo(m, f.mode, y), d.return = f, f = d;
            }
            return i(f);
          case ht:
            return S = m._init, N(f, d, S(m._payload), y);
        }
        if (Vn(m)) return b(f, d, m, y);
        if (Mn(m)) return x(f, d, m, y);
        Wr(f, m);
      }
      return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m, d !== null && d.tag === 6 ? (n(f, d.sibling), d = l(d, m), d.return = f, f = d) : (n(f, d), d = Co(m, f.mode, y), d.return = f, f = d), i(f)) : n(f, d);
    }
    return N;
  }
  var jn = uc(true), cc = uc(false), jl = Tt(null), Nl = null, dn = null, Xi = null;
  function Ji() {
    Xi = dn = Nl = null;
  }
  function Zi(e) {
    var t = jl.current;
    U(jl), e._currentValue = t;
  }
  function ai(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function yn(e, t) {
    Nl = e, Xi = dn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (ve = true), e.firstContext = null);
  }
  function Te(e) {
    var t = e._currentValue;
    if (Xi !== e) if (e = {
      context: e,
      memoizedValue: t,
      next: null
    }, dn === null) {
      if (Nl === null) throw Error(C(308));
      dn = e, Nl.dependencies = {
        lanes: 0,
        firstContext: e
      };
    } else dn = dn.next = e;
    return t;
  }
  var $t = null;
  function qi(e) {
    $t === null ? $t = [
      e
    ] : $t.push(e);
  }
  function dc(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n, qi(t)) : (n.next = l.next, l.next = n), t.interleaved = n, at(e, r);
  }
  function at(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var gt = false;
  function es(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: {
        pending: null,
        interleaved: null,
        lanes: 0
      },
      effects: null
    };
  }
  function fc(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      effects: e.effects
    });
  }
  function lt(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null
    };
  }
  function St(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, A & 2) {
      var l = r.pending;
      return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, at(e, n);
    }
    return l = r.interleaved, l === null ? (t.next = t, qi(r)) : (t.next = l.next, l.next = t), r.interleaved = t, at(e, n);
  }
  function tl(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Di(e, n);
    }
  }
  function pa(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
      var l = null, o = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var i = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null
          };
          o === null ? l = o = i : o = o.next = i, n = n.next;
        } while (n !== null);
        o === null ? l = o = t : o = o.next = t;
      } else l = o = t;
      n = {
        baseState: r.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: o,
        shared: r.shared,
        effects: r.effects
      }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function Sl(e, t, n, r) {
    var l = e.updateQueue;
    gt = false;
    var o = l.firstBaseUpdate, i = l.lastBaseUpdate, u = l.shared.pending;
    if (u !== null) {
      l.shared.pending = null;
      var a = u, c = a.next;
      a.next = null, i === null ? o = c : i.next = c, i = a;
      var p = e.alternate;
      p !== null && (p = p.updateQueue, u = p.lastBaseUpdate, u !== i && (u === null ? p.firstBaseUpdate = c : u.next = c, p.lastBaseUpdate = a));
    }
    if (o !== null) {
      var h = l.baseState;
      i = 0, p = c = a = null, u = o;
      do {
        var g = u.lane, w = u.eventTime;
        if ((r & g) === g) {
          p !== null && (p = p.next = {
            eventTime: w,
            lane: 0,
            tag: u.tag,
            payload: u.payload,
            callback: u.callback,
            next: null
          });
          e: {
            var b = e, x = u;
            switch (g = t, w = n, x.tag) {
              case 1:
                if (b = x.payload, typeof b == "function") {
                  h = b.call(w, h, g);
                  break e;
                }
                h = b;
                break e;
              case 3:
                b.flags = b.flags & -65537 | 128;
              case 0:
                if (b = x.payload, g = typeof b == "function" ? b.call(w, h, g) : b, g == null) break e;
                h = Q({}, h, g);
                break e;
              case 2:
                gt = true;
            }
          }
          u.callback !== null && u.lane !== 0 && (e.flags |= 64, g = l.effects, g === null ? l.effects = [
            u
          ] : g.push(u));
        } else w = {
          eventTime: w,
          lane: g,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        }, p === null ? (c = p = w, a = h) : p = p.next = w, i |= g;
        if (u = u.next, u === null) {
          if (u = l.shared.pending, u === null) break;
          g = u, u = g.next, g.next = null, l.lastBaseUpdate = g, l.shared.pending = null;
        }
      } while (true);
      if (p === null && (a = h), l.baseState = a, l.firstBaseUpdate = c, l.lastBaseUpdate = p, t = l.shared.interleaved, t !== null) {
        l = t;
        do
          i |= l.lane, l = l.next;
        while (l !== t);
      } else o === null && (l.shared.lanes = 0);
      Qt |= i, e.lanes = i, e.memoizedState = h;
    }
  }
  function ha(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], l = r.callback;
      if (l !== null) {
        if (r.callback = null, r = n, typeof l != "function") throw Error(C(191, l));
        l.call(r);
      }
    }
  }
  var Cr = {}, Xe = Tt(Cr), pr = Tt(Cr), hr = Tt(Cr);
  function Bt(e) {
    if (e === Cr) throw Error(C(174));
    return e;
  }
  function ts(e, t) {
    switch ($(hr, t), $(pr, e), $(Xe, Cr), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Uo(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Uo(t, e);
    }
    U(Xe), $(Xe, t);
  }
  function Nn() {
    U(Xe), U(pr), U(hr);
  }
  function mc(e) {
    Bt(hr.current);
    var t = Bt(Xe.current), n = Uo(t, e.type);
    t !== n && ($(pr, e), $(Xe, n));
  }
  function ns(e) {
    pr.current === e && (U(Xe), U(pr));
  }
  var V = Tt(0);
  function Cl(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var wo = [];
  function rs() {
    for (var e = 0; e < wo.length; e++) wo[e]._workInProgressVersionPrimary = null;
    wo.length = 0;
  }
  var nl = ct.ReactCurrentDispatcher, bo = ct.ReactCurrentBatchConfig, Kt = 0, K = null, ee = null, ne = null, El = false, qn = false, gr = 0, xm = 0;
  function se() {
    throw Error(C(321));
  }
  function ls(e, t) {
    if (t === null) return false;
    for (var n = 0; n < t.length && n < e.length; n++) if (!We(e[n], t[n])) return false;
    return true;
  }
  function os(e, t, n, r, l, o) {
    if (Kt = o, K = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, nl.current = e === null || e.memoizedState === null ? jm : Nm, e = n(r, l), qn) {
      o = 0;
      do {
        if (qn = false, gr = 0, 25 <= o) throw Error(C(301));
        o += 1, ne = ee = null, t.updateQueue = null, nl.current = Sm, e = n(r, l);
      } while (qn);
    }
    if (nl.current = Pl, t = ee !== null && ee.next !== null, Kt = 0, ne = ee = K = null, El = false, t) throw Error(C(300));
    return e;
  }
  function is() {
    var e = gr !== 0;
    return gr = 0, e;
  }
  function Qe() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return ne === null ? K.memoizedState = ne = e : ne = ne.next = e, ne;
  }
  function Oe() {
    if (ee === null) {
      var e = K.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = ee.next;
    var t = ne === null ? K.memoizedState : ne.next;
    if (t !== null) ne = t, ee = e;
    else {
      if (e === null) throw Error(C(310));
      ee = e, e = {
        memoizedState: ee.memoizedState,
        baseState: ee.baseState,
        baseQueue: ee.baseQueue,
        queue: ee.queue,
        next: null
      }, ne === null ? K.memoizedState = ne = e : ne = ne.next = e;
    }
    return ne;
  }
  function vr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function ko(e) {
    var t = Oe(), n = t.queue;
    if (n === null) throw Error(C(311));
    n.lastRenderedReducer = e;
    var r = ee, l = r.baseQueue, o = n.pending;
    if (o !== null) {
      if (l !== null) {
        var i = l.next;
        l.next = o.next, o.next = i;
      }
      r.baseQueue = l = o, n.pending = null;
    }
    if (l !== null) {
      o = l.next, r = r.baseState;
      var u = i = null, a = null, c = o;
      do {
        var p = c.lane;
        if ((Kt & p) === p) a !== null && (a = a.next = {
          lane: 0,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
        else {
          var h = {
            lane: p,
            action: c.action,
            hasEagerState: c.hasEagerState,
            eagerState: c.eagerState,
            next: null
          };
          a === null ? (u = a = h, i = r) : a = a.next = h, K.lanes |= p, Qt |= p;
        }
        c = c.next;
      } while (c !== null && c !== o);
      a === null ? i = r : a.next = u, We(r, t.memoizedState) || (ve = true), t.memoizedState = r, t.baseState = i, t.baseQueue = a, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      l = e;
      do
        o = l.lane, K.lanes |= o, Qt |= o, l = l.next;
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [
      t.memoizedState,
      n.dispatch
    ];
  }
  function jo(e) {
    var t = Oe(), n = t.queue;
    if (n === null) throw Error(C(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, l = n.pending, o = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var i = l = l.next;
      do
        o = e(o, i.action), i = i.next;
      while (i !== l);
      We(o, t.memoizedState) || (ve = true), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
    }
    return [
      o,
      r
    ];
  }
  function pc() {
  }
  function hc(e, t) {
    var n = K, r = Oe(), l = t(), o = !We(r.memoizedState, l);
    if (o && (r.memoizedState = l, ve = true), r = r.queue, ss(yc.bind(null, n, r, e), [
      e
    ]), r.getSnapshot !== t || o || ne !== null && ne.memoizedState.tag & 1) {
      if (n.flags |= 2048, yr(9, vc.bind(null, n, r, l, t), void 0, null), re === null) throw Error(C(349));
      Kt & 30 || gc(n, t, l);
    }
    return l;
  }
  function gc(e, t, n) {
    e.flags |= 16384, e = {
      getSnapshot: t,
      value: n
    }, t = K.updateQueue, t === null ? (t = {
      lastEffect: null,
      stores: null
    }, K.updateQueue = t, t.stores = [
      e
    ]) : (n = t.stores, n === null ? t.stores = [
      e
    ] : n.push(e));
  }
  function vc(e, t, n, r) {
    t.value = n, t.getSnapshot = r, xc(t) && wc(e);
  }
  function yc(e, t, n) {
    return n(function() {
      xc(t) && wc(e);
    });
  }
  function xc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !We(e, n);
    } catch {
      return true;
    }
  }
  function wc(e) {
    var t = at(e, 1);
    t !== null && Ue(t, e, 1, -1);
  }
  function ga(e) {
    var t = Qe();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: vr,
      lastRenderedState: e
    }, t.queue = e, e = e.dispatch = km.bind(null, K, e), [
      t.memoizedState,
      e
    ];
  }
  function yr(e, t, n, r) {
    return e = {
      tag: e,
      create: t,
      destroy: n,
      deps: r,
      next: null
    }, t = K.updateQueue, t === null ? (t = {
      lastEffect: null,
      stores: null
    }, K.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function bc() {
    return Oe().memoizedState;
  }
  function rl(e, t, n, r) {
    var l = Qe();
    K.flags |= e, l.memoizedState = yr(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function Ul(e, t, n, r) {
    var l = Oe();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (ee !== null) {
      var i = ee.memoizedState;
      if (o = i.destroy, r !== null && ls(r, i.deps)) {
        l.memoizedState = yr(t, n, o, r);
        return;
      }
    }
    K.flags |= e, l.memoizedState = yr(1 | t, n, o, r);
  }
  function va(e, t) {
    return rl(8390656, 8, e, t);
  }
  function ss(e, t) {
    return Ul(2048, 8, e, t);
  }
  function kc(e, t) {
    return Ul(4, 2, e, t);
  }
  function jc(e, t) {
    return Ul(4, 4, e, t);
  }
  function Nc(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function Sc(e, t, n) {
    return n = n != null ? n.concat([
      e
    ]) : null, Ul(4, 4, Nc.bind(null, t, e), n);
  }
  function as() {
  }
  function Cc(e, t) {
    var n = Oe();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ls(t, r[1]) ? r[0] : (n.memoizedState = [
      e,
      t
    ], e);
  }
  function Ec(e, t) {
    var n = Oe();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ls(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [
      e,
      t
    ], e);
  }
  function Pc(e, t, n) {
    return Kt & 21 ? (We(n, t) || (n = Tu(), K.lanes |= n, Qt |= n, e.baseState = true), t) : (e.baseState && (e.baseState = false, ve = true), e.memoizedState = n);
  }
  function wm(e, t) {
    var n = z;
    z = n !== 0 && 4 > n ? n : 4, e(true);
    var r = bo.transition;
    bo.transition = {};
    try {
      e(false), t();
    } finally {
      z = n, bo.transition = r;
    }
  }
  function _c() {
    return Oe().memoizedState;
  }
  function bm(e, t, n) {
    var r = Et(e);
    if (n = {
      lane: r,
      action: n,
      hasEagerState: false,
      eagerState: null,
      next: null
    }, Lc(e)) Fc(t, n);
    else if (n = dc(e, t, n, r), n !== null) {
      var l = fe();
      Ue(n, e, r, l), Rc(n, t, r);
    }
  }
  function km(e, t, n) {
    var r = Et(e), l = {
      lane: r,
      action: n,
      hasEagerState: false,
      eagerState: null,
      next: null
    };
    if (Lc(e)) Fc(t, l);
    else {
      var o = e.alternate;
      if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
        var i = t.lastRenderedState, u = o(i, n);
        if (l.hasEagerState = true, l.eagerState = u, We(u, i)) {
          var a = t.interleaved;
          a === null ? (l.next = l, qi(t)) : (l.next = a.next, a.next = l), t.interleaved = l;
          return;
        }
      } catch {
      } finally {
      }
      n = dc(e, t, l, r), n !== null && (l = fe(), Ue(n, e, r, l), Rc(n, t, r));
    }
  }
  function Lc(e) {
    var t = e.alternate;
    return e === K || t !== null && t === K;
  }
  function Fc(e, t) {
    qn = El = true;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Rc(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Di(e, n);
    }
  }
  var Pl = {
    readContext: Te,
    useCallback: se,
    useContext: se,
    useEffect: se,
    useImperativeHandle: se,
    useInsertionEffect: se,
    useLayoutEffect: se,
    useMemo: se,
    useReducer: se,
    useRef: se,
    useState: se,
    useDebugValue: se,
    useDeferredValue: se,
    useTransition: se,
    useMutableSource: se,
    useSyncExternalStore: se,
    useId: se,
    unstable_isNewReconciler: false
  }, jm = {
    readContext: Te,
    useCallback: function(e, t) {
      return Qe().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: Te,
    useEffect: va,
    useImperativeHandle: function(e, t, n) {
      return n = n != null ? n.concat([
        e
      ]) : null, rl(4194308, 4, Nc.bind(null, t, e), n);
    },
    useLayoutEffect: function(e, t) {
      return rl(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      return rl(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var n = Qe();
      return t = t === void 0 ? null : t, e = e(), n.memoizedState = [
        e,
        t
      ], e;
    },
    useReducer: function(e, t, n) {
      var r = Qe();
      return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: t
      }, r.queue = e, e = e.dispatch = bm.bind(null, K, e), [
        r.memoizedState,
        e
      ];
    },
    useRef: function(e) {
      var t = Qe();
      return e = {
        current: e
      }, t.memoizedState = e;
    },
    useState: ga,
    useDebugValue: as,
    useDeferredValue: function(e) {
      return Qe().memoizedState = e;
    },
    useTransition: function() {
      var e = ga(false), t = e[0];
      return e = wm.bind(null, e[1]), Qe().memoizedState = e, [
        t,
        e
      ];
    },
    useMutableSource: function() {
    },
    useSyncExternalStore: function(e, t, n) {
      var r = K, l = Qe();
      if (W) {
        if (n === void 0) throw Error(C(407));
        n = n();
      } else {
        if (n = t(), re === null) throw Error(C(349));
        Kt & 30 || gc(r, t, n);
      }
      l.memoizedState = n;
      var o = {
        value: n,
        getSnapshot: t
      };
      return l.queue = o, va(yc.bind(null, r, o, e), [
        e
      ]), r.flags |= 2048, yr(9, vc.bind(null, r, o, n, t), void 0, null), n;
    },
    useId: function() {
      var e = Qe(), t = re.identifierPrefix;
      if (W) {
        var n = rt, r = nt;
        n = (r & ~(1 << 32 - Be(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = gr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
      } else n = xm++, t = ":" + t + "r" + n.toString(32) + ":";
      return e.memoizedState = t;
    },
    unstable_isNewReconciler: false
  }, Nm = {
    readContext: Te,
    useCallback: Cc,
    useContext: Te,
    useEffect: ss,
    useImperativeHandle: Sc,
    useInsertionEffect: kc,
    useLayoutEffect: jc,
    useMemo: Ec,
    useReducer: ko,
    useRef: bc,
    useState: function() {
      return ko(vr);
    },
    useDebugValue: as,
    useDeferredValue: function(e) {
      var t = Oe();
      return Pc(t, ee.memoizedState, e);
    },
    useTransition: function() {
      var e = ko(vr)[0], t = Oe().memoizedState;
      return [
        e,
        t
      ];
    },
    useMutableSource: pc,
    useSyncExternalStore: hc,
    useId: _c,
    unstable_isNewReconciler: false
  }, Sm = {
    readContext: Te,
    useCallback: Cc,
    useContext: Te,
    useEffect: ss,
    useImperativeHandle: Sc,
    useInsertionEffect: kc,
    useLayoutEffect: jc,
    useMemo: Ec,
    useReducer: jo,
    useRef: bc,
    useState: function() {
      return jo(vr);
    },
    useDebugValue: as,
    useDeferredValue: function(e) {
      var t = Oe();
      return ee === null ? t.memoizedState = e : Pc(t, ee.memoizedState, e);
    },
    useTransition: function() {
      var e = jo(vr)[0], t = Oe().memoizedState;
      return [
        e,
        t
      ];
    },
    useMutableSource: pc,
    useSyncExternalStore: hc,
    useId: _c,
    unstable_isNewReconciler: false
  };
  function ze(e, t) {
    if (e && e.defaultProps) {
      t = Q({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function ui(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : Q({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Wl = {
    isMounted: function(e) {
      return (e = e._reactInternals) ? Xt(e) === e : false;
    },
    enqueueSetState: function(e, t, n) {
      e = e._reactInternals;
      var r = fe(), l = Et(e), o = lt(r, l);
      o.payload = t, n != null && (o.callback = n), t = St(e, o, l), t !== null && (Ue(t, e, l, r), tl(t, e, l));
    },
    enqueueReplaceState: function(e, t, n) {
      e = e._reactInternals;
      var r = fe(), l = Et(e), o = lt(r, l);
      o.tag = 1, o.payload = t, n != null && (o.callback = n), t = St(e, o, l), t !== null && (Ue(t, e, l, r), tl(t, e, l));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var n = fe(), r = Et(e), l = lt(n, r);
      l.tag = 2, t != null && (l.callback = t), t = St(e, l, r), t !== null && (Ue(t, e, r, n), tl(t, e, r));
    }
  };
  function ya(e, t, n, r, l, o, i) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !cr(n, r) || !cr(l, o) : true;
  }
  function Tc(e, t, n) {
    var r = false, l = Lt, o = t.contextType;
    return typeof o == "object" && o !== null ? o = Te(o) : (l = xe(t) ? Ht : ce.current, r = t.contextTypes, o = (r = r != null) ? bn(e, l) : Lt), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Wl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t;
  }
  function xa(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Wl.enqueueReplaceState(t, t.state, null);
  }
  function ci(e, t, n, r) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, es(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? l.context = Te(o) : (o = xe(t) ? Ht : ce.current, l.context = bn(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (ui(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Wl.enqueueReplaceState(l, l.state, null), Sl(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Sn(e, t) {
    try {
      var n = "", r = t;
      do
        n += Zd(r), r = r.return;
      while (r);
      var l = n;
    } catch (o) {
      l = `
Error generating stack: ` + o.message + `
` + o.stack;
    }
    return {
      value: e,
      source: t,
      stack: l,
      digest: null
    };
  }
  function No(e, t, n) {
    return {
      value: e,
      source: null,
      stack: n ?? null,
      digest: t ?? null
    };
  }
  function di(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var Cm = typeof WeakMap == "function" ? WeakMap : Map;
  function Oc(e, t, n) {
    n = lt(-1, n), n.tag = 3, n.payload = {
      element: null
    };
    var r = t.value;
    return n.callback = function() {
      Ll || (Ll = true, bi = r), di(e, t);
    }, n;
  }
  function Mc(e, t, n) {
    n = lt(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      n.payload = function() {
        return r(l);
      }, n.callback = function() {
        di(e, t);
      };
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
      di(e, t), typeof r != "function" && (Ct === null ? Ct = /* @__PURE__ */ new Set([
        this
      ]) : Ct.add(this));
      var i = t.stack;
      this.componentDidCatch(t.value, {
        componentStack: i !== null ? i : ""
      });
    }), n;
  }
  function wa(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Cm();
      var l = /* @__PURE__ */ new Set();
      r.set(t, l);
    } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
    l.has(n) || (l.add(n), e = $m.bind(null, e, t, n), t.then(e, e));
  }
  function ba(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : true), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function ka(e, t, n, r, l) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = lt(-1, 1), t.tag = 2, St(n, t, 1))), n.lanes |= 1), e);
  }
  var Em = ct.ReactCurrentOwner, ve = false;
  function de(e, t, n, r) {
    t.child = e === null ? cc(t, null, n, r) : jn(t, e.child, n, r);
  }
  function ja(e, t, n, r, l) {
    n = n.render;
    var o = t.ref;
    return yn(t, l), r = os(e, t, n, r, o, l), n = is(), e !== null && !ve ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, ut(e, t, l)) : (W && n && Qi(t), t.flags |= 1, de(e, t, r, l), t.child);
  }
  function Na(e, t, n, r, l) {
    if (e === null) {
      var o = n.type;
      return typeof o == "function" && !gs(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Ic(e, t, o, r, l)) : (e = sl(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (o = e.child, !(e.lanes & l)) {
      var i = o.memoizedProps;
      if (n = n.compare, n = n !== null ? n : cr, n(i, r) && e.ref === t.ref) return ut(e, t, l);
    }
    return t.flags |= 1, e = Pt(o, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Ic(e, t, n, r, l) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (cr(o, r) && e.ref === t.ref) if (ve = false, t.pendingProps = r = o, (e.lanes & l) !== 0) e.flags & 131072 && (ve = true);
      else return t.lanes = e.lanes, ut(e, t, l);
    }
    return fi(e, t, n, r, l);
  }
  function Ac(e, t, n) {
    var r = t.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = {
      baseLanes: 0,
      cachePool: null,
      transitions: null
    }, $(mn, ke), ke |= n;
    else {
      if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
        baseLanes: e,
        cachePool: null,
        transitions: null
      }, t.updateQueue = null, $(mn, ke), ke |= e, null;
      t.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null
      }, r = o !== null ? o.baseLanes : n, $(mn, ke), ke |= r;
    }
    else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, $(mn, ke), ke |= r;
    return de(e, t, l, n), t.child;
  }
  function zc(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function fi(e, t, n, r, l) {
    var o = xe(n) ? Ht : ce.current;
    return o = bn(t, o), yn(t, l), n = os(e, t, n, r, o, l), r = is(), e !== null && !ve ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, ut(e, t, l)) : (W && r && Qi(t), t.flags |= 1, de(e, t, n, l), t.child);
  }
  function Sa(e, t, n, r, l) {
    if (xe(n)) {
      var o = true;
      wl(t);
    } else o = false;
    if (yn(t, l), t.stateNode === null) ll(e, t), Tc(t, n, r), ci(t, n, r, l), r = true;
    else if (e === null) {
      var i = t.stateNode, u = t.memoizedProps;
      i.props = u;
      var a = i.context, c = n.contextType;
      typeof c == "object" && c !== null ? c = Te(c) : (c = xe(n) ? Ht : ce.current, c = bn(t, c));
      var p = n.getDerivedStateFromProps, h = typeof p == "function" || typeof i.getSnapshotBeforeUpdate == "function";
      h || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || a !== c) && xa(t, i, r, c), gt = false;
      var g = t.memoizedState;
      i.state = g, Sl(t, r, i, l), a = t.memoizedState, u !== r || g !== a || ye.current || gt ? (typeof p == "function" && (ui(t, n, p, r), a = t.memoizedState), (u = gt || ya(t, n, u, r, g, a, c)) ? (h || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), i.props = r, i.state = a, i.context = c, r = u) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = false);
    } else {
      i = t.stateNode, fc(e, t), u = t.memoizedProps, c = t.type === t.elementType ? u : ze(t.type, u), i.props = c, h = t.pendingProps, g = i.context, a = n.contextType, typeof a == "object" && a !== null ? a = Te(a) : (a = xe(n) ? Ht : ce.current, a = bn(t, a));
      var w = n.getDerivedStateFromProps;
      (p = typeof w == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== h || g !== a) && xa(t, i, r, a), gt = false, g = t.memoizedState, i.state = g, Sl(t, r, i, l);
      var b = t.memoizedState;
      u !== h || g !== b || ye.current || gt ? (typeof w == "function" && (ui(t, n, w, r), b = t.memoizedState), (c = gt || ya(t, n, c, r, g, b, a) || false) ? (p || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, b, a), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, b, a)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && g === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && g === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = b), i.props = r, i.state = b, i.context = a, r = c) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && g === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && g === e.memoizedState || (t.flags |= 1024), r = false);
    }
    return mi(e, t, n, r, o, l);
  }
  function mi(e, t, n, r, l, o) {
    zc(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i) return l && ca(t, n, false), ut(e, t, o);
    r = t.stateNode, Em.current = t;
    var u = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && i ? (t.child = jn(t, e.child, null, o), t.child = jn(t, null, u, o)) : de(e, t, u, o), t.memoizedState = r.state, l && ca(t, n, true), t.child;
  }
  function Dc(e) {
    var t = e.stateNode;
    t.pendingContext ? ua(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ua(e, t.context, false), ts(e, t.containerInfo);
  }
  function Ca(e, t, n, r, l) {
    return kn(), Yi(l), t.flags |= 256, de(e, t, n, r), t.child;
  }
  var pi = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
  };
  function hi(e) {
    return {
      baseLanes: e,
      cachePool: null,
      transitions: null
    };
  }
  function $c(e, t, n) {
    var r = t.pendingProps, l = V.current, o = false, i = (t.flags & 128) !== 0, u;
    if ((u = i) || (u = e !== null && e.memoizedState === null ? false : (l & 2) !== 0), u ? (o = true, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), $(V, l & 1), e === null) return si(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, i = {
      mode: "hidden",
      children: i
    }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = Kl(i, r, 0, null), e = Wt(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = hi(n), t.memoizedState = pi, e) : us(t, i));
    if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null)) return Pm(e, t, i, r, u, l, n);
    if (o) {
      o = r.fallback, i = t.mode, l = e.child, u = l.sibling;
      var a = {
        mode: "hidden",
        children: r.children
      };
      return !(i & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = Pt(l, a), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? o = Pt(u, o) : (o = Wt(o, i, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, i = e.child.memoizedState, i = i === null ? hi(n) : {
        baseLanes: i.baseLanes | n,
        cachePool: null,
        transitions: i.transitions
      }, o.memoizedState = i, o.childLanes = e.childLanes & ~n, t.memoizedState = pi, r;
    }
    return o = e.child, e = o.sibling, r = Pt(o, {
      mode: "visible",
      children: r.children
    }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [
      e
    ], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function us(e, t) {
    return t = Kl({
      mode: "visible",
      children: t
    }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function Hr(e, t, n, r) {
    return r !== null && Yi(r), jn(t, e.child, null, n), e = us(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Pm(e, t, n, r, l, o, i) {
    if (n) return t.flags & 256 ? (t.flags &= -257, r = No(Error(C(422))), Hr(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = Kl({
      mode: "visible",
      children: r.children
    }, l, 0, null), o = Wt(o, l, i, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && jn(t, e.child, null, i), t.child.memoizedState = hi(i), t.memoizedState = pi, o);
    if (!(t.mode & 1)) return Hr(e, t, i, null);
    if (l.data === "$!") {
      if (r = l.nextSibling && l.nextSibling.dataset, r) var u = r.dgst;
      return r = u, o = Error(C(419)), r = No(o, r, void 0), Hr(e, t, i, r);
    }
    if (u = (i & e.childLanes) !== 0, ve || u) {
      if (r = re, r !== null) {
        switch (i & -i) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, at(e, l), Ue(r, e, l, -1));
      }
      return hs(), r = No(Error(C(421))), Hr(e, t, i, r);
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Bm.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, je = Nt(l.nextSibling), Ne = t, W = true, $e = null, e !== null && (_e[Le++] = nt, _e[Le++] = rt, _e[Le++] = Vt, nt = e.id, rt = e.overflow, Vt = t), t = us(t, r.children), t.flags |= 4096, t);
  }
  function Ea(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), ai(e.return, t, n);
  }
  function So(e, t, n, r, l) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: r,
      tail: n,
      tailMode: l
    } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = l);
  }
  function Bc(e, t, n) {
    var r = t.pendingProps, l = r.revealOrder, o = r.tail;
    if (de(e, t, r.children, n), r = V.current, r & 2) r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ea(e, n, t);
        else if (e.tag === 19) Ea(e, n, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
      r &= 1;
    }
    if ($(V, r), !(t.mode & 1)) t.memoizedState = null;
    else switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && Cl(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), So(t, false, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && Cl(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        So(t, true, n, null, o);
        break;
      case "together":
        So(t, false, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function ll(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function ut(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Qt |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(C(153));
    if (t.child !== null) {
      for (e = t.child, n = Pt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Pt(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function _m(e, t, n) {
    switch (t.tag) {
      case 3:
        Dc(t), kn();
        break;
      case 5:
        mc(t);
        break;
      case 1:
        xe(t.type) && wl(t);
        break;
      case 4:
        ts(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, l = t.memoizedProps.value;
        $(jl, r._currentValue), r._currentValue = l;
        break;
      case 13:
        if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? ($(V, V.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? $c(e, t, n) : ($(V, V.current & 1), e = ut(e, t, n), e !== null ? e.sibling : null);
        $(V, V.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, e.flags & 128) {
          if (r) return Bc(e, t, n);
          t.flags |= 128;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), $(V, V.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Ac(e, t, n);
    }
    return ut(e, t, n);
  }
  var Uc, gi, Wc, Hc;
  Uc = function(e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
  };
  gi = function() {
  };
  Wc = function(e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
      e = t.stateNode, Bt(Xe.current);
      var o = null;
      switch (n) {
        case "input":
          l = zo(e, l), r = zo(e, r), o = [];
          break;
        case "select":
          l = Q({}, l, {
            value: void 0
          }), r = Q({}, r, {
            value: void 0
          }), o = [];
          break;
        case "textarea":
          l = Bo(e, l), r = Bo(e, r), o = [];
          break;
        default:
          typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = yl);
      }
      Wo(n, r);
      var i;
      n = null;
      for (c in l) if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null) if (c === "style") {
        var u = l[c];
        for (i in u) u.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
      } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (rr.hasOwnProperty(c) ? o || (o = []) : (o = o || []).push(c, null));
      for (c in r) {
        var a = r[c];
        if (u = l == null ? void 0 : l[c], r.hasOwnProperty(c) && a !== u && (a != null || u != null)) if (c === "style") if (u) {
          for (i in u) !u.hasOwnProperty(i) || a && a.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
          for (i in a) a.hasOwnProperty(i) && u[i] !== a[i] && (n || (n = {}), n[i] = a[i]);
        } else n || (o || (o = []), o.push(c, n)), n = a;
        else c === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, u = u ? u.__html : void 0, a != null && u !== a && (o = o || []).push(c, a)) : c === "children" ? typeof a != "string" && typeof a != "number" || (o = o || []).push(c, "" + a) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (rr.hasOwnProperty(c) ? (a != null && c === "onScroll" && B("scroll", e), o || u === a || (o = [])) : (o = o || []).push(c, a));
      }
      n && (o = o || []).push("style", n);
      var c = o;
      (t.updateQueue = c) && (t.flags |= 4);
    }
  };
  Hc = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function Bn(e, t) {
    if (!W) switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
        n === null ? e.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
        r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    }
  }
  function ae(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
    else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function Lm(e, t, n) {
    var r = t.pendingProps;
    switch (Gi(t), t.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return ae(t), null;
      case 1:
        return xe(t.type) && xl(), ae(t), null;
      case 3:
        return r = t.stateNode, Nn(), U(ye), U(ce), rs(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Ur(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, $e !== null && (Ni($e), $e = null))), gi(e, t), ae(t), null;
      case 5:
        ns(t);
        var l = Bt(hr.current);
        if (n = t.type, e !== null && t.stateNode != null) Wc(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(C(166));
            return ae(t), null;
          }
          if (e = Bt(Xe.current), Ur(t)) {
            r = t.stateNode, n = t.type;
            var o = t.memoizedProps;
            switch (r[Ge] = t, r[mr] = o, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                B("cancel", r), B("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                B("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Qn.length; l++) B(Qn[l], r);
                break;
              case "source":
                B("error", r);
                break;
              case "img":
              case "image":
              case "link":
                B("error", r), B("load", r);
                break;
              case "details":
                B("toggle", r);
                break;
              case "input":
                Is(r, o), B("invalid", r);
                break;
              case "select":
                r._wrapperState = {
                  wasMultiple: !!o.multiple
                }, B("invalid", r);
                break;
              case "textarea":
                zs(r, o), B("invalid", r);
            }
            Wo(n, o), l = null;
            for (var i in o) if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== true && Br(r.textContent, u, e), l = [
                "children",
                u
              ]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== true && Br(r.textContent, u, e), l = [
                "children",
                "" + u
              ]) : rr.hasOwnProperty(i) && u != null && i === "onScroll" && B("scroll", r);
            }
            switch (n) {
              case "input":
                Tr(r), As(r, o, true);
                break;
              case "textarea":
                Tr(r), Ds(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof o.onClick == "function" && (r.onclick = yl);
            }
            r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = yu(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, {
              is: r.is
            }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = true : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[Ge] = t, e[mr] = r, Uc(e, t, false, false), t.stateNode = e;
            e: {
              switch (i = Ho(n, r), n) {
                case "dialog":
                  B("cancel", e), B("close", e), l = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  B("load", e), l = r;
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < Qn.length; l++) B(Qn[l], e);
                  l = r;
                  break;
                case "source":
                  B("error", e), l = r;
                  break;
                case "img":
                case "image":
                case "link":
                  B("error", e), B("load", e), l = r;
                  break;
                case "details":
                  B("toggle", e), l = r;
                  break;
                case "input":
                  Is(e, r), l = zo(e, r), B("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  e._wrapperState = {
                    wasMultiple: !!r.multiple
                  }, l = Q({}, r, {
                    value: void 0
                  }), B("invalid", e);
                  break;
                case "textarea":
                  zs(e, r), l = Bo(e, r), B("invalid", e);
                  break;
                default:
                  l = r;
              }
              Wo(n, l), u = l;
              for (o in u) if (u.hasOwnProperty(o)) {
                var a = u[o];
                o === "style" ? bu(e, a) : o === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && xu(e, a)) : o === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && lr(e, a) : typeof a == "number" && lr(e, "" + a) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (rr.hasOwnProperty(o) ? a != null && o === "onScroll" && B("scroll", e) : a != null && Ti(e, o, a, i));
              }
              switch (n) {
                case "input":
                  Tr(e), As(e, r, false);
                  break;
                case "textarea":
                  Tr(e), Ds(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + _t(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, o = r.value, o != null ? pn(e, !!r.multiple, o, false) : r.defaultValue != null && pn(e, !!r.multiple, r.defaultValue, true);
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = yl);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = true;
                  break e;
                default:
                  r = false;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return ae(t), null;
      case 6:
        if (e && t.stateNode != null) Hc(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(C(166));
          if (n = Bt(hr.current), Bt(Xe.current), Ur(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[Ge] = t, (o = r.nodeValue !== n) && (e = Ne, e !== null)) switch (e.tag) {
              case 3:
                Br(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== true && Br(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            o && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Ge] = t, t.stateNode = r;
        }
        return ae(t), null;
      case 13:
        if (U(V), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (W && je !== null && t.mode & 1 && !(t.flags & 128)) ac(), kn(), t.flags |= 98560, o = false;
          else if (o = Ur(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!o) throw Error(C(318));
              if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(C(317));
              o[Ge] = t;
            } else kn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
            ae(t), o = false;
          } else $e !== null && (Ni($e), $e = null), o = true;
          if (!o) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || V.current & 1 ? te === 0 && (te = 3) : hs())), t.updateQueue !== null && (t.flags |= 4), ae(t), null);
      case 4:
        return Nn(), gi(e, t), e === null && dr(t.stateNode.containerInfo), ae(t), null;
      case 10:
        return Zi(t.type._context), ae(t), null;
      case 17:
        return xe(t.type) && xl(), ae(t), null;
      case 19:
        if (U(V), o = t.memoizedState, o === null) return ae(t), null;
        if (r = (t.flags & 128) !== 0, i = o.rendering, i === null) if (r) Bn(o, false);
        else {
          if (te !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
            if (i = Cl(e), i !== null) {
              for (t.flags |= 128, Bn(o, false), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : {
                lanes: e.lanes,
                firstContext: e.firstContext
              }), n = n.sibling;
              return $(V, V.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          o.tail !== null && J() > Cn && (t.flags |= 128, r = true, Bn(o, false), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = Cl(i), e !== null) {
            if (t.flags |= 128, r = true, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Bn(o, true), o.tail === null && o.tailMode === "hidden" && !i.alternate && !W) return ae(t), null;
          } else 2 * J() - o.renderingStartTime > Cn && n !== 1073741824 && (t.flags |= 128, r = true, Bn(o, false), t.lanes = 4194304);
          o.isBackwards ? (i.sibling = t.child, t.child = i) : (n = o.last, n !== null ? n.sibling = i : t.child = i, o.last = i);
        }
        return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = J(), t.sibling = null, n = V.current, $(V, r ? n & 1 | 2 : n & 1), t) : (ae(t), null);
      case 22:
      case 23:
        return ps(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? ke & 1073741824 && (ae(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ae(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(C(156, t.tag));
  }
  function Fm(e, t) {
    switch (Gi(t), t.tag) {
      case 1:
        return xe(t.type) && xl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Nn(), U(ye), U(ce), rs(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return ns(t), null;
      case 13:
        if (U(V), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(C(340));
          kn();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return U(V), null;
      case 4:
        return Nn(), null;
      case 10:
        return Zi(t.type._context), null;
      case 22:
      case 23:
        return ps(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Vr = false, ue = false, Rm = typeof WeakSet == "function" ? WeakSet : Set, R = null;
  function fn(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (r) {
      Y(e, t, r);
    }
    else n.current = null;
  }
  function vi(e, t, n) {
    try {
      n();
    } catch (r) {
      Y(e, t, r);
    }
  }
  var Pa = false;
  function Tm(e, t) {
    if (ei = hl, e = Yu(), Ki(e)) {
      if ("selectionStart" in e) var n = {
        start: e.selectionStart,
        end: e.selectionEnd
      };
      else e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset, o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0, u = -1, a = -1, c = 0, p = 0, h = e, g = null;
          t: for (; ; ) {
            for (var w; h !== n || l !== 0 && h.nodeType !== 3 || (u = i + l), h !== o || r !== 0 && h.nodeType !== 3 || (a = i + r), h.nodeType === 3 && (i += h.nodeValue.length), (w = h.firstChild) !== null; ) g = h, h = w;
            for (; ; ) {
              if (h === e) break t;
              if (g === n && ++c === l && (u = i), g === o && ++p === r && (a = i), (w = h.nextSibling) !== null) break;
              h = g, g = h.parentNode;
            }
            h = w;
          }
          n = u === -1 || a === -1 ? null : {
            start: u,
            end: a
          };
        } else n = null;
      }
      n = n || {
        start: 0,
        end: 0
      };
    } else n = null;
    for (ti = {
      focusedElem: e,
      selectionRange: n
    }, hl = false, R = t; R !== null; ) if (t = R, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, R = e;
    else for (; R !== null; ) {
      t = R;
      try {
        var b = t.alternate;
        if (t.flags & 1024) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (b !== null) {
              var x = b.memoizedProps, N = b.memoizedState, f = t.stateNode, d = f.getSnapshotBeforeUpdate(t.elementType === t.type ? x : ze(t.type, x), N);
              f.__reactInternalSnapshotBeforeUpdate = d;
            }
            break;
          case 3:
            var m = t.stateNode.containerInfo;
            m.nodeType === 1 ? m.textContent = "" : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(C(163));
        }
      } catch (y) {
        Y(t, t.return, y);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, R = e;
        break;
      }
      R = t.return;
    }
    return b = Pa, Pa = false, b;
  }
  function er(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & e) === e) {
          var o = l.destroy;
          l.destroy = void 0, o !== void 0 && vi(t, n, o);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Hl(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
      var n = t = t.next;
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function yi(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function Vc(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Vc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ge], delete t[mr], delete t[li], delete t[hm], delete t[gm])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Kc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function _a(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Kc(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function xi(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = yl));
    else if (r !== 4 && (e = e.child, e !== null)) for (xi(e, t, n), e = e.sibling; e !== null; ) xi(e, t, n), e = e.sibling;
  }
  function wi(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (wi(e, t, n), e = e.sibling; e !== null; ) wi(e, t, n), e = e.sibling;
  }
  var le = null, De = false;
  function mt(e, t, n) {
    for (n = n.child; n !== null; ) Qc(e, t, n), n = n.sibling;
  }
  function Qc(e, t, n) {
    if (Ye && typeof Ye.onCommitFiberUnmount == "function") try {
      Ye.onCommitFiberUnmount(Il, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        ue || fn(n, t);
      case 6:
        var r = le, l = De;
        le = null, mt(e, t, n), le = r, De = l, le !== null && (De ? (e = le, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : le.removeChild(n.stateNode));
        break;
      case 18:
        le !== null && (De ? (e = le, n = n.stateNode, e.nodeType === 8 ? yo(e.parentNode, n) : e.nodeType === 1 && yo(e, n), ar(e)) : yo(le, n.stateNode));
        break;
      case 4:
        r = le, l = De, le = n.stateNode.containerInfo, De = true, mt(e, t, n), le = r, De = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!ue && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          l = r = r.next;
          do {
            var o = l, i = o.destroy;
            o = o.tag, i !== void 0 && (o & 2 || o & 4) && vi(n, t, i), l = l.next;
          } while (l !== r);
        }
        mt(e, t, n);
        break;
      case 1:
        if (!ue && (fn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (u) {
          Y(n, t, u);
        }
        mt(e, t, n);
        break;
      case 21:
        mt(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (ue = (r = ue) || n.memoizedState !== null, mt(e, t, n), ue = r) : mt(e, t, n);
        break;
      default:
        mt(e, t, n);
    }
  }
  function La(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Rm()), t.forEach(function(r) {
        var l = Um.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
    }
  }
  function Ae(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e, i = t, u = i;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              le = u.stateNode, De = false;
              break e;
            case 3:
              le = u.stateNode.containerInfo, De = true;
              break e;
            case 4:
              le = u.stateNode.containerInfo, De = true;
              break e;
          }
          u = u.return;
        }
        if (le === null) throw Error(C(160));
        Qc(o, i, l), le = null, De = false;
        var a = l.alternate;
        a !== null && (a.return = null), l.return = null;
      } catch (c) {
        Y(l, t, c);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Gc(t, e), t = t.sibling;
  }
  function Gc(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Ae(t, e), Ke(e), r & 4) {
          try {
            er(3, e, e.return), Hl(3, e);
          } catch (x) {
            Y(e, e.return, x);
          }
          try {
            er(5, e, e.return);
          } catch (x) {
            Y(e, e.return, x);
          }
        }
        break;
      case 1:
        Ae(t, e), Ke(e), r & 512 && n !== null && fn(n, n.return);
        break;
      case 5:
        if (Ae(t, e), Ke(e), r & 512 && n !== null && fn(n, n.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            lr(l, "");
          } catch (x) {
            Y(e, e.return, x);
          }
        }
        if (r & 4 && (l = e.stateNode, l != null)) {
          var o = e.memoizedProps, i = n !== null ? n.memoizedProps : o, u = e.type, a = e.updateQueue;
          if (e.updateQueue = null, a !== null) try {
            u === "input" && o.type === "radio" && o.name != null && gu(l, o), Ho(u, i);
            var c = Ho(u, o);
            for (i = 0; i < a.length; i += 2) {
              var p = a[i], h = a[i + 1];
              p === "style" ? bu(l, h) : p === "dangerouslySetInnerHTML" ? xu(l, h) : p === "children" ? lr(l, h) : Ti(l, p, h, c);
            }
            switch (u) {
              case "input":
                Do(l, o);
                break;
              case "textarea":
                vu(l, o);
                break;
              case "select":
                var g = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var w = o.value;
                w != null ? pn(l, !!o.multiple, w, false) : g !== !!o.multiple && (o.defaultValue != null ? pn(l, !!o.multiple, o.defaultValue, true) : pn(l, !!o.multiple, o.multiple ? [] : "", false));
            }
            l[mr] = o;
          } catch (x) {
            Y(e, e.return, x);
          }
        }
        break;
      case 6:
        if (Ae(t, e), Ke(e), r & 4) {
          if (e.stateNode === null) throw Error(C(162));
          l = e.stateNode, o = e.memoizedProps;
          try {
            l.nodeValue = o;
          } catch (x) {
            Y(e, e.return, x);
          }
        }
        break;
      case 3:
        if (Ae(t, e), Ke(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          ar(t.containerInfo);
        } catch (x) {
          Y(e, e.return, x);
        }
        break;
      case 4:
        Ae(t, e), Ke(e);
        break;
      case 13:
        Ae(t, e), Ke(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (fs = J())), r & 4 && La(e);
        break;
      case 22:
        if (p = n !== null && n.memoizedState !== null, e.mode & 1 ? (ue = (c = ue) || p, Ae(t, e), ue = c) : Ae(t, e), Ke(e), r & 8192) {
          if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !p && e.mode & 1) for (R = e, p = e.child; p !== null; ) {
            for (h = R = p; R !== null; ) {
              switch (g = R, w = g.child, g.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  er(4, g, g.return);
                  break;
                case 1:
                  fn(g, g.return);
                  var b = g.stateNode;
                  if (typeof b.componentWillUnmount == "function") {
                    r = g, n = g.return;
                    try {
                      t = r, b.props = t.memoizedProps, b.state = t.memoizedState, b.componentWillUnmount();
                    } catch (x) {
                      Y(r, n, x);
                    }
                  }
                  break;
                case 5:
                  fn(g, g.return);
                  break;
                case 22:
                  if (g.memoizedState !== null) {
                    Ra(h);
                    continue;
                  }
              }
              w !== null ? (w.return = g, R = w) : Ra(h);
            }
            p = p.sibling;
          }
          e: for (p = null, h = e; ; ) {
            if (h.tag === 5) {
              if (p === null) {
                p = h;
                try {
                  l = h.stateNode, c ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = h.stateNode, a = h.memoizedProps.style, i = a != null && a.hasOwnProperty("display") ? a.display : null, u.style.display = wu("display", i));
                } catch (x) {
                  Y(e, e.return, x);
                }
              }
            } else if (h.tag === 6) {
              if (p === null) try {
                h.stateNode.nodeValue = c ? "" : h.memoizedProps;
              } catch (x) {
                Y(e, e.return, x);
              }
            } else if ((h.tag !== 22 && h.tag !== 23 || h.memoizedState === null || h === e) && h.child !== null) {
              h.child.return = h, h = h.child;
              continue;
            }
            if (h === e) break e;
            for (; h.sibling === null; ) {
              if (h.return === null || h.return === e) break e;
              p === h && (p = null), h = h.return;
            }
            p === h && (p = null), h.sibling.return = h.return, h = h.sibling;
          }
        }
        break;
      case 19:
        Ae(t, e), Ke(e), r & 4 && La(e);
        break;
      case 21:
        break;
      default:
        Ae(t, e), Ke(e);
    }
  }
  function Ke(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Kc(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(C(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (lr(l, ""), r.flags &= -33);
            var o = _a(e);
            wi(e, o, l);
            break;
          case 3:
          case 4:
            var i = r.stateNode.containerInfo, u = _a(e);
            xi(e, u, i);
            break;
          default:
            throw Error(C(161));
        }
      } catch (a) {
        Y(e, e.return, a);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Om(e, t, n) {
    R = e, Yc(e);
  }
  function Yc(e, t, n) {
    for (var r = (e.mode & 1) !== 0; R !== null; ) {
      var l = R, o = l.child;
      if (l.tag === 22 && r) {
        var i = l.memoizedState !== null || Vr;
        if (!i) {
          var u = l.alternate, a = u !== null && u.memoizedState !== null || ue;
          u = Vr;
          var c = ue;
          if (Vr = i, (ue = a) && !c) for (R = l; R !== null; ) i = R, a = i.child, i.tag === 22 && i.memoizedState !== null ? Ta(l) : a !== null ? (a.return = i, R = a) : Ta(l);
          for (; o !== null; ) R = o, Yc(o), o = o.sibling;
          R = l, Vr = u, ue = c;
        }
        Fa(e);
      } else l.subtreeFlags & 8772 && o !== null ? (o.return = l, R = o) : Fa(e);
    }
  }
  function Fa(e) {
    for (; R !== null; ) {
      var t = R;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ue || Hl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ue) if (n === null) r.componentDidMount();
              else {
                var l = t.elementType === t.type ? n.memoizedProps : ze(t.type, n.memoizedProps);
                r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var o = t.updateQueue;
              o !== null && ha(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (n = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    n = t.child.stateNode;
                    break;
                  case 1:
                    n = t.child.stateNode;
                }
                ha(t, i, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var p = c.memoizedState;
                  if (p !== null) {
                    var h = p.dehydrated;
                    h !== null && ar(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(C(163));
          }
          ue || t.flags & 512 && yi(t);
        } catch (g) {
          Y(t, t.return, g);
        }
      }
      if (t === e) {
        R = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, R = n;
        break;
      }
      R = t.return;
    }
  }
  function Ra(e) {
    for (; R !== null; ) {
      var t = R;
      if (t === e) {
        R = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, R = n;
        break;
      }
      R = t.return;
    }
  }
  function Ta(e) {
    for (; R !== null; ) {
      var t = R;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Hl(4, t);
            } catch (a) {
              Y(t, n, a);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (a) {
                Y(t, l, a);
              }
            }
            var o = t.return;
            try {
              yi(t);
            } catch (a) {
              Y(t, o, a);
            }
            break;
          case 5:
            var i = t.return;
            try {
              yi(t);
            } catch (a) {
              Y(t, i, a);
            }
        }
      } catch (a) {
        Y(t, t.return, a);
      }
      if (t === e) {
        R = null;
        break;
      }
      var u = t.sibling;
      if (u !== null) {
        u.return = t.return, R = u;
        break;
      }
      R = t.return;
    }
  }
  var Mm = Math.ceil, _l = ct.ReactCurrentDispatcher, cs = ct.ReactCurrentOwner, Re = ct.ReactCurrentBatchConfig, A = 0, re = null, q = null, oe = 0, ke = 0, mn = Tt(0), te = 0, xr = null, Qt = 0, Vl = 0, ds = 0, tr = null, ge = null, fs = 0, Cn = 1 / 0, et = null, Ll = false, bi = null, Ct = null, Kr = false, wt = null, Fl = 0, nr = 0, ki = null, ol = -1, il = 0;
  function fe() {
    return A & 6 ? J() : ol !== -1 ? ol : ol = J();
  }
  function Et(e) {
    return e.mode & 1 ? A & 2 && oe !== 0 ? oe & -oe : ym.transition !== null ? (il === 0 && (il = Tu()), il) : (e = z, e !== 0 || (e = window.event, e = e === void 0 ? 16 : $u(e.type)), e) : 1;
  }
  function Ue(e, t, n, r) {
    if (50 < nr) throw nr = 0, ki = null, Error(C(185));
    jr(e, n, r), (!(A & 2) || e !== re) && (e === re && (!(A & 2) && (Vl |= n), te === 4 && yt(e, oe)), we(e, r), n === 1 && A === 0 && !(t.mode & 1) && (Cn = J() + 500, Bl && Ot()));
  }
  function we(e, t) {
    var n = e.callbackNode;
    yf(e, t);
    var r = pl(e, e === re ? oe : 0);
    if (r === 0) n !== null && Us(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && Us(n), t === 1) e.tag === 0 ? vm(Oa.bind(null, e)) : oc(Oa.bind(null, e)), mm(function() {
        !(A & 6) && Ot();
      }), n = null;
      else {
        switch (Ou(r)) {
          case 1:
            n = zi;
            break;
          case 4:
            n = Fu;
            break;
          case 16:
            n = ml;
            break;
          case 536870912:
            n = Ru;
            break;
          default:
            n = ml;
        }
        n = rd(n, Xc.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function Xc(e, t) {
    if (ol = -1, il = 0, A & 6) throw Error(C(327));
    var n = e.callbackNode;
    if (xn() && e.callbackNode !== n) return null;
    var r = pl(e, e === re ? oe : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = Rl(e, r);
    else {
      t = r;
      var l = A;
      A |= 2;
      var o = Zc();
      (re !== e || oe !== t) && (et = null, Cn = J() + 500, Ut(e, t));
      do
        try {
          zm();
          break;
        } catch (u) {
          Jc(e, u);
        }
      while (true);
      Ji(), _l.current = o, A = l, q !== null ? t = 0 : (re = null, oe = 0, t = te);
    }
    if (t !== 0) {
      if (t === 2 && (l = Yo(e), l !== 0 && (r = l, t = ji(e, l))), t === 1) throw n = xr, Ut(e, 0), yt(e, r), we(e, J()), n;
      if (t === 6) yt(e, r);
      else {
        if (l = e.current.alternate, !(r & 30) && !Im(l) && (t = Rl(e, r), t === 2 && (o = Yo(e), o !== 0 && (r = o, t = ji(e, o))), t === 1)) throw n = xr, Ut(e, 0), yt(e, r), we(e, J()), n;
        switch (e.finishedWork = l, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(C(345));
          case 2:
            zt(e, ge, et);
            break;
          case 3:
            if (yt(e, r), (r & 130023424) === r && (t = fs + 500 - J(), 10 < t)) {
              if (pl(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & r) !== r) {
                fe(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = ri(zt.bind(null, e, ge, et), t);
              break;
            }
            zt(e, ge, et);
            break;
          case 4:
            if (yt(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var i = 31 - Be(r);
              o = 1 << i, i = t[i], i > l && (l = i), r &= ~o;
            }
            if (r = l, r = J() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Mm(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = ri(zt.bind(null, e, ge, et), r);
              break;
            }
            zt(e, ge, et);
            break;
          case 5:
            zt(e, ge, et);
            break;
          default:
            throw Error(C(329));
        }
      }
    }
    return we(e, J()), e.callbackNode === n ? Xc.bind(null, e) : null;
  }
  function ji(e, t) {
    var n = tr;
    return e.current.memoizedState.isDehydrated && (Ut(e, t).flags |= 256), e = Rl(e, t), e !== 2 && (t = ge, ge = n, t !== null && Ni(t)), e;
  }
  function Ni(e) {
    ge === null ? ge = e : ge.push.apply(ge, e);
  }
  function Im(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
          var l = n[r], o = l.getSnapshot;
          l = l.value;
          try {
            if (!We(o(), l)) return false;
          } catch {
            return false;
          }
        }
      }
      if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return true;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return true;
  }
  function yt(e, t) {
    for (t &= ~ds, t &= ~Vl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - Be(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function Oa(e) {
    if (A & 6) throw Error(C(327));
    xn();
    var t = pl(e, 0);
    if (!(t & 1)) return we(e, J()), null;
    var n = Rl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Yo(e);
      r !== 0 && (t = r, n = ji(e, r));
    }
    if (n === 1) throw n = xr, Ut(e, 0), yt(e, t), we(e, J()), n;
    if (n === 6) throw Error(C(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, zt(e, ge, et), we(e, J()), null;
  }
  function ms(e, t) {
    var n = A;
    A |= 1;
    try {
      return e(t);
    } finally {
      A = n, A === 0 && (Cn = J() + 500, Bl && Ot());
    }
  }
  function Gt(e) {
    wt !== null && wt.tag === 0 && !(A & 6) && xn();
    var t = A;
    A |= 1;
    var n = Re.transition, r = z;
    try {
      if (Re.transition = null, z = 1, e) return e();
    } finally {
      z = r, Re.transition = n, A = t, !(A & 6) && Ot();
    }
  }
  function ps() {
    ke = mn.current, U(mn);
  }
  function Ut(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, fm(n)), q !== null) for (n = q.return; n !== null; ) {
      var r = n;
      switch (Gi(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && xl();
          break;
        case 3:
          Nn(), U(ye), U(ce), rs();
          break;
        case 5:
          ns(r);
          break;
        case 4:
          Nn();
          break;
        case 13:
          U(V);
          break;
        case 19:
          U(V);
          break;
        case 10:
          Zi(r.type._context);
          break;
        case 22:
        case 23:
          ps();
      }
      n = n.return;
    }
    if (re = e, q = e = Pt(e.current, null), oe = ke = t, te = 0, xr = null, ds = Vl = Qt = 0, ge = tr = null, $t !== null) {
      for (t = 0; t < $t.length; t++) if (n = $t[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var l = r.next, o = n.pending;
        if (o !== null) {
          var i = o.next;
          o.next = l, r.next = i;
        }
        n.pending = r;
      }
      $t = null;
    }
    return e;
  }
  function Jc(e, t) {
    do {
      var n = q;
      try {
        if (Ji(), nl.current = Pl, El) {
          for (var r = K.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), r = r.next;
          }
          El = false;
        }
        if (Kt = 0, ne = ee = K = null, qn = false, gr = 0, cs.current = null, n === null || n.return === null) {
          te = 1, xr = t, q = null;
          break;
        }
        e: {
          var o = e, i = n.return, u = n, a = t;
          if (t = oe, u.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
            var c = a, p = u, h = p.tag;
            if (!(p.mode & 1) && (h === 0 || h === 11 || h === 15)) {
              var g = p.alternate;
              g ? (p.updateQueue = g.updateQueue, p.memoizedState = g.memoizedState, p.lanes = g.lanes) : (p.updateQueue = null, p.memoizedState = null);
            }
            var w = ba(i);
            if (w !== null) {
              w.flags &= -257, ka(w, i, u, o, t), w.mode & 1 && wa(o, c, t), t = w, a = c;
              var b = t.updateQueue;
              if (b === null) {
                var x = /* @__PURE__ */ new Set();
                x.add(a), t.updateQueue = x;
              } else b.add(a);
              break e;
            } else {
              if (!(t & 1)) {
                wa(o, c, t), hs();
                break e;
              }
              a = Error(C(426));
            }
          } else if (W && u.mode & 1) {
            var N = ba(i);
            if (N !== null) {
              !(N.flags & 65536) && (N.flags |= 256), ka(N, i, u, o, t), Yi(Sn(a, u));
              break e;
            }
          }
          o = a = Sn(a, u), te !== 4 && (te = 2), tr === null ? tr = [
            o
          ] : tr.push(o), o = i;
          do {
            switch (o.tag) {
              case 3:
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var f = Oc(o, a, t);
                pa(o, f);
                break e;
              case 1:
                u = a;
                var d = o.type, m = o.stateNode;
                if (!(o.flags & 128) && (typeof d.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (Ct === null || !Ct.has(m)))) {
                  o.flags |= 65536, t &= -t, o.lanes |= t;
                  var y = Mc(o, u, t);
                  pa(o, y);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        ed(n);
      } catch (j) {
        t = j, q === n && n !== null && (q = n = n.return);
        continue;
      }
      break;
    } while (true);
  }
  function Zc() {
    var e = _l.current;
    return _l.current = Pl, e === null ? Pl : e;
  }
  function hs() {
    (te === 0 || te === 3 || te === 2) && (te = 4), re === null || !(Qt & 268435455) && !(Vl & 268435455) || yt(re, oe);
  }
  function Rl(e, t) {
    var n = A;
    A |= 2;
    var r = Zc();
    (re !== e || oe !== t) && (et = null, Ut(e, t));
    do
      try {
        Am();
        break;
      } catch (l) {
        Jc(e, l);
      }
    while (true);
    if (Ji(), A = n, _l.current = r, q !== null) throw Error(C(261));
    return re = null, oe = 0, te;
  }
  function Am() {
    for (; q !== null; ) qc(q);
  }
  function zm() {
    for (; q !== null && !uf(); ) qc(q);
  }
  function qc(e) {
    var t = nd(e.alternate, e, ke);
    e.memoizedProps = e.pendingProps, t === null ? ed(e) : q = t, cs.current = null;
  }
  function ed(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, t.flags & 32768) {
        if (n = Fm(n, t), n !== null) {
          n.flags &= 32767, q = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          te = 6, q = null;
          return;
        }
      } else if (n = Lm(n, t, ke), n !== null) {
        q = n;
        return;
      }
      if (t = t.sibling, t !== null) {
        q = t;
        return;
      }
      q = t = e;
    } while (t !== null);
    te === 0 && (te = 5);
  }
  function zt(e, t, n) {
    var r = z, l = Re.transition;
    try {
      Re.transition = null, z = 1, Dm(e, t, n, r);
    } finally {
      Re.transition = l, z = r;
    }
    return null;
  }
  function Dm(e, t, n, r) {
    do
      xn();
    while (wt !== null);
    if (A & 6) throw Error(C(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(C(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (xf(e, o), e === re && (q = re = null, oe = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Kr || (Kr = true, rd(ml, function() {
      return xn(), null;
    })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
      o = Re.transition, Re.transition = null;
      var i = z;
      z = 1;
      var u = A;
      A |= 4, cs.current = null, Tm(e, n), Gc(n, e), om(ti), hl = !!ei, ti = ei = null, e.current = n, Om(n), cf(), A = u, z = i, Re.transition = o;
    } else e.current = n;
    if (Kr && (Kr = false, wt = e, Fl = l), o = e.pendingLanes, o === 0 && (Ct = null), mf(n.stateNode), we(e, J()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, {
      componentStack: l.stack,
      digest: l.digest
    });
    if (Ll) throw Ll = false, e = bi, bi = null, e;
    return Fl & 1 && e.tag !== 0 && xn(), o = e.pendingLanes, o & 1 ? e === ki ? nr++ : (nr = 0, ki = e) : nr = 0, Ot(), null;
  }
  function xn() {
    if (wt !== null) {
      var e = Ou(Fl), t = Re.transition, n = z;
      try {
        if (Re.transition = null, z = 16 > e ? 16 : e, wt === null) var r = false;
        else {
          if (e = wt, wt = null, Fl = 0, A & 6) throw Error(C(331));
          var l = A;
          for (A |= 4, R = e.current; R !== null; ) {
            var o = R, i = o.child;
            if (R.flags & 16) {
              var u = o.deletions;
              if (u !== null) {
                for (var a = 0; a < u.length; a++) {
                  var c = u[a];
                  for (R = c; R !== null; ) {
                    var p = R;
                    switch (p.tag) {
                      case 0:
                      case 11:
                      case 15:
                        er(8, p, o);
                    }
                    var h = p.child;
                    if (h !== null) h.return = p, R = h;
                    else for (; R !== null; ) {
                      p = R;
                      var g = p.sibling, w = p.return;
                      if (Vc(p), p === c) {
                        R = null;
                        break;
                      }
                      if (g !== null) {
                        g.return = w, R = g;
                        break;
                      }
                      R = w;
                    }
                  }
                }
                var b = o.alternate;
                if (b !== null) {
                  var x = b.child;
                  if (x !== null) {
                    b.child = null;
                    do {
                      var N = x.sibling;
                      x.sibling = null, x = N;
                    } while (x !== null);
                  }
                }
                R = o;
              }
            }
            if (o.subtreeFlags & 2064 && i !== null) i.return = o, R = i;
            else e: for (; R !== null; ) {
              if (o = R, o.flags & 2048) switch (o.tag) {
                case 0:
                case 11:
                case 15:
                  er(9, o, o.return);
              }
              var f = o.sibling;
              if (f !== null) {
                f.return = o.return, R = f;
                break e;
              }
              R = o.return;
            }
          }
          var d = e.current;
          for (R = d; R !== null; ) {
            i = R;
            var m = i.child;
            if (i.subtreeFlags & 2064 && m !== null) m.return = i, R = m;
            else e: for (i = d; R !== null; ) {
              if (u = R, u.flags & 2048) try {
                switch (u.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Hl(9, u);
                }
              } catch (j) {
                Y(u, u.return, j);
              }
              if (u === i) {
                R = null;
                break e;
              }
              var y = u.sibling;
              if (y !== null) {
                y.return = u.return, R = y;
                break e;
              }
              R = u.return;
            }
          }
          if (A = l, Ot(), Ye && typeof Ye.onPostCommitFiberRoot == "function") try {
            Ye.onPostCommitFiberRoot(Il, e);
          } catch {
          }
          r = true;
        }
        return r;
      } finally {
        z = n, Re.transition = t;
      }
    }
    return false;
  }
  function Ma(e, t, n) {
    t = Sn(n, t), t = Oc(e, t, 1), e = St(e, t, 1), t = fe(), e !== null && (jr(e, 1, t), we(e, t));
  }
  function Y(e, t, n) {
    if (e.tag === 3) Ma(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Ma(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Ct === null || !Ct.has(r))) {
          e = Sn(n, e), e = Mc(t, e, 1), t = St(t, e, 1), e = fe(), t !== null && (jr(t, 1, e), we(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function $m(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = fe(), e.pingedLanes |= e.suspendedLanes & n, re === e && (oe & n) === n && (te === 4 || te === 3 && (oe & 130023424) === oe && 500 > J() - fs ? Ut(e, 0) : ds |= n), we(e, t);
  }
  function td(e, t) {
    t === 0 && (e.mode & 1 ? (t = Ir, Ir <<= 1, !(Ir & 130023424) && (Ir = 4194304)) : t = 1);
    var n = fe();
    e = at(e, t), e !== null && (jr(e, t, n), we(e, n));
  }
  function Bm(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), td(e, n);
  }
  function Um(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode, l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(C(314));
    }
    r !== null && r.delete(t), td(e, n);
  }
  var nd;
  nd = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || ye.current) ve = true;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ve = false, _m(e, t, n);
      ve = !!(e.flags & 131072);
    }
    else ve = false, W && t.flags & 1048576 && ic(t, kl, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        ll(e, t), e = t.pendingProps;
        var l = bn(t, ce.current);
        yn(t, n), l = os(null, t, r, e, l, n);
        var o = is();
        return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, xe(r) ? (o = true, wl(t)) : o = false, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, es(t), l.updater = Wl, t.stateNode = l, l._reactInternals = t, ci(t, r, e, n), t = mi(null, t, r, true, o, n)) : (t.tag = 0, W && o && Qi(t), de(null, t, l, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (ll(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Hm(r), e = ze(r, e), l) {
            case 0:
              t = fi(null, t, r, e, n);
              break e;
            case 1:
              t = Sa(null, t, r, e, n);
              break e;
            case 11:
              t = ja(null, t, r, e, n);
              break e;
            case 14:
              t = Na(null, t, r, ze(r.type, e), n);
              break e;
          }
          throw Error(C(306, r, ""));
        }
        return t;
      case 0:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : ze(r, l), fi(e, t, r, l, n);
      case 1:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : ze(r, l), Sa(e, t, r, l, n);
      case 3:
        e: {
          if (Dc(t), e === null) throw Error(C(387));
          r = t.pendingProps, o = t.memoizedState, l = o.element, fc(e, t), Sl(t, r, null, n);
          var i = t.memoizedState;
          if (r = i.element, o.isDehydrated) if (o = {
            element: r,
            isDehydrated: false,
            cache: i.cache,
            pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
            transitions: i.transitions
          }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
            l = Sn(Error(C(423)), t), t = Ca(e, t, r, n, l);
            break e;
          } else if (r !== l) {
            l = Sn(Error(C(424)), t), t = Ca(e, t, r, n, l);
            break e;
          } else for (je = Nt(t.stateNode.containerInfo.firstChild), Ne = t, W = true, $e = null, n = cc(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (kn(), r === l) {
              t = ut(e, t, n);
              break e;
            }
            de(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return mc(t), e === null && si(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, ni(r, l) ? i = null : o !== null && ni(r, o) && (t.flags |= 32), zc(e, t), de(e, t, i, n), t.child;
      case 6:
        return e === null && si(t), null;
      case 13:
        return $c(e, t, n);
      case 4:
        return ts(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = jn(t, null, r, n) : de(e, t, r, n), t.child;
      case 11:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : ze(r, l), ja(e, t, r, l, n);
      case 7:
        return de(e, t, t.pendingProps, n), t.child;
      case 8:
        return de(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return de(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, i = l.value, $(jl, r._currentValue), r._currentValue = i, o !== null) if (We(o.value, i)) {
            if (o.children === l.children && !ye.current) {
              t = ut(e, t, n);
              break e;
            }
          } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
            var u = o.dependencies;
            if (u !== null) {
              i = o.child;
              for (var a = u.firstContext; a !== null; ) {
                if (a.context === r) {
                  if (o.tag === 1) {
                    a = lt(-1, n & -n), a.tag = 2;
                    var c = o.updateQueue;
                    if (c !== null) {
                      c = c.shared;
                      var p = c.pending;
                      p === null ? a.next = a : (a.next = p.next, p.next = a), c.pending = a;
                    }
                  }
                  o.lanes |= n, a = o.alternate, a !== null && (a.lanes |= n), ai(o.return, n, t), u.lanes |= n;
                  break;
                }
                a = a.next;
              }
            } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
            else if (o.tag === 18) {
              if (i = o.return, i === null) throw Error(C(341));
              i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), ai(i, n, t), i = o.sibling;
            } else i = o.child;
            if (i !== null) i.return = o;
            else for (i = o; i !== null; ) {
              if (i === t) {
                i = null;
                break;
              }
              if (o = i.sibling, o !== null) {
                o.return = i.return, i = o;
                break;
              }
              i = i.return;
            }
            o = i;
          }
          de(e, t, l.children, n), t = t.child;
        }
        return t;
      case 9:
        return l = t.type, r = t.pendingProps.children, yn(t, n), l = Te(l), r = r(l), t.flags |= 1, de(e, t, r, n), t.child;
      case 14:
        return r = t.type, l = ze(r, t.pendingProps), l = ze(r.type, l), Na(e, t, r, l, n);
      case 15:
        return Ic(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : ze(r, l), ll(e, t), t.tag = 1, xe(r) ? (e = true, wl(t)) : e = false, yn(t, n), Tc(t, r, l), ci(t, r, l, n), mi(null, t, r, true, e, n);
      case 19:
        return Bc(e, t, n);
      case 22:
        return Ac(e, t, n);
    }
    throw Error(C(156, t.tag));
  };
  function rd(e, t) {
    return Lu(e, t);
  }
  function Wm(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Fe(e, t, n, r) {
    return new Wm(e, t, n, r);
  }
  function gs(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Hm(e) {
    if (typeof e == "function") return gs(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === Mi) return 11;
      if (e === Ii) return 14;
    }
    return 2;
  }
  function Pt(e, t) {
    var n = e.alternate;
    return n === null ? (n = Fe(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function sl(e, t, n, r, l, o) {
    var i = 2;
    if (r = e, typeof e == "function") gs(e) && (i = 1);
    else if (typeof e == "string") i = 5;
    else e: switch (e) {
      case nn:
        return Wt(n.children, l, o, t);
      case Oi:
        i = 8, l |= 8;
        break;
      case Oo:
        return e = Fe(12, n, t, l | 2), e.elementType = Oo, e.lanes = o, e;
      case Mo:
        return e = Fe(13, n, t, l), e.elementType = Mo, e.lanes = o, e;
      case Io:
        return e = Fe(19, n, t, l), e.elementType = Io, e.lanes = o, e;
      case mu:
        return Kl(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case du:
            i = 10;
            break e;
          case fu:
            i = 9;
            break e;
          case Mi:
            i = 11;
            break e;
          case Ii:
            i = 14;
            break e;
          case ht:
            i = 16, r = null;
            break e;
        }
        throw Error(C(130, e == null ? e : typeof e, ""));
    }
    return t = Fe(i, n, t, l), t.elementType = e, t.type = r, t.lanes = o, t;
  }
  function Wt(e, t, n, r) {
    return e = Fe(7, e, r, t), e.lanes = n, e;
  }
  function Kl(e, t, n, r) {
    return e = Fe(22, e, r, t), e.elementType = mu, e.lanes = n, e.stateNode = {
      isHidden: false
    }, e;
  }
  function Co(e, t, n) {
    return e = Fe(6, e, null, t), e.lanes = n, e;
  }
  function Eo(e, t, n) {
    return t = Fe(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, t;
  }
  function Vm(e, t, n, r, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = io(0), this.expirationTimes = io(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = io(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function vs(e, t, n, r, l, o, i, u, a) {
    return e = new Vm(e, t, n, u, a), t === 1 ? (t = 1, o === true && (t |= 8)) : t = 0, o = Fe(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null
    }, es(o), e;
  }
  function Km(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: tn,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n
    };
  }
  function ld(e) {
    if (!e) return Lt;
    e = e._reactInternals;
    e: {
      if (Xt(e) !== e || e.tag !== 1) throw Error(C(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (xe(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(C(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (xe(n)) return lc(e, n, t);
    }
    return t;
  }
  function od(e, t, n, r, l, o, i, u, a) {
    return e = vs(n, r, true, e, l, o, i, u, a), e.context = ld(null), n = e.current, r = fe(), l = Et(n), o = lt(r, l), o.callback = t ?? null, St(n, o, l), e.current.lanes = l, jr(e, l, r), we(e, r), e;
  }
  function Ql(e, t, n, r) {
    var l = t.current, o = fe(), i = Et(l);
    return n = ld(n), t.context === null ? t.context = n : t.pendingContext = n, t = lt(o, i), t.payload = {
      element: e
    }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = St(l, t, i), e !== null && (Ue(e, l, i, o), tl(e, l, i)), i;
  }
  function Tl(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Ia(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function ys(e, t) {
    Ia(e, t), (e = e.alternate) && Ia(e, t);
  }
  function Qm() {
    return null;
  }
  var id = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function xs(e) {
    this._internalRoot = e;
  }
  Gl.prototype.render = xs.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(C(409));
    Ql(e, t, null, null);
  };
  Gl.prototype.unmount = xs.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Gt(function() {
        Ql(null, e, null, null);
      }), t[st] = null;
    }
  };
  function Gl(e) {
    this._internalRoot = e;
  }
  Gl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Au();
      e = {
        blockedOn: null,
        target: e,
        priority: t
      };
      for (var n = 0; n < vt.length && t !== 0 && t < vt[n].priority; n++) ;
      vt.splice(n, 0, e), n === 0 && Du(e);
    }
  };
  function ws(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Yl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Aa() {
  }
  function Gm(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var o = r;
        r = function() {
          var c = Tl(i);
          o.call(c);
        };
      }
      var i = od(t, r, e, 0, null, false, false, "", Aa);
      return e._reactRootContainer = i, e[st] = i.current, dr(e.nodeType === 8 ? e.parentNode : e), Gt(), i;
    }
    for (; l = e.lastChild; ) e.removeChild(l);
    if (typeof r == "function") {
      var u = r;
      r = function() {
        var c = Tl(a);
        u.call(c);
      };
    }
    var a = vs(e, 0, false, null, null, false, false, "", Aa);
    return e._reactRootContainer = a, e[st] = a.current, dr(e.nodeType === 8 ? e.parentNode : e), Gt(function() {
      Ql(t, a, n, r);
    }), a;
  }
  function Xl(e, t, n, r, l) {
    var o = n._reactRootContainer;
    if (o) {
      var i = o;
      if (typeof l == "function") {
        var u = l;
        l = function() {
          var a = Tl(i);
          u.call(a);
        };
      }
      Ql(t, i, e, l);
    } else i = Gm(n, t, e, l, r);
    return Tl(i);
  }
  Mu = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Kn(t.pendingLanes);
          n !== 0 && (Di(t, n | 1), we(t, J()), !(A & 6) && (Cn = J() + 500, Ot()));
        }
        break;
      case 13:
        Gt(function() {
          var r = at(e, 1);
          if (r !== null) {
            var l = fe();
            Ue(r, e, 1, l);
          }
        }), ys(e, 1);
    }
  };
  $i = function(e) {
    if (e.tag === 13) {
      var t = at(e, 134217728);
      if (t !== null) {
        var n = fe();
        Ue(t, e, 134217728, n);
      }
      ys(e, 134217728);
    }
  };
  Iu = function(e) {
    if (e.tag === 13) {
      var t = Et(e), n = at(e, t);
      if (n !== null) {
        var r = fe();
        Ue(n, e, t, r);
      }
      ys(e, t);
    }
  };
  Au = function() {
    return z;
  };
  zu = function(e, t) {
    var n = z;
    try {
      return z = e, t();
    } finally {
      z = n;
    }
  };
  Ko = function(e, t, n) {
    switch (t) {
      case "input":
        if (Do(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var l = $l(r);
              if (!l) throw Error(C(90));
              hu(r), Do(r, l);
            }
          }
        }
        break;
      case "textarea":
        vu(e, n);
        break;
      case "select":
        t = n.value, t != null && pn(e, !!n.multiple, t, false);
    }
  };
  Nu = ms;
  Su = Gt;
  var Ym = {
    usingClientEntryPoint: false,
    Events: [
      Sr,
      sn,
      $l,
      ku,
      ju,
      ms
    ]
  }, Un = {
    findFiberByHostInstance: Dt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
  }, Xm = {
    bundleType: Un.bundleType,
    version: Un.version,
    rendererPackageName: Un.rendererPackageName,
    rendererConfig: Un.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: ct.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
      return e = Pu(e), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Un.findFiberByHostInstance || Qm,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Qr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Qr.isDisabled && Qr.supportsFiber) try {
      Il = Qr.inject(Xm), Ye = Qr;
    } catch {
    }
  }
  Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ym;
  Ce.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!ws(t)) throw Error(C(200));
    return Km(e, t, null, n);
  };
  Ce.createRoot = function(e, t) {
    if (!ws(e)) throw Error(C(299));
    var n = false, r = "", l = id;
    return t != null && (t.unstable_strictMode === true && (n = true), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = vs(e, 1, false, null, null, n, false, r, l), e[st] = t.current, dr(e.nodeType === 8 ? e.parentNode : e), new xs(t);
  };
  Ce.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(C(188)) : (e = Object.keys(e).join(","), Error(C(268, e)));
    return e = Pu(t), e = e === null ? null : e.stateNode, e;
  };
  Ce.flushSync = function(e) {
    return Gt(e);
  };
  Ce.hydrate = function(e, t, n) {
    if (!Yl(t)) throw Error(C(200));
    return Xl(null, e, t, true, n);
  };
  Ce.hydrateRoot = function(e, t, n) {
    if (!ws(e)) throw Error(C(405));
    var r = n != null && n.hydratedSources || null, l = false, o = "", i = id;
    if (n != null && (n.unstable_strictMode === true && (l = true), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = od(t, null, e, 1, n ?? null, l, false, o, i), e[st] = t.current, dr(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [
      n,
      l
    ] : t.mutableSourceEagerHydrationData.push(n, l);
    return new Gl(t);
  };
  Ce.render = function(e, t, n) {
    if (!Yl(t)) throw Error(C(200));
    return Xl(null, e, t, false, n);
  };
  Ce.unmountComponentAtNode = function(e) {
    if (!Yl(e)) throw Error(C(40));
    return e._reactRootContainer ? (Gt(function() {
      Xl(null, null, e, false, function() {
        e._reactRootContainer = null, e[st] = null;
      });
    }), true) : false;
  };
  Ce.unstable_batchedUpdates = ms;
  Ce.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Yl(n)) throw Error(C(200));
    if (e == null || e._reactInternals === void 0) throw Error(C(38));
    return Xl(e, t, n, false, r);
  };
  Ce.version = "18.3.1-next-f1338f8080-20240426";
  function sd() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sd);
    } catch (e) {
      console.error(e);
    }
  }
  sd(), su.exports = Ce;
  var Jm = su.exports, za = Jm;
  Ro.createRoot = za.createRoot, Ro.hydrateRoot = za.hydrateRoot;
  var bs = {};
  Object.defineProperty(bs, "__esModule", {
    value: true
  });
  bs.parse = lp;
  bs.serialize = op;
  const Zm = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/, qm = /^[\u0021-\u003A\u003C-\u007E]*$/, ep = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i, tp = /^[\u0020-\u003A\u003D-\u007E]*$/, np = Object.prototype.toString, rp = (() => {
    const e = function() {
    };
    return e.prototype = /* @__PURE__ */ Object.create(null), e;
  })();
  function lp(e, t) {
    const n = new rp(), r = e.length;
    if (r < 2) return n;
    const l = (t == null ? void 0 : t.decode) || ip;
    let o = 0;
    do {
      const i = e.indexOf("=", o);
      if (i === -1) break;
      const u = e.indexOf(";", o), a = u === -1 ? r : u;
      if (i > a) {
        o = e.lastIndexOf(";", i - 1) + 1;
        continue;
      }
      const c = Da(e, o, i), p = $a(e, i, c), h = e.slice(c, p);
      if (n[h] === void 0) {
        let g = Da(e, i + 1, a), w = $a(e, a, g);
        const b = l(e.slice(g, w));
        n[h] = b;
      }
      o = a + 1;
    } while (o < r);
    return n;
  }
  function Da(e, t, n) {
    do {
      const r = e.charCodeAt(t);
      if (r !== 32 && r !== 9) return t;
    } while (++t < n);
    return n;
  }
  function $a(e, t, n) {
    for (; t > n; ) {
      const r = e.charCodeAt(--t);
      if (r !== 32 && r !== 9) return t + 1;
    }
    return n;
  }
  function op(e, t, n) {
    const r = (n == null ? void 0 : n.encode) || encodeURIComponent;
    if (!Zm.test(e)) throw new TypeError(`argument name is invalid: ${e}`);
    const l = r(t);
    if (!qm.test(l)) throw new TypeError(`argument val is invalid: ${t}`);
    let o = e + "=" + l;
    if (!n) return o;
    if (n.maxAge !== void 0) {
      if (!Number.isInteger(n.maxAge)) throw new TypeError(`option maxAge is invalid: ${n.maxAge}`);
      o += "; Max-Age=" + n.maxAge;
    }
    if (n.domain) {
      if (!ep.test(n.domain)) throw new TypeError(`option domain is invalid: ${n.domain}`);
      o += "; Domain=" + n.domain;
    }
    if (n.path) {
      if (!tp.test(n.path)) throw new TypeError(`option path is invalid: ${n.path}`);
      o += "; Path=" + n.path;
    }
    if (n.expires) {
      if (!sp(n.expires) || !Number.isFinite(n.expires.valueOf())) throw new TypeError(`option expires is invalid: ${n.expires}`);
      o += "; Expires=" + n.expires.toUTCString();
    }
    if (n.httpOnly && (o += "; HttpOnly"), n.secure && (o += "; Secure"), n.partitioned && (o += "; Partitioned"), n.priority) switch (typeof n.priority == "string" ? n.priority.toLowerCase() : void 0) {
      case "low":
        o += "; Priority=Low";
        break;
      case "medium":
        o += "; Priority=Medium";
        break;
      case "high":
        o += "; Priority=High";
        break;
      default:
        throw new TypeError(`option priority is invalid: ${n.priority}`);
    }
    if (n.sameSite) switch (typeof n.sameSite == "string" ? n.sameSite.toLowerCase() : n.sameSite) {
      case true:
      case "strict":
        o += "; SameSite=Strict";
        break;
      case "lax":
        o += "; SameSite=Lax";
        break;
      case "none":
        o += "; SameSite=None";
        break;
      default:
        throw new TypeError(`option sameSite is invalid: ${n.sameSite}`);
    }
    return o;
  }
  function ip(e) {
    if (e.indexOf("%") === -1) return e;
    try {
      return decodeURIComponent(e);
    } catch {
      return e;
    }
  }
  function sp(e) {
    return np.call(e) === "[object Date]";
  }
  var Ba = "popstate";
  function ap(e = {}) {
    function t(r, l) {
      let { pathname: o, search: i, hash: u } = r.location;
      return Si("", {
        pathname: o,
        search: i,
        hash: u
      }, l.state && l.state.usr || null, l.state && l.state.key || "default");
    }
    function n(r, l) {
      return typeof l == "string" ? l : wr(l);
    }
    return cp(t, n, null, e);
  }
  function H(e, t) {
    if (e === false || e === null || typeof e > "u") throw new Error(t);
  }
  function He(e, t) {
    if (!e) {
      typeof console < "u" && console.warn(t);
      try {
        throw new Error(t);
      } catch {
      }
    }
  }
  function up() {
    return Math.random().toString(36).substring(2, 10);
  }
  function Ua(e, t) {
    return {
      usr: e.state,
      key: e.key,
      idx: t
    };
  }
  function Si(e, t, n = null, r) {
    return {
      pathname: typeof e == "string" ? e : e.pathname,
      search: "",
      hash: "",
      ...typeof t == "string" ? Ln(t) : t,
      state: n,
      key: t && t.key || r || up()
    };
  }
  function wr({ pathname: e = "/", search: t = "", hash: n = "" }) {
    return t && t !== "?" && (e += t.charAt(0) === "?" ? t : "?" + t), n && n !== "#" && (e += n.charAt(0) === "#" ? n : "#" + n), e;
  }
  function Ln(e) {
    let t = {};
    if (e) {
      let n = e.indexOf("#");
      n >= 0 && (t.hash = e.substring(n), e = e.substring(0, n));
      let r = e.indexOf("?");
      r >= 0 && (t.search = e.substring(r), e = e.substring(0, r)), e && (t.pathname = e);
    }
    return t;
  }
  function cp(e, t, n, r = {}) {
    let { window: l = document.defaultView, v5Compat: o = false } = r, i = l.history, u = "POP", a = null, c = p();
    c == null && (c = 0, i.replaceState({
      ...i.state,
      idx: c
    }, ""));
    function p() {
      return (i.state || {
        idx: null
      }).idx;
    }
    function h() {
      u = "POP";
      let N = p(), f = N == null ? null : N - c;
      c = N, a && a({
        action: u,
        location: x.location,
        delta: f
      });
    }
    function g(N, f) {
      u = "PUSH";
      let d = Si(x.location, N, f);
      c = p() + 1;
      let m = Ua(d, c), y = x.createHref(d);
      try {
        i.pushState(m, "", y);
      } catch (j) {
        if (j instanceof DOMException && j.name === "DataCloneError") throw j;
        l.location.assign(y);
      }
      o && a && a({
        action: u,
        location: x.location,
        delta: 1
      });
    }
    function w(N, f) {
      u = "REPLACE";
      let d = Si(x.location, N, f);
      c = p();
      let m = Ua(d, c), y = x.createHref(d);
      i.replaceState(m, "", y), o && a && a({
        action: u,
        location: x.location,
        delta: 0
      });
    }
    function b(N) {
      let f = l.location.origin !== "null" ? l.location.origin : l.location.href, d = typeof N == "string" ? N : wr(N);
      return d = d.replace(/ $/, "%20"), H(f, `No window.location.(origin|href) available to create URL for href: ${d}`), new URL(d, f);
    }
    let x = {
      get action() {
        return u;
      },
      get location() {
        return e(l, i);
      },
      listen(N) {
        if (a) throw new Error("A history only accepts one active listener");
        return l.addEventListener(Ba, h), a = N, () => {
          l.removeEventListener(Ba, h), a = null;
        };
      },
      createHref(N) {
        return t(l, N);
      },
      createURL: b,
      encodeLocation(N) {
        let f = b(N);
        return {
          pathname: f.pathname,
          search: f.search,
          hash: f.hash
        };
      },
      push: g,
      replace: w,
      go(N) {
        return i.go(N);
      }
    };
    return x;
  }
  function ad(e, t, n = "/") {
    return dp(e, t, n, false);
  }
  function dp(e, t, n, r) {
    let l = typeof t == "string" ? Ln(t) : t, o = Ft(l.pathname || "/", n);
    if (o == null) return null;
    let i = ud(e);
    fp(i);
    let u = null;
    for (let a = 0; u == null && a < i.length; ++a) {
      let c = jp(o);
      u = bp(i[a], c, r);
    }
    return u;
  }
  function ud(e, t = [], n = [], r = "") {
    let l = (o, i, u) => {
      let a = {
        relativePath: u === void 0 ? o.path || "" : u,
        caseSensitive: o.caseSensitive === true,
        childrenIndex: i,
        route: o
      };
      a.relativePath.startsWith("/") && (H(a.relativePath.startsWith(r), `Absolute route path "${a.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`), a.relativePath = a.relativePath.slice(r.length));
      let c = ot([
        r,
        a.relativePath
      ]), p = n.concat(a);
      o.children && o.children.length > 0 && (H(o.index !== true, `Index routes must not have child routes. Please remove all child routes from route path "${c}".`), ud(o.children, t, p, c)), !(o.path == null && !o.index) && t.push({
        path: c,
        score: xp(c, o.index),
        routesMeta: p
      });
    };
    return e.forEach((o, i) => {
      var _a2;
      if (o.path === "" || !((_a2 = o.path) == null ? void 0 : _a2.includes("?"))) l(o, i);
      else for (let u of cd(o.path)) l(o, i, u);
    }), t;
  }
  function cd(e) {
    let t = e.split("/");
    if (t.length === 0) return [];
    let [n, ...r] = t, l = n.endsWith("?"), o = n.replace(/\?$/, "");
    if (r.length === 0) return l ? [
      o,
      ""
    ] : [
      o
    ];
    let i = cd(r.join("/")), u = [];
    return u.push(...i.map((a) => a === "" ? o : [
      o,
      a
    ].join("/"))), l && u.push(...i), u.map((a) => e.startsWith("/") && a === "" ? "/" : a);
  }
  function fp(e) {
    e.sort((t, n) => t.score !== n.score ? n.score - t.score : wp(t.routesMeta.map((r) => r.childrenIndex), n.routesMeta.map((r) => r.childrenIndex)));
  }
  var mp = /^:[\w-]+$/, pp = 3, hp = 2, gp = 1, vp = 10, yp = -2, Wa = (e) => e === "*";
  function xp(e, t) {
    let n = e.split("/"), r = n.length;
    return n.some(Wa) && (r += yp), t && (r += hp), n.filter((l) => !Wa(l)).reduce((l, o) => l + (mp.test(o) ? pp : o === "" ? gp : vp), r);
  }
  function wp(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l]) ? e[e.length - 1] - t[t.length - 1] : 0;
  }
  function bp(e, t, n = false) {
    let { routesMeta: r } = e, l = {}, o = "/", i = [];
    for (let u = 0; u < r.length; ++u) {
      let a = r[u], c = u === r.length - 1, p = o === "/" ? t : t.slice(o.length) || "/", h = Ol({
        path: a.relativePath,
        caseSensitive: a.caseSensitive,
        end: c
      }, p), g = a.route;
      if (!h && c && n && !r[r.length - 1].route.index && (h = Ol({
        path: a.relativePath,
        caseSensitive: a.caseSensitive,
        end: false
      }, p)), !h) return null;
      Object.assign(l, h.params), i.push({
        params: l,
        pathname: ot([
          o,
          h.pathname
        ]),
        pathnameBase: Ep(ot([
          o,
          h.pathnameBase
        ])),
        route: g
      }), h.pathnameBase !== "/" && (o = ot([
        o,
        h.pathnameBase
      ]));
    }
    return i;
  }
  function Ol(e, t) {
    typeof e == "string" && (e = {
      path: e,
      caseSensitive: false,
      end: true
    });
    let [n, r] = kp(e.path, e.caseSensitive, e.end), l = t.match(n);
    if (!l) return null;
    let o = l[0], i = o.replace(/(.)\/+$/, "$1"), u = l.slice(1);
    return {
      params: r.reduce((c, { paramName: p, isOptional: h }, g) => {
        if (p === "*") {
          let b = u[g] || "";
          i = o.slice(0, o.length - b.length).replace(/(.)\/+$/, "$1");
        }
        const w = u[g];
        return h && !w ? c[p] = void 0 : c[p] = (w || "").replace(/%2F/g, "/"), c;
      }, {}),
      pathname: o,
      pathnameBase: i,
      pattern: e
    };
  }
  function kp(e, t = false, n = true) {
    He(e === "*" || !e.endsWith("*") || e.endsWith("/*"), `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, "/*")}".`);
    let r = [], l = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (i, u, a) => (r.push({
      paramName: u,
      isOptional: a != null
    }), a ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
      paramName: "*"
    }), l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? l += "\\/*$" : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"), [
      new RegExp(l, t ? void 0 : "i"),
      r
    ];
  }
  function jp(e) {
    try {
      return e.split("/").map((t) => decodeURIComponent(t).replace(/\//g, "%2F")).join("/");
    } catch (t) {
      return He(false, `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`), e;
    }
  }
  function Ft(e, t) {
    if (t === "/") return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length, r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/";
  }
  function Np(e, t = "/") {
    let { pathname: n, search: r = "", hash: l = "" } = typeof e == "string" ? Ln(e) : e;
    return {
      pathname: n ? n.startsWith("/") ? n : Sp(n, t) : t,
      search: Pp(r),
      hash: _p(l)
    };
  }
  function Sp(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach((l) => {
      l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
    }), n.length > 1 ? n.join("/") : "/";
  }
  function Po(e, t, n, r) {
    return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
  }
  function Cp(e) {
    return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0);
  }
  function ks(e) {
    let t = Cp(e);
    return t.map((n, r) => r === t.length - 1 ? n.pathname : n.pathnameBase);
  }
  function js(e, t, n, r = false) {
    let l;
    typeof e == "string" ? l = Ln(e) : (l = {
      ...e
    }, H(!l.pathname || !l.pathname.includes("?"), Po("?", "pathname", "search", l)), H(!l.pathname || !l.pathname.includes("#"), Po("#", "pathname", "hash", l)), H(!l.search || !l.search.includes("#"), Po("#", "search", "hash", l)));
    let o = e === "" || l.pathname === "", i = o ? "/" : l.pathname, u;
    if (i == null) u = n;
    else {
      let h = t.length - 1;
      if (!r && i.startsWith("..")) {
        let g = i.split("/");
        for (; g[0] === ".."; ) g.shift(), h -= 1;
        l.pathname = g.join("/");
      }
      u = h >= 0 ? t[h] : "/";
    }
    let a = Np(l, u), c = i && i !== "/" && i.endsWith("/"), p = (o || i === ".") && n.endsWith("/");
    return !a.pathname.endsWith("/") && (c || p) && (a.pathname += "/"), a;
  }
  var ot = (e) => e.join("/").replace(/\/\/+/g, "/"), Ep = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"), Pp = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, _p = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
  function Lp(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
  }
  var dd = [
    "POST",
    "PUT",
    "PATCH",
    "DELETE"
  ];
  new Set(dd);
  var Fp = [
    "GET",
    ...dd
  ];
  new Set(Fp);
  var Fn = v.createContext(null);
  Fn.displayName = "DataRouter";
  var Jl = v.createContext(null);
  Jl.displayName = "DataRouterState";
  var fd = v.createContext({
    isTransitioning: false
  });
  fd.displayName = "ViewTransition";
  var Rp = v.createContext(/* @__PURE__ */ new Map());
  Rp.displayName = "Fetchers";
  var Tp = v.createContext(null);
  Tp.displayName = "Await";
  var Ve = v.createContext(null);
  Ve.displayName = "Navigation";
  var Er = v.createContext(null);
  Er.displayName = "Location";
  var Je = v.createContext({
    outlet: null,
    matches: [],
    isDataRoute: false
  });
  Je.displayName = "Route";
  var Ns = v.createContext(null);
  Ns.displayName = "RouteError";
  function Op(e, { relative: t } = {}) {
    H(Rn(), "useHref() may be used only in the context of a <Router> component.");
    let { basename: n, navigator: r } = v.useContext(Ve), { hash: l, pathname: o, search: i } = Pr(e, {
      relative: t
    }), u = o;
    return n !== "/" && (u = o === "/" ? n : ot([
      n,
      o
    ])), r.createHref({
      pathname: u,
      search: i,
      hash: l
    });
  }
  function Rn() {
    return v.useContext(Er) != null;
  }
  function dt() {
    return H(Rn(), "useLocation() may be used only in the context of a <Router> component."), v.useContext(Er).location;
  }
  var md = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
  function pd(e) {
    v.useContext(Ve).static || v.useLayoutEffect(e);
  }
  function Zl() {
    let { isDataRoute: e } = v.useContext(Je);
    return e ? Qp() : Mp();
  }
  function Mp() {
    H(Rn(), "useNavigate() may be used only in the context of a <Router> component.");
    let e = v.useContext(Fn), { basename: t, navigator: n } = v.useContext(Ve), { matches: r } = v.useContext(Je), { pathname: l } = dt(), o = JSON.stringify(ks(r)), i = v.useRef(false);
    return pd(() => {
      i.current = true;
    }), v.useCallback((a, c = {}) => {
      if (He(i.current, md), !i.current) return;
      if (typeof a == "number") {
        n.go(a);
        return;
      }
      let p = js(a, JSON.parse(o), l, c.relative === "path");
      e == null && t !== "/" && (p.pathname = p.pathname === "/" ? t : ot([
        t,
        p.pathname
      ])), (c.replace ? n.replace : n.push)(p, c.state, c);
    }, [
      t,
      n,
      o,
      l,
      e
    ]);
  }
  v.createContext(null);
  function Pr(e, { relative: t } = {}) {
    let { matches: n } = v.useContext(Je), { pathname: r } = dt(), l = JSON.stringify(ks(n));
    return v.useMemo(() => js(e, JSON.parse(l), r, t === "path"), [
      e,
      l,
      r,
      t
    ]);
  }
  function Ip(e, t) {
    return hd(e, t);
  }
  function hd(e, t, n, r) {
    var _a2;
    H(Rn(), "useRoutes() may be used only in the context of a <Router> component.");
    let { navigator: l, static: o } = v.useContext(Ve), { matches: i } = v.useContext(Je), u = i[i.length - 1], a = u ? u.params : {}, c = u ? u.pathname : "/", p = u ? u.pathnameBase : "/", h = u && u.route;
    {
      let d = h && h.path || "";
      gd(c, !h || d.endsWith("*") || d.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${d}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${d}"> to <Route path="${d === "/" ? "*" : `${d}/*`}">.`);
    }
    let g = dt(), w;
    if (t) {
      let d = typeof t == "string" ? Ln(t) : t;
      H(p === "/" || ((_a2 = d.pathname) == null ? void 0 : _a2.startsWith(p)), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${d.pathname}" was given in the \`location\` prop.`), w = d;
    } else w = g;
    let b = w.pathname || "/", x = b;
    if (p !== "/") {
      let d = p.replace(/^\//, "").split("/");
      x = "/" + b.replace(/^\//, "").split("/").slice(d.length).join("/");
    }
    let N = !o && n && n.matches && n.matches.length > 0 ? n.matches : ad(e, {
      pathname: x
    });
    He(h || N != null, `No routes matched location "${w.pathname}${w.search}${w.hash}" `), He(N == null || N[N.length - 1].route.element !== void 0 || N[N.length - 1].route.Component !== void 0 || N[N.length - 1].route.lazy !== void 0, `Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
    let f = Bp(N && N.map((d) => Object.assign({}, d, {
      params: Object.assign({}, a, d.params),
      pathname: ot([
        p,
        l.encodeLocation ? l.encodeLocation(d.pathname).pathname : d.pathname
      ]),
      pathnameBase: d.pathnameBase === "/" ? p : ot([
        p,
        l.encodeLocation ? l.encodeLocation(d.pathnameBase).pathname : d.pathnameBase
      ])
    })), i, n, r);
    return t && f ? v.createElement(Er.Provider, {
      value: {
        location: {
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default",
          ...w
        },
        navigationType: "POP"
      }
    }, f) : f;
  }
  function Ap() {
    let e = Kp(), t = Lp(e) ? `${e.status} ${e.statusText}` : e instanceof Error ? e.message : JSON.stringify(e), n = e instanceof Error ? e.stack : null, r = "rgba(200,200,200, 0.5)", l = {
      padding: "0.5rem",
      backgroundColor: r
    }, o = {
      padding: "2px 4px",
      backgroundColor: r
    }, i = null;
    return console.error("Error handled by React Router default ErrorBoundary:", e), i = v.createElement(v.Fragment, null, v.createElement("p", null, "\u{1F4BF} Hey developer \u{1F44B}"), v.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", v.createElement("code", {
      style: o
    }, "ErrorBoundary"), " or", " ", v.createElement("code", {
      style: o
    }, "errorElement"), " prop on your route.")), v.createElement(v.Fragment, null, v.createElement("h2", null, "Unexpected Application Error!"), v.createElement("h3", {
      style: {
        fontStyle: "italic"
      }
    }, t), n ? v.createElement("pre", {
      style: l
    }, n) : null, i);
  }
  var zp = v.createElement(Ap, null), Dp = class extends v.Component {
    constructor(e) {
      super(e), this.state = {
        location: e.location,
        revalidation: e.revalidation,
        error: e.error
      };
    }
    static getDerivedStateFromError(e) {
      return {
        error: e
      };
    }
    static getDerivedStateFromProps(e, t) {
      return t.location !== e.location || t.revalidation !== "idle" && e.revalidation === "idle" ? {
        error: e.error,
        location: e.location,
        revalidation: e.revalidation
      } : {
        error: e.error !== void 0 ? e.error : t.error,
        location: t.location,
        revalidation: e.revalidation || t.revalidation
      };
    }
    componentDidCatch(e, t) {
      console.error("React Router caught the following error during render", e, t);
    }
    render() {
      return this.state.error !== void 0 ? v.createElement(Je.Provider, {
        value: this.props.routeContext
      }, v.createElement(Ns.Provider, {
        value: this.state.error,
        children: this.props.component
      })) : this.props.children;
    }
  };
  function $p({ routeContext: e, match: t, children: n }) {
    let r = v.useContext(Fn);
    return r && r.static && r.staticContext && (t.route.errorElement || t.route.ErrorBoundary) && (r.staticContext._deepestRenderedBoundaryId = t.route.id), v.createElement(Je.Provider, {
      value: e
    }, n);
  }
  function Bp(e, t = [], n = null, r = null) {
    if (e == null) {
      if (!n) return null;
      if (n.errors) e = n.matches;
      else if (t.length === 0 && !n.initialized && n.matches.length > 0) e = n.matches;
      else return null;
    }
    let l = e, o = n == null ? void 0 : n.errors;
    if (o != null) {
      let a = l.findIndex((c) => c.route.id && (o == null ? void 0 : o[c.route.id]) !== void 0);
      H(a >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`), l = l.slice(0, Math.min(l.length, a + 1));
    }
    let i = false, u = -1;
    if (n) for (let a = 0; a < l.length; a++) {
      let c = l[a];
      if ((c.route.HydrateFallback || c.route.hydrateFallbackElement) && (u = a), c.route.id) {
        let { loaderData: p, errors: h } = n, g = c.route.loader && !p.hasOwnProperty(c.route.id) && (!h || h[c.route.id] === void 0);
        if (c.route.lazy || g) {
          i = true, u >= 0 ? l = l.slice(0, u + 1) : l = [
            l[0]
          ];
          break;
        }
      }
    }
    return l.reduceRight((a, c, p) => {
      let h, g = false, w = null, b = null;
      n && (h = o && c.route.id ? o[c.route.id] : void 0, w = c.route.errorElement || zp, i && (u < 0 && p === 0 ? (gd("route-fallback", false, "No `HydrateFallback` element provided to render during initial hydration"), g = true, b = null) : u === p && (g = true, b = c.route.hydrateFallbackElement || null)));
      let x = t.concat(l.slice(0, p + 1)), N = () => {
        let f;
        return h ? f = w : g ? f = b : c.route.Component ? f = v.createElement(c.route.Component, null) : c.route.element ? f = c.route.element : f = a, v.createElement($p, {
          match: c,
          routeContext: {
            outlet: a,
            matches: x,
            isDataRoute: n != null
          },
          children: f
        });
      };
      return n && (c.route.ErrorBoundary || c.route.errorElement || p === 0) ? v.createElement(Dp, {
        location: n.location,
        revalidation: n.revalidation,
        component: w,
        error: h,
        children: N(),
        routeContext: {
          outlet: null,
          matches: x,
          isDataRoute: true
        }
      }) : N();
    }, null);
  }
  function Ss(e) {
    return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
  }
  function Up(e) {
    let t = v.useContext(Fn);
    return H(t, Ss(e)), t;
  }
  function Wp(e) {
    let t = v.useContext(Jl);
    return H(t, Ss(e)), t;
  }
  function Hp(e) {
    let t = v.useContext(Je);
    return H(t, Ss(e)), t;
  }
  function Cs(e) {
    let t = Hp(e), n = t.matches[t.matches.length - 1];
    return H(n.route.id, `${e} can only be used on routes that contain a unique "id"`), n.route.id;
  }
  function Vp() {
    return Cs("useRouteId");
  }
  function Kp() {
    var _a2;
    let e = v.useContext(Ns), t = Wp("useRouteError"), n = Cs("useRouteError");
    return e !== void 0 ? e : (_a2 = t.errors) == null ? void 0 : _a2[n];
  }
  function Qp() {
    let { router: e } = Up("useNavigate"), t = Cs("useNavigate"), n = v.useRef(false);
    return pd(() => {
      n.current = true;
    }), v.useCallback(async (l, o = {}) => {
      He(n.current, md), n.current && (typeof l == "number" ? e.navigate(l) : await e.navigate(l, {
        fromRouteId: t,
        ...o
      }));
    }, [
      e,
      t
    ]);
  }
  var Ha = {};
  function gd(e, t, n) {
    !t && !Ha[e] && (Ha[e] = true, He(false, n));
  }
  v.memo(Gp);
  function Gp({ routes: e, future: t, state: n }) {
    return hd(e, void 0, n, t);
  }
  function Yp({ to: e, replace: t, state: n, relative: r }) {
    H(Rn(), "<Navigate> may be used only in the context of a <Router> component.");
    let { static: l } = v.useContext(Ve);
    He(!l, "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");
    let { matches: o } = v.useContext(Je), { pathname: i } = dt(), u = Zl(), a = js(e, ks(o), i, r === "path"), c = JSON.stringify(a);
    return v.useEffect(() => {
      u(JSON.parse(c), {
        replace: t,
        state: n,
        relative: r
      });
    }, [
      u,
      c,
      r,
      t,
      n
    ]), null;
  }
  function pt(e) {
    H(false, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.");
  }
  function Xp({ basename: e = "/", children: t = null, location: n, navigationType: r = "POP", navigator: l, static: o = false }) {
    H(!Rn(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
    let i = e.replace(/^\/*/, "/"), u = v.useMemo(() => ({
      basename: i,
      navigator: l,
      static: o,
      future: {}
    }), [
      i,
      l,
      o
    ]);
    typeof n == "string" && (n = Ln(n));
    let { pathname: a = "/", search: c = "", hash: p = "", state: h = null, key: g = "default" } = n, w = v.useMemo(() => {
      let b = Ft(a, i);
      return b == null ? null : {
        location: {
          pathname: b,
          search: c,
          hash: p,
          state: h,
          key: g
        },
        navigationType: r
      };
    }, [
      i,
      a,
      c,
      p,
      h,
      g,
      r
    ]);
    return He(w != null, `<Router basename="${i}"> is not able to match the URL "${a}${c}${p}" because it does not start with the basename, so the <Router> won't render anything.`), w == null ? null : v.createElement(Ve.Provider, {
      value: u
    }, v.createElement(Er.Provider, {
      children: t,
      value: w
    }));
  }
  function Jp({ children: e, location: t }) {
    return Ip(Ci(e), t);
  }
  function Ci(e, t = []) {
    let n = [];
    return v.Children.forEach(e, (r, l) => {
      if (!v.isValidElement(r)) return;
      let o = [
        ...t,
        l
      ];
      if (r.type === v.Fragment) {
        n.push.apply(n, Ci(r.props.children, o));
        return;
      }
      H(r.type === pt, `[${typeof r.type == "string" ? r.type : r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`), H(!r.props.index || !r.props.children, "An index route cannot have child routes.");
      let i = {
        id: r.props.id || o.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        hydrateFallbackElement: r.props.hydrateFallbackElement,
        HydrateFallback: r.props.HydrateFallback,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary: r.props.hasErrorBoundary === true || r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy
      };
      r.props.children && (i.children = Ci(r.props.children, o)), n.push(i);
    }), n;
  }
  var al = "get", ul = "application/x-www-form-urlencoded";
  function ql(e) {
    return e != null && typeof e.tagName == "string";
  }
  function Zp(e) {
    return ql(e) && e.tagName.toLowerCase() === "button";
  }
  function qp(e) {
    return ql(e) && e.tagName.toLowerCase() === "form";
  }
  function e0(e) {
    return ql(e) && e.tagName.toLowerCase() === "input";
  }
  function t0(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
  }
  function n0(e, t) {
    return e.button === 0 && (!t || t === "_self") && !t0(e);
  }
  var Gr = null;
  function r0() {
    if (Gr === null) try {
      new FormData(document.createElement("form"), 0), Gr = false;
    } catch {
      Gr = true;
    }
    return Gr;
  }
  var l0 = /* @__PURE__ */ new Set([
    "application/x-www-form-urlencoded",
    "multipart/form-data",
    "text/plain"
  ]);
  function _o(e) {
    return e != null && !l0.has(e) ? (He(false, `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ul}"`), null) : e;
  }
  function o0(e, t) {
    let n, r, l, o, i;
    if (qp(e)) {
      let u = e.getAttribute("action");
      r = u ? Ft(u, t) : null, n = e.getAttribute("method") || al, l = _o(e.getAttribute("enctype")) || ul, o = new FormData(e);
    } else if (Zp(e) || e0(e) && (e.type === "submit" || e.type === "image")) {
      let u = e.form;
      if (u == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
      let a = e.getAttribute("formaction") || u.getAttribute("action");
      if (r = a ? Ft(a, t) : null, n = e.getAttribute("formmethod") || u.getAttribute("method") || al, l = _o(e.getAttribute("formenctype")) || _o(u.getAttribute("enctype")) || ul, o = new FormData(u, e), !r0()) {
        let { name: c, type: p, value: h } = e;
        if (p === "image") {
          let g = c ? `${c}.` : "";
          o.append(`${g}x`, "0"), o.append(`${g}y`, "0");
        } else c && o.append(c, h);
      }
    } else {
      if (ql(e)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
      n = al, r = null, l = ul, i = e;
    }
    return o && l === "text/plain" && (i = o, o = void 0), {
      action: r,
      method: n.toLowerCase(),
      encType: l,
      formData: o,
      body: i
    };
  }
  function Es(e, t) {
    if (e === false || e === null || typeof e > "u") throw new Error(t);
  }
  async function i0(e, t) {
    if (e.id in t) return t[e.id];
    try {
      let n = await import(e.module).then(async (m) => {
        await m.__tla;
        return m;
      });
      return t[e.id] = n, n;
    } catch (n) {
      return console.error(`Error loading route module \`${e.module}\`, reloading page...`), console.error(n), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {
      });
    }
  }
  function s0(e) {
    return e == null ? false : e.href == null ? e.rel === "preload" && typeof e.imageSrcSet == "string" && typeof e.imageSizes == "string" : typeof e.rel == "string" && typeof e.href == "string";
  }
  async function a0(e, t, n) {
    let r = await Promise.all(e.map(async (l) => {
      let o = t.routes[l.route.id];
      if (o) {
        let i = await i0(o, n);
        return i.links ? i.links() : [];
      }
      return [];
    }));
    return f0(r.flat(1).filter(s0).filter((l) => l.rel === "stylesheet" || l.rel === "preload").map((l) => l.rel === "stylesheet" ? {
      ...l,
      rel: "prefetch",
      as: "style"
    } : {
      ...l,
      rel: "prefetch"
    }));
  }
  function Va(e, t, n, r, l, o) {
    let i = (a, c) => n[c] ? a.route.id !== n[c].route.id : true, u = (a, c) => {
      var _a2;
      return n[c].pathname !== a.pathname || ((_a2 = n[c].route.path) == null ? void 0 : _a2.endsWith("*")) && n[c].params["*"] !== a.params["*"];
    };
    return o === "assets" ? t.filter((a, c) => i(a, c) || u(a, c)) : o === "data" ? t.filter((a, c) => {
      var _a2;
      let p = r.routes[a.route.id];
      if (!p || !p.hasLoader) return false;
      if (i(a, c) || u(a, c)) return true;
      if (a.route.shouldRevalidate) {
        let h = a.route.shouldRevalidate({
          currentUrl: new URL(l.pathname + l.search + l.hash, window.origin),
          currentParams: ((_a2 = n[0]) == null ? void 0 : _a2.params) || {},
          nextUrl: new URL(e, window.origin),
          nextParams: a.params,
          defaultShouldRevalidate: true
        });
        if (typeof h == "boolean") return h;
      }
      return true;
    }) : [];
  }
  function u0(e, t, { includeHydrateFallback: n } = {}) {
    return c0(e.map((r) => {
      let l = t.routes[r.route.id];
      if (!l) return [];
      let o = [
        l.module
      ];
      return l.clientActionModule && (o = o.concat(l.clientActionModule)), l.clientLoaderModule && (o = o.concat(l.clientLoaderModule)), n && l.hydrateFallbackModule && (o = o.concat(l.hydrateFallbackModule)), l.imports && (o = o.concat(l.imports)), o;
    }).flat(1));
  }
  function c0(e) {
    return [
      ...new Set(e)
    ];
  }
  function d0(e) {
    let t = {}, n = Object.keys(e).sort();
    for (let r of n) t[r] = e[r];
    return t;
  }
  function f0(e, t) {
    let n = /* @__PURE__ */ new Set();
    return new Set(t), e.reduce((r, l) => {
      let o = JSON.stringify(d0(l));
      return n.has(o) || (n.add(o), r.push({
        key: o,
        link: l
      })), r;
    }, []);
  }
  function m0(e) {
    let t = typeof e == "string" ? new URL(e, typeof window > "u" ? "server://singlefetch/" : window.location.origin) : e;
    return t.pathname === "/" ? t.pathname = "_root.data" : t.pathname = `${t.pathname.replace(/\/$/, "")}.data`, t;
  }
  function p0() {
    let e = v.useContext(Fn);
    return Es(e, "You must render this element inside a <DataRouterContext.Provider> element"), e;
  }
  function h0() {
    let e = v.useContext(Jl);
    return Es(e, "You must render this element inside a <DataRouterStateContext.Provider> element"), e;
  }
  var Ps = v.createContext(void 0);
  Ps.displayName = "FrameworkContext";
  function vd() {
    let e = v.useContext(Ps);
    return Es(e, "You must render this element inside a <HydratedRouter> element"), e;
  }
  function g0(e, t) {
    let n = v.useContext(Ps), [r, l] = v.useState(false), [o, i] = v.useState(false), { onFocus: u, onBlur: a, onMouseEnter: c, onMouseLeave: p, onTouchStart: h } = t, g = v.useRef(null);
    v.useEffect(() => {
      if (e === "render" && i(true), e === "viewport") {
        let x = (f) => {
          f.forEach((d) => {
            i(d.isIntersecting);
          });
        }, N = new IntersectionObserver(x, {
          threshold: 0.5
        });
        return g.current && N.observe(g.current), () => {
          N.disconnect();
        };
      }
    }, [
      e
    ]), v.useEffect(() => {
      if (r) {
        let x = setTimeout(() => {
          i(true);
        }, 100);
        return () => {
          clearTimeout(x);
        };
      }
    }, [
      r
    ]);
    let w = () => {
      l(true);
    }, b = () => {
      l(false), i(false);
    };
    return n ? e !== "intent" ? [
      o,
      g,
      {}
    ] : [
      o,
      g,
      {
        onFocus: Wn(u, w),
        onBlur: Wn(a, b),
        onMouseEnter: Wn(c, w),
        onMouseLeave: Wn(p, b),
        onTouchStart: Wn(h, w)
      }
    ] : [
      false,
      g,
      {}
    ];
  }
  function Wn(e, t) {
    return (n) => {
      e && e(n), n.defaultPrevented || t(n);
    };
  }
  function v0({ page: e, ...t }) {
    let { router: n } = p0(), r = v.useMemo(() => ad(n.routes, e, n.basename), [
      n.routes,
      e,
      n.basename
    ]);
    return r ? v.createElement(x0, {
      page: e,
      matches: r,
      ...t
    }) : null;
  }
  function y0(e) {
    let { manifest: t, routeModules: n } = vd(), [r, l] = v.useState([]);
    return v.useEffect(() => {
      let o = false;
      return a0(e, t, n).then((i) => {
        o || l(i);
      }), () => {
        o = true;
      };
    }, [
      e,
      t,
      n
    ]), r;
  }
  function x0({ page: e, matches: t, ...n }) {
    let r = dt(), { manifest: l, routeModules: o } = vd(), { loaderData: i, matches: u } = h0(), a = v.useMemo(() => Va(e, t, u, l, r, "data"), [
      e,
      t,
      u,
      l,
      r
    ]), c = v.useMemo(() => Va(e, t, u, l, r, "assets"), [
      e,
      t,
      u,
      l,
      r
    ]), p = v.useMemo(() => {
      if (e === r.pathname + r.search + r.hash) return [];
      let w = /* @__PURE__ */ new Set(), b = false;
      if (t.forEach((N) => {
        var _a2;
        let f = l.routes[N.route.id];
        !f || !f.hasLoader || (!a.some((d) => d.route.id === N.route.id) && N.route.id in i && ((_a2 = o[N.route.id]) == null ? void 0 : _a2.shouldRevalidate) || f.hasClientLoader ? b = true : w.add(N.route.id));
      }), w.size === 0) return [];
      let x = m0(e);
      return b && w.size > 0 && x.searchParams.set("_routes", t.filter((N) => w.has(N.route.id)).map((N) => N.route.id).join(",")), [
        x.pathname + x.search
      ];
    }, [
      i,
      r,
      l,
      a,
      t,
      e,
      o
    ]), h = v.useMemo(() => u0(c, l), [
      c,
      l
    ]), g = y0(c);
    return v.createElement(v.Fragment, null, p.map((w) => v.createElement("link", {
      key: w,
      rel: "prefetch",
      as: "fetch",
      href: w,
      ...n
    })), h.map((w) => v.createElement("link", {
      key: w,
      rel: "modulepreload",
      href: w,
      ...n
    })), g.map(({ key: w, link: b }) => v.createElement("link", {
      key: w,
      ...b
    })));
  }
  function w0(...e) {
    return (t) => {
      e.forEach((n) => {
        typeof n == "function" ? n(t) : n != null && (n.current = t);
      });
    };
  }
  var yd = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
  try {
    yd && (window.__reactRouterVersion = "7.2.0");
  } catch {
  }
  function b0({ basename: e, children: t, window: n }) {
    let r = v.useRef();
    r.current == null && (r.current = ap({
      window: n,
      v5Compat: true
    }));
    let l = r.current, [o, i] = v.useState({
      action: l.action,
      location: l.location
    }), u = v.useCallback((a) => {
      v.startTransition(() => i(a));
    }, [
      i
    ]);
    return v.useLayoutEffect(() => l.listen(u), [
      l,
      u
    ]), v.createElement(Xp, {
      basename: e,
      children: t,
      location: o.location,
      navigationType: o.action,
      navigator: l
    });
  }
  var xd = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, wd = v.forwardRef(function({ onClick: t, discover: n = "render", prefetch: r = "none", relative: l, reloadDocument: o, replace: i, state: u, target: a, to: c, preventScrollReset: p, viewTransition: h, ...g }, w) {
    let { basename: b } = v.useContext(Ve), x = typeof c == "string" && xd.test(c), N, f = false;
    if (typeof c == "string" && x && (N = c, yd)) try {
      let _ = new URL(window.location.href), M = c.startsWith("//") ? new URL(_.protocol + c) : new URL(c), X = Ft(M.pathname, b);
      M.origin === _.origin && X != null ? c = X + M.search + M.hash : f = true;
    } catch {
      He(false, `<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`);
    }
    let d = Op(c, {
      relative: l
    }), [m, y, j] = g0(r, g), S = S0(c, {
      replace: i,
      state: u,
      target: a,
      preventScrollReset: p,
      relative: l,
      viewTransition: h
    });
    function k(_) {
      t && t(_), _.defaultPrevented || S(_);
    }
    let E = v.createElement("a", {
      ...g,
      ...j,
      href: N || d,
      onClick: f || o ? t : k,
      ref: w0(w, y),
      target: a,
      "data-discover": !x && n === "render" ? "true" : void 0
    });
    return m && !x ? v.createElement(v.Fragment, null, E, v.createElement(v0, {
      page: d
    })) : E;
  });
  wd.displayName = "Link";
  var k0 = v.forwardRef(function({ "aria-current": t = "page", caseSensitive: n = false, className: r = "", end: l = false, style: o, to: i, viewTransition: u, children: a, ...c }, p) {
    let h = Pr(i, {
      relative: c.relative
    }), g = dt(), w = v.useContext(Jl), { navigator: b, basename: x } = v.useContext(Ve), N = w != null && L0(h) && u === true, f = b.encodeLocation ? b.encodeLocation(h).pathname : h.pathname, d = g.pathname, m = w && w.navigation && w.navigation.location ? w.navigation.location.pathname : null;
    n || (d = d.toLowerCase(), m = m ? m.toLowerCase() : null, f = f.toLowerCase()), m && x && (m = Ft(m, x) || m);
    const y = f !== "/" && f.endsWith("/") ? f.length - 1 : f.length;
    let j = d === f || !l && d.startsWith(f) && d.charAt(y) === "/", S = m != null && (m === f || !l && m.startsWith(f) && m.charAt(f.length) === "/"), k = {
      isActive: j,
      isPending: S,
      isTransitioning: N
    }, E = j ? t : void 0, _;
    typeof r == "function" ? _ = r(k) : _ = [
      r,
      j ? "active" : null,
      S ? "pending" : null,
      N ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let M = typeof o == "function" ? o(k) : o;
    return v.createElement(wd, {
      ...c,
      "aria-current": E,
      className: _,
      ref: p,
      style: M,
      to: i,
      viewTransition: u
    }, typeof a == "function" ? a(k) : a);
  });
  k0.displayName = "NavLink";
  var j0 = v.forwardRef(({ discover: e = "render", fetcherKey: t, navigate: n, reloadDocument: r, replace: l, state: o, method: i = al, action: u, onSubmit: a, relative: c, preventScrollReset: p, viewTransition: h, ...g }, w) => {
    let b = P0(), x = _0(u, {
      relative: c
    }), N = i.toLowerCase() === "get" ? "get" : "post", f = typeof u == "string" && xd.test(u), d = (m) => {
      if (a && a(m), m.defaultPrevented) return;
      m.preventDefault();
      let y = m.nativeEvent.submitter, j = (y == null ? void 0 : y.getAttribute("formmethod")) || i;
      b(y || m.currentTarget, {
        fetcherKey: t,
        method: j,
        navigate: n,
        replace: l,
        state: o,
        relative: c,
        preventScrollReset: p,
        viewTransition: h
      });
    };
    return v.createElement("form", {
      ref: w,
      method: N,
      action: x,
      onSubmit: r ? a : d,
      ...g,
      "data-discover": !f && e === "render" ? "true" : void 0
    });
  });
  j0.displayName = "Form";
  function N0(e) {
    return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
  }
  function bd(e) {
    let t = v.useContext(Fn);
    return H(t, N0(e)), t;
  }
  function S0(e, { target: t, replace: n, state: r, preventScrollReset: l, relative: o, viewTransition: i } = {}) {
    let u = Zl(), a = dt(), c = Pr(e, {
      relative: o
    });
    return v.useCallback((p) => {
      if (n0(p, t)) {
        p.preventDefault();
        let h = n !== void 0 ? n : wr(a) === wr(c);
        u(e, {
          replace: h,
          state: r,
          preventScrollReset: l,
          relative: o,
          viewTransition: i
        });
      }
    }, [
      a,
      u,
      c,
      n,
      r,
      t,
      e,
      l,
      o,
      i
    ]);
  }
  var C0 = 0, E0 = () => `__${String(++C0)}__`;
  function P0() {
    let { router: e } = bd("useSubmit"), { basename: t } = v.useContext(Ve), n = Vp();
    return v.useCallback(async (r, l = {}) => {
      let { action: o, method: i, encType: u, formData: a, body: c } = o0(r, t);
      if (l.navigate === false) {
        let p = l.fetcherKey || E0();
        await e.fetch(p, n, l.action || o, {
          preventScrollReset: l.preventScrollReset,
          formData: a,
          body: c,
          formMethod: l.method || i,
          formEncType: l.encType || u,
          flushSync: l.flushSync
        });
      } else await e.navigate(l.action || o, {
        preventScrollReset: l.preventScrollReset,
        formData: a,
        body: c,
        formMethod: l.method || i,
        formEncType: l.encType || u,
        replace: l.replace,
        state: l.state,
        fromRouteId: n,
        flushSync: l.flushSync,
        viewTransition: l.viewTransition
      });
    }, [
      e,
      t,
      n
    ]);
  }
  function _0(e, { relative: t } = {}) {
    let { basename: n } = v.useContext(Ve), r = v.useContext(Je);
    H(r, "useFormAction must be used inside a RouteContext");
    let [l] = r.matches.slice(-1), o = {
      ...Pr(e || ".", {
        relative: t
      })
    }, i = dt();
    if (e == null) {
      o.search = i.search;
      let u = new URLSearchParams(o.search), a = u.getAll("index");
      if (a.some((p) => p === "")) {
        u.delete("index"), a.filter((h) => h).forEach((h) => u.append("index", h));
        let p = u.toString();
        o.search = p ? `?${p}` : "";
      }
    }
    return (!e || e === ".") && l.route.index && (o.search = o.search ? o.search.replace(/^\?/, "?index&") : "?index"), n !== "/" && (o.pathname = o.pathname === "/" ? n : ot([
      n,
      o.pathname
    ])), wr(o);
  }
  function L0(e, t = {}) {
    let n = v.useContext(fd);
    H(n != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
    let { basename: r } = bd("useViewTransitionState"), l = Pr(e, {
      relative: t.relative
    });
    if (!n.isTransitioning) return false;
    let o = Ft(n.currentLocation.pathname, r) || n.currentLocation.pathname, i = Ft(n.nextLocation.pathname, r) || n.nextLocation.pathname;
    return Ol(l.pathname, i) != null || Ol(l.pathname, o) != null;
  }
  new TextEncoder();
  const Ka = (e) => {
    let t;
    const n = /* @__PURE__ */ new Set(), r = (c, p) => {
      const h = typeof c == "function" ? c(t) : c;
      if (!Object.is(h, t)) {
        const g = t;
        t = p ?? (typeof h != "object" || h === null) ? h : Object.assign({}, t, h), n.forEach((w) => w(t, g));
      }
    }, l = () => t, u = {
      setState: r,
      getState: l,
      getInitialState: () => a,
      subscribe: (c) => (n.add(c), () => n.delete(c))
    }, a = t = e(r, l, u);
    return u;
  }, F0 = (e) => e ? Ka(e) : Ka, R0 = (e) => e;
  function T0(e, t = R0) {
    const n = Fo.useSyncExternalStore(e.subscribe, () => t(e.getState()), () => t(e.getInitialState()));
    return Fo.useDebugValue(n), n;
  }
  const Qa = (e) => {
    const t = F0(e), n = (r) => T0(t, r);
    return Object.assign(n, t), n;
  }, O0 = (e) => e ? Qa(e) : Qa, Ze = O0((e, t) => ({
    isAuthenticated: false,
    user: null,
    isLoading: true,
    isInitialized: false,
    initializeUser: async () => {
      var _a2, _b, _c2, _d2, _e2;
      if (t().isInitialized && t().user) return console.log("User already initialized"), true;
      console.log("Initializing user...");
      try {
        if (!((_d2 = (_c2 = (_b = (_a2 = window.Telegram) == null ? void 0 : _a2.WebApp) == null ? void 0 : _b.initDataUnsafe) == null ? void 0 : _c2.user) == null ? void 0 : _d2.id)) return console.error("Telegram WebApp \u043D\u0435 \u0438\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D"), e({
          isLoading: false
        }), false;
        const n = window.Telegram.WebApp.initDataUnsafe.user.id, r = window.Telegram.WebApp.initDataUnsafe.user.username || window.Telegram.WebApp.initDataUnsafe.user.first_name || `user${n}`, o = new URLSearchParams(window.location.search).get("ref");
        try {
          console.log("Checking for existing user...");
          const i = await fetch(`/get-user?telegramId=${n}`, {
            headers: {
              "X-Telegram-Init-Data": window.Telegram.WebApp.initData
            }
          }), u = await i.json();
          if (i.ok && u.success) {
            console.log("Existing user found:", u);
            const h = (_e2 = window.Telegram) == null ? void 0 : _e2.WebApp;
            if (h == null ? void 0 : h.CloudStorage) try {
              h.CloudStorage.getItem("miners", (g, w) => {
                if (g) {
                  console.error("Error loading miners from CloudStorage:", g);
                  return;
                }
                try {
                  const b = w ? JSON.parse(w) : [], x = u.user.rootBalance;
                  u.user.miners = Array.isArray(b) ? b : [], u.user.rootBalance = x, e({
                    user: {
                      ...u.user,
                      rootBalance: x
                    },
                    isAuthenticated: true,
                    isLoading: false,
                    isInitialized: true
                  });
                } catch (b) {
                  console.error("Error parsing miners:", b);
                  const x = u.user.rootBalance;
                  h.CloudStorage.setItem("miners", "[]", (N) => {
                    N && console.error("Error resetting miners:", N);
                  }), u.user.miners = [], u.user.rootBalance = x, e({
                    user: {
                      ...u.user,
                      rootBalance: x
                    },
                    isAuthenticated: true,
                    isLoading: false,
                    isInitialized: true
                  });
                }
              });
            } catch (g) {
              console.error("CloudStorage error:", g);
            }
            return e({
              user: u.user,
              isAuthenticated: true,
              isLoading: false,
              isInitialized: true
            }), true;
          }
          const a = Math.random().toString(36).substring(2, 8).toUpperCase();
          console.log("Creating new user with referral code:", a);
          const c = await fetch("/create-user", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "X-Telegram-Init-Data": window.Telegram.WebApp.initData
            },
            body: JSON.stringify({
              telegramId: n,
              username: r,
              referralCode: a,
              referredBy: o
            })
          }), p = await c.json();
          if (console.log("Create user response:", p), !c.ok || !p.success) throw new Error("Failed to create user");
          return e({
            user: p.user,
            isAuthenticated: true,
            isLoading: false,
            isInitialized: true
          }), true;
        } catch (i) {
          return console.error("Auth error:", i), e({
            isLoading: false,
            isAuthenticated: false,
            user: null,
            isInitialized: true
          }), false;
        }
      } catch (n) {
        return console.error("Init error:", n), e({
          isLoading: false,
          isAuthenticated: false,
          user: null,
          isInitialized: true
        }), false;
      }
    },
    logout: () => {
      e({
        isAuthenticated: false,
        user: null,
        isInitialized: false
      });
    },
    setUser: (n) => e({
      user: n
    }),
    updateUser: (n) => e({
      user: n
    })
  }));
  function M0({ onClose: e, gyroscopeMovement: t }) {
    const [n, r] = v.useState(0), [l, o] = v.useState(0), [i, u] = v.useState(50), [a, c] = v.useState([]), p = v.useRef(null), { user: h } = Ze(), g = v.useRef(Date.now()), w = v.useRef(Date.now()), b = v.useRef(50), x = {
      WHITE: {
        color: "#FFFFFF",
        points: 10,
        probability: 0.45
      },
      GREEN: {
        color: "#10B981",
        points: "mth",
        probability: 0.35
      },
      GOLD: {
        color: "#FFD700",
        points: 100,
        probability: 0.15
      },
      RED: {
        color: "#EF4444",
        points: -50,
        probability: 0.05
      }
    }, N = () => {
      const y = Math.random();
      let j, S = 0;
      for (const k in x) if (S += x[k].probability, y <= S) {
        j = x[k];
        break;
      }
      return {
        x: Math.random() * 80 + 10,
        y: -10,
        speed: 0.04 + Math.random() * 0.02,
        type: j,
        id: Date.now() + Math.random(),
        caught: false,
        processed: false
      };
    }, f = (y, j) => {
      const S = b.current, k = 90, E = 95, _ = 4, M = 4, X = Math.abs(y - S), Pe = Math.abs(j - k);
      return X < _ && Pe < M && j < E && j > k - M;
    }, d = () => {
      const y = Date.now(), j = y - g.current;
      g.current = y, y - w.current > 1e3 && (c((S) => [
        ...S,
        N()
      ]), w.current = y), c((S) => S.map((k) => {
        if (k.caught) return k;
        const E = k.y + k.speed * j;
        return E > k.y && f(k.x, E) ? (k.type.points === "mth" ? o((_) => _ + 1) : r((_) => _ + k.type.points), {
          ...k,
          caught: true
        }) : E > 100 ? {
          ...k,
          outOfBounds: true
        } : {
          ...k,
          y: E
        };
      }).filter((k) => !k.outOfBounds && !k.caught)), requestAnimationFrame(d);
    }, m = (y) => {
      y.preventDefault();
    };
    return v.useEffect(() => {
      document.body.style.overflow = "hidden", document.addEventListener("touchmove", m, {
        passive: false
      });
      const y = requestAnimationFrame(d), j = (S) => {
        if (S.key === "ArrowLeft") {
          const k = Math.max(5, b.current - 5);
          u(k), b.current = k;
        } else if (S.key === "ArrowRight") {
          const k = Math.min(95, b.current + 5);
          u(k), b.current = k;
        } else S.key === "Escape" && e();
      };
      return window.addEventListener("keydown", j), () => {
        window.removeEventListener("keydown", j), cancelAnimationFrame(y), document.body.style.overflow = "auto", document.removeEventListener("touchmove", m);
      };
    }, [
      e
    ]), v.useEffect(() => {
      b.current = i;
    }, []), v.useEffect(() => {
      if (t !== void 0) {
        const y = Math.max(5, Math.min(95, i + t));
        u(y), b.current = y;
      }
    }, [
      t
    ]), s.jsx("div", {
      className: "fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4",
      children: s.jsxs("div", {
        className: "bg-[#0F172A] rounded-xl p-4 w-full max-w-md relative",
        children: [
          s.jsxs("div", {
            className: "flex justify-between items-center mb-4",
            children: [
              s.jsxs("div", {
                className: "flex gap-6",
                children: [
                  s.jsxs("div", {
                    className: "text-white text-xl",
                    children: [
                      s.jsx("span", {
                        className: "text-emerald-400",
                        children: "ROKO:"
                      }),
                      " ",
                      n
                    ]
                  }),
                  s.jsxs("div", {
                    className: "text-white text-xl",
                    children: [
                      s.jsx("span", {
                        className: "text-emerald-400",
                        children: "MTH:"
                      }),
                      " ",
                      l
                    ]
                  })
                ]
              }),
              s.jsx("button", {
                onClick: e,
                className: "px-4 py-2 bg-emerald-500 text-white rounded-lg",
                children: "\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C"
              })
            ]
          }),
          s.jsxs("div", {
            ref: p,
            className: "relative w-full h-[500px] bg-[#1E293B] rounded-lg overflow-hidden select-none touch-none",
            style: {
              backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
              backgroundSize: "50px 50px",
              backgroundColor: "#0A0A0A"
            },
            children: [
              s.jsxs("div", {
                className: "absolute bottom-0 transform -translate-x-1/2",
                style: {
                  left: `${i}%`
                },
                children: [
                  s.jsx("div", {
                    className: "absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
                    style: {
                      width: "8px",
                      height: "8px",
                      background: "rgba(52,211,153,0.3)",
                      border: "1px solid rgba(52,211,153,0.7)",
                      borderRadius: "50%"
                    }
                  }),
                  s.jsx("div", {
                    className: `w-0 h-0 
                        border-l-[20px] border-l-transparent
                        border-r-[20px] border-r-transparent
                        border-b-[30px] border-emerald-400
                        filter drop-shadow-[0_0_10px_rgba(52,211,153,0.5)]
                        relative`,
                    children: s.jsx("div", {
                      className: "absolute",
                      style: {
                        width: "2px",
                        height: "2px",
                        backgroundColor: "rgba(52,211,153,0.9)",
                        borderRadius: "50%",
                        top: "30px",
                        left: "-1px"
                      }
                    })
                  })
                ]
              }),
              a.map((y) => s.jsx("div", {
                className: "absolute w-8 h-8 rounded-full flex items-center justify-center transition-opacity duration-200",
                style: {
                  left: `${y.x}%`,
                  top: `${y.y}%`,
                  backgroundColor: y.type.color,
                  boxShadow: `0 0 20px ${y.type.color}80`,
                  transform: "translate(-50%, -50%)",
                  opacity: y.caught ? 0 : 1
                },
                children: s.jsx("div", {
                  className: "w-1 h-1 rounded-full bg-white/50"
                })
              }, y.id))
            ]
          }),
          s.jsxs("div", {
            className: "mt-4 flex justify-center gap-4 text-sm",
            children: [
              s.jsxs("div", {
                className: "text-white",
                children: [
                  s.jsx("span", {
                    className: "inline-block w-3 h-3 rounded-full bg-white mr-2"
                  }),
                  "+10 ROKO"
                ]
              }),
              s.jsxs("div", {
                className: "text-white",
                children: [
                  s.jsx("span", {
                    className: "inline-block w-3 h-3 rounded-full bg-[#10B981] mr-2"
                  }),
                  "+1 MTH"
                ]
              }),
              s.jsxs("div", {
                className: "text-white",
                children: [
                  s.jsx("span", {
                    className: "inline-block w-3 h-3 rounded-full bg-[#FFD700] mr-2"
                  }),
                  "+100 ROKO"
                ]
              }),
              s.jsxs("div", {
                className: "text-white",
                children: [
                  s.jsx("span", {
                    className: "inline-block w-3 h-3 rounded-full bg-[#EF4444] mr-2"
                  }),
                  "-50 ROKO"
                ]
              })
            ]
          })
        ]
      })
    });
  }
  function I0() {
    const [e, t] = v.useState(false), [n, r] = v.useState(0), [l, o] = v.useState(false), i = (a) => {
      if (!e || !l) return;
      const c = 2, p = a.gamma, g = Math.max(-45, Math.min(45, p)) / 45 * c;
      r(g);
    }, u = async () => {
      try {
        typeof DeviceOrientationEvent.requestPermission == "function" ? await DeviceOrientationEvent.requestPermission() === "granted" ? (o(true), t(true)) : alert("\u0414\u043B\u044F \u0438\u0433\u0440\u044B \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C \u0434\u043E\u0441\u0442\u0443\u043F \u043A \u0433\u0438\u0440\u043E\u0441\u043A\u043E\u043F\u0443") : (o(true), t(true), window.addEventListener("deviceorientation", i));
      } catch (a) {
        console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u043F\u0440\u043E\u0441\u0435 \u0433\u0438\u0440\u043E\u0441\u043A\u043E\u043F\u0430:", a), alert("\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0434\u043E\u0441\u0442\u0443\u043F \u043A \u0433\u0438\u0440\u043E\u0441\u043A\u043E\u043F\u0443. \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u043A\u043B\u0430\u0432\u0438\u0448\u0438 \u0432\u043B\u0435\u0432\u043E/\u0432\u043F\u0440\u0430\u0432\u043E \u0438\u043B\u0438 \u043A\u0430\u0441\u0430\u043D\u0438\u0435 \u044D\u043A\u0440\u0430\u043D\u0430."), t(true);
      }
    };
    return v.useEffect(() => (l && e && (window.addEventListener("deviceorientation", i), console.log("Gyroscope listener added")), () => {
      window.removeEventListener("deviceorientation", i);
    }), [
      l,
      e
    ]), s.jsxs(s.Fragment, {
      children: [
        s.jsx("div", {
          onClick: u,
          className: `w-full max-w-md bg-gradient-to-br from-[#1E293B]/95 via-[#0F172A]/90 to-[#020617]/95
                  backdrop-blur-md rounded-xl p-4 
                  border border-blue-400/20
                  shadow-[0_0_10px_rgba(30,58,138,0.1)]
                  hover:shadow-[0_0_15px_rgba(30,58,138,0.15)]
                  transition-all cursor-pointer relative z-10`,
          children: s.jsxs("div", {
            className: "flex items-center justify-between",
            children: [
              s.jsxs("div", {
                className: "flex items-center gap-3",
                children: [
                  s.jsx("div", {
                    className: "p-2 rounded-lg bg-blue-400/10",
                    children: s.jsxs("svg", {
                      className: "w-6 h-6 text-blue-400",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: [
                        s.jsx("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "2",
                          d: "M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        }),
                        s.jsx("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "2",
                          d: "M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        })
                      ]
                    })
                  }),
                  s.jsxs("div", {
                    children: [
                      s.jsx("h3", {
                        className: "text-white font-medium font-mono",
                        children: "Play Catch Balls"
                      }),
                      s.jsx("p", {
                        className: "text-blue-400/60 text-sm font-mono",
                        children: "Get ROKO"
                      })
                    ]
                  })
                ]
              }),
              s.jsx("div", {
                className: "p-2 rounded-full bg-blue-400/20 text-blue-400",
                children: s.jsx("svg", {
                  className: "w-6 h-6",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  children: s.jsx("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "M9 5l7 7-7 7"
                  })
                })
              })
            ]
          })
        }),
        e && s.jsx(M0, {
          onClose: () => {
            t(false), o(false);
          },
          gyroscopeMovement: n
        })
      ]
    });
  }
  function Tn() {
    const e = Zl(), t = dt(), n = () => t.pathname.slice(1) || "main", r = (i) => {
      e(i === "main" ? "/" : `/${i}`);
    }, l = [
      {
        id: "tasks",
        icon: s.jsx("svg", {
          className: "w-5 h-5",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24",
          children: s.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
          })
        }),
        label: "Tasks"
      },
      {
        id: "bag",
        icon: s.jsx("svg", {
          className: "w-5 h-5",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24",
          children: s.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          })
        }),
        label: "Bag"
      },
      {
        id: "method",
        icon: s.jsx("svg", {
          className: "w-5 h-5",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24",
          children: s.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          })
        }),
        label: "POKO"
      },
      {
        id: "shop",
        icon: s.jsx("svg", {
          className: "w-5 h-5",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24",
          children: s.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          })
        }),
        label: "Shop"
      },
      {
        id: "top",
        icon: s.jsx("svg", {
          className: "w-5 h-5",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24",
          children: s.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          })
        }),
        label: "Top"
      }
    ], o = n();
    return s.jsx("nav", {
      className: "fixed bottom-0 left-0 right-0 bg-[#0A0F1C] border-t border-blue-400/20 z-40",
      children: s.jsx("div", {
        className: "max-w-md mx-auto px-4",
        children: s.jsx("div", {
          className: "flex justify-center py-2",
          children: l.map((i) => s.jsxs("button", {
            onClick: () => r(i.id),
            className: `
                flex flex-col items-center justify-center
                w-16 h-16 mx-2
                rounded-lg
                transition-all duration-300
                relative z-40
                ${o === i.id ? "text-blue-400 drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]" : "text-blue-400/40 hover:text-blue-400/60"}
                ${o === i.id && "after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-1/2 after:h-0.5 after:bg-blue-400 after:rounded-full after:shadow-[0_0_8px_#60A5FA]"}
              `,
            children: [
              i.icon,
              s.jsx("span", {
                className: `text-xs mt-1 ${o === i.id ? "text-blue-400" : "text-blue-400/40"}`,
                style: {
                  fontFamily: "Polonium"
                },
                children: i.label
              })
            ]
          }, i.id))
        })
      })
    });
  }
  let Ga = false;
  function br() {
    var _a2, _b;
    const [e, t] = v.useState(false), n = (_a2 = window.Telegram) == null ? void 0 : _a2.WebApp;
    return v.useEffect(() => {
      if (!n || Ga) return;
      (() => {
        n.ready(), n.expand(), n.setHeaderColor("#0A0F1C"), Ga = true, t(true);
      })();
    }, [
      n
    ]), {
      tg: n,
      user: (_b = n == null ? void 0 : n.initDataUnsafe) == null ? void 0 : _b.user,
      isReady: e
    };
  }
  function kd() {
    const { user: e } = Ze(), { user: t } = br(), n = (t == null ? void 0 : t.username) || (t == null ? void 0 : t.first_name) || (e == null ? void 0 : e.username) || "User", r = t == null ? void 0 : t.photo_url, l = parseInt((e == null ? void 0 : e.rootBalance) || 0);
    return s.jsxs("div", {
      className: "w-full",
      children: [
        s.jsxs("div", {
          className: "flex justify-between items-center mb-2",
          children: [
            s.jsxs("h1", {
              className: "text-base text-white button-text",
              children: [
                "HI, ",
                s.jsx("span", {
                  className: "text-white button-text",
                  children: n.toUpperCase()
                })
              ]
            }),
            s.jsx("div", {
              className: "bg-[#0F172A] px-3 py-1 rounded-md border border-blue-400/20",
              children: s.jsxs("span", {
                className: "text-blue-400 text-sm button-text",
                children: [
                  l,
                  " POKO"
                ]
              })
            })
          ]
        }),
        s.jsxs("div", {
          className: "flex items-center gap-1.5",
          children: [
            s.jsx("img", {
              src: "/assets/eyes.png",
              alt: "Eyes",
              className: "w-6 h-6 object-contain"
            }),
            s.jsx("span", {
              className: "text-white text-base",
              children: "\xD7"
            }),
            r ? s.jsx("img", {
              src: r,
              alt: "Profile",
              className: "w-6 h-6 rounded-full border border-blue-400/20"
            }) : s.jsx("div", {
              className: "w-6 h-6 rounded-full bg-blue-400/20 flex items-center justify-center",
              children: s.jsx("span", {
                className: "text-blue-400 text-sm",
                children: n.charAt(0).toUpperCase()
              })
            })
          ]
        })
      ]
    });
  }
  function A0() {
    const [e, t] = v.useState({
      x: 50,
      y: 50
    }), [n, r] = v.useState(false), [l, o] = v.useState(false), i = v.useRef(null), u = v.useRef(null), a = 80, c = async () => {
      try {
        "DeviceOrientationEvent" in window ? (console.log("DeviceOrientation \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044F"), typeof DeviceOrientationEvent.requestPermission == "function" ? await DeviceOrientationEvent.requestPermission() === "granted" ? (o(true), alert("\u0414\u043E\u0441\u0442\u0443\u043F \u043A \u0433\u0438\u0440\u043E\u0441\u043A\u043E\u043F\u0443 \u043F\u043E\u043B\u0443\u0447\u0435\u043D! \u041D\u0430\u043A\u043B\u043E\u043D\u0438\u0442\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E.")) : alert("\u0414\u043E\u0441\u0442\u0443\u043F \u043A \u0433\u0438\u0440\u043E\u0441\u043A\u043E\u043F\u0443 \u043D\u0435 \u043F\u043E\u043B\u0443\u0447\u0435\u043D") : (o(true), alert("\u0414\u043E\u0441\u0442\u0443\u043F \u043A \u0433\u0438\u0440\u043E\u0441\u043A\u043E\u043F\u0443 \u043F\u043E\u043B\u0443\u0447\u0435\u043D! \u041D\u0430\u043A\u043B\u043E\u043D\u0438\u0442\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E."))) : alert("\u0412\u0430\u0448\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E \u043D\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0433\u0438\u0440\u043E\u0441\u043A\u043E\u043F");
      } catch (g) {
        console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u043F\u0440\u043E\u0441\u0435 \u0433\u0438\u0440\u043E\u0441\u043A\u043E\u043F\u0430:", g), alert("\u041F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u043F\u0440\u043E\u0441\u0435 \u0433\u0438\u0440\u043E\u0441\u043A\u043E\u043F\u0430");
      }
    }, p = (g) => {
      if (!n || !u.current || !i.current) return;
      const w = u.current.getBoundingClientRect(), b = i.current.getBoundingClientRect(), x = 0.5, N = 1, f = 0.2, d = -1e3, m = g.gamma, y = g.beta;
      t((j) => {
        let S = j.x + m * x;
        const k = y > 0 ? f : N;
        let E = j.y + y * k;
        S = Math.max(0, Math.min(S, w.width - b.width));
        const _ = w.height - b.height;
        return E >= _ && (E = _, E += d), E = Math.max(0, E), {
          x: S,
          y: E
        };
      });
    }, h = async () => {
      l ? r((g) => !g) : await c();
    };
    return v.useEffect(() => (l && n && window.addEventListener("deviceorientation", p), () => {
      window.removeEventListener("deviceorientation", p);
    }), [
      l,
      n
    ]), s.jsx("div", {
      ref: u,
      className: "fixed inset-0 z-10",
      style: {
        pointerEvents: "none",
        bottom: `${a}px`
      },
      children: s.jsxs("div", {
        ref: i,
        onClick: h,
        style: {
          transform: `translate(${e.x}px, ${e.y}px)`,
          transition: "transform 0.1s linear",
          pointerEvents: "auto",
          cursor: "pointer",
          zIndex: 50
        },
        className: `
          absolute w-16 h-16 rounded-full 
          bg-gradient-to-br from-emerald-400 to-emerald-600
          shadow-lg shadow-emerald-500/20
          flex items-center justify-center
          ${n ? "ring-4 ring-emerald-300 animate-pulse" : ""}
          ${l ? "" : "opacity-50"}
        `,
        children: [
          s.jsx("div", {
            className: `
          w-10 h-10 rounded-full 
          ${n ? "bg-emerald-300/30 animate-ping" : "bg-emerald-300/10"}
        `
          }),
          s.jsx("div", {
            className: "w-6 h-6 rounded-full bg-emerald-200/50"
          }),
          s.jsx("div", {
            className: "absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap",
            children: s.jsx("span", {
              className: `
            text-sm font-medium
            ${n ? "text-emerald-400" : "text-gray-400"}
          `,
              children: l ? n ? "\u{1F7E2} \u0410\u043A\u0442\u0438\u0432\u0435\u043D" : "\u26AA \u041D\u0430\u0436\u043C\u0438\u0442\u0435" : "\u{1F504} \u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u0434\u043B\u044F \u0434\u043E\u0441\u0442\u0443\u043F\u0430"
            })
          })
        ]
      })
    });
  }
  function z0() {
    return s.jsxs("div", {
      className: "w-full h-full flex flex-col items-center p-4 overflow-hidden relative",
      children: [
        s.jsx(A0, {}),
        s.jsxs("div", {
          className: "w-full max-w-md flex flex-col items-center mt-8",
          children: [
            s.jsx(kd, {}),
            s.jsx(I0, {})
          ]
        }),
        s.jsx(Tn, {})
      ]
    });
  }
  function D0() {
    const { user: e } = Ze(), { tg: t } = br(), [n, r] = v.useState([]), [l, o] = v.useState(false);
    v.useEffect(() => {
      (async () => {
        if (e == null ? void 0 : e.telegramId) try {
          const p = await (await fetch(`/get-referral-count?telegramId=${e.telegramId}`, {
            headers: {
              "x-telegram-init-data": t.initData
            }
          })).json();
          p.success && r(p.referrals);
        } catch (c) {
          console.error("Error fetching referral data:", c);
        }
      })();
    }, [
      e == null ? void 0 : e.telegramId,
      t.initData
    ]);
    const i = async () => {
      var _a2;
      if (e == null ? void 0 : e.telegramId) try {
        const c = await (await fetch(`/get-referral-link?telegramId=${e.telegramId}`, {
          headers: {
            "x-telegram-init-data": t.initData
          }
        })).json();
        if (c.inviteLink) {
          const h = `https://t.me/share/url?text=${encodeURIComponent(`\u{1F680} Join Method!

\u{1F48E} Complete tasks
\u{1F4B0} Get rewards
\u{1F3AE} Play games
\u{1F465} Invite friends

\u{1F525} Join now!`)}&url=${encodeURIComponent(c.inviteLink)}`;
          ((_a2 = window.Telegram) == null ? void 0 : _a2.WebApp) ? window.Telegram.WebApp.openTelegramLink(h) : window.open(h, "_blank");
        }
      } catch (a) {
        console.error("Error getting invite link:", a);
      }
    }, u = (a) => {
      a.preventDefault(), console.log("Expand button clicked, current state:", l), o(!l);
    };
    return s.jsx("div", {
      className: "w-full max-w-md mx-auto relative z-20",
      children: s.jsxs("div", {
        className: `bg-gradient-to-br from-[#1E293B]/90 to-[#0F172A]/90 backdrop-blur-sm rounded-xl p-4 
                    shadow-[0_8px_32px_rgba(59,130,246,0.1)] border border-blue-400/20 
                    relative overflow-hidden`,
        children: [
          s.jsx("div", {
            className: "absolute inset-0 bg-[url('/grid.svg')] opacity-10"
          }),
          s.jsx("div", {
            className: "absolute -right-20 -top-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"
          }),
          s.jsx("div", {
            className: "absolute -left-20 -bottom-20 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl"
          }),
          s.jsxs("div", {
            className: "flex items-center justify-between relative",
            children: [
              s.jsxs("div", {
                className: "flex flex-col items-start",
                children: [
                  s.jsx("span", {
                    className: "text-blue-400 text-sm",
                    style: {
                      fontFamily: "Polonium"
                    },
                    children: "Your Network"
                  }),
                  s.jsxs("div", {
                    className: "flex items-baseline gap-1",
                    children: [
                      s.jsx("span", {
                        className: "text-white text-3xl",
                        style: {
                          fontFamily: "Polonium"
                        },
                        children: n.length
                      }),
                      s.jsx("span", {
                        className: "text-blue-400/60 text-sm",
                        style: {
                          fontFamily: "Polonium"
                        },
                        children: "friends"
                      })
                    ]
                  })
                ]
              }),
              s.jsxs("button", {
                onClick: i,
                type: "button",
                className: `bg-[#1E293B] text-blue-400 px-6 py-2 rounded-lg 
                      transition-all duration-200 flex items-center gap-2
                      border border-blue-400/20
                      shadow-[inset_0_1px_1px_rgba(59,130,246,0.2)]
                      hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]
                      hover:border-blue-400/30 hover:text-blue-300
                      active:scale-95`,
                style: {
                  fontFamily: "Polonium"
                },
                children: [
                  s.jsx("svg", {
                    className: "w-4 h-4",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: s.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2",
                      d: "M12 4v16m8-8H4"
                    })
                  }),
                  s.jsx("span", {
                    className: "tracking-wider",
                    style: {
                      fontFamily: "Polonium"
                    },
                    children: "Invite"
                  })
                ]
              }),
              s.jsx("button", {
                onClick: u,
                type: "button",
                className: "ml-2 p-2 rounded-lg hover:bg-blue-500/10 transition-colors duration-200",
                children: s.jsx("svg", {
                  className: `w-5 h-5 text-blue-400 transition-transform duration-300 ${l ? "rotate-180" : ""}`,
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  children: s.jsx("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "M19 9l-7 7-7-7"
                  })
                })
              })
            ]
          }),
          l && s.jsxs("div", {
            className: "mt-4 space-y-2 relative animate-fadeIn",
            children: [
              s.jsx("div", {
                className: "h-[1px] w-full bg-gradient-to-r from-transparent via-blue-400/20 to-transparent mb-3"
              }),
              s.jsx("div", {
                className: "max-h-48 overflow-y-auto custom-scrollbar space-y-2",
                children: n.length > 0 ? n.map((a) => s.jsxs("div", {
                  className: `flex items-center gap-3 p-2 hover:bg-blue-500/10 rounded-lg 
                              transition-colors duration-200 group`,
                  children: [
                    s.jsx("div", {
                      className: `w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-400/20 
                                  flex items-center justify-center border border-blue-400/20
                                  group-hover:border-blue-400/40 transition-colors duration-200`,
                      children: s.jsx("span", {
                        className: "text-blue-400 text-sm font-medium",
                        children: a.username[0].toUpperCase()
                      })
                    }),
                    s.jsxs("div", {
                      className: "flex flex-col",
                      children: [
                        s.jsx("span", {
                          className: `text-white text-sm font-medium group-hover:text-blue-400 
                                     transition-colors duration-200`,
                          children: a.username
                        }),
                        s.jsx("span", {
                          className: "text-blue-400/60 text-xs",
                          children: new Date(a.joinDate).toLocaleDateString()
                        })
                      ]
                    })
                  ]
                }, a.id)) : s.jsxs("div", {
                  className: "text-center py-6",
                  children: [
                    s.jsx("div", {
                      className: "text-blue-400/60 text-sm mb-2",
                      style: {
                        fontFamily: "Polonium"
                      },
                      children: "No friends yet"
                    }),
                    s.jsx("div", {
                      className: "text-blue-400/40 text-xs",
                      style: {
                        fontFamily: "Polonium"
                      },
                      children: "Invite friends to earn rewards together!"
                    })
                  ]
                })
              })
            ]
          })
        ]
      })
    });
  }
  const he = 15, Lo = 16, D = {
    EMPTY: 0,
    WALL: 1,
    DOT: 2,
    POWER_PELLET: 3
  }, Ya = () => {
    const e = Array(he).fill().map(() => Array(he).fill(D.WALL)), t = (r, l) => {
      const o = [
        [
          0,
          -2
        ],
        [
          2,
          0
        ],
        [
          0,
          2
        ],
        [
          -2,
          0
        ]
      ].sort(() => Math.random() - 0.5);
      e[l][r] = D.DOT;
      for (const [i, u] of o) {
        const a = r + i, c = l + u;
        a > 0 && a < he - 1 && c > 0 && c < he - 1 && e[c][a] === D.WALL && (e[l + u / 2][r + i / 2] = D.DOT, t(a, c));
      }
    };
    t(1, 1);
    for (let r = 0; r < he * 2; r++) {
      const l = Math.floor(Math.random() * (he - 2)) + 1, o = Math.floor(Math.random() * (he - 2)) + 1;
      e[o][l] === D.WALL && [
        [
          l - 1,
          o
        ],
        [
          l + 1,
          o
        ],
        [
          l,
          o - 1
        ],
        [
          l,
          o + 1
        ]
      ].filter(([u, a]) => u > 0 && u < he - 1 && a > 0 && a < he - 1 && e[a][u] === D.DOT).length >= 1 && (e[o][l] = D.DOT);
    }
    let n = 0;
    for (; n < 4; ) {
      const r = Math.floor(Math.random() * (he - 2)) + 1, l = Math.floor(Math.random() * (he - 2)) + 1;
      e[l][r] === D.DOT && (e[l][r] = D.POWER_PELLET, n++);
    }
    return e;
  }, jd = ({ setGameActive: e }) => {
    const { user: t, setUser: n } = Ze(), r = (L) => {
      const P = [];
      for (let T = 0; T < he; T++) for (let O = 0; O < he; O++) L[T][O] !== D.WALL && Math.abs(O - 1) + Math.abs(T - 1) > 5 && P.push({
        x: O,
        y: T
      });
      return P[Math.floor(Math.random() * P.length)];
    }, [l, o] = v.useState(() => Ya()), [i, u] = v.useState({
      x: 1,
      y: 1
    }), [a, c] = v.useState(() => [
      "red",
      "pink",
      "cyan",
      "orange"
    ].map((P) => ({
      ...r(l),
      color: P
    }))), [p, h] = v.useState(0), [g, w] = v.useState(false), [b, x] = v.useState(false), [N, f] = v.useState(true);
    v.useEffect(() => {
      const L = setInterval(() => {
        f((P) => !P);
      }, 200);
      return () => clearInterval(L);
    }, []);
    const [d, m] = v.useState("ArrowRight"), [y, j] = v.useState(false), [S, k] = v.useState(0), [E, _] = v.useState(/* @__PURE__ */ new Set()), M = () => {
      w(true), k(1e4);
      const L = setInterval(() => {
        k((P) => P <= 1e3 ? (clearInterval(L), w(false), 0) : P - 1e3);
      }, 1e3);
    }, X = v.useCallback(() => {
      a.forEach((L, P) => {
        L.x === i.x && L.y === i.y && !E.has(P) && (g ? (h((T) => T + 200), _((T) => /* @__PURE__ */ new Set([
          ...T,
          P
        ]))) : x(true));
      });
    }, [
      i,
      a,
      g,
      E
    ]), Pe = () => {
      const L = Ya();
      o(L), u({
        x: 1,
        y: 1
      }), c((P) => P.map((T) => ({
        ...r(L),
        color: T.color
      }))), h(0), w(false), x(false), _(/* @__PURE__ */ new Set());
    }, qe = v.useCallback((L) => {
      L.some((T) => T.some((O) => O === D.DOT || O === D.POWER_PELLET)) || (j(true), ft(p));
    }, [
      p
    ]), Jt = v.useCallback((L) => {
      b || y || (m(L), u((P) => {
        var _a2, _b, _c2, _d2;
        const T = {
          ...P
        };
        switch (L) {
          case "ArrowUp":
            ((_a2 = l[P.y - 1]) == null ? void 0 : _a2[P.x]) !== D.WALL && (T.y -= 1);
            break;
          case "ArrowDown":
            ((_b = l[P.y + 1]) == null ? void 0 : _b[P.x]) !== D.WALL && (T.y += 1);
            break;
          case "ArrowLeft":
            ((_c2 = l[P.y]) == null ? void 0 : _c2[P.x - 1]) !== D.WALL && (T.x -= 1);
            break;
          case "ArrowRight":
            ((_d2 = l[P.y]) == null ? void 0 : _d2[P.x + 1]) !== D.WALL && (T.x += 1);
            break;
        }
        const O = l[T.y][T.x];
        if (O === D.DOT) {
          h((Z) => Z + 10);
          const G = [
            ...l
          ];
          G[T.y][T.x] = D.EMPTY, o(G), qe(G);
        } else if (O === D.POWER_PELLET) {
          h((Z) => Z + 50), M();
          const G = [
            ...l
          ];
          G[T.y][T.x] = D.EMPTY, o(G), qe(G);
        }
        return T;
      }));
    }, [
      l,
      b,
      y,
      qe
    ]);
    v.useEffect(() => {
      if (b) return;
      const P = setInterval(() => {
        c((T) => T.map((O) => {
          var _a2, _b;
          const G = O.collisionCount || 0;
          if (((_a2 = l[O.y]) == null ? void 0 : _a2[O.x]) === D.WALL) {
            const Ie = r(l);
            return {
              ...O,
              ...Ie,
              direction: null,
              collisionCount: 0
            };
          }
          const Z = [
            {
              dx: 0,
              dy: -1,
              dir: "up"
            },
            {
              dx: 1,
              dy: 0,
              dir: "right"
            },
            {
              dx: 0,
              dy: 1,
              dir: "down"
            },
            {
              dx: -1,
              dy: 0,
              dir: "left"
            }
          ];
          if (O.direction && G < 2) {
            const Ie = Z.find((eo) => eo.dir === O.direction), _r = O.x + Ie.dx, Lr = O.y + Ie.dy;
            return ((_b = l[Lr]) == null ? void 0 : _b[_r]) !== D.WALL ? {
              ...O,
              x: _r,
              y: Lr,
              collisionCount: 0
            } : {
              ...O,
              collisionCount: G + 1,
              direction: null
            };
          }
          const Mt = Z.filter(({ dx: Ie, dy: _r }) => {
            var _a3;
            const Lr = O.x + Ie, eo = O.y + _r;
            return ((_a3 = l[eo]) == null ? void 0 : _a3[Lr]) !== D.WALL;
          });
          if (Mt.length === 0) return O;
          const Me = Mt[Math.floor(Math.random() * Mt.length)];
          return {
            ...O,
            x: O.x + Me.dx,
            y: O.y + Me.dy,
            direction: Me.dir,
            collisionCount: 0
          };
        }));
      }, 300);
      return () => clearInterval(P);
    }, [
      b,
      l
    ]), v.useEffect(() => {
      X();
    }, [
      i,
      X
    ]), v.useEffect(() => {
      const L = (P) => {
        Jt(P.key);
      };
      return window.addEventListener("keydown", L), () => window.removeEventListener("keydown", L);
    }, [
      Jt
    ]);
    const Zt = (L) => {
      Jt(L);
    }, ft = async (L) => {
      var _a2, _b, _c2, _d2, _e2, _f2;
      try {
        const P = (_d2 = (_c2 = (_b = (_a2 = window.Telegram) == null ? void 0 : _a2.WebApp) == null ? void 0 : _b.initDataUnsafe) == null ? void 0 : _c2.user) == null ? void 0 : _d2.id;
        if (!P) return;
        const O = parseFloat((t == null ? void 0 : t.rootBalance) || 0) + L, Z = await (await fetch("/update-root-balance", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-telegram-init-data": ((_f2 = (_e2 = window.Telegram) == null ? void 0 : _e2.WebApp) == null ? void 0 : _f2.initData) || ""
          },
          body: JSON.stringify({
            telegramId: P,
            rootBalance: O
          })
        })).json();
        Z.success && n({
          ...t,
          rootBalance: Z.rootBalance
        });
      } catch (P) {
        console.error("Error updating balance:", P);
      }
    }, On = () => {
      p > 0 && ft(p), Pe(), e(false);
    };
    v.useEffect(() => {
      b && p > 0 && ft(p);
    }, [
      b,
      p
    ]);
    const F = () => {
      switch (d) {
        case "ArrowUp":
          return "rotate(-90deg)";
        case "ArrowDown":
          return "rotate(90deg)";
        case "ArrowLeft":
          return "scaleX(-1)";
        case "ArrowRight":
          return "rotate(0deg)";
        default:
          return "rotate(0deg)";
      }
    };
    return s.jsxs("div", {
      className: "relative bg-black p-2 rounded-xl max-w-[300px] mx-auto",
      children: [
        s.jsxs("div", {
          className: "flex justify-between items-center mb-2",
          children: [
            s.jsxs("div", {
              className: "text-white text-base",
              children: [
                "Score: ",
                p
              ]
            }),
            g && s.jsxs("div", {
              className: "text-blue-400 animate-pulse",
              children: [
                "Power Mode: ",
                Math.ceil(S / 1e3),
                "s"
              ]
            })
          ]
        }),
        y && s.jsxs("div", {
          className: "absolute inset-0 bg-black/80 flex flex-col items-center justify-center z-10",
          children: [
            s.jsx("div", {
              className: "text-emerald-400 text-2xl mb-2",
              children: "\u{1F3C6}\u{1F3C6} Victory! \u{1F3C6}\u{1F3C6}"
            }),
            s.jsxs("div", {
              className: "text-white mb-4",
              children: [
                s.jsx("div", {
                  className: "text-center mb-2",
                  children: "Congratulations!"
                }),
                s.jsxs("div", {
                  className: "text-center",
                  children: [
                    "Your score: ",
                    p
                  ]
                })
              ]
            }),
            s.jsx("button", {
              onClick: () => {
                ft(p), e(false);
              },
              className: "bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded text-sm",
              children: "Close game"
            })
          ]
        }),
        b && s.jsxs("div", {
          className: "absolute inset-0 bg-black/80 flex flex-col items-center justify-center z-10",
          children: [
            s.jsx("div", {
              className: "text-red-500 text-lg mb-2",
              children: "Game Over!"
            }),
            s.jsxs("div", {
              className: "text-white mb-2",
              children: [
                "Final Score: ",
                p
              ]
            }),
            s.jsx("button", {
              onClick: Pe,
              className: "bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1 rounded text-sm",
              children: "\u0418\u0433\u0440\u0430\u0442\u044C \u0441\u043D\u043E\u0432\u0430"
            })
          ]
        }),
        s.jsx("div", {
          style: {
            display: "grid",
            gridTemplateColumns: `repeat(${he}, ${Lo}px)`,
            gap: "1px",
            backgroundColor: "#1a1a1a",
            padding: "4px",
            borderRadius: "8px"
          },
          children: l.map((L, P) => L.map((T, O) => s.jsxs("div", {
            style: {
              width: `${Lo}px`,
              height: `${Lo}px`,
              position: "relative",
              backgroundColor: T === D.WALL ? "#2563eb" : "#000"
            },
            children: [
              T === D.DOT && s.jsx("div", {
                className: "absolute inset-0 m-auto w-1 h-1 bg-yellow-200 rounded-full"
              }),
              T === D.POWER_PELLET && s.jsx("div", {
                className: "absolute inset-0 m-auto w-3 h-3 bg-yellow-400 rounded-full"
              }),
              i.x === O && i.y === P && s.jsx("div", {
                className: "absolute inset-0",
                style: {
                  transform: F(),
                  transition: "transform 0.2s"
                },
                children: s.jsxs("div", {
                  className: "relative w-full h-full",
                  children: [
                    s.jsx("div", {
                      className: "absolute inset-0 bg-yellow-400 rounded-full",
                      style: {
                        clipPath: N ? "polygon(0 0, 85% 0, 50% 50%, 85% 100%, 0 100%)" : "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                        transition: "clip-path 0.2s ease-in-out"
                      }
                    }),
                    s.jsx("div", {
                      className: "absolute bg-black rounded-full",
                      style: {
                        width: "12%",
                        height: "12%",
                        top: "25%",
                        left: "25%"
                      }
                    })
                  ]
                })
              }),
              a.map((G, Z) => !E.has(Z) && G.x === O && G.y === P && s.jsx("div", {
                className: "absolute inset-0 flex items-center justify-center",
                children: s.jsxs("div", {
                  className: `w-full h-full relative ${g ? "animate-pulse" : ""}`,
                  style: {
                    backgroundColor: g ? "#2563eb" : G.color,
                    borderRadius: "50% 50% 0 0",
                    opacity: g ? "0.7" : "1"
                  },
                  children: [
                    s.jsxs("div", {
                      className: "absolute",
                      style: {
                        width: "80%",
                        height: "40%",
                        top: "20%",
                        left: "10%",
                        display: "flex",
                        justifyContent: "space-between"
                      },
                      children: [
                        s.jsx("div", {
                          className: "w-[45%] h-full bg-white rounded-full relative",
                          children: s.jsx("div", {
                            className: "absolute w-[40%] h-[40%] bg-black rounded-full",
                            style: {
                              top: "50%",
                              left: "50%",
                              transform: "translate(-50%, -50%)"
                            }
                          })
                        }),
                        s.jsx("div", {
                          className: "w-[45%] h-full bg-white rounded-full relative",
                          children: s.jsx("div", {
                            className: "absolute w-[40%] h-[40%] bg-black rounded-full",
                            style: {
                              top: "50%",
                              left: "50%",
                              transform: "translate(-50%, -50%)"
                            }
                          })
                        })
                      ]
                    }),
                    s.jsx("div", {
                      className: "absolute bottom-0 w-full",
                      style: {
                        height: "25%",
                        backgroundColor: g ? "#2563eb" : G.color,
                        clipPath: "polygon(0 0, 25% 0, 25% 100%, 50% 0, 75% 0, 75% 100%, 100% 0, 100% 100%, 0 100%)"
                      }
                    })
                  ]
                })
              }, Z))
            ]
          }, `${O}-${P}`)))
        }),
        s.jsxs("div", {
          className: "mt-4 relative h-32 max-w-[180px] mx-auto",
          children: [
            s.jsx("button", {
              onClick: () => Zt("ArrowUp"),
              className: "absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center active:bg-emerald-700 focus:outline-none shadow-lg active:shadow-md transition-all border-2 border-emerald-500",
              children: s.jsx("svg", {
                className: "w-6 h-6 text-white",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: s.jsx("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2.5",
                  d: "M5 15l7-7 7 7"
                })
              })
            }),
            s.jsx("button", {
              onClick: () => Zt("ArrowLeft"),
              className: "absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center active:bg-emerald-700 focus:outline-none shadow-lg active:shadow-md transition-all border-2 border-emerald-500",
              children: s.jsx("svg", {
                className: "w-6 h-6 text-white",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: s.jsx("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2.5",
                  d: "M15 19l-7-7 7-7"
                })
              })
            }),
            s.jsx("button", {
              onClick: () => Zt("ArrowRight"),
              className: "absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center active:bg-emerald-700 focus:outline-none shadow-lg active:shadow-md transition-all border-2 border-emerald-500",
              children: s.jsx("svg", {
                className: "w-6 h-6 text-white",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: s.jsx("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2.5",
                  d: "M9 5l7 7-7 7"
                })
              })
            }),
            s.jsx("button", {
              onClick: () => Zt("ArrowDown"),
              className: "absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center active:bg-emerald-700 focus:outline-none shadow-lg active:shadow-md transition-all border-2 border-emerald-500",
              children: s.jsx("svg", {
                className: "w-6 h-6 text-white",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: s.jsx("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2.5",
                  d: "M19 9l-7 7-7-7"
                })
              })
            })
          ]
        }),
        s.jsx("div", {
          className: "mt-3 text-center text-gray-400 text-xs",
          children: "\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u043A\u043D\u043E\u043F\u043A\u0438 \u0434\u043B\u044F \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F"
        }),
        s.jsx("button", {
          onClick: On,
          className: "mt-2 w-full bg-red-500 hover:bg-red-600 text-white py-1.5 rounded text-sm",
          children: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u0438\u0433\u0440\u0443"
        })
      ]
    });
  };
  function $0() {
    var _a2;
    const [e, t] = v.useState("Social"), [n, r] = v.useState(null), [l, o] = v.useState(false), { user: i, updateUser: u } = Ze(), { tg: a } = br(), [c, p] = v.useState(false), [h, g] = v.useState({}), w = [
      "Social",
      "Media",
      "Daily"
    ], b = {
      Social: [
        {
          id: 1,
          title: "Join Method Channel",
          reward: 1e3,
          description: "Join our official Method Community channel.",
          channelUsername: "method_community",
          type: "channel"
        },
        {
          id: 2,
          title: "Join Root Channel",
          reward: 1e3,
          description: "Join the official Root Community channel.",
          channelUsername: "rootcommunity",
          type: "channel"
        },
        {
          id: 3,
          title: "Join Panda Channel",
          reward: 1e3,
          description: "Join the Timber Panda channel.",
          channelUsername: "timberpanda",
          type: "channel"
        },
        {
          id: 4,
          title: "Join Dino Channel",
          reward: 1e3,
          description: "Join the Dino Rush News channel.",
          channelUsername: "DinoRushNews",
          type: "channel"
        }
      ],
      Media: [
        {
          id: 5,
          title: "Play Root Game",
          reward: 1500,
          description: "Play Root game and earn rewards.",
          botUsername: "RootBTC_bot",
          type: "bot"
        },
        {
          id: 6,
          title: "Play Panda Game",
          reward: 1500,
          description: "Play Panda game and earn rewards.",
          botUsername: "pandapp_gamebot",
          type: "bot"
        },
        {
          id: 7,
          title: "Play Dino Game",
          reward: 1500,
          description: "Play Dino game and earn rewards.",
          botUsername: "Dinosaur_Gamebot",
          type: "bot"
        }
      ],
      Daily: [
        {
          id: 8,
          title: "Play Method Game",
          reward: "???",
          description: "Play Method Pacman game and have fun!",
          type: "game"
        }
      ]
    };
    v.useEffect(() => {
      var _a3, _b;
      ((_b = (_a3 = window.Telegram) == null ? void 0 : _a3.WebApp) == null ? void 0 : _b.CloudStorage) && (b.Social.forEach((m) => {
        window.Telegram.WebApp.CloudStorage.getItem(`task_${m.id}`, (y, j) => {
          !y && j && g((S) => ({
            ...S,
            [m.id]: j === "true"
          }));
        });
      }), b.Media.forEach((m) => {
        window.Telegram.WebApp.CloudStorage.getItem(`task_${m.id}`, (y, j) => {
          !y && j && g((S) => ({
            ...S,
            [m.id]: j === "true"
          }));
        });
      }));
    }, []);
    const x = (m) => {
      if (m === 8) {
        p(true);
        return;
      }
      r(n === m ? null : m);
    }, N = (m, y) => {
      var _a3;
      console.log("Join channel clicked:", m), y.stopPropagation(), ((_a3 = window.Telegram) == null ? void 0 : _a3.WebApp) ? window.Telegram.WebApp.openTelegramLink(`https://t.me/${m}`) : window.open(`https://t.me/${m}`, "_blank");
    }, f = async (m, y) => {
      var _a3;
      if (y.stopPropagation(), !(i == null ? void 0 : i.telegramId) || l || h[m.id]) {
        h[m.id] && a.showAlert("\u274C You have already claimed the reward!", {
          style: {
            fontFamily: "Polonium"
          }
        });
        return;
      }
      o(true);
      try {
        ((_a3 = window.Telegram) == null ? void 0 : _a3.WebApp) ? window.Telegram.WebApp.openTelegramLink(`https://t.me/${m.botUsername}`) : window.open(`https://t.me/${m.botUsername}`, "_blank");
        const S = parseInt(i.rootBalance || 0) + m.reward;
        if ((await (await fetch("/update-root-balance", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Telegram-Init-Data": a.initData
          },
          body: JSON.stringify({
            telegramId: i.telegramId,
            rootBalance: S
          })
        })).json()).success) window.Telegram.WebApp.CloudStorage.setItem(`task_${m.id}`, "true", (_) => {
          _ || (g((M) => ({
            ...M,
            [m.id]: true
          })), u({
            ...i,
            rootBalance: S
          }), a.showAlert("\u2705 Reward successfully claimed!", {
            style: {
              fontFamily: "Polonium"
            }
          }));
        });
        else throw new Error("Failed to update balance");
      } catch (j) {
        console.error("Error processing bot reward:", j), a.showAlert("\u274C Failed to process reward. Please try again.", {
          style: {
            fontFamily: "Polonium"
          }
        });
      } finally {
        o(false);
      }
    }, d = async (m, y) => {
      y.stopPropagation();
      try {
        const S = await (await fetch(`/check-channel-subscription?telegramId=${i.telegramId}&channel=${m.channelUsername}`, {
          headers: {
            "x-telegram-init-data": a.initData
          }
        })).json();
        S.success ? window.Telegram.WebApp.CloudStorage.setItem(`task_${m.id}`, "true", (k) => {
          k || (g((E) => ({
            ...E,
            [m.id]: true
          })), u({
            ...i,
            rootBalance: S.newBalance
          }), a.showAlert("\u2705 Reward successfully claimed!", {
            style: {
              fontFamily: "Polonium"
            }
          }));
        }) : a.showAlert("\u274C Please subscribe to the channel first!", {
          style: {
            fontFamily: "Polonium"
          }
        });
      } catch (j) {
        console.error("Error:", j), a.showAlert("\u274C An error occurred. Please try again.", {
          style: {
            fontFamily: "Polonium"
          }
        });
      }
    };
    return s.jsxs(s.Fragment, {
      children: [
        s.jsxs("div", {
          className: "w-full max-w-md mx-auto mt-2 relative z-10",
          children: [
            s.jsx("div", {
              className: "flex gap-1.5 mb-4 overflow-x-auto p-1.5 custom-scrollbar",
              children: w.map((m) => s.jsx("button", {
                onClick: () => t(m),
                className: `px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-all duration-300
                        ${e === m ? "bg-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.3)]" : "bg-[#1E293B]/80 text-blue-400 hover:bg-[#1E293B] border border-blue-400/20"}`,
                style: {
                  fontFamily: "Polonium"
                },
                children: m
              }, m))
            }),
            s.jsx("div", {
              className: "space-y-3",
              children: (_a2 = b[e]) == null ? void 0 : _a2.map((m) => s.jsxs("div", {
                onClick: () => x(m.id),
                className: `bg-gradient-to-br from-[#1E293B]/95 via-[#0F172A]/90 to-[#020617]/95
                        backdrop-blur-md rounded-lg
                        border border-blue-400/20
                        shadow-[0_0_10px_rgba(30,58,138,0.1)]
                        hover:shadow-[0_0_15px_rgba(30,58,138,0.15)]
                        transition-all duration-300
                        overflow-hidden pointer-events-auto`,
                children: [
                  s.jsxs("div", {
                    className: "flex items-center justify-between p-3",
                    children: [
                      s.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [
                          s.jsx("div", {
                            className: "p-2 rounded-lg bg-[#0F172A] border border-blue-400/20",
                            children: s.jsx("svg", {
                              className: "w-4 h-4 text-blue-400",
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24",
                              children: s.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2",
                                d: "M13 10V3L4 14h7v7l9-11h-7z"
                              })
                            })
                          }),
                          s.jsx("span", {
                            className: "text-white/90 text-sm drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]",
                            style: {
                              fontFamily: "Polonium"
                            },
                            children: m.title
                          })
                        ]
                      }),
                      s.jsxs("div", {
                        className: "bg-[#0F172A]/50 text-blue-400 px-3 py-1 rounded-lg text-xs border border-blue-400/20",
                        style: {
                          fontFamily: "Polonium"
                        },
                        children: [
                          m.reward,
                          " POKO"
                        ]
                      })
                    ]
                  }),
                  n === m.id && s.jsxs("div", {
                    className: "px-3 pb-3 animate-slideDown",
                    children: [
                      s.jsx("div", {
                        className: "text-blue-400/60 text-xs mb-3 pl-11",
                        style: {
                          fontFamily: "Polonium"
                        },
                        children: m.description
                      }),
                      s.jsx("div", {
                        className: "space-y-2",
                        children: m.type === "bot" ? s.jsxs("button", {
                          onClick: (y) => f(m, y),
                          disabled: l || h[m.id],
                          className: `w-full bg-[#0F172A]/80 hover:bg-[#0F172A] text-blue-400 py-2 rounded-lg 
                                  text-sm transition-all duration-200
                                  border-2 border-blue-400/50 hover:border-blue-400
                                  shadow-[0_0_10px_rgba(96,165,250,0.2)]
                                  hover:shadow-[0_0_15px_rgba(96,165,250,0.4)]
                                  flex items-center justify-center gap-2
                                  ${l || h[m.id] ? "opacity-50 cursor-not-allowed" : ""}`,
                          style: {
                            fontFamily: "Polonium"
                          },
                          children: [
                            s.jsx("svg", {
                              className: "w-4 h-4",
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24",
                              children: s.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2",
                                d: "M13 10V3L4 14h7v7l9-11h-7z"
                              })
                            }),
                            h[m.id] ? "Reward Claimed" : "Play Game"
                          ]
                        }) : m.type === "game" ? s.jsxs("button", {
                          onClick: () => p(true),
                          className: `w-full bg-[#0F172A]/80 hover:bg-[#0F172A] text-blue-400 py-2 rounded-lg 
                                  text-sm transition-all duration-200
                                  border-2 border-blue-400/50 hover:border-blue-400
                                  shadow-[0_0_10px_rgba(96,165,250,0.2)]
                                  hover:shadow-[0_0_15px_rgba(96,165,250,0.4)]
                                  flex items-center justify-center gap-2`,
                          style: {
                            fontFamily: "Polonium"
                          },
                          children: [
                            s.jsx("svg", {
                              className: "w-4 h-4",
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24",
                              children: s.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2",
                                d: "M13 10V3L4 14h7v7l9-11h-7z"
                              })
                            }),
                            "Play Game"
                          ]
                        }) : s.jsxs(s.Fragment, {
                          children: [
                            s.jsxs("button", {
                              onClick: (y) => N(m.channelUsername, y),
                              className: `w-full bg-[#0F172A]/80 hover:bg-[#0F172A] text-blue-400 py-2 rounded-lg 
                                    text-sm transition-all duration-200
                                    border-2 border-blue-400/50 hover:border-blue-400
                                    shadow-[0_0_10px_rgba(96,165,250,0.2)]
                                    hover:shadow-[0_0_15px_rgba(96,165,250,0.4)]
                                    flex items-center justify-center gap-2`,
                              style: {
                                fontFamily: "Polonium"
                              },
                              children: [
                                s.jsx("svg", {
                                  className: "w-4 h-4",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24",
                                  children: s.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "2",
                                    d: "M13 10V3L4 14h7v7l9-11h-7z"
                                  })
                                }),
                                "Join Channel"
                              ]
                            }),
                            s.jsx("button", {
                              onClick: (y) => d(m, y),
                              disabled: h[m.id],
                              className: `w-full bg-[#0F172A]/80 hover:bg-[#0F172A] text-blue-400 py-2 rounded-lg 
                                    text-sm transition-all duration-200
                                    border-2 border-blue-400/50 hover:border-blue-400
                                    shadow-[0_0_10px_rgba(96,165,250,0.2)]
                                    hover:shadow-[0_0_15px_rgba(96,165,250,0.4)]
                                    flex items-center justify-center gap-2
                                    ${h[m.id] ? "opacity-50 cursor-not-allowed" : ""}`,
                              style: {
                                fontFamily: "Polonium"
                              },
                              children: h[m.id] ? "Reward Claimed" : "Claim Reward"
                            })
                          ]
                        })
                      })
                    ]
                  })
                ]
              }, m.id))
            })
          ]
        }),
        c && s.jsx("div", {
          className: "fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[9999]",
          children: s.jsxs("div", {
            className: `bg-gradient-to-br from-[#1E293B]/95 via-[#0F172A]/90 to-[#020617]/95 
                         p-4 rounded-xl border border-blue-400/20
                         shadow-[0_0_20px_rgba(59,130,246,0.2)]`,
            children: [
              s.jsx("h2", {
                className: "text-blue-400 text-xl mb-4",
                style: {
                  fontFamily: "Polonium"
                },
                children: "Pacman Game"
              }),
              s.jsx(jd, {
                setGameActive: p
              })
            ]
          })
        })
      ]
    });
  }
  const _s = () => {
    const { user: e } = Ze(), t = parseInt((e == null ? void 0 : e.rootBalance) || 0);
    return s.jsx("div", {
      className: "w-full max-w-md mx-auto",
      children: s.jsx("div", {
        className: `bg-gradient-to-br from-[#1E293B]/95 via-[#0F172A]/90 to-[#020617]/95 
                    backdrop-blur-md rounded-lg px-4 py-2
                    border border-blue-400/20 mb-4
                    shadow-[0_0_10px_rgba(30,58,138,0.1)]
                    hover:shadow-[0_0_15px_rgba(30,58,138,0.15)]
                    transition-all duration-300
                    w-full`,
        children: s.jsx("div", {
          className: "flex justify-center items-center",
          children: s.jsxs("span", {
            className: "text-lg text-white/90",
            style: {
              fontFamily: "Polonium"
            },
            children: [
              t,
              " POKO"
            ]
          })
        })
      })
    });
  };
  function B0() {
    return s.jsxs("div", {
      className: "min-h-screen bg-[#0A0F1C]",
      style: {
        fontFamily: "Polonium"
      },
      children: [
        s.jsx("div", {
          className: "h-screen overflow-y-auto",
          children: s.jsxs("div", {
            className: "w-full max-w-md mx-auto px-4 pt-8 pb-24",
            children: [
              s.jsx("div", {
                className: "flex justify-end",
                children: s.jsx(_s, {})
              }),
              s.jsx(D0, {}),
              s.jsx($0, {})
            ]
          })
        }),
        s.jsx("div", {
          className: "fixed bottom-0 left-0 right-0 bg-[#0A0F1C] z-50",
          children: s.jsx(Tn, {})
        })
      ]
    });
  }
  const en = {
    basic: "/assets/power.webp",
    minion: "/assets/poowerr.webp",
    cube1: "/assets/purpule1.webp",
    cube2: "/assets/purpule2.webp",
    cube3: "/assets/red1.webp",
    cube4: "/assets/red2.webp"
  };
  function U0() {
    const { user: e, updateUser: t } = Ze(), [n, r] = v.useState(null), [l, o] = v.useState(true), [i, u] = v.useState([]), [a, c] = v.useState({
      basic: 0,
      minion: 0,
      cube1: 0,
      cube2: 0,
      cube3: 0,
      cube4: 0
    }), [p, h] = v.useState(false);
    v.useEffect(() => {
      (async () => {
        if (!(e == null ? void 0 : e.telegramId)) {
          o(false);
          return;
        }
        try {
          const f = await (await fetch(`/get-user-miners?telegramId=${e.telegramId}`, {
            headers: {
              "X-Telegram-Init-Data": window.Telegram.WebApp.initData
            }
          })).json();
          if (f.success) {
            let d = f.miners || [];
            if (d.filter((y) => y.type === "minion").length > 10) {
              d = d.filter((y) => y.type !== "minion");
              for (let y = 0; y < 10; y++) d.push({
                type: "minion",
                id: `minion-${y}`
              });
            }
            u(d);
          }
        } catch {
          r("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0435 \u043C\u0430\u0439\u043D\u0435\u0440\u043E\u0432");
        } finally {
          o(false);
        }
      })();
    }, [
      e == null ? void 0 : e.telegramId
    ]), v.useEffect(() => {
      window.Telegram.WebApp.CloudStorage.getItem("lastCollection", (f, d) => {
        if (f || !d) {
          const j = {
            basic: Date.now(),
            minion: Date.now(),
            cube1: Date.now(),
            cube2: Date.now(),
            cube3: Date.now(),
            cube4: Date.now()
          };
          window.Telegram.WebApp.CloudStorage.setItem("lastCollection", JSON.stringify(j));
          return;
        }
        const m = JSON.parse(d);
        let y = false;
        m.cube1 || (m.cube1 = Date.now(), y = true), m.cube2 || (m.cube2 = Date.now(), y = true), m.cube3 || (m.cube3 = Date.now(), y = true), m.cube4 || (m.cube4 = Date.now(), y = true), y && window.Telegram.WebApp.CloudStorage.setItem("lastCollection", JSON.stringify(m));
      });
      const x = () => {
        window.Telegram.WebApp.CloudStorage.getItem("lastCollection", (f, d) => {
          if (f) {
            console.error("Error getting lastCollection:", f);
            return;
          }
          const m = JSON.parse(d || "{}"), y = Date.now(), j = {
            ...a
          }, S = i.reduce((k, E) => (k[E.type] = (k[E.type] || 0) + 1, k), {});
          Object.entries(S).forEach(([k, E]) => {
            const _ = k === "basic" ? 0.005787037037037037 : k === "minion" ? 0.11574074074074074 : k === "cube1" ? 0.008680555555555556 : k === "cube2" ? 0.023148148148148147 : k === "cube3" ? 0.1388888888888889 : 1.8518518518518519, M = (y - (m[k] || y)) / 1e3, X = _ * E, Pe = Math.min(k === "cube1" ? 3750 : k === "minion" ? 4e4 : k === "cube2" ? 22e3 : k === "cube3" ? 288e3 : k === "basic" ? 1e3 : 1 / 0, Math.floor(M * X));
            j[k] = Pe;
          }), c(j);
        });
      };
      x();
      const N = setInterval(x, 1e5);
      return () => clearInterval(N);
    }, [
      i
    ]);
    const g = async (x, N) => {
      try {
        const f = [
          ...i
        ], d = f.findIndex((j) => j.type === x && j.id === N);
        if (d === -1) return;
        f.splice(d, 1), (await (await fetch("/update-user-miners", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Telegram-Init-Data": window.Telegram.WebApp.initData
          },
          body: JSON.stringify({
            telegramId: e.telegramId,
            miners: f
          })
        })).json()).success ? u(f) : r("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0438");
      } catch (f) {
        console.error("Error deleting miner:", f), r("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0438");
      }
    }, w = async (x) => {
      try {
        if (!(e == null ? void 0 : e.telegramId)) return;
        const N = Math.min(a[x], 1e3);
        if (N <= 0) return;
        const f = parseInt(e.rootBalance || 0), d = f + N;
        console.log("Collecting MTH:", {
          currentBalance: f,
          amountToAdd: N,
          newBalance: d
        }), (await (await fetch("/update-root-balance", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Telegram-Init-Data": window.Telegram.WebApp.initData
          },
          body: JSON.stringify({
            telegramId: e.telegramId,
            rootBalance: d
          })
        })).json()).success && window.Telegram.WebApp.CloudStorage.getItem("lastCollection", (j, S) => {
          if (j) {
            console.error("Error getting lastCollection:", j);
            return;
          }
          const k = JSON.parse(S || "{}");
          k[x] = Date.now(), window.Telegram.WebApp.CloudStorage.setItem("lastCollection", JSON.stringify(k), (E) => {
            if (E) {
              console.error("Error saving lastCollection:", E);
              return;
            }
            t({
              ...e,
              rootBalance: d
            }), c((_) => ({
              ..._,
              [x]: 0
            }));
          });
        });
      } catch (N) {
        console.error("Error collecting MTH:", N), r("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0441\u0431\u043E\u0440\u0435 MTH");
      }
    }, b = () => {
      const x = {
        basic: 500,
        minion: 1e4,
        cube1: 750,
        cube2: 2e3,
        cube3: 12e3,
        cube4: 16e4
      };
      return i.reduce((N, f) => {
        const d = x[f.type] || 0;
        return N + d;
      }, 0);
    };
    return l ? s.jsx("div", {
      className: "min-h-screen bg-[#0A0F1C] flex items-center justify-center",
      children: s.jsx("div", {
        className: "text-emerald-400",
        children: "Loading..."
      })
    }) : s.jsxs("div", {
      className: "min-h-screen bg-[#0A0F1C]",
      children: [
        s.jsx("div", {
          className: "min-h-screen bg-[#0A0F1C] relative",
          children: s.jsx("div", {
            className: `h-screen overflow-y-auto ${p ? "pointer-events-none blur-sm" : ""}`,
            children: s.jsxs("div", {
              className: "w-full max-w-md mx-auto px-4 pt-6 pb-24 relative z-10",
              style: {
                fontFamily: "Polonium"
              },
              children: [
                s.jsx("div", {
                  className: "flex justify-end",
                  children: s.jsx(_s, {})
                }),
                s.jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [
                    s.jsx("h1", {
                      className: "text-3xl text-white/90 mb-6",
                      style: {
                        fontFamily: "Polonium"
                      },
                      children: "Bag"
                    }),
                    s.jsx("button", {
                      onClick: () => h(true),
                      className: "w-5 h-5 rounded-full bg-blue-400/20 text-blue-400 flex items-center justify-center text-sm hover:bg-blue-400/30 self-start",
                      style: {
                        fontFamily: "Polonium"
                      },
                      children: "?"
                    })
                  ]
                }),
                s.jsxs("div", {
                  className: "flex items-center gap-2 mb-6",
                  style: {
                    fontFamily: "Polonium"
                  },
                  children: [
                    s.jsx("h2", {
                      className: "text-xl text-blue-400/70",
                      children: "POKO mining:"
                    }),
                    s.jsxs("span", {
                      className: "text-sm text-blue-400/70",
                      children: [
                        " +",
                        b(),
                        " POKO/day"
                      ]
                    })
                  ]
                }),
                s.jsx("div", {
                  className: "grid grid-cols-5 gap-3",
                  children: (() => {
                    const x = i.filter((k) => k.type === "basic"), N = i.filter((k) => k.type === "minion"), f = i.filter((k) => k.type === "cube1"), d = i.filter((k) => k.type === "cube2"), m = i.filter((k) => k.type === "cube3"), y = i.filter((k) => k.type === "cube4"), j = [];
                    x.length > 0 && j.push(s.jsx("div", {
                      className: "relative",
                      children: s.jsxs("div", {
                        className: "bg-[#1E293B]/80 backdrop-blur-sm p-2 rounded-lg border border-blue-400/20 shadow-lg",
                        children: [
                          s.jsx("img", {
                            src: en.basic,
                            alt: "Basic",
                            className: "h-full w-full object-contain scale-125 border-2 border-blue-500 rounded"
                          }),
                          s.jsx("button", {
                            type: "button",
                            onClick: () => g("basic", x[0].id),
                            className: "absolute -top-2.5 -right-2.5 w-6 h-6 bg-blue-500 text-white border-2 border-blue-600 rounded-full flex items-center justify-center text-lg font-bold cursor-pointer z-50 shadow-lg hover:bg-blue-600 active:bg-blue-700",
                            children: "\xD7"
                          }),
                          s.jsxs("div", {
                            className: "absolute bottom-1 right-1 bg-blue-400/20 px-2 py-1 rounded text-xs text-blue-400",
                            children: [
                              x.length,
                              "/5"
                            ]
                          })
                        ]
                      })
                    }, "basic")), N.length > 0 && j.push(s.jsx("div", {
                      className: "relative",
                      children: s.jsxs("div", {
                        className: "bg-[#1E293B]/80 backdrop-blur-sm p-2 rounded-lg border border-blue-400/20 shadow-lg",
                        children: [
                          s.jsx("img", {
                            src: en.minion,
                            alt: "Minion",
                            className: "h-full w-full object-cover scale-125 border-2 border-blue-500 rounded"
                          }),
                          s.jsx("button", {
                            type: "button",
                            onClick: () => g("minion", N[0].id),
                            className: "absolute -top-2.5 -right-2.5 w-6 h-6 bg-blue-500 text-white border-2 border-blue-600 rounded-full flex items-center justify-center text-lg font-bold cursor-pointer z-50 shadow-lg hover:bg-blue-600 active:bg-blue-700",
                            children: "\xD7"
                          }),
                          s.jsxs("div", {
                            className: "absolute bottom-1 right-1 bg-blue-400/20 px-2 py-1 rounded text-xs text-blue-400",
                            children: [
                              N.length,
                              "/10"
                            ]
                          })
                        ]
                      })
                    }, "minion")), f.forEach((k) => {
                      j.push(s.jsx("div", {
                        className: "relative",
                        children: s.jsxs("div", {
                          className: "bg-[#1E293B]/80 backdrop-blur-sm p-2 rounded-lg border border-blue-400/20 shadow-lg",
                          children: [
                            s.jsx("img", {
                              src: en.cube1,
                              alt: "Cube 1",
                              className: "h-full w-full object-cover scale-125 border-2 border-blue-500 rounded"
                            }),
                            s.jsx("button", {
                              type: "button",
                              onClick: () => g("cube1", k.id),
                              className: "absolute -top-2.5 -right-2.5 w-6 h-6 bg-blue-500 text-white border-2 border-blue-600 rounded-full flex items-center justify-center text-lg font-bold cursor-pointer z-50 shadow-lg hover:bg-blue-600 active:bg-blue-700",
                              children: "\xD7"
                            }),
                            s.jsx("div", {
                              className: "absolute bottom-1 right-1 bg-blue-400/20 px-2 py-1 rounded text-xs text-blue-400",
                              children: "1"
                            })
                          ]
                        })
                      }, k.id));
                    }), d.forEach((k) => {
                      j.push(s.jsx("div", {
                        className: "relative",
                        children: s.jsxs("div", {
                          className: "bg-[#1E293B]/80 backdrop-blur-sm p-2 rounded-lg border border-blue-400/20 shadow-lg",
                          children: [
                            s.jsx("img", {
                              src: en.cube2,
                              alt: "Cube 2",
                              className: "h-full w-full object-cover scale-125 border-2 border-blue-500 rounded"
                            }),
                            s.jsx("button", {
                              type: "button",
                              onClick: () => g("cube2", k.id),
                              className: "absolute -top-2.5 -right-2.5 w-6 h-6 bg-blue-500 text-white border-2 border-blue-600 rounded-full flex items-center justify-center text-lg font-bold cursor-pointer z-50 shadow-lg hover:bg-blue-600 active:bg-blue-700",
                              children: "\xD7"
                            }),
                            s.jsx("div", {
                              className: "absolute bottom-1 right-1 bg-blue-400/20 px-2 py-1 rounded text-xs text-blue-400",
                              children: "1"
                            })
                          ]
                        })
                      }, k.id));
                    }), m.forEach((k) => {
                      j.push(s.jsx("div", {
                        className: "relative",
                        children: s.jsxs("div", {
                          className: "bg-[#1E293B]/80 backdrop-blur-sm p-2 rounded-lg border border-blue-400/20 shadow-lg",
                          children: [
                            s.jsx("img", {
                              src: en.cube3,
                              alt: "Cube 3",
                              className: "h-full w-full object-cover scale-125 border-2 border-blue-500 rounded"
                            }),
                            s.jsx("button", {
                              type: "button",
                              onClick: () => g("cube3", k.id),
                              className: "absolute -top-2.5 -right-2.5 w-6 h-6 bg-blue-500 text-white border-2 border-blue-600 rounded-full flex items-center justify-center text-lg font-bold cursor-pointer z-50 shadow-lg hover:bg-blue-600 active:bg-blue-700",
                              children: "\xD7"
                            }),
                            s.jsx("div", {
                              className: "absolute bottom-1 right-1 bg-blue-400/20 px-2 py-1 rounded text-xs text-blue-400",
                              children: "1"
                            })
                          ]
                        })
                      }, k.id));
                    }), y.forEach((k) => {
                      j.push(s.jsx("div", {
                        className: "relative",
                        children: s.jsxs("div", {
                          className: "bg-[#1E293B]/80 backdrop-blur-sm p-2 rounded-lg border border-blue-400/20 shadow-lg",
                          children: [
                            s.jsx("img", {
                              src: en.cube4,
                              alt: "Cube 4",
                              className: "h-full w-full object-cover scale-125 border-2 border-blue-500 rounded"
                            }),
                            s.jsx("button", {
                              type: "button",
                              onClick: () => g("cube4", k.id),
                              className: "absolute -top-2.5 -right-2.5 w-6 h-6 bg-blue-500 text-white border-2 border-blue-600 rounded-full flex items-center justify-center text-lg font-bold cursor-pointer z-50 shadow-lg hover:bg-blue-600 active:bg-blue-700",
                              children: "\xD7"
                            }),
                            s.jsx("div", {
                              className: "absolute bottom-1 right-1 bg-blue-400/20 px-2 py-1 rounded text-xs text-blue-400",
                              children: "1"
                            })
                          ]
                        })
                      }, k.id));
                    });
                    const S = Math.max(0, ((e == null ? void 0 : e.maxSlots) || 5) - j.length);
                    for (let k = 0; k < S; k++) j.push(s.jsx("div", {
                      className: "aspect-square bg-[#1E293B]/50 rounded-xl border border-blue-400/10"
                    }, `empty-${k}`));
                    return j;
                  })()
                }),
                i.some((x) => x.type === "basic") && s.jsxs("div", {
                  className: "mt-3 bg-[#1E293B]/80 backdrop-blur-sm rounded-lg p-2.5 border border-blue-400/20",
                  children: [
                    s.jsxs("div", {
                      className: "flex justify-between items-center mb-1",
                      children: [
                        s.jsx("h3", {
                          className: "text-lg text-white",
                          style: {
                            fontFamily: "Polonium"
                          },
                          children: "Basic"
                        }),
                        s.jsx("div", {
                          className: "bg-[#0F172A]/50 rounded-md px-2 py-0.5 border border-blue-400/20",
                          children: s.jsxs("span", {
                            className: "text-blue-400 text-xs",
                            style: {
                              fontFamily: "Polonium"
                            },
                            children: [
                              "+",
                              500 * i.filter((x) => x.type === "basic").length,
                              " POKO/day"
                            ]
                          })
                        })
                      ]
                    }),
                    s.jsxs("div", {
                      className: "text-blue-400/60 text-xs mb-1.5",
                      style: {
                        fontFamily: "Polonium"
                      },
                      children: [
                        "Total mining: ",
                        500 * i.filter((x) => x.type === "basic").length,
                        " POKO/day"
                      ]
                    }),
                    s.jsxs("div", {
                      className: "bg-[#0F172A]/50 rounded-md p-2 border border-blue-400/20",
                      children: [
                        s.jsxs("div", {
                          className: "flex justify-between items-center mb-1",
                          children: [
                            s.jsxs("span", {
                              className: "text-blue-400 text-xs",
                              style: {
                                fontFamily: "Polonium"
                              },
                              children: [
                                Math.min(a.basic, 1e3),
                                "/",
                                1e3,
                                " POKO"
                              ]
                            }),
                            s.jsxs("span", {
                              className: "text-blue-400 text-xs",
                              style: {
                                fontFamily: "Polonium"
                              },
                              children: [
                                Math.floor(a.basic / 1e3 * 100),
                                "%"
                              ]
                            })
                          ]
                        }),
                        s.jsx("div", {
                          className: "w-full h-1 bg-[#1E293B] rounded-full overflow-hidden mb-1.5",
                          children: s.jsx("div", {
                            className: "h-full bg-blue-400 transition-all duration-500",
                            style: {
                              width: `${a.basic / 1e3 * 100}%`
                            }
                          })
                        }),
                        s.jsx("div", {
                          className: "text-center",
                          children: s.jsx("button", {
                            onClick: () => w("basic"),
                            disabled: a.basic <= 0,
                            className: `px-3 py-0.5 rounded text-xs
                                ${a.basic <= 0 ? "bg-blue-400/20 text-blue-400/40 cursor-not-allowed" : "bg-blue-400/20 text-blue-400 hover:bg-blue-400/30"}`,
                            style: {
                              fontFamily: "Polonium"
                            },
                            children: "COLLECT"
                          })
                        })
                      ]
                    })
                  ]
                }),
                i.some((x) => x.type === "minion") && s.jsxs("div", {
                  className: "mt-3 bg-[#1E293B]/80 backdrop-blur-sm rounded-lg p-2.5 border border-blue-400/20",
                  children: [
                    s.jsxs("div", {
                      className: "flex justify-between items-center mb-1",
                      children: [
                        s.jsx("h3", {
                          className: "text-lg text-white",
                          style: {
                            fontFamily: "Polonium"
                          },
                          children: "Classic"
                        }),
                        s.jsx("div", {
                          className: "bg-[#0F172A]/50 rounded-md px-2 py-0.5 border border-blue-400/20",
                          children: s.jsxs("span", {
                            className: "text-blue-400 text-xs",
                            style: {
                              fontFamily: "Polonium"
                            },
                            children: [
                              "+",
                              1e4 * i.filter((x) => x.type === "minion").length,
                              " POKO/day"
                            ]
                          })
                        })
                      ]
                    }),
                    s.jsxs("div", {
                      className: "text-blue-400/60 text-xs mb-1.5",
                      style: {
                        fontFamily: "Polonium"
                      },
                      children: [
                        "Total mining: ",
                        1e4 * i.filter((x) => x.type === "minion").length,
                        " POKO/day"
                      ]
                    }),
                    s.jsxs("div", {
                      className: "bg-[#0F172A]/50 rounded-md p-2 border border-blue-400/20",
                      children: [
                        s.jsxs("div", {
                          className: "flex justify-between items-center mb-1",
                          children: [
                            s.jsxs("span", {
                              className: "text-blue-400 text-xs",
                              style: {
                                fontFamily: "Polonium"
                              },
                              children: [
                                a.minion,
                                "/40000 POKO"
                              ]
                            }),
                            s.jsxs("span", {
                              className: "text-blue-400 text-xs",
                              style: {
                                fontFamily: "Polonium"
                              },
                              children: [
                                Math.floor(a.minion / 4e4 * 100),
                                "%"
                              ]
                            })
                          ]
                        }),
                        s.jsx("div", {
                          className: "w-full h-1 bg-[#1E293B] rounded-full overflow-hidden mb-1.5",
                          children: s.jsx("div", {
                            className: "h-full bg-blue-400 transition-all duration-500",
                            style: {
                              width: `${a.minion / 4e4 * 100}%`
                            }
                          })
                        }),
                        s.jsx("div", {
                          className: "text-center",
                          children: s.jsx("button", {
                            onClick: () => w("minion"),
                            disabled: a.minion <= 0,
                            className: `px-3 py-0.5 rounded text-xs
                                ${a.minion <= 0 ? "bg-blue-400/20 text-blue-400/40 cursor-not-allowed" : "bg-blue-400/20 text-blue-400 hover:bg-blue-400/30"}`,
                            style: {
                              fontFamily: "Polonium"
                            },
                            children: "COLLECT"
                          })
                        })
                      ]
                    })
                  ]
                }),
                i.some((x) => x.type === "cube1") && s.jsxs("div", {
                  className: "mt-3 bg-[#1E293B]/80 backdrop-blur-sm rounded-lg p-2.5 border border-blue-400/20",
                  children: [
                    s.jsxs("div", {
                      className: "flex justify-between items-center mb-1",
                      children: [
                        s.jsx("h3", {
                          className: "text-lg text-white",
                          style: {
                            fontFamily: "Polonium"
                          },
                          children: "Superior"
                        }),
                        s.jsx("div", {
                          className: "bg-[#0F172A]/50 rounded-md px-2 py-0.5 border border-blue-400/20",
                          children: s.jsxs("span", {
                            className: "text-blue-400 text-xs",
                            style: {
                              fontFamily: "Polonium"
                            },
                            children: [
                              "+",
                              750 * i.filter((x) => x.type === "cube1").length,
                              " POKO/day"
                            ]
                          })
                        })
                      ]
                    }),
                    s.jsxs("div", {
                      className: "text-blue-400/60 text-xs mb-1.5",
                      style: {
                        fontFamily: "Polonium"
                      },
                      children: [
                        "Total mining: ",
                        750 * i.filter((x) => x.type === "cube1").length,
                        " POKO/day"
                      ]
                    }),
                    s.jsxs("div", {
                      className: "bg-[#0F172A]/50 rounded-md p-2 border border-blue-400/20",
                      children: [
                        s.jsxs("div", {
                          className: "flex justify-between items-center mb-1",
                          children: [
                            s.jsxs("span", {
                              className: "text-blue-400 text-xs",
                              style: {
                                fontFamily: "Polonium"
                              },
                              children: [
                                a.cube1,
                                "/3750 POKO"
                              ]
                            }),
                            s.jsxs("span", {
                              className: "text-blue-400 text-xs",
                              style: {
                                fontFamily: "Polonium"
                              },
                              children: [
                                Math.floor(a.cube1 / 3750 * 100),
                                "%"
                              ]
                            })
                          ]
                        }),
                        s.jsx("div", {
                          className: "w-full h-1 bg-[#1E293B] rounded-full overflow-hidden mb-1.5",
                          children: s.jsx("div", {
                            className: "h-full bg-blue-400 transition-all duration-500",
                            style: {
                              width: `${a.cube1 / 3750 * 100}%`
                            }
                          })
                        }),
                        s.jsx("div", {
                          className: "text-center",
                          children: s.jsx("button", {
                            onClick: () => w("cube1"),
                            disabled: a.cube1 <= 0,
                            className: `px-3 py-0.5 rounded text-xs
                                ${a.cube1 <= 0 ? "bg-blue-400/20 text-blue-400/40 cursor-not-allowed" : "bg-blue-400/20 text-blue-400 hover:bg-blue-400/30"}`,
                            style: {
                              fontFamily: "Polonium"
                            },
                            children: "COLLECT"
                          })
                        })
                      ]
                    })
                  ]
                }),
                i.some((x) => x.type === "cube2") && s.jsxs("div", {
                  className: "mt-3 bg-[#1E293B]/80 backdrop-blur-sm rounded-lg p-2.5 border border-blue-400/20",
                  children: [
                    s.jsxs("div", {
                      className: "flex justify-between items-center mb-1",
                      children: [
                        s.jsx("h3", {
                          className: "text-lg text-white",
                          style: {
                            fontFamily: "Polonium"
                          },
                          children: "Enhanced"
                        }),
                        s.jsx("div", {
                          className: "bg-[#0F172A]/50 rounded-md px-2 py-0.5 border border-blue-400/20",
                          children: s.jsxs("span", {
                            className: "text-blue-400 text-xs",
                            style: {
                              fontFamily: "Polonium"
                            },
                            children: [
                              "+",
                              2e3 * i.filter((x) => x.type === "cube2").length,
                              " POKO/day"
                            ]
                          })
                        })
                      ]
                    }),
                    s.jsxs("div", {
                      className: "text-blue-400/60 text-xs mb-1.5",
                      style: {
                        fontFamily: "Polonium"
                      },
                      children: [
                        "Total mining: ",
                        2e3 * i.filter((x) => x.type === "cube2").length,
                        " POKO/day"
                      ]
                    }),
                    s.jsxs("div", {
                      className: "bg-[#0F172A]/50 rounded-md p-2 border border-blue-400/20",
                      children: [
                        s.jsxs("div", {
                          className: "flex justify-between items-center mb-1",
                          children: [
                            s.jsxs("span", {
                              className: "text-blue-400 text-xs",
                              style: {
                                fontFamily: "Polonium"
                              },
                              children: [
                                a.cube2,
                                "/22000 POKO"
                              ]
                            }),
                            s.jsxs("span", {
                              className: "text-blue-400 text-xs",
                              style: {
                                fontFamily: "Polonium"
                              },
                              children: [
                                Math.floor(a.cube2 / 22e3 * 100),
                                "%"
                              ]
                            })
                          ]
                        }),
                        s.jsx("div", {
                          className: "w-full h-1 bg-[#1E293B] rounded-full overflow-hidden mb-1.5",
                          children: s.jsx("div", {
                            className: "h-full bg-blue-400 transition-all duration-500",
                            style: {
                              width: `${a.cube2 / 22e3 * 100}%`
                            }
                          })
                        }),
                        s.jsx("div", {
                          className: "text-center",
                          children: s.jsx("button", {
                            onClick: () => w("cube2"),
                            disabled: a.cube2 <= 0,
                            className: `px-3 py-0.5 rounded text-xs
                                ${a.cube2 <= 0 ? "bg-blue-400/20 text-blue-400/40 cursor-not-allowed" : "bg-blue-400/20 text-blue-400 hover:bg-blue-400/30"}`,
                            style: {
                              fontFamily: "Polonium"
                            },
                            children: "COLLECT"
                          })
                        })
                      ]
                    })
                  ]
                }),
                i.some((x) => x.type === "cube3") && s.jsxs("div", {
                  className: "mt-3 bg-[#1E293B]/80 backdrop-blur-sm rounded-lg p-2.5 border border-blue-400/20",
                  children: [
                    s.jsxs("div", {
                      className: "flex justify-between items-center mb-1",
                      children: [
                        s.jsx("h3", {
                          className: "text-lg text-white",
                          style: {
                            fontFamily: "Polonium"
                          },
                          children: "Excellent"
                        }),
                        s.jsx("div", {
                          className: "bg-[#0F172A]/50 rounded-md px-2 py-0.5 border border-blue-400/20",
                          children: s.jsxs("span", {
                            className: "text-blue-400 text-xs",
                            style: {
                              fontFamily: "Polonium"
                            },
                            children: [
                              "+",
                              12e3 * i.filter((x) => x.type === "cube3").length,
                              " POKO/day"
                            ]
                          })
                        })
                      ]
                    }),
                    s.jsxs("div", {
                      className: "text-blue-400/60 text-xs mb-1.5",
                      style: {
                        fontFamily: "Polonium"
                      },
                      children: [
                        "Total mining: ",
                        12e3 * i.filter((x) => x.type === "cube3").length,
                        " POKO/day"
                      ]
                    }),
                    s.jsxs("div", {
                      className: "bg-[#0F172A]/50 rounded-md p-2 border border-blue-400/20",
                      children: [
                        s.jsxs("div", {
                          className: "flex justify-between items-center mb-1",
                          children: [
                            s.jsxs("span", {
                              className: "text-blue-400 text-xs",
                              style: {
                                fontFamily: "Polonium"
                              },
                              children: [
                                a.cube3,
                                "/288000 POKO"
                              ]
                            }),
                            s.jsxs("span", {
                              className: "text-blue-400 text-xs",
                              style: {
                                fontFamily: "Polonium"
                              },
                              children: [
                                Math.floor(a.cube3 / 288e3 * 100),
                                "%"
                              ]
                            })
                          ]
                        }),
                        s.jsx("div", {
                          className: "w-full h-1 bg-[#1E293B] rounded-full overflow-hidden mb-1.5",
                          children: s.jsx("div", {
                            className: "h-full bg-blue-400 transition-all duration-500",
                            style: {
                              width: `${a.cube3 / 288e3 * 100}%`
                            }
                          })
                        }),
                        s.jsx("div", {
                          className: "text-center",
                          children: s.jsx("button", {
                            onClick: () => w("cube3"),
                            disabled: a.cube3 <= 0,
                            className: `px-3 py-0.5 rounded text-xs
                                ${a.cube3 <= 0 ? "bg-blue-400/20 text-blue-400/40 cursor-not-allowed" : "bg-blue-400/20 text-blue-400 hover:bg-blue-400/30"}`,
                            style: {
                              fontFamily: "Polonium"
                            },
                            children: "COLLECT"
                          })
                        })
                      ]
                    })
                  ]
                }),
                i.some((x) => x.type === "cube4") && s.jsxs("div", {
                  className: "mt-3 bg-[#1E293B]/80 backdrop-blur-sm rounded-lg p-2.5 border border-blue-400/20",
                  children: [
                    s.jsxs("div", {
                      className: "flex justify-between items-center mb-1",
                      children: [
                        s.jsx("h3", {
                          className: "text-lg text-white",
                          style: {
                            fontFamily: "Polonium"
                          },
                          children: "Prime"
                        }),
                        s.jsx("div", {
                          className: "bg-[#0F172A]/50 rounded-md px-2 py-0.5 border border-blue-400/20",
                          children: s.jsxs("span", {
                            className: "text-blue-400 text-xs",
                            style: {
                              fontFamily: "Polonium"
                            },
                            children: [
                              "+",
                              16e4 * i.filter((x) => x.type === "cube4").length,
                              " POKO/day"
                            ]
                          })
                        })
                      ]
                    }),
                    s.jsxs("div", {
                      className: "text-blue-400/60 text-xs mb-1.5",
                      style: {
                        fontFamily: "Polonium"
                      },
                      children: [
                        "Total mining: ",
                        16e4 * i.filter((x) => x.type === "cube4").length,
                        " POKO/day"
                      ]
                    }),
                    s.jsxs("div", {
                      className: "bg-[#0F172A]/50 rounded-md p-2 border border-blue-400/20",
                      children: [
                        s.jsxs("div", {
                          className: "flex justify-between items-center mb-1",
                          children: [
                            s.jsxs("span", {
                              className: "text-blue-400 text-xs",
                              style: {
                                fontFamily: "Polonium"
                              },
                              children: [
                                a.cube4,
                                "/\u221E POKO"
                              ]
                            }),
                            s.jsxs("span", {
                              className: "text-blue-400 text-xs",
                              style: {
                                fontFamily: "Polonium"
                              },
                              children: [
                                Math.floor(a.cube4 / (1 / 0) * 100),
                                "%"
                              ]
                            })
                          ]
                        }),
                        s.jsx("div", {
                          className: "w-full h-1 bg-[#1E293B] rounded-full overflow-hidden mb-1.5",
                          children: s.jsx("div", {
                            className: "h-full bg-blue-400 transition-all duration-500",
                            style: {
                              width: "100%"
                            }
                          })
                        }),
                        s.jsx("div", {
                          className: "text-center",
                          children: s.jsx("button", {
                            onClick: () => w("cube4"),
                            disabled: a.cube4 <= 0,
                            className: `px-3 py-0.5 rounded text-xs
                                ${a.cube4 <= 0 ? "bg-blue-400/20 text-blue-400/40 cursor-not-allowed" : "bg-blue-400/20 text-blue-400 hover:bg-blue-400/30"}`,
                            style: {
                              fontFamily: "Polonium"
                            },
                            children: "COLLECT"
                          })
                        })
                      ]
                    })
                  ]
                })
              ]
            })
          })
        }),
        p && s.jsx("div", {
          className: "fixed inset-0 bg-black/50 flex items-center justify-center z-[100] px-4",
          children: s.jsxs("div", {
            className: "bg-[#1E293B] rounded-lg p-6 max-w-md w-full border border-blue-400/20 backdrop-blur-sm",
            children: [
              s.jsxs("div", {
                className: "flex justify-between items-center mb-4",
                children: [
                  s.jsx("h3", {
                    className: "text-xl font-mono text-white",
                    children: "About POKO"
                  }),
                  s.jsx("button", {
                    onClick: () => h(false),
                    className: "text-blue-400 hover:text-blue-300",
                    children: "\xD7"
                  })
                ]
              }),
              s.jsxs("div", {
                className: "space-y-4 mb-6",
                children: [
                  s.jsx("p", {
                    className: "text-blue-400/70 font-mono text-sm",
                    children: "Poko is simple: the more POKO points you have, the more respect and rewards from Poko you receive."
                  }),
                  s.jsx("p", {
                    className: "text-blue-400/70 font-mono text-sm",
                    children: "You can get POKO via quests, mining nodes, raids, mentioning Poko in chats across Telegram, and using Roko reactions around Telegram"
                  })
                ]
              }),
              s.jsx("div", {
                className: "flex justify-center",
                children: s.jsx("button", {
                  onClick: () => h(false),
                  className: "px-6 py-2 bg-blue-400/20 text-blue-400 rounded-md font-mono text-sm hover:bg-blue-400/30",
                  children: "I understand"
                })
              }),
              s.jsxs("div", {
                className: "flex items-center justify-center mt-4 text-blue-400/50 text-xs font-mono",
                children: [
                  s.jsx("span", {
                    className: "mr-2",
                    children: "\u{1F441}"
                  }),
                  "Roko is watching"
                ]
              })
            ]
          })
        }),
        s.jsx("div", {
          className: `fixed bottom-0 left-0 right-0 bg-[#0A0F1C] z-50 ${p ? "pointer-events-none blur-sm" : ""}`,
          children: s.jsx(Tn, {})
        }),
        n && s.jsx("div", {
          className: "fixed top-4 right-4 bg-blue-500/80 text-white px-4 py-2 rounded-lg z-50",
          style: {
            fontFamily: "Polonium"
          },
          children: n
        })
      ]
    });
  }
  const Yr = {
    cube1: 1,
    cube2: 97,
    cube3: 497,
    cube4: 5e3
  }, be = {
    cube1: {
      name: "Superior",
      dailyRate: 750,
      capacity: 3750
    },
    cube2: {
      name: "Enhanced",
      dailyRate: 2e3,
      capacity: 22e3
    },
    cube3: {
      name: "Excellent",
      dailyRate: 12e3,
      capacity: 228e3
    },
    cube4: {
      name: "Prime",
      dailyRate: 16e4,
      capacity: 1 / 0
    }
  }, W0 = () => ({
    purchaseCube: async (t) => {
      try {
        const n = window.Telegram.WebApp.initDataUnsafe.user.id, r = await fetch(`/create-cube-invoice?telegramId=${n}&cubeType=${t}`), l = await r.json();
        if (!r.ok) throw new Error(l.error || "Failed to create invoice");
        if (l.slug) return new Promise((o, i) => {
          window.Telegram.WebApp.openInvoice(l.slug, {
            callback: async (u) => {
              if (u === "paid") try {
                o({
                  success: true,
                  cubeType: t
                });
              } catch {
                i(new Error("Failed to update user data"));
              }
              else u === "cancelled" ? o({
                success: false,
                reason: "cancelled"
              }) : u === "failed" && o({
                success: false,
                reason: "failed"
              });
            }
          });
        });
      } catch (n) {
        throw console.error("Error purchasing cube:", n), new Error("Failed to purchase cube");
      }
    }
  }), It = {
    basic: "/assets/power.webp",
    minion: "/assets/poowerr.webp",
    cube1: "/assets/purpule1.webp",
    cube2: "/assets/purpule2.webp",
    cube3: "/assets/red1.webp",
    cube4: "/assets/red2.webp"
  };
  function H0() {
    const { user: e, updateUser: t } = Ze(), [n, r] = v.useState(null), [l, o] = v.useState("auto"), [i, u] = v.useState("nodes"), [a, c] = v.useState({
      basic: 0,
      minion: 0,
      cube1: 0,
      cube2: 0,
      cube3: 0,
      cube4: 0
    }), { purchaseCube: p } = W0();
    v.useEffect(() => {
      o("100dvh"), window.requestAnimationFrame(() => {
        var _a2;
        document.body.style.overflow = "auto", ((_a2 = window.Telegram) == null ? void 0 : _a2.WebApp) && window.Telegram.WebApp.expand();
      });
    }, []), v.useEffect(() => {
      (async () => {
        if (e == null ? void 0 : e.telegramId) try {
          const x = await (await fetch(`/get-user-miners?telegramId=${e.telegramId}`, {
            headers: {
              "X-Telegram-Init-Data": window.Telegram.WebApp.initData
            }
          })).json();
          if (x.success) {
            const N = x.miners || [];
            c({
              basic: N.filter((f) => f.type === "basic").length,
              minion: N.filter((f) => f.type === "minion").length,
              cube1: N.filter((f) => f.type === "cube1").length,
              cube2: N.filter((f) => f.type === "cube2").length,
              cube3: N.filter((f) => f.type === "cube3").length,
              cube4: N.filter((f) => f.type === "cube4").length
            });
          }
        } catch (b) {
          console.error("Error fetching miner counts:", b);
        }
      })();
    }, [
      e == null ? void 0 : e.telegramId
    ]);
    const h = async (w) => {
      try {
        r(null);
        const b = await p(w);
        if (b.success) {
          const N = await (await fetch(`/get-user-miners?telegramId=${e.telegramId}`, {
            headers: {
              "X-Telegram-Init-Data": window.Telegram.WebApp.initData
            }
          })).json();
          N.success && (c({
            basic: N.miners.filter((f) => f.type === "basic").length,
            minion: N.miners.filter((f) => f.type === "minion").length,
            cube1: N.miners.filter((f) => f.type === "cube1").length,
            cube2: N.miners.filter((f) => f.type === "cube2").length,
            cube3: N.miners.filter((f) => f.type === "cube3").length,
            cube4: N.miners.filter((f) => f.type === "cube4").length
          }), t({
            ...e,
            miners: N.miners
          }));
        } else b.reason && r(`\u041F\u043E\u043A\u0443\u043F\u043A\u0430 \u043D\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0430: ${b.reason}`);
      } catch (b) {
        console.error("Telegram purchase error:", b), r("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043F\u043E\u043A\u0443\u043F\u043A\u0435");
      }
    }, g = async (w, b) => {
      try {
        if (!(e == null ? void 0 : e.telegramId)) {
          r("\u041E\u0448\u0438\u0431\u043A\u0430 \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u0438");
          return;
        }
        if (e.rootBalance < b) {
          r("\u041D\u0435\u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E \u0441\u0440\u0435\u0434\u0441\u0442\u0432");
          return;
        }
        const N = await (await fetch(`/get-user-miners?telegramId=${e.telegramId}`, {
          headers: {
            "X-Telegram-Init-Data": window.Telegram.WebApp.initData
          }
        })).json(), f = N.success ? N.miners : [], d = f.filter((_) => _.type === "basic").length, m = f.filter((_) => _.type === "minion").length;
        if (w === "basic" && d >= 5) {
          r("\u0414\u043E\u0441\u0442\u0438\u0433\u043D\u0443\u0442 \u043C\u0430\u043A\u0441\u0438\u043C\u0443\u043C Basic \u043C\u0430\u0439\u043D\u0435\u0440\u043E\u0432 (5)");
          return;
        } else if (w === "minion" && m >= 10) {
          r("\u0414\u043E\u0441\u0442\u0438\u0433\u043D\u0443\u0442 \u043C\u0430\u043A\u0441\u0438\u043C\u0443\u043C Minion \u043C\u0430\u0439\u043D\u0435\u0440\u043E\u0432 (10)");
          return;
        }
        const y = /* @__PURE__ */ new Set();
        f.forEach((_) => {
          _.type === "basic" ? y.add("basic-slot") : _.type === "minion" ? y.add("minion-slot") : _.type.startsWith("cube") && y.add(`${_.type}-${_.id}`);
        });
        let j = false;
        if ((w.startsWith("cube") || w === "basic" && !f.some((_) => _.type === "basic") || w === "minion" && !f.some((_) => _.type === "minion")) && (j = true), j && y.size >= ((e == null ? void 0 : e.maxSlots) || 5)) {
          r(`\u0412\u0441\u0435 \u0441\u043B\u043E\u0442\u044B \u0437\u0430\u043D\u044F\u0442\u044B! \u0423 \u0432\u0430\u0441 ${y.size} \u0438\u0437 ${(e == null ? void 0 : e.maxSlots) || 5} \u0441\u043B\u043E\u0442\u043E\u0432`);
          return;
        }
        const S = [
          {
            type: w,
            image: It[w],
            purchaseDate: /* @__PURE__ */ new Date(),
            id: Date.now()
          },
          ...f
        ];
        c((_) => ({
          ..._,
          [w]: _[w] + 1
        }));
        const E = await (await fetch("/update-root-balance", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Telegram-Init-Data": window.Telegram.WebApp.initData
          },
          body: JSON.stringify({
            telegramId: e.telegramId,
            rootBalance: e.rootBalance - b
          })
        })).json();
        E.success ? (await (await fetch("/update-user-miners", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Telegram-Init-Data": window.Telegram.WebApp.initData
          },
          body: JSON.stringify({
            telegramId: e.telegramId,
            miners: S
          })
        })).json()).success ? (t({
          ...e,
          rootBalance: E.rootBalance,
          miners: S
        }), r(null)) : r("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0438 \u043C\u0430\u0439\u043D\u0435\u0440\u0430") : r(E.message || "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043F\u043E\u043A\u0443\u043F\u043A\u0435");
      } catch (x) {
        console.error("Purchase error:", x), r("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043F\u043E\u043A\u0443\u043F\u043A\u0435");
      }
    };
    return s.jsxs(s.Fragment, {
      children: [
        s.jsx("div", {
          className: "min-h-screen bg-[#0A0F1C] relative",
          children: s.jsx("div", {
            className: "h-screen overflow-y-auto",
            children: s.jsxs("div", {
              className: "w-full max-w-md mx-auto px-4 pt-8 pb-24 relative z-10",
              style: {
                fontFamily: "Polonium"
              },
              children: [
                s.jsx(_s, {}),
                s.jsx("h1", {
                  className: "text-3xl font-mono text-white/90 mb-6 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]",
                  children: "Shop"
                }),
                s.jsxs("div", {
                  className: "flex space-x-2 mb-6",
                  children: [
                    s.jsx("button", {
                      onClick: () => u("nodes"),
                      className: `flex-1 py-2 px-4 rounded-lg ${i === "nodes" ? "bg-blue-400/20 text-blue-400 border border-blue-400/50" : "text-blue-400/60 hover:text-blue-400"}`,
                      style: {
                        fontFamily: "Polonium"
                      },
                      children: "Nodes"
                    }),
                    s.jsx("button", {
                      onClick: () => u("slots"),
                      className: `flex-1 py-2 px-4 rounded-lg ${i === "slots" ? "bg-blue-400/20 text-blue-400 border border-blue-400/50" : "text-blue-400/60 hover:text-blue-400"}`,
                      style: {
                        fontFamily: "Polonium"
                      },
                      children: "Slots"
                    }),
                    s.jsx("button", {
                      onClick: () => u("boosts"),
                      className: `flex-1 py-2 px-4 rounded-lg ${i === "boosts" ? "bg-blue-400/20 text-blue-400 border border-blue-400/50" : "text-blue-400/60 hover:text-blue-400"}`,
                      style: {
                        fontFamily: "Polonium"
                      },
                      children: "Boosts"
                    })
                  ]
                }),
                s.jsxs("div", {
                  className: "space-y-8",
                  children: [
                    i === "nodes" && s.jsxs("div", {
                      className: "grid grid-cols-2 gap-4",
                      children: [
                        s.jsxs("div", {
                          className: `bg-gradient-to-br from-[#1E293B]/95 via-[#0F172A]/90 to-[#020617]/95
                                backdrop-blur-md rounded-2xl p-2 
                                border border-blue-400/20
                                shadow-[0_0_10px_rgba(30,58,138,0.1)]
                                hover:shadow-[0_0_15px_rgba(30,58,138,0.15)]
                                transition-all duration-300
                                relative`,
                          children: [
                            s.jsxs("div", {
                              className: "flex justify-between items-center mb-1",
                              children: [
                                s.jsx("span", {
                                  className: "text-white/90 text-base font-mono",
                                  style: {
                                    fontFamily: "Polonium"
                                  },
                                  children: "Classic"
                                }),
                                s.jsx("span", {
                                  className: "text-blue-400/60 text-xs font-mono",
                                  style: {
                                    fontFamily: "Polonium"
                                  },
                                  children: "0/10"
                                })
                              ]
                            }),
                            s.jsx("div", {
                              className: "bg-[#0F172A] rounded-lg p-1 mb-1",
                              children: s.jsx("span", {
                                className: "text-blue-400 text-xs flex justify-center items-center font-mono",
                                style: {
                                  fontFamily: "Polonium"
                                },
                                children: "+10000 POKO/day"
                              })
                            }),
                            s.jsx("div", {
                              className: "text-blue-400/60 text-xs mb-1 font-mono",
                              style: {
                                fontFamily: "Polonium"
                              },
                              children: "Capacity: 40000 POKO"
                            }),
                            s.jsx("div", {
                              className: "bg-[#0F172A] rounded-lg p-1 mb-1",
                              children: s.jsx("img", {
                                src: It.minion,
                                alt: "minion",
                                className: "w-full h-full object-contain"
                              })
                            }),
                            s.jsx("div", {
                              className: "text-center relative z-20",
                              children: s.jsx("button", {
                                type: "button",
                                onClick: () => g("minion", 1),
                                className: `inline-block py-1 px-4 text-blue-400 text-xs font-mono rounded 
                                  border-2 border-blue-400/50 hover:border-blue-400
                                  bg-[#0A0F1C]/80 backdrop-blur-sm
                                  transition-all duration-200 cursor-pointer
                                  shadow-[0_0_10px_rgba(96,165,250,0.2)]
                                  hover:shadow-[0_0_15px_rgba(96,165,250,0.4)]`,
                                style: {
                                  fontFamily: "Polonium"
                                },
                                children: "100000 POKO"
                              })
                            })
                          ]
                        }),
                        s.jsxs("div", {
                          className: `bg-gradient-to-br from-[#1E293B]/95 via-[#0F172A]/90 to-[#020617]/95
                                backdrop-blur-md rounded-2xl p-2 
                                border border-blue-400/20
                                shadow-[0_0_10px_rgba(30,58,138,0.1)]
                                hover:shadow-[0_0_15px_rgba(30,58,138,0.15)]
                                transition-all duration-300
                                relative`,
                          children: [
                            s.jsxs("div", {
                              className: "flex justify-between items-center mb-1",
                              children: [
                                s.jsx("span", {
                                  className: "text-white/90 text-base font-mono",
                                  style: {
                                    fontFamily: "Polonium"
                                  },
                                  children: "Basic"
                                }),
                                s.jsx("span", {
                                  className: "text-blue-400/60 text-xs font-mono",
                                  style: {
                                    fontFamily: "Polonium"
                                  },
                                  children: "0/5"
                                })
                              ]
                            }),
                            s.jsx("div", {
                              className: "bg-[#0F172A] rounded-lg p-1 mb-1",
                              children: s.jsx("span", {
                                className: "text-blue-400 text-xs flex justify-center items-center font-mono",
                                style: {
                                  fontFamily: "Polonium"
                                },
                                children: "+500 POKO/day"
                              })
                            }),
                            s.jsx("div", {
                              className: "text-blue-400/60 text-xs mb-1 font-mono",
                              style: {
                                fontFamily: "Polonium"
                              },
                              children: "Capacity: 1000 POKO"
                            }),
                            s.jsx("div", {
                              className: "bg-[#0F172A] rounded-lg p-1 mb-1",
                              children: s.jsx("img", {
                                src: It.basic,
                                alt: "Basic",
                                className: "w-full h-full object-contain"
                              })
                            }),
                            s.jsx("div", {
                              className: "text-center relative z-20",
                              children: s.jsx("button", {
                                type: "button",
                                onClick: () => g("basic", 4),
                                className: `inline-block py-1 px-4 text-blue-400 text-xs font-mono rounded 
                                  border-2 border-blue-400/50 hover:border-blue-400
                                  bg-[#0A0F1C]/80 backdrop-blur-sm
                                  transition-all duration-200 cursor-pointer
                                  shadow-[0_0_10px_rgba(96,165,250,0.2)]
                                  hover:shadow-[0_0_15px_rgba(96,165,250,0.4)]`,
                                style: {
                                  fontFamily: "Polonium"
                                },
                                children: "4000 POKO"
                              })
                            })
                          ]
                        })
                      ]
                    }),
                    i === "nodes" && s.jsxs("div", {
                      children: [
                        s.jsx("h2", {
                          className: "text-2xl text-white mb-6",
                          style: {
                            fontFamily: "Polonium"
                          },
                          children: "Powerful Nodes"
                        }),
                        s.jsxs("div", {
                          className: "grid grid-cols-2 gap-4",
                          children: [
                            s.jsxs("div", {
                              className: `bg-gradient-to-br from-[#1E293B]/95 via-[#0F172A]/90 to-[#020617]/95
                 backdrop-blur-md rounded-2xl p-2 
                 border border-blue-400/20
                 shadow-[0_0_10px_rgba(30,58,138,0.1)]
                 hover:shadow-[0_0_15px_rgba(30,58,138,0.15)]
                 transition-all duration-300
                 relative`,
                              children: [
                                s.jsxs("div", {
                                  className: "flex justify-between items-center mb-1",
                                  children: [
                                    s.jsx("span", {
                                      className: "text-white/90 text-base",
                                      style: {
                                        fontFamily: "Polonium"
                                      },
                                      children: be.cube1.name
                                    }),
                                    s.jsxs("span", {
                                      className: "text-blue-400/60 text-xs",
                                      style: {
                                        fontFamily: "Polonium"
                                      },
                                      children: [
                                        a.cube1,
                                        "/100"
                                      ]
                                    })
                                  ]
                                }),
                                s.jsx("div", {
                                  className: "bg-[#0F172A] rounded-lg p-1 mb-1",
                                  children: s.jsxs("span", {
                                    className: "text-blue-400 text-xs flex justify-center items-center",
                                    style: {
                                      fontFamily: "Polonium"
                                    },
                                    children: [
                                      "+",
                                      be.cube1.dailyRate,
                                      " POKO/day"
                                    ]
                                  })
                                }),
                                s.jsxs("div", {
                                  className: "text-blue-400/60 text-xs mb-1",
                                  style: {
                                    fontFamily: "Polonium"
                                  },
                                  children: [
                                    "Capacity: ",
                                    be.cube1.capacity,
                                    " POKO"
                                  ]
                                }),
                                s.jsx("div", {
                                  className: "bg-[#0F172A] rounded-lg p-1 mb-1",
                                  children: s.jsx("img", {
                                    src: It.cube1,
                                    alt: "Power Cube I",
                                    className: "w-full h-full object-contain"
                                  })
                                }),
                                s.jsx("div", {
                                  className: "text-center relative z-20",
                                  children: s.jsxs("button", {
                                    type: "button",
                                    onClick: () => h("cube1"),
                                    className: `inline-block py-1 px-4 text-blue-400 text-xs font-mono rounded 
                  border-2 border-blue-400/50 hover:border-blue-400
                  bg-[#0A0F1C]/80 backdrop-blur-sm
                  transition-all duration-200 cursor-pointer
                  shadow-[0_0_10px_rgba(96,165,250,0.2)]
                  hover:shadow-[0_0_15px_rgba(96,165,250,0.4)]`,
                                    style: {
                                      fontFamily: "Polonium"
                                    },
                                    children: [
                                      Yr.cube1,
                                      " \u2B50\uFE0F"
                                    ]
                                  })
                                })
                              ]
                            }),
                            s.jsxs("div", {
                              className: `bg-gradient-to-br from-[#1E293B]/95 via-[#0F172A]/90 to-[#020617]/95
                 backdrop-blur-md rounded-2xl p-2 
                 border border-blue-400/20
                 shadow-[0_0_10px_rgba(30,58,138,0.1)]
                 hover:shadow-[0_0_15px_rgba(30,58,138,0.15)]
                 transition-all duration-300
                 relative`,
                              children: [
                                s.jsxs("div", {
                                  className: "flex justify-between items-center mb-1",
                                  children: [
                                    s.jsx("span", {
                                      className: "text-white/90 text-base",
                                      style: {
                                        fontFamily: "Polonium"
                                      },
                                      children: be.cube2.name
                                    }),
                                    s.jsxs("span", {
                                      className: "text-blue-400/60 text-xs",
                                      style: {
                                        fontFamily: "Polonium"
                                      },
                                      children: [
                                        a.cube2,
                                        "/100"
                                      ]
                                    })
                                  ]
                                }),
                                s.jsx("div", {
                                  className: "bg-[#0F172A] rounded-lg p-1 mb-1",
                                  children: s.jsxs("span", {
                                    className: "text-blue-400 text-xs flex justify-center items-center",
                                    style: {
                                      fontFamily: "Polonium"
                                    },
                                    children: [
                                      "+",
                                      be.cube2.dailyRate,
                                      " POKO/day"
                                    ]
                                  })
                                }),
                                s.jsxs("div", {
                                  className: "text-blue-400/60 text-xs mb-1",
                                  style: {
                                    fontFamily: "Polonium"
                                  },
                                  children: [
                                    "Capacity: ",
                                    be.cube2.capacity,
                                    " POKO"
                                  ]
                                }),
                                s.jsx("div", {
                                  className: "bg-[#0F172A] rounded-lg p-1 mb-1",
                                  children: s.jsx("img", {
                                    src: It.cube2,
                                    alt: "Power Cube II",
                                    className: "w-full h-full object-contain"
                                  })
                                }),
                                s.jsx("div", {
                                  className: "text-center relative z-20",
                                  children: s.jsxs("button", {
                                    type: "button",
                                    onClick: () => h("cube2"),
                                    className: `inline-block py-1 px-4 text-blue-400 text-xs font-mono rounded 
                  border-2 border-blue-400/50 hover:border-blue-400
                  bg-[#0A0F1C]/80 backdrop-blur-sm
                  transition-all duration-200 cursor-pointer
                  shadow-[0_0_10px_rgba(96,165,250,0.2)]
                  hover:shadow-[0_0_15px_rgba(96,165,250,0.4)]`,
                                    style: {
                                      fontFamily: "Polonium"
                                    },
                                    children: [
                                      Yr.cube2,
                                      " \u2B50\uFE0F"
                                    ]
                                  })
                                })
                              ]
                            }),
                            s.jsxs("div", {
                              className: `bg-gradient-to-br from-[#1E293B]/95 via-[#0F172A]/90 to-[#020617]/95
                 backdrop-blur-md rounded-2xl p-2 
                 border border-blue-400/20
                 shadow-[0_0_10px_rgba(30,58,138,0.1)]
                 hover:shadow-[0_0_15px_rgba(30,58,138,0.15)]
                 transition-all duration-300
                 relative`,
                              children: [
                                s.jsxs("div", {
                                  className: "flex justify-between items-center mb-1",
                                  children: [
                                    s.jsx("span", {
                                      className: "text-white/90 text-base",
                                      style: {
                                        fontFamily: "Polonium"
                                      },
                                      children: be.cube3.name
                                    }),
                                    s.jsxs("span", {
                                      className: "text-blue-400/60 text-xs",
                                      style: {
                                        fontFamily: "Polonium"
                                      },
                                      children: [
                                        a.cube3,
                                        "/100"
                                      ]
                                    })
                                  ]
                                }),
                                s.jsx("div", {
                                  className: "bg-[#0F172A] rounded-lg p-1 mb-1",
                                  children: s.jsxs("span", {
                                    className: "text-blue-400 text-xs flex justify-center items-center",
                                    style: {
                                      fontFamily: "Polonium"
                                    },
                                    children: [
                                      "+",
                                      be.cube3.dailyRate,
                                      " POKO/day"
                                    ]
                                  })
                                }),
                                s.jsxs("div", {
                                  className: "text-blue-400/60 text-xs mb-1",
                                  style: {
                                    fontFamily: "Polonium"
                                  },
                                  children: [
                                    "Capacity: ",
                                    be.cube3.capacity,
                                    " POKO"
                                  ]
                                }),
                                s.jsx("div", {
                                  className: "bg-[#0F172A] rounded-lg p-1 mb-1",
                                  children: s.jsx("img", {
                                    src: It.cube3,
                                    alt: "Power Cube III",
                                    className: "w-full h-full object-contain"
                                  })
                                }),
                                s.jsx("div", {
                                  className: "text-center relative z-20",
                                  children: s.jsxs("button", {
                                    type: "button",
                                    onClick: () => h("cube3"),
                                    className: `inline-block py-1 px-4 text-blue-400 text-xs font-mono rounded 
                  border-2 border-blue-400/50 hover:border-blue-400
                  bg-[#0A0F1C]/80 backdrop-blur-sm
                  transition-all duration-200 cursor-pointer
                  shadow-[0_0_10px_rgba(96,165,250,0.2)]
                  hover:shadow-[0_0_15px_rgba(96,165,250,0.4)]`,
                                    style: {
                                      fontFamily: "Polonium"
                                    },
                                    children: [
                                      Yr.cube3,
                                      " \u2B50\uFE0F"
                                    ]
                                  })
                                })
                              ]
                            }),
                            s.jsxs("div", {
                              className: `bg-gradient-to-br from-[#1E293B]/95 via-[#0F172A]/90 to-[#020617]/95
                 backdrop-blur-md rounded-2xl p-2 
                 border border-blue-400/20
                 shadow-[0_0_10px_rgba(30,58,138,0.1)]
                 hover:shadow-[0_0_15px_rgba(30,58,138,0.15)]
                 transition-all duration-300
                 relative`,
                              children: [
                                s.jsxs("div", {
                                  className: "flex justify-between items-center mb-1",
                                  children: [
                                    s.jsx("span", {
                                      className: "text-white/90 text-base",
                                      style: {
                                        fontFamily: "Polonium"
                                      },
                                      children: be.cube4.name
                                    }),
                                    s.jsxs("span", {
                                      className: "text-blue-400/60 text-xs",
                                      style: {
                                        fontFamily: "Polonium"
                                      },
                                      children: [
                                        a.cube4,
                                        "/100"
                                      ]
                                    })
                                  ]
                                }),
                                s.jsx("div", {
                                  className: "bg-[#0F172A] rounded-lg p-1 mb-1",
                                  children: s.jsxs("span", {
                                    className: "text-blue-400 text-xs flex justify-center items-center",
                                    style: {
                                      fontFamily: "Polonium"
                                    },
                                    children: [
                                      "+",
                                      be.cube4.dailyRate,
                                      " POKO/day"
                                    ]
                                  })
                                }),
                                s.jsxs("div", {
                                  className: "text-blue-400/60 text-xs mb-1",
                                  style: {
                                    fontFamily: "Polonium"
                                  },
                                  children: [
                                    "Capacity: ",
                                    be.cube4.capacity === 1 / 0 ? "\u221E" : be.cube4.capacity,
                                    " POKO"
                                  ]
                                }),
                                s.jsx("div", {
                                  className: "bg-[#0F172A] rounded-lg p-1 mb-1",
                                  children: s.jsx("img", {
                                    src: It.cube4,
                                    alt: "Power Cube IV",
                                    className: "w-full h-full object-contain"
                                  })
                                }),
                                s.jsx("div", {
                                  className: "text-center relative z-20",
                                  children: s.jsxs("button", {
                                    type: "button",
                                    onClick: () => h("cube4"),
                                    className: `inline-block py-1 px-4 text-blue-400 text-xs font-mono rounded 
                  border-2 border-blue-400/50 hover:border-blue-400
                  bg-[#0A0F1C]/80 backdrop-blur-sm
                  transition-all duration-200 cursor-pointer
                  shadow-[0_0_10px_rgba(96,165,250,0.2)]
                  hover:shadow-[0_0_15px_rgba(96,165,250,0.4)]`,
                                    style: {
                                      fontFamily: "Polonium"
                                    },
                                    children: [
                                      Yr.cube4,
                                      " \u2B50\uFE0F"
                                    ]
                                  })
                                })
                              ]
                            })
                          ]
                        })
                      ]
                    }),
                    i === "nodes" && s.jsxs("div", {
                      children: [
                        s.jsx("h2", {
                          className: "text-2xl text-blue-400 mb-6",
                          style: {
                            fontFamily: "Polonium"
                          },
                          children: "Coming Soon"
                        }),
                        s.jsx("p", {
                          className: "text-blue-400/60 text-center",
                          style: {
                            fontFamily: "Polonium"
                          },
                          children: "New miners will be available soon"
                        })
                      ]
                    }),
                    i === "slots" && s.jsxs("div", {
                      className: `bg-gradient-to-br from-[#1E293B]/95 via-[#0F172A]/90 to-[#020617]/95
                              backdrop-blur-md rounded-2xl p-6 
                              border border-blue-400/20
                              shadow-[0_0_10px_rgba(30,58,138,0.1)]
                              hover:shadow-[0_0_15px_rgba(30,58,138,0.15)]
                              transition-all duration-300`,
                      children: [
                        s.jsxs("div", {
                          className: "flex justify-between items-center mb-4",
                          children: [
                            s.jsx("span", {
                              className: "text-white/90 text-xl font-mono drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]",
                              children: "Additional Slot"
                            }),
                            s.jsxs("span", {
                              className: "text-blue-400/60 text-sm font-mono bg-[#0F172A] px-3 py-1 rounded-lg",
                              style: {
                                fontFamily: "Polonium"
                              },
                              children: [
                                "Current: ",
                                (e == null ? void 0 : e.maxSlots) || 5
                              ]
                            })
                          ]
                        }),
                        s.jsx("div", {
                          className: "text-center",
                          children: s.jsx("button", {
                            onClick: async () => {
                              try {
                                const b = await (await fetch("/update-max-slots", {
                                  method: "POST",
                                  headers: {
                                    "Content-Type": "application/json",
                                    "X-Telegram-Init-Data": window.Telegram.WebApp.initData
                                  },
                                  body: JSON.stringify({
                                    telegramId: e.telegramId,
                                    newMaxSlots: ((e == null ? void 0 : e.maxSlots) || 5) + 1
                                  })
                                })).json();
                                b.success ? t({
                                  ...e,
                                  maxSlots: b.maxSlots
                                }) : r("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043F\u043E\u043A\u0443\u043F\u043A\u0435 \u0441\u043B\u043E\u0442\u0430");
                              } catch (w) {
                                console.error("Error purchasing slot:", w), r("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043F\u043E\u043A\u0443\u043F\u043A\u0435 \u0441\u043B\u043E\u0442\u0430");
                              }
                            },
                            className: `inline-block py-2 px-6 text-blue-400 text-sm font-mono rounded-lg
                                border-2 border-blue-400/50 hover:border-blue-400
                                bg-[#0A0F1C]/80 backdrop-blur-sm
                                transition-all duration-200 cursor-pointer
                                shadow-[0_0_10px_rgba(96,165,250,0.2)]
                                hover:shadow-[0_0_15px_rgba(96,165,250,0.4)]`,
                            children: "Buy Slot (5000 POKO)"
                          })
                        })
                      ]
                    }),
                    i === "boosts" && s.jsxs("div", {
                      className: `bg-gradient-to-br from-[#1E293B]/95 via-[#0F172A]/90 to-[#020617]/95
                              backdrop-blur-md rounded-2xl p-6 
                              border border-blue-400/20
                              shadow-[0_0_15px_rgba(59,130,246,0.15)]
                              hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]
                              transition-all duration-300
                              relative overflow-hidden`,
                      children: [
                        s.jsx("div", {
                          className: `absolute inset-0 
                                bg-[linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(0deg,rgba(59,130,246,0.1)_1px,transparent_1px)]
                                bg-[size:20px_20px]
                                opacity-30`
                        }),
                        s.jsx("p", {
                          className: "text-blue-400 text-center text-xl font-mono drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]",
                          children: "Coming Soon"
                        })
                      ]
                    })
                  ]
                })
              ]
            })
          })
        }),
        s.jsx("div", {
          className: "fixed bottom-0 left-0 right-0 bg-[#0A0F1C] z-50",
          children: s.jsx(Tn, {})
        }),
        n && s.jsx("div", {
          className: "fixed top-4 right-4 bg-blue-500/80 text-white px-4 py-2 rounded-lg z-50",
          style: {
            fontFamily: "Polonium"
          },
          children: n
        })
      ]
    });
  }
  function V0() {
    const e = Zl(), { user: t } = Ze(), { user: n } = br(), { tg: r } = br(), [l, o] = v.useState(false);
    (n == null ? void 0 : n.username) || (n == null ? void 0 : n.first_name) || (t == null ? void 0 : t.username), parseInt((t == null ? void 0 : t.rootBalance) || 0);
    const i = async () => {
      var _a2;
      if (t == null ? void 0 : t.telegramId) try {
        const a = await (await fetch(`/get-referral-link?telegramId=${t.telegramId}`, {
          headers: {
            "x-telegram-init-data": r.initData
          }
        })).json();
        if (a.inviteLink) {
          const p = `https://t.me/share/url?text=${encodeURIComponent(`\u{1F680} Join Method!

\u{1F48E} Complete tasks
\u{1F4B0} Get rewards
\u{1F3AE} Play games
\u{1F465} Invite friends

\u{1F525} Join now!`)}&url=${encodeURIComponent(a.inviteLink)}`;
          ((_a2 = window.Telegram) == null ? void 0 : _a2.WebApp) ? window.Telegram.WebApp.openTelegramLink(p) : window.open(p, "_blank");
        }
      } catch {
      }
    };
    return s.jsxs("div", {
      className: "min-h-screen bg-[#0A0F1C]",
      children: [
        s.jsx("div", {
          className: "h-screen overflow-y-auto",
          children: s.jsxs("div", {
            className: "w-full max-w-md mx-auto px-4 pt-8 pb-24",
            children: [
              s.jsx("div", {
                className: "mb-6",
                children: s.jsx(kd, {})
              }),
              s.jsxs("div", {
                className: "w-full max-w-md mx-auto px-4 pb-24 relative z-10 flex flex-col items-center",
                children: [
                  s.jsx("div", {
                    className: "text-center mb-6",
                    children: s.jsx("h1", {
                      className: "text-3xl text-blue-400 drop-shadow-[0_0_8px rgba(96,165,250,0.5)] rqnd-text",
                      children: "POKO STAGE 1"
                    })
                  }),
                  s.jsxs("div", {
                    className: `bg-gradient-to-br from-[#0A1222] to-[#1A1F2E] 
                          rounded-2xl p-2
                          border border-blue-900/30
                          shadow-[0_0_30px_rgba(29,78,216,0.15)]
                          hover:shadow-[0_0_40px_rgba(29,78,216,0.25)]
                          transition-all duration-300
                          w-full max-w-[300px] mb-6
                          relative overflow-hidden`,
                    children: [
                      s.jsx("div", {
                        className: `absolute inset-0 
                            bg-[linear-gradient(90deg,rgba(29,78,216,0.03)_1px,transparent_1px),linear-gradient(0deg,rgba(29,78,216,0.03)_1px,transparent_1px)]
                            bg-[size:15px_15px]
                            opacity-20
                            before:content-['']
                            before:absolute
                            before:inset-0
                            before:bg-[radial-gradient(circle_at_50%_50%,rgba(29,78,216,0.1),transparent_70%)]`
                      }),
                      s.jsx("img", {
                        src: "/assets/egg1.webp",
                        alt: "Roko",
                        className: "w-full h-[250px] object-contain rounded-xl mix-blend-screen relative z-10"
                      }),
                      s.jsx("div", {
                        className: "text-center mt-2 relative z-10",
                        children: s.jsx("span", {
                          className: "text-blue-400 text-lg animate-pulse rqnd-text",
                          children: "EVOLVING..."
                        })
                      })
                    ]
                  }),
                  s.jsxs("div", {
                    className: "grid grid-cols-4 gap-4 w-full max-w-sm mb-8",
                    children: [
                      s.jsx("button", {
                        className: `bg-gradient-to-br from-[#1E293B]/95 via-[#0F172A]/90 to-[#020617]/95
                                backdrop-blur-md rounded-xl p-3
                                border border-blue-500/30 hover:border-blue-400/50
                                shadow-[0_0_10px_rgba(96,165,250,0.15)]
                                hover:shadow-[0_0_15px_rgba(96,165,250,0.3)]
                                transition-all duration-300`,
                        children: s.jsx("svg", {
                          className: "w-6 h-6 text-blue-400 mx-auto",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24",
                          children: s.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                            d: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                          })
                        })
                      }),
                      s.jsx("button", {
                        onClick: () => e("/shop"),
                        className: `bg-gradient-to-br from-[#1E293B]/95 via-[#0F172A]/90 to-[#020617]/95
                          backdrop-blur-md rounded-xl p-3
                          border border-blue-500/30 hover:border-blue-400/50
                          shadow-[0_0_10px_rgba(96,165,250,0.15)]
                          hover:shadow-[0_0_15px_rgba(96,165,250,0.3)]
                          transition-all duration-300`,
                        children: s.jsx("svg", {
                          className: "w-6 h-6 text-blue-400 mx-auto",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24",
                          children: s.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                            d: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                          })
                        })
                      }),
                      s.jsx("button", {
                        onClick: i,
                        className: `bg-gradient-to-br from-[#1E293B]/95 via-[#0F172A]/90 to-[#020617]/95
                          backdrop-blur-md rounded-xl p-3
                          border border-blue-500/30 hover:border-blue-400/50
                          shadow-[0_0_10px_rgba(96,165,250,0.15)]
                          hover:shadow-[0_0_15px_rgba(96,165,250,0.3)]
                          transition-all duration-300`,
                        children: s.jsx("svg", {
                          className: "w-6 h-6 text-blue-400 mx-auto",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24",
                          children: s.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                            d: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                          })
                        })
                      }),
                      s.jsx("button", {
                        onClick: () => e("/tasks"),
                        className: `bg-gradient-to-br from-[#1E293B]/95 via-[#0F172A]/90 to-[#020617]/95
                          backdrop-blur-md rounded-xl p-3
                          border border-blue-500/30 hover:border-blue-400/50
                          shadow-[0_0_10px_rgba(96,165,250,0.15)]
                          hover:shadow-[0_0_15px_rgba(96,165,250,0.3)]
                          transition-all duration-300`,
                        children: s.jsx("svg", {
                          className: "w-6 h-6 text-blue-400 mx-auto",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24",
                          children: s.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                            d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                          })
                        })
                      })
                    ]
                  }),
                  s.jsx("button", {
                    onClick: () => o(true),
                    className: `bg-gradient-to-br from-[#1E293B]/95 via-[#0F172A]/90 to-[#020617]/95
                        backdrop-blur-md rounded-xl p-4 
                        border-2 border-blue-500/50 hover:border-blue-400
                        shadow-[0_0_10px_rgba(96,165,250,0.2)]
                        hover:shadow-[0_0_15px_rgba(96,165,250,0.4)]
                        transition-all duration-300 w-full max-w-sm`,
                    children: s.jsxs("div", {
                      className: "flex items-center gap-3",
                      children: [
                        s.jsx("div", {
                          className: "w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center",
                          children: s.jsx("div", {
                            className: "w-full h-full",
                            style: {
                              clipPath: "polygon(0 0, 85% 0, 50% 50%, 85% 100%, 0 100%)"
                            }
                          })
                        }),
                        s.jsxs("div", {
                          className: "text-left",
                          children: [
                            s.jsx("div", {
                              className: "text-blue-400 text-sm rqnd-text",
                              children: "PLAY"
                            }),
                            s.jsx("div", {
                              className: "text-white rqnd-text",
                              children: "METHOD PACMAN"
                            })
                          ]
                        })
                      ]
                    })
                  })
                ]
              })
            ]
          })
        }),
        s.jsx("div", {
          className: "fixed bottom-0 left-0 right-0 bg-[#0A0F1C] z-50",
          children: s.jsx(Tn, {})
        }),
        l && s.jsx("div", {
          className: "fixed inset-0 bg-black/80 flex items-center justify-center z-50",
          children: s.jsxs("div", {
            className: "bg-[#1E293B] p-4 rounded-xl",
            children: [
              s.jsx("h2", {
                className: "text-white text-xl mb-4 rqnd-text",
                children: "PACMAN GAME"
              }),
              s.jsx(jd, {
                setGameActive: o
              })
            ]
          })
        })
      ]
    });
  }
  function K0() {
    return s.jsxs("div", {
      className: "min-h-screen bg-[#0A0F1C]",
      style: {
        fontFamily: "Polonium"
      },
      children: [
        s.jsx("div", {
          className: "h-screen overflow-y-auto",
          children: s.jsx("div", {
            className: "w-full max-w-md mx-auto px-4 h-full relative z-10 flex flex-col items-center justify-center",
            children: s.jsxs("div", {
              className: `bg-gradient-to-br from-[#1A1F2E] to-[#0F172A] 
                        rounded-2xl p-6 
                        border border-blue-400/20
                        shadow-[0_0_15px_rgba(59,130,246,0.15)]
                        hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]
                        transition-all duration-300
                        relative overflow-hidden`,
              children: [
                s.jsx("div", {
                  className: `absolute inset-0 
                          bg-[linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(0deg,rgba(59,130,246,0.1)_1px,transparent_1px)]
                          bg-[size:20px_20px]
                          opacity-30`
                }),
                s.jsx("p", {
                  className: "text-blue-400 text-center text-xl",
                  style: {
                    fontFamily: "Polonium"
                  },
                  children: "Coming Soon"
                })
              ]
            })
          })
        }),
        s.jsx("div", {
          className: "fixed bottom-0 left-0 right-0 bg-[#0A0F1C] z-50",
          children: s.jsx(Tn, {})
        })
      ]
    });
  }
  function Q0() {
    const { initializeUser: e } = Ze();
    return v.useEffect(() => {
      const t = window.Telegram.WebApp;
      t && (t.expand(), t.enableClosingConfirmation()), e();
    }, [
      e
    ]), s.jsx(b0, {
      children: s.jsxs("div", {
        className: "glow-background",
        children: [
          s.jsx("div", {
            className: "scanlines"
          }),
          s.jsx("div", {
            className: "glow-content",
            children: s.jsxs(Jp, {
              children: [
                s.jsx(pt, {
                  path: "/",
                  element: s.jsx(Yp, {
                    to: "/method",
                    replace: true
                  })
                }),
                s.jsx(pt, {
                  path: "/method",
                  element: s.jsx(V0, {})
                }),
                s.jsx(pt, {
                  path: "/tasks",
                  element: s.jsx(B0, {})
                }),
                s.jsx(pt, {
                  path: "/main",
                  element: s.jsx(z0, {})
                }),
                s.jsx(pt, {
                  path: "/bag",
                  element: s.jsx(U0, {})
                }),
                s.jsx(pt, {
                  path: "/shop",
                  element: s.jsx(H0, {})
                }),
                s.jsx(pt, {
                  path: "/top",
                  element: s.jsx(K0, {})
                })
              ]
            })
          })
        ]
      })
    });
  }
  Ro.createRoot(document.getElementById("root")).render(s.jsx(Fo.StrictMode, {
    children: s.jsx(Q0, {})
  }));
})();
