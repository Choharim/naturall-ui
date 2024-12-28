import C, { forwardRef as br } from "react";
const we = null, hr = (s) => {
  const l = C.createContext(
    we
  );
  return l.displayName = s, l;
}, gr = ({
  context: s,
  displayName: l
}) => {
  const v = C.useContext(s);
  if (v === we)
    throw Error(`${s.displayName || l}.Provider is needed`);
  return v;
};
var K = { exports: {} }, W = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function yr() {
  if (Oe) return W;
  Oe = 1;
  var s = C, l = Symbol.for("react.element"), v = Symbol.for("react.fragment"), R = Object.prototype.hasOwnProperty, x = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, O = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h(g, c, j) {
    var E, T = {}, S = null, N = null;
    j !== void 0 && (S = "" + j), c.key !== void 0 && (S = "" + c.key), c.ref !== void 0 && (N = c.ref);
    for (E in c) R.call(c, E) && !O.hasOwnProperty(E) && (T[E] = c[E]);
    if (g && g.defaultProps) for (E in c = g.defaultProps, c) T[E] === void 0 && (T[E] = c[E]);
    return { $$typeof: l, type: g, key: S, ref: N, props: T, _owner: x.current };
  }
  return W.Fragment = v, W.jsx = h, W.jsxs = h, W;
}
var Y = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Se;
function Er() {
  return Se || (Se = 1, process.env.NODE_ENV !== "production" && function() {
    var s = C, l = Symbol.for("react.element"), v = Symbol.for("react.portal"), R = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), h = Symbol.for("react.provider"), g = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"), E = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), N = Symbol.for("react.offscreen"), re = Symbol.iterator, Ae = "@@iterator";
    function De(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = re && e[re] || e[Ae];
      return typeof r == "function" ? r : null;
    }
    var k = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function p(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Fe("error", e, t);
      }
    }
    function Fe(e, r, t) {
      {
        var n = k.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var u = t.map(function(o) {
          return String(o);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var Ie = !1, $e = !1, We = !1, Ye = !1, Le = !1, te;
    te = Symbol.for("react.module.reference");
    function Ne(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === R || e === O || Le || e === x || e === j || e === E || Ye || e === N || Ie || $e || We || typeof e == "object" && e !== null && (e.$$typeof === S || e.$$typeof === T || e.$$typeof === h || e.$$typeof === g || e.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === te || e.getModuleId !== void 0));
    }
    function Me(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function ne(e) {
      return e.displayName || "Context";
    }
    function _(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && p("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case R:
          return "Fragment";
        case v:
          return "Portal";
        case O:
          return "Profiler";
        case x:
          return "StrictMode";
        case j:
          return "Suspense";
        case E:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case g:
            var r = e;
            return ne(r) + ".Consumer";
          case h:
            var t = e;
            return ne(t._context) + ".Provider";
          case c:
            return Me(e, e.render, "ForwardRef");
          case T:
            var n = e.displayName || null;
            return n !== null ? n : _(e.type) || "Memo";
          case S: {
            var i = e, u = i._payload, o = i._init;
            try {
              return _(o(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var P = Object.assign, F = 0, ae, oe, ie, ue, se, le, ce;
    function fe() {
    }
    fe.__reactDisabledLog = !0;
    function Ue() {
      {
        if (F === 0) {
          ae = console.log, oe = console.info, ie = console.warn, ue = console.error, se = console.group, le = console.groupCollapsed, ce = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: fe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        F++;
      }
    }
    function Ve() {
      {
        if (F--, F === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: P({}, e, {
              value: ae
            }),
            info: P({}, e, {
              value: oe
            }),
            warn: P({}, e, {
              value: ie
            }),
            error: P({}, e, {
              value: ue
            }),
            group: P({}, e, {
              value: se
            }),
            groupCollapsed: P({}, e, {
              value: le
            }),
            groupEnd: P({}, e, {
              value: ce
            })
          });
        }
        F < 0 && p("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var q = k.ReactCurrentDispatcher, B;
    function M(e, r, t) {
      {
        if (B === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            B = n && n[1] || "";
          }
        return `
` + B + e;
      }
    }
    var G = !1, U;
    {
      var Je = typeof WeakMap == "function" ? WeakMap : Map;
      U = new Je();
    }
    function de(e, r) {
      if (!e || G)
        return "";
      {
        var t = U.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      G = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = q.current, q.current = null, Ue();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (y) {
              n = y;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (y) {
              n = y;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (y) {
            n = y;
          }
          e();
        }
      } catch (y) {
        if (y && n && typeof y.stack == "string") {
          for (var a = y.stack.split(`
`), b = n.stack.split(`
`), f = a.length - 1, d = b.length - 1; f >= 1 && d >= 0 && a[f] !== b[d]; )
            d--;
          for (; f >= 1 && d >= 0; f--, d--)
            if (a[f] !== b[d]) {
              if (f !== 1 || d !== 1)
                do
                  if (f--, d--, d < 0 || a[f] !== b[d]) {
                    var m = `
` + a[f].replace(" at new ", " at ");
                    return e.displayName && m.includes("<anonymous>") && (m = m.replace("<anonymous>", e.displayName)), typeof e == "function" && U.set(e, m), m;
                  }
                while (f >= 1 && d >= 0);
              break;
            }
        }
      } finally {
        G = !1, q.current = u, Ve(), Error.prepareStackTrace = i;
      }
      var D = e ? e.displayName || e.name : "", w = D ? M(D) : "";
      return typeof e == "function" && U.set(e, w), w;
    }
    function Ke(e, r, t) {
      return de(e, !1);
    }
    function qe(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function V(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return de(e, qe(e));
      if (typeof e == "string")
        return M(e);
      switch (e) {
        case j:
          return M("Suspense");
        case E:
          return M("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            return Ke(e.render);
          case T:
            return V(e.type, r, t);
          case S: {
            var n = e, i = n._payload, u = n._init;
            try {
              return V(u(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var I = Object.prototype.hasOwnProperty, ve = {}, pe = k.ReactDebugCurrentFrame;
    function J(e) {
      if (e) {
        var r = e._owner, t = V(e.type, e._source, r ? r.type : null);
        pe.setExtraStackFrame(t);
      } else
        pe.setExtraStackFrame(null);
    }
    function Be(e, r, t, n, i) {
      {
        var u = Function.call.bind(I);
        for (var o in e)
          if (u(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var b = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw b.name = "Invariant Violation", b;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (f) {
              a = f;
            }
            a && !(a instanceof Error) && (J(i), p("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), J(null)), a instanceof Error && !(a.message in ve) && (ve[a.message] = !0, J(i), p("Failed %s type: %s", t, a.message), J(null));
          }
      }
    }
    var Ge = Array.isArray;
    function X(e) {
      return Ge(e);
    }
    function Xe(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function ze(e) {
      try {
        return be(e), !1;
      } catch {
        return !0;
      }
    }
    function be(e) {
      return "" + e;
    }
    function he(e) {
      if (ze(e))
        return p("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Xe(e)), be(e);
    }
    var $ = k.ReactCurrentOwner, He = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ge, ye, z;
    z = {};
    function Ze(e) {
      if (I.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Qe(e) {
      if (I.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function er(e, r) {
      if (typeof e.ref == "string" && $.current && r && $.current.stateNode !== r) {
        var t = _($.current.type);
        z[t] || (p('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', _($.current.type), e.ref), z[t] = !0);
      }
    }
    function rr(e, r) {
      {
        var t = function() {
          ge || (ge = !0, p("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function tr(e, r) {
      {
        var t = function() {
          ye || (ye = !0, p("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var nr = function(e, r, t, n, i, u, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: l,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function ar(e, r, t, n, i) {
      {
        var u, o = {}, a = null, b = null;
        t !== void 0 && (he(t), a = "" + t), Qe(r) && (he(r.key), a = "" + r.key), Ze(r) && (b = r.ref, er(r, i));
        for (u in r)
          I.call(r, u) && !He.hasOwnProperty(u) && (o[u] = r[u]);
        if (e && e.defaultProps) {
          var f = e.defaultProps;
          for (u in f)
            o[u] === void 0 && (o[u] = f[u]);
        }
        if (a || b) {
          var d = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && rr(o, d), b && tr(o, d);
        }
        return nr(e, a, b, i, n, $.current, o);
      }
    }
    var H = k.ReactCurrentOwner, Ee = k.ReactDebugCurrentFrame;
    function A(e) {
      if (e) {
        var r = e._owner, t = V(e.type, e._source, r ? r.type : null);
        Ee.setExtraStackFrame(t);
      } else
        Ee.setExtraStackFrame(null);
    }
    var Z;
    Z = !1;
    function Q(e) {
      return typeof e == "object" && e !== null && e.$$typeof === l;
    }
    function Re() {
      {
        if (H.current) {
          var e = _(H.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function or(e) {
      return "";
    }
    var me = {};
    function ir(e) {
      {
        var r = Re();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function _e(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ir(r);
        if (me[t])
          return;
        me[t] = !0;
        var n = "";
        e && e._owner && e._owner !== H.current && (n = " It was passed a child from " + _(e._owner.type) + "."), A(e), p('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), A(null);
      }
    }
    function Te(e, r) {
      {
        if (typeof e != "object")
          return;
        if (X(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            Q(n) && _e(n, r);
          }
        else if (Q(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = De(e);
          if (typeof i == "function" && i !== e.entries)
            for (var u = i.call(e), o; !(o = u.next()).done; )
              Q(o.value) && _e(o.value, r);
        }
      }
    }
    function ur(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === T))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = _(r);
          Be(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !Z) {
          Z = !0;
          var i = _(r);
          p("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && p("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function sr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            A(e), p("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), A(null);
            break;
          }
        }
        e.ref !== null && (A(e), p("Invalid attribute `ref` supplied to `React.Fragment`."), A(null));
      }
    }
    var Ce = {};
    function xe(e, r, t, n, i, u) {
      {
        var o = Ne(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var b = or();
          b ? a += b : a += Re();
          var f;
          e === null ? f = "null" : X(e) ? f = "array" : e !== void 0 && e.$$typeof === l ? (f = "<" + (_(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : f = typeof e, p("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", f, a);
        }
        var d = ar(e, r, t, i, u);
        if (d == null)
          return d;
        if (o) {
          var m = r.children;
          if (m !== void 0)
            if (n)
              if (X(m)) {
                for (var D = 0; D < m.length; D++)
                  Te(m[D], e);
                Object.freeze && Object.freeze(m);
              } else
                p("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Te(m, e);
        }
        if (I.call(r, "key")) {
          var w = _(e), y = Object.keys(r).filter(function(pr) {
            return pr !== "key";
          }), ee = y.length > 0 ? "{key: someKey, " + y.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ce[w + ee]) {
            var vr = y.length > 0 ? "{" + y.join(": ..., ") + ": ...}" : "{}";
            p(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ee, w, vr, w), Ce[w + ee] = !0;
          }
        }
        return e === R ? sr(d) : ur(d), d;
      }
    }
    function lr(e, r, t) {
      return xe(e, r, t, !0);
    }
    function cr(e, r, t) {
      return xe(e, r, t, !1);
    }
    var fr = cr, dr = lr;
    Y.Fragment = R, Y.jsx = fr, Y.jsxs = dr;
  }()), Y;
}
var Pe;
function Rr() {
  return Pe || (Pe = 1, process.env.NODE_ENV === "production" ? K.exports = yr() : K.exports = Er()), K.exports;
}
var L = Rr();
function mr({
  children: s,
  keyValue: l,
  onKeyValueChange: v
}) {
  const R = C.useMemo(
    () => ({
      keyValue: l,
      onKeyValueChange: v
    }),
    [l, v]
  );
  return /* @__PURE__ */ L.jsx(je.Provider, { value: R, children: s });
}
const je = hr("ControlContext"), _r = () => gr({ context: je });
function ke(s, l) {
  return s === l;
}
function Tr(s) {
  const l = Number(s);
  return !isNaN(l);
}
function Cr({ keyValue: s, label: l, ...v }) {
  const { onKeyValueChange: R, keyValue: x } = _r(), O = !!s && ke(x, s), h = (g) => {
    var c;
    Tr(s) && R(s), (c = v.onClick) == null || c.call(v, g);
  };
  return /* @__PURE__ */ L.jsx(
    "button",
    {
      type: "button",
      id: `tab-${s}`,
      role: "tab",
      "aria-controls": `tabpanel-${s}`,
      "aria-selected": O,
      onClick: h,
      ...v,
      children: l
    }
  );
}
function xr({ children: s, keyValue: l, onKeyValueChange: v, indicator: R, ...x }, O) {
  return /* @__PURE__ */ L.jsxs(
    mr,
    {
      keyValue: l,
      onKeyValueChange: v,
      children: [
        /* @__PURE__ */ L.jsxs("ul", { ...x, role: "tablist", ref: O, children: [
          C.Children.map(s, (h, g) => /* @__PURE__ */ L.jsx("li", { children: C.cloneElement(h, {
            ...h.props,
            keyValue: g
          }) }, g)),
          R
        ] }),
        C.Children.map(s, (h, g) => {
          var c;
          if (ke(g, l))
            return (c = h.props) != null && c.children ? C.cloneElement(h.props.children, {
              ...h.props.children.props,
              id: `tabpanel-${l}`,
              role: "tabpanel",
              "aria-labelledby": `tab-${l}`
            }) : void 0;
        })
      ]
    }
  );
}
const Sr = Object.assign(br(xr), {
  Tab: Cr
});
export {
  Sr as Tabs,
  _r as useTabsControlContext
};
