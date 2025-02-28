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
  function kd(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
  }
  var Ga = {
    exports: {}
  }, Tl = {}, Ya = {
    exports: {}
  }, z = {};
  var br = Symbol.for("react.element"), jd = Symbol.for("react.portal"), Nd = Symbol.for("react.fragment"), Sd = Symbol.for("react.strict_mode"), Cd = Symbol.for("react.profiler"), Ed = Symbol.for("react.provider"), Pd = Symbol.for("react.context"), _d = Symbol.for("react.forward_ref"), Ld = Symbol.for("react.suspense"), Fd = Symbol.for("react.memo"), Rd = Symbol.for("react.lazy"), Ps = Symbol.iterator;
  function Td(e) {
    return e === null || typeof e != "object" ? null : (e = Ps && e[Ps] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Xa = {
    isMounted: function() {
      return false;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, Ja = Object.assign, Za = {};
  function Cn(e, t, n) {
    this.props = e, this.context = t, this.refs = Za, this.updater = n || Xa;
  }
  Cn.prototype.isReactComponent = {};
  Cn.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState");
  };
  Cn.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
  };
  function qa() {
  }
  qa.prototype = Cn.prototype;
  function Si(e, t, n) {
    this.props = e, this.context = t, this.refs = Za, this.updater = n || Xa;
  }
  var Ci = Si.prototype = new qa();
  Ci.constructor = Si;
  Ja(Ci, Cn.prototype);
  Ci.isPureReactComponent = true;
  var _s = Array.isArray, eu = Object.prototype.hasOwnProperty, Ei = {
    current: null
  }, tu = {
    key: true,
    ref: true,
    __self: true,
    __source: true
  };
  function nu(e, t, n) {
    var r, l = {}, o = null, i = null;
    if (t != null) for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (o = "" + t.key), t) eu.call(t, r) && !tu.hasOwnProperty(r) && (l[r] = t[r]);
    var u = arguments.length - 2;
    if (u === 1) l.children = n;
    else if (1 < u) {
      for (var a = Array(u), c = 0; c < u; c++) a[c] = arguments[c + 2];
      l.children = a;
    }
    if (e && e.defaultProps) for (r in u = e.defaultProps, u) l[r] === void 0 && (l[r] = u[r]);
    return {
      $$typeof: br,
      type: e,
      key: o,
      ref: i,
      props: l,
      _owner: Ei.current
    };
  }
  function Od(e, t) {
    return {
      $$typeof: br,
      type: e.type,
      key: t,
      ref: e.ref,
      props: e.props,
      _owner: e._owner
    };
  }
  function Pi(e) {
    return typeof e == "object" && e !== null && e.$$typeof === br;
  }
  function Md(e) {
    var t = {
      "=": "=0",
      ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
      return t[n];
    });
  }
  var Ls = /\/+/g;
  function ql(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Md("" + e.key) : t.toString(36);
  }
  function Gr(e, t, n, r, l) {
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
          case br:
          case jd:
            i = true;
        }
    }
    if (i) return i = e, l = l(i), e = r === "" ? "." + ql(i, 0) : r, _s(l) ? (n = "", e != null && (n = e.replace(Ls, "$&/") + "/"), Gr(l, t, n, "", function(c) {
      return c;
    })) : l != null && (Pi(l) && (l = Od(l, n + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(Ls, "$&/") + "/") + e)), t.push(l)), 1;
    if (i = 0, r = r === "" ? "." : r + ":", _s(e)) for (var u = 0; u < e.length; u++) {
      o = e[u];
      var a = r + ql(o, u);
      i += Gr(o, t, n, a, l);
    }
    else if (a = Td(e), typeof a == "function") for (e = a.call(e), u = 0; !(o = e.next()).done; ) o = o.value, a = r + ql(o, u++), i += Gr(o, t, n, a, l);
    else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return i;
  }
  function Lr(e, t, n) {
    if (e == null) return e;
    var r = [], l = 0;
    return Gr(e, r, "", "", function(o) {
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
  }, Yr = {
    transition: null
  }, Ad = {
    ReactCurrentDispatcher: me,
    ReactCurrentBatchConfig: Yr,
    ReactCurrentOwner: Ei
  };
  function ru() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  z.Children = {
    map: Lr,
    forEach: function(e, t, n) {
      Lr(e, function() {
        t.apply(this, arguments);
      }, n);
    },
    count: function(e) {
      var t = 0;
      return Lr(e, function() {
        t++;
      }), t;
    },
    toArray: function(e) {
      return Lr(e, function(t) {
        return t;
      }) || [];
    },
    only: function(e) {
      if (!Pi(e)) throw Error("React.Children.only expected to receive a single React element child.");
      return e;
    }
  };
  z.Component = Cn;
  z.Fragment = Nd;
  z.Profiler = Cd;
  z.PureComponent = Si;
  z.StrictMode = Sd;
  z.Suspense = Ld;
  z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ad;
  z.act = ru;
  z.cloneElement = function(e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Ja({}, e.props), l = e.key, o = e.ref, i = e._owner;
    if (t != null) {
      if (t.ref !== void 0 && (o = t.ref, i = Ei.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
      for (a in t) eu.call(t, a) && !tu.hasOwnProperty(a) && (r[a] = t[a] === void 0 && u !== void 0 ? u[a] : t[a]);
    }
    var a = arguments.length - 2;
    if (a === 1) r.children = n;
    else if (1 < a) {
      u = Array(a);
      for (var c = 0; c < a; c++) u[c] = arguments[c + 2];
      r.children = u;
    }
    return {
      $$typeof: br,
      type: e.type,
      key: l,
      ref: o,
      props: r,
      _owner: i
    };
  };
  z.createContext = function(e) {
    return e = {
      $$typeof: Pd,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null
    }, e.Provider = {
      $$typeof: Ed,
      _context: e
    }, e.Consumer = e;
  };
  z.createElement = nu;
  z.createFactory = function(e) {
    var t = nu.bind(null, e);
    return t.type = e, t;
  };
  z.createRef = function() {
    return {
      current: null
    };
  };
  z.forwardRef = function(e) {
    return {
      $$typeof: _d,
      render: e
    };
  };
  z.isValidElement = Pi;
  z.lazy = function(e) {
    return {
      $$typeof: Rd,
      _payload: {
        _status: -1,
        _result: e
      },
      _init: zd
    };
  };
  z.memo = function(e, t) {
    return {
      $$typeof: Fd,
      type: e,
      compare: t === void 0 ? null : t
    };
  };
  z.startTransition = function(e) {
    var t = Yr.transition;
    Yr.transition = {};
    try {
      e();
    } finally {
      Yr.transition = t;
    }
  };
  z.unstable_act = ru;
  z.useCallback = function(e, t) {
    return me.current.useCallback(e, t);
  };
  z.useContext = function(e) {
    return me.current.useContext(e);
  };
  z.useDebugValue = function() {
  };
  z.useDeferredValue = function(e) {
    return me.current.useDeferredValue(e);
  };
  z.useEffect = function(e, t) {
    return me.current.useEffect(e, t);
  };
  z.useId = function() {
    return me.current.useId();
  };
  z.useImperativeHandle = function(e, t, n) {
    return me.current.useImperativeHandle(e, t, n);
  };
  z.useInsertionEffect = function(e, t) {
    return me.current.useInsertionEffect(e, t);
  };
  z.useLayoutEffect = function(e, t) {
    return me.current.useLayoutEffect(e, t);
  };
  z.useMemo = function(e, t) {
    return me.current.useMemo(e, t);
  };
  z.useReducer = function(e, t, n) {
    return me.current.useReducer(e, t, n);
  };
  z.useRef = function(e) {
    return me.current.useRef(e);
  };
  z.useState = function(e) {
    return me.current.useState(e);
  };
  z.useSyncExternalStore = function(e, t, n) {
    return me.current.useSyncExternalStore(e, t, n);
  };
  z.useTransition = function() {
    return me.current.useTransition();
  };
  z.version = "18.3.1";
  Ya.exports = z;
  var y = Ya.exports;
  const _o = kd(y);
  var Id = y, Dd = Symbol.for("react.element"), $d = Symbol.for("react.fragment"), Bd = Object.prototype.hasOwnProperty, Ud = Id.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Wd = {
    key: true,
    ref: true,
    __self: true,
    __source: true
  };
  function lu(e, t, n) {
    var r, l = {}, o = null, i = null;
    n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (i = t.ref);
    for (r in t) Bd.call(t, r) && !Wd.hasOwnProperty(r) && (l[r] = t[r]);
    if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
    return {
      $$typeof: Dd,
      type: e,
      key: o,
      ref: i,
      props: l,
      _owner: Ud.current
    };
  }
  Tl.Fragment = $d;
  Tl.jsx = lu;
  Tl.jsxs = lu;
  Ga.exports = Tl;
  var s = Ga.exports, Lo = {}, ou = {
    exports: {}
  }, Se = {}, iu = {
    exports: {}
  }, su = {};
  (function(e) {
    function t(L, _) {
      var P = L.length;
      L.push(_);
      e: for (; 0 < P; ) {
        var R = P - 1 >>> 1, T = L[R];
        if (0 < l(T, _)) L[R] = _, L[P] = T, P = R;
        else break e;
      }
    }
    function n(L) {
      return L.length === 0 ? null : L[0];
    }
    function r(L) {
      if (L.length === 0) return null;
      var _ = L[0], P = L.pop();
      if (P !== _) {
        L[0] = P;
        e: for (var R = 0, T = L.length, G = T >>> 1; R < G; ) {
          var Z = 2 * (R + 1) - 1, Ot = L[Z], Me = Z + 1, ze = L[Me];
          if (0 > l(Ot, P)) Me < T && 0 > l(ze, Ot) ? (L[R] = ze, L[Me] = P, R = Me) : (L[R] = Ot, L[Z] = P, R = Z);
          else if (Me < T && 0 > l(ze, P)) L[R] = ze, L[Me] = P, R = Me;
          else break e;
        }
      }
      return _;
    }
    function l(L, _) {
      var P = L.sortIndex - _.sortIndex;
      return P !== 0 ? P : L.id - _.id;
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
    var a = [], c = [], p = 1, g = null, v = 3, b = false, k = false, h = false, N = typeof setTimeout == "function" ? setTimeout : null, m = typeof clearTimeout == "function" ? clearTimeout : null, d = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function f(L) {
      for (var _ = n(c); _ !== null; ) {
        if (_.callback === null) r(c);
        else if (_.startTime <= L) r(c), _.sortIndex = _.expirationTime, t(a, _);
        else break;
        _ = n(c);
      }
    }
    function x(L) {
      if (h = false, f(L), !k) if (n(a) !== null) k = true, dt(j);
      else {
        var _ = n(c);
        _ !== null && Tn(x, _.startTime - L);
      }
    }
    function j(L, _) {
      k = false, h && (h = false, m(C), C = -1), b = true;
      var P = v;
      try {
        for (f(_), g = n(a); g !== null && (!(g.expirationTime > _) || L && !X()); ) {
          var R = g.callback;
          if (typeof R == "function") {
            g.callback = null, v = g.priorityLevel;
            var T = R(g.expirationTime <= _);
            _ = e.unstable_now(), typeof T == "function" ? g.callback = T : g === n(a) && r(a), f(_);
          } else r(a);
          g = n(a);
        }
        if (g !== null) var G = true;
        else {
          var Z = n(c);
          Z !== null && Tn(x, Z.startTime - _), G = false;
        }
        return G;
      } finally {
        g = null, v = P, b = false;
      }
    }
    var S = false, w = null, C = -1, O = 5, M = -1;
    function X() {
      return !(e.unstable_now() - M < O);
    }
    function Ee() {
      if (w !== null) {
        var L = e.unstable_now();
        M = L;
        var _ = true;
        try {
          _ = w(true, L);
        } finally {
          _ ? Oe() : (S = false, w = null);
        }
      } else S = false;
    }
    var Oe;
    if (typeof d == "function") Oe = function() {
      d(Ee);
    };
    else if (typeof MessageChannel < "u") {
      var Xt = new MessageChannel(), Jt = Xt.port2;
      Xt.port1.onmessage = Ee, Oe = function() {
        Jt.postMessage(null);
      };
    } else Oe = function() {
      N(Ee, 0);
    };
    function dt(L) {
      w = L, S || (S = true, Oe());
    }
    function Tn(L, _) {
      C = N(function() {
        L(e.unstable_now());
      }, _);
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(L) {
      L.callback = null;
    }, e.unstable_continueExecution = function() {
      k || b || (k = true, dt(j));
    }, e.unstable_forceFrameRate = function(L) {
      0 > L || 125 < L ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : O = 0 < L ? Math.floor(1e3 / L) : 5;
    }, e.unstable_getCurrentPriorityLevel = function() {
      return v;
    }, e.unstable_getFirstCallbackNode = function() {
      return n(a);
    }, e.unstable_next = function(L) {
      switch (v) {
        case 1:
        case 2:
        case 3:
          var _ = 3;
          break;
        default:
          _ = v;
      }
      var P = v;
      v = _;
      try {
        return L();
      } finally {
        v = P;
      }
    }, e.unstable_pauseExecution = function() {
    }, e.unstable_requestPaint = function() {
    }, e.unstable_runWithPriority = function(L, _) {
      switch (L) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          L = 3;
      }
      var P = v;
      v = L;
      try {
        return _();
      } finally {
        v = P;
      }
    }, e.unstable_scheduleCallback = function(L, _, P) {
      var R = e.unstable_now();
      switch (typeof P == "object" && P !== null ? (P = P.delay, P = typeof P == "number" && 0 < P ? R + P : R) : P = R, L) {
        case 1:
          var T = -1;
          break;
        case 2:
          T = 250;
          break;
        case 5:
          T = 1073741823;
          break;
        case 4:
          T = 1e4;
          break;
        default:
          T = 5e3;
      }
      return T = P + T, L = {
        id: p++,
        callback: _,
        priorityLevel: L,
        startTime: P,
        expirationTime: T,
        sortIndex: -1
      }, P > R ? (L.sortIndex = P, t(c, L), n(a) === null && L === n(c) && (h ? (m(C), C = -1) : h = true, Tn(x, P - R))) : (L.sortIndex = T, t(a, L), k || b || (k = true, dt(j))), L;
    }, e.unstable_shouldYield = X, e.unstable_wrapCallback = function(L) {
      var _ = v;
      return function() {
        var P = v;
        v = _;
        try {
          return L.apply(this, arguments);
        } finally {
          v = P;
        }
      };
    };
  })(su);
  iu.exports = su;
  var Hd = iu.exports;
  var Vd = y, Ne = Hd;
  function E(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var au = /* @__PURE__ */ new Set(), nr = {};
  function Gt(e, t) {
    xn(e, t), xn(e + "Capture", t);
  }
  function xn(e, t) {
    for (nr[e] = t, e = 0; e < t.length; e++) au.add(t[e]);
  }
  var ot = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Fo = Object.prototype.hasOwnProperty, Kd = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Fs = {}, Rs = {};
  function Qd(e) {
    return Fo.call(Rs, e) ? true : Fo.call(Fs, e) ? false : Kd.test(e) ? Rs[e] = true : (Fs[e] = true, false);
  }
  function Gd(e, t, n, r) {
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
  function Yd(e, t, n, r) {
    if (t === null || typeof t > "u" || Gd(e, t, n, r)) return true;
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
  var _i = /[\-:]([a-z])/g;
  function Li(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(_i, Li);
    ie[t] = new pe(t, 1, false, e, null, false, false);
  });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(_i, Li);
    ie[t] = new pe(t, 1, false, e, "http://www.w3.org/1999/xlink", false, false);
  });
  [
    "xml:base",
    "xml:lang",
    "xml:space"
  ].forEach(function(e) {
    var t = e.replace(_i, Li);
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
  function Fi(e, t, n, r) {
    var l = ie.hasOwnProperty(t) ? ie[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Yd(t, n, l, r) && (n = null), r || l === null ? Qd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? false : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === true ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var ut = Vd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Fr = Symbol.for("react.element"), en = Symbol.for("react.portal"), tn = Symbol.for("react.fragment"), Ri = Symbol.for("react.strict_mode"), Ro = Symbol.for("react.profiler"), uu = Symbol.for("react.provider"), cu = Symbol.for("react.context"), Ti = Symbol.for("react.forward_ref"), To = Symbol.for("react.suspense"), Oo = Symbol.for("react.suspense_list"), Oi = Symbol.for("react.memo"), pt = Symbol.for("react.lazy"), du = Symbol.for("react.offscreen"), Ts = Symbol.iterator;
  function On(e) {
    return e === null || typeof e != "object" ? null : (e = Ts && e[Ts] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Q = Object.assign, eo;
  function Wn(e) {
    if (eo === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      eo = t && t[1] || "";
    }
    return `
` + eo + e;
  }
  var to = false;
  function no(e, t) {
    if (!e || to) return "";
    to = true;
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
      to = false, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? Wn(e) : "";
  }
  function Xd(e) {
    switch (e.tag) {
      case 5:
        return Wn(e.type);
      case 16:
        return Wn("Lazy");
      case 13:
        return Wn("Suspense");
      case 19:
        return Wn("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = no(e.type, false), e;
      case 11:
        return e = no(e.type.render, false), e;
      case 1:
        return e = no(e.type, true), e;
      default:
        return "";
    }
  }
  function Mo(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case tn:
        return "Fragment";
      case en:
        return "Portal";
      case Ro:
        return "Profiler";
      case Ri:
        return "StrictMode";
      case To:
        return "Suspense";
      case Oo:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case cu:
        return (e.displayName || "Context") + ".Consumer";
      case uu:
        return (e._context.displayName || "Context") + ".Provider";
      case Ti:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Oi:
        return t = e.displayName || null, t !== null ? t : Mo(e.type) || "Memo";
      case pt:
        t = e._payload, e = e._init;
        try {
          return Mo(e(t));
        } catch {
        }
    }
    return null;
  }
  function Jd(e) {
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
        return Mo(t);
      case 8:
        return t === Ri ? "StrictMode" : "Mode";
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
  function Pt(e) {
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
  function fu(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Zd(e) {
    var t = fu(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
  function Rr(e) {
    e._valueTracker || (e._valueTracker = Zd(e));
  }
  function mu(e) {
    if (!e) return false;
    var t = e._valueTracker;
    if (!t) return true;
    var n = t.getValue(), r = "";
    return e && (r = fu(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), true) : false;
  }
  function al(e) {
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
  function Os(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = Pt(t.value != null ? t.value : n), e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    };
  }
  function pu(e, t) {
    t = t.checked, t != null && Fi(e, "checked", t, false);
  }
  function Ao(e, t) {
    pu(e, t);
    var n = Pt(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Io(e, t.type, n) : t.hasOwnProperty("defaultValue") && Io(e, t.type, Pt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Ms(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function Io(e, t, n) {
    (t !== "number" || al(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Hn = Array.isArray;
  function mn(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = true;
      for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = true);
    } else {
      for (n = "" + Pt(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          e[l].selected = true, r && (e[l].defaultSelected = true);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = true);
    }
  }
  function Do(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(E(91));
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
        if (t != null) throw Error(E(92));
        if (Hn(n)) {
          if (1 < n.length) throw Error(E(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = {
      initialValue: Pt(n)
    };
  }
  function hu(e, t) {
    var n = Pt(t.value), r = Pt(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function As(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function gu(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function $o(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? gu(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var Tr, vu = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, l);
      });
    } : e;
  }(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (Tr = Tr || document.createElement("div"), Tr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Tr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function rr(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Qn = {
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
  }, qd = [
    "Webkit",
    "ms",
    "Moz",
    "O"
  ];
  Object.keys(Qn).forEach(function(e) {
    qd.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), Qn[t] = Qn[e];
    });
  });
  function yu(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Qn.hasOwnProperty(e) && Qn[e] ? ("" + t).trim() : t + "px";
  }
  function xu(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, l = yu(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
    }
  }
  var ef = Q({
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
  function Bo(e, t) {
    if (t) {
      if (ef[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(E(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(E(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(E(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(E(62));
    }
  }
  function Uo(e, t) {
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
  var Wo = null;
  function Mi(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Ho = null, pn = null, hn = null;
  function Is(e) {
    if (e = Nr(e)) {
      if (typeof Ho != "function") throw Error(E(280));
      var t = e.stateNode;
      t && (t = Il(t), Ho(e.stateNode, e.type, t));
    }
  }
  function wu(e) {
    pn ? hn ? hn.push(e) : hn = [
      e
    ] : pn = e;
  }
  function bu() {
    if (pn) {
      var e = pn, t = hn;
      if (hn = pn = null, Is(e), t) for (e = 0; e < t.length; e++) Is(t[e]);
    }
  }
  function ku(e, t) {
    return e(t);
  }
  function ju() {
  }
  var ro = false;
  function Nu(e, t, n) {
    if (ro) return e(t, n);
    ro = true;
    try {
      return ku(e, t, n);
    } finally {
      ro = false, (pn !== null || hn !== null) && (ju(), bu());
    }
  }
  function lr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Il(n);
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
    if (n && typeof n != "function") throw Error(E(231, t, typeof n));
    return n;
  }
  var Vo = false;
  if (ot) try {
    var Mn = {};
    Object.defineProperty(Mn, "passive", {
      get: function() {
        Vo = true;
      }
    }), window.addEventListener("test", Mn, Mn), window.removeEventListener("test", Mn, Mn);
  } catch {
    Vo = false;
  }
  function tf(e, t, n, r, l, o, i, u, a) {
    var c = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, c);
    } catch (p) {
      this.onError(p);
    }
  }
  var Gn = false, ul = null, cl = false, Ko = null, nf = {
    onError: function(e) {
      Gn = true, ul = e;
    }
  };
  function rf(e, t, n, r, l, o, i, u, a) {
    Gn = false, ul = null, tf.apply(nf, arguments);
  }
  function lf(e, t, n, r, l, o, i, u, a) {
    if (rf.apply(this, arguments), Gn) {
      if (Gn) {
        var c = ul;
        Gn = false, ul = null;
      } else throw Error(E(198));
      cl || (cl = true, Ko = c);
    }
  }
  function Yt(e) {
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
  function Su(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function Ds(e) {
    if (Yt(e) !== e) throw Error(E(188));
  }
  function of(e) {
    var t = e.alternate;
    if (!t) {
      if (t = Yt(e), t === null) throw Error(E(188));
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
          if (o === n) return Ds(l), e;
          if (o === r) return Ds(l), t;
          o = o.sibling;
        }
        throw Error(E(188));
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
          if (!i) throw Error(E(189));
        }
      }
      if (n.alternate !== r) throw Error(E(190));
    }
    if (n.tag !== 3) throw Error(E(188));
    return n.stateNode.current === n ? e : t;
  }
  function Cu(e) {
    return e = of(e), e !== null ? Eu(e) : null;
  }
  function Eu(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Eu(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Pu = Ne.unstable_scheduleCallback, $s = Ne.unstable_cancelCallback, sf = Ne.unstable_shouldYield, af = Ne.unstable_requestPaint, J = Ne.unstable_now, uf = Ne.unstable_getCurrentPriorityLevel, zi = Ne.unstable_ImmediatePriority, _u = Ne.unstable_UserBlockingPriority, dl = Ne.unstable_NormalPriority, cf = Ne.unstable_LowPriority, Lu = Ne.unstable_IdlePriority, Ol = null, Ye = null;
  function df(e) {
    if (Ye && typeof Ye.onCommitFiberRoot == "function") try {
      Ye.onCommitFiberRoot(Ol, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var Be = Math.clz32 ? Math.clz32 : pf, ff = Math.log, mf = Math.LN2;
  function pf(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (ff(e) / mf | 0) | 0;
  }
  var Or = 64, Mr = 4194304;
  function Vn(e) {
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
  function fl(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, l = e.suspendedLanes, o = e.pingedLanes, i = n & 268435455;
    if (i !== 0) {
      var u = i & ~l;
      u !== 0 ? r = Vn(u) : (o &= i, o !== 0 && (r = Vn(o)));
    } else i = n & ~l, i !== 0 ? r = Vn(i) : o !== 0 && (r = Vn(o));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & l) && (l = r & -r, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Be(t), l = 1 << n, r |= e[n], t &= ~l;
    return r;
  }
  function hf(e, t) {
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
  function gf(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
      var i = 31 - Be(o), u = 1 << i, a = l[i];
      a === -1 ? (!(u & n) || u & r) && (l[i] = hf(u, t)) : a <= t && (e.expiredLanes |= u), o &= ~u;
    }
  }
  function Qo(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Fu() {
    var e = Or;
    return Or <<= 1, !(Or & 4194240) && (Or = 64), e;
  }
  function lo(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function kr(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Be(t), e[t] = n;
  }
  function vf(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - Be(n), o = 1 << l;
      t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o;
    }
  }
  function Ai(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - Be(n), l = 1 << r;
      l & t | e[r] & t && (e[r] |= t), n &= ~l;
    }
  }
  var I = 0;
  function Ru(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Tu, Ii, Ou, Mu, zu, Go = false, zr = [], wt = null, bt = null, kt = null, or = /* @__PURE__ */ new Map(), ir = /* @__PURE__ */ new Map(), gt = [], yf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Bs(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        wt = null;
        break;
      case "dragenter":
      case "dragleave":
        bt = null;
        break;
      case "mouseover":
      case "mouseout":
        kt = null;
        break;
      case "pointerover":
      case "pointerout":
        or.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ir.delete(t.pointerId);
    }
  }
  function zn(e, t, n, r, l, o) {
    return e === null || e.nativeEvent !== o ? (e = {
      blockedOn: t,
      domEventName: n,
      eventSystemFlags: r,
      nativeEvent: o,
      targetContainers: [
        l
      ]
    }, t !== null && (t = Nr(t), t !== null && Ii(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function xf(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return wt = zn(wt, e, t, n, r, l), true;
      case "dragenter":
        return bt = zn(bt, e, t, n, r, l), true;
      case "mouseover":
        return kt = zn(kt, e, t, n, r, l), true;
      case "pointerover":
        var o = l.pointerId;
        return or.set(o, zn(or.get(o) || null, e, t, n, r, l)), true;
      case "gotpointercapture":
        return o = l.pointerId, ir.set(o, zn(ir.get(o) || null, e, t, n, r, l)), true;
    }
    return false;
  }
  function Au(e) {
    var t = It(e.target);
    if (t !== null) {
      var n = Yt(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = Su(n), t !== null) {
            e.blockedOn = t, zu(e.priority, function() {
              Ou(n);
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
  function Xr(e) {
    if (e.blockedOn !== null) return false;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Yo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        Wo = r, n.target.dispatchEvent(r), Wo = null;
      } else return t = Nr(n), t !== null && Ii(t), e.blockedOn = n, false;
      t.shift();
    }
    return true;
  }
  function Us(e, t, n) {
    Xr(e) && n.delete(t);
  }
  function wf() {
    Go = false, wt !== null && Xr(wt) && (wt = null), bt !== null && Xr(bt) && (bt = null), kt !== null && Xr(kt) && (kt = null), or.forEach(Us), ir.forEach(Us);
  }
  function An(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Go || (Go = true, Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority, wf)));
  }
  function sr(e) {
    function t(l) {
      return An(l, e);
    }
    if (0 < zr.length) {
      An(zr[0], e);
      for (var n = 1; n < zr.length; n++) {
        var r = zr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (wt !== null && An(wt, e), bt !== null && An(bt, e), kt !== null && An(kt, e), or.forEach(t), ir.forEach(t), n = 0; n < gt.length; n++) r = gt[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < gt.length && (n = gt[0], n.blockedOn === null); ) Au(n), n.blockedOn === null && gt.shift();
  }
  var gn = ut.ReactCurrentBatchConfig, ml = true;
  function bf(e, t, n, r) {
    var l = I, o = gn.transition;
    gn.transition = null;
    try {
      I = 1, Di(e, t, n, r);
    } finally {
      I = l, gn.transition = o;
    }
  }
  function kf(e, t, n, r) {
    var l = I, o = gn.transition;
    gn.transition = null;
    try {
      I = 4, Di(e, t, n, r);
    } finally {
      I = l, gn.transition = o;
    }
  }
  function Di(e, t, n, r) {
    if (ml) {
      var l = Yo(e, t, n, r);
      if (l === null) ho(e, t, r, pl, n), Bs(e, r);
      else if (xf(l, e, t, n, r)) r.stopPropagation();
      else if (Bs(e, r), t & 4 && -1 < yf.indexOf(e)) {
        for (; l !== null; ) {
          var o = Nr(l);
          if (o !== null && Tu(o), o = Yo(e, t, n, r), o === null && ho(e, t, r, pl, n), o === l) break;
          l = o;
        }
        l !== null && r.stopPropagation();
      } else ho(e, t, r, null, n);
    }
  }
  var pl = null;
  function Yo(e, t, n, r) {
    if (pl = null, e = Mi(r), e = It(e), e !== null) if (t = Yt(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = Su(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return pl = e, null;
  }
  function Iu(e) {
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
        switch (uf()) {
          case zi:
            return 1;
          case _u:
            return 4;
          case dl:
          case cf:
            return 16;
          case Lu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var yt = null, $i = null, Jr = null;
  function Du() {
    if (Jr) return Jr;
    var e, t = $i, n = t.length, r, l = "value" in yt ? yt.value : yt.textContent, o = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++) ;
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === l[o - r]; r++) ;
    return Jr = l.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Zr(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Ar() {
    return true;
  }
  function Ws() {
    return false;
  }
  function Ce(e) {
    function t(n, r, l, o, i) {
      this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
      for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(o) : o[u]);
      return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === false) ? Ar : Ws, this.isPropagationStopped = Ws, this;
    }
    return Q(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = true;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = false), this.isDefaultPrevented = Ar);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = true), this.isPropagationStopped = Ar);
      },
      persist: function() {
      },
      isPersistent: Ar
    }), t;
  }
  var En = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Bi = Ce(En), jr = Q({}, En, {
    view: 0,
    detail: 0
  }), jf = Ce(jr), oo, io, In, Ml = Q({}, jr, {
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
    getModifierState: Ui,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== In && (In && e.type === "mousemove" ? (oo = e.screenX - In.screenX, io = e.screenY - In.screenY) : io = oo = 0, In = e), oo);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : io;
    }
  }), Hs = Ce(Ml), Nf = Q({}, Ml, {
    dataTransfer: 0
  }), Sf = Ce(Nf), Cf = Q({}, jr, {
    relatedTarget: 0
  }), so = Ce(Cf), Ef = Q({}, En, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Pf = Ce(Ef), _f = Q({}, En, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), Lf = Ce(_f), Ff = Q({}, En, {
    data: 0
  }), Vs = Ce(Ff), Rf = {
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
  }, Tf = {
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
  }, Of = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Mf(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Of[e]) ? !!t[e] : false;
  }
  function Ui() {
    return Mf;
  }
  var zf = Q({}, jr, {
    key: function(e) {
      if (e.key) {
        var t = Rf[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = Zr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Tf[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ui,
    charCode: function(e) {
      return e.type === "keypress" ? Zr(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Zr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), Af = Ce(zf), If = Q({}, Ml, {
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
  }), Ks = Ce(If), Df = Q({}, jr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ui
  }), $f = Ce(Df), Bf = Q({}, En, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Uf = Ce(Bf), Wf = Q({}, Ml, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Hf = Ce(Wf), Vf = [
    9,
    13,
    27,
    32
  ], Wi = ot && "CompositionEvent" in window, Yn = null;
  ot && "documentMode" in document && (Yn = document.documentMode);
  var Kf = ot && "TextEvent" in window && !Yn, $u = ot && (!Wi || Yn && 8 < Yn && 11 >= Yn), Qs = " ", Gs = false;
  function Bu(e, t) {
    switch (e) {
      case "keyup":
        return Vf.indexOf(t.keyCode) !== -1;
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
  function Uu(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var nn = false;
  function Qf(e, t) {
    switch (e) {
      case "compositionend":
        return Uu(t);
      case "keypress":
        return t.which !== 32 ? null : (Gs = true, Qs);
      case "textInput":
        return e = t.data, e === Qs && Gs ? null : e;
      default:
        return null;
    }
  }
  function Gf(e, t) {
    if (nn) return e === "compositionend" || !Wi && Bu(e, t) ? (e = Du(), Jr = $i = yt = null, nn = false, e) : null;
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
        return $u && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Yf = {
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
  function Ys(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Yf[e.type] : t === "textarea";
  }
  function Wu(e, t, n, r) {
    wu(r), t = hl(t, "onChange"), 0 < t.length && (n = new Bi("onChange", "change", null, n, r), e.push({
      event: n,
      listeners: t
    }));
  }
  var Xn = null, ar = null;
  function Xf(e) {
    ec(e, 0);
  }
  function zl(e) {
    var t = on(e);
    if (mu(t)) return e;
  }
  function Jf(e, t) {
    if (e === "change") return t;
  }
  var Hu = false;
  if (ot) {
    var ao;
    if (ot) {
      var uo = "oninput" in document;
      if (!uo) {
        var Xs = document.createElement("div");
        Xs.setAttribute("oninput", "return;"), uo = typeof Xs.oninput == "function";
      }
      ao = uo;
    } else ao = false;
    Hu = ao && (!document.documentMode || 9 < document.documentMode);
  }
  function Js() {
    Xn && (Xn.detachEvent("onpropertychange", Vu), ar = Xn = null);
  }
  function Vu(e) {
    if (e.propertyName === "value" && zl(ar)) {
      var t = [];
      Wu(t, ar, e, Mi(e)), Nu(Xf, t);
    }
  }
  function Zf(e, t, n) {
    e === "focusin" ? (Js(), Xn = t, ar = n, Xn.attachEvent("onpropertychange", Vu)) : e === "focusout" && Js();
  }
  function qf(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return zl(ar);
  }
  function em(e, t) {
    if (e === "click") return zl(t);
  }
  function tm(e, t) {
    if (e === "input" || e === "change") return zl(t);
  }
  function nm(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var We = typeof Object.is == "function" ? Object.is : nm;
  function ur(e, t) {
    if (We(e, t)) return true;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return false;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return false;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!Fo.call(t, l) || !We(e[l], t[l])) return false;
    }
    return true;
  }
  function Zs(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function qs(e, t) {
    var n = Zs(e);
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
      n = Zs(n);
    }
  }
  function Ku(e, t) {
    return e && t ? e === t ? true : e && e.nodeType === 3 ? false : t && t.nodeType === 3 ? Ku(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : false : false;
  }
  function Qu() {
    for (var e = window, t = al(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = false;
      }
      if (n) e = t.contentWindow;
      else break;
      t = al(e.document);
    }
    return t;
  }
  function Hi(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function rm(e) {
    var t = Qu(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Ku(n.ownerDocument.documentElement, n)) {
      if (r !== null && Hi(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var l = n.textContent.length, o = Math.min(r.start, l);
          r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = qs(n, o);
          var i = qs(n, r);
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
  var lm = ot && "documentMode" in document && 11 >= document.documentMode, rn = null, Xo = null, Jn = null, Jo = false;
  function ea(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Jo || rn == null || rn !== al(r) || (r = rn, "selectionStart" in r && Hi(r) ? r = {
      start: r.selectionStart,
      end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
      anchorNode: r.anchorNode,
      anchorOffset: r.anchorOffset,
      focusNode: r.focusNode,
      focusOffset: r.focusOffset
    }), Jn && ur(Jn, r) || (Jn = r, r = hl(Xo, "onSelect"), 0 < r.length && (t = new Bi("onSelect", "select", null, t, n), e.push({
      event: t,
      listeners: r
    }), t.target = rn)));
  }
  function Ir(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var ln = {
    animationend: Ir("Animation", "AnimationEnd"),
    animationiteration: Ir("Animation", "AnimationIteration"),
    animationstart: Ir("Animation", "AnimationStart"),
    transitionend: Ir("Transition", "TransitionEnd")
  }, co = {}, Gu = {};
  ot && (Gu = document.createElement("div").style, "AnimationEvent" in window || (delete ln.animationend.animation, delete ln.animationiteration.animation, delete ln.animationstart.animation), "TransitionEvent" in window || delete ln.transitionend.transition);
  function Al(e) {
    if (co[e]) return co[e];
    if (!ln[e]) return e;
    var t = ln[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in Gu) return co[e] = t[n];
    return e;
  }
  var Yu = Al("animationend"), Xu = Al("animationiteration"), Ju = Al("animationstart"), Zu = Al("transitionend"), qu = /* @__PURE__ */ new Map(), ta = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Ft(e, t) {
    qu.set(e, t), Gt(t, [
      e
    ]);
  }
  for (var fo = 0; fo < ta.length; fo++) {
    var mo = ta[fo], om = mo.toLowerCase(), im = mo[0].toUpperCase() + mo.slice(1);
    Ft(om, "on" + im);
  }
  Ft(Yu, "onAnimationEnd");
  Ft(Xu, "onAnimationIteration");
  Ft(Ju, "onAnimationStart");
  Ft("dblclick", "onDoubleClick");
  Ft("focusin", "onFocus");
  Ft("focusout", "onBlur");
  Ft(Zu, "onTransitionEnd");
  xn("onMouseEnter", [
    "mouseout",
    "mouseover"
  ]);
  xn("onMouseLeave", [
    "mouseout",
    "mouseover"
  ]);
  xn("onPointerEnter", [
    "pointerout",
    "pointerover"
  ]);
  xn("onPointerLeave", [
    "pointerout",
    "pointerover"
  ]);
  Gt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
  Gt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
  Gt("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]);
  Gt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
  Gt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
  Gt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Kn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), sm = new Set("cancel close invalid load scroll toggle".split(" ").concat(Kn));
  function na(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, lf(r, t, void 0, e), e.currentTarget = null;
  }
  function ec(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], l = r.event;
      r = r.listeners;
      e: {
        var o = void 0;
        if (t) for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i], a = u.instance, c = u.currentTarget;
          if (u = u.listener, a !== o && l.isPropagationStopped()) break e;
          na(l, u, c), o = a;
        }
        else for (i = 0; i < r.length; i++) {
          if (u = r[i], a = u.instance, c = u.currentTarget, u = u.listener, a !== o && l.isPropagationStopped()) break e;
          na(l, u, c), o = a;
        }
      }
    }
    if (cl) throw e = Ko, cl = false, Ko = null, e;
  }
  function B(e, t) {
    var n = t[ni];
    n === void 0 && (n = t[ni] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (tc(t, e, 2, false), n.add(r));
  }
  function po(e, t, n) {
    var r = 0;
    t && (r |= 4), tc(n, e, r, t);
  }
  var Dr = "_reactListening" + Math.random().toString(36).slice(2);
  function cr(e) {
    if (!e[Dr]) {
      e[Dr] = true, au.forEach(function(n) {
        n !== "selectionchange" && (sm.has(n) || po(n, false, e), po(n, true, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Dr] || (t[Dr] = true, po("selectionchange", false, t));
    }
  }
  function tc(e, t, n, r) {
    switch (Iu(t)) {
      case 1:
        var l = bf;
        break;
      case 4:
        l = kf;
        break;
      default:
        l = Di;
    }
    n = l.bind(null, t, n, e), l = void 0, !Vo || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = true), r ? l !== void 0 ? e.addEventListener(t, n, {
      capture: true,
      passive: l
    }) : e.addEventListener(t, n, true) : l !== void 0 ? e.addEventListener(t, n, {
      passive: l
    }) : e.addEventListener(t, n, false);
  }
  function ho(e, t, n, r, l) {
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
          if (i = It(u), i === null) return;
          if (a = i.tag, a === 5 || a === 6) {
            r = o = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
    Nu(function() {
      var c = o, p = Mi(n), g = [];
      e: {
        var v = qu.get(e);
        if (v !== void 0) {
          var b = Bi, k = e;
          switch (e) {
            case "keypress":
              if (Zr(n) === 0) break e;
            case "keydown":
            case "keyup":
              b = Af;
              break;
            case "focusin":
              k = "focus", b = so;
              break;
            case "focusout":
              k = "blur", b = so;
              break;
            case "beforeblur":
            case "afterblur":
              b = so;
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
              b = Hs;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              b = Sf;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              b = $f;
              break;
            case Yu:
            case Xu:
            case Ju:
              b = Pf;
              break;
            case Zu:
              b = Uf;
              break;
            case "scroll":
              b = jf;
              break;
            case "wheel":
              b = Hf;
              break;
            case "copy":
            case "cut":
            case "paste":
              b = Lf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              b = Ks;
          }
          var h = (t & 4) !== 0, N = !h && e === "scroll", m = h ? v !== null ? v + "Capture" : null : v;
          h = [];
          for (var d = c, f; d !== null; ) {
            f = d;
            var x = f.stateNode;
            if (f.tag === 5 && x !== null && (f = x, m !== null && (x = lr(d, m), x != null && h.push(dr(d, x, f)))), N) break;
            d = d.return;
          }
          0 < h.length && (v = new b(v, k, null, n, p), g.push({
            event: v,
            listeners: h
          }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (v = e === "mouseover" || e === "pointerover", b = e === "mouseout" || e === "pointerout", v && n !== Wo && (k = n.relatedTarget || n.fromElement) && (It(k) || k[it])) break e;
          if ((b || v) && (v = p.window === p ? p : (v = p.ownerDocument) ? v.defaultView || v.parentWindow : window, b ? (k = n.relatedTarget || n.toElement, b = c, k = k ? It(k) : null, k !== null && (N = Yt(k), k !== N || k.tag !== 5 && k.tag !== 6) && (k = null)) : (b = null, k = c), b !== k)) {
            if (h = Hs, x = "onMouseLeave", m = "onMouseEnter", d = "mouse", (e === "pointerout" || e === "pointerover") && (h = Ks, x = "onPointerLeave", m = "onPointerEnter", d = "pointer"), N = b == null ? v : on(b), f = k == null ? v : on(k), v = new h(x, d + "leave", b, n, p), v.target = N, v.relatedTarget = f, x = null, It(p) === c && (h = new h(m, d + "enter", k, n, p), h.target = f, h.relatedTarget = N, x = h), N = x, b && k) t: {
              for (h = b, m = k, d = 0, f = h; f; f = Zt(f)) d++;
              for (f = 0, x = m; x; x = Zt(x)) f++;
              for (; 0 < d - f; ) h = Zt(h), d--;
              for (; 0 < f - d; ) m = Zt(m), f--;
              for (; d--; ) {
                if (h === m || m !== null && h === m.alternate) break t;
                h = Zt(h), m = Zt(m);
              }
              h = null;
            }
            else h = null;
            b !== null && ra(g, v, b, h, false), k !== null && N !== null && ra(g, N, k, h, true);
          }
        }
        e: {
          if (v = c ? on(c) : window, b = v.nodeName && v.nodeName.toLowerCase(), b === "select" || b === "input" && v.type === "file") var j = Jf;
          else if (Ys(v)) if (Hu) j = tm;
          else {
            j = qf;
            var S = Zf;
          }
          else (b = v.nodeName) && b.toLowerCase() === "input" && (v.type === "checkbox" || v.type === "radio") && (j = em);
          if (j && (j = j(e, c))) {
            Wu(g, j, n, p);
            break e;
          }
          S && S(e, v, c), e === "focusout" && (S = v._wrapperState) && S.controlled && v.type === "number" && Io(v, "number", v.value);
        }
        switch (S = c ? on(c) : window, e) {
          case "focusin":
            (Ys(S) || S.contentEditable === "true") && (rn = S, Xo = c, Jn = null);
            break;
          case "focusout":
            Jn = Xo = rn = null;
            break;
          case "mousedown":
            Jo = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Jo = false, ea(g, n, p);
            break;
          case "selectionchange":
            if (lm) break;
          case "keydown":
          case "keyup":
            ea(g, n, p);
        }
        var w;
        if (Wi) e: {
          switch (e) {
            case "compositionstart":
              var C = "onCompositionStart";
              break e;
            case "compositionend":
              C = "onCompositionEnd";
              break e;
            case "compositionupdate":
              C = "onCompositionUpdate";
              break e;
          }
          C = void 0;
        }
        else nn ? Bu(e, n) && (C = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (C = "onCompositionStart");
        C && ($u && n.locale !== "ko" && (nn || C !== "onCompositionStart" ? C === "onCompositionEnd" && nn && (w = Du()) : (yt = p, $i = "value" in yt ? yt.value : yt.textContent, nn = true)), S = hl(c, C), 0 < S.length && (C = new Vs(C, e, null, n, p), g.push({
          event: C,
          listeners: S
        }), w ? C.data = w : (w = Uu(n), w !== null && (C.data = w)))), (w = Kf ? Qf(e, n) : Gf(e, n)) && (c = hl(c, "onBeforeInput"), 0 < c.length && (p = new Vs("onBeforeInput", "beforeinput", null, n, p), g.push({
          event: p,
          listeners: c
        }), p.data = w));
      }
      ec(g, t);
    });
  }
  function dr(e, t, n) {
    return {
      instance: e,
      listener: t,
      currentTarget: n
    };
  }
  function hl(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e, o = l.stateNode;
      l.tag === 5 && o !== null && (l = o, o = lr(e, n), o != null && r.unshift(dr(e, o, l)), o = lr(e, t), o != null && r.push(dr(e, o, l))), e = e.return;
    }
    return r;
  }
  function Zt(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function ra(e, t, n, r, l) {
    for (var o = t._reactName, i = []; n !== null && n !== r; ) {
      var u = n, a = u.alternate, c = u.stateNode;
      if (a !== null && a === r) break;
      u.tag === 5 && c !== null && (u = c, l ? (a = lr(n, o), a != null && i.unshift(dr(n, a, u))) : l || (a = lr(n, o), a != null && i.push(dr(n, a, u)))), n = n.return;
    }
    i.length !== 0 && e.push({
      event: t,
      listeners: i
    });
  }
  var am = /\r\n?/g, um = /\u0000|\uFFFD/g;
  function la(e) {
    return (typeof e == "string" ? e : "" + e).replace(am, `
`).replace(um, "");
  }
  function $r(e, t, n) {
    if (t = la(t), la(e) !== t && n) throw Error(E(425));
  }
  function gl() {
  }
  var Zo = null, qo = null;
  function ei(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var ti = typeof setTimeout == "function" ? setTimeout : void 0, cm = typeof clearTimeout == "function" ? clearTimeout : void 0, oa = typeof Promise == "function" ? Promise : void 0, dm = typeof queueMicrotask == "function" ? queueMicrotask : typeof oa < "u" ? function(e) {
    return oa.resolve(null).then(e).catch(fm);
  } : ti;
  function fm(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function go(e, t) {
    var n = t, r = 0;
    do {
      var l = n.nextSibling;
      if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
        if (r === 0) {
          e.removeChild(l), sr(t);
          return;
        }
        r--;
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = l;
    } while (n);
    sr(t);
  }
  function jt(e) {
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
  function ia(e) {
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
  var Pn = Math.random().toString(36).slice(2), Ge = "__reactFiber$" + Pn, fr = "__reactProps$" + Pn, it = "__reactContainer$" + Pn, ni = "__reactEvents$" + Pn, mm = "__reactListeners$" + Pn, pm = "__reactHandles$" + Pn;
  function It(e) {
    var t = e[Ge];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[it] || n[Ge]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = ia(e); e !== null; ) {
          if (n = e[Ge]) return n;
          e = ia(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Nr(e) {
    return e = e[Ge] || e[it], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function on(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(E(33));
  }
  function Il(e) {
    return e[fr] || null;
  }
  var ri = [], sn = -1;
  function Rt(e) {
    return {
      current: e
    };
  }
  function U(e) {
    0 > sn || (e.current = ri[sn], ri[sn] = null, sn--);
  }
  function $(e, t) {
    sn++, ri[sn] = e.current, e.current = t;
  }
  var _t = {}, ce = Rt(_t), ye = Rt(false), Wt = _t;
  function wn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return _t;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var l = {}, o;
    for (o in n) l[o] = t[o];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function xe(e) {
    return e = e.childContextTypes, e != null;
  }
  function vl() {
    U(ye), U(ce);
  }
  function sa(e, t, n) {
    if (ce.current !== _t) throw Error(E(168));
    $(ce, t), $(ye, n);
  }
  function nc(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(E(108, Jd(e) || "Unknown", l));
    return Q({}, n, r);
  }
  function yl(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || _t, Wt = ce.current, $(ce, e), $(ye, ye.current), true;
  }
  function aa(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(E(169));
    n ? (e = nc(e, t, Wt), r.__reactInternalMemoizedMergedChildContext = e, U(ye), U(ce), $(ce, e)) : U(ye), $(ye, n);
  }
  var et = null, Dl = false, vo = false;
  function rc(e) {
    et === null ? et = [
      e
    ] : et.push(e);
  }
  function hm(e) {
    Dl = true, rc(e);
  }
  function Tt() {
    if (!vo && et !== null) {
      vo = true;
      var e = 0, t = I;
      try {
        var n = et;
        for (I = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(true);
          while (r !== null);
        }
        et = null, Dl = false;
      } catch (l) {
        throw et !== null && (et = et.slice(e + 1)), Pu(zi, Tt), l;
      } finally {
        I = t, vo = false;
      }
    }
    return null;
  }
  var an = [], un = 0, xl = null, wl = 0, Pe = [], _e = 0, Ht = null, tt = 1, nt = "";
  function zt(e, t) {
    an[un++] = wl, an[un++] = xl, xl = e, wl = t;
  }
  function lc(e, t, n) {
    Pe[_e++] = tt, Pe[_e++] = nt, Pe[_e++] = Ht, Ht = e;
    var r = tt;
    e = nt;
    var l = 32 - Be(r) - 1;
    r &= ~(1 << l), n += 1;
    var o = 32 - Be(t) + l;
    if (30 < o) {
      var i = l - l % 5;
      o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, tt = 1 << 32 - Be(t) + l | n << l | r, nt = o + e;
    } else tt = 1 << o | n << l | r, nt = e;
  }
  function Vi(e) {
    e.return !== null && (zt(e, 1), lc(e, 1, 0));
  }
  function Ki(e) {
    for (; e === xl; ) xl = an[--un], an[un] = null, wl = an[--un], an[un] = null;
    for (; e === Ht; ) Ht = Pe[--_e], Pe[_e] = null, nt = Pe[--_e], Pe[_e] = null, tt = Pe[--_e], Pe[_e] = null;
  }
  var je = null, ke = null, W = false, $e = null;
  function oc(e, t) {
    var n = Le(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [
      n
    ], e.flags |= 16) : t.push(n);
  }
  function ua(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, je = e, ke = jt(t.firstChild), true) : false;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, je = e, ke = null, true) : false;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Ht !== null ? {
          id: tt,
          overflow: nt
        } : null, e.memoizedState = {
          dehydrated: t,
          treeContext: n,
          retryLane: 1073741824
        }, n = Le(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, je = e, ke = null, true) : false;
      default:
        return false;
    }
  }
  function li(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function oi(e) {
    if (W) {
      var t = ke;
      if (t) {
        var n = t;
        if (!ua(e, t)) {
          if (li(e)) throw Error(E(418));
          t = jt(n.nextSibling);
          var r = je;
          t && ua(e, t) ? oc(r, n) : (e.flags = e.flags & -4097 | 2, W = false, je = e);
        }
      } else {
        if (li(e)) throw Error(E(418));
        e.flags = e.flags & -4097 | 2, W = false, je = e;
      }
    }
  }
  function ca(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    je = e;
  }
  function Br(e) {
    if (e !== je) return false;
    if (!W) return ca(e), W = true, false;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ei(e.type, e.memoizedProps)), t && (t = ke)) {
      if (li(e)) throw ic(), Error(E(418));
      for (; t; ) oc(e, t), t = jt(t.nextSibling);
    }
    if (ca(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(E(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                ke = jt(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        ke = null;
      }
    } else ke = je ? jt(e.stateNode.nextSibling) : null;
    return true;
  }
  function ic() {
    for (var e = ke; e; ) e = jt(e.nextSibling);
  }
  function bn() {
    ke = je = null, W = false;
  }
  function Qi(e) {
    $e === null ? $e = [
      e
    ] : $e.push(e);
  }
  var gm = ut.ReactCurrentBatchConfig;
  function Dn(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(E(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(E(147, e));
        var l = r, o = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(i) {
          var u = l.refs;
          i === null ? delete u[o] : u[o] = i;
        }, t._stringRef = o, t);
      }
      if (typeof e != "string") throw Error(E(284));
      if (!n._owner) throw Error(E(290, e));
    }
    return e;
  }
  function Ur(e, t) {
    throw e = Object.prototype.toString.call(t), Error(E(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function da(e) {
    var t = e._init;
    return t(e._payload);
  }
  function sc(e) {
    function t(m, d) {
      if (e) {
        var f = m.deletions;
        f === null ? (m.deletions = [
          d
        ], m.flags |= 16) : f.push(d);
      }
    }
    function n(m, d) {
      if (!e) return null;
      for (; d !== null; ) t(m, d), d = d.sibling;
      return null;
    }
    function r(m, d) {
      for (m = /* @__PURE__ */ new Map(); d !== null; ) d.key !== null ? m.set(d.key, d) : m.set(d.index, d), d = d.sibling;
      return m;
    }
    function l(m, d) {
      return m = Et(m, d), m.index = 0, m.sibling = null, m;
    }
    function o(m, d, f) {
      return m.index = f, e ? (f = m.alternate, f !== null ? (f = f.index, f < d ? (m.flags |= 2, d) : f) : (m.flags |= 2, d)) : (m.flags |= 1048576, d);
    }
    function i(m) {
      return e && m.alternate === null && (m.flags |= 2), m;
    }
    function u(m, d, f, x) {
      return d === null || d.tag !== 6 ? (d = No(f, m.mode, x), d.return = m, d) : (d = l(d, f), d.return = m, d);
    }
    function a(m, d, f, x) {
      var j = f.type;
      return j === tn ? p(m, d, f.props.children, x, f.key) : d !== null && (d.elementType === j || typeof j == "object" && j !== null && j.$$typeof === pt && da(j) === d.type) ? (x = l(d, f.props), x.ref = Dn(m, d, f), x.return = m, x) : (x = ol(f.type, f.key, f.props, null, m.mode, x), x.ref = Dn(m, d, f), x.return = m, x);
    }
    function c(m, d, f, x) {
      return d === null || d.tag !== 4 || d.stateNode.containerInfo !== f.containerInfo || d.stateNode.implementation !== f.implementation ? (d = So(f, m.mode, x), d.return = m, d) : (d = l(d, f.children || []), d.return = m, d);
    }
    function p(m, d, f, x, j) {
      return d === null || d.tag !== 7 ? (d = Ut(f, m.mode, x, j), d.return = m, d) : (d = l(d, f), d.return = m, d);
    }
    function g(m, d, f) {
      if (typeof d == "string" && d !== "" || typeof d == "number") return d = No("" + d, m.mode, f), d.return = m, d;
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case Fr:
            return f = ol(d.type, d.key, d.props, null, m.mode, f), f.ref = Dn(m, null, d), f.return = m, f;
          case en:
            return d = So(d, m.mode, f), d.return = m, d;
          case pt:
            var x = d._init;
            return g(m, x(d._payload), f);
        }
        if (Hn(d) || On(d)) return d = Ut(d, m.mode, f, null), d.return = m, d;
        Ur(m, d);
      }
      return null;
    }
    function v(m, d, f, x) {
      var j = d !== null ? d.key : null;
      if (typeof f == "string" && f !== "" || typeof f == "number") return j !== null ? null : u(m, d, "" + f, x);
      if (typeof f == "object" && f !== null) {
        switch (f.$$typeof) {
          case Fr:
            return f.key === j ? a(m, d, f, x) : null;
          case en:
            return f.key === j ? c(m, d, f, x) : null;
          case pt:
            return j = f._init, v(m, d, j(f._payload), x);
        }
        if (Hn(f) || On(f)) return j !== null ? null : p(m, d, f, x, null);
        Ur(m, f);
      }
      return null;
    }
    function b(m, d, f, x, j) {
      if (typeof x == "string" && x !== "" || typeof x == "number") return m = m.get(f) || null, u(d, m, "" + x, j);
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case Fr:
            return m = m.get(x.key === null ? f : x.key) || null, a(d, m, x, j);
          case en:
            return m = m.get(x.key === null ? f : x.key) || null, c(d, m, x, j);
          case pt:
            var S = x._init;
            return b(m, d, f, S(x._payload), j);
        }
        if (Hn(x) || On(x)) return m = m.get(f) || null, p(d, m, x, j, null);
        Ur(d, x);
      }
      return null;
    }
    function k(m, d, f, x) {
      for (var j = null, S = null, w = d, C = d = 0, O = null; w !== null && C < f.length; C++) {
        w.index > C ? (O = w, w = null) : O = w.sibling;
        var M = v(m, w, f[C], x);
        if (M === null) {
          w === null && (w = O);
          break;
        }
        e && w && M.alternate === null && t(m, w), d = o(M, d, C), S === null ? j = M : S.sibling = M, S = M, w = O;
      }
      if (C === f.length) return n(m, w), W && zt(m, C), j;
      if (w === null) {
        for (; C < f.length; C++) w = g(m, f[C], x), w !== null && (d = o(w, d, C), S === null ? j = w : S.sibling = w, S = w);
        return W && zt(m, C), j;
      }
      for (w = r(m, w); C < f.length; C++) O = b(w, m, C, f[C], x), O !== null && (e && O.alternate !== null && w.delete(O.key === null ? C : O.key), d = o(O, d, C), S === null ? j = O : S.sibling = O, S = O);
      return e && w.forEach(function(X) {
        return t(m, X);
      }), W && zt(m, C), j;
    }
    function h(m, d, f, x) {
      var j = On(f);
      if (typeof j != "function") throw Error(E(150));
      if (f = j.call(f), f == null) throw Error(E(151));
      for (var S = j = null, w = d, C = d = 0, O = null, M = f.next(); w !== null && !M.done; C++, M = f.next()) {
        w.index > C ? (O = w, w = null) : O = w.sibling;
        var X = v(m, w, M.value, x);
        if (X === null) {
          w === null && (w = O);
          break;
        }
        e && w && X.alternate === null && t(m, w), d = o(X, d, C), S === null ? j = X : S.sibling = X, S = X, w = O;
      }
      if (M.done) return n(m, w), W && zt(m, C), j;
      if (w === null) {
        for (; !M.done; C++, M = f.next()) M = g(m, M.value, x), M !== null && (d = o(M, d, C), S === null ? j = M : S.sibling = M, S = M);
        return W && zt(m, C), j;
      }
      for (w = r(m, w); !M.done; C++, M = f.next()) M = b(w, m, C, M.value, x), M !== null && (e && M.alternate !== null && w.delete(M.key === null ? C : M.key), d = o(M, d, C), S === null ? j = M : S.sibling = M, S = M);
      return e && w.forEach(function(Ee) {
        return t(m, Ee);
      }), W && zt(m, C), j;
    }
    function N(m, d, f, x) {
      if (typeof f == "object" && f !== null && f.type === tn && f.key === null && (f = f.props.children), typeof f == "object" && f !== null) {
        switch (f.$$typeof) {
          case Fr:
            e: {
              for (var j = f.key, S = d; S !== null; ) {
                if (S.key === j) {
                  if (j = f.type, j === tn) {
                    if (S.tag === 7) {
                      n(m, S.sibling), d = l(S, f.props.children), d.return = m, m = d;
                      break e;
                    }
                  } else if (S.elementType === j || typeof j == "object" && j !== null && j.$$typeof === pt && da(j) === S.type) {
                    n(m, S.sibling), d = l(S, f.props), d.ref = Dn(m, S, f), d.return = m, m = d;
                    break e;
                  }
                  n(m, S);
                  break;
                } else t(m, S);
                S = S.sibling;
              }
              f.type === tn ? (d = Ut(f.props.children, m.mode, x, f.key), d.return = m, m = d) : (x = ol(f.type, f.key, f.props, null, m.mode, x), x.ref = Dn(m, d, f), x.return = m, m = x);
            }
            return i(m);
          case en:
            e: {
              for (S = f.key; d !== null; ) {
                if (d.key === S) if (d.tag === 4 && d.stateNode.containerInfo === f.containerInfo && d.stateNode.implementation === f.implementation) {
                  n(m, d.sibling), d = l(d, f.children || []), d.return = m, m = d;
                  break e;
                } else {
                  n(m, d);
                  break;
                }
                else t(m, d);
                d = d.sibling;
              }
              d = So(f, m.mode, x), d.return = m, m = d;
            }
            return i(m);
          case pt:
            return S = f._init, N(m, d, S(f._payload), x);
        }
        if (Hn(f)) return k(m, d, f, x);
        if (On(f)) return h(m, d, f, x);
        Ur(m, f);
      }
      return typeof f == "string" && f !== "" || typeof f == "number" ? (f = "" + f, d !== null && d.tag === 6 ? (n(m, d.sibling), d = l(d, f), d.return = m, m = d) : (n(m, d), d = No(f, m.mode, x), d.return = m, m = d), i(m)) : n(m, d);
    }
    return N;
  }
  var kn = sc(true), ac = sc(false), bl = Rt(null), kl = null, cn = null, Gi = null;
  function Yi() {
    Gi = cn = kl = null;
  }
  function Xi(e) {
    var t = bl.current;
    U(bl), e._currentValue = t;
  }
  function ii(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function vn(e, t) {
    kl = e, Gi = cn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (ve = true), e.firstContext = null);
  }
  function Re(e) {
    var t = e._currentValue;
    if (Gi !== e) if (e = {
      context: e,
      memoizedValue: t,
      next: null
    }, cn === null) {
      if (kl === null) throw Error(E(308));
      cn = e, kl.dependencies = {
        lanes: 0,
        firstContext: e
      };
    } else cn = cn.next = e;
    return t;
  }
  var Dt = null;
  function Ji(e) {
    Dt === null ? Dt = [
      e
    ] : Dt.push(e);
  }
  function uc(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n, Ji(t)) : (n.next = l.next, l.next = n), t.interleaved = n, st(e, r);
  }
  function st(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var ht = false;
  function Zi(e) {
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
  function cc(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      effects: e.effects
    });
  }
  function rt(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null
    };
  }
  function Nt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, A & 2) {
      var l = r.pending;
      return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, st(e, n);
    }
    return l = r.interleaved, l === null ? (t.next = t, Ji(r)) : (t.next = l.next, l.next = t), r.interleaved = t, st(e, n);
  }
  function qr(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Ai(e, n);
    }
  }
  function fa(e, t) {
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
  function jl(e, t, n, r) {
    var l = e.updateQueue;
    ht = false;
    var o = l.firstBaseUpdate, i = l.lastBaseUpdate, u = l.shared.pending;
    if (u !== null) {
      l.shared.pending = null;
      var a = u, c = a.next;
      a.next = null, i === null ? o = c : i.next = c, i = a;
      var p = e.alternate;
      p !== null && (p = p.updateQueue, u = p.lastBaseUpdate, u !== i && (u === null ? p.firstBaseUpdate = c : u.next = c, p.lastBaseUpdate = a));
    }
    if (o !== null) {
      var g = l.baseState;
      i = 0, p = c = a = null, u = o;
      do {
        var v = u.lane, b = u.eventTime;
        if ((r & v) === v) {
          p !== null && (p = p.next = {
            eventTime: b,
            lane: 0,
            tag: u.tag,
            payload: u.payload,
            callback: u.callback,
            next: null
          });
          e: {
            var k = e, h = u;
            switch (v = t, b = n, h.tag) {
              case 1:
                if (k = h.payload, typeof k == "function") {
                  g = k.call(b, g, v);
                  break e;
                }
                g = k;
                break e;
              case 3:
                k.flags = k.flags & -65537 | 128;
              case 0:
                if (k = h.payload, v = typeof k == "function" ? k.call(b, g, v) : k, v == null) break e;
                g = Q({}, g, v);
                break e;
              case 2:
                ht = true;
            }
          }
          u.callback !== null && u.lane !== 0 && (e.flags |= 64, v = l.effects, v === null ? l.effects = [
            u
          ] : v.push(u));
        } else b = {
          eventTime: b,
          lane: v,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        }, p === null ? (c = p = b, a = g) : p = p.next = b, i |= v;
        if (u = u.next, u === null) {
          if (u = l.shared.pending, u === null) break;
          v = u, u = v.next, v.next = null, l.lastBaseUpdate = v, l.shared.pending = null;
        }
      } while (true);
      if (p === null && (a = g), l.baseState = a, l.firstBaseUpdate = c, l.lastBaseUpdate = p, t = l.shared.interleaved, t !== null) {
        l = t;
        do
          i |= l.lane, l = l.next;
        while (l !== t);
      } else o === null && (l.shared.lanes = 0);
      Kt |= i, e.lanes = i, e.memoizedState = g;
    }
  }
  function ma(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], l = r.callback;
      if (l !== null) {
        if (r.callback = null, r = n, typeof l != "function") throw Error(E(191, l));
        l.call(r);
      }
    }
  }
  var Sr = {}, Xe = Rt(Sr), mr = Rt(Sr), pr = Rt(Sr);
  function $t(e) {
    if (e === Sr) throw Error(E(174));
    return e;
  }
  function qi(e, t) {
    switch ($(pr, t), $(mr, e), $(Xe, Sr), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : $o(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = $o(t, e);
    }
    U(Xe), $(Xe, t);
  }
  function jn() {
    U(Xe), U(mr), U(pr);
  }
  function dc(e) {
    $t(pr.current);
    var t = $t(Xe.current), n = $o(t, e.type);
    t !== n && ($(mr, e), $(Xe, n));
  }
  function es(e) {
    mr.current === e && (U(Xe), U(mr));
  }
  var V = Rt(0);
  function Nl(e) {
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
  var yo = [];
  function ts() {
    for (var e = 0; e < yo.length; e++) yo[e]._workInProgressVersionPrimary = null;
    yo.length = 0;
  }
  var el = ut.ReactCurrentDispatcher, xo = ut.ReactCurrentBatchConfig, Vt = 0, K = null, ee = null, ne = null, Sl = false, Zn = false, hr = 0, vm = 0;
  function se() {
    throw Error(E(321));
  }
  function ns(e, t) {
    if (t === null) return false;
    for (var n = 0; n < t.length && n < e.length; n++) if (!We(e[n], t[n])) return false;
    return true;
  }
  function rs(e, t, n, r, l, o) {
    if (Vt = o, K = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, el.current = e === null || e.memoizedState === null ? bm : km, e = n(r, l), Zn) {
      o = 0;
      do {
        if (Zn = false, hr = 0, 25 <= o) throw Error(E(301));
        o += 1, ne = ee = null, t.updateQueue = null, el.current = jm, e = n(r, l);
      } while (Zn);
    }
    if (el.current = Cl, t = ee !== null && ee.next !== null, Vt = 0, ne = ee = K = null, Sl = false, t) throw Error(E(300));
    return e;
  }
  function ls() {
    var e = hr !== 0;
    return hr = 0, e;
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
  function Te() {
    if (ee === null) {
      var e = K.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = ee.next;
    var t = ne === null ? K.memoizedState : ne.next;
    if (t !== null) ne = t, ee = e;
    else {
      if (e === null) throw Error(E(310));
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
  function gr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function wo(e) {
    var t = Te(), n = t.queue;
    if (n === null) throw Error(E(311));
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
        if ((Vt & p) === p) a !== null && (a = a.next = {
          lane: 0,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
        else {
          var g = {
            lane: p,
            action: c.action,
            hasEagerState: c.hasEagerState,
            eagerState: c.eagerState,
            next: null
          };
          a === null ? (u = a = g, i = r) : a = a.next = g, K.lanes |= p, Kt |= p;
        }
        c = c.next;
      } while (c !== null && c !== o);
      a === null ? i = r : a.next = u, We(r, t.memoizedState) || (ve = true), t.memoizedState = r, t.baseState = i, t.baseQueue = a, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      l = e;
      do
        o = l.lane, K.lanes |= o, Kt |= o, l = l.next;
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [
      t.memoizedState,
      n.dispatch
    ];
  }
  function bo(e) {
    var t = Te(), n = t.queue;
    if (n === null) throw Error(E(311));
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
  function fc() {
  }
  function mc(e, t) {
    var n = K, r = Te(), l = t(), o = !We(r.memoizedState, l);
    if (o && (r.memoizedState = l, ve = true), r = r.queue, os(gc.bind(null, n, r, e), [
      e
    ]), r.getSnapshot !== t || o || ne !== null && ne.memoizedState.tag & 1) {
      if (n.flags |= 2048, vr(9, hc.bind(null, n, r, l, t), void 0, null), re === null) throw Error(E(349));
      Vt & 30 || pc(n, t, l);
    }
    return l;
  }
  function pc(e, t, n) {
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
  function hc(e, t, n, r) {
    t.value = n, t.getSnapshot = r, vc(t) && yc(e);
  }
  function gc(e, t, n) {
    return n(function() {
      vc(t) && yc(e);
    });
  }
  function vc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !We(e, n);
    } catch {
      return true;
    }
  }
  function yc(e) {
    var t = st(e, 1);
    t !== null && Ue(t, e, 1, -1);
  }
  function pa(e) {
    var t = Qe();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: gr,
      lastRenderedState: e
    }, t.queue = e, e = e.dispatch = wm.bind(null, K, e), [
      t.memoizedState,
      e
    ];
  }
  function vr(e, t, n, r) {
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
  function xc() {
    return Te().memoizedState;
  }
  function tl(e, t, n, r) {
    var l = Qe();
    K.flags |= e, l.memoizedState = vr(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function $l(e, t, n, r) {
    var l = Te();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (ee !== null) {
      var i = ee.memoizedState;
      if (o = i.destroy, r !== null && ns(r, i.deps)) {
        l.memoizedState = vr(t, n, o, r);
        return;
      }
    }
    K.flags |= e, l.memoizedState = vr(1 | t, n, o, r);
  }
  function ha(e, t) {
    return tl(8390656, 8, e, t);
  }
  function os(e, t) {
    return $l(2048, 8, e, t);
  }
  function wc(e, t) {
    return $l(4, 2, e, t);
  }
  function bc(e, t) {
    return $l(4, 4, e, t);
  }
  function kc(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function jc(e, t, n) {
    return n = n != null ? n.concat([
      e
    ]) : null, $l(4, 4, kc.bind(null, t, e), n);
  }
  function is() {
  }
  function Nc(e, t) {
    var n = Te();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ns(t, r[1]) ? r[0] : (n.memoizedState = [
      e,
      t
    ], e);
  }
  function Sc(e, t) {
    var n = Te();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ns(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [
      e,
      t
    ], e);
  }
  function Cc(e, t, n) {
    return Vt & 21 ? (We(n, t) || (n = Fu(), K.lanes |= n, Kt |= n, e.baseState = true), t) : (e.baseState && (e.baseState = false, ve = true), e.memoizedState = n);
  }
  function ym(e, t) {
    var n = I;
    I = n !== 0 && 4 > n ? n : 4, e(true);
    var r = xo.transition;
    xo.transition = {};
    try {
      e(false), t();
    } finally {
      I = n, xo.transition = r;
    }
  }
  function Ec() {
    return Te().memoizedState;
  }
  function xm(e, t, n) {
    var r = Ct(e);
    if (n = {
      lane: r,
      action: n,
      hasEagerState: false,
      eagerState: null,
      next: null
    }, Pc(e)) _c(t, n);
    else if (n = uc(e, t, n, r), n !== null) {
      var l = fe();
      Ue(n, e, r, l), Lc(n, t, r);
    }
  }
  function wm(e, t, n) {
    var r = Ct(e), l = {
      lane: r,
      action: n,
      hasEagerState: false,
      eagerState: null,
      next: null
    };
    if (Pc(e)) _c(t, l);
    else {
      var o = e.alternate;
      if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
        var i = t.lastRenderedState, u = o(i, n);
        if (l.hasEagerState = true, l.eagerState = u, We(u, i)) {
          var a = t.interleaved;
          a === null ? (l.next = l, Ji(t)) : (l.next = a.next, a.next = l), t.interleaved = l;
          return;
        }
      } catch {
      } finally {
      }
      n = uc(e, t, l, r), n !== null && (l = fe(), Ue(n, e, r, l), Lc(n, t, r));
    }
  }
  function Pc(e) {
    var t = e.alternate;
    return e === K || t !== null && t === K;
  }
  function _c(e, t) {
    Zn = Sl = true;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Lc(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Ai(e, n);
    }
  }
  var Cl = {
    readContext: Re,
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
  }, bm = {
    readContext: Re,
    useCallback: function(e, t) {
      return Qe().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: Re,
    useEffect: ha,
    useImperativeHandle: function(e, t, n) {
      return n = n != null ? n.concat([
        e
      ]) : null, tl(4194308, 4, kc.bind(null, t, e), n);
    },
    useLayoutEffect: function(e, t) {
      return tl(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      return tl(4, 2, e, t);
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
      }, r.queue = e, e = e.dispatch = xm.bind(null, K, e), [
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
    useState: pa,
    useDebugValue: is,
    useDeferredValue: function(e) {
      return Qe().memoizedState = e;
    },
    useTransition: function() {
      var e = pa(false), t = e[0];
      return e = ym.bind(null, e[1]), Qe().memoizedState = e, [
        t,
        e
      ];
    },
    useMutableSource: function() {
    },
    useSyncExternalStore: function(e, t, n) {
      var r = K, l = Qe();
      if (W) {
        if (n === void 0) throw Error(E(407));
        n = n();
      } else {
        if (n = t(), re === null) throw Error(E(349));
        Vt & 30 || pc(r, t, n);
      }
      l.memoizedState = n;
      var o = {
        value: n,
        getSnapshot: t
      };
      return l.queue = o, ha(gc.bind(null, r, o, e), [
        e
      ]), r.flags |= 2048, vr(9, hc.bind(null, r, o, n, t), void 0, null), n;
    },
    useId: function() {
      var e = Qe(), t = re.identifierPrefix;
      if (W) {
        var n = nt, r = tt;
        n = (r & ~(1 << 32 - Be(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = hr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
      } else n = vm++, t = ":" + t + "r" + n.toString(32) + ":";
      return e.memoizedState = t;
    },
    unstable_isNewReconciler: false
  }, km = {
    readContext: Re,
    useCallback: Nc,
    useContext: Re,
    useEffect: os,
    useImperativeHandle: jc,
    useInsertionEffect: wc,
    useLayoutEffect: bc,
    useMemo: Sc,
    useReducer: wo,
    useRef: xc,
    useState: function() {
      return wo(gr);
    },
    useDebugValue: is,
    useDeferredValue: function(e) {
      var t = Te();
      return Cc(t, ee.memoizedState, e);
    },
    useTransition: function() {
      var e = wo(gr)[0], t = Te().memoizedState;
      return [
        e,
        t
      ];
    },
    useMutableSource: fc,
    useSyncExternalStore: mc,
    useId: Ec,
    unstable_isNewReconciler: false
  }, jm = {
    readContext: Re,
    useCallback: Nc,
    useContext: Re,
    useEffect: os,
    useImperativeHandle: jc,
    useInsertionEffect: wc,
    useLayoutEffect: bc,
    useMemo: Sc,
    useReducer: bo,
    useRef: xc,
    useState: function() {
      return bo(gr);
    },
    useDebugValue: is,
    useDeferredValue: function(e) {
      var t = Te();
      return ee === null ? t.memoizedState = e : Cc(t, ee.memoizedState, e);
    },
    useTransition: function() {
      var e = bo(gr)[0], t = Te().memoizedState;
      return [
        e,
        t
      ];
    },
    useMutableSource: fc,
    useSyncExternalStore: mc,
    useId: Ec,
    unstable_isNewReconciler: false
  };
  function Ie(e, t) {
    if (e && e.defaultProps) {
      t = Q({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function si(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : Q({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Bl = {
    isMounted: function(e) {
      return (e = e._reactInternals) ? Yt(e) === e : false;
    },
    enqueueSetState: function(e, t, n) {
      e = e._reactInternals;
      var r = fe(), l = Ct(e), o = rt(r, l);
      o.payload = t, n != null && (o.callback = n), t = Nt(e, o, l), t !== null && (Ue(t, e, l, r), qr(t, e, l));
    },
    enqueueReplaceState: function(e, t, n) {
      e = e._reactInternals;
      var r = fe(), l = Ct(e), o = rt(r, l);
      o.tag = 1, o.payload = t, n != null && (o.callback = n), t = Nt(e, o, l), t !== null && (Ue(t, e, l, r), qr(t, e, l));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var n = fe(), r = Ct(e), l = rt(n, r);
      l.tag = 2, t != null && (l.callback = t), t = Nt(e, l, r), t !== null && (Ue(t, e, r, n), qr(t, e, r));
    }
  };
  function ga(e, t, n, r, l, o, i) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !ur(n, r) || !ur(l, o) : true;
  }
  function Fc(e, t, n) {
    var r = false, l = _t, o = t.contextType;
    return typeof o == "object" && o !== null ? o = Re(o) : (l = xe(t) ? Wt : ce.current, r = t.contextTypes, o = (r = r != null) ? wn(e, l) : _t), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Bl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t;
  }
  function va(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Bl.enqueueReplaceState(t, t.state, null);
  }
  function ai(e, t, n, r) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, Zi(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? l.context = Re(o) : (o = xe(t) ? Wt : ce.current, l.context = wn(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (si(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Bl.enqueueReplaceState(l, l.state, null), jl(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Nn(e, t) {
    try {
      var n = "", r = t;
      do
        n += Xd(r), r = r.return;
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
  function ko(e, t, n) {
    return {
      value: e,
      source: null,
      stack: n ?? null,
      digest: t ?? null
    };
  }
  function ui(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var Nm = typeof WeakMap == "function" ? WeakMap : Map;
  function Rc(e, t, n) {
    n = rt(-1, n), n.tag = 3, n.payload = {
      element: null
    };
    var r = t.value;
    return n.callback = function() {
      Pl || (Pl = true, xi = r), ui(e, t);
    }, n;
  }
  function Tc(e, t, n) {
    n = rt(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      n.payload = function() {
        return r(l);
      }, n.callback = function() {
        ui(e, t);
      };
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
      ui(e, t), typeof r != "function" && (St === null ? St = /* @__PURE__ */ new Set([
        this
      ]) : St.add(this));
      var i = t.stack;
      this.componentDidCatch(t.value, {
        componentStack: i !== null ? i : ""
      });
    }), n;
  }
  function ya(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Nm();
      var l = /* @__PURE__ */ new Set();
      r.set(t, l);
    } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
    l.has(n) || (l.add(n), e = Im.bind(null, e, t, n), t.then(e, e));
  }
  function xa(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : true), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function wa(e, t, n, r, l) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = rt(-1, 1), t.tag = 2, Nt(n, t, 1))), n.lanes |= 1), e);
  }
  var Sm = ut.ReactCurrentOwner, ve = false;
  function de(e, t, n, r) {
    t.child = e === null ? ac(t, null, n, r) : kn(t, e.child, n, r);
  }
  function ba(e, t, n, r, l) {
    n = n.render;
    var o = t.ref;
    return vn(t, l), r = rs(e, t, n, r, o, l), n = ls(), e !== null && !ve ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, at(e, t, l)) : (W && n && Vi(t), t.flags |= 1, de(e, t, r, l), t.child);
  }
  function ka(e, t, n, r, l) {
    if (e === null) {
      var o = n.type;
      return typeof o == "function" && !ps(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Oc(e, t, o, r, l)) : (e = ol(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (o = e.child, !(e.lanes & l)) {
      var i = o.memoizedProps;
      if (n = n.compare, n = n !== null ? n : ur, n(i, r) && e.ref === t.ref) return at(e, t, l);
    }
    return t.flags |= 1, e = Et(o, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Oc(e, t, n, r, l) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (ur(o, r) && e.ref === t.ref) if (ve = false, t.pendingProps = r = o, (e.lanes & l) !== 0) e.flags & 131072 && (ve = true);
      else return t.lanes = e.lanes, at(e, t, l);
    }
    return ci(e, t, n, r, l);
  }
  function Mc(e, t, n) {
    var r = t.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = {
      baseLanes: 0,
      cachePool: null,
      transitions: null
    }, $(fn, be), be |= n;
    else {
      if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
        baseLanes: e,
        cachePool: null,
        transitions: null
      }, t.updateQueue = null, $(fn, be), be |= e, null;
      t.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null
      }, r = o !== null ? o.baseLanes : n, $(fn, be), be |= r;
    }
    else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, $(fn, be), be |= r;
    return de(e, t, l, n), t.child;
  }
  function zc(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function ci(e, t, n, r, l) {
    var o = xe(n) ? Wt : ce.current;
    return o = wn(t, o), vn(t, l), n = rs(e, t, n, r, o, l), r = ls(), e !== null && !ve ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, at(e, t, l)) : (W && r && Vi(t), t.flags |= 1, de(e, t, n, l), t.child);
  }
  function ja(e, t, n, r, l) {
    if (xe(n)) {
      var o = true;
      yl(t);
    } else o = false;
    if (vn(t, l), t.stateNode === null) nl(e, t), Fc(t, n, r), ai(t, n, r, l), r = true;
    else if (e === null) {
      var i = t.stateNode, u = t.memoizedProps;
      i.props = u;
      var a = i.context, c = n.contextType;
      typeof c == "object" && c !== null ? c = Re(c) : (c = xe(n) ? Wt : ce.current, c = wn(t, c));
      var p = n.getDerivedStateFromProps, g = typeof p == "function" || typeof i.getSnapshotBeforeUpdate == "function";
      g || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || a !== c) && va(t, i, r, c), ht = false;
      var v = t.memoizedState;
      i.state = v, jl(t, r, i, l), a = t.memoizedState, u !== r || v !== a || ye.current || ht ? (typeof p == "function" && (si(t, n, p, r), a = t.memoizedState), (u = ht || ga(t, n, u, r, v, a, c)) ? (g || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), i.props = r, i.state = a, i.context = c, r = u) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = false);
    } else {
      i = t.stateNode, cc(e, t), u = t.memoizedProps, c = t.type === t.elementType ? u : Ie(t.type, u), i.props = c, g = t.pendingProps, v = i.context, a = n.contextType, typeof a == "object" && a !== null ? a = Re(a) : (a = xe(n) ? Wt : ce.current, a = wn(t, a));
      var b = n.getDerivedStateFromProps;
      (p = typeof b == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== g || v !== a) && va(t, i, r, a), ht = false, v = t.memoizedState, i.state = v, jl(t, r, i, l);
      var k = t.memoizedState;
      u !== g || v !== k || ye.current || ht ? (typeof b == "function" && (si(t, n, b, r), k = t.memoizedState), (c = ht || ga(t, n, c, r, v, k, a) || false) ? (p || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, k, a), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, k, a)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = k), i.props = r, i.state = k, i.context = a, r = c) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), r = false);
    }
    return di(e, t, n, r, o, l);
  }
  function di(e, t, n, r, l, o) {
    zc(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i) return l && aa(t, n, false), at(e, t, o);
    r = t.stateNode, Sm.current = t;
    var u = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && i ? (t.child = kn(t, e.child, null, o), t.child = kn(t, null, u, o)) : de(e, t, u, o), t.memoizedState = r.state, l && aa(t, n, true), t.child;
  }
  function Ac(e) {
    var t = e.stateNode;
    t.pendingContext ? sa(e, t.pendingContext, t.pendingContext !== t.context) : t.context && sa(e, t.context, false), qi(e, t.containerInfo);
  }
  function Na(e, t, n, r, l) {
    return bn(), Qi(l), t.flags |= 256, de(e, t, n, r), t.child;
  }
  var fi = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
  };
  function mi(e) {
    return {
      baseLanes: e,
      cachePool: null,
      transitions: null
    };
  }
  function Ic(e, t, n) {
    var r = t.pendingProps, l = V.current, o = false, i = (t.flags & 128) !== 0, u;
    if ((u = i) || (u = e !== null && e.memoizedState === null ? false : (l & 2) !== 0), u ? (o = true, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), $(V, l & 1), e === null) return oi(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, i = {
      mode: "hidden",
      children: i
    }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = Hl(i, r, 0, null), e = Ut(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = mi(n), t.memoizedState = fi, e) : ss(t, i));
    if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null)) return Cm(e, t, i, r, u, l, n);
    if (o) {
      o = r.fallback, i = t.mode, l = e.child, u = l.sibling;
      var a = {
        mode: "hidden",
        children: r.children
      };
      return !(i & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = Et(l, a), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? o = Et(u, o) : (o = Ut(o, i, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, i = e.child.memoizedState, i = i === null ? mi(n) : {
        baseLanes: i.baseLanes | n,
        cachePool: null,
        transitions: i.transitions
      }, o.memoizedState = i, o.childLanes = e.childLanes & ~n, t.memoizedState = fi, r;
    }
    return o = e.child, e = o.sibling, r = Et(o, {
      mode: "visible",
      children: r.children
    }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [
      e
    ], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function ss(e, t) {
    return t = Hl({
      mode: "visible",
      children: t
    }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function Wr(e, t, n, r) {
    return r !== null && Qi(r), kn(t, e.child, null, n), e = ss(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Cm(e, t, n, r, l, o, i) {
    if (n) return t.flags & 256 ? (t.flags &= -257, r = ko(Error(E(422))), Wr(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = Hl({
      mode: "visible",
      children: r.children
    }, l, 0, null), o = Ut(o, l, i, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && kn(t, e.child, null, i), t.child.memoizedState = mi(i), t.memoizedState = fi, o);
    if (!(t.mode & 1)) return Wr(e, t, i, null);
    if (l.data === "$!") {
      if (r = l.nextSibling && l.nextSibling.dataset, r) var u = r.dgst;
      return r = u, o = Error(E(419)), r = ko(o, r, void 0), Wr(e, t, i, r);
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
        l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, st(e, l), Ue(r, e, l, -1));
      }
      return ms(), r = ko(Error(E(421))), Wr(e, t, i, r);
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Dm.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, ke = jt(l.nextSibling), je = t, W = true, $e = null, e !== null && (Pe[_e++] = tt, Pe[_e++] = nt, Pe[_e++] = Ht, tt = e.id, nt = e.overflow, Ht = t), t = ss(t, r.children), t.flags |= 4096, t);
  }
  function Sa(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), ii(e.return, t, n);
  }
  function jo(e, t, n, r, l) {
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
  function Dc(e, t, n) {
    var r = t.pendingProps, l = r.revealOrder, o = r.tail;
    if (de(e, t, r.children, n), r = V.current, r & 2) r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Sa(e, n, t);
        else if (e.tag === 19) Sa(e, n, t);
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
        for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && Nl(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), jo(t, false, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && Nl(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        jo(t, true, n, null, o);
        break;
      case "together":
        jo(t, false, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function nl(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function at(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Kt |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(E(153));
    if (t.child !== null) {
      for (e = t.child, n = Et(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Et(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function Em(e, t, n) {
    switch (t.tag) {
      case 3:
        Ac(t), bn();
        break;
      case 5:
        dc(t);
        break;
      case 1:
        xe(t.type) && yl(t);
        break;
      case 4:
        qi(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, l = t.memoizedProps.value;
        $(bl, r._currentValue), r._currentValue = l;
        break;
      case 13:
        if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? ($(V, V.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Ic(e, t, n) : ($(V, V.current & 1), e = at(e, t, n), e !== null ? e.sibling : null);
        $(V, V.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, e.flags & 128) {
          if (r) return Dc(e, t, n);
          t.flags |= 128;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), $(V, V.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Mc(e, t, n);
    }
    return at(e, t, n);
  }
  var $c, pi, Bc, Uc;
  $c = function(e, t) {
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
  pi = function() {
  };
  Bc = function(e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
      e = t.stateNode, $t(Xe.current);
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
          l = Do(e, l), r = Do(e, r), o = [];
          break;
        default:
          typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = gl);
      }
      Bo(n, r);
      var i;
      n = null;
      for (c in l) if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null) if (c === "style") {
        var u = l[c];
        for (i in u) u.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
      } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (nr.hasOwnProperty(c) ? o || (o = []) : (o = o || []).push(c, null));
      for (c in r) {
        var a = r[c];
        if (u = l == null ? void 0 : l[c], r.hasOwnProperty(c) && a !== u && (a != null || u != null)) if (c === "style") if (u) {
          for (i in u) !u.hasOwnProperty(i) || a && a.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
          for (i in a) a.hasOwnProperty(i) && u[i] !== a[i] && (n || (n = {}), n[i] = a[i]);
        } else n || (o || (o = []), o.push(c, n)), n = a;
        else c === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, u = u ? u.__html : void 0, a != null && u !== a && (o = o || []).push(c, a)) : c === "children" ? typeof a != "string" && typeof a != "number" || (o = o || []).push(c, "" + a) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (nr.hasOwnProperty(c) ? (a != null && c === "onScroll" && B("scroll", e), o || u === a || (o = [])) : (o = o || []).push(c, a));
      }
      n && (o = o || []).push("style", n);
      var c = o;
      (t.updateQueue = c) && (t.flags |= 4);
    }
  };
  Uc = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function $n(e, t) {
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
  function Pm(e, t, n) {
    var r = t.pendingProps;
    switch (Ki(t), t.tag) {
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
        return xe(t.type) && vl(), ae(t), null;
      case 3:
        return r = t.stateNode, jn(), U(ye), U(ce), ts(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Br(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, $e !== null && (ki($e), $e = null))), pi(e, t), ae(t), null;
      case 5:
        es(t);
        var l = $t(pr.current);
        if (n = t.type, e !== null && t.stateNode != null) Bc(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(E(166));
            return ae(t), null;
          }
          if (e = $t(Xe.current), Br(t)) {
            r = t.stateNode, n = t.type;
            var o = t.memoizedProps;
            switch (r[Ge] = t, r[fr] = o, e = (t.mode & 1) !== 0, n) {
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
                for (l = 0; l < Kn.length; l++) B(Kn[l], r);
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
                Os(r, o), B("invalid", r);
                break;
              case "select":
                r._wrapperState = {
                  wasMultiple: !!o.multiple
                }, B("invalid", r);
                break;
              case "textarea":
                zs(r, o), B("invalid", r);
            }
            Bo(n, o), l = null;
            for (var i in o) if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== true && $r(r.textContent, u, e), l = [
                "children",
                u
              ]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== true && $r(r.textContent, u, e), l = [
                "children",
                "" + u
              ]) : nr.hasOwnProperty(i) && u != null && i === "onScroll" && B("scroll", r);
            }
            switch (n) {
              case "input":
                Rr(r), Ms(r, o, true);
                break;
              case "textarea":
                Rr(r), As(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof o.onClick == "function" && (r.onclick = gl);
            }
            r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = gu(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, {
              is: r.is
            }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = true : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[Ge] = t, e[fr] = r, $c(e, t, false, false), t.stateNode = e;
            e: {
              switch (i = Uo(n, r), n) {
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
                  for (l = 0; l < Kn.length; l++) B(Kn[l], e);
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
                  Os(e, r), l = zo(e, r), B("invalid", e);
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
                  zs(e, r), l = Do(e, r), B("invalid", e);
                  break;
                default:
                  l = r;
              }
              Bo(n, l), u = l;
              for (o in u) if (u.hasOwnProperty(o)) {
                var a = u[o];
                o === "style" ? xu(e, a) : o === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && vu(e, a)) : o === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && rr(e, a) : typeof a == "number" && rr(e, "" + a) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (nr.hasOwnProperty(o) ? a != null && o === "onScroll" && B("scroll", e) : a != null && Fi(e, o, a, i));
              }
              switch (n) {
                case "input":
                  Rr(e), Ms(e, r, false);
                  break;
                case "textarea":
                  Rr(e), As(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + Pt(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, o = r.value, o != null ? mn(e, !!r.multiple, o, false) : r.defaultValue != null && mn(e, !!r.multiple, r.defaultValue, true);
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = gl);
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
        if (e && t.stateNode != null) Uc(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(E(166));
          if (n = $t(pr.current), $t(Xe.current), Br(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[Ge] = t, (o = r.nodeValue !== n) && (e = je, e !== null)) switch (e.tag) {
              case 3:
                $r(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== true && $r(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            o && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Ge] = t, t.stateNode = r;
        }
        return ae(t), null;
      case 13:
        if (U(V), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (W && ke !== null && t.mode & 1 && !(t.flags & 128)) ic(), bn(), t.flags |= 98560, o = false;
          else if (o = Br(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!o) throw Error(E(318));
              if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(E(317));
              o[Ge] = t;
            } else bn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
            ae(t), o = false;
          } else $e !== null && (ki($e), $e = null), o = true;
          if (!o) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || V.current & 1 ? te === 0 && (te = 3) : ms())), t.updateQueue !== null && (t.flags |= 4), ae(t), null);
      case 4:
        return jn(), pi(e, t), e === null && cr(t.stateNode.containerInfo), ae(t), null;
      case 10:
        return Xi(t.type._context), ae(t), null;
      case 17:
        return xe(t.type) && vl(), ae(t), null;
      case 19:
        if (U(V), o = t.memoizedState, o === null) return ae(t), null;
        if (r = (t.flags & 128) !== 0, i = o.rendering, i === null) if (r) $n(o, false);
        else {
          if (te !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
            if (i = Nl(e), i !== null) {
              for (t.flags |= 128, $n(o, false), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : {
                lanes: e.lanes,
                firstContext: e.firstContext
              }), n = n.sibling;
              return $(V, V.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          o.tail !== null && J() > Sn && (t.flags |= 128, r = true, $n(o, false), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = Nl(i), e !== null) {
            if (t.flags |= 128, r = true, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), $n(o, true), o.tail === null && o.tailMode === "hidden" && !i.alternate && !W) return ae(t), null;
          } else 2 * J() - o.renderingStartTime > Sn && n !== 1073741824 && (t.flags |= 128, r = true, $n(o, false), t.lanes = 4194304);
          o.isBackwards ? (i.sibling = t.child, t.child = i) : (n = o.last, n !== null ? n.sibling = i : t.child = i, o.last = i);
        }
        return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = J(), t.sibling = null, n = V.current, $(V, r ? n & 1 | 2 : n & 1), t) : (ae(t), null);
      case 22:
      case 23:
        return fs(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? be & 1073741824 && (ae(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ae(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(E(156, t.tag));
  }
  function _m(e, t) {
    switch (Ki(t), t.tag) {
      case 1:
        return xe(t.type) && vl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return jn(), U(ye), U(ce), ts(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return es(t), null;
      case 13:
        if (U(V), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(E(340));
          bn();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return U(V), null;
      case 4:
        return jn(), null;
      case 10:
        return Xi(t.type._context), null;
      case 22:
      case 23:
        return fs(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Hr = false, ue = false, Lm = typeof WeakSet == "function" ? WeakSet : Set, F = null;
  function dn(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (r) {
      Y(e, t, r);
    }
    else n.current = null;
  }
  function hi(e, t, n) {
    try {
      n();
    } catch (r) {
      Y(e, t, r);
    }
  }
  var Ca = false;
  function Fm(e, t) {
    if (Zo = ml, e = Qu(), Hi(e)) {
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
          var i = 0, u = -1, a = -1, c = 0, p = 0, g = e, v = null;
          t: for (; ; ) {
            for (var b; g !== n || l !== 0 && g.nodeType !== 3 || (u = i + l), g !== o || r !== 0 && g.nodeType !== 3 || (a = i + r), g.nodeType === 3 && (i += g.nodeValue.length), (b = g.firstChild) !== null; ) v = g, g = b;
            for (; ; ) {
              if (g === e) break t;
              if (v === n && ++c === l && (u = i), v === o && ++p === r && (a = i), (b = g.nextSibling) !== null) break;
              g = v, v = g.parentNode;
            }
            g = b;
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
    for (qo = {
      focusedElem: e,
      selectionRange: n
    }, ml = false, F = t; F !== null; ) if (t = F, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, F = e;
    else for (; F !== null; ) {
      t = F;
      try {
        var k = t.alternate;
        if (t.flags & 1024) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (k !== null) {
              var h = k.memoizedProps, N = k.memoizedState, m = t.stateNode, d = m.getSnapshotBeforeUpdate(t.elementType === t.type ? h : Ie(t.type, h), N);
              m.__reactInternalSnapshotBeforeUpdate = d;
            }
            break;
          case 3:
            var f = t.stateNode.containerInfo;
            f.nodeType === 1 ? f.textContent = "" : f.nodeType === 9 && f.documentElement && f.removeChild(f.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(E(163));
        }
      } catch (x) {
        Y(t, t.return, x);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, F = e;
        break;
      }
      F = t.return;
    }
    return k = Ca, Ca = false, k;
  }
  function qn(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & e) === e) {
          var o = l.destroy;
          l.destroy = void 0, o !== void 0 && hi(t, n, o);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Ul(e, t) {
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
  function gi(e) {
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
  function Wc(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Wc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ge], delete t[fr], delete t[ni], delete t[mm], delete t[pm])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Hc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Ea(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Hc(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function vi(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = gl));
    else if (r !== 4 && (e = e.child, e !== null)) for (vi(e, t, n), e = e.sibling; e !== null; ) vi(e, t, n), e = e.sibling;
  }
  function yi(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (yi(e, t, n), e = e.sibling; e !== null; ) yi(e, t, n), e = e.sibling;
  }
  var le = null, De = false;
  function ft(e, t, n) {
    for (n = n.child; n !== null; ) Vc(e, t, n), n = n.sibling;
  }
  function Vc(e, t, n) {
    if (Ye && typeof Ye.onCommitFiberUnmount == "function") try {
      Ye.onCommitFiberUnmount(Ol, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        ue || dn(n, t);
      case 6:
        var r = le, l = De;
        le = null, ft(e, t, n), le = r, De = l, le !== null && (De ? (e = le, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : le.removeChild(n.stateNode));
        break;
      case 18:
        le !== null && (De ? (e = le, n = n.stateNode, e.nodeType === 8 ? go(e.parentNode, n) : e.nodeType === 1 && go(e, n), sr(e)) : go(le, n.stateNode));
        break;
      case 4:
        r = le, l = De, le = n.stateNode.containerInfo, De = true, ft(e, t, n), le = r, De = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!ue && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          l = r = r.next;
          do {
            var o = l, i = o.destroy;
            o = o.tag, i !== void 0 && (o & 2 || o & 4) && hi(n, t, i), l = l.next;
          } while (l !== r);
        }
        ft(e, t, n);
        break;
      case 1:
        if (!ue && (dn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (u) {
          Y(n, t, u);
        }
        ft(e, t, n);
        break;
      case 21:
        ft(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (ue = (r = ue) || n.memoizedState !== null, ft(e, t, n), ue = r) : ft(e, t, n);
        break;
      default:
        ft(e, t, n);
    }
  }
  function Pa(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Lm()), t.forEach(function(r) {
        var l = $m.bind(null, e, r);
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
        if (le === null) throw Error(E(160));
        Vc(o, i, l), le = null, De = false;
        var a = l.alternate;
        a !== null && (a.return = null), l.return = null;
      } catch (c) {
        Y(l, t, c);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Kc(t, e), t = t.sibling;
  }
  function Kc(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Ae(t, e), Ke(e), r & 4) {
          try {
            qn(3, e, e.return), Ul(3, e);
          } catch (h) {
            Y(e, e.return, h);
          }
          try {
            qn(5, e, e.return);
          } catch (h) {
            Y(e, e.return, h);
          }
        }
        break;
      case 1:
        Ae(t, e), Ke(e), r & 512 && n !== null && dn(n, n.return);
        break;
      case 5:
        if (Ae(t, e), Ke(e), r & 512 && n !== null && dn(n, n.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            rr(l, "");
          } catch (h) {
            Y(e, e.return, h);
          }
        }
        if (r & 4 && (l = e.stateNode, l != null)) {
          var o = e.memoizedProps, i = n !== null ? n.memoizedProps : o, u = e.type, a = e.updateQueue;
          if (e.updateQueue = null, a !== null) try {
            u === "input" && o.type === "radio" && o.name != null && pu(l, o), Uo(u, i);
            var c = Uo(u, o);
            for (i = 0; i < a.length; i += 2) {
              var p = a[i], g = a[i + 1];
              p === "style" ? xu(l, g) : p === "dangerouslySetInnerHTML" ? vu(l, g) : p === "children" ? rr(l, g) : Fi(l, p, g, c);
            }
            switch (u) {
              case "input":
                Ao(l, o);
                break;
              case "textarea":
                hu(l, o);
                break;
              case "select":
                var v = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var b = o.value;
                b != null ? mn(l, !!o.multiple, b, false) : v !== !!o.multiple && (o.defaultValue != null ? mn(l, !!o.multiple, o.defaultValue, true) : mn(l, !!o.multiple, o.multiple ? [] : "", false));
            }
            l[fr] = o;
          } catch (h) {
            Y(e, e.return, h);
          }
        }
        break;
      case 6:
        if (Ae(t, e), Ke(e), r & 4) {
          if (e.stateNode === null) throw Error(E(162));
          l = e.stateNode, o = e.memoizedProps;
          try {
            l.nodeValue = o;
          } catch (h) {
            Y(e, e.return, h);
          }
        }
        break;
      case 3:
        if (Ae(t, e), Ke(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          sr(t.containerInfo);
        } catch (h) {
          Y(e, e.return, h);
        }
        break;
      case 4:
        Ae(t, e), Ke(e);
        break;
      case 13:
        Ae(t, e), Ke(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (cs = J())), r & 4 && Pa(e);
        break;
      case 22:
        if (p = n !== null && n.memoizedState !== null, e.mode & 1 ? (ue = (c = ue) || p, Ae(t, e), ue = c) : Ae(t, e), Ke(e), r & 8192) {
          if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !p && e.mode & 1) for (F = e, p = e.child; p !== null; ) {
            for (g = F = p; F !== null; ) {
              switch (v = F, b = v.child, v.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  qn(4, v, v.return);
                  break;
                case 1:
                  dn(v, v.return);
                  var k = v.stateNode;
                  if (typeof k.componentWillUnmount == "function") {
                    r = v, n = v.return;
                    try {
                      t = r, k.props = t.memoizedProps, k.state = t.memoizedState, k.componentWillUnmount();
                    } catch (h) {
                      Y(r, n, h);
                    }
                  }
                  break;
                case 5:
                  dn(v, v.return);
                  break;
                case 22:
                  if (v.memoizedState !== null) {
                    La(g);
                    continue;
                  }
              }
              b !== null ? (b.return = v, F = b) : La(g);
            }
            p = p.sibling;
          }
          e: for (p = null, g = e; ; ) {
            if (g.tag === 5) {
              if (p === null) {
                p = g;
                try {
                  l = g.stateNode, c ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = g.stateNode, a = g.memoizedProps.style, i = a != null && a.hasOwnProperty("display") ? a.display : null, u.style.display = yu("display", i));
                } catch (h) {
                  Y(e, e.return, h);
                }
              }
            } else if (g.tag === 6) {
              if (p === null) try {
                g.stateNode.nodeValue = c ? "" : g.memoizedProps;
              } catch (h) {
                Y(e, e.return, h);
              }
            } else if ((g.tag !== 22 && g.tag !== 23 || g.memoizedState === null || g === e) && g.child !== null) {
              g.child.return = g, g = g.child;
              continue;
            }
            if (g === e) break e;
            for (; g.sibling === null; ) {
              if (g.return === null || g.return === e) break e;
              p === g && (p = null), g = g.return;
            }
            p === g && (p = null), g.sibling.return = g.return, g = g.sibling;
          }
        }
        break;
      case 19:
        Ae(t, e), Ke(e), r & 4 && Pa(e);
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
            if (Hc(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(E(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (rr(l, ""), r.flags &= -33);
            var o = Ea(e);
            yi(e, o, l);
            break;
          case 3:
          case 4:
            var i = r.stateNode.containerInfo, u = Ea(e);
            vi(e, u, i);
            break;
          default:
            throw Error(E(161));
        }
      } catch (a) {
        Y(e, e.return, a);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Rm(e, t, n) {
    F = e, Qc(e);
  }
  function Qc(e, t, n) {
    for (var r = (e.mode & 1) !== 0; F !== null; ) {
      var l = F, o = l.child;
      if (l.tag === 22 && r) {
        var i = l.memoizedState !== null || Hr;
        if (!i) {
          var u = l.alternate, a = u !== null && u.memoizedState !== null || ue;
          u = Hr;
          var c = ue;
          if (Hr = i, (ue = a) && !c) for (F = l; F !== null; ) i = F, a = i.child, i.tag === 22 && i.memoizedState !== null ? Fa(l) : a !== null ? (a.return = i, F = a) : Fa(l);
          for (; o !== null; ) F = o, Qc(o), o = o.sibling;
          F = l, Hr = u, ue = c;
        }
        _a(e);
      } else l.subtreeFlags & 8772 && o !== null ? (o.return = l, F = o) : _a(e);
    }
  }
  function _a(e) {
    for (; F !== null; ) {
      var t = F;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ue || Ul(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ue) if (n === null) r.componentDidMount();
              else {
                var l = t.elementType === t.type ? n.memoizedProps : Ie(t.type, n.memoizedProps);
                r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var o = t.updateQueue;
              o !== null && ma(t, o, r);
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
                ma(t, i, n);
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
                    var g = p.dehydrated;
                    g !== null && sr(g);
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
              throw Error(E(163));
          }
          ue || t.flags & 512 && gi(t);
        } catch (v) {
          Y(t, t.return, v);
        }
      }
      if (t === e) {
        F = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, F = n;
        break;
      }
      F = t.return;
    }
  }
  function La(e) {
    for (; F !== null; ) {
      var t = F;
      if (t === e) {
        F = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, F = n;
        break;
      }
      F = t.return;
    }
  }
  function Fa(e) {
    for (; F !== null; ) {
      var t = F;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Ul(4, t);
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
              gi(t);
            } catch (a) {
              Y(t, o, a);
            }
            break;
          case 5:
            var i = t.return;
            try {
              gi(t);
            } catch (a) {
              Y(t, i, a);
            }
        }
      } catch (a) {
        Y(t, t.return, a);
      }
      if (t === e) {
        F = null;
        break;
      }
      var u = t.sibling;
      if (u !== null) {
        u.return = t.return, F = u;
        break;
      }
      F = t.return;
    }
  }
  var Tm = Math.ceil, El = ut.ReactCurrentDispatcher, as = ut.ReactCurrentOwner, Fe = ut.ReactCurrentBatchConfig, A = 0, re = null, q = null, oe = 0, be = 0, fn = Rt(0), te = 0, yr = null, Kt = 0, Wl = 0, us = 0, er = null, ge = null, cs = 0, Sn = 1 / 0, qe = null, Pl = false, xi = null, St = null, Vr = false, xt = null, _l = 0, tr = 0, wi = null, rl = -1, ll = 0;
  function fe() {
    return A & 6 ? J() : rl !== -1 ? rl : rl = J();
  }
  function Ct(e) {
    return e.mode & 1 ? A & 2 && oe !== 0 ? oe & -oe : gm.transition !== null ? (ll === 0 && (ll = Fu()), ll) : (e = I, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Iu(e.type)), e) : 1;
  }
  function Ue(e, t, n, r) {
    if (50 < tr) throw tr = 0, wi = null, Error(E(185));
    kr(e, n, r), (!(A & 2) || e !== re) && (e === re && (!(A & 2) && (Wl |= n), te === 4 && vt(e, oe)), we(e, r), n === 1 && A === 0 && !(t.mode & 1) && (Sn = J() + 500, Dl && Tt()));
  }
  function we(e, t) {
    var n = e.callbackNode;
    gf(e, t);
    var r = fl(e, e === re ? oe : 0);
    if (r === 0) n !== null && $s(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && $s(n), t === 1) e.tag === 0 ? hm(Ra.bind(null, e)) : rc(Ra.bind(null, e)), dm(function() {
        !(A & 6) && Tt();
      }), n = null;
      else {
        switch (Ru(r)) {
          case 1:
            n = zi;
            break;
          case 4:
            n = _u;
            break;
          case 16:
            n = dl;
            break;
          case 536870912:
            n = Lu;
            break;
          default:
            n = dl;
        }
        n = td(n, Gc.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function Gc(e, t) {
    if (rl = -1, ll = 0, A & 6) throw Error(E(327));
    var n = e.callbackNode;
    if (yn() && e.callbackNode !== n) return null;
    var r = fl(e, e === re ? oe : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = Ll(e, r);
    else {
      t = r;
      var l = A;
      A |= 2;
      var o = Xc();
      (re !== e || oe !== t) && (qe = null, Sn = J() + 500, Bt(e, t));
      do
        try {
          zm();
          break;
        } catch (u) {
          Yc(e, u);
        }
      while (true);
      Yi(), El.current = o, A = l, q !== null ? t = 0 : (re = null, oe = 0, t = te);
    }
    if (t !== 0) {
      if (t === 2 && (l = Qo(e), l !== 0 && (r = l, t = bi(e, l))), t === 1) throw n = yr, Bt(e, 0), vt(e, r), we(e, J()), n;
      if (t === 6) vt(e, r);
      else {
        if (l = e.current.alternate, !(r & 30) && !Om(l) && (t = Ll(e, r), t === 2 && (o = Qo(e), o !== 0 && (r = o, t = bi(e, o))), t === 1)) throw n = yr, Bt(e, 0), vt(e, r), we(e, J()), n;
        switch (e.finishedWork = l, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(E(345));
          case 2:
            At(e, ge, qe);
            break;
          case 3:
            if (vt(e, r), (r & 130023424) === r && (t = cs + 500 - J(), 10 < t)) {
              if (fl(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & r) !== r) {
                fe(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = ti(At.bind(null, e, ge, qe), t);
              break;
            }
            At(e, ge, qe);
            break;
          case 4:
            if (vt(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var i = 31 - Be(r);
              o = 1 << i, i = t[i], i > l && (l = i), r &= ~o;
            }
            if (r = l, r = J() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Tm(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = ti(At.bind(null, e, ge, qe), r);
              break;
            }
            At(e, ge, qe);
            break;
          case 5:
            At(e, ge, qe);
            break;
          default:
            throw Error(E(329));
        }
      }
    }
    return we(e, J()), e.callbackNode === n ? Gc.bind(null, e) : null;
  }
  function bi(e, t) {
    var n = er;
    return e.current.memoizedState.isDehydrated && (Bt(e, t).flags |= 256), e = Ll(e, t), e !== 2 && (t = ge, ge = n, t !== null && ki(t)), e;
  }
  function ki(e) {
    ge === null ? ge = e : ge.push.apply(ge, e);
  }
  function Om(e) {
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
  function vt(e, t) {
    for (t &= ~us, t &= ~Wl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - Be(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function Ra(e) {
    if (A & 6) throw Error(E(327));
    yn();
    var t = fl(e, 0);
    if (!(t & 1)) return we(e, J()), null;
    var n = Ll(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Qo(e);
      r !== 0 && (t = r, n = bi(e, r));
    }
    if (n === 1) throw n = yr, Bt(e, 0), vt(e, t), we(e, J()), n;
    if (n === 6) throw Error(E(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, At(e, ge, qe), we(e, J()), null;
  }
  function ds(e, t) {
    var n = A;
    A |= 1;
    try {
      return e(t);
    } finally {
      A = n, A === 0 && (Sn = J() + 500, Dl && Tt());
    }
  }
  function Qt(e) {
    xt !== null && xt.tag === 0 && !(A & 6) && yn();
    var t = A;
    A |= 1;
    var n = Fe.transition, r = I;
    try {
      if (Fe.transition = null, I = 1, e) return e();
    } finally {
      I = r, Fe.transition = n, A = t, !(A & 6) && Tt();
    }
  }
  function fs() {
    be = fn.current, U(fn);
  }
  function Bt(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, cm(n)), q !== null) for (n = q.return; n !== null; ) {
      var r = n;
      switch (Ki(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && vl();
          break;
        case 3:
          jn(), U(ye), U(ce), ts();
          break;
        case 5:
          es(r);
          break;
        case 4:
          jn();
          break;
        case 13:
          U(V);
          break;
        case 19:
          U(V);
          break;
        case 10:
          Xi(r.type._context);
          break;
        case 22:
        case 23:
          fs();
      }
      n = n.return;
    }
    if (re = e, q = e = Et(e.current, null), oe = be = t, te = 0, yr = null, us = Wl = Kt = 0, ge = er = null, Dt !== null) {
      for (t = 0; t < Dt.length; t++) if (n = Dt[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var l = r.next, o = n.pending;
        if (o !== null) {
          var i = o.next;
          o.next = l, r.next = i;
        }
        n.pending = r;
      }
      Dt = null;
    }
    return e;
  }
  function Yc(e, t) {
    do {
      var n = q;
      try {
        if (Yi(), el.current = Cl, Sl) {
          for (var r = K.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), r = r.next;
          }
          Sl = false;
        }
        if (Vt = 0, ne = ee = K = null, Zn = false, hr = 0, as.current = null, n === null || n.return === null) {
          te = 1, yr = t, q = null;
          break;
        }
        e: {
          var o = e, i = n.return, u = n, a = t;
          if (t = oe, u.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
            var c = a, p = u, g = p.tag;
            if (!(p.mode & 1) && (g === 0 || g === 11 || g === 15)) {
              var v = p.alternate;
              v ? (p.updateQueue = v.updateQueue, p.memoizedState = v.memoizedState, p.lanes = v.lanes) : (p.updateQueue = null, p.memoizedState = null);
            }
            var b = xa(i);
            if (b !== null) {
              b.flags &= -257, wa(b, i, u, o, t), b.mode & 1 && ya(o, c, t), t = b, a = c;
              var k = t.updateQueue;
              if (k === null) {
                var h = /* @__PURE__ */ new Set();
                h.add(a), t.updateQueue = h;
              } else k.add(a);
              break e;
            } else {
              if (!(t & 1)) {
                ya(o, c, t), ms();
                break e;
              }
              a = Error(E(426));
            }
          } else if (W && u.mode & 1) {
            var N = xa(i);
            if (N !== null) {
              !(N.flags & 65536) && (N.flags |= 256), wa(N, i, u, o, t), Qi(Nn(a, u));
              break e;
            }
          }
          o = a = Nn(a, u), te !== 4 && (te = 2), er === null ? er = [
            o
          ] : er.push(o), o = i;
          do {
            switch (o.tag) {
              case 3:
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var m = Rc(o, a, t);
                fa(o, m);
                break e;
              case 1:
                u = a;
                var d = o.type, f = o.stateNode;
                if (!(o.flags & 128) && (typeof d.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (St === null || !St.has(f)))) {
                  o.flags |= 65536, t &= -t, o.lanes |= t;
                  var x = Tc(o, u, t);
                  fa(o, x);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        Zc(n);
      } catch (j) {
        t = j, q === n && n !== null && (q = n = n.return);
        continue;
      }
      break;
    } while (true);
  }
  function Xc() {
    var e = El.current;
    return El.current = Cl, e === null ? Cl : e;
  }
  function ms() {
    (te === 0 || te === 3 || te === 2) && (te = 4), re === null || !(Kt & 268435455) && !(Wl & 268435455) || vt(re, oe);
  }
  function Ll(e, t) {
    var n = A;
    A |= 2;
    var r = Xc();
    (re !== e || oe !== t) && (qe = null, Bt(e, t));
    do
      try {
        Mm();
        break;
      } catch (l) {
        Yc(e, l);
      }
    while (true);
    if (Yi(), A = n, El.current = r, q !== null) throw Error(E(261));
    return re = null, oe = 0, te;
  }
  function Mm() {
    for (; q !== null; ) Jc(q);
  }
  function zm() {
    for (; q !== null && !sf(); ) Jc(q);
  }
  function Jc(e) {
    var t = ed(e.alternate, e, be);
    e.memoizedProps = e.pendingProps, t === null ? Zc(e) : q = t, as.current = null;
  }
  function Zc(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, t.flags & 32768) {
        if (n = _m(n, t), n !== null) {
          n.flags &= 32767, q = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          te = 6, q = null;
          return;
        }
      } else if (n = Pm(n, t, be), n !== null) {
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
  function At(e, t, n) {
    var r = I, l = Fe.transition;
    try {
      Fe.transition = null, I = 1, Am(e, t, n, r);
    } finally {
      Fe.transition = l, I = r;
    }
    return null;
  }
  function Am(e, t, n, r) {
    do
      yn();
    while (xt !== null);
    if (A & 6) throw Error(E(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(E(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (vf(e, o), e === re && (q = re = null, oe = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Vr || (Vr = true, td(dl, function() {
      return yn(), null;
    })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
      o = Fe.transition, Fe.transition = null;
      var i = I;
      I = 1;
      var u = A;
      A |= 4, as.current = null, Fm(e, n), Kc(n, e), rm(qo), ml = !!Zo, qo = Zo = null, e.current = n, Rm(n), af(), A = u, I = i, Fe.transition = o;
    } else e.current = n;
    if (Vr && (Vr = false, xt = e, _l = l), o = e.pendingLanes, o === 0 && (St = null), df(n.stateNode), we(e, J()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, {
      componentStack: l.stack,
      digest: l.digest
    });
    if (Pl) throw Pl = false, e = xi, xi = null, e;
    return _l & 1 && e.tag !== 0 && yn(), o = e.pendingLanes, o & 1 ? e === wi ? tr++ : (tr = 0, wi = e) : tr = 0, Tt(), null;
  }
  function yn() {
    if (xt !== null) {
      var e = Ru(_l), t = Fe.transition, n = I;
      try {
        if (Fe.transition = null, I = 16 > e ? 16 : e, xt === null) var r = false;
        else {
          if (e = xt, xt = null, _l = 0, A & 6) throw Error(E(331));
          var l = A;
          for (A |= 4, F = e.current; F !== null; ) {
            var o = F, i = o.child;
            if (F.flags & 16) {
              var u = o.deletions;
              if (u !== null) {
                for (var a = 0; a < u.length; a++) {
                  var c = u[a];
                  for (F = c; F !== null; ) {
                    var p = F;
                    switch (p.tag) {
                      case 0:
                      case 11:
                      case 15:
                        qn(8, p, o);
                    }
                    var g = p.child;
                    if (g !== null) g.return = p, F = g;
                    else for (; F !== null; ) {
                      p = F;
                      var v = p.sibling, b = p.return;
                      if (Wc(p), p === c) {
                        F = null;
                        break;
                      }
                      if (v !== null) {
                        v.return = b, F = v;
                        break;
                      }
                      F = b;
                    }
                  }
                }
                var k = o.alternate;
                if (k !== null) {
                  var h = k.child;
                  if (h !== null) {
                    k.child = null;
                    do {
                      var N = h.sibling;
                      h.sibling = null, h = N;
                    } while (h !== null);
                  }
                }
                F = o;
              }
            }
            if (o.subtreeFlags & 2064 && i !== null) i.return = o, F = i;
            else e: for (; F !== null; ) {
              if (o = F, o.flags & 2048) switch (o.tag) {
                case 0:
                case 11:
                case 15:
                  qn(9, o, o.return);
              }
              var m = o.sibling;
              if (m !== null) {
                m.return = o.return, F = m;
                break e;
              }
              F = o.return;
            }
          }
          var d = e.current;
          for (F = d; F !== null; ) {
            i = F;
            var f = i.child;
            if (i.subtreeFlags & 2064 && f !== null) f.return = i, F = f;
            else e: for (i = d; F !== null; ) {
              if (u = F, u.flags & 2048) try {
                switch (u.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ul(9, u);
                }
              } catch (j) {
                Y(u, u.return, j);
              }
              if (u === i) {
                F = null;
                break e;
              }
              var x = u.sibling;
              if (x !== null) {
                x.return = u.return, F = x;
                break e;
              }
              F = u.return;
            }
          }
          if (A = l, Tt(), Ye && typeof Ye.onPostCommitFiberRoot == "function") try {
            Ye.onPostCommitFiberRoot(Ol, e);
          } catch {
          }
          r = true;
        }
        return r;
      } finally {
        I = n, Fe.transition = t;
      }
    }
    return false;
  }
  function Ta(e, t, n) {
    t = Nn(n, t), t = Rc(e, t, 1), e = Nt(e, t, 1), t = fe(), e !== null && (kr(e, 1, t), we(e, t));
  }
  function Y(e, t, n) {
    if (e.tag === 3) Ta(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Ta(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (St === null || !St.has(r))) {
          e = Nn(n, e), e = Tc(t, e, 1), t = Nt(t, e, 1), e = fe(), t !== null && (kr(t, 1, e), we(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function Im(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = fe(), e.pingedLanes |= e.suspendedLanes & n, re === e && (oe & n) === n && (te === 4 || te === 3 && (oe & 130023424) === oe && 500 > J() - cs ? Bt(e, 0) : us |= n), we(e, t);
  }
  function qc(e, t) {
    t === 0 && (e.mode & 1 ? (t = Mr, Mr <<= 1, !(Mr & 130023424) && (Mr = 4194304)) : t = 1);
    var n = fe();
    e = st(e, t), e !== null && (kr(e, t, n), we(e, n));
  }
  function Dm(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), qc(e, n);
  }
  function $m(e, t) {
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
        throw Error(E(314));
    }
    r !== null && r.delete(t), qc(e, n);
  }
  var ed;
  ed = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || ye.current) ve = true;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ve = false, Em(e, t, n);
      ve = !!(e.flags & 131072);
    }
    else ve = false, W && t.flags & 1048576 && lc(t, wl, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        nl(e, t), e = t.pendingProps;
        var l = wn(t, ce.current);
        vn(t, n), l = rs(null, t, r, e, l, n);
        var o = ls();
        return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, xe(r) ? (o = true, yl(t)) : o = false, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Zi(t), l.updater = Bl, t.stateNode = l, l._reactInternals = t, ai(t, r, e, n), t = di(null, t, r, true, o, n)) : (t.tag = 0, W && o && Vi(t), de(null, t, l, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (nl(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Um(r), e = Ie(r, e), l) {
            case 0:
              t = ci(null, t, r, e, n);
              break e;
            case 1:
              t = ja(null, t, r, e, n);
              break e;
            case 11:
              t = ba(null, t, r, e, n);
              break e;
            case 14:
              t = ka(null, t, r, Ie(r.type, e), n);
              break e;
          }
          throw Error(E(306, r, ""));
        }
        return t;
      case 0:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ie(r, l), ci(e, t, r, l, n);
      case 1:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ie(r, l), ja(e, t, r, l, n);
      case 3:
        e: {
          if (Ac(t), e === null) throw Error(E(387));
          r = t.pendingProps, o = t.memoizedState, l = o.element, cc(e, t), jl(t, r, null, n);
          var i = t.memoizedState;
          if (r = i.element, o.isDehydrated) if (o = {
            element: r,
            isDehydrated: false,
            cache: i.cache,
            pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
            transitions: i.transitions
          }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
            l = Nn(Error(E(423)), t), t = Na(e, t, r, n, l);
            break e;
          } else if (r !== l) {
            l = Nn(Error(E(424)), t), t = Na(e, t, r, n, l);
            break e;
          } else for (ke = jt(t.stateNode.containerInfo.firstChild), je = t, W = true, $e = null, n = ac(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (bn(), r === l) {
              t = at(e, t, n);
              break e;
            }
            de(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return dc(t), e === null && oi(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, ei(r, l) ? i = null : o !== null && ei(r, o) && (t.flags |= 32), zc(e, t), de(e, t, i, n), t.child;
      case 6:
        return e === null && oi(t), null;
      case 13:
        return Ic(e, t, n);
      case 4:
        return qi(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = kn(t, null, r, n) : de(e, t, r, n), t.child;
      case 11:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ie(r, l), ba(e, t, r, l, n);
      case 7:
        return de(e, t, t.pendingProps, n), t.child;
      case 8:
        return de(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return de(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, i = l.value, $(bl, r._currentValue), r._currentValue = i, o !== null) if (We(o.value, i)) {
            if (o.children === l.children && !ye.current) {
              t = at(e, t, n);
              break e;
            }
          } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
            var u = o.dependencies;
            if (u !== null) {
              i = o.child;
              for (var a = u.firstContext; a !== null; ) {
                if (a.context === r) {
                  if (o.tag === 1) {
                    a = rt(-1, n & -n), a.tag = 2;
                    var c = o.updateQueue;
                    if (c !== null) {
                      c = c.shared;
                      var p = c.pending;
                      p === null ? a.next = a : (a.next = p.next, p.next = a), c.pending = a;
                    }
                  }
                  o.lanes |= n, a = o.alternate, a !== null && (a.lanes |= n), ii(o.return, n, t), u.lanes |= n;
                  break;
                }
                a = a.next;
              }
            } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
            else if (o.tag === 18) {
              if (i = o.return, i === null) throw Error(E(341));
              i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), ii(i, n, t), i = o.sibling;
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
        return l = t.type, r = t.pendingProps.children, vn(t, n), l = Re(l), r = r(l), t.flags |= 1, de(e, t, r, n), t.child;
      case 14:
        return r = t.type, l = Ie(r, t.pendingProps), l = Ie(r.type, l), ka(e, t, r, l, n);
      case 15:
        return Oc(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ie(r, l), nl(e, t), t.tag = 1, xe(r) ? (e = true, yl(t)) : e = false, vn(t, n), Fc(t, r, l), ai(t, r, l, n), di(null, t, r, true, e, n);
      case 19:
        return Dc(e, t, n);
      case 22:
        return Mc(e, t, n);
    }
    throw Error(E(156, t.tag));
  };
  function td(e, t) {
    return Pu(e, t);
  }
  function Bm(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Le(e, t, n, r) {
    return new Bm(e, t, n, r);
  }
  function ps(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Um(e) {
    if (typeof e == "function") return ps(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === Ti) return 11;
      if (e === Oi) return 14;
    }
    return 2;
  }
  function Et(e, t) {
    var n = e.alternate;
    return n === null ? (n = Le(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function ol(e, t, n, r, l, o) {
    var i = 2;
    if (r = e, typeof e == "function") ps(e) && (i = 1);
    else if (typeof e == "string") i = 5;
    else e: switch (e) {
      case tn:
        return Ut(n.children, l, o, t);
      case Ri:
        i = 8, l |= 8;
        break;
      case Ro:
        return e = Le(12, n, t, l | 2), e.elementType = Ro, e.lanes = o, e;
      case To:
        return e = Le(13, n, t, l), e.elementType = To, e.lanes = o, e;
      case Oo:
        return e = Le(19, n, t, l), e.elementType = Oo, e.lanes = o, e;
      case du:
        return Hl(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case uu:
            i = 10;
            break e;
          case cu:
            i = 9;
            break e;
          case Ti:
            i = 11;
            break e;
          case Oi:
            i = 14;
            break e;
          case pt:
            i = 16, r = null;
            break e;
        }
        throw Error(E(130, e == null ? e : typeof e, ""));
    }
    return t = Le(i, n, t, l), t.elementType = e, t.type = r, t.lanes = o, t;
  }
  function Ut(e, t, n, r) {
    return e = Le(7, e, r, t), e.lanes = n, e;
  }
  function Hl(e, t, n, r) {
    return e = Le(22, e, r, t), e.elementType = du, e.lanes = n, e.stateNode = {
      isHidden: false
    }, e;
  }
  function No(e, t, n) {
    return e = Le(6, e, null, t), e.lanes = n, e;
  }
  function So(e, t, n) {
    return t = Le(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, t;
  }
  function Wm(e, t, n, r, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = lo(0), this.expirationTimes = lo(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = lo(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function hs(e, t, n, r, l, o, i, u, a) {
    return e = new Wm(e, t, n, u, a), t === 1 ? (t = 1, o === true && (t |= 8)) : t = 0, o = Le(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null
    }, Zi(o), e;
  }
  function Hm(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: en,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n
    };
  }
  function nd(e) {
    if (!e) return _t;
    e = e._reactInternals;
    e: {
      if (Yt(e) !== e || e.tag !== 1) throw Error(E(170));
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
      throw Error(E(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (xe(n)) return nc(e, n, t);
    }
    return t;
  }
  function rd(e, t, n, r, l, o, i, u, a) {
    return e = hs(n, r, true, e, l, o, i, u, a), e.context = nd(null), n = e.current, r = fe(), l = Ct(n), o = rt(r, l), o.callback = t ?? null, Nt(n, o, l), e.current.lanes = l, kr(e, l, r), we(e, r), e;
  }
  function Vl(e, t, n, r) {
    var l = t.current, o = fe(), i = Ct(l);
    return n = nd(n), t.context === null ? t.context = n : t.pendingContext = n, t = rt(o, i), t.payload = {
      element: e
    }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Nt(l, t, i), e !== null && (Ue(e, l, i, o), qr(e, l, i)), i;
  }
  function Fl(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Oa(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function gs(e, t) {
    Oa(e, t), (e = e.alternate) && Oa(e, t);
  }
  function Vm() {
    return null;
  }
  var ld = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function vs(e) {
    this._internalRoot = e;
  }
  Kl.prototype.render = vs.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(E(409));
    Vl(e, t, null, null);
  };
  Kl.prototype.unmount = vs.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Qt(function() {
        Vl(null, e, null, null);
      }), t[it] = null;
    }
  };
  function Kl(e) {
    this._internalRoot = e;
  }
  Kl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Mu();
      e = {
        blockedOn: null,
        target: e,
        priority: t
      };
      for (var n = 0; n < gt.length && t !== 0 && t < gt[n].priority; n++) ;
      gt.splice(n, 0, e), n === 0 && Au(e);
    }
  };
  function ys(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Ql(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Ma() {
  }
  function Km(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var o = r;
        r = function() {
          var c = Fl(i);
          o.call(c);
        };
      }
      var i = rd(t, r, e, 0, null, false, false, "", Ma);
      return e._reactRootContainer = i, e[it] = i.current, cr(e.nodeType === 8 ? e.parentNode : e), Qt(), i;
    }
    for (; l = e.lastChild; ) e.removeChild(l);
    if (typeof r == "function") {
      var u = r;
      r = function() {
        var c = Fl(a);
        u.call(c);
      };
    }
    var a = hs(e, 0, false, null, null, false, false, "", Ma);
    return e._reactRootContainer = a, e[it] = a.current, cr(e.nodeType === 8 ? e.parentNode : e), Qt(function() {
      Vl(t, a, n, r);
    }), a;
  }
  function Gl(e, t, n, r, l) {
    var o = n._reactRootContainer;
    if (o) {
      var i = o;
      if (typeof l == "function") {
        var u = l;
        l = function() {
          var a = Fl(i);
          u.call(a);
        };
      }
      Vl(t, i, e, l);
    } else i = Km(n, t, e, l, r);
    return Fl(i);
  }
  Tu = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Vn(t.pendingLanes);
          n !== 0 && (Ai(t, n | 1), we(t, J()), !(A & 6) && (Sn = J() + 500, Tt()));
        }
        break;
      case 13:
        Qt(function() {
          var r = st(e, 1);
          if (r !== null) {
            var l = fe();
            Ue(r, e, 1, l);
          }
        }), gs(e, 1);
    }
  };
  Ii = function(e) {
    if (e.tag === 13) {
      var t = st(e, 134217728);
      if (t !== null) {
        var n = fe();
        Ue(t, e, 134217728, n);
      }
      gs(e, 134217728);
    }
  };
  Ou = function(e) {
    if (e.tag === 13) {
      var t = Ct(e), n = st(e, t);
      if (n !== null) {
        var r = fe();
        Ue(n, e, t, r);
      }
      gs(e, t);
    }
  };
  Mu = function() {
    return I;
  };
  zu = function(e, t) {
    var n = I;
    try {
      return I = e, t();
    } finally {
      I = n;
    }
  };
  Ho = function(e, t, n) {
    switch (t) {
      case "input":
        if (Ao(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var l = Il(r);
              if (!l) throw Error(E(90));
              mu(r), Ao(r, l);
            }
          }
        }
        break;
      case "textarea":
        hu(e, n);
        break;
      case "select":
        t = n.value, t != null && mn(e, !!n.multiple, t, false);
    }
  };
  ku = ds;
  ju = Qt;
  var Qm = {
    usingClientEntryPoint: false,
    Events: [
      Nr,
      on,
      Il,
      wu,
      bu,
      ds
    ]
  }, Bn = {
    findFiberByHostInstance: It,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
  }, Gm = {
    bundleType: Bn.bundleType,
    version: Bn.version,
    rendererPackageName: Bn.rendererPackageName,
    rendererConfig: Bn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: ut.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
      return e = Cu(e), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Bn.findFiberByHostInstance || Vm,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Kr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Kr.isDisabled && Kr.supportsFiber) try {
      Ol = Kr.inject(Gm), Ye = Kr;
    } catch {
    }
  }
  Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Qm;
  Se.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!ys(t)) throw Error(E(200));
    return Hm(e, t, null, n);
  };
  Se.createRoot = function(e, t) {
    if (!ys(e)) throw Error(E(299));
    var n = false, r = "", l = ld;
    return t != null && (t.unstable_strictMode === true && (n = true), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = hs(e, 1, false, null, null, n, false, r, l), e[it] = t.current, cr(e.nodeType === 8 ? e.parentNode : e), new vs(t);
  };
  Se.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(E(188)) : (e = Object.keys(e).join(","), Error(E(268, e)));
    return e = Cu(t), e = e === null ? null : e.stateNode, e;
  };
  Se.flushSync = function(e) {
    return Qt(e);
  };
  Se.hydrate = function(e, t, n) {
    if (!Ql(t)) throw Error(E(200));
    return Gl(null, e, t, true, n);
  };
  Se.hydrateRoot = function(e, t, n) {
    if (!ys(e)) throw Error(E(405));
    var r = n != null && n.hydratedSources || null, l = false, o = "", i = ld;
    if (n != null && (n.unstable_strictMode === true && (l = true), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = rd(t, null, e, 1, n ?? null, l, false, o, i), e[it] = t.current, cr(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [
      n,
      l
    ] : t.mutableSourceEagerHydrationData.push(n, l);
    return new Kl(t);
  };
  Se.render = function(e, t, n) {
    if (!Ql(t)) throw Error(E(200));
    return Gl(null, e, t, false, n);
  };
  Se.unmountComponentAtNode = function(e) {
    if (!Ql(e)) throw Error(E(40));
    return e._reactRootContainer ? (Qt(function() {
      Gl(null, null, e, false, function() {
        e._reactRootContainer = null, e[it] = null;
      });
    }), true) : false;
  };
  Se.unstable_batchedUpdates = ds;
  Se.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Ql(n)) throw Error(E(200));
    if (e == null || e._reactInternals === void 0) throw Error(E(38));
    return Gl(e, t, n, false, r);
  };
  Se.version = "18.3.1-next-f1338f8080-20240426";
  function od() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(od);
    } catch (e) {
      console.error(e);
    }
  }
  od(), ou.exports = Se;
  var Ym = ou.exports, za = Ym;
  Lo.createRoot = za.createRoot, Lo.hydrateRoot = za.hydrateRoot;
  var xs = {};
  Object.defineProperty(xs, "__esModule", {
    value: true
  });
  xs.parse = np;
  xs.serialize = rp;
  const Xm = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/, Jm = /^[\u0021-\u003A\u003C-\u007E]*$/, Zm = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i, qm = /^[\u0020-\u003A\u003D-\u007E]*$/, ep = Object.prototype.toString, tp = (() => {
    const e = function() {
    };
    return e.prototype = /* @__PURE__ */ Object.create(null), e;
  })();
  function np(e, t) {
    const n = new tp(), r = e.length;
    if (r < 2) return n;
    const l = (t == null ? void 0 : t.decode) || lp;
    let o = 0;
    do {
      const i = e.indexOf("=", o);
      if (i === -1) break;
      const u = e.indexOf(";", o), a = u === -1 ? r : u;
      if (i > a) {
        o = e.lastIndexOf(";", i - 1) + 1;
        continue;
      }
      const c = Aa(e, o, i), p = Ia(e, i, c), g = e.slice(c, p);
      if (n[g] === void 0) {
        let v = Aa(e, i + 1, a), b = Ia(e, a, v);
        const k = l(e.slice(v, b));
        n[g] = k;
      }
      o = a + 1;
    } while (o < r);
    return n;
  }
  function Aa(e, t, n) {
    do {
      const r = e.charCodeAt(t);
      if (r !== 32 && r !== 9) return t;
    } while (++t < n);
    return n;
  }
  function Ia(e, t, n) {
    for (; t > n; ) {
      const r = e.charCodeAt(--t);
      if (r !== 32 && r !== 9) return t + 1;
    }
    return n;
  }
  function rp(e, t, n) {
    const r = (n == null ? void 0 : n.encode) || encodeURIComponent;
    if (!Xm.test(e)) throw new TypeError(`argument name is invalid: ${e}`);
    const l = r(t);
    if (!Jm.test(l)) throw new TypeError(`argument val is invalid: ${t}`);
    let o = e + "=" + l;
    if (!n) return o;
    if (n.maxAge !== void 0) {
      if (!Number.isInteger(n.maxAge)) throw new TypeError(`option maxAge is invalid: ${n.maxAge}`);
      o += "; Max-Age=" + n.maxAge;
    }
    if (n.domain) {
      if (!Zm.test(n.domain)) throw new TypeError(`option domain is invalid: ${n.domain}`);
      o += "; Domain=" + n.domain;
    }
    if (n.path) {
      if (!qm.test(n.path)) throw new TypeError(`option path is invalid: ${n.path}`);
      o += "; Path=" + n.path;
    }
    if (n.expires) {
      if (!op(n.expires) || !Number.isFinite(n.expires.valueOf())) throw new TypeError(`option expires is invalid: ${n.expires}`);
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
  function lp(e) {
    if (e.indexOf("%") === -1) return e;
    try {
      return decodeURIComponent(e);
    } catch {
      return e;
    }
  }
  function op(e) {
    return ep.call(e) === "[object Date]";
  }
  var Da = "popstate";
  function ip(e = {}) {
    function t(r, l) {
      let { pathname: o, search: i, hash: u } = r.location;
      return ji("", {
        pathname: o,
        search: i,
        hash: u
      }, l.state && l.state.usr || null, l.state && l.state.key || "default");
    }
    function n(r, l) {
      return typeof l == "string" ? l : xr(l);
    }
    return ap(t, n, null, e);
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
  function sp() {
    return Math.random().toString(36).substring(2, 10);
  }
  function $a(e, t) {
    return {
      usr: e.state,
      key: e.key,
      idx: t
    };
  }
  function ji(e, t, n = null, r) {
    return {
      pathname: typeof e == "string" ? e : e.pathname,
      search: "",
      hash: "",
      ...typeof t == "string" ? _n(t) : t,
      state: n,
      key: t && t.key || r || sp()
    };
  }
  function xr({ pathname: e = "/", search: t = "", hash: n = "" }) {
    return t && t !== "?" && (e += t.charAt(0) === "?" ? t : "?" + t), n && n !== "#" && (e += n.charAt(0) === "#" ? n : "#" + n), e;
  }
  function _n(e) {
    let t = {};
    if (e) {
      let n = e.indexOf("#");
      n >= 0 && (t.hash = e.substring(n), e = e.substring(0, n));
      let r = e.indexOf("?");
      r >= 0 && (t.search = e.substring(r), e = e.substring(0, r)), e && (t.pathname = e);
    }
    return t;
  }
  function ap(e, t, n, r = {}) {
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
    function g() {
      u = "POP";
      let N = p(), m = N == null ? null : N - c;
      c = N, a && a({
        action: u,
        location: h.location,
        delta: m
      });
    }
    function v(N, m) {
      u = "PUSH";
      let d = ji(h.location, N, m);
      c = p() + 1;
      let f = $a(d, c), x = h.createHref(d);
      try {
        i.pushState(f, "", x);
      } catch (j) {
        if (j instanceof DOMException && j.name === "DataCloneError") throw j;
        l.location.assign(x);
      }
      o && a && a({
        action: u,
        location: h.location,
        delta: 1
      });
    }
    function b(N, m) {
      u = "REPLACE";
      let d = ji(h.location, N, m);
      c = p();
      let f = $a(d, c), x = h.createHref(d);
      i.replaceState(f, "", x), o && a && a({
        action: u,
        location: h.location,
        delta: 0
      });
    }
    function k(N) {
      let m = l.location.origin !== "null" ? l.location.origin : l.location.href, d = typeof N == "string" ? N : xr(N);
      return d = d.replace(/ $/, "%20"), H(m, `No window.location.(origin|href) available to create URL for href: ${d}`), new URL(d, m);
    }
    let h = {
      get action() {
        return u;
      },
      get location() {
        return e(l, i);
      },
      listen(N) {
        if (a) throw new Error("A history only accepts one active listener");
        return l.addEventListener(Da, g), a = N, () => {
          l.removeEventListener(Da, g), a = null;
        };
      },
      createHref(N) {
        return t(l, N);
      },
      createURL: k,
      encodeLocation(N) {
        let m = k(N);
        return {
          pathname: m.pathname,
          search: m.search,
          hash: m.hash
        };
      },
      push: v,
      replace: b,
      go(N) {
        return i.go(N);
      }
    };
    return h;
  }
  function id(e, t, n = "/") {
    return up(e, t, n, false);
  }
  function up(e, t, n, r) {
    let l = typeof t == "string" ? _n(t) : t, o = Lt(l.pathname || "/", n);
    if (o == null) return null;
    let i = sd(e);
    cp(i);
    let u = null;
    for (let a = 0; u == null && a < i.length; ++a) {
      let c = bp(o);
      u = xp(i[a], c, r);
    }
    return u;
  }
  function sd(e, t = [], n = [], r = "") {
    let l = (o, i, u) => {
      let a = {
        relativePath: u === void 0 ? o.path || "" : u,
        caseSensitive: o.caseSensitive === true,
        childrenIndex: i,
        route: o
      };
      a.relativePath.startsWith("/") && (H(a.relativePath.startsWith(r), `Absolute route path "${a.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`), a.relativePath = a.relativePath.slice(r.length));
      let c = lt([
        r,
        a.relativePath
      ]), p = n.concat(a);
      o.children && o.children.length > 0 && (H(o.index !== true, `Index routes must not have child routes. Please remove all child routes from route path "${c}".`), sd(o.children, t, p, c)), !(o.path == null && !o.index) && t.push({
        path: c,
        score: vp(c, o.index),
        routesMeta: p
      });
    };
    return e.forEach((o, i) => {
      var _a2;
      if (o.path === "" || !((_a2 = o.path) == null ? void 0 : _a2.includes("?"))) l(o, i);
      else for (let u of ad(o.path)) l(o, i, u);
    }), t;
  }
  function ad(e) {
    let t = e.split("/");
    if (t.length === 0) return [];
    let [n, ...r] = t, l = n.endsWith("?"), o = n.replace(/\?$/, "");
    if (r.length === 0) return l ? [
      o,
      ""
    ] : [
      o
    ];
    let i = ad(r.join("/")), u = [];
    return u.push(...i.map((a) => a === "" ? o : [
      o,
      a
    ].join("/"))), l && u.push(...i), u.map((a) => e.startsWith("/") && a === "" ? "/" : a);
  }
  function cp(e) {
    e.sort((t, n) => t.score !== n.score ? n.score - t.score : yp(t.routesMeta.map((r) => r.childrenIndex), n.routesMeta.map((r) => r.childrenIndex)));
  }
  var dp = /^:[\w-]+$/, fp = 3, mp = 2, pp = 1, hp = 10, gp = -2, Ba = (e) => e === "*";
  function vp(e, t) {
    let n = e.split("/"), r = n.length;
    return n.some(Ba) && (r += gp), t && (r += mp), n.filter((l) => !Ba(l)).reduce((l, o) => l + (dp.test(o) ? fp : o === "" ? pp : hp), r);
  }
  function yp(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l]) ? e[e.length - 1] - t[t.length - 1] : 0;
  }
  function xp(e, t, n = false) {
    let { routesMeta: r } = e, l = {}, o = "/", i = [];
    for (let u = 0; u < r.length; ++u) {
      let a = r[u], c = u === r.length - 1, p = o === "/" ? t : t.slice(o.length) || "/", g = Rl({
        path: a.relativePath,
        caseSensitive: a.caseSensitive,
        end: c
      }, p), v = a.route;
      if (!g && c && n && !r[r.length - 1].route.index && (g = Rl({
        path: a.relativePath,
        caseSensitive: a.caseSensitive,
        end: false
      }, p)), !g) return null;
      Object.assign(l, g.params), i.push({
        params: l,
        pathname: lt([
          o,
          g.pathname
        ]),
        pathnameBase: Sp(lt([
          o,
          g.pathnameBase
        ])),
        route: v
      }), g.pathnameBase !== "/" && (o = lt([
        o,
        g.pathnameBase
      ]));
    }
    return i;
  }
  function Rl(e, t) {
    typeof e == "string" && (e = {
      path: e,
      caseSensitive: false,
      end: true
    });
    let [n, r] = wp(e.path, e.caseSensitive, e.end), l = t.match(n);
    if (!l) return null;
    let o = l[0], i = o.replace(/(.)\/+$/, "$1"), u = l.slice(1);
    return {
      params: r.reduce((c, { paramName: p, isOptional: g }, v) => {
        if (p === "*") {
          let k = u[v] || "";
          i = o.slice(0, o.length - k.length).replace(/(.)\/+$/, "$1");
        }
        const b = u[v];
        return g && !b ? c[p] = void 0 : c[p] = (b || "").replace(/%2F/g, "/"), c;
      }, {}),
      pathname: o,
      pathnameBase: i,
      pattern: e
    };
  }
  function wp(e, t = false, n = true) {
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
  function bp(e) {
    try {
      return e.split("/").map((t) => decodeURIComponent(t).replace(/\//g, "%2F")).join("/");
    } catch (t) {
      return He(false, `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`), e;
    }
  }
  function Lt(e, t) {
    if (t === "/") return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length, r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/";
  }
  function kp(e, t = "/") {
    let { pathname: n, search: r = "", hash: l = "" } = typeof e == "string" ? _n(e) : e;
    return {
      pathname: n ? n.startsWith("/") ? n : jp(n, t) : t,
      search: Cp(r),
      hash: Ep(l)
    };
  }
  function jp(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach((l) => {
      l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
    }), n.length > 1 ? n.join("/") : "/";
  }
  function Co(e, t, n, r) {
    return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
  }
  function Np(e) {
    return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0);
  }
  function ws(e) {
    let t = Np(e);
    return t.map((n, r) => r === t.length - 1 ? n.pathname : n.pathnameBase);
  }
  function bs(e, t, n, r = false) {
    let l;
    typeof e == "string" ? l = _n(e) : (l = {
      ...e
    }, H(!l.pathname || !l.pathname.includes("?"), Co("?", "pathname", "search", l)), H(!l.pathname || !l.pathname.includes("#"), Co("#", "pathname", "hash", l)), H(!l.search || !l.search.includes("#"), Co("#", "search", "hash", l)));
    let o = e === "" || l.pathname === "", i = o ? "/" : l.pathname, u;
    if (i == null) u = n;
    else {
      let g = t.length - 1;
      if (!r && i.startsWith("..")) {
        let v = i.split("/");
        for (; v[0] === ".."; ) v.shift(), g -= 1;
        l.pathname = v.join("/");
      }
      u = g >= 0 ? t[g] : "/";
    }
    let a = kp(l, u), c = i && i !== "/" && i.endsWith("/"), p = (o || i === ".") && n.endsWith("/");
    return !a.pathname.endsWith("/") && (c || p) && (a.pathname += "/"), a;
  }
  var lt = (e) => e.join("/").replace(/\/\/+/g, "/"), Sp = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"), Cp = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, Ep = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
  function Pp(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
  }
  var ud = [
    "POST",
    "PUT",
    "PATCH",
    "DELETE"
  ];
  new Set(ud);
  var _p = [
    "GET",
    ...ud
  ];
  new Set(_p);
  var Ln = y.createContext(null);
  Ln.displayName = "DataRouter";
  var Yl = y.createContext(null);
  Yl.displayName = "DataRouterState";
  var cd = y.createContext({
    isTransitioning: false
  });
  cd.displayName = "ViewTransition";
  var Lp = y.createContext(/* @__PURE__ */ new Map());
  Lp.displayName = "Fetchers";
  var Fp = y.createContext(null);
  Fp.displayName = "Await";
  var Ve = y.createContext(null);
  Ve.displayName = "Navigation";
  var Cr = y.createContext(null);
  Cr.displayName = "Location";
  var Je = y.createContext({
    outlet: null,
    matches: [],
    isDataRoute: false
  });
  Je.displayName = "Route";
  var ks = y.createContext(null);
  ks.displayName = "RouteError";
  function Rp(e, { relative: t } = {}) {
    H(Fn(), "useHref() may be used only in the context of a <Router> component.");
    let { basename: n, navigator: r } = y.useContext(Ve), { hash: l, pathname: o, search: i } = Er(e, {
      relative: t
    }), u = o;
    return n !== "/" && (u = o === "/" ? n : lt([
      n,
      o
    ])), r.createHref({
      pathname: u,
      search: i,
      hash: l
    });
  }
  function Fn() {
    return y.useContext(Cr) != null;
  }
  function ct() {
    return H(Fn(), "useLocation() may be used only in the context of a <Router> component."), y.useContext(Cr).location;
  }
  var dd = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
  function fd(e) {
    y.useContext(Ve).static || y.useLayoutEffect(e);
  }
  function Xl() {
    let { isDataRoute: e } = y.useContext(Je);
    return e ? Vp() : Tp();
  }
  function Tp() {
    H(Fn(), "useNavigate() may be used only in the context of a <Router> component.");
    let e = y.useContext(Ln), { basename: t, navigator: n } = y.useContext(Ve), { matches: r } = y.useContext(Je), { pathname: l } = ct(), o = JSON.stringify(ws(r)), i = y.useRef(false);
    return fd(() => {
      i.current = true;
    }), y.useCallback((a, c = {}) => {
      if (He(i.current, dd), !i.current) return;
      if (typeof a == "number") {
        n.go(a);
        return;
      }
      let p = bs(a, JSON.parse(o), l, c.relative === "path");
      e == null && t !== "/" && (p.pathname = p.pathname === "/" ? t : lt([
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
  y.createContext(null);
  function Er(e, { relative: t } = {}) {
    let { matches: n } = y.useContext(Je), { pathname: r } = ct(), l = JSON.stringify(ws(n));
    return y.useMemo(() => bs(e, JSON.parse(l), r, t === "path"), [
      e,
      l,
      r,
      t
    ]);
  }
  function Op(e, t) {
    return md(e, t);
  }
  function md(e, t, n, r) {
    var _a2;
    H(Fn(), "useRoutes() may be used only in the context of a <Router> component.");
    let { navigator: l, static: o } = y.useContext(Ve), { matches: i } = y.useContext(Je), u = i[i.length - 1], a = u ? u.params : {}, c = u ? u.pathname : "/", p = u ? u.pathnameBase : "/", g = u && u.route;
    {
      let d = g && g.path || "";
      pd(c, !g || d.endsWith("*") || d.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${d}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${d}"> to <Route path="${d === "/" ? "*" : `${d}/*`}">.`);
    }
    let v = ct(), b;
    if (t) {
      let d = typeof t == "string" ? _n(t) : t;
      H(p === "/" || ((_a2 = d.pathname) == null ? void 0 : _a2.startsWith(p)), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${d.pathname}" was given in the \`location\` prop.`), b = d;
    } else b = v;
    let k = b.pathname || "/", h = k;
    if (p !== "/") {
      let d = p.replace(/^\//, "").split("/");
      h = "/" + k.replace(/^\//, "").split("/").slice(d.length).join("/");
    }
    let N = !o && n && n.matches && n.matches.length > 0 ? n.matches : id(e, {
      pathname: h
    });
    He(g || N != null, `No routes matched location "${b.pathname}${b.search}${b.hash}" `), He(N == null || N[N.length - 1].route.element !== void 0 || N[N.length - 1].route.Component !== void 0 || N[N.length - 1].route.lazy !== void 0, `Matched leaf route at location "${b.pathname}${b.search}${b.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
    let m = Dp(N && N.map((d) => Object.assign({}, d, {
      params: Object.assign({}, a, d.params),
      pathname: lt([
        p,
        l.encodeLocation ? l.encodeLocation(d.pathname).pathname : d.pathname
      ]),
      pathnameBase: d.pathnameBase === "/" ? p : lt([
        p,
        l.encodeLocation ? l.encodeLocation(d.pathnameBase).pathname : d.pathnameBase
      ])
    })), i, n, r);
    return t && m ? y.createElement(Cr.Provider, {
      value: {
        location: {
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default",
          ...b
        },
        navigationType: "POP"
      }
    }, m) : m;
  }
  function Mp() {
    let e = Hp(), t = Pp(e) ? `${e.status} ${e.statusText}` : e instanceof Error ? e.message : JSON.stringify(e), n = e instanceof Error ? e.stack : null, r = "rgba(200,200,200, 0.5)", l = {
      padding: "0.5rem",
      backgroundColor: r
    }, o = {
      padding: "2px 4px",
      backgroundColor: r
    }, i = null;
    return console.error("Error handled by React Router default ErrorBoundary:", e), i = y.createElement(y.Fragment, null, y.createElement("p", null, "\u{1F4BF} Hey developer \u{1F44B}"), y.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", y.createElement("code", {
      style: o
    }, "ErrorBoundary"), " or", " ", y.createElement("code", {
      style: o
    }, "errorElement"), " prop on your route.")), y.createElement(y.Fragment, null, y.createElement("h2", null, "Unexpected Application Error!"), y.createElement("h3", {
      style: {
        fontStyle: "italic"
      }
    }, t), n ? y.createElement("pre", {
      style: l
    }, n) : null, i);
  }
  var zp = y.createElement(Mp, null), Ap = class extends y.Component {
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
      return this.state.error !== void 0 ? y.createElement(Je.Provider, {
        value: this.props.routeContext
      }, y.createElement(ks.Provider, {
        value: this.state.error,
        children: this.props.component
      })) : this.props.children;
    }
  };
  function Ip({ routeContext: e, match: t, children: n }) {
    let r = y.useContext(Ln);
    return r && r.static && r.staticContext && (t.route.errorElement || t.route.ErrorBoundary) && (r.staticContext._deepestRenderedBoundaryId = t.route.id), y.createElement(Je.Provider, {
      value: e
    }, n);
  }
  function Dp(e, t = [], n = null, r = null) {
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
        let { loaderData: p, errors: g } = n, v = c.route.loader && !p.hasOwnProperty(c.route.id) && (!g || g[c.route.id] === void 0);
        if (c.route.lazy || v) {
          i = true, u >= 0 ? l = l.slice(0, u + 1) : l = [
            l[0]
          ];
          break;
        }
      }
    }
    return l.reduceRight((a, c, p) => {
      let g, v = false, b = null, k = null;
      n && (g = o && c.route.id ? o[c.route.id] : void 0, b = c.route.errorElement || zp, i && (u < 0 && p === 0 ? (pd("route-fallback", false, "No `HydrateFallback` element provided to render during initial hydration"), v = true, k = null) : u === p && (v = true, k = c.route.hydrateFallbackElement || null)));
      let h = t.concat(l.slice(0, p + 1)), N = () => {
        let m;
        return g ? m = b : v ? m = k : c.route.Component ? m = y.createElement(c.route.Component, null) : c.route.element ? m = c.route.element : m = a, y.createElement(Ip, {
          match: c,
          routeContext: {
            outlet: a,
            matches: h,
            isDataRoute: n != null
          },
          children: m
        });
      };
      return n && (c.route.ErrorBoundary || c.route.errorElement || p === 0) ? y.createElement(Ap, {
        location: n.location,
        revalidation: n.revalidation,
        component: b,
        error: g,
        children: N(),
        routeContext: {
          outlet: null,
          matches: h,
          isDataRoute: true
        }
      }) : N();
    }, null);
  }
  function js(e) {
    return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
  }
  function $p(e) {
    let t = y.useContext(Ln);
    return H(t, js(e)), t;
  }
  function Bp(e) {
    let t = y.useContext(Yl);
    return H(t, js(e)), t;
  }
  function Up(e) {
    let t = y.useContext(Je);
    return H(t, js(e)), t;
  }
  function Ns(e) {
    let t = Up(e), n = t.matches[t.matches.length - 1];
    return H(n.route.id, `${e} can only be used on routes that contain a unique "id"`), n.route.id;
  }
  function Wp() {
    return Ns("useRouteId");
  }
  function Hp() {
    var _a2;
    let e = y.useContext(ks), t = Bp("useRouteError"), n = Ns("useRouteError");
    return e !== void 0 ? e : (_a2 = t.errors) == null ? void 0 : _a2[n];
  }
  function Vp() {
    let { router: e } = $p("useNavigate"), t = Ns("useNavigate"), n = y.useRef(false);
    return fd(() => {
      n.current = true;
    }), y.useCallback(async (l, o = {}) => {
      He(n.current, dd), n.current && (typeof l == "number" ? e.navigate(l) : await e.navigate(l, {
        fromRouteId: t,
        ...o
      }));
    }, [
      e,
      t
    ]);
  }
  var Ua = {};
  function pd(e, t, n) {
    !t && !Ua[e] && (Ua[e] = true, He(false, n));
  }
  y.memo(Kp);
  function Kp({ routes: e, future: t, state: n }) {
    return md(e, void 0, n, t);
  }
  function Qp({ to: e, replace: t, state: n, relative: r }) {
    H(Fn(), "<Navigate> may be used only in the context of a <Router> component.");
    let { static: l } = y.useContext(Ve);
    He(!l, "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");
    let { matches: o } = y.useContext(Je), { pathname: i } = ct(), u = Xl(), a = bs(e, ws(o), i, r === "path"), c = JSON.stringify(a);
    return y.useEffect(() => {
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
  function mt(e) {
    H(false, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.");
  }
  function Gp({ basename: e = "/", children: t = null, location: n, navigationType: r = "POP", navigator: l, static: o = false }) {
    H(!Fn(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
    let i = e.replace(/^\/*/, "/"), u = y.useMemo(() => ({
      basename: i,
      navigator: l,
      static: o,
      future: {}
    }), [
      i,
      l,
      o
    ]);
    typeof n == "string" && (n = _n(n));
    let { pathname: a = "/", search: c = "", hash: p = "", state: g = null, key: v = "default" } = n, b = y.useMemo(() => {
      let k = Lt(a, i);
      return k == null ? null : {
        location: {
          pathname: k,
          search: c,
          hash: p,
          state: g,
          key: v
        },
        navigationType: r
      };
    }, [
      i,
      a,
      c,
      p,
      g,
      v,
      r
    ]);
    return He(b != null, `<Router basename="${i}"> is not able to match the URL "${a}${c}${p}" because it does not start with the basename, so the <Router> won't render anything.`), b == null ? null : y.createElement(Ve.Provider, {
      value: u
    }, y.createElement(Cr.Provider, {
      children: t,
      value: b
    }));
  }
  function Yp({ children: e, location: t }) {
    return Op(Ni(e), t);
  }
  function Ni(e, t = []) {
    let n = [];
    return y.Children.forEach(e, (r, l) => {
      if (!y.isValidElement(r)) return;
      let o = [
        ...t,
        l
      ];
      if (r.type === y.Fragment) {
        n.push.apply(n, Ni(r.props.children, o));
        return;
      }
      H(r.type === mt, `[${typeof r.type == "string" ? r.type : r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`), H(!r.props.index || !r.props.children, "An index route cannot have child routes.");
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
      r.props.children && (i.children = Ni(r.props.children, o)), n.push(i);
    }), n;
  }
  var il = "get", sl = "application/x-www-form-urlencoded";
  function Jl(e) {
    return e != null && typeof e.tagName == "string";
  }
  function Xp(e) {
    return Jl(e) && e.tagName.toLowerCase() === "button";
  }
  function Jp(e) {
    return Jl(e) && e.tagName.toLowerCase() === "form";
  }
  function Zp(e) {
    return Jl(e) && e.tagName.toLowerCase() === "input";
  }
  function qp(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
  }
  function e0(e, t) {
    return e.button === 0 && (!t || t === "_self") && !qp(e);
  }
  var Qr = null;
  function t0() {
    if (Qr === null) try {
      new FormData(document.createElement("form"), 0), Qr = false;
    } catch {
      Qr = true;
    }
    return Qr;
  }
  var n0 = /* @__PURE__ */ new Set([
    "application/x-www-form-urlencoded",
    "multipart/form-data",
    "text/plain"
  ]);
  function Eo(e) {
    return e != null && !n0.has(e) ? (He(false, `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${sl}"`), null) : e;
  }
  function r0(e, t) {
    let n, r, l, o, i;
    if (Jp(e)) {
      let u = e.getAttribute("action");
      r = u ? Lt(u, t) : null, n = e.getAttribute("method") || il, l = Eo(e.getAttribute("enctype")) || sl, o = new FormData(e);
    } else if (Xp(e) || Zp(e) && (e.type === "submit" || e.type === "image")) {
      let u = e.form;
      if (u == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
      let a = e.getAttribute("formaction") || u.getAttribute("action");
      if (r = a ? Lt(a, t) : null, n = e.getAttribute("formmethod") || u.getAttribute("method") || il, l = Eo(e.getAttribute("formenctype")) || Eo(u.getAttribute("enctype")) || sl, o = new FormData(u, e), !t0()) {
        let { name: c, type: p, value: g } = e;
        if (p === "image") {
          let v = c ? `${c}.` : "";
          o.append(`${v}x`, "0"), o.append(`${v}y`, "0");
        } else c && o.append(c, g);
      }
    } else {
      if (Jl(e)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
      n = il, r = null, l = sl, i = e;
    }
    return o && l === "text/plain" && (i = o, o = void 0), {
      action: r,
      method: n.toLowerCase(),
      encType: l,
      formData: o,
      body: i
    };
  }
  function Ss(e, t) {
    if (e === false || e === null || typeof e > "u") throw new Error(t);
  }
  async function l0(e, t) {
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
  function o0(e) {
    return e == null ? false : e.href == null ? e.rel === "preload" && typeof e.imageSrcSet == "string" && typeof e.imageSizes == "string" : typeof e.rel == "string" && typeof e.href == "string";
  }
  async function i0(e, t, n) {
    let r = await Promise.all(e.map(async (l) => {
      let o = t.routes[l.route.id];
      if (o) {
        let i = await l0(o, n);
        return i.links ? i.links() : [];
      }
      return [];
    }));
    return c0(r.flat(1).filter(o0).filter((l) => l.rel === "stylesheet" || l.rel === "preload").map((l) => l.rel === "stylesheet" ? {
      ...l,
      rel: "prefetch",
      as: "style"
    } : {
      ...l,
      rel: "prefetch"
    }));
  }
  function Wa(e, t, n, r, l, o) {
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
        let g = a.route.shouldRevalidate({
          currentUrl: new URL(l.pathname + l.search + l.hash, window.origin),
          currentParams: ((_a2 = n[0]) == null ? void 0 : _a2.params) || {},
          nextUrl: new URL(e, window.origin),
          nextParams: a.params,
          defaultShouldRevalidate: true
        });
        if (typeof g == "boolean") return g;
      }
      return true;
    }) : [];
  }
  function s0(e, t, { includeHydrateFallback: n } = {}) {
    return a0(e.map((r) => {
      let l = t.routes[r.route.id];
      if (!l) return [];
      let o = [
        l.module
      ];
      return l.clientActionModule && (o = o.concat(l.clientActionModule)), l.clientLoaderModule && (o = o.concat(l.clientLoaderModule)), n && l.hydrateFallbackModule && (o = o.concat(l.hydrateFallbackModule)), l.imports && (o = o.concat(l.imports)), o;
    }).flat(1));
  }
  function a0(e) {
    return [
      ...new Set(e)
    ];
  }
  function u0(e) {
    let t = {}, n = Object.keys(e).sort();
    for (let r of n) t[r] = e[r];
    return t;
  }
  function c0(e, t) {
    let n = /* @__PURE__ */ new Set();
    return new Set(t), e.reduce((r, l) => {
      let o = JSON.stringify(u0(l));
      return n.has(o) || (n.add(o), r.push({
        key: o,
        link: l
      })), r;
    }, []);
  }
  function d0(e) {
    let t = typeof e == "string" ? new URL(e, typeof window > "u" ? "server://singlefetch/" : window.location.origin) : e;
    return t.pathname === "/" ? t.pathname = "_root.data" : t.pathname = `${t.pathname.replace(/\/$/, "")}.data`, t;
  }
  function f0() {
    let e = y.useContext(Ln);
    return Ss(e, "You must render this element inside a <DataRouterContext.Provider> element"), e;
  }
  function m0() {
    let e = y.useContext(Yl);
    return Ss(e, "You must render this element inside a <DataRouterStateContext.Provider> element"), e;
  }
  var Cs = y.createContext(void 0);
  Cs.displayName = "FrameworkContext";
  function hd() {
    let e = y.useContext(Cs);
    return Ss(e, "You must render this element inside a <HydratedRouter> element"), e;
  }
  function p0(e, t) {
    let n = y.useContext(Cs), [r, l] = y.useState(false), [o, i] = y.useState(false), { onFocus: u, onBlur: a, onMouseEnter: c, onMouseLeave: p, onTouchStart: g } = t, v = y.useRef(null);
    y.useEffect(() => {
      if (e === "render" && i(true), e === "viewport") {
        let h = (m) => {
          m.forEach((d) => {
            i(d.isIntersecting);
          });
        }, N = new IntersectionObserver(h, {
          threshold: 0.5
        });
        return v.current && N.observe(v.current), () => {
          N.disconnect();
        };
      }
    }, [
      e
    ]), y.useEffect(() => {
      if (r) {
        let h = setTimeout(() => {
          i(true);
        }, 100);
        return () => {
          clearTimeout(h);
        };
      }
    }, [
      r
    ]);
    let b = () => {
      l(true);
    }, k = () => {
      l(false), i(false);
    };
    return n ? e !== "intent" ? [
      o,
      v,
      {}
    ] : [
      o,
      v,
      {
        onFocus: Un(u, b),
        onBlur: Un(a, k),
        onMouseEnter: Un(c, b),
        onMouseLeave: Un(p, k),
        onTouchStart: Un(g, b)
      }
    ] : [
      false,
      v,
      {}
    ];
  }
  function Un(e, t) {
    return (n) => {
      e && e(n), n.defaultPrevented || t(n);
    };
  }
  function h0({ page: e, ...t }) {
    let { router: n } = f0(), r = y.useMemo(() => id(n.routes, e, n.basename), [
      n.routes,
      e,
      n.basename
    ]);
    return r ? y.createElement(v0, {
      page: e,
      matches: r,
      ...t
    }) : null;
  }
  function g0(e) {
    let { manifest: t, routeModules: n } = hd(), [r, l] = y.useState([]);
    return y.useEffect(() => {
      let o = false;
      return i0(e, t, n).then((i) => {
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
  function v0({ page: e, matches: t, ...n }) {
    let r = ct(), { manifest: l, routeModules: o } = hd(), { loaderData: i, matches: u } = m0(), a = y.useMemo(() => Wa(e, t, u, l, r, "data"), [
      e,
      t,
      u,
      l,
      r
    ]), c = y.useMemo(() => Wa(e, t, u, l, r, "assets"), [
      e,
      t,
      u,
      l,
      r
    ]), p = y.useMemo(() => {
      if (e === r.pathname + r.search + r.hash) return [];
      let b = /* @__PURE__ */ new Set(), k = false;
      if (t.forEach((N) => {
        var _a2;
        let m = l.routes[N.route.id];
        !m || !m.hasLoader || (!a.some((d) => d.route.id === N.route.id) && N.route.id in i && ((_a2 = o[N.route.id]) == null ? void 0 : _a2.shouldRevalidate) || m.hasClientLoader ? k = true : b.add(N.route.id));
      }), b.size === 0) return [];
      let h = d0(e);
      return k && b.size > 0 && h.searchParams.set("_routes", t.filter((N) => b.has(N.route.id)).map((N) => N.route.id).join(",")), [
        h.pathname + h.search
      ];
    }, [
      i,
      r,
      l,
      a,
      t,
      e,
      o
    ]), g = y.useMemo(() => s0(c, l), [
      c,
      l
    ]), v = g0(c);
    return y.createElement(y.Fragment, null, p.map((b) => y.createElement("link", {
      key: b,
      rel: "prefetch",
      as: "fetch",
      href: b,
      ...n
    })), g.map((b) => y.createElement("link", {
      key: b,
      rel: "modulepreload",
      href: b,
      ...n
    })), v.map(({ key: b, link: k }) => y.createElement("link", {
      key: b,
      ...k
    })));
  }
  function y0(...e) {
    return (t) => {
      e.forEach((n) => {
        typeof n == "function" ? n(t) : n != null && (n.current = t);
      });
    };
  }
  var gd = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
  try {
    gd && (window.__reactRouterVersion = "7.2.0");
  } catch {
  }
  function x0({ basename: e, children: t, window: n }) {
    let r = y.useRef();
    r.current == null && (r.current = ip({
      window: n,
      v5Compat: true
    }));
    let l = r.current, [o, i] = y.useState({
      action: l.action,
      location: l.location
    }), u = y.useCallback((a) => {
      y.startTransition(() => i(a));
    }, [
      i
    ]);
    return y.useLayoutEffect(() => l.listen(u), [
      l,
      u
    ]), y.createElement(Gp, {
      basename: e,
      children: t,
      location: o.location,
      navigationType: o.action,
      navigator: l
    });
  }
  var vd = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, yd = y.forwardRef(function({ onClick: t, discover: n = "render", prefetch: r = "none", relative: l, reloadDocument: o, replace: i, state: u, target: a, to: c, preventScrollReset: p, viewTransition: g, ...v }, b) {
    let { basename: k } = y.useContext(Ve), h = typeof c == "string" && vd.test(c), N, m = false;
    if (typeof c == "string" && h && (N = c, gd)) try {
      let O = new URL(window.location.href), M = c.startsWith("//") ? new URL(O.protocol + c) : new URL(c), X = Lt(M.pathname, k);
      M.origin === O.origin && X != null ? c = X + M.search + M.hash : m = true;
    } catch {
      He(false, `<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`);
    }
    let d = Rp(c, {
      relative: l
    }), [f, x, j] = p0(r, v), S = j0(c, {
      replace: i,
      state: u,
      target: a,
      preventScrollReset: p,
      relative: l,
      viewTransition: g
    });
    function w(O) {
      t && t(O), O.defaultPrevented || S(O);
    }
    let C = y.createElement("a", {
      ...v,
      ...j,
      href: N || d,
      onClick: m || o ? t : w,
      ref: y0(b, x),
      target: a,
      "data-discover": !h && n === "render" ? "true" : void 0
    });
    return f && !h ? y.createElement(y.Fragment, null, C, y.createElement(h0, {
      page: d
    })) : C;
  });
  yd.displayName = "Link";
  var w0 = y.forwardRef(function({ "aria-current": t = "page", caseSensitive: n = false, className: r = "", end: l = false, style: o, to: i, viewTransition: u, children: a, ...c }, p) {
    let g = Er(i, {
      relative: c.relative
    }), v = ct(), b = y.useContext(Yl), { navigator: k, basename: h } = y.useContext(Ve), N = b != null && P0(g) && u === true, m = k.encodeLocation ? k.encodeLocation(g).pathname : g.pathname, d = v.pathname, f = b && b.navigation && b.navigation.location ? b.navigation.location.pathname : null;
    n || (d = d.toLowerCase(), f = f ? f.toLowerCase() : null, m = m.toLowerCase()), f && h && (f = Lt(f, h) || f);
    const x = m !== "/" && m.endsWith("/") ? m.length - 1 : m.length;
    let j = d === m || !l && d.startsWith(m) && d.charAt(x) === "/", S = f != null && (f === m || !l && f.startsWith(m) && f.charAt(m.length) === "/"), w = {
      isActive: j,
      isPending: S,
      isTransitioning: N
    }, C = j ? t : void 0, O;
    typeof r == "function" ? O = r(w) : O = [
      r,
      j ? "active" : null,
      S ? "pending" : null,
      N ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let M = typeof o == "function" ? o(w) : o;
    return y.createElement(yd, {
      ...c,
      "aria-current": C,
      className: O,
      ref: p,
      style: M,
      to: i,
      viewTransition: u
    }, typeof a == "function" ? a(w) : a);
  });
  w0.displayName = "NavLink";
  var b0 = y.forwardRef(({ discover: e = "render", fetcherKey: t, navigate: n, reloadDocument: r, replace: l, state: o, method: i = il, action: u, onSubmit: a, relative: c, preventScrollReset: p, viewTransition: g, ...v }, b) => {
    let k = C0(), h = E0(u, {
      relative: c
    }), N = i.toLowerCase() === "get" ? "get" : "post", m = typeof u == "string" && vd.test(u), d = (f) => {
      if (a && a(f), f.defaultPrevented) return;
      f.preventDefault();
      let x = f.nativeEvent.submitter, j = (x == null ? void 0 : x.getAttribute("formmethod")) || i;
      k(x || f.currentTarget, {
        fetcherKey: t,
        method: j,
        navigate: n,
        replace: l,
        state: o,
        relative: c,
        preventScrollReset: p,
        viewTransition: g
      });
    };
    return y.createElement("form", {
      ref: b,
      method: N,
      action: h,
      onSubmit: r ? a : d,
      ...v,
      "data-discover": !m && e === "render" ? "true" : void 0
    });
  });
  b0.displayName = "Form";
  function k0(e) {
    return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
  }
  function xd(e) {
    let t = y.useContext(Ln);
    return H(t, k0(e)), t;
  }
  function j0(e, { target: t, replace: n, state: r, preventScrollReset: l, relative: o, viewTransition: i } = {}) {
    let u = Xl(), a = ct(), c = Er(e, {
      relative: o
    });
    return y.useCallback((p) => {
      if (e0(p, t)) {
        p.preventDefault();
        let g = n !== void 0 ? n : xr(a) === xr(c);
        u(e, {
          replace: g,
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
  var N0 = 0, S0 = () => `__${String(++N0)}__`;
  function C0() {
    let { router: e } = xd("useSubmit"), { basename: t } = y.useContext(Ve), n = Wp();
    return y.useCallback(async (r, l = {}) => {
      let { action: o, method: i, encType: u, formData: a, body: c } = r0(r, t);
      if (l.navigate === false) {
        let p = l.fetcherKey || S0();
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
  function E0(e, { relative: t } = {}) {
    let { basename: n } = y.useContext(Ve), r = y.useContext(Je);
    H(r, "useFormAction must be used inside a RouteContext");
    let [l] = r.matches.slice(-1), o = {
      ...Er(e || ".", {
        relative: t
      })
    }, i = ct();
    if (e == null) {
      o.search = i.search;
      let u = new URLSearchParams(o.search), a = u.getAll("index");
      if (a.some((p) => p === "")) {
        u.delete("index"), a.filter((g) => g).forEach((g) => u.append("index", g));
        let p = u.toString();
        o.search = p ? `?${p}` : "";
      }
    }
    return (!e || e === ".") && l.route.index && (o.search = o.search ? o.search.replace(/^\?/, "?index&") : "?index"), n !== "/" && (o.pathname = o.pathname === "/" ? n : lt([
      n,
      o.pathname
    ])), xr(o);
  }
  function P0(e, t = {}) {
    let n = y.useContext(cd);
    H(n != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
    let { basename: r } = xd("useViewTransitionState"), l = Er(e, {
      relative: t.relative
    });
    if (!n.isTransitioning) return false;
    let o = Lt(n.currentLocation.pathname, r) || n.currentLocation.pathname, i = Lt(n.nextLocation.pathname, r) || n.nextLocation.pathname;
    return Rl(l.pathname, i) != null || Rl(l.pathname, o) != null;
  }
  new TextEncoder();
  const Ha = (e) => {
    let t;
    const n = /* @__PURE__ */ new Set(), r = (c, p) => {
      const g = typeof c == "function" ? c(t) : c;
      if (!Object.is(g, t)) {
        const v = t;
        t = p ?? (typeof g != "object" || g === null) ? g : Object.assign({}, t, g), n.forEach((b) => b(t, v));
      }
    }, l = () => t, u = {
      setState: r,
      getState: l,
      getInitialState: () => a,
      subscribe: (c) => (n.add(c), () => n.delete(c))
    }, a = t = e(r, l, u);
    return u;
  }, _0 = (e) => e ? Ha(e) : Ha, L0 = (e) => e;
  function F0(e, t = L0) {
    const n = _o.useSyncExternalStore(e.subscribe, () => t(e.getState()), () => t(e.getInitialState()));
    return _o.useDebugValue(n), n;
  }
  const Va = (e) => {
    const t = _0(e), n = (r) => F0(t, r);
    return Object.assign(n, t), n;
  }, R0 = (e) => e ? Va(e) : Va, Ze = R0((e, t) => ({
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
            const g = (_e2 = window.Telegram) == null ? void 0 : _e2.WebApp;
            if (g == null ? void 0 : g.CloudStorage) try {
              g.CloudStorage.getItem("miners", (v, b) => {
                if (v) {
                  console.error("Error loading miners from CloudStorage:", v);
                  return;
                }
                try {
                  const k = b ? JSON.parse(b) : [], h = u.user.rootBalance;
                  u.user.miners = Array.isArray(k) ? k : [], u.user.rootBalance = h, e({
                    user: {
                      ...u.user,
                      rootBalance: h
                    },
                    isAuthenticated: true,
                    isLoading: false,
                    isInitialized: true
                  });
                } catch (k) {
                  console.error("Error parsing miners:", k);
                  const h = u.user.rootBalance;
                  g.CloudStorage.setItem("miners", "[]", (N) => {
                    N && console.error("Error resetting miners:", N);
                  }), u.user.miners = [], u.user.rootBalance = h, e({
                    user: {
                      ...u.user,
                      rootBalance: h
                    },
                    isAuthenticated: true,
                    isLoading: false,
                    isInitialized: true
                  });
                }
              });
            } catch (v) {
              console.error("CloudStorage error:", v);
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
  function T0({ onClose: e, gyroscopeMovement: t }) {
    const [n, r] = y.useState(0), [l, o] = y.useState(0), [i, u] = y.useState(50), [a, c] = y.useState([]), p = y.useRef(null), { user: g } = Ze(), v = y.useRef(Date.now()), b = y.useRef(Date.now()), k = y.useRef(50), h = {
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
      const x = Math.random();
      let j, S = 0;
      for (const w in h) if (S += h[w].probability, x <= S) {
        j = h[w];
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
    }, m = (x, j) => {
      const S = k.current, w = 90, C = 95, O = 4, M = 4, X = Math.abs(x - S), Ee = Math.abs(j - w);
      return X < O && Ee < M && j < C && j > w - M;
    }, d = () => {
      const x = Date.now(), j = x - v.current;
      v.current = x, x - b.current > 1e3 && (c((S) => [
        ...S,
        N()
      ]), b.current = x), c((S) => S.map((w) => {
        if (w.caught) return w;
        const C = w.y + w.speed * j;
        return C > w.y && m(w.x, C) ? (w.type.points === "mth" ? o((O) => O + 1) : r((O) => O + w.type.points), {
          ...w,
          caught: true
        }) : C > 100 ? {
          ...w,
          outOfBounds: true
        } : {
          ...w,
          y: C
        };
      }).filter((w) => !w.outOfBounds && !w.caught)), requestAnimationFrame(d);
    }, f = (x) => {
      x.preventDefault();
    };
    return y.useEffect(() => {
      document.body.style.overflow = "hidden", document.addEventListener("touchmove", f, {
        passive: false
      });
      const x = requestAnimationFrame(d), j = (S) => {
        if (S.key === "ArrowLeft") {
          const w = Math.max(5, k.current - 5);
          u(w), k.current = w;
        } else if (S.key === "ArrowRight") {
          const w = Math.min(95, k.current + 5);
          u(w), k.current = w;
        } else S.key === "Escape" && e();
      };
      return window.addEventListener("keydown", j), () => {
        window.removeEventListener("keydown", j), cancelAnimationFrame(x), document.body.style.overflow = "auto", document.removeEventListener("touchmove", f);
      };
    }, [
      e
    ]), y.useEffect(() => {
      k.current = i;
    }, []), y.useEffect(() => {
      if (t !== void 0) {
        const x = Math.max(5, Math.min(95, i + t));
        u(x), k.current = x;
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
              a.map((x) => s.jsx("div", {
                className: "absolute w-8 h-8 rounded-full flex items-center justify-center transition-opacity duration-200",
                style: {
                  left: `${x.x}%`,
                  top: `${x.y}%`,
                  backgroundColor: x.type.color,
                  boxShadow: `0 0 20px ${x.type.color}80`,
                  transform: "translate(-50%, -50%)",
                  opacity: x.caught ? 0 : 1
                },
                children: s.jsx("div", {
                  className: "w-1 h-1 rounded-full bg-white/50"
                })
              }, x.id))
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
  function O0() {
    const [e, t] = y.useState(false), [n, r] = y.useState(0), [l, o] = y.useState(false), i = (a) => {
      if (!e || !l) return;
      const c = 2, p = a.gamma, v = Math.max(-45, Math.min(45, p)) / 45 * c;
      r(v);
    }, u = async () => {
      try {
        typeof DeviceOrientationEvent.requestPermission == "function" ? await DeviceOrientationEvent.requestPermission() === "granted" ? (o(true), t(true)) : alert("\u0414\u043B\u044F \u0438\u0433\u0440\u044B \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C \u0434\u043E\u0441\u0442\u0443\u043F \u043A \u0433\u0438\u0440\u043E\u0441\u043A\u043E\u043F\u0443") : (o(true), t(true), window.addEventListener("deviceorientation", i));
      } catch (a) {
        console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u043F\u0440\u043E\u0441\u0435 \u0433\u0438\u0440\u043E\u0441\u043A\u043E\u043F\u0430:", a), alert("\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0434\u043E\u0441\u0442\u0443\u043F \u043A \u0433\u0438\u0440\u043E\u0441\u043A\u043E\u043F\u0443. \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u043A\u043B\u0430\u0432\u0438\u0448\u0438 \u0432\u043B\u0435\u0432\u043E/\u0432\u043F\u0440\u0430\u0432\u043E \u0438\u043B\u0438 \u043A\u0430\u0441\u0430\u043D\u0438\u0435 \u044D\u043A\u0440\u0430\u043D\u0430."), t(true);
      }
    };
    return y.useEffect(() => (l && e && (window.addEventListener("deviceorientation", i), console.log("Gyroscope listener added")), () => {
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
        e && s.jsx(T0, {
          onClose: () => {
            t(false), o(false);
          },
          gyroscopeMovement: n
        })
      ]
    });
  }
  function Rn() {
    const e = Xl(), t = ct(), n = () => t.pathname.slice(1) || "main", r = (i) => {
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
  let Ka = false;
  function wr() {
    var _a2, _b;
    const [e, t] = y.useState(false), n = (_a2 = window.Telegram) == null ? void 0 : _a2.WebApp;
    return y.useEffect(() => {
      if (!n || Ka) return;
      (() => {
        n.ready(), n.expand(), n.setHeaderColor("#0A0F1C"), Ka = true, t(true);
      })();
    }, [
      n
    ]), {
      tg: n,
      user: (_b = n == null ? void 0 : n.initDataUnsafe) == null ? void 0 : _b.user,
      isReady: e
    };
  }
  function wd() {
    const { user: e } = Ze(), { user: t } = wr(), n = (t == null ? void 0 : t.username) || (t == null ? void 0 : t.first_name) || (e == null ? void 0 : e.username) || "User", r = t == null ? void 0 : t.photo_url, l = parseInt((e == null ? void 0 : e.rootBalance) || 0);
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
  function M0() {
    const [e, t] = y.useState({
      x: 50,
      y: 50
    }), [n, r] = y.useState(false), [l, o] = y.useState(false), i = y.useRef(null), u = y.useRef(null), a = 80, c = async () => {
      try {
        "DeviceOrientationEvent" in window ? (console.log("DeviceOrientation \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044F"), typeof DeviceOrientationEvent.requestPermission == "function" ? await DeviceOrientationEvent.requestPermission() === "granted" ? (o(true), alert("\u0414\u043E\u0441\u0442\u0443\u043F \u043A \u0433\u0438\u0440\u043E\u0441\u043A\u043E\u043F\u0443 \u043F\u043E\u043B\u0443\u0447\u0435\u043D! \u041D\u0430\u043A\u043B\u043E\u043D\u0438\u0442\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E.")) : alert("\u0414\u043E\u0441\u0442\u0443\u043F \u043A \u0433\u0438\u0440\u043E\u0441\u043A\u043E\u043F\u0443 \u043D\u0435 \u043F\u043E\u043B\u0443\u0447\u0435\u043D") : (o(true), alert("\u0414\u043E\u0441\u0442\u0443\u043F \u043A \u0433\u0438\u0440\u043E\u0441\u043A\u043E\u043F\u0443 \u043F\u043E\u043B\u0443\u0447\u0435\u043D! \u041D\u0430\u043A\u043B\u043E\u043D\u0438\u0442\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E."))) : alert("\u0412\u0430\u0448\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E \u043D\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0433\u0438\u0440\u043E\u0441\u043A\u043E\u043F");
      } catch (v) {
        console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u043F\u0440\u043E\u0441\u0435 \u0433\u0438\u0440\u043E\u0441\u043A\u043E\u043F\u0430:", v), alert("\u041F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u043F\u0440\u043E\u0441\u0435 \u0433\u0438\u0440\u043E\u0441\u043A\u043E\u043F\u0430");
      }
    }, p = (v) => {
      if (!n || !u.current || !i.current) return;
      const b = u.current.getBoundingClientRect(), k = i.current.getBoundingClientRect(), h = 0.5, N = 1, m = 0.2, d = -1e3, f = v.gamma, x = v.beta;
      t((j) => {
        let S = j.x + f * h;
        const w = x > 0 ? m : N;
        let C = j.y + x * w;
        S = Math.max(0, Math.min(S, b.width - k.width));
        const O = b.height - k.height;
        return C >= O && (C = O, C += d), C = Math.max(0, C), {
          x: S,
          y: C
        };
      });
    }, g = async () => {
      l ? r((v) => !v) : await c();
    };
    return y.useEffect(() => (l && n && window.addEventListener("deviceorientation", p), () => {
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
        onClick: g,
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
        s.jsx(M0, {}),
        s.jsxs("div", {
          className: "w-full max-w-md flex flex-col items-center mt-8",
          children: [
            s.jsx(wd, {}),
            s.jsx(O0, {})
          ]
        }),
        s.jsx(Rn, {})
      ]
    });
  }
  function A0() {
    const { user: e } = Ze(), { tg: t } = wr(), [n, r] = y.useState([]), [l, o] = y.useState(false);
    y.useEffect(() => {
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
          const g = `https://t.me/share/url?text=${encodeURIComponent(`\u{1F680} Join Method!

\u{1F48E} Complete tasks
\u{1F4B0} Get rewards
\u{1F3AE} Play games
\u{1F465} Invite friends

\u{1F525} Join now!`)}&url=${encodeURIComponent(c.inviteLink)}`;
          ((_a2 = window.Telegram) == null ? void 0 : _a2.WebApp) ? window.Telegram.WebApp.openTelegramLink(g) : window.open(g, "_blank");
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
  const he = 15, Po = 16, D = {
    EMPTY: 0,
    WALL: 1,
    DOT: 2,
    POWER_PELLET: 3
  }, Qa = () => {
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
  }, bd = ({ setGameActive: e }) => {
    const { user: t, setUser: n } = Ze(), r = (_) => {
      const P = [];
      for (let R = 0; R < he; R++) for (let T = 0; T < he; T++) _[R][T] !== D.WALL && Math.abs(T - 1) + Math.abs(R - 1) > 5 && P.push({
        x: T,
        y: R
      });
      return P[Math.floor(Math.random() * P.length)];
    }, [l, o] = y.useState(() => Qa()), [i, u] = y.useState({
      x: 1,
      y: 1
    }), [a, c] = y.useState(() => [
      "red",
      "pink",
      "cyan",
      "orange"
    ].map((P) => ({
      ...r(l),
      color: P
    }))), [p, g] = y.useState(0), [v, b] = y.useState(false), [k, h] = y.useState(false), [N, m] = y.useState(true);
    y.useEffect(() => {
      const _ = setInterval(() => {
        m((P) => !P);
      }, 200);
      return () => clearInterval(_);
    }, []);
    const [d, f] = y.useState("ArrowRight"), [x, j] = y.useState(false), [S, w] = y.useState(0), [C, O] = y.useState(/* @__PURE__ */ new Set()), M = () => {
      b(true), w(1e4);
      const _ = setInterval(() => {
        w((P) => P <= 1e3 ? (clearInterval(_), b(false), 0) : P - 1e3);
      }, 1e3);
    }, X = y.useCallback(() => {
      a.forEach((_, P) => {
        _.x === i.x && _.y === i.y && !C.has(P) && (v ? (g((R) => R + 200), O((R) => /* @__PURE__ */ new Set([
          ...R,
          P
        ]))) : h(true));
      });
    }, [
      i,
      a,
      v,
      C
    ]), Ee = () => {
      const _ = Qa();
      o(_), u({
        x: 1,
        y: 1
      }), c((P) => P.map((R) => ({
        ...r(_),
        color: R.color
      }))), g(0), b(false), h(false), O(/* @__PURE__ */ new Set());
    }, Oe = y.useCallback((_) => {
      _.some((R) => R.some((T) => T === D.DOT || T === D.POWER_PELLET)) || (j(true), dt(p));
    }, [
      p
    ]), Xt = y.useCallback((_) => {
      k || x || (f(_), u((P) => {
        var _a2, _b, _c2, _d2;
        const R = {
          ...P
        };
        switch (_) {
          case "ArrowUp":
            ((_a2 = l[P.y - 1]) == null ? void 0 : _a2[P.x]) !== D.WALL && (R.y -= 1);
            break;
          case "ArrowDown":
            ((_b = l[P.y + 1]) == null ? void 0 : _b[P.x]) !== D.WALL && (R.y += 1);
            break;
          case "ArrowLeft":
            ((_c2 = l[P.y]) == null ? void 0 : _c2[P.x - 1]) !== D.WALL && (R.x -= 1);
            break;
          case "ArrowRight":
            ((_d2 = l[P.y]) == null ? void 0 : _d2[P.x + 1]) !== D.WALL && (R.x += 1);
            break;
        }
        const T = l[R.y][R.x];
        if (T === D.DOT) {
          g((Z) => Z + 10);
          const G = [
            ...l
          ];
          G[R.y][R.x] = D.EMPTY, o(G), Oe(G);
        } else if (T === D.POWER_PELLET) {
          g((Z) => Z + 50), M();
          const G = [
            ...l
          ];
          G[R.y][R.x] = D.EMPTY, o(G), Oe(G);
        }
        return R;
      }));
    }, [
      l,
      k,
      x,
      Oe
    ]);
    y.useEffect(() => {
      if (k) return;
      const P = setInterval(() => {
        c((R) => R.map((T) => {
          var _a2, _b;
          const G = T.collisionCount || 0;
          if (((_a2 = l[T.y]) == null ? void 0 : _a2[T.x]) === D.WALL) {
            const ze = r(l);
            return {
              ...T,
              ...ze,
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
          if (T.direction && G < 2) {
            const ze = Z.find((Zl) => Zl.dir === T.direction), Pr = T.x + ze.dx, _r = T.y + ze.dy;
            return ((_b = l[_r]) == null ? void 0 : _b[Pr]) !== D.WALL ? {
              ...T,
              x: Pr,
              y: _r,
              collisionCount: 0
            } : {
              ...T,
              collisionCount: G + 1,
              direction: null
            };
          }
          const Ot = Z.filter(({ dx: ze, dy: Pr }) => {
            var _a3;
            const _r = T.x + ze, Zl = T.y + Pr;
            return ((_a3 = l[Zl]) == null ? void 0 : _a3[_r]) !== D.WALL;
          });
          if (Ot.length === 0) return T;
          const Me = Ot[Math.floor(Math.random() * Ot.length)];
          return {
            ...T,
            x: T.x + Me.dx,
            y: T.y + Me.dy,
            direction: Me.dir,
            collisionCount: 0
          };
        }));
      }, 300);
      return () => clearInterval(P);
    }, [
      k,
      l
    ]), y.useEffect(() => {
      X();
    }, [
      i,
      X
    ]), y.useEffect(() => {
      const _ = (P) => {
        Xt(P.key);
      };
      return window.addEventListener("keydown", _), () => window.removeEventListener("keydown", _);
    }, [
      Xt
    ]);
    const Jt = (_) => {
      Xt(_);
    }, dt = async (_) => {
      var _a2, _b, _c2, _d2, _e2, _f2;
      try {
        const P = (_d2 = (_c2 = (_b = (_a2 = window.Telegram) == null ? void 0 : _a2.WebApp) == null ? void 0 : _b.initDataUnsafe) == null ? void 0 : _c2.user) == null ? void 0 : _d2.id;
        if (!P) return;
        const T = parseFloat((t == null ? void 0 : t.rootBalance) || 0) + _, Z = await (await fetch("/update-root-balance", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-telegram-init-data": ((_f2 = (_e2 = window.Telegram) == null ? void 0 : _e2.WebApp) == null ? void 0 : _f2.initData) || ""
          },
          body: JSON.stringify({
            telegramId: P,
            rootBalance: T
          })
        })).json();
        Z.success && n({
          ...t,
          rootBalance: Z.rootBalance
        });
      } catch (P) {
        console.error("Error updating balance:", P);
      }
    }, Tn = () => {
      p > 0 && dt(p), Ee(), e(false);
    };
    y.useEffect(() => {
      k && p > 0 && dt(p);
    }, [
      k,
      p
    ]);
    const L = () => {
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
            v && s.jsxs("div", {
              className: "text-blue-400 animate-pulse",
              children: [
                "Power Mode: ",
                Math.ceil(S / 1e3),
                "s"
              ]
            })
          ]
        }),
        x && s.jsxs("div", {
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
                dt(p), e(false);
              },
              className: "bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded text-sm",
              children: "Close game"
            })
          ]
        }),
        k && s.jsxs("div", {
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
              onClick: Ee,
              className: "bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1 rounded text-sm",
              children: "\u0418\u0433\u0440\u0430\u0442\u044C \u0441\u043D\u043E\u0432\u0430"
            })
          ]
        }),
        s.jsx("div", {
          style: {
            display: "grid",
            gridTemplateColumns: `repeat(${he}, ${Po}px)`,
            gap: "1px",
            backgroundColor: "#1a1a1a",
            padding: "4px",
            borderRadius: "8px"
          },
          children: l.map((_, P) => _.map((R, T) => s.jsxs("div", {
            style: {
              width: `${Po}px`,
              height: `${Po}px`,
              position: "relative",
              backgroundColor: R === D.WALL ? "#2563eb" : "#000"
            },
            children: [
              R === D.DOT && s.jsx("div", {
                className: "absolute inset-0 m-auto w-1 h-1 bg-yellow-200 rounded-full"
              }),
              R === D.POWER_PELLET && s.jsx("div", {
                className: "absolute inset-0 m-auto w-3 h-3 bg-yellow-400 rounded-full"
              }),
              i.x === T && i.y === P && s.jsx("div", {
                className: "absolute inset-0",
                style: {
                  transform: L(),
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
              a.map((G, Z) => !C.has(Z) && G.x === T && G.y === P && s.jsx("div", {
                className: "absolute inset-0 flex items-center justify-center",
                children: s.jsxs("div", {
                  className: `w-full h-full relative ${v ? "animate-pulse" : ""}`,
                  style: {
                    backgroundColor: v ? "#2563eb" : G.color,
                    borderRadius: "50% 50% 0 0",
                    opacity: v ? "0.7" : "1"
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
                        backgroundColor: v ? "#2563eb" : G.color,
                        clipPath: "polygon(0 0, 25% 0, 25% 100%, 50% 0, 75% 0, 75% 100%, 100% 0, 100% 100%, 0 100%)"
                      }
                    })
                  ]
                })
              }, Z))
            ]
          }, `${T}-${P}`)))
        }),
        s.jsxs("div", {
          className: "mt-4 relative h-32 max-w-[180px] mx-auto",
          children: [
            s.jsx("button", {
              onClick: () => Jt("ArrowUp"),
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
              onClick: () => Jt("ArrowLeft"),
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
              onClick: () => Jt("ArrowRight"),
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
              onClick: () => Jt("ArrowDown"),
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
          onClick: Tn,
          className: "mt-2 w-full bg-red-500 hover:bg-red-600 text-white py-1.5 rounded text-sm",
          children: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u0438\u0433\u0440\u0443"
        })
      ]
    });
  };
  function I0() {
    var _a2;
    const [e, t] = y.useState("Social"), [n, r] = y.useState(null), [l, o] = y.useState(false), { user: i, updateUser: u } = Ze(), { tg: a } = wr(), [c, p] = y.useState(false), [g, v] = y.useState({}), b = [
      "Social",
      "Media",
      "Daily"
    ], k = {
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
    y.useEffect(() => {
      var _a3, _b;
      ((_b = (_a3 = window.Telegram) == null ? void 0 : _a3.WebApp) == null ? void 0 : _b.CloudStorage) && (k.Social.forEach((f) => {
        window.Telegram.WebApp.CloudStorage.getItem(`task_${f.id}`, (x, j) => {
          !x && j && v((S) => ({
            ...S,
            [f.id]: j === "true"
          }));
        });
      }), k.Media.forEach((f) => {
        window.Telegram.WebApp.CloudStorage.getItem(`task_${f.id}`, (x, j) => {
          !x && j && v((S) => ({
            ...S,
            [f.id]: j === "true"
          }));
        });
      }));
    }, []);
    const h = (f) => {
      if (f === 8) {
        p(true);
        return;
      }
      r(n === f ? null : f);
    }, N = (f, x) => {
      var _a3;
      console.log("Join channel clicked:", f), x.stopPropagation(), ((_a3 = window.Telegram) == null ? void 0 : _a3.WebApp) ? window.Telegram.WebApp.openTelegramLink(`https://t.me/${f}`) : window.open(`https://t.me/${f}`, "_blank");
    }, m = async (f, x) => {
      var _a3;
      if (x.stopPropagation(), !(i == null ? void 0 : i.telegramId) || l || g[f.id]) {
        g[f.id] && a.showAlert("\u274C You have already claimed the reward!", {
          style: {
            fontFamily: "Polonium"
          }
        });
        return;
      }
      o(true);
      try {
        ((_a3 = window.Telegram) == null ? void 0 : _a3.WebApp) ? window.Telegram.WebApp.openTelegramLink(`https://t.me/${f.botUsername}`) : window.open(`https://t.me/${f.botUsername}`, "_blank");
        const S = parseInt(i.rootBalance || 0) + f.reward;
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
        })).json()).success) window.Telegram.WebApp.CloudStorage.setItem(`task_${f.id}`, "true", (O) => {
          O || (v((M) => ({
            ...M,
            [f.id]: true
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
    }, d = async (f, x) => {
      x.stopPropagation();
      try {
        const S = await (await fetch(`/check-channel-subscription?telegramId=${i.telegramId}&channel=${f.channelUsername}`, {
          headers: {
            "x-telegram-init-data": a.initData
          }
        })).json();
        S.success ? window.Telegram.WebApp.CloudStorage.setItem(`task_${f.id}`, "true", (w) => {
          w || (v((C) => ({
            ...C,
            [f.id]: true
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
              children: b.map((f) => s.jsx("button", {
                onClick: () => t(f),
                className: `px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-all duration-300
                        ${e === f ? "bg-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.3)]" : "bg-[#1E293B]/80 text-blue-400 hover:bg-[#1E293B] border border-blue-400/20"}`,
                style: {
                  fontFamily: "Polonium"
                },
                children: f
              }, f))
            }),
            s.jsx("div", {
              className: "space-y-3",
              children: (_a2 = k[e]) == null ? void 0 : _a2.map((f) => s.jsxs("div", {
                onClick: () => h(f.id),
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
                            children: f.title
                          })
                        ]
                      }),
                      s.jsxs("div", {
                        className: "bg-[#0F172A]/50 text-blue-400 px-3 py-1 rounded-lg text-xs border border-blue-400/20",
                        style: {
                          fontFamily: "Polonium"
                        },
                        children: [
                          f.reward,
                          " POKO"
                        ]
                      })
                    ]
                  }),
                  n === f.id && s.jsxs("div", {
                    className: "px-3 pb-3 animate-slideDown",
                    children: [
                      s.jsx("div", {
                        className: "text-blue-400/60 text-xs mb-3 pl-11",
                        style: {
                          fontFamily: "Polonium"
                        },
                        children: f.description
                      }),
                      s.jsx("div", {
                        className: "space-y-2",
                        children: f.type === "bot" ? s.jsxs("button", {
                          onClick: (x) => m(f, x),
                          disabled: l || g[f.id],
                          className: `w-full bg-[#0F172A]/80 hover:bg-[#0F172A] text-blue-400 py-2 rounded-lg 
                                  text-sm transition-all duration-200
                                  border-2 border-blue-400/50 hover:border-blue-400
                                  shadow-[0_0_10px_rgba(96,165,250,0.2)]
                                  hover:shadow-[0_0_15px_rgba(96,165,250,0.4)]
                                  flex items-center justify-center gap-2
                                  ${l || g[f.id] ? "opacity-50 cursor-not-allowed" : ""}`,
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
                            g[f.id] ? "Reward Claimed" : "Play Game"
                          ]
                        }) : f.type === "game" ? s.jsxs("button", {
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
                              onClick: (x) => N(f.channelUsername, x),
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
                              onClick: (x) => d(f, x),
                              disabled: g[f.id],
                              className: `w-full bg-[#0F172A]/80 hover:bg-[#0F172A] text-blue-400 py-2 rounded-lg 
                                    text-sm transition-all duration-200
                                    border-2 border-blue-400/50 hover:border-blue-400
                                    shadow-[0_0_10px_rgba(96,165,250,0.2)]
                                    hover:shadow-[0_0_15px_rgba(96,165,250,0.4)]
                                    flex items-center justify-center gap-2
                                    ${g[f.id] ? "opacity-50 cursor-not-allowed" : ""}`,
                              style: {
                                fontFamily: "Polonium"
                              },
                              children: g[f.id] ? "Reward Claimed" : "Claim Reward"
                            })
                          ]
                        })
                      })
                    ]
                  })
                ]
              }, f.id))
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
              s.jsx(bd, {
                setGameActive: p
              })
            ]
          })
        })
      ]
    });
  }
  const Es = () => {
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
  function D0() {
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
                children: s.jsx(Es, {})
              }),
              s.jsx(A0, {}),
              s.jsx(I0, {})
            ]
          })
        }),
        s.jsx("div", {
          className: "fixed bottom-0 left-0 right-0 bg-[#0A0F1C] z-50",
          children: s.jsx(Rn, {})
        })
      ]
    });
  }
  const qt = {
    basic: "/assets/power.webp",
    minion: "/assets/powir.webp",
    cube1: "/assets/poowerr.webp",
    cube2: "/assets/por.webp",
    cube3: "/assets/red2.webp",
    cube4: "/assets/red1.webp"
  };
  function $0() {
    const { user: e, updateUser: t } = Ze(), [n, r] = y.useState(null), [l, o] = y.useState(true), [i, u] = y.useState([]), [a, c] = y.useState({
      basic: 0,
      minion: 0,
      cube1: 0,
      cube2: 0,
      cube3: 0,
      cube4: 0
    }), [p, g] = y.useState(false);
    y.useEffect(() => {
      (async () => {
        if (!(e == null ? void 0 : e.telegramId)) {
          o(false);
          return;
        }
        try {
          const m = await (await fetch(`/get-user-miners?telegramId=${e.telegramId}`, {
            headers: {
              "X-Telegram-Init-Data": window.Telegram.WebApp.initData
            }
          })).json();
          if (m.success) {
            let d = m.miners || [];
            if (d.filter((x) => x.type === "minion").length > 10) {
              d = d.filter((x) => x.type !== "minion");
              for (let x = 0; x < 10; x++) d.push({
                type: "minion",
                id: `minion-${x}`
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
    ]), y.useEffect(() => {
      window.Telegram.WebApp.CloudStorage.getItem("lastCollection", (m, d) => {
        if (m || !d) {
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
        const f = JSON.parse(d);
        let x = false;
        f.cube1 || (f.cube1 = Date.now(), x = true), f.cube2 || (f.cube2 = Date.now(), x = true), f.cube3 || (f.cube3 = Date.now(), x = true), f.cube4 || (f.cube4 = Date.now(), x = true), x && window.Telegram.WebApp.CloudStorage.setItem("lastCollection", JSON.stringify(f));
      });
      const h = () => {
        window.Telegram.WebApp.CloudStorage.getItem("lastCollection", (m, d) => {
          if (m) {
            console.error("Error getting lastCollection:", m);
            return;
          }
          const f = JSON.parse(d || "{}"), x = Date.now(), j = {
            ...a
          }, S = i.reduce((w, C) => (w[C.type] = (w[C.type] || 0) + 1, w), {});
          Object.entries(S).forEach(([w, C]) => {
            if (!f[w]) {
              f[w] = Date.now(), window.Telegram.WebApp.CloudStorage.setItem("lastCollection", JSON.stringify(f));
              return;
            }
            const O = (x - f[w]) / 1e3, X = (w === "basic" ? 100 / 60 : w === "minion" ? 2e3 / 60 : w === "cube1" ? 5e3 / 60 : w === "cube2" ? 6e3 / 60 : w === "cube3" ? 7e3 / 60 : 8e3 / 60) * C, Ee = w === "basic" ? 1e3 * C : w === "minion" ? 4e4 * C : w === "cube1" ? 8e3 * C : w === "cube2" ? 12e3 * C : w === "cube3" ? 16e3 * C : 2e4 * C, Oe = Math.min(Ee, Math.floor(O * X));
            j[w] = Oe;
          }), c(j);
        });
      };
      h();
      const N = setInterval(h, 1e5);
      return () => clearInterval(N);
    }, [
      i
    ]);
    const v = async (h, N) => {
      try {
        const m = [
          ...i
        ], d = m.findIndex((j) => j.type === h && j.id === N);
        if (d === -1) return;
        m.splice(d, 1), (await (await fetch("/update-user-miners", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Telegram-Init-Data": window.Telegram.WebApp.initData
          },
          body: JSON.stringify({
            telegramId: e.telegramId,
            miners: m
          })
        })).json()).success ? u(m) : r("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0438");
      } catch (m) {
        console.error("Error deleting miner:", m), r("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0438");
      }
    }, b = async (h) => {
      try {
        if (!(e == null ? void 0 : e.telegramId)) return;
        const N = a[h];
        if (N <= 0) return;
        const m = parseInt(e.rootBalance || 0), d = m + N;
        console.log("Collecting MTH:", {
          currentBalance: m,
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
          const w = JSON.parse(S || "{}");
          w[h] = Date.now(), window.Telegram.WebApp.CloudStorage.setItem("lastCollection", JSON.stringify(w), (C) => {
            if (C) {
              console.error("Error saving lastCollection:", C);
              return;
            }
            t({
              ...e,
              rootBalance: d
            }), c((O) => ({
              ...O,
              [h]: 0
            }));
          });
        });
      } catch (N) {
        console.error("Error collecting MTH:", N), r("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0441\u0431\u043E\u0440\u0435 MTH");
      }
    }, k = () => {
      const h = {
        basic: 500,
        minion: 1e4,
        cube1: 750,
        cube2: 2e3,
        cube3: 12e3,
        cube4: 16e3
      };
      return i.reduce((N, m) => {
        const d = h[m.type] || 0;
        return N + d * 1440;
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
                  children: s.jsx(Es, {})
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
                      onClick: () => g(true),
                      className: "w-5 h-5 rounded-full bg-blue-400/20 text-blue-400 flex items-center justify-center text-sm hover:bg-blue-400/30 mb-2",
                      style: {
                        fontFamily: "Polonium"
                      },
                      children: "?"
                    })
                  ]
                }),
                s.jsxs("div", {
                  className: "flex items-center gap-2",
                  style: {
                    fontFamily: "Polonium"
                  },
                  children: [
                    s.jsx("h2", {
                      className: "text-xl text-blue-400/70",
                      children: "POKO mining:"
                    }),
                    s.jsxs("div", {
                      className: "text-blue-400/70 text-sm font-mono",
                      children: [
                        k().toLocaleString(),
                        " POKO/day"
                      ]
                    })
                  ]
                }),
                s.jsx("div", {
                  className: "grid grid-cols-5 gap-3",
                  children: (() => {
                    const h = i.filter((w) => w.type === "basic"), N = i.filter((w) => w.type === "minion"), m = i.filter((w) => w.type === "cube1"), d = i.filter((w) => w.type === "cube2"), f = i.filter((w) => w.type === "cube3"), x = i.filter((w) => w.type === "cube4"), j = [];
                    h.length > 0 && j.push(s.jsx("div", {
                      className: "relative",
                      children: s.jsxs("div", {
                        className: "bg-[#1E293B]/80 backdrop-blur-sm p-2 rounded-lg border border-blue-400/20",
                        children: [
                          s.jsx("img", {
                            src: qt.basic,
                            alt: "Basic",
                            className: "w-full"
                          }),
                          s.jsx("button", {
                            type: "button",
                            onClick: () => v("basic", h[0].id),
                            className: "absolute -top-2.5 -right-2.5 w-6 h-6 bg-blue-500 text-white border-2 border-blue-600 rounded-full flex items-center justify-center text-lg font-bold cursor-pointer z-50 shadow-lg hover:bg-blue-600 active:bg-blue-700",
                            children: "\xD7"
                          }),
                          s.jsxs("div", {
                            className: "absolute bottom-1 right-1 bg-blue-400/20 px-2 py-1 rounded text-xs text-blue-400",
                            children: [
                              h.length,
                              "/5"
                            ]
                          })
                        ]
                      })
                    }, "basic")), N.length > 0 && j.push(s.jsx("div", {
                      className: "relative",
                      children: s.jsxs("div", {
                        className: "bg-[#1E293B]/80 backdrop-blur-sm p-2 rounded-lg border border-blue-400/20",
                        children: [
                          s.jsx("img", {
                            src: qt.minion,
                            alt: "Minion",
                            className: "w-full"
                          }),
                          s.jsx("button", {
                            type: "button",
                            onClick: () => v("minion", N[0].id),
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
                    }, "minion")), m.forEach((w) => {
                      j.push(s.jsx("div", {
                        className: "relative",
                        children: s.jsxs("div", {
                          className: "bg-[#1E293B]/80 backdrop-blur-sm p-2 rounded-lg border border-blue-400/20",
                          children: [
                            s.jsx("img", {
                              src: qt.cube1,
                              alt: "Cube 1",
                              className: "w-full"
                            }),
                            s.jsx("button", {
                              type: "button",
                              onClick: () => v("cube1", w.id),
                              className: "absolute -top-2.5 -right-2.5 w-6 h-6 bg-blue-500 text-white border-2 border-blue-600 rounded-full flex items-center justify-center text-lg font-bold cursor-pointer z-50 shadow-lg hover:bg-blue-600 active:bg-blue-700",
                              children: "\xD7"
                            }),
                            s.jsx("div", {
                              className: "absolute bottom-1 right-1 bg-blue-400/20 px-2 py-1 rounded text-xs text-blue-400",
                              children: "1"
                            })
                          ]
                        })
                      }, w.id));
                    }), d.forEach((w) => {
                      j.push(s.jsx("div", {
                        className: "relative",
                        children: s.jsxs("div", {
                          className: "bg-[#1E293B]/80 backdrop-blur-sm p-2 rounded-lg border border-blue-400/20",
                          children: [
                            s.jsx("img", {
                              src: qt.cube2,
                              alt: "Cube 2",
                              className: "w-full"
                            }),
                            s.jsx("button", {
                              type: "button",
                              onClick: () => v("cube2", w.id),
                              className: "absolute -top-2.5 -right-2.5 w-6 h-6 bg-blue-500 text-white border-2 border-blue-600 rounded-full flex items-center justify-center text-lg font-bold cursor-pointer z-50 shadow-lg hover:bg-blue-600 active:bg-blue-700",
                              children: "\xD7"
                            }),
                            s.jsx("div", {
                              className: "absolute bottom-1 right-1 bg-blue-400/20 px-2 py-1 rounded text-xs text-blue-400",
                              children: "1"
                            })
                          ]
                        })
                      }, w.id));
                    }), f.forEach((w) => {
                      j.push(s.jsx("div", {
                        className: "relative",
                        children: s.jsxs("div", {
                          className: "bg-[#1E293B]/80 backdrop-blur-sm p-2 rounded-lg border border-blue-400/20",
                          children: [
                            s.jsx("img", {
                              src: qt.cube3,
                              alt: "Cube 3",
                              className: "w-full"
                            }),
                            s.jsx("button", {
                              type: "button",
                              onClick: () => v("cube3", w.id),
                              className: "absolute -top-2.5 -right-2.5 w-6 h-6 bg-blue-500 text-white border-2 border-blue-600 rounded-full flex items-center justify-center text-lg font-bold cursor-pointer z-50 shadow-lg hover:bg-blue-600 active:bg-blue-700",
                              children: "\xD7"
                            }),
                            s.jsx("div", {
                              className: "absolute bottom-1 right-1 bg-blue-400/20 px-2 py-1 rounded text-xs text-blue-400",
                              children: "1"
                            })
                          ]
                        })
                      }, w.id));
                    }), x.forEach((w) => {
                      j.push(s.jsx("div", {
                        className: "relative",
                        children: s.jsxs("div", {
                          className: "bg-[#1E293B]/80 backdrop-blur-sm p-2 rounded-lg border border-blue-400/20",
                          children: [
                            s.jsx("img", {
                              src: qt.cube4,
                              alt: "Cube 4",
                              className: "w-full"
                            }),
                            s.jsx("button", {
                              type: "button",
                              onClick: () => v("cube4", w.id),
                              className: "absolute -top-2.5 -right-2.5 w-6 h-6 bg-blue-500 text-white border-2 border-blue-600 rounded-full flex items-center justify-center text-lg font-bold cursor-pointer z-50 shadow-lg hover:bg-blue-600 active:bg-blue-700",
                              children: "\xD7"
                            }),
                            s.jsx("div", {
                              className: "absolute bottom-1 right-1 bg-blue-400/20 px-2 py-1 rounded text-xs text-blue-400",
                              children: "1"
                            })
                          ]
                        })
                      }, w.id));
                    });
                    const S = Math.max(0, ((e == null ? void 0 : e.maxSlots) || 5) - j.length);
                    for (let w = 0; w < S; w++) j.push(s.jsx("div", {
                      className: "aspect-square bg-[#1E293B]/50 rounded-xl border border-blue-400/10"
                    }, `empty-${w}`));
                    return j;
                  })()
                }),
                i.some((h) => h.type === "basic") && s.jsxs("div", {
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
                              1e3 * i.filter((h) => h.type === "basic").length,
                              " POKO/min"
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
                        500 * i.filter((h) => h.type === "basic").length,
                        " POKO/min"
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
                                a.basic,
                                "/",
                                500 * i.filter((h) => h.type === "basic").length,
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
                            onClick: () => b("basic"),
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
                i.some((h) => h.type === "minion") && s.jsxs("div", {
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
                              2e3 * i.filter((h) => h.type === "minion").length,
                              " POKO/min"
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
                        2e3 * i.filter((h) => h.type === "minion").length,
                        " POKO/min"
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
                                "/",
                                4e4 * i.filter((h) => h.type === "minion").length,
                                " POKO"
                              ]
                            }),
                            s.jsxs("span", {
                              className: "text-blue-400 text-xs",
                              style: {
                                fontFamily: "Polonium"
                              },
                              children: [
                                Math.floor(a.minion / (4e4 * i.filter((h) => h.type === "minion").length) * 100),
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
                              width: `${a.minion / (4e4 * i.filter((h) => h.type === "minion").length) * 100}%`
                            }
                          })
                        }),
                        s.jsx("div", {
                          className: "text-center",
                          children: s.jsx("button", {
                            onClick: () => b("minion"),
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
                i.some((h) => h.type === "cube1") && s.jsxs("div", {
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
                              5e3 * i.filter((h) => h.type === "cube1").length,
                              " POKO/min"
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
                        5e3 * i.filter((h) => h.type === "cube1").length,
                        " POKO/min"
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
                                "/",
                                8e3 * i.filter((h) => h.type === "cube1").length,
                                " POKO"
                              ]
                            }),
                            s.jsxs("span", {
                              className: "text-blue-400 text-xs",
                              style: {
                                fontFamily: "Polonium"
                              },
                              children: [
                                Math.floor(a.cube1 / (8e3 * i.filter((h) => h.type === "cube1").length) * 100),
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
                              width: `${a.cube1 / (8e3 * i.filter((h) => h.type === "cube1").length) * 100}%`
                            }
                          })
                        }),
                        s.jsx("div", {
                          className: "text-center",
                          children: s.jsx("button", {
                            onClick: () => b("cube1"),
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
                i.some((h) => h.type === "cube2") && s.jsxs("div", {
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
                              6e3 * i.filter((h) => h.type === "cube2").length,
                              " POKO/min"
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
                        6e3 * i.filter((h) => h.type === "cube2").length,
                        " POKO/min"
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
                                "/",
                                12e3 * i.filter((h) => h.type === "cube2").length,
                                " POKO"
                              ]
                            }),
                            s.jsxs("span", {
                              className: "text-blue-400 text-xs",
                              style: {
                                fontFamily: "Polonium"
                              },
                              children: [
                                Math.floor(a.cube2 / (12e3 * i.filter((h) => h.type === "cube2").length) * 100),
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
                              width: `${a.cube2 / (12e3 * i.filter((h) => h.type === "cube2").length) * 100}%`
                            }
                          })
                        }),
                        s.jsx("div", {
                          className: "text-center",
                          children: s.jsx("button", {
                            onClick: () => b("cube2"),
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
                i.some((h) => h.type === "cube3") && s.jsxs("div", {
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
                              7e3 * i.filter((h) => h.type === "cube3").length,
                              " POKO/min"
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
                        7e3 * i.filter((h) => h.type === "cube3").length,
                        " POKO/min"
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
                                "/",
                                16e3 * i.filter((h) => h.type === "cube3").length,
                                " POKO"
                              ]
                            }),
                            s.jsxs("span", {
                              className: "text-blue-400 text-xs",
                              style: {
                                fontFamily: "Polonium"
                              },
                              children: [
                                Math.floor(a.cube3 / (16e3 * i.filter((h) => h.type === "cube3").length) * 100),
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
                              width: `${a.cube3 / (16e3 * i.filter((h) => h.type === "cube3").length) * 100}%`
                            }
                          })
                        }),
                        s.jsx("div", {
                          className: "text-center",
                          children: s.jsx("button", {
                            onClick: () => b("cube3"),
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
                i.some((h) => h.type === "cube4") && s.jsxs("div", {
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
                              8e3 * i.filter((h) => h.type === "cube4").length,
                              " POKO/min"
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
                        8e3 * i.filter((h) => h.type === "cube4").length,
                        " POKO/min"
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
                                "/",
                                2e4 * i.filter((h) => h.type === "cube4").length,
                                " POKO"
                              ]
                            }),
                            s.jsxs("span", {
                              className: "text-blue-400 text-xs",
                              style: {
                                fontFamily: "Polonium"
                              },
                              children: [
                                Math.floor(a.cube4 / (2e4 * i.filter((h) => h.type === "cube4").length) * 100),
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
                              width: `${a.cube4 / (2e4 * i.filter((h) => h.type === "cube4").length) * 100}%`
                            }
                          })
                        }),
                        s.jsx("div", {
                          className: "text-center",
                          children: s.jsx("button", {
                            onClick: () => b("cube4"),
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
                    onClick: () => g(false),
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
                    children: "Roko is simple: the more ROKO points you have, the more respect and rewards from Roko you receive."
                  }),
                  s.jsx("p", {
                    className: "text-blue-400/70 font-mono text-sm",
                    children: "You can get ROKO via quests, mining nodes, raids, mentioning Roko in chats across Telegram, and using Roko reactions around Telegram"
                  })
                ]
              }),
              s.jsx("div", {
                className: "flex justify-center",
                children: s.jsx("button", {
                  onClick: () => g(false),
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
          children: s.jsx(Rn, {})
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
  const Mt = {
    basic: "/assets/power.webp",
    minion: "/assets/powir.webp",
    cube1: "/assets/poowerr.webp",
    cube2: "/assets/por.webp",
    cube3: "/assets/red2.webp",
    cube4: "/assets/red1.webp"
  };
  function B0() {
    const { user: e, updateUser: t } = Ze(), [n, r] = y.useState(null), [l, o] = y.useState("auto"), [i, u] = y.useState("nodes"), [a, c] = y.useState({
      basic: 0,
      minion: 0,
      cube1: 0,
      cube2: 0,
      cube3: 0,
      cube4: 0
    });
    y.useEffect(() => {
      o("100dvh"), window.requestAnimationFrame(() => {
        var _a2;
        document.body.style.overflow = "auto", ((_a2 = window.Telegram) == null ? void 0 : _a2.WebApp) && window.Telegram.WebApp.expand();
      });
    }, []), y.useEffect(() => {
      (async () => {
        if (e == null ? void 0 : e.telegramId) try {
          const b = await (await fetch(`/get-user-miners?telegramId=${e.telegramId}`, {
            headers: {
              "X-Telegram-Init-Data": window.Telegram.WebApp.initData
            }
          })).json();
          if (b.success) {
            const k = b.miners || [];
            c({
              basic: k.filter((h) => h.type === "basic").length,
              minion: k.filter((h) => h.type === "minion").length,
              cube1: k.filter((h) => h.type === "cube1").length,
              cube2: k.filter((h) => h.type === "cube2").length,
              cube3: k.filter((h) => h.type === "cube3").length,
              cube4: k.filter((h) => h.type === "cube4").length
            });
          }
        } catch (v) {
          console.error("Error fetching miner counts:", v);
        }
      })();
    }, [
      e == null ? void 0 : e.telegramId
    ]);
    const p = async (g, v) => {
      try {
        if (!(e == null ? void 0 : e.telegramId)) {
          r("\u041E\u0448\u0438\u0431\u043A\u0430 \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u0438");
          return;
        }
        if (e.rootBalance < v) {
          r("\u041D\u0435\u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E \u0441\u0440\u0435\u0434\u0441\u0442\u0432");
          return;
        }
        const k = await (await fetch(`/get-user-miners?telegramId=${e.telegramId}`, {
          headers: {
            "X-Telegram-Init-Data": window.Telegram.WebApp.initData
          }
        })).json(), h = k.success ? k.miners : [], N = h.filter((w) => w.type === "basic").length, m = h.filter((w) => w.type === "minion").length;
        if (g === "basic" && N >= 5) {
          r("\u0414\u043E\u0441\u0442\u0438\u0433\u043D\u0443\u0442 \u043C\u0430\u043A\u0441\u0438\u043C\u0443\u043C Basic \u043C\u0430\u0439\u043D\u0435\u0440\u043E\u0432 (5)");
          return;
        } else if (g === "minion" && m >= 10) {
          r("\u0414\u043E\u0441\u0442\u0438\u0433\u043D\u0443\u0442 \u043C\u0430\u043A\u0441\u0438\u043C\u0443\u043C Minion \u043C\u0430\u0439\u043D\u0435\u0440\u043E\u0432 (10)");
          return;
        }
        const d = /* @__PURE__ */ new Set();
        h.forEach((w) => {
          w.type === "basic" ? d.add("basic-slot") : w.type === "minion" ? d.add("minion-slot") : w.type.startsWith("cube") && d.add(`${w.type}-${w.id}`);
        });
        let f = false;
        if ((g.startsWith("cube") || g === "basic" && !h.some((w) => w.type === "basic") || g === "minion" && !h.some((w) => w.type === "minion")) && (f = true), f && d.size >= ((e == null ? void 0 : e.maxSlots) || 5)) {
          r(`\u0412\u0441\u0435 \u0441\u043B\u043E\u0442\u044B \u0437\u0430\u043D\u044F\u0442\u044B! \u0423 \u0432\u0430\u0441 ${d.size} \u0438\u0437 ${(e == null ? void 0 : e.maxSlots) || 5} \u0441\u043B\u043E\u0442\u043E\u0432`);
          return;
        }
        const x = [
          {
            type: g,
            image: Mt[g],
            purchaseDate: /* @__PURE__ */ new Date(),
            id: Date.now()
          },
          ...h
        ];
        c((w) => ({
          ...w,
          [g]: w[g] + 1
        }));
        const S = await (await fetch("/update-root-balance", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Telegram-Init-Data": window.Telegram.WebApp.initData
          },
          body: JSON.stringify({
            telegramId: e.telegramId,
            rootBalance: e.rootBalance - v
          })
        })).json();
        S.success ? (await (await fetch("/update-user-miners", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Telegram-Init-Data": window.Telegram.WebApp.initData
          },
          body: JSON.stringify({
            telegramId: e.telegramId,
            miners: x
          })
        })).json()).success ? (t({
          ...e,
          rootBalance: S.rootBalance,
          miners: x
        }), r(null)) : r("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0438 \u043C\u0430\u0439\u043D\u0435\u0440\u0430") : r(S.message || "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043F\u043E\u043A\u0443\u043F\u043A\u0435");
      } catch (b) {
        console.error("Purchase error:", b), r("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043F\u043E\u043A\u0443\u043F\u043A\u0435");
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
                s.jsx(Es, {}),
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
                                src: Mt.basic,
                                alt: "minion",
                                className: "w-full h-full object-contain"
                              })
                            }),
                            s.jsx("div", {
                              className: "text-center relative z-20",
                              children: s.jsx("button", {
                                type: "button",
                                onClick: () => p("minion", 1),
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
                                src: Mt.basic,
                                alt: "Basic",
                                className: "w-full h-full object-contain"
                              })
                            }),
                            s.jsx("div", {
                              className: "text-center relative z-20",
                              children: s.jsx("button", {
                                type: "button",
                                onClick: () => p("basic", 4),
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
                                      children: "Superior"
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
                                  children: s.jsx("span", {
                                    className: "text-blue-400 text-xs flex justify-center items-center",
                                    style: {
                                      fontFamily: "Polonium"
                                    },
                                    children: "+2000 POKO/day"
                                  })
                                }),
                                s.jsx("div", {
                                  className: "text-blue-400/60 text-xs mb-1",
                                  style: {
                                    fontFamily: "Polonium"
                                  },
                                  children: "Capacity: 8000 POKO"
                                }),
                                s.jsx("div", {
                                  className: "bg-[#0F172A] rounded-lg p-1 mb-1",
                                  children: s.jsx("img", {
                                    src: Mt.cube1,
                                    alt: "Power Cube I",
                                    className: "w-full h-full object-contain"
                                  })
                                }),
                                s.jsx("div", {
                                  className: "text-center relative z-20",
                                  children: s.jsx("button", {
                                    type: "button",
                                    onClick: () => p("cube1", 1e3),
                                    className: `inline-block py-1 px-4 text-blue-400 text-xs font-mono rounded 
                                    border-2 border-blue-400/50 hover:border-blue-400
                                    bg-[#0A0F1C]/80 backdrop-blur-sm
                                    transition-all duration-200 cursor-pointer
                                    shadow-[0_0_10px_rgba(96,165,250,0.2)]
                                    hover:shadow-[0_0_15px_rgba(96,165,250,0.4)]`,
                                    style: {
                                      fontFamily: "Polonium"
                                    },
                                    children: "1000 POKO"
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
                                      children: "Enhanced"
                                    }),
                                    s.jsx("span", {
                                      className: "text-blue-400/60 text-xs",
                                      style: {
                                        fontFamily: "Polonium"
                                      },
                                      children: "0/100"
                                    })
                                  ]
                                }),
                                s.jsx("div", {
                                  className: "bg-[#0F172A] rounded-lg p-1 mb-1",
                                  children: s.jsx("span", {
                                    className: "text-blue-400 text-xs flex justify-center items-center",
                                    style: {
                                      fontFamily: "Polonium"
                                    },
                                    children: "+3000 POKO/day"
                                  })
                                }),
                                s.jsx("div", {
                                  className: "text-blue-400/60 text-xs mb-1",
                                  style: {
                                    fontFamily: "Polonium"
                                  },
                                  children: "Capacity: 12000 POKO"
                                }),
                                s.jsx("div", {
                                  className: "bg-[#0F172A] rounded-lg p-1 mb-1",
                                  children: s.jsx("img", {
                                    src: Mt.cube2,
                                    alt: "Power Cube II",
                                    className: "w-full h-full object-contain"
                                  })
                                }),
                                s.jsx("div", {
                                  className: "text-center relative z-20",
                                  children: s.jsx("button", {
                                    type: "button",
                                    onClick: () => p("cube2", 1500),
                                    className: `inline-block py-1 px-4 text-blue-400 text-xs font-mono rounded 
                                    border-2 border-blue-400/50 hover:border-blue-400
                                    bg-[#0A0F1C]/80 backdrop-blur-sm
                                    transition-all duration-200 cursor-pointer
                                    shadow-[0_0_10px_rgba(96,165,250,0.2)]
                                    hover:shadow-[0_0_15px_rgba(96,165,250,0.4)]`,
                                    style: {
                                      fontFamily: "Polonium"
                                    },
                                    children: "1500 POKO"
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
                                      children: "Excellent"
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
                                  children: s.jsx("span", {
                                    className: "text-blue-400 text-xs flex justify-center items-center",
                                    style: {
                                      fontFamily: "Polonium"
                                    },
                                    children: "+4000 POKO/day"
                                  })
                                }),
                                s.jsx("div", {
                                  className: "text-blue-400/60 text-xs mb-1",
                                  style: {
                                    fontFamily: "Polonium"
                                  },
                                  children: "Capacity: 16000 POKO"
                                }),
                                s.jsx("div", {
                                  className: "bg-[#0F172A] rounded-lg p-1 mb-1",
                                  children: s.jsx("img", {
                                    src: Mt.cube3,
                                    alt: "Power Cube III",
                                    className: "w-full h-full object-contain"
                                  })
                                }),
                                s.jsx("div", {
                                  className: "text-center relative z-20",
                                  children: s.jsx("button", {
                                    type: "button",
                                    onClick: () => p("cube3", 2e3),
                                    className: `inline-block py-1 px-4 text-blue-400 text-xs font-mono rounded 
                                    border-2 border-blue-400/50 hover:border-blue-400
                                    bg-[#0A0F1C]/80 backdrop-blur-sm
                                    transition-all duration-200 cursor-pointer
                                    shadow-[0_0_10px_rgba(96,165,250,0.2)]
                                    hover:shadow-[0_0_15px_rgba(96,165,250,0.4)]`,
                                    style: {
                                      fontFamily: "Polonium"
                                    },
                                    children: "2000 POKO"
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
                                      children: "Prime"
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
                                  children: s.jsx("span", {
                                    className: "text-blue-400 text-xs flex justify-center items-center",
                                    style: {
                                      fontFamily: "Polonium"
                                    },
                                    children: "+5000 POKO/day"
                                  })
                                }),
                                s.jsx("div", {
                                  className: "text-blue-400/60 text-xs mb-1",
                                  style: {
                                    fontFamily: "Polonium"
                                  },
                                  children: "Capacity: 20000 POKO"
                                }),
                                s.jsx("div", {
                                  className: "bg-[#0F172A] rounded-lg p-1 mb-1",
                                  children: s.jsx("img", {
                                    src: Mt.cube4,
                                    alt: "Power Cube IV",
                                    className: "w-full h-full object-contain"
                                  })
                                }),
                                s.jsx("div", {
                                  className: "text-center relative z-20",
                                  children: s.jsx("button", {
                                    type: "button",
                                    onClick: () => p("cube4", 2500),
                                    className: `inline-block py-1 px-4 text-blue-400 text-xs font-mono rounded 
                                    border-2 border-blue-400/50 hover:border-blue-400
                                    bg-[#0A0F1C]/80 backdrop-blur-sm
                                    transition-all duration-200 cursor-pointer
                                    shadow-[0_0_10px_rgba(96,165,250,0.2)]
                                    hover:shadow-[0_0_15px_rgba(96,165,250,0.4)]`,
                                    style: {
                                      fontFamily: "Polonium"
                                    },
                                    children: "2500 POKO"
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
                          children: "\u041D\u043E\u0432\u044B\u0435 \u043C\u0430\u0439\u043D\u0435\u0440\u044B \u0441\u043A\u043E\u0440\u043E \u0431\u0443\u0434\u0443\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B"
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
                                const v = await (await fetch("/update-max-slots", {
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
                                v.success ? t({
                                  ...e,
                                  maxSlots: v.maxSlots
                                }) : r("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043F\u043E\u043A\u0443\u043F\u043A\u0435 \u0441\u043B\u043E\u0442\u0430");
                              } catch (g) {
                                console.error("Error purchasing slot:", g), r("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043F\u043E\u043A\u0443\u043F\u043A\u0435 \u0441\u043B\u043E\u0442\u0430");
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
          children: s.jsx(Rn, {})
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
  function U0() {
    const e = Xl(), { user: t } = Ze(), { user: n } = wr(), { tg: r } = wr(), [l, o] = y.useState(false);
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
                children: s.jsx(wd, {})
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
          children: s.jsx(Rn, {})
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
              s.jsx(bd, {
                setGameActive: o
              })
            ]
          })
        })
      ]
    });
  }
  function W0() {
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
          children: s.jsx(Rn, {})
        })
      ]
    });
  }
  function H0() {
    const { initializeUser: e } = Ze();
    return y.useEffect(() => {
      const t = window.Telegram.WebApp;
      t && (t.expand(), t.enableClosingConfirmation()), e();
    }, [
      e
    ]), s.jsx(x0, {
      children: s.jsxs("div", {
        className: "glow-background",
        children: [
          s.jsx("div", {
            className: "scanlines"
          }),
          s.jsx("div", {
            className: "glow-content",
            children: s.jsxs(Yp, {
              children: [
                s.jsx(mt, {
                  path: "/",
                  element: s.jsx(Qp, {
                    to: "/method",
                    replace: true
                  })
                }),
                s.jsx(mt, {
                  path: "/method",
                  element: s.jsx(U0, {})
                }),
                s.jsx(mt, {
                  path: "/tasks",
                  element: s.jsx(D0, {})
                }),
                s.jsx(mt, {
                  path: "/main",
                  element: s.jsx(z0, {})
                }),
                s.jsx(mt, {
                  path: "/bag",
                  element: s.jsx($0, {})
                }),
                s.jsx(mt, {
                  path: "/shop",
                  element: s.jsx(B0, {})
                }),
                s.jsx(mt, {
                  path: "/top",
                  element: s.jsx(W0, {})
                })
              ]
            })
          })
        ]
      })
    });
  }
  Lo.createRoot(document.getElementById("root")).render(s.jsx(_o.StrictMode, {
    children: s.jsx(H0, {})
  }));
})();
