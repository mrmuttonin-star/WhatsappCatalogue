/*! For license information please see main.e1a904c6.js.LICENSE.txt */
(() => {
  "use strict";
  var e = {
      730(e, t, n) {
        var r = n(43),
          a = n(853);
        function o(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var l = new Set(),
          i = {};
        function s(e, t) {
          (c(e, t), c(e + "Capture", t));
        }
        function c(e, t) {
          for (i[e] = t, e = 0; e < t.length; e++) l.add(t[e]);
        }
        var u = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          d = Object.prototype.hasOwnProperty,
          f =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          m = {};
        function h(e, t, n, r, a, o, l) {
          ((this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = o),
            (this.removeEmptyString = l));
        }
        var g = {};
        ("children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            g[e] = new h(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            g[t] = new h(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              g[e] = new h(e, 2, !1, e.toLowerCase(), null, !1, !1);
            },
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            g[e] = new h(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              g[e] = new h(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            g[e] = new h(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            g[e] = new h(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            g[e] = new h(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            g[e] = new h(e, 5, !1, e.toLowerCase(), null, !1, !1);
          }));
        var b = /[\-:]([a-z])/g;
        function v(e) {
          return e[1].toUpperCase();
        }
        function y(e, t, n, r) {
          var a = g.hasOwnProperty(t) ? g[t] : null;
          (null !== a
            ? 0 !== a.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, a, r) && (n = null),
            r || null === a
              ? (function (e) {
                  return (
                    !!d.call(m, e) ||
                    (!d.call(p, e) &&
                      (f.test(e) ? (m[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : a.mustUseProperty
                ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
                : ((t = a.attributeName),
                  (r = a.attributeNamespace),
                  null === n
                    ? e.removeAttribute(t)
                    : ((n =
                        3 === (a = a.type) || (4 === a && !0 === n)
                          ? ""
                          : "" + n),
                      r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        ("accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(b, v);
            g[t] = new h(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(b, v);
              g[t] = new h(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(b, v);
            g[t] = new h(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1,
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            g[e] = new h(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (g.xlinkHref = new h(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1,
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            g[e] = new h(e, 1, !1, e.toLowerCase(), null, !0, !0);
          }));
        var x = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          w = Symbol.for("react.element"),
          E = Symbol.for("react.portal"),
          k = Symbol.for("react.fragment"),
          N = Symbol.for("react.strict_mode"),
          S = Symbol.for("react.profiler"),
          j = Symbol.for("react.provider"),
          C = Symbol.for("react.context"),
          R = Symbol.for("react.forward_ref"),
          _ = Symbol.for("react.suspense"),
          A = Symbol.for("react.suspense_list"),
          D = Symbol.for("react.memo"),
          P = Symbol.for("react.lazy");
        (Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode"));
        var T = Symbol.for("react.offscreen");
        (Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker"));
        var O = Symbol.iterator;
        function F(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (O && e[O]) || e["@@iterator"])
              ? e
              : null;
        }
        var L,
          M = Object.assign;
        function z(e) {
          if (void 0 === L)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              L = (t && t[1]) || "";
            }
          return "\n" + L + e;
        }
        var I = !1;
        function $(e, t) {
          if (!e || I) return "";
          I = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
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
            if (c && r && "string" === typeof c.stack) {
              for (
                var a = c.stack.split("\n"),
                  o = r.stack.split("\n"),
                  l = a.length - 1,
                  i = o.length - 1;
                1 <= l && 0 <= i && a[l] !== o[i];
              )
                i--;
              for (; 1 <= l && 0 <= i; l--, i--)
                if (a[l] !== o[i]) {
                  if (1 !== l || 1 !== i)
                    do {
                      if ((l--, 0 > --i || a[l] !== o[i])) {
                        var s = "\n" + a[l].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            s.includes("<anonymous>") &&
                            (s = s.replace("<anonymous>", e.displayName)),
                          s
                        );
                      }
                    } while (1 <= l && 0 <= i);
                  break;
                }
            }
          } finally {
            ((I = !1), (Error.prepareStackTrace = n));
          }
          return (e = e ? e.displayName || e.name : "") ? z(e) : "";
        }
        function B(e) {
          switch (e.tag) {
            case 5:
              return z(e.type);
            case 16:
              return z("Lazy");
            case 13:
              return z("Suspense");
            case 19:
              return z("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = $(e.type, !1));
            case 11:
              return (e = $(e.type.render, !1));
            case 1:
              return (e = $(e.type, !0));
            default:
              return "";
          }
        }
        function U(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case k:
              return "Fragment";
            case E:
              return "Portal";
            case S:
              return "Profiler";
            case N:
              return "StrictMode";
            case _:
              return "Suspense";
            case A:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case C:
                return (e.displayName || "Context") + ".Consumer";
              case j:
                return (e._context.displayName || "Context") + ".Provider";
              case R:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case D:
                return null !== (t = e.displayName || null)
                  ? t
                  : U(e.type) || "Memo";
              case P:
                ((t = e._payload), (e = e._init));
                try {
                  return U(e(t));
                } catch (n) {}
            }
          return null;
        }
        function W(e) {
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
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
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
              return U(t);
            case 8:
              return t === N ? "StrictMode" : "Mode";
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
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function H(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function q(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function V(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = q(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var a = n.get,
                  o = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      ((r = "" + e), o.call(this, e));
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      ((e._valueTracker = null), delete e[t]);
                    },
                  }
                );
              }
            })(e));
        }
        function K(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = q(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function Y(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function Q(e, t) {
          var n = t.checked;
          return M({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function G(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          ((n = H(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            }));
        }
        function J(e, t) {
          null != (t = t.checked) && y(e, "checked", t, !1);
        }
        function X(e, t) {
          J(e, t);
          var n = H(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          (t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, H(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked));
        }
        function Z(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            ((t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t));
          }
          ("" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n));
        }
        function ee(e, t, n) {
          ("number" === t && Y(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++)
              ((a = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0));
          } else {
            for (n = "" + H(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n)
                return (
                  (e[a].selected = !0),
                  void (r && (e[a].defaultSelected = !0))
                );
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(o(91));
          return M({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ae(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(o(92));
              if (te(n)) {
                if (1 < n.length) throw Error(o(93));
                n = n[0];
              }
              t = n;
            }
            (null == t && (t = ""), (n = t));
          }
          e._wrapperState = { initialValue: H(n) };
        }
        function oe(e, t) {
          var n = H(t.value),
            r = H(t.defaultValue);
          (null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r));
        }
        function le(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function ie(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function se(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? ie(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
              ? "http://www.w3.org/1999/xhtml"
              : e;
        }
        var ce,
          ue,
          de =
            ((ue = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (ce = ce || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = ce.firstChild;
                  e.firstChild;
                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ue(e, t);
                  });
                }
              : ue);
        function fe(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          me = ["Webkit", "ms", "Moz", "O"];
        function he(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
                "number" !== typeof t ||
                0 === t ||
                (pe.hasOwnProperty(e) && pe[e])
              ? ("" + t).trim()
              : t + "px";
        }
        function ge(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                a = he(n, t[n], r);
              ("float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, a) : (e[n] = a));
            }
        }
        Object.keys(pe).forEach(function (e) {
          me.forEach(function (t) {
            ((t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[t] = pe[e]));
          });
        });
        var be = M(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          },
        );
        function ve(e, t) {
          if (t) {
            if (
              be[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(o(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(o(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(o(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(o(62));
          }
        }
        function ye(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var xe = null;
        function we(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var Ee = null,
          ke = null,
          Ne = null;
        function Se(e) {
          if ((e = ya(e))) {
            if ("function" !== typeof Ee) throw Error(o(280));
            var t = e.stateNode;
            t && ((t = wa(t)), Ee(e.stateNode, e.type, t));
          }
        }
        function je(e) {
          ke ? (Ne ? Ne.push(e) : (Ne = [e])) : (ke = e);
        }
        function Ce() {
          if (ke) {
            var e = ke,
              t = Ne;
            if (((Ne = ke = null), Se(e), t))
              for (e = 0; e < t.length; e++) Se(t[e]);
          }
        }
        function Re(e, t) {
          return e(t);
        }
        function _e() {}
        var Ae = !1;
        function De(e, t, n) {
          if (Ae) return e(t, n);
          Ae = !0;
          try {
            return Re(e, t, n);
          } finally {
            ((Ae = !1), (null !== ke || null !== Ne) && (_e(), Ce()));
          }
        }
        function Pe(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = wa(n);
          if (null === r) return null;
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
              ((r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r));
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(o(231, t, typeof n));
          return n;
        }
        var Te = !1;
        if (u)
          try {
            var Oe = {};
            (Object.defineProperty(Oe, "passive", {
              get: function () {
                Te = !0;
              },
            }),
              window.addEventListener("test", Oe, Oe),
              window.removeEventListener("test", Oe, Oe));
          } catch (ue) {
            Te = !1;
          }
        function Fe(e, t, n, r, a, o, l, i, s) {
          var c = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, c);
          } catch (u) {
            this.onError(u);
          }
        }
        var Le = !1,
          Me = null,
          ze = !1,
          Ie = null,
          $e = {
            onError: function (e) {
              ((Le = !0), (Me = e));
            },
          };
        function Be(e, t, n, r, a, o, l, i, s) {
          ((Le = !1), (Me = null), Fe.apply($e, arguments));
        }
        function Ue(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              (0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return));
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function We(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function He(e) {
          if (Ue(e) !== e) throw Error(o(188));
        }
        function qe(e) {
          return (
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = Ue(e))) throw Error(o(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var a = n.return;
                if (null === a) break;
                var l = a.alternate;
                if (null === l) {
                  if (null !== (r = a.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (a.child === l.child) {
                  for (l = a.child; l; ) {
                    if (l === n) return (He(a), e);
                    if (l === r) return (He(a), t);
                    l = l.sibling;
                  }
                  throw Error(o(188));
                }
                if (n.return !== r.return) ((n = a), (r = l));
                else {
                  for (var i = !1, s = a.child; s; ) {
                    if (s === n) {
                      ((i = !0), (n = a), (r = l));
                      break;
                    }
                    if (s === r) {
                      ((i = !0), (r = a), (n = l));
                      break;
                    }
                    s = s.sibling;
                  }
                  if (!i) {
                    for (s = l.child; s; ) {
                      if (s === n) {
                        ((i = !0), (n = l), (r = a));
                        break;
                      }
                      if (s === r) {
                        ((i = !0), (r = l), (n = a));
                        break;
                      }
                      s = s.sibling;
                    }
                    if (!i) throw Error(o(189));
                  }
                }
                if (n.alternate !== r) throw Error(o(190));
              }
              if (3 !== n.tag) throw Error(o(188));
              return n.stateNode.current === n ? e : t;
            })(e)),
            null !== e ? Ve(e) : null
          );
        }
        function Ve(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = Ve(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var Ke = a.unstable_scheduleCallback,
          Ye = a.unstable_cancelCallback,
          Qe = a.unstable_shouldYield,
          Ge = a.unstable_requestPaint,
          Je = a.unstable_now,
          Xe = a.unstable_getCurrentPriorityLevel,
          Ze = a.unstable_ImmediatePriority,
          et = a.unstable_UserBlockingPriority,
          tt = a.unstable_NormalPriority,
          nt = a.unstable_LowPriority,
          rt = a.unstable_IdlePriority,
          at = null,
          ot = null;
        var lt = Math.clz32
            ? Math.clz32
            : function (e) {
                return (
                  (e >>>= 0),
                  0 === e ? 32 : (31 - ((it(e) / st) | 0)) | 0
                );
              },
          it = Math.log,
          st = Math.LN2;
        var ct = 64,
          ut = 4194304;
        function dt(e) {
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
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
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
        function ft(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            a = e.suspendedLanes,
            o = e.pingedLanes,
            l = 268435455 & n;
          if (0 !== l) {
            var i = l & ~a;
            0 !== i ? (r = dt(i)) : 0 !== (o &= l) && (r = dt(o));
          } else 0 !== (l = n & ~a) ? (r = dt(l)) : 0 !== o && (r = dt(o));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & a) &&
            ((a = r & -r) >= (o = t & -t) || (16 === a && 0 !== (4194240 & o)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              ((a = 1 << (n = 31 - lt(t))), (r |= e[n]), (t &= ~a));
          return r;
        }
        function pt(e, t) {
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
            default:
              return -1;
          }
        }
        function mt(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
              ? 1073741824
              : 0;
        }
        function ht() {
          var e = ct;
          return (0 === (4194240 & (ct <<= 1)) && (ct = 64), e);
        }
        function gt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function bt(e, t, n) {
          ((e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - lt(t))] = n));
        }
        function vt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - lt(n),
              a = 1 << r;
            ((a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a));
          }
        }
        var yt = 0;
        function xt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var wt,
          Et,
          kt,
          Nt,
          St,
          jt = !1,
          Ct = [],
          Rt = null,
          _t = null,
          At = null,
          Dt = new Map(),
          Pt = new Map(),
          Tt = [],
          Ot =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " ",
            );
        function Ft(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Rt = null;
              break;
            case "dragenter":
            case "dragleave":
              _t = null;
              break;
            case "mouseover":
            case "mouseout":
              At = null;
              break;
            case "pointerover":
            case "pointerout":
              Dt.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Pt.delete(t.pointerId);
          }
        }
        function Lt(e, t, n, r, a, o) {
          return null === e || e.nativeEvent !== o
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: o,
                targetContainers: [a],
              }),
              null !== t && null !== (t = ya(t)) && Et(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function Mt(e) {
          var t = va(e.target);
          if (null !== t) {
            var n = Ue(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = We(n)))
                  return (
                    (e.blockedOn = t),
                    void St(e.priority, function () {
                      kt(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function zt(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Qt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return (null !== (t = ya(n)) && Et(t), (e.blockedOn = n), !1);
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            ((xe = r), n.target.dispatchEvent(r), (xe = null), t.shift());
          }
          return !0;
        }
        function It(e, t, n) {
          zt(e) && n.delete(t);
        }
        function $t() {
          ((jt = !1),
            null !== Rt && zt(Rt) && (Rt = null),
            null !== _t && zt(_t) && (_t = null),
            null !== At && zt(At) && (At = null),
            Dt.forEach(It),
            Pt.forEach(It));
        }
        function Bt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            jt ||
              ((jt = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, $t)));
        }
        function Ut(e) {
          function t(t) {
            return Bt(t, e);
          }
          if (0 < Ct.length) {
            Bt(Ct[0], e);
            for (var n = 1; n < Ct.length; n++) {
              var r = Ct[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== Rt && Bt(Rt, e),
              null !== _t && Bt(_t, e),
              null !== At && Bt(At, e),
              Dt.forEach(t),
              Pt.forEach(t),
              n = 0;
            n < Tt.length;
            n++
          )
            (r = Tt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < Tt.length && null === (n = Tt[0]).blockedOn; )
            (Mt(n), null === n.blockedOn && Tt.shift());
        }
        var Wt = x.ReactCurrentBatchConfig,
          Ht = !0;
        function qt(e, t, n, r) {
          var a = yt,
            o = Wt.transition;
          Wt.transition = null;
          try {
            ((yt = 1), Kt(e, t, n, r));
          } finally {
            ((yt = a), (Wt.transition = o));
          }
        }
        function Vt(e, t, n, r) {
          var a = yt,
            o = Wt.transition;
          Wt.transition = null;
          try {
            ((yt = 4), Kt(e, t, n, r));
          } finally {
            ((yt = a), (Wt.transition = o));
          }
        }
        function Kt(e, t, n, r) {
          if (Ht) {
            var a = Qt(e, t, n, r);
            if (null === a) (Hr(e, t, r, Yt, n), Ft(e, r));
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case "focusin":
                    return ((Rt = Lt(Rt, e, t, n, r, a)), !0);
                  case "dragenter":
                    return ((_t = Lt(_t, e, t, n, r, a)), !0);
                  case "mouseover":
                    return ((At = Lt(At, e, t, n, r, a)), !0);
                  case "pointerover":
                    var o = a.pointerId;
                    return (
                      Dt.set(o, Lt(Dt.get(o) || null, e, t, n, r, a)),
                      !0
                    );
                  case "gotpointercapture":
                    return (
                      (o = a.pointerId),
                      Pt.set(o, Lt(Pt.get(o) || null, e, t, n, r, a)),
                      !0
                    );
                }
                return !1;
              })(a, e, t, n, r)
            )
              r.stopPropagation();
            else if ((Ft(e, r), 4 & t && -1 < Ot.indexOf(e))) {
              for (; null !== a; ) {
                var o = ya(a);
                if (
                  (null !== o && wt(o),
                  null === (o = Qt(e, t, n, r)) && Hr(e, t, r, Yt, n),
                  o === a)
                )
                  break;
                a = o;
              }
              null !== a && r.stopPropagation();
            } else Hr(e, t, r, null, n);
          }
        }
        var Yt = null;
        function Qt(e, t, n, r) {
          if (((Yt = null), null !== (e = va((e = we(r))))))
            if (null === (t = Ue(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = We(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return ((Yt = e), null);
        }
        function Gt(e) {
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
              switch (Xe()) {
                case Ze:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Jt = null,
          Xt = null,
          Zt = null;
        function en() {
          if (Zt) return Zt;
          var e,
            t,
            n = Xt,
            r = n.length,
            a = "value" in Jt ? Jt.value : Jt.textContent,
            o = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var l = r - e;
          for (t = 1; t <= l && n[r - t] === a[o - t]; t++);
          return (Zt = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function an(e) {
          function t(t, n, r, a, o) {
            for (var l in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = o),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(l) && ((t = e[l]), (this[l] = t ? t(a) : a[l]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented
                  ? a.defaultPrevented
                  : !1 === a.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            M(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var on,
          ln,
          sn,
          cn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          un = an(cn),
          dn = M({}, cn, { view: 0, detail: 0 }),
          fn = an(dn),
          pn = M({}, dn, {
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
            getModifierState: Sn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== sn &&
                    (sn && "mousemove" === e.type
                      ? ((on = e.screenX - sn.screenX),
                        (ln = e.screenY - sn.screenY))
                      : (ln = on = 0),
                    (sn = e)),
                  on);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : ln;
            },
          }),
          mn = an(pn),
          hn = an(M({}, pn, { dataTransfer: 0 })),
          gn = an(M({}, dn, { relatedTarget: 0 })),
          bn = an(
            M({}, cn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
          ),
          vn = M({}, cn, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          yn = an(vn),
          xn = an(M({}, cn, { data: 0 })),
          wn = {
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
            MozPrintableKey: "Unidentified",
          },
          En = {
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
            224: "Meta",
          },
          kn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function Nn(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = kn[e]) && !!t[e];
        }
        function Sn() {
          return Nn;
        }
        var jn = M({}, dn, {
            key: function (e) {
              if (e.key) {
                var t = wn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                  ? En[e.keyCode] || "Unidentified"
                  : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Sn,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                  ? e.keyCode
                  : 0;
            },
          }),
          Cn = an(jn),
          Rn = an(
            M({}, pn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            }),
          ),
          _n = an(
            M({}, dn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Sn,
            }),
          ),
          An = an(
            M({}, cn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
          ),
          Dn = M({}, pn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                  ? -e.wheelDeltaX
                  : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                  ? -e.wheelDeltaY
                  : "wheelDelta" in e
                    ? -e.wheelDelta
                    : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Pn = an(Dn),
          Tn = [9, 13, 27, 32],
          On = u && "CompositionEvent" in window,
          Fn = null;
        u && "documentMode" in document && (Fn = document.documentMode);
        var Ln = u && "TextEvent" in window && !Fn,
          Mn = u && (!On || (Fn && 8 < Fn && 11 >= Fn)),
          zn = String.fromCharCode(32),
          In = !1;
        function $n(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== Tn.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Bn(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Un = !1;
        var Wn = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function Hn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Wn[e.type] : "textarea" === t;
        }
        function qn(e, t, n, r) {
          (je(r),
            0 < (t = Vr(t, "onChange")).length &&
              ((n = new un("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t })));
        }
        var Vn = null,
          Kn = null;
        function Yn(e) {
          zr(e, 0);
        }
        function Qn(e) {
          if (K(xa(e))) return e;
        }
        function Gn(e, t) {
          if ("change" === e) return t;
        }
        var Jn = !1;
        if (u) {
          var Xn;
          if (u) {
            var Zn = "oninput" in document;
            if (!Zn) {
              var er = document.createElement("div");
              (er.setAttribute("oninput", "return;"),
                (Zn = "function" === typeof er.oninput));
            }
            Xn = Zn;
          } else Xn = !1;
          Jn = Xn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          Vn && (Vn.detachEvent("onpropertychange", nr), (Kn = Vn = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && Qn(Kn)) {
            var t = [];
            (qn(t, Kn, e, we(e)), De(Yn, t));
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), (Kn = n), (Vn = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function ar(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Qn(Kn);
        }
        function or(e, t) {
          if ("click" === e) return Qn(t);
        }
        function lr(e, t) {
          if ("input" === e || "change" === e) return Qn(t);
        }
        var ir =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function sr(e, t) {
          if (ir(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!d.call(t, a) || !ir(e[a], t[a])) return !1;
          }
          return !0;
        }
        function cr(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function ur(e, t) {
          var n,
            r = cr(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = cr(r);
          }
        }
        function dr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? dr(e, t.parentNode)
                  : "contains" in e
                    ? e.contains(t)
                    : !!e.compareDocumentPosition &&
                      !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function fr() {
          for (var e = window, t = Y(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = Y((e = t.contentWindow).document);
          }
          return t;
        }
        function pr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function mr(e) {
          var t = fr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            dr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && pr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                ((n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length)));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var a = n.textContent.length,
                  o = Math.min(r.start, a);
                ((r = void 0 === r.end ? o : Math.min(r.end, a)),
                  !e.extend && o > r && ((a = r), (r = o), (o = a)),
                  (a = ur(n, o)));
                var l = ur(n, r);
                a &&
                  l &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== a.node ||
                    e.anchorOffset !== a.offset ||
                    e.focusNode !== l.node ||
                    e.focusOffset !== l.offset) &&
                  ((t = t.createRange()).setStart(a.node, a.offset),
                  e.removeAllRanges(),
                  o > r
                    ? (e.addRange(t), e.extend(l.node, l.offset))
                    : (t.setEnd(l.node, l.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              (((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top));
          }
        }
        var hr = u && "documentMode" in document && 11 >= document.documentMode,
          gr = null,
          br = null,
          vr = null,
          yr = !1;
        function xr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
                ? n
                : n.ownerDocument;
          yr ||
            null == gr ||
            gr !== Y(r) ||
            ("selectionStart" in (r = gr) && pr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (vr && sr(vr, r)) ||
              ((vr = r),
              0 < (r = Vr(br, "onSelect")).length &&
                ((t = new un("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = gr))));
        }
        function wr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var Er = {
            animationend: wr("Animation", "AnimationEnd"),
            animationiteration: wr("Animation", "AnimationIteration"),
            animationstart: wr("Animation", "AnimationStart"),
            transitionend: wr("Transition", "TransitionEnd"),
          },
          kr = {},
          Nr = {};
        function Sr(e) {
          if (kr[e]) return kr[e];
          if (!Er[e]) return e;
          var t,
            n = Er[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in Nr) return (kr[e] = n[t]);
          return e;
        }
        u &&
          ((Nr = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete Er.animationend.animation,
            delete Er.animationiteration.animation,
            delete Er.animationstart.animation),
          "TransitionEvent" in window || delete Er.transitionend.transition);
        var jr = Sr("animationend"),
          Cr = Sr("animationiteration"),
          Rr = Sr("animationstart"),
          _r = Sr("transitionend"),
          Ar = new Map(),
          Dr =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " ",
            );
        function Pr(e, t) {
          (Ar.set(e, t), s(t, [e]));
        }
        for (var Tr = 0; Tr < Dr.length; Tr++) {
          var Or = Dr[Tr];
          Pr(Or.toLowerCase(), "on" + (Or[0].toUpperCase() + Or.slice(1)));
        }
        (Pr(jr, "onAnimationEnd"),
          Pr(Cr, "onAnimationIteration"),
          Pr(Rr, "onAnimationStart"),
          Pr("dblclick", "onDoubleClick"),
          Pr("focusin", "onFocus"),
          Pr("focusout", "onBlur"),
          Pr(_r, "onTransitionEnd"),
          c("onMouseEnter", ["mouseout", "mouseover"]),
          c("onMouseLeave", ["mouseout", "mouseover"]),
          c("onPointerEnter", ["pointerout", "pointerover"]),
          c("onPointerLeave", ["pointerout", "pointerover"]),
          s(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " ",
            ),
          ),
          s(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " ",
            ),
          ),
          s("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          s(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " ",
            ),
          ),
          s(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " ",
            ),
          ),
          s(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " ",
            ),
          ));
        var Fr =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " ",
            ),
          Lr = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Fr),
          );
        function Mr(e, t, n) {
          var r = e.type || "unknown-event";
          ((e.currentTarget = n),
            (function (e, t, n, r, a, l, i, s, c) {
              if ((Be.apply(this, arguments), Le)) {
                if (!Le) throw Error(o(198));
                var u = Me;
                ((Le = !1), (Me = null), ze || ((ze = !0), (Ie = u)));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null));
        }
        function zr(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event;
            r = r.listeners;
            e: {
              var o = void 0;
              if (t)
                for (var l = r.length - 1; 0 <= l; l--) {
                  var i = r[l],
                    s = i.instance,
                    c = i.currentTarget;
                  if (((i = i.listener), s !== o && a.isPropagationStopped()))
                    break e;
                  (Mr(a, i, c), (o = s));
                }
              else
                for (l = 0; l < r.length; l++) {
                  if (
                    ((s = (i = r[l]).instance),
                    (c = i.currentTarget),
                    (i = i.listener),
                    s !== o && a.isPropagationStopped())
                  )
                    break e;
                  (Mr(a, i, c), (o = s));
                }
            }
          }
          if (ze) throw ((e = Ie), (ze = !1), (Ie = null), e);
        }
        function Ir(e, t) {
          var n = t[ha];
          void 0 === n && (n = t[ha] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Wr(t, e, 2, !1), n.add(r));
        }
        function $r(e, t, n) {
          var r = 0;
          (t && (r |= 4), Wr(n, e, r, t));
        }
        var Br = "_reactListening" + Math.random().toString(36).slice(2);
        function Ur(e) {
          if (!e[Br]) {
            ((e[Br] = !0),
              l.forEach(function (t) {
                "selectionchange" !== t &&
                  (Lr.has(t) || $r(t, !1, e), $r(t, !0, e));
              }));
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Br] || ((t[Br] = !0), $r("selectionchange", !1, t));
          }
        }
        function Wr(e, t, n, r) {
          switch (Gt(t)) {
            case 1:
              var a = qt;
              break;
            case 4:
              a = Vt;
              break;
            default:
              a = Kt;
          }
          ((n = a.bind(null, t, n, e)),
            (a = void 0),
            !Te ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
              : void 0 !== a
                ? e.addEventListener(t, n, { passive: a })
                : e.addEventListener(t, n, !1));
        }
        function Hr(e, t, n, r, a) {
          var o = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var l = r.tag;
              if (3 === l || 4 === l) {
                var i = r.stateNode.containerInfo;
                if (i === a || (8 === i.nodeType && i.parentNode === a)) break;
                if (4 === l)
                  for (l = r.return; null !== l; ) {
                    var s = l.tag;
                    if (
                      (3 === s || 4 === s) &&
                      ((s = l.stateNode.containerInfo) === a ||
                        (8 === s.nodeType && s.parentNode === a))
                    )
                      return;
                    l = l.return;
                  }
                for (; null !== i; ) {
                  if (null === (l = va(i))) return;
                  if (5 === (s = l.tag) || 6 === s) {
                    r = o = l;
                    continue e;
                  }
                  i = i.parentNode;
                }
              }
              r = r.return;
            }
          De(function () {
            var r = o,
              a = we(n),
              l = [];
            e: {
              var i = Ar.get(e);
              if (void 0 !== i) {
                var s = un,
                  c = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    s = Cn;
                    break;
                  case "focusin":
                    ((c = "focus"), (s = gn));
                    break;
                  case "focusout":
                    ((c = "blur"), (s = gn));
                    break;
                  case "beforeblur":
                  case "afterblur":
                    s = gn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    s = mn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    s = hn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    s = _n;
                    break;
                  case jr:
                  case Cr:
                  case Rr:
                    s = bn;
                    break;
                  case _r:
                    s = An;
                    break;
                  case "scroll":
                    s = fn;
                    break;
                  case "wheel":
                    s = Pn;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    s = yn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    s = Rn;
                }
                var u = 0 !== (4 & t),
                  d = !u && "scroll" === e,
                  f = u ? (null !== i ? i + "Capture" : null) : i;
                u = [];
                for (var p, m = r; null !== m; ) {
                  var h = (p = m).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== h &&
                      ((p = h),
                      null !== f &&
                        null != (h = Pe(m, f)) &&
                        u.push(qr(m, h, p))),
                    d)
                  )
                    break;
                  m = m.return;
                }
                0 < u.length &&
                  ((i = new s(i, c, null, n, a)),
                  l.push({ event: i, listeners: u }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((s = "mouseout" === e || "pointerout" === e),
                (!(i = "mouseover" === e || "pointerover" === e) ||
                  n === xe ||
                  !(c = n.relatedTarget || n.fromElement) ||
                  (!va(c) && !c[ma])) &&
                  (s || i) &&
                  ((i =
                    a.window === a
                      ? a
                      : (i = a.ownerDocument)
                        ? i.defaultView || i.parentWindow
                        : window),
                  s
                    ? ((s = r),
                      null !==
                        (c = (c = n.relatedTarget || n.toElement)
                          ? va(c)
                          : null) &&
                        (c !== (d = Ue(c)) || (5 !== c.tag && 6 !== c.tag)) &&
                        (c = null))
                    : ((s = null), (c = r)),
                  s !== c))
              ) {
                if (
                  ((u = mn),
                  (h = "onMouseLeave"),
                  (f = "onMouseEnter"),
                  (m = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((u = Rn),
                    (h = "onPointerLeave"),
                    (f = "onPointerEnter"),
                    (m = "pointer")),
                  (d = null == s ? i : xa(s)),
                  (p = null == c ? i : xa(c)),
                  ((i = new u(h, m + "leave", s, n, a)).target = d),
                  (i.relatedTarget = p),
                  (h = null),
                  va(a) === r &&
                    (((u = new u(f, m + "enter", c, n, a)).target = p),
                    (u.relatedTarget = d),
                    (h = u)),
                  (d = h),
                  s && c)
                )
                  e: {
                    for (f = c, m = 0, p = u = s; p; p = Kr(p)) m++;
                    for (p = 0, h = f; h; h = Kr(h)) p++;
                    for (; 0 < m - p; ) ((u = Kr(u)), m--);
                    for (; 0 < p - m; ) ((f = Kr(f)), p--);
                    for (; m--; ) {
                      if (u === f || (null !== f && u === f.alternate)) break e;
                      ((u = Kr(u)), (f = Kr(f)));
                    }
                    u = null;
                  }
                else u = null;
                (null !== s && Yr(l, i, s, u, !1),
                  null !== c && null !== d && Yr(l, d, c, u, !0));
              }
              if (
                "select" ===
                  (s =
                    (i = r ? xa(r) : window).nodeName &&
                    i.nodeName.toLowerCase()) ||
                ("input" === s && "file" === i.type)
              )
                var g = Gn;
              else if (Hn(i))
                if (Jn) g = lr;
                else {
                  g = ar;
                  var b = rr;
                }
              else
                (s = i.nodeName) &&
                  "input" === s.toLowerCase() &&
                  ("checkbox" === i.type || "radio" === i.type) &&
                  (g = or);
              switch (
                (g && (g = g(e, r))
                  ? qn(l, g, n, a)
                  : (b && b(e, i, r),
                    "focusout" === e &&
                      (b = i._wrapperState) &&
                      b.controlled &&
                      "number" === i.type &&
                      ee(i, "number", i.value)),
                (b = r ? xa(r) : window),
                e)
              ) {
                case "focusin":
                  (Hn(b) || "true" === b.contentEditable) &&
                    ((gr = b), (br = r), (vr = null));
                  break;
                case "focusout":
                  vr = br = gr = null;
                  break;
                case "mousedown":
                  yr = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  ((yr = !1), xr(l, n, a));
                  break;
                case "selectionchange":
                  if (hr) break;
                case "keydown":
                case "keyup":
                  xr(l, n, a);
              }
              var v;
              if (On)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var y = "onCompositionStart";
                      break e;
                    case "compositionend":
                      y = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      y = "onCompositionUpdate";
                      break e;
                  }
                  y = void 0;
                }
              else
                Un
                  ? $n(e, n) && (y = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (y = "onCompositionStart");
              (y &&
                (Mn &&
                  "ko" !== n.locale &&
                  (Un || "onCompositionStart" !== y
                    ? "onCompositionEnd" === y && Un && (v = en())
                    : ((Xt = "value" in (Jt = a) ? Jt.value : Jt.textContent),
                      (Un = !0))),
                0 < (b = Vr(r, y)).length &&
                  ((y = new xn(y, e, null, n, a)),
                  l.push({ event: y, listeners: b }),
                  v ? (y.data = v) : null !== (v = Bn(n)) && (y.data = v))),
                (v = Ln
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Bn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((In = !0), zn);
                        case "textInput":
                          return (e = t.data) === zn && In ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Un)
                        return "compositionend" === e || (!On && $n(e, t))
                          ? ((e = en()), (Zt = Xt = Jt = null), (Un = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return Mn && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Vr(r, "onBeforeInput")).length &&
                  ((a = new xn("onBeforeInput", "beforeinput", null, n, a)),
                  l.push({ event: a, listeners: r }),
                  (a.data = v)));
            }
            zr(l, t);
          });
        }
        function qr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Vr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var a = e,
              o = a.stateNode;
            (5 === a.tag &&
              null !== o &&
              ((a = o),
              null != (o = Pe(e, n)) && r.unshift(qr(e, o, a)),
              null != (o = Pe(e, t)) && r.push(qr(e, o, a))),
              (e = e.return));
          }
          return r;
        }
        function Kr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Yr(e, t, n, r, a) {
          for (var o = t._reactName, l = []; null !== n && n !== r; ) {
            var i = n,
              s = i.alternate,
              c = i.stateNode;
            if (null !== s && s === r) break;
            (5 === i.tag &&
              null !== c &&
              ((i = c),
              a
                ? null != (s = Pe(n, o)) && l.unshift(qr(n, s, i))
                : a || (null != (s = Pe(n, o)) && l.push(qr(n, s, i)))),
              (n = n.return));
          }
          0 !== l.length && e.push({ event: t, listeners: l });
        }
        var Qr = /\r\n?/g,
          Gr = /\u0000|\uFFFD/g;
        function Jr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Qr, "\n")
            .replace(Gr, "");
        }
        function Xr(e, t, n) {
          if (((t = Jr(t)), Jr(e) !== t && n)) throw Error(o(425));
        }
        function Zr() {}
        var ea = null,
          ta = null;
        function na(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ra = "function" === typeof setTimeout ? setTimeout : void 0,
          aa = "function" === typeof clearTimeout ? clearTimeout : void 0,
          oa = "function" === typeof Promise ? Promise : void 0,
          la =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof oa
                ? function (e) {
                    return oa.resolve(null).then(e).catch(ia);
                  }
                : ra;
        function ia(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function sa(e, t) {
          var n = t,
            r = 0;
          do {
            var a = n.nextSibling;
            if ((e.removeChild(n), a && 8 === a.nodeType))
              if ("/$" === (n = a.data)) {
                if (0 === r) return (e.removeChild(a), void Ut(t));
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = a;
          } while (n);
          Ut(t);
        }
        function ca(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function ua(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var da = Math.random().toString(36).slice(2),
          fa = "__reactFiber$" + da,
          pa = "__reactProps$" + da,
          ma = "__reactContainer$" + da,
          ha = "__reactEvents$" + da,
          ga = "__reactListeners$" + da,
          ba = "__reactHandles$" + da;
        function va(e) {
          var t = e[fa];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[ma] || n[fa])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = ua(e); null !== e; ) {
                  if ((n = e[fa])) return n;
                  e = ua(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function ya(e) {
          return !(e = e[fa] || e[ma]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function xa(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(o(33));
        }
        function wa(e) {
          return e[pa] || null;
        }
        var Ea = [],
          ka = -1;
        function Na(e) {
          return { current: e };
        }
        function Sa(e) {
          0 > ka || ((e.current = Ea[ka]), (Ea[ka] = null), ka--);
        }
        function ja(e, t) {
          (ka++, (Ea[ka] = e.current), (e.current = t));
        }
        var Ca = {},
          Ra = Na(Ca),
          _a = Na(!1),
          Aa = Ca;
        function Da(e, t) {
          var n = e.type.contextTypes;
          if (!n) return Ca;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var a,
            o = {};
          for (a in n) o[a] = t[a];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            o
          );
        }
        function Pa(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function Ta() {
          (Sa(_a), Sa(Ra));
        }
        function Fa(e, t, n) {
          if (Ra.current !== Ca) throw Error(o(168));
          (ja(Ra, t), ja(_a, n));
        }
        function La(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var a in (r = r.getChildContext()))
            if (!(a in t)) throw Error(o(108, W(e) || "Unknown", a));
          return M({}, n, r);
        }
        function Ma(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Ca),
            (Aa = Ra.current),
            ja(Ra, e),
            ja(_a, _a.current),
            !0
          );
        }
        function za(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(o(169));
          (n
            ? ((e = La(e, t, Aa)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Sa(_a),
              Sa(Ra),
              ja(Ra, e))
            : Sa(_a),
            ja(_a, n));
        }
        var Ia = null,
          $a = !1,
          Ba = !1;
        function Ua(e) {
          null === Ia ? (Ia = [e]) : Ia.push(e);
        }
        function Wa() {
          if (!Ba && null !== Ia) {
            Ba = !0;
            var e = 0,
              t = yt;
            try {
              var n = Ia;
              for (yt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              ((Ia = null), ($a = !1));
            } catch (a) {
              throw (null !== Ia && (Ia = Ia.slice(e + 1)), Ke(Ze, Wa), a);
            } finally {
              ((yt = t), (Ba = !1));
            }
          }
          return null;
        }
        var Ha = [],
          qa = 0,
          Va = null,
          Ka = 0,
          Ya = [],
          Qa = 0,
          Ga = null,
          Ja = 1,
          Xa = "";
        function Za(e, t) {
          ((Ha[qa++] = Ka), (Ha[qa++] = Va), (Va = e), (Ka = t));
        }
        function eo(e, t, n) {
          ((Ya[Qa++] = Ja), (Ya[Qa++] = Xa), (Ya[Qa++] = Ga), (Ga = e));
          var r = Ja;
          e = Xa;
          var a = 32 - lt(r) - 1;
          ((r &= ~(1 << a)), (n += 1));
          var o = 32 - lt(t) + a;
          if (30 < o) {
            var l = a - (a % 5);
            ((o = (r & ((1 << l) - 1)).toString(32)),
              (r >>= l),
              (a -= l),
              (Ja = (1 << (32 - lt(t) + a)) | (n << a) | r),
              (Xa = o + e));
          } else ((Ja = (1 << o) | (n << a) | r), (Xa = e));
        }
        function to(e) {
          null !== e.return && (Za(e, 1), eo(e, 1, 0));
        }
        function no(e) {
          for (; e === Va; )
            ((Va = Ha[--qa]),
              (Ha[qa] = null),
              (Ka = Ha[--qa]),
              (Ha[qa] = null));
          for (; e === Ga; )
            ((Ga = Ya[--Qa]),
              (Ya[Qa] = null),
              (Xa = Ya[--Qa]),
              (Ya[Qa] = null),
              (Ja = Ya[--Qa]),
              (Ya[Qa] = null));
        }
        var ro = null,
          ao = null,
          oo = !1,
          lo = null;
        function io(e, t) {
          var n = Dc(5, null, null, 0);
          ((n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n));
        }
        function so(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (ro = e), (ao = ca(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (ro = e), (ao = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Ga ? { id: Ja, overflow: Xa } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Dc(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (ro = e),
                (ao = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function co(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function uo(e) {
          if (oo) {
            var t = ao;
            if (t) {
              var n = t;
              if (!so(e, t)) {
                if (co(e)) throw Error(o(418));
                t = ca(n.nextSibling);
                var r = ro;
                t && so(e, t)
                  ? io(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (oo = !1), (ro = e));
              }
            } else {
              if (co(e)) throw Error(o(418));
              ((e.flags = (-4097 & e.flags) | 2), (oo = !1), (ro = e));
            }
          }
        }
        function fo(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;
          )
            e = e.return;
          ro = e;
        }
        function po(e) {
          if (e !== ro) return !1;
          if (!oo) return (fo(e), (oo = !0), !1);
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !na(e.type, e.memoizedProps)),
            t && (t = ao))
          ) {
            if (co(e)) throw (mo(), Error(o(418)));
            for (; t; ) (io(e, t), (t = ca(t.nextSibling)));
          }
          if ((fo(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(o(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      ao = ca(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              ao = null;
            }
          } else ao = ro ? ca(e.stateNode.nextSibling) : null;
          return !0;
        }
        function mo() {
          for (var e = ao; e; ) e = ca(e.nextSibling);
        }
        function ho() {
          ((ao = ro = null), (oo = !1));
        }
        function go(e) {
          null === lo ? (lo = [e]) : lo.push(e);
        }
        var bo = x.ReactCurrentBatchConfig;
        function vo(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(o(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(o(147, e));
              var a = r,
                l = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === l
                ? t.ref
                : ((t = function (e) {
                    var t = a.refs;
                    null === e ? delete t[l] : (t[l] = e);
                  }),
                  (t._stringRef = l),
                  t);
            }
            if ("string" !== typeof e) throw Error(o(284));
            if (!n._owner) throw Error(o(290, e));
          }
          return e;
        }
        function yo(e, t) {
          throw (
            (e = Object.prototype.toString.call(t)),
            Error(
              o(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e,
              ),
            )
          );
        }
        function xo(e) {
          return (0, e._init)(e._payload);
        }
        function wo(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) (t(n, r), (r = r.sibling));
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              (null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling));
            return e;
          }
          function a(e, t) {
            return (((e = Tc(e, t)).index = 0), (e.sibling = null), e);
          }
          function l(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function i(t) {
            return (e && null === t.alternate && (t.flags |= 2), t);
          }
          function s(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Mc(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function c(e, t, n, r) {
            var o = n.type;
            return o === k
              ? d(e, t, n.props.children, r, n.key)
              : null !== t &&
                  (t.elementType === o ||
                    ("object" === typeof o &&
                      null !== o &&
                      o.$$typeof === P &&
                      xo(o) === t.type))
                ? (((r = a(t, n.props)).ref = vo(e, t, n)), (r.return = e), r)
                : (((r = Oc(n.type, n.key, n.props, null, e.mode, r)).ref = vo(
                    e,
                    t,
                    n,
                  )),
                  (r.return = e),
                  r);
          }
          function u(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = zc(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function d(e, t, n, r, o) {
            return null === t || 7 !== t.tag
              ? (((t = Fc(n, e.mode, r, o)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function f(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return (((t = Mc("" + t, e.mode, n)).return = e), t);
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case w:
                  return (
                    ((n = Oc(t.type, t.key, t.props, null, e.mode, n)).ref = vo(
                      e,
                      null,
                      t,
                    )),
                    (n.return = e),
                    n
                  );
                case E:
                  return (((t = zc(t, e.mode, n)).return = e), t);
                case P:
                  return f(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || F(t))
                return (((t = Fc(t, e.mode, n, null)).return = e), t);
              yo(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== a ? null : s(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case w:
                  return n.key === a ? c(e, t, n, r) : null;
                case E:
                  return n.key === a ? u(e, t, n, r) : null;
                case P:
                  return p(e, t, (a = n._init)(n._payload), r);
              }
              if (te(n) || F(n)) return null !== a ? null : d(e, t, n, r, null);
              yo(e, n);
            }
            return null;
          }
          function m(e, t, n, r, a) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return s(t, (e = e.get(n) || null), "" + r, a);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case w:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a,
                  );
                case E:
                  return u(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a,
                  );
                case P:
                  return m(e, t, n, (0, r._init)(r._payload), a);
              }
              if (te(r) || F(r))
                return d(t, (e = e.get(n) || null), r, a, null);
              yo(t, r);
            }
            return null;
          }
          function h(a, o, i, s) {
            for (
              var c = null, u = null, d = o, h = (o = 0), g = null;
              null !== d && h < i.length;
              h++
            ) {
              d.index > h ? ((g = d), (d = null)) : (g = d.sibling);
              var b = p(a, d, i[h], s);
              if (null === b) {
                null === d && (d = g);
                break;
              }
              (e && d && null === b.alternate && t(a, d),
                (o = l(b, o, h)),
                null === u ? (c = b) : (u.sibling = b),
                (u = b),
                (d = g));
            }
            if (h === i.length) return (n(a, d), oo && Za(a, h), c);
            if (null === d) {
              for (; h < i.length; h++)
                null !== (d = f(a, i[h], s)) &&
                  ((o = l(d, o, h)),
                  null === u ? (c = d) : (u.sibling = d),
                  (u = d));
              return (oo && Za(a, h), c);
            }
            for (d = r(a, d); h < i.length; h++)
              null !== (g = m(d, a, h, i[h], s)) &&
                (e &&
                  null !== g.alternate &&
                  d.delete(null === g.key ? h : g.key),
                (o = l(g, o, h)),
                null === u ? (c = g) : (u.sibling = g),
                (u = g));
            return (
              e &&
                d.forEach(function (e) {
                  return t(a, e);
                }),
              oo && Za(a, h),
              c
            );
          }
          function g(a, i, s, c) {
            var u = F(s);
            if ("function" !== typeof u) throw Error(o(150));
            if (null == (s = u.call(s))) throw Error(o(151));
            for (
              var d = (u = null), h = i, g = (i = 0), b = null, v = s.next();
              null !== h && !v.done;
              g++, v = s.next()
            ) {
              h.index > g ? ((b = h), (h = null)) : (b = h.sibling);
              var y = p(a, h, v.value, c);
              if (null === y) {
                null === h && (h = b);
                break;
              }
              (e && h && null === y.alternate && t(a, h),
                (i = l(y, i, g)),
                null === d ? (u = y) : (d.sibling = y),
                (d = y),
                (h = b));
            }
            if (v.done) return (n(a, h), oo && Za(a, g), u);
            if (null === h) {
              for (; !v.done; g++, v = s.next())
                null !== (v = f(a, v.value, c)) &&
                  ((i = l(v, i, g)),
                  null === d ? (u = v) : (d.sibling = v),
                  (d = v));
              return (oo && Za(a, g), u);
            }
            for (h = r(a, h); !v.done; g++, v = s.next())
              null !== (v = m(h, a, g, v.value, c)) &&
                (e &&
                  null !== v.alternate &&
                  h.delete(null === v.key ? g : v.key),
                (i = l(v, i, g)),
                null === d ? (u = v) : (d.sibling = v),
                (d = v));
            return (
              e &&
                h.forEach(function (e) {
                  return t(a, e);
                }),
              oo && Za(a, g),
              u
            );
          }
          return function e(r, o, l, s) {
            if (
              ("object" === typeof l &&
                null !== l &&
                l.type === k &&
                null === l.key &&
                (l = l.props.children),
              "object" === typeof l && null !== l)
            ) {
              switch (l.$$typeof) {
                case w:
                  e: {
                    for (var c = l.key, u = o; null !== u; ) {
                      if (u.key === c) {
                        if ((c = l.type) === k) {
                          if (7 === u.tag) {
                            (n(r, u.sibling),
                              ((o = a(u, l.props.children)).return = r),
                              (r = o));
                            break e;
                          }
                        } else if (
                          u.elementType === c ||
                          ("object" === typeof c &&
                            null !== c &&
                            c.$$typeof === P &&
                            xo(c) === u.type)
                        ) {
                          (n(r, u.sibling),
                            ((o = a(u, l.props)).ref = vo(r, u, l)),
                            (o.return = r),
                            (r = o));
                          break e;
                        }
                        n(r, u);
                        break;
                      }
                      (t(r, u), (u = u.sibling));
                    }
                    l.type === k
                      ? (((o = Fc(l.props.children, r.mode, s, l.key)).return =
                          r),
                        (r = o))
                      : (((s = Oc(
                          l.type,
                          l.key,
                          l.props,
                          null,
                          r.mode,
                          s,
                        )).ref = vo(r, o, l)),
                        (s.return = r),
                        (r = s));
                  }
                  return i(r);
                case E:
                  e: {
                    for (u = l.key; null !== o; ) {
                      if (o.key === u) {
                        if (
                          4 === o.tag &&
                          o.stateNode.containerInfo === l.containerInfo &&
                          o.stateNode.implementation === l.implementation
                        ) {
                          (n(r, o.sibling),
                            ((o = a(o, l.children || [])).return = r),
                            (r = o));
                          break e;
                        }
                        n(r, o);
                        break;
                      }
                      (t(r, o), (o = o.sibling));
                    }
                    (((o = zc(l, r.mode, s)).return = r), (r = o));
                  }
                  return i(r);
                case P:
                  return e(r, o, (u = l._init)(l._payload), s);
              }
              if (te(l)) return h(r, o, l, s);
              if (F(l)) return g(r, o, l, s);
              yo(r, l);
            }
            return ("string" === typeof l && "" !== l) || "number" === typeof l
              ? ((l = "" + l),
                null !== o && 6 === o.tag
                  ? (n(r, o.sibling), ((o = a(o, l)).return = r), (r = o))
                  : (n(r, o), ((o = Mc(l, r.mode, s)).return = r), (r = o)),
                i(r))
              : n(r, o);
          };
        }
        var Eo = wo(!0),
          ko = wo(!1),
          No = Na(null),
          So = null,
          jo = null,
          Co = null;
        function Ro() {
          Co = jo = So = null;
        }
        function _o(e) {
          var t = No.current;
          (Sa(No), (e._currentValue = t));
        }
        function Ao(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function Do(e, t) {
          ((So = e),
            (Co = jo = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (xi = !0), (e.firstContext = null)));
        }
        function Po(e) {
          var t = e._currentValue;
          if (Co !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === jo)
            ) {
              if (null === So) throw Error(o(308));
              ((jo = e), (So.dependencies = { lanes: 0, firstContext: e }));
            } else jo = jo.next = e;
          return t;
        }
        var To = null;
        function Oo(e) {
          null === To ? (To = [e]) : To.push(e);
        }
        function Fo(e, t, n, r) {
          var a = t.interleaved;
          return (
            null === a
              ? ((n.next = n), Oo(t))
              : ((n.next = a.next), (a.next = n)),
            (t.interleaved = n),
            Lo(e, r)
          );
        }
        function Lo(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            ((e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return));
          return 3 === n.tag ? n.stateNode : null;
        }
        var Mo = !1;
        function zo(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Io(e, t) {
          ((e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              }));
        }
        function $o(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Bo(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & Rs))) {
            var a = r.pending;
            return (
              null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (r.pending = t),
              Lo(e, n)
            );
          }
          return (
            null === (a = r.interleaved)
              ? ((t.next = t), Oo(r))
              : ((t.next = a.next), (a.next = t)),
            (r.interleaved = t),
            Lo(e, n)
          );
        }
        function Uo(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            ((n |= r &= e.pendingLanes), (t.lanes = n), vt(e, n));
          }
        }
        function Wo(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              o = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var l = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                (null === o ? (a = o = l) : (o = o.next = l), (n = n.next));
              } while (null !== n);
              null === o ? (a = o = t) : (o = o.next = t);
            } else a = o = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: o,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          (null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t));
        }
        function Ho(e, t, n, r) {
          var a = e.updateQueue;
          Mo = !1;
          var o = a.firstBaseUpdate,
            l = a.lastBaseUpdate,
            i = a.shared.pending;
          if (null !== i) {
            a.shared.pending = null;
            var s = i,
              c = s.next;
            ((s.next = null), null === l ? (o = c) : (l.next = c), (l = s));
            var u = e.alternate;
            null !== u &&
              (i = (u = u.updateQueue).lastBaseUpdate) !== l &&
              (null === i ? (u.firstBaseUpdate = c) : (i.next = c),
              (u.lastBaseUpdate = s));
          }
          if (null !== o) {
            var d = a.baseState;
            for (l = 0, u = c = s = null, i = o; ; ) {
              var f = i.lane,
                p = i.eventTime;
              if ((r & f) === f) {
                null !== u &&
                  (u = u.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: i.tag,
                      payload: i.payload,
                      callback: i.callback,
                      next: null,
                    });
                e: {
                  var m = e,
                    h = i;
                  switch (((f = t), (p = n), h.tag)) {
                    case 1:
                      if ("function" === typeof (m = h.payload)) {
                        d = m.call(p, d, f);
                        break e;
                      }
                      d = m;
                      break e;
                    case 3:
                      m.flags = (-65537 & m.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (f =
                            "function" === typeof (m = h.payload)
                              ? m.call(p, d, f)
                              : m) ||
                        void 0 === f
                      )
                        break e;
                      d = M({}, d, f);
                      break e;
                    case 2:
                      Mo = !0;
                  }
                }
                null !== i.callback &&
                  0 !== i.lane &&
                  ((e.flags |= 64),
                  null === (f = a.effects) ? (a.effects = [i]) : f.push(i));
              } else
                ((p = {
                  eventTime: p,
                  lane: f,
                  tag: i.tag,
                  payload: i.payload,
                  callback: i.callback,
                  next: null,
                }),
                  null === u ? ((c = u = p), (s = d)) : (u = u.next = p),
                  (l |= f));
              if (null === (i = i.next)) {
                if (null === (i = a.shared.pending)) break;
                ((i = (f = i).next),
                  (f.next = null),
                  (a.lastBaseUpdate = f),
                  (a.shared.pending = null));
              }
            }
            if (
              (null === u && (s = d),
              (a.baseState = s),
              (a.firstBaseUpdate = c),
              (a.lastBaseUpdate = u),
              null !== (t = a.shared.interleaved))
            ) {
              a = t;
              do {
                ((l |= a.lane), (a = a.next));
              } while (a !== t);
            } else null === o && (a.shared.lanes = 0);
            ((Ls |= l), (e.lanes = l), (e.memoizedState = d));
          }
        }
        function qo(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                a = r.callback;
              if (null !== a) {
                if (((r.callback = null), (r = n), "function" !== typeof a))
                  throw Error(o(191, a));
                a.call(r);
              }
            }
        }
        var Vo = {},
          Ko = Na(Vo),
          Yo = Na(Vo),
          Qo = Na(Vo);
        function Go(e) {
          if (e === Vo) throw Error(o(174));
          return e;
        }
        function Jo(e, t) {
          switch ((ja(Qo, t), ja(Yo, e), ja(Ko, Vo), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : se(null, "");
              break;
            default:
              t = se(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName),
              );
          }
          (Sa(Ko), ja(Ko, t));
        }
        function Xo() {
          (Sa(Ko), Sa(Yo), Sa(Qo));
        }
        function Zo(e) {
          Go(Qo.current);
          var t = Go(Ko.current),
            n = se(t, e.type);
          t !== n && (ja(Yo, e), ja(Ko, n));
        }
        function el(e) {
          Yo.current === e && (Sa(Ko), Sa(Yo));
        }
        var tl = Na(0);
        function nl(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              ((t.child.return = t), (t = t.child));
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            ((t.sibling.return = t.return), (t = t.sibling));
          }
          return null;
        }
        var rl = [];
        function al() {
          for (var e = 0; e < rl.length; e++)
            rl[e]._workInProgressVersionPrimary = null;
          rl.length = 0;
        }
        var ol = x.ReactCurrentDispatcher,
          ll = x.ReactCurrentBatchConfig,
          il = 0,
          sl = null,
          cl = null,
          ul = null,
          dl = !1,
          fl = !1,
          pl = 0,
          ml = 0;
        function hl() {
          throw Error(o(321));
        }
        function gl(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!ir(e[n], t[n])) return !1;
          return !0;
        }
        function bl(e, t, n, r, a, l) {
          if (
            ((il = l),
            (sl = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (ol.current = null === e || null === e.memoizedState ? ei : ti),
            (e = n(r, a)),
            fl)
          ) {
            l = 0;
            do {
              if (((fl = !1), (pl = 0), 25 <= l)) throw Error(o(301));
              ((l += 1),
                (ul = cl = null),
                (t.updateQueue = null),
                (ol.current = ni),
                (e = n(r, a)));
            } while (fl);
          }
          if (
            ((ol.current = Zl),
            (t = null !== cl && null !== cl.next),
            (il = 0),
            (ul = cl = sl = null),
            (dl = !1),
            t)
          )
            throw Error(o(300));
          return e;
        }
        function vl() {
          var e = 0 !== pl;
          return ((pl = 0), e);
        }
        function yl() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === ul ? (sl.memoizedState = ul = e) : (ul = ul.next = e),
            ul
          );
        }
        function xl() {
          if (null === cl) {
            var e = sl.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = cl.next;
          var t = null === ul ? sl.memoizedState : ul.next;
          if (null !== t) ((ul = t), (cl = e));
          else {
            if (null === e) throw Error(o(310));
            ((e = {
              memoizedState: (cl = e).memoizedState,
              baseState: cl.baseState,
              baseQueue: cl.baseQueue,
              queue: cl.queue,
              next: null,
            }),
              null === ul ? (sl.memoizedState = ul = e) : (ul = ul.next = e));
          }
          return ul;
        }
        function wl(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function El(e) {
          var t = xl(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = cl,
            a = r.baseQueue,
            l = n.pending;
          if (null !== l) {
            if (null !== a) {
              var i = a.next;
              ((a.next = l.next), (l.next = i));
            }
            ((r.baseQueue = a = l), (n.pending = null));
          }
          if (null !== a) {
            ((l = a.next), (r = r.baseState));
            var s = (i = null),
              c = null,
              u = l;
            do {
              var d = u.lane;
              if ((il & d) === d)
                (null !== c &&
                  (c = c.next =
                    {
                      lane: 0,
                      action: u.action,
                      hasEagerState: u.hasEagerState,
                      eagerState: u.eagerState,
                      next: null,
                    }),
                  (r = u.hasEagerState ? u.eagerState : e(r, u.action)));
              else {
                var f = {
                  lane: d,
                  action: u.action,
                  hasEagerState: u.hasEagerState,
                  eagerState: u.eagerState,
                  next: null,
                };
                (null === c ? ((s = c = f), (i = r)) : (c = c.next = f),
                  (sl.lanes |= d),
                  (Ls |= d));
              }
              u = u.next;
            } while (null !== u && u !== l);
            (null === c ? (i = r) : (c.next = s),
              ir(r, t.memoizedState) || (xi = !0),
              (t.memoizedState = r),
              (t.baseState = i),
              (t.baseQueue = c),
              (n.lastRenderedState = r));
          }
          if (null !== (e = n.interleaved)) {
            a = e;
            do {
              ((l = a.lane), (sl.lanes |= l), (Ls |= l), (a = a.next));
            } while (a !== e);
          } else null === a && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function kl(e) {
          var t = xl(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            l = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var i = (a = a.next);
            do {
              ((l = e(l, i.action)), (i = i.next));
            } while (i !== a);
            (ir(l, t.memoizedState) || (xi = !0),
              (t.memoizedState = l),
              null === t.baseQueue && (t.baseState = l),
              (n.lastRenderedState = l));
          }
          return [l, r];
        }
        function Nl() {}
        function Sl(e, t) {
          var n = sl,
            r = xl(),
            a = t(),
            l = !ir(r.memoizedState, a);
          if (
            (l && ((r.memoizedState = a), (xi = !0)),
            (r = r.queue),
            Ml(Rl.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              l ||
              (null !== ul && 1 & ul.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Pl(9, Cl.bind(null, n, r, a, t), void 0, null),
              null === _s)
            )
              throw Error(o(349));
            0 !== (30 & il) || jl(n, t, a);
          }
          return a;
        }
        function jl(e, t, n) {
          ((e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = sl.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (sl.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
                ? (t.stores = [e])
                : n.push(e));
        }
        function Cl(e, t, n, r) {
          ((t.value = n), (t.getSnapshot = r), _l(t) && Al(e));
        }
        function Rl(e, t, n) {
          return n(function () {
            _l(t) && Al(e);
          });
        }
        function _l(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !ir(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Al(e) {
          var t = Lo(e, 1);
          null !== t && nc(t, e, 1, -1);
        }
        function Dl(e) {
          var t = yl();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: wl,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = Ql.bind(null, sl, e)),
            [t.memoizedState, e]
          );
        }
        function Pl(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = sl.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (sl.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
                ? (t.lastEffect = e.next = e)
                : ((r = n.next),
                  (n.next = e),
                  (e.next = r),
                  (t.lastEffect = e)),
            e
          );
        }
        function Tl() {
          return xl().memoizedState;
        }
        function Ol(e, t, n, r) {
          var a = yl();
          ((sl.flags |= e),
            (a.memoizedState = Pl(1 | t, n, void 0, void 0 === r ? null : r)));
        }
        function Fl(e, t, n, r) {
          var a = xl();
          r = void 0 === r ? null : r;
          var o = void 0;
          if (null !== cl) {
            var l = cl.memoizedState;
            if (((o = l.destroy), null !== r && gl(r, l.deps)))
              return void (a.memoizedState = Pl(t, n, o, r));
          }
          ((sl.flags |= e), (a.memoizedState = Pl(1 | t, n, o, r)));
        }
        function Ll(e, t) {
          return Ol(8390656, 8, e, t);
        }
        function Ml(e, t) {
          return Fl(2048, 8, e, t);
        }
        function zl(e, t) {
          return Fl(4, 2, e, t);
        }
        function Il(e, t) {
          return Fl(4, 4, e, t);
        }
        function $l(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
              ? ((e = e()),
                (t.current = e),
                function () {
                  t.current = null;
                })
              : void 0;
        }
        function Bl(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Fl(4, 4, $l.bind(null, t, e), n)
          );
        }
        function Ul() {}
        function Wl(e, t) {
          var n = xl();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && gl(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Hl(e, t) {
          var n = xl();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && gl(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function ql(e, t, n) {
          return 0 === (21 & il)
            ? (e.baseState && ((e.baseState = !1), (xi = !0)),
              (e.memoizedState = n))
            : (ir(n, t) ||
                ((n = ht()), (sl.lanes |= n), (Ls |= n), (e.baseState = !0)),
              t);
        }
        function Vl(e, t) {
          var n = yt;
          ((yt = 0 !== n && 4 > n ? n : 4), e(!0));
          var r = ll.transition;
          ll.transition = {};
          try {
            (e(!1), t());
          } finally {
            ((yt = n), (ll.transition = r));
          }
        }
        function Kl() {
          return xl().memoizedState;
        }
        function Yl(e, t, n) {
          var r = tc(e);
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            Gl(e))
          )
            Jl(t, n);
          else if (null !== (n = Fo(e, t, n, r))) {
            (nc(n, e, r, ec()), Xl(n, t, r));
          }
        }
        function Ql(e, t, n) {
          var r = tc(e),
            a = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (Gl(e)) Jl(t, a);
          else {
            var o = e.alternate;
            if (
              0 === e.lanes &&
              (null === o || 0 === o.lanes) &&
              null !== (o = t.lastRenderedReducer)
            )
              try {
                var l = t.lastRenderedState,
                  i = o(l, n);
                if (((a.hasEagerState = !0), (a.eagerState = i), ir(i, l))) {
                  var s = t.interleaved;
                  return (
                    null === s
                      ? ((a.next = a), Oo(t))
                      : ((a.next = s.next), (s.next = a)),
                    void (t.interleaved = a)
                  );
                }
              } catch (c) {}
            null !== (n = Fo(e, t, a, r)) &&
              (nc(n, e, r, (a = ec())), Xl(n, t, r));
          }
        }
        function Gl(e) {
          var t = e.alternate;
          return e === sl || (null !== t && t === sl);
        }
        function Jl(e, t) {
          fl = dl = !0;
          var n = e.pending;
          (null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t));
        }
        function Xl(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            ((n |= r &= e.pendingLanes), (t.lanes = n), vt(e, n));
          }
        }
        var Zl = {
            readContext: Po,
            useCallback: hl,
            useContext: hl,
            useEffect: hl,
            useImperativeHandle: hl,
            useInsertionEffect: hl,
            useLayoutEffect: hl,
            useMemo: hl,
            useReducer: hl,
            useRef: hl,
            useState: hl,
            useDebugValue: hl,
            useDeferredValue: hl,
            useTransition: hl,
            useMutableSource: hl,
            useSyncExternalStore: hl,
            useId: hl,
            unstable_isNewReconciler: !1,
          },
          ei = {
            readContext: Po,
            useCallback: function (e, t) {
              return ((yl().memoizedState = [e, void 0 === t ? null : t]), e);
            },
            useContext: Po,
            useEffect: Ll,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Ol(4194308, 4, $l.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Ol(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Ol(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = yl();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = yl();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = Yl.bind(null, sl, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return ((e = { current: e }), (yl().memoizedState = e));
            },
            useState: Dl,
            useDebugValue: Ul,
            useDeferredValue: function (e) {
              return (yl().memoizedState = e);
            },
            useTransition: function () {
              var e = Dl(!1),
                t = e[0];
              return (
                (e = Vl.bind(null, e[1])),
                (yl().memoizedState = e),
                [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = sl,
                a = yl();
              if (oo) {
                if (void 0 === n) throw Error(o(407));
                n = n();
              } else {
                if (((n = t()), null === _s)) throw Error(o(349));
                0 !== (30 & il) || jl(r, t, n);
              }
              a.memoizedState = n;
              var l = { value: n, getSnapshot: t };
              return (
                (a.queue = l),
                Ll(Rl.bind(null, r, l, e), [e]),
                (r.flags |= 2048),
                Pl(9, Cl.bind(null, r, l, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = yl(),
                t = _s.identifierPrefix;
              if (oo) {
                var n = Xa;
                ((t =
                  ":" +
                  t +
                  "R" +
                  (n = (Ja & ~(1 << (32 - lt(Ja) - 1))).toString(32) + n)),
                  0 < (n = pl++) && (t += "H" + n.toString(32)),
                  (t += ":"));
              } else t = ":" + t + "r" + (n = ml++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          ti = {
            readContext: Po,
            useCallback: Wl,
            useContext: Po,
            useEffect: Ml,
            useImperativeHandle: Bl,
            useInsertionEffect: zl,
            useLayoutEffect: Il,
            useMemo: Hl,
            useReducer: El,
            useRef: Tl,
            useState: function () {
              return El(wl);
            },
            useDebugValue: Ul,
            useDeferredValue: function (e) {
              return ql(xl(), cl.memoizedState, e);
            },
            useTransition: function () {
              return [El(wl)[0], xl().memoizedState];
            },
            useMutableSource: Nl,
            useSyncExternalStore: Sl,
            useId: Kl,
            unstable_isNewReconciler: !1,
          },
          ni = {
            readContext: Po,
            useCallback: Wl,
            useContext: Po,
            useEffect: Ml,
            useImperativeHandle: Bl,
            useInsertionEffect: zl,
            useLayoutEffect: Il,
            useMemo: Hl,
            useReducer: kl,
            useRef: Tl,
            useState: function () {
              return kl(wl);
            },
            useDebugValue: Ul,
            useDeferredValue: function (e) {
              var t = xl();
              return null === cl
                ? (t.memoizedState = e)
                : ql(t, cl.memoizedState, e);
            },
            useTransition: function () {
              return [kl(wl)[0], xl().memoizedState];
            },
            useMutableSource: Nl,
            useSyncExternalStore: Sl,
            useId: Kl,
            unstable_isNewReconciler: !1,
          };
        function ri(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = M({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        function ai(e, t, n, r) {
          ((n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : M({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n));
        }
        var oi = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && Ue(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = ec(),
              a = tc(e),
              o = $o(r, a);
            ((o.payload = t),
              void 0 !== n && null !== n && (o.callback = n),
              null !== (t = Bo(e, o, a)) && (nc(t, e, a, r), Uo(t, e, a)));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = ec(),
              a = tc(e),
              o = $o(r, a);
            ((o.tag = 1),
              (o.payload = t),
              void 0 !== n && null !== n && (o.callback = n),
              null !== (t = Bo(e, o, a)) && (nc(t, e, a, r), Uo(t, e, a)));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = ec(),
              r = tc(e),
              a = $o(n, r);
            ((a.tag = 2),
              void 0 !== t && null !== t && (a.callback = t),
              null !== (t = Bo(e, a, r)) && (nc(t, e, r, n), Uo(t, e, r)));
          },
        };
        function li(e, t, n, r, a, o, l) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, o, l)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !sr(n, r) ||
                !sr(a, o);
        }
        function ii(e, t, n) {
          var r = !1,
            a = Ca,
            o = t.contextType;
          return (
            "object" === typeof o && null !== o
              ? (o = Po(o))
              : ((a = Pa(t) ? Aa : Ra.current),
                (o = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? Da(e, a)
                  : Ca)),
            (t = new t(n, o)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = oi),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                a),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            t
          );
        }
        function si(e, t, n, r) {
          ((e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && oi.enqueueReplaceState(t, t.state, null));
        }
        function ci(e, t, n, r) {
          var a = e.stateNode;
          ((a.props = n), (a.state = e.memoizedState), (a.refs = {}), zo(e));
          var o = t.contextType;
          ("object" === typeof o && null !== o
            ? (a.context = Po(o))
            : ((o = Pa(t) ? Aa : Ra.current), (a.context = Da(e, o))),
            (a.state = e.memoizedState),
            "function" === typeof (o = t.getDerivedStateFromProps) &&
              (ai(e, t, o, n), (a.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof a.getSnapshotBeforeUpdate ||
              ("function" !== typeof a.UNSAFE_componentWillMount &&
                "function" !== typeof a.componentWillMount) ||
              ((t = a.state),
              "function" === typeof a.componentWillMount &&
                a.componentWillMount(),
              "function" === typeof a.UNSAFE_componentWillMount &&
                a.UNSAFE_componentWillMount(),
              t !== a.state && oi.enqueueReplaceState(a, a.state, null),
              Ho(e, n, a, r),
              (a.state = e.memoizedState)),
            "function" === typeof a.componentDidMount && (e.flags |= 4194308));
        }
        function ui(e, t) {
          try {
            var n = "",
              r = t;
            do {
              ((n += B(r)), (r = r.return));
            } while (r);
            var a = n;
          } catch (o) {
            a = "\nError generating stack: " + o.message + "\n" + o.stack;
          }
          return { value: e, source: t, stack: a, digest: null };
        }
        function di(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function fi(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var pi = "function" === typeof WeakMap ? WeakMap : Map;
        function mi(e, t, n) {
          (((n = $o(-1, n)).tag = 3), (n.payload = { element: null }));
          var r = t.value;
          return (
            (n.callback = function () {
              (Hs || ((Hs = !0), (qs = r)), fi(0, t));
            }),
            n
          );
        }
        function hi(e, t, n) {
          (n = $o(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var a = t.value;
            ((n.payload = function () {
              return r(a);
            }),
              (n.callback = function () {
                fi(0, t);
              }));
          }
          var o = e.stateNode;
          return (
            null !== o &&
              "function" === typeof o.componentDidCatch &&
              (n.callback = function () {
                (fi(0, t),
                  "function" !== typeof r &&
                    (null === Vs ? (Vs = new Set([this])) : Vs.add(this)));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function gi(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new pi();
            var a = new Set();
            r.set(t, a);
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
          a.has(n) || (a.add(n), (e = Sc.bind(null, e, t, n)), t.then(e, e));
        }
        function bi(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function vi(e, t, n, r, a) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = $o(-1, 1)).tag = 2), Bo(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = a), e);
        }
        var yi = x.ReactCurrentOwner,
          xi = !1;
        function wi(e, t, n, r) {
          t.child = null === e ? ko(t, null, n, r) : Eo(t, e.child, n, r);
        }
        function Ei(e, t, n, r, a) {
          n = n.render;
          var o = t.ref;
          return (
            Do(t, a),
            (r = bl(e, t, n, r, o, a)),
            (n = vl()),
            null === e || xi
              ? (oo && n && to(t), (t.flags |= 1), wi(e, t, r, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Hi(e, t, a))
          );
        }
        function ki(e, t, n, r, a) {
          if (null === e) {
            var o = n.type;
            return "function" !== typeof o ||
              Pc(o) ||
              void 0 !== o.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Oc(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = o), Ni(e, t, o, r, a));
          }
          if (((o = e.child), 0 === (e.lanes & a))) {
            var l = o.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : sr)(l, r) &&
              e.ref === t.ref
            )
              return Hi(e, t, a);
          }
          return (
            (t.flags |= 1),
            ((e = Tc(o, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function Ni(e, t, n, r, a) {
          if (null !== e) {
            var o = e.memoizedProps;
            if (sr(o, r) && e.ref === t.ref) {
              if (((xi = !1), (t.pendingProps = r = o), 0 === (e.lanes & a)))
                return ((t.lanes = e.lanes), Hi(e, t, a));
              0 !== (131072 & e.flags) && (xi = !0);
            }
          }
          return Ci(e, t, n, r, a);
        }
        function Si(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            o = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              ((t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                ja(Ts, Ps),
                (Ps |= n));
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== o ? o.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  ja(Ts, Ps),
                  (Ps |= e),
                  null
                );
              ((t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== o ? o.baseLanes : n),
                ja(Ts, Ps),
                (Ps |= r));
            }
          else
            (null !== o
              ? ((r = o.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              ja(Ts, Ps),
              (Ps |= r));
          return (wi(e, t, a, n), t.child);
        }
        function ji(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Ci(e, t, n, r, a) {
          var o = Pa(n) ? Aa : Ra.current;
          return (
            (o = Da(t, o)),
            Do(t, a),
            (n = bl(e, t, n, r, o, a)),
            (r = vl()),
            null === e || xi
              ? (oo && r && to(t), (t.flags |= 1), wi(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Hi(e, t, a))
          );
        }
        function Ri(e, t, n, r, a) {
          if (Pa(n)) {
            var o = !0;
            Ma(t);
          } else o = !1;
          if ((Do(t, a), null === t.stateNode))
            (Wi(e, t), ii(t, n, r), ci(t, n, r, a), (r = !0));
          else if (null === e) {
            var l = t.stateNode,
              i = t.memoizedProps;
            l.props = i;
            var s = l.context,
              c = n.contextType;
            "object" === typeof c && null !== c
              ? (c = Po(c))
              : (c = Da(t, (c = Pa(n) ? Aa : Ra.current)));
            var u = n.getDerivedStateFromProps,
              d =
                "function" === typeof u ||
                "function" === typeof l.getSnapshotBeforeUpdate;
            (d ||
              ("function" !== typeof l.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof l.componentWillReceiveProps) ||
              ((i !== r || s !== c) && si(t, l, r, c)),
              (Mo = !1));
            var f = t.memoizedState;
            ((l.state = f),
              Ho(t, r, l, a),
              (s = t.memoizedState),
              i !== r || f !== s || _a.current || Mo
                ? ("function" === typeof u &&
                    (ai(t, n, u, r), (s = t.memoizedState)),
                  (i = Mo || li(t, n, i, r, f, s, c))
                    ? (d ||
                        ("function" !== typeof l.UNSAFE_componentWillMount &&
                          "function" !== typeof l.componentWillMount) ||
                        ("function" === typeof l.componentWillMount &&
                          l.componentWillMount(),
                        "function" === typeof l.UNSAFE_componentWillMount &&
                          l.UNSAFE_componentWillMount()),
                      "function" === typeof l.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof l.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = s)),
                  (l.props = r),
                  (l.state = s),
                  (l.context = c),
                  (r = i))
                : ("function" === typeof l.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1)));
          } else {
            ((l = t.stateNode),
              Io(e, t),
              (i = t.memoizedProps),
              (c = t.type === t.elementType ? i : ri(t.type, i)),
              (l.props = c),
              (d = t.pendingProps),
              (f = l.context),
              "object" === typeof (s = n.contextType) && null !== s
                ? (s = Po(s))
                : (s = Da(t, (s = Pa(n) ? Aa : Ra.current))));
            var p = n.getDerivedStateFromProps;
            ((u =
              "function" === typeof p ||
              "function" === typeof l.getSnapshotBeforeUpdate) ||
              ("function" !== typeof l.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof l.componentWillReceiveProps) ||
              ((i !== d || f !== s) && si(t, l, r, s)),
              (Mo = !1),
              (f = t.memoizedState),
              (l.state = f),
              Ho(t, r, l, a));
            var m = t.memoizedState;
            i !== d || f !== m || _a.current || Mo
              ? ("function" === typeof p &&
                  (ai(t, n, p, r), (m = t.memoizedState)),
                (c = Mo || li(t, n, c, r, f, m, s) || !1)
                  ? (u ||
                      ("function" !== typeof l.UNSAFE_componentWillUpdate &&
                        "function" !== typeof l.componentWillUpdate) ||
                      ("function" === typeof l.componentWillUpdate &&
                        l.componentWillUpdate(r, m, s),
                      "function" === typeof l.UNSAFE_componentWillUpdate &&
                        l.UNSAFE_componentWillUpdate(r, m, s)),
                    "function" === typeof l.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof l.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof l.componentDidUpdate ||
                      (i === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof l.getSnapshotBeforeUpdate ||
                      (i === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = m)),
                (l.props = r),
                (l.state = m),
                (l.context = s),
                (r = c))
              : ("function" !== typeof l.componentDidUpdate ||
                  (i === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof l.getSnapshotBeforeUpdate ||
                  (i === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return _i(e, t, n, r, o, a);
        }
        function _i(e, t, n, r, a, o) {
          ji(e, t);
          var l = 0 !== (128 & t.flags);
          if (!r && !l) return (a && za(t, n, !1), Hi(e, t, o));
          ((r = t.stateNode), (yi.current = t));
          var i =
            l && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && l
              ? ((t.child = Eo(t, e.child, null, o)),
                (t.child = Eo(t, null, i, o)))
              : wi(e, t, i, o),
            (t.memoizedState = r.state),
            a && za(t, n, !0),
            t.child
          );
        }
        function Ai(e) {
          var t = e.stateNode;
          (t.pendingContext
            ? Fa(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Fa(0, t.context, !1),
            Jo(e, t.containerInfo));
        }
        function Di(e, t, n, r, a) {
          return (ho(), go(a), (t.flags |= 256), wi(e, t, n, r), t.child);
        }
        var Pi,
          Ti,
          Oi,
          Fi = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Li(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Mi(e, t, n) {
          var r,
            a = t.pendingProps,
            l = tl.current,
            i = !1,
            s = 0 !== (128 & t.flags);
          if (
            ((r = s) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & l)),
            r
              ? ((i = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (l |= 1),
            ja(tl, 1 & l),
            null === e)
          )
            return (
              uo(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                      ? (t.lanes = 8)
                      : (t.lanes = 1073741824),
                  null)
                : ((s = a.children),
                  (e = a.fallback),
                  i
                    ? ((a = t.mode),
                      (i = t.child),
                      (s = { mode: "hidden", children: s }),
                      0 === (1 & a) && null !== i
                        ? ((i.childLanes = 0), (i.pendingProps = s))
                        : (i = Lc(s, a, 0, null)),
                      (e = Fc(e, a, n, null)),
                      (i.return = t),
                      (e.return = t),
                      (i.sibling = e),
                      (t.child = i),
                      (t.child.memoizedState = Li(n)),
                      (t.memoizedState = Fi),
                      e)
                    : zi(t, s))
            );
          if (null !== (l = e.memoizedState) && null !== (r = l.dehydrated))
            return (function (e, t, n, r, a, l, i) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Ii(e, t, i, (r = di(Error(o(422))))))
                  : null !== t.memoizedState
                    ? ((t.child = e.child), (t.flags |= 128), null)
                    : ((l = r.fallback),
                      (a = t.mode),
                      (r = Lc(
                        { mode: "visible", children: r.children },
                        a,
                        0,
                        null,
                      )),
                      ((l = Fc(l, a, i, null)).flags |= 2),
                      (r.return = t),
                      (l.return = t),
                      (r.sibling = l),
                      (t.child = r),
                      0 !== (1 & t.mode) && Eo(t, e.child, null, i),
                      (t.child.memoizedState = Li(i)),
                      (t.memoizedState = Fi),
                      l);
              if (0 === (1 & t.mode)) return Ii(e, t, i, null);
              if ("$!" === a.data) {
                if ((r = a.nextSibling && a.nextSibling.dataset))
                  var s = r.dgst;
                return (
                  (r = s),
                  Ii(e, t, i, (r = di((l = Error(o(419))), r, void 0)))
                );
              }
              if (((s = 0 !== (i & e.childLanes)), xi || s)) {
                if (null !== (r = _s)) {
                  switch (i & -i) {
                    case 4:
                      a = 2;
                      break;
                    case 16:
                      a = 8;
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
                      a = 32;
                      break;
                    case 536870912:
                      a = 268435456;
                      break;
                    default:
                      a = 0;
                  }
                  0 !== (a = 0 !== (a & (r.suspendedLanes | i)) ? 0 : a) &&
                    a !== l.retryLane &&
                    ((l.retryLane = a), Lo(e, a), nc(r, e, a, -1));
                }
                return (hc(), Ii(e, t, i, (r = di(Error(o(421))))));
              }
              return "$?" === a.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Cc.bind(null, e)),
                  (a._reactRetry = t),
                  null)
                : ((e = l.treeContext),
                  (ao = ca(a.nextSibling)),
                  (ro = t),
                  (oo = !0),
                  (lo = null),
                  null !== e &&
                    ((Ya[Qa++] = Ja),
                    (Ya[Qa++] = Xa),
                    (Ya[Qa++] = Ga),
                    (Ja = e.id),
                    (Xa = e.overflow),
                    (Ga = t)),
                  (t = zi(t, r.children)),
                  (t.flags |= 4096),
                  t);
            })(e, t, s, a, r, l, n);
          if (i) {
            ((i = a.fallback), (s = t.mode), (r = (l = e.child).sibling));
            var c = { mode: "hidden", children: a.children };
            return (
              0 === (1 & s) && t.child !== l
                ? (((a = t.child).childLanes = 0),
                  (a.pendingProps = c),
                  (t.deletions = null))
                : ((a = Tc(l, c)).subtreeFlags = 14680064 & l.subtreeFlags),
              null !== r
                ? (i = Tc(r, i))
                : ((i = Fc(i, s, n, null)).flags |= 2),
              (i.return = t),
              (a.return = t),
              (a.sibling = i),
              (t.child = a),
              (a = i),
              (i = t.child),
              (s =
                null === (s = e.child.memoizedState)
                  ? Li(n)
                  : {
                      baseLanes: s.baseLanes | n,
                      cachePool: null,
                      transitions: s.transitions,
                    }),
              (i.memoizedState = s),
              (i.childLanes = e.childLanes & ~n),
              (t.memoizedState = Fi),
              a
            );
          }
          return (
            (e = (i = e.child).sibling),
            (a = Tc(i, { mode: "visible", children: a.children })),
            0 === (1 & t.mode) && (a.lanes = n),
            (a.return = t),
            (a.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = a),
            (t.memoizedState = null),
            a
          );
        }
        function zi(e, t) {
          return (
            ((t = Lc(
              { mode: "visible", children: t },
              e.mode,
              0,
              null,
            )).return = e),
            (e.child = t)
          );
        }
        function Ii(e, t, n, r) {
          return (
            null !== r && go(r),
            Eo(t, e.child, null, n),
            ((e = zi(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function $i(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          (null !== r && (r.lanes |= t), Ao(e.return, t, n));
        }
        function Bi(e, t, n, r, a) {
          var o = e.memoizedState;
          null === o
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a,
              })
            : ((o.isBackwards = t),
              (o.rendering = null),
              (o.renderingStartTime = 0),
              (o.last = r),
              (o.tail = n),
              (o.tailMode = a));
        }
        function Ui(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            o = r.tail;
          if ((wi(e, t, r.children, n), 0 !== (2 & (r = tl.current))))
            ((r = (1 & r) | 2), (t.flags |= 128));
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && $i(e, n, t);
                else if (19 === e.tag) $i(e, n, t);
                else if (null !== e.child) {
                  ((e.child.return = e), (e = e.child));
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                ((e.sibling.return = e.return), (e = e.sibling));
              }
            r &= 1;
          }
          if ((ja(tl, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (a) {
              case "forwards":
                for (n = t.child, a = null; null !== n; )
                  (null !== (e = n.alternate) && null === nl(e) && (a = n),
                    (n = n.sibling));
                (null === (n = a)
                  ? ((a = t.child), (t.child = null))
                  : ((a = n.sibling), (n.sibling = null)),
                  Bi(t, !1, a, n, o));
                break;
              case "backwards":
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === nl(e)) {
                    t.child = a;
                    break;
                  }
                  ((e = a.sibling), (a.sibling = n), (n = a), (a = e));
                }
                Bi(t, !0, n, null, o);
                break;
              case "together":
                Bi(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Wi(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function Hi(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Ls |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(o(153));
          if (null !== t.child) {
            for (
              n = Tc((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;
            )
              ((e = e.sibling),
                ((n = n.sibling = Tc(e, e.pendingProps)).return = t));
            n.sibling = null;
          }
          return t.child;
        }
        function qi(e, t) {
          if (!oo)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  (null !== t.alternate && (n = t), (t = t.sibling));
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  (null !== n.alternate && (r = n), (n = n.sibling));
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function Vi(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var a = e.child; null !== a; )
              ((n |= a.lanes | a.childLanes),
                (r |= 14680064 & a.subtreeFlags),
                (r |= 14680064 & a.flags),
                (a.return = e),
                (a = a.sibling));
          else
            for (a = e.child; null !== a; )
              ((n |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling));
          return ((e.subtreeFlags |= r), (e.childLanes = n), t);
        }
        function Ki(e, t, n) {
          var r = t.pendingProps;
          switch ((no(t), t.tag)) {
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
              return (Vi(t), null);
            case 1:
            case 17:
              return (Pa(t.type) && Ta(), Vi(t), null);
            case 3:
              return (
                (r = t.stateNode),
                Xo(),
                Sa(_a),
                Sa(Ra),
                al(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (po(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== lo && (lc(lo), (lo = null)))),
                Vi(t),
                null
              );
            case 5:
              el(t);
              var a = Go(Qo.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                (Ti(e, t, n, r),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(o(166));
                  return (Vi(t), null);
                }
                if (((e = Go(Ko.current)), po(t))) {
                  ((r = t.stateNode), (n = t.type));
                  var l = t.memoizedProps;
                  switch (
                    ((r[fa] = t), (r[pa] = l), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      (Ir("cancel", r), Ir("close", r));
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Ir("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < Fr.length; a++) Ir(Fr[a], r);
                      break;
                    case "source":
                      Ir("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      (Ir("error", r), Ir("load", r));
                      break;
                    case "details":
                      Ir("toggle", r);
                      break;
                    case "input":
                      (G(r, l), Ir("invalid", r));
                      break;
                    case "select":
                      ((r._wrapperState = { wasMultiple: !!l.multiple }),
                        Ir("invalid", r));
                      break;
                    case "textarea":
                      (ae(r, l), Ir("invalid", r));
                  }
                  for (var s in (ve(n, l), (a = null), l))
                    if (l.hasOwnProperty(s)) {
                      var c = l[s];
                      "children" === s
                        ? "string" === typeof c
                          ? r.textContent !== c &&
                            (!0 !== l.suppressHydrationWarning &&
                              Xr(r.textContent, c, e),
                            (a = ["children", c]))
                          : "number" === typeof c &&
                            r.textContent !== "" + c &&
                            (!0 !== l.suppressHydrationWarning &&
                              Xr(r.textContent, c, e),
                            (a = ["children", "" + c]))
                        : i.hasOwnProperty(s) &&
                          null != c &&
                          "onScroll" === s &&
                          Ir("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      (V(r), Z(r, l, !0));
                      break;
                    case "textarea":
                      (V(r), le(r));
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof l.onClick && (r.onclick = Zr);
                  }
                  ((r = a), (t.updateQueue = r), null !== r && (t.flags |= 4));
                } else {
                  ((s = 9 === a.nodeType ? a : a.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = ie(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = s.createElement("div")).innerHTML =
                            "<script><\/script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                          ? (e = s.createElement(n, { is: r.is }))
                          : ((e = s.createElement(n)),
                            "select" === n &&
                              ((s = e),
                              r.multiple
                                ? (s.multiple = !0)
                                : r.size && (s.size = r.size)))
                      : (e = s.createElementNS(e, n)),
                    (e[fa] = t),
                    (e[pa] = r),
                    Pi(e, t),
                    (t.stateNode = e));
                  e: {
                    switch (((s = ye(n, r)), n)) {
                      case "dialog":
                        (Ir("cancel", e), Ir("close", e), (a = r));
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        (Ir("load", e), (a = r));
                        break;
                      case "video":
                      case "audio":
                        for (a = 0; a < Fr.length; a++) Ir(Fr[a], e);
                        a = r;
                        break;
                      case "source":
                        (Ir("error", e), (a = r));
                        break;
                      case "img":
                      case "image":
                      case "link":
                        (Ir("error", e), Ir("load", e), (a = r));
                        break;
                      case "details":
                        (Ir("toggle", e), (a = r));
                        break;
                      case "input":
                        (G(e, r), (a = Q(e, r)), Ir("invalid", e));
                        break;
                      case "option":
                      default:
                        a = r;
                        break;
                      case "select":
                        ((e._wrapperState = { wasMultiple: !!r.multiple }),
                          (a = M({}, r, { value: void 0 })),
                          Ir("invalid", e));
                        break;
                      case "textarea":
                        (ae(e, r), (a = re(e, r)), Ir("invalid", e));
                    }
                    for (l in (ve(n, a), (c = a)))
                      if (c.hasOwnProperty(l)) {
                        var u = c[l];
                        "style" === l
                          ? ge(e, u)
                          : "dangerouslySetInnerHTML" === l
                            ? null != (u = u ? u.__html : void 0) && de(e, u)
                            : "children" === l
                              ? "string" === typeof u
                                ? ("textarea" !== n || "" !== u) && fe(e, u)
                                : "number" === typeof u && fe(e, "" + u)
                              : "suppressContentEditableWarning" !== l &&
                                "suppressHydrationWarning" !== l &&
                                "autoFocus" !== l &&
                                (i.hasOwnProperty(l)
                                  ? null != u &&
                                    "onScroll" === l &&
                                    Ir("scroll", e)
                                  : null != u && y(e, l, u, s));
                      }
                    switch (n) {
                      case "input":
                        (V(e), Z(e, r, !1));
                        break;
                      case "textarea":
                        (V(e), le(e));
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + H(r.value));
                        break;
                      case "select":
                        ((e.multiple = !!r.multiple),
                          null != (l = r.value)
                            ? ne(e, !!r.multiple, l, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0));
                        break;
                      default:
                        "function" === typeof a.onClick && (e.onclick = Zr);
                    }
                    switch (n) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        r = !!r.autoFocus;
                        break e;
                      case "img":
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return (Vi(t), null);
            case 6:
              if (e && null != t.stateNode) Oi(0, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(o(166));
                if (((n = Go(Qo.current)), Go(Ko.current), po(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[fa] = t),
                    (l = r.nodeValue !== n) && null !== (e = ro))
                  )
                    switch (e.tag) {
                      case 3:
                        Xr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Xr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  l && (t.flags |= 4);
                } else
                  (((r = (
                    9 === n.nodeType ? n : n.ownerDocument
                  ).createTextNode(r))[fa] = t),
                    (t.stateNode = r));
              }
              return (Vi(t), null);
            case 13:
              if (
                (Sa(tl),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  oo &&
                  null !== ao &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  (mo(), ho(), (t.flags |= 98560), (l = !1));
                else if (((l = po(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!l) throw Error(o(318));
                    if (
                      !(l =
                        null !== (l = t.memoizedState) ? l.dehydrated : null)
                    )
                      throw Error(o(317));
                    l[fa] = t;
                  } else
                    (ho(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4));
                  (Vi(t), (l = !1));
                } else (null !== lo && (lc(lo), (lo = null)), (l = !0));
                if (!l) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & tl.current)
                        ? 0 === Os && (Os = 3)
                        : hc())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Vi(t),
                  null);
            case 4:
              return (
                Xo(),
                null === e && Ur(t.stateNode.containerInfo),
                Vi(t),
                null
              );
            case 10:
              return (_o(t.type._context), Vi(t), null);
            case 19:
              if ((Sa(tl), null === (l = t.memoizedState)))
                return (Vi(t), null);
              if (((r = 0 !== (128 & t.flags)), null === (s = l.rendering)))
                if (r) qi(l, !1);
                else {
                  if (0 !== Os || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (s = nl(e))) {
                        for (
                          t.flags |= 128,
                            qi(l, !1),
                            null !== (r = s.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;
                        )
                          ((e = r),
                            ((l = n).flags &= 14680066),
                            null === (s = l.alternate)
                              ? ((l.childLanes = 0),
                                (l.lanes = e),
                                (l.child = null),
                                (l.subtreeFlags = 0),
                                (l.memoizedProps = null),
                                (l.memoizedState = null),
                                (l.updateQueue = null),
                                (l.dependencies = null),
                                (l.stateNode = null))
                              : ((l.childLanes = s.childLanes),
                                (l.lanes = s.lanes),
                                (l.child = s.child),
                                (l.subtreeFlags = 0),
                                (l.deletions = null),
                                (l.memoizedProps = s.memoizedProps),
                                (l.memoizedState = s.memoizedState),
                                (l.updateQueue = s.updateQueue),
                                (l.type = s.type),
                                (e = s.dependencies),
                                (l.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling));
                        return (ja(tl, (1 & tl.current) | 2), t.child);
                      }
                      e = e.sibling;
                    }
                  null !== l.tail &&
                    Je() > Us &&
                    ((t.flags |= 128),
                    (r = !0),
                    qi(l, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = nl(s))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      qi(l, !0),
                      null === l.tail &&
                        "hidden" === l.tailMode &&
                        !s.alternate &&
                        !oo)
                    )
                      return (Vi(t), null);
                  } else
                    2 * Je() - l.renderingStartTime > Us &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      qi(l, !1),
                      (t.lanes = 4194304));
                l.isBackwards
                  ? ((s.sibling = t.child), (t.child = s))
                  : (null !== (n = l.last) ? (n.sibling = s) : (t.child = s),
                    (l.last = s));
              }
              return null !== l.tail
                ? ((t = l.tail),
                  (l.rendering = t),
                  (l.tail = t.sibling),
                  (l.renderingStartTime = Je()),
                  (t.sibling = null),
                  (n = tl.current),
                  ja(tl, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (Vi(t), null);
            case 22:
            case 23:
              return (
                dc(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & Ps) &&
                    (Vi(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : Vi(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(o(156, t.tag));
        }
        function Yi(e, t) {
          switch ((no(t), t.tag)) {
            case 1:
              return (
                Pa(t.type) && Ta(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                Xo(),
                Sa(_a),
                Sa(Ra),
                al(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return (el(t), null);
            case 13:
              if (
                (Sa(tl),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(o(340));
                ho();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return (Sa(tl), null);
            case 4:
              return (Xo(), null);
            case 10:
              return (_o(t.type._context), null);
            case 22:
            case 23:
              return (dc(), null);
            default:
              return null;
          }
        }
        ((Pi = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              ((n.child.return = n), (n = n.child));
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            ((n.sibling.return = n.return), (n = n.sibling));
          }
        }),
          (Ti = function (e, t, n, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              ((e = t.stateNode), Go(Ko.current));
              var o,
                l = null;
              switch (n) {
                case "input":
                  ((a = Q(e, a)), (r = Q(e, r)), (l = []));
                  break;
                case "select":
                  ((a = M({}, a, { value: void 0 })),
                    (r = M({}, r, { value: void 0 })),
                    (l = []));
                  break;
                case "textarea":
                  ((a = re(e, a)), (r = re(e, r)), (l = []));
                  break;
                default:
                  "function" !== typeof a.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = Zr);
              }
              for (u in (ve(n, r), (n = null), a))
                if (!r.hasOwnProperty(u) && a.hasOwnProperty(u) && null != a[u])
                  if ("style" === u) {
                    var s = a[u];
                    for (o in s)
                      s.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== u &&
                      "children" !== u &&
                      "suppressContentEditableWarning" !== u &&
                      "suppressHydrationWarning" !== u &&
                      "autoFocus" !== u &&
                      (i.hasOwnProperty(u)
                        ? l || (l = [])
                        : (l = l || []).push(u, null));
              for (u in r) {
                var c = r[u];
                if (
                  ((s = null != a ? a[u] : void 0),
                  r.hasOwnProperty(u) && c !== s && (null != c || null != s))
                )
                  if ("style" === u)
                    if (s) {
                      for (o in s)
                        !s.hasOwnProperty(o) ||
                          (c && c.hasOwnProperty(o)) ||
                          (n || (n = {}), (n[o] = ""));
                      for (o in c)
                        c.hasOwnProperty(o) &&
                          s[o] !== c[o] &&
                          (n || (n = {}), (n[o] = c[o]));
                    } else (n || (l || (l = []), l.push(u, n)), (n = c));
                  else
                    "dangerouslySetInnerHTML" === u
                      ? ((c = c ? c.__html : void 0),
                        (s = s ? s.__html : void 0),
                        null != c && s !== c && (l = l || []).push(u, c))
                      : "children" === u
                        ? ("string" !== typeof c && "number" !== typeof c) ||
                          (l = l || []).push(u, "" + c)
                        : "suppressContentEditableWarning" !== u &&
                          "suppressHydrationWarning" !== u &&
                          (i.hasOwnProperty(u)
                            ? (null != c && "onScroll" === u && Ir("scroll", e),
                              l || s === c || (l = []))
                            : (l = l || []).push(u, c));
              }
              n && (l = l || []).push("style", n);
              var u = l;
              (t.updateQueue = u) && (t.flags |= 4);
            }
          }),
          (Oi = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          }));
        var Qi = !1,
          Gi = !1,
          Ji = "function" === typeof WeakSet ? WeakSet : Set,
          Xi = null;
        function Zi(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                Nc(e, t, r);
              }
            else n.current = null;
        }
        function es(e, t, n) {
          try {
            n();
          } catch (r) {
            Nc(e, t, r);
          }
        }
        var ts = !1;
        function ns(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = (r = r.next);
            do {
              if ((a.tag & e) === e) {
                var o = a.destroy;
                ((a.destroy = void 0), void 0 !== o && es(t, n, o));
              }
              a = a.next;
            } while (a !== r);
          }
        }
        function rs(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function as(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            (e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e));
          }
        }
        function os(e) {
          var t = e.alternate;
          (null !== t && ((e.alternate = null), os(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[fa],
              delete t[pa],
              delete t[ha],
              delete t[ga],
              delete t[ba]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null));
        }
        function ls(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function is(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || ls(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;
            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              ((e.child.return = e), (e = e.child));
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function ss(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            ((e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Zr)));
          else if (4 !== r && null !== (e = e.child))
            for (ss(e, t, n), e = e.sibling; null !== e; )
              (ss(e, t, n), (e = e.sibling));
        }
        function cs(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
          else if (4 !== r && null !== (e = e.child))
            for (cs(e, t, n), e = e.sibling; null !== e; )
              (cs(e, t, n), (e = e.sibling));
        }
        var us = null,
          ds = !1;
        function fs(e, t, n) {
          for (n = n.child; null !== n; ) (ps(e, t, n), (n = n.sibling));
        }
        function ps(e, t, n) {
          if (ot && "function" === typeof ot.onCommitFiberUnmount)
            try {
              ot.onCommitFiberUnmount(at, n);
            } catch (i) {}
          switch (n.tag) {
            case 5:
              Gi || Zi(n, t);
            case 6:
              var r = us,
                a = ds;
              ((us = null),
                fs(e, t, n),
                (ds = a),
                null !== (us = r) &&
                  (ds
                    ? ((e = us),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : us.removeChild(n.stateNode)));
              break;
            case 18:
              null !== us &&
                (ds
                  ? ((e = us),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? sa(e.parentNode, n)
                      : 1 === e.nodeType && sa(e, n),
                    Ut(e))
                  : sa(us, n.stateNode));
              break;
            case 4:
              ((r = us),
                (a = ds),
                (us = n.stateNode.containerInfo),
                (ds = !0),
                fs(e, t, n),
                (us = r),
                (ds = a));
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Gi &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                a = r = r.next;
                do {
                  var o = a,
                    l = o.destroy;
                  ((o = o.tag),
                    void 0 !== l &&
                      (0 !== (2 & o) || 0 !== (4 & o)) &&
                      es(n, t, l),
                    (a = a.next));
                } while (a !== r);
              }
              fs(e, t, n);
              break;
            case 1:
              if (
                !Gi &&
                (Zi(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  ((r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount());
                } catch (i) {
                  Nc(n, t, i);
                }
              fs(e, t, n);
              break;
            case 21:
              fs(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Gi = (r = Gi) || null !== n.memoizedState),
                  fs(e, t, n),
                  (Gi = r))
                : fs(e, t, n);
              break;
            default:
              fs(e, t, n);
          }
        }
        function ms(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            (null === n && (n = e.stateNode = new Ji()),
              t.forEach(function (t) {
                var r = Rc.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              }));
          }
        }
        function hs(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var a = n[r];
              try {
                var l = e,
                  i = t,
                  s = i;
                e: for (; null !== s; ) {
                  switch (s.tag) {
                    case 5:
                      ((us = s.stateNode), (ds = !1));
                      break e;
                    case 3:
                    case 4:
                      ((us = s.stateNode.containerInfo), (ds = !0));
                      break e;
                  }
                  s = s.return;
                }
                if (null === us) throw Error(o(160));
                (ps(l, i, a), (us = null), (ds = !1));
                var c = a.alternate;
                (null !== c && (c.return = null), (a.return = null));
              } catch (u) {
                Nc(a, t, u);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) (gs(t, e), (t = t.sibling));
        }
        function gs(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((hs(t, e), bs(e), 4 & r)) {
                try {
                  (ns(3, e, e.return), rs(3, e));
                } catch (g) {
                  Nc(e, e.return, g);
                }
                try {
                  ns(5, e, e.return);
                } catch (g) {
                  Nc(e, e.return, g);
                }
              }
              break;
            case 1:
              (hs(t, e), bs(e), 512 & r && null !== n && Zi(n, n.return));
              break;
            case 5:
              if (
                (hs(t, e),
                bs(e),
                512 & r && null !== n && Zi(n, n.return),
                32 & e.flags)
              ) {
                var a = e.stateNode;
                try {
                  fe(a, "");
                } catch (g) {
                  Nc(e, e.return, g);
                }
              }
              if (4 & r && null != (a = e.stateNode)) {
                var l = e.memoizedProps,
                  i = null !== n ? n.memoizedProps : l,
                  s = e.type,
                  c = e.updateQueue;
                if (((e.updateQueue = null), null !== c))
                  try {
                    ("input" === s &&
                      "radio" === l.type &&
                      null != l.name &&
                      J(a, l),
                      ye(s, i));
                    var u = ye(s, l);
                    for (i = 0; i < c.length; i += 2) {
                      var d = c[i],
                        f = c[i + 1];
                      "style" === d
                        ? ge(a, f)
                        : "dangerouslySetInnerHTML" === d
                          ? de(a, f)
                          : "children" === d
                            ? fe(a, f)
                            : y(a, d, f, u);
                    }
                    switch (s) {
                      case "input":
                        X(a, l);
                        break;
                      case "textarea":
                        oe(a, l);
                        break;
                      case "select":
                        var p = a._wrapperState.wasMultiple;
                        a._wrapperState.wasMultiple = !!l.multiple;
                        var m = l.value;
                        null != m
                          ? ne(a, !!l.multiple, m, !1)
                          : p !== !!l.multiple &&
                            (null != l.defaultValue
                              ? ne(a, !!l.multiple, l.defaultValue, !0)
                              : ne(a, !!l.multiple, l.multiple ? [] : "", !1));
                    }
                    a[pa] = l;
                  } catch (g) {
                    Nc(e, e.return, g);
                  }
              }
              break;
            case 6:
              if ((hs(t, e), bs(e), 4 & r)) {
                if (null === e.stateNode) throw Error(o(162));
                ((a = e.stateNode), (l = e.memoizedProps));
                try {
                  a.nodeValue = l;
                } catch (g) {
                  Nc(e, e.return, g);
                }
              }
              break;
            case 3:
              if (
                (hs(t, e),
                bs(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Ut(t.containerInfo);
                } catch (g) {
                  Nc(e, e.return, g);
                }
              break;
            case 4:
            default:
              (hs(t, e), bs(e));
              break;
            case 13:
              (hs(t, e),
                bs(e),
                8192 & (a = e.child).flags &&
                  ((l = null !== a.memoizedState),
                  (a.stateNode.isHidden = l),
                  !l ||
                    (null !== a.alternate &&
                      null !== a.alternate.memoizedState) ||
                    (Bs = Je())),
                4 & r && ms(e));
              break;
            case 22:
              if (
                ((d = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Gi = (u = Gi) || d), hs(t, e), (Gi = u))
                  : hs(t, e),
                bs(e),
                8192 & r)
              ) {
                if (
                  ((u = null !== e.memoizedState),
                  (e.stateNode.isHidden = u) && !d && 0 !== (1 & e.mode))
                )
                  for (Xi = e, d = e.child; null !== d; ) {
                    for (f = Xi = d; null !== Xi; ) {
                      switch (((m = (p = Xi).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          ns(4, p, p.return);
                          break;
                        case 1:
                          Zi(p, p.return);
                          var h = p.stateNode;
                          if ("function" === typeof h.componentWillUnmount) {
                            ((r = p), (n = p.return));
                            try {
                              ((t = r),
                                (h.props = t.memoizedProps),
                                (h.state = t.memoizedState),
                                h.componentWillUnmount());
                            } catch (g) {
                              Nc(r, n, g);
                            }
                          }
                          break;
                        case 5:
                          Zi(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            ws(f);
                            continue;
                          }
                      }
                      null !== m ? ((m.return = p), (Xi = m)) : ws(f);
                    }
                    d = d.sibling;
                  }
                e: for (d = null, f = e; ; ) {
                  if (5 === f.tag) {
                    if (null === d) {
                      d = f;
                      try {
                        ((a = f.stateNode),
                          u
                            ? "function" === typeof (l = a.style).setProperty
                              ? l.setProperty("display", "none", "important")
                              : (l.display = "none")
                            : ((s = f.stateNode),
                              (i =
                                void 0 !== (c = f.memoizedProps.style) &&
                                null !== c &&
                                c.hasOwnProperty("display")
                                  ? c.display
                                  : null),
                              (s.style.display = he("display", i))));
                      } catch (g) {
                        Nc(e, e.return, g);
                      }
                    }
                  } else if (6 === f.tag) {
                    if (null === d)
                      try {
                        f.stateNode.nodeValue = u ? "" : f.memoizedProps;
                      } catch (g) {
                        Nc(e, e.return, g);
                      }
                  } else if (
                    ((22 !== f.tag && 23 !== f.tag) ||
                      null === f.memoizedState ||
                      f === e) &&
                    null !== f.child
                  ) {
                    ((f.child.return = f), (f = f.child));
                    continue;
                  }
                  if (f === e) break e;
                  for (; null === f.sibling; ) {
                    if (null === f.return || f.return === e) break e;
                    (d === f && (d = null), (f = f.return));
                  }
                  (d === f && (d = null),
                    (f.sibling.return = f.return),
                    (f = f.sibling));
                }
              }
              break;
            case 19:
              (hs(t, e), bs(e), 4 & r && ms(e));
            case 21:
          }
        }
        function bs(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (ls(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(o(160));
              }
              switch (r.tag) {
                case 5:
                  var a = r.stateNode;
                  (32 & r.flags && (fe(a, ""), (r.flags &= -33)),
                    cs(e, is(e), a));
                  break;
                case 3:
                case 4:
                  var l = r.stateNode.containerInfo;
                  ss(e, is(e), l);
                  break;
                default:
                  throw Error(o(161));
              }
            } catch (i) {
              Nc(e, e.return, i);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function vs(e, t, n) {
          ((Xi = e), ys(e, t, n));
        }
        function ys(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Xi; ) {
            var a = Xi,
              o = a.child;
            if (22 === a.tag && r) {
              var l = null !== a.memoizedState || Qi;
              if (!l) {
                var i = a.alternate,
                  s = (null !== i && null !== i.memoizedState) || Gi;
                i = Qi;
                var c = Gi;
                if (((Qi = l), (Gi = s) && !c))
                  for (Xi = a; null !== Xi; )
                    ((s = (l = Xi).child),
                      22 === l.tag && null !== l.memoizedState
                        ? Es(a)
                        : null !== s
                          ? ((s.return = l), (Xi = s))
                          : Es(a));
                for (; null !== o; ) ((Xi = o), ys(o, t, n), (o = o.sibling));
                ((Xi = a), (Qi = i), (Gi = c));
              }
              xs(e);
            } else
              0 !== (8772 & a.subtreeFlags) && null !== o
                ? ((o.return = a), (Xi = o))
                : xs(e);
          }
        }
        function xs(e) {
          for (; null !== Xi; ) {
            var t = Xi;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Gi || rs(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Gi)
                        if (null === n) r.componentDidMount();
                        else {
                          var a =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : ri(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            a,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate,
                          );
                        }
                      var l = t.updateQueue;
                      null !== l && qo(t, l, r);
                      break;
                    case 3:
                      var i = t.updateQueue;
                      if (null !== i) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        qo(t, i, n);
                      }
                      break;
                    case 5:
                      var s = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = s;
                        var c = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            c.autoFocus && n.focus();
                            break;
                          case "img":
                            c.src && (n.src = c.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var u = t.alternate;
                        if (null !== u) {
                          var d = u.memoizedState;
                          if (null !== d) {
                            var f = d.dehydrated;
                            null !== f && Ut(f);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(o(163));
                  }
                Gi || (512 & t.flags && as(t));
              } catch (Oa) {
                Nc(t, t.return, Oa);
              }
            }
            if (t === e) {
              Xi = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              ((n.return = t.return), (Xi = n));
              break;
            }
            Xi = t.return;
          }
        }
        function ws(e) {
          for (; null !== Xi; ) {
            var t = Xi;
            if (t === e) {
              Xi = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              ((n.return = t.return), (Xi = n));
              break;
            }
            Xi = t.return;
          }
        }
        function Es(e) {
          for (; null !== Xi; ) {
            var t = Xi;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    rs(4, t);
                  } catch (s) {
                    Nc(t, n, s);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var a = t.return;
                    try {
                      r.componentDidMount();
                    } catch (s) {
                      Nc(t, a, s);
                    }
                  }
                  var o = t.return;
                  try {
                    as(t);
                  } catch (s) {
                    Nc(t, o, s);
                  }
                  break;
                case 5:
                  var l = t.return;
                  try {
                    as(t);
                  } catch (s) {
                    Nc(t, l, s);
                  }
              }
            } catch (s) {
              Nc(t, t.return, s);
            }
            if (t === e) {
              Xi = null;
              break;
            }
            var i = t.sibling;
            if (null !== i) {
              ((i.return = t.return), (Xi = i));
              break;
            }
            Xi = t.return;
          }
        }
        var ks,
          Ns = Math.ceil,
          Ss = x.ReactCurrentDispatcher,
          js = x.ReactCurrentOwner,
          Cs = x.ReactCurrentBatchConfig,
          Rs = 0,
          _s = null,
          As = null,
          Ds = 0,
          Ps = 0,
          Ts = Na(0),
          Os = 0,
          Fs = null,
          Ls = 0,
          Ms = 0,
          zs = 0,
          Is = null,
          $s = null,
          Bs = 0,
          Us = 1 / 0,
          Ws = null,
          Hs = !1,
          qs = null,
          Vs = null,
          Ks = !1,
          Ys = null,
          Qs = 0,
          Gs = 0,
          Js = null,
          Xs = -1,
          Zs = 0;
        function ec() {
          return 0 !== (6 & Rs) ? Je() : -1 !== Xs ? Xs : (Xs = Je());
        }
        function tc(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & Rs) && 0 !== Ds
              ? Ds & -Ds
              : null !== bo.transition
                ? (0 === Zs && (Zs = ht()), Zs)
                : 0 !== (e = yt)
                  ? e
                  : (e = void 0 === (e = window.event) ? 16 : Gt(e.type));
        }
        function nc(e, t, n, r) {
          if (50 < Gs) throw ((Gs = 0), (Js = null), Error(o(185)));
          (bt(e, n, r),
            (0 !== (2 & Rs) && e === _s) ||
              (e === _s && (0 === (2 & Rs) && (Ms |= n), 4 === Os && ic(e, Ds)),
              rc(e, r),
              1 === n &&
                0 === Rs &&
                0 === (1 & t.mode) &&
                ((Us = Je() + 500), $a && Wa())));
        }
        function rc(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                a = e.expirationTimes,
                o = e.pendingLanes;
              0 < o;
            ) {
              var l = 31 - lt(o),
                i = 1 << l,
                s = a[l];
              (-1 === s
                ? (0 !== (i & n) && 0 === (i & r)) || (a[l] = pt(i, t))
                : s <= t && (e.expiredLanes |= i),
                (o &= ~i));
            }
          })(e, t);
          var r = ft(e, e === _s ? Ds : 0);
          if (0 === r)
            (null !== n && Ye(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0));
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Ye(n), 1 === t))
              (0 === e.tag
                ? (function (e) {
                    (($a = !0), Ua(e));
                  })(sc.bind(null, e))
                : Ua(sc.bind(null, e)),
                la(function () {
                  0 === (6 & Rs) && Wa();
                }),
                (n = null));
            else {
              switch (xt(r)) {
                case 1:
                  n = Ze;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = _c(n, ac.bind(null, e));
            }
            ((e.callbackPriority = t), (e.callbackNode = n));
          }
        }
        function ac(e, t) {
          if (((Xs = -1), (Zs = 0), 0 !== (6 & Rs))) throw Error(o(327));
          var n = e.callbackNode;
          if (Ec() && e.callbackNode !== n) return null;
          var r = ft(e, e === _s ? Ds : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = gc(e, r);
          else {
            t = r;
            var a = Rs;
            Rs |= 2;
            var l = mc();
            for (
              (_s === e && Ds === t) ||
              ((Ws = null), (Us = Je() + 500), fc(e, t));
              ;
            )
              try {
                vc();
                break;
              } catch (s) {
                pc(e, s);
              }
            (Ro(),
              (Ss.current = l),
              (Rs = a),
              null !== As ? (t = 0) : ((_s = null), (Ds = 0), (t = Os)));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (a = mt(e)) && ((r = a), (t = oc(e, a))),
              1 === t)
            )
              throw ((n = Fs), fc(e, 0), ic(e, r), rc(e, Je()), n);
            if (6 === t) ic(e, r);
            else {
              if (
                ((a = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var a = n[r],
                              o = a.getSnapshot;
                            a = a.value;
                            try {
                              if (!ir(o(), a)) return !1;
                            } catch (i) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        ((n.return = t), (t = n));
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        ((t.sibling.return = t.return), (t = t.sibling));
                      }
                    }
                    return !0;
                  })(a) &&
                  (2 === (t = gc(e, r)) &&
                    0 !== (l = mt(e)) &&
                    ((r = l), (t = oc(e, l))),
                  1 === t))
              )
                throw ((n = Fs), fc(e, 0), ic(e, r), rc(e, Je()), n);
              switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(o(345));
                case 2:
                case 5:
                  wc(e, $s, Ws);
                  break;
                case 3:
                  if (
                    (ic(e, r),
                    (130023424 & r) === r && 10 < (t = Bs + 500 - Je()))
                  ) {
                    if (0 !== ft(e, 0)) break;
                    if (((a = e.suspendedLanes) & r) !== r) {
                      (ec(), (e.pingedLanes |= e.suspendedLanes & a));
                      break;
                    }
                    e.timeoutHandle = ra(wc.bind(null, e, $s, Ws), t);
                    break;
                  }
                  wc(e, $s, Ws);
                  break;
                case 4:
                  if ((ic(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, a = -1; 0 < r; ) {
                    var i = 31 - lt(r);
                    ((l = 1 << i), (i = t[i]) > a && (a = i), (r &= ~l));
                  }
                  if (
                    ((r = a),
                    10 <
                      (r =
                        (120 > (r = Je() - r)
                          ? 120
                          : 480 > r
                            ? 480
                            : 1080 > r
                              ? 1080
                              : 1920 > r
                                ? 1920
                                : 3e3 > r
                                  ? 3e3
                                  : 4320 > r
                                    ? 4320
                                    : 1960 * Ns(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ra(wc.bind(null, e, $s, Ws), r);
                    break;
                  }
                  wc(e, $s, Ws);
                  break;
                default:
                  throw Error(o(329));
              }
            }
          }
          return (rc(e, Je()), e.callbackNode === n ? ac.bind(null, e) : null);
        }
        function oc(e, t) {
          var n = Is;
          return (
            e.current.memoizedState.isDehydrated && (fc(e, t).flags |= 256),
            2 !== (e = gc(e, t)) && ((t = $s), ($s = n), null !== t && lc(t)),
            e
          );
        }
        function lc(e) {
          null === $s ? ($s = e) : $s.push.apply($s, e);
        }
        function ic(e, t) {
          for (
            t &= ~zs,
              t &= ~Ms,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;
          ) {
            var n = 31 - lt(t),
              r = 1 << n;
            ((e[n] = -1), (t &= ~r));
          }
        }
        function sc(e) {
          if (0 !== (6 & Rs)) throw Error(o(327));
          Ec();
          var t = ft(e, 0);
          if (0 === (1 & t)) return (rc(e, Je()), null);
          var n = gc(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = mt(e);
            0 !== r && ((t = r), (n = oc(e, r)));
          }
          if (1 === n) throw ((n = Fs), fc(e, 0), ic(e, t), rc(e, Je()), n);
          if (6 === n) throw Error(o(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            wc(e, $s, Ws),
            rc(e, Je()),
            null
          );
        }
        function cc(e, t) {
          var n = Rs;
          Rs |= 1;
          try {
            return e(t);
          } finally {
            0 === (Rs = n) && ((Us = Je() + 500), $a && Wa());
          }
        }
        function uc(e) {
          null !== Ys && 0 === Ys.tag && 0 === (6 & Rs) && Ec();
          var t = Rs;
          Rs |= 1;
          var n = Cs.transition,
            r = yt;
          try {
            if (((Cs.transition = null), (yt = 1), e)) return e();
          } finally {
            ((yt = r), (Cs.transition = n), 0 === (6 & (Rs = t)) && Wa());
          }
        }
        function dc() {
          ((Ps = Ts.current), Sa(Ts));
        }
        function fc(e, t) {
          ((e.finishedWork = null), (e.finishedLanes = 0));
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), aa(n)), null !== As))
            for (n = As.return; null !== n; ) {
              var r = n;
              switch ((no(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    Ta();
                  break;
                case 3:
                  (Xo(), Sa(_a), Sa(Ra), al());
                  break;
                case 5:
                  el(r);
                  break;
                case 4:
                  Xo();
                  break;
                case 13:
                case 19:
                  Sa(tl);
                  break;
                case 10:
                  _o(r.type._context);
                  break;
                case 22:
                case 23:
                  dc();
              }
              n = n.return;
            }
          if (
            ((_s = e),
            (As = e = Tc(e.current, null)),
            (Ds = Ps = t),
            (Os = 0),
            (Fs = null),
            (zs = Ms = Ls = 0),
            ($s = Is = null),
            null !== To)
          ) {
            for (t = 0; t < To.length; t++)
              if (null !== (r = (n = To[t]).interleaved)) {
                n.interleaved = null;
                var a = r.next,
                  o = n.pending;
                if (null !== o) {
                  var l = o.next;
                  ((o.next = a), (r.next = l));
                }
                n.pending = r;
              }
            To = null;
          }
          return e;
        }
        function pc(e, t) {
          for (;;) {
            var n = As;
            try {
              if ((Ro(), (ol.current = Zl), dl)) {
                for (var r = sl.memoizedState; null !== r; ) {
                  var a = r.queue;
                  (null !== a && (a.pending = null), (r = r.next));
                }
                dl = !1;
              }
              if (
                ((il = 0),
                (ul = cl = sl = null),
                (fl = !1),
                (pl = 0),
                (js.current = null),
                null === n || null === n.return)
              ) {
                ((Os = 1), (Fs = t), (As = null));
                break;
              }
              e: {
                var l = e,
                  i = n.return,
                  s = n,
                  c = t;
                if (
                  ((t = Ds),
                  (s.flags |= 32768),
                  null !== c &&
                    "object" === typeof c &&
                    "function" === typeof c.then)
                ) {
                  var u = c,
                    d = s,
                    f = d.tag;
                  if (0 === (1 & d.mode) && (0 === f || 11 === f || 15 === f)) {
                    var p = d.alternate;
                    p
                      ? ((d.updateQueue = p.updateQueue),
                        (d.memoizedState = p.memoizedState),
                        (d.lanes = p.lanes))
                      : ((d.updateQueue = null), (d.memoizedState = null));
                  }
                  var m = bi(i);
                  if (null !== m) {
                    ((m.flags &= -257),
                      vi(m, i, s, 0, t),
                      1 & m.mode && gi(l, u, t),
                      (c = u));
                    var h = (t = m).updateQueue;
                    if (null === h) {
                      var g = new Set();
                      (g.add(c), (t.updateQueue = g));
                    } else h.add(c);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    (gi(l, u, t), hc());
                    break e;
                  }
                  c = Error(o(426));
                } else if (oo && 1 & s.mode) {
                  var b = bi(i);
                  if (null !== b) {
                    (0 === (65536 & b.flags) && (b.flags |= 256),
                      vi(b, i, s, 0, t),
                      go(ui(c, s)));
                    break e;
                  }
                }
                ((l = c = ui(c, s)),
                  4 !== Os && (Os = 2),
                  null === Is ? (Is = [l]) : Is.push(l),
                  (l = i));
                do {
                  switch (l.tag) {
                    case 3:
                      ((l.flags |= 65536),
                        (t &= -t),
                        (l.lanes |= t),
                        Wo(l, mi(0, c, t)));
                      break e;
                    case 1:
                      s = c;
                      var v = l.type,
                        y = l.stateNode;
                      if (
                        0 === (128 & l.flags) &&
                        ("function" === typeof v.getDerivedStateFromError ||
                          (null !== y &&
                            "function" === typeof y.componentDidCatch &&
                            (null === Vs || !Vs.has(y))))
                      ) {
                        ((l.flags |= 65536),
                          (t &= -t),
                          (l.lanes |= t),
                          Wo(l, hi(l, s, t)));
                        break e;
                      }
                  }
                  l = l.return;
                } while (null !== l);
              }
              xc(n);
            } catch (x) {
              ((t = x), As === n && null !== n && (As = n = n.return));
              continue;
            }
            break;
          }
        }
        function mc() {
          var e = Ss.current;
          return ((Ss.current = Zl), null === e ? Zl : e);
        }
        function hc() {
          ((0 !== Os && 3 !== Os && 2 !== Os) || (Os = 4),
            null === _s ||
              (0 === (268435455 & Ls) && 0 === (268435455 & Ms)) ||
              ic(_s, Ds));
        }
        function gc(e, t) {
          var n = Rs;
          Rs |= 2;
          var r = mc();
          for ((_s === e && Ds === t) || ((Ws = null), fc(e, t)); ; )
            try {
              bc();
              break;
            } catch (a) {
              pc(e, a);
            }
          if ((Ro(), (Rs = n), (Ss.current = r), null !== As))
            throw Error(o(261));
          return ((_s = null), (Ds = 0), Os);
        }
        function bc() {
          for (; null !== As; ) yc(As);
        }
        function vc() {
          for (; null !== As && !Qe(); ) yc(As);
        }
        function yc(e) {
          var t = ks(e.alternate, e, Ps);
          ((e.memoizedProps = e.pendingProps),
            null === t ? xc(e) : (As = t),
            (js.current = null));
        }
        function xc(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = Ki(n, t, Ps))) return void (As = n);
            } else {
              if (null !== (n = Yi(n, t)))
                return ((n.flags &= 32767), void (As = n));
              if (null === e) return ((Os = 6), void (As = null));
              ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
            }
            if (null !== (t = t.sibling)) return void (As = t);
            As = t = e;
          } while (null !== t);
          0 === Os && (Os = 5);
        }
        function wc(e, t, n) {
          var r = yt,
            a = Cs.transition;
          try {
            ((Cs.transition = null),
              (yt = 1),
              (function (e, t, n, r) {
                do {
                  Ec();
                } while (null !== Ys);
                if (0 !== (6 & Rs)) throw Error(o(327));
                n = e.finishedWork;
                var a = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(o(177));
                ((e.callbackNode = null), (e.callbackPriority = 0));
                var l = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    ((e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements));
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var a = 31 - lt(n),
                        o = 1 << a;
                      ((t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~o));
                    }
                  })(e, l),
                  e === _s && ((As = _s = null), (Ds = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    Ks ||
                    ((Ks = !0),
                    _c(tt, function () {
                      return (Ec(), null);
                    })),
                  (l = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || l)
                ) {
                  ((l = Cs.transition), (Cs.transition = null));
                  var i = yt;
                  yt = 1;
                  var s = Rs;
                  ((Rs |= 4),
                    (js.current = null),
                    (function (e, t) {
                      if (((ea = Ht), pr((e = fr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var a = r.anchorOffset,
                                l = r.focusNode;
                              r = r.focusOffset;
                              try {
                                (n.nodeType, l.nodeType);
                              } catch (w) {
                                n = null;
                                break e;
                              }
                              var i = 0,
                                s = -1,
                                c = -1,
                                u = 0,
                                d = 0,
                                f = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var m;
                                  f !== n ||
                                    (0 !== a && 3 !== f.nodeType) ||
                                    (s = i + a),
                                    f !== l ||
                                      (0 !== r && 3 !== f.nodeType) ||
                                      (c = i + r),
                                    3 === f.nodeType &&
                                      (i += f.nodeValue.length),
                                    null !== (m = f.firstChild);
                                )
                                  ((p = f), (f = m));
                                for (;;) {
                                  if (f === e) break t;
                                  if (
                                    (p === n && ++u === a && (s = i),
                                    p === l && ++d === r && (c = i),
                                    null !== (m = f.nextSibling))
                                  )
                                    break;
                                  p = (f = p).parentNode;
                                }
                                f = m;
                              }
                              n =
                                -1 === s || -1 === c
                                  ? null
                                  : { start: s, end: c };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        ta = { focusedElem: e, selectionRange: n },
                          Ht = !1,
                          Xi = t;
                        null !== Xi;
                      )
                        if (
                          ((e = (t = Xi).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          ((e.return = t), (Xi = e));
                        else
                          for (; null !== Xi; ) {
                            t = Xi;
                            try {
                              var h = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== h) {
                                      var g = h.memoizedProps,
                                        b = h.memoizedState,
                                        v = t.stateNode,
                                        y = v.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? g
                                            : ri(t.type, g),
                                          b,
                                        );
                                      v.__reactInternalSnapshotBeforeUpdate = y;
                                    }
                                    break;
                                  case 3:
                                    var x = t.stateNode.containerInfo;
                                    1 === x.nodeType
                                      ? (x.textContent = "")
                                      : 9 === x.nodeType &&
                                        x.documentElement &&
                                        x.removeChild(x.documentElement);
                                    break;
                                  default:
                                    throw Error(o(163));
                                }
                            } catch (w) {
                              Nc(t, t.return, w);
                            }
                            if (null !== (e = t.sibling)) {
                              ((e.return = t.return), (Xi = e));
                              break;
                            }
                            Xi = t.return;
                          }
                      ((h = ts), (ts = !1));
                    })(e, n),
                    gs(n, e),
                    mr(ta),
                    (Ht = !!ea),
                    (ta = ea = null),
                    (e.current = n),
                    vs(n, e, a),
                    Ge(),
                    (Rs = s),
                    (yt = i),
                    (Cs.transition = l));
                } else e.current = n;
                if (
                  (Ks && ((Ks = !1), (Ys = e), (Qs = a)),
                  (l = e.pendingLanes),
                  0 === l && (Vs = null),
                  (function (e) {
                    if (ot && "function" === typeof ot.onCommitFiberRoot)
                      try {
                        ot.onCommitFiberRoot(
                          at,
                          e,
                          void 0,
                          128 === (128 & e.current.flags),
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  rc(e, Je()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    ((a = t[n]),
                      r(a.value, {
                        componentStack: a.stack,
                        digest: a.digest,
                      }));
                if (Hs) throw ((Hs = !1), (e = qs), (qs = null), e);
                (0 !== (1 & Qs) && 0 !== e.tag && Ec(),
                  (l = e.pendingLanes),
                  0 !== (1 & l)
                    ? e === Js
                      ? Gs++
                      : ((Gs = 0), (Js = e))
                    : (Gs = 0),
                  Wa());
              })(e, t, n, r));
          } finally {
            ((Cs.transition = a), (yt = r));
          }
          return null;
        }
        function Ec() {
          if (null !== Ys) {
            var e = xt(Qs),
              t = Cs.transition,
              n = yt;
            try {
              if (((Cs.transition = null), (yt = 16 > e ? 16 : e), null === Ys))
                var r = !1;
              else {
                if (((e = Ys), (Ys = null), (Qs = 0), 0 !== (6 & Rs)))
                  throw Error(o(331));
                var a = Rs;
                for (Rs |= 4, Xi = e.current; null !== Xi; ) {
                  var l = Xi,
                    i = l.child;
                  if (0 !== (16 & Xi.flags)) {
                    var s = l.deletions;
                    if (null !== s) {
                      for (var c = 0; c < s.length; c++) {
                        var u = s[c];
                        for (Xi = u; null !== Xi; ) {
                          var d = Xi;
                          switch (d.tag) {
                            case 0:
                            case 11:
                            case 15:
                              ns(8, d, l);
                          }
                          var f = d.child;
                          if (null !== f) ((f.return = d), (Xi = f));
                          else
                            for (; null !== Xi; ) {
                              var p = (d = Xi).sibling,
                                m = d.return;
                              if ((os(d), d === u)) {
                                Xi = null;
                                break;
                              }
                              if (null !== p) {
                                ((p.return = m), (Xi = p));
                                break;
                              }
                              Xi = m;
                            }
                        }
                      }
                      var h = l.alternate;
                      if (null !== h) {
                        var g = h.child;
                        if (null !== g) {
                          h.child = null;
                          do {
                            var b = g.sibling;
                            ((g.sibling = null), (g = b));
                          } while (null !== g);
                        }
                      }
                      Xi = l;
                    }
                  }
                  if (0 !== (2064 & l.subtreeFlags) && null !== i)
                    ((i.return = l), (Xi = i));
                  else
                    e: for (; null !== Xi; ) {
                      if (0 !== (2048 & (l = Xi).flags))
                        switch (l.tag) {
                          case 0:
                          case 11:
                          case 15:
                            ns(9, l, l.return);
                        }
                      var v = l.sibling;
                      if (null !== v) {
                        ((v.return = l.return), (Xi = v));
                        break e;
                      }
                      Xi = l.return;
                    }
                }
                var y = e.current;
                for (Xi = y; null !== Xi; ) {
                  var x = (i = Xi).child;
                  if (0 !== (2064 & i.subtreeFlags) && null !== x)
                    ((x.return = i), (Xi = x));
                  else
                    e: for (i = y; null !== Xi; ) {
                      if (0 !== (2048 & (s = Xi).flags))
                        try {
                          switch (s.tag) {
                            case 0:
                            case 11:
                            case 15:
                              rs(9, s);
                          }
                        } catch (E) {
                          Nc(s, s.return, E);
                        }
                      if (s === i) {
                        Xi = null;
                        break e;
                      }
                      var w = s.sibling;
                      if (null !== w) {
                        ((w.return = s.return), (Xi = w));
                        break e;
                      }
                      Xi = s.return;
                    }
                }
                if (
                  ((Rs = a),
                  Wa(),
                  ot && "function" === typeof ot.onPostCommitFiberRoot)
                )
                  try {
                    ot.onPostCommitFiberRoot(at, e);
                  } catch (E) {}
                r = !0;
              }
              return r;
            } finally {
              ((yt = n), (Cs.transition = t));
            }
          }
          return !1;
        }
        function kc(e, t, n) {
          ((e = Bo(e, (t = mi(0, (t = ui(n, t)), 1)), 1)),
            (t = ec()),
            null !== e && (bt(e, 1, t), rc(e, t)));
        }
        function Nc(e, t, n) {
          if (3 === e.tag) kc(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                kc(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === Vs || !Vs.has(r)))
                ) {
                  ((t = Bo(t, (e = hi(t, (e = ui(n, e)), 1)), 1)),
                    (e = ec()),
                    null !== t && (bt(t, 1, e), rc(t, e)));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Sc(e, t, n) {
          var r = e.pingCache;
          (null !== r && r.delete(t),
            (t = ec()),
            (e.pingedLanes |= e.suspendedLanes & n),
            _s === e &&
              (Ds & n) === n &&
              (4 === Os ||
              (3 === Os && (130023424 & Ds) === Ds && 500 > Je() - Bs)
                ? fc(e, 0)
                : (zs |= n)),
            rc(e, t));
        }
        function jc(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ut), 0 === (130023424 & (ut <<= 1)) && (ut = 4194304)));
          var n = ec();
          null !== (e = Lo(e, t)) && (bt(e, t, n), rc(e, n));
        }
        function Cc(e) {
          var t = e.memoizedState,
            n = 0;
          (null !== t && (n = t.retryLane), jc(e, n));
        }
        function Rc(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                a = e.memoizedState;
              null !== a && (n = a.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(o(314));
          }
          (null !== r && r.delete(t), jc(e, n));
        }
        function _c(e, t) {
          return Ke(e, t);
        }
        function Ac(e, t, n, r) {
          ((this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null));
        }
        function Dc(e, t, n, r) {
          return new Ac(e, t, n, r);
        }
        function Pc(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Tc(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Dc(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Oc(e, t, n, r, a, l) {
          var i = 2;
          if (((r = e), "function" === typeof e)) Pc(e) && (i = 1);
          else if ("string" === typeof e) i = 5;
          else
            e: switch (e) {
              case k:
                return Fc(n.children, a, l, t);
              case N:
                ((i = 8), (a |= 8));
                break;
              case S:
                return (
                  ((e = Dc(12, n, t, 2 | a)).elementType = S),
                  (e.lanes = l),
                  e
                );
              case _:
                return (
                  ((e = Dc(13, n, t, a)).elementType = _),
                  (e.lanes = l),
                  e
                );
              case A:
                return (
                  ((e = Dc(19, n, t, a)).elementType = A),
                  (e.lanes = l),
                  e
                );
              case T:
                return Lc(n, a, l, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case j:
                      i = 10;
                      break e;
                    case C:
                      i = 9;
                      break e;
                    case R:
                      i = 11;
                      break e;
                    case D:
                      i = 14;
                      break e;
                    case P:
                      ((i = 16), (r = null));
                      break e;
                  }
                throw Error(o(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Dc(i, n, t, a)).elementType = e),
            (t.type = r),
            (t.lanes = l),
            t
          );
        }
        function Fc(e, t, n, r) {
          return (((e = Dc(7, e, r, t)).lanes = n), e);
        }
        function Lc(e, t, n, r) {
          return (
            ((e = Dc(22, e, r, t)).elementType = T),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Mc(e, t, n) {
          return (((e = Dc(6, e, null, t)).lanes = n), e);
        }
        function zc(e, t, n) {
          return (
            ((t = Dc(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t,
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Ic(e, t, n, r, a) {
          ((this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = gt(0)),
            (this.expirationTimes = gt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = gt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = a),
            (this.mutableSourceEagerHydrationData = null));
        }
        function $c(e, t, n, r, a, o, l, i, s) {
          return (
            (e = new Ic(e, t, n, i, s)),
            1 === t ? ((t = 1), !0 === o && (t |= 8)) : (t = 0),
            (o = Dc(3, null, null, t)),
            (e.current = o),
            (o.stateNode = e),
            (o.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            zo(o),
            e
          );
        }
        function Bc(e) {
          if (!e) return Ca;
          e: {
            if (Ue((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(o(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Pa(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(o(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Pa(n)) return La(e, n, t);
          }
          return t;
        }
        function Uc(e, t, n, r, a, o, l, i, s) {
          return (
            ((e = $c(n, r, !0, e, 0, o, 0, i, s)).context = Bc(null)),
            (n = e.current),
            ((o = $o((r = ec()), (a = tc(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            Bo(n, o, a),
            (e.current.lanes = a),
            bt(e, a, r),
            rc(e, r),
            e
          );
        }
        function Wc(e, t, n, r) {
          var a = t.current,
            o = ec(),
            l = tc(a);
          return (
            (n = Bc(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = $o(o, l)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Bo(a, t, l)) && (nc(e, a, l, o), Uo(e, a, l)),
            l
          );
        }
        function Hc(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function qc(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function Vc(e, t) {
          (qc(e, t), (e = e.alternate) && qc(e, t));
        }
        ks = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || _a.current) xi = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (xi = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        (Ai(t), ho());
                        break;
                      case 5:
                        Zo(t);
                        break;
                      case 1:
                        Pa(t.type) && Ma(t);
                        break;
                      case 4:
                        Jo(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          a = t.memoizedProps.value;
                        (ja(No, r._currentValue), (r._currentValue = a));
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (ja(tl, 1 & tl.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                              ? Mi(e, t, n)
                              : (ja(tl, 1 & tl.current),
                                null !== (e = Hi(e, t, n)) ? e.sibling : null);
                        ja(tl, 1 & tl.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Ui(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          ja(tl, tl.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return ((t.lanes = 0), Si(e, t, n));
                    }
                    return Hi(e, t, n);
                  })(e, t, n)
                );
              xi = 0 !== (131072 & e.flags);
            }
          else
            ((xi = !1), oo && 0 !== (1048576 & t.flags) && eo(t, Ka, t.index));
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              (Wi(e, t), (e = t.pendingProps));
              var a = Da(t, Ra.current);
              (Do(t, n), (a = bl(null, t, r, e, a, n)));
              var l = vl();
              return (
                (t.flags |= 1),
                "object" === typeof a &&
                null !== a &&
                "function" === typeof a.render &&
                void 0 === a.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Pa(r) ? ((l = !0), Ma(t)) : (l = !1),
                    (t.memoizedState =
                      null !== a.state && void 0 !== a.state ? a.state : null),
                    zo(t),
                    (a.updater = oi),
                    (t.stateNode = a),
                    (a._reactInternals = t),
                    ci(t, r, e, n),
                    (t = _i(null, t, r, !0, l, n)))
                  : ((t.tag = 0),
                    oo && l && to(t),
                    wi(null, t, a, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (Wi(e, t),
                  (e = t.pendingProps),
                  (r = (a = r._init)(r._payload)),
                  (t.type = r),
                  (a = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return Pc(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === R) return 11;
                        if (e === D) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = ri(r, e)),
                  a)
                ) {
                  case 0:
                    t = Ci(null, t, r, e, n);
                    break e;
                  case 1:
                    t = Ri(null, t, r, e, n);
                    break e;
                  case 11:
                    t = Ei(null, t, r, e, n);
                    break e;
                  case 14:
                    t = ki(null, t, r, ri(r.type, e), n);
                    break e;
                }
                throw Error(o(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Ci(e, t, r, (a = t.elementType === r ? a : ri(r, a)), n)
              );
            case 1:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Ri(e, t, r, (a = t.elementType === r ? a : ri(r, a)), n)
              );
            case 3:
              e: {
                if ((Ai(t), null === e)) throw Error(o(387));
                ((r = t.pendingProps),
                  (a = (l = t.memoizedState).element),
                  Io(e, t),
                  Ho(t, r, null, n));
                var i = t.memoizedState;
                if (((r = i.element), l.isDehydrated)) {
                  if (
                    ((l = {
                      element: r,
                      isDehydrated: !1,
                      cache: i.cache,
                      pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                      transitions: i.transitions,
                    }),
                    (t.updateQueue.baseState = l),
                    (t.memoizedState = l),
                    256 & t.flags)
                  ) {
                    t = Di(e, t, r, n, (a = ui(Error(o(423)), t)));
                    break e;
                  }
                  if (r !== a) {
                    t = Di(e, t, r, n, (a = ui(Error(o(424)), t)));
                    break e;
                  }
                  for (
                    ao = ca(t.stateNode.containerInfo.firstChild),
                      ro = t,
                      oo = !0,
                      lo = null,
                      n = ko(t, null, r, n),
                      t.child = n;
                    n;
                  )
                    ((n.flags = (-3 & n.flags) | 4096), (n = n.sibling));
                } else {
                  if ((ho(), r === a)) {
                    t = Hi(e, t, n);
                    break e;
                  }
                  wi(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                Zo(t),
                null === e && uo(t),
                (r = t.type),
                (a = t.pendingProps),
                (l = null !== e ? e.memoizedProps : null),
                (i = a.children),
                na(r, a)
                  ? (i = null)
                  : null !== l && na(r, l) && (t.flags |= 32),
                ji(e, t),
                wi(e, t, i, n),
                t.child
              );
            case 6:
              return (null === e && uo(t), null);
            case 13:
              return Mi(e, t, n);
            case 4:
              return (
                Jo(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Eo(t, null, r, n)) : wi(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Ei(e, t, r, (a = t.elementType === r ? a : ri(r, a)), n)
              );
            case 7:
              return (wi(e, t, t.pendingProps, n), t.child);
            case 8:
            case 12:
              return (wi(e, t, t.pendingProps.children, n), t.child);
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (a = t.pendingProps),
                  (l = t.memoizedProps),
                  (i = a.value),
                  ja(No, r._currentValue),
                  (r._currentValue = i),
                  null !== l)
                )
                  if (ir(l.value, i)) {
                    if (l.children === a.children && !_a.current) {
                      t = Hi(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (l = t.child) && (l.return = t);
                      null !== l;
                    ) {
                      var s = l.dependencies;
                      if (null !== s) {
                        i = l.child;
                        for (var c = s.firstContext; null !== c; ) {
                          if (c.context === r) {
                            if (1 === l.tag) {
                              (c = $o(-1, n & -n)).tag = 2;
                              var u = l.updateQueue;
                              if (null !== u) {
                                var d = (u = u.shared).pending;
                                (null === d
                                  ? (c.next = c)
                                  : ((c.next = d.next), (d.next = c)),
                                  (u.pending = c));
                              }
                            }
                            ((l.lanes |= n),
                              null !== (c = l.alternate) && (c.lanes |= n),
                              Ao(l.return, n, t),
                              (s.lanes |= n));
                            break;
                          }
                          c = c.next;
                        }
                      } else if (10 === l.tag)
                        i = l.type === t.type ? null : l.child;
                      else if (18 === l.tag) {
                        if (null === (i = l.return)) throw Error(o(341));
                        ((i.lanes |= n),
                          null !== (s = i.alternate) && (s.lanes |= n),
                          Ao(i, n, t),
                          (i = l.sibling));
                      } else i = l.child;
                      if (null !== i) i.return = l;
                      else
                        for (i = l; null !== i; ) {
                          if (i === t) {
                            i = null;
                            break;
                          }
                          if (null !== (l = i.sibling)) {
                            ((l.return = i.return), (i = l));
                            break;
                          }
                          i = i.return;
                        }
                      l = i;
                    }
                (wi(e, t, a.children, n), (t = t.child));
              }
              return t;
            case 9:
              return (
                (a = t.type),
                (r = t.pendingProps.children),
                Do(t, n),
                (r = r((a = Po(a)))),
                (t.flags |= 1),
                wi(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (a = ri((r = t.type), t.pendingProps)),
                ki(e, t, r, (a = ri(r.type, a)), n)
              );
            case 15:
              return Ni(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : ri(r, a)),
                Wi(e, t),
                (t.tag = 1),
                Pa(r) ? ((e = !0), Ma(t)) : (e = !1),
                Do(t, n),
                ii(t, r, a),
                ci(t, r, a, n),
                _i(null, t, r, !0, e, n)
              );
            case 19:
              return Ui(e, t, n);
            case 22:
              return Si(e, t, n);
          }
          throw Error(o(156, t.tag));
        };
        var Kc =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Yc(e) {
          this._internalRoot = e;
        }
        function Qc(e) {
          this._internalRoot = e;
        }
        function Gc(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Jc(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Xc() {}
        function Zc(e, t, n, r, a) {
          var o = n._reactRootContainer;
          if (o) {
            var l = o;
            if ("function" === typeof a) {
              var i = a;
              a = function () {
                var e = Hc(l);
                i.call(e);
              };
            }
            Wc(t, l, e, a);
          } else
            l = (function (e, t, n, r, a) {
              if (a) {
                if ("function" === typeof r) {
                  var o = r;
                  r = function () {
                    var e = Hc(l);
                    o.call(e);
                  };
                }
                var l = Uc(t, r, e, 0, null, !1, 0, "", Xc);
                return (
                  (e._reactRootContainer = l),
                  (e[ma] = l.current),
                  Ur(8 === e.nodeType ? e.parentNode : e),
                  uc(),
                  l
                );
              }
              for (; (a = e.lastChild); ) e.removeChild(a);
              if ("function" === typeof r) {
                var i = r;
                r = function () {
                  var e = Hc(s);
                  i.call(e);
                };
              }
              var s = $c(e, 0, !1, null, 0, !1, 0, "", Xc);
              return (
                (e._reactRootContainer = s),
                (e[ma] = s.current),
                Ur(8 === e.nodeType ? e.parentNode : e),
                uc(function () {
                  Wc(t, s, n, r);
                }),
                s
              );
            })(n, t, e, a, r);
          return Hc(l);
        }
        ((Qc.prototype.render = Yc.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(o(409));
            Wc(e, t, null, null);
          }),
          (Qc.prototype.unmount = Yc.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                (uc(function () {
                  Wc(null, e, null, null);
                }),
                  (t[ma] = null));
              }
            }),
          (Qc.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = Nt();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < Tt.length && 0 !== t && t < Tt[n].priority;
                n++
              );
              (Tt.splice(n, 0, e), 0 === n && Mt(e));
            }
          }),
          (wt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = dt(t.pendingLanes);
                  0 !== n &&
                    (vt(t, 1 | n),
                    rc(t, Je()),
                    0 === (6 & Rs) && ((Us = Je() + 500), Wa()));
                }
                break;
              case 13:
                (uc(function () {
                  var t = Lo(e, 1);
                  if (null !== t) {
                    var n = ec();
                    nc(t, e, 1, n);
                  }
                }),
                  Vc(e, 1));
            }
          }),
          (Et = function (e) {
            if (13 === e.tag) {
              var t = Lo(e, 134217728);
              if (null !== t) nc(t, e, 134217728, ec());
              Vc(e, 134217728);
            }
          }),
          (kt = function (e) {
            if (13 === e.tag) {
              var t = tc(e),
                n = Lo(e, t);
              if (null !== n) nc(n, e, t, ec());
              Vc(e, t);
            }
          }),
          (Nt = function () {
            return yt;
          }),
          (St = function (e, t) {
            var n = yt;
            try {
              return ((yt = e), t());
            } finally {
              yt = n;
            }
          }),
          (Ee = function (e, t, n) {
            switch (t) {
              case "input":
                if ((X(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" +
                        JSON.stringify("" + t) +
                        '][type="radio"]',
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var a = wa(r);
                      if (!a) throw Error(o(90));
                      (K(r), X(r, a));
                    }
                  }
                }
                break;
              case "textarea":
                oe(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (Re = cc),
          (_e = uc));
        var eu = {
            usingClientEntryPoint: !1,
            Events: [ya, xa, wa, je, Ce, cc],
          },
          tu = {
            findFiberByHostInstance: va,
            bundleType: 0,
            version: "18.3.1",
            rendererPackageName: "react-dom",
          },
          nu = {
            bundleType: tu.bundleType,
            version: tu.version,
            rendererPackageName: tu.rendererPackageName,
            rendererConfig: tu.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: x.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = qe(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              tu.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var ru = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!ru.isDisabled && ru.supportsFiber)
            try {
              ((at = ru.inject(nu)), (ot = ru));
            } catch (ue) {}
        }
        ((t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = eu),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Gc(t)) throw Error(o(200));
            return (function (e, t, n) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: E,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Gc(e)) throw Error(o(299));
            var n = !1,
              r = "",
              a = Kc;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
              (t = $c(e, 1, !1, null, 0, n, 0, r, a)),
              (e[ma] = t.current),
              Ur(8 === e.nodeType ? e.parentNode : e),
              new Yc(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(o(188));
              throw ((e = Object.keys(e).join(",")), Error(o(268, e)));
            }
            return (e = null === (e = qe(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return uc(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Jc(t)) throw Error(o(200));
            return Zc(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Gc(e)) throw Error(o(405));
            var r = (null != n && n.hydratedSources) || null,
              a = !1,
              l = "",
              i = Kc;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (l = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (i = n.onRecoverableError)),
              (t = Uc(t, null, e, 1, null != n ? n : null, a, 0, l, i)),
              (e[ma] = t.current),
              Ur(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                ((a = (a = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, a])
                    : t.mutableSourceEagerHydrationData.push(n, a));
            return new Qc(t);
          }),
          (t.render = function (e, t, n) {
            if (!Jc(t)) throw Error(o(200));
            return Zc(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Jc(e)) throw Error(o(40));
            return (
              !!e._reactRootContainer &&
              (uc(function () {
                Zc(null, null, e, !1, function () {
                  ((e._reactRootContainer = null), (e[ma] = null));
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = cc),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Jc(n)) throw Error(o(200));
            if (null == e || void 0 === e._reactInternals) throw Error(o(38));
            return Zc(e, t, n, !1, r);
          }),
          (t.version = "18.3.1-next-f1338f8080-20240426"));
      },
      391(e, t, n) {
        var r = n(950);
        ((t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot));
      },
      950(e, t, n) {
        (!(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(730)));
      },
      153(e, t, n) {
        var r = n(43),
          a = Symbol.for("react.element"),
          o = Symbol.for("react.fragment"),
          l = Object.prototype.hasOwnProperty,
          i =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          s = { key: !0, ref: !0, __self: !0, __source: !0 };
        function c(e, t, n) {
          var r,
            o = {},
            c = null,
            u = null;
          for (r in (void 0 !== n && (c = "" + n),
          void 0 !== t.key && (c = "" + t.key),
          void 0 !== t.ref && (u = t.ref),
          t))
            l.call(t, r) && !s.hasOwnProperty(r) && (o[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === o[r] && (o[r] = t[r]);
          return {
            $$typeof: a,
            type: e,
            key: c,
            ref: u,
            props: o,
            _owner: i.current,
          };
        }
        ((t.Fragment = o), (t.jsx = c), (t.jsxs = c));
      },
      202(e, t) {
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          o = Symbol.for("react.strict_mode"),
          l = Symbol.for("react.profiler"),
          i = Symbol.for("react.provider"),
          s = Symbol.for("react.context"),
          c = Symbol.for("react.forward_ref"),
          u = Symbol.for("react.suspense"),
          d = Symbol.for("react.memo"),
          f = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var m = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          h = Object.assign,
          g = {};
        function b(e, t, n) {
          ((this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || m));
        }
        function v() {}
        function y(e, t, n) {
          ((this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || m));
        }
        ((b.prototype.isReactComponent = {}),
          (b.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (b.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (v.prototype = b.prototype));
        var x = (y.prototype = new v());
        ((x.constructor = y), h(x, b.prototype), (x.isPureReactComponent = !0));
        var w = Array.isArray,
          E = Object.prototype.hasOwnProperty,
          k = { current: null },
          N = { key: !0, ref: !0, __self: !0, __source: !0 };
        function S(e, t, r) {
          var a,
            o = {},
            l = null,
            i = null;
          if (null != t)
            for (a in (void 0 !== t.ref && (i = t.ref),
            void 0 !== t.key && (l = "" + t.key),
            t))
              E.call(t, a) && !N.hasOwnProperty(a) && (o[a] = t[a]);
          var s = arguments.length - 2;
          if (1 === s) o.children = r;
          else if (1 < s) {
            for (var c = Array(s), u = 0; u < s; u++) c[u] = arguments[u + 2];
            o.children = c;
          }
          if (e && e.defaultProps)
            for (a in (s = e.defaultProps)) void 0 === o[a] && (o[a] = s[a]);
          return {
            $$typeof: n,
            type: e,
            key: l,
            ref: i,
            props: o,
            _owner: k.current,
          };
        }
        function j(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var C = /\/+/g;
        function R(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function _(e, t, a, o, l) {
          var i = typeof e;
          ("undefined" !== i && "boolean" !== i) || (e = null);
          var s = !1;
          if (null === e) s = !0;
          else
            switch (i) {
              case "string":
              case "number":
                s = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    s = !0;
                }
            }
          if (s)
            return (
              (l = l((s = e))),
              (e = "" === o ? "." + R(s, 0) : o),
              w(l)
                ? ((a = ""),
                  null != e && (a = e.replace(C, "$&/") + "/"),
                  _(l, t, a, "", function (e) {
                    return e;
                  }))
                : null != l &&
                  (j(l) &&
                    (l = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      l,
                      a +
                        (!l.key || (s && s.key === l.key)
                          ? ""
                          : ("" + l.key).replace(C, "$&/") + "/") +
                        e,
                    )),
                  t.push(l)),
              1
            );
          if (((s = 0), (o = "" === o ? "." : o + ":"), w(e)))
            for (var c = 0; c < e.length; c++) {
              var u = o + R((i = e[c]), c);
              s += _(i, t, a, u, l);
            }
          else if (
            ((u = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (p && e[p]) || e["@@iterator"])
                  ? e
                  : null;
            })(e)),
            "function" === typeof u)
          )
            for (e = u.call(e), c = 0; !(i = e.next()).done; )
              s += _((i = i.value), t, a, (u = o + R(i, c++)), l);
          else if ("object" === i)
            throw (
              (t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead.",
              )
            );
          return s;
        }
        function A(e, t, n) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            _(e, r, "", "", function (e) {
              return t.call(n, e, a++);
            }),
            r
          );
        }
        function D(e) {
          if (-1 === e._status) {
            var t = e._result;
            ((t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              },
            ),
              -1 === e._status && ((e._status = 0), (e._result = t)));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var P = { current: null },
          T = { transition: null },
          O = {
            ReactCurrentDispatcher: P,
            ReactCurrentBatchConfig: T,
            ReactCurrentOwner: k,
          };
        function F() {
          throw Error(
            "act(...) is not supported in production builds of React.",
          );
        }
        ((t.Children = {
          map: A,
          forEach: function (e, t, n) {
            A(
              e,
              function () {
                t.apply(this, arguments);
              },
              n,
            );
          },
          count: function (e) {
            var t = 0;
            return (
              A(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              A(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!j(e))
              throw Error(
                "React.Children.only expected to receive a single React element child.",
              );
            return e;
          },
        }),
          (t.Component = b),
          (t.Fragment = a),
          (t.Profiler = l),
          (t.PureComponent = y),
          (t.StrictMode = o),
          (t.Suspense = u),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = O),
          (t.act = F),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  ".",
              );
            var a = h({}, e.props),
              o = e.key,
              l = e.ref,
              i = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((l = t.ref), (i = k.current)),
                void 0 !== t.key && (o = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var s = e.type.defaultProps;
              for (c in t)
                E.call(t, c) &&
                  !N.hasOwnProperty(c) &&
                  (a[c] = void 0 === t[c] && void 0 !== s ? s[c] : t[c]);
            }
            var c = arguments.length - 2;
            if (1 === c) a.children = r;
            else if (1 < c) {
              s = Array(c);
              for (var u = 0; u < c; u++) s[u] = arguments[u + 2];
              a.children = s;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: o,
              ref: l,
              props: a,
              _owner: i,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: s,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: i, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = S),
          (t.createFactory = function (e) {
            var t = S.bind(null, e);
            return ((t.type = e), t);
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: c, render: e };
          }),
          (t.isValidElement = j),
          (t.lazy = function (e) {
            return {
              $$typeof: f,
              _payload: { _status: -1, _result: e },
              _init: D,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = T.transition;
            T.transition = {};
            try {
              e();
            } finally {
              T.transition = t;
            }
          }),
          (t.unstable_act = F),
          (t.useCallback = function (e, t) {
            return P.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return P.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return P.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return P.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return P.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return P.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return P.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return P.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return P.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return P.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return P.current.useRef(e);
          }),
          (t.useState = function (e) {
            return P.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return P.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return P.current.useTransition();
          }),
          (t.version = "18.3.1"));
      },
      43(e, t, n) {
        e.exports = n(202);
      },
      579(e, t, n) {
        e.exports = n(153);
      },
      234(e, t) {
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              a = e[r];
            if (!(0 < o(a, t))) break e;
            ((e[r] = t), (e[n] = a), (n = r));
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function a(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, l = a >>> 1; r < l; ) {
              var i = 2 * (r + 1) - 1,
                s = e[i],
                c = i + 1,
                u = e[c];
              if (0 > o(s, n))
                c < a && 0 > o(u, s)
                  ? ((e[r] = u), (e[c] = n), (r = c))
                  : ((e[r] = s), (e[i] = n), (r = i));
              else {
                if (!(c < a && 0 > o(u, n))) break e;
                ((e[r] = u), (e[c] = n), (r = c));
              }
            }
          }
          return t;
        }
        function o(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var l = performance;
          t.unstable_now = function () {
            return l.now();
          };
        } else {
          var i = Date,
            s = i.now();
          t.unstable_now = function () {
            return i.now() - s;
          };
        }
        var c = [],
          u = [],
          d = 1,
          f = null,
          p = 3,
          m = !1,
          h = !1,
          g = !1,
          b = "function" === typeof setTimeout ? setTimeout : null,
          v = "function" === typeof clearTimeout ? clearTimeout : null,
          y = "undefined" !== typeof setImmediate ? setImmediate : null;
        function x(e) {
          for (var t = r(u); null !== t; ) {
            if (null === t.callback) a(u);
            else {
              if (!(t.startTime <= e)) break;
              (a(u), (t.sortIndex = t.expirationTime), n(c, t));
            }
            t = r(u);
          }
        }
        function w(e) {
          if (((g = !1), x(e), !h))
            if (null !== r(c)) ((h = !0), T(E));
            else {
              var t = r(u);
              null !== t && O(w, t.startTime - e);
            }
        }
        function E(e, n) {
          ((h = !1), g && ((g = !1), v(j), (j = -1)), (m = !0));
          var o = p;
          try {
            for (
              x(n), f = r(c);
              null !== f && (!(f.expirationTime > n) || (e && !_()));
            ) {
              var l = f.callback;
              if ("function" === typeof l) {
                ((f.callback = null), (p = f.priorityLevel));
                var i = l(f.expirationTime <= n);
                ((n = t.unstable_now()),
                  "function" === typeof i
                    ? (f.callback = i)
                    : f === r(c) && a(c),
                  x(n));
              } else a(c);
              f = r(c);
            }
            if (null !== f) var s = !0;
            else {
              var d = r(u);
              (null !== d && O(w, d.startTime - n), (s = !1));
            }
            return s;
          } finally {
            ((f = null), (p = o), (m = !1));
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var k,
          N = !1,
          S = null,
          j = -1,
          C = 5,
          R = -1;
        function _() {
          return !(t.unstable_now() - R < C);
        }
        function A() {
          if (null !== S) {
            var e = t.unstable_now();
            R = e;
            var n = !0;
            try {
              n = S(!0, e);
            } finally {
              n ? k() : ((N = !1), (S = null));
            }
          } else N = !1;
        }
        if ("function" === typeof y)
          k = function () {
            y(A);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var D = new MessageChannel(),
            P = D.port2;
          ((D.port1.onmessage = A),
            (k = function () {
              P.postMessage(null);
            }));
        } else
          k = function () {
            b(A, 0);
          };
        function T(e) {
          ((S = e), N || ((N = !0), k()));
        }
        function O(e, n) {
          j = b(function () {
            e(t.unstable_now());
          }, n);
        }
        ((t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            h || m || ((h = !0), T(E));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (C = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(c);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, o) {
            var l = t.unstable_now();
            switch (
              ("object" === typeof o && null !== o
                ? (o = "number" === typeof (o = o.delay) && 0 < o ? l + o : l)
                : (o = l),
              e)
            ) {
              case 1:
                var i = -1;
                break;
              case 2:
                i = 250;
                break;
              case 5:
                i = 1073741823;
                break;
              case 4:
                i = 1e4;
                break;
              default:
                i = 5e3;
            }
            return (
              (e = {
                id: d++,
                callback: a,
                priorityLevel: e,
                startTime: o,
                expirationTime: (i = o + i),
                sortIndex: -1,
              }),
              o > l
                ? ((e.sortIndex = o),
                  n(u, e),
                  null === r(c) &&
                    e === r(u) &&
                    (g ? (v(j), (j = -1)) : (g = !0), O(w, o - l)))
                : ((e.sortIndex = i), n(c, e), h || m || ((h = !0), T(E))),
              e
            );
          }),
          (t.unstable_shouldYield = _),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          }));
      },
      853(e, t, n) {
        e.exports = n(234);
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var o = (t[r] = { exports: {} });
    return (e[r](o, o.exports, n), o.exports);
  }
  ((() => {
    var e,
      t = Object.getPrototypeOf
        ? (e) => Object.getPrototypeOf(e)
        : (e) => e.__proto__;
    n.t = function (r, a) {
      if ((1 & a && (r = this(r)), 8 & a)) return r;
      if ("object" === typeof r && r) {
        if (4 & a && r.__esModule) return r;
        if (16 & a && "function" === typeof r.then) return r;
      }
      var o = Object.create(null);
      n.r(o);
      var l = {};
      e = e || [null, t({}), t([]), t(t)];
      for (
        var i = 2 & a && r;
        ("object" == typeof i || "function" == typeof i) && !~e.indexOf(i);
        i = t(i)
      )
        Object.getOwnPropertyNames(i).forEach((e) => (l[e] = () => r[e]));
      return ((l.default = () => r), n.d(o, l), o);
    };
  })(),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.r = (e) => {
      ("undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 }));
    }),
    (n.p = "/"),
    (n.nc = void 0));
  var r = {};
  (n.r(r),
    n.d(r, {
      hasBrowserEnv: () => lr,
      hasStandardBrowserEnv: () => sr,
      hasStandardBrowserWebWorkerEnv: () => cr,
      navigator: () => ir,
      origin: () => ur,
    }));
  var a = n(43),
    o = n.t(a, 2),
    l = n(391),
    i = "popstate";
  function s(e) {
    return (
      "object" === typeof e &&
      null != e &&
      "pathname" in e &&
      "search" in e &&
      "hash" in e &&
      "state" in e &&
      "key" in e
    );
  }
  function c() {
    return g(
      function (e, t) {
        let n = t.state?.masked,
          { pathname: r, search: a, hash: o } = n || e.location;
        return p(
          "",
          { pathname: r, search: a, hash: o },
          (t.state && t.state.usr) || null,
          (t.state && t.state.key) || "default",
          n
            ? {
                pathname: e.location.pathname,
                search: e.location.search,
                hash: e.location.hash,
              }
            : void 0,
        );
      },
      function (e, t) {
        return "string" === typeof t ? t : m(t);
      },
      null,
      arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
    );
  }
  function u(e, t) {
    if (!1 === e || null === e || "undefined" === typeof e) throw new Error(t);
  }
  function d(e, t) {
    if (!e) {
      "undefined" !== typeof console && console.warn(t);
      try {
        throw new Error(t);
      } catch (n) {}
    }
  }
  function f(e, t) {
    return {
      usr: e.state,
      key: e.key,
      idx: t,
      masked: e.unstable_mask
        ? { pathname: e.pathname, search: e.search, hash: e.hash }
        : void 0,
    };
  }
  function p(e, t) {
    let n =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
      r = arguments.length > 3 ? arguments[3] : void 0,
      a = arguments.length > 4 ? arguments[4] : void 0;
    return {
      pathname: "string" === typeof e ? e : e.pathname,
      search: "",
      hash: "",
      ...("string" === typeof t ? h(t) : t),
      state: n,
      key: (t && t.key) || r || Math.random().toString(36).substring(2, 10),
      unstable_mask: a,
    };
  }
  function m(e) {
    let { pathname: t = "/", search: n = "", hash: r = "" } = e;
    return (
      n && "?" !== n && (t += "?" === n.charAt(0) ? n : "?" + n),
      r && "#" !== r && (t += "#" === r.charAt(0) ? r : "#" + r),
      t
    );
  }
  function h(e) {
    let t = {};
    if (e) {
      let n = e.indexOf("#");
      n >= 0 && ((t.hash = e.substring(n)), (e = e.substring(0, n)));
      let r = e.indexOf("?");
      (r >= 0 && ((t.search = e.substring(r)), (e = e.substring(0, r))),
        e && (t.pathname = e));
    }
    return t;
  }
  function g(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
      { window: a = document.defaultView, v5Compat: o = !1 } = r,
      l = a.history,
      c = "POP",
      u = null,
      d = m();
    function m() {
      return (l.state || { idx: null }).idx;
    }
    function h() {
      c = "POP";
      let e = m(),
        t = null == e ? null : e - d;
      ((d = e), u && u({ action: c, location: v.location, delta: t }));
    }
    function g(e) {
      return b(e);
    }
    null == d && ((d = 0), l.replaceState({ ...l.state, idx: d }, ""));
    let v = {
      get action() {
        return c;
      },
      get location() {
        return e(a, l);
      },
      listen(e) {
        if (u) throw new Error("A history only accepts one active listener");
        return (
          a.addEventListener(i, h),
          (u = e),
          () => {
            (a.removeEventListener(i, h), (u = null));
          }
        );
      },
      createHref: (e) => t(a, e),
      createURL: g,
      encodeLocation(e) {
        let t = g(e);
        return { pathname: t.pathname, search: t.search, hash: t.hash };
      },
      push: function (e, t) {
        c = "PUSH";
        let r = s(e) ? e : p(v.location, e, t);
        (n && n(r, e), (d = m() + 1));
        let i = f(r, d),
          h = v.createHref(r.unstable_mask || r);
        try {
          l.pushState(i, "", h);
        } catch (g) {
          if (g instanceof DOMException && "DataCloneError" === g.name) throw g;
          a.location.assign(h);
        }
        o && u && u({ action: c, location: v.location, delta: 1 });
      },
      replace: function (e, t) {
        c = "REPLACE";
        let r = s(e) ? e : p(v.location, e, t);
        (n && n(r, e), (d = m()));
        let a = f(r, d),
          i = v.createHref(r.unstable_mask || r);
        (l.replaceState(a, "", i),
          o && u && u({ action: c, location: v.location, delta: 0 }));
      },
      go: (e) => l.go(e),
    };
    return v;
  }
  function b(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = "http://localhost";
    ("undefined" !== typeof window &&
      (n =
        "null" !== window.location.origin
          ? window.location.origin
          : window.location.href),
      u(n, "No window.location.(origin|href) available to create URL"));
    let r = "string" === typeof e ? e : m(e);
    return (
      (r = r.replace(/ $/, "%20")),
      !t && r.startsWith("//") && (r = n + r),
      new URL(r, n)
    );
  }
  new WeakMap();
  function v(e, t) {
    return y(
      e,
      t,
      arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "/",
      !1,
    );
  }
  function y(e, t, n, r) {
    let a = O(("string" === typeof t ? h(t) : t).pathname || "/", n);
    if (null == a) return null;
    let o = x(e);
    !(function (e) {
      e.sort((e, t) =>
        e.score !== t.score
          ? t.score - e.score
          : (function (e, t) {
              let n =
                e.length === t.length &&
                e.slice(0, -1).every((e, n) => e === t[n]);
              return n ? e[e.length - 1] - t[t.length - 1] : 0;
            })(
              e.routesMeta.map((e) => e.childrenIndex),
              t.routesMeta.map((e) => e.childrenIndex),
            ),
      );
    })(o);
    let l = null;
    for (let i = 0; null == l && i < o.length; ++i) {
      let e = T(a);
      l = A(o[i], e, r);
    }
    return l;
  }
  function x(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
      r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
      a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
      o = function (e, o) {
        let l =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a,
          i = arguments.length > 3 ? arguments[3] : void 0,
          s = {
            relativePath: void 0 === i ? e.path || "" : i,
            caseSensitive: !0 === e.caseSensitive,
            childrenIndex: o,
            route: e,
          };
        if (s.relativePath.startsWith("/")) {
          if (!s.relativePath.startsWith(r) && l) return;
          (u(
            s.relativePath.startsWith(r),
            `Absolute route path "${s.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
          ),
            (s.relativePath = s.relativePath.slice(r.length)));
        }
        let c = B([r, s.relativePath]),
          d = n.concat(s);
        (e.children &&
          e.children.length > 0 &&
          (u(
            !0 !== e.index,
            `Index routes must not have child routes. Please remove all child routes from route path "${c}".`,
          ),
          x(e.children, t, d, c, l)),
          (null != e.path || e.index) &&
            t.push({ path: c, score: _(c, e.index), routesMeta: d }));
      };
    return (
      e.forEach((e, t) => {
        if ("" !== e.path && e.path?.includes("?"))
          for (let n of w(e.path)) o(e, t, !0, n);
        else o(e, t);
      }),
      t
    );
  }
  function w(e) {
    let t = e.split("/");
    if (0 === t.length) return [];
    let [n, ...r] = t,
      a = n.endsWith("?"),
      o = n.replace(/\?$/, "");
    if (0 === r.length) return a ? [o, ""] : [o];
    let l = w(r.join("/")),
      i = [];
    return (
      i.push(...l.map((e) => ("" === e ? o : [o, e].join("/")))),
      a && i.push(...l),
      i.map((t) => (e.startsWith("/") && "" === t ? "/" : t))
    );
  }
  var E = /^:[\w-]+$/,
    k = 3,
    N = 2,
    S = 1,
    j = 10,
    C = -2,
    R = (e) => "*" === e;
  function _(e, t) {
    let n = e.split("/"),
      r = n.length;
    return (
      n.some(R) && (r += C),
      t && (r += N),
      n
        .filter((e) => !R(e))
        .reduce((e, t) => e + (E.test(t) ? k : "" === t ? S : j), r)
    );
  }
  function A(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      { routesMeta: r } = e,
      a = {},
      o = "/",
      l = [];
    for (let i = 0; i < r.length; ++i) {
      let e = r[i],
        s = i === r.length - 1,
        c = "/" === o ? t : t.slice(o.length) || "/",
        u = D(
          { path: e.relativePath, caseSensitive: e.caseSensitive, end: s },
          c,
        ),
        d = e.route;
      if (
        (!u &&
          s &&
          n &&
          !r[r.length - 1].route.index &&
          (u = D(
            { path: e.relativePath, caseSensitive: e.caseSensitive, end: !1 },
            c,
          )),
        !u)
      )
        return null;
      (Object.assign(a, u.params),
        l.push({
          params: a,
          pathname: B([o, u.pathname]),
          pathnameBase: U(B([o, u.pathnameBase])),
          route: d,
        }),
        "/" !== u.pathnameBase && (o = B([o, u.pathnameBase])));
    }
    return l;
  }
  function D(e, t) {
    "string" === typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
    let [n, r] = P(e.path, e.caseSensitive, e.end),
      a = t.match(n);
    if (!a) return null;
    let o = a[0],
      l = o.replace(/(.)\/+$/, "$1"),
      i = a.slice(1);
    return {
      params: r.reduce((e, t, n) => {
        let { paramName: r, isOptional: a } = t;
        if ("*" === r) {
          let e = i[n] || "";
          l = o.slice(0, o.length - e.length).replace(/(.)\/+$/, "$1");
        }
        const s = i[n];
        return ((e[r] = a && !s ? void 0 : (s || "").replace(/%2F/g, "/")), e);
      }, {}),
      pathname: o,
      pathnameBase: l,
      pattern: e,
    };
  }
  function P(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
    d(
      "*" === e || !e.endsWith("*") || e.endsWith("/*"),
      `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, "/*")}".`,
    );
    let r = [],
      a =
        "^" +
        e
          .replace(/\/*\*?$/, "")
          .replace(/^\/*/, "/")
          .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
          .replace(/\/:([\w-]+)(\?)?/g, (e, t, n, a, o) => {
            if ((r.push({ paramName: t, isOptional: null != n }), n)) {
              let t = o.charAt(a + e.length);
              return t && "/" !== t ? "/([^\\/]*)" : "(?:/([^\\/]*))?";
            }
            return "/([^\\/]+)";
          })
          .replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
    return (
      e.endsWith("*")
        ? (r.push({ paramName: "*" }),
          (a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
        : n
          ? (a += "\\/*$")
          : "" !== e && "/" !== e && (a += "(?:(?=\\/|$))"),
      [new RegExp(a, t ? void 0 : "i"), r]
    );
  }
  function T(e) {
    try {
      return e
        .split("/")
        .map((e) => decodeURIComponent(e).replace(/\//g, "%2F"))
        .join("/");
    } catch (t) {
      return (
        d(
          !1,
          `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`,
        ),
        e
      );
    }
  }
  function O(e, t) {
    if ("/" === t) return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
      r = e.charAt(n);
    return r && "/" !== r ? null : e.slice(n) || "/";
  }
  var F = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
  function L(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return (
      e.split("/").forEach((e) => {
        ".." === e ? n.length > 1 && n.pop() : "." !== e && n.push(e);
      }),
      n.length > 1 ? n.join("/") : "/"
    );
  }
  function M(e, t, n, r) {
    return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
  }
  function z(e) {
    return e.filter(
      (e, t) => 0 === t || (e.route.path && e.route.path.length > 0),
    );
  }
  function I(e) {
    let t = z(e);
    return t.map((e, n) => (n === t.length - 1 ? e.pathname : e.pathnameBase));
  }
  function $(e, t, n) {
    let r,
      a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    "string" === typeof e
      ? (r = h(e))
      : ((r = { ...e }),
        u(
          !r.pathname || !r.pathname.includes("?"),
          M("?", "pathname", "search", r),
        ),
        u(
          !r.pathname || !r.pathname.includes("#"),
          M("#", "pathname", "hash", r),
        ),
        u(!r.search || !r.search.includes("#"), M("#", "search", "hash", r)));
    let o,
      l = "" === e || "" === r.pathname,
      i = l ? "/" : r.pathname;
    if (null == i) o = n;
    else {
      let e = t.length - 1;
      if (!a && i.startsWith("..")) {
        let t = i.split("/");
        for (; ".." === t[0]; ) (t.shift(), (e -= 1));
        r.pathname = t.join("/");
      }
      o = e >= 0 ? t[e] : "/";
    }
    let s = (function (e) {
        let t,
          n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "/",
          {
            pathname: r,
            search: a = "",
            hash: o = "",
          } = "string" === typeof e ? h(e) : e;
        return (
          r
            ? ((r = r.replace(/\/\/+/g, "/")),
              (t = r.startsWith("/") ? L(r.substring(1), "/") : L(r, n)))
            : (t = n),
          { pathname: t, search: W(a), hash: H(o) }
        );
      })(r, o),
      c = i && "/" !== i && i.endsWith("/"),
      d = (l || "." === i) && n.endsWith("/");
    return (s.pathname.endsWith("/") || (!c && !d) || (s.pathname += "/"), s);
  }
  var B = (e) => e.join("/").replace(/\/\/+/g, "/"),
    U = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
    W = (e) => (e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : ""),
    H = (e) => (e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : "");
  var q = class {
    constructor(e, t, n) {
      let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      ((this.status = e),
        (this.statusText = t || ""),
        (this.internal = r),
        n instanceof Error
          ? ((this.data = n.toString()), (this.error = n))
          : (this.data = n));
    }
  };
  function V(e) {
    return (
      null != e &&
      "number" === typeof e.status &&
      "string" === typeof e.statusText &&
      "boolean" === typeof e.internal &&
      "data" in e
    );
  }
  function K(e) {
    return (
      e
        .map((e) => e.route.path)
        .filter(Boolean)
        .join("/")
        .replace(/\/\/*/g, "/") || "/"
    );
  }
  var Y =
    "undefined" !== typeof window &&
    "undefined" !== typeof window.document &&
    "undefined" !== typeof window.document.createElement;
  function Q(e, t) {
    let n = e;
    if ("string" !== typeof n || !F.test(n))
      return { absoluteURL: void 0, isExternal: !1, to: n };
    let r = n,
      a = !1;
    if (Y)
      try {
        let e = new URL(window.location.href),
          r = n.startsWith("//") ? new URL(e.protocol + n) : new URL(n),
          o = O(r.pathname, t);
        r.origin === e.origin && null != o
          ? (n = o + r.search + r.hash)
          : (a = !0);
      } catch (o) {
        d(
          !1,
          `<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`,
        );
      }
    return { absoluteURL: r, isExternal: a, to: n };
  }
  Symbol("Uninstrumented");
  Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
  var G = ["POST", "PUT", "PATCH", "DELETE"],
    J = (new Set(G), ["GET", ...G]);
  (new Set(J), Symbol("ResetLoaderData"));
  var X = a.createContext(null);
  X.displayName = "DataRouter";
  var Z = a.createContext(null);
  Z.displayName = "DataRouterState";
  var ee = a.createContext(!1);
  function te() {
    return a.useContext(ee);
  }
  var ne = a.createContext({ isTransitioning: !1 });
  ne.displayName = "ViewTransition";
  var re = a.createContext(new Map());
  re.displayName = "Fetchers";
  var ae = a.createContext(null);
  ae.displayName = "Await";
  var oe = a.createContext(null);
  oe.displayName = "Navigation";
  var le = a.createContext(null);
  le.displayName = "Location";
  var ie = a.createContext({ outlet: null, matches: [], isDataRoute: !1 });
  ie.displayName = "Route";
  var se = a.createContext(null);
  se.displayName = "RouteError";
  var ce = "REACT_ROUTER_ERROR";
  function ue() {
    return null != a.useContext(le);
  }
  function de() {
    return (
      u(
        ue(),
        "useLocation() may be used only in the context of a <Router> component.",
      ),
      a.useContext(le).location
    );
  }
  var fe =
    "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
  function pe(e) {
    a.useContext(oe).static || a.useLayoutEffect(e);
  }
  function me() {
    let { isDataRoute: e } = a.useContext(ie);
    return e
      ? (function () {
          let { router: e } = Se("useNavigate"),
            t = Ce("useNavigate"),
            n = a.useRef(!1);
          pe(() => {
            n.current = !0;
          });
          let r = a.useCallback(
            async function (r) {
              let a =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              (d(n.current, fe),
                n.current &&
                  ("number" === typeof r
                    ? await e.navigate(r)
                    : await e.navigate(r, { fromRouteId: t, ...a })));
            },
            [e, t],
          );
          return r;
        })()
      : (function () {
          u(
            ue(),
            "useNavigate() may be used only in the context of a <Router> component.",
          );
          let e = a.useContext(X),
            { basename: t, navigator: n } = a.useContext(oe),
            { matches: r } = a.useContext(ie),
            { pathname: o } = de(),
            l = JSON.stringify(I(r)),
            i = a.useRef(!1);
          pe(() => {
            i.current = !0;
          });
          let s = a.useCallback(
            function (r) {
              let a =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              if ((d(i.current, fe), !i.current)) return;
              if ("number" === typeof r) return void n.go(r);
              let s = $(r, JSON.parse(l), o, "path" === a.relative);
              (null == e &&
                "/" !== t &&
                (s.pathname = "/" === s.pathname ? t : B([t, s.pathname])),
                (a.replace ? n.replace : n.push)(s, a.state, a));
            },
            [t, n, l, o, e],
          );
          return s;
        })();
  }
  a.createContext(null);
  function he(e) {
    let { relative: t } =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      { matches: n } = a.useContext(ie),
      { pathname: r } = de(),
      o = JSON.stringify(I(n));
    return a.useMemo(() => $(e, JSON.parse(o), r, "path" === t), [e, o, r, t]);
  }
  function ge(e, t, n) {
    u(
      ue(),
      "useRoutes() may be used only in the context of a <Router> component.",
    );
    let { navigator: r } = a.useContext(oe),
      { matches: o } = a.useContext(ie),
      l = o[o.length - 1],
      i = l ? l.params : {},
      s = l ? l.pathname : "/",
      c = l ? l.pathnameBase : "/",
      f = l && l.route;
    {
      let e = (f && f.path) || "";
      Ae(
        s,
        !f || e.endsWith("*") || e.endsWith("*?"),
        `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.\n\nPlease change the parent <Route path="${e}"> to <Route path="${"/" === e ? "*" : `${e}/*`}">.`,
      );
    }
    let p,
      m = de();
    if (t) {
      let e = "string" === typeof t ? h(t) : t;
      (u(
        "/" === c || e.pathname?.startsWith(c),
        `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`,
      ),
        (p = e));
    } else p = m;
    let g = p.pathname || "/",
      b = g;
    if ("/" !== c) {
      let e = c.replace(/^\//, "").split("/");
      b = "/" + g.replace(/^\//, "").split("/").slice(e.length).join("/");
    }
    let y = v(e, { pathname: b });
    (d(
      f || null != y,
      `No routes matched location "${p.pathname}${p.search}${p.hash}" `,
    ),
      d(
        null == y ||
          void 0 !== y[y.length - 1].route.element ||
          void 0 !== y[y.length - 1].route.Component ||
          void 0 !== y[y.length - 1].route.lazy,
        `Matched leaf route at location "${p.pathname}${p.search}${p.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
      ));
    let x = ke(
      y &&
        y.map((e) =>
          Object.assign({}, e, {
            params: Object.assign({}, i, e.params),
            pathname: B([
              c,
              r.encodeLocation
                ? r.encodeLocation(
                    e.pathname
                      .replace(/%/g, "%25")
                      .replace(/\?/g, "%3F")
                      .replace(/#/g, "%23"),
                  ).pathname
                : e.pathname,
            ]),
            pathnameBase:
              "/" === e.pathnameBase
                ? c
                : B([
                    c,
                    r.encodeLocation
                      ? r.encodeLocation(
                          e.pathnameBase
                            .replace(/%/g, "%25")
                            .replace(/\?/g, "%3F")
                            .replace(/#/g, "%23"),
                        ).pathname
                      : e.pathnameBase,
                  ]),
          }),
        ),
      o,
      n,
    );
    return t && x
      ? a.createElement(
          le.Provider,
          {
            value: {
              location: {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
                unstable_mask: void 0,
                ...p,
              },
              navigationType: "POP",
            },
          },
          x,
        )
      : x;
  }
  function be() {
    let e = Re(),
      t = V(e)
        ? `${e.status} ${e.statusText}`
        : e instanceof Error
          ? e.message
          : JSON.stringify(e),
      n = e instanceof Error ? e.stack : null,
      r = "rgba(200,200,200, 0.5)",
      o = { padding: "0.5rem", backgroundColor: r },
      l = { padding: "2px 4px", backgroundColor: r },
      i = null;
    return (
      console.error("Error handled by React Router default ErrorBoundary:", e),
      (i = a.createElement(
        a.Fragment,
        null,
        a.createElement("p", null, "\ud83d\udcbf Hey developer \ud83d\udc4b"),
        a.createElement(
          "p",
          null,
          "You can provide a way better UX than this when your app throws errors by providing your own ",
          a.createElement("code", { style: l }, "ErrorBoundary"),
          " or",
          " ",
          a.createElement("code", { style: l }, "errorElement"),
          " prop on your route.",
        ),
      )),
      a.createElement(
        a.Fragment,
        null,
        a.createElement("h2", null, "Unexpected Application Error!"),
        a.createElement("h3", { style: { fontStyle: "italic" } }, t),
        n ? a.createElement("pre", { style: o }, n) : null,
        i,
      )
    );
  }
  var ve = a.createElement(be, null),
    ye = class extends a.Component {
      constructor(e) {
        (super(e),
          (this.state = {
            location: e.location,
            revalidation: e.revalidation,
            error: e.error,
          }));
      }
      static getDerivedStateFromError(e) {
        return { error: e };
      }
      static getDerivedStateFromProps(e, t) {
        return t.location !== e.location ||
          ("idle" !== t.revalidation && "idle" === e.revalidation)
          ? {
              error: e.error,
              location: e.location,
              revalidation: e.revalidation,
            }
          : {
              error: void 0 !== e.error ? e.error : t.error,
              location: t.location,
              revalidation: e.revalidation || t.revalidation,
            };
      }
      componentDidCatch(e, t) {
        this.props.onError
          ? this.props.onError(e, t)
          : console.error(
              "React Router caught the following error during render",
              e,
            );
      }
      render() {
        let e = this.state.error;
        if (
          this.context &&
          "object" === typeof e &&
          e &&
          "digest" in e &&
          "string" === typeof e.digest
        ) {
          const t = (function (e) {
            if (e.startsWith(`${ce}:ROUTE_ERROR_RESPONSE:{`))
              try {
                let t = JSON.parse(e.slice(40));
                if (
                  "object" === typeof t &&
                  t &&
                  "number" === typeof t.status &&
                  "string" === typeof t.statusText
                )
                  return new q(t.status, t.statusText, t.data);
              } catch {}
          })(e.digest);
          t && (e = t);
        }
        let t =
          void 0 !== e
            ? a.createElement(
                ie.Provider,
                { value: this.props.routeContext },
                a.createElement(se.Provider, {
                  value: e,
                  children: this.props.component,
                }),
              )
            : this.props.children;
        return this.context ? a.createElement(we, { error: e }, t) : t;
      }
    };
  ye.contextType = ee;
  var xe = new WeakMap();
  function we(e) {
    let { children: t, error: n } = e,
      { basename: r } = a.useContext(oe);
    if (
      "object" === typeof n &&
      n &&
      "digest" in n &&
      "string" === typeof n.digest
    ) {
      let e = (function (e) {
        if (e.startsWith(`${ce}:REDIRECT:{`))
          try {
            let t = JSON.parse(e.slice(28));
            if (
              "object" === typeof t &&
              t &&
              "number" === typeof t.status &&
              "string" === typeof t.statusText &&
              "string" === typeof t.location &&
              "boolean" === typeof t.reloadDocument &&
              "boolean" === typeof t.replace
            )
              return t;
          } catch {}
      })(n.digest);
      if (e) {
        let t = xe.get(n);
        if (t) throw t;
        let o = Q(e.location, r);
        if (Y && !xe.get(n)) {
          if (!o.isExternal && !e.reloadDocument) {
            const t = Promise.resolve().then(() =>
              window.__reactRouterDataRouter.navigate(o.to, {
                replace: e.replace,
              }),
            );
            throw (xe.set(n, t), t);
          }
          window.location.href = o.absoluteURL || o.to;
        }
        return a.createElement("meta", {
          httpEquiv: "refresh",
          content: `0;url=${o.absoluteURL || o.to}`,
        });
      }
    }
    return t;
  }
  function Ee(e) {
    let { routeContext: t, match: n, children: r } = e,
      o = a.useContext(X);
    return (
      o &&
        o.static &&
        o.staticContext &&
        (n.route.errorElement || n.route.ErrorBoundary) &&
        (o.staticContext._deepestRenderedBoundaryId = n.route.id),
      a.createElement(ie.Provider, { value: t }, r)
    );
  }
  function ke(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
      n = arguments.length > 2 ? arguments[2] : void 0,
      r = n?.state;
    if (null == e) {
      if (!r) return null;
      if (r.errors) e = r.matches;
      else {
        if (0 !== t.length || r.initialized || !(r.matches.length > 0))
          return null;
        e = r.matches;
      }
    }
    let o = e,
      l = r?.errors;
    if (null != l) {
      let e = o.findIndex((e) => e.route.id && void 0 !== l?.[e.route.id]);
      (u(
        e >= 0,
        `Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`,
      ),
        (o = o.slice(0, Math.min(o.length, e + 1))));
    }
    let i = !1,
      s = -1;
    if (n && r) {
      i = r.renderFallback;
      for (let e = 0; e < o.length; e++) {
        let t = o[e];
        if (
          ((t.route.HydrateFallback || t.route.hydrateFallbackElement) &&
            (s = e),
          t.route.id)
        ) {
          let { loaderData: e, errors: a } = r,
            l =
              t.route.loader &&
              !e.hasOwnProperty(t.route.id) &&
              (!a || void 0 === a[t.route.id]);
          if (t.route.lazy || l) {
            (n.isStatic && (i = !0), (o = s >= 0 ? o.slice(0, s + 1) : [o[0]]));
            break;
          }
        }
      }
    }
    let c = n?.onError,
      d =
        r && c
          ? (e, t) => {
              c(e, {
                location: r.location,
                params: r.matches?.[0]?.params ?? {},
                unstable_pattern: K(r.matches),
                errorInfo: t,
              });
            }
          : void 0;
    return o.reduceRight((e, n, c) => {
      let u,
        f = !1,
        p = null,
        m = null;
      r &&
        ((u = l && n.route.id ? l[n.route.id] : void 0),
        (p = n.route.errorElement || ve),
        i &&
          (s < 0 && 0 === c
            ? (Ae(
                "route-fallback",
                !1,
                "No `HydrateFallback` element provided to render during initial hydration",
              ),
              (f = !0),
              (m = null))
            : s === c &&
              ((f = !0), (m = n.route.hydrateFallbackElement || null))));
      let h = t.concat(o.slice(0, c + 1)),
        g = () => {
          let t;
          return (
            (t = u
              ? p
              : f
                ? m
                : n.route.Component
                  ? a.createElement(n.route.Component, null)
                  : n.route.element
                    ? n.route.element
                    : e),
            a.createElement(Ee, {
              match: n,
              routeContext: { outlet: e, matches: h, isDataRoute: null != r },
              children: t,
            })
          );
        };
      return r && (n.route.ErrorBoundary || n.route.errorElement || 0 === c)
        ? a.createElement(ye, {
            location: r.location,
            revalidation: r.revalidation,
            component: p,
            error: u,
            children: g(),
            routeContext: { outlet: null, matches: h, isDataRoute: !0 },
            onError: d,
          })
        : g();
    }, null);
  }
  function Ne(e) {
    return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
  }
  function Se(e) {
    let t = a.useContext(X);
    return (u(t, Ne(e)), t);
  }
  function je(e) {
    let t = a.useContext(Z);
    return (u(t, Ne(e)), t);
  }
  function Ce(e) {
    let t = (function (e) {
        let t = a.useContext(ie);
        return (u(t, Ne(e)), t);
      })(e),
      n = t.matches[t.matches.length - 1];
    return (
      u(
        n.route.id,
        `${e} can only be used on routes that contain a unique "id"`,
      ),
      n.route.id
    );
  }
  function Re() {
    let e = a.useContext(se),
      t = je("useRouteError"),
      n = Ce("useRouteError");
    return void 0 !== e ? e : t.errors?.[n];
  }
  var _e = {};
  function Ae(e, t, n) {
    t || _e[e] || ((_e[e] = !0), d(!1, n));
  }
  var De = {};
  function Pe(e, t) {
    e || De[t] || ((De[t] = !0), console.warn(t));
  }
  o.useOptimistic;
  a.memo(Te);
  function Te(e) {
    let { routes: t, future: n, state: r, isStatic: a, onError: o } = e;
    return ge(t, void 0, { state: r, isStatic: a, onError: o, future: n });
  }
  function Oe(e) {
    u(
      !1,
      "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.",
    );
  }
  function Fe(e) {
    let {
      basename: t = "/",
      children: n = null,
      location: r,
      navigationType: o = "POP",
      navigator: l,
      static: i = !1,
      unstable_useTransitions: s,
    } = e;
    u(
      !ue(),
      "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.",
    );
    let c = t.replace(/^\/*/, "/"),
      f = a.useMemo(
        () => ({
          basename: c,
          navigator: l,
          static: i,
          unstable_useTransitions: s,
          future: {},
        }),
        [c, l, i, s],
      );
    "string" === typeof r && (r = h(r));
    let {
        pathname: p = "/",
        search: m = "",
        hash: g = "",
        state: b = null,
        key: v = "default",
        unstable_mask: y,
      } = r,
      x = a.useMemo(() => {
        let e = O(p, c);
        return null == e
          ? null
          : {
              location: {
                pathname: e,
                search: m,
                hash: g,
                state: b,
                key: v,
                unstable_mask: y,
              },
              navigationType: o,
            };
      }, [c, p, m, g, b, v, o, y]);
    return (
      d(
        null != x,
        `<Router basename="${c}"> is not able to match the URL "${p}${m}${g}" because it does not start with the basename, so the <Router> won't render anything.`,
      ),
      null == x
        ? null
        : a.createElement(
            oe.Provider,
            { value: f },
            a.createElement(le.Provider, { children: n, value: x }),
          )
    );
  }
  function Le(e) {
    let { children: t, location: n } = e;
    return ge(Me(t), n);
  }
  a.Component;
  function Me(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
      n = [];
    return (
      a.Children.forEach(e, (e, r) => {
        if (!a.isValidElement(e)) return;
        let o = [...t, r];
        if (e.type === a.Fragment)
          return void n.push.apply(n, Me(e.props.children, o));
        (u(
          e.type === Oe,
          `[${"string" === typeof e.type ? e.type : e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`,
        ),
          u(
            !e.props.index || !e.props.children,
            "An index route cannot have child routes.",
          ));
        let l = {
          id: e.props.id || o.join("-"),
          caseSensitive: e.props.caseSensitive,
          element: e.props.element,
          Component: e.props.Component,
          index: e.props.index,
          path: e.props.path,
          middleware: e.props.middleware,
          loader: e.props.loader,
          action: e.props.action,
          hydrateFallbackElement: e.props.hydrateFallbackElement,
          HydrateFallback: e.props.HydrateFallback,
          errorElement: e.props.errorElement,
          ErrorBoundary: e.props.ErrorBoundary,
          hasErrorBoundary:
            !0 === e.props.hasErrorBoundary ||
            null != e.props.ErrorBoundary ||
            null != e.props.errorElement,
          shouldRevalidate: e.props.shouldRevalidate,
          handle: e.props.handle,
          lazy: e.props.lazy,
        };
        (e.props.children && (l.children = Me(e.props.children, o)), n.push(l));
      }),
      n
    );
  }
  var ze = "get",
    Ie = "application/x-www-form-urlencoded";
  function $e(e) {
    return "undefined" !== typeof HTMLElement && e instanceof HTMLElement;
  }
  var Be = null;
  var Ue = new Set([
    "application/x-www-form-urlencoded",
    "multipart/form-data",
    "text/plain",
  ]);
  function We(e) {
    return null == e || Ue.has(e)
      ? e
      : (d(
          !1,
          `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ie}"`,
        ),
        null);
  }
  function He(e, t) {
    let n, r, a, o, l;
    if ($e((i = e)) && "form" === i.tagName.toLowerCase()) {
      let l = e.getAttribute("action");
      ((r = l ? O(l, t) : null),
        (n = e.getAttribute("method") || ze),
        (a = We(e.getAttribute("enctype")) || Ie),
        (o = new FormData(e)));
    } else if (
      (function (e) {
        return $e(e) && "button" === e.tagName.toLowerCase();
      })(e) ||
      ((function (e) {
        return $e(e) && "input" === e.tagName.toLowerCase();
      })(e) &&
        ("submit" === e.type || "image" === e.type))
    ) {
      let l = e.form;
      if (null == l)
        throw new Error(
          'Cannot submit a <button> or <input type="submit"> without a <form>',
        );
      let i = e.getAttribute("formaction") || l.getAttribute("action");
      if (
        ((r = i ? O(i, t) : null),
        (n = e.getAttribute("formmethod") || l.getAttribute("method") || ze),
        (a =
          We(e.getAttribute("formenctype")) ||
          We(l.getAttribute("enctype")) ||
          Ie),
        (o = new FormData(l, e)),
        !(function () {
          if (null === Be)
            try {
              (new FormData(document.createElement("form"), 0), (Be = !1));
            } catch (e) {
              Be = !0;
            }
          return Be;
        })())
      ) {
        let { name: t, type: n, value: r } = e;
        if ("image" === n) {
          let e = t ? `${t}.` : "";
          (o.append(`${e}x`, "0"), o.append(`${e}y`, "0"));
        } else t && o.append(t, r);
      }
    } else {
      if ($e(e))
        throw new Error(
          'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
        );
      ((n = ze), (r = null), (a = Ie), (l = e));
    }
    var i;
    return (
      o && "text/plain" === a && ((l = o), (o = void 0)),
      { action: r, method: n.toLowerCase(), encType: a, formData: o, body: l }
    );
  }
  Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
  "undefined" !== typeof window
    ? window
    : "undefined" !== typeof globalThis && globalThis;
  function qe(e, t) {
    if (!1 === e || null === e || "undefined" === typeof e) throw new Error(t);
  }
  Symbol("SingleFetchRedirect");
  function Ve(e, t, n, r) {
    let a =
      "string" === typeof e
        ? new URL(
            e,
            "undefined" === typeof window
              ? "server://singlefetch/"
              : window.location.origin,
          )
        : e;
    return (
      n
        ? a.pathname.endsWith("/")
          ? (a.pathname = `${a.pathname}_.${r}`)
          : (a.pathname = `${a.pathname}.${r}`)
        : "/" === a.pathname
          ? (a.pathname = `_root.${r}`)
          : t && "/" === O(a.pathname, t)
            ? (a.pathname = `${t.replace(/\/$/, "")}/_root.${r}`)
            : (a.pathname = `${a.pathname.replace(/\/$/, "")}.${r}`),
      a
    );
  }
  async function Ke(e, t) {
    if (e.id in t) return t[e.id];
    try {
      let n = await import(e.module);
      return ((t[e.id] = n), n);
    } catch (n) {
      return (
        console.error(
          `Error loading route module \`${e.module}\`, reloading page...`,
        ),
        console.error(n),
        window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
        window.location.reload(),
        new Promise(() => {})
      );
    }
  }
  function Ye(e) {
    return null != e && "string" === typeof e.page;
  }
  function Qe(e) {
    return (
      null != e &&
      (null == e.href
        ? "preload" === e.rel &&
          "string" === typeof e.imageSrcSet &&
          "string" === typeof e.imageSizes
        : "string" === typeof e.rel && "string" === typeof e.href)
    );
  }
  function Ge(e, t, n, r, a, o) {
    let l = (e, t) => !n[t] || e.route.id !== n[t].route.id,
      i = (e, t) =>
        n[t].pathname !== e.pathname ||
        (n[t].route.path?.endsWith("*") && n[t].params["*"] !== e.params["*"]);
    return "assets" === o
      ? t.filter((e, t) => l(e, t) || i(e, t))
      : "data" === o
        ? t.filter((t, o) => {
            let s = r.routes[t.route.id];
            if (!s || !s.hasLoader) return !1;
            if (l(t, o) || i(t, o)) return !0;
            if (t.route.shouldRevalidate) {
              let r = t.route.shouldRevalidate({
                currentUrl: new URL(
                  a.pathname + a.search + a.hash,
                  window.origin,
                ),
                currentParams: n[0]?.params || {},
                nextUrl: new URL(e, window.origin),
                nextParams: t.params,
                defaultShouldRevalidate: !0,
              });
              if ("boolean" === typeof r) return r;
            }
            return !0;
          })
        : [];
  }
  function Je(e, t) {
    let { includeHydrateFallback: n } =
      arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    return (
      (r = e
        .map((e) => {
          let r = t.routes[e.route.id];
          if (!r) return [];
          let a = [r.module];
          return (
            r.clientActionModule && (a = a.concat(r.clientActionModule)),
            r.clientLoaderModule && (a = a.concat(r.clientLoaderModule)),
            n &&
              r.hydrateFallbackModule &&
              (a = a.concat(r.hydrateFallbackModule)),
            r.imports && (a = a.concat(r.imports)),
            a
          );
        })
        .flat(1)),
      [...new Set(r)]
    );
    var r;
  }
  function Xe(e, t) {
    let n = new Set(),
      r = new Set(t);
    return e.reduce((e, a) => {
      if (t && !Ye(a) && "script" === a.as && a.href && r.has(a.href)) return e;
      let o = JSON.stringify(
        (function (e) {
          let t = {},
            n = Object.keys(e).sort();
          for (let r of n) t[r] = e[r];
          return t;
        })(a),
      );
      return (n.has(o) || (n.add(o), e.push({ key: o, link: a })), e);
    }, []);
  }
  function Ze(e, t) {
    return "lazy" === e.mode && !0 === t;
  }
  function et() {
    let e = a.useContext(X);
    return (
      qe(
        e,
        "You must render this element inside a <DataRouterContext.Provider> element",
      ),
      e
    );
  }
  function tt() {
    let e = a.useContext(Z);
    return (
      qe(
        e,
        "You must render this element inside a <DataRouterStateContext.Provider> element",
      ),
      e
    );
  }
  var nt = a.createContext(void 0);
  function rt() {
    let e = a.useContext(nt);
    return (
      qe(e, "You must render this element inside a <HydratedRouter> element"),
      e
    );
  }
  function at(e, t) {
    return (n) => {
      (e && e(n), n.defaultPrevented || t(n));
    };
  }
  function ot(e, t, n) {
    if (n && !ut) return [e[0]];
    if (t) {
      let n = e.findIndex((e) => void 0 !== t[e.route.id]);
      return e.slice(0, n + 1);
    }
    return e;
  }
  nt.displayName = "FrameworkContext";
  function lt(e) {
    let { page: t, ...n } = e,
      r = te(),
      { router: o } = et(),
      l = a.useMemo(
        () => v(o.routes, t, o.basename),
        [o.routes, t, o.basename],
      );
    return l
      ? r
        ? a.createElement(st, { page: t, matches: l, ...n })
        : a.createElement(ct, { page: t, matches: l, ...n })
      : null;
  }
  function it(e) {
    let { manifest: t, routeModules: n } = rt(),
      [r, o] = a.useState([]);
    return (
      a.useEffect(() => {
        let r = !1;
        return (
          (async function (e, t, n) {
            return Xe(
              (
                await Promise.all(
                  e.map(async (e) => {
                    let r = t.routes[e.route.id];
                    if (r) {
                      let e = await Ke(r, n);
                      return e.links ? e.links() : [];
                    }
                    return [];
                  }),
                )
              )
                .flat(1)
                .filter(Qe)
                .filter((e) => "stylesheet" === e.rel || "preload" === e.rel)
                .map((e) =>
                  "stylesheet" === e.rel
                    ? { ...e, rel: "prefetch", as: "style" }
                    : { ...e, rel: "prefetch" },
                ),
            );
          })(e, t, n).then((e) => {
            r || o(e);
          }),
          () => {
            r = !0;
          }
        );
      }, [e, t, n]),
      r
    );
  }
  function st(e) {
    let { page: t, matches: n, ...r } = e,
      o = de(),
      { future: l } = rt(),
      { basename: i } = et(),
      s = a.useMemo(() => {
        if (t === o.pathname + o.search + o.hash) return [];
        let e = Ve(t, i, l.unstable_trailingSlashAwareDataRequests, "rsc"),
          r = !1,
          a = [];
        for (let t of n)
          "function" === typeof t.route.shouldRevalidate
            ? (r = !0)
            : a.push(t.route.id);
        return (
          r && a.length > 0 && e.searchParams.set("_routes", a.join(",")),
          [e.pathname + e.search]
        );
      }, [i, l.unstable_trailingSlashAwareDataRequests, t, o, n]);
    return a.createElement(
      a.Fragment,
      null,
      s.map((e) =>
        a.createElement("link", {
          key: e,
          rel: "prefetch",
          as: "fetch",
          href: e,
          ...r,
        }),
      ),
    );
  }
  function ct(e) {
    let { page: t, matches: n, ...r } = e,
      o = de(),
      { future: l, manifest: i, routeModules: s } = rt(),
      { basename: c } = et(),
      { loaderData: u, matches: d } = tt(),
      f = a.useMemo(() => Ge(t, n, d, i, o, "data"), [t, n, d, i, o]),
      p = a.useMemo(() => Ge(t, n, d, i, o, "assets"), [t, n, d, i, o]),
      m = a.useMemo(() => {
        if (t === o.pathname + o.search + o.hash) return [];
        let e = new Set(),
          r = !1;
        if (
          (n.forEach((t) => {
            let n = i.routes[t.route.id];
            n &&
              n.hasLoader &&
              ((!f.some((e) => e.route.id === t.route.id) &&
                t.route.id in u &&
                s[t.route.id]?.shouldRevalidate) ||
              n.hasClientLoader
                ? (r = !0)
                : e.add(t.route.id));
          }),
          0 === e.size)
        )
          return [];
        let a = Ve(t, c, l.unstable_trailingSlashAwareDataRequests, "data");
        return (
          r &&
            e.size > 0 &&
            a.searchParams.set(
              "_routes",
              n
                .filter((t) => e.has(t.route.id))
                .map((e) => e.route.id)
                .join(","),
            ),
          [a.pathname + a.search]
        );
      }, [c, l.unstable_trailingSlashAwareDataRequests, u, o, i, f, n, t, s]),
      h = a.useMemo(() => Je(p, i), [p, i]),
      g = it(p);
    return a.createElement(
      a.Fragment,
      null,
      m.map((e) =>
        a.createElement("link", {
          key: e,
          rel: "prefetch",
          as: "fetch",
          href: e,
          ...r,
        }),
      ),
      h.map((e) =>
        a.createElement("link", {
          key: e,
          rel: "modulepreload",
          href: e,
          ...r,
        }),
      ),
      g.map((e) => {
        let { key: t, link: n } = e;
        return a.createElement("link", {
          key: t,
          nonce: r.nonce,
          ...n,
          crossOrigin: n.crossOrigin ?? r.crossOrigin,
        });
      }),
    );
  }
  var ut = !1;
  function dt(e) {
    let {
        manifest: t,
        serverHandoffString: n,
        isSpaMode: r,
        renderMeta: o,
        routeDiscovery: l,
        ssr: i,
      } = rt(),
      { router: s, static: c, staticContext: u } = et(),
      { matches: d } = tt(),
      f = te(),
      p = Ze(l, i);
    o && (o.didRenderScripts = !0);
    let m = ot(d, null, r);
    a.useEffect(() => {
      ut = !0;
    }, []);
    let h = a.useMemo(() => {
        if (f) return null;
        let r = u
            ? `window.__reactRouterContext = ${n};window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());`
            : " ",
          o = c
            ? `${t.hmr?.runtime ? `import ${JSON.stringify(t.hmr.runtime)};` : ""}${p ? "" : `import ${JSON.stringify(t.url)}`};\n${m
                .map((e, n) => {
                  let r = `route${n}`,
                    a = t.routes[e.route.id];
                  qe(a, `Route ${e.route.id} not found in manifest`);
                  let {
                      clientActionModule: o,
                      clientLoaderModule: l,
                      clientMiddlewareModule: i,
                      hydrateFallbackModule: s,
                      module: c,
                    } = a,
                    u = [
                      ...(o
                        ? [{ module: o, varName: `${r}_clientAction` }]
                        : []),
                      ...(l
                        ? [{ module: l, varName: `${r}_clientLoader` }]
                        : []),
                      ...(i
                        ? [{ module: i, varName: `${r}_clientMiddleware` }]
                        : []),
                      ...(s
                        ? [{ module: s, varName: `${r}_HydrateFallback` }]
                        : []),
                      { module: c, varName: `${r}_main` },
                    ];
                  return 1 === u.length
                    ? `import * as ${r} from ${JSON.stringify(c)};`
                    : [
                        u
                          .map(
                            (e) =>
                              `import * as ${e.varName} from "${e.module}";`,
                          )
                          .join("\n"),
                        `const ${r} = {${u.map((e) => `...${e.varName}`).join(",")}};`,
                      ].join("\n");
                })
                .join("\n")}\n  ${
                p
                  ? `window.__reactRouterManifest = ${JSON.stringify(
                      (function (e, t) {
                        let { sri: n, ...r } = e,
                          a = new Set(t.state.matches.map((e) => e.route.id)),
                          o = t.state.location.pathname
                            .split("/")
                            .filter(Boolean),
                          l = ["/"];
                        for (o.pop(); o.length > 0; )
                          (l.push(`/${o.join("/")}`), o.pop());
                        l.forEach((e) => {
                          let n = v(t.routes, e, t.basename);
                          n && n.forEach((e) => a.add(e.route.id));
                        });
                        let i = [...a].reduce(
                          (e, t) => Object.assign(e, { [t]: r.routes[t] }),
                          {},
                        );
                        return { ...r, routes: i, sri: !!n || void 0 };
                      })(t, s),
                      null,
                      2,
                    )};`
                  : ""
              }\n  window.__reactRouterRouteModules = {${m.map((e, t) => `${JSON.stringify(e.route.id)}:route${t}`).join(",")}};\n\nimport(${JSON.stringify(t.entry.module)});`
            : " ";
        return a.createElement(
          a.Fragment,
          null,
          a.createElement("script", {
            ...e,
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: { __html: r },
            type: void 0,
          }),
          a.createElement("script", {
            ...e,
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: { __html: o },
            type: "module",
            async: !0,
          }),
        );
      }, []),
      g =
        ut || f
          ? []
          : ((b = t.entry.imports.concat(
              Je(m, t, { includeHydrateFallback: !0 }),
            )),
            [...new Set(b)]);
    var b;
    let y = "object" === typeof t.sri ? t.sri : {};
    return (
      Pe(
        !f,
        "The <Scripts /> element is a no-op when using RSC and can be safely removed.",
      ),
      ut || f
        ? null
        : a.createElement(
            a.Fragment,
            null,
            "object" === typeof t.sri
              ? a.createElement("script", {
                  ...e,
                  "rr-importmap": "",
                  type: "importmap",
                  suppressHydrationWarning: !0,
                  dangerouslySetInnerHTML: {
                    __html: JSON.stringify({ integrity: y }),
                  },
                })
              : null,
            p
              ? null
              : a.createElement("link", {
                  rel: "modulepreload",
                  href: t.url,
                  crossOrigin: e.crossOrigin,
                  integrity: y[t.url],
                  suppressHydrationWarning: !0,
                }),
            a.createElement("link", {
              rel: "modulepreload",
              href: t.entry.module,
              crossOrigin: e.crossOrigin,
              integrity: y[t.entry.module],
              suppressHydrationWarning: !0,
            }),
            g.map((t) =>
              a.createElement("link", {
                key: t,
                rel: "modulepreload",
                href: t,
                crossOrigin: e.crossOrigin,
                integrity: y[t],
                suppressHydrationWarning: !0,
              }),
            ),
            h,
          )
    );
  }
  function ft() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return (e) => {
      t.forEach((t) => {
        "function" === typeof t ? t(e) : null != t && (t.current = e);
      });
    };
  }
  a.Component;
  function pt(e) {
    let { error: t, isOutsideRemixApp: n } = e;
    console.error(t);
    let r,
      o = a.createElement("script", {
        dangerouslySetInnerHTML: {
          __html:
            '\n        console.log(\n          "\ud83d\udcbf Hey developer \ud83d\udc4b. You can provide a way better UX than this when your app throws errors. Check out https://reactrouter.com/how-to/error-boundary for more information."\n        );\n      ',
        },
      });
    if (V(t))
      return a.createElement(
        mt,
        { title: "Unhandled Thrown Response!" },
        a.createElement(
          "h1",
          { style: { fontSize: "24px" } },
          t.status,
          " ",
          t.statusText,
        ),
        o,
      );
    if (t instanceof Error) r = t;
    else {
      let e =
        null == t
          ? "Unknown Error"
          : "object" === typeof t && "toString" in t
            ? t.toString()
            : JSON.stringify(t);
      r = new Error(e);
    }
    return a.createElement(
      mt,
      { title: "Application Error!", isOutsideRemixApp: n },
      a.createElement(
        "h1",
        { style: { fontSize: "24px" } },
        "Application Error",
      ),
      a.createElement(
        "pre",
        {
          style: {
            padding: "2rem",
            background: "hsla(10, 50%, 50%, 0.1)",
            color: "red",
            overflow: "auto",
          },
        },
        r.stack,
      ),
      o,
    );
  }
  function mt(e) {
    let { title: t, renderScripts: n, isOutsideRemixApp: r, children: o } = e,
      { routeModules: l } = rt();
    return l.root?.Layout && !r
      ? o
      : a.createElement(
          "html",
          { lang: "en" },
          a.createElement(
            "head",
            null,
            a.createElement("meta", { charSet: "utf-8" }),
            a.createElement("meta", {
              name: "viewport",
              content: "width=device-width,initial-scale=1,viewport-fit=cover",
            }),
            a.createElement("title", null, t),
          ),
          a.createElement(
            "body",
            null,
            a.createElement(
              "main",
              {
                style: { fontFamily: "system-ui, sans-serif", padding: "2rem" },
              },
              o,
              n ? a.createElement(dt, null) : null,
            ),
          ),
        );
  }
  var ht =
    "undefined" !== typeof window &&
    "undefined" !== typeof window.document &&
    "undefined" !== typeof window.document.createElement;
  try {
    ht && (window.__reactRouterVersion = "7.14.0");
  } catch (Lu) {}
  function gt(e) {
    let { basename: t, children: n, unstable_useTransitions: r, window: o } = e,
      l = a.useRef();
    null == l.current && (l.current = c({ window: o, v5Compat: !0 }));
    let i = l.current,
      [s, u] = a.useState({ action: i.action, location: i.location }),
      d = a.useCallback(
        (e) => {
          !1 === r ? u(e) : a.startTransition(() => u(e));
        },
        [r],
      );
    return (
      a.useLayoutEffect(() => i.listen(d), [i, d]),
      a.createElement(Fe, {
        basename: t,
        children: n,
        location: s.location,
        navigationType: s.action,
        navigator: i,
        unstable_useTransitions: r,
      })
    );
  }
  var bt = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    vt = a.forwardRef(function (e, t) {
      let {
          onClick: n,
          discover: r = "render",
          prefetch: o = "none",
          relative: l,
          reloadDocument: i,
          replace: s,
          unstable_mask: c,
          state: d,
          target: f,
          to: p,
          preventScrollReset: h,
          viewTransition: g,
          unstable_defaultShouldRevalidate: b,
          ...v
        } = e,
        {
          basename: y,
          navigator: x,
          unstable_useTransitions: w,
        } = a.useContext(oe),
        E = "string" === typeof p && bt.test(p),
        k = Q(p, y);
      p = k.to;
      let N = (function (e) {
          let { relative: t } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          u(
            ue(),
            "useHref() may be used only in the context of a <Router> component.",
          );
          let { basename: n, navigator: r } = a.useContext(oe),
            { hash: o, pathname: l, search: i } = he(e, { relative: t }),
            s = l;
          return (
            "/" !== n && (s = "/" === l ? n : B([n, l])),
            r.createHref({ pathname: s, search: i, hash: o })
          );
        })(p, { relative: l }),
        S = de(),
        j = null;
      if (c) {
        let e = $(c, [], S.unstable_mask ? S.unstable_mask.pathname : "/", !0);
        ("/" !== y &&
          (e.pathname = "/" === e.pathname ? y : B([y, e.pathname])),
          (j = x.createHref(e)));
      }
      let [C, R, _] = (function (e, t) {
          let n = a.useContext(nt),
            [r, o] = a.useState(!1),
            [l, i] = a.useState(!1),
            {
              onFocus: s,
              onBlur: c,
              onMouseEnter: u,
              onMouseLeave: d,
              onTouchStart: f,
            } = t,
            p = a.useRef(null);
          (a.useEffect(() => {
            if (("render" === e && i(!0), "viewport" === e)) {
              let e = new IntersectionObserver(
                (e) => {
                  e.forEach((e) => {
                    i(e.isIntersecting);
                  });
                },
                { threshold: 0.5 },
              );
              return (
                p.current && e.observe(p.current),
                () => {
                  e.disconnect();
                }
              );
            }
          }, [e]),
            a.useEffect(() => {
              if (r) {
                let e = setTimeout(() => {
                  i(!0);
                }, 100);
                return () => {
                  clearTimeout(e);
                };
              }
            }, [r]));
          let m = () => {
              o(!0);
            },
            h = () => {
              (o(!1), i(!1));
            };
          return n
            ? "intent" !== e
              ? [l, p, {}]
              : [
                  l,
                  p,
                  {
                    onFocus: at(s, m),
                    onBlur: at(c, h),
                    onMouseEnter: at(u, m),
                    onMouseLeave: at(d, h),
                    onTouchStart: at(f, m),
                  },
                ]
            : [!1, p, {}];
        })(o, v),
        A = (function (e) {
          let {
              target: t,
              replace: n,
              unstable_mask: r,
              state: o,
              preventScrollReset: l,
              relative: i,
              viewTransition: s,
              unstable_defaultShouldRevalidate: c,
              unstable_useTransitions: u,
            } = arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : {},
            d = me(),
            f = de(),
            p = he(e, { relative: i });
          return a.useCallback(
            (h) => {
              if (
                (function (e, t) {
                  return (
                    0 === e.button &&
                    (!t || "_self" === t) &&
                    !(function (e) {
                      return !!(
                        e.metaKey ||
                        e.altKey ||
                        e.ctrlKey ||
                        e.shiftKey
                      );
                    })(e)
                  );
                })(h, t)
              ) {
                h.preventDefault();
                let t = void 0 !== n ? n : m(f) === m(p),
                  g = () =>
                    d(e, {
                      replace: t,
                      unstable_mask: r,
                      state: o,
                      preventScrollReset: l,
                      relative: i,
                      viewTransition: s,
                      unstable_defaultShouldRevalidate: c,
                    });
                u ? a.startTransition(() => g()) : g();
              }
            },
            [f, d, p, n, r, o, t, e, l, i, s, c, u],
          );
        })(p, {
          replace: s,
          unstable_mask: c,
          state: d,
          target: f,
          preventScrollReset: h,
          relative: l,
          viewTransition: g,
          unstable_defaultShouldRevalidate: b,
          unstable_useTransitions: w,
        });
      let D = !(k.isExternal || i),
        P = a.createElement("a", {
          ...v,
          ..._,
          href: (D ? j : void 0) || k.absoluteURL || N,
          onClick: D
            ? function (e) {
                (n && n(e), e.defaultPrevented || A(e));
              }
            : n,
          ref: ft(t, R),
          target: f,
          "data-discover": E || "render" !== r ? void 0 : "true",
        });
      return C && !E
        ? a.createElement(a.Fragment, null, P, a.createElement(lt, { page: N }))
        : P;
    });
  ((vt.displayName = "Link"),
    (a.forwardRef(function (e, t) {
      let {
          "aria-current": n = "page",
          caseSensitive: r = !1,
          className: o = "",
          end: l = !1,
          style: i,
          to: s,
          viewTransition: c,
          children: d,
          ...f
        } = e,
        p = he(s, { relative: f.relative }),
        m = de(),
        h = a.useContext(Z),
        { navigator: g, basename: b } = a.useContext(oe),
        v =
          null != h &&
          (function (e) {
            let { relative: t } =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              n = a.useContext(ne);
            u(
              null != n,
              "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
            );
            let { basename: r } = wt("useViewTransitionState"),
              o = he(e, { relative: t });
            if (!n.isTransitioning) return !1;
            let l =
                O(n.currentLocation.pathname, r) || n.currentLocation.pathname,
              i = O(n.nextLocation.pathname, r) || n.nextLocation.pathname;
            return null != D(o.pathname, i) || null != D(o.pathname, l);
          })(p) &&
          !0 === c,
        y = g.encodeLocation ? g.encodeLocation(p).pathname : p.pathname,
        x = m.pathname,
        w =
          h && h.navigation && h.navigation.location
            ? h.navigation.location.pathname
            : null;
      (r ||
        ((x = x.toLowerCase()),
        (w = w ? w.toLowerCase() : null),
        (y = y.toLowerCase())),
        w && b && (w = O(w, b) || w));
      const E = "/" !== y && y.endsWith("/") ? y.length - 1 : y.length;
      let k,
        N = x === y || (!l && x.startsWith(y) && "/" === x.charAt(E)),
        S =
          null != w &&
          (w === y || (!l && w.startsWith(y) && "/" === w.charAt(y.length))),
        j = { isActive: N, isPending: S, isTransitioning: v },
        C = N ? n : void 0;
      k =
        "function" === typeof o
          ? o(j)
          : [
              o,
              N ? "active" : null,
              S ? "pending" : null,
              v ? "transitioning" : null,
            ]
              .filter(Boolean)
              .join(" ");
      let R = "function" === typeof i ? i(j) : i;
      return a.createElement(
        vt,
        {
          ...f,
          "aria-current": C,
          className: k,
          ref: t,
          style: R,
          to: s,
          viewTransition: c,
        },
        "function" === typeof d ? d(j) : d,
      );
    }).displayName = "NavLink"));
  var yt = a.forwardRef((e, t) => {
    let {
        discover: n = "render",
        fetcherKey: r,
        navigate: o,
        reloadDocument: l,
        replace: i,
        state: s,
        method: c = ze,
        action: d,
        onSubmit: f,
        relative: p,
        preventScrollReset: h,
        viewTransition: g,
        unstable_defaultShouldRevalidate: b,
        ...v
      } = e,
      { unstable_useTransitions: y } = a.useContext(oe),
      x = Nt(),
      w = (function (e) {
        let { relative: t } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          { basename: n } = a.useContext(oe),
          r = a.useContext(ie);
        u(r, "useFormAction must be used inside a RouteContext");
        let [o] = r.matches.slice(-1),
          l = { ...he(e || ".", { relative: t }) },
          i = de();
        if (null == e) {
          l.search = i.search;
          let e = new URLSearchParams(l.search),
            t = e.getAll("index");
          if (t.some((e) => "" === e)) {
            (e.delete("index"),
              t.filter((e) => e).forEach((t) => e.append("index", t)));
            let n = e.toString();
            l.search = n ? `?${n}` : "";
          }
        }
        (e && "." !== e) ||
          !o.route.index ||
          (l.search = l.search ? l.search.replace(/^\?/, "?index&") : "?index");
        "/" !== n && (l.pathname = "/" === l.pathname ? n : B([n, l.pathname]));
        return m(l);
      })(d, { relative: p }),
      E = "get" === c.toLowerCase() ? "get" : "post",
      k = "string" === typeof d && bt.test(d);
    return a.createElement("form", {
      ref: t,
      method: E,
      action: w,
      onSubmit: l
        ? f
        : (e) => {
            if ((f && f(e), e.defaultPrevented)) return;
            e.preventDefault();
            let t = e.nativeEvent.submitter,
              n = t?.getAttribute("formmethod") || c,
              l = () =>
                x(t || e.currentTarget, {
                  fetcherKey: r,
                  method: n,
                  navigate: o,
                  replace: i,
                  state: s,
                  relative: p,
                  preventScrollReset: h,
                  viewTransition: g,
                  unstable_defaultShouldRevalidate: b,
                });
            y && !1 !== o ? a.startTransition(() => l()) : l();
          },
      ...v,
      "data-discover": k || "render" !== n ? void 0 : "true",
    });
  });
  function xt(e) {
    return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
  }
  function wt(e) {
    let t = a.useContext(X);
    return (u(t, xt(e)), t);
  }
  yt.displayName = "Form";
  var Et = 0,
    kt = () => `__${String(++Et)}__`;
  function Nt() {
    let { router: e } = wt("useSubmit"),
      { basename: t } = a.useContext(oe),
      n = Ce("useRouteId"),
      r = e.fetch,
      o = e.navigate;
    return a.useCallback(
      async function (e) {
        let a =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          { action: l, method: i, encType: s, formData: c, body: u } = He(e, t);
        if (!1 === a.navigate) {
          let e = a.fetcherKey || kt();
          await r(e, n, a.action || l, {
            unstable_defaultShouldRevalidate:
              a.unstable_defaultShouldRevalidate,
            preventScrollReset: a.preventScrollReset,
            formData: c,
            body: u,
            formMethod: a.method || i,
            formEncType: a.encType || s,
            flushSync: a.flushSync,
          });
        } else
          await o(a.action || l, {
            unstable_defaultShouldRevalidate:
              a.unstable_defaultShouldRevalidate,
            preventScrollReset: a.preventScrollReset,
            formData: c,
            body: u,
            formMethod: a.method || i,
            formEncType: a.encType || s,
            replace: a.replace,
            state: a.state,
            fromRouteId: n,
            flushSync: a.flushSync,
            viewTransition: a.viewTransition,
          });
      },
      [r, o, t, n],
    );
  }
  var St = n(579);
  const jt = (0, a.createContext)(),
    Ct = () => {
      const e = (0, a.useContext)(jt);
      if (!e) throw new Error("useCart must be used within CartProvider");
      return e;
    },
    Rt = (e) => {
      let { children: t } = e;
      const [n, r] = (0, a.useState)([]);
      ((0, a.useEffect)(() => {
        const e = localStorage.getItem("cart");
        e && r(JSON.parse(e));
      }, []),
        (0, a.useEffect)(() => {
          localStorage.setItem("cart", JSON.stringify(n));
        }, [n]));
      const o = () =>
        n.reduce(
          (e, t) =>
            e +
            t.price * t.quantity +
            (t.addons || []).reduce((e, n) => e + n.price * t.quantity, 0),
          0,
        );
      return (0, St.jsx)(jt.Provider, {
        value: {
          cart: n,
          addToCart: (e) => {
            r((t) => {
              const n = (e.addons || [])
                .map((e) => e.id)
                .sort()
                .join(",");
              return t.find((t) => {
                const r = (t.addons || [])
                  .map((e) => e.id)
                  .sort()
                  .join(",");
                return t.product_id === e.id && r === n;
              })
                ? t.map((t) => {
                    const r = (t.addons || [])
                      .map((e) => e.id)
                      .sort()
                      .join(",");
                    return t.product_id === e.id && r === n
                      ? { ...t, quantity: t.quantity + (e.quantity || 1) }
                      : t;
                  })
                : [
                    ...t,
                    {
                      product_id: e.id,
                      name: e.name,
                      price: e.price,
                      quantity: e.quantity || 1,
                      image: e.image,
                      addons: Array.isArray(e.addons) ? e.addons : [],
                    },
                  ];
            });
          },
          removeFromCart: function (e) {
            const t = (
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : []
            )
              .map((e) => e.id)
              .sort()
              .join(",");
            r((n) => {
              const r = n.find((n) => {
                const r = (n.addons || [])
                  .map((e) => e.id)
                  .sort()
                  .join(",");
                return n.product_id === e && r === t;
              });
              return r && r.quantity > 1
                ? n.map((n) => {
                    const r = (n.addons || [])
                      .map((e) => e.id)
                      .sort()
                      .join(",");
                    return n.product_id === e && r === t
                      ? { ...n, quantity: n.quantity - 1 }
                      : n;
                  })
                : n.filter((n) => {
                    const r = (n.addons || [])
                      .map((e) => e.id)
                      .sort()
                      .join(",");
                    return !(n.product_id === e && r === t);
                  });
            });
          },
          getItemQuantity: (e) => {
            const t = n.find((t) => t.product_id === e);
            return t ? t.quantity : 0;
          },
          getTotalItems: () => n.reduce((e, t) => e + t.quantity, 0),
          getTotalAmount: o,
          getItemsSubtotal: () => o(),
          clearCart: () => {
            r([]);
          },
        },
        children: t,
      });
    };
  var _t = (e, t, n, r, a, o, l, i) => {
      let s = document.documentElement,
        c = ["light", "dark"];
      function u(t) {
        ((Array.isArray(e) ? e : [e]).forEach((e) => {
          let n = "class" === e,
            r = n && o ? a.map((e) => o[e] || e) : a;
          n
            ? (s.classList.remove(...r), s.classList.add(o && o[t] ? o[t] : t))
            : s.setAttribute(e, t);
        }),
          (function (e) {
            i && c.includes(e) && (s.style.colorScheme = e);
          })(t));
      }
      if (r) u(r);
      else
        try {
          let e = localStorage.getItem(t) || n;
          u(
            l && "system" === e
              ? window.matchMedia("(prefers-color-scheme: dark)").matches
                ? "dark"
                : "light"
              : e,
          );
        } catch (d) {}
    },
    At = a.createContext(void 0),
    Dt = { setTheme: (e) => {}, themes: [] },
    Pt =
      (a.memo((e) => {
        let {
            forcedTheme: t,
            storageKey: n,
            attribute: r,
            enableSystem: o,
            enableColorScheme: l,
            defaultTheme: i,
            value: s,
            themes: c,
            nonce: u,
            scriptProps: d,
          } = e,
          f = JSON.stringify([r, n, i, t, c, s, o, l]).slice(1, -1);
        return a.createElement("script", {
          ...d,
          suppressHydrationWarning: !0,
          nonce: "undefined" == typeof window ? u : "",
          dangerouslySetInnerHTML: { __html: `(${_t.toString()})(${f})` },
        });
      }),
      n(950));
  const Tt = Array(12).fill(0),
    Ot = (e) => {
      let { visible: t, className: n } = e;
      return a.createElement(
        "div",
        {
          className: ["sonner-loading-wrapper", n].filter(Boolean).join(" "),
          "data-visible": t,
        },
        a.createElement(
          "div",
          { className: "sonner-spinner" },
          Tt.map((e, t) =>
            a.createElement("div", {
              className: "sonner-loading-bar",
              key: `spinner-bar-${t}`,
            }),
          ),
        ),
      );
    },
    Ft = a.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        height: "20",
        width: "20",
      },
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
        clipRule: "evenodd",
      }),
    ),
    Lt = a.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        height: "20",
        width: "20",
      },
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
        clipRule: "evenodd",
      }),
    ),
    Mt = a.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        height: "20",
        width: "20",
      },
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
        clipRule: "evenodd",
      }),
    ),
    zt = a.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        height: "20",
        width: "20",
      },
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
        clipRule: "evenodd",
      }),
    ),
    It = a.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "12",
        height: "12",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      a.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
      a.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
    );
  let $t = 1;
  const Bt = new (class {
      constructor() {
        ((this.subscribe = (e) => (
          this.subscribers.push(e),
          () => {
            const t = this.subscribers.indexOf(e);
            this.subscribers.splice(t, 1);
          }
        )),
          (this.publish = (e) => {
            this.subscribers.forEach((t) => t(e));
          }),
          (this.addToast = (e) => {
            (this.publish(e), (this.toasts = [...this.toasts, e]));
          }),
          (this.create = (e) => {
            var t;
            const { message: n, ...r } = e,
              a =
                "number" === typeof (null == e ? void 0 : e.id) ||
                (null == (t = e.id) ? void 0 : t.length) > 0
                  ? e.id
                  : $t++,
              o = this.toasts.find((e) => e.id === a),
              l = void 0 === e.dismissible || e.dismissible;
            return (
              this.dismissedToasts.has(a) && this.dismissedToasts.delete(a),
              o
                ? (this.toasts = this.toasts.map((t) =>
                    t.id === a
                      ? (this.publish({ ...t, ...e, id: a, title: n }),
                        { ...t, ...e, id: a, dismissible: l, title: n })
                      : t,
                  ))
                : this.addToast({ title: n, ...r, dismissible: l, id: a }),
              a
            );
          }),
          (this.dismiss = (e) => (
            e
              ? (this.dismissedToasts.add(e),
                requestAnimationFrame(() =>
                  this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })),
                ))
              : this.toasts.forEach((e) => {
                  this.subscribers.forEach((t) => t({ id: e.id, dismiss: !0 }));
                }),
            e
          )),
          (this.message = (e, t) => this.create({ ...t, message: e })),
          (this.error = (e, t) =>
            this.create({ ...t, message: e, type: "error" })),
          (this.success = (e, t) =>
            this.create({ ...t, type: "success", message: e })),
          (this.info = (e, t) =>
            this.create({ ...t, type: "info", message: e })),
          (this.warning = (e, t) =>
            this.create({ ...t, type: "warning", message: e })),
          (this.loading = (e, t) =>
            this.create({ ...t, type: "loading", message: e })),
          (this.promise = (e, t) => {
            if (!t) return;
            let n;
            void 0 !== t.loading &&
              (n = this.create({
                ...t,
                promise: e,
                type: "loading",
                message: t.loading,
                description:
                  "function" !== typeof t.description ? t.description : void 0,
              }));
            const r = Promise.resolve(e instanceof Function ? e() : e);
            let o,
              l = void 0 !== n;
            const i = r
                .then(async (e) => {
                  o = ["resolve", e];
                  if (a.isValidElement(e))
                    ((l = !1),
                      this.create({ id: n, type: "default", message: e }));
                  else if (Ut(e) && !e.ok) {
                    l = !1;
                    const r =
                        "function" === typeof t.error
                          ? await t.error(`HTTP error! status: ${e.status}`)
                          : t.error,
                      o =
                        "function" === typeof t.description
                          ? await t.description(
                              `HTTP error! status: ${e.status}`,
                            )
                          : t.description,
                      i =
                        "object" === typeof r && !a.isValidElement(r)
                          ? r
                          : { message: r };
                    this.create({ id: n, type: "error", description: o, ...i });
                  } else if (e instanceof Error) {
                    l = !1;
                    const r =
                        "function" === typeof t.error
                          ? await t.error(e)
                          : t.error,
                      o =
                        "function" === typeof t.description
                          ? await t.description(e)
                          : t.description,
                      i =
                        "object" === typeof r && !a.isValidElement(r)
                          ? r
                          : { message: r };
                    this.create({ id: n, type: "error", description: o, ...i });
                  } else if (void 0 !== t.success) {
                    l = !1;
                    const r =
                        "function" === typeof t.success
                          ? await t.success(e)
                          : t.success,
                      o =
                        "function" === typeof t.description
                          ? await t.description(e)
                          : t.description,
                      i =
                        "object" === typeof r && !a.isValidElement(r)
                          ? r
                          : { message: r };
                    this.create({
                      id: n,
                      type: "success",
                      description: o,
                      ...i,
                    });
                  }
                })
                .catch(async (e) => {
                  if (((o = ["reject", e]), void 0 !== t.error)) {
                    l = !1;
                    const r =
                        "function" === typeof t.error
                          ? await t.error(e)
                          : t.error,
                      o =
                        "function" === typeof t.description
                          ? await t.description(e)
                          : t.description,
                      i =
                        "object" === typeof r && !a.isValidElement(r)
                          ? r
                          : { message: r };
                    this.create({ id: n, type: "error", description: o, ...i });
                  }
                })
                .finally(() => {
                  (l && (this.dismiss(n), (n = void 0)),
                    null == t.finally || t.finally.call(t));
                }),
              s = () =>
                new Promise((e, t) =>
                  i
                    .then(() => ("reject" === o[0] ? t(o[1]) : e(o[1])))
                    .catch(t),
                );
            return "string" !== typeof n && "number" !== typeof n
              ? { unwrap: s }
              : Object.assign(n, { unwrap: s });
          }),
          (this.custom = (e, t) => {
            const n = (null == t ? void 0 : t.id) || $t++;
            return (this.create({ jsx: e(n), id: n, ...t }), n);
          }),
          (this.getActiveToasts = () =>
            this.toasts.filter((e) => !this.dismissedToasts.has(e.id))),
          (this.subscribers = []),
          (this.toasts = []),
          (this.dismissedToasts = new Set()));
      }
    })(),
    Ut = (e) =>
      e &&
      "object" === typeof e &&
      "ok" in e &&
      "boolean" === typeof e.ok &&
      "status" in e &&
      "number" === typeof e.status,
    Wt = (e, t) => {
      const n = (null == t ? void 0 : t.id) || $t++;
      return (Bt.addToast({ title: e, ...t, id: n }), n);
    },
    Ht = Object.assign(
      Wt,
      {
        success: Bt.success,
        info: Bt.info,
        warning: Bt.warning,
        error: Bt.error,
        custom: Bt.custom,
        message: Bt.message,
        promise: Bt.promise,
        dismiss: Bt.dismiss,
        loading: Bt.loading,
      },
      { getHistory: () => Bt.toasts, getToasts: () => Bt.getActiveToasts() },
    );
  function qt(e) {
    return void 0 !== e.label;
  }
  !(function (e) {
    if (!e || "undefined" == typeof document) return;
    let t = document.head || document.getElementsByTagName("head")[0],
      n = document.createElement("style");
    ((n.type = "text/css"),
      t.appendChild(n),
      n.styleSheet
        ? (n.styleSheet.cssText = e)
        : n.appendChild(document.createTextNode(e)));
  })(
    "[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}",
  );
  const Vt = 3,
    Kt = 14;
  function Yt() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return t.filter(Boolean).join(" ");
  }
  const Qt = (e) => {
    var t, n, r, o, l, i, s, c, u;
    const {
        invert: d,
        toast: f,
        unstyled: p,
        interacting: m,
        setHeights: h,
        visibleToasts: g,
        heights: b,
        index: v,
        toasts: y,
        expanded: x,
        removeToast: w,
        defaultRichColors: E,
        closeButton: k,
        style: N,
        cancelButtonStyle: S,
        actionButtonStyle: j,
        className: C = "",
        descriptionClassName: R = "",
        duration: _,
        position: A,
        gap: D,
        expandByDefault: P,
        classNames: T,
        icons: O,
        closeButtonAriaLabel: F = "Close toast",
      } = e,
      [L, M] = a.useState(null),
      [z, I] = a.useState(null),
      [$, B] = a.useState(!1),
      [U, W] = a.useState(!1),
      [H, q] = a.useState(!1),
      [V, K] = a.useState(!1),
      [Y, Q] = a.useState(!1),
      [G, J] = a.useState(0),
      [X, Z] = a.useState(0),
      ee = a.useRef(f.duration || _ || 4e3),
      te = a.useRef(null),
      ne = a.useRef(null),
      re = 0 === v,
      ae = v + 1 <= g,
      oe = f.type,
      le = !1 !== f.dismissible,
      ie = f.className || "",
      se = f.descriptionClassName || "",
      ce = a.useMemo(
        () => b.findIndex((e) => e.toastId === f.id) || 0,
        [b, f.id],
      ),
      ue = a.useMemo(() => {
        var e;
        return null != (e = f.closeButton) ? e : k;
      }, [f.closeButton, k]),
      de = a.useMemo(() => f.duration || _ || 4e3, [f.duration, _]),
      fe = a.useRef(0),
      pe = a.useRef(0),
      me = a.useRef(0),
      he = a.useRef(null),
      [ge, be] = A.split("-"),
      ve = a.useMemo(
        () => b.reduce((e, t, n) => (n >= ce ? e : e + t.height), 0),
        [b, ce],
      ),
      ye = (() => {
        const [e, t] = a.useState(document.hidden);
        return (
          a.useEffect(() => {
            const e = () => {
              t(document.hidden);
            };
            return (
              document.addEventListener("visibilitychange", e),
              () => window.removeEventListener("visibilitychange", e)
            );
          }, []),
          e
        );
      })(),
      xe = f.invert || d,
      we = "loading" === oe;
    ((pe.current = a.useMemo(() => ce * D + ve, [ce, ve])),
      a.useEffect(() => {
        ee.current = de;
      }, [de]),
      a.useEffect(() => {
        B(!0);
      }, []),
      a.useEffect(() => {
        const e = ne.current;
        if (e) {
          const t = e.getBoundingClientRect().height;
          return (
            Z(t),
            h((e) => [
              { toastId: f.id, height: t, position: f.position },
              ...e,
            ]),
            () => h((e) => e.filter((e) => e.toastId !== f.id))
          );
        }
      }, [h, f.id]),
      a.useLayoutEffect(() => {
        if (!$) return;
        const e = ne.current,
          t = e.style.height;
        e.style.height = "auto";
        const n = e.getBoundingClientRect().height;
        ((e.style.height = t),
          Z(n),
          h((e) =>
            e.find((e) => e.toastId === f.id)
              ? e.map((e) => (e.toastId === f.id ? { ...e, height: n } : e))
              : [{ toastId: f.id, height: n, position: f.position }, ...e],
          ));
      }, [$, f.title, f.description, h, f.id, f.jsx, f.action, f.cancel]));
    const Ee = a.useCallback(() => {
      (W(!0),
        J(pe.current),
        h((e) => e.filter((e) => e.toastId !== f.id)),
        setTimeout(() => {
          w(f);
        }, 200));
    }, [f, w, h, pe]);
    (a.useEffect(() => {
      if (
        (f.promise && "loading" === oe) ||
        f.duration === 1 / 0 ||
        "loading" === f.type
      )
        return;
      let e;
      return (
        x || m || ye
          ? (() => {
              if (me.current < fe.current) {
                const e = new Date().getTime() - fe.current;
                ee.current = ee.current - e;
              }
              me.current = new Date().getTime();
            })()
          : ee.current !== 1 / 0 &&
            ((fe.current = new Date().getTime()),
            (e = setTimeout(() => {
              (null == f.onAutoClose || f.onAutoClose.call(f, f), Ee());
            }, ee.current))),
        () => clearTimeout(e)
      );
    }, [x, m, f, oe, ye, Ee]),
      a.useEffect(() => {
        f.delete && (Ee(), null == f.onDismiss || f.onDismiss.call(f, f));
      }, [Ee, f.delete]));
    const ke =
      f.icon ||
      (null == O ? void 0 : O[oe]) ||
      ((e) => {
        switch (e) {
          case "success":
            return Ft;
          case "info":
            return Mt;
          case "warning":
            return Lt;
          case "error":
            return zt;
          default:
            return null;
        }
      })(oe);
    var Ne, Se;
    return a.createElement(
      "li",
      {
        tabIndex: 0,
        ref: ne,
        className: Yt(
          C,
          ie,
          null == T ? void 0 : T.toast,
          null == f || null == (t = f.classNames) ? void 0 : t.toast,
          null == T ? void 0 : T.default,
          null == T ? void 0 : T[oe],
          null == f || null == (n = f.classNames) ? void 0 : n[oe],
        ),
        "data-sonner-toast": "",
        "data-rich-colors": null != (Ne = f.richColors) ? Ne : E,
        "data-styled": !Boolean(f.jsx || f.unstyled || p),
        "data-mounted": $,
        "data-promise": Boolean(f.promise),
        "data-swiped": Y,
        "data-removed": U,
        "data-visible": ae,
        "data-y-position": ge,
        "data-x-position": be,
        "data-index": v,
        "data-front": re,
        "data-swiping": H,
        "data-dismissible": le,
        "data-type": oe,
        "data-invert": xe,
        "data-swipe-out": V,
        "data-swipe-direction": z,
        "data-expanded": Boolean(x || (P && $)),
        "data-testid": f.testId,
        style: {
          "--index": v,
          "--toasts-before": v,
          "--z-index": y.length - v,
          "--offset": `${U ? G : pe.current}px`,
          "--initial-height": P ? "auto" : `${X}px`,
          ...N,
          ...f.style,
        },
        onDragEnd: () => {
          (q(!1), M(null), (he.current = null));
        },
        onPointerDown: (e) => {
          2 !== e.button &&
            !we &&
            le &&
            ((te.current = new Date()),
            J(pe.current),
            e.target.setPointerCapture(e.pointerId),
            "BUTTON" !== e.target.tagName &&
              (q(!0), (he.current = { x: e.clientX, y: e.clientY })));
        },
        onPointerUp: () => {
          var e, t, n;
          if (V || !le) return;
          he.current = null;
          const r = Number(
              (null == (e = ne.current)
                ? void 0
                : e.style
                    .getPropertyValue("--swipe-amount-x")
                    .replace("px", "")) || 0,
            ),
            a = Number(
              (null == (t = ne.current)
                ? void 0
                : t.style
                    .getPropertyValue("--swipe-amount-y")
                    .replace("px", "")) || 0,
            ),
            o =
              new Date().getTime() -
              (null == (n = te.current) ? void 0 : n.getTime()),
            l = "x" === L ? r : a,
            i = Math.abs(l) / o;
          if (Math.abs(l) >= 45 || i > 0.11)
            return (
              J(pe.current),
              null == f.onDismiss || f.onDismiss.call(f, f),
              I("x" === L ? (r > 0 ? "right" : "left") : a > 0 ? "down" : "up"),
              Ee(),
              void K(!0)
            );
          var s, c;
          (null == (s = ne.current) ||
            s.style.setProperty("--swipe-amount-x", "0px"),
            null == (c = ne.current) ||
              c.style.setProperty("--swipe-amount-y", "0px"),
            Q(!1),
            q(!1),
            M(null));
        },
        onPointerMove: (t) => {
          var n, r, a;
          if (!he.current || !le) return;
          if (
            (null == (n = window.getSelection())
              ? void 0
              : n.toString().length) > 0
          )
            return;
          const o = t.clientY - he.current.y,
            l = t.clientX - he.current.x;
          var i;
          const s =
            null != (i = e.swipeDirections)
              ? i
              : (function (e) {
                  const [t, n] = e.split("-"),
                    r = [];
                  return (t && r.push(t), n && r.push(n), r);
                })(A);
          !L &&
            (Math.abs(l) > 1 || Math.abs(o) > 1) &&
            M(Math.abs(l) > Math.abs(o) ? "x" : "y");
          let c = { x: 0, y: 0 };
          const u = (e) => 1 / (1.5 + Math.abs(e) / 20);
          if ("y" === L) {
            if (s.includes("top") || s.includes("bottom"))
              if (
                (s.includes("top") && o < 0) ||
                (s.includes("bottom") && o > 0)
              )
                c.y = o;
              else {
                const e = o * u(o);
                c.y = Math.abs(e) < Math.abs(o) ? e : o;
              }
          } else if ("x" === L && (s.includes("left") || s.includes("right")))
            if ((s.includes("left") && l < 0) || (s.includes("right") && l > 0))
              c.x = l;
            else {
              const e = l * u(l);
              c.x = Math.abs(e) < Math.abs(l) ? e : l;
            }
          ((Math.abs(c.x) > 0 || Math.abs(c.y) > 0) && Q(!0),
            null == (r = ne.current) ||
              r.style.setProperty("--swipe-amount-x", `${c.x}px`),
            null == (a = ne.current) ||
              a.style.setProperty("--swipe-amount-y", `${c.y}px`));
        },
      },
      ue && !f.jsx && "loading" !== oe
        ? a.createElement(
            "button",
            {
              "aria-label": F,
              "data-disabled": we,
              "data-close-button": !0,
              onClick:
                we || !le
                  ? () => {}
                  : () => {
                      (Ee(), null == f.onDismiss || f.onDismiss.call(f, f));
                    },
              className: Yt(
                null == T ? void 0 : T.closeButton,
                null == f || null == (r = f.classNames)
                  ? void 0
                  : r.closeButton,
              ),
            },
            null != (Se = null == O ? void 0 : O.close) ? Se : It,
          )
        : null,
      (oe || f.icon || f.promise) &&
        null !== f.icon &&
        (null !== (null == O ? void 0 : O[oe]) || f.icon)
        ? a.createElement(
            "div",
            {
              "data-icon": "",
              className: Yt(
                null == T ? void 0 : T.icon,
                null == f || null == (o = f.classNames) ? void 0 : o.icon,
              ),
            },
            f.promise || ("loading" === f.type && !f.icon)
              ? f.icon ||
                  (function () {
                    var e, t;
                    return (null == O ? void 0 : O.loading)
                      ? a.createElement(
                          "div",
                          {
                            className: Yt(
                              null == T ? void 0 : T.loader,
                              null == f || null == (t = f.classNames)
                                ? void 0
                                : t.loader,
                              "sonner-loader",
                            ),
                            "data-visible": "loading" === oe,
                          },
                          O.loading,
                        )
                      : a.createElement(Ot, {
                          className: Yt(
                            null == T ? void 0 : T.loader,
                            null == f || null == (e = f.classNames)
                              ? void 0
                              : e.loader,
                          ),
                          visible: "loading" === oe,
                        });
                  })()
              : null,
            "loading" !== f.type ? ke : null,
          )
        : null,
      a.createElement(
        "div",
        {
          "data-content": "",
          className: Yt(
            null == T ? void 0 : T.content,
            null == f || null == (l = f.classNames) ? void 0 : l.content,
          ),
        },
        a.createElement(
          "div",
          {
            "data-title": "",
            className: Yt(
              null == T ? void 0 : T.title,
              null == f || null == (i = f.classNames) ? void 0 : i.title,
            ),
          },
          f.jsx ? f.jsx : "function" === typeof f.title ? f.title() : f.title,
        ),
        f.description
          ? a.createElement(
              "div",
              {
                "data-description": "",
                className: Yt(
                  R,
                  se,
                  null == T ? void 0 : T.description,
                  null == f || null == (s = f.classNames)
                    ? void 0
                    : s.description,
                ),
              },
              "function" === typeof f.description
                ? f.description()
                : f.description,
            )
          : null,
      ),
      a.isValidElement(f.cancel)
        ? f.cancel
        : f.cancel && qt(f.cancel)
          ? a.createElement(
              "button",
              {
                "data-button": !0,
                "data-cancel": !0,
                style: f.cancelButtonStyle || S,
                onClick: (e) => {
                  qt(f.cancel) &&
                    le &&
                    (null == f.cancel.onClick ||
                      f.cancel.onClick.call(f.cancel, e),
                    Ee());
                },
                className: Yt(
                  null == T ? void 0 : T.cancelButton,
                  null == f || null == (c = f.classNames)
                    ? void 0
                    : c.cancelButton,
                ),
              },
              f.cancel.label,
            )
          : null,
      a.isValidElement(f.action)
        ? f.action
        : f.action && qt(f.action)
          ? a.createElement(
              "button",
              {
                "data-button": !0,
                "data-action": !0,
                style: f.actionButtonStyle || j,
                onClick: (e) => {
                  qt(f.action) &&
                    (null == f.action.onClick ||
                      f.action.onClick.call(f.action, e),
                    e.defaultPrevented || Ee());
                },
                className: Yt(
                  null == T ? void 0 : T.actionButton,
                  null == f || null == (u = f.classNames)
                    ? void 0
                    : u.actionButton,
                ),
              },
              f.action.label,
            )
          : null,
    );
  };
  function Gt() {
    if ("undefined" === typeof window) return "ltr";
    if ("undefined" === typeof document) return "ltr";
    const e = document.documentElement.getAttribute("dir");
    return "auto" !== e && e
      ? e
      : window.getComputedStyle(document.documentElement).direction;
  }
  function Jt(e, t) {
    const n = {};
    return (
      [e, t].forEach((e, t) => {
        const r = 1 === t,
          a = r ? "--mobile-offset" : "--offset",
          o = r ? "16px" : "24px";
        function l(e) {
          ["top", "right", "bottom", "left"].forEach((t) => {
            n[`${a}-${t}`] = "number" === typeof e ? `${e}px` : e;
          });
        }
        "number" === typeof e || "string" === typeof e
          ? l(e)
          : "object" === typeof e
            ? ["top", "right", "bottom", "left"].forEach((t) => {
                void 0 === e[t]
                  ? (n[`${a}-${t}`] = o)
                  : (n[`${a}-${t}`] =
                      "number" === typeof e[t] ? `${e[t]}px` : e[t]);
              })
            : l(o);
      }),
      n
    );
  }
  const Xt = a.forwardRef(function (e, t) {
      const {
          id: n,
          invert: r,
          position: o = "bottom-right",
          hotkey: l = ["altKey", "KeyT"],
          expand: i,
          closeButton: s,
          className: c,
          offset: u,
          mobileOffset: d,
          theme: f = "light",
          richColors: p,
          duration: m,
          style: h,
          visibleToasts: g = Vt,
          toastOptions: b,
          dir: v = Gt(),
          gap: y = Kt,
          icons: x,
          containerAriaLabel: w = "Notifications",
        } = e,
        [E, k] = a.useState([]),
        N = a.useMemo(
          () =>
            n
              ? E.filter((e) => e.toasterId === n)
              : E.filter((e) => !e.toasterId),
          [E, n],
        ),
        S = a.useMemo(
          () =>
            Array.from(
              new Set(
                [o].concat(N.filter((e) => e.position).map((e) => e.position)),
              ),
            ),
          [N, o],
        ),
        [j, C] = a.useState([]),
        [R, _] = a.useState(!1),
        [A, D] = a.useState(!1),
        [P, T] = a.useState(
          "system" !== f
            ? f
            : "undefined" !== typeof window &&
                window.matchMedia &&
                window.matchMedia("(prefers-color-scheme: dark)").matches
              ? "dark"
              : "light",
        ),
        O = a.useRef(null),
        F = l.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
        L = a.useRef(null),
        M = a.useRef(!1),
        z = a.useCallback((e) => {
          k((t) => {
            var n;
            return (
              (null == (n = t.find((t) => t.id === e.id))
                ? void 0
                : n.delete) || Bt.dismiss(e.id),
              t.filter((t) => {
                let { id: n } = t;
                return n !== e.id;
              })
            );
          });
        }, []);
      return (
        a.useEffect(
          () =>
            Bt.subscribe((e) => {
              e.dismiss
                ? requestAnimationFrame(() => {
                    k((t) =>
                      t.map((t) => (t.id === e.id ? { ...t, delete: !0 } : t)),
                    );
                  })
                : setTimeout(() => {
                    Pt.flushSync(() => {
                      k((t) => {
                        const n = t.findIndex((t) => t.id === e.id);
                        return -1 !== n
                          ? [
                              ...t.slice(0, n),
                              { ...t[n], ...e },
                              ...t.slice(n + 1),
                            ]
                          : [e, ...t];
                      });
                    });
                  });
            }),
          [E],
        ),
        a.useEffect(() => {
          if ("system" !== f) return void T(f);
          if (
            ("system" === f &&
              (window.matchMedia &&
              window.matchMedia("(prefers-color-scheme: dark)").matches
                ? T("dark")
                : T("light")),
            "undefined" === typeof window)
          )
            return;
          const e = window.matchMedia("(prefers-color-scheme: dark)");
          try {
            e.addEventListener("change", (e) => {
              let { matches: t } = e;
              T(t ? "dark" : "light");
            });
          } catch (t) {
            e.addListener((e) => {
              let { matches: t } = e;
              try {
                T(t ? "dark" : "light");
              } catch (Lu) {
                console.error(Lu);
              }
            });
          }
        }, [f]),
        a.useEffect(() => {
          E.length <= 1 && _(!1);
        }, [E]),
        a.useEffect(() => {
          const e = (e) => {
            var t;
            var n;
            l.every((t) => e[t] || e.code === t) &&
              (_(!0), null == (n = O.current) || n.focus());
            "Escape" !== e.code ||
              (document.activeElement !== O.current &&
                !(null == (t = O.current)
                  ? void 0
                  : t.contains(document.activeElement))) ||
              _(!1);
          };
          return (
            document.addEventListener("keydown", e),
            () => document.removeEventListener("keydown", e)
          );
        }, [l]),
        a.useEffect(() => {
          if (O.current)
            return () => {
              L.current &&
                (L.current.focus({ preventScroll: !0 }),
                (L.current = null),
                (M.current = !1));
            };
        }, [O.current]),
        a.createElement(
          "section",
          {
            ref: t,
            "aria-label": `${w} ${F}`,
            tabIndex: -1,
            "aria-live": "polite",
            "aria-relevant": "additions text",
            "aria-atomic": "false",
            suppressHydrationWarning: !0,
          },
          S.map((t, n) => {
            var o;
            const [l, f] = t.split("-");
            return N.length
              ? a.createElement(
                  "ol",
                  {
                    key: t,
                    dir: "auto" === v ? Gt() : v,
                    tabIndex: -1,
                    ref: O,
                    className: c,
                    "data-sonner-toaster": !0,
                    "data-sonner-theme": P,
                    "data-y-position": l,
                    "data-x-position": f,
                    style: {
                      "--front-toast-height": `${(null == (o = j[0]) ? void 0 : o.height) || 0}px`,
                      "--width": "356px",
                      "--gap": `${y}px`,
                      ...h,
                      ...Jt(u, d),
                    },
                    onBlur: (e) => {
                      M.current &&
                        !e.currentTarget.contains(e.relatedTarget) &&
                        ((M.current = !1),
                        L.current &&
                          (L.current.focus({ preventScroll: !0 }),
                          (L.current = null)));
                    },
                    onFocus: (e) => {
                      (e.target instanceof HTMLElement &&
                        "false" === e.target.dataset.dismissible) ||
                        M.current ||
                        ((M.current = !0), (L.current = e.relatedTarget));
                    },
                    onMouseEnter: () => _(!0),
                    onMouseMove: () => _(!0),
                    onMouseLeave: () => {
                      A || _(!1);
                    },
                    onDragEnd: () => _(!1),
                    onPointerDown: (e) => {
                      (e.target instanceof HTMLElement &&
                        "false" === e.target.dataset.dismissible) ||
                        D(!0);
                    },
                    onPointerUp: () => D(!1),
                  },
                  N.filter(
                    (e) => (!e.position && 0 === n) || e.position === t,
                  ).map((n, o) => {
                    var l, c;
                    return a.createElement(Qt, {
                      key: n.id,
                      icons: x,
                      index: o,
                      toast: n,
                      defaultRichColors: p,
                      duration:
                        null != (l = null == b ? void 0 : b.duration) ? l : m,
                      className: null == b ? void 0 : b.className,
                      descriptionClassName:
                        null == b ? void 0 : b.descriptionClassName,
                      invert: r,
                      visibleToasts: g,
                      closeButton:
                        null != (c = null == b ? void 0 : b.closeButton)
                          ? c
                          : s,
                      interacting: A,
                      position: t,
                      style: null == b ? void 0 : b.style,
                      unstyled: null == b ? void 0 : b.unstyled,
                      classNames: null == b ? void 0 : b.classNames,
                      cancelButtonStyle:
                        null == b ? void 0 : b.cancelButtonStyle,
                      actionButtonStyle:
                        null == b ? void 0 : b.actionButtonStyle,
                      closeButtonAriaLabel:
                        null == b ? void 0 : b.closeButtonAriaLabel,
                      removeToast: z,
                      toasts: N.filter((e) => e.position == n.position),
                      heights: j.filter((e) => e.position == n.position),
                      setHeights: C,
                      expandByDefault: i,
                      gap: y,
                      expanded: R,
                      swipeDirections: e.swipeDirections,
                    });
                  }),
                )
              : null;
          }),
        )
      );
    }),
    Zt = (e) => {
      let { ...t } = e;
      const { theme: n = "system" } = (() => {
        var e;
        return null != (e = a.useContext(At)) ? e : Dt;
      })();
      return (0, St.jsx)(Xt, {
        theme: n,
        className: "toaster group",
        toastOptions: {
          classNames: {
            toast:
              "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
            description: "group-[.toast]:text-muted-foreground",
            actionButton:
              "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
            cancelButton:
              "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
          },
        },
        ...t,
      });
    };
  function en(e, t) {
    return function () {
      return e.apply(t, arguments);
    };
  }
  const { toString: tn } = Object.prototype,
    { getPrototypeOf: nn } = Object,
    { iterator: rn, toStringTag: an } = Symbol,
    on =
      ((ln = Object.create(null)),
      (e) => {
        const t = tn.call(e);
        return ln[t] || (ln[t] = t.slice(8, -1).toLowerCase());
      });
  var ln;
  const sn = (e) => ((e = e.toLowerCase()), (t) => on(t) === e),
    cn = (e) => (t) => typeof t === e,
    { isArray: un } = Array,
    dn = cn("undefined");
  function fn(e) {
    return (
      null !== e &&
      !dn(e) &&
      null !== e.constructor &&
      !dn(e.constructor) &&
      hn(e.constructor.isBuffer) &&
      e.constructor.isBuffer(e)
    );
  }
  const pn = sn("ArrayBuffer");
  const mn = cn("string"),
    hn = cn("function"),
    gn = cn("number"),
    bn = (e) => null !== e && "object" === typeof e,
    vn = (e) => {
      if ("object" !== on(e)) return !1;
      const t = nn(e);
      return (
        (null === t ||
          t === Object.prototype ||
          null === Object.getPrototypeOf(t)) &&
        !(an in e) &&
        !(rn in e)
      );
    },
    yn = sn("Date"),
    xn = sn("File"),
    wn = sn("Blob"),
    En = sn("FileList");
  const kn =
      "undefined" !== typeof globalThis
        ? globalThis
        : "undefined" !== typeof self
          ? self
          : "undefined" !== typeof window
            ? window
            : "undefined" !== typeof globalThis
              ? globalThis
              : {},
    Nn = "undefined" !== typeof kn.FormData ? kn.FormData : void 0,
    Sn = sn("URLSearchParams"),
    [jn, Cn, Rn, _n] = ["ReadableStream", "Request", "Response", "Headers"].map(
      sn,
    );
  function An(e, t) {
    let n,
      r,
      { allOwnKeys: a = !1 } =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if (null !== e && "undefined" !== typeof e)
      if (("object" !== typeof e && (e = [e]), un(e)))
        for (n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
      else {
        if (fn(e)) return;
        const r = a ? Object.getOwnPropertyNames(e) : Object.keys(e),
          o = r.length;
        let l;
        for (n = 0; n < o; n++) ((l = r[n]), t.call(null, e[l], l, e));
      }
  }
  function Dn(e, t) {
    if (fn(e)) return null;
    t = t.toLowerCase();
    const n = Object.keys(e);
    let r,
      a = n.length;
    for (; a-- > 0; ) if (((r = n[a]), t === r.toLowerCase())) return r;
    return null;
  }
  const Pn =
      "undefined" !== typeof globalThis
        ? globalThis
        : "undefined" !== typeof self
          ? self
          : "undefined" !== typeof window
            ? window
            : globalThis,
    Tn = (e) => !dn(e) && e !== Pn;
  const On =
    ((Fn = "undefined" !== typeof Uint8Array && nn(Uint8Array)),
    (e) => Fn && e instanceof Fn);
  var Fn;
  const Ln = sn("HTMLFormElement"),
    Mn = ((e) => {
      let { hasOwnProperty: t } = e;
      return (e, n) => t.call(e, n);
    })(Object.prototype),
    zn = sn("RegExp"),
    In = (e, t) => {
      const n = Object.getOwnPropertyDescriptors(e),
        r = {};
      (An(n, (n, a) => {
        let o;
        !1 !== (o = t(n, a, e)) && (r[a] = o || n);
      }),
        Object.defineProperties(e, r));
    };
  const $n = sn("AsyncFunction"),
    Bn = ((e, t) => {
      return e
        ? setImmediate
        : t
          ? ((n = `axios@${Math.random()}`),
            (r = []),
            Pn.addEventListener(
              "message",
              (e) => {
                let { source: t, data: a } = e;
                t === Pn && a === n && r.length && r.shift()();
              },
              !1,
            ),
            (e) => {
              (r.push(e), Pn.postMessage(n, "*"));
            })
          : (e) => setTimeout(e);
      var n, r;
    })("function" === typeof setImmediate, hn(Pn.postMessage)),
    Un =
      "undefined" !== typeof queueMicrotask
        ? queueMicrotask.bind(Pn)
        : ("undefined" !== typeof process && process.nextTick) || Bn,
    Wn = {
      isArray: un,
      isArrayBuffer: pn,
      isBuffer: fn,
      isFormData: (e) => {
        let t;
        return (
          e &&
          ((Nn && e instanceof Nn) ||
            (hn(e.append) &&
              ("formdata" === (t = on(e)) ||
                ("object" === t &&
                  hn(e.toString) &&
                  "[object FormData]" === e.toString()))))
        );
      },
      isArrayBufferView: function (e) {
        let t;
        return (
          (t =
            "undefined" !== typeof ArrayBuffer && ArrayBuffer.isView
              ? ArrayBuffer.isView(e)
              : e && e.buffer && pn(e.buffer)),
          t
        );
      },
      isString: mn,
      isNumber: gn,
      isBoolean: (e) => !0 === e || !1 === e,
      isObject: bn,
      isPlainObject: vn,
      isEmptyObject: (e) => {
        if (!bn(e) || fn(e)) return !1;
        try {
          return (
            0 === Object.keys(e).length &&
            Object.getPrototypeOf(e) === Object.prototype
          );
        } catch (Lu) {
          return !1;
        }
      },
      isReadableStream: jn,
      isRequest: Cn,
      isResponse: Rn,
      isHeaders: _n,
      isUndefined: dn,
      isDate: yn,
      isFile: xn,
      isReactNativeBlob: (e) => !(!e || "undefined" === typeof e.uri),
      isReactNative: (e) => e && "undefined" !== typeof e.getParts,
      isBlob: wn,
      isRegExp: zn,
      isFunction: hn,
      isStream: (e) => bn(e) && hn(e.pipe),
      isURLSearchParams: Sn,
      isTypedArray: On,
      isFileList: En,
      forEach: An,
      merge: function e() {
        const { caseless: t, skipUndefined: n } = (Tn(this) && this) || {},
          r = {},
          a = (a, o) => {
            if ("__proto__" === o || "constructor" === o || "prototype" === o)
              return;
            const l = (t && Dn(r, o)) || o;
            vn(r[l]) && vn(a)
              ? (r[l] = e(r[l], a))
              : vn(a)
                ? (r[l] = e({}, a))
                : un(a)
                  ? (r[l] = a.slice())
                  : (n && dn(a)) || (r[l] = a);
          };
        for (let o = 0, l = arguments.length; o < l; o++)
          arguments[o] && An(arguments[o], a);
        return r;
      },
      extend: function (e, t, n) {
        let { allOwnKeys: r } =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        return (
          An(
            t,
            (t, r) => {
              n && hn(t)
                ? Object.defineProperty(e, r, {
                    value: en(t, n),
                    writable: !0,
                    enumerable: !0,
                    configurable: !0,
                  })
                : Object.defineProperty(e, r, {
                    value: t,
                    writable: !0,
                    enumerable: !0,
                    configurable: !0,
                  });
            },
            { allOwnKeys: r },
          ),
          e
        );
      },
      trim: (e) =>
        e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
      stripBOM: (e) => (65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
      inherits: (e, t, n, r) => {
        ((e.prototype = Object.create(t.prototype, r)),
          Object.defineProperty(e.prototype, "constructor", {
            value: e,
            writable: !0,
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e, "super", { value: t.prototype }),
          n && Object.assign(e.prototype, n));
      },
      toFlatObject: (e, t, n, r) => {
        let a, o, l;
        const i = {};
        if (((t = t || {}), null == e)) return t;
        do {
          for (a = Object.getOwnPropertyNames(e), o = a.length; o-- > 0; )
            ((l = a[o]),
              (r && !r(l, e, t)) || i[l] || ((t[l] = e[l]), (i[l] = !0)));
          e = !1 !== n && nn(e);
        } while (e && (!n || n(e, t)) && e !== Object.prototype);
        return t;
      },
      kindOf: on,
      kindOfTest: sn,
      endsWith: (e, t, n) => {
        ((e = String(e)),
          (void 0 === n || n > e.length) && (n = e.length),
          (n -= t.length));
        const r = e.indexOf(t, n);
        return -1 !== r && r === n;
      },
      toArray: (e) => {
        if (!e) return null;
        if (un(e)) return e;
        let t = e.length;
        if (!gn(t)) return null;
        const n = new Array(t);
        for (; t-- > 0; ) n[t] = e[t];
        return n;
      },
      forEachEntry: (e, t) => {
        const n = (e && e[rn]).call(e);
        let r;
        for (; (r = n.next()) && !r.done; ) {
          const n = r.value;
          t.call(e, n[0], n[1]);
        }
      },
      matchAll: (e, t) => {
        let n;
        const r = [];
        for (; null !== (n = e.exec(t)); ) r.push(n);
        return r;
      },
      isHTMLForm: Ln,
      hasOwnProperty: Mn,
      hasOwnProp: Mn,
      reduceDescriptors: In,
      freezeMethods: (e) => {
        In(e, (t, n) => {
          if (hn(e) && -1 !== ["arguments", "caller", "callee"].indexOf(n))
            return !1;
          const r = e[n];
          hn(r) &&
            ((t.enumerable = !1),
            "writable" in t
              ? (t.writable = !1)
              : t.set ||
                (t.set = () => {
                  throw Error("Can not rewrite read-only method '" + n + "'");
                }));
        });
      },
      toObjectSet: (e, t) => {
        const n = {},
          r = (e) => {
            e.forEach((e) => {
              n[e] = !0;
            });
          };
        return (un(e) ? r(e) : r(String(e).split(t)), n);
      },
      toCamelCase: (e) =>
        e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (e, t, n) {
          return t.toUpperCase() + n;
        }),
      noop: () => {},
      toFiniteNumber: (e, t) =>
        null != e && Number.isFinite((e = +e)) ? e : t,
      findKey: Dn,
      global: Pn,
      isContextDefined: Tn,
      isSpecCompliantForm: function (e) {
        return !!(e && hn(e.append) && "FormData" === e[an] && e[rn]);
      },
      toJSONObject: (e) => {
        const t = new Array(10),
          n = (e, r) => {
            if (bn(e)) {
              if (t.indexOf(e) >= 0) return;
              if (fn(e)) return e;
              if (!("toJSON" in e)) {
                t[r] = e;
                const a = un(e) ? [] : {};
                return (
                  An(e, (e, t) => {
                    const o = n(e, r + 1);
                    !dn(o) && (a[t] = o);
                  }),
                  (t[r] = void 0),
                  a
                );
              }
            }
            return e;
          };
        return n(e, 0);
      },
      isAsyncFn: $n,
      isThenable: (e) => e && (bn(e) || hn(e)) && hn(e.then) && hn(e.catch),
      setImmediate: Bn,
      asap: Un,
      isIterable: (e) => null != e && hn(e[rn]),
    };
  class Hn extends Error {
    static from(e, t, n, r, a, o) {
      const l = new Hn(e.message, t || e.code, n, r, a);
      return (
        (l.cause = e),
        (l.name = e.name),
        null != e.status && null == l.status && (l.status = e.status),
        o && Object.assign(l, o),
        l
      );
    }
    constructor(e, t, n, r, a) {
      (super(e),
        Object.defineProperty(this, "message", {
          value: e,
          enumerable: !0,
          writable: !0,
          configurable: !0,
        }),
        (this.name = "AxiosError"),
        (this.isAxiosError = !0),
        t && (this.code = t),
        n && (this.config = n),
        r && (this.request = r),
        a && ((this.response = a), (this.status = a.status)));
    }
    toJSON() {
      return {
        message: this.message,
        name: this.name,
        description: this.description,
        number: this.number,
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        config: Wn.toJSONObject(this.config),
        code: this.code,
        status: this.status,
      };
    }
  }
  ((Hn.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE"),
    (Hn.ERR_BAD_OPTION = "ERR_BAD_OPTION"),
    (Hn.ECONNABORTED = "ECONNABORTED"),
    (Hn.ETIMEDOUT = "ETIMEDOUT"),
    (Hn.ERR_NETWORK = "ERR_NETWORK"),
    (Hn.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS"),
    (Hn.ERR_DEPRECATED = "ERR_DEPRECATED"),
    (Hn.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE"),
    (Hn.ERR_BAD_REQUEST = "ERR_BAD_REQUEST"),
    (Hn.ERR_CANCELED = "ERR_CANCELED"),
    (Hn.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT"),
    (Hn.ERR_INVALID_URL = "ERR_INVALID_URL"));
  const qn = Hn;
  function Vn(e) {
    return Wn.isPlainObject(e) || Wn.isArray(e);
  }
  function Kn(e) {
    return Wn.endsWith(e, "[]") ? e.slice(0, -2) : e;
  }
  function Yn(e, t, n) {
    return e
      ? e
          .concat(t)
          .map(function (e, t) {
            return ((e = Kn(e)), !n && t ? "[" + e + "]" : e);
          })
          .join(n ? "." : "")
      : t;
  }
  const Qn = Wn.toFlatObject(Wn, {}, null, function (e) {
    return /^is[A-Z]/.test(e);
  });
  const Gn = function (e, t, n) {
    if (!Wn.isObject(e)) throw new TypeError("target must be an object");
    t = t || new FormData();
    const r = (n = Wn.toFlatObject(
        n,
        { metaTokens: !0, dots: !1, indexes: !1 },
        !1,
        function (e, t) {
          return !Wn.isUndefined(t[e]);
        },
      )).metaTokens,
      a = n.visitor || c,
      o = n.dots,
      l = n.indexes,
      i =
        (n.Blob || ("undefined" !== typeof Blob && Blob)) &&
        Wn.isSpecCompliantForm(t);
    if (!Wn.isFunction(a)) throw new TypeError("visitor must be a function");
    function s(e) {
      if (null === e) return "";
      if (Wn.isDate(e)) return e.toISOString();
      if (Wn.isBoolean(e)) return e.toString();
      if (!i && Wn.isBlob(e))
        throw new qn("Blob is not supported. Use a Buffer instead.");
      return Wn.isArrayBuffer(e) || Wn.isTypedArray(e)
        ? i && "function" === typeof Blob
          ? new Blob([e])
          : Buffer.from(e)
        : e;
    }
    function c(e, n, a) {
      let i = e;
      if (Wn.isReactNative(t) && Wn.isReactNativeBlob(e))
        return (t.append(Yn(a, n, o), s(e)), !1);
      if (e && !a && "object" === typeof e)
        if (Wn.endsWith(n, "{}"))
          ((n = r ? n : n.slice(0, -2)), (e = JSON.stringify(e)));
        else if (
          (Wn.isArray(e) &&
            (function (e) {
              return Wn.isArray(e) && !e.some(Vn);
            })(e)) ||
          ((Wn.isFileList(e) || Wn.endsWith(n, "[]")) && (i = Wn.toArray(e)))
        )
          return (
            (n = Kn(n)),
            i.forEach(function (e, r) {
              !Wn.isUndefined(e) &&
                null !== e &&
                t.append(
                  !0 === l ? Yn([n], r, o) : null === l ? n : n + "[]",
                  s(e),
                );
            }),
            !1
          );
      return !!Vn(e) || (t.append(Yn(a, n, o), s(e)), !1);
    }
    const u = [],
      d = Object.assign(Qn, {
        defaultVisitor: c,
        convertValue: s,
        isVisitable: Vn,
      });
    if (!Wn.isObject(e)) throw new TypeError("data must be an object");
    return (
      (function e(n, r) {
        if (!Wn.isUndefined(n)) {
          if (-1 !== u.indexOf(n))
            throw Error("Circular reference detected in " + r.join("."));
          (u.push(n),
            Wn.forEach(n, function (n, o) {
              !0 ===
                (!(Wn.isUndefined(n) || null === n) &&
                  a.call(t, n, Wn.isString(o) ? o.trim() : o, r, d)) &&
                e(n, r ? r.concat(o) : [o]);
            }),
            u.pop());
        }
      })(e),
      t
    );
  };
  function Jn(e) {
    const t = {
      "!": "%21",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "~": "%7E",
      "%20": "+",
      "%00": "\0",
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (e) {
      return t[e];
    });
  }
  function Xn(e, t) {
    ((this._pairs = []), e && Gn(e, this, t));
  }
  const Zn = Xn.prototype;
  ((Zn.append = function (e, t) {
    this._pairs.push([e, t]);
  }),
    (Zn.toString = function (e) {
      const t = e
        ? function (t) {
            return e.call(this, t, Jn);
          }
        : Jn;
      return this._pairs
        .map(function (e) {
          return t(e[0]) + "=" + t(e[1]);
        }, "")
        .join("&");
    }));
  const er = Xn;
  function tr(e) {
    return encodeURIComponent(e)
      .replace(/%3A/gi, ":")
      .replace(/%24/g, "$")
      .replace(/%2C/gi, ",")
      .replace(/%20/g, "+");
  }
  function nr(e, t, n) {
    if (!t) return e;
    const r = (n && n.encode) || tr,
      a = Wn.isFunction(n) ? { serialize: n } : n,
      o = a && a.serialize;
    let l;
    if (
      ((l = o
        ? o(t, a)
        : Wn.isURLSearchParams(t)
          ? t.toString()
          : new er(t, a).toString(r)),
      l)
    ) {
      const t = e.indexOf("#");
      (-1 !== t && (e = e.slice(0, t)),
        (e += (-1 === e.indexOf("?") ? "?" : "&") + l));
    }
    return e;
  }
  const rr = class {
      constructor() {
        this.handlers = [];
      }
      use(e, t, n) {
        return (
          this.handlers.push({
            fulfilled: e,
            rejected: t,
            synchronous: !!n && n.synchronous,
            runWhen: n ? n.runWhen : null,
          }),
          this.handlers.length - 1
        );
      }
      eject(e) {
        this.handlers[e] && (this.handlers[e] = null);
      }
      clear() {
        this.handlers && (this.handlers = []);
      }
      forEach(e) {
        Wn.forEach(this.handlers, function (t) {
          null !== t && e(t);
        });
      }
    },
    ar = {
      silentJSONParsing: !0,
      forcedJSONParsing: !0,
      clarifyTimeoutError: !1,
      legacyInterceptorReqResOrdering: !0,
    },
    or = {
      isBrowser: !0,
      classes: {
        URLSearchParams:
          "undefined" !== typeof URLSearchParams ? URLSearchParams : er,
        FormData: "undefined" !== typeof FormData ? FormData : null,
        Blob: "undefined" !== typeof Blob ? Blob : null,
      },
      protocols: ["http", "https", "file", "blob", "url", "data"],
    },
    lr = "undefined" !== typeof window && "undefined" !== typeof document,
    ir = ("object" === typeof navigator && navigator) || void 0,
    sr =
      lr &&
      (!ir || ["ReactNative", "NativeScript", "NS"].indexOf(ir.product) < 0),
    cr =
      "undefined" !== typeof WorkerGlobalScope &&
      self instanceof WorkerGlobalScope &&
      "function" === typeof self.importScripts,
    ur = (lr && window.location.href) || "http://localhost",
    dr = { ...r, ...or };
  const fr = function (e) {
    function t(e, n, r, a) {
      let o = e[a++];
      if ("__proto__" === o) return !0;
      const l = Number.isFinite(+o),
        i = a >= e.length;
      if (((o = !o && Wn.isArray(r) ? r.length : o), i))
        return (Wn.hasOwnProp(r, o) ? (r[o] = [r[o], n]) : (r[o] = n), !l);
      (r[o] && Wn.isObject(r[o])) || (r[o] = []);
      return (
        t(e, n, r[o], a) &&
          Wn.isArray(r[o]) &&
          (r[o] = (function (e) {
            const t = {},
              n = Object.keys(e);
            let r;
            const a = n.length;
            let o;
            for (r = 0; r < a; r++) ((o = n[r]), (t[o] = e[o]));
            return t;
          })(r[o])),
        !l
      );
    }
    if (Wn.isFormData(e) && Wn.isFunction(e.entries)) {
      const n = {};
      return (
        Wn.forEachEntry(e, (e, r) => {
          t(
            (function (e) {
              return Wn.matchAll(/\w+|\[(\w*)]/g, e).map((e) =>
                "[]" === e[0] ? "" : e[1] || e[0],
              );
            })(e),
            r,
            n,
            0,
          );
        }),
        n
      );
    }
    return null;
  };
  const pr = {
    transitional: ar,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [
      function (e, t) {
        const n = t.getContentType() || "",
          r = n.indexOf("application/json") > -1,
          a = Wn.isObject(e);
        a && Wn.isHTMLForm(e) && (e = new FormData(e));
        if (Wn.isFormData(e)) return r ? JSON.stringify(fr(e)) : e;
        if (
          Wn.isArrayBuffer(e) ||
          Wn.isBuffer(e) ||
          Wn.isStream(e) ||
          Wn.isFile(e) ||
          Wn.isBlob(e) ||
          Wn.isReadableStream(e)
        )
          return e;
        if (Wn.isArrayBufferView(e)) return e.buffer;
        if (Wn.isURLSearchParams(e))
          return (
            t.setContentType(
              "application/x-www-form-urlencoded;charset=utf-8",
              !1,
            ),
            e.toString()
          );
        let o;
        if (a) {
          if (n.indexOf("application/x-www-form-urlencoded") > -1)
            return (function (e, t) {
              return Gn(e, new dr.classes.URLSearchParams(), {
                visitor: function (e, t, n, r) {
                  return dr.isNode && Wn.isBuffer(e)
                    ? (this.append(t, e.toString("base64")), !1)
                    : r.defaultVisitor.apply(this, arguments);
                },
                ...t,
              });
            })(e, this.formSerializer).toString();
          if ((o = Wn.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
            const t = this.env && this.env.FormData;
            return Gn(
              o ? { "files[]": e } : e,
              t && new t(),
              this.formSerializer,
            );
          }
        }
        return a || r
          ? (t.setContentType("application/json", !1),
            (function (e, t, n) {
              if (Wn.isString(e))
                try {
                  return ((t || JSON.parse)(e), Wn.trim(e));
                } catch (Lu) {
                  if ("SyntaxError" !== Lu.name) throw Lu;
                }
              return (n || JSON.stringify)(e);
            })(e))
          : e;
      },
    ],
    transformResponse: [
      function (e) {
        const t = this.transitional || pr.transitional,
          n = t && t.forcedJSONParsing,
          r = "json" === this.responseType;
        if (Wn.isResponse(e) || Wn.isReadableStream(e)) return e;
        if (e && Wn.isString(e) && ((n && !this.responseType) || r)) {
          const n = !(t && t.silentJSONParsing) && r;
          try {
            return JSON.parse(e, this.parseReviver);
          } catch (Lu) {
            if (n) {
              if ("SyntaxError" === Lu.name)
                throw qn.from(
                  Lu,
                  qn.ERR_BAD_RESPONSE,
                  this,
                  null,
                  this.response,
                );
              throw Lu;
            }
          }
        }
        return e;
      },
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: { FormData: dr.classes.FormData, Blob: dr.classes.Blob },
    validateStatus: function (e) {
      return e >= 200 && e < 300;
    },
    headers: {
      common: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": void 0,
      },
    },
  };
  Wn.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
    pr.headers[e] = {};
  });
  const mr = pr,
    hr = Wn.toObjectSet([
      "age",
      "authorization",
      "content-length",
      "content-type",
      "etag",
      "expires",
      "from",
      "host",
      "if-modified-since",
      "if-unmodified-since",
      "last-modified",
      "location",
      "max-forwards",
      "proxy-authorization",
      "referer",
      "retry-after",
      "user-agent",
    ]),
    gr = Symbol("internals");
  function br(e) {
    return e && String(e).trim().toLowerCase();
  }
  function vr(e) {
    return !1 === e || null == e
      ? e
      : Wn.isArray(e)
        ? e.map(vr)
        : String(e).replace(/[\r\n]+$/, "");
  }
  function yr(e, t, n, r, a) {
    return Wn.isFunction(r)
      ? r.call(this, t, n)
      : (a && (t = n),
        Wn.isString(t)
          ? Wn.isString(r)
            ? -1 !== t.indexOf(r)
            : Wn.isRegExp(r)
              ? r.test(t)
              : void 0
          : void 0);
  }
  class xr {
    constructor(e) {
      e && this.set(e);
    }
    set(e, t, n) {
      const r = this;
      function a(e, t, n) {
        const a = br(t);
        if (!a) throw new Error("header name must be a non-empty string");
        const o = Wn.findKey(r, a);
        (!o || void 0 === r[o] || !0 === n || (void 0 === n && !1 !== r[o])) &&
          (r[o || t] = vr(e));
      }
      const o = (e, t) => Wn.forEach(e, (e, n) => a(e, n, t));
      if (Wn.isPlainObject(e) || e instanceof this.constructor) o(e, t);
      else if (
        Wn.isString(e) &&
        (e = e.trim()) &&
        !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())
      )
        o(
          ((e) => {
            const t = {};
            let n, r, a;
            return (
              e &&
                e.split("\n").forEach(function (e) {
                  ((a = e.indexOf(":")),
                    (n = e.substring(0, a).trim().toLowerCase()),
                    (r = e.substring(a + 1).trim()),
                    !n ||
                      (t[n] && hr[n]) ||
                      ("set-cookie" === n
                        ? t[n]
                          ? t[n].push(r)
                          : (t[n] = [r])
                        : (t[n] = t[n] ? t[n] + ", " + r : r)));
                }),
              t
            );
          })(e),
          t,
        );
      else if (Wn.isObject(e) && Wn.isIterable(e)) {
        let n,
          r,
          a = {};
        for (const t of e) {
          if (!Wn.isArray(t))
            throw TypeError("Object iterator must return a key-value pair");
          a[(r = t[0])] = (n = a[r])
            ? Wn.isArray(n)
              ? [...n, t[1]]
              : [n, t[1]]
            : t[1];
        }
        o(a, t);
      } else null != e && a(t, e, n);
      return this;
    }
    get(e, t) {
      if ((e = br(e))) {
        const n = Wn.findKey(this, e);
        if (n) {
          const e = this[n];
          if (!t) return e;
          if (!0 === t)
            return (function (e) {
              const t = Object.create(null),
                n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
              let r;
              for (; (r = n.exec(e)); ) t[r[1]] = r[2];
              return t;
            })(e);
          if (Wn.isFunction(t)) return t.call(this, e, n);
          if (Wn.isRegExp(t)) return t.exec(e);
          throw new TypeError("parser must be boolean|regexp|function");
        }
      }
    }
    has(e, t) {
      if ((e = br(e))) {
        const n = Wn.findKey(this, e);
        return !(!n || void 0 === this[n] || (t && !yr(0, this[n], n, t)));
      }
      return !1;
    }
    delete(e, t) {
      const n = this;
      let r = !1;
      function a(e) {
        if ((e = br(e))) {
          const a = Wn.findKey(n, e);
          !a || (t && !yr(0, n[a], a, t)) || (delete n[a], (r = !0));
        }
      }
      return (Wn.isArray(e) ? e.forEach(a) : a(e), r);
    }
    clear(e) {
      const t = Object.keys(this);
      let n = t.length,
        r = !1;
      for (; n--; ) {
        const a = t[n];
        (e && !yr(0, this[a], a, e, !0)) || (delete this[a], (r = !0));
      }
      return r;
    }
    normalize(e) {
      const t = this,
        n = {};
      return (
        Wn.forEach(this, (r, a) => {
          const o = Wn.findKey(n, a);
          if (o) return ((t[o] = vr(r)), void delete t[a]);
          const l = e
            ? (function (e) {
                return e
                  .trim()
                  .toLowerCase()
                  .replace(/([a-z\d])(\w*)/g, (e, t, n) => t.toUpperCase() + n);
              })(a)
            : String(a).trim();
          (l !== a && delete t[a], (t[l] = vr(r)), (n[l] = !0));
        }),
        this
      );
    }
    concat() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return this.constructor.concat(this, ...t);
    }
    toJSON(e) {
      const t = Object.create(null);
      return (
        Wn.forEach(this, (n, r) => {
          null != n &&
            !1 !== n &&
            (t[r] = e && Wn.isArray(n) ? n.join(", ") : n);
        }),
        t
      );
    }
    [Symbol.iterator]() {
      return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
      return Object.entries(this.toJSON())
        .map((e) => {
          let [t, n] = e;
          return t + ": " + n;
        })
        .join("\n");
    }
    getSetCookie() {
      return this.get("set-cookie") || [];
    }
    get [Symbol.toStringTag]() {
      return "AxiosHeaders";
    }
    static from(e) {
      return e instanceof this ? e : new this(e);
    }
    static concat(e) {
      const t = new this(e);
      for (
        var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1;
        a < n;
        a++
      )
        r[a - 1] = arguments[a];
      return (r.forEach((e) => t.set(e)), t);
    }
    static accessor(e) {
      const t = (this[gr] = this[gr] = { accessors: {} }).accessors,
        n = this.prototype;
      function r(e) {
        const r = br(e);
        t[r] ||
          (!(function (e, t) {
            const n = Wn.toCamelCase(" " + t);
            ["get", "set", "has"].forEach((r) => {
              Object.defineProperty(e, r + n, {
                value: function (e, n, a) {
                  return this[r].call(this, t, e, n, a);
                },
                configurable: !0,
              });
            });
          })(n, e),
          (t[r] = !0));
      }
      return (Wn.isArray(e) ? e.forEach(r) : r(e), this);
    }
  }
  (xr.accessor([
    "Content-Type",
    "Content-Length",
    "Accept",
    "Accept-Encoding",
    "User-Agent",
    "Authorization",
  ]),
    Wn.reduceDescriptors(xr.prototype, (e, t) => {
      let { value: n } = e,
        r = t[0].toUpperCase() + t.slice(1);
      return {
        get: () => n,
        set(e) {
          this[r] = e;
        },
      };
    }),
    Wn.freezeMethods(xr));
  const wr = xr;
  function Er(e, t) {
    const n = this || mr,
      r = t || n,
      a = wr.from(r.headers);
    let o = r.data;
    return (
      Wn.forEach(e, function (e) {
        o = e.call(n, o, a.normalize(), t ? t.status : void 0);
      }),
      a.normalize(),
      o
    );
  }
  function kr(e) {
    return !(!e || !e.__CANCEL__);
  }
  const Nr = class extends qn {
    constructor(e, t, n) {
      (super(null == e ? "canceled" : e, qn.ERR_CANCELED, t, n),
        (this.name = "CanceledError"),
        (this.__CANCEL__ = !0));
    }
  };
  function Sr(e, t, n) {
    const r = n.config.validateStatus;
    n.status && r && !r(n.status)
      ? t(
          new qn(
            "Request failed with status code " + n.status,
            [qn.ERR_BAD_REQUEST, qn.ERR_BAD_RESPONSE][
              Math.floor(n.status / 100) - 4
            ],
            n.config,
            n.request,
            n,
          ),
        )
      : e(n);
  }
  const jr = function (e, t) {
    e = e || 10;
    const n = new Array(e),
      r = new Array(e);
    let a,
      o = 0,
      l = 0;
    return (
      (t = void 0 !== t ? t : 1e3),
      function (i) {
        const s = Date.now(),
          c = r[l];
        (a || (a = s), (n[o] = i), (r[o] = s));
        let u = l,
          d = 0;
        for (; u !== o; ) ((d += n[u++]), (u %= e));
        if (((o = (o + 1) % e), o === l && (l = (l + 1) % e), s - a < t))
          return;
        const f = c && s - c;
        return f ? Math.round((1e3 * d) / f) : void 0;
      }
    );
  };
  const Cr = function (e, t) {
      let n,
        r,
        a = 0,
        o = 1e3 / t;
      const l = function (t) {
        let o =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : Date.now();
        ((a = o), (n = null), r && (clearTimeout(r), (r = null)), e(...t));
      };
      return [
        function () {
          const e = Date.now(),
            t = e - a;
          for (var i = arguments.length, s = new Array(i), c = 0; c < i; c++)
            s[c] = arguments[c];
          t >= o
            ? l(s, e)
            : ((n = s),
              r ||
                (r = setTimeout(() => {
                  ((r = null), l(n));
                }, o - t)));
        },
        () => n && l(n),
      ];
    },
    Rr = function (e, t) {
      let n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
        r = 0;
      const a = jr(50, 250);
      return Cr((n) => {
        const o = n.loaded,
          l = n.lengthComputable ? n.total : void 0,
          i = o - r,
          s = a(i);
        r = o;
        e({
          loaded: o,
          total: l,
          progress: l ? o / l : void 0,
          bytes: i,
          rate: s || void 0,
          estimated: s && l && o <= l ? (l - o) / s : void 0,
          event: n,
          lengthComputable: null != l,
          [t ? "download" : "upload"]: !0,
        });
      }, n);
    },
    _r = (e, t) => {
      const n = null != e;
      return [(r) => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]];
    },
    Ar = (e) =>
      function () {
        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
          n[r] = arguments[r];
        return Wn.asap(() => e(...n));
      },
    Dr = dr.hasStandardBrowserEnv
      ? ((e, t) => (n) => (
          (n = new URL(n, dr.origin)),
          e.protocol === n.protocol &&
            e.host === n.host &&
            (t || e.port === n.port)
        ))(
          new URL(dr.origin),
          dr.navigator && /(msie|trident)/i.test(dr.navigator.userAgent),
        )
      : () => !0,
    Pr = dr.hasStandardBrowserEnv
      ? {
          write(e, t, n, r, a, o, l) {
            if ("undefined" === typeof document) return;
            const i = [`${e}=${encodeURIComponent(t)}`];
            (Wn.isNumber(n) && i.push(`expires=${new Date(n).toUTCString()}`),
              Wn.isString(r) && i.push(`path=${r}`),
              Wn.isString(a) && i.push(`domain=${a}`),
              !0 === o && i.push("secure"),
              Wn.isString(l) && i.push(`SameSite=${l}`),
              (document.cookie = i.join("; ")));
          },
          read(e) {
            if ("undefined" === typeof document) return null;
            const t = document.cookie.match(
              new RegExp("(?:^|; )" + e + "=([^;]*)"),
            );
            return t ? decodeURIComponent(t[1]) : null;
          },
          remove(e) {
            this.write(e, "", Date.now() - 864e5, "/");
          },
        }
      : { write() {}, read: () => null, remove() {} };
  function Tr(e, t, n) {
    let r = !(
      "string" === typeof (a = t) && /^([a-z][a-z\d+\-.]*:)?\/\//i.test(a)
    );
    var a;
    return e && (r || 0 == n)
      ? (function (e, t) {
          return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
        })(e, t)
      : t;
  }
  const Or = (e) => (e instanceof wr ? { ...e } : e);
  function Fr(e, t) {
    t = t || {};
    const n = {};
    function r(e, t, n, r) {
      return Wn.isPlainObject(e) && Wn.isPlainObject(t)
        ? Wn.merge.call({ caseless: r }, e, t)
        : Wn.isPlainObject(t)
          ? Wn.merge({}, t)
          : Wn.isArray(t)
            ? t.slice()
            : t;
    }
    function a(e, t, n, a) {
      return Wn.isUndefined(t)
        ? Wn.isUndefined(e)
          ? void 0
          : r(void 0, e, 0, a)
        : r(e, t, 0, a);
    }
    function o(e, t) {
      if (!Wn.isUndefined(t)) return r(void 0, t);
    }
    function l(e, t) {
      return Wn.isUndefined(t)
        ? Wn.isUndefined(e)
          ? void 0
          : r(void 0, e)
        : r(void 0, t);
    }
    function i(n, a, o) {
      return o in t ? r(n, a) : o in e ? r(void 0, n) : void 0;
    }
    const s = {
      url: o,
      method: o,
      data: o,
      baseURL: l,
      transformRequest: l,
      transformResponse: l,
      paramsSerializer: l,
      timeout: l,
      timeoutMessage: l,
      withCredentials: l,
      withXSRFToken: l,
      adapter: l,
      responseType: l,
      xsrfCookieName: l,
      xsrfHeaderName: l,
      onUploadProgress: l,
      onDownloadProgress: l,
      decompress: l,
      maxContentLength: l,
      maxBodyLength: l,
      beforeRedirect: l,
      transport: l,
      httpAgent: l,
      httpsAgent: l,
      cancelToken: l,
      socketPath: l,
      responseEncoding: l,
      validateStatus: i,
      headers: (e, t, n) => a(Or(e), Or(t), 0, !0),
    };
    return (
      Wn.forEach(Object.keys({ ...e, ...t }), function (r) {
        if ("__proto__" === r || "constructor" === r || "prototype" === r)
          return;
        const o = Wn.hasOwnProp(s, r) ? s[r] : a,
          l = o(e[r], t[r], r);
        (Wn.isUndefined(l) && o !== i) || (n[r] = l);
      }),
      n
    );
  }
  const Lr = (e) => {
      const t = Fr({}, e);
      let {
        data: n,
        withXSRFToken: r,
        xsrfHeaderName: a,
        xsrfCookieName: o,
        headers: l,
        auth: i,
      } = t;
      if (
        ((t.headers = l = wr.from(l)),
        (t.url = nr(
          Tr(t.baseURL, t.url, t.allowAbsoluteUrls),
          e.params,
          e.paramsSerializer,
        )),
        i &&
          l.set(
            "Authorization",
            "Basic " +
              btoa(
                (i.username || "") +
                  ":" +
                  (i.password ? unescape(encodeURIComponent(i.password)) : ""),
              ),
          ),
        Wn.isFormData(n))
      )
        if (dr.hasStandardBrowserEnv || dr.hasStandardBrowserWebWorkerEnv)
          l.setContentType(void 0);
        else if (Wn.isFunction(n.getHeaders)) {
          const e = n.getHeaders(),
            t = ["content-type", "content-length"];
          Object.entries(e).forEach((e) => {
            let [n, r] = e;
            t.includes(n.toLowerCase()) && l.set(n, r);
          });
        }
      if (
        dr.hasStandardBrowserEnv &&
        (r && Wn.isFunction(r) && (r = r(t)), r || (!1 !== r && Dr(t.url)))
      ) {
        const e = a && o && Pr.read(o);
        e && l.set(a, e);
      }
      return t;
    },
    Mr =
      "undefined" !== typeof XMLHttpRequest &&
      function (e) {
        return new Promise(function (t, n) {
          const r = Lr(e);
          let a = r.data;
          const o = wr.from(r.headers).normalize();
          let l,
            i,
            s,
            c,
            u,
            { responseType: d, onUploadProgress: f, onDownloadProgress: p } = r;
          function m() {
            (c && c(),
              u && u(),
              r.cancelToken && r.cancelToken.unsubscribe(l),
              r.signal && r.signal.removeEventListener("abort", l));
          }
          let h = new XMLHttpRequest();
          function g() {
            if (!h) return;
            const r = wr.from(
              "getAllResponseHeaders" in h && h.getAllResponseHeaders(),
            );
            (Sr(
              function (e) {
                (t(e), m());
              },
              function (e) {
                (n(e), m());
              },
              {
                data:
                  d && "text" !== d && "json" !== d
                    ? h.response
                    : h.responseText,
                status: h.status,
                statusText: h.statusText,
                headers: r,
                config: e,
                request: h,
              },
            ),
              (h = null));
          }
          (h.open(r.method.toUpperCase(), r.url, !0),
            (h.timeout = r.timeout),
            "onloadend" in h
              ? (h.onloadend = g)
              : (h.onreadystatechange = function () {
                  h &&
                    4 === h.readyState &&
                    (0 !== h.status ||
                      (h.responseURL &&
                        0 === h.responseURL.indexOf("file:"))) &&
                    setTimeout(g);
                }),
            (h.onabort = function () {
              h &&
                (n(new qn("Request aborted", qn.ECONNABORTED, e, h)),
                (h = null));
            }),
            (h.onerror = function (t) {
              const r = t && t.message ? t.message : "Network Error",
                a = new qn(r, qn.ERR_NETWORK, e, h);
              ((a.event = t || null), n(a), (h = null));
            }),
            (h.ontimeout = function () {
              let t = r.timeout
                ? "timeout of " + r.timeout + "ms exceeded"
                : "timeout exceeded";
              const a = r.transitional || ar;
              (r.timeoutErrorMessage && (t = r.timeoutErrorMessage),
                n(
                  new qn(
                    t,
                    a.clarifyTimeoutError ? qn.ETIMEDOUT : qn.ECONNABORTED,
                    e,
                    h,
                  ),
                ),
                (h = null));
            }),
            void 0 === a && o.setContentType(null),
            "setRequestHeader" in h &&
              Wn.forEach(o.toJSON(), function (e, t) {
                h.setRequestHeader(t, e);
              }),
            Wn.isUndefined(r.withCredentials) ||
              (h.withCredentials = !!r.withCredentials),
            d && "json" !== d && (h.responseType = r.responseType),
            p && (([s, u] = Rr(p, !0)), h.addEventListener("progress", s)),
            f &&
              h.upload &&
              (([i, c] = Rr(f)),
              h.upload.addEventListener("progress", i),
              h.upload.addEventListener("loadend", c)),
            (r.cancelToken || r.signal) &&
              ((l = (t) => {
                h &&
                  (n(!t || t.type ? new Nr(null, e, h) : t),
                  h.abort(),
                  (h = null));
              }),
              r.cancelToken && r.cancelToken.subscribe(l),
              r.signal &&
                (r.signal.aborted
                  ? l()
                  : r.signal.addEventListener("abort", l))));
          const b = (function (e) {
            const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
            return (t && t[1]) || "";
          })(r.url);
          b && -1 === dr.protocols.indexOf(b)
            ? n(
                new qn(
                  "Unsupported protocol " + b + ":",
                  qn.ERR_BAD_REQUEST,
                  e,
                ),
              )
            : h.send(a || null);
        });
      },
    zr = (e, t) => {
      const { length: n } = (e = e ? e.filter(Boolean) : []);
      if (t || n) {
        let n,
          r = new AbortController();
        const a = function (e) {
          if (!n) {
            ((n = !0), l());
            const t = e instanceof Error ? e : this.reason;
            r.abort(
              t instanceof qn ? t : new Nr(t instanceof Error ? t.message : t),
            );
          }
        };
        let o =
          t &&
          setTimeout(() => {
            ((o = null), a(new qn(`timeout of ${t}ms exceeded`, qn.ETIMEDOUT)));
          }, t);
        const l = () => {
          e &&
            (o && clearTimeout(o),
            (o = null),
            e.forEach((e) => {
              e.unsubscribe
                ? e.unsubscribe(a)
                : e.removeEventListener("abort", a);
            }),
            (e = null));
        };
        e.forEach((e) => e.addEventListener("abort", a));
        const { signal: i } = r;
        return ((i.unsubscribe = () => Wn.asap(l)), i);
      }
    },
    Ir = function* (e, t) {
      let n = e.byteLength;
      if (!t || n < t) return void (yield e);
      let r,
        a = 0;
      for (; a < n; ) ((r = a + t), yield e.slice(a, r), (a = r));
    },
    $r = async function* (e) {
      if (e[Symbol.asyncIterator]) return void (yield* e);
      const t = e.getReader();
      try {
        for (;;) {
          const { done: e, value: n } = await t.read();
          if (e) break;
          yield n;
        }
      } finally {
        await t.cancel();
      }
    },
    Br = (e, t, n, r) => {
      const a = (async function* (e, t) {
        for await (const n of $r(e)) yield* Ir(n, t);
      })(e, t);
      let o,
        l = 0,
        i = (e) => {
          o || ((o = !0), r && r(e));
        };
      return new ReadableStream(
        {
          async pull(e) {
            try {
              const { done: t, value: r } = await a.next();
              if (t) return (i(), void e.close());
              let o = r.byteLength;
              if (n) {
                let e = (l += o);
                n(e);
              }
              e.enqueue(new Uint8Array(r));
            } catch (t) {
              throw (i(t), t);
            }
          },
          cancel: (e) => (i(e), a.return()),
        },
        { highWaterMark: 2 },
      );
    },
    { isFunction: Ur } = Wn,
    Wr = ((e) => {
      let { Request: t, Response: n } = e;
      return { Request: t, Response: n };
    })(Wn.global),
    { ReadableStream: Hr, TextEncoder: qr } = Wn.global,
    Vr = function (e) {
      try {
        for (
          var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        return !!e(...n);
      } catch (Lu) {
        return !1;
      }
    },
    Kr = (e) => {
      e = Wn.merge.call({ skipUndefined: !0 }, Wr, e);
      const { fetch: t, Request: n, Response: r } = e,
        a = t ? Ur(t) : "function" === typeof fetch,
        o = Ur(n),
        l = Ur(r);
      if (!a) return !1;
      const i = a && Ur(Hr),
        s =
          a &&
          ("function" === typeof qr
            ? ((c = new qr()), (e) => c.encode(e))
            : async (e) => new Uint8Array(await new n(e).arrayBuffer()));
      var c;
      const u =
          o &&
          i &&
          Vr(() => {
            let e = !1;
            const t = new Hr(),
              r = new n(dr.origin, {
                body: t,
                method: "POST",
                get duplex() {
                  return ((e = !0), "half");
                },
              }).headers.has("Content-Type");
            return (t.cancel(), e && !r);
          }),
        d = l && i && Vr(() => Wn.isReadableStream(new r("").body)),
        f = { stream: d && ((e) => e.body) };
      a &&
        ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e) => {
          !f[e] &&
            (f[e] = (t, n) => {
              let r = t && t[e];
              if (r) return r.call(t);
              throw new qn(
                `Response type '${e}' is not supported`,
                qn.ERR_NOT_SUPPORT,
                n,
              );
            });
        });
      const p = async (e, t) => {
        const r = Wn.toFiniteNumber(e.getContentLength());
        return null == r
          ? (async (e) => {
              if (null == e) return 0;
              if (Wn.isBlob(e)) return e.size;
              if (Wn.isSpecCompliantForm(e)) {
                const t = new n(dr.origin, { method: "POST", body: e });
                return (await t.arrayBuffer()).byteLength;
              }
              return Wn.isArrayBufferView(e) || Wn.isArrayBuffer(e)
                ? e.byteLength
                : (Wn.isURLSearchParams(e) && (e += ""),
                  Wn.isString(e) ? (await s(e)).byteLength : void 0);
            })(t)
          : r;
      };
      return async (e) => {
        let {
            url: a,
            method: l,
            data: i,
            signal: s,
            cancelToken: c,
            timeout: m,
            onDownloadProgress: h,
            onUploadProgress: g,
            responseType: b,
            headers: v,
            withCredentials: y = "same-origin",
            fetchOptions: x,
          } = Lr(e),
          w = t || fetch;
        b = b ? (b + "").toLowerCase() : "text";
        let E = zr([s, c && c.toAbortSignal()], m),
          k = null;
        const N =
          E &&
          E.unsubscribe &&
          (() => {
            E.unsubscribe();
          });
        let S;
        try {
          if (
            g &&
            u &&
            "get" !== l &&
            "head" !== l &&
            0 !== (S = await p(v, i))
          ) {
            let e,
              t = new n(a, { method: "POST", body: i, duplex: "half" });
            if (
              (Wn.isFormData(i) &&
                (e = t.headers.get("content-type")) &&
                v.setContentType(e),
              t.body)
            ) {
              const [e, n] = _r(S, Rr(Ar(g)));
              i = Br(t.body, 65536, e, n);
            }
          }
          Wn.isString(y) || (y = y ? "include" : "omit");
          const t = o && "credentials" in n.prototype,
            s = {
              ...x,
              signal: E,
              method: l.toUpperCase(),
              headers: v.normalize().toJSON(),
              body: i,
              duplex: "half",
              credentials: t ? y : void 0,
            };
          k = o && new n(a, s);
          let c = await (o ? w(k, x) : w(a, s));
          const m = d && ("stream" === b || "response" === b);
          if (d && (h || (m && N))) {
            const e = {};
            ["status", "statusText", "headers"].forEach((t) => {
              e[t] = c[t];
            });
            const t = Wn.toFiniteNumber(c.headers.get("content-length")),
              [n, a] = (h && _r(t, Rr(Ar(h), !0))) || [];
            c = new r(
              Br(c.body, 65536, n, () => {
                (a && a(), N && N());
              }),
              e,
            );
          }
          b = b || "text";
          let j = await f[Wn.findKey(f, b) || "text"](c, e);
          return (
            !m && N && N(),
            await new Promise((t, n) => {
              Sr(t, n, {
                data: j,
                headers: wr.from(c.headers),
                status: c.status,
                statusText: c.statusText,
                config: e,
                request: k,
              });
            })
          );
        } catch (j) {
          if (
            (N && N(),
            j && "TypeError" === j.name && /Load failed|fetch/i.test(j.message))
          )
            throw Object.assign(
              new qn("Network Error", qn.ERR_NETWORK, e, k, j && j.response),
              { cause: j.cause || j },
            );
          throw qn.from(j, j && j.code, e, k, j && j.response);
        }
      };
    },
    Yr = new Map(),
    Qr = (e) => {
      let t = (e && e.env) || {};
      const { fetch: n, Request: r, Response: a } = t,
        o = [r, a, n];
      let l,
        i,
        s = o.length,
        c = Yr;
      for (; s--; )
        ((l = o[s]),
          (i = c.get(l)),
          void 0 === i && c.set(l, (i = s ? new Map() : Kr(t))),
          (c = i));
      return i;
    },
    Gr = (Qr(), { http: null, xhr: Mr, fetch: { get: Qr } });
  Wn.forEach(Gr, (e, t) => {
    if (e) {
      try {
        Object.defineProperty(e, "name", { value: t });
      } catch (Lu) {}
      Object.defineProperty(e, "adapterName", { value: t });
    }
  });
  const Jr = (e) => `- ${e}`,
    Xr = (e) => Wn.isFunction(e) || null === e || !1 === e;
  const Zr = {
    getAdapter: function (e, t) {
      e = Wn.isArray(e) ? e : [e];
      const { length: n } = e;
      let r, a;
      const o = {};
      for (let l = 0; l < n; l++) {
        let n;
        if (
          ((r = e[l]),
          (a = r),
          !Xr(r) && ((a = Gr[(n = String(r)).toLowerCase()]), void 0 === a))
        )
          throw new qn(`Unknown adapter '${n}'`);
        if (a && (Wn.isFunction(a) || (a = a.get(t)))) break;
        o[n || "#" + l] = a;
      }
      if (!a) {
        const e = Object.entries(o).map((e) => {
          let [t, n] = e;
          return (
            `adapter ${t} ` +
            (!1 === n
              ? "is not supported by the environment"
              : "is not available in the build")
          );
        });
        let t = n
          ? e.length > 1
            ? "since :\n" + e.map(Jr).join("\n")
            : " " + Jr(e[0])
          : "as no adapter specified";
        throw new qn(
          "There is no suitable adapter to dispatch the request " + t,
          "ERR_NOT_SUPPORT",
        );
      }
      return a;
    },
    adapters: Gr,
  };
  function ea(e) {
    if (
      (e.cancelToken && e.cancelToken.throwIfRequested(),
      e.signal && e.signal.aborted)
    )
      throw new Nr(null, e);
  }
  function ta(e) {
    (ea(e),
      (e.headers = wr.from(e.headers)),
      (e.data = Er.call(e, e.transformRequest)),
      -1 !== ["post", "put", "patch"].indexOf(e.method) &&
        e.headers.setContentType("application/x-www-form-urlencoded", !1));
    return Zr.getAdapter(
      e.adapter || mr.adapter,
      e,
    )(e).then(
      function (t) {
        return (
          ea(e),
          (t.data = Er.call(e, e.transformResponse, t)),
          (t.headers = wr.from(t.headers)),
          t
        );
      },
      function (t) {
        return (
          kr(t) ||
            (ea(e),
            t &&
              t.response &&
              ((t.response.data = Er.call(e, e.transformResponse, t.response)),
              (t.response.headers = wr.from(t.response.headers)))),
          Promise.reject(t)
        );
      },
    );
  }
  const na = "1.14.0",
    ra = {};
  ["object", "boolean", "number", "function", "string", "symbol"].forEach(
    (e, t) => {
      ra[e] = function (n) {
        return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
      };
    },
  );
  const aa = {};
  ((ra.transitional = function (e, t, n) {
    function r(e, t) {
      return (
        "[Axios v" +
        na +
        "] Transitional option '" +
        e +
        "'" +
        t +
        (n ? ". " + n : "")
      );
    }
    return (n, a, o) => {
      if (!1 === e)
        throw new qn(
          r(a, " has been removed" + (t ? " in " + t : "")),
          qn.ERR_DEPRECATED,
        );
      return (
        t &&
          !aa[a] &&
          ((aa[a] = !0),
          console.warn(
            r(
              a,
              " has been deprecated since v" +
                t +
                " and will be removed in the near future",
            ),
          )),
        !e || e(n, a, o)
      );
    };
  }),
    (ra.spelling = function (e) {
      return (t, n) => (
        console.warn(`${n} is likely a misspelling of ${e}`),
        !0
      );
    }));
  const oa = {
      assertOptions: function (e, t, n) {
        if ("object" !== typeof e)
          throw new qn("options must be an object", qn.ERR_BAD_OPTION_VALUE);
        const r = Object.keys(e);
        let a = r.length;
        for (; a-- > 0; ) {
          const o = r[a],
            l = t[o];
          if (l) {
            const t = e[o],
              n = void 0 === t || l(t, o, e);
            if (!0 !== n)
              throw new qn(
                "option " + o + " must be " + n,
                qn.ERR_BAD_OPTION_VALUE,
              );
            continue;
          }
          if (!0 !== n) throw new qn("Unknown option " + o, qn.ERR_BAD_OPTION);
        }
      },
      validators: ra,
    },
    la = oa.validators;
  class ia {
    constructor(e) {
      ((this.defaults = e || {}),
        (this.interceptors = { request: new rr(), response: new rr() }));
    }
    async request(e, t) {
      try {
        return await this._request(e, t);
      } catch (n) {
        if (n instanceof Error) {
          let e = {};
          Error.captureStackTrace
            ? Error.captureStackTrace(e)
            : (e = new Error());
          const t = e.stack ? e.stack.replace(/^.+\n/, "") : "";
          try {
            n.stack
              ? t &&
                !String(n.stack).endsWith(t.replace(/^.+\n.+\n/, "")) &&
                (n.stack += "\n" + t)
              : (n.stack = t);
          } catch (Lu) {}
        }
        throw n;
      }
    }
    _request(e, t) {
      ("string" === typeof e ? ((t = t || {}).url = e) : (t = e || {}),
        (t = Fr(this.defaults, t)));
      const { transitional: n, paramsSerializer: r, headers: a } = t;
      (void 0 !== n &&
        oa.assertOptions(
          n,
          {
            silentJSONParsing: la.transitional(la.boolean),
            forcedJSONParsing: la.transitional(la.boolean),
            clarifyTimeoutError: la.transitional(la.boolean),
            legacyInterceptorReqResOrdering: la.transitional(la.boolean),
          },
          !1,
        ),
        null != r &&
          (Wn.isFunction(r)
            ? (t.paramsSerializer = { serialize: r })
            : oa.assertOptions(
                r,
                { encode: la.function, serialize: la.function },
                !0,
              )),
        void 0 !== t.allowAbsoluteUrls ||
          (void 0 !== this.defaults.allowAbsoluteUrls
            ? (t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
            : (t.allowAbsoluteUrls = !0)),
        oa.assertOptions(
          t,
          {
            baseUrl: la.spelling("baseURL"),
            withXsrfToken: la.spelling("withXSRFToken"),
          },
          !0,
        ),
        (t.method = (t.method || this.defaults.method || "get").toLowerCase()));
      let o = a && Wn.merge(a.common, a[t.method]);
      (a &&
        Wn.forEach(
          ["delete", "get", "head", "post", "put", "patch", "common"],
          (e) => {
            delete a[e];
          },
        ),
        (t.headers = wr.concat(o, a)));
      const l = [];
      let i = !0;
      this.interceptors.request.forEach(function (e) {
        if ("function" === typeof e.runWhen && !1 === e.runWhen(t)) return;
        i = i && e.synchronous;
        const n = t.transitional || ar;
        n && n.legacyInterceptorReqResOrdering
          ? l.unshift(e.fulfilled, e.rejected)
          : l.push(e.fulfilled, e.rejected);
      });
      const s = [];
      let c;
      this.interceptors.response.forEach(function (e) {
        s.push(e.fulfilled, e.rejected);
      });
      let u,
        d = 0;
      if (!i) {
        const e = [ta.bind(this), void 0];
        for (
          e.unshift(...l), e.push(...s), u = e.length, c = Promise.resolve(t);
          d < u;
        )
          c = c.then(e[d++], e[d++]);
        return c;
      }
      u = l.length;
      let f = t;
      for (; d < u; ) {
        const e = l[d++],
          t = l[d++];
        try {
          f = e(f);
        } catch (p) {
          t.call(this, p);
          break;
        }
      }
      try {
        c = ta.call(this, f);
      } catch (p) {
        return Promise.reject(p);
      }
      for (d = 0, u = s.length; d < u; ) c = c.then(s[d++], s[d++]);
      return c;
    }
    getUri(e) {
      return nr(
        Tr((e = Fr(this.defaults, e)).baseURL, e.url, e.allowAbsoluteUrls),
        e.params,
        e.paramsSerializer,
      );
    }
  }
  (Wn.forEach(["delete", "get", "head", "options"], function (e) {
    ia.prototype[e] = function (t, n) {
      return this.request(
        Fr(n || {}, { method: e, url: t, data: (n || {}).data }),
      );
    };
  }),
    Wn.forEach(["post", "put", "patch"], function (e) {
      function t(t) {
        return function (n, r, a) {
          return this.request(
            Fr(a || {}, {
              method: e,
              headers: t ? { "Content-Type": "multipart/form-data" } : {},
              url: n,
              data: r,
            }),
          );
        };
      }
      ((ia.prototype[e] = t()), (ia.prototype[e + "Form"] = t(!0)));
    }));
  const sa = ia;
  class ca {
    constructor(e) {
      if ("function" !== typeof e)
        throw new TypeError("executor must be a function.");
      let t;
      this.promise = new Promise(function (e) {
        t = e;
      });
      const n = this;
      (this.promise.then((e) => {
        if (!n._listeners) return;
        let t = n._listeners.length;
        for (; t-- > 0; ) n._listeners[t](e);
        n._listeners = null;
      }),
        (this.promise.then = (e) => {
          let t;
          const r = new Promise((e) => {
            (n.subscribe(e), (t = e));
          }).then(e);
          return (
            (r.cancel = function () {
              n.unsubscribe(t);
            }),
            r
          );
        }),
        e(function (e, r, a) {
          n.reason || ((n.reason = new Nr(e, r, a)), t(n.reason));
        }));
    }
    throwIfRequested() {
      if (this.reason) throw this.reason;
    }
    subscribe(e) {
      this.reason
        ? e(this.reason)
        : this._listeners
          ? this._listeners.push(e)
          : (this._listeners = [e]);
    }
    unsubscribe(e) {
      if (!this._listeners) return;
      const t = this._listeners.indexOf(e);
      -1 !== t && this._listeners.splice(t, 1);
    }
    toAbortSignal() {
      const e = new AbortController(),
        t = (t) => {
          e.abort(t);
        };
      return (
        this.subscribe(t),
        (e.signal.unsubscribe = () => this.unsubscribe(t)),
        e.signal
      );
    }
    static source() {
      let e;
      return {
        token: new ca(function (t) {
          e = t;
        }),
        cancel: e,
      };
    }
  }
  const ua = ca;
  const da = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511,
    WebServerIsDown: 521,
    ConnectionTimedOut: 522,
    OriginIsUnreachable: 523,
    TimeoutOccurred: 524,
    SslHandshakeFailed: 525,
    InvalidSslCertificate: 526,
  };
  Object.entries(da).forEach((e) => {
    let [t, n] = e;
    da[n] = t;
  });
  const fa = da;
  const pa = (function e(t) {
    const n = new sa(t),
      r = en(sa.prototype.request, n);
    return (
      Wn.extend(r, sa.prototype, n, { allOwnKeys: !0 }),
      Wn.extend(r, n, null, { allOwnKeys: !0 }),
      (r.create = function (n) {
        return e(Fr(t, n));
      }),
      r
    );
  })(mr);
  ((pa.Axios = sa),
    (pa.CanceledError = Nr),
    (pa.CancelToken = ua),
    (pa.isCancel = kr),
    (pa.VERSION = na),
    (pa.toFormData = Gn),
    (pa.AxiosError = qn),
    (pa.Cancel = pa.CanceledError),
    (pa.all = function (e) {
      return Promise.all(e);
    }),
    (pa.spread = function (e) {
      return function (t) {
        return e.apply(null, t);
      };
    }),
    (pa.isAxiosError = function (e) {
      return Wn.isObject(e) && !0 === e.isAxiosError;
    }),
    (pa.mergeConfig = Fr),
    (pa.AxiosHeaders = wr),
    (pa.formToJSON = (e) => fr(Wn.isHTMLForm(e) ? new FormData(e) : e)),
    (pa.getAdapter = Zr.getAdapter),
    (pa.HttpStatusCode = fa),
    (pa.default = pa));
  const ma = pa,
    ha = (e) => {
      const t = ((e) =>
        e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) =>
          n ? n.toUpperCase() : t.toLowerCase(),
        ))(e);
      return t.charAt(0).toUpperCase() + t.slice(1);
    },
    ga = function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return t
        .filter(
          (e, t, n) => Boolean(e) && "" !== e.trim() && n.indexOf(e) === t,
        )
        .join(" ")
        .trim();
    },
    ba = (e) => {
      for (const t in e)
        if (t.startsWith("aria-") || "role" === t || "title" === t) return !0;
    };
  var va = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  const ya = (0, a.forwardRef)((e, t) => {
      let {
        color: n = "currentColor",
        size: r = 24,
        strokeWidth: o = 2,
        absoluteStrokeWidth: l,
        className: i = "",
        children: s,
        iconNode: c,
        ...u
      } = e;
      return (0, a.createElement)(
        "svg",
        {
          ref: t,
          ...va,
          width: r,
          height: r,
          stroke: n,
          strokeWidth: l ? (24 * Number(o)) / Number(r) : o,
          className: ga("lucide", i),
          ...(!s && !ba(u) && { "aria-hidden": "true" }),
          ...u,
        },
        [
          ...c.map((e) => {
            let [t, n] = e;
            return (0, a.createElement)(t, n);
          }),
          ...(Array.isArray(s) ? s : [s]),
        ],
      );
    }),
    xa = (e, t) => {
      const n = (0, a.forwardRef)((n, r) => {
        let { className: o, ...l } = n;
        return (0, a.createElement)(ya, {
          ref: r,
          iconNode: t,
          className: ga(
            `lucide-${((i = ha(e)), i.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase())}`,
            `lucide-${e}`,
            o,
          ),
          ...l,
        });
        var i;
      });
      return ((n.displayName = ha(e)), n);
    },
    wa = xa("arrow-left", [
      ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
      ["path", { d: "M19 12H5", key: "x3x0zl" }],
    ]),
    Ea = xa("shopping-cart", [
      ["circle", { cx: "8", cy: "21", r: "1", key: "jimo8o" }],
      ["circle", { cx: "19", cy: "21", r: "1", key: "13723u" }],
      [
        "path",
        {
          d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
          key: "9zh506",
        },
      ],
    ]),
    ka = xa("plus", [
      ["path", { d: "M5 12h14", key: "1ays0h" }],
      ["path", { d: "M12 5v14", key: "s699le" }],
    ]),
    Na = xa("minus", [["path", { d: "M5 12h14", key: "1ays0h" }]]),
    Sa = xa("x", [
      ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
      ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
    ]),
    ja = {
      extras: [
        {
          id: "chutney",
          name: "Chutney",
          description: "50gm",
          price: 19,
          image: n.p + "static/media/Green_Chutney.fe8cecc3ed45be25b066.png",
        },
        {
          id: "lachha-pyaj",
          name: "Lachha Pyaj",
          description: "Fresh onion rings",
          price: 9,
          image: n.p + "static/media/Pyaj.c5ae314203e988ee9199.png",
        },
      ],
      desserts: [
        {
          id: "gulab-jamun",
          name: "Gulab Jamun",
          description: "2 pieces",
          price: 49,
          image: n.p + "static/media/gulab-jamun.daaaa5ae150acde8bc4e.jpeg",
        },
      ],
      mealEssentials: [
        {
          id: "cutlery",
          name: "Cutlery Set",
          description: "Spoon, fork, napkin",
          price: 5,
          image: n.p + "static/media/cutlery.718967311fc3ba0641a2.png",
        },
      ],
    },
    Ca = (e) => {
      let { isOpen: t, onClose: n, product: r, onAddToCart: o } = e;
      const [l, i] = (0, a.useState)([]),
        [s, c] = (0, a.useState)(1);
      (0, a.useEffect)(
        () => (
          t
            ? (i([]), c(1), (document.body.style.overflow = "hidden"))
            : (document.body.style.overflow = "unset"),
          () => {
            document.body.style.overflow = "unset";
          }
        ),
        [t],
      );
      const u = (e) => {
          i((t) =>
            t.find((t) => t.id === e.id)
              ? t.filter((t) => t.id !== e.id)
              : [...t, e],
          );
        },
        d = (e) => l.some((t) => t.id === e),
        f = () => r.price * s + l.reduce((e, t) => e + t.price, 0);
      return r && t
        ? (0, St.jsxs)(St.Fragment, {
            children: [
              (0, St.jsx)("div", {
                className:
                  "fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300 " +
                  (t ? "opacity-100" : "opacity-0 pointer-events-none"),
                onClick: n,
              }),
              (0, St.jsxs)("div", {
                className:
                  "fixed bottom-0 left-0 right-0 bg-[#202C33] rounded-t-3xl z-50 transform transition-transform duration-300 ease-out max-h-[85vh] flex flex-col " +
                  (t ? "translate-y-0" : "translate-y-full"),
                style: { boxShadow: "0 -4px 20px rgba(0, 0, 0, 0.3)" },
                children: [
                  (0, St.jsx)("div", {
                    className: "flex justify-center pt-3 pb-2",
                    children: (0, St.jsx)("div", {
                      className: "w-12 h-1.5 bg-[#8696A0] rounded-full",
                    }),
                  }),
                  (0, St.jsxs)("div", {
                    className:
                      "flex items-start gap-3 px-6 py-4 border-b border-[#2A3942]",
                    children: [
                      (0, St.jsx)("img", {
                        src: r.image,
                        alt: r.name,
                        className:
                          "w-16 h-16 object-cover rounded-lg ring-1 ring-white/10",
                      }),
                      (0, St.jsxs)("div", {
                        className: "flex-1",
                        children: [
                          (0, St.jsx)("h2", {
                            className: "text-lg font-bold text-[#E9EDEF]",
                            children: r.name,
                          }),
                          (0, St.jsx)("p", {
                            className: "text-sm text-[#8696A0] mt-1",
                            children: r.description,
                          }),
                          (0, St.jsxs)("p", {
                            className:
                              "text-base font-bold text-[#25D366] mt-1",
                            children: ["\u20b9", r.price],
                          }),
                        ],
                      }),
                      (0, St.jsx)("button", {
                        onClick: n,
                        className:
                          "p-1.5 hover:bg-[#2A3942] rounded-full transition-colors",
                        "data-testid": "close-customization",
                        children: (0, St.jsx)(Sa, {
                          className: "w-5 h-5 text-[#8696A0]",
                        }),
                      }),
                    ],
                  }),
                  (0, St.jsxs)("div", {
                    className: "flex-1 overflow-y-auto px-6 py-4",
                    children: [
                      (0, St.jsxs)("div", {
                        className: "mb-6",
                        children: [
                          (0, St.jsx)("h3", {
                            className:
                              "text-base font-semibold text-[#E9EDEF] mb-2",
                            children: "Extras",
                          }),
                          (0, St.jsx)("p", {
                            className: "text-xs text-[#8696A0] mb-3",
                            children: "Add some flavor",
                          }),
                          (0, St.jsx)("div", {
                            className: "space-y-2",
                            children: ja.extras.map((e) =>
                              (0, St.jsxs)(
                                "div",
                                {
                                  onClick: () => u(e),
                                  className:
                                    "flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-all " +
                                    (d(e.id)
                                      ? "border-[#25D366] bg-[#25D366]/5"
                                      : "border-[#2A3942] bg-[#111B21]"),
                                  "data-testid": `addon-${e.id}`,
                                  children: [
                                    (0, St.jsxs)("div", {
                                      className:
                                        "flex items-center gap-3 flex-1",
                                      children: [
                                        (0, St.jsx)("img", {
                                          src: e.image,
                                          alt: e.name,
                                          className:
                                            "w-10 h-10 object-cover rounded-lg",
                                        }),
                                        (0, St.jsxs)("div", {
                                          className: "flex-1",
                                          children: [
                                            (0, St.jsx)("p", {
                                              className:
                                                "text-[#E9EDEF] font-medium text-sm",
                                              children: e.name,
                                            }),
                                            (0, St.jsx)("p", {
                                              className:
                                                "text-xs text-[#8696A0]",
                                              children: e.description,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, St.jsxs)("div", {
                                      className: "flex items-center gap-2",
                                      children: [
                                        (0, St.jsxs)("span", {
                                          className:
                                            "text-[#E9EDEF] font-bold text-sm",
                                          children: ["\u20b9", e.price],
                                        }),
                                        (0, St.jsx)("div", {
                                          className:
                                            "w-5 h-5 rounded border-2 flex items-center justify-center transition-all " +
                                            (d(e.id)
                                              ? "border-[#25D366] bg-[#25D366]"
                                              : "border-[#8696A0]"),
                                          children:
                                            d(e.id) &&
                                            (0, St.jsx)("svg", {
                                              className: "w-3 h-3 text-white",
                                              fill: "none",
                                              stroke: "currentColor",
                                              viewBox: "0 0 24 24",
                                              children: (0, St.jsx)("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M5 13l4 4L19 7",
                                              }),
                                            }),
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                e.id,
                              ),
                            ),
                          }),
                        ],
                      }),
                      (0, St.jsxs)("div", {
                        className: "mb-6",
                        children: [
                          (0, St.jsx)("h3", {
                            className:
                              "text-base font-semibold text-[#E9EDEF] mb-2",
                            children: "Desserts",
                          }),
                          (0, St.jsx)("p", {
                            className: "text-xs text-[#8696A0] mb-3",
                            children: "End on a sweet note",
                          }),
                          (0, St.jsx)("div", {
                            className: "space-y-2",
                            children: ja.desserts.map((e) =>
                              (0, St.jsxs)(
                                "div",
                                {
                                  onClick: () => u(e),
                                  className:
                                    "flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-all " +
                                    (d(e.id)
                                      ? "border-[#25D366] bg-[#25D366]/5"
                                      : "border-[#2A3942] bg-[#111B21]"),
                                  "data-testid": `addon-${e.id}`,
                                  children: [
                                    (0, St.jsxs)("div", {
                                      className:
                                        "flex items-center gap-3 flex-1",
                                      children: [
                                        (0, St.jsx)("img", {
                                          src: e.image,
                                          alt: e.name,
                                          className:
                                            "w-10 h-10 object-cover rounded-lg",
                                        }),
                                        (0, St.jsxs)("div", {
                                          className: "flex-1",
                                          children: [
                                            (0, St.jsx)("p", {
                                              className:
                                                "text-[#E9EDEF] font-medium text-sm",
                                              children: e.name,
                                            }),
                                            (0, St.jsx)("p", {
                                              className:
                                                "text-xs text-[#8696A0]",
                                              children: e.description,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, St.jsxs)("div", {
                                      className: "flex items-center gap-2",
                                      children: [
                                        (0, St.jsxs)("span", {
                                          className:
                                            "text-[#E9EDEF] font-bold text-sm",
                                          children: ["\u20b9", e.price],
                                        }),
                                        (0, St.jsx)("div", {
                                          className:
                                            "w-5 h-5 rounded border-2 flex items-center justify-center transition-all " +
                                            (d(e.id)
                                              ? "border-[#25D366] bg-[#25D366]"
                                              : "border-[#8696A0]"),
                                          children:
                                            d(e.id) &&
                                            (0, St.jsx)("svg", {
                                              className: "w-3 h-3 text-white",
                                              fill: "none",
                                              stroke: "currentColor",
                                              viewBox: "0 0 24 24",
                                              children: (0, St.jsx)("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M5 13l4 4L19 7",
                                              }),
                                            }),
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                e.id,
                              ),
                            ),
                          }),
                        ],
                      }),
                      (0, St.jsxs)("div", {
                        className: "mb-6",
                        children: [
                          (0, St.jsx)("h3", {
                            className:
                              "text-base font-semibold text-[#E9EDEF] mb-2",
                            children: "Meal Essentials",
                          }),
                          (0, St.jsx)("p", {
                            className: "text-xs text-[#8696A0] mb-3",
                            children: "Don't forget these",
                          }),
                          (0, St.jsx)("div", {
                            className: "space-y-2",
                            children: ja.mealEssentials.map((e) =>
                              (0, St.jsxs)(
                                "div",
                                {
                                  onClick: () => u(e),
                                  className:
                                    "flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-all " +
                                    (d(e.id)
                                      ? "border-[#25D366] bg-[#25D366]/5"
                                      : "border-[#2A3942] bg-[#111B21]"),
                                  "data-testid": `addon-${e.id}`,
                                  children: [
                                    (0, St.jsxs)("div", {
                                      className:
                                        "flex items-center gap-3 flex-1",
                                      children: [
                                        (0, St.jsx)("img", {
                                          src: e.image,
                                          alt: e.name,
                                          className:
                                            "w-10 h-10 object-cover rounded-lg",
                                        }),
                                        (0, St.jsxs)("div", {
                                          className: "flex-1",
                                          children: [
                                            (0, St.jsx)("p", {
                                              className:
                                                "text-[#E9EDEF] font-medium text-sm",
                                              children: e.name,
                                            }),
                                            (0, St.jsx)("p", {
                                              className:
                                                "text-xs text-[#8696A0]",
                                              children: e.description,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, St.jsxs)("div", {
                                      className: "flex items-center gap-2",
                                      children: [
                                        (0, St.jsxs)("span", {
                                          className:
                                            "text-[#E9EDEF] font-bold text-sm",
                                          children: ["\u20b9", e.price],
                                        }),
                                        (0, St.jsx)("div", {
                                          className:
                                            "w-5 h-5 rounded border-2 flex items-center justify-center transition-all " +
                                            (d(e.id)
                                              ? "border-[#25D366] bg-[#25D366]"
                                              : "border-[#8696A0]"),
                                          children:
                                            d(e.id) &&
                                            (0, St.jsx)("svg", {
                                              className: "w-3 h-3 text-white",
                                              fill: "none",
                                              stroke: "currentColor",
                                              viewBox: "0 0 24 24",
                                              children: (0, St.jsx)("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M5 13l4 4L19 7",
                                              }),
                                            }),
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                e.id,
                              ),
                            ),
                          }),
                        ],
                      }),
                      (0, St.jsx)("div", { className: "h-24" }),
                    ],
                  }),
                  (0, St.jsxs)("div", {
                    className:
                      "border-t border-[#2A3942] bg-[#202C33] px-6 py-4",
                    children: [
                      (0, St.jsxs)("div", {
                        className: "flex items-center justify-between mb-3",
                        children: [
                          (0, St.jsxs)("div", {
                            className:
                              "flex items-center gap-2 bg-[#111B21] rounded-full px-3 py-1.5 border border-[#2A3942]",
                            children: [
                              (0, St.jsx)("button", {
                                onClick: () => c(Math.max(1, s - 1)),
                                className:
                                  "p-1 hover:bg-[#2A3942] rounded-full transition-colors",
                                "data-testid": "quantity-minus",
                                children: (0, St.jsx)(Na, {
                                  className: "w-4 h-4 text-[#25D366]",
                                }),
                              }),
                              (0, St.jsx)("span", {
                                className:
                                  "text-[#E9EDEF] font-bold min-w-[30px] text-center",
                                "data-testid": "quantity-display",
                                children: s,
                              }),
                              (0, St.jsx)("button", {
                                onClick: () => c(s + 1),
                                className:
                                  "p-1 hover:bg-[#2A3942] rounded-full transition-colors",
                                "data-testid": "quantity-plus",
                                children: (0, St.jsx)(ka, {
                                  className: "w-4 h-4 text-[#25D366]",
                                }),
                              }),
                            ],
                          }),
                          (0, St.jsxs)("div", {
                            className: "text-right",
                            children: [
                              (0, St.jsx)("p", {
                                className: "text-xs text-[#8696A0]",
                                children: "Total",
                              }),
                              (0, St.jsxs)("p", {
                                className: "text-xl font-bold text-[#25D366]",
                                "data-testid": "modal-total",
                                children: ["\u20b9", f()],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, St.jsxs)("button", {
                        onClick: () => {
                          (o({ ...r, quantity: s, addons: l }),
                            Ht.success(`${r.name} added to cart`),
                            n());
                        },
                        className:
                          "w-full bg-[#25D366] hover:bg-[#1DA851] text-white font-bold rounded-full py-3 transition-all shadow-lg active:scale-95",
                        "data-testid": "add-item-button",
                        children: ["Add item \xb7 \u20b9", f()],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        : null;
    },
    Ra = n.p + "static/media/Mr-Logo(9JanFinal) (1).97fabff01809579a8005.png";
  console.log("API URL:", "https://api.mrmutton.com");
  const _a = () => {
      const [e, t] = (0, a.useState)([]),
        [n, r] = (0, a.useState)(!0),
        [o, l] = (0, a.useState)(null),
        [i, s] = (0, a.useState)(!1),
        {
          addToCart: c,
          removeFromCart: u,
          getItemQuantity: d,
          getTotalItems: f,
        } = Ct(),
        p = me();
      (0, a.useEffect)(() => {
        (async () => {
          try {
            const e = await ma.get("https://api.mrmutton.com/api/products");
            (t(Array.isArray(e.data) ? e.data : []),
              console.log("API RESPONSE:", e.data));
          } catch (e) {
            (console.error("Failed to fetch products:", e),
              Ht.error("Failed to load products"));
          } finally {
            r(!1);
          }
        })();
      }, []);
      const m = (Array.isArray(e) ? e : []).reduce(
          (e, t) => (
            e[t.category] || (e[t.category] = []),
            e[t.category].push(t),
            e
          ),
          {},
        ),
        h = (e) => {
          (l(e), s(!0));
        };
      return n
        ? (0, St.jsx)("div", {
            className:
              "min-h-screen bg-[#0B141A] flex items-center justify-center",
            children: (0, St.jsx)("div", {
              className: "text-[#E9EDEF] text-xl",
              children: "Loading...",
            }),
          })
        : (0, St.jsxs)("div", {
            className: "min-h-screen bg-[#0B141A] pb-32",
            children: [
              (0, St.jsx)("header", {
                className:
                  "sticky top-0 z-40 backdrop-blur-lg bg-[#0B141A]/80 border-b border-[#2A3942]",
                children: (0, St.jsxs)("div", {
                  className:
                    "max-w-7xl mx-auto px-4 py-4 flex items-center justify-between",
                  children: [
                    (0, St.jsxs)("div", {
                      className: "flex items-center gap-4",
                      children: [
                        (0, St.jsx)("button", {
                          onClick: () => window.history.back(),
                          className:
                            "p-2 hover:bg-[#2A3942] rounded-full transition-colors",
                          "data-testid": "back-button",
                          children: (0, St.jsx)(wa, {
                            className: "w-6 h-6 text-[#E9EDEF]",
                          }),
                        }),
                        (0, St.jsx)("h1", {
                          className:
                            "text-2xl font-bold text-[#E9EDEF] font-['Outfit']",
                          "data-testid": "catalogue-title",
                          children: "Catalogue",
                        }),
                      ],
                    }),
                    (0, St.jsxs)("button", {
                      className:
                        "p-2 hover:bg-[#2A3942] rounded-full transition-colors relative",
                      onClick: () => p("/cart"),
                      "data-testid": "cart-icon-button",
                      children: [
                        (0, St.jsx)(Ea, {
                          className: "w-6 h-6 text-[#E9EDEF]",
                        }),
                        f() > 0 &&
                          (0, St.jsx)("span", {
                            className:
                              "absolute -top-1 -right-1 bg-[#25D366] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold",
                            "data-testid": "cart-count-badge",
                            children: f(),
                          }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, St.jsxs)("div", {
                className: "relative h-48 md:h-64 overflow-hidden",
                children: [
                  (0, St.jsx)("img", {
                    src: Ra,
                    alt: "Restaurant",
                    className: "w-full h-full object-cover",
                  }),
                  (0, St.jsx)("div", {
                    className:
                      "absolute inset-0 bg-gradient-to-t from-[#0B141A] to-transparent flex items-end",
                    children: (0, St.jsxs)("div", {
                      className: "p-6",
                      children: [
                        (0, St.jsx)("h2", {
                          className:
                            "text-3xl md:text-4xl font-bold text-white font-['Outfit']",
                          "data-testid": "hero-title",
                          children: "Mr. Mutton",
                        }),
                        (0, St.jsx)("p", {
                          className: "text-[#E9EDEF] text-lg mt-2",
                          children: "Slow Cooked. Soul Satisfied.",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, St.jsx)("div", {
                className: "max-w-7xl mx-auto px-4 py-8",
                children: Object.entries(m).map((e) => {
                  let [t, n] = e;
                  return (0, St.jsxs)(
                    "div",
                    {
                      className: "mb-12",
                      children: [
                        (0, St.jsxs)("div", {
                          className: "flex items-center justify-between mb-6",
                          children: [
                            (0, St.jsx)("h2", {
                              className:
                                "text-2xl md:text-3xl font-semibold text-[#E9EDEF] font-['Outfit']",
                              "data-testid": `category-${t.toLowerCase().replace(/\s+/g, "-")}`,
                              children: t,
                            }),
                            (0, St.jsx)("button", {
                              className:
                                "text-[#25D366] hover:text-[#1DA851] text-sm font-medium",
                              children: "See all",
                            }),
                          ],
                        }),
                        (0, St.jsx)("div", {
                          className:
                            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                          children: n.map((e) => {
                            const t = d(e.id);
                            return (0, St.jsx)(
                              "div",
                              {
                                className:
                                  "bg-[#202C33] rounded-xl border border-[#2A3942] hover:border-[#25D366]/50 transition-colors overflow-hidden h-full",
                                "data-testid": `product-card-${e.id}`,
                                children: (0, St.jsxs)("div", {
                                  className:
                                    "flex md:flex-col gap-4 p-4 h-full",
                                  children: [
                                    (0, St.jsx)("div", {
                                      className: "flex-shrink-0",
                                      children: (0, St.jsx)("img", {
                                        src: e.image,
                                        alt: e.name,
                                        className:
                                          "w-24 h-24 md:w-full md:h-48 object-cover rounded-lg ring-1 ring-white/10",
                                      }),
                                    }),
                                    (0, St.jsxs)("div", {
                                      className:
                                        "flex-1 flex flex-col justify-between",
                                      children: [
                                        (0, St.jsxs)("div", {
                                          children: [
                                            (0, St.jsx)("h3", {
                                              className:
                                                "text-base md:text-lg font-medium text-[#E9EDEF] mb-1",
                                              "data-testid": `product-name-${e.id}`,
                                              children: e.name,
                                            }),
                                            (0, St.jsx)("p", {
                                              className:
                                                "text-xs md:text-sm text-[#8696A0] mb-2",
                                              children: e.description,
                                            }),
                                            (0, St.jsxs)("div", {
                                              className:
                                                "flex items-center gap-2 mb-3",
                                              children: [
                                                (0, St.jsxs)("span", {
                                                  className:
                                                    "text-lg md:text-xl font-bold text-[#E9EDEF]",
                                                  "data-testid": `product-price-${e.id}`,
                                                  children: [
                                                    "\u20b9",
                                                    e.price.toFixed(2),
                                                  ],
                                                }),
                                                e.original_price &&
                                                  (0, St.jsxs)("span", {
                                                    className:
                                                      "text-xs md:text-sm text-[#8696A0] line-through",
                                                    children: [
                                                      "\u20b9",
                                                      e.original_price.toFixed(
                                                        2,
                                                      ),
                                                    ],
                                                  }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, St.jsx)("div", {
                                          className:
                                            "flex items-center justify-end md:justify-start",
                                          children:
                                            0 === t
                                              ? (0, St.jsx)("button", {
                                                  onClick: () => h(e),
                                                  className:
                                                    "bg-[#202C33] hover:bg-[#2A3942] text-[#E9EDEF] border border-[#2A3942] rounded-full px-6 py-2 transition-all active:scale-95 flex items-center gap-2",
                                                  "data-testid": `add-button-${e.id}`,
                                                  children: (0, St.jsx)(ka, {
                                                    className: "w-5 h-5",
                                                  }),
                                                })
                                              : (0, St.jsxs)("div", {
                                                  className:
                                                    "flex items-center gap-2 bg-[#111B21] rounded-full px-2 py-1 border border-[#25D366]",
                                                  "data-testid": `quantity-controls-${e.id}`,
                                                  children: [
                                                    (0, St.jsx)("button", {
                                                      onClick: () => u(e.id),
                                                      className:
                                                        "p-1.5 hover:bg-[#2A3942] rounded-full transition-colors",
                                                      "data-testid": `minus-button-${e.id}`,
                                                      children: (0, St.jsx)(
                                                        Na,
                                                        {
                                                          className:
                                                            "w-5 h-5 text-[#25D366]",
                                                        },
                                                      ),
                                                    }),
                                                    (0, St.jsx)("span", {
                                                      className:
                                                        "text-[#E9EDEF] font-bold min-w-[24px] text-center",
                                                      "data-testid": `quantity-display-${e.id}`,
                                                      children: t,
                                                    }),
                                                    (0, St.jsx)("button", {
                                                      onClick: () => h(e),
                                                      className:
                                                        "p-1.5 hover:bg-[#2A3942] rounded-full transition-colors",
                                                      "data-testid": `plus-button-${e.id}`,
                                                      children: (0, St.jsx)(
                                                        ka,
                                                        {
                                                          className:
                                                            "w-5 h-5 text-[#25D366]",
                                                        },
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              },
                              e.id,
                            );
                          }),
                        }),
                      ],
                    },
                    t,
                  );
                }),
              }),
              f() > 0 &&
                (0, St.jsx)("div", {
                  className:
                    "fixed bottom-0 left-0 right-0 bg-[#202C33] border-t border-[#2A3942] p-4 z-50 backdrop-blur-lg md:left-auto md:right-4 md:bottom-4 md:w-auto md:rounded-full md:border",
                  "data-testid": "view-cart-footer",
                  children: (0, St.jsxs)("button", {
                    onClick: () => p("/cart"),
                    className:
                      "w-full md:w-auto bg-[#25D366] hover:bg-[#1DA851] text-white font-bold rounded-full py-3 px-6 transition-all shadow-lg active:scale-95 text-lg",
                    "data-testid": "view-cart-button",
                    children: ["View cart (", f(), ")"],
                  }),
                }),
              (0, St.jsx)(Ca, {
                isOpen: i,
                onClose: () => {
                  (s(!1), l(null));
                },
                product: o,
                onAddToCart: (e) => {
                  (c(e), s(!1), l(null));
                },
              }),
            ],
          });
    },
    Aa = xa("shopping-bag", [
      [
        "path",
        {
          d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",
          key: "hou9p0",
        },
      ],
      ["path", { d: "M3 6h18", key: "d0wm0j" }],
      ["path", { d: "M16 10a4 4 0 0 1-8 0", key: "1ltviw" }],
    ]),
    Da = () => {
      const {
          cart: e,
          addToCart: t,
          removeFromCart: n,
          getTotalAmount: r,
          getTotalItems: a,
        } = Ct(),
        o = me(),
        l = r(),
        i = e.reduce((e, t) => e + 0.2 * t.price * t.quantity, 0);
      return 0 === e.length
        ? (0, St.jsxs)("div", {
            className:
              "min-h-screen bg-[#0B141A] flex flex-col items-center justify-center p-4",
            children: [
              (0, St.jsx)(Aa, { className: "w-24 h-24 text-[#8696A0] mb-4" }),
              (0, St.jsx)("h2", {
                className: "text-2xl font-bold text-[#E9EDEF] mb-2",
                children: "Your cart is empty",
              }),
              (0, St.jsx)("p", {
                className: "text-[#8696A0] mb-6",
                children: "Add some delicious items to get started",
              }),
              (0, St.jsx)("button", {
                onClick: () => o("/"),
                className:
                  "bg-[#25D366] hover:bg-[#1DA851] text-white font-medium rounded-full px-6 py-2 transition-all shadow-lg active:scale-95",
                "data-testid": "back-to-catalogue-button",
                children: "Browse Catalogue",
              }),
            ],
          })
        : (0, St.jsxs)("div", {
            className: "min-h-screen bg-[#0B141A] pb-32",
            children: [
              (0, St.jsx)("header", {
                className:
                  "sticky top-0 z-40 backdrop-blur-lg bg-[#0B141A]/80 border-b border-[#2A3942]",
                children: (0, St.jsxs)("div", {
                  className:
                    "max-w-7xl mx-auto px-4 py-4 flex items-center justify-between",
                  children: [
                    (0, St.jsx)("button", {
                      onClick: () => o("/"),
                      className:
                        "p-2 hover:bg-[#2A3942] rounded-full transition-colors",
                      "data-testid": "close-cart-button",
                      children: (0, St.jsx)(Sa, {
                        className: "w-6 h-6 text-[#E9EDEF]",
                      }),
                    }),
                    (0, St.jsx)("h1", {
                      className:
                        "text-2xl font-bold text-[#E9EDEF] font-['Outfit']",
                      "data-testid": "cart-title",
                      children: "Your cart",
                    }),
                    (0, St.jsx)("button", {
                      onClick: () => o("/"),
                      className:
                        "text-[#25D366] hover:text-[#1DA851] text-sm font-medium",
                      "data-testid": "add-more-button",
                      children: "Add more",
                    }),
                  ],
                }),
              }),
              (0, St.jsxs)("div", {
                className: "max-w-4xl mx-auto px-4 py-6",
                children: [
                  (0, St.jsx)("div", {
                    className: "mb-4",
                    children: (0, St.jsxs)("p", {
                      className: "text-[#8696A0] text-sm",
                      children: [a(), " item", a() > 1 ? "s" : ""],
                    }),
                  }),
                  (0, St.jsx)("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                    children: e.map((e) => {
                      var r;
                      return (0, St.jsxs)(
                        "div",
                        {
                          className:
                            "bg-[#111B21] rounded-lg border border-[#2A3942] overflow-hidden",
                          "data-testid": `cart-item-${e.product_id}`,
                          children: [
                            (0, St.jsxs)("div", {
                              className: "flex items-center gap-4 p-4",
                              children: [
                                (0, St.jsx)("img", {
                                  src: e.image,
                                  alt: e.name,
                                  className:
                                    "w-20 h-20 object-cover rounded-lg ring-1 ring-white/10",
                                }),
                                (0, St.jsxs)("div", {
                                  className: "flex-1",
                                  children: [
                                    (0, St.jsx)("h3", {
                                      className:
                                        "text-lg font-medium text-[#E9EDEF] mb-1",
                                      children: e.name,
                                    }),
                                    (0, St.jsx)("div", {
                                      className: "flex items-center gap-3",
                                      children: (0, St.jsxs)("div", {
                                        className:
                                          "flex items-center gap-2 bg-[#202C33] rounded-full px-2 py-1 border border-[#2A3942]",
                                        children: [
                                          (0, St.jsx)("button", {
                                            onClick: () => n(e.product_id),
                                            className:
                                              "p-1 hover:bg-[#2A3942] rounded-full",
                                            children: (0, St.jsx)(Na, {
                                              className:
                                                "w-4 h-4 text-[#E9EDEF]",
                                            }),
                                          }),
                                          (0, St.jsx)("span", {
                                            className:
                                              "text-[#E9EDEF] font-bold min-w-[24px] text-center",
                                            children: e.quantity,
                                          }),
                                          (0, St.jsx)("button", {
                                            onClick: () =>
                                              t({
                                                id: e.product_id,
                                                name: e.name,
                                                price: e.price,
                                                image: e.image,
                                                addons: e.addons,
                                              }),
                                            className:
                                              "p-1 hover:bg-[#2A3942] rounded-full",
                                            children: (0, St.jsx)(ka, {
                                              className:
                                                "w-4 h-4 text-[#E9EDEF]",
                                            }),
                                          }),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                                (0, St.jsxs)("div", {
                                  className: "text-right",
                                  children: [
                                    (0, St.jsxs)("p", {
                                      className:
                                        "text-lg font-bold text-[#E9EDEF]",
                                      children: [
                                        "\u20b9",
                                        (e.price * e.quantity).toFixed(2),
                                      ],
                                    }),
                                    (0, St.jsxs)("p", {
                                      className:
                                        "text-sm text-[#8696A0] line-through",
                                      children: [
                                        "\u20b9",
                                        (1.2 * e.price * e.quantity).toFixed(2),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            e.addons &&
                              e.addons.length > 0 &&
                              (0, St.jsx)("div", {
                                className: "px-4 pb-4 pt-0",
                                children: (0, St.jsx)("div", {
                                  className:
                                    "border-t border-[#2A3942] pt-3 space-y-2",
                                  children: e.addons.map((e, t) =>
                                    (0, St.jsxs)(
                                      "div",
                                      {
                                        className:
                                          "flex items-center justify-between text-sm pl-4",
                                        children: [
                                          (0, St.jsxs)("div", {
                                            className:
                                              "flex items-center gap-2",
                                            children: [
                                              (0, St.jsx)("div", {
                                                className:
                                                  "w-1.5 h-1.5 rounded-full bg-[#25D366]",
                                              }),
                                              (0, St.jsx)("span", {
                                                className: "text-[#8696A0]",
                                                children: e.name,
                                              }),
                                            ],
                                          }),
                                          (0, St.jsxs)("span", {
                                            className: "text-[#8696A0]",
                                            children: ["\u20b9", e.price],
                                          }),
                                        ],
                                      },
                                      `${e.id}-${t}`,
                                    ),
                                  ),
                                }),
                              }),
                          ],
                        },
                        `${e.product_id}-${(null === (r = e.addons) || void 0 === r ? void 0 : r.map((e) => e.id).join("-")) || "no-addons"}`,
                      );
                    }),
                  }),
                ],
              }),
              (0, St.jsx)("div", {
                className:
                  "fixed bottom-0 left-0 right-0 bg-[#202C33] border-t border-[#2A3942] z-50",
                children: (0, St.jsxs)("div", {
                  className: "max-w-4xl mx-auto p-4",
                  children: [
                    (0, St.jsxs)("div", {
                      className: "mb-3",
                      children: [
                        (0, St.jsxs)("div", {
                          className:
                            "flex justify-between items-center text-sm text-[#22C55E] mb-2",
                          children: [
                            (0, St.jsx)("span", { children: "You save" }),
                            (0, St.jsxs)("span", {
                              "data-testid": "savings-amount",
                              children: ["\u20b9", i.toFixed(2)],
                            }),
                          ],
                        }),
                        (0, St.jsxs)("div", {
                          className: "flex justify-between items-center mb-4",
                          children: [
                            (0, St.jsx)("span", {
                              className: "text-[#E9EDEF] text-lg",
                              children: "Estimated total",
                            }),
                            (0, St.jsxs)("span", {
                              className: "text-[#E9EDEF] text-2xl font-bold",
                              "data-testid": "cart-total-amount",
                              children: ["\u20b9", l.toFixed(2)],
                            }),
                          ],
                        }),
                        (0, St.jsx)("p", {
                          className: "text-xs text-[#8696A0] leading-relaxed",
                        }),
                      ],
                    }),
                    (0, St.jsx)("button", {
                      onClick: () => o("/checkout"),
                      className:
                        "w-full bg-[#25D366] hover:bg-[#1DA851] text-white font-bold rounded-full py-3 transition-all shadow-lg active:scale-95 text-lg",
                      "data-testid": "place-order-button",
                      children: "Place order",
                    }),
                  ],
                }),
              }),
            ],
          });
    },
    Pa = xa("wallet", [
      [
        "path",
        {
          d: "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",
          key: "18etb6",
        },
      ],
      [
        "path",
        { d: "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4", key: "xoc0q4" },
      ],
    ]),
    Ta = xa("credit-card", [
      [
        "rect",
        { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" },
      ],
      ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }],
    ]);
  function Oa(e) {
    var t,
      n,
      r = "";
    if ("string" == typeof e || "number" == typeof e) r += e;
    else if ("object" == typeof e)
      if (Array.isArray(e)) {
        var a = e.length;
        for (t = 0; t < a; t++)
          e[t] && (n = Oa(e[t])) && (r && (r += " "), (r += n));
      } else for (n in e) e[n] && (r && (r += " "), (r += n));
    return r;
  }
  function Fa() {
    for (var e, t, n = 0, r = "", a = arguments.length; n < a; n++)
      (e = arguments[n]) && (t = Oa(e)) && (r && (r += " "), (r += t));
    return r;
  }
  const La = function () {
      return {
        nextPart:
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : new Map(),
        validators:
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        classGroupId: arguments.length > 2 ? arguments[2] : void 0,
      };
    },
    Ma = "-",
    za = [],
    Ia = (e) => {
      const t = Ua(e),
        { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
      return {
        getClassGroupId: (e) => {
          if (e.startsWith("[") && e.endsWith("]")) return Ba(e);
          const n = e.split(Ma),
            r = "" === n[0] && n.length > 1 ? 1 : 0;
          return $a(n, r, t);
        },
        getConflictingClassGroupIds: (e, t) => {
          if (t) {
            const t = r[e],
              a = n[e];
            return t
              ? a
                ? ((e, t) => {
                    const n = new Array(e.length + t.length);
                    for (let r = 0; r < e.length; r++) n[r] = e[r];
                    for (let r = 0; r < t.length; r++) n[e.length + r] = t[r];
                    return n;
                  })(a, t)
                : t
              : a || za;
          }
          return n[e] || za;
        },
      };
    },
    $a = (e, t, n) => {
      if (0 === e.length - t) return n.classGroupId;
      const r = e[t],
        a = n.nextPart.get(r);
      if (a) {
        const n = $a(e, t + 1, a);
        if (n) return n;
      }
      const o = n.validators;
      if (null === o) return;
      const l = 0 === t ? e.join(Ma) : e.slice(t).join(Ma),
        i = o.length;
      for (let s = 0; s < i; s++) {
        const e = o[s];
        if (e.validator(l)) return e.classGroupId;
      }
    },
    Ba = (e) =>
      -1 === e.slice(1, -1).indexOf(":")
        ? void 0
        : (() => {
            const t = e.slice(1, -1),
              n = t.indexOf(":"),
              r = t.slice(0, n);
            return r ? "arbitrary.." + r : void 0;
          })(),
    Ua = (e) => {
      const { theme: t, classGroups: n } = e;
      return Wa(n, t);
    },
    Wa = (e, t) => {
      const n = La();
      for (const r in e) {
        const a = e[r];
        Ha(a, n, r, t);
      }
      return n;
    },
    Ha = (e, t, n, r) => {
      const a = e.length;
      for (let o = 0; o < a; o++) {
        const a = e[o];
        qa(a, t, n, r);
      }
    },
    qa = (e, t, n, r) => {
      "string" !== typeof e
        ? "function" !== typeof e
          ? Ya(e, t, n, r)
          : Ka(e, t, n, r)
        : Va(e, t, n);
    },
    Va = (e, t, n) => {
      ("" === e ? t : Qa(t, e)).classGroupId = n;
    },
    Ka = (e, t, n, r) => {
      Ga(e)
        ? Ha(e(r), t, n, r)
        : (null === t.validators && (t.validators = []),
          t.validators.push(
            ((e, t) => ({ classGroupId: e, validator: t }))(n, e),
          ));
    },
    Ya = (e, t, n, r) => {
      const a = Object.entries(e),
        o = a.length;
      for (let l = 0; l < o; l++) {
        const [e, o] = a[l];
        Ha(o, Qa(t, e), n, r);
      }
    },
    Qa = (e, t) => {
      let n = e;
      const r = t.split(Ma),
        a = r.length;
      for (let o = 0; o < a; o++) {
        const e = r[o];
        let t = n.nextPart.get(e);
        (t || ((t = La()), n.nextPart.set(e, t)), (n = t));
      }
      return n;
    },
    Ga = (e) => "isThemeGetter" in e && !0 === e.isThemeGetter,
    Ja = (e) => {
      if (e < 1) return { get: () => {}, set: () => {} };
      let t = 0,
        n = Object.create(null),
        r = Object.create(null);
      const a = (a, o) => {
        ((n[a] = o),
          t++,
          t > e && ((t = 0), (r = n), (n = Object.create(null))));
      };
      return {
        get(e) {
          let t = n[e];
          return void 0 !== t
            ? t
            : void 0 !== (t = r[e])
              ? (a(e, t), t)
              : void 0;
        },
        set(e, t) {
          e in n ? (n[e] = t) : a(e, t);
        },
      };
    },
    Xa = [],
    Za = (e, t, n, r, a) => ({
      modifiers: e,
      hasImportantModifier: t,
      baseClassName: n,
      maybePostfixModifierPosition: r,
      isExternal: a,
    }),
    eo = (e) => {
      const { prefix: t, experimentalParseClassName: n } = e;
      let r = (e) => {
        const t = [];
        let n,
          r = 0,
          a = 0,
          o = 0;
        const l = e.length;
        for (let u = 0; u < l; u++) {
          const l = e[u];
          if (0 === r && 0 === a) {
            if (":" === l) {
              (t.push(e.slice(o, u)), (o = u + 1));
              continue;
            }
            if ("/" === l) {
              n = u;
              continue;
            }
          }
          "[" === l
            ? r++
            : "]" === l
              ? r--
              : "(" === l
                ? a++
                : ")" === l && a--;
        }
        const i = 0 === t.length ? e : e.slice(o);
        let s = i,
          c = !1;
        i.endsWith("!")
          ? ((s = i.slice(0, -1)), (c = !0))
          : i.startsWith("!") && ((s = i.slice(1)), (c = !0));
        return Za(t, c, s, n && n > o ? n - o : void 0);
      };
      if (t) {
        const e = t + ":",
          n = r;
        r = (t) =>
          t.startsWith(e) ? n(t.slice(e.length)) : Za(Xa, !1, t, void 0, !0);
      }
      if (n) {
        const e = r;
        r = (t) => n({ className: t, parseClassName: e });
      }
      return r;
    },
    to = (e) => {
      const t = new Map();
      return (
        e.orderSensitiveModifiers.forEach((e, n) => {
          t.set(e, 1e6 + n);
        }),
        (e) => {
          const n = [];
          let r = [];
          for (let a = 0; a < e.length; a++) {
            const o = e[a],
              l = "[" === o[0],
              i = t.has(o);
            l || i
              ? (r.length > 0 && (r.sort(), n.push(...r), (r = [])), n.push(o))
              : r.push(o);
          }
          return (r.length > 0 && (r.sort(), n.push(...r)), n);
        }
      );
    },
    no = /\s+/,
    ro = (e) => {
      if ("string" === typeof e) return e;
      let t,
        n = "";
      for (let r = 0; r < e.length; r++)
        e[r] && (t = ro(e[r])) && (n && (n += " "), (n += t));
      return n;
    },
    ao = function (e) {
      for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
        r < t;
        r++
      )
        n[r - 1] = arguments[r];
      let a, o, l, i;
      const s = (e) => {
        const t = o(e);
        if (t) return t;
        const n = ((e, t) => {
          const {
              parseClassName: n,
              getClassGroupId: r,
              getConflictingClassGroupIds: a,
              sortModifiers: o,
            } = t,
            l = [],
            i = e.trim().split(no);
          let s = "";
          for (let c = i.length - 1; c >= 0; c -= 1) {
            const e = i[c],
              {
                isExternal: t,
                modifiers: u,
                hasImportantModifier: d,
                baseClassName: f,
                maybePostfixModifierPosition: p,
              } = n(e);
            if (t) {
              s = e + (s.length > 0 ? " " + s : s);
              continue;
            }
            let m = !!p,
              h = r(m ? f.substring(0, p) : f);
            if (!h) {
              if (!m) {
                s = e + (s.length > 0 ? " " + s : s);
                continue;
              }
              if (((h = r(f)), !h)) {
                s = e + (s.length > 0 ? " " + s : s);
                continue;
              }
              m = !1;
            }
            const g =
                0 === u.length ? "" : 1 === u.length ? u[0] : o(u).join(":"),
              b = d ? g + "!" : g,
              v = b + h;
            if (l.indexOf(v) > -1) continue;
            l.push(v);
            const y = a(h, m);
            for (let n = 0; n < y.length; ++n) {
              const e = y[n];
              l.push(b + e);
            }
            s = e + (s.length > 0 ? " " + s : s);
          }
          return s;
        })(e, a);
        return (l(e, n), n);
      };
      return (
        (i = (t) => {
          const r = n.reduce((e, t) => t(e), e());
          return (
            (a = ((e) => ({
              cache: Ja(e.cacheSize),
              parseClassName: eo(e),
              sortModifiers: to(e),
              ...Ia(e),
            }))(r)),
            (o = a.cache.get),
            (l = a.cache.set),
            (i = s),
            s(t)
          );
        }),
        function () {
          return i(
            (function () {
              let e,
                t,
                n = 0,
                r = "";
              for (; n < arguments.length; ) {
                var a;
                (e =
                  (a = n++) < 0 || arguments.length <= a
                    ? void 0
                    : arguments[a]) &&
                  (t = ro(e)) &&
                  (r && (r += " "), (r += t));
              }
              return r;
            })(...arguments),
          );
        }
      );
    },
    oo = [],
    lo = (e) => {
      const t = (t) => t[e] || oo;
      return ((t.isThemeGetter = !0), t);
    },
    io = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
    so = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
    co = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,
    uo = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    fo =
      /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    po = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
    mo = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    ho =
      /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
    go = (e) => co.test(e),
    bo = (e) => !!e && !Number.isNaN(Number(e)),
    vo = (e) => !!e && Number.isInteger(Number(e)),
    yo = (e) => e.endsWith("%") && bo(e.slice(0, -1)),
    xo = (e) => uo.test(e),
    wo = () => !0,
    Eo = (e) => fo.test(e) && !po.test(e),
    ko = () => !1,
    No = (e) => mo.test(e),
    So = (e) => ho.test(e),
    jo = (e) => !Ro(e) && !Lo(e),
    Co = (e) => Ho(e, Yo, ko),
    Ro = (e) => io.test(e),
    _o = (e) => Ho(e, Qo, Eo),
    Ao = (e) => Ho(e, Go, bo),
    Do = (e) => Ho(e, Xo, wo),
    Po = (e) => Ho(e, Jo, ko),
    To = (e) => Ho(e, Vo, ko),
    Oo = (e) => Ho(e, Ko, So),
    Fo = (e) => Ho(e, Zo, No),
    Lo = (e) => so.test(e),
    Mo = (e) => qo(e, Qo),
    zo = (e) => qo(e, Jo),
    Io = (e) => qo(e, Vo),
    $o = (e) => qo(e, Yo),
    Bo = (e) => qo(e, Ko),
    Uo = (e) => qo(e, Zo, !0),
    Wo = (e) => qo(e, Xo, !0),
    Ho = (e, t, n) => {
      const r = io.exec(e);
      return !!r && (r[1] ? t(r[1]) : n(r[2]));
    },
    qo = function (e, t) {
      let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const r = so.exec(e);
      return !!r && (r[1] ? t(r[1]) : n);
    },
    Vo = (e) => "position" === e || "percentage" === e,
    Ko = (e) => "image" === e || "url" === e,
    Yo = (e) => "length" === e || "size" === e || "bg-size" === e,
    Qo = (e) => "length" === e,
    Go = (e) => "number" === e,
    Jo = (e) => "family-name" === e,
    Xo = (e) => "number" === e || "weight" === e,
    Zo = (e) => "shadow" === e,
    el =
      (Symbol.toStringTag,
      () => {
        const e = lo("color"),
          t = lo("font"),
          n = lo("text"),
          r = lo("font-weight"),
          a = lo("tracking"),
          o = lo("leading"),
          l = lo("breakpoint"),
          i = lo("container"),
          s = lo("spacing"),
          c = lo("radius"),
          u = lo("shadow"),
          d = lo("inset-shadow"),
          f = lo("text-shadow"),
          p = lo("drop-shadow"),
          m = lo("blur"),
          h = lo("perspective"),
          g = lo("aspect"),
          b = lo("ease"),
          v = lo("animate"),
          y = () => [
            "center",
            "top",
            "bottom",
            "left",
            "right",
            "top-left",
            "left-top",
            "top-right",
            "right-top",
            "bottom-right",
            "right-bottom",
            "bottom-left",
            "left-bottom",
            Lo,
            Ro,
          ],
          x = () => [Lo, Ro, s],
          w = () => [go, "full", "auto", ...x()],
          E = () => [vo, "none", "subgrid", Lo, Ro],
          k = () => ["auto", { span: ["full", vo, Lo, Ro] }, vo, Lo, Ro],
          N = () => [vo, "auto", Lo, Ro],
          S = () => ["auto", "min", "max", "fr", Lo, Ro],
          j = () => ["auto", ...x()],
          C = () => [
            go,
            "auto",
            "full",
            "dvw",
            "dvh",
            "lvw",
            "lvh",
            "svw",
            "svh",
            "min",
            "max",
            "fit",
            ...x(),
          ],
          R = () => [
            go,
            "screen",
            "full",
            "dvw",
            "lvw",
            "svw",
            "min",
            "max",
            "fit",
            ...x(),
          ],
          _ = () => [
            go,
            "screen",
            "full",
            "lh",
            "dvh",
            "lvh",
            "svh",
            "min",
            "max",
            "fit",
            ...x(),
          ],
          A = () => [e, Lo, Ro],
          D = () => [
            "center",
            "top",
            "bottom",
            "left",
            "right",
            "top-left",
            "left-top",
            "top-right",
            "right-top",
            "bottom-right",
            "right-bottom",
            "bottom-left",
            "left-bottom",
            Io,
            To,
            { position: [Lo, Ro] },
          ],
          P = () => ["auto", "cover", "contain", $o, Co, { size: [Lo, Ro] }],
          T = () => [yo, Mo, _o],
          O = () => ["", "none", "full", c, Lo, Ro],
          F = () => ["", bo, Mo, _o],
          L = () => [bo, yo, Io, To],
          M = () => ["", "none", m, Lo, Ro],
          z = () => ["none", bo, Lo, Ro],
          I = () => ["none", bo, Lo, Ro],
          $ = () => [bo, Lo, Ro],
          B = () => [go, "full", ...x()];
        return {
          cacheSize: 500,
          theme: {
            animate: ["spin", "ping", "pulse", "bounce"],
            aspect: ["video"],
            blur: [xo],
            breakpoint: [xo],
            color: [wo],
            container: [xo],
            "drop-shadow": [xo],
            ease: ["in", "out", "in-out"],
            font: [jo],
            "font-weight": [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
            ],
            "inset-shadow": [xo],
            leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
            perspective: [
              "dramatic",
              "near",
              "normal",
              "midrange",
              "distant",
              "none",
            ],
            radius: [xo],
            shadow: [xo],
            spacing: ["px", bo],
            text: [xo],
            "text-shadow": [xo],
            tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
          },
          classGroups: {
            aspect: [{ aspect: ["auto", "square", go, Ro, Lo, g] }],
            container: ["container"],
            columns: [{ columns: [bo, Ro, Lo, i] }],
            "break-after": [
              {
                "break-after": [
                  "auto",
                  "avoid",
                  "all",
                  "avoid-page",
                  "page",
                  "left",
                  "right",
                  "column",
                ],
              },
            ],
            "break-before": [
              {
                "break-before": [
                  "auto",
                  "avoid",
                  "all",
                  "avoid-page",
                  "page",
                  "left",
                  "right",
                  "column",
                ],
              },
            ],
            "break-inside": [
              {
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"],
              },
            ],
            "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
            box: [{ box: ["border", "content"] }],
            display: [
              "block",
              "inline-block",
              "inline",
              "flex",
              "inline-flex",
              "table",
              "inline-table",
              "table-caption",
              "table-cell",
              "table-column",
              "table-column-group",
              "table-footer-group",
              "table-header-group",
              "table-row-group",
              "table-row",
              "flow-root",
              "grid",
              "inline-grid",
              "contents",
              "list-item",
              "hidden",
            ],
            sr: ["sr-only", "not-sr-only"],
            float: [{ float: ["right", "left", "none", "start", "end"] }],
            clear: [
              { clear: ["left", "right", "both", "none", "start", "end"] },
            ],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [
              { object: ["contain", "cover", "fill", "none", "scale-down"] },
            ],
            "object-position": [{ object: y() }],
            overflow: [
              { overflow: ["auto", "hidden", "clip", "visible", "scroll"] },
            ],
            "overflow-x": [
              { "overflow-x": ["auto", "hidden", "clip", "visible", "scroll"] },
            ],
            "overflow-y": [
              { "overflow-y": ["auto", "hidden", "clip", "visible", "scroll"] },
            ],
            overscroll: [{ overscroll: ["auto", "contain", "none"] }],
            "overscroll-x": [{ "overscroll-x": ["auto", "contain", "none"] }],
            "overscroll-y": [{ "overscroll-y": ["auto", "contain", "none"] }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{ inset: w() }],
            "inset-x": [{ "inset-x": w() }],
            "inset-y": [{ "inset-y": w() }],
            start: [{ "inset-s": w(), start: w() }],
            end: [{ "inset-e": w(), end: w() }],
            "inset-bs": [{ "inset-bs": w() }],
            "inset-be": [{ "inset-be": w() }],
            top: [{ top: w() }],
            right: [{ right: w() }],
            bottom: [{ bottom: w() }],
            left: [{ left: w() }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{ z: [vo, "auto", Lo, Ro] }],
            basis: [{ basis: [go, "full", "auto", i, ...x()] }],
            "flex-direction": [
              { flex: ["row", "row-reverse", "col", "col-reverse"] },
            ],
            "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
            flex: [{ flex: [bo, go, "auto", "initial", "none", Ro] }],
            grow: [{ grow: ["", bo, Lo, Ro] }],
            shrink: [{ shrink: ["", bo, Lo, Ro] }],
            order: [{ order: [vo, "first", "last", "none", Lo, Ro] }],
            "grid-cols": [{ "grid-cols": E() }],
            "col-start-end": [{ col: k() }],
            "col-start": [{ "col-start": N() }],
            "col-end": [{ "col-end": N() }],
            "grid-rows": [{ "grid-rows": E() }],
            "row-start-end": [{ row: k() }],
            "row-start": [{ "row-start": N() }],
            "row-end": [{ "row-end": N() }],
            "grid-flow": [
              {
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"],
              },
            ],
            "auto-cols": [{ "auto-cols": S() }],
            "auto-rows": [{ "auto-rows": S() }],
            gap: [{ gap: x() }],
            "gap-x": [{ "gap-x": x() }],
            "gap-y": [{ "gap-y": x() }],
            "justify-content": [
              {
                justify: [
                  "start",
                  "end",
                  "center",
                  "between",
                  "around",
                  "evenly",
                  "stretch",
                  "baseline",
                  "center-safe",
                  "end-safe",
                  "normal",
                ],
              },
            ],
            "justify-items": [
              {
                "justify-items": [
                  "start",
                  "end",
                  "center",
                  "stretch",
                  "center-safe",
                  "end-safe",
                  "normal",
                ],
              },
            ],
            "justify-self": [
              {
                "justify-self": [
                  "auto",
                  "start",
                  "end",
                  "center",
                  "stretch",
                  "center-safe",
                  "end-safe",
                ],
              },
            ],
            "align-content": [
              {
                content: [
                  "normal",
                  "start",
                  "end",
                  "center",
                  "between",
                  "around",
                  "evenly",
                  "stretch",
                  "baseline",
                  "center-safe",
                  "end-safe",
                ],
              },
            ],
            "align-items": [
              {
                items: [
                  "start",
                  "end",
                  "center",
                  "stretch",
                  "center-safe",
                  "end-safe",
                  { baseline: ["", "last"] },
                ],
              },
            ],
            "align-self": [
              {
                self: [
                  "auto",
                  "start",
                  "end",
                  "center",
                  "stretch",
                  "center-safe",
                  "end-safe",
                  { baseline: ["", "last"] },
                ],
              },
            ],
            "place-content": [
              {
                "place-content": [
                  "start",
                  "end",
                  "center",
                  "between",
                  "around",
                  "evenly",
                  "stretch",
                  "baseline",
                  "center-safe",
                  "end-safe",
                ],
              },
            ],
            "place-items": [
              {
                "place-items": [
                  "start",
                  "end",
                  "center",
                  "stretch",
                  "center-safe",
                  "end-safe",
                  "baseline",
                ],
              },
            ],
            "place-self": [
              {
                "place-self": [
                  "auto",
                  "start",
                  "end",
                  "center",
                  "stretch",
                  "center-safe",
                  "end-safe",
                ],
              },
            ],
            p: [{ p: x() }],
            px: [{ px: x() }],
            py: [{ py: x() }],
            ps: [{ ps: x() }],
            pe: [{ pe: x() }],
            pbs: [{ pbs: x() }],
            pbe: [{ pbe: x() }],
            pt: [{ pt: x() }],
            pr: [{ pr: x() }],
            pb: [{ pb: x() }],
            pl: [{ pl: x() }],
            m: [{ m: j() }],
            mx: [{ mx: j() }],
            my: [{ my: j() }],
            ms: [{ ms: j() }],
            me: [{ me: j() }],
            mbs: [{ mbs: j() }],
            mbe: [{ mbe: j() }],
            mt: [{ mt: j() }],
            mr: [{ mr: j() }],
            mb: [{ mb: j() }],
            ml: [{ ml: j() }],
            "space-x": [{ "space-x": x() }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{ "space-y": x() }],
            "space-y-reverse": ["space-y-reverse"],
            size: [{ size: C() }],
            "inline-size": [{ inline: ["auto", ...R()] }],
            "min-inline-size": [{ "min-inline": ["auto", ...R()] }],
            "max-inline-size": [{ "max-inline": ["none", ...R()] }],
            "block-size": [{ block: ["auto", ..._()] }],
            "min-block-size": [{ "min-block": ["auto", ..._()] }],
            "max-block-size": [{ "max-block": ["none", ..._()] }],
            w: [{ w: [i, "screen", ...C()] }],
            "min-w": [{ "min-w": [i, "screen", "none", ...C()] }],
            "max-w": [
              {
                "max-w": [
                  i,
                  "screen",
                  "none",
                  "prose",
                  { screen: [l] },
                  ...C(),
                ],
              },
            ],
            h: [{ h: ["screen", "lh", ...C()] }],
            "min-h": [{ "min-h": ["screen", "lh", "none", ...C()] }],
            "max-h": [{ "max-h": ["screen", "lh", ...C()] }],
            "font-size": [{ text: ["base", n, Mo, _o] }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{ font: [r, Wo, Do] }],
            "font-stretch": [
              {
                "font-stretch": [
                  "ultra-condensed",
                  "extra-condensed",
                  "condensed",
                  "semi-condensed",
                  "normal",
                  "semi-expanded",
                  "expanded",
                  "extra-expanded",
                  "ultra-expanded",
                  yo,
                  Ro,
                ],
              },
            ],
            "font-family": [{ font: [zo, Po, t] }],
            "font-features": [{ "font-features": [Ro] }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [{ tracking: [a, Lo, Ro] }],
            "line-clamp": [{ "line-clamp": [bo, "none", Lo, Ao] }],
            leading: [{ leading: [o, ...x()] }],
            "list-image": [{ "list-image": ["none", Lo, Ro] }],
            "list-style-position": [{ list: ["inside", "outside"] }],
            "list-style-type": [{ list: ["disc", "decimal", "none", Lo, Ro] }],
            "text-alignment": [
              { text: ["left", "center", "right", "justify", "start", "end"] },
            ],
            "placeholder-color": [{ placeholder: A() }],
            "text-color": [{ text: A() }],
            "text-decoration": [
              "underline",
              "overline",
              "line-through",
              "no-underline",
            ],
            "text-decoration-style": [
              { decoration: ["solid", "dashed", "dotted", "double", "wavy"] },
            ],
            "text-decoration-thickness": [
              { decoration: [bo, "from-font", "auto", Lo, _o] },
            ],
            "text-decoration-color": [{ decoration: A() }],
            "underline-offset": [{ "underline-offset": [bo, "auto", Lo, Ro] }],
            "text-transform": [
              "uppercase",
              "lowercase",
              "capitalize",
              "normal-case",
            ],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
            indent: [{ indent: x() }],
            "vertical-align": [
              {
                align: [
                  "baseline",
                  "top",
                  "middle",
                  "bottom",
                  "text-top",
                  "text-bottom",
                  "sub",
                  "super",
                  Lo,
                  Ro,
                ],
              },
            ],
            whitespace: [
              {
                whitespace: [
                  "normal",
                  "nowrap",
                  "pre",
                  "pre-line",
                  "pre-wrap",
                  "break-spaces",
                ],
              },
            ],
            break: [{ break: ["normal", "words", "all", "keep"] }],
            wrap: [{ wrap: ["break-word", "anywhere", "normal"] }],
            hyphens: [{ hyphens: ["none", "manual", "auto"] }],
            content: [{ content: ["none", Lo, Ro] }],
            "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
            "bg-clip": [
              { "bg-clip": ["border", "padding", "content", "text"] },
            ],
            "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
            "bg-position": [{ bg: D() }],
            "bg-repeat": [
              {
                bg: ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }],
              },
            ],
            "bg-size": [{ bg: P() }],
            "bg-image": [
              {
                bg: [
                  "none",
                  {
                    linear: [
                      { to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                      vo,
                      Lo,
                      Ro,
                    ],
                    radial: ["", Lo, Ro],
                    conic: [vo, Lo, Ro],
                  },
                  Bo,
                  Oo,
                ],
              },
            ],
            "bg-color": [{ bg: A() }],
            "gradient-from-pos": [{ from: T() }],
            "gradient-via-pos": [{ via: T() }],
            "gradient-to-pos": [{ to: T() }],
            "gradient-from": [{ from: A() }],
            "gradient-via": [{ via: A() }],
            "gradient-to": [{ to: A() }],
            rounded: [{ rounded: O() }],
            "rounded-s": [{ "rounded-s": O() }],
            "rounded-e": [{ "rounded-e": O() }],
            "rounded-t": [{ "rounded-t": O() }],
            "rounded-r": [{ "rounded-r": O() }],
            "rounded-b": [{ "rounded-b": O() }],
            "rounded-l": [{ "rounded-l": O() }],
            "rounded-ss": [{ "rounded-ss": O() }],
            "rounded-se": [{ "rounded-se": O() }],
            "rounded-ee": [{ "rounded-ee": O() }],
            "rounded-es": [{ "rounded-es": O() }],
            "rounded-tl": [{ "rounded-tl": O() }],
            "rounded-tr": [{ "rounded-tr": O() }],
            "rounded-br": [{ "rounded-br": O() }],
            "rounded-bl": [{ "rounded-bl": O() }],
            "border-w": [{ border: F() }],
            "border-w-x": [{ "border-x": F() }],
            "border-w-y": [{ "border-y": F() }],
            "border-w-s": [{ "border-s": F() }],
            "border-w-e": [{ "border-e": F() }],
            "border-w-bs": [{ "border-bs": F() }],
            "border-w-be": [{ "border-be": F() }],
            "border-w-t": [{ "border-t": F() }],
            "border-w-r": [{ "border-r": F() }],
            "border-w-b": [{ "border-b": F() }],
            "border-w-l": [{ "border-l": F() }],
            "divide-x": [{ "divide-x": F() }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{ "divide-y": F() }],
            "divide-y-reverse": ["divide-y-reverse"],
            "border-style": [
              {
                border: [
                  "solid",
                  "dashed",
                  "dotted",
                  "double",
                  "hidden",
                  "none",
                ],
              },
            ],
            "divide-style": [
              {
                divide: [
                  "solid",
                  "dashed",
                  "dotted",
                  "double",
                  "hidden",
                  "none",
                ],
              },
            ],
            "border-color": [{ border: A() }],
            "border-color-x": [{ "border-x": A() }],
            "border-color-y": [{ "border-y": A() }],
            "border-color-s": [{ "border-s": A() }],
            "border-color-e": [{ "border-e": A() }],
            "border-color-bs": [{ "border-bs": A() }],
            "border-color-be": [{ "border-be": A() }],
            "border-color-t": [{ "border-t": A() }],
            "border-color-r": [{ "border-r": A() }],
            "border-color-b": [{ "border-b": A() }],
            "border-color-l": [{ "border-l": A() }],
            "divide-color": [{ divide: A() }],
            "outline-style": [
              {
                outline: [
                  "solid",
                  "dashed",
                  "dotted",
                  "double",
                  "none",
                  "hidden",
                ],
              },
            ],
            "outline-offset": [{ "outline-offset": [bo, Lo, Ro] }],
            "outline-w": [{ outline: ["", bo, Mo, _o] }],
            "outline-color": [{ outline: A() }],
            shadow: [{ shadow: ["", "none", u, Uo, Fo] }],
            "shadow-color": [{ shadow: A() }],
            "inset-shadow": [{ "inset-shadow": ["none", d, Uo, Fo] }],
            "inset-shadow-color": [{ "inset-shadow": A() }],
            "ring-w": [{ ring: F() }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{ ring: A() }],
            "ring-offset-w": [{ "ring-offset": [bo, _o] }],
            "ring-offset-color": [{ "ring-offset": A() }],
            "inset-ring-w": [{ "inset-ring": F() }],
            "inset-ring-color": [{ "inset-ring": A() }],
            "text-shadow": [{ "text-shadow": ["none", f, Uo, Fo] }],
            "text-shadow-color": [{ "text-shadow": A() }],
            opacity: [{ opacity: [bo, Lo, Ro] }],
            "mix-blend": [
              {
                "mix-blend": [
                  "normal",
                  "multiply",
                  "screen",
                  "overlay",
                  "darken",
                  "lighten",
                  "color-dodge",
                  "color-burn",
                  "hard-light",
                  "soft-light",
                  "difference",
                  "exclusion",
                  "hue",
                  "saturation",
                  "color",
                  "luminosity",
                  "plus-darker",
                  "plus-lighter",
                ],
              },
            ],
            "bg-blend": [
              {
                "bg-blend": [
                  "normal",
                  "multiply",
                  "screen",
                  "overlay",
                  "darken",
                  "lighten",
                  "color-dodge",
                  "color-burn",
                  "hard-light",
                  "soft-light",
                  "difference",
                  "exclusion",
                  "hue",
                  "saturation",
                  "color",
                  "luminosity",
                ],
              },
            ],
            "mask-clip": [
              {
                "mask-clip": [
                  "border",
                  "padding",
                  "content",
                  "fill",
                  "stroke",
                  "view",
                ],
              },
              "mask-no-clip",
            ],
            "mask-composite": [
              { mask: ["add", "subtract", "intersect", "exclude"] },
            ],
            "mask-image-linear-pos": [{ "mask-linear": [bo] }],
            "mask-image-linear-from-pos": [{ "mask-linear-from": L() }],
            "mask-image-linear-to-pos": [{ "mask-linear-to": L() }],
            "mask-image-linear-from-color": [{ "mask-linear-from": A() }],
            "mask-image-linear-to-color": [{ "mask-linear-to": A() }],
            "mask-image-t-from-pos": [{ "mask-t-from": L() }],
            "mask-image-t-to-pos": [{ "mask-t-to": L() }],
            "mask-image-t-from-color": [{ "mask-t-from": A() }],
            "mask-image-t-to-color": [{ "mask-t-to": A() }],
            "mask-image-r-from-pos": [{ "mask-r-from": L() }],
            "mask-image-r-to-pos": [{ "mask-r-to": L() }],
            "mask-image-r-from-color": [{ "mask-r-from": A() }],
            "mask-image-r-to-color": [{ "mask-r-to": A() }],
            "mask-image-b-from-pos": [{ "mask-b-from": L() }],
            "mask-image-b-to-pos": [{ "mask-b-to": L() }],
            "mask-image-b-from-color": [{ "mask-b-from": A() }],
            "mask-image-b-to-color": [{ "mask-b-to": A() }],
            "mask-image-l-from-pos": [{ "mask-l-from": L() }],
            "mask-image-l-to-pos": [{ "mask-l-to": L() }],
            "mask-image-l-from-color": [{ "mask-l-from": A() }],
            "mask-image-l-to-color": [{ "mask-l-to": A() }],
            "mask-image-x-from-pos": [{ "mask-x-from": L() }],
            "mask-image-x-to-pos": [{ "mask-x-to": L() }],
            "mask-image-x-from-color": [{ "mask-x-from": A() }],
            "mask-image-x-to-color": [{ "mask-x-to": A() }],
            "mask-image-y-from-pos": [{ "mask-y-from": L() }],
            "mask-image-y-to-pos": [{ "mask-y-to": L() }],
            "mask-image-y-from-color": [{ "mask-y-from": A() }],
            "mask-image-y-to-color": [{ "mask-y-to": A() }],
            "mask-image-radial": [{ "mask-radial": [Lo, Ro] }],
            "mask-image-radial-from-pos": [{ "mask-radial-from": L() }],
            "mask-image-radial-to-pos": [{ "mask-radial-to": L() }],
            "mask-image-radial-from-color": [{ "mask-radial-from": A() }],
            "mask-image-radial-to-color": [{ "mask-radial-to": A() }],
            "mask-image-radial-shape": [
              { "mask-radial": ["circle", "ellipse"] },
            ],
            "mask-image-radial-size": [
              {
                "mask-radial": [
                  { closest: ["side", "corner"], farthest: ["side", "corner"] },
                ],
              },
            ],
            "mask-image-radial-pos": [
              {
                "mask-radial-at": [
                  "center",
                  "top",
                  "bottom",
                  "left",
                  "right",
                  "top-left",
                  "left-top",
                  "top-right",
                  "right-top",
                  "bottom-right",
                  "right-bottom",
                  "bottom-left",
                  "left-bottom",
                ],
              },
            ],
            "mask-image-conic-pos": [{ "mask-conic": [bo] }],
            "mask-image-conic-from-pos": [{ "mask-conic-from": L() }],
            "mask-image-conic-to-pos": [{ "mask-conic-to": L() }],
            "mask-image-conic-from-color": [{ "mask-conic-from": A() }],
            "mask-image-conic-to-color": [{ "mask-conic-to": A() }],
            "mask-mode": [{ mask: ["alpha", "luminance", "match"] }],
            "mask-origin": [
              {
                "mask-origin": [
                  "border",
                  "padding",
                  "content",
                  "fill",
                  "stroke",
                  "view",
                ],
              },
            ],
            "mask-position": [{ mask: D() }],
            "mask-repeat": [
              {
                mask: [
                  "no-repeat",
                  { repeat: ["", "x", "y", "space", "round"] },
                ],
              },
            ],
            "mask-size": [{ mask: P() }],
            "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
            "mask-image": [{ mask: ["none", Lo, Ro] }],
            filter: [{ filter: ["", "none", Lo, Ro] }],
            blur: [{ blur: M() }],
            brightness: [{ brightness: [bo, Lo, Ro] }],
            contrast: [{ contrast: [bo, Lo, Ro] }],
            "drop-shadow": [{ "drop-shadow": ["", "none", p, Uo, Fo] }],
            "drop-shadow-color": [{ "drop-shadow": A() }],
            grayscale: [{ grayscale: ["", bo, Lo, Ro] }],
            "hue-rotate": [{ "hue-rotate": [bo, Lo, Ro] }],
            invert: [{ invert: ["", bo, Lo, Ro] }],
            saturate: [{ saturate: [bo, Lo, Ro] }],
            sepia: [{ sepia: ["", bo, Lo, Ro] }],
            "backdrop-filter": [{ "backdrop-filter": ["", "none", Lo, Ro] }],
            "backdrop-blur": [{ "backdrop-blur": M() }],
            "backdrop-brightness": [{ "backdrop-brightness": [bo, Lo, Ro] }],
            "backdrop-contrast": [{ "backdrop-contrast": [bo, Lo, Ro] }],
            "backdrop-grayscale": [{ "backdrop-grayscale": ["", bo, Lo, Ro] }],
            "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [bo, Lo, Ro] }],
            "backdrop-invert": [{ "backdrop-invert": ["", bo, Lo, Ro] }],
            "backdrop-opacity": [{ "backdrop-opacity": [bo, Lo, Ro] }],
            "backdrop-saturate": [{ "backdrop-saturate": [bo, Lo, Ro] }],
            "backdrop-sepia": [{ "backdrop-sepia": ["", bo, Lo, Ro] }],
            "border-collapse": [{ border: ["collapse", "separate"] }],
            "border-spacing": [{ "border-spacing": x() }],
            "border-spacing-x": [{ "border-spacing-x": x() }],
            "border-spacing-y": [{ "border-spacing-y": x() }],
            "table-layout": [{ table: ["auto", "fixed"] }],
            caption: [{ caption: ["top", "bottom"] }],
            transition: [
              {
                transition: [
                  "",
                  "all",
                  "colors",
                  "opacity",
                  "shadow",
                  "transform",
                  "none",
                  Lo,
                  Ro,
                ],
              },
            ],
            "transition-behavior": [{ transition: ["normal", "discrete"] }],
            duration: [{ duration: [bo, "initial", Lo, Ro] }],
            ease: [{ ease: ["linear", "initial", b, Lo, Ro] }],
            delay: [{ delay: [bo, Lo, Ro] }],
            animate: [{ animate: ["none", v, Lo, Ro] }],
            backface: [{ backface: ["hidden", "visible"] }],
            perspective: [{ perspective: [h, Lo, Ro] }],
            "perspective-origin": [{ "perspective-origin": y() }],
            rotate: [{ rotate: z() }],
            "rotate-x": [{ "rotate-x": z() }],
            "rotate-y": [{ "rotate-y": z() }],
            "rotate-z": [{ "rotate-z": z() }],
            scale: [{ scale: I() }],
            "scale-x": [{ "scale-x": I() }],
            "scale-y": [{ "scale-y": I() }],
            "scale-z": [{ "scale-z": I() }],
            "scale-3d": ["scale-3d"],
            skew: [{ skew: $() }],
            "skew-x": [{ "skew-x": $() }],
            "skew-y": [{ "skew-y": $() }],
            transform: [{ transform: [Lo, Ro, "", "none", "gpu", "cpu"] }],
            "transform-origin": [{ origin: y() }],
            "transform-style": [{ transform: ["3d", "flat"] }],
            translate: [{ translate: B() }],
            "translate-x": [{ "translate-x": B() }],
            "translate-y": [{ "translate-y": B() }],
            "translate-z": [{ "translate-z": B() }],
            "translate-none": ["translate-none"],
            accent: [{ accent: A() }],
            appearance: [{ appearance: ["none", "auto"] }],
            "caret-color": [{ caret: A() }],
            "color-scheme": [
              {
                scheme: [
                  "normal",
                  "dark",
                  "light",
                  "light-dark",
                  "only-dark",
                  "only-light",
                ],
              },
            ],
            cursor: [
              {
                cursor: [
                  "auto",
                  "default",
                  "pointer",
                  "wait",
                  "text",
                  "move",
                  "help",
                  "not-allowed",
                  "none",
                  "context-menu",
                  "progress",
                  "cell",
                  "crosshair",
                  "vertical-text",
                  "alias",
                  "copy",
                  "no-drop",
                  "grab",
                  "grabbing",
                  "all-scroll",
                  "col-resize",
                  "row-resize",
                  "n-resize",
                  "e-resize",
                  "s-resize",
                  "w-resize",
                  "ne-resize",
                  "nw-resize",
                  "se-resize",
                  "sw-resize",
                  "ew-resize",
                  "ns-resize",
                  "nesw-resize",
                  "nwse-resize",
                  "zoom-in",
                  "zoom-out",
                  Lo,
                  Ro,
                ],
              },
            ],
            "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
            "pointer-events": [{ "pointer-events": ["auto", "none"] }],
            resize: [{ resize: ["none", "", "y", "x"] }],
            "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
            "scroll-m": [{ "scroll-m": x() }],
            "scroll-mx": [{ "scroll-mx": x() }],
            "scroll-my": [{ "scroll-my": x() }],
            "scroll-ms": [{ "scroll-ms": x() }],
            "scroll-me": [{ "scroll-me": x() }],
            "scroll-mbs": [{ "scroll-mbs": x() }],
            "scroll-mbe": [{ "scroll-mbe": x() }],
            "scroll-mt": [{ "scroll-mt": x() }],
            "scroll-mr": [{ "scroll-mr": x() }],
            "scroll-mb": [{ "scroll-mb": x() }],
            "scroll-ml": [{ "scroll-ml": x() }],
            "scroll-p": [{ "scroll-p": x() }],
            "scroll-px": [{ "scroll-px": x() }],
            "scroll-py": [{ "scroll-py": x() }],
            "scroll-ps": [{ "scroll-ps": x() }],
            "scroll-pe": [{ "scroll-pe": x() }],
            "scroll-pbs": [{ "scroll-pbs": x() }],
            "scroll-pbe": [{ "scroll-pbe": x() }],
            "scroll-pt": [{ "scroll-pt": x() }],
            "scroll-pr": [{ "scroll-pr": x() }],
            "scroll-pb": [{ "scroll-pb": x() }],
            "scroll-pl": [{ "scroll-pl": x() }],
            "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
            "snap-stop": [{ snap: ["normal", "always"] }],
            "snap-type": [{ snap: ["none", "x", "y", "both"] }],
            "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
            touch: [{ touch: ["auto", "none", "manipulation"] }],
            "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
            "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{ select: ["none", "text", "all", "auto"] }],
            "will-change": [
              {
                "will-change": [
                  "auto",
                  "scroll",
                  "contents",
                  "transform",
                  Lo,
                  Ro,
                ],
              },
            ],
            fill: [{ fill: ["none", ...A()] }],
            "stroke-w": [{ stroke: [bo, Mo, _o, Ao] }],
            stroke: [{ stroke: ["none", ...A()] }],
            "forced-color-adjust": [
              { "forced-color-adjust": ["auto", "none"] },
            ],
          },
          conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: [
              "inset-x",
              "inset-y",
              "inset-bs",
              "inset-be",
              "start",
              "end",
              "top",
              "right",
              "bottom",
              "left",
            ],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": [
              "fvn-ordinal",
              "fvn-slashed-zero",
              "fvn-figure",
              "fvn-spacing",
              "fvn-fraction",
            ],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: [
              "rounded-s",
              "rounded-e",
              "rounded-t",
              "rounded-r",
              "rounded-b",
              "rounded-l",
              "rounded-ss",
              "rounded-se",
              "rounded-ee",
              "rounded-es",
              "rounded-tl",
              "rounded-tr",
              "rounded-br",
              "rounded-bl",
            ],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": [
              "border-w-x",
              "border-w-y",
              "border-w-s",
              "border-w-e",
              "border-w-bs",
              "border-w-be",
              "border-w-t",
              "border-w-r",
              "border-w-b",
              "border-w-l",
            ],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": [
              "border-color-x",
              "border-color-y",
              "border-color-s",
              "border-color-e",
              "border-color-bs",
              "border-color-be",
              "border-color-t",
              "border-color-r",
              "border-color-b",
              "border-color-l",
            ],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            translate: ["translate-x", "translate-y", "translate-none"],
            "translate-none": [
              "translate",
              "translate-x",
              "translate-y",
              "translate-z",
            ],
            "scroll-m": [
              "scroll-mx",
              "scroll-my",
              "scroll-ms",
              "scroll-me",
              "scroll-mbs",
              "scroll-mbe",
              "scroll-mt",
              "scroll-mr",
              "scroll-mb",
              "scroll-ml",
            ],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": [
              "scroll-px",
              "scroll-py",
              "scroll-ps",
              "scroll-pe",
              "scroll-pbs",
              "scroll-pbe",
              "scroll-pt",
              "scroll-pr",
              "scroll-pb",
              "scroll-pl",
            ],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"],
          },
          conflictingClassGroupModifiers: { "font-size": ["leading"] },
          orderSensitiveModifiers: [
            "*",
            "**",
            "after",
            "backdrop",
            "before",
            "details-content",
            "file",
            "first-letter",
            "first-line",
            "marker",
            "placeholder",
            "selection",
          ],
        };
      }),
    tl = ao(el);
  function nl() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return tl(Fa(t));
  }
  const rl = a.forwardRef((e, t) => {
    let { className: n, type: r, ...a } = e;
    return (0, St.jsx)("input", {
      type: r,
      className: nl(
        "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        n,
      ),
      ref: t,
      ...a,
    });
  });
  function al(e, t) {
    if ("function" === typeof e) return e(t);
    null !== e && void 0 !== e && (e.current = t);
  }
  function ol() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return (e) => {
      let n = !1;
      const r = t.map((t) => {
        const r = al(t, e);
        return (n || "function" != typeof r || (n = !0), r);
      });
      if (n)
        return () => {
          for (let e = 0; e < r.length; e++) {
            const n = r[e];
            "function" == typeof n ? n() : al(t[e], null);
          }
        };
    };
  }
  function ll() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return a.useCallback(ol(...t), t);
  }
  rl.displayName = "Input";
  var il = Symbol.for("react.lazy"),
    sl = o[" use ".trim().toString()];
  function cl(e) {
    return (
      null != e &&
      "object" === typeof e &&
      "$$typeof" in e &&
      e.$$typeof === il &&
      "_payload" in e &&
      "object" === typeof (t = e._payload) &&
      null !== t &&
      "then" in t
    );
    var t;
  }
  function ul(e) {
    const t = dl(e),
      n = a.forwardRef((e, n) => {
        let { children: r, ...o } = e;
        cl(r) && "function" === typeof sl && (r = sl(r._payload));
        const l = a.Children.toArray(r),
          i = l.find(pl);
        if (i) {
          const e = i.props.children,
            r = l.map((t) =>
              t === i
                ? a.Children.count(e) > 1
                  ? a.Children.only(null)
                  : a.isValidElement(e)
                    ? e.props.children
                    : null
                : t,
            );
          return (0, St.jsx)(t, {
            ...o,
            ref: n,
            children: a.isValidElement(e) ? a.cloneElement(e, void 0, r) : null,
          });
        }
        return (0, St.jsx)(t, { ...o, ref: n, children: r });
      });
    return ((n.displayName = `${e}.Slot`), n);
  }
  function dl(e) {
    const t = a.forwardRef((e, t) => {
      let { children: n, ...r } = e;
      if (
        (cl(n) && "function" === typeof sl && (n = sl(n._payload)),
        a.isValidElement(n))
      ) {
        const e = (function (e) {
            let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
              n = t && "isReactWarning" in t && t.isReactWarning;
            if (n) return e.ref;
            if (
              ((t = Object.getOwnPropertyDescriptor(e, "ref")?.get),
              (n = t && "isReactWarning" in t && t.isReactWarning),
              n)
            )
              return e.props.ref;
            return e.props.ref || e.ref;
          })(n),
          o = (function (e, t) {
            const n = { ...t };
            for (const r in t) {
              const a = e[r],
                o = t[r];
              /^on[A-Z]/.test(r)
                ? a && o
                  ? (n[r] = function () {
                      const e = o(...arguments);
                      return (a(...arguments), e);
                    })
                  : a && (n[r] = a)
                : "style" === r
                  ? (n[r] = { ...a, ...o })
                  : "className" === r &&
                    (n[r] = [a, o].filter(Boolean).join(" "));
            }
            return { ...e, ...n };
          })(r, n.props);
        return (
          n.type !== a.Fragment && (o.ref = t ? ol(t, e) : e),
          a.cloneElement(n, o)
        );
      }
      return a.Children.count(n) > 1 ? a.Children.only(null) : null;
    });
    return ((t.displayName = `${e}.SlotClone`), t);
  }
  var fl = Symbol("radix.slottable");
  function pl(e) {
    return (
      a.isValidElement(e) &&
      "function" === typeof e.type &&
      "__radixId" in e.type &&
      e.type.__radixId === fl
    );
  }
  var ml = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ].reduce((e, t) => {
    const n = ul(`Primitive.${t}`),
      r = a.forwardRef((e, r) => {
        const { asChild: a, ...o } = e,
          l = a ? n : t;
        return (
          "undefined" !== typeof window &&
            (window[Symbol.for("radix-ui")] = !0),
          (0, St.jsx)(l, { ...o, ref: r })
        );
      });
    return ((r.displayName = `Primitive.${t}`), { ...e, [t]: r });
  }, {});
  var hl = a.forwardRef((e, t) =>
    (0, St.jsx)(ml.label, {
      ...e,
      ref: t,
      onMouseDown: (t) => {
        t.target.closest("button, input, select, textarea") ||
          (e.onMouseDown?.(t),
          !t.defaultPrevented && t.detail > 1 && t.preventDefault());
      },
    }),
  );
  hl.displayName = "Label";
  var gl = hl;
  const bl = (e) => ("boolean" === typeof e ? `${e}` : 0 === e ? "0" : e),
    vl = Fa,
    yl =
      ((xl =
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),
      (e) => {
        var t;
        if (null == (null === wl || void 0 === wl ? void 0 : wl.variants))
          return vl(
            xl,
            null === e || void 0 === e ? void 0 : e.class,
            null === e || void 0 === e ? void 0 : e.className,
          );
        const { variants: n, defaultVariants: r } = wl,
          a = Object.keys(n).map((t) => {
            const a = null === e || void 0 === e ? void 0 : e[t],
              o = null === r || void 0 === r ? void 0 : r[t];
            if (null === a) return null;
            const l = bl(a) || bl(o);
            return n[t][l];
          }),
          o =
            e &&
            Object.entries(e).reduce((e, t) => {
              let [n, r] = t;
              return (void 0 === r || (e[n] = r), e);
            }, {}),
          l =
            null === wl ||
            void 0 === wl ||
            null === (t = wl.compoundVariants) ||
            void 0 === t
              ? void 0
              : t.reduce((e, t) => {
                  let { class: n, className: a, ...l } = t;
                  return Object.entries(l).every((e) => {
                    let [t, n] = e;
                    return Array.isArray(n)
                      ? n.includes({ ...r, ...o }[t])
                      : { ...r, ...o }[t] === n;
                  })
                    ? [...e, n, a]
                    : e;
                }, []);
        return vl(
          xl,
          a,
          l,
          null === e || void 0 === e ? void 0 : e.class,
          null === e || void 0 === e ? void 0 : e.className,
        );
      });
  var xl, wl;
  const El = a.forwardRef((e, t) => {
    let { className: n, ...r } = e;
    return (0, St.jsx)(gl, { ref: t, className: nl(yl(), n), ...r });
  });
  El.displayName = gl.displayName;
  "undefined" === typeof window ||
    !window.document ||
    window.document.createElement;
  function kl(e, t) {
    let { checkForDefaultPrevented: n = !0 } =
      arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    return function (r) {
      if ((e?.(r), !1 === n || !r.defaultPrevented)) return t?.(r);
    };
  }
  function Nl(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
      n = [];
    const r = () => {
      const t = n.map((e) => a.createContext(e));
      return function (n) {
        const r = n?.[e] || t;
        return a.useMemo(() => ({ [`__scope${e}`]: { ...n, [e]: r } }), [n, r]);
      };
    };
    return (
      (r.scopeName = e),
      [
        function (t, r) {
          const o = a.createContext(r),
            l = n.length;
          n = [...n, r];
          const i = (t) => {
            const { scope: n, children: r, ...i } = t,
              s = n?.[e]?.[l] || o,
              c = a.useMemo(() => i, Object.values(i));
            return (0, St.jsx)(s.Provider, { value: c, children: r });
          };
          return (
            (i.displayName = t + "Provider"),
            [
              i,
              function (n, i) {
                const s = i?.[e]?.[l] || o,
                  c = a.useContext(s);
                if (c) return c;
                if (void 0 !== r) return r;
                throw new Error(`\`${n}\` must be used within \`${t}\``);
              },
            ]
          );
        },
        Sl(r, ...t),
      ]
    );
  }
  function Sl() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    const r = t[0];
    if (1 === t.length) return r;
    const o = () => {
      const e = t.map((e) => ({ useScope: e(), scopeName: e.scopeName }));
      return function (t) {
        const n = e.reduce((e, n) => {
          let { useScope: r, scopeName: a } = n;
          return { ...e, ...r(t)[`__scope${a}`] };
        }, {});
        return a.useMemo(() => ({ [`__scope${r.scopeName}`]: n }), [n]);
      };
    };
    return ((o.scopeName = r.scopeName), o);
  }
  function jl(e) {
    const t = Cl(e),
      n = a.forwardRef((e, n) => {
        const { children: r, ...o } = e,
          l = a.Children.toArray(r),
          i = l.find(_l);
        if (i) {
          const e = i.props.children,
            r = l.map((t) =>
              t === i
                ? a.Children.count(e) > 1
                  ? a.Children.only(null)
                  : a.isValidElement(e)
                    ? e.props.children
                    : null
                : t,
            );
          return (0, St.jsx)(t, {
            ...o,
            ref: n,
            children: a.isValidElement(e) ? a.cloneElement(e, void 0, r) : null,
          });
        }
        return (0, St.jsx)(t, { ...o, ref: n, children: r });
      });
    return ((n.displayName = `${e}.Slot`), n);
  }
  function Cl(e) {
    const t = a.forwardRef((e, t) => {
      const { children: n, ...r } = e;
      if (a.isValidElement(n)) {
        const e = (function (e) {
            let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
              n = t && "isReactWarning" in t && t.isReactWarning;
            if (n) return e.ref;
            if (
              ((t = Object.getOwnPropertyDescriptor(e, "ref")?.get),
              (n = t && "isReactWarning" in t && t.isReactWarning),
              n)
            )
              return e.props.ref;
            return e.props.ref || e.ref;
          })(n),
          o = (function (e, t) {
            const n = { ...t };
            for (const r in t) {
              const a = e[r],
                o = t[r];
              /^on[A-Z]/.test(r)
                ? a && o
                  ? (n[r] = function () {
                      const e = o(...arguments);
                      return (a(...arguments), e);
                    })
                  : a && (n[r] = a)
                : "style" === r
                  ? (n[r] = { ...a, ...o })
                  : "className" === r &&
                    (n[r] = [a, o].filter(Boolean).join(" "));
            }
            return { ...e, ...n };
          })(r, n.props);
        return (
          n.type !== a.Fragment && (o.ref = t ? ol(t, e) : e),
          a.cloneElement(n, o)
        );
      }
      return a.Children.count(n) > 1 ? a.Children.only(null) : null;
    });
    return ((t.displayName = `${e}.SlotClone`), t);
  }
  var Rl = Symbol("radix.slottable");
  function _l(e) {
    return (
      a.isValidElement(e) &&
      "function" === typeof e.type &&
      "__radixId" in e.type &&
      e.type.__radixId === Rl
    );
  }
  var Al = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ].reduce((e, t) => {
    const n = jl(`Primitive.${t}`),
      r = a.forwardRef((e, r) => {
        const { asChild: a, ...o } = e,
          l = a ? n : t;
        return (
          "undefined" !== typeof window &&
            (window[Symbol.for("radix-ui")] = !0),
          (0, St.jsx)(l, { ...o, ref: r })
        );
      });
    return ((r.displayName = `Primitive.${t}`), { ...e, [t]: r });
  }, {});
  function Dl(e) {
    const t = Pl(e),
      n = a.forwardRef((e, n) => {
        const { children: r, ...o } = e,
          l = a.Children.toArray(r),
          i = l.find(Ol);
        if (i) {
          const e = i.props.children,
            r = l.map((t) =>
              t === i
                ? a.Children.count(e) > 1
                  ? a.Children.only(null)
                  : a.isValidElement(e)
                    ? e.props.children
                    : null
                : t,
            );
          return (0, St.jsx)(t, {
            ...o,
            ref: n,
            children: a.isValidElement(e) ? a.cloneElement(e, void 0, r) : null,
          });
        }
        return (0, St.jsx)(t, { ...o, ref: n, children: r });
      });
    return ((n.displayName = `${e}.Slot`), n);
  }
  function Pl(e) {
    const t = a.forwardRef((e, t) => {
      const { children: n, ...r } = e;
      if (a.isValidElement(n)) {
        const e = (function (e) {
            let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
              n = t && "isReactWarning" in t && t.isReactWarning;
            if (n) return e.ref;
            if (
              ((t = Object.getOwnPropertyDescriptor(e, "ref")?.get),
              (n = t && "isReactWarning" in t && t.isReactWarning),
              n)
            )
              return e.props.ref;
            return e.props.ref || e.ref;
          })(n),
          o = (function (e, t) {
            const n = { ...t };
            for (const r in t) {
              const a = e[r],
                o = t[r];
              /^on[A-Z]/.test(r)
                ? a && o
                  ? (n[r] = function () {
                      const e = o(...arguments);
                      return (a(...arguments), e);
                    })
                  : a && (n[r] = a)
                : "style" === r
                  ? (n[r] = { ...a, ...o })
                  : "className" === r &&
                    (n[r] = [a, o].filter(Boolean).join(" "));
            }
            return { ...e, ...n };
          })(r, n.props);
        return (
          n.type !== a.Fragment && (o.ref = t ? ol(t, e) : e),
          a.cloneElement(n, o)
        );
      }
      return a.Children.count(n) > 1 ? a.Children.only(null) : null;
    });
    return ((t.displayName = `${e}.SlotClone`), t);
  }
  var Tl = Symbol("radix.slottable");
  function Ol(e) {
    return (
      a.isValidElement(e) &&
      "function" === typeof e.type &&
      "__radixId" in e.type &&
      e.type.__radixId === Tl
    );
  }
  var Fl = new WeakMap();
  Map;
  function Ll(e, t) {
    if ("at" in Array.prototype) return Array.prototype.at.call(e, t);
    const n = (function (e, t) {
      const n = e.length,
        r = Ml(t),
        a = r >= 0 ? r : n + r;
      return a < 0 || a >= n ? -1 : a;
    })(e, t);
    return -1 === n ? void 0 : e[n];
  }
  function Ml(e) {
    return e !== e || 0 === e ? 0 : Math.trunc(e);
  }
  var zl = globalThis?.document ? a.useLayoutEffect : () => {},
    Il = o[" useId ".trim().toString()] || (() => {}),
    $l = 0;
  function Bl(e) {
    const [t, n] = a.useState(Il());
    return (
      zl(() => {
        e || n((e) => e ?? String($l++));
      }, [e]),
      e || (t ? `radix-${t}` : "")
    );
  }
  function Ul(e) {
    const t = a.useRef(e);
    return (
      a.useEffect(() => {
        t.current = e;
      }),
      a.useMemo(
        () =>
          function () {
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
              n[r] = arguments[r];
            return t.current?.(...n);
          },
        [],
      )
    );
  }
  var Wl = o[" useInsertionEffect ".trim().toString()] || zl;
  function Hl(e) {
    let { prop: t, defaultProp: n, onChange: r = () => {}, caller: o } = e;
    const [l, i, s] = (function (e) {
        let { defaultProp: t, onChange: n } = e;
        const [r, o] = a.useState(t),
          l = a.useRef(r),
          i = a.useRef(n);
        return (
          Wl(() => {
            i.current = n;
          }, [n]),
          a.useEffect(() => {
            l.current !== r && (i.current?.(r), (l.current = r));
          }, [r, l]),
          [r, o, i]
        );
      })({ defaultProp: n, onChange: r }),
      c = void 0 !== t,
      u = c ? t : l;
    {
      const e = a.useRef(void 0 !== t);
      a.useEffect(() => {
        const t = e.current;
        if (t !== c) {
          const e = t ? "controlled" : "uncontrolled",
            n = c ? "controlled" : "uncontrolled";
          console.warn(
            `${o} is changing from ${e} to ${n}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`,
          );
        }
        e.current = c;
      }, [c, o]);
    }
    const d = a.useCallback(
      (e) => {
        if (c) {
          const n = (function (e) {
            return "function" === typeof e;
          })(e)
            ? e(t)
            : e;
          n !== t && s.current?.(n);
        } else i(e);
      },
      [c, t, i, s],
    );
    return [u, d];
  }
  Symbol("RADIX:SYNC_STATE");
  var ql = a.createContext(void 0);
  function Vl(e) {
    const t = a.useContext(ql);
    return e || t || "ltr";
  }
  var Kl = "rovingFocusGroup.onEntryFocus",
    Yl = { bubbles: !1, cancelable: !0 },
    Ql = "RovingFocusGroup",
    [Gl, Jl, Xl] = (function (e) {
      const t = e + "CollectionProvider",
        [n, r] = Nl(t),
        [o, l] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
        i = (e) => {
          const { scope: t, children: n } = e,
            r = a.useRef(null),
            l = a.useRef(new Map()).current;
          return (0, St.jsx)(o, {
            scope: t,
            itemMap: l,
            collectionRef: r,
            children: n,
          });
        };
      i.displayName = t;
      const s = e + "CollectionSlot",
        c = Dl(s),
        u = a.forwardRef((e, t) => {
          const { scope: n, children: r } = e,
            a = ll(t, l(s, n).collectionRef);
          return (0, St.jsx)(c, { ref: a, children: r });
        });
      u.displayName = s;
      const d = e + "CollectionItemSlot",
        f = "data-radix-collection-item",
        p = Dl(d),
        m = a.forwardRef((e, t) => {
          const { scope: n, children: r, ...o } = e,
            i = a.useRef(null),
            s = ll(t, i),
            c = l(d, n);
          return (
            a.useEffect(
              () => (
                c.itemMap.set(i, { ref: i, ...o }),
                () => {
                  c.itemMap.delete(i);
                }
              ),
            ),
            (0, St.jsx)(p, { [f]: "", ref: s, children: r })
          );
        });
      return (
        (m.displayName = d),
        [
          { Provider: i, Slot: u, ItemSlot: m },
          function (t) {
            const n = l(e + "CollectionConsumer", t),
              r = a.useCallback(() => {
                const e = n.collectionRef.current;
                if (!e) return [];
                const t = Array.from(e.querySelectorAll(`[${f}]`)),
                  r = Array.from(n.itemMap.values()).sort(
                    (e, n) =>
                      t.indexOf(e.ref.current) - t.indexOf(n.ref.current),
                  );
                return r;
              }, [n.collectionRef, n.itemMap]);
            return r;
          },
          r,
        ]
      );
    })(Ql),
    [Zl, ei] = Nl(Ql, [Xl]),
    [ti, ni] = Zl(Ql),
    ri = a.forwardRef((e, t) =>
      (0, St.jsx)(Gl.Provider, {
        scope: e.__scopeRovingFocusGroup,
        children: (0, St.jsx)(Gl.Slot, {
          scope: e.__scopeRovingFocusGroup,
          children: (0, St.jsx)(ai, { ...e, ref: t }),
        }),
      }),
    );
  ri.displayName = Ql;
  var ai = a.forwardRef((e, t) => {
      const {
          __scopeRovingFocusGroup: n,
          orientation: r,
          loop: o = !1,
          dir: l,
          currentTabStopId: i,
          defaultCurrentTabStopId: s,
          onCurrentTabStopIdChange: c,
          onEntryFocus: u,
          preventScrollOnEntryFocus: d = !1,
          ...f
        } = e,
        p = a.useRef(null),
        m = ll(t, p),
        h = Vl(l),
        [g, b] = Hl({
          prop: i,
          defaultProp: s ?? null,
          onChange: c,
          caller: Ql,
        }),
        [v, y] = a.useState(!1),
        x = Ul(u),
        w = Jl(n),
        E = a.useRef(!1),
        [k, N] = a.useState(0);
      return (
        a.useEffect(() => {
          const e = p.current;
          if (e)
            return (
              e.addEventListener(Kl, x),
              () => e.removeEventListener(Kl, x)
            );
        }, [x]),
        (0, St.jsx)(ti, {
          scope: n,
          orientation: r,
          dir: h,
          loop: o,
          currentTabStopId: g,
          onItemFocus: a.useCallback((e) => b(e), [b]),
          onItemShiftTab: a.useCallback(() => y(!0), []),
          onFocusableItemAdd: a.useCallback(() => N((e) => e + 1), []),
          onFocusableItemRemove: a.useCallback(() => N((e) => e - 1), []),
          children: (0, St.jsx)(Al.div, {
            tabIndex: v || 0 === k ? -1 : 0,
            "data-orientation": r,
            ...f,
            ref: m,
            style: { outline: "none", ...e.style },
            onMouseDown: kl(e.onMouseDown, () => {
              E.current = !0;
            }),
            onFocus: kl(e.onFocus, (e) => {
              const t = !E.current;
              if (e.target === e.currentTarget && t && !v) {
                const t = new CustomEvent(Kl, Yl);
                if ((e.currentTarget.dispatchEvent(t), !t.defaultPrevented)) {
                  const e = w().filter((e) => e.focusable);
                  si(
                    [e.find((e) => e.active), e.find((e) => e.id === g), ...e]
                      .filter(Boolean)
                      .map((e) => e.ref.current),
                    d,
                  );
                }
              }
              E.current = !1;
            }),
            onBlur: kl(e.onBlur, () => y(!1)),
          }),
        })
      );
    }),
    oi = "RovingFocusGroupItem",
    li = a.forwardRef((e, t) => {
      const {
          __scopeRovingFocusGroup: n,
          focusable: r = !0,
          active: o = !1,
          tabStopId: l,
          children: i,
          ...s
        } = e,
        c = Bl(),
        u = l || c,
        d = ni(oi, n),
        f = d.currentTabStopId === u,
        p = Jl(n),
        {
          onFocusableItemAdd: m,
          onFocusableItemRemove: h,
          currentTabStopId: g,
        } = d;
      return (
        a.useEffect(() => {
          if (r) return (m(), () => h());
        }, [r, m, h]),
        (0, St.jsx)(Gl.ItemSlot, {
          scope: n,
          id: u,
          focusable: r,
          active: o,
          children: (0, St.jsx)(Al.span, {
            tabIndex: f ? 0 : -1,
            "data-orientation": d.orientation,
            ...s,
            ref: t,
            onMouseDown: kl(e.onMouseDown, (e) => {
              r ? d.onItemFocus(u) : e.preventDefault();
            }),
            onFocus: kl(e.onFocus, () => d.onItemFocus(u)),
            onKeyDown: kl(e.onKeyDown, (e) => {
              if ("Tab" === e.key && e.shiftKey) return void d.onItemShiftTab();
              if (e.target !== e.currentTarget) return;
              const t = (function (e, t, n) {
                const r = (function (e, t) {
                  return "rtl" !== t
                    ? e
                    : "ArrowLeft" === e
                      ? "ArrowRight"
                      : "ArrowRight" === e
                        ? "ArrowLeft"
                        : e;
                })(e.key, n);
                return ("vertical" === t &&
                  ["ArrowLeft", "ArrowRight"].includes(r)) ||
                  ("horizontal" === t && ["ArrowUp", "ArrowDown"].includes(r))
                  ? void 0
                  : ii[r];
              })(e, d.orientation, d.dir);
              if (void 0 !== t) {
                if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
                e.preventDefault();
                let a = p()
                  .filter((e) => e.focusable)
                  .map((e) => e.ref.current);
                if ("last" === t) a.reverse();
                else if ("prev" === t || "next" === t) {
                  "prev" === t && a.reverse();
                  const o = a.indexOf(e.currentTarget);
                  a = d.loop
                    ? ((r = o + 1),
                      (n = a).map((e, t) => n[(r + t) % n.length]))
                    : a.slice(o + 1);
                }
                setTimeout(() => si(a));
              }
              var n, r;
            }),
            children:
              "function" === typeof i
                ? i({ isCurrentTabStop: f, hasTabStop: null != g })
                : i,
          }),
        })
      );
    });
  li.displayName = oi;
  var ii = {
    ArrowLeft: "prev",
    ArrowUp: "prev",
    ArrowRight: "next",
    ArrowDown: "next",
    PageUp: "first",
    Home: "first",
    PageDown: "last",
    End: "last",
  };
  function si(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    const n = document.activeElement;
    for (const r of e) {
      if (r === n) return;
      if ((r.focus({ preventScroll: t }), document.activeElement !== n)) return;
    }
  }
  var ci = ri,
    ui = li;
  var di = (e) => {
    const { present: t, children: n } = e,
      r = (function (e) {
        const [t, n] = a.useState(),
          r = a.useRef(null),
          o = a.useRef(e),
          l = a.useRef("none"),
          i = e ? "mounted" : "unmounted",
          [s, c] = (function (e, t) {
            return a.useReducer((e, n) => t[e][n] ?? e, e);
          })(i, {
            mounted: {
              UNMOUNT: "unmounted",
              ANIMATION_OUT: "unmountSuspended",
            },
            unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
            unmounted: { MOUNT: "mounted" },
          });
        return (
          a.useEffect(() => {
            const e = fi(r.current);
            l.current = "mounted" === s ? e : "none";
          }, [s]),
          zl(() => {
            const t = r.current,
              n = o.current;
            if (n !== e) {
              const r = l.current,
                a = fi(t);
              if (e) c("MOUNT");
              else if ("none" === a || "none" === t?.display) c("UNMOUNT");
              else {
                c(n && r !== a ? "ANIMATION_OUT" : "UNMOUNT");
              }
              o.current = e;
            }
          }, [e, c]),
          zl(() => {
            if (t) {
              let e;
              const n = t.ownerDocument.defaultView ?? window,
                a = (a) => {
                  const l = fi(r.current).includes(CSS.escape(a.animationName));
                  if (a.target === t && l && (c("ANIMATION_END"), !o.current)) {
                    const r = t.style.animationFillMode;
                    ((t.style.animationFillMode = "forwards"),
                      (e = n.setTimeout(() => {
                        "forwards" === t.style.animationFillMode &&
                          (t.style.animationFillMode = r);
                      })));
                  }
                },
                i = (e) => {
                  e.target === t && (l.current = fi(r.current));
                };
              return (
                t.addEventListener("animationstart", i),
                t.addEventListener("animationcancel", a),
                t.addEventListener("animationend", a),
                () => {
                  (n.clearTimeout(e),
                    t.removeEventListener("animationstart", i),
                    t.removeEventListener("animationcancel", a),
                    t.removeEventListener("animationend", a));
                }
              );
            }
            c("ANIMATION_END");
          }, [t, c]),
          {
            isPresent: ["mounted", "unmountSuspended"].includes(s),
            ref: a.useCallback((e) => {
              ((r.current = e ? getComputedStyle(e) : null), n(e));
            }, []),
          }
        );
      })(t),
      o =
        "function" === typeof n
          ? n({ present: r.isPresent })
          : a.Children.only(n),
      l = ll(
        r.ref,
        (function (e) {
          let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
            n = t && "isReactWarning" in t && t.isReactWarning;
          if (n) return e.ref;
          if (
            ((t = Object.getOwnPropertyDescriptor(e, "ref")?.get),
            (n = t && "isReactWarning" in t && t.isReactWarning),
            n)
          )
            return e.props.ref;
          return e.props.ref || e.ref;
        })(o),
      );
    return "function" === typeof n || r.isPresent
      ? a.cloneElement(o, { ref: l })
      : null;
  };
  function fi(e) {
    return e?.animationName || "none";
  }
  di.displayName = "Presence";
  var pi = "Radio",
    [mi, hi] = Nl(pi),
    [gi, bi] = mi(pi),
    vi = a.forwardRef((e, t) => {
      const {
          __scopeRadio: n,
          name: r,
          checked: o = !1,
          required: l,
          disabled: i,
          value: s = "on",
          onCheck: c,
          form: u,
          ...d
        } = e,
        [f, p] = a.useState(null),
        m = ll(t, (e) => p(e)),
        h = a.useRef(!1),
        g = !f || u || !!f.closest("form");
      return (0, St.jsxs)(gi, {
        scope: n,
        checked: o,
        disabled: i,
        children: [
          (0, St.jsx)(Al.button, {
            type: "button",
            role: "radio",
            "aria-checked": o,
            "data-state": Ei(o),
            "data-disabled": i ? "" : void 0,
            disabled: i,
            value: s,
            ...d,
            ref: m,
            onClick: kl(e.onClick, (e) => {
              (o || c?.(),
                g &&
                  ((h.current = e.isPropagationStopped()),
                  h.current || e.stopPropagation()));
            }),
          }),
          g &&
            (0, St.jsx)(wi, {
              control: f,
              bubbles: !h.current,
              name: r,
              value: s,
              checked: o,
              required: l,
              disabled: i,
              form: u,
              style: { transform: "translateX(-100%)" },
            }),
        ],
      });
    });
  vi.displayName = pi;
  var yi = "RadioIndicator",
    xi = a.forwardRef((e, t) => {
      const { __scopeRadio: n, forceMount: r, ...a } = e,
        o = bi(yi, n);
      return (0, St.jsx)(di, {
        present: r || o.checked,
        children: (0, St.jsx)(Al.span, {
          "data-state": Ei(o.checked),
          "data-disabled": o.disabled ? "" : void 0,
          ...a,
          ref: t,
        }),
      });
    });
  xi.displayName = yi;
  var wi = a.forwardRef((e, t) => {
    let { __scopeRadio: n, control: r, checked: o, bubbles: l = !0, ...i } = e;
    const s = a.useRef(null),
      c = ll(s, t),
      u = (function (e) {
        const t = a.useRef({ value: e, previous: e });
        return a.useMemo(
          () => (
            t.current.value !== e &&
              ((t.current.previous = t.current.value), (t.current.value = e)),
            t.current.previous
          ),
          [e],
        );
      })(o),
      d = (function (e) {
        const [t, n] = a.useState(void 0);
        return (
          zl(() => {
            if (e) {
              n({ width: e.offsetWidth, height: e.offsetHeight });
              const t = new ResizeObserver((t) => {
                if (!Array.isArray(t)) return;
                if (!t.length) return;
                const r = t[0];
                let a, o;
                if ("borderBoxSize" in r) {
                  const e = r.borderBoxSize,
                    t = Array.isArray(e) ? e[0] : e;
                  ((a = t.inlineSize), (o = t.blockSize));
                } else ((a = e.offsetWidth), (o = e.offsetHeight));
                n({ width: a, height: o });
              });
              return (
                t.observe(e, { box: "border-box" }),
                () => t.unobserve(e)
              );
            }
            n(void 0);
          }, [e]),
          t
        );
      })(r);
    return (
      a.useEffect(() => {
        const e = s.current;
        if (!e) return;
        const t = window.HTMLInputElement.prototype,
          n = Object.getOwnPropertyDescriptor(t, "checked").set;
        if (u !== o && n) {
          const t = new Event("click", { bubbles: l });
          (n.call(e, o), e.dispatchEvent(t));
        }
      }, [u, o, l]),
      (0, St.jsx)(Al.input, {
        type: "radio",
        "aria-hidden": !0,
        defaultChecked: o,
        ...i,
        tabIndex: -1,
        ref: c,
        style: {
          ...i.style,
          ...d,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0,
        },
      })
    );
  });
  function Ei(e) {
    return e ? "checked" : "unchecked";
  }
  wi.displayName = "RadioBubbleInput";
  var ki = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
    Ni = "RadioGroup",
    [Si, ji] = Nl(Ni, [ei, hi]),
    Ci = ei(),
    Ri = hi(),
    [_i, Ai] = Si(Ni),
    Di = a.forwardRef((e, t) => {
      const {
          __scopeRadioGroup: n,
          name: r,
          defaultValue: a,
          value: o,
          required: l = !1,
          disabled: i = !1,
          orientation: s,
          dir: c,
          loop: u = !0,
          onValueChange: d,
          ...f
        } = e,
        p = Ci(n),
        m = Vl(c),
        [h, g] = Hl({
          prop: o,
          defaultProp: a ?? null,
          onChange: d,
          caller: Ni,
        });
      return (0, St.jsx)(_i, {
        scope: n,
        name: r,
        required: l,
        disabled: i,
        value: h,
        onValueChange: g,
        children: (0, St.jsx)(ci, {
          asChild: !0,
          ...p,
          orientation: s,
          dir: m,
          loop: u,
          children: (0, St.jsx)(Al.div, {
            role: "radiogroup",
            "aria-required": l,
            "aria-orientation": s,
            "data-disabled": i ? "" : void 0,
            dir: m,
            ...f,
            ref: t,
          }),
        }),
      });
    });
  Di.displayName = Ni;
  var Pi = "RadioGroupItem",
    Ti = a.forwardRef((e, t) => {
      const { __scopeRadioGroup: n, disabled: r, ...o } = e,
        l = Ai(Pi, n),
        i = l.disabled || r,
        s = Ci(n),
        c = Ri(n),
        u = a.useRef(null),
        d = ll(t, u),
        f = l.value === o.value,
        p = a.useRef(!1);
      return (
        a.useEffect(() => {
          const e = (e) => {
              ki.includes(e.key) && (p.current = !0);
            },
            t = () => (p.current = !1);
          return (
            document.addEventListener("keydown", e),
            document.addEventListener("keyup", t),
            () => {
              (document.removeEventListener("keydown", e),
                document.removeEventListener("keyup", t));
            }
          );
        }, []),
        (0, St.jsx)(ui, {
          asChild: !0,
          ...s,
          focusable: !i,
          active: f,
          children: (0, St.jsx)(vi, {
            disabled: i,
            required: l.required,
            checked: f,
            ...c,
            ...o,
            name: l.name,
            ref: d,
            onCheck: () => l.onValueChange(o.value),
            onKeyDown: kl((e) => {
              "Enter" === e.key && e.preventDefault();
            }),
            onFocus: kl(o.onFocus, () => {
              p.current && u.current?.click();
            }),
          }),
        })
      );
    });
  Ti.displayName = Pi;
  var Oi = a.forwardRef((e, t) => {
    const { __scopeRadioGroup: n, ...r } = e,
      a = Ri(n);
    return (0, St.jsx)(xi, { ...a, ...r, ref: t });
  });
  Oi.displayName = "RadioGroupIndicator";
  var Fi = Di,
    Li = Ti,
    Mi = Oi;
  const zi = xa("circle", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ]),
    Ii = a.forwardRef((e, t) => {
      let { className: n, ...r } = e;
      return (0, St.jsx)(Fi, { className: nl("grid gap-2", n), ...r, ref: t });
    });
  Ii.displayName = Fi.displayName;
  const $i = a.forwardRef((e, t) => {
    let { className: n, ...r } = e;
    return (0, St.jsx)(Li, {
      ref: t,
      className: nl(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        n,
      ),
      ...r,
      children: (0, St.jsx)(Mi, {
        className: "flex items-center justify-center",
        children: (0, St.jsx)(zi, { className: "h-3.5 w-3.5 fill-primary" }),
      }),
    });
  });
  $i.displayName = Li.displayName;
  var Bi,
    Ui = "dismissableLayer.update",
    Wi = "dismissableLayer.pointerDownOutside",
    Hi = "dismissableLayer.focusOutside",
    qi = a.createContext({
      layers: new Set(),
      layersWithOutsidePointerEventsDisabled: new Set(),
      branches: new Set(),
    }),
    Vi = a.forwardRef((e, t) => {
      const {
          disableOutsidePointerEvents: n = !1,
          onEscapeKeyDown: r,
          onPointerDownOutside: o,
          onFocusOutside: l,
          onInteractOutside: i,
          onDismiss: s,
          ...c
        } = e,
        u = a.useContext(qi),
        [d, f] = a.useState(null),
        p = d?.ownerDocument ?? globalThis?.document,
        [, m] = a.useState({}),
        h = ll(t, (e) => f(e)),
        g = Array.from(u.layers),
        [b] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
        v = g.indexOf(b),
        y = d ? g.indexOf(d) : -1,
        x = u.layersWithOutsidePointerEventsDisabled.size > 0,
        w = y >= v,
        E = (function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : globalThis?.document;
          const n = Ul(e),
            r = a.useRef(!1),
            o = a.useRef(() => {});
          return (
            a.useEffect(() => {
              const e = (e) => {
                  if (e.target && !r.current) {
                    let r = function () {
                      Qi(Wi, n, a, { discrete: !0 });
                    };
                    const a = { originalEvent: e };
                    "touch" === e.pointerType
                      ? (t.removeEventListener("click", o.current),
                        (o.current = r),
                        t.addEventListener("click", o.current, { once: !0 }))
                      : r();
                  } else t.removeEventListener("click", o.current);
                  r.current = !1;
                },
                a = window.setTimeout(() => {
                  t.addEventListener("pointerdown", e);
                }, 0);
              return () => {
                (window.clearTimeout(a),
                  t.removeEventListener("pointerdown", e),
                  t.removeEventListener("click", o.current));
              };
            }, [t, n]),
            { onPointerDownCapture: () => (r.current = !0) }
          );
        })((e) => {
          const t = e.target,
            n = [...u.branches].some((e) => e.contains(t));
          w && !n && (o?.(e), i?.(e), e.defaultPrevented || s?.());
        }, p),
        k = (function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : globalThis?.document;
          const n = Ul(e),
            r = a.useRef(!1);
          return (
            a.useEffect(() => {
              const e = (e) => {
                if (e.target && !r.current) {
                  Qi(Hi, n, { originalEvent: e }, { discrete: !1 });
                }
              };
              return (
                t.addEventListener("focusin", e),
                () => t.removeEventListener("focusin", e)
              );
            }, [t, n]),
            {
              onFocusCapture: () => (r.current = !0),
              onBlurCapture: () => (r.current = !1),
            }
          );
        })((e) => {
          const t = e.target;
          [...u.branches].some((e) => e.contains(t)) ||
            (l?.(e), i?.(e), e.defaultPrevented || s?.());
        }, p);
      return (
        (function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : globalThis?.document;
          const n = Ul(e);
          a.useEffect(() => {
            const e = (e) => {
              "Escape" === e.key && n(e);
            };
            return (
              t.addEventListener("keydown", e, { capture: !0 }),
              () => t.removeEventListener("keydown", e, { capture: !0 })
            );
          }, [n, t]);
        })((e) => {
          y === u.layers.size - 1 &&
            (r?.(e), !e.defaultPrevented && s && (e.preventDefault(), s()));
        }, p),
        a.useEffect(() => {
          if (d)
            return (
              n &&
                (0 === u.layersWithOutsidePointerEventsDisabled.size &&
                  ((Bi = p.body.style.pointerEvents),
                  (p.body.style.pointerEvents = "none")),
                u.layersWithOutsidePointerEventsDisabled.add(d)),
              u.layers.add(d),
              Yi(),
              () => {
                n &&
                  1 === u.layersWithOutsidePointerEventsDisabled.size &&
                  (p.body.style.pointerEvents = Bi);
              }
            );
        }, [d, p, n, u]),
        a.useEffect(
          () => () => {
            d &&
              (u.layers.delete(d),
              u.layersWithOutsidePointerEventsDisabled.delete(d),
              Yi());
          },
          [d, u],
        ),
        a.useEffect(() => {
          const e = () => m({});
          return (
            document.addEventListener(Ui, e),
            () => document.removeEventListener(Ui, e)
          );
        }, []),
        (0, St.jsx)(Al.div, {
          ...c,
          ref: h,
          style: {
            pointerEvents: x ? (w ? "auto" : "none") : void 0,
            ...e.style,
          },
          onFocusCapture: kl(e.onFocusCapture, k.onFocusCapture),
          onBlurCapture: kl(e.onBlurCapture, k.onBlurCapture),
          onPointerDownCapture: kl(
            e.onPointerDownCapture,
            E.onPointerDownCapture,
          ),
        })
      );
    });
  Vi.displayName = "DismissableLayer";
  var Ki = a.forwardRef((e, t) => {
    const n = a.useContext(qi),
      r = a.useRef(null),
      o = ll(t, r);
    return (
      a.useEffect(() => {
        const e = r.current;
        if (e)
          return (
            n.branches.add(e),
            () => {
              n.branches.delete(e);
            }
          );
      }, [n.branches]),
      (0, St.jsx)(Al.div, { ...e, ref: o })
    );
  });
  function Yi() {
    const e = new CustomEvent(Ui);
    document.dispatchEvent(e);
  }
  function Qi(e, t, n, r) {
    let { discrete: a } = r;
    const o = n.originalEvent.target,
      l = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
    (t && o.addEventListener(e, t, { once: !0 }),
      a
        ? (function (e, t) {
            e && Pt.flushSync(() => e.dispatchEvent(t));
          })(o, l)
        : o.dispatchEvent(l));
  }
  Ki.displayName = "DismissableLayerBranch";
  var Gi = "focusScope.autoFocusOnMount",
    Ji = "focusScope.autoFocusOnUnmount",
    Xi = { bubbles: !1, cancelable: !0 },
    Zi = a.forwardRef((e, t) => {
      const {
          loop: n = !1,
          trapped: r = !1,
          onMountAutoFocus: o,
          onUnmountAutoFocus: l,
          ...i
        } = e,
        [s, c] = a.useState(null),
        u = Ul(o),
        d = Ul(l),
        f = a.useRef(null),
        p = ll(t, (e) => c(e)),
        m = a.useRef({
          paused: !1,
          pause() {
            this.paused = !0;
          },
          resume() {
            this.paused = !1;
          },
        }).current;
      (a.useEffect(() => {
        if (r) {
          let e = function (e) {
              if (m.paused || !s) return;
              const t = e.target;
              s.contains(t) ? (f.current = t) : rs(f.current, { select: !0 });
            },
            t = function (e) {
              if (m.paused || !s) return;
              const t = e.relatedTarget;
              null !== t && (s.contains(t) || rs(f.current, { select: !0 }));
            },
            n = function (e) {
              if (document.activeElement === document.body)
                for (const t of e) t.removedNodes.length > 0 && rs(s);
            };
          (document.addEventListener("focusin", e),
            document.addEventListener("focusout", t));
          const r = new MutationObserver(n);
          return (
            s && r.observe(s, { childList: !0, subtree: !0 }),
            () => {
              (document.removeEventListener("focusin", e),
                document.removeEventListener("focusout", t),
                r.disconnect());
            }
          );
        }
      }, [r, s, m.paused]),
        a.useEffect(() => {
          if (s) {
            as.add(m);
            const t = document.activeElement;
            if (!s.contains(t)) {
              const n = new CustomEvent(Gi, Xi);
              (s.addEventListener(Gi, u),
                s.dispatchEvent(n),
                n.defaultPrevented ||
                  (!(function (e) {
                    let { select: t = !1 } =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                    const n = document.activeElement;
                    for (const r of e)
                      if ((rs(r, { select: t }), document.activeElement !== n))
                        return;
                  })(((e = es(s)), e.filter((e) => "A" !== e.tagName)), {
                    select: !0,
                  }),
                  document.activeElement === t && rs(s)));
            }
            return () => {
              (s.removeEventListener(Gi, u),
                setTimeout(() => {
                  const e = new CustomEvent(Ji, Xi);
                  (s.addEventListener(Ji, d),
                    s.dispatchEvent(e),
                    e.defaultPrevented ||
                      rs(t ?? document.body, { select: !0 }),
                    s.removeEventListener(Ji, d),
                    as.remove(m));
                }, 0));
            };
          }
          var e;
        }, [s, u, d, m]));
      const h = a.useCallback(
        (e) => {
          if (!n && !r) return;
          if (m.paused) return;
          const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
            a = document.activeElement;
          if (t && a) {
            const t = e.currentTarget,
              [r, o] = (function (e) {
                const t = es(e),
                  n = ts(t, e),
                  r = ts(t.reverse(), e);
                return [n, r];
              })(t);
            r && o
              ? e.shiftKey || a !== o
                ? e.shiftKey &&
                  a === r &&
                  (e.preventDefault(), n && rs(o, { select: !0 }))
                : (e.preventDefault(), n && rs(r, { select: !0 }))
              : a === t && e.preventDefault();
          }
        },
        [n, r, m.paused],
      );
      return (0, St.jsx)(Al.div, { tabIndex: -1, ...i, ref: p, onKeyDown: h });
    });
  function es(e) {
    const t = [],
      n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: (e) => {
          const t = "INPUT" === e.tagName && "hidden" === e.type;
          return e.disabled || e.hidden || t
            ? NodeFilter.FILTER_SKIP
            : e.tabIndex >= 0
              ? NodeFilter.FILTER_ACCEPT
              : NodeFilter.FILTER_SKIP;
        },
      });
    for (; n.nextNode(); ) t.push(n.currentNode);
    return t;
  }
  function ts(e, t) {
    for (const n of e) if (!ns(n, { upTo: t })) return n;
  }
  function ns(e, t) {
    let { upTo: n } = t;
    if ("hidden" === getComputedStyle(e).visibility) return !0;
    for (; e; ) {
      if (void 0 !== n && e === n) return !1;
      if ("none" === getComputedStyle(e).display) return !0;
      e = e.parentElement;
    }
    return !1;
  }
  function rs(e) {
    let { select: t = !1 } =
      arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (e && e.focus) {
      const n = document.activeElement;
      (e.focus({ preventScroll: !0 }),
        e !== n &&
          (function (e) {
            return e instanceof HTMLInputElement && "select" in e;
          })(e) &&
          t &&
          e.select());
    }
  }
  Zi.displayName = "FocusScope";
  var as = (function () {
    let e = [];
    return {
      add(t) {
        const n = e[0];
        (t !== n && n?.pause(), (e = os(e, t)), e.unshift(t));
      },
      remove(t) {
        ((e = os(e, t)), e[0]?.resume());
      },
    };
  })();
  function os(e, t) {
    const n = [...e],
      r = n.indexOf(t);
    return (-1 !== r && n.splice(r, 1), n);
  }
  var ls = a.forwardRef((e, t) => {
    const { container: n, ...r } = e,
      [o, l] = a.useState(!1);
    zl(() => l(!0), []);
    const i = n || (o && globalThis?.document?.body);
    return i ? Pt.createPortal((0, St.jsx)(Al.div, { ...r, ref: t }), i) : null;
  });
  ls.displayName = "Portal";
  var is = 0;
  function ss() {
    a.useEffect(() => {
      const e = document.querySelectorAll("[data-radix-focus-guard]");
      return (
        document.body.insertAdjacentElement("afterbegin", e[0] ?? cs()),
        document.body.insertAdjacentElement("beforeend", e[1] ?? cs()),
        is++,
        () => {
          (1 === is &&
            document
              .querySelectorAll("[data-radix-focus-guard]")
              .forEach((e) => e.remove()),
            is--);
        }
      );
    }, []);
  }
  function cs() {
    const e = document.createElement("span");
    return (
      e.setAttribute("data-radix-focus-guard", ""),
      (e.tabIndex = 0),
      (e.style.outline = "none"),
      (e.style.opacity = "0"),
      (e.style.position = "fixed"),
      (e.style.pointerEvents = "none"),
      e
    );
  }
  var us = function () {
    return (
      (us =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var a in (t = arguments[n]))
              Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
          return e;
        }),
      us.apply(this, arguments)
    );
  };
  function ds(e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
      var a = 0;
      for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
        t.indexOf(r[a]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
          (n[r[a]] = e[r[a]]);
    }
    return n;
  }
  Object.create;
  function fs(e, t, n) {
    if (n || 2 === arguments.length)
      for (var r, a = 0, o = t.length; a < o; a++)
        (!r && a in t) ||
          (r || (r = Array.prototype.slice.call(t, 0, a)), (r[a] = t[a]));
    return e.concat(r || Array.prototype.slice.call(t));
  }
  Object.create;
  "function" === typeof SuppressedError && SuppressedError;
  var ps = "right-scroll-bar-position",
    ms = "width-before-scroll-bar";
  function hs(e, t) {
    return ("function" === typeof e ? e(t) : e && (e.current = t), e);
  }
  var gs = "undefined" !== typeof window ? a.useLayoutEffect : a.useEffect,
    bs = new WeakMap();
  function vs(e, t) {
    var n = (function (e, t) {
      var n = (0, a.useState)(function () {
        return {
          value: e,
          callback: t,
          facade: {
            get current() {
              return n.value;
            },
            set current(e) {
              var t = n.value;
              t !== e && ((n.value = e), n.callback(e, t));
            },
          },
        };
      })[0];
      return ((n.callback = t), n.facade);
    })(t || null, function (t) {
      return e.forEach(function (e) {
        return hs(e, t);
      });
    });
    return (
      gs(
        function () {
          var t = bs.get(n);
          if (t) {
            var r = new Set(t),
              a = new Set(e),
              o = n.current;
            (r.forEach(function (e) {
              a.has(e) || hs(e, null);
            }),
              a.forEach(function (e) {
                r.has(e) || hs(e, o);
              }));
          }
          bs.set(n, e);
        },
        [e],
      ),
      n
    );
  }
  function ys(e) {
    return e;
  }
  function xs(e, t) {
    void 0 === t && (t = ys);
    var n = [],
      r = !1,
      a = {
        read: function () {
          if (r)
            throw new Error(
              "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.",
            );
          return n.length ? n[n.length - 1] : e;
        },
        useMedium: function (e) {
          var a = t(e, r);
          return (
            n.push(a),
            function () {
              n = n.filter(function (e) {
                return e !== a;
              });
            }
          );
        },
        assignSyncMedium: function (e) {
          for (r = !0; n.length; ) {
            var t = n;
            ((n = []), t.forEach(e));
          }
          n = {
            push: function (t) {
              return e(t);
            },
            filter: function () {
              return n;
            },
          };
        },
        assignMedium: function (e) {
          r = !0;
          var t = [];
          if (n.length) {
            var a = n;
            ((n = []), a.forEach(e), (t = n));
          }
          var o = function () {
              var n = t;
              ((t = []), n.forEach(e));
            },
            l = function () {
              return Promise.resolve().then(o);
            };
          (l(),
            (n = {
              push: function (e) {
                (t.push(e), l());
              },
              filter: function (e) {
                return ((t = t.filter(e)), n);
              },
            }));
        },
      };
    return a;
  }
  var ws = (function (e) {
      void 0 === e && (e = {});
      var t = xs(null);
      return ((t.options = us({ async: !0, ssr: !1 }, e)), t);
    })(),
    Es = function () {},
    ks = a.forwardRef(function (e, t) {
      var n = a.useRef(null),
        r = a.useState({
          onScrollCapture: Es,
          onWheelCapture: Es,
          onTouchMoveCapture: Es,
        }),
        o = r[0],
        l = r[1],
        i = e.forwardProps,
        s = e.children,
        c = e.className,
        u = e.removeScrollBar,
        d = e.enabled,
        f = e.shards,
        p = e.sideCar,
        m = e.noRelative,
        h = e.noIsolation,
        g = e.inert,
        b = e.allowPinchZoom,
        v = e.as,
        y = void 0 === v ? "div" : v,
        x = e.gapMode,
        w = ds(e, [
          "forwardProps",
          "children",
          "className",
          "removeScrollBar",
          "enabled",
          "shards",
          "sideCar",
          "noRelative",
          "noIsolation",
          "inert",
          "allowPinchZoom",
          "as",
          "gapMode",
        ]),
        E = p,
        k = vs([n, t]),
        N = us(us({}, w), o);
      return a.createElement(
        a.Fragment,
        null,
        d &&
          a.createElement(E, {
            sideCar: ws,
            removeScrollBar: u,
            shards: f,
            noRelative: m,
            noIsolation: h,
            inert: g,
            setCallbacks: l,
            allowPinchZoom: !!b,
            lockRef: n,
            gapMode: x,
          }),
        i
          ? a.cloneElement(a.Children.only(s), us(us({}, N), { ref: k }))
          : a.createElement(y, us({}, N, { className: c, ref: k }), s),
      );
    });
  ((ks.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
    (ks.classNames = { fullWidth: ms, zeroRight: ps }));
  var Ns,
    Ss = function (e) {
      var t = e.sideCar,
        n = ds(e, ["sideCar"]);
      if (!t)
        throw new Error(
          "Sidecar: please provide `sideCar` property to import the right car",
        );
      var r = t.read();
      if (!r) throw new Error("Sidecar medium not found");
      return a.createElement(r, us({}, n));
    };
  Ss.isSideCarExport = !0;
  function js() {
    if (!document) return null;
    var e = document.createElement("style");
    e.type = "text/css";
    var t = Ns || n.nc;
    return (t && e.setAttribute("nonce", t), e);
  }
  var Cs = function () {
      var e = 0,
        t = null;
      return {
        add: function (n) {
          var r, a;
          (0 == e &&
            (t = js()) &&
            ((a = n),
            (r = t).styleSheet
              ? (r.styleSheet.cssText = a)
              : r.appendChild(document.createTextNode(a)),
            (function (e) {
              (
                document.head || document.getElementsByTagName("head")[0]
              ).appendChild(e);
            })(t)),
            e++);
        },
        remove: function () {
          !--e &&
            t &&
            (t.parentNode && t.parentNode.removeChild(t), (t = null));
        },
      };
    },
    Rs = function () {
      var e = (function () {
        var e = Cs();
        return function (t, n) {
          a.useEffect(
            function () {
              return (
                e.add(t),
                function () {
                  e.remove();
                }
              );
            },
            [t && n],
          );
        };
      })();
      return function (t) {
        var n = t.styles,
          r = t.dynamic;
        return (e(n, r), null);
      };
    },
    _s = { left: 0, top: 0, right: 0, gap: 0 },
    As = function (e) {
      return parseInt(e || "", 10) || 0;
    },
    Ds = function (e) {
      if ((void 0 === e && (e = "margin"), "undefined" === typeof window))
        return _s;
      var t = (function (e) {
          var t = window.getComputedStyle(document.body),
            n = t["padding" === e ? "paddingLeft" : "marginLeft"],
            r = t["padding" === e ? "paddingTop" : "marginTop"],
            a = t["padding" === e ? "paddingRight" : "marginRight"];
          return [As(n), As(r), As(a)];
        })(e),
        n = document.documentElement.clientWidth,
        r = window.innerWidth;
      return {
        left: t[0],
        top: t[1],
        right: t[2],
        gap: Math.max(0, r - n + t[2] - t[0]),
      };
    },
    Ps = Rs(),
    Ts = "data-scroll-locked",
    Os = function (e, t, n, r) {
      var a = e.left,
        o = e.top,
        l = e.right,
        i = e.gap;
      return (
        void 0 === n && (n = "margin"),
        "\n  ."
          .concat("with-scroll-bars-hidden", " {\n   overflow: hidden ")
          .concat(r, ";\n   padding-right: ")
          .concat(i, "px ")
          .concat(r, ";\n  }\n  body[")
          .concat(Ts, "] {\n    overflow: hidden ")
          .concat(r, ";\n    overscroll-behavior: contain;\n    ")
          .concat(
            [
              t && "position: relative ".concat(r, ";"),
              "margin" === n &&
                "\n    padding-left: "
                  .concat(a, "px;\n    padding-top: ")
                  .concat(o, "px;\n    padding-right: ")
                  .concat(
                    l,
                    "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ",
                  )
                  .concat(i, "px ")
                  .concat(r, ";\n    "),
              "padding" === n &&
                "padding-right: ".concat(i, "px ").concat(r, ";"),
            ]
              .filter(Boolean)
              .join(""),
            "\n  }\n  \n  .",
          )
          .concat(ps, " {\n    right: ")
          .concat(i, "px ")
          .concat(r, ";\n  }\n  \n  .")
          .concat(ms, " {\n    margin-right: ")
          .concat(i, "px ")
          .concat(r, ";\n  }\n  \n  .")
          .concat(ps, " .")
          .concat(ps, " {\n    right: 0 ")
          .concat(r, ";\n  }\n  \n  .")
          .concat(ms, " .")
          .concat(ms, " {\n    margin-right: 0 ")
          .concat(r, ";\n  }\n  \n  body[")
          .concat(Ts, "] {\n    ")
          .concat("--removed-body-scroll-bar-size", ": ")
          .concat(i, "px;\n  }\n")
      );
    },
    Fs = function () {
      var e = parseInt(document.body.getAttribute(Ts) || "0", 10);
      return isFinite(e) ? e : 0;
    },
    Ls = function (e) {
      var t = e.noRelative,
        n = e.noImportant,
        r = e.gapMode,
        o = void 0 === r ? "margin" : r;
      a.useEffect(function () {
        return (
          document.body.setAttribute(Ts, (Fs() + 1).toString()),
          function () {
            var e = Fs() - 1;
            e <= 0
              ? document.body.removeAttribute(Ts)
              : document.body.setAttribute(Ts, e.toString());
          }
        );
      }, []);
      var l = a.useMemo(
        function () {
          return Ds(o);
        },
        [o],
      );
      return a.createElement(Ps, {
        styles: Os(l, !t, o, n ? "" : "!important"),
      });
    },
    Ms = !1;
  if ("undefined" !== typeof window)
    try {
      var zs = Object.defineProperty({}, "passive", {
        get: function () {
          return ((Ms = !0), !0);
        },
      });
      (window.addEventListener("test", zs, zs),
        window.removeEventListener("test", zs, zs));
    } catch (Mu) {
      Ms = !1;
    }
  var Is = !!Ms && { passive: !1 },
    $s = function (e, t) {
      if (!(e instanceof Element)) return !1;
      var n = window.getComputedStyle(e);
      return (
        "hidden" !== n[t] &&
        !(
          n.overflowY === n.overflowX &&
          !(function (e) {
            return "TEXTAREA" === e.tagName;
          })(e) &&
          "visible" === n[t]
        )
      );
    },
    Bs = function (e, t) {
      var n = t.ownerDocument,
        r = t;
      do {
        if (
          ("undefined" !== typeof ShadowRoot &&
            r instanceof ShadowRoot &&
            (r = r.host),
          Us(e, r))
        ) {
          var a = Ws(e, r);
          if (a[1] > a[2]) return !0;
        }
        r = r.parentNode;
      } while (r && r !== n.body);
      return !1;
    },
    Us = function (e, t) {
      return "v" === e
        ? (function (e) {
            return $s(e, "overflowY");
          })(t)
        : (function (e) {
            return $s(e, "overflowX");
          })(t);
    },
    Ws = function (e, t) {
      return "v" === e
        ? [(n = t).scrollTop, n.scrollHeight, n.clientHeight]
        : (function (e) {
            return [e.scrollLeft, e.scrollWidth, e.clientWidth];
          })(t);
      var n;
    },
    Hs = function (e) {
      return "changedTouches" in e
        ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
        : [0, 0];
    },
    qs = function (e) {
      return [e.deltaX, e.deltaY];
    },
    Vs = function (e) {
      return e && "current" in e ? e.current : e;
    },
    Ks = function (e) {
      return "\n  .block-interactivity-"
        .concat(e, " {pointer-events: none;}\n  .allow-interactivity-")
        .concat(e, " {pointer-events: all;}\n");
    },
    Ys = 0,
    Qs = [];
  function Gs(e) {
    for (var t = null; null !== e; )
      (e instanceof ShadowRoot && ((t = e.host), (e = e.host)),
        (e = e.parentNode));
    return t;
  }
  const Js =
    ((Xs = function (e) {
      var t = a.useRef([]),
        n = a.useRef([0, 0]),
        r = a.useRef(),
        o = a.useState(Ys++)[0],
        l = a.useState(Rs)[0],
        i = a.useRef(e);
      (a.useEffect(
        function () {
          i.current = e;
        },
        [e],
      ),
        a.useEffect(
          function () {
            if (e.inert) {
              document.body.classList.add("block-interactivity-".concat(o));
              var t = fs(
                [e.lockRef.current],
                (e.shards || []).map(Vs),
                !0,
              ).filter(Boolean);
              return (
                t.forEach(function (e) {
                  return e.classList.add("allow-interactivity-".concat(o));
                }),
                function () {
                  (document.body.classList.remove(
                    "block-interactivity-".concat(o),
                  ),
                    t.forEach(function (e) {
                      return e.classList.remove(
                        "allow-interactivity-".concat(o),
                      );
                    }));
                }
              );
            }
          },
          [e.inert, e.lockRef.current, e.shards],
        ));
      var s = a.useCallback(function (e, t) {
          if (
            ("touches" in e && 2 === e.touches.length) ||
            ("wheel" === e.type && e.ctrlKey)
          )
            return !i.current.allowPinchZoom;
          var a,
            o = Hs(e),
            l = n.current,
            s = "deltaX" in e ? e.deltaX : l[0] - o[0],
            c = "deltaY" in e ? e.deltaY : l[1] - o[1],
            u = e.target,
            d = Math.abs(s) > Math.abs(c) ? "h" : "v";
          if ("touches" in e && "h" === d && "range" === u.type) return !1;
          var f = window.getSelection(),
            p = f && f.anchorNode;
          if (p && (p === u || p.contains(u))) return !1;
          var m = Bs(d, u);
          if (!m) return !0;
          if ((m ? (a = d) : ((a = "v" === d ? "h" : "v"), (m = Bs(d, u))), !m))
            return !1;
          if (
            (!r.current && "changedTouches" in e && (s || c) && (r.current = a),
            !a)
          )
            return !0;
          var h = r.current || a;
          return (function (e, t, n, r, a) {
            var o = (function (e, t) {
                return "h" === e && "rtl" === t ? -1 : 1;
              })(e, window.getComputedStyle(t).direction),
              l = o * r,
              i = n.target,
              s = t.contains(i),
              c = !1,
              u = l > 0,
              d = 0,
              f = 0;
            do {
              if (!i) break;
              var p = Ws(e, i),
                m = p[0],
                h = p[1] - p[2] - o * m;
              (m || h) && Us(e, i) && ((d += h), (f += m));
              var g = i.parentNode;
              i = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
            } while (
              (!s && i !== document.body) ||
              (s && (t.contains(i) || t === i))
            );
            return (
              ((u && ((a && Math.abs(d) < 1) || (!a && l > d))) ||
                (!u && ((a && Math.abs(f) < 1) || (!a && -l > f)))) &&
                (c = !0),
              c
            );
          })(h, t, e, "h" === h ? s : c, !0);
        }, []),
        c = a.useCallback(function (e) {
          var n = e;
          if (Qs.length && Qs[Qs.length - 1] === l) {
            var r = "deltaY" in n ? qs(n) : Hs(n),
              a = t.current.filter(function (e) {
                return (
                  e.name === n.type &&
                  (e.target === n.target || n.target === e.shadowParent) &&
                  (function (e, t) {
                    return e[0] === t[0] && e[1] === t[1];
                  })(e.delta, r)
                );
              })[0];
            if (a && a.should) n.cancelable && n.preventDefault();
            else if (!a) {
              var o = (i.current.shards || [])
                .map(Vs)
                .filter(Boolean)
                .filter(function (e) {
                  return e.contains(n.target);
                });
              (o.length > 0 ? s(n, o[0]) : !i.current.noIsolation) &&
                n.cancelable &&
                n.preventDefault();
            }
          }
        }, []),
        u = a.useCallback(function (e, n, r, a) {
          var o = {
            name: e,
            delta: n,
            target: r,
            should: a,
            shadowParent: Gs(r),
          };
          (t.current.push(o),
            setTimeout(function () {
              t.current = t.current.filter(function (e) {
                return e !== o;
              });
            }, 1));
        }, []),
        d = a.useCallback(function (e) {
          ((n.current = Hs(e)), (r.current = void 0));
        }, []),
        f = a.useCallback(function (t) {
          u(t.type, qs(t), t.target, s(t, e.lockRef.current));
        }, []),
        p = a.useCallback(function (t) {
          u(t.type, Hs(t), t.target, s(t, e.lockRef.current));
        }, []);
      a.useEffect(function () {
        return (
          Qs.push(l),
          e.setCallbacks({
            onScrollCapture: f,
            onWheelCapture: f,
            onTouchMoveCapture: p,
          }),
          document.addEventListener("wheel", c, Is),
          document.addEventListener("touchmove", c, Is),
          document.addEventListener("touchstart", d, Is),
          function () {
            ((Qs = Qs.filter(function (e) {
              return e !== l;
            })),
              document.removeEventListener("wheel", c, Is),
              document.removeEventListener("touchmove", c, Is),
              document.removeEventListener("touchstart", d, Is));
          }
        );
      }, []);
      var m = e.removeScrollBar,
        h = e.inert;
      return a.createElement(
        a.Fragment,
        null,
        h ? a.createElement(l, { styles: Ks(o) }) : null,
        m
          ? a.createElement(Ls, {
              noRelative: e.noRelative,
              gapMode: e.gapMode,
            })
          : null,
      );
    }),
    ws.useMedium(Xs),
    Ss);
  var Xs,
    Zs = a.forwardRef(function (e, t) {
      return a.createElement(ks, us({}, e, { ref: t, sideCar: Js }));
    });
  Zs.classNames = ks.classNames;
  const ec = Zs;
  var tc = function (e) {
      return "undefined" === typeof document
        ? null
        : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
    },
    nc = new WeakMap(),
    rc = new WeakMap(),
    ac = {},
    oc = 0,
    lc = function (e) {
      return e && (e.host || lc(e.parentNode));
    },
    ic = function (e, t, n, r) {
      var a = (function (e, t) {
        return t
          .map(function (t) {
            if (e.contains(t)) return t;
            var n = lc(t);
            return n && e.contains(n)
              ? n
              : (console.error(
                  "aria-hidden",
                  t,
                  "in not contained inside",
                  e,
                  ". Doing nothing",
                ),
                null);
          })
          .filter(function (e) {
            return Boolean(e);
          });
      })(t, Array.isArray(e) ? e : [e]);
      ac[n] || (ac[n] = new WeakMap());
      var o = ac[n],
        l = [],
        i = new Set(),
        s = new Set(a),
        c = function (e) {
          e && !i.has(e) && (i.add(e), c(e.parentNode));
        };
      a.forEach(c);
      var u = function (e) {
        e &&
          !s.has(e) &&
          Array.prototype.forEach.call(e.children, function (e) {
            if (i.has(e)) u(e);
            else
              try {
                var t = e.getAttribute(r),
                  a = null !== t && "false" !== t,
                  s = (nc.get(e) || 0) + 1,
                  c = (o.get(e) || 0) + 1;
                (nc.set(e, s),
                  o.set(e, c),
                  l.push(e),
                  1 === s && a && rc.set(e, !0),
                  1 === c && e.setAttribute(n, "true"),
                  a || e.setAttribute(r, "true"));
              } catch (Lu) {
                console.error("aria-hidden: cannot operate on ", e, Lu);
              }
          });
      };
      return (
        u(t),
        i.clear(),
        oc++,
        function () {
          (l.forEach(function (e) {
            var t = nc.get(e) - 1,
              a = o.get(e) - 1;
            (nc.set(e, t),
              o.set(e, a),
              t || (rc.has(e) || e.removeAttribute(r), rc.delete(e)),
              a || e.removeAttribute(n));
          }),
            --oc ||
              ((nc = new WeakMap()),
              (nc = new WeakMap()),
              (rc = new WeakMap()),
              (ac = {})));
        }
      );
    },
    sc = function (e, t, n) {
      void 0 === n && (n = "data-aria-hidden");
      var r = Array.from(Array.isArray(e) ? e : [e]),
        a = t || tc(e);
      return a
        ? (r.push.apply(
            r,
            Array.from(a.querySelectorAll("[aria-live], script")),
          ),
          ic(r, a, n, "aria-hidden"))
        : function () {
            return null;
          };
    };
  function cc(e) {
    const t = uc(e),
      n = a.forwardRef((e, n) => {
        const { children: r, ...o } = e,
          l = a.Children.toArray(r),
          i = l.find(fc);
        if (i) {
          const e = i.props.children,
            r = l.map((t) =>
              t === i
                ? a.Children.count(e) > 1
                  ? a.Children.only(null)
                  : a.isValidElement(e)
                    ? e.props.children
                    : null
                : t,
            );
          return (0, St.jsx)(t, {
            ...o,
            ref: n,
            children: a.isValidElement(e) ? a.cloneElement(e, void 0, r) : null,
          });
        }
        return (0, St.jsx)(t, { ...o, ref: n, children: r });
      });
    return ((n.displayName = `${e}.Slot`), n);
  }
  function uc(e) {
    const t = a.forwardRef((e, t) => {
      const { children: n, ...r } = e;
      if (a.isValidElement(n)) {
        const e = (function (e) {
            let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
              n = t && "isReactWarning" in t && t.isReactWarning;
            if (n) return e.ref;
            if (
              ((t = Object.getOwnPropertyDescriptor(e, "ref")?.get),
              (n = t && "isReactWarning" in t && t.isReactWarning),
              n)
            )
              return e.props.ref;
            return e.props.ref || e.ref;
          })(n),
          o = (function (e, t) {
            const n = { ...t };
            for (const r in t) {
              const a = e[r],
                o = t[r];
              /^on[A-Z]/.test(r)
                ? a && o
                  ? (n[r] = function () {
                      const e = o(...arguments);
                      return (a(...arguments), e);
                    })
                  : a && (n[r] = a)
                : "style" === r
                  ? (n[r] = { ...a, ...o })
                  : "className" === r &&
                    (n[r] = [a, o].filter(Boolean).join(" "));
            }
            return { ...e, ...n };
          })(r, n.props);
        return (
          n.type !== a.Fragment && (o.ref = t ? ol(t, e) : e),
          a.cloneElement(n, o)
        );
      }
      return a.Children.count(n) > 1 ? a.Children.only(null) : null;
    });
    return ((t.displayName = `${e}.SlotClone`), t);
  }
  var dc = Symbol("radix.slottable");
  function fc(e) {
    return (
      a.isValidElement(e) &&
      "function" === typeof e.type &&
      "__radixId" in e.type &&
      e.type.__radixId === dc
    );
  }
  var pc = "Dialog",
    [mc, hc] = Nl(pc),
    [gc, bc] = mc(pc),
    vc = (e) => {
      const {
          __scopeDialog: t,
          children: n,
          open: r,
          defaultOpen: o,
          onOpenChange: l,
          modal: i = !0,
        } = e,
        s = a.useRef(null),
        c = a.useRef(null),
        [u, d] = Hl({ prop: r, defaultProp: o ?? !1, onChange: l, caller: pc });
      return (0, St.jsx)(gc, {
        scope: t,
        triggerRef: s,
        contentRef: c,
        contentId: Bl(),
        titleId: Bl(),
        descriptionId: Bl(),
        open: u,
        onOpenChange: d,
        onOpenToggle: a.useCallback(() => d((e) => !e), [d]),
        modal: i,
        children: n,
      });
    };
  vc.displayName = pc;
  var yc = "DialogTrigger",
    xc = a.forwardRef((e, t) => {
      const { __scopeDialog: n, ...r } = e,
        a = bc(yc, n),
        o = ll(t, a.triggerRef);
      return (0, St.jsx)(Al.button, {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": a.open,
        "aria-controls": a.contentId,
        "data-state": $c(a.open),
        ...r,
        ref: o,
        onClick: kl(e.onClick, a.onOpenToggle),
      });
    });
  xc.displayName = yc;
  var wc = "DialogPortal",
    [Ec, kc] = mc(wc, { forceMount: void 0 }),
    Nc = (e) => {
      const { __scopeDialog: t, forceMount: n, children: r, container: o } = e,
        l = bc(wc, t);
      return (0, St.jsx)(Ec, {
        scope: t,
        forceMount: n,
        children: a.Children.map(r, (e) =>
          (0, St.jsx)(di, {
            present: n || l.open,
            children: (0, St.jsx)(ls, {
              asChild: !0,
              container: o,
              children: e,
            }),
          }),
        ),
      });
    };
  Nc.displayName = wc;
  var Sc = "DialogOverlay",
    jc = a.forwardRef((e, t) => {
      const n = kc(Sc, e.__scopeDialog),
        { forceMount: r = n.forceMount, ...a } = e,
        o = bc(Sc, e.__scopeDialog);
      return o.modal
        ? (0, St.jsx)(di, {
            present: r || o.open,
            children: (0, St.jsx)(Rc, { ...a, ref: t }),
          })
        : null;
    });
  jc.displayName = Sc;
  var Cc = cc("DialogOverlay.RemoveScroll"),
    Rc = a.forwardRef((e, t) => {
      const { __scopeDialog: n, ...r } = e,
        a = bc(Sc, n);
      return (0, St.jsx)(ec, {
        as: Cc,
        allowPinchZoom: !0,
        shards: [a.contentRef],
        children: (0, St.jsx)(Al.div, {
          "data-state": $c(a.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style },
        }),
      });
    }),
    _c = "DialogContent",
    Ac = a.forwardRef((e, t) => {
      const n = kc(_c, e.__scopeDialog),
        { forceMount: r = n.forceMount, ...a } = e,
        o = bc(_c, e.__scopeDialog);
      return (0, St.jsx)(di, {
        present: r || o.open,
        children: o.modal
          ? (0, St.jsx)(Dc, { ...a, ref: t })
          : (0, St.jsx)(Pc, { ...a, ref: t }),
      });
    });
  Ac.displayName = _c;
  var Dc = a.forwardRef((e, t) => {
      const n = bc(_c, e.__scopeDialog),
        r = a.useRef(null),
        o = ll(t, n.contentRef, r);
      return (
        a.useEffect(() => {
          const e = r.current;
          if (e) return sc(e);
        }, []),
        (0, St.jsx)(Tc, {
          ...e,
          ref: o,
          trapFocus: n.open,
          disableOutsidePointerEvents: !0,
          onCloseAutoFocus: kl(e.onCloseAutoFocus, (e) => {
            (e.preventDefault(), n.triggerRef.current?.focus());
          }),
          onPointerDownOutside: kl(e.onPointerDownOutside, (e) => {
            const t = e.detail.originalEvent,
              n = 0 === t.button && !0 === t.ctrlKey;
            (2 === t.button || n) && e.preventDefault();
          }),
          onFocusOutside: kl(e.onFocusOutside, (e) => e.preventDefault()),
        })
      );
    }),
    Pc = a.forwardRef((e, t) => {
      const n = bc(_c, e.__scopeDialog),
        r = a.useRef(!1),
        o = a.useRef(!1);
      return (0, St.jsx)(Tc, {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (t) => {
          (e.onCloseAutoFocus?.(t),
            t.defaultPrevented ||
              (r.current || n.triggerRef.current?.focus(), t.preventDefault()),
            (r.current = !1),
            (o.current = !1));
        },
        onInteractOutside: (t) => {
          (e.onInteractOutside?.(t),
            t.defaultPrevented ||
              ((r.current = !0),
              "pointerdown" === t.detail.originalEvent.type &&
                (o.current = !0)));
          const a = t.target,
            l = n.triggerRef.current?.contains(a);
          (l && t.preventDefault(),
            "focusin" === t.detail.originalEvent.type &&
              o.current &&
              t.preventDefault());
        },
      });
    }),
    Tc = a.forwardRef((e, t) => {
      const {
          __scopeDialog: n,
          trapFocus: r,
          onOpenAutoFocus: o,
          onCloseAutoFocus: l,
          ...i
        } = e,
        s = bc(_c, n),
        c = a.useRef(null),
        u = ll(t, c);
      return (
        ss(),
        (0, St.jsxs)(St.Fragment, {
          children: [
            (0, St.jsx)(Zi, {
              asChild: !0,
              loop: !0,
              trapped: r,
              onMountAutoFocus: o,
              onUnmountAutoFocus: l,
              children: (0, St.jsx)(Vi, {
                role: "dialog",
                id: s.contentId,
                "aria-describedby": s.descriptionId,
                "aria-labelledby": s.titleId,
                "data-state": $c(s.open),
                ...i,
                ref: u,
                onDismiss: () => s.onOpenChange(!1),
              }),
            }),
            (0, St.jsxs)(St.Fragment, {
              children: [
                (0, St.jsx)(Hc, { titleId: s.titleId }),
                (0, St.jsx)(qc, {
                  contentRef: c,
                  descriptionId: s.descriptionId,
                }),
              ],
            }),
          ],
        })
      );
    }),
    Oc = "DialogTitle",
    Fc = a.forwardRef((e, t) => {
      const { __scopeDialog: n, ...r } = e,
        a = bc(Oc, n);
      return (0, St.jsx)(Al.h2, { id: a.titleId, ...r, ref: t });
    });
  Fc.displayName = Oc;
  var Lc = "DialogDescription",
    Mc = a.forwardRef((e, t) => {
      const { __scopeDialog: n, ...r } = e,
        a = bc(Lc, n);
      return (0, St.jsx)(Al.p, { id: a.descriptionId, ...r, ref: t });
    });
  Mc.displayName = Lc;
  var zc = "DialogClose",
    Ic = a.forwardRef((e, t) => {
      const { __scopeDialog: n, ...r } = e,
        a = bc(zc, n);
      return (0, St.jsx)(Al.button, {
        type: "button",
        ...r,
        ref: t,
        onClick: kl(e.onClick, () => a.onOpenChange(!1)),
      });
    });
  function $c(e) {
    return e ? "open" : "closed";
  }
  Ic.displayName = zc;
  var Bc = "DialogTitleWarning",
    [Uc, Wc] = (function (e, t) {
      const n = a.createContext(t),
        r = (e) => {
          const { children: t, ...r } = e,
            o = a.useMemo(() => r, Object.values(r));
          return (0, St.jsx)(n.Provider, { value: o, children: t });
        };
      return (
        (r.displayName = e + "Provider"),
        [
          r,
          function (r) {
            const o = a.useContext(n);
            if (o) return o;
            if (void 0 !== t) return t;
            throw new Error(`\`${r}\` must be used within \`${e}\``);
          },
        ]
      );
    })(Bc, { contentName: _c, titleName: Oc, docsSlug: "dialog" }),
    Hc = (e) => {
      let { titleId: t } = e;
      const n = Wc(Bc),
        r = `\`${n.contentName}\` requires a \`${n.titleName}\` for the component to be accessible for screen reader users.\n\nIf you want to hide the \`${n.titleName}\`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/${n.docsSlug}`;
      return (
        a.useEffect(() => {
          if (t) {
            document.getElementById(t) || console.error(r);
          }
        }, [r, t]),
        null
      );
    },
    qc = (e) => {
      let { contentRef: t, descriptionId: n } = e;
      const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Wc("DialogDescriptionWarning").contentName}}.`;
      return (
        a.useEffect(() => {
          const e = t.current?.getAttribute("aria-describedby");
          if (n && e) {
            document.getElementById(n) || console.warn(r);
          }
        }, [r, t, n]),
        null
      );
    },
    Vc = jc,
    Kc = Ac,
    Yc = Fc,
    Qc = Mc,
    Gc = Ic;
  const Jc = vc,
    Xc = Nc,
    Zc = a.forwardRef((e, t) => {
      let { className: n, ...r } = e;
      return (0, St.jsx)(Vc, {
        ref: t,
        className: nl(
          "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          n,
        ),
        ...r,
      });
    });
  Zc.displayName = Vc.displayName;
  const eu = a.forwardRef((e, t) => {
    let { className: n, children: r, ...a } = e;
    return (0, St.jsxs)(Xc, {
      children: [
        (0, St.jsx)(Zc, {}),
        (0, St.jsxs)(Kc, {
          ref: t,
          className: nl(
            "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
            n,
          ),
          ...a,
          children: [
            r,
            (0, St.jsxs)(Gc, {
              className:
                "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
              children: [
                (0, St.jsx)(Sa, { className: "h-4 w-4" }),
                (0, St.jsx)("span", {
                  className: "sr-only",
                  children: "Close",
                }),
              ],
            }),
          ],
        }),
      ],
    });
  });
  eu.displayName = Kc.displayName;
  const tu = (e) => {
    let { className: t, ...n } = e;
    return (0, St.jsx)("div", {
      className: nl("flex flex-col space-y-1.5 text-center sm:text-left", t),
      ...n,
    });
  };
  tu.displayName = "DialogHeader";
  const nu = a.forwardRef((e, t) => {
    let { className: n, ...r } = e;
    return (0, St.jsx)(Yc, {
      ref: t,
      className: nl("text-lg font-semibold leading-none tracking-tight", n),
      ...r,
    });
  });
  nu.displayName = Yc.displayName;
  a.forwardRef((e, t) => {
    let { className: n, ...r } = e;
    return (0, St.jsx)(Qc, {
      ref: t,
      className: nl("text-sm text-muted-foreground", n),
      ...r,
    });
  }).displayName = Qc.displayName;
  const ru = xa("map-pin", [
      [
        "path",
        {
          d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
          key: "1r0f0z",
        },
      ],
      ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
    ]),
    au = xa("chevron-up", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]),
    ou = xa("loader-circle", [
      ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
    ]),
    lu = xa("search", [
      ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
      ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
    ]),
    iu = xa("navigation", [
      ["polygon", { points: "3 11 22 2 13 21 11 13 3 11", key: "1ltx0t" }],
    ]),
    su = xa("circle-check", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
    ]),
    cu = xa("circle-x", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
      ["path", { d: "m9 9 6 6", key: "z0biqf" }],
    ]),
    uu = 28.4089,
    du = 77.0337,
    fu = "Vatika Chowk, Sector 66, Gurugram",
    pu = (e, t, n, r) => {
      const a = (n - e) * (Math.PI / 180),
        o = (r - t) * (Math.PI / 180),
        l =
          Math.sin(a / 2) * Math.sin(a / 2) +
          Math.cos(e * (Math.PI / 180)) *
            Math.cos(n * (Math.PI / 180)) *
            Math.sin(o / 2) *
            Math.sin(o / 2);
      return 6371 * (2 * Math.atan2(Math.sqrt(l), Math.sqrt(1 - l)));
    },
    mu = (e) => {
      let { onLocationSelect: t, currentLocation: n } = e;
      const [r, o] = (0, a.useState)(!1),
        [l, i] = (0, a.useState)(""),
        [s, c] = (0, a.useState)([]),
        [u, d] = (0, a.useState)(!1),
        [f, p] = (0, a.useState)(n || null),
        [m, h] = (0, a.useState)(""),
        [g, b] = (0, a.useState)(!n);
      ((0, a.useEffect)(() => {
        n && (p(n), b(!1));
      }, [n]),
        (0, a.useEffect)(() => {
          const e = l.trim();
          if (!g) return;
          if (e.length < 3) return (c([]), void d(!1));
          if (e.length > 200) return;
          const t = new AbortController(),
            n = setTimeout(async () => {
              d(!0);
              try {
                const n = "76.8,28.8,77.4,27.9",
                  r = `https://nominatim.openstreetmap.org/search?format=jsonv2&q=${encodeURIComponent(e)}&addressdetails=1&limit=6&countrycodes=in&viewbox=${n}&bounded=1`,
                  a = await fetch(r, {
                    signal: t.signal,
                    headers: {
                      "accept-language": "en",
                      "User-Agent": "MrMuttonFoodApp/1.0",
                    },
                  }),
                  o = await a.json();
                c(Array.isArray(o) ? o : []);
              } catch (Lu) {
              } finally {
                d(!1);
              }
            }, 300);
          return () => {
            (clearTimeout(n), t.abort());
          };
        }, [l, g]));
      const v = (e, n, r) => {
          const a = pu(n, r, uu, du),
            o = a <= 15,
            l = { lat: n, lng: r, distance: a, address: e, inDeliveryZone: o };
          (p(l),
            t(l),
            b(!1),
            i(""),
            c([]),
            o
              ? Ht.success("Great news! \ud83c\udf89", {
                  description: "You're within our 15km delivery zone",
                })
              : Ht.error("Out of delivery zone", {
                  description: "Your area is out of our delivery zone",
                }));
        },
        y = async () => {
          const e = l.trim();
          if (e) {
            if (s.length > 0) {
              const e = s[0];
              return void v(
                e.display_name,
                parseFloat(e.lat),
                parseFloat(e.lon),
              );
            }
            d(!0);
            try {
              const t = await fetch(
                  `https://nominatim.openstreetmap.org/search?format=jsonv2&q=${encodeURIComponent(e)}&addressdetails=1&limit=1&countrycodes=in`,
                  {
                    headers: {
                      "accept-language": "en",
                      "User-Agent": "MrMuttonFoodApp/1.0",
                    },
                  },
                ),
                n = await t.json();
              if (n && n.length > 0) {
                const { lat: e, lon: t, display_name: r } = n[0];
                v(r, parseFloat(e), parseFloat(t));
              } else
                Ht.error("Address not found", {
                  description:
                    'Try adding sector/landmark (e.g., "Spaze Plaza, Sector 69 Gurugram")',
                });
            } catch (t) {
              Ht.error("Search failed", { description: "Please try again" });
            } finally {
              d(!1);
            }
          } else
            Ht.error("Enter an address", {
              description: "Please type your delivery address",
            });
        };
      return (0, St.jsxs)("div", {
        className: "space-y-3",
        children: [
          f &&
            !g &&
            (0, St.jsx)("div", {
              className:
                "bg-[#111B21] rounded-xl p-4 border border-[#F59E0B] cursor-pointer hover:bg-[#1A2530] transition-colors",
              onClick: () => b(!0),
              "data-testid": "selected-location-collapsed",
              children: (0, St.jsxs)("div", {
                className: "flex items-start gap-3",
                children: [
                  (0, St.jsx)(ru, {
                    className: "w-5 h-5 text-[#F59E0B] mt-0.5 flex-shrink-0",
                  }),
                  (0, St.jsxs)("div", {
                    className: "flex-1 min-w-0\\",
                    children: [
                      (0, St.jsx)("h3", {
                        className: "text-[#E9EDEF] font-semibold text-sm mb-1",
                        children: "Delivery Location",
                      }),
                      (0, St.jsx)("p", {
                        className: "text-[#8696A0] text-sm line-clamp-2",
                        children: f.address,
                      }),
                      m &&
                        (0, St.jsxs)("p", {
                          className: "text-[#8696A0] text-xs mt-1",
                          children: ["Landmark: ", m],
                        }),
                    ],
                  }),
                  (0, St.jsx)(au, {
                    className: "w-5 h-5 text-[#8696A0] flex-shrink-0",
                  }),
                ],
              }),
            }),
          g &&
            (0, St.jsxs)("div", {
              className: "space-y-3",
              children: [
                (0, St.jsxs)("div", {
                  className: "relative",
                  children: [
                    (0, St.jsxs)("div", {
                      className:
                        "flex items-center gap-2 rounded-xl border border-[#2A3942] bg-[#2A3942] px-4 py-3",
                      children: [
                        (0, St.jsx)(ru, {
                          className: "w-5 h-5 text-[#8696A0] flex-shrink-0",
                        }),
                        (0, St.jsx)("input", {
                          type: "text",
                          placeholder:
                            "Start typing your area / society / sector\u2026",
                          value: l,
                          onChange: (e) => i(e.target.value),
                          onKeyDown: (e) => "Enter" === e.key && y(),
                          className:
                            "flex-1 bg-transparent outline-none text-[#E9EDEF] text-sm placeholder:text-[#8696A0]",
                          autoComplete: "off",
                          "data-testid": "location-search-input",
                        }),
                        (0, St.jsx)("button", {
                          type: "button",
                          onClick: y,
                          className:
                            "p-1 rounded-md hover:bg-[#3A4952] transition-colors",
                          "aria-label": "Search address",
                          children: u
                            ? (0, St.jsx)(ou, {
                                className:
                                  "w-5 h-5 animate-spin text-[#8696A0]",
                              })
                            : (0, St.jsx)(lu, {
                                className: "w-5 h-5 text-[#8696A0]",
                              }),
                        }),
                      ],
                    }),
                    l.trim().length >= 3 &&
                      (s.length > 0 || u) &&
                      (0, St.jsx)("div", {
                        className:
                          "mt-2 w-full overflow-hidden rounded-xl border border-[#2A3942] bg-[#202C33] shadow-lg",
                        children: (0, St.jsx)("div", {
                          className: "max-h-40 overflow-auto",
                          children:
                            u && 0 === s.length
                              ? (0, St.jsx)("div", {
                                  className: "px-4 py-3 text-sm text-[#8696A0]",
                                  children: "Searching\u2026",
                                })
                              : s.map((e) =>
                                  (0, St.jsxs)(
                                    "button",
                                    {
                                      type: "button",
                                      onClick: () =>
                                        v(
                                          e.display_name,
                                          parseFloat(e.lat),
                                          parseFloat(e.lon),
                                        ),
                                      className:
                                        "w-full text-left px-4 py-3 hover:bg-[#2A3942] transition-colors border-b border-[#2A3942]/50 last:border-b-0",
                                      children: [
                                        (0, St.jsx)("div", {
                                          className:
                                            "text-sm font-medium text-[#E9EDEF] line-clamp-1",
                                          children:
                                            e.display_name.split(",")[0],
                                        }),
                                        (0, St.jsx)("div", {
                                          className:
                                            "text-xs text-[#8696A0] line-clamp-1 mt-0.5",
                                          children: e.display_name,
                                        }),
                                      ],
                                    },
                                    e.place_id,
                                  ),
                                ),
                        }),
                      }),
                  ],
                }),
                (0, St.jsxs)("div", {
                  className: "flex items-center gap-2",
                  children: [
                    (0, St.jsx)("div", {
                      className: "flex-1 h-px bg-[#2A3942]",
                    }),
                    (0, St.jsx)("span", {
                      className: "text-xs text-[#8696A0]",
                      children: "or",
                    }),
                    (0, St.jsx)("div", {
                      className: "flex-1 h-px bg-[#2A3942]",
                    }),
                  ],
                }),
                (0, St.jsx)("button", {
                  type: "button",
                  onClick: () => {
                    navigator.geolocation
                      ? (o(!0),
                        navigator.geolocation.getCurrentPosition(
                          async (e) => {
                            try {
                              const {
                                latitude: n,
                                longitude: r,
                                accuracy: a,
                              } = e.coords;
                              (console.log(
                                "Location fetched:",
                                n,
                                r,
                                "Accuracy:",
                                a,
                              ),
                                a > 150 &&
                                  Ht.error("Low location accuracy", {
                                    description:
                                      "Please turn on GPS or move near a window",
                                  }));
                              const l = pu(n, r, uu, du),
                                i = l <= 15;
                              if (l > 20)
                                return (
                                  Ht.error("Location mismatch", {
                                    description:
                                      "Detected location seems incorrect. Please enter address manually.",
                                  }),
                                  void o(!1)
                                );
                              const s = await fetch(
                                  `https://nominatim.openstreetmap.org/reverse?format=json&lat=${n}&lon=${r}`,
                                  {
                                    headers: {
                                      "accept-language": "en",
                                      "User-Agent": "MrMuttonFoodApp/1.0",
                                    },
                                  },
                                ),
                                c = {
                                  lat: n,
                                  lng: r,
                                  distance: l,
                                  address:
                                    (await s.json()).display_name ||
                                    `Lat: ${n.toFixed(4)}, Lng: ${r.toFixed(4)}`,
                                  inDeliveryZone: i,
                                };
                              (p(c),
                                t(c),
                                o(!1),
                                b(!1),
                                i
                                  ? Ht.success("Great news! \ud83c\udf89", {
                                      description:
                                        "You're within our 15km delivery zone",
                                    })
                                  : Ht.error("Out of delivery zone", {
                                      description:
                                        "Your area is out of our delivery zone",
                                    }));
                            } catch (n) {
                              (console.error("Location processing error:", n),
                                Ht.error("Location error", {
                                  description:
                                    "Failed to detect location. Please enter address manually.",
                                }),
                                o(!1));
                            }
                          },
                          (e) => {
                            console.error("Geolocation error:", e);
                            let t = "Unable to fetch location",
                              n = "Please enter address manually";
                            switch (e.code) {
                              case e.PERMISSION_DENIED:
                                ((t = "Permission denied"),
                                  (n =
                                    "Please allow location access in browser settings"));
                                break;
                              case e.POSITION_UNAVAILABLE:
                                ((t = "Location unavailable"),
                                  (n =
                                    "Your device cannot determine location"));
                                break;
                              case e.TIMEOUT:
                                ((t = "Request timed out"),
                                  (n = "Please try again"));
                            }
                            (Ht.error(t, { description: n }), o(!1));
                          },
                          {
                            enableHighAccuracy: !0,
                            timeout: 15e3,
                            maximumAge: 0,
                          },
                        ))
                      : Ht.error("Geolocation not supported", {
                          description:
                            "Your browser does not support location services",
                        });
                  },
                  disabled: r,
                  className:
                    "w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-[#F59E0B] hover:bg-[#D97706] text-white font-medium rounded-xl transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed",
                  "data-testid": "fetch-location-button",
                  children: r
                    ? (0, St.jsxs)(St.Fragment, {
                        children: [
                          (0, St.jsx)(ou, {
                            className: "w-5 h-5 animate-spin",
                          }),
                          (0, St.jsx)("span", {
                            children: "Fetching location...",
                          }),
                        ],
                      })
                    : (0, St.jsxs)(St.Fragment, {
                        children: [
                          (0, St.jsx)(iu, { className: "w-5 h-5" }),
                          (0, St.jsx)("span", {
                            children: "Use Current Location",
                          }),
                        ],
                      }),
                }),
                (0, St.jsx)("p", {
                  className: "text-xs text-[#8696A0] text-center",
                  children:
                    "Auto-detected location may not be exact. Please verify.",
                }),
                f &&
                  f.inDeliveryZone &&
                  (0, St.jsx)("input", {
                    type: "text",
                    placeholder: "Landmark (optional)",
                    value: m,
                    onChange: (e) => h(e.target.value),
                    className:
                      "w-full px-4 py-3 bg-[#2A3942] border border-[#2A3942] text-[#E9EDEF] placeholder:text-[#8696A0] focus:ring-2 focus:ring-[#25D366] focus:border-transparent rounded-xl text-sm",
                    "data-testid": "landmark-input",
                  }),
              ],
            }),
          f &&
            void 0 !== f.inDeliveryZone &&
            (0, St.jsxs)("div", {
              className:
                "rounded-xl p-3 flex items-start gap-2 " +
                (f.inDeliveryZone
                  ? "bg-[#22C55E]/10 border border-[#22C55E]/30"
                  : "bg-[#EF4444]/10 border border-[#EF4444]/30"),
              "data-testid": "delivery-zone-status",
              children: [
                (0, St.jsx)("div", {
                  className:
                    "w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 " +
                    (f.inDeliveryZone ? "bg-[#22C55E]" : "bg-[#EF4444]"),
                  children: f.inDeliveryZone
                    ? (0, St.jsx)(su, { className: "w-3 h-3 text-white" })
                    : (0, St.jsx)(cu, { className: "w-3 h-3 text-white" }),
                }),
                (0, St.jsxs)("div", {
                  className: "flex-1",
                  children: [
                    (0, St.jsx)("p", {
                      className:
                        "text-sm font-medium " +
                        (f.inDeliveryZone
                          ? "text-[#22C55E]"
                          : "text-[#EF4444]"),
                      children: f.inDeliveryZone
                        ? "Your location is in our delivery zone! \u2713"
                        : "Your area is out of our delivery zone",
                    }),
                    f.inDeliveryZone &&
                      (0, St.jsxs)("p", {
                        className: "text-xs text-[#8696A0] mt-1",
                        children: [
                          "Distance: ",
                          f.distance.toFixed(2),
                          " km from ",
                          fu,
                        ],
                      }),
                  ],
                }),
              ],
            }),
          (0, St.jsxs)("div", {
            className: "flex items-center gap-2 p-3 bg-[#F59E0B]/5 rounded-xl",
            children: [
              (0, St.jsx)(ru, {
                className: "w-4 h-4 text-[#F59E0B] flex-shrink-0",
              }),
              (0, St.jsxs)("p", {
                className: "text-xs text-[#8696A0]",
                children: [
                  "We deliver within ",
                  (0, St.jsxs)("span", {
                    className: "font-semibold text-[#E9EDEF]",
                    children: [15, "km"],
                  }),
                  " of ",
                  fu,
                ],
              }),
            ],
          }),
        ],
      });
    },
    hu = xa("clock", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
    ]),
    gu = [
      "12:00 PM - 12:30 PM",
      "12:30 PM - 1:00 PM",
      "1:00 PM - 1:30 PM",
      "1:30 PM - 2:00 PM",
      "2:00 PM - 2:30 PM",
      "2:30 PM - 3:00 PM",
    ],
    bu = [
      "7:00 PM - 7:30 PM",
      "7:30 PM - 8:00 PM",
      "8:00 PM - 8:30 PM",
      "8:30 PM - 9:00 PM",
      "9:00 PM - 9:30 PM",
      "9:30 PM - 10:00 PM",
    ],
    vu = (e) => {
      var t;
      let { onScheduleSelect: n } = e;
      const [r, o] = (0, a.useState)(""),
        [l, i] = (0, a.useState)(""),
        [s, c] = (0, a.useState)(""),
        u = (() => {
          const e = new Date(),
            t = new Date(e);
          t.setDate(t.getDate() + 1);
          const n = new Date(e);
          n.setDate(n.getDate() + 2);
          const r = (e) =>
            e.toLocaleDateString("en-IN", { day: "2-digit", month: "short" });
          return [
            { value: "today", label: "Today", date: r(e), fullDate: e },
            { value: "tomorrow", label: "Tomorrow", date: r(t), fullDate: t },
            {
              value: "day-after",
              label: n.toLocaleDateString("en-IN", { weekday: "long" }),
              date: r(n),
              fullDate: n,
            },
          ];
        })(),
        d = (e) => {
          (i(e), c(""), f(r, e, ""));
        },
        f = (e, t, r) => {
          if (e && t && r) {
            const a = u.find((t) => t.value === e);
            n({ dateLabel: `${a.label}, ${a.date}`, mealType: t, timeSlot: r });
          } else n(null);
        },
        p = "lunch" === l ? gu : "dinner" === l ? bu : [];
      return (0, St.jsxs)("div", {
        className: "space-y-4",
        children: [
          (0, St.jsxs)(El, {
            className: "text-[#E9EDEF] mb-3 block flex items-center gap-2",
            children: [
              (0, St.jsx)(hu, { className: "w-4 h-4" }),
              "Schedule Delivery",
            ],
          }),
          (0, St.jsxs)("div", {
            children: [
              (0, St.jsx)("p", {
                className: "text-xs font-medium text-[#8696A0] mb-2",
                children: "Select Day",
              }),
              (0, St.jsx)("div", {
                className: "grid grid-cols-3 gap-2",
                children: u.map((e) =>
                  (0, St.jsx)(
                    "button",
                    {
                      type: "button",
                      onClick: () => {
                        return (
                          (t = e.value),
                          o(t),
                          i(""),
                          c(""),
                          void f(t, "", "")
                        );
                        var t;
                      },
                      className:
                        "p-3 rounded-xl border-2 text-center transition-all " +
                        (r === e.value
                          ? "border-[#25D366] bg-[#25D366]/10 text-[#25D366]"
                          : "border-[#2A3942] bg-[#202C33] text-[#8696A0] hover:border-[#25D366]/50"),
                      "data-testid": `date-${e.value}`,
                      children: (0, St.jsxs)("div", {
                        children: [
                          (0, St.jsx)("p", {
                            className: "text-xs mb-1",
                            children: e.date,
                          }),
                          (0, St.jsx)("p", {
                            className: "text-sm font-medium",
                            children: e.label,
                          }),
                        ],
                      }),
                    },
                    e.value,
                  ),
                ),
              }),
            ],
          }),
          r &&
            (0, St.jsxs)("div", {
              children: [
                (0, St.jsx)("p", {
                  className: "text-xs font-medium text-[#8696A0] mb-2",
                  children: "Select Meal Type",
                }),
                (0, St.jsxs)("div", {
                  className: "grid grid-cols-2 gap-2",
                  children: [
                    (0, St.jsxs)("button", {
                      type: "button",
                      onClick: () => d("lunch"),
                      className:
                        "p-3 rounded-xl border-2 text-center transition-all " +
                        ("lunch" === l
                          ? "border-[#25D366] bg-[#25D366]/10 text-[#25D366]"
                          : "border-[#2A3942] bg-[#202C33] text-[#E9EDEF] hover:border-[#25D366]/50"),
                      "data-testid": "meal-lunch",
                      children: [
                        (0, St.jsx)("span", {
                          className: "text-2xl mb-1 block",
                          children: "\ud83c\udf5b",
                        }),
                        (0, St.jsx)("span", {
                          className: "text-sm font-medium block",
                          children: "Lunch",
                        }),
                        (0, St.jsx)("span", {
                          className:
                            "text-xs " +
                            ("lunch" === l
                              ? "text-[#25D366]/80"
                              : "text-[#8696A0]"),
                          children: "12:00 PM - 3:00 PM",
                        }),
                      ],
                    }),
                    (0, St.jsxs)("button", {
                      type: "button",
                      onClick: () => d("dinner"),
                      className:
                        "p-3 rounded-xl border-2 text-center transition-all " +
                        ("dinner" === l
                          ? "border-[#25D366] bg-[#25D366]/10 text-[#25D366]"
                          : "border-[#2A3942] bg-[#202C33] text-[#E9EDEF] hover:border-[#25D366]/50"),
                      "data-testid": "meal-dinner",
                      children: [
                        (0, St.jsx)("span", {
                          className: "text-2xl mb-1 block",
                          children: "\ud83c\udf56",
                        }),
                        (0, St.jsx)("span", {
                          className: "text-sm font-medium block",
                          children: "Dinner",
                        }),
                        (0, St.jsx)("span", {
                          className:
                            "text-xs " +
                            ("dinner" === l
                              ? "text-[#25D366]/80"
                              : "text-[#8696A0]"),
                          children: "7:00 PM - 10:00 PM",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          l &&
            p.length > 0 &&
            (0, St.jsxs)("div", {
              children: [
                (0, St.jsx)("p", {
                  className: "text-xs font-medium text-[#8696A0] mb-2",
                  children: "Select Time Slot",
                }),
                (0, St.jsx)("div", {
                  className:
                    "grid grid-cols-2 gap-2 max-h-[200px] overflow-y-auto",
                  children: p.map((e) =>
                    (0, St.jsx)(
                      "button",
                      {
                        type: "button",
                        onClick: () => {
                          return (c((t = e)), void f(r, l, t));
                          var t;
                        },
                        className:
                          "p-2.5 rounded-lg border-2 text-center transition-all text-sm " +
                          (s === e
                            ? "border-[#25D366] bg-[#25D366]/10 text-[#25D366] font-semibold"
                            : "border-[#2A3942] bg-[#111B21] text-[#E9EDEF] hover:border-[#25D366]/50"),
                        "data-testid": `time-${e}`,
                        children: e,
                      },
                      e,
                    ),
                  ),
                }),
              ],
            }),
          r &&
            l &&
            s &&
            (0, St.jsxs)("div", {
              className:
                "mt-4 bg-[#111B21] rounded-lg p-3 border border-[#25D366]",
              "data-testid": "selected-schedule",
              children: [
                (0, St.jsx)("p", {
                  className: "text-xs text-[#8696A0] mb-1",
                  children: "Scheduled for:",
                }),
                (0, St.jsxs)("p", {
                  className: "text-[#E9EDEF] font-medium",
                  children: [
                    null === (t = u.find((e) => e.value === r)) || void 0 === t
                      ? void 0
                      : t.label,
                    ",",
                    " ",
                    "lunch" === l ? "Lunch" : "Dinner",
                    " (",
                    s,
                    ")",
                  ],
                }),
              ],
            }),
        ],
      });
    },
    yu = "https://api.mrmutton.com",
    xu = 15,
    wu = 5,
    Eu = 100,
    ku = 3,
    Nu = 10,
    Su = () => {
      const {
        cart: e,
        getTotalAmount: t,
        getItemsSubtotal: n,
        clearCart: r,
      } = Ct();
      console.log("CART DATA \ud83d\udc49", e);
      const o = me(),
        [l, i] = (0, a.useState)(!1),
        [s, c] = (0, a.useState)({ customer_name: "", customer_phone: "" }),
        [u, d] = (0, a.useState)("COD"),
        [f, p] = (0, a.useState)(null),
        [m, h] = (0, a.useState)(null),
        [g, b] = (0, a.useState)(!1),
        v = n(),
        y = xu,
        x = (v * wu) / 100,
        w = f ? (f.distance <= ku ? 0 : Math.ceil(f.distance - ku) * Nu) : 0,
        E = v + y + x + w,
        k = (e) => {
          c({ ...s, [e.target.name]: e.target.value });
        },
        N = (e) => {
          const t = ((e) => {
              var t;
              const n = e.items
                .map((e) => {
                  const t = e.price * e.quantity,
                    n =
                      ((e.addons || []).reduce(
                        (t, n) => t + n.price * e.quantity,
                        0,
                      ),
                      e.addons && e.addons.length > 0
                        ? "\n   \u27a4 Add-ons:\n" +
                          e.addons
                            .map((e) => `      - ${e.name} (\u20b9${e.price})`)
                            .join("\n")
                        : "");
                  return `\u2022 ${e.name} x${e.quantity} = \u20b9${t.toFixed(2)}${n}`;
                })
                .join("\n\n");
              let r = "ASAP";
              e.scheduled_date &&
                e.meal_type &&
                e.time_slot &&
                (r = `\n\ud83d\udcc5 ${e.scheduled_date}\n\ud83c\udf7d\ufe0f ${"lunch" === e.meal_type ? "Lunch" : "Dinner"}\n\u23f0 ${e.time_slot}\n`);
              const a = `\ud83d\uded2 *NEW ORDER RECEIVED*\n\n\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n\ud83d\udc64 *Customer Details*\nName: ${e.customer_name}\nPhone: ${e.customer_phone}\n\n\ud83d\udccd *Delivery Address*\n${(null === (t = e.delivery_location) || void 0 === t ? void 0 : t.address) || "N/A"}\n\ud83d\udccc Location: https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(e.customer_address)}\n\n\ud83d\udd52 *Schedule*\n${r}\n\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n\ud83d\udce6 *Order Items*\n${n}\n\n\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n\ud83d\udcb0 *Bill Summary*\nSubtotal: \u20b9${e.items_subtotal.toFixed(2)}\nPackaging: \u20b9${e.packaging_charge.toFixed(2)}\nDelivery: \u20b9${e.delivery_charge.toFixed(2)}\nGST: \u20b9${e.gst_amount.toFixed(2)}\n\n\ud83d\udfe2 *Total: \u20b9${e.total_amount.toFixed(2)}*\n\n\ud83d\udcb3 Payment: ${e.payment_method}\n\ud83d\udccc Status: ${e.payment_status}\n\n\ud83c\udd94 Order ID: ${e.id}\n\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501`;
              return encodeURIComponent(a);
            })(e),
            n = `https://wa.me/919220829266?text=${t}`;
          window.open(n, "_blank") || (window.location.href = n);
        },
        S = async function (t) {
          let n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            a =
              !(arguments.length > 2 && void 0 !== arguments[2]) ||
              arguments[2];
          try {
            const l = e
                .map((e) => {
                  const t =
                    e.addons && e.addons.length > 0
                      ? `\n   \u27a4 Add-ons: ${e.addons.map((e) => `${e.name} (\u20b9${e.price})`).join(", ")}`
                      : "";
                  return `${e.name} x${e.quantity}${t}`;
                })
                .join("\n\n"),
              i = {
                customer_name: s.customer_name,
                customer_phone: s.customer_phone,
                customer_address: f.address,
                items: e,
                items_text: l,
                items_subtotal: v,
                packaging_charge: y,
                delivery_charge: w,
                gst_amount: x,
                total_amount: E,
                payment_method: t,
                delivery_location: f,
                scheduled_date:
                  null === m || void 0 === m ? void 0 : m.dateLabel,
                meal_type: null === m || void 0 === m ? void 0 : m.mealType,
                time_slot: null === m || void 0 === m ? void 0 : m.timeSlot,
                ...n,
              },
              c = await ma.post(`${yu}/api/orders`, i);
            (Ht.success("Order placed successfully!"),
              o("/order-success", { state: { order: c.data } }),
              a &&
                setTimeout(() => {
                  N(c.data);
                }, 1e3),
              setTimeout(() => r(), 3e3));
          } catch (l) {
            throw (
              console.error("Order creation failed:", l),
              Ht.error("Failed to place order. Please try again."),
              l
            );
          } finally {
            i(!1);
          }
        },
        j = async (e) => {
          (e.preventDefault(),
            (s.customer_name && s.customer_phone
              ? f
                ? m || (Ht.error("Please select delivery schedule"), 0)
                : (Ht.error("Please select delivery location"), 0)
              : (Ht.error("Please fill all required fields"), 0)) &&
              ("COD" === u
                ? b(!0)
                : await (async () => {
                    console.log("GRAND TOTAL:", E);
                    try {
                      i(!0);
                      const e = await ma.post(
                          `${yu}/api/razorpay/create-order`,
                          { amount: Math.round(100 * E) },
                        ),
                        { id: t, amount: n, currency: r, key_id: a } = e.data,
                        o = {
                          key: a,
                          amount: n,
                          currency: r,
                          name: "Mr. Mutton",
                          description: "Food Order Payment",
                          order_id: t,
                          handler: async (e) => {
                            console.log("PAYMENT SUCCESS:", e);
                            try {
                              await S(
                                "ONLINE",
                                {
                                  razorpay_order_id: e.razorpay_order_id,
                                  razorpay_payment_id: e.razorpay_payment_id,
                                  razorpay_signature: e.razorpay_signature,
                                },
                                !0,
                              );
                            } catch (t) {
                              console.error(
                                "Order creation after payment failed:",
                                t,
                              );
                            }
                          },
                          prefill: {
                            name: s.customer_name,
                            contact: s.customer_phone,
                          },
                          theme: { color: "#25D366" },
                        },
                        l = new window.Razorpay(o);
                      (l.open(),
                        l.on("payment.failed", function (e) {
                          (console.error("RAZORPAY ERROR:", e.error),
                            Ht.error(e.error.description),
                            i(!1));
                        }));
                    } catch (e) {
                      (console.error("Payment initialization failed:", e),
                        Ht.error(
                          "Failed to initialize payment. Please try again.",
                        ),
                        i(!1));
                    }
                  })()));
        };
      return 0 === e.length && "/order-success" !== window.location.pathname
        ? null
        : (0, St.jsxs)("div", {
            className: "min-h-screen bg-[#0B141A] pb-32",
            children: [
              (0, St.jsx)("header", {
                className:
                  "sticky top-0 z-40 backdrop-blur-lg bg-[#0B141A]/80 border-b border-[#2A3942]",
                children: (0, St.jsxs)("div", {
                  className:
                    "max-w-7xl mx-auto px-4 py-4 flex items-center gap-4",
                  children: [
                    (0, St.jsx)("button", {
                      onClick: () => o("/cart"),
                      className:
                        "p-2 hover:bg-[#2A3942] rounded-full transition-colors",
                      "data-testid": "back-to-cart-button",
                      children: (0, St.jsx)(wa, {
                        className: "w-6 h-6 text-[#E9EDEF]",
                      }),
                    }),
                    (0, St.jsx)("h1", {
                      className:
                        "text-2xl font-bold text-[#E9EDEF] font-['Outfit']",
                      "data-testid": "checkout-title",
                      children: "Checkout",
                    }),
                  ],
                }),
              }),
              (0, St.jsx)("div", {
                className: "max-w-2xl mx-auto px-4 py-8",
                children: (0, St.jsxs)("form", {
                  onSubmit: j,
                  className: "space-y-6",
                  children: [
                    (0, St.jsxs)("div", {
                      className:
                        "bg-[#202C33] rounded-xl p-6 border border-[#2A3942]",
                      children: [
                        (0, St.jsx)("h2", {
                          className:
                            "text-xl font-semibold text-[#E9EDEF] mb-4 font-['Outfit']",
                          children: "Customer Details",
                        }),
                        (0, St.jsxs)("div", {
                          className: "space-y-4",
                          children: [
                            (0, St.jsxs)("div", {
                              children: [
                                (0, St.jsx)(El, {
                                  htmlFor: "customer_name",
                                  className: "text-[#E9EDEF] mb-2 block",
                                  children: "Full Name *",
                                }),
                                (0, St.jsx)(rl, {
                                  id: "customer_name",
                                  name: "customer_name",
                                  type: "text",
                                  value: s.customer_name,
                                  onChange: k,
                                  className:
                                    "bg-[#2A3942] border-none text-[#E9EDEF] placeholder:text-[#8696A0] focus:ring-1 focus:ring-[#25D366]",
                                  placeholder: "Enter your name",
                                  required: !0,
                                  "data-testid": "customer-name-input",
                                }),
                              ],
                            }),
                            (0, St.jsxs)("div", {
                              children: [
                                (0, St.jsx)(El, {
                                  htmlFor: "customer_phone",
                                  className: "text-[#E9EDEF] mb-2 block",
                                  children: "Phone Number *",
                                }),
                                (0, St.jsx)(rl, {
                                  id: "customer_phone",
                                  name: "customer_phone",
                                  type: "tel",
                                  value: s.customer_phone,
                                  onChange: k,
                                  className:
                                    "bg-[#2A3942] border-none text-[#E9EDEF] placeholder:text-[#8696A0] focus:ring-1 focus:ring-[#25D366]",
                                  placeholder: "Enter your phone number",
                                  required: !0,
                                  "data-testid": "customer-phone-input",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, St.jsx)("div", {
                      className:
                        "bg-[#202C33] rounded-xl p-6 border border-[#2A3942]",
                      children: (0, St.jsx)(mu, { onLocationSelect: p }),
                    }),
                    (0, St.jsx)("div", {
                      className:
                        "bg-[#202C33] rounded-xl p-6 border border-[#2A3942]",
                      children: (0, St.jsx)(vu, { onScheduleSelect: h }),
                    }),
                    (0, St.jsxs)("div", {
                      className:
                        "bg-[#202C33] rounded-xl p-6 border border-[#2A3942]",
                      children: [
                        (0, St.jsx)("h2", {
                          className:
                            "text-xl font-semibold text-[#E9EDEF] mb-4 font-['Outfit']",
                          children: "Order Summary",
                        }),
                        (0, St.jsx)("div", {
                          className: "space-y-3 mb-4",
                          children: e.map((e, t) =>
                            (0, St.jsxs)(
                              "div",
                              {
                                className: "flex justify-between text-sm",
                                children: [
                                  (0, St.jsxs)("div", {
                                    children: [
                                      (0, St.jsxs)("span", {
                                        className: "text-[#E9EDEF]",
                                        children: [e.name, " x", e.quantity],
                                      }),
                                      e.addons &&
                                        e.addons.length > 0 &&
                                        (0, St.jsx)("div", {
                                          className: "ml-4 mt-1 space-y-1",
                                          children: e.addons.map((e, t) =>
                                            (0, St.jsxs)(
                                              "div",
                                              {
                                                className:
                                                  "flex items-center gap-2 text-xs text-[#8696A0]",
                                                children: [
                                                  (0, St.jsx)("div", {
                                                    className:
                                                      "w-1 h-1 rounded-full bg-[#25D366]",
                                                  }),
                                                  e.name,
                                                ],
                                              },
                                              t,
                                            ),
                                          ),
                                        }),
                                    ],
                                  }),
                                  (0, St.jsxs)("span", {
                                    className: "text-[#E9EDEF]",
                                    children: [
                                      "\u20b9",
                                      (e.price * e.quantity).toFixed(2),
                                    ],
                                  }),
                                ],
                              },
                              `${e.product_id}-${t}`,
                            ),
                          ),
                        }),
                        (0, St.jsxs)("div", {
                          className: "border-t border-[#2A3942] pt-4 space-y-2",
                          children: [
                            (0, St.jsxs)("div", {
                              className:
                                "flex justify-between text-sm text-[#8696A0]",
                              children: [
                                (0, St.jsx)("span", {
                                  children: "Items Subtotal",
                                }),
                                (0, St.jsxs)("span", {
                                  className: "text-[#E9EDEF]",
                                  children: ["\u20b9", v.toFixed(2)],
                                }),
                              ],
                            }),
                            (0, St.jsxs)("div", {
                              className:
                                "flex justify-between text-sm text-[#8696A0]",
                              children: [
                                (0, St.jsx)("span", {
                                  children: "Packaging Charge",
                                }),
                                (0, St.jsxs)("span", {
                                  className: "text-[#E9EDEF]",
                                  children: ["\u20b9", y.toFixed(2)],
                                }),
                              ],
                            }),
                            (0, St.jsxs)("div", {
                              className:
                                "flex justify-between text-sm text-[#8696A0]",
                              children: [
                                (0, St.jsx)("span", {
                                  children: "Delivery Charge",
                                }),
                                (0, St.jsx)("span", {
                                  className:
                                    0 === w
                                      ? "text-[#22C55E]"
                                      : "text-[#E9EDEF]",
                                  children:
                                    0 === w ? "FREE" : `\u20b9${w.toFixed(2)}`,
                                }),
                              ],
                            }),
                            (0, St.jsxs)("div", {
                              className:
                                "flex justify-between text-sm text-[#8696A0]",
                              children: [
                                (0, St.jsx)("span", {
                                  children: "GST (5% on items)",
                                }),
                                (0, St.jsxs)("span", {
                                  className: "text-[#E9EDEF]",
                                  children: ["\u20b9", x.toFixed(2)],
                                }),
                              ],
                            }),
                            (0, St.jsxs)("div", {
                              className:
                                "border-t border-[#2A3942] pt-3 flex justify-between items-center",
                              children: [
                                (0, St.jsx)("span", {
                                  className:
                                    "text-lg text-[#E9EDEF] font-semibold",
                                  children: "Grand Total",
                                }),
                                (0, St.jsxs)("span", {
                                  className:
                                    "text-2xl font-bold text-[#25D366]",
                                  "data-testid": "checkout-total-amount",
                                  children: ["\u20b9", E.toFixed(2)],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, St.jsxs)("div", {
                      className:
                        "bg-[#202C33] rounded-xl p-6 border border-[#2A3942]",
                      children: [
                        (0, St.jsx)("h2", {
                          className:
                            "text-xl font-semibold text-[#E9EDEF] mb-4 font-['Outfit']",
                          children: "Payment Method",
                        }),
                        (0, St.jsxs)(Ii, {
                          value: u,
                          onValueChange: d,
                          children: [
                            (0, St.jsxs)("div", {
                              className:
                                "flex items-center space-x-3 p-4 bg-[#111B21] rounded-lg border border-[#2A3942] mb-3 cursor-pointer hover:border-[#25D366]/50 transition-colors",
                              "data-testid": "cod-payment-option",
                              children: [
                                (0, St.jsx)($i, {
                                  value: "COD",
                                  id: "cod",
                                  className: "border-[#8696A0] text-[#25D366]",
                                }),
                                (0, St.jsxs)(El, {
                                  htmlFor: "cod",
                                  className:
                                    "flex items-center gap-3 cursor-pointer flex-1",
                                  children: [
                                    (0, St.jsx)(Pa, {
                                      className: "w-5 h-5 text-[#E9EDEF]",
                                    }),
                                    (0, St.jsxs)("div", {
                                      children: [
                                        (0, St.jsx)("p", {
                                          className:
                                            "text-[#E9EDEF] font-medium",
                                          children: "Cash on Delivery",
                                        }),
                                        (0, St.jsx)("p", {
                                          className: "text-xs text-[#8696A0]",
                                          children:
                                            "Pay \u20b9100 token now, rest on delivery",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, St.jsxs)("div", {
                              className:
                                "flex items-center space-x-3 p-4 bg-[#111B21] rounded-lg border border-[#2A3942] cursor-pointer hover:border-[#25D366]/50 transition-colors",
                              "data-testid": "online-payment-option",
                              children: [
                                (0, St.jsx)($i, {
                                  value: "ONLINE",
                                  id: "online",
                                  className: "border-[#8696A0] text-[#25D366]",
                                }),
                                (0, St.jsxs)(El, {
                                  htmlFor: "online",
                                  className:
                                    "flex items-center gap-3 cursor-pointer flex-1",
                                  children: [
                                    (0, St.jsx)(Ta, {
                                      className: "w-5 h-5 text-[#E9EDEF]",
                                    }),
                                    (0, St.jsxs)("div", {
                                      children: [
                                        (0, St.jsx)("p", {
                                          className:
                                            "text-[#E9EDEF] font-medium",
                                          children: "Online Payment",
                                        }),
                                        (0, St.jsx)("p", {
                                          className: "text-xs text-[#8696A0]",
                                          children:
                                            "Pay full amount via Razorpay",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, St.jsx)("div", {
                className:
                  "fixed bottom-0 left-0 right-0 bg-[#202C33] border-t border-[#2A3942] p-4 z-50",
                children: (0, St.jsx)("div", {
                  className: "max-w-2xl mx-auto",
                  children: (0, St.jsx)("button", {
                    onClick: j,
                    type: "submit",
                    disabled: l,
                    className:
                      "w-full bg-[#25D366] hover:bg-[#1DA851] text-white font-bold rounded-full py-3 transition-all shadow-lg active:scale-95 text-lg disabled:opacity-50 disabled:cursor-not-allowed",
                    "data-testid": "confirm-order-button",
                    children: l
                      ? "Processing..."
                      : "COD" === u
                        ? `Pay \u20b9${Eu} Token`
                        : `Pay \u20b9${E.toFixed(2)}`,
                  }),
                }),
              }),
              (0, St.jsx)(Jc, {
                open: g,
                onOpenChange: b,
                children: (0, St.jsxs)(eu, {
                  className: "bg-[#202C33] border-[#2A3942] text-[#E9EDEF]",
                  children: [
                    (0, St.jsx)(tu, {
                      children: (0, St.jsx)(nu, {
                        className: "text-2xl font-bold text-[#E9EDEF]",
                        children: "COD Token Payment",
                      }),
                    }),
                    (0, St.jsxs)("div", {
                      className: "py-4",
                      children: [
                        (0, St.jsxs)("div", {
                          className:
                            "bg-[#111B21] rounded-lg p-4 mb-4 border border-[#25D366]",
                          children: [
                            (0, St.jsxs)("p", {
                              className: "text-[#E9EDEF] mb-2",
                              children: [
                                "You need to pay",
                                " ",
                                (0, St.jsxs)("span", {
                                  className: "text-[#25D366] font-bold text-xl",
                                  children: ["\u20b9", Eu],
                                }),
                                " ",
                                "token amount to confirm your order as COD.",
                              ],
                            }),
                            (0, St.jsxs)("p", {
                              className: "text-sm text-[#8696A0]",
                              children: [
                                "Remaining amount (\u20b9",
                                (E - Eu).toFixed(2),
                                ") will be collected on delivery.",
                              ],
                            }),
                          ],
                        }),
                        (0, St.jsx)("button", {
                          onClick: async () => {
                            try {
                              (i(!0), console.log("STEP 1"));
                              const e = await ma.post(
                                `${yu}/api/razorpay/create-order`,
                                { amount: 100 * Eu },
                              );
                              (console.log("STEP 2"),
                                console.log("ORDER RESPONSE:", e.data));
                              const {
                                  id: t,
                                  amount: n,
                                  currency: r,
                                  key_id: a,
                                } = e.data,
                                o = {
                                  key: a,
                                  amount: n,
                                  currency: r,
                                  name: "Mr. Mutton",
                                  description: "COD Token Payment",
                                  order_id: t,
                                  handler: async (e) => {
                                    try {
                                      await S(
                                        "COD",
                                        {
                                          razorpay_order_id:
                                            e.razorpay_order_id,
                                          razorpay_payment_id:
                                            e.razorpay_payment_id,
                                          razorpay_signature:
                                            e.razorpay_signature,
                                        },
                                        !0,
                                      );
                                    } catch (t) {
                                      (console.error(
                                        "Order creation after token payment failed:",
                                        t,
                                      ),
                                        Ht.error(
                                          "Token payment successful but order creation failed. Please contact support.",
                                        ));
                                    }
                                  },
                                  prefill: {
                                    name: s.customer_name,
                                    contact: s.customer_phone,
                                  },
                                  theme: { color: "#25D366" },
                                },
                                l = new window.Razorpay(o);
                              (l.open(),
                                l.on("payment.failed", function (e) {
                                  (console.error("RAZORPAY ERROR:", e.error),
                                    Ht.error(e.error.description),
                                    i(!1));
                                }),
                                b(!1));
                            } catch (e) {
                              (console.error(
                                "Token payment initialization failed:",
                                e,
                              ),
                                Ht.error(
                                  "Failed to initialize token payment. Please try again.",
                                ),
                                i(!1));
                            }
                          },
                          disabled: l,
                          className:
                            "w-full bg-[#25D366] hover:bg-[#1DA851] text-white font-bold rounded-full py-3 transition-all shadow-lg active:scale-95 disabled:opacity-50",
                          "data-testid": "pay-token-button",
                          children: l
                            ? "Processing..."
                            : `Continue to Pay \u20b9${Eu}`,
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
    },
    ju = xa("circle-check-big", [
      ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
      ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
    ]),
    Cu = xa("house", [
      [
        "path",
        { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" },
      ],
      [
        "path",
        {
          d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
          key: "1d0kgt",
        },
      ],
    ]),
    Ru = () => {
      var e;
      const t = de(),
        n = me(),
        r = null === (e = t.state) || void 0 === e ? void 0 : e.order;
      return r
        ? (0, St.jsx)("div", {
            className:
              "min-h-screen bg-[#0B141A] flex items-center justify-center p-4",
            children: (0, St.jsx)("div", {
              className: "max-w-md w-full",
              children: (0, St.jsxs)("div", {
                className:
                  "bg-[#202C33] rounded-xl p-8 border border-[#2A3942] text-center",
                children: [
                  (0, St.jsx)("div", {
                    className: "flex justify-center mb-6",
                    children: (0, St.jsx)("div", {
                      className: "bg-[#25D366]/20 rounded-full p-4",
                      children: (0, St.jsx)(ju, {
                        className: "w-16 h-16 text-[#25D366]",
                      }),
                    }),
                  }),
                  (0, St.jsx)("h1", {
                    className:
                      "text-3xl font-bold text-[#E9EDEF] mb-3 font-['Outfit']",
                    "data-testid": "success-title",
                    children: "Order Confirmed!",
                  }),
                  (0, St.jsx)("p", {
                    className: "text-[#8696A0] mb-6",
                    children:
                      "Your order has been placed successfully. We'll notify you on WhatsApp with the order details.",
                  }),
                  (0, St.jsxs)("div", {
                    className: "bg-[#111B21] rounded-lg p-4 mb-6 text-left",
                    children: [
                      (0, St.jsxs)("div", {
                        className: "mb-3",
                        children: [
                          (0, St.jsx)("p", {
                            className: "text-sm text-[#8696A0]",
                            children: "Order ID",
                          }),
                          (0, St.jsx)("p", {
                            className: "text-[#E9EDEF] font-mono text-sm",
                            "data-testid": "order-id",
                            children: r.id,
                          }),
                        ],
                      }),
                      (0, St.jsxs)("div", {
                        className: "mb-3",
                        children: [
                          (0, St.jsx)("p", {
                            className: "text-sm text-[#8696A0]",
                            children: "Payment Method",
                          }),
                          (0, St.jsx)("p", {
                            className: "text-[#E9EDEF]",
                            "data-testid": "payment-method",
                            children: r.payment_method,
                          }),
                        ],
                      }),
                      (0, St.jsxs)("div", {
                        className: "mb-3",
                        children: [
                          (0, St.jsx)("p", {
                            className: "text-sm text-[#8696A0]",
                            children: "Payment Status",
                          }),
                          (0, St.jsx)("p", {
                            className: "text-[#25D366]",
                            "data-testid": "payment-status",
                            children: r.payment_status,
                          }),
                        ],
                      }),
                      (0, St.jsxs)("div", {
                        children: [
                          (0, St.jsx)("p", {
                            className: "text-sm text-[#8696A0]",
                            children: "Total Amount",
                          }),
                          (0, St.jsxs)("p", {
                            className: "text-2xl font-bold text-[#E9EDEF]",
                            "data-testid": "order-total",
                            children: ["\u20b9", r.total_amount.toFixed(2)],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, St.jsxs)("div", {
                    className: "bg-[#111B21] rounded-lg p-4 mb-6 text-left",
                    children: [
                      (0, St.jsx)("p", {
                        className: "text-sm text-[#8696A0] mb-3",
                        children: "Items Ordered",
                      }),
                      (0, St.jsx)("div", {
                        className: "space-y-2",
                        children: r.items.map((e, t) =>
                          (0, St.jsxs)(
                            "div",
                            {
                              className: "mb-2 text-sm",
                              children: [
                                (0, St.jsxs)("div", {
                                  className: "flex justify-between",
                                  children: [
                                    (0, St.jsxs)("span", {
                                      className: "text-[#E9EDEF]",
                                      children: [e.name, " x", e.quantity],
                                    }),
                                    (0, St.jsxs)("span", {
                                      className: "text-[#E9EDEF]",
                                      children: [
                                        "\u20b9",
                                        (e.price * e.quantity).toFixed(2),
                                      ],
                                    }),
                                  ],
                                }),
                                e.addons &&
                                  e.addons.length > 0 &&
                                  (0, St.jsx)("div", {
                                    className:
                                      "ml-4 mt-1 text-xs text-[#8696A0]",
                                    children: e.addons.map((e, t) =>
                                      (0, St.jsxs)(
                                        "div",
                                        {
                                          children: [
                                            "\u2022 ",
                                            e.name,
                                            " (+\u20b9",
                                            e.price,
                                            ")",
                                          ],
                                        },
                                        t,
                                      ),
                                    ),
                                  }),
                              ],
                            },
                            t,
                          ),
                        ),
                      }),
                    ],
                  }),
                  (0, St.jsxs)("div", {
                    className: "bg-[#111B21] rounded-lg p-4 mb-6 text-left",
                    children: [
                      (0, St.jsx)("p", {
                        className: "text-sm text-[#8696A0] mb-2",
                        children: "Delivery Address",
                      }),
                      (0, St.jsx)("p", {
                        className: "text-[#E9EDEF] text-sm",
                        children: r.customer_name,
                      }),
                      (0, St.jsx)("p", {
                        className: "text-[#E9EDEF] text-sm",
                        children: r.customer_phone,
                      }),
                      (0, St.jsx)("p", {
                        className: "text-[#8696A0] text-sm mt-2",
                        children: r.customer_address,
                      }),
                    ],
                  }),
                  (0, St.jsxs)("div", {
                    className: "space-y-3",
                    children: [
                      (0, St.jsxs)("button", {
                        onClick: () => {
                          const e = encodeURIComponent(
                            `Hey, I have ordered from Mr. Mutton! Order ID: ${r.id}`,
                          );
                          window.open(
                            `https://wa.me/919220829266?text=${e}`,
                            "_blank",
                          );
                        },
                        className:
                          "w-full bg-[#25D366] hover:bg-[#1DA851] text-white font-bold rounded-full py-3 transition-all shadow-lg active:scale-95 text-lg flex items-center justify-center gap-2",
                        "data-testid": "chat-whatsapp-button",
                        children: [
                          (0, St.jsx)("svg", {
                            className: "w-5 h-5",
                            fill: "currentColor",
                            viewBox: "0 0 24 24",
                            children: (0, St.jsx)("path", {
                              d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z\\",
                            }),
                          }),
                          "Chat on WhatsApp",
                        ],
                      }),
                      (0, St.jsxs)("button", {
                        onClick: () => n("/"),
                        className:
                          "w-full bg-[#2A3942] hover:bg-[#3A4952] text-[#E9EDEF] font-medium rounded-full py-3 transition-all shadow-lg active:scale-95 text-lg flex items-center justify-center gap-2",
                        "data-testid": "back-to-home-button",
                        children: [
                          (0, St.jsx)(Cu, { className: "w-5 h-5" }),
                          "Back to Catalogue",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          })
        : (n("/"), null);
    },
    _u = xa("refresh-cw", [
      [
        "path",
        {
          d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
          key: "v9h5vc",
        },
      ],
      ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
      [
        "path",
        {
          d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
          key: "3uifl3",
        },
      ],
      ["path", { d: "M8 16H3v5", key: "1cv678" }],
    ]),
    Au = xa("package", [
      [
        "path",
        {
          d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
          key: "1a0edw",
        },
      ],
      ["path", { d: "M12 22V12", key: "d0xqtd" }],
      ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
      ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }],
    ]),
    Du = xa("user", [
      [
        "path",
        { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" },
      ],
      ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
    ]),
    Pu = xa("phone", [
      [
        "path",
        {
          d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
          key: "foiqr5",
        },
      ],
    ]),
    Tu = xa("calendar", [
      ["path", { d: "M8 2v4", key: "1cmpym" }],
      ["path", { d: "M16 2v4", key: "4m81vk" }],
      [
        "rect",
        { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" },
      ],
      ["path", { d: "M3 10h18", key: "8toen8" }],
    ]),
    Ou = () => {
      const [e, t] = (0, a.useState)([]),
        [n, r] = (0, a.useState)(!0),
        [o, l] = (0, a.useState)("all");
      (0, a.useEffect)(() => {
        i();
      }, []);
      const i = async () => {
          try {
            r(!0);
            const e = (
              await ma.get("https://api.mrmutton.com/orders")
            ).data.sort(
              (e, t) => new Date(t.created_at) - new Date(e.created_at),
            );
            t(e);
          } catch (e) {
            console.error("Failed to fetch orders:", e);
          } finally {
            r(!1);
          }
        },
        s = e.filter(
          (e) =>
            "all" === o ||
            ("cod" === o
              ? "COD" === e.payment_method
              : "online" !== o || "ONLINE" === e.payment_method),
        ),
        c = s.reduce((e, t) => e + t.total_amount, 0),
        u = e.filter((e) => "COD" === e.payment_method).length,
        d = e.filter((e) => "ONLINE" === e.payment_method).length;
      return n
        ? (0, St.jsx)("div", {
            className:
              "min-h-screen bg-[#0B141A] flex items-center justify-center",
            children: (0, St.jsx)("div", {
              className: "text-[#E9EDEF] text-xl",
              children: "Loading orders...",
            }),
          })
        : (0, St.jsxs)("div", {
            className: "min-h-screen bg-[#0B141A] pb-8",
            children: [
              (0, St.jsx)("header", {
                className:
                  "sticky top-0 z-40 backdrop-blur-lg bg-[#0B141A]/80 border-b border-[#2A3942]",
                children: (0, St.jsxs)("div", {
                  className: "max-w-7xl mx-auto px-4 py-6",
                  children: [
                    (0, St.jsxs)("div", {
                      className: "flex items-center justify-between mb-4",
                      children: [
                        (0, St.jsx)("h1", {
                          className:
                            "text-3xl font-bold text-[#E9EDEF] font-['Outfit']",
                          children: "\ud83d\udce6 Orders Dashboard",
                        }),
                        (0, St.jsxs)("button", {
                          onClick: i,
                          className:
                            "bg-[#25D366] hover:bg-[#1DA851] text-white font-medium rounded-full px-4 py-2 transition-all flex items-center gap-2",
                          children: [
                            (0, St.jsx)(_u, { className: "w-4 h-4" }),
                            "Refresh",
                          ],
                        }),
                      ],
                    }),
                    (0, St.jsxs)("div", {
                      className: "grid grid-cols-1 md:grid-cols-4 gap-4",
                      children: [
                        (0, St.jsxs)("div", {
                          className:
                            "bg-[#202C33] rounded-lg p-4 border border-[#2A3942]",
                          children: [
                            (0, St.jsx)("p", {
                              className: "text-[#8696A0] text-sm mb-1",
                              children: "Total Orders",
                            }),
                            (0, St.jsx)("p", {
                              className: "text-2xl font-bold text-[#E9EDEF]",
                              children: e.length,
                            }),
                          ],
                        }),
                        (0, St.jsxs)("div", {
                          className:
                            "bg-[#202C33] rounded-lg p-4 border border-[#2A3942]",
                          children: [
                            (0, St.jsx)("p", {
                              className: "text-[#8696A0] text-sm mb-1",
                              children: "Total Revenue",
                            }),
                            (0, St.jsxs)("p", {
                              className: "text-2xl font-bold text-[#25D366]",
                              children: ["\u20b9", c.toFixed(2)],
                            }),
                          ],
                        }),
                        (0, St.jsxs)("div", {
                          className:
                            "bg-[#202C33] rounded-lg p-4 border border-[#2A3942]",
                          children: [
                            (0, St.jsx)("p", {
                              className: "text-[#8696A0] text-sm mb-1",
                              children: "COD Orders",
                            }),
                            (0, St.jsx)("p", {
                              className: "text-2xl font-bold text-[#E9EDEF]",
                              children: u,
                            }),
                          ],
                        }),
                        (0, St.jsxs)("div", {
                          className:
                            "bg-[#202C33] rounded-lg p-4 border border-[#2A3942]",
                          children: [
                            (0, St.jsx)("p", {
                              className: "text-[#8696A0] text-sm mb-1",
                              children: "Online Payments",
                            }),
                            (0, St.jsx)("p", {
                              className: "text-2xl font-bold text-[#E9EDEF]",
                              children: d,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, St.jsxs)("div", {
                      className: "flex gap-3 mt-4",
                      children: [
                        (0, St.jsxs)("button", {
                          onClick: () => l("all"),
                          className:
                            "px-4 py-2 rounded-full font-medium transition-all " +
                            ("all" === o
                              ? "bg-[#25D366] text-white"
                              : "bg-[#202C33] text-[#8696A0] hover:bg-[#2A3942]"),
                          children: ["All (", e.length, ")"],
                        }),
                        (0, St.jsxs)("button", {
                          onClick: () => l("cod"),
                          className:
                            "px-4 py-2 rounded-full font-medium transition-all " +
                            ("cod" === o
                              ? "bg-[#25D366] text-white"
                              : "bg-[#202C33] text-[#8696A0] hover:bg-[#2A3942]"),
                          children: ["COD (", u, ")"],
                        }),
                        (0, St.jsxs)("button", {
                          onClick: () => l("online"),
                          className:
                            "px-4 py-2 rounded-full font-medium transition-all " +
                            ("online" === o
                              ? "bg-[#25D366] text-white"
                              : "bg-[#202C33] text-[#8696A0] hover:bg-[#2A3942]"),
                          children: ["Online (", d, ")"],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, St.jsx)("div", {
                className: "max-w-7xl mx-auto px-4 py-8",
                children:
                  0 === s.length
                    ? (0, St.jsxs)("div", {
                        className:
                          "bg-[#202C33] rounded-xl p-12 text-center border border-[#2A3942]",
                        children: [
                          (0, St.jsx)(Au, {
                            className: "w-16 h-16 text-[#8696A0] mx-auto mb-4",
                          }),
                          (0, St.jsx)("h2", {
                            className: "text-xl font-bold text-[#E9EDEF] mb-2",
                            children: "No orders found",
                          }),
                          (0, St.jsx)("p", {
                            className: "text-[#8696A0]",
                            children:
                              "Orders will appear here once customers place them",
                          }),
                        ],
                      })
                    : (0, St.jsx)("div", {
                        className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                        children: s.map((e, t) =>
                          (0, St.jsxs)(
                            "div",
                            {
                              className:
                                "bg-[#202C33] rounded-xl p-6 border border-[#2A3942] hover:border-[#25D366]/50 transition-colors",
                              children: [
                                (0, St.jsxs)("div", {
                                  className:
                                    "flex items-start justify-between mb-4",
                                  children: [
                                    (0, St.jsxs)("div", {
                                      children: [
                                        (0, St.jsxs)("p", {
                                          className:
                                            "text-sm text-[#8696A0] mb-1",
                                          children: ["Order #", t + 1],
                                        }),
                                        (0, St.jsx)("p", {
                                          className:
                                            "text-xs text-[#8696A0] font-mono",
                                          children: e.id,
                                        }),
                                      ],
                                    }),
                                    (0, St.jsxs)("div", {
                                      className: "text-right",
                                      children: [
                                        (0, St.jsx)("span", {
                                          className:
                                            "px-3 py-1 rounded-full text-xs font-medium " +
                                            ("COD" === e.payment_method
                                              ? "bg-[#F59E0B]/20 text-[#F59E0B]"
                                              : "bg-[#25D366]/20 text-[#25D366]"),
                                          children: e.payment_method,
                                        }),
                                        (0, St.jsx)("p", {
                                          className:
                                            "text-sm text-[#8696A0] mt-2",
                                          children: e.payment_status,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, St.jsxs)("div", {
                                  className: "bg-[#111B21] rounded-lg p-4 mb-4",
                                  children: [
                                    (0, St.jsxs)("div", {
                                      className: "flex items-center gap-2 mb-2",
                                      children: [
                                        (0, St.jsx)(Du, {
                                          className: "w-4 h-4 text-[#8696A0]",
                                        }),
                                        (0, St.jsx)("span", {
                                          className:
                                            "text-[#E9EDEF] font-medium",
                                          children: e.customer_name,
                                        }),
                                      ],
                                    }),
                                    (0, St.jsxs)("div", {
                                      className: "flex items-center gap-2 mb-2",
                                      children: [
                                        (0, St.jsx)(Pu, {
                                          className: "w-4 h-4 text-[#8696A0]",
                                        }),
                                        (0, St.jsx)("span", {
                                          className: "text-[#8696A0] text-sm",
                                          children: e.customer_phone,
                                        }),
                                      ],
                                    }),
                                    (0, St.jsxs)("div", {
                                      className: "flex items-start gap-2",
                                      children: [
                                        (0, St.jsx)(ru, {
                                          className:
                                            "w-4 h-4 text-[#8696A0] mt-0.5",
                                        }),
                                        (0, St.jsx)("span", {
                                          className: "text-[#8696A0] text-sm",
                                          children: e.customer_address,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, St.jsxs)("div", {
                                  className: "mb-4",
                                  children: [
                                    (0, St.jsx)("p", {
                                      className: "text-sm text-[#8696A0] mb-2",
                                      children: "Items:",
                                    }),
                                    (0, St.jsx)("div", {
                                      className: "space-y-2",
                                      children: e.items.map((e, t) =>
                                        (0, St.jsxs)(
                                          "div",
                                          {
                                            className:
                                              "flex items-center justify-between text-sm bg-[#111B21] rounded-lg p-3",
                                            children: [
                                              (0, St.jsxs)("div", {
                                                className:
                                                  "flex items-center gap-3",
                                                children: [
                                                  (0, St.jsx)("img", {
                                                    src: e.image,
                                                    alt: e.name,
                                                    className:
                                                      "w-12 h-12 object-cover rounded-lg ring-1 ring-white/10",
                                                  }),
                                                  (0, St.jsxs)("div", {
                                                    children: [
                                                      (0, St.jsx)("p", {
                                                        className:
                                                          "text-[#E9EDEF] font-medium",
                                                        children: e.name,
                                                      }),
                                                      (0, St.jsxs)("p", {
                                                        className:
                                                          "text-[#8696A0] text-xs",
                                                        children: [
                                                          "Qty: ",
                                                          e.quantity,
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              (0, St.jsxs)("span", {
                                                className:
                                                  "text-[#E9EDEF] font-medium",
                                                children: [
                                                  "\u20b9",
                                                  (
                                                    e.price * e.quantity
                                                  ).toFixed(2),
                                                ],
                                              }),
                                            ],
                                          },
                                          t,
                                        ),
                                      ),
                                    }),
                                  ],
                                }),
                                (0, St.jsxs)("div", {
                                  className:
                                    "border-t border-[#2A3942] pt-4 flex items-center justify-between",
                                  children: [
                                    (0, St.jsxs)("div", {
                                      className:
                                        "flex items-center gap-2 text-[#8696A0] text-sm",
                                      children: [
                                        (0, St.jsx)(Tu, {
                                          className: "w-4 h-4",
                                        }),
                                        new Date(e.created_at).toLocaleString(
                                          "en-IN",
                                          {
                                            dateStyle: "medium",
                                            timeStyle: "short",
                                          },
                                        ),
                                      ],
                                    }),
                                    (0, St.jsxs)("div", {
                                      className: "text-right",
                                      children: [
                                        (0, St.jsx)("p", {
                                          className:
                                            "text-sm text-[#8696A0] mb-1",
                                          children: "Total Amount",
                                        }),
                                        (0, St.jsxs)("p", {
                                          className:
                                            "text-2xl font-bold text-[#25D366]",
                                          children: [
                                            "\u20b9",
                                            e.total_amount.toFixed(2),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            },
                            e.id,
                          ),
                        ),
                      }),
              }),
            ],
          });
    };
  const Fu = function () {
    return (0, St.jsx)(Rt, {
      children: (0, St.jsxs)("div", {
        className: "App dark",
        children: [
          (0, St.jsx)(gt, {
            children: (0, St.jsxs)(Le, {
              children: [
                (0, St.jsx)(Oe, { path: "/", element: (0, St.jsx)(_a, {}) }),
                (0, St.jsx)(Oe, {
                  path: "/cart",
                  element: (0, St.jsx)(Da, {}),
                }),
                (0, St.jsx)(Oe, {
                  path: "/checkout",
                  element: (0, St.jsx)(Su, {}),
                }),
                (0, St.jsx)(Oe, {
                  path: "/order-success",
                  element: (0, St.jsx)(Ru, {}),
                }),
                (0, St.jsx)(Oe, {
                  path: "/admin/orders",
                  element: (0, St.jsx)(Ou, {}),
                }),
              ],
            }),
          }),
          (0, St.jsx)(Zt, { position: "top-center", richColors: !0 }),
        ],
      }),
    });
  };
  l.createRoot(document.getElementById("root")).render(
    (0, St.jsx)(a.StrictMode, { children: (0, St.jsx)(Fu, {}) }),
  );
})();
//# sourceMappingURL=main.e1a904c6.js.map
