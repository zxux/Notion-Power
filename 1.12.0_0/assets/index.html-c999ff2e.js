var d8 = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
import {
  r as h,
  h as We,
  a as x,
  I as Sx,
  u as h8,
  k as v8,
  m as p8,
  n as Vt,
  p as m8,
  q as we,
  s as It,
  t as lr,
  v as Vo,
  x as vs,
  y as wr,
  z as ge,
  A as ps,
  j as se,
  D as xd,
  E as Qe,
  G as Td,
  J as Ex,
  K as Sn,
  L as xx,
  M as g8,
  N as Tx,
  O as Cx,
  P as y8,
  Q as Ox,
  S as Jv,
  T as b8,
  F as _l,
  U as $8,
  V as w8,
  W as nt,
  X as Ru,
  Y as S8,
  Z as E8,
  b as Pl,
  c as Il,
  $ as x8,
  a0 as ur,
  a1 as _x,
  a2 as T8,
  a3 as Px,
  a4 as Cd,
  a5 as C8,
  _ as O8,
  a6 as _8,
  a7 as P8,
  a8 as Ix,
  a9 as ue,
  aa as ms,
  ab as I8,
  ac as A8,
  R as Ge,
  ad as R8,
  B as Al,
  ae as Ax,
  af as M8,
  ag as Zy,
  l as D8,
  i as mn,
  o as Jy,
  H as Ue,
  d as N8,
  ah as Qc,
  C as k8,
  g as L8,
} from "./logo-768391b8.js";
import { g as Rx, r as gs, l as Mx, j as F8, k as j8, L as B8, s as En, e as Rl, T as ec, F as si, m as Qy, S as U8, i as W8, h as Od, n as H8 } from "./const-0b68ee57.js";
var $Ee = d8((Me, De) => {
  const Dx = (1 / 60) * 1e3,
    z8 = typeof performance < "u" ? () => performance.now() : () => Date.now(),
    Nx = typeof window < "u" ? (e) => window.requestAnimationFrame(e) : (e) => setTimeout(() => e(z8()), Dx);
  function V8(e) {
    let t = [],
      r = [],
      n = 0,
      a = !1,
      o = !1;
    const i = new WeakSet(),
      s = {
        schedule: (c, l = !1, u = !1) => {
          const f = u && a,
            d = f ? t : r;
          return l && i.add(c), d.indexOf(c) === -1 && (d.push(c), f && a && (n = t.length)), c;
        },
        cancel: (c) => {
          const l = r.indexOf(c);
          l !== -1 && r.splice(l, 1), i.delete(c);
        },
        process: (c) => {
          if (a) {
            o = !0;
            return;
          }
          if (((a = !0), ([t, r] = [r, t]), (r.length = 0), (n = t.length), n))
            for (let l = 0; l < n; l++) {
              const u = t[l];
              u(c), i.has(u) && (s.schedule(u), e());
            }
          (a = !1), o && ((o = !1), s.process(c));
        },
      };
    return s;
  }
  const G8 = 40;
  let Qv = !0,
    Vi = !1,
    ep = !1;
  const bo = { delta: 0, timestamp: 0 },
    ys = ["read", "update", "preRender", "render", "postRender"],
    Mu = ys.reduce((e, t) => ((e[t] = V8(() => (Vi = !0))), e), {}),
    Y8 = ys.reduce((e, t) => {
      const r = Mu[t];
      return (e[t] = (n, a = !1, o = !1) => (Vi || X8(), r.schedule(n, a, o))), e;
    }, {}),
    K8 = ys.reduce((e, t) => ((e[t] = Mu[t].cancel), e), {});
  ys.reduce((e, t) => ((e[t] = () => Mu[t].process(bo)), e), {});
  const q8 = (e) => Mu[e].process(bo),
    kx = (e) => {
      (Vi = !1), (bo.delta = Qv ? Dx : Math.max(Math.min(e - bo.timestamp, G8), 1)), (bo.timestamp = e), (ep = !0), ys.forEach(q8), (ep = !1), Vi && ((Qv = !1), Nx(kx));
    },
    X8 = () => {
      (Vi = !0), (Qv = !0), ep || Nx(kx);
    },
    eb = () => bo;
  function Z8(e) {
    const t = Object.assign({}, e);
    for (let r in t) t[r] === void 0 && delete t[r];
    return t;
  }
  function J8(e) {
    const { viewBox: t = "0 0 24 24", d: r, displayName: n, defaultProps: a = {} } = e,
      o = h.Children.toArray(e.path),
      i = We((s, c) => x(Sx, { ref: c, viewBox: t, ...a, ...s, children: o.length ? o : x("path", { fill: "currentColor", d: r }) }));
    return (i.displayName = n), i;
  }
  function Q8(e) {
    const { theme: t } = h8(),
      r = v8();
    return h.useMemo(() => p8(t.direction, { ...r, ...e }), [e, t.direction, r]);
  }
  function eA(e) {
    const { value: t, defaultValue: r, onChange: n, shouldUpdate: a = (d, v) => d !== v } = e,
      o = Vt(n),
      i = Vt(a),
      [s, c] = h.useState(r),
      l = t !== void 0,
      u = l ? t : s,
      f = Vt(
        (d) => {
          const p = typeof d == "function" ? d(u) : d;
          i(u, p) && (l || c(p), o(p));
        },
        [l, o, u, i]
      );
    return [u, f];
  }
  function tA(e) {
    return h.Children.toArray(e).filter((t) => h.isValidElement(t));
  }
  var [rA, nA] = m8("Card"),
    Ha = We(function (t, r) {
      const { className: n, ...a } = t,
        o = nA();
      return x(we.div, { ref: r, className: It("chakra-card__body", n), __css: o.body, ...a });
    }),
    za = We(function (t, r) {
      const { className: n, children: a, direction: o = "column", justify: i, align: s, ...c } = lr(t),
        l = Vo("Card", t);
      return x(we.div, {
        ref: r,
        className: It("chakra-card", n),
        __css: { display: "flex", flexDirection: o, justifyContent: i, alignItems: s, position: "relative", minWidth: 0, wordWrap: "break-word", ...l.container },
        ...c,
        children: x(rA, { value: l, children: a }),
      });
    }),
    [aA, Lx] = vs({ name: "FormControlStylesContext", errorMessage: `useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" ` }),
    [oA, Go] = vs({ strict: !1, name: "FormControlContext" });
  function iA(e) {
    const { id: t, isRequired: r, isInvalid: n, isDisabled: a, isReadOnly: o, ...i } = e,
      s = h.useId(),
      c = t || `field-${s}`,
      l = `${c}-label`,
      u = `${c}-feedback`,
      f = `${c}-helptext`,
      [d, v] = h.useState(!1),
      [p, m] = h.useState(!1),
      [g, y] = h.useState(!1),
      b = h.useCallback(
        (M = {}, T = null) => ({
          id: f,
          ...M,
          ref: wr(T, (F) => {
            F && m(!0);
          }),
        }),
        [f]
      ),
      $ = h.useCallback(
        (M = {}, T = null) => ({
          ...M,
          ref: T,
          "data-focus": ge(g),
          "data-disabled": ge(a),
          "data-invalid": ge(n),
          "data-readonly": ge(o),
          id: M.id !== void 0 ? M.id : l,
          htmlFor: M.htmlFor !== void 0 ? M.htmlFor : c,
        }),
        [c, a, g, n, o, l]
      ),
      S = h.useCallback(
        (M = {}, T = null) => ({
          id: u,
          ...M,
          ref: wr(T, (F) => {
            F && v(!0);
          }),
          "aria-live": "polite",
        }),
        [u]
      ),
      A = h.useCallback((M = {}, T = null) => ({ ...M, ...i, ref: T, role: "group", "data-focus": ge(g), "data-disabled": ge(a), "data-invalid": ge(n), "data-readonly": ge(o) }), [i, a, g, n, o]),
      P = h.useCallback((M = {}, T = null) => ({ ...M, ref: T, role: "presentation", "aria-hidden": !0, children: M.children || "*" }), []);
    return {
      isRequired: !!r,
      isInvalid: !!n,
      isReadOnly: !!o,
      isDisabled: !!a,
      isFocused: !!g,
      onFocus: () => y(!0),
      onBlur: () => y(!1),
      hasFeedbackText: d,
      setHasFeedbackText: v,
      hasHelpText: p,
      setHasHelpText: m,
      id: c,
      labelId: l,
      feedbackId: u,
      helpTextId: f,
      htmlProps: i,
      getHelpTextProps: b,
      getErrorMessageProps: S,
      getRootProps: A,
      getLabelProps: $,
      getRequiredIndicatorProps: P,
    };
  }
  var Fx = We(function (t, r) {
    const n = Vo("Form", t),
      a = lr(t),
      { getRootProps: o, htmlProps: i, ...s } = iA(a),
      c = It("chakra-form-control", t.className);
    return x(oA, { value: s, children: x(aA, { value: n, children: x(we.div, { ...o({}, r), className: c, __css: n.container }) }) });
  });
  Fx.displayName = "FormControl";
  var sA = We(function (t, r) {
    const n = Go(),
      a = Lx(),
      o = It("chakra-form__helper-text", t.className);
    return x(we.div, { ...(n == null ? void 0 : n.getHelpTextProps(t, r)), __css: a.helperText, className: o });
  });
  sA.displayName = "FormHelperText";
  var [cA, lA] = vs({ name: "FormErrorStylesContext", errorMessage: `useFormErrorStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormError />" ` }),
    jx = We((e, t) => {
      const r = Vo("FormError", e),
        n = lr(e),
        a = Go();
      return a != null && a.isInvalid
        ? x(cA, {
            value: r,
            children: x(we.div, {
              ...(a == null ? void 0 : a.getErrorMessageProps(n, t)),
              className: It("chakra-form__error-message", e.className),
              __css: { display: "flex", alignItems: "center", ...r.text },
            }),
          })
        : null;
    });
  jx.displayName = "FormErrorMessage";
  var uA = We((e, t) => {
    const r = lA(),
      n = Go();
    if (!(n != null && n.isInvalid)) return null;
    const a = It("chakra-form__error-icon", e.className);
    return x(Sx, {
      ref: t,
      "aria-hidden": !0,
      ...e,
      __css: r.icon,
      className: a,
      children: x("path", {
        fill: "currentColor",
        d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z",
      }),
    });
  });
  uA.displayName = "FormErrorIcon";
  var Bx = We(function (t, r) {
    var n;
    const a = ps("FormLabel", t),
      o = lr(t),
      { className: i, children: s, requiredIndicator: c = x(Ux, {}), optionalIndicator: l = null, ...u } = o,
      f = Go(),
      d = (n = f == null ? void 0 : f.getLabelProps(u, r)) != null ? n : { ref: r, ...u };
    return se(we.label, { ...d, className: It("chakra-form__label", o.className), __css: { display: "block", textAlign: "start", ...a }, children: [s, f != null && f.isRequired ? c : l] });
  });
  Bx.displayName = "FormLabel";
  var Ux = We(function (t, r) {
    const n = Go(),
      a = Lx();
    if (!(n != null && n.isRequired)) return null;
    const o = It("chakra-form__required-indicator", t.className);
    return x(we.span, { ...(n == null ? void 0 : n.getRequiredIndicatorProps(t, r)), __css: a.requiredIndicator, className: o });
  });
  Ux.displayName = "RequiredIndicator";
  function fA(e) {
    const { isDisabled: t, isInvalid: r, isReadOnly: n, isRequired: a, ...o } = Wx(e);
    return { ...o, disabled: t, readOnly: n, required: a, "aria-invalid": xd(r), "aria-required": xd(a), "aria-readonly": xd(n) };
  }
  function Wx(e) {
    var t, r, n;
    const a = Go(),
      { id: o, disabled: i, readOnly: s, required: c, isRequired: l, isInvalid: u, isReadOnly: f, isDisabled: d, onFocus: v, onBlur: p, ...m } = e,
      g = e["aria-describedby"] ? [e["aria-describedby"]] : [];
    return (
      a != null && a.hasFeedbackText && a != null && a.isInvalid && g.push(a.feedbackId),
      a != null && a.hasHelpText && g.push(a.helpTextId),
      {
        ...m,
        "aria-describedby": g.join(" ") || void 0,
        id: o ?? (a == null ? void 0 : a.id),
        isDisabled: (t = i ?? d) != null ? t : a == null ? void 0 : a.isDisabled,
        isReadOnly: (r = s ?? f) != null ? r : a == null ? void 0 : a.isReadOnly,
        isRequired: (n = c ?? l) != null ? n : a == null ? void 0 : a.isRequired,
        isInvalid: u ?? (a == null ? void 0 : a.isInvalid),
        onFocus: Qe(a == null ? void 0 : a.onFocus, v),
        onBlur: Qe(a == null ? void 0 : a.onBlur, p),
      }
    );
  }
  var dA = { border: "0", clip: "rect(0, 0, 0, 0)", height: "1px", width: "1px", margin: "-1px", padding: "0", overflow: "hidden", whiteSpace: "nowrap", position: "absolute" },
    hA = () => typeof document < "u",
    tb = !1,
    bs = null,
    sa = !1,
    tp = !1,
    rp = new Set();
  function ng(e, t) {
    rp.forEach((r) => r(e, t));
  }
  var vA = typeof window < "u" && window.navigator != null ? /^Mac/.test(window.navigator.platform) : !1;
  function pA(e) {
    return !(e.metaKey || (!vA && e.altKey) || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
  }
  function rb(e) {
    (sa = !0), pA(e) && ((bs = "keyboard"), ng("keyboard", e));
  }
  function Va(e) {
    if (((bs = "pointer"), e.type === "mousedown" || e.type === "pointerdown")) {
      sa = !0;
      const t = e.composedPath ? e.composedPath()[0] : e.target;
      let r = !1;
      try {
        r = t.matches(":focus-visible");
      } catch {}
      if (r) return;
      ng("pointer", e);
    }
  }
  function mA(e) {
    return e.mozInputSource === 0 && e.isTrusted ? !0 : e.detail === 0 && !e.pointerType;
  }
  function gA(e) {
    mA(e) && ((sa = !0), (bs = "virtual"));
  }
  function yA(e) {
    e.target === window || e.target === document || (!sa && !tp && ((bs = "virtual"), ng("virtual", e)), (sa = !1), (tp = !1));
  }
  function bA() {
    (sa = !1), (tp = !0);
  }
  function nb() {
    return bs !== "pointer";
  }
  function $A() {
    if (!hA() || tb) return;
    const { focus: e } = HTMLElement.prototype;
    (HTMLElement.prototype.focus = function (...r) {
      (sa = !0), e.apply(this, r);
    }),
      document.addEventListener("keydown", rb, !0),
      document.addEventListener("keyup", rb, !0),
      document.addEventListener("click", gA, !0),
      window.addEventListener("focus", yA, !0),
      window.addEventListener("blur", bA, !1),
      typeof PointerEvent < "u"
        ? (document.addEventListener("pointerdown", Va, !0), document.addEventListener("pointermove", Va, !0), document.addEventListener("pointerup", Va, !0))
        : (document.addEventListener("mousedown", Va, !0), document.addEventListener("mousemove", Va, !0), document.addEventListener("mouseup", Va, !0)),
      (tb = !0);
  }
  function wA(e) {
    $A(), e(nb());
    const t = () => e(nb());
    return (
      rp.add(t),
      () => {
        rp.delete(t);
      }
    );
  }
  function SA(e, t = []) {
    const r = Object.assign({}, e);
    for (const n of t) n in r && delete r[n];
    return r;
  }
  function EA(e = {}) {
    const t = Wx(e),
      { isDisabled: r, isReadOnly: n, isRequired: a, isInvalid: o, id: i, onBlur: s, onFocus: c, "aria-describedby": l } = t,
      { defaultChecked: u, isChecked: f, isFocusable: d, onChange: v, isIndeterminate: p, name: m, value: g, tabIndex: y = void 0, "aria-label": b, "aria-labelledby": $, "aria-invalid": S, ...A } = e,
      P = SA(A, ["isDisabled", "isReadOnly", "isRequired", "isInvalid", "id", "onBlur", "onFocus", "aria-describedby"]),
      M = Vt(v),
      T = Vt(s),
      F = Vt(c),
      [k, D] = h.useState(!1),
      [_, O] = h.useState(!1),
      [w, R] = h.useState(!1),
      [I, N] = h.useState(!1);
    h.useEffect(() => wA(D), []);
    const B = h.useRef(null),
      [W, C] = h.useState(!0),
      [E, V] = h.useState(!!u),
      X = f !== void 0,
      q = X ? f : E,
      K = h.useCallback(
        (Q) => {
          if (n || r) {
            Q.preventDefault();
            return;
          }
          X || V(q ? Q.target.checked : p ? !0 : Q.target.checked), M == null || M(Q);
        },
        [n, r, q, X, p, M]
      );
    Td(() => {
      B.current && (B.current.indeterminate = !!p);
    }, [p]),
      Ex(() => {
        r && O(!1);
      }, [r, O]),
      Td(() => {
        const Q = B.current;
        if (!(Q != null && Q.form)) return;
        const le = () => {
          V(!!u);
        };
        return (
          Q.form.addEventListener("reset", le),
          () => {
            var he;
            return (he = Q.form) == null ? void 0 : he.removeEventListener("reset", le);
          }
        );
      }, []);
    const te = r && !d,
      z = h.useCallback(
        (Q) => {
          Q.key === " " && N(!0);
        },
        [N]
      ),
      J = h.useCallback(
        (Q) => {
          Q.key === " " && N(!1);
        },
        [N]
      );
    Td(() => {
      if (!B.current) return;
      B.current.checked !== q && V(B.current.checked);
    }, [B.current]);
    const H = h.useCallback(
        (Q = {}, le = null) => {
          const he = ($e) => {
            _ && $e.preventDefault(), N(!0);
          };
          return {
            ...Q,
            ref: le,
            "data-active": ge(I),
            "data-hover": ge(w),
            "data-checked": ge(q),
            "data-focus": ge(_),
            "data-focus-visible": ge(_ && k),
            "data-indeterminate": ge(p),
            "data-disabled": ge(r),
            "data-invalid": ge(o),
            "data-readonly": ge(n),
            "aria-hidden": !0,
            onMouseDown: Qe(Q.onMouseDown, he),
            onMouseUp: Qe(Q.onMouseUp, () => N(!1)),
            onMouseEnter: Qe(Q.onMouseEnter, () => R(!0)),
            onMouseLeave: Qe(Q.onMouseLeave, () => R(!1)),
          };
        },
        [I, q, r, _, k, w, p, o, n]
      ),
      G = h.useCallback(
        (Q = {}, le = null) => ({
          ...Q,
          ref: le,
          "data-active": ge(I),
          "data-hover": ge(w),
          "data-checked": ge(q),
          "data-focus": ge(_),
          "data-focus-visible": ge(_ && k),
          "data-indeterminate": ge(p),
          "data-disabled": ge(r),
          "data-invalid": ge(o),
          "data-readonly": ge(n),
        }),
        [I, q, r, _, k, w, p, o, n]
      ),
      Y = h.useCallback(
        (Q = {}, le = null) => ({
          ...P,
          ...Q,
          ref: wr(le, (he) => {
            he && C(he.tagName === "LABEL");
          }),
          onClick: Qe(Q.onClick, () => {
            var he;
            W ||
              ((he = B.current) == null || he.click(),
              requestAnimationFrame(() => {
                var $e;
                ($e = B.current) == null || $e.focus({ preventScroll: !0 });
              }));
          }),
          "data-disabled": ge(r),
          "data-checked": ge(q),
          "data-invalid": ge(o),
        }),
        [P, r, q, o, W]
      ),
      L = h.useCallback(
        (Q = {}, le = null) => ({
          ...Q,
          ref: wr(B, le),
          type: "checkbox",
          name: m,
          value: g,
          id: i,
          tabIndex: y,
          onChange: Qe(Q.onChange, K),
          onBlur: Qe(Q.onBlur, T, () => O(!1)),
          onFocus: Qe(Q.onFocus, F, () => O(!0)),
          onKeyDown: Qe(Q.onKeyDown, z),
          onKeyUp: Qe(Q.onKeyUp, J),
          required: a,
          checked: q,
          disabled: te,
          readOnly: n,
          "aria-label": b,
          "aria-labelledby": $,
          "aria-invalid": S ? !!S : o,
          "aria-describedby": l,
          "aria-disabled": r,
          style: dA,
        }),
        [m, g, i, K, T, F, z, J, a, q, te, n, b, $, S, o, l, r, y]
      ),
      ne = h.useCallback((Q = {}, le = null) => ({ ...Q, ref: le, onMouseDown: Qe(Q.onMouseDown, xA), "data-disabled": ge(r), "data-checked": ge(q), "data-invalid": ge(o) }), [q, r, o]);
    return {
      state: { isInvalid: o, isFocused: _, isChecked: q, isActive: I, isHovered: w, isIndeterminate: p, isDisabled: r, isReadOnly: n, isRequired: a },
      getRootProps: Y,
      getCheckboxProps: H,
      getIndicatorProps: G,
      getInputProps: L,
      getLabelProps: ne,
      htmlProps: P,
    };
  }
  function xA(e) {
    e.preventDefault(), e.stopPropagation();
  }
  function TA(e) {
    const t = parseFloat(e);
    return typeof t != "number" || Number.isNaN(t) ? 0 : t;
  }
  function CA(e, t) {
    let r = TA(e);
    const n = 10 ** (t ?? 10);
    return (r = Math.round(r * n) / n), t ? r.toFixed(t) : r.toString();
  }
  function OA(e) {
    if (!Number.isFinite(e)) return 0;
    let t = 1,
      r = 0;
    for (; Math.round(e * t) / t !== e; ) (t *= 10), (r += 1);
    return r;
  }
  function ab(e, t, r) {
    return ((e - t) * 100) / (r - t);
  }
  function _A(e, t, r) {
    return (r - t) * e + t;
  }
  function ob(e, t, r) {
    const n = Math.round((e - t) / r) * r + t,
      a = OA(r);
    return CA(n, a);
  }
  function _d(e, t, r) {
    return e == null ? e : (r < t, Math.min(Math.max(e, t), r));
  }
  function Pd(e, t, r, n) {
    const a = Vt(r);
    return (
      h.useEffect(() => {
        const o = typeof e == "function" ? e() : e ?? document;
        if (!(!r || !o))
          return (
            o.addEventListener(t, a, n),
            () => {
              o.removeEventListener(t, a, n);
            }
          );
      }, [t, e, n, a, r]),
      () => {
        const o = typeof e == "function" ? e() : e ?? document;
        o == null || o.removeEventListener(t, a, n);
      }
    );
  }
  function Id(e, t) {
    return typeof e == "function" ? e(t) : e && (e.current = t), e;
  }
  function PA(e, t) {
    var r = h.useState(function () {
      return {
        value: e,
        callback: t,
        facade: {
          get current() {
            return r.value;
          },
          set current(n) {
            var a = r.value;
            a !== n && ((r.value = n), r.callback(n, a));
          },
        },
      };
    })[0];
    return (r.callback = t), r.facade;
  }
  var ib = new WeakMap();
  function IA(e, t) {
    var r = PA(t || null, function (n) {
      return e.forEach(function (a) {
        return Id(a, n);
      });
    });
    return (
      h.useLayoutEffect(
        function () {
          var n = ib.get(r);
          if (n) {
            var a = new Set(n),
              o = new Set(e),
              i = r.current;
            a.forEach(function (s) {
              o.has(s) || Id(s, null);
            }),
              o.forEach(function (s) {
                a.has(s) || Id(s, i);
              });
          }
          ib.set(r, e);
        },
        [e]
      ),
      r
    );
  }
  function AA(e) {
    return e;
  }
  function RA(e, t) {
    t === void 0 && (t = AA);
    var r = [],
      n = !1,
      a = {
        read: function () {
          if (n) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
          return r.length ? r[r.length - 1] : e;
        },
        useMedium: function (o) {
          var i = t(o, n);
          return (
            r.push(i),
            function () {
              r = r.filter(function (s) {
                return s !== i;
              });
            }
          );
        },
        assignSyncMedium: function (o) {
          for (n = !0; r.length; ) {
            var i = r;
            (r = []), i.forEach(o);
          }
          r = {
            push: function (s) {
              return o(s);
            },
            filter: function () {
              return r;
            },
          };
        },
        assignMedium: function (o) {
          n = !0;
          var i = [];
          if (r.length) {
            var s = r;
            (r = []), s.forEach(o), (i = r);
          }
          var c = function () {
              var u = i;
              (i = []), u.forEach(o);
            },
            l = function () {
              return Promise.resolve().then(c);
            };
          l(),
            (r = {
              push: function (u) {
                i.push(u), l();
              },
              filter: function (u) {
                return (i = i.filter(u)), r;
              },
            });
        },
      };
    return a;
  }
  function MA(e) {
    e === void 0 && (e = {});
    var t = RA(null);
    return (t.options = Sn({ async: !0, ssr: !1 }, e)), t;
  }
  var Hx = function (e) {
    var t = e.sideCar,
      r = xx(e, ["sideCar"]);
    if (!t) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
    var n = t.read();
    if (!n) throw new Error("Sidecar medium not found");
    return h.createElement(n, Sn({}, r));
  };
  Hx.isSideCarExport = !0;
  function DA(e, t) {
    return e.useMedium(t), Hx;
  }
  function NA(e) {
    return e != null && typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
  }
  function kA(e) {
    var t;
    if (!NA(e)) return !1;
    const r = (t = e.ownerDocument.defaultView) != null ? t : window;
    return e instanceof r.HTMLElement;
  }
  function LA(e) {
    const t = e.ownerDocument.defaultView || window,
      { overflow: r, overflowX: n, overflowY: a } = t.getComputedStyle(e);
    return /auto|scroll|overlay|hidden/.test(r + a + n);
  }
  function FA(e) {
    return e.localName === "html" ? e : e.assignedSlot || e.parentElement || e.ownerDocument.documentElement;
  }
  function zx(e) {
    return ["html", "body", "#document"].includes(e.localName) ? e.ownerDocument.body : kA(e) && LA(e) ? e : zx(FA(e));
  }
  var ag = We(function (t, r) {
    const { htmlSize: n, ...a } = t,
      o = Vo("Input", a),
      i = lr(a),
      s = fA(i),
      c = It("chakra-input", t.className);
    return x(we.input, { size: n, ...s, __css: o.field, ref: r, className: c });
  });
  ag.displayName = "Input";
  ag.id = "Input";
  function jA(e, t) {
    return Array.isArray(e) ? e.map((r) => (r === null ? null : t(r))) : g8(e) ? Object.keys(e).reduce((r, n) => ((r[n] = t(e[n])), r), {}) : e != null ? t(e) : null;
  }
  var _o = We(function (t, r) {
    const n = ps("Text", t),
      { className: a, align: o, decoration: i, casing: s, ...c } = lr(t),
      l = Z8({ textAlign: t.align, textDecoration: t.decoration, textTransform: t.casing });
    return x(we.p, { ref: r, className: It("chakra-text", t.className), ...l, ...c, __css: n });
  });
  _o.displayName = "Text";
  var Vx = (e) => x(we.div, { className: "chakra-stack__item", ...e, __css: { display: "inline-block", flex: "0 0 auto", minWidth: 0, ...e.__css } });
  Vx.displayName = "StackItem";
  function BA(e) {
    const { spacing: t, direction: r } = e,
      n = {
        column: { my: t, mx: 0, borderLeftWidth: 0, borderBottomWidth: "1px" },
        "column-reverse": { my: t, mx: 0, borderLeftWidth: 0, borderBottomWidth: "1px" },
        row: { mx: t, my: 0, borderLeftWidth: "1px", borderBottomWidth: 0 },
        "row-reverse": { mx: t, my: 0, borderLeftWidth: "1px", borderBottomWidth: 0 },
      };
    return { "&": jA(r, (a) => n[a]) };
  }
  var qn = We((e, t) => {
    const { isInline: r, direction: n, align: a, justify: o, spacing: i = "0.5rem", wrap: s, children: c, divider: l, className: u, shouldWrapChildren: f, ...d } = e,
      v = r ? "row" : n ?? "column",
      p = h.useMemo(() => BA({ spacing: i, direction: v }), [i, v]),
      m = !!l,
      g = !f && !m,
      y = h.useMemo(() => {
        const $ = tA(c);
        return g
          ? $
          : $.map((S, A) => {
              const P = typeof S.key < "u" ? S.key : A,
                M = A + 1 === $.length,
                F = f ? x(Vx, { children: S }, P) : S;
              if (!m) return F;
              const k = h.cloneElement(l, { __css: p }),
                D = M ? null : k;
              return se(h.Fragment, { children: [F, D] }, P);
            });
      }, [l, p, m, g, f, c]),
      b = It("chakra-stack", u);
    return x(we.div, { ref: t, display: "flex", alignItems: a, justifyContent: o, flexDirection: v, flexWrap: s, gap: m ? void 0 : i, className: b, ...d, children: y });
  });
  qn.displayName = "Stack";
  var Xn = We(function (t, r) {
    const { borderLeftWidth: n, borderBottomWidth: a, borderTopWidth: o, borderRightWidth: i, borderWidth: s, borderStyle: c, borderColor: l, ...u } = ps("Divider", t),
      { className: f, orientation: d = "horizontal", __css: v, ...p } = lr(t),
      m = { vertical: { borderLeftWidth: n || i || s || "1px", height: "100%" }, horizontal: { borderBottomWidth: a || o || s || "1px", width: "100%" } };
    return x(we.hr, { ref: r, "aria-orientation": d, ...p, __css: { ...u, border: "0", borderColor: l, borderStyle: c, ...m[d], ...v }, className: It("chakra-divider", f) });
  });
  Xn.displayName = "Divider";
  var Ga = (e, t) => ({ var: e, varRef: t ? `var(${e}, ${t})` : `var(${e})` }),
    ct = {
      arrowShadowColor: Ga("--popper-arrow-shadow-color"),
      arrowSize: Ga("--popper-arrow-size", "8px"),
      arrowSizeHalf: Ga("--popper-arrow-size-half"),
      arrowBg: Ga("--popper-arrow-bg"),
      transformOrigin: Ga("--popper-transform-origin"),
      arrowOffset: Ga("--popper-arrow-offset"),
    };
  function UA(e) {
    if (e.includes("top")) return "1px 1px 0px 0 var(--popper-arrow-shadow-color)";
    if (e.includes("bottom")) return "-1px -1px 0px 0 var(--popper-arrow-shadow-color)";
    if (e.includes("right")) return "-1px 1px 0px 0 var(--popper-arrow-shadow-color)";
    if (e.includes("left")) return "1px -1px 0px 0 var(--popper-arrow-shadow-color)";
  }
  var WA = {
      top: "bottom center",
      "top-start": "bottom left",
      "top-end": "bottom right",
      bottom: "top center",
      "bottom-start": "top left",
      "bottom-end": "top right",
      left: "right center",
      "left-start": "right top",
      "left-end": "right bottom",
      right: "left center",
      "right-start": "left top",
      "right-end": "left bottom",
    },
    HA = (e) => WA[e],
    sb = { scroll: !0, resize: !0 };
  function zA(e) {
    let t;
    return typeof e == "object" ? (t = { enabled: !0, options: { ...sb, ...e } }) : (t = { enabled: e, options: sb }), t;
  }
  var VA = {
      name: "matchWidth",
      enabled: !0,
      phase: "beforeWrite",
      requires: ["computeStyles"],
      fn: ({ state: e }) => {
        e.styles.popper.width = `${e.rects.reference.width}px`;
      },
      effect:
        ({ state: e }) =>
        () => {
          const t = e.elements.reference;
          e.elements.popper.style.width = `${t.offsetWidth}px`;
        },
    },
    GA = {
      name: "transformOrigin",
      enabled: !0,
      phase: "write",
      fn: ({ state: e }) => {
        cb(e);
      },
      effect:
        ({ state: e }) =>
        () => {
          cb(e);
        },
    },
    cb = (e) => {
      e.elements.popper.style.setProperty(ct.transformOrigin.var, HA(e.placement));
    },
    YA = {
      name: "positionArrow",
      enabled: !0,
      phase: "afterWrite",
      fn: ({ state: e }) => {
        KA(e);
      },
    },
    KA = (e) => {
      var t;
      if (!e.placement) return;
      const r = qA(e.placement);
      if ((t = e.elements) != null && t.arrow && r) {
        Object.assign(e.elements.arrow.style, { [r.property]: r.value, width: ct.arrowSize.varRef, height: ct.arrowSize.varRef, zIndex: -1 });
        const n = { [ct.arrowSizeHalf.var]: `calc(${ct.arrowSize.varRef} / 2 - 1px)`, [ct.arrowOffset.var]: `calc(${ct.arrowSizeHalf.varRef} * -1)` };
        for (const a in n) e.elements.arrow.style.setProperty(a, n[a]);
      }
    },
    qA = (e) => {
      if (e.startsWith("top")) return { property: "bottom", value: ct.arrowOffset.varRef };
      if (e.startsWith("bottom")) return { property: "top", value: ct.arrowOffset.varRef };
      if (e.startsWith("left")) return { property: "right", value: ct.arrowOffset.varRef };
      if (e.startsWith("right")) return { property: "left", value: ct.arrowOffset.varRef };
    },
    XA = {
      name: "innerArrow",
      enabled: !0,
      phase: "main",
      requires: ["arrow"],
      fn: ({ state: e }) => {
        lb(e);
      },
      effect:
        ({ state: e }) =>
        () => {
          lb(e);
        },
    },
    lb = (e) => {
      if (!e.elements.arrow) return;
      const t = e.elements.arrow.querySelector("[data-popper-arrow-inner]");
      if (!t) return;
      const r = UA(e.placement);
      r && t.style.setProperty("--popper-arrow-default-shadow", r),
        Object.assign(t.style, {
          transform: "rotate(45deg)",
          background: ct.arrowBg.varRef,
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: "inherit",
          boxShadow: "var(--popper-arrow-shadow, var(--popper-arrow-default-shadow))",
        });
    },
    ZA = {
      "start-start": { ltr: "left-start", rtl: "right-start" },
      "start-end": { ltr: "left-end", rtl: "right-end" },
      "end-start": { ltr: "right-start", rtl: "left-start" },
      "end-end": { ltr: "right-end", rtl: "left-end" },
      start: { ltr: "left", rtl: "right" },
      end: { ltr: "right", rtl: "left" },
    },
    JA = { "auto-start": "auto-end", "auto-end": "auto-start", "top-start": "top-end", "top-end": "top-start", "bottom-start": "bottom-end", "bottom-end": "bottom-start" };
  function QA(e, t = "ltr") {
    var r, n;
    const a = ((r = ZA[e]) == null ? void 0 : r[t]) || e;
    return t === "ltr" ? a : (n = JA[e]) != null ? n : a;
  }
  var _t = "top",
    Yt = "bottom",
    Kt = "right",
    Pt = "left",
    og = "auto",
    $s = [_t, Yt, Kt, Pt],
    Po = "start",
    Gi = "end",
    e4 = "clippingParents",
    Gx = "viewport",
    ci = "popper",
    t4 = "reference",
    ub = $s.reduce(function (e, t) {
      return e.concat([t + "-" + Po, t + "-" + Gi]);
    }, []),
    Yx = [].concat($s, [og]).reduce(function (e, t) {
      return e.concat([t, t + "-" + Po, t + "-" + Gi]);
    }, []),
    r4 = "beforeRead",
    n4 = "read",
    a4 = "afterRead",
    o4 = "beforeMain",
    i4 = "main",
    s4 = "afterMain",
    c4 = "beforeWrite",
    l4 = "write",
    u4 = "afterWrite",
    f4 = [r4, n4, a4, o4, i4, s4, c4, l4, u4];
  function Tr(e) {
    return e ? (e.nodeName || "").toLowerCase() : null;
  }
  function Ft(e) {
    if (e == null) return window;
    if (e.toString() !== "[object Window]") {
      var t = e.ownerDocument;
      return (t && t.defaultView) || window;
    }
    return e;
  }
  function ca(e) {
    var t = Ft(e).Element;
    return e instanceof t || e instanceof Element;
  }
  function Gt(e) {
    var t = Ft(e).HTMLElement;
    return e instanceof t || e instanceof HTMLElement;
  }
  function ig(e) {
    if (typeof ShadowRoot > "u") return !1;
    var t = Ft(e).ShadowRoot;
    return e instanceof t || e instanceof ShadowRoot;
  }
  function d4(e) {
    var t = e.state;
    Object.keys(t.elements).forEach(function (r) {
      var n = t.styles[r] || {},
        a = t.attributes[r] || {},
        o = t.elements[r];
      !Gt(o) ||
        !Tr(o) ||
        (Object.assign(o.style, n),
        Object.keys(a).forEach(function (i) {
          var s = a[i];
          s === !1 ? o.removeAttribute(i) : o.setAttribute(i, s === !0 ? "" : s);
        }));
    });
  }
  function h4(e) {
    var t = e.state,
      r = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
    return (
      Object.assign(t.elements.popper.style, r.popper),
      (t.styles = r),
      t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow),
      function () {
        Object.keys(t.elements).forEach(function (n) {
          var a = t.elements[n],
            o = t.attributes[n] || {},
            i = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]),
            s = i.reduce(function (c, l) {
              return (c[l] = ""), c;
            }, {});
          !Gt(a) ||
            !Tr(a) ||
            (Object.assign(a.style, s),
            Object.keys(o).forEach(function (c) {
              a.removeAttribute(c);
            }));
        });
      }
    );
  }
  const v4 = { name: "applyStyles", enabled: !0, phase: "write", fn: d4, effect: h4, requires: ["computeStyles"] };
  function Sr(e) {
    return e.split("-")[0];
  }
  var na = Math.max,
    Ml = Math.min,
    Io = Math.round;
  function np() {
    var e = navigator.userAgentData;
    return e != null && e.brands && Array.isArray(e.brands)
      ? e.brands
          .map(function (t) {
            return t.brand + "/" + t.version;
          })
          .join(" ")
      : navigator.userAgent;
  }
  function Kx() {
    return !/^((?!chrome|android).)*safari/i.test(np());
  }
  function Ao(e, t, r) {
    t === void 0 && (t = !1), r === void 0 && (r = !1);
    var n = e.getBoundingClientRect(),
      a = 1,
      o = 1;
    t && Gt(e) && ((a = (e.offsetWidth > 0 && Io(n.width) / e.offsetWidth) || 1), (o = (e.offsetHeight > 0 && Io(n.height) / e.offsetHeight) || 1));
    var i = ca(e) ? Ft(e) : window,
      s = i.visualViewport,
      c = !Kx() && r,
      l = (n.left + (c && s ? s.offsetLeft : 0)) / a,
      u = (n.top + (c && s ? s.offsetTop : 0)) / o,
      f = n.width / a,
      d = n.height / o;
    return { width: f, height: d, top: u, right: l + f, bottom: u + d, left: l, x: l, y: u };
  }
  function sg(e) {
    var t = Ao(e),
      r = e.offsetWidth,
      n = e.offsetHeight;
    return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), { x: e.offsetLeft, y: e.offsetTop, width: r, height: n };
  }
  function qx(e, t) {
    var r = t.getRootNode && t.getRootNode();
    if (e.contains(t)) return !0;
    if (r && ig(r)) {
      var n = t;
      do {
        if (n && e.isSameNode(n)) return !0;
        n = n.parentNode || n.host;
      } while (n);
    }
    return !1;
  }
  function qr(e) {
    return Ft(e).getComputedStyle(e);
  }
  function p4(e) {
    return ["table", "td", "th"].indexOf(Tr(e)) >= 0;
  }
  function kn(e) {
    return ((ca(e) ? e.ownerDocument : e.document) || window.document).documentElement;
  }
  function Du(e) {
    return Tr(e) === "html" ? e : e.assignedSlot || e.parentNode || (ig(e) ? e.host : null) || kn(e);
  }
  function fb(e) {
    return !Gt(e) || qr(e).position === "fixed" ? null : e.offsetParent;
  }
  function m4(e) {
    var t = /firefox/i.test(np()),
      r = /Trident/i.test(np());
    if (r && Gt(e)) {
      var n = qr(e);
      if (n.position === "fixed") return null;
    }
    var a = Du(e);
    for (ig(a) && (a = a.host); Gt(a) && ["html", "body"].indexOf(Tr(a)) < 0; ) {
      var o = qr(a);
      if (
        o.transform !== "none" ||
        o.perspective !== "none" ||
        o.contain === "paint" ||
        ["transform", "perspective"].indexOf(o.willChange) !== -1 ||
        (t && o.willChange === "filter") ||
        (t && o.filter && o.filter !== "none")
      )
        return a;
      a = a.parentNode;
    }
    return null;
  }
  function ws(e) {
    for (var t = Ft(e), r = fb(e); r && p4(r) && qr(r).position === "static"; ) r = fb(r);
    return r && (Tr(r) === "html" || (Tr(r) === "body" && qr(r).position === "static")) ? t : r || m4(e) || t;
  }
  function cg(e) {
    return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
  }
  function Ni(e, t, r) {
    return na(e, Ml(t, r));
  }
  function g4(e, t, r) {
    var n = Ni(e, t, r);
    return n > r ? r : n;
  }
  function Xx() {
    return { top: 0, right: 0, bottom: 0, left: 0 };
  }
  function Zx(e) {
    return Object.assign({}, Xx(), e);
  }
  function Jx(e, t) {
    return t.reduce(function (r, n) {
      return (r[n] = e), r;
    }, {});
  }
  var y4 = function (t, r) {
    return (t = typeof t == "function" ? t(Object.assign({}, r.rects, { placement: r.placement })) : t), Zx(typeof t != "number" ? t : Jx(t, $s));
  };
  function b4(e) {
    var t,
      r = e.state,
      n = e.name,
      a = e.options,
      o = r.elements.arrow,
      i = r.modifiersData.popperOffsets,
      s = Sr(r.placement),
      c = cg(s),
      l = [Pt, Kt].indexOf(s) >= 0,
      u = l ? "height" : "width";
    if (!(!o || !i)) {
      var f = y4(a.padding, r),
        d = sg(o),
        v = c === "y" ? _t : Pt,
        p = c === "y" ? Yt : Kt,
        m = r.rects.reference[u] + r.rects.reference[c] - i[c] - r.rects.popper[u],
        g = i[c] - r.rects.reference[c],
        y = ws(o),
        b = y ? (c === "y" ? y.clientHeight || 0 : y.clientWidth || 0) : 0,
        $ = m / 2 - g / 2,
        S = f[v],
        A = b - d[u] - f[p],
        P = b / 2 - d[u] / 2 + $,
        M = Ni(S, P, A),
        T = c;
      r.modifiersData[n] = ((t = {}), (t[T] = M), (t.centerOffset = M - P), t);
    }
  }
  function $4(e) {
    var t = e.state,
      r = e.options,
      n = r.element,
      a = n === void 0 ? "[data-popper-arrow]" : n;
    a != null && ((typeof a == "string" && ((a = t.elements.popper.querySelector(a)), !a)) || (qx(t.elements.popper, a) && (t.elements.arrow = a)));
  }
  const w4 = { name: "arrow", enabled: !0, phase: "main", fn: b4, effect: $4, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
  function Ro(e) {
    return e.split("-")[1];
  }
  var S4 = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
  function E4(e, t) {
    var r = e.x,
      n = e.y,
      a = t.devicePixelRatio || 1;
    return { x: Io(r * a) / a || 0, y: Io(n * a) / a || 0 };
  }
  function db(e) {
    var t,
      r = e.popper,
      n = e.popperRect,
      a = e.placement,
      o = e.variation,
      i = e.offsets,
      s = e.position,
      c = e.gpuAcceleration,
      l = e.adaptive,
      u = e.roundOffsets,
      f = e.isFixed,
      d = i.x,
      v = d === void 0 ? 0 : d,
      p = i.y,
      m = p === void 0 ? 0 : p,
      g = typeof u == "function" ? u({ x: v, y: m }) : { x: v, y: m };
    (v = g.x), (m = g.y);
    var y = i.hasOwnProperty("x"),
      b = i.hasOwnProperty("y"),
      $ = Pt,
      S = _t,
      A = window;
    if (l) {
      var P = ws(r),
        M = "clientHeight",
        T = "clientWidth";
      if ((P === Ft(r) && ((P = kn(r)), qr(P).position !== "static" && s === "absolute" && ((M = "scrollHeight"), (T = "scrollWidth"))), (P = P), a === _t || ((a === Pt || a === Kt) && o === Gi))) {
        S = Yt;
        var F = f && P === A && A.visualViewport ? A.visualViewport.height : P[M];
        (m -= F - n.height), (m *= c ? 1 : -1);
      }
      if (a === Pt || ((a === _t || a === Yt) && o === Gi)) {
        $ = Kt;
        var k = f && P === A && A.visualViewport ? A.visualViewport.width : P[T];
        (v -= k - n.width), (v *= c ? 1 : -1);
      }
    }
    var D = Object.assign({ position: s }, l && S4),
      _ = u === !0 ? E4({ x: v, y: m }, Ft(r)) : { x: v, y: m };
    if (((v = _.x), (m = _.y), c)) {
      var O;
      return Object.assign(
        {},
        D,
        ((O = {}), (O[S] = b ? "0" : ""), (O[$] = y ? "0" : ""), (O.transform = (A.devicePixelRatio || 1) <= 1 ? "translate(" + v + "px, " + m + "px)" : "translate3d(" + v + "px, " + m + "px, 0)"), O)
      );
    }
    return Object.assign({}, D, ((t = {}), (t[S] = b ? m + "px" : ""), (t[$] = y ? v + "px" : ""), (t.transform = ""), t));
  }
  function x4(e) {
    var t = e.state,
      r = e.options,
      n = r.gpuAcceleration,
      a = n === void 0 ? !0 : n,
      o = r.adaptive,
      i = o === void 0 ? !0 : o,
      s = r.roundOffsets,
      c = s === void 0 ? !0 : s,
      l = { placement: Sr(t.placement), variation: Ro(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: a, isFixed: t.options.strategy === "fixed" };
    t.modifiersData.popperOffsets != null &&
      (t.styles.popper = Object.assign({}, t.styles.popper, db(Object.assign({}, l, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: i, roundOffsets: c })))),
      t.modifiersData.arrow != null &&
        (t.styles.arrow = Object.assign({}, t.styles.arrow, db(Object.assign({}, l, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: c })))),
      (t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement }));
  }
  const T4 = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: x4, data: {} };
  var tc = { passive: !0 };
  function C4(e) {
    var t = e.state,
      r = e.instance,
      n = e.options,
      a = n.scroll,
      o = a === void 0 ? !0 : a,
      i = n.resize,
      s = i === void 0 ? !0 : i,
      c = Ft(t.elements.popper),
      l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
    return (
      o &&
        l.forEach(function (u) {
          u.addEventListener("scroll", r.update, tc);
        }),
      s && c.addEventListener("resize", r.update, tc),
      function () {
        o &&
          l.forEach(function (u) {
            u.removeEventListener("scroll", r.update, tc);
          }),
          s && c.removeEventListener("resize", r.update, tc);
      }
    );
  }
  const O4 = { name: "eventListeners", enabled: !0, phase: "write", fn: function () {}, effect: C4, data: {} };
  var _4 = { left: "right", right: "left", bottom: "top", top: "bottom" };
  function el(e) {
    return e.replace(/left|right|bottom|top/g, function (t) {
      return _4[t];
    });
  }
  var P4 = { start: "end", end: "start" };
  function hb(e) {
    return e.replace(/start|end/g, function (t) {
      return P4[t];
    });
  }
  function lg(e) {
    var t = Ft(e),
      r = t.pageXOffset,
      n = t.pageYOffset;
    return { scrollLeft: r, scrollTop: n };
  }
  function ug(e) {
    return Ao(kn(e)).left + lg(e).scrollLeft;
  }
  function I4(e, t) {
    var r = Ft(e),
      n = kn(e),
      a = r.visualViewport,
      o = n.clientWidth,
      i = n.clientHeight,
      s = 0,
      c = 0;
    if (a) {
      (o = a.width), (i = a.height);
      var l = Kx();
      (l || (!l && t === "fixed")) && ((s = a.offsetLeft), (c = a.offsetTop));
    }
    return { width: o, height: i, x: s + ug(e), y: c };
  }
  function A4(e) {
    var t,
      r = kn(e),
      n = lg(e),
      a = (t = e.ownerDocument) == null ? void 0 : t.body,
      o = na(r.scrollWidth, r.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0),
      i = na(r.scrollHeight, r.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0),
      s = -n.scrollLeft + ug(e),
      c = -n.scrollTop;
    return qr(a || r).direction === "rtl" && (s += na(r.clientWidth, a ? a.clientWidth : 0) - o), { width: o, height: i, x: s, y: c };
  }
  function fg(e) {
    var t = qr(e),
      r = t.overflow,
      n = t.overflowX,
      a = t.overflowY;
    return /auto|scroll|overlay|hidden/.test(r + a + n);
  }
  function Qx(e) {
    return ["html", "body", "#document"].indexOf(Tr(e)) >= 0 ? e.ownerDocument.body : Gt(e) && fg(e) ? e : Qx(Du(e));
  }
  function ki(e, t) {
    var r;
    t === void 0 && (t = []);
    var n = Qx(e),
      a = n === ((r = e.ownerDocument) == null ? void 0 : r.body),
      o = Ft(n),
      i = a ? [o].concat(o.visualViewport || [], fg(n) ? n : []) : n,
      s = t.concat(i);
    return a ? s : s.concat(ki(Du(i)));
  }
  function ap(e) {
    return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
  }
  function R4(e, t) {
    var r = Ao(e, !1, t === "fixed");
    return (
      (r.top = r.top + e.clientTop),
      (r.left = r.left + e.clientLeft),
      (r.bottom = r.top + e.clientHeight),
      (r.right = r.left + e.clientWidth),
      (r.width = e.clientWidth),
      (r.height = e.clientHeight),
      (r.x = r.left),
      (r.y = r.top),
      r
    );
  }
  function vb(e, t, r) {
    return t === Gx ? ap(I4(e, r)) : ca(t) ? R4(t, r) : ap(A4(kn(e)));
  }
  function M4(e) {
    var t = ki(Du(e)),
      r = ["absolute", "fixed"].indexOf(qr(e).position) >= 0,
      n = r && Gt(e) ? ws(e) : e;
    return ca(n)
      ? t.filter(function (a) {
          return ca(a) && qx(a, n) && Tr(a) !== "body";
        })
      : [];
  }
  function D4(e, t, r, n) {
    var a = t === "clippingParents" ? M4(e) : [].concat(t),
      o = [].concat(a, [r]),
      i = o[0],
      s = o.reduce(function (c, l) {
        var u = vb(e, l, n);
        return (c.top = na(u.top, c.top)), (c.right = Ml(u.right, c.right)), (c.bottom = Ml(u.bottom, c.bottom)), (c.left = na(u.left, c.left)), c;
      }, vb(e, i, n));
    return (s.width = s.right - s.left), (s.height = s.bottom - s.top), (s.x = s.left), (s.y = s.top), s;
  }
  function eT(e) {
    var t = e.reference,
      r = e.element,
      n = e.placement,
      a = n ? Sr(n) : null,
      o = n ? Ro(n) : null,
      i = t.x + t.width / 2 - r.width / 2,
      s = t.y + t.height / 2 - r.height / 2,
      c;
    switch (a) {
      case _t:
        c = { x: i, y: t.y - r.height };
        break;
      case Yt:
        c = { x: i, y: t.y + t.height };
        break;
      case Kt:
        c = { x: t.x + t.width, y: s };
        break;
      case Pt:
        c = { x: t.x - r.width, y: s };
        break;
      default:
        c = { x: t.x, y: t.y };
    }
    var l = a ? cg(a) : null;
    if (l != null) {
      var u = l === "y" ? "height" : "width";
      switch (o) {
        case Po:
          c[l] = c[l] - (t[u] / 2 - r[u] / 2);
          break;
        case Gi:
          c[l] = c[l] + (t[u] / 2 - r[u] / 2);
          break;
      }
    }
    return c;
  }
  function Yi(e, t) {
    t === void 0 && (t = {});
    var r = t,
      n = r.placement,
      a = n === void 0 ? e.placement : n,
      o = r.strategy,
      i = o === void 0 ? e.strategy : o,
      s = r.boundary,
      c = s === void 0 ? e4 : s,
      l = r.rootBoundary,
      u = l === void 0 ? Gx : l,
      f = r.elementContext,
      d = f === void 0 ? ci : f,
      v = r.altBoundary,
      p = v === void 0 ? !1 : v,
      m = r.padding,
      g = m === void 0 ? 0 : m,
      y = Zx(typeof g != "number" ? g : Jx(g, $s)),
      b = d === ci ? t4 : ci,
      $ = e.rects.popper,
      S = e.elements[p ? b : d],
      A = D4(ca(S) ? S : S.contextElement || kn(e.elements.popper), c, u, i),
      P = Ao(e.elements.reference),
      M = eT({ reference: P, element: $, strategy: "absolute", placement: a }),
      T = ap(Object.assign({}, $, M)),
      F = d === ci ? T : P,
      k = { top: A.top - F.top + y.top, bottom: F.bottom - A.bottom + y.bottom, left: A.left - F.left + y.left, right: F.right - A.right + y.right },
      D = e.modifiersData.offset;
    if (d === ci && D) {
      var _ = D[a];
      Object.keys(k).forEach(function (O) {
        var w = [Kt, Yt].indexOf(O) >= 0 ? 1 : -1,
          R = [_t, Yt].indexOf(O) >= 0 ? "y" : "x";
        k[O] += _[R] * w;
      });
    }
    return k;
  }
  function N4(e, t) {
    t === void 0 && (t = {});
    var r = t,
      n = r.placement,
      a = r.boundary,
      o = r.rootBoundary,
      i = r.padding,
      s = r.flipVariations,
      c = r.allowedAutoPlacements,
      l = c === void 0 ? Yx : c,
      u = Ro(n),
      f = u
        ? s
          ? ub
          : ub.filter(function (p) {
              return Ro(p) === u;
            })
        : $s,
      d = f.filter(function (p) {
        return l.indexOf(p) >= 0;
      });
    d.length === 0 && (d = f);
    var v = d.reduce(function (p, m) {
      return (p[m] = Yi(e, { placement: m, boundary: a, rootBoundary: o, padding: i })[Sr(m)]), p;
    }, {});
    return Object.keys(v).sort(function (p, m) {
      return v[p] - v[m];
    });
  }
  function k4(e) {
    if (Sr(e) === og) return [];
    var t = el(e);
    return [hb(e), t, hb(t)];
  }
  function L4(e) {
    var t = e.state,
      r = e.options,
      n = e.name;
    if (!t.modifiersData[n]._skip) {
      for (
        var a = r.mainAxis,
          o = a === void 0 ? !0 : a,
          i = r.altAxis,
          s = i === void 0 ? !0 : i,
          c = r.fallbackPlacements,
          l = r.padding,
          u = r.boundary,
          f = r.rootBoundary,
          d = r.altBoundary,
          v = r.flipVariations,
          p = v === void 0 ? !0 : v,
          m = r.allowedAutoPlacements,
          g = t.options.placement,
          y = Sr(g),
          b = y === g,
          $ = c || (b || !p ? [el(g)] : k4(g)),
          S = [g].concat($).reduce(function (q, K) {
            return q.concat(Sr(K) === og ? N4(t, { placement: K, boundary: u, rootBoundary: f, padding: l, flipVariations: p, allowedAutoPlacements: m }) : K);
          }, []),
          A = t.rects.reference,
          P = t.rects.popper,
          M = new Map(),
          T = !0,
          F = S[0],
          k = 0;
        k < S.length;
        k++
      ) {
        var D = S[k],
          _ = Sr(D),
          O = Ro(D) === Po,
          w = [_t, Yt].indexOf(_) >= 0,
          R = w ? "width" : "height",
          I = Yi(t, { placement: D, boundary: u, rootBoundary: f, altBoundary: d, padding: l }),
          N = w ? (O ? Kt : Pt) : O ? Yt : _t;
        A[R] > P[R] && (N = el(N));
        var B = el(N),
          W = [];
        if (
          (o && W.push(I[_] <= 0),
          s && W.push(I[N] <= 0, I[B] <= 0),
          W.every(function (q) {
            return q;
          }))
        ) {
          (F = D), (T = !1);
          break;
        }
        M.set(D, W);
      }
      if (T)
        for (
          var C = p ? 3 : 1,
            E = function (K) {
              var te = S.find(function (z) {
                var J = M.get(z);
                if (J)
                  return J.slice(0, K).every(function (H) {
                    return H;
                  });
              });
              if (te) return (F = te), "break";
            },
            V = C;
          V > 0;
          V--
        ) {
          var X = E(V);
          if (X === "break") break;
        }
      t.placement !== F && ((t.modifiersData[n]._skip = !0), (t.placement = F), (t.reset = !0));
    }
  }
  const F4 = { name: "flip", enabled: !0, phase: "main", fn: L4, requiresIfExists: ["offset"], data: { _skip: !1 } };
  function pb(e, t, r) {
    return r === void 0 && (r = { x: 0, y: 0 }), { top: e.top - t.height - r.y, right: e.right - t.width + r.x, bottom: e.bottom - t.height + r.y, left: e.left - t.width - r.x };
  }
  function mb(e) {
    return [_t, Kt, Yt, Pt].some(function (t) {
      return e[t] >= 0;
    });
  }
  function j4(e) {
    var t = e.state,
      r = e.name,
      n = t.rects.reference,
      a = t.rects.popper,
      o = t.modifiersData.preventOverflow,
      i = Yi(t, { elementContext: "reference" }),
      s = Yi(t, { altBoundary: !0 }),
      c = pb(i, n),
      l = pb(s, a, o),
      u = mb(c),
      f = mb(l);
    (t.modifiersData[r] = { referenceClippingOffsets: c, popperEscapeOffsets: l, isReferenceHidden: u, hasPopperEscaped: f }),
      (t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": u, "data-popper-escaped": f }));
  }
  const B4 = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: j4 };
  function U4(e, t, r) {
    var n = Sr(e),
      a = [Pt, _t].indexOf(n) >= 0 ? -1 : 1,
      o = typeof r == "function" ? r(Object.assign({}, t, { placement: e })) : r,
      i = o[0],
      s = o[1];
    return (i = i || 0), (s = (s || 0) * a), [Pt, Kt].indexOf(n) >= 0 ? { x: s, y: i } : { x: i, y: s };
  }
  function W4(e) {
    var t = e.state,
      r = e.options,
      n = e.name,
      a = r.offset,
      o = a === void 0 ? [0, 0] : a,
      i = Yx.reduce(function (u, f) {
        return (u[f] = U4(f, t.rects, o)), u;
      }, {}),
      s = i[t.placement],
      c = s.x,
      l = s.y;
    t.modifiersData.popperOffsets != null && ((t.modifiersData.popperOffsets.x += c), (t.modifiersData.popperOffsets.y += l)), (t.modifiersData[n] = i);
  }
  const H4 = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: W4 };
  function z4(e) {
    var t = e.state,
      r = e.name;
    t.modifiersData[r] = eT({ reference: t.rects.reference, element: t.rects.popper, strategy: "absolute", placement: t.placement });
  }
  const V4 = { name: "popperOffsets", enabled: !0, phase: "read", fn: z4, data: {} };
  function G4(e) {
    return e === "x" ? "y" : "x";
  }
  function Y4(e) {
    var t = e.state,
      r = e.options,
      n = e.name,
      a = r.mainAxis,
      o = a === void 0 ? !0 : a,
      i = r.altAxis,
      s = i === void 0 ? !1 : i,
      c = r.boundary,
      l = r.rootBoundary,
      u = r.altBoundary,
      f = r.padding,
      d = r.tether,
      v = d === void 0 ? !0 : d,
      p = r.tetherOffset,
      m = p === void 0 ? 0 : p,
      g = Yi(t, { boundary: c, rootBoundary: l, padding: f, altBoundary: u }),
      y = Sr(t.placement),
      b = Ro(t.placement),
      $ = !b,
      S = cg(y),
      A = G4(S),
      P = t.modifiersData.popperOffsets,
      M = t.rects.reference,
      T = t.rects.popper,
      F = typeof m == "function" ? m(Object.assign({}, t.rects, { placement: t.placement })) : m,
      k = typeof F == "number" ? { mainAxis: F, altAxis: F } : Object.assign({ mainAxis: 0, altAxis: 0 }, F),
      D = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
      _ = { x: 0, y: 0 };
    if (P) {
      if (o) {
        var O,
          w = S === "y" ? _t : Pt,
          R = S === "y" ? Yt : Kt,
          I = S === "y" ? "height" : "width",
          N = P[S],
          B = N + g[w],
          W = N - g[R],
          C = v ? -T[I] / 2 : 0,
          E = b === Po ? M[I] : T[I],
          V = b === Po ? -T[I] : -M[I],
          X = t.elements.arrow,
          q = v && X ? sg(X) : { width: 0, height: 0 },
          K = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Xx(),
          te = K[w],
          z = K[R],
          J = Ni(0, M[I], q[I]),
          H = $ ? M[I] / 2 - C - J - te - k.mainAxis : E - J - te - k.mainAxis,
          G = $ ? -M[I] / 2 + C + J + z + k.mainAxis : V + J + z + k.mainAxis,
          Y = t.elements.arrow && ws(t.elements.arrow),
          L = Y ? (S === "y" ? Y.clientTop || 0 : Y.clientLeft || 0) : 0,
          ne = (O = D == null ? void 0 : D[S]) != null ? O : 0,
          Z = N + H - ne - L,
          Q = N + G - ne,
          le = Ni(v ? Ml(B, Z) : B, N, v ? na(W, Q) : W);
        (P[S] = le), (_[S] = le - N);
      }
      if (s) {
        var he,
          $e = S === "x" ? _t : Pt,
          He = S === "x" ? Yt : Kt,
          Se = P[A],
          Xe = A === "y" ? "height" : "width",
          U = Se + g[$e],
          re = Se - g[He],
          ae = [_t, Pt].indexOf(y) !== -1,
          ce = (he = D == null ? void 0 : D[A]) != null ? he : 0,
          fe = ae ? U : Se - M[Xe] - T[Xe] - ce + k.altAxis,
          me = ae ? Se + M[Xe] + T[Xe] - ce - k.altAxis : re,
          Te = v && ae ? g4(fe, Se, me) : Ni(v ? fe : U, Se, v ? me : re);
        (P[A] = Te), (_[A] = Te - Se);
      }
      t.modifiersData[n] = _;
    }
  }
  const K4 = { name: "preventOverflow", enabled: !0, phase: "main", fn: Y4, requiresIfExists: ["offset"] };
  function q4(e) {
    return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
  }
  function X4(e) {
    return e === Ft(e) || !Gt(e) ? lg(e) : q4(e);
  }
  function Z4(e) {
    var t = e.getBoundingClientRect(),
      r = Io(t.width) / e.offsetWidth || 1,
      n = Io(t.height) / e.offsetHeight || 1;
    return r !== 1 || n !== 1;
  }
  function J4(e, t, r) {
    r === void 0 && (r = !1);
    var n = Gt(t),
      a = Gt(t) && Z4(t),
      o = kn(t),
      i = Ao(e, a, r),
      s = { scrollLeft: 0, scrollTop: 0 },
      c = { x: 0, y: 0 };
    return (
      (n || (!n && !r)) && ((Tr(t) !== "body" || fg(o)) && (s = X4(t)), Gt(t) ? ((c = Ao(t, !0)), (c.x += t.clientLeft), (c.y += t.clientTop)) : o && (c.x = ug(o))),
      { x: i.left + s.scrollLeft - c.x, y: i.top + s.scrollTop - c.y, width: i.width, height: i.height }
    );
  }
  function Q4(e) {
    var t = new Map(),
      r = new Set(),
      n = [];
    e.forEach(function (o) {
      t.set(o.name, o);
    });
    function a(o) {
      r.add(o.name);
      var i = [].concat(o.requires || [], o.requiresIfExists || []);
      i.forEach(function (s) {
        if (!r.has(s)) {
          var c = t.get(s);
          c && a(c);
        }
      }),
        n.push(o);
    }
    return (
      e.forEach(function (o) {
        r.has(o.name) || a(o);
      }),
      n
    );
  }
  function eR(e) {
    var t = Q4(e);
    return f4.reduce(function (r, n) {
      return r.concat(
        t.filter(function (a) {
          return a.phase === n;
        })
      );
    }, []);
  }
  function tR(e) {
    var t;
    return function () {
      return (
        t ||
          (t = new Promise(function (r) {
            Promise.resolve().then(function () {
              (t = void 0), r(e());
            });
          })),
        t
      );
    };
  }
  function rR(e) {
    var t = e.reduce(function (r, n) {
      var a = r[n.name];
      return (r[n.name] = a ? Object.assign({}, a, n, { options: Object.assign({}, a.options, n.options), data: Object.assign({}, a.data, n.data) }) : n), r;
    }, {});
    return Object.keys(t).map(function (r) {
      return t[r];
    });
  }
  var gb = { placement: "bottom", modifiers: [], strategy: "absolute" };
  function yb() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
    return !t.some(function (n) {
      return !(n && typeof n.getBoundingClientRect == "function");
    });
  }
  function nR(e) {
    e === void 0 && (e = {});
    var t = e,
      r = t.defaultModifiers,
      n = r === void 0 ? [] : r,
      a = t.defaultOptions,
      o = a === void 0 ? gb : a;
    return function (s, c, l) {
      l === void 0 && (l = o);
      var u = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, gb, o), modifiersData: {}, elements: { reference: s, popper: c }, attributes: {}, styles: {} },
        f = [],
        d = !1,
        v = {
          state: u,
          setOptions: function (y) {
            var b = typeof y == "function" ? y(u.options) : y;
            m(), (u.options = Object.assign({}, o, u.options, b)), (u.scrollParents = { reference: ca(s) ? ki(s) : s.contextElement ? ki(s.contextElement) : [], popper: ki(c) });
            var $ = eR(rR([].concat(n, u.options.modifiers)));
            return (
              (u.orderedModifiers = $.filter(function (S) {
                return S.enabled;
              })),
              p(),
              v.update()
            );
          },
          forceUpdate: function () {
            if (!d) {
              var y = u.elements,
                b = y.reference,
                $ = y.popper;
              if (yb(b, $)) {
                (u.rects = { reference: J4(b, ws($), u.options.strategy === "fixed"), popper: sg($) }),
                  (u.reset = !1),
                  (u.placement = u.options.placement),
                  u.orderedModifiers.forEach(function (k) {
                    return (u.modifiersData[k.name] = Object.assign({}, k.data));
                  });
                for (var S = 0; S < u.orderedModifiers.length; S++) {
                  if (u.reset === !0) {
                    (u.reset = !1), (S = -1);
                    continue;
                  }
                  var A = u.orderedModifiers[S],
                    P = A.fn,
                    M = A.options,
                    T = M === void 0 ? {} : M,
                    F = A.name;
                  typeof P == "function" && (u = P({ state: u, options: T, name: F, instance: v }) || u);
                }
              }
            }
          },
          update: tR(function () {
            return new Promise(function (g) {
              v.forceUpdate(), g(u);
            });
          }),
          destroy: function () {
            m(), (d = !0);
          },
        };
      if (!yb(s, c)) return v;
      v.setOptions(l).then(function (g) {
        !d && l.onFirstUpdate && l.onFirstUpdate(g);
      });
      function p() {
        u.orderedModifiers.forEach(function (g) {
          var y = g.name,
            b = g.options,
            $ = b === void 0 ? {} : b,
            S = g.effect;
          if (typeof S == "function") {
            var A = S({ state: u, name: y, instance: v, options: $ }),
              P = function () {};
            f.push(A || P);
          }
        });
      }
      function m() {
        f.forEach(function (g) {
          return g();
        }),
          (f = []);
      }
      return v;
    };
  }
  var aR = [O4, V4, T4, v4, H4, F4, K4, w4, B4],
    tT = nR({ defaultModifiers: aR });
  function oR(e = {}) {
    const {
        enabled: t = !0,
        modifiers: r,
        placement: n = "bottom",
        strategy: a = "absolute",
        arrowPadding: o = 8,
        eventListeners: i = !0,
        offset: s,
        gutter: c = 8,
        flip: l = !0,
        boundary: u = "clippingParents",
        preventOverflow: f = !0,
        matchWidth: d,
        direction: v = "ltr",
      } = e,
      p = h.useRef(null),
      m = h.useRef(null),
      g = h.useRef(null),
      y = QA(n, v),
      b = h.useRef(() => {}),
      $ = h.useCallback(() => {
        var k;
        !t ||
          !p.current ||
          !m.current ||
          ((k = b.current) == null || k.call(b),
          (g.current = tT(p.current, m.current, {
            placement: y,
            modifiers: [
              XA,
              YA,
              GA,
              { ...VA, enabled: !!d },
              { name: "eventListeners", ...zA(i) },
              { name: "arrow", options: { padding: o } },
              { name: "offset", options: { offset: s ?? [0, c] } },
              { name: "flip", enabled: !!l, options: { padding: 8 } },
              { name: "preventOverflow", enabled: !!f, options: { boundary: u } },
              ...(r ?? []),
            ],
            strategy: a,
          })),
          g.current.forceUpdate(),
          (b.current = g.current.destroy));
      }, [y, t, r, d, i, o, s, c, l, f, u, a]);
    h.useEffect(
      () => () => {
        var k;
        !p.current && !m.current && ((k = g.current) == null || k.destroy(), (g.current = null));
      },
      []
    );
    const S = h.useCallback(
        (k) => {
          (p.current = k), $();
        },
        [$]
      ),
      A = h.useCallback((k = {}, D = null) => ({ ...k, ref: wr(S, D) }), [S]),
      P = h.useCallback(
        (k) => {
          (m.current = k), $();
        },
        [$]
      ),
      M = h.useCallback((k = {}, D = null) => ({ ...k, ref: wr(P, D), style: { ...k.style, position: a, minWidth: d ? void 0 : "max-content", inset: "0 auto auto 0" } }), [a, P, d]),
      T = h.useCallback((k = {}, D = null) => {
        const { size: _, shadowColor: O, bg: w, style: R, ...I } = k;
        return { ...I, ref: D, "data-popper-arrow": "", style: iR(k) };
      }, []),
      F = h.useCallback((k = {}, D = null) => ({ ...k, ref: D, "data-popper-arrow-inner": "" }), []);
    return {
      update() {
        var k;
        (k = g.current) == null || k.update();
      },
      forceUpdate() {
        var k;
        (k = g.current) == null || k.forceUpdate();
      },
      transformOrigin: ct.transformOrigin.varRef,
      referenceRef: S,
      popperRef: P,
      getPopperProps: M,
      getArrowProps: T,
      getArrowInnerProps: F,
      getReferenceProps: A,
    };
  }
  function iR(e) {
    const { size: t, shadowColor: r, bg: n, style: a } = e,
      o = { ...a, position: "absolute" };
    return t && (o["--popper-arrow-size"] = t), r && (o["--popper-arrow-shadow-color"] = r), n && (o["--popper-arrow-bg"] = n), o;
  }
  function sR(e = {}) {
    const { onClose: t, onOpen: r, isOpen: n, id: a } = e,
      o = Vt(r),
      i = Vt(t),
      [s, c] = h.useState(e.defaultIsOpen || !1),
      l = n !== void 0 ? n : s,
      u = n !== void 0,
      f = h.useId(),
      d = a ?? `disclosure-${f}`,
      v = h.useCallback(() => {
        u || c(!1), i == null || i();
      }, [u, i]),
      p = h.useCallback(() => {
        u || c(!0), o == null || o();
      }, [u, o]),
      m = h.useCallback(() => {
        l ? v() : p();
      }, [l, p, v]);
    function g(b = {}) {
      return {
        ...b,
        "aria-expanded": l,
        "aria-controls": d,
        onClick($) {
          var S;
          (S = b.onClick) == null || S.call(b, $), m();
        },
      };
    }
    function y(b = {}) {
      return { ...b, hidden: !l, id: d };
    }
    return { isOpen: l, onOpen: p, onClose: v, onToggle: m, isControlled: u, getButtonProps: g, getDisclosureProps: y };
  }
  var cR = function (e) {
      if (typeof document > "u") return null;
      var t = Array.isArray(e) ? e[0] : e;
      return t.ownerDocument.body;
    },
    Ya = new WeakMap(),
    rc = new WeakMap(),
    nc = {},
    Ad = 0,
    rT = function (e) {
      return e && (e.host || rT(e.parentNode));
    },
    lR = function (e, t) {
      return t
        .map(function (r) {
          if (e.contains(r)) return r;
          var n = rT(r);
          return n && e.contains(n) ? n : null;
        })
        .filter(function (r) {
          return !!r;
        });
    },
    uR = function (e, t, r, n) {
      var a = lR(t, Array.isArray(e) ? e : [e]);
      nc[r] || (nc[r] = new WeakMap());
      var o = nc[r],
        i = [],
        s = new Set(),
        c = new Set(a),
        l = function (f) {
          !f || s.has(f) || (s.add(f), l(f.parentNode));
        };
      a.forEach(l);
      var u = function (f) {
        !f ||
          c.has(f) ||
          Array.prototype.forEach.call(f.children, function (d) {
            if (s.has(d)) u(d);
            else {
              var v = d.getAttribute(n),
                p = v !== null && v !== "false",
                m = (Ya.get(d) || 0) + 1,
                g = (o.get(d) || 0) + 1;
              Ya.set(d, m), o.set(d, g), i.push(d), m === 1 && p && rc.set(d, !0), g === 1 && d.setAttribute(r, "true"), p || d.setAttribute(n, "true");
            }
          });
      };
      return (
        u(t),
        s.clear(),
        Ad++,
        function () {
          i.forEach(function (f) {
            var d = Ya.get(f) - 1,
              v = o.get(f) - 1;
            Ya.set(f, d), o.set(f, v), d || (rc.has(f) || f.removeAttribute(n), rc.delete(f)), v || f.removeAttribute(r);
          }),
            Ad--,
            Ad || ((Ya = new WeakMap()), (Ya = new WeakMap()), (rc = new WeakMap()), (nc = {}));
        }
      );
    },
    fR = function (e, t, r) {
      r === void 0 && (r = "data-aria-hidden");
      var n = Array.from(Array.isArray(e) ? e : [e]),
        a = t || cR(e);
      return a
        ? (n.push.apply(n, Array.from(a.querySelectorAll("[aria-live]"))), uR(n, a, r, "aria-hidden"))
        : function () {
            return null;
          };
    },
    tl = "right-scroll-bar-position",
    rl = "width-before-scroll-bar",
    dR = "with-scroll-bars-hidden",
    hR = "--removed-body-scroll-bar-size",
    bb,
    vR = function () {
      if (bb) return bb;
      if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
    };
  function pR() {
    if (!document) return null;
    var e = document.createElement("style");
    e.type = "text/css";
    var t = vR();
    return t && e.setAttribute("nonce", t), e;
  }
  function mR(e, t) {
    e.styleSheet ? (e.styleSheet.cssText = t) : e.appendChild(document.createTextNode(t));
  }
  function gR(e) {
    var t = document.head || document.getElementsByTagName("head")[0];
    t.appendChild(e);
  }
  var yR = function () {
      var e = 0,
        t = null;
      return {
        add: function (r) {
          e == 0 && (t = pR()) && (mR(t, r), gR(t)), e++;
        },
        remove: function () {
          e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
        },
      };
    },
    bR = function () {
      var e = yR();
      return function (t, r) {
        h.useEffect(
          function () {
            return (
              e.add(t),
              function () {
                e.remove();
              }
            );
          },
          [t && r]
        );
      };
    },
    nT = function () {
      var e = bR(),
        t = function (r) {
          var n = r.styles,
            a = r.dynamic;
          return e(n, a), null;
        };
      return t;
    },
    $R = { left: 0, top: 0, right: 0, gap: 0 },
    Rd = function (e) {
      return parseInt(e || "", 10) || 0;
    },
    wR = function (e) {
      var t = window.getComputedStyle(document.body),
        r = t[e === "padding" ? "paddingLeft" : "marginLeft"],
        n = t[e === "padding" ? "paddingTop" : "marginTop"],
        a = t[e === "padding" ? "paddingRight" : "marginRight"];
      return [Rd(r), Rd(n), Rd(a)];
    },
    SR = function (e) {
      if ((e === void 0 && (e = "margin"), typeof window > "u")) return $R;
      var t = wR(e),
        r = document.documentElement.clientWidth,
        n = window.innerWidth;
      return { left: t[0], top: t[1], right: t[2], gap: Math.max(0, n - r + t[2] - t[0]) };
    },
    ER = nT(),
    xR = function (e, t, r, n) {
      var a = e.left,
        o = e.top,
        i = e.right,
        s = e.gap;
      return (
        r === void 0 && (r = "margin"),
        `
  .`
          .concat(
            dR,
            ` {
   overflow: hidden `
          )
          .concat(
            n,
            `;
   padding-right: `
          )
          .concat(s, "px ")
          .concat(
            n,
            `;
  }
  body {
    overflow: hidden `
          )
          .concat(
            n,
            `;
    overscroll-behavior: contain;
    `
          )
          .concat(
            [
              t && "position: relative ".concat(n, ";"),
              r === "margin" &&
                `
    padding-left: `
                  .concat(
                    a,
                    `px;
    padding-top: `
                  )
                  .concat(
                    o,
                    `px;
    padding-right: `
                  )
                  .concat(
                    i,
                    `px;
    margin-left:0;
    margin-top:0;
    margin-right: `
                  )
                  .concat(s, "px ")
                  .concat(
                    n,
                    `;
    `
                  ),
              r === "padding" && "padding-right: ".concat(s, "px ").concat(n, ";"),
            ]
              .filter(Boolean)
              .join(""),
            `
  }
  
  .`
          )
          .concat(
            tl,
            ` {
    right: `
          )
          .concat(s, "px ")
          .concat(
            n,
            `;
  }
  
  .`
          )
          .concat(
            rl,
            ` {
    margin-right: `
          )
          .concat(s, "px ")
          .concat(
            n,
            `;
  }
  
  .`
          )
          .concat(tl, " .")
          .concat(
            tl,
            ` {
    right: 0 `
          )
          .concat(
            n,
            `;
  }
  
  .`
          )
          .concat(rl, " .")
          .concat(
            rl,
            ` {
    margin-right: 0 `
          )
          .concat(
            n,
            `;
  }
  
  body {
    `
          )
          .concat(hR, ": ")
          .concat(
            s,
            `px;
  }
`
          )
      );
    },
    TR = function (e) {
      var t = e.noRelative,
        r = e.noImportant,
        n = e.gapMode,
        a = n === void 0 ? "margin" : n,
        o = h.useMemo(
          function () {
            return SR(a);
          },
          [a]
        );
      return h.createElement(ER, { styles: xR(o, !t, a, r ? "" : "!important") });
    };
  function CR() {
    const e = h.useRef(!0);
    return (
      h.useEffect(() => {
        e.current = !1;
      }, []),
      e.current
    );
  }
  function OR(e) {
    const t = h.useRef();
    return (
      h.useEffect(() => {
        t.current = e;
      }, [e]),
      t.current
    );
  }
  var _R = we("div", {
      baseStyle: {
        boxShadow: "none",
        backgroundClip: "padding-box",
        cursor: "default",
        color: "transparent",
        pointerEvents: "none",
        userSelect: "none",
        "&::before, &::after, *": { visibility: "hidden" },
      },
    }),
    op = Tx("skeleton-start-color"),
    ip = Tx("skeleton-end-color"),
    PR = Cx({ from: { opacity: 0 }, to: { opacity: 1 } }),
    IR = Cx({ from: { borderColor: op.reference, background: op.reference }, to: { borderColor: ip.reference, background: ip.reference } }),
    dg = We((e, t) => {
      const r = { ...e, fadeDuration: typeof e.fadeDuration == "number" ? e.fadeDuration : 0.4, speed: typeof e.speed == "number" ? e.speed : 0.8 },
        n = ps("Skeleton", r),
        a = CR(),
        { startColor: o = "", endColor: i = "", isLoaded: s, fadeDuration: c, speed: l, className: u, fitContent: f, ...d } = lr(r),
        [v, p] = y8("colors", [o, i]),
        m = OR(s),
        g = It("chakra-skeleton", u),
        y = { ...(v && { [op.variable]: v }), ...(p && { [ip.variable]: p }) };
      if (s) {
        const b = a || m ? "none" : `${PR} ${c}s`;
        return x(we.div, { ref: t, className: g, __css: { animation: b }, ...d });
      }
      return x(_R, { ref: t, className: g, ...d, __css: { width: f ? "fit-content" : void 0, ...n, ...y, _dark: { ...n._dark, ...y }, animation: `${l}s linear infinite alternate ${IR}` } });
    });
  dg.displayName = "Skeleton";
  var Ka = (e) => (e ? "" : void 0),
    Md = (e) => (e ? !0 : void 0),
    Ss = (...e) => e.filter(Boolean).join(" ");
  function Dd(...e) {
    return function (r) {
      e.some((n) => (n == null || n(r), r == null ? void 0 : r.defaultPrevented));
    };
  }
  function ac(e) {
    const { orientation: t, vertical: r, horizontal: n } = e;
    return t === "vertical" ? r : n;
  }
  var nl = { width: 0, height: 0 },
    oc = (e) => e || nl;
  function AR(e) {
    const { orientation: t, thumbPercents: r, thumbRects: n, isReversed: a } = e,
      o = (m) => {
        var g;
        const y = (g = n[m]) != null ? g : nl;
        return {
          position: "absolute",
          userSelect: "none",
          WebkitUserSelect: "none",
          MozUserSelect: "none",
          msUserSelect: "none",
          touchAction: "none",
          ...ac({ orientation: t, vertical: { bottom: `calc(${r[m]}% - ${y.height / 2}px)` }, horizontal: { left: `calc(${r[m]}% - ${y.width / 2}px)` } }),
        };
      },
      i = t === "vertical" ? n.reduce((m, g) => (oc(m).height > oc(g).height ? m : g), nl) : n.reduce((m, g) => (oc(m).width > oc(g).width ? m : g), nl),
      s = {
        position: "relative",
        touchAction: "none",
        WebkitTapHighlightColor: "rgba(0,0,0,0)",
        userSelect: "none",
        outline: 0,
        ...ac({ orientation: t, vertical: i ? { paddingLeft: i.width / 2, paddingRight: i.width / 2 } : {}, horizontal: i ? { paddingTop: i.height / 2, paddingBottom: i.height / 2 } : {} }),
      },
      c = {
        position: "absolute",
        ...ac({ orientation: t, vertical: { left: "50%", transform: "translateX(-50%)", height: "100%" }, horizontal: { top: "50%", transform: "translateY(-50%)", width: "100%" } }),
      },
      l = r.length === 1,
      u = [0, a ? 100 - r[0] : r[0]],
      f = l ? u : r;
    let d = f[0];
    !l && a && (d = 100 - d);
    const v = Math.abs(f[f.length - 1] - f[0]),
      p = {
        ...c,
        ...ac({
          orientation: t,
          vertical: a ? { height: `${v}%`, top: `${d}%` } : { height: `${v}%`, bottom: `${d}%` },
          horizontal: a ? { width: `${v}%`, right: `${d}%` } : { width: `${v}%`, left: `${d}%` },
        }),
      };
    return { trackStyle: c, innerTrackStyle: p, rootStyle: s, getThumbStyle: o };
  }
  function RR(e) {
    const { isReversed: t, direction: r, orientation: n } = e;
    return r === "ltr" || n === "vertical" ? t : !t;
  }
  function MR(e, t, r, n) {
    return (
      e.addEventListener(t, r, n),
      () => {
        e.removeEventListener(t, r, n);
      }
    );
  }
  function DR(e) {
    const t = kR(e);
    return typeof t.PointerEvent < "u" && e instanceof t.PointerEvent ? e.pointerType === "mouse" : e instanceof t.MouseEvent;
  }
  function aT(e) {
    return !!e.touches;
  }
  function NR(e) {
    return aT(e) && e.touches.length > 1;
  }
  function kR(e) {
    var t;
    return (t = e.view) != null ? t : window;
  }
  function LR(e, t = "page") {
    const r = e.touches[0] || e.changedTouches[0];
    return { x: r[`${t}X`], y: r[`${t}Y`] };
  }
  function FR(e, t = "page") {
    return { x: e[`${t}X`], y: e[`${t}Y`] };
  }
  function oT(e, t = "page") {
    return aT(e) ? LR(e, t) : FR(e, t);
  }
  function jR(e) {
    return (t) => {
      const r = DR(t);
      (!r || (r && t.button === 0)) && e(t);
    };
  }
  function BR(e, t = !1) {
    function r(a) {
      e(a, { point: oT(a) });
    }
    return t ? jR(r) : r;
  }
  function al(e, t, r, n) {
    return MR(e, t, BR(r, t === "pointerdown"), n);
  }
  var UR = Object.defineProperty,
    WR = (e, t, r) => (t in e ? UR(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
    ar = (e, t, r) => (WR(e, typeof t != "symbol" ? t + "" : t, r), r),
    HR = class {
      constructor(e, t, r) {
        ar(this, "history", []),
          ar(this, "startEvent", null),
          ar(this, "lastEvent", null),
          ar(this, "lastEventInfo", null),
          ar(this, "handlers", {}),
          ar(this, "removeListeners", () => {}),
          ar(this, "threshold", 3),
          ar(this, "win"),
          ar(this, "updatePoint", () => {
            if (!(this.lastEvent && this.lastEventInfo)) return;
            const s = Nd(this.lastEventInfo, this.history),
              c = this.startEvent !== null,
              l = YR(s.offset, { x: 0, y: 0 }) >= this.threshold;
            if (!c && !l) return;
            const { timestamp: u } = eb();
            this.history.push({ ...s.point, timestamp: u });
            const { onStart: f, onMove: d } = this.handlers;
            c || (f == null || f(this.lastEvent, s), (this.startEvent = this.lastEvent)), d == null || d(this.lastEvent, s);
          }),
          ar(this, "onPointerMove", (s, c) => {
            (this.lastEvent = s), (this.lastEventInfo = c), Y8.update(this.updatePoint, !0);
          }),
          ar(this, "onPointerUp", (s, c) => {
            const l = Nd(c, this.history),
              { onEnd: u, onSessionEnd: f } = this.handlers;
            f == null || f(s, l), this.end(), !(!u || !this.startEvent) && (u == null || u(s, l));
          });
        var n;
        if (((this.win = (n = e.view) != null ? n : window), NR(e))) return;
        (this.handlers = t), r && (this.threshold = r), e.stopPropagation(), e.preventDefault();
        const a = { point: oT(e) },
          { timestamp: o } = eb();
        this.history = [{ ...a.point, timestamp: o }];
        const { onSessionStart: i } = t;
        i == null || i(e, Nd(a, this.history)),
          (this.removeListeners = GR(al(this.win, "pointermove", this.onPointerMove), al(this.win, "pointerup", this.onPointerUp), al(this.win, "pointercancel", this.onPointerUp)));
      }
      updateHandlers(e) {
        this.handlers = e;
      }
      end() {
        var e;
        (e = this.removeListeners) == null || e.call(this), K8.update(this.updatePoint);
      }
    };
  function $b(e, t) {
    return { x: e.x - t.x, y: e.y - t.y };
  }
  function Nd(e, t) {
    return { point: e.point, delta: $b(e.point, t[t.length - 1]), offset: $b(e.point, t[0]), velocity: VR(t, 0.1) };
  }
  var zR = (e) => e * 1e3;
  function VR(e, t) {
    if (e.length < 2) return { x: 0, y: 0 };
    let r = e.length - 1,
      n = null;
    const a = e[e.length - 1];
    for (; r >= 0 && ((n = e[r]), !(a.timestamp - n.timestamp > zR(t))); ) r--;
    if (!n) return { x: 0, y: 0 };
    const o = (a.timestamp - n.timestamp) / 1e3;
    if (o === 0) return { x: 0, y: 0 };
    const i = { x: (a.x - n.x) / o, y: (a.y - n.y) / o };
    return i.x === 1 / 0 && (i.x = 0), i.y === 1 / 0 && (i.y = 0), i;
  }
  function GR(...e) {
    return (t) => e.reduce((r, n) => n(r), t);
  }
  function kd(e, t) {
    return Math.abs(e - t);
  }
  function wb(e) {
    return "x" in e && "y" in e;
  }
  function YR(e, t) {
    if (typeof e == "number" && typeof t == "number") return kd(e, t);
    if (wb(e) && wb(t)) {
      const r = kd(e.x, t.x),
        n = kd(e.y, t.y);
      return Math.sqrt(r ** 2 + n ** 2);
    }
    return 0;
  }
  function iT(e) {
    const t = h.useRef(null);
    return (t.current = e), t;
  }
  function KR(e, t) {
    const { onPan: r, onPanStart: n, onPanEnd: a, onPanSessionStart: o, onPanSessionEnd: i, threshold: s } = t,
      c = !!(r || n || a || o || i),
      l = h.useRef(null),
      u = iT({
        onSessionStart: o,
        onSessionEnd: i,
        onStart: n,
        onMove: r,
        onEnd(f, d) {
          (l.current = null), a == null || a(f, d);
        },
      });
    h.useEffect(() => {
      var f;
      (f = l.current) == null || f.updateHandlers(u.current);
    }),
      h.useEffect(() => {
        const f = e.current;
        if (!f || !c) return;
        function d(v) {
          l.current = new HR(v, u.current, s);
        }
        return al(f, "pointerdown", d);
      }, [e, c, u, s]),
      h.useEffect(
        () => () => {
          var f;
          (f = l.current) == null || f.end(), (l.current = null);
        },
        []
      );
  }
  function qR(e, t) {
    if (!e) {
      t(void 0);
      return;
    }
    t({ width: e.offsetWidth, height: e.offsetHeight });
    const r = e.ownerDocument.defaultView ?? window,
      n = new r.ResizeObserver((a) => {
        if (!Array.isArray(a) || !a.length) return;
        const [o] = a;
        let i, s;
        if ("borderBoxSize" in o) {
          const c = o.borderBoxSize,
            l = Array.isArray(c) ? c[0] : c;
          (i = l.inlineSize), (s = l.blockSize);
        } else (i = e.offsetWidth), (s = e.offsetHeight);
        t({ width: i, height: s });
      });
    return n.observe(e, { box: "border-box" }), () => n.unobserve(e);
  }
  var XR = globalThis != null && globalThis.document ? h.useLayoutEffect : h.useEffect;
  function ZR(e, t) {
    var r, n;
    if (!e || !e.parentElement) return;
    const a = (n = (r = e.ownerDocument) == null ? void 0 : r.defaultView) != null ? n : window,
      o = new a.MutationObserver(() => {
        t();
      });
    return (
      o.observe(e.parentElement, { childList: !0 }),
      () => {
        o.disconnect();
      }
    );
  }
  function JR({ getNodes: e, observeMutation: t = !0 }) {
    const [r, n] = h.useState([]),
      [a, o] = h.useState(0);
    return (
      XR(() => {
        const i = e(),
          s = i.map((c, l) =>
            qR(c, (u) => {
              n((f) => [...f.slice(0, l), u, ...f.slice(l + 1)]);
            })
          );
        if (t) {
          const c = i[0];
          s.push(
            ZR(c, () => {
              o((l) => l + 1);
            })
          );
        }
        return () => {
          s.forEach((c) => {
            c == null || c();
          });
        };
      }, [a]),
      r
    );
  }
  function QR(e) {
    return typeof e == "object" && e !== null && "current" in e;
  }
  function eM(e) {
    const [t] = JR({
      observeMutation: !1,
      getNodes() {
        return [QR(e) ? e.current : e];
      },
    });
    return t;
  }
  function tM(e) {
    var t;
    const {
        min: r = 0,
        max: n = 100,
        onChange: a,
        value: o,
        defaultValue: i,
        isReversed: s,
        direction: c = "ltr",
        orientation: l = "horizontal",
        id: u,
        isDisabled: f,
        isReadOnly: d,
        onChangeStart: v,
        onChangeEnd: p,
        step: m = 1,
        getAriaValueText: g,
        "aria-valuetext": y,
        "aria-label": b,
        "aria-labelledby": $,
        name: S,
        focusThumbOnChange: A = !0,
        ...P
      } = e,
      M = Vt(v),
      T = Vt(p),
      F = Vt(g),
      k = RR({ isReversed: s, direction: c, orientation: l }),
      [D, _] = eA({ value: o, defaultValue: i ?? nM(r, n), onChange: a }),
      [O, w] = h.useState(!1),
      [R, I] = h.useState(!1),
      N = !(f || d),
      B = (n - r) / 10,
      W = m || (n - r) / 100,
      C = _d(D, r, n),
      E = n - C + r,
      X = ab(k ? E : C, r, n),
      q = l === "vertical",
      K = iT({ min: r, max: n, step: m, isDisabled: f, value: C, isInteractive: N, isReversed: k, isVertical: q, eventSource: null, focusThumbOnChange: A, orientation: l }),
      te = h.useRef(null),
      z = h.useRef(null),
      J = h.useRef(null),
      H = h.useId(),
      G = u ?? H,
      [Y, L] = [`slider-thumb-${G}`, `slider-track-${G}`],
      ne = h.useCallback(
        (ie) => {
          var ve, yr;
          if (!te.current) return;
          const it = K.current;
          it.eventSource = "pointer";
          const nr = te.current.getBoundingClientRect(),
            { clientX: ii, clientY: Sd } = (yr = (ve = ie.touches) == null ? void 0 : ve[0]) != null ? yr : ie,
            Ed = q ? nr.bottom - Sd : ii - nr.left,
            Js = q ? nr.height : nr.width;
          let ee = Ed / Js;
          k && (ee = 1 - ee);
          let oe = _A(ee, it.min, it.max);
          return it.step && (oe = parseFloat(ob(oe, it.min, it.step))), (oe = _d(oe, it.min, it.max)), oe;
        },
        [q, k, K]
      ),
      Z = h.useCallback(
        (ie) => {
          const ve = K.current;
          ve.isInteractive && ((ie = parseFloat(ob(ie, ve.min, W))), (ie = _d(ie, ve.min, ve.max)), _(ie));
        },
        [W, _, K]
      ),
      Q = h.useMemo(
        () => ({
          stepUp(ie = W) {
            const ve = k ? C - ie : C + ie;
            Z(ve);
          },
          stepDown(ie = W) {
            const ve = k ? C + ie : C - ie;
            Z(ve);
          },
          reset() {
            Z(i || 0);
          },
          stepTo(ie) {
            Z(ie);
          },
        }),
        [Z, k, C, W, i]
      ),
      le = h.useCallback(
        (ie) => {
          const ve = K.current,
            it = {
              ArrowRight: () => Q.stepUp(),
              ArrowUp: () => Q.stepUp(),
              ArrowLeft: () => Q.stepDown(),
              ArrowDown: () => Q.stepDown(),
              PageUp: () => Q.stepUp(B),
              PageDown: () => Q.stepDown(B),
              Home: () => Z(ve.min),
              End: () => Z(ve.max),
            }[ie.key];
          it && (ie.preventDefault(), ie.stopPropagation(), it(ie), (ve.eventSource = "keyboard"));
        },
        [Q, Z, B, K]
      ),
      he = (t = F == null ? void 0 : F(C)) != null ? t : y,
      $e = eM(z),
      {
        getThumbStyle: He,
        rootStyle: Se,
        trackStyle: Xe,
        innerTrackStyle: U,
      } = h.useMemo(() => {
        const ie = K.current,
          ve = $e ?? { width: 0, height: 0 };
        return AR({ isReversed: k, orientation: ie.orientation, thumbRects: [ve], thumbPercents: [X] });
      }, [k, $e, X, K]),
      re = h.useCallback(() => {
        K.current.focusThumbOnChange &&
          setTimeout(() => {
            var ve;
            return (ve = z.current) == null ? void 0 : ve.focus();
          });
      }, [K]);
    Ex(() => {
      const ie = K.current;
      re(), ie.eventSource === "keyboard" && (T == null || T(ie.value));
    }, [C, T]);
    function ae(ie) {
      const ve = ne(ie);
      ve != null && ve !== K.current.value && _(ve);
    }
    KR(J, {
      onPanSessionStart(ie) {
        const ve = K.current;
        ve.isInteractive && (w(!0), re(), ae(ie), M == null || M(ve.value));
      },
      onPanSessionEnd() {
        const ie = K.current;
        ie.isInteractive && (w(!1), T == null || T(ie.value));
      },
      onPan(ie) {
        K.current.isInteractive && ae(ie);
      },
    });
    const ce = h.useCallback((ie = {}, ve = null) => ({ ...ie, ...P, ref: wr(ve, J), tabIndex: -1, "aria-disabled": Md(f), "data-focused": Ka(R), style: { ...ie.style, ...Se } }), [P, f, R, Se]),
      fe = h.useCallback((ie = {}, ve = null) => ({ ...ie, ref: wr(ve, te), id: L, "data-disabled": Ka(f), style: { ...ie.style, ...Xe } }), [f, L, Xe]),
      me = h.useCallback((ie = {}, ve = null) => ({ ...ie, ref: ve, style: { ...ie.style, ...U } }), [U]),
      Te = h.useCallback(
        (ie = {}, ve = null) => ({
          ...ie,
          ref: wr(ve, z),
          role: "slider",
          tabIndex: N ? 0 : void 0,
          id: Y,
          "data-active": Ka(O),
          "aria-valuetext": he,
          "aria-valuemin": r,
          "aria-valuemax": n,
          "aria-valuenow": C,
          "aria-orientation": l,
          "aria-disabled": Md(f),
          "aria-readonly": Md(d),
          "aria-label": b,
          "aria-labelledby": b ? void 0 : $,
          style: { ...ie.style, ...He(0) },
          onKeyDown: Dd(ie.onKeyDown, le),
          onFocus: Dd(ie.onFocus, () => I(!0)),
          onBlur: Dd(ie.onBlur, () => I(!1)),
        }),
        [N, Y, O, he, r, n, C, l, f, d, b, $, He, le]
      ),
      dt = h.useCallback(
        (ie, ve = null) => {
          const yr = !(ie.value < r || ie.value > n),
            it = C >= ie.value,
            nr = ab(ie.value, r, n),
            ii = { position: "absolute", pointerEvents: "none", ...rM({ orientation: l, vertical: { bottom: k ? `${100 - nr}%` : `${nr}%` }, horizontal: { left: k ? `${100 - nr}%` : `${nr}%` } }) };
          return { ...ie, ref: ve, role: "presentation", "aria-hidden": !0, "data-disabled": Ka(f), "data-invalid": Ka(!yr), "data-highlighted": Ka(it), style: { ...ie.style, ...ii } };
        },
        [f, k, n, r, l, C]
      ),
      mr = h.useCallback((ie = {}, ve = null) => ({ ...ie, ref: ve, type: "hidden", value: C, name: S }), [S, C]);
    return { state: { value: C, isFocused: R, isDragging: O }, actions: Q, getRootProps: ce, getTrackProps: fe, getInnerTrackProps: me, getThumbProps: Te, getMarkerProps: dt, getInputProps: mr };
  }
  function rM(e) {
    const { orientation: t, vertical: r, horizontal: n } = e;
    return t === "vertical" ? r : n;
  }
  function nM(e, t) {
    return t < e ? e : e + (t - e) / 2;
  }
  var [aM, Nu] = vs({ name: "SliderContext", hookName: "useSliderContext", providerName: "<Slider />" }),
    [oM, ku] = vs({ name: "SliderStylesContext", hookName: "useSliderStyles", providerName: "<Slider />" }),
    sT = We((e, t) => {
      var r;
      const n = { ...e, orientation: (r = e == null ? void 0 : e.orientation) != null ? r : "horizontal" },
        a = Vo("Slider", n),
        o = lr(n),
        { direction: i } = Ox();
      o.direction = i;
      const { getInputProps: s, getRootProps: c, ...l } = tM(o),
        u = c(),
        f = s({}, t);
      return x(aM, {
        value: l,
        children: x(oM, { value: a, children: se(we.div, { ...u, className: Ss("chakra-slider", n.className), __css: a.container, children: [n.children, x("input", { ...f })] }) }),
      });
    });
  sT.displayName = "Slider";
  var cT = We((e, t) => {
    const { getThumbProps: r } = Nu(),
      n = ku(),
      a = r(e, t);
    return x(we.div, { ...a, className: Ss("chakra-slider__thumb", e.className), __css: n.thumb });
  });
  cT.displayName = "SliderThumb";
  var lT = We((e, t) => {
    const { getTrackProps: r } = Nu(),
      n = ku(),
      a = r(e, t);
    return x(we.div, { ...a, className: Ss("chakra-slider__track", e.className), __css: n.track });
  });
  lT.displayName = "SliderTrack";
  var uT = We((e, t) => {
    const { getInnerTrackProps: r } = Nu(),
      n = ku(),
      a = r(e, t);
    return x(we.div, { ...a, className: Ss("chakra-slider__filled-track", e.className), __css: n.filledTrack });
  });
  uT.displayName = "SliderFilledTrack";
  var iM = We((e, t) => {
    const { getMarkerProps: r } = Nu(),
      n = ku(),
      a = r(e, t);
    return x(we.div, { ...a, className: Ss("chakra-slider__marker", e.className), __css: n.mark });
  });
  iM.displayName = "SliderMark";
  var Je = We(function (t, r) {
    const n = Vo("Switch", t),
      { spacing: a = "0.5rem", children: o, ...i } = lr(t),
      { getIndicatorProps: s, getInputProps: c, getCheckboxProps: l, getRootProps: u, getLabelProps: f } = EA(i),
      d = h.useMemo(() => ({ display: "inline-block", position: "relative", verticalAlign: "middle", lineHeight: 0, ...n.container }), [n.container]),
      v = h.useMemo(() => ({ display: "inline-flex", flexShrink: 0, justifyContent: "flex-start", boxSizing: "content-box", cursor: "pointer", ...n.track }), [n.track]),
      p = h.useMemo(() => ({ userSelect: "none", marginStart: a, ...n.label }), [a, n.label]);
    return se(we.label, {
      ...u(),
      className: It("chakra-switch", t.className),
      __css: d,
      children: [
        x("input", { className: "chakra-switch__input", ...c({}, r) }),
        x(we.span, { ...l(), className: "chakra-switch__track", __css: v, children: x(we.span, { __css: n.thumb, className: "chakra-switch__thumb", ...s() }) }),
        o && x(we.span, { className: "chakra-switch__label", ...f(), __css: p, children: o }),
      ],
    });
  });
  Je.displayName = "Switch";
  var sM = {
      exit: { scale: 0.85, opacity: 0, transition: { opacity: { duration: 0.15, easings: "easeInOut" }, scale: { duration: 0.2, easings: "easeInOut" } } },
      enter: { scale: 1, opacity: 1, transition: { opacity: { easings: "easeOut", duration: 0.2 }, scale: { duration: 0.2, ease: [0.175, 0.885, 0.4, 1.1] } } },
    },
    sp = (e) => {
      var t;
      return ((t = e.current) == null ? void 0 : t.ownerDocument) || document;
    },
    ol = (e) => {
      var t, r;
      return ((r = (t = e.current) == null ? void 0 : t.ownerDocument) == null ? void 0 : r.defaultView) || window;
    };
  function cM(e = {}) {
    const {
        openDelay: t = 0,
        closeDelay: r = 0,
        closeOnClick: n = !0,
        closeOnMouseDown: a,
        closeOnScroll: o,
        closeOnPointerDown: i = a,
        closeOnEsc: s = !0,
        onOpen: c,
        onClose: l,
        placement: u,
        id: f,
        isOpen: d,
        defaultIsOpen: v,
        arrowSize: p = 10,
        arrowShadowColor: m,
        arrowPadding: g,
        modifiers: y,
        isDisabled: b,
        gutter: $,
        offset: S,
        direction: A,
        ...P
      } = e,
      { isOpen: M, onOpen: T, onClose: F } = sR({ isOpen: d, defaultIsOpen: v, onOpen: c, onClose: l }),
      { referenceRef: k, getPopperProps: D, getArrowInnerProps: _, getArrowProps: O } = oR({ enabled: M, placement: u, arrowPadding: g, modifiers: y, gutter: $, offset: S, direction: A }),
      w = h.useId(),
      I = `tooltip-${f ?? w}`,
      N = h.useRef(null),
      B = h.useRef(),
      W = h.useCallback(() => {
        B.current && (clearTimeout(B.current), (B.current = void 0));
      }, []),
      C = h.useRef(),
      E = h.useCallback(() => {
        C.current && (clearTimeout(C.current), (C.current = void 0));
      }, []),
      V = h.useCallback(() => {
        E(), F();
      }, [F, E]),
      X = lM(N, V),
      q = h.useCallback(() => {
        if (!b && !B.current) {
          M && X();
          const L = ol(N);
          B.current = L.setTimeout(T, t);
        }
      }, [X, b, M, T, t]),
      K = h.useCallback(() => {
        W();
        const L = ol(N);
        C.current = L.setTimeout(V, r);
      }, [r, V, W]),
      te = h.useCallback(() => {
        M && n && K();
      }, [n, K, M]),
      z = h.useCallback(() => {
        M && i && K();
      }, [i, K, M]),
      J = h.useCallback(
        (L) => {
          M && L.key === "Escape" && K();
        },
        [M, K]
      );
    Pd(() => sp(N), "keydown", s ? J : void 0),
      Pd(
        () => {
          if (!o) return null;
          const L = N.current;
          if (!L) return null;
          const ne = zx(L);
          return ne.localName === "body" ? ol(N) : ne;
        },
        "scroll",
        () => {
          M && o && V();
        },
        { passive: !0, capture: !0 }
      ),
      h.useEffect(() => {
        b && (W(), M && F());
      }, [b, M, F, W]),
      h.useEffect(
        () => () => {
          W(), E();
        },
        [W, E]
      ),
      Pd(() => N.current, "pointerleave", K);
    const H = h.useCallback(
        (L = {}, ne = null) => ({
          ...L,
          ref: wr(N, ne, k),
          onPointerEnter: Qe(L.onPointerEnter, (Q) => {
            Q.pointerType !== "touch" && q();
          }),
          onClick: Qe(L.onClick, te),
          onPointerDown: Qe(L.onPointerDown, z),
          onFocus: Qe(L.onFocus, q),
          onBlur: Qe(L.onBlur, K),
          "aria-describedby": M ? I : void 0,
        }),
        [q, K, z, M, I, te, k]
      ),
      G = h.useCallback((L = {}, ne = null) => D({ ...L, style: { ...L.style, [ct.arrowSize.var]: p ? `${p}px` : void 0, [ct.arrowShadowColor.var]: m } }, ne), [D, p, m]),
      Y = h.useCallback(
        (L = {}, ne = null) => {
          const Z = { ...L.style, position: "relative", transformOrigin: ct.transformOrigin.varRef };
          return { ref: ne, ...P, ...L, id: I, role: "tooltip", style: Z };
        },
        [P, I]
      );
    return { isOpen: M, show: q, hide: K, getTriggerProps: H, getTooltipProps: Y, getTooltipPositionerProps: G, getArrowProps: O, getArrowInnerProps: _ };
  }
  var Ld = "chakra-ui:close-tooltip";
  function lM(e, t) {
    return (
      h.useEffect(() => {
        const r = sp(e);
        return r.addEventListener(Ld, t), () => r.removeEventListener(Ld, t);
      }, [t, e]),
      () => {
        const r = sp(e),
          n = ol(e);
        r.dispatchEvent(new n.CustomEvent(Ld));
      }
    );
  }
  function uM(e, t = []) {
    const r = Object.assign({}, e);
    for (const n of t) n in r && delete r[n];
    return r;
  }
  function fM(e, t) {
    const r = {};
    for (const n of t) n in e && (r[n] = e[n]);
    return r;
  }
  var dM = we(Jv.div),
    fT = We((e, t) => {
      var r, n;
      const a = ps("Tooltip", e),
        o = lr(e),
        i = Ox(),
        { children: s, label: c, shouldWrapChildren: l, "aria-label": u, hasArrow: f, bg: d, portalProps: v, background: p, backgroundColor: m, bgColor: g, motionProps: y, ...b } = o,
        $ = (n = (r = p ?? m) != null ? r : d) != null ? n : g;
      if ($) {
        a.bg = $;
        const D = b8(i, "colors", $);
        a[ct.arrowBg.var] = D;
      }
      const S = cM({ ...b, direction: i.direction }),
        A = typeof s == "string" || l;
      let P;
      if (A) P = x(we.span, { display: "inline-block", tabIndex: 0, ...S.getTriggerProps(), children: s });
      else {
        const D = h.Children.only(s);
        P = h.cloneElement(D, S.getTriggerProps(D.props, D.ref));
      }
      const M = !!u,
        T = S.getTooltipProps({}, t),
        F = M ? uM(T, ["role", "id"]) : T,
        k = fM(T, ["role", "id"]);
      return c
        ? se(_l, {
            children: [
              P,
              x($8, {
                children:
                  S.isOpen &&
                  x(w8, {
                    ...v,
                    children: x(we.div, {
                      ...S.getTooltipPositionerProps(),
                      __css: { zIndex: a.zIndex, pointerEvents: "none" },
                      children: se(dM, {
                        variants: sM,
                        initial: "exit",
                        animate: "enter",
                        exit: "exit",
                        ...y,
                        ...F,
                        __css: a,
                        children: [
                          c,
                          M && x(we.span, { srOnly: !0, ...k, children: u }),
                          f &&
                            x(we.div, {
                              "data-popper-arrow": !0,
                              className: "chakra-tooltip__arrow-wrapper",
                              children: x(we.div, { "data-popper-arrow-inner": !0, className: "chakra-tooltip__arrow", __css: { bg: a.bg } }),
                            }),
                        ],
                      }),
                    }),
                  }),
              }),
            ],
          })
        : x(_l, { children: s });
    });
  fT.displayName = "Tooltip";
  function hM(e) {
    return nt(e == null ? void 0 : e.lift);
  }
  function Yo(e) {
    return function (t) {
      if (hM(t))
        return t.lift(function (r) {
          try {
            return e(r, this);
          } catch (n) {
            this.error(n);
          }
        });
      throw new TypeError("Unable to lift unknown Observable type");
    };
  }
  function Mo(e, t, r, n, a) {
    return new vM(e, t, r, n, a);
  }
  var vM = (function (e) {
      Ru(t, e);
      function t(r, n, a, o, i, s) {
        var c = e.call(this, r) || this;
        return (
          (c.onFinalize = i),
          (c.shouldUnsubscribe = s),
          (c._next = n
            ? function (l) {
                try {
                  n(l);
                } catch (u) {
                  r.error(u);
                }
              }
            : e.prototype._next),
          (c._error = o
            ? function (l) {
                try {
                  o(l);
                } catch (u) {
                  r.error(u);
                } finally {
                  this.unsubscribe();
                }
              }
            : e.prototype._error),
          (c._complete = a
            ? function () {
                try {
                  a();
                } catch (l) {
                  r.error(l);
                } finally {
                  this.unsubscribe();
                }
              }
            : e.prototype._complete),
          c
        );
      }
      return (
        (t.prototype.unsubscribe = function () {
          var r;
          if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
            var n = this.closed;
            e.prototype.unsubscribe.call(this), !n && ((r = this.onFinalize) === null || r === void 0 || r.call(this));
          }
        }),
        t
      );
    })(S8),
    dT = {
      now: function () {
        return (dT.delegate || Date).now();
      },
      delegate: void 0,
    },
    pM = (function (e) {
      Ru(t, e);
      function t(r, n) {
        return e.call(this) || this;
      }
      return (
        (t.prototype.schedule = function (r, n) {
          return this;
        }),
        t
      );
    })(E8),
    Dl = {
      setInterval: function (e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var a = Dl.delegate;
        return a != null && a.setInterval ? a.setInterval.apply(a, Pl([e, t], Il(r))) : setInterval.apply(void 0, Pl([e, t], Il(r)));
      },
      clearInterval: function (e) {
        var t = Dl.delegate;
        return ((t == null ? void 0 : t.clearInterval) || clearInterval)(e);
      },
      delegate: void 0,
    },
    mM = (function (e) {
      Ru(t, e);
      function t(r, n) {
        var a = e.call(this, r, n) || this;
        return (a.scheduler = r), (a.work = n), (a.pending = !1), a;
      }
      return (
        (t.prototype.schedule = function (r, n) {
          var a;
          if ((n === void 0 && (n = 0), this.closed)) return this;
          this.state = r;
          var o = this.id,
            i = this.scheduler;
          return (
            o != null && (this.id = this.recycleAsyncId(i, o, n)),
            (this.pending = !0),
            (this.delay = n),
            (this.id = (a = this.id) !== null && a !== void 0 ? a : this.requestAsyncId(i, this.id, n)),
            this
          );
        }),
        (t.prototype.requestAsyncId = function (r, n, a) {
          return a === void 0 && (a = 0), Dl.setInterval(r.flush.bind(r, this), a);
        }),
        (t.prototype.recycleAsyncId = function (r, n, a) {
          if ((a === void 0 && (a = 0), a != null && this.delay === a && this.pending === !1)) return n;
          n != null && Dl.clearInterval(n);
        }),
        (t.prototype.execute = function (r, n) {
          if (this.closed) return new Error("executing a cancelled action");
          this.pending = !1;
          var a = this._execute(r, n);
          if (a) return a;
          this.pending === !1 && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
        }),
        (t.prototype._execute = function (r, n) {
          var a = !1,
            o;
          try {
            this.work(r);
          } catch (i) {
            (a = !0), (o = i || new Error("Scheduled action threw falsy error"));
          }
          if (a) return this.unsubscribe(), o;
        }),
        (t.prototype.unsubscribe = function () {
          if (!this.closed) {
            var r = this,
              n = r.id,
              a = r.scheduler,
              o = a.actions;
            (this.work = this.state = this.scheduler = null),
              (this.pending = !1),
              x8(o, this),
              n != null && (this.id = this.recycleAsyncId(a, n, null)),
              (this.delay = null),
              e.prototype.unsubscribe.call(this);
          }
        }),
        t
      );
    })(pM),
    Sb = (function () {
      function e(t, r) {
        r === void 0 && (r = e.now), (this.schedulerActionCtor = t), (this.now = r);
      }
      return (
        (e.prototype.schedule = function (t, r, n) {
          return r === void 0 && (r = 0), new this.schedulerActionCtor(this, t).schedule(n, r);
        }),
        (e.now = dT.now),
        e
      );
    })(),
    gM = (function (e) {
      Ru(t, e);
      function t(r, n) {
        n === void 0 && (n = Sb.now);
        var a = e.call(this, r, n) || this;
        return (a.actions = []), (a._active = !1), a;
      }
      return (
        (t.prototype.flush = function (r) {
          var n = this.actions;
          if (this._active) {
            n.push(r);
            return;
          }
          var a;
          this._active = !0;
          do if ((a = r.execute(r.state, r.delay))) break;
          while ((r = n.shift()));
          if (((this._active = !1), a)) {
            for (; (r = n.shift()); ) r.unsubscribe();
            throw a;
          }
        }),
        t
      );
    })(Sb),
    yM = new gM(mM),
    bM = new ur(function (e) {
      return e.complete();
    });
  function $M(e) {
    return e && nt(e.schedule);
  }
  function hT(e) {
    return e[e.length - 1];
  }
  function wM(e) {
    return $M(hT(e)) ? e.pop() : void 0;
  }
  function SM(e, t) {
    return typeof hT(e) == "number" ? e.pop() : t;
  }
  var hg = function (e) {
    return e && typeof e.length == "number" && typeof e != "function";
  };
  function vT(e) {
    return nt(e == null ? void 0 : e.then);
  }
  function pT(e) {
    return nt(e[_x]);
  }
  function mT(e) {
    return Symbol.asyncIterator && nt(e == null ? void 0 : e[Symbol.asyncIterator]);
  }
  function gT(e) {
    return new TypeError(
      "You provided " +
        (e !== null && typeof e == "object" ? "an invalid object" : "'" + e + "'") +
        " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable."
    );
  }
  function EM() {
    return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
  }
  var yT = EM();
  function bT(e) {
    return nt(e == null ? void 0 : e[yT]);
  }
  function $T(e) {
    return T8(this, arguments, function () {
      var r, n, a, o;
      return Px(this, function (i) {
        switch (i.label) {
          case 0:
            (r = e.getReader()), (i.label = 1);
          case 1:
            i.trys.push([1, , 9, 10]), (i.label = 2);
          case 2:
            return [4, Cd(r.read())];
          case 3:
            return (n = i.sent()), (a = n.value), (o = n.done), o ? [4, Cd(void 0)] : [3, 5];
          case 4:
            return [2, i.sent()];
          case 5:
            return [4, Cd(a)];
          case 6:
            return [4, i.sent()];
          case 7:
            return i.sent(), [3, 2];
          case 8:
            return [3, 10];
          case 9:
            return r.releaseLock(), [7];
          case 10:
            return [2];
        }
      });
    });
  }
  function wT(e) {
    return nt(e == null ? void 0 : e.getReader);
  }
  function xa(e) {
    if (e instanceof ur) return e;
    if (e != null) {
      if (pT(e)) return xM(e);
      if (hg(e)) return TM(e);
      if (vT(e)) return CM(e);
      if (mT(e)) return ST(e);
      if (bT(e)) return OM(e);
      if (wT(e)) return _M(e);
    }
    throw gT(e);
  }
  function xM(e) {
    return new ur(function (t) {
      var r = e[_x]();
      if (nt(r.subscribe)) return r.subscribe(t);
      throw new TypeError("Provided object does not correctly implement Symbol.observable");
    });
  }
  function TM(e) {
    return new ur(function (t) {
      for (var r = 0; r < e.length && !t.closed; r++) t.next(e[r]);
      t.complete();
    });
  }
  function CM(e) {
    return new ur(function (t) {
      e.then(
        function (r) {
          t.closed || (t.next(r), t.complete());
        },
        function (r) {
          return t.error(r);
        }
      ).then(null, C8);
    });
  }
  function OM(e) {
    return new ur(function (t) {
      var r, n;
      try {
        for (var a = O8(e), o = a.next(); !o.done; o = a.next()) {
          var i = o.value;
          if ((t.next(i), t.closed)) return;
        }
      } catch (s) {
        r = { error: s };
      } finally {
        try {
          o && !o.done && (n = a.return) && n.call(a);
        } finally {
          if (r) throw r.error;
        }
      }
      t.complete();
    });
  }
  function ST(e) {
    return new ur(function (t) {
      PM(e, t).catch(function (r) {
        return t.error(r);
      });
    });
  }
  function _M(e) {
    return ST($T(e));
  }
  function PM(e, t) {
    var r, n, a, o;
    return _8(this, void 0, void 0, function () {
      var i, s;
      return Px(this, function (c) {
        switch (c.label) {
          case 0:
            c.trys.push([0, 5, 6, 11]), (r = P8(e)), (c.label = 1);
          case 1:
            return [4, r.next()];
          case 2:
            if (((n = c.sent()), !!n.done)) return [3, 4];
            if (((i = n.value), t.next(i), t.closed)) return [2];
            c.label = 3;
          case 3:
            return [3, 1];
          case 4:
            return [3, 11];
          case 5:
            return (s = c.sent()), (a = { error: s }), [3, 11];
          case 6:
            return c.trys.push([6, , 9, 10]), n && !n.done && (o = r.return) ? [4, o.call(r)] : [3, 8];
          case 7:
            c.sent(), (c.label = 8);
          case 8:
            return [3, 10];
          case 9:
            if (a) throw a.error;
            return [7];
          case 10:
            return [7];
          case 11:
            return t.complete(), [2];
        }
      });
    });
  }
  function Cn(e, t, r, n, a) {
    n === void 0 && (n = 0), a === void 0 && (a = !1);
    var o = t.schedule(function () {
      r(), a ? e.add(this.schedule(null, n)) : this.unsubscribe();
    }, n);
    if ((e.add(o), !a)) return o;
  }
  function ET(e, t) {
    return (
      t === void 0 && (t = 0),
      Yo(function (r, n) {
        r.subscribe(
          Mo(
            n,
            function (a) {
              return Cn(
                n,
                e,
                function () {
                  return n.next(a);
                },
                t
              );
            },
            function () {
              return Cn(
                n,
                e,
                function () {
                  return n.complete();
                },
                t
              );
            },
            function (a) {
              return Cn(
                n,
                e,
                function () {
                  return n.error(a);
                },
                t
              );
            }
          )
        );
      })
    );
  }
  function xT(e, t) {
    return (
      t === void 0 && (t = 0),
      Yo(function (r, n) {
        n.add(
          e.schedule(function () {
            return r.subscribe(n);
          }, t)
        );
      })
    );
  }
  function IM(e, t) {
    return xa(e).pipe(xT(t), ET(t));
  }
  function AM(e, t) {
    return xa(e).pipe(xT(t), ET(t));
  }
  function RM(e, t) {
    return new ur(function (r) {
      var n = 0;
      return t.schedule(function () {
        n === e.length ? r.complete() : (r.next(e[n++]), r.closed || this.schedule());
      });
    });
  }
  function MM(e, t) {
    return new ur(function (r) {
      var n;
      return (
        Cn(r, t, function () {
          (n = e[yT]()),
            Cn(
              r,
              t,
              function () {
                var a, o, i;
                try {
                  (a = n.next()), (o = a.value), (i = a.done);
                } catch (s) {
                  r.error(s);
                  return;
                }
                i ? r.complete() : r.next(o);
              },
              0,
              !0
            );
        }),
        function () {
          return nt(n == null ? void 0 : n.return) && n.return();
        }
      );
    });
  }
  function TT(e, t) {
    if (!e) throw new Error("Iterable cannot be null");
    return new ur(function (r) {
      Cn(r, t, function () {
        var n = e[Symbol.asyncIterator]();
        Cn(
          r,
          t,
          function () {
            n.next().then(function (a) {
              a.done ? r.complete() : r.next(a.value);
            });
          },
          0,
          !0
        );
      });
    });
  }
  function DM(e, t) {
    return TT($T(e), t);
  }
  function NM(e, t) {
    if (e != null) {
      if (pT(e)) return IM(e, t);
      if (hg(e)) return RM(e, t);
      if (vT(e)) return AM(e, t);
      if (mT(e)) return TT(e, t);
      if (bT(e)) return MM(e, t);
      if (wT(e)) return DM(e, t);
    }
    throw gT(e);
  }
  function kM(e, t) {
    return t ? NM(e, t) : xa(e);
  }
  function Nl(e, t) {
    return Yo(function (r, n) {
      var a = 0;
      r.subscribe(
        Mo(n, function (o) {
          n.next(e.call(t, o, a++));
        })
      );
    });
  }
  var LM = Array.isArray;
  function FM(e, t) {
    return LM(t) ? e.apply(void 0, Pl([], Il(t))) : e(t);
  }
  function jM(e) {
    return Nl(function (t) {
      return FM(e, t);
    });
  }
  function BM(e, t, r, n, a, o, i, s) {
    var c = [],
      l = 0,
      u = 0,
      f = !1,
      d = function () {
        f && !c.length && !l && t.complete();
      },
      v = function (m) {
        return l < n ? p(m) : c.push(m);
      },
      p = function (m) {
        o && t.next(m), l++;
        var g = !1;
        xa(r(m, u++)).subscribe(
          Mo(
            t,
            function (y) {
              a == null || a(y), o ? v(y) : t.next(y);
            },
            function () {
              g = !0;
            },
            void 0,
            function () {
              if (g)
                try {
                  l--;
                  for (
                    var y = function () {
                      var b = c.shift();
                      i
                        ? Cn(t, i, function () {
                            return p(b);
                          })
                        : p(b);
                    };
                    c.length && l < n;

                  )
                    y();
                  d();
                } catch (b) {
                  t.error(b);
                }
            }
          )
        );
      };
    return (
      e.subscribe(
        Mo(t, v, function () {
          (f = !0), d();
        })
      ),
      function () {
        s == null || s();
      }
    );
  }
  function vg(e, t, r) {
    return (
      r === void 0 && (r = 1 / 0),
      nt(t)
        ? vg(function (n, a) {
            return Nl(function (o, i) {
              return t(n, o, a, i);
            })(xa(e(n, a)));
          }, r)
        : (typeof t == "number" && (r = t),
          Yo(function (n, a) {
            return BM(n, a, e, r);
          }))
    );
  }
  function UM(e) {
    return e === void 0 && (e = 1 / 0), vg(Ix, e);
  }
  var WM = ["addListener", "removeListener"],
    HM = ["addEventListener", "removeEventListener"],
    zM = ["on", "off"];
  function kl(e, t, r, n) {
    if ((nt(r) && ((n = r), (r = void 0)), n)) return kl(e, t, r).pipe(jM(n));
    var a = Il(
        YM(e)
          ? HM.map(function (s) {
              return function (c) {
                return e[s](t, c, r);
              };
            })
          : VM(e)
          ? WM.map(Eb(e, t))
          : GM(e)
          ? zM.map(Eb(e, t))
          : [],
        2
      ),
      o = a[0],
      i = a[1];
    if (!o && hg(e))
      return vg(function (s) {
        return kl(s, t, r);
      })(xa(e));
    if (!o) throw new TypeError("Invalid event target");
    return new ur(function (s) {
      var c = function () {
        for (var l = [], u = 0; u < arguments.length; u++) l[u] = arguments[u];
        return s.next(1 < l.length ? l : l[0]);
      };
      return (
        o(c),
        function () {
          return i(c);
        }
      );
    });
  }
  function Eb(e, t) {
    return function (r) {
      return function (n) {
        return e[r](t, n);
      };
    };
  }
  function VM(e) {
    return nt(e.addListener) && nt(e.removeListener);
  }
  function GM(e) {
    return nt(e.on) && nt(e.off);
  }
  function YM(e) {
    return nt(e.addEventListener) && nt(e.removeEventListener);
  }
  function KM() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    var r = wM(e),
      n = SM(e, 1 / 0),
      a = e;
    return a.length ? (a.length === 1 ? xa(a[0]) : UM(n)(kM(a, r))) : bM;
  }
  function qM(e, t) {
    return (
      t === void 0 && (t = yM),
      Yo(function (r, n) {
        var a = null,
          o = null,
          i = null,
          s = function () {
            if (a) {
              a.unsubscribe(), (a = null);
              var l = o;
              (o = null), n.next(l);
            }
          };
        function c() {
          var l = i + e,
            u = t.now();
          if (u < l) {
            (a = this.schedule(void 0, l - u)), n.add(a);
            return;
          }
          s();
        }
        r.subscribe(
          Mo(
            n,
            function (l) {
              (o = l), (i = t.now()), a || ((a = t.schedule(c, e)), n.add(a));
            },
            function () {
              s(), n.complete();
            },
            void 0,
            function () {
              o = a = null;
            }
          )
        );
      })
    );
  }
  function XM(e, t, r) {
    var n = nt(e) || t || r ? { next: e, error: t, complete: r } : e;
    return n
      ? Yo(function (a, o) {
          var i;
          (i = n.subscribe) === null || i === void 0 || i.call(n);
          var s = !0;
          a.subscribe(
            Mo(
              o,
              function (c) {
                var l;
                (l = n.next) === null || l === void 0 || l.call(n, c), o.next(c);
              },
              function () {
                var c;
                (s = !1), (c = n.complete) === null || c === void 0 || c.call(n), o.complete();
              },
              function (c) {
                var l;
                (s = !1), (l = n.error) === null || l === void 0 || l.call(n, c), o.error(c);
              },
              function () {
                var c, l;
                s && ((c = n.unsubscribe) === null || c === void 0 || c.call(n)), (l = n.finalize) === null || l === void 0 || l.call(n);
              }
            )
          );
        })
      : Ix;
  }
  (function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const a of document.querySelectorAll('link[rel="modulepreload"]')) n(a);
    new MutationObserver((a) => {
      for (const o of a) if (o.type === "childList") for (const i of o.addedNodes) i.tagName === "LINK" && i.rel === "modulepreload" && n(i);
    }).observe(document, { childList: !0, subtree: !0 });
    function r(a) {
      const o = {};
      return (
        a.integrity && (o.integrity = a.integrity),
        a.referrerPolicy && (o.referrerPolicy = a.referrerPolicy),
        a.crossOrigin === "use-credentials" ? (o.credentials = "include") : a.crossOrigin === "anonymous" ? (o.credentials = "omit") : (o.credentials = "same-origin"),
        o
      );
    }
    function n(a) {
      if (a.ep) return;
      a.ep = !0;
      const o = r(a);
      fetch(a.href, o);
    }
  })();
  var CT = { exports: {} };
  /*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
    (function () {
      var t = {}.hasOwnProperty;
      function r() {
        for (var o = "", i = 0; i < arguments.length; i++) {
          var s = arguments[i];
          s && (o = a(o, n(s)));
        }
        return o;
      }
      function n(o) {
        if (typeof o == "string" || typeof o == "number") return o;
        if (typeof o != "object") return "";
        if (Array.isArray(o)) return r.apply(null, o);
        if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]")) return o.toString();
        var i = "";
        for (var s in o) t.call(o, s) && o[s] && (i = a(i, s));
        return i;
      }
      function a(o, i) {
        return i ? (o ? o + " " + i : o + i) : o;
      }
      e.exports ? ((r.default = r), (e.exports = r)) : (window.classNames = r);
    })();
  })(CT);
  var ZM = CT.exports;
  const Jt = Rx(ZM);
  function Ee(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
    return function (a) {
      if ((e == null || e(a), r === !1 || !a.defaultPrevented)) return t == null ? void 0 : t(a);
    };
  }
  function JM(e, t) {
    typeof e == "function" ? e(t) : e != null && (e.current = t);
  }
  function OT(...e) {
    return (t) => e.forEach((r) => JM(r, t));
  }
  function ke(...e) {
    return h.useCallback(OT(...e), e);
  }
  function Es(e, t = []) {
    let r = [];
    function n(o, i) {
      const s = h.createContext(i),
        c = r.length;
      r = [...r, i];
      function l(f) {
        const { scope: d, children: v, ...p } = f,
          m = (d == null ? void 0 : d[e][c]) || s,
          g = h.useMemo(() => p, Object.values(p));
        return h.createElement(m.Provider, { value: g }, v);
      }
      function u(f, d) {
        const v = (d == null ? void 0 : d[e][c]) || s,
          p = h.useContext(v);
        if (p) return p;
        if (i !== void 0) return i;
        throw new Error(`\`${f}\` must be used within \`${o}\``);
      }
      return (l.displayName = o + "Provider"), [l, u];
    }
    const a = () => {
      const o = r.map((i) => h.createContext(i));
      return function (s) {
        const c = (s == null ? void 0 : s[e]) || o;
        return h.useMemo(() => ({ [`__scope${e}`]: { ...s, [e]: c } }), [s, c]);
      };
    };
    return (a.scopeName = e), [n, QM(a, ...t)];
  }
  function QM(...e) {
    const t = e[0];
    if (e.length === 1) return t;
    const r = () => {
      const n = e.map((a) => ({ useScope: a(), scopeName: a.scopeName }));
      return function (o) {
        const i = n.reduce((s, { useScope: c, scopeName: l }) => {
          const f = c(o)[`__scope${l}`];
          return { ...s, ...f };
        }, {});
        return h.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
      };
    };
    return (r.scopeName = t.scopeName), r;
  }
  const la = h.forwardRef((e, t) => {
    const { children: r, ...n } = e,
      a = h.Children.toArray(r),
      o = a.find(e9);
    if (o) {
      const i = o.props.children,
        s = a.map((c) => (c === o ? (h.Children.count(i) > 1 ? h.Children.only(null) : h.isValidElement(i) ? i.props.children : null) : c));
      return h.createElement(cp, ue({}, n, { ref: t }), h.isValidElement(i) ? h.cloneElement(i, void 0, s) : null);
    }
    return h.createElement(cp, ue({}, n, { ref: t }), r);
  });
  la.displayName = "Slot";
  const cp = h.forwardRef((e, t) => {
    const { children: r, ...n } = e;
    return h.isValidElement(r) ? h.cloneElement(r, { ...t9(n, r.props), ref: t ? OT(t, r.ref) : r.ref }) : h.Children.count(r) > 1 ? h.Children.only(null) : null;
  });
  cp.displayName = "SlotClone";
  const _T = ({ children: e }) => h.createElement(h.Fragment, null, e);
  function e9(e) {
    return h.isValidElement(e) && e.type === _T;
  }
  function t9(e, t) {
    const r = { ...t };
    for (const n in t) {
      const a = e[n],
        o = t[n];
      /^on[A-Z]/.test(n)
        ? a && o
          ? (r[n] = (...s) => {
              o(...s), a(...s);
            })
          : a && (r[n] = a)
        : n === "style"
        ? (r[n] = { ...a, ...o })
        : n === "className" && (r[n] = [a, o].filter(Boolean).join(" "));
    }
    return { ...e, ...r };
  }
  const r9 = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"],
    Le = r9.reduce((e, t) => {
      const r = h.forwardRef((n, a) => {
        const { asChild: o, ...i } = n,
          s = o ? la : t;
        return (
          h.useEffect(() => {
            window[Symbol.for("radix-ui")] = !0;
          }, []),
          h.createElement(s, ue({}, i, { ref: a }))
        );
      });
      return (r.displayName = `Primitive.${t}`), { ...e, [t]: r };
    }, {});
  function n9(e, t) {
    e && ms.flushSync(() => e.dispatchEvent(t));
  }
  function mt(e) {
    const t = h.useRef(e);
    return (
      h.useEffect(() => {
        t.current = e;
      }),
      h.useMemo(
        () =>
          (...r) => {
            var n;
            return (n = t.current) === null || n === void 0 ? void 0 : n.call(t, ...r);
          },
        []
      )
    );
  }
  function a9(e, t = globalThis == null ? void 0 : globalThis.document) {
    const r = mt(e);
    h.useEffect(() => {
      const n = (a) => {
        a.key === "Escape" && r(a);
      };
      return t.addEventListener("keydown", n), () => t.removeEventListener("keydown", n);
    }, [r, t]);
  }
  const lp = "dismissableLayer.update",
    o9 = "dismissableLayer.pointerDownOutside",
    i9 = "dismissableLayer.focusOutside";
  let xb;
  const s9 = h.createContext({ layers: new Set(), layersWithOutsidePointerEventsDisabled: new Set(), branches: new Set() }),
    PT = h.forwardRef((e, t) => {
      var r;
      const { disableOutsidePointerEvents: n = !1, onEscapeKeyDown: a, onPointerDownOutside: o, onFocusOutside: i, onInteractOutside: s, onDismiss: c, ...l } = e,
        u = h.useContext(s9),
        [f, d] = h.useState(null),
        v = (r = f == null ? void 0 : f.ownerDocument) !== null && r !== void 0 ? r : globalThis == null ? void 0 : globalThis.document,
        [, p] = h.useState({}),
        m = ke(t, (T) => d(T)),
        g = Array.from(u.layers),
        [y] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
        b = g.indexOf(y),
        $ = f ? g.indexOf(f) : -1,
        S = u.layersWithOutsidePointerEventsDisabled.size > 0,
        A = $ >= b,
        P = c9((T) => {
          const F = T.target,
            k = [...u.branches].some((D) => D.contains(F));
          !A || k || (o == null || o(T), s == null || s(T), T.defaultPrevented || c == null || c());
        }, v),
        M = l9((T) => {
          const F = T.target;
          [...u.branches].some((D) => D.contains(F)) || (i == null || i(T), s == null || s(T), T.defaultPrevented || c == null || c());
        }, v);
      return (
        a9((T) => {
          $ === u.layers.size - 1 && (a == null || a(T), !T.defaultPrevented && c && (T.preventDefault(), c()));
        }, v),
        h.useEffect(() => {
          if (f)
            return (
              n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && ((xb = v.body.style.pointerEvents), (v.body.style.pointerEvents = "none")), u.layersWithOutsidePointerEventsDisabled.add(f)),
              u.layers.add(f),
              Tb(),
              () => {
                n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (v.body.style.pointerEvents = xb);
              }
            );
        }, [f, v, n, u]),
        h.useEffect(
          () => () => {
            f && (u.layers.delete(f), u.layersWithOutsidePointerEventsDisabled.delete(f), Tb());
          },
          [f, u]
        ),
        h.useEffect(() => {
          const T = () => p({});
          return document.addEventListener(lp, T), () => document.removeEventListener(lp, T);
        }, []),
        h.createElement(
          Le.div,
          ue({}, l, {
            ref: m,
            style: { pointerEvents: S ? (A ? "auto" : "none") : void 0, ...e.style },
            onFocusCapture: Ee(e.onFocusCapture, M.onFocusCapture),
            onBlurCapture: Ee(e.onBlurCapture, M.onBlurCapture),
            onPointerDownCapture: Ee(e.onPointerDownCapture, P.onPointerDownCapture),
          })
        )
      );
    });
  function c9(e, t = globalThis == null ? void 0 : globalThis.document) {
    const r = mt(e),
      n = h.useRef(!1),
      a = h.useRef(() => {});
    return (
      h.useEffect(() => {
        const o = (s) => {
            if (s.target && !n.current) {
              let l = function () {
                IT(o9, r, c, { discrete: !0 });
              };
              const c = { originalEvent: s };
              s.pointerType === "touch" ? (t.removeEventListener("click", a.current), (a.current = l), t.addEventListener("click", a.current, { once: !0 })) : l();
            } else t.removeEventListener("click", a.current);
            n.current = !1;
          },
          i = window.setTimeout(() => {
            t.addEventListener("pointerdown", o);
          }, 0);
        return () => {
          window.clearTimeout(i), t.removeEventListener("pointerdown", o), t.removeEventListener("click", a.current);
        };
      }, [t, r]),
      { onPointerDownCapture: () => (n.current = !0) }
    );
  }
  function l9(e, t = globalThis == null ? void 0 : globalThis.document) {
    const r = mt(e),
      n = h.useRef(!1);
    return (
      h.useEffect(() => {
        const a = (o) => {
          o.target && !n.current && IT(i9, r, { originalEvent: o }, { discrete: !1 });
        };
        return t.addEventListener("focusin", a), () => t.removeEventListener("focusin", a);
      }, [t, r]),
      { onFocusCapture: () => (n.current = !0), onBlurCapture: () => (n.current = !1) }
    );
  }
  function Tb() {
    const e = new CustomEvent(lp);
    document.dispatchEvent(e);
  }
  function IT(e, t, r, { discrete: n }) {
    const a = r.originalEvent.target,
      o = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r });
    t && a.addEventListener(e, t, { once: !0 }), n ? n9(a, o) : a.dispatchEvent(o);
  }
  const qt = globalThis != null && globalThis.document ? h.useLayoutEffect : () => {},
    u9 = I8["useId".toString()] || (() => {});
  let f9 = 0;
  function Lu(e) {
    const [t, r] = h.useState(u9());
    return (
      qt(() => {
        e || r((n) => n ?? String(f9++));
      }, [e]),
      e || (t ? `radix-${t}` : "")
    );
  }
  const d9 = ["top", "right", "bottom", "left"],
    _n = Math.min,
    Dt = Math.max,
    Ll = Math.round,
    ic = Math.floor,
    Pn = (e) => ({ x: e, y: e }),
    h9 = { left: "right", right: "left", bottom: "top", top: "bottom" },
    v9 = { start: "end", end: "start" };
  function up(e, t, r) {
    return Dt(e, _n(t, r));
  }
  function Xr(e, t) {
    return typeof e == "function" ? e(t) : e;
  }
  function Zr(e) {
    return e.split("-")[0];
  }
  function Ko(e) {
    return e.split("-")[1];
  }
  function pg(e) {
    return e === "x" ? "y" : "x";
  }
  function mg(e) {
    return e === "y" ? "height" : "width";
  }
  function qo(e) {
    return ["top", "bottom"].includes(Zr(e)) ? "y" : "x";
  }
  function gg(e) {
    return pg(qo(e));
  }
  function p9(e, t, r) {
    r === void 0 && (r = !1);
    const n = Ko(e),
      a = gg(e),
      o = mg(a);
    let i = a === "x" ? (n === (r ? "end" : "start") ? "right" : "left") : n === "start" ? "bottom" : "top";
    return t.reference[o] > t.floating[o] && (i = Fl(i)), [i, Fl(i)];
  }
  function m9(e) {
    const t = Fl(e);
    return [fp(e), t, fp(t)];
  }
  function fp(e) {
    return e.replace(/start|end/g, (t) => v9[t]);
  }
  function g9(e, t, r) {
    const n = ["left", "right"],
      a = ["right", "left"],
      o = ["top", "bottom"],
      i = ["bottom", "top"];
    switch (e) {
      case "top":
      case "bottom":
        return r ? (t ? a : n) : t ? n : a;
      case "left":
      case "right":
        return t ? o : i;
      default:
        return [];
    }
  }
  function y9(e, t, r, n) {
    const a = Ko(e);
    let o = g9(Zr(e), r === "start", n);
    return a && ((o = o.map((i) => i + "-" + a)), t && (o = o.concat(o.map(fp)))), o;
  }
  function Fl(e) {
    return e.replace(/left|right|bottom|top/g, (t) => h9[t]);
  }
  function b9(e) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...e };
  }
  function AT(e) {
    return typeof e != "number" ? b9(e) : { top: e, right: e, bottom: e, left: e };
  }
  function jl(e) {
    return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
  }
  function Cb(e, t, r) {
    let { reference: n, floating: a } = e;
    const o = qo(t),
      i = gg(t),
      s = mg(i),
      c = Zr(t),
      l = o === "y",
      u = n.x + n.width / 2 - a.width / 2,
      f = n.y + n.height / 2 - a.height / 2,
      d = n[s] / 2 - a[s] / 2;
    let v;
    switch (c) {
      case "top":
        v = { x: u, y: n.y - a.height };
        break;
      case "bottom":
        v = { x: u, y: n.y + n.height };
        break;
      case "right":
        v = { x: n.x + n.width, y: f };
        break;
      case "left":
        v = { x: n.x - a.width, y: f };
        break;
      default:
        v = { x: n.x, y: n.y };
    }
    switch (Ko(t)) {
      case "start":
        v[i] -= d * (r && l ? -1 : 1);
        break;
      case "end":
        v[i] += d * (r && l ? -1 : 1);
        break;
    }
    return v;
  }
  const $9 = async (e, t, r) => {
    const { placement: n = "bottom", strategy: a = "absolute", middleware: o = [], platform: i } = r,
      s = o.filter(Boolean),
      c = await (i.isRTL == null ? void 0 : i.isRTL(t));
    let l = await i.getElementRects({ reference: e, floating: t, strategy: a }),
      { x: u, y: f } = Cb(l, n, c),
      d = n,
      v = {},
      p = 0;
    for (let m = 0; m < s.length; m++) {
      const { name: g, fn: y } = s[m],
        { x: b, y: $, data: S, reset: A } = await y({ x: u, y: f, initialPlacement: n, placement: d, strategy: a, middlewareData: v, rects: l, platform: i, elements: { reference: e, floating: t } });
      (u = b ?? u),
        (f = $ ?? f),
        (v = { ...v, [g]: { ...v[g], ...S } }),
        A &&
          p <= 50 &&
          (p++,
          typeof A == "object" &&
            (A.placement && (d = A.placement), A.rects && (l = A.rects === !0 ? await i.getElementRects({ reference: e, floating: t, strategy: a }) : A.rects), ({ x: u, y: f } = Cb(l, d, c))),
          (m = -1));
    }
    return { x: u, y: f, placement: d, strategy: a, middlewareData: v };
  };
  async function Ki(e, t) {
    var r;
    t === void 0 && (t = {});
    const { x: n, y: a, platform: o, rects: i, elements: s, strategy: c } = e,
      { boundary: l = "clippingAncestors", rootBoundary: u = "viewport", elementContext: f = "floating", altBoundary: d = !1, padding: v = 0 } = Xr(t, e),
      p = AT(v),
      g = s[d ? (f === "floating" ? "reference" : "floating") : f],
      y = jl(
        await o.getClippingRect({
          element:
            (r = await (o.isElement == null ? void 0 : o.isElement(g))) == null || r ? g : g.contextElement || (await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(s.floating))),
          boundary: l,
          rootBoundary: u,
          strategy: c,
        })
      ),
      b = f === "floating" ? { ...i.floating, x: n, y: a } : i.reference,
      $ = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(s.floating)),
      S = (await (o.isElement == null ? void 0 : o.isElement($))) ? (await (o.getScale == null ? void 0 : o.getScale($))) || { x: 1, y: 1 } : { x: 1, y: 1 },
      A = jl(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({ elements: s, rect: b, offsetParent: $, strategy: c }) : b);
    return { top: (y.top - A.top + p.top) / S.y, bottom: (A.bottom - y.bottom + p.bottom) / S.y, left: (y.left - A.left + p.left) / S.x, right: (A.right - y.right + p.right) / S.x };
  }
  const w9 = (e) => ({
      name: "arrow",
      options: e,
      async fn(t) {
        const { x: r, y: n, placement: a, rects: o, platform: i, elements: s, middlewareData: c } = t,
          { element: l, padding: u = 0 } = Xr(e, t) || {};
        if (l == null) return {};
        const f = AT(u),
          d = { x: r, y: n },
          v = gg(a),
          p = mg(v),
          m = await i.getDimensions(l),
          g = v === "y",
          y = g ? "top" : "left",
          b = g ? "bottom" : "right",
          $ = g ? "clientHeight" : "clientWidth",
          S = o.reference[p] + o.reference[v] - d[v] - o.floating[p],
          A = d[v] - o.reference[v],
          P = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(l));
        let M = P ? P[$] : 0;
        (!M || !(await (i.isElement == null ? void 0 : i.isElement(P)))) && (M = s.floating[$] || o.floating[p]);
        const T = S / 2 - A / 2,
          F = M / 2 - m[p] / 2 - 1,
          k = _n(f[y], F),
          D = _n(f[b], F),
          _ = k,
          O = M - m[p] - D,
          w = M / 2 - m[p] / 2 + T,
          R = up(_, w, O),
          I = !c.arrow && Ko(a) != null && w !== R && o.reference[p] / 2 - (w < _ ? k : D) - m[p] / 2 < 0,
          N = I ? (w < _ ? w - _ : w - O) : 0;
        return { [v]: d[v] + N, data: { [v]: R, centerOffset: w - R - N, ...(I && { alignmentOffset: N }) }, reset: I };
      },
    }),
    S9 = function (e) {
      return (
        e === void 0 && (e = {}),
        {
          name: "flip",
          options: e,
          async fn(t) {
            var r, n;
            const { placement: a, middlewareData: o, rects: i, initialPlacement: s, platform: c, elements: l } = t,
              { mainAxis: u = !0, crossAxis: f = !0, fallbackPlacements: d, fallbackStrategy: v = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: m = !0, ...g } = Xr(e, t);
            if ((r = o.arrow) != null && r.alignmentOffset) return {};
            const y = Zr(a),
              b = Zr(s) === s,
              $ = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)),
              S = d || (b || !m ? [Fl(s)] : m9(s));
            !d && p !== "none" && S.push(...y9(s, m, p, $));
            const A = [s, ...S],
              P = await Ki(t, g),
              M = [];
            let T = ((n = o.flip) == null ? void 0 : n.overflows) || [];
            if ((u && M.push(P[y]), f)) {
              const _ = p9(a, i, $);
              M.push(P[_[0]], P[_[1]]);
            }
            if (((T = [...T, { placement: a, overflows: M }]), !M.every((_) => _ <= 0))) {
              var F, k;
              const _ = (((F = o.flip) == null ? void 0 : F.index) || 0) + 1,
                O = A[_];
              if (O) return { data: { index: _, overflows: T }, reset: { placement: O } };
              let w = (k = T.filter((R) => R.overflows[0] <= 0).sort((R, I) => R.overflows[1] - I.overflows[1])[0]) == null ? void 0 : k.placement;
              if (!w)
                switch (v) {
                  case "bestFit": {
                    var D;
                    const R = (D = T.map((I) => [I.placement, I.overflows.filter((N) => N > 0).reduce((N, B) => N + B, 0)]).sort((I, N) => I[1] - N[1])[0]) == null ? void 0 : D[0];
                    R && (w = R);
                    break;
                  }
                  case "initialPlacement":
                    w = s;
                    break;
                }
              if (a !== w) return { reset: { placement: w } };
            }
            return {};
          },
        }
      );
    };
  function Ob(e, t) {
    return { top: e.top - t.height, right: e.right - t.width, bottom: e.bottom - t.height, left: e.left - t.width };
  }
  function _b(e) {
    return d9.some((t) => e[t] >= 0);
  }
  const E9 = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "hide",
        options: e,
        async fn(t) {
          const { rects: r } = t,
            { strategy: n = "referenceHidden", ...a } = Xr(e, t);
          switch (n) {
            case "referenceHidden": {
              const o = await Ki(t, { ...a, elementContext: "reference" }),
                i = Ob(o, r.reference);
              return { data: { referenceHiddenOffsets: i, referenceHidden: _b(i) } };
            }
            case "escaped": {
              const o = await Ki(t, { ...a, altBoundary: !0 }),
                i = Ob(o, r.floating);
              return { data: { escapedOffsets: i, escaped: _b(i) } };
            }
            default:
              return {};
          }
        },
      }
    );
  };
  async function x9(e, t) {
    const { placement: r, platform: n, elements: a } = e,
      o = await (n.isRTL == null ? void 0 : n.isRTL(a.floating)),
      i = Zr(r),
      s = Ko(r),
      c = qo(r) === "y",
      l = ["left", "top"].includes(i) ? -1 : 1,
      u = o && c ? -1 : 1,
      f = Xr(t, e);
    let { mainAxis: d, crossAxis: v, alignmentAxis: p } = typeof f == "number" ? { mainAxis: f, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...f };
    return s && typeof p == "number" && (v = s === "end" ? p * -1 : p), c ? { x: v * u, y: d * l } : { x: d * l, y: v * u };
  }
  const T9 = function (e) {
      return (
        e === void 0 && (e = 0),
        {
          name: "offset",
          options: e,
          async fn(t) {
            var r, n;
            const { x: a, y: o, placement: i, middlewareData: s } = t,
              c = await x9(t, e);
            return i === ((r = s.offset) == null ? void 0 : r.placement) && (n = s.arrow) != null && n.alignmentOffset ? {} : { x: a + c.x, y: o + c.y, data: { ...c, placement: i } };
          },
        }
      );
    },
    C9 = function (e) {
      return (
        e === void 0 && (e = {}),
        {
          name: "shift",
          options: e,
          async fn(t) {
            const { x: r, y: n, placement: a } = t,
              {
                mainAxis: o = !0,
                crossAxis: i = !1,
                limiter: s = {
                  fn: (g) => {
                    let { x: y, y: b } = g;
                    return { x: y, y: b };
                  },
                },
                ...c
              } = Xr(e, t),
              l = { x: r, y: n },
              u = await Ki(t, c),
              f = qo(Zr(a)),
              d = pg(f);
            let v = l[d],
              p = l[f];
            if (o) {
              const g = d === "y" ? "top" : "left",
                y = d === "y" ? "bottom" : "right",
                b = v + u[g],
                $ = v - u[y];
              v = up(b, v, $);
            }
            if (i) {
              const g = f === "y" ? "top" : "left",
                y = f === "y" ? "bottom" : "right",
                b = p + u[g],
                $ = p - u[y];
              p = up(b, p, $);
            }
            const m = s.fn({ ...t, [d]: v, [f]: p });
            return { ...m, data: { x: m.x - r, y: m.y - n } };
          },
        }
      );
    },
    O9 = function (e) {
      return (
        e === void 0 && (e = {}),
        {
          options: e,
          fn(t) {
            const { x: r, y: n, placement: a, rects: o, middlewareData: i } = t,
              { offset: s = 0, mainAxis: c = !0, crossAxis: l = !0 } = Xr(e, t),
              u = { x: r, y: n },
              f = qo(a),
              d = pg(f);
            let v = u[d],
              p = u[f];
            const m = Xr(s, t),
              g = typeof m == "number" ? { mainAxis: m, crossAxis: 0 } : { mainAxis: 0, crossAxis: 0, ...m };
            if (c) {
              const $ = d === "y" ? "height" : "width",
                S = o.reference[d] - o.floating[$] + g.mainAxis,
                A = o.reference[d] + o.reference[$] - g.mainAxis;
              v < S ? (v = S) : v > A && (v = A);
            }
            if (l) {
              var y, b;
              const $ = d === "y" ? "width" : "height",
                S = ["top", "left"].includes(Zr(a)),
                A = o.reference[f] - o.floating[$] + ((S && ((y = i.offset) == null ? void 0 : y[f])) || 0) + (S ? 0 : g.crossAxis),
                P = o.reference[f] + o.reference[$] + (S ? 0 : ((b = i.offset) == null ? void 0 : b[f]) || 0) - (S ? g.crossAxis : 0);
              p < A ? (p = A) : p > P && (p = P);
            }
            return { [d]: v, [f]: p };
          },
        }
      );
    },
    _9 = function (e) {
      return (
        e === void 0 && (e = {}),
        {
          name: "size",
          options: e,
          async fn(t) {
            const { placement: r, rects: n, platform: a, elements: o } = t,
              { apply: i = () => {}, ...s } = Xr(e, t),
              c = await Ki(t, s),
              l = Zr(r),
              u = Ko(r),
              f = qo(r) === "y",
              { width: d, height: v } = n.floating;
            let p, m;
            l === "top" || l === "bottom"
              ? ((p = l), (m = u === ((await (a.isRTL == null ? void 0 : a.isRTL(o.floating))) ? "start" : "end") ? "left" : "right"))
              : ((m = l), (p = u === "end" ? "top" : "bottom"));
            const g = v - c[p],
              y = d - c[m],
              b = !t.middlewareData.shift;
            let $ = g,
              S = y;
            if (f) {
              const P = d - c.left - c.right;
              S = u || b ? _n(y, P) : P;
            } else {
              const P = v - c.top - c.bottom;
              $ = u || b ? _n(g, P) : P;
            }
            if (b && !u) {
              const P = Dt(c.left, 0),
                M = Dt(c.right, 0),
                T = Dt(c.top, 0),
                F = Dt(c.bottom, 0);
              f ? (S = d - 2 * (P !== 0 || M !== 0 ? P + M : Dt(c.left, c.right))) : ($ = v - 2 * (T !== 0 || F !== 0 ? T + F : Dt(c.top, c.bottom)));
            }
            await i({ ...t, availableWidth: S, availableHeight: $ });
            const A = await a.getDimensions(o.floating);
            return d !== A.width || v !== A.height ? { reset: { rects: !0 } } : {};
          },
        }
      );
    };
  function In(e) {
    return RT(e) ? (e.nodeName || "").toLowerCase() : "#document";
  }
  function Lt(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
  }
  function on(e) {
    var t;
    return (t = (RT(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
  }
  function RT(e) {
    return e instanceof Node || e instanceof Lt(e).Node;
  }
  function Jr(e) {
    return e instanceof Element || e instanceof Lt(e).Element;
  }
  function Cr(e) {
    return e instanceof HTMLElement || e instanceof Lt(e).HTMLElement;
  }
  function Pb(e) {
    return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Lt(e).ShadowRoot;
  }
  function xs(e) {
    const { overflow: t, overflowX: r, overflowY: n, display: a } = Xt(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !["inline", "contents"].includes(a);
  }
  function P9(e) {
    return ["table", "td", "th"].includes(In(e));
  }
  function yg(e) {
    const t = bg(),
      r = Xt(e);
    return (
      r.transform !== "none" ||
      r.perspective !== "none" ||
      (r.containerType ? r.containerType !== "normal" : !1) ||
      (!t && (r.backdropFilter ? r.backdropFilter !== "none" : !1)) ||
      (!t && (r.filter ? r.filter !== "none" : !1)) ||
      ["transform", "perspective", "filter"].some((n) => (r.willChange || "").includes(n)) ||
      ["paint", "layout", "strict", "content"].some((n) => (r.contain || "").includes(n))
    );
  }
  function MT(e) {
    let t = Do(e);
    for (; Cr(t) && !Fu(t); ) {
      if (yg(t)) return t;
      t = Do(t);
    }
    return null;
  }
  function bg() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
  }
  function Fu(e) {
    return ["html", "body", "#document"].includes(In(e));
  }
  function Xt(e) {
    return Lt(e).getComputedStyle(e);
  }
  function ju(e) {
    return Jr(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
  }
  function Do(e) {
    if (In(e) === "html") return e;
    const t = e.assignedSlot || e.parentNode || (Pb(e) && e.host) || on(e);
    return Pb(t) ? t.host : t;
  }
  function DT(e) {
    const t = Do(e);
    return Fu(t) ? (e.ownerDocument ? e.ownerDocument.body : e.body) : Cr(t) && xs(t) ? t : DT(t);
  }
  function qi(e, t, r) {
    var n;
    t === void 0 && (t = []), r === void 0 && (r = !0);
    const a = DT(e),
      o = a === ((n = e.ownerDocument) == null ? void 0 : n.body),
      i = Lt(a);
    return o ? t.concat(i, i.visualViewport || [], xs(a) ? a : [], i.frameElement && r ? qi(i.frameElement) : []) : t.concat(a, qi(a, [], r));
  }
  function NT(e) {
    const t = Xt(e);
    let r = parseFloat(t.width) || 0,
      n = parseFloat(t.height) || 0;
    const a = Cr(e),
      o = a ? e.offsetWidth : r,
      i = a ? e.offsetHeight : n,
      s = Ll(r) !== o || Ll(n) !== i;
    return s && ((r = o), (n = i)), { width: r, height: n, $: s };
  }
  function $g(e) {
    return Jr(e) ? e : e.contextElement;
  }
  function $o(e) {
    const t = $g(e);
    if (!Cr(t)) return Pn(1);
    const r = t.getBoundingClientRect(),
      { width: n, height: a, $: o } = NT(t);
    let i = (o ? Ll(r.width) : r.width) / n,
      s = (o ? Ll(r.height) : r.height) / a;
    return (!i || !Number.isFinite(i)) && (i = 1), (!s || !Number.isFinite(s)) && (s = 1), { x: i, y: s };
  }
  const I9 = Pn(0);
  function kT(e) {
    const t = Lt(e);
    return !bg() || !t.visualViewport ? I9 : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
  }
  function A9(e, t, r) {
    return t === void 0 && (t = !1), !r || (t && r !== Lt(e)) ? !1 : t;
  }
  function ua(e, t, r, n) {
    t === void 0 && (t = !1), r === void 0 && (r = !1);
    const a = e.getBoundingClientRect(),
      o = $g(e);
    let i = Pn(1);
    t && (n ? Jr(n) && (i = $o(n)) : (i = $o(e)));
    const s = A9(o, r, n) ? kT(o) : Pn(0);
    let c = (a.left + s.x) / i.x,
      l = (a.top + s.y) / i.y,
      u = a.width / i.x,
      f = a.height / i.y;
    if (o) {
      const d = Lt(o),
        v = n && Jr(n) ? Lt(n) : n;
      let p = d.frameElement;
      for (; p && n && v !== d; ) {
        const m = $o(p),
          g = p.getBoundingClientRect(),
          y = Xt(p),
          b = g.left + (p.clientLeft + parseFloat(y.paddingLeft)) * m.x,
          $ = g.top + (p.clientTop + parseFloat(y.paddingTop)) * m.y;
        (c *= m.x), (l *= m.y), (u *= m.x), (f *= m.y), (c += b), (l += $), (p = Lt(p).frameElement);
      }
    }
    return jl({ width: u, height: f, x: c, y: l });
  }
  const R9 = [":popover-open", ":modal"];
  function LT(e) {
    let t = !1,
      r = 0,
      n = 0;
    function a(o) {
      try {
        t = t || e.matches(o);
      } catch {}
    }
    if (
      (R9.forEach((o) => {
        a(o);
      }),
      t)
    ) {
      const o = MT(e);
      if (o) {
        const i = o.getBoundingClientRect();
        (r = i.x), (n = i.y);
      }
    }
    return [t, r, n];
  }
  function M9(e) {
    let { elements: t, rect: r, offsetParent: n, strategy: a } = e;
    const o = on(n),
      [i] = t ? LT(t.floating) : [!1];
    if (n === o || i) return r;
    let s = { scrollLeft: 0, scrollTop: 0 },
      c = Pn(1);
    const l = Pn(0),
      u = Cr(n);
    if ((u || (!u && a !== "fixed")) && ((In(n) !== "body" || xs(o)) && (s = ju(n)), Cr(n))) {
      const f = ua(n);
      (c = $o(n)), (l.x = f.x + n.clientLeft), (l.y = f.y + n.clientTop);
    }
    return { width: r.width * c.x, height: r.height * c.y, x: r.x * c.x - s.scrollLeft * c.x + l.x, y: r.y * c.y - s.scrollTop * c.y + l.y };
  }
  function D9(e) {
    return Array.from(e.getClientRects());
  }
  function FT(e) {
    return ua(on(e)).left + ju(e).scrollLeft;
  }
  function N9(e) {
    const t = on(e),
      r = ju(e),
      n = e.ownerDocument.body,
      a = Dt(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth),
      o = Dt(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
    let i = -r.scrollLeft + FT(e);
    const s = -r.scrollTop;
    return Xt(n).direction === "rtl" && (i += Dt(t.clientWidth, n.clientWidth) - a), { width: a, height: o, x: i, y: s };
  }
  function k9(e, t) {
    const r = Lt(e),
      n = on(e),
      a = r.visualViewport;
    let o = n.clientWidth,
      i = n.clientHeight,
      s = 0,
      c = 0;
    if (a) {
      (o = a.width), (i = a.height);
      const l = bg();
      (!l || (l && t === "fixed")) && ((s = a.offsetLeft), (c = a.offsetTop));
    }
    return { width: o, height: i, x: s, y: c };
  }
  function L9(e, t) {
    const r = ua(e, !0, t === "fixed"),
      n = r.top + e.clientTop,
      a = r.left + e.clientLeft,
      o = Cr(e) ? $o(e) : Pn(1),
      i = e.clientWidth * o.x,
      s = e.clientHeight * o.y,
      c = a * o.x,
      l = n * o.y;
    return { width: i, height: s, x: c, y: l };
  }
  function Ib(e, t, r) {
    let n;
    if (t === "viewport") n = k9(e, r);
    else if (t === "document") n = N9(on(e));
    else if (Jr(t)) n = L9(t, r);
    else {
      const a = kT(e);
      n = { ...t, x: t.x - a.x, y: t.y - a.y };
    }
    return jl(n);
  }
  function jT(e, t) {
    const r = Do(e);
    return r === t || !Jr(r) || Fu(r) ? !1 : Xt(r).position === "fixed" || jT(r, t);
  }
  function F9(e, t) {
    const r = t.get(e);
    if (r) return r;
    let n = qi(e, [], !1).filter((s) => Jr(s) && In(s) !== "body"),
      a = null;
    const o = Xt(e).position === "fixed";
    let i = o ? Do(e) : e;
    for (; Jr(i) && !Fu(i); ) {
      const s = Xt(i),
        c = yg(i);
      !c && s.position === "fixed" && (a = null),
        (o ? !c && !a : (!c && s.position === "static" && !!a && ["absolute", "fixed"].includes(a.position)) || (xs(i) && !c && jT(e, i))) ? (n = n.filter((u) => u !== i)) : (a = s),
        (i = Do(i));
    }
    return t.set(e, n), n;
  }
  function j9(e) {
    let { element: t, boundary: r, rootBoundary: n, strategy: a } = e;
    const i = [...(r === "clippingAncestors" ? F9(t, this._c) : [].concat(r)), n],
      s = i[0],
      c = i.reduce((l, u) => {
        const f = Ib(t, u, a);
        return (l.top = Dt(f.top, l.top)), (l.right = _n(f.right, l.right)), (l.bottom = _n(f.bottom, l.bottom)), (l.left = Dt(f.left, l.left)), l;
      }, Ib(t, s, a));
    return { width: c.right - c.left, height: c.bottom - c.top, x: c.left, y: c.top };
  }
  function B9(e) {
    const { width: t, height: r } = NT(e);
    return { width: t, height: r };
  }
  function U9(e, t, r, n) {
    const a = Cr(t),
      o = on(t),
      i = r === "fixed",
      s = ua(e, !0, i, t);
    let c = { scrollLeft: 0, scrollTop: 0 };
    const l = Pn(0);
    if (a || (!a && !i))
      if (((In(t) !== "body" || xs(o)) && (c = ju(t)), a)) {
        const m = ua(t, !0, i, t);
        (l.x = m.x + t.clientLeft), (l.y = m.y + t.clientTop);
      } else o && (l.x = FT(o));
    let u = s.left + c.scrollLeft - l.x,
      f = s.top + c.scrollTop - l.y;
    const [d, v, p] = LT(n);
    return d && ((u += v), (f += p), a && ((u += t.clientLeft), (f += t.clientTop))), { x: u, y: f, width: s.width, height: s.height };
  }
  function Ab(e, t) {
    return !Cr(e) || Xt(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
  }
  function BT(e, t) {
    const r = Lt(e);
    if (!Cr(e)) return r;
    let n = Ab(e, t);
    for (; n && P9(n) && Xt(n).position === "static"; ) n = Ab(n, t);
    return n && (In(n) === "html" || (In(n) === "body" && Xt(n).position === "static" && !yg(n))) ? r : n || MT(e) || r;
  }
  const W9 = async function (e) {
    const t = this.getOffsetParent || BT,
      r = this.getDimensions;
    return { reference: U9(e.reference, await t(e.floating), e.strategy, e.floating), floating: { x: 0, y: 0, ...(await r(e.floating)) } };
  };
  function H9(e) {
    return Xt(e).direction === "rtl";
  }
  const z9 = {
    convertOffsetParentRelativeRectToViewportRelativeRect: M9,
    getDocumentElement: on,
    getClippingRect: j9,
    getOffsetParent: BT,
    getElementRects: W9,
    getClientRects: D9,
    getDimensions: B9,
    getScale: $o,
    isElement: Jr,
    isRTL: H9,
  };
  function V9(e, t) {
    let r = null,
      n;
    const a = on(e);
    function o() {
      var s;
      clearTimeout(n), (s = r) == null || s.disconnect(), (r = null);
    }
    function i(s, c) {
      s === void 0 && (s = !1), c === void 0 && (c = 1), o();
      const { left: l, top: u, width: f, height: d } = e.getBoundingClientRect();
      if ((s || t(), !f || !d)) return;
      const v = ic(u),
        p = ic(a.clientWidth - (l + f)),
        m = ic(a.clientHeight - (u + d)),
        g = ic(l),
        b = { rootMargin: -v + "px " + -p + "px " + -m + "px " + -g + "px", threshold: Dt(0, _n(1, c)) || 1 };
      let $ = !0;
      function S(A) {
        const P = A[0].intersectionRatio;
        if (P !== c) {
          if (!$) return i();
          P
            ? i(!1, P)
            : (n = setTimeout(() => {
                i(!1, 1e-7);
              }, 100));
        }
        $ = !1;
      }
      try {
        r = new IntersectionObserver(S, { ...b, root: a.ownerDocument });
      } catch {
        r = new IntersectionObserver(S, b);
      }
      r.observe(e);
    }
    return i(!0), o;
  }
  function G9(e, t, r, n) {
    n === void 0 && (n = {});
    const {
        ancestorScroll: a = !0,
        ancestorResize: o = !0,
        elementResize: i = typeof ResizeObserver == "function",
        layoutShift: s = typeof IntersectionObserver == "function",
        animationFrame: c = !1,
      } = n,
      l = $g(e),
      u = a || o ? [...(l ? qi(l) : []), ...qi(t)] : [];
    u.forEach((y) => {
      a && y.addEventListener("scroll", r, { passive: !0 }), o && y.addEventListener("resize", r);
    });
    const f = l && s ? V9(l, r) : null;
    let d = -1,
      v = null;
    i &&
      ((v = new ResizeObserver((y) => {
        let [b] = y;
        b &&
          b.target === l &&
          v &&
          (v.unobserve(t),
          cancelAnimationFrame(d),
          (d = requestAnimationFrame(() => {
            var $;
            ($ = v) == null || $.observe(t);
          }))),
          r();
      })),
      l && !c && v.observe(l),
      v.observe(t));
    let p,
      m = c ? ua(e) : null;
    c && g();
    function g() {
      const y = ua(e);
      m && (y.x !== m.x || y.y !== m.y || y.width !== m.width || y.height !== m.height) && r(), (m = y), (p = requestAnimationFrame(g));
    }
    return (
      r(),
      () => {
        var y;
        u.forEach((b) => {
          a && b.removeEventListener("scroll", r), o && b.removeEventListener("resize", r);
        }),
          f == null || f(),
          (y = v) == null || y.disconnect(),
          (v = null),
          c && cancelAnimationFrame(p);
      }
    );
  }
  const Y9 = C9,
    K9 = S9,
    q9 = _9,
    X9 = E9,
    Rb = w9,
    Z9 = O9,
    J9 = (e, t, r) => {
      const n = new Map(),
        a = { platform: z9, ...r },
        o = { ...a.platform, _c: n };
      return $9(e, t, { ...a, platform: o });
    },
    Q9 = (e) => {
      function t(r) {
        return {}.hasOwnProperty.call(r, "current");
      }
      return {
        name: "arrow",
        options: e,
        fn(r) {
          const { element: n, padding: a } = typeof e == "function" ? e(r) : e;
          return n && t(n) ? (n.current != null ? Rb({ element: n.current, padding: a }).fn(r) : {}) : n ? Rb({ element: n, padding: a }).fn(r) : {};
        },
      };
    };
  var il = typeof document < "u" ? h.useLayoutEffect : h.useEffect;
  function Bl(e, t) {
    if (e === t) return !0;
    if (typeof e != typeof t) return !1;
    if (typeof e == "function" && e.toString() === t.toString()) return !0;
    let r, n, a;
    if (e && t && typeof e == "object") {
      if (Array.isArray(e)) {
        if (((r = e.length), r !== t.length)) return !1;
        for (n = r; n-- !== 0; ) if (!Bl(e[n], t[n])) return !1;
        return !0;
      }
      if (((a = Object.keys(e)), (r = a.length), r !== Object.keys(t).length)) return !1;
      for (n = r; n-- !== 0; ) if (!{}.hasOwnProperty.call(t, a[n])) return !1;
      for (n = r; n-- !== 0; ) {
        const o = a[n];
        if (!(o === "_owner" && e.$$typeof) && !Bl(e[o], t[o])) return !1;
      }
      return !0;
    }
    return e !== e && t !== t;
  }
  function UT(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
  }
  function Mb(e, t) {
    const r = UT(e);
    return Math.round(t * r) / r;
  }
  function Db(e) {
    const t = h.useRef(e);
    return (
      il(() => {
        t.current = e;
      }),
      t
    );
  }
  function eD(e) {
    e === void 0 && (e = {});
    const { placement: t = "bottom", strategy: r = "absolute", middleware: n = [], platform: a, elements: { reference: o, floating: i } = {}, transform: s = !0, whileElementsMounted: c, open: l } = e,
      [u, f] = h.useState({ x: 0, y: 0, strategy: r, placement: t, middlewareData: {}, isPositioned: !1 }),
      [d, v] = h.useState(n);
    Bl(d, n) || v(n);
    const [p, m] = h.useState(null),
      [g, y] = h.useState(null),
      b = h.useCallback((N) => {
        N !== P.current && ((P.current = N), m(N));
      }, []),
      $ = h.useCallback((N) => {
        N !== M.current && ((M.current = N), y(N));
      }, []),
      S = o || p,
      A = i || g,
      P = h.useRef(null),
      M = h.useRef(null),
      T = h.useRef(u),
      F = c != null,
      k = Db(c),
      D = Db(a),
      _ = h.useCallback(() => {
        if (!P.current || !M.current) return;
        const N = { placement: t, strategy: r, middleware: d };
        D.current && (N.platform = D.current),
          J9(P.current, M.current, N).then((B) => {
            const W = { ...B, isPositioned: !0 };
            O.current &&
              !Bl(T.current, W) &&
              ((T.current = W),
              ms.flushSync(() => {
                f(W);
              }));
          });
      }, [d, t, r, D]);
    il(() => {
      l === !1 && T.current.isPositioned && ((T.current.isPositioned = !1), f((N) => ({ ...N, isPositioned: !1 })));
    }, [l]);
    const O = h.useRef(!1);
    il(
      () => (
        (O.current = !0),
        () => {
          O.current = !1;
        }
      ),
      []
    ),
      il(() => {
        if ((S && (P.current = S), A && (M.current = A), S && A)) {
          if (k.current) return k.current(S, A, _);
          _();
        }
      }, [S, A, _, k, F]);
    const w = h.useMemo(() => ({ reference: P, floating: M, setReference: b, setFloating: $ }), [b, $]),
      R = h.useMemo(() => ({ reference: S, floating: A }), [S, A]),
      I = h.useMemo(() => {
        const N = { position: r, left: 0, top: 0 };
        if (!R.floating) return N;
        const B = Mb(R.floating, u.x),
          W = Mb(R.floating, u.y);
        return s ? { ...N, transform: "translate(" + B + "px, " + W + "px)", ...(UT(R.floating) >= 1.5 && { willChange: "transform" }) } : { position: r, left: B, top: W };
      }, [r, s, R.floating, u.x, u.y]);
    return h.useMemo(() => ({ ...u, update: _, refs: w, elements: R, floatingStyles: I }), [u, _, w, R, I]);
  }
  const tD = h.forwardRef((e, t) => {
      const { children: r, width: n = 10, height: a = 5, ...o } = e;
      return h.createElement(
        Le.svg,
        ue({}, o, { ref: t, width: n, height: a, viewBox: "0 0 30 10", preserveAspectRatio: "none" }),
        e.asChild ? r : h.createElement("polygon", { points: "0,0 30,0 15,10" })
      );
    }),
    rD = tD;
  function nD(e) {
    const [t, r] = h.useState(void 0);
    return (
      qt(() => {
        if (e) {
          r({ width: e.offsetWidth, height: e.offsetHeight });
          const n = new ResizeObserver((a) => {
            if (!Array.isArray(a) || !a.length) return;
            const o = a[0];
            let i, s;
            if ("borderBoxSize" in o) {
              const c = o.borderBoxSize,
                l = Array.isArray(c) ? c[0] : c;
              (i = l.inlineSize), (s = l.blockSize);
            } else (i = e.offsetWidth), (s = e.offsetHeight);
            r({ width: i, height: s });
          });
          return n.observe(e, { box: "border-box" }), () => n.unobserve(e);
        } else r(void 0);
      }, [e]),
      t
    );
  }
  const WT = "Popper",
    [HT, Bu] = Es(WT),
    [aD, zT] = HT(WT),
    oD = (e) => {
      const { __scopePopper: t, children: r } = e,
        [n, a] = h.useState(null);
      return h.createElement(aD, { scope: t, anchor: n, onAnchorChange: a }, r);
    },
    iD = "PopperAnchor",
    sD = h.forwardRef((e, t) => {
      const { __scopePopper: r, virtualRef: n, ...a } = e,
        o = zT(iD, r),
        i = h.useRef(null),
        s = ke(t, i);
      return (
        h.useEffect(() => {
          o.onAnchorChange((n == null ? void 0 : n.current) || i.current);
        }),
        n ? null : h.createElement(Le.div, ue({}, a, { ref: s }))
      );
    }),
    VT = "PopperContent",
    [cD, lD] = HT(VT),
    uD = h.forwardRef((e, t) => {
      var r, n, a, o, i, s, c, l;
      const {
          __scopePopper: u,
          side: f = "bottom",
          sideOffset: d = 0,
          align: v = "center",
          alignOffset: p = 0,
          arrowPadding: m = 0,
          avoidCollisions: g = !0,
          collisionBoundary: y = [],
          collisionPadding: b = 0,
          sticky: $ = "partial",
          hideWhenDetached: S = !1,
          updatePositionStrategy: A = "optimized",
          onPlaced: P,
          ...M
        } = e,
        T = zT(VT, u),
        [F, k] = h.useState(null),
        D = ke(t, (Q) => k(Q)),
        [_, O] = h.useState(null),
        w = nD(_),
        R = (r = w == null ? void 0 : w.width) !== null && r !== void 0 ? r : 0,
        I = (n = w == null ? void 0 : w.height) !== null && n !== void 0 ? n : 0,
        N = f + (v !== "center" ? "-" + v : ""),
        B = typeof b == "number" ? b : { top: 0, right: 0, bottom: 0, left: 0, ...b },
        W = Array.isArray(y) ? y : [y],
        C = W.length > 0,
        E = { padding: B, boundary: W.filter(vD), altBoundary: C },
        {
          refs: V,
          floatingStyles: X,
          placement: q,
          isPositioned: K,
          middlewareData: te,
        } = eD({
          strategy: "fixed",
          placement: N,
          whileElementsMounted: (...Q) => G9(...Q, { animationFrame: A === "always" }),
          elements: { reference: T.anchor },
          middleware: [
            T9({ mainAxis: d + I, alignmentAxis: p }),
            g && Y9({ mainAxis: !0, crossAxis: !1, limiter: $ === "partial" ? Z9() : void 0, ...E }),
            g && K9({ ...E }),
            q9({
              ...E,
              apply: ({ elements: Q, rects: le, availableWidth: he, availableHeight: $e }) => {
                const { width: He, height: Se } = le.reference,
                  Xe = Q.floating.style;
                Xe.setProperty("--radix-popper-available-width", `${he}px`),
                  Xe.setProperty("--radix-popper-available-height", `${$e}px`),
                  Xe.setProperty("--radix-popper-anchor-width", `${He}px`),
                  Xe.setProperty("--radix-popper-anchor-height", `${Se}px`);
              },
            }),
            _ && Q9({ element: _, padding: m }),
            pD({ arrowWidth: R, arrowHeight: I }),
            S && X9({ strategy: "referenceHidden", ...E }),
          ],
        }),
        [z, J] = GT(q),
        H = mt(P);
      qt(() => {
        K && (H == null || H());
      }, [K, H]);
      const G = (a = te.arrow) === null || a === void 0 ? void 0 : a.x,
        Y = (o = te.arrow) === null || o === void 0 ? void 0 : o.y,
        L = ((i = te.arrow) === null || i === void 0 ? void 0 : i.centerOffset) !== 0,
        [ne, Z] = h.useState();
      return (
        qt(() => {
          F && Z(window.getComputedStyle(F).zIndex);
        }, [F]),
        h.createElement(
          "div",
          {
            ref: V.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: {
              ...X,
              transform: K ? X.transform : "translate(0, -200%)",
              minWidth: "max-content",
              zIndex: ne,
              "--radix-popper-transform-origin": [(s = te.transformOrigin) === null || s === void 0 ? void 0 : s.x, (c = te.transformOrigin) === null || c === void 0 ? void 0 : c.y].join(" "),
            },
            dir: e.dir,
          },
          h.createElement(
            cD,
            { scope: u, placedSide: z, onArrowChange: O, arrowX: G, arrowY: Y, shouldHideArrow: L },
            h.createElement(
              Le.div,
              ue({ "data-side": z, "data-align": J }, M, {
                ref: D,
                style: { ...M.style, animation: K ? void 0 : "none", opacity: (l = te.hide) !== null && l !== void 0 && l.referenceHidden ? 0 : void 0 },
              })
            )
          )
        )
      );
    }),
    fD = "PopperArrow",
    dD = { top: "bottom", right: "left", bottom: "top", left: "right" },
    hD = h.forwardRef(function (t, r) {
      const { __scopePopper: n, ...a } = t,
        o = lD(fD, n),
        i = dD[o.placedSide];
      return h.createElement(
        "span",
        {
          ref: o.onArrowChange,
          style: {
            position: "absolute",
            left: o.arrowX,
            top: o.arrowY,
            [i]: 0,
            transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[o.placedSide],
            transform: { top: "translateY(100%)", right: "translateY(50%) rotate(90deg) translateX(-50%)", bottom: "rotate(180deg)", left: "translateY(50%) rotate(-90deg) translateX(50%)" }[
              o.placedSide
            ],
            visibility: o.shouldHideArrow ? "hidden" : void 0,
          },
        },
        h.createElement(rD, ue({}, a, { ref: r, style: { ...a.style, display: "block" } }))
      );
    });
  function vD(e) {
    return e !== null;
  }
  const pD = (e) => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
      var r, n, a, o, i;
      const { placement: s, rects: c, middlewareData: l } = t,
        f = ((r = l.arrow) === null || r === void 0 ? void 0 : r.centerOffset) !== 0,
        d = f ? 0 : e.arrowWidth,
        v = f ? 0 : e.arrowHeight,
        [p, m] = GT(s),
        g = { start: "0%", center: "50%", end: "100%" }[m],
        y = ((n = (a = l.arrow) === null || a === void 0 ? void 0 : a.x) !== null && n !== void 0 ? n : 0) + d / 2,
        b = ((o = (i = l.arrow) === null || i === void 0 ? void 0 : i.y) !== null && o !== void 0 ? o : 0) + v / 2;
      let $ = "",
        S = "";
      return (
        p === "bottom"
          ? (($ = f ? g : `${y}px`), (S = `${-v}px`))
          : p === "top"
          ? (($ = f ? g : `${y}px`), (S = `${c.floating.height + v}px`))
          : p === "right"
          ? (($ = `${-v}px`), (S = f ? g : `${b}px`))
          : p === "left" && (($ = `${c.floating.width + v}px`), (S = f ? g : `${b}px`)),
        { data: { x: $, y: S } }
      );
    },
  });
  function GT(e) {
    const [t, r = "center"] = e.split("-");
    return [t, r];
  }
  const YT = oD,
    KT = sD,
    qT = uD,
    mD = hD,
    XT = h.forwardRef((e, t) => {
      var r;
      const { container: n = globalThis == null || (r = globalThis.document) === null || r === void 0 ? void 0 : r.body, ...a } = e;
      return n ? A8.createPortal(h.createElement(Le.div, ue({}, a, { ref: t })), n) : null;
    });
  function gD(e, t) {
    return h.useReducer((r, n) => {
      const a = t[r][n];
      return a ?? r;
    }, e);
  }
  const Ta = (e) => {
    const { present: t, children: r } = e,
      n = yD(t),
      a = typeof r == "function" ? r({ present: n.isPresent }) : h.Children.only(r),
      o = ke(n.ref, a.ref);
    return typeof r == "function" || n.isPresent ? h.cloneElement(a, { ref: o }) : null;
  };
  Ta.displayName = "Presence";
  function yD(e) {
    const [t, r] = h.useState(),
      n = h.useRef({}),
      a = h.useRef(e),
      o = h.useRef("none"),
      i = e ? "mounted" : "unmounted",
      [s, c] = gD(i, { mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" }, unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" }, unmounted: { MOUNT: "mounted" } });
    return (
      h.useEffect(() => {
        const l = sc(n.current);
        o.current = s === "mounted" ? l : "none";
      }, [s]),
      qt(() => {
        const l = n.current,
          u = a.current;
        if (u !== e) {
          const d = o.current,
            v = sc(l);
          e ? c("MOUNT") : v === "none" || (l == null ? void 0 : l.display) === "none" ? c("UNMOUNT") : c(u && d !== v ? "ANIMATION_OUT" : "UNMOUNT"), (a.current = e);
        }
      }, [e, c]),
      qt(() => {
        if (t) {
          const l = (f) => {
              const v = sc(n.current).includes(f.animationName);
              f.target === t && v && ms.flushSync(() => c("ANIMATION_END"));
            },
            u = (f) => {
              f.target === t && (o.current = sc(n.current));
            };
          return (
            t.addEventListener("animationstart", u),
            t.addEventListener("animationcancel", l),
            t.addEventListener("animationend", l),
            () => {
              t.removeEventListener("animationstart", u), t.removeEventListener("animationcancel", l), t.removeEventListener("animationend", l);
            }
          );
        } else c("ANIMATION_END");
      }, [t, c]),
      {
        isPresent: ["mounted", "unmountSuspended"].includes(s),
        ref: h.useCallback((l) => {
          l && (n.current = getComputedStyle(l)), r(l);
        }, []),
      }
    );
  }
  function sc(e) {
    return (e == null ? void 0 : e.animationName) || "none";
  }
  function dp({ prop: e, defaultProp: t, onChange: r = () => {} }) {
    const [n, a] = bD({ defaultProp: t, onChange: r }),
      o = e !== void 0,
      i = o ? e : n,
      s = mt(r),
      c = h.useCallback(
        (l) => {
          if (o) {
            const f = typeof l == "function" ? l(e) : l;
            f !== e && s(f);
          } else a(l);
        },
        [o, e, a, s]
      );
    return [i, c];
  }
  function bD({ defaultProp: e, onChange: t }) {
    const r = h.useState(e),
      [n] = r,
      a = h.useRef(n),
      o = mt(t);
    return (
      h.useEffect(() => {
        a.current !== n && (o(n), (a.current = n));
      }, [n, a, o]),
      r
    );
  }
  const ZT = h.forwardRef((e, t) =>
      h.createElement(
        Le.span,
        ue({}, e, {
          ref: t,
          style: { position: "absolute", border: 0, width: 1, height: 1, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", wordWrap: "normal", ...e.style },
        })
      )
    ),
    $D = ZT,
    [Uu, xEe] = Es("Tooltip", [Bu]),
    Wu = Bu(),
    wD = "TooltipProvider",
    SD = 700,
    hp = "tooltip.open",
    [ED, wg] = Uu(wD),
    xD = (e) => {
      const { __scopeTooltip: t, delayDuration: r = SD, skipDelayDuration: n = 300, disableHoverableContent: a = !1, children: o } = e,
        [i, s] = h.useState(!0),
        c = h.useRef(!1),
        l = h.useRef(0);
      return (
        h.useEffect(() => {
          const u = l.current;
          return () => window.clearTimeout(u);
        }, []),
        h.createElement(
          ED,
          {
            scope: t,
            isOpenDelayed: i,
            delayDuration: r,
            onOpen: h.useCallback(() => {
              window.clearTimeout(l.current), s(!1);
            }, []),
            onClose: h.useCallback(() => {
              window.clearTimeout(l.current), (l.current = window.setTimeout(() => s(!0), n));
            }, [n]),
            isPointerInTransitRef: c,
            onPointerInTransitChange: h.useCallback((u) => {
              c.current = u;
            }, []),
            disableHoverableContent: a,
          },
          o
        )
      );
    },
    Sg = "Tooltip",
    [TD, Ts] = Uu(Sg),
    CD = (e) => {
      const { __scopeTooltip: t, children: r, open: n, defaultOpen: a = !1, onOpenChange: o, disableHoverableContent: i, delayDuration: s } = e,
        c = wg(Sg, e.__scopeTooltip),
        l = Wu(t),
        [u, f] = h.useState(null),
        d = Lu(),
        v = h.useRef(0),
        p = i ?? c.disableHoverableContent,
        m = s ?? c.delayDuration,
        g = h.useRef(!1),
        [y = !1, b] = dp({
          prop: n,
          defaultProp: a,
          onChange: (M) => {
            M ? (c.onOpen(), document.dispatchEvent(new CustomEvent(hp))) : c.onClose(), o == null || o(M);
          },
        }),
        $ = h.useMemo(() => (y ? (g.current ? "delayed-open" : "instant-open") : "closed"), [y]),
        S = h.useCallback(() => {
          window.clearTimeout(v.current), (g.current = !1), b(!0);
        }, [b]),
        A = h.useCallback(() => {
          window.clearTimeout(v.current), b(!1);
        }, [b]),
        P = h.useCallback(() => {
          window.clearTimeout(v.current),
            (v.current = window.setTimeout(() => {
              (g.current = !0), b(!0);
            }, m));
        }, [m, b]);
      return (
        h.useEffect(() => () => window.clearTimeout(v.current), []),
        h.createElement(
          YT,
          l,
          h.createElement(
            TD,
            {
              scope: t,
              contentId: d,
              open: y,
              stateAttribute: $,
              trigger: u,
              onTriggerChange: f,
              onTriggerEnter: h.useCallback(() => {
                c.isOpenDelayed ? P() : S();
              }, [c.isOpenDelayed, P, S]),
              onTriggerLeave: h.useCallback(() => {
                p ? A() : window.clearTimeout(v.current);
              }, [A, p]),
              onOpen: S,
              onClose: A,
              disableHoverableContent: p,
            },
            r
          )
        )
      );
    },
    Nb = "TooltipTrigger",
    OD = h.forwardRef((e, t) => {
      const { __scopeTooltip: r, ...n } = e,
        a = Ts(Nb, r),
        o = wg(Nb, r),
        i = Wu(r),
        s = h.useRef(null),
        c = ke(t, s, a.onTriggerChange),
        l = h.useRef(!1),
        u = h.useRef(!1),
        f = h.useCallback(() => (l.current = !1), []);
      return (
        h.useEffect(() => () => document.removeEventListener("pointerup", f), [f]),
        h.createElement(
          KT,
          ue({ asChild: !0 }, i),
          h.createElement(
            Le.button,
            ue({ "aria-describedby": a.open ? a.contentId : void 0, "data-state": a.stateAttribute }, n, {
              ref: c,
              onPointerMove: Ee(e.onPointerMove, (d) => {
                d.pointerType !== "touch" && !u.current && !o.isPointerInTransitRef.current && (a.onTriggerEnter(), (u.current = !0));
              }),
              onPointerLeave: Ee(e.onPointerLeave, () => {
                a.onTriggerLeave(), (u.current = !1);
              }),
              onPointerDown: Ee(e.onPointerDown, () => {
                (l.current = !0), document.addEventListener("pointerup", f, { once: !0 });
              }),
              onFocus: Ee(e.onFocus, () => {
                l.current || a.onOpen();
              }),
              onBlur: Ee(e.onBlur, a.onClose),
              onClick: Ee(e.onClick, a.onClose),
            })
          )
        )
      );
    }),
    JT = "TooltipPortal",
    [_D, PD] = Uu(JT, { forceMount: void 0 }),
    ID = (e) => {
      const { __scopeTooltip: t, forceMount: r, children: n, container: a } = e,
        o = Ts(JT, t);
      return h.createElement(_D, { scope: t, forceMount: r }, h.createElement(Ta, { present: r || o.open }, h.createElement(XT, { asChild: !0, container: a }, n)));
    },
    Xi = "TooltipContent",
    AD = h.forwardRef((e, t) => {
      const r = PD(Xi, e.__scopeTooltip),
        { forceMount: n = r.forceMount, side: a = "top", ...o } = e,
        i = Ts(Xi, e.__scopeTooltip);
      return h.createElement(Ta, { present: n || i.open }, i.disableHoverableContent ? h.createElement(QT, ue({ side: a }, o, { ref: t })) : h.createElement(RD, ue({ side: a }, o, { ref: t })));
    }),
    RD = h.forwardRef((e, t) => {
      const r = Ts(Xi, e.__scopeTooltip),
        n = wg(Xi, e.__scopeTooltip),
        a = h.useRef(null),
        o = ke(t, a),
        [i, s] = h.useState(null),
        { trigger: c, onClose: l } = r,
        u = a.current,
        { onPointerInTransitChange: f } = n,
        d = h.useCallback(() => {
          s(null), f(!1);
        }, [f]),
        v = h.useCallback(
          (p, m) => {
            const g = p.currentTarget,
              y = { x: p.clientX, y: p.clientY },
              b = LD(y, g.getBoundingClientRect()),
              $ = FD(y, b),
              S = jD(m.getBoundingClientRect()),
              A = UD([...$, ...S]);
            s(A), f(!0);
          },
          [f]
        );
      return (
        h.useEffect(() => () => d(), [d]),
        h.useEffect(() => {
          if (c && u) {
            const p = (g) => v(g, u),
              m = (g) => v(g, c);
            return (
              c.addEventListener("pointerleave", p),
              u.addEventListener("pointerleave", m),
              () => {
                c.removeEventListener("pointerleave", p), u.removeEventListener("pointerleave", m);
              }
            );
          }
        }, [c, u, v, d]),
        h.useEffect(() => {
          if (i) {
            const p = (m) => {
              const g = m.target,
                y = { x: m.clientX, y: m.clientY },
                b = (c == null ? void 0 : c.contains(g)) || (u == null ? void 0 : u.contains(g)),
                $ = !BD(y, i);
              b ? d() : $ && (d(), l());
            };
            return document.addEventListener("pointermove", p), () => document.removeEventListener("pointermove", p);
          }
        }, [c, u, i, l, d]),
        h.createElement(QT, ue({}, e, { ref: o }))
      );
    }),
    [MD, DD] = Uu(Sg, { isInside: !1 }),
    QT = h.forwardRef((e, t) => {
      const { __scopeTooltip: r, children: n, "aria-label": a, onEscapeKeyDown: o, onPointerDownOutside: i, ...s } = e,
        c = Ts(Xi, r),
        l = Wu(r),
        { onClose: u } = c;
      return (
        h.useEffect(() => (document.addEventListener(hp, u), () => document.removeEventListener(hp, u)), [u]),
        h.useEffect(() => {
          if (c.trigger) {
            const f = (d) => {
              const v = d.target;
              v != null && v.contains(c.trigger) && u();
            };
            return window.addEventListener("scroll", f, { capture: !0 }), () => window.removeEventListener("scroll", f, { capture: !0 });
          }
        }, [c.trigger, u]),
        h.createElement(
          PT,
          { asChild: !0, disableOutsidePointerEvents: !1, onEscapeKeyDown: o, onPointerDownOutside: i, onFocusOutside: (f) => f.preventDefault(), onDismiss: u },
          h.createElement(
            qT,
            ue({ "data-state": c.stateAttribute }, l, s, {
              ref: t,
              style: {
                ...s.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)",
              },
            }),
            h.createElement(_T, null, n),
            h.createElement(MD, { scope: r, isInside: !0 }, h.createElement($D, { id: c.contentId, role: "tooltip" }, a || n))
          )
        )
      );
    }),
    ND = "TooltipArrow",
    kD = h.forwardRef((e, t) => {
      const { __scopeTooltip: r, ...n } = e,
        a = Wu(r);
      return DD(ND, r).isInside ? null : h.createElement(mD, ue({}, a, n, { ref: t }));
    });
  function LD(e, t) {
    const r = Math.abs(t.top - e.y),
      n = Math.abs(t.bottom - e.y),
      a = Math.abs(t.right - e.x),
      o = Math.abs(t.left - e.x);
    switch (Math.min(r, n, a, o)) {
      case o:
        return "left";
      case a:
        return "right";
      case r:
        return "top";
      case n:
        return "bottom";
      default:
        throw new Error("unreachable");
    }
  }
  function FD(e, t, r = 5) {
    const n = [];
    switch (t) {
      case "top":
        n.push({ x: e.x - r, y: e.y + r }, { x: e.x + r, y: e.y + r });
        break;
      case "bottom":
        n.push({ x: e.x - r, y: e.y - r }, { x: e.x + r, y: e.y - r });
        break;
      case "left":
        n.push({ x: e.x + r, y: e.y - r }, { x: e.x + r, y: e.y + r });
        break;
      case "right":
        n.push({ x: e.x - r, y: e.y - r }, { x: e.x - r, y: e.y + r });
        break;
    }
    return n;
  }
  function jD(e) {
    const { top: t, right: r, bottom: n, left: a } = e;
    return [
      { x: a, y: t },
      { x: r, y: t },
      { x: r, y: n },
      { x: a, y: n },
    ];
  }
  function BD(e, t) {
    const { x: r, y: n } = e;
    let a = !1;
    for (let o = 0, i = t.length - 1; o < t.length; i = o++) {
      const s = t[o].x,
        c = t[o].y,
        l = t[i].x,
        u = t[i].y;
      c > n != u > n && r < ((l - s) * (n - c)) / (u - c) + s && (a = !a);
    }
    return a;
  }
  function UD(e) {
    const t = e.slice();
    return t.sort((r, n) => (r.x < n.x ? -1 : r.x > n.x ? 1 : r.y < n.y ? -1 : r.y > n.y ? 1 : 0)), WD(t);
  }
  function WD(e) {
    if (e.length <= 1) return e.slice();
    const t = [];
    for (let n = 0; n < e.length; n++) {
      const a = e[n];
      for (; t.length >= 2; ) {
        const o = t[t.length - 1],
          i = t[t.length - 2];
        if ((o.x - i.x) * (a.y - i.y) >= (o.y - i.y) * (a.x - i.x)) t.pop();
        else break;
      }
      t.push(a);
    }
    t.pop();
    const r = [];
    for (let n = e.length - 1; n >= 0; n--) {
      const a = e[n];
      for (; r.length >= 2; ) {
        const o = r[r.length - 1],
          i = r[r.length - 2];
        if ((o.x - i.x) * (a.y - i.y) >= (o.y - i.y) * (a.x - i.x)) r.pop();
        else break;
      }
      r.push(a);
    }
    return r.pop(), t.length === 1 && r.length === 1 && t[0].x === r[0].x && t[0].y === r[0].y ? t : t.concat(r);
  }
  const HD = xD,
    zD = CD,
    VD = OD,
    GD = ID,
    YD = AD,
    KD = kD,
    eC = h.createContext(void 0),
    qD = (e) => {
      const { dir: t, children: r } = e;
      return h.createElement(eC.Provider, { value: t }, r);
    };
  function tC(e) {
    const t = h.useContext(eC);
    return e || t || "ltr";
  }
  const XD = ["tomato", "red", "ruby", "crimson", "pink", "plum", "purple", "violet", "iris", "indigo", "blue", "cyan", "teal", "jade", "green", "grass", "brown", "orange"],
    ZD = ["sky", "mint", "lime", "yellow", "amber"],
    JD = ["gold", "bronze"],
    QD = [...XD, ...ZD, ...JD],
    eN = "gray",
    tN = ["mauve", "slate", "sage", "olive", "sand"],
    rN = [eN, ...tN];
  function nN(e) {
    switch (e) {
      case "tomato":
      case "red":
      case "ruby":
      case "crimson":
      case "pink":
      case "plum":
      case "purple":
      case "violet":
        return "mauve";
      case "iris":
      case "indigo":
      case "blue":
      case "sky":
      case "cyan":
        return "slate";
      case "teal":
      case "jade":
      case "mint":
      case "green":
        return "sage";
      case "grass":
      case "lime":
        return "olive";
      case "yellow":
      case "amber":
      case "orange":
      case "brown":
      case "gold":
      case "bronze":
        return "sand";
    }
  }
  const aN = ["inherit", "light", "dark"],
    oN = [...QD, "gray"],
    iN = [...rN, "auto"],
    sN = ["solid", "translucent"],
    cN = ["none", "small", "medium", "large", "full"],
    lN = ["90%", "95%", "100%", "105%", "110%"],
    wt = {
      hasBackground: { type: "boolean", default: !0 },
      appearance: { type: "enum", values: aN, default: "inherit" },
      accentColor: { type: "enum", values: oN, default: "indigo" },
      grayColor: { type: "enum", values: iN, default: "auto" },
      panelBackground: { type: "enum", values: sN, default: "translucent" },
      radius: { type: "enum", values: cN, default: "medium" },
      scaling: { type: "enum", values: lN, default: "100%" },
    };
  function rC(e) {
    return e === "gray" ? "gray" : nN(e);
  }
  const qa = () => {},
    Ul = h.createContext(void 0);
  function uN() {
    const e = h.useContext(Ul);
    if (e === void 0) throw new Error("`useThemeContext` must be used within a `Theme`");
    return e;
  }
  const Hu = h.forwardRef((e, t) =>
    h.useContext(Ul) === void 0 ? h.createElement(HD, null, h.createElement(qD, { dir: "ltr" }, h.createElement(nC, { ...e, ref: t }))) : h.createElement(Eg, { ...e, ref: t })
  );
  Hu.displayName = "Theme";
  const nC = h.forwardRef((e, t) => {
    const {
        appearance: r = wt.appearance.default,
        accentColor: n = wt.accentColor.default,
        grayColor: a = wt.grayColor.default,
        panelBackground: o = wt.panelBackground.default,
        radius: i = wt.radius.default,
        scaling: s = wt.scaling.default,
        hasBackground: c = wt.hasBackground.default,
        ...l
      } = e,
      [u, f] = h.useState(r);
    h.useEffect(() => f(r), [r]);
    const [d, v] = h.useState(n);
    h.useEffect(() => v(n), [n]);
    const [p, m] = h.useState(a);
    h.useEffect(() => m(a), [a]);
    const [g, y] = h.useState(o);
    h.useEffect(() => y(o), [o]);
    const [b, $] = h.useState(i);
    h.useEffect(() => $(i), [i]);
    const [S, A] = h.useState(s);
    h.useEffect(() => A(s), [s]);
    const P = h.memo(
      ({ appearance: T }) =>
        h.createElement("script", {
          dangerouslySetInnerHTML: { __html: `!(function(){try{var d=document.documentElement,c=d.classList;c.remove('light','dark');d.style.colorScheme='${T}';c.add('${T}');}catch(e){}})();` },
        }),
      () => !0
    );
    (P.displayName = "ExplicitRootAppearanceScript"), h.useEffect(() => fN(r), [r]);
    const M = p === "auto" ? rC(d) : p;
    return h.createElement(
      h.Fragment,
      null,
      u !== "inherit" && h.createElement(P, { appearance: u }),
      c &&
        h.createElement("style", {
          dangerouslySetInnerHTML: {
            __html: `
:root, .light, .light-theme { --color-page-background: white; }
.dark, .dark-theme { --color-page-background: var(--${M}-1); }
body { background-color: var(--color-page-background); }
`,
          },
        }),
      h.createElement(Eg, {
        ...l,
        ref: t,
        isRoot: !0,
        hasBackground: c,
        appearance: u,
        accentColor: d,
        grayColor: p,
        panelBackground: g,
        radius: b,
        scaling: S,
        onAppearanceChange: f,
        onAccentColorChange: v,
        onGrayColorChange: m,
        onPanelBackgroundChange: y,
        onRadiusChange: $,
        onScalingChange: A,
      })
    );
  });
  nC.displayName = "ThemeRoot";
  const Eg = h.forwardRef((e, t) => {
    var r, n, a, o, i, s;
    const c = h.useContext(Ul),
      {
        asChild: l,
        isRoot: u,
        hasBackground: f,
        appearance: d = (r = c == null ? void 0 : c.appearance) !== null && r !== void 0 ? r : wt.appearance.default,
        accentColor: v = (n = c == null ? void 0 : c.accentColor) !== null && n !== void 0 ? n : wt.accentColor.default,
        grayColor: p = (a = c == null ? void 0 : c.resolvedGrayColor) !== null && a !== void 0 ? a : wt.grayColor.default,
        panelBackground: m = (o = c == null ? void 0 : c.panelBackground) !== null && o !== void 0 ? o : wt.panelBackground.default,
        radius: g = (i = c == null ? void 0 : c.radius) !== null && i !== void 0 ? i : wt.radius.default,
        scaling: y = (s = c == null ? void 0 : c.scaling) !== null && s !== void 0 ? s : wt.scaling.default,
        onAppearanceChange: b = qa,
        onAccentColorChange: $ = qa,
        onGrayColorChange: S = qa,
        onPanelBackgroundChange: A = qa,
        onRadiusChange: P = qa,
        onScalingChange: M = qa,
        ...T
      } = e,
      F = l ? la : "div",
      k = p === "auto" ? rC(v) : p,
      D = e.appearance !== void 0 && e.appearance !== "inherit",
      _ = e.grayColor !== void 0,
      O = !u && (f === !0 || (f !== !1 && (D || _)));
    return h.createElement(
      Ul.Provider,
      {
        value: h.useMemo(
          () => ({
            appearance: d,
            accentColor: v,
            grayColor: p,
            resolvedGrayColor: k,
            panelBackground: m,
            radius: g,
            scaling: y,
            onAppearanceChange: b,
            onAccentColorChange: $,
            onGrayColorChange: S,
            onPanelBackgroundChange: A,
            onRadiusChange: P,
            onScalingChange: M,
          }),
          [d, v, p, k, m, g, y, b, $, S, A, P, M]
        ),
      },
      h.createElement(F, {
        "data-is-root-theme": u ? "true" : "false",
        "data-accent-color": v,
        "data-gray-color": k,
        "data-has-background": O ? "true" : "false",
        "data-panel-background": m,
        "data-radius": g,
        "data-scaling": y,
        ref: t,
        ...T,
        className: Jt("radix-themes", { light: !u && d === "light", dark: !u && d === "dark" }, T.className),
      })
    );
  });
  Eg.displayName = "ThemeImpl";
  function fN(e) {
    if (e === "inherit") return;
    const t = document.documentElement;
    (t.classList.contains("light-theme") || t.classList.contains("dark-theme")) && (t.classList.remove("light-theme", "dark-theme"), (t.style.colorScheme = e), t.classList.add(`${e}-theme`)),
      (t.classList.contains("light") || t.classList.contains("dark")) && (t.classList.remove("light", "dark"), (t.style.colorScheme = e), t.classList.add(e));
  }
  const zu = { type: "enum", values: wt.accentColor.values, default: void 0 },
    xg = { type: "boolean", default: void 0 };
  function St(e, t = "", r) {
    var n, a, o, i;
    const s = [];
    if (typeof e == "object") {
      for (const c of Object.keys(e))
        if (c in e) {
          const l = (n = e[c]) === null || n === void 0 ? void 0 : n.toString(),
            u = l == null ? void 0 : l.startsWith("-"),
            f = t === "" ? "" : "-",
            d = u ? `-${t}` : t,
            v = u ? (l == null ? void 0 : l.substring(1)) : l;
          if (v === void 0) continue;
          const p = (a = r == null ? void 0 : r[v]) !== null && a !== void 0 ? a : v,
            m = c === "initial" ? `${d}${f}${p}` : `${c}:${d}${f}${p}`;
          s.push(m);
        }
    }
    if (typeof e == "string") {
      const c = e.startsWith("-"),
        l = t === "" ? "" : "-",
        u = c ? `-${t}` : t,
        f = c ? e.substring(1) : e,
        d = (o = r == null ? void 0 : r[f]) !== null && o !== void 0 ? o : f;
      s.push(`${u}${l}${d}`);
    }
    if (typeof e == "boolean") {
      const c = t === "" ? "" : "-",
        l = e.toString(),
        u = (i = r == null ? void 0 : r[l]) !== null && i !== void 0 ? i : l;
      s.push(`${t}${c}${u}`);
    }
    return s.join(" ");
  }
  const dN = ["normal", "start", "end", "both"],
    hN = { type: "enum", values: dN, default: void 0, responsive: !0 },
    zn = ["auto", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-1", "-2", "-3", "-4", "-5", "-6", "-7", "-8", "-9"],
    Vn = {
      m: { type: "enum", values: zn, default: void 0, responsive: !0 },
      mx: { type: "enum", values: zn, default: void 0, responsive: !0 },
      my: { type: "enum", values: zn, default: void 0, responsive: !0 },
      mt: { type: "enum", values: zn, default: void 0, responsive: !0 },
      mr: { type: "enum", values: zn, default: void 0, responsive: !0 },
      mb: { type: "enum", values: zn, default: void 0, responsive: !0 },
      ml: { type: "enum", values: zn, default: void 0, responsive: !0 },
    };
  function Vu(e) {
    const { m: t = Vn.m.default, mx: r = Vn.mx.default, my: n = Vn.my.default, mt: a = Vn.mt.default, mr: o = Vn.mr.default, mb: i = Vn.mb.default, ml: s = Vn.ml.default, ...c } = e;
    return { m: t, mx: r, my: n, mt: a, mr: o, mb: i, ml: s, rest: c };
  }
  function Gu(e) {
    return [St(e.m, "rt-r-m"), St(e.mx, "rt-r-mx"), St(e.my, "rt-r-my"), St(e.mt, "rt-r-mt"), St(e.mr, "rt-r-mr"), St(e.mb, "rt-r-mb"), St(e.ml, "rt-r-ml")].filter(Boolean).join(" ");
  }
  const aC = { type: "enum", values: wt.radius.values, default: void 0 },
    vN = ["left", "center", "right"],
    pN = { type: "enum", values: vN, default: void 0, responsive: !0 },
    mN = ["light", "regular", "medium", "bold"],
    gN = { type: "enum", values: mN, default: void 0, responsive: !0 },
    yN = ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
    or = { size: { type: "enum", values: yN, default: void 0, responsive: !0 }, weight: gN, align: pN, trim: hN, color: zu, highContrast: xg },
    Tg = h.forwardRef((e, t) => {
      const { rest: r, ...n } = Vu(e),
        {
          children: a,
          className: o,
          asChild: i = !1,
          as: s = "span",
          size: c = or.size.default,
          weight: l = or.weight.default,
          align: u = or.align.default,
          trim: f = or.trim.default,
          color: d = or.color.default,
          highContrast: v = or.highContrast.default,
          ...p
        } = r;
      return h.createElement(
        la,
        { "data-accent-color": d, ...p, ref: t, className: Jt("rt-Text", o, St(c, "rt-r-size"), St(l, "rt-r-weight"), St(u, "rt-r-ta"), St(f, "rt-r-lt"), { "rt-high-contrast": v }, Gu(n)) },
        i ? a : h.createElement(s, null, a)
      );
    });
  Tg.displayName = "Text";
  const bN = ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
    $N = { size: { type: "enum", values: bN, default: void 0, responsive: !0 } },
    oC = h.forwardRef((e, t) => {
      const { rest: r, ...n } = Vu(e),
        { className: a, size: o = $N.size.default, ...i } = r;
      return h.createElement("kbd", { ...i, ref: t, className: Jt("rt-Kbd", a, St(o, "rt-r-size"), Gu(n)) });
    });
  oC.displayName = "Kbd";
  function wN(e) {
    const t = h.useRef({ value: e, previous: e });
    return h.useMemo(() => (t.current.value !== e && ((t.current.previous = t.current.value), (t.current.value = e)), t.current.previous), [e]);
  }
  const iC = h.forwardRef(({ color: e = "currentColor", ...t }, r) =>
    h.createElement(
      "svg",
      { width: "9", height: "9", viewBox: "0 0 9 9", fill: e, xmlns: "http://www.w3.org/2000/svg", ...t, ref: r },
      h.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M8.53547 0.62293C8.88226 0.849446 8.97976 1.3142 8.75325 1.66099L4.5083 8.1599C4.38833 8.34356 4.19397 8.4655 3.9764 8.49358C3.75883 8.52167 3.53987 8.45309 3.3772 8.30591L0.616113 5.80777C0.308959 5.52987 0.285246 5.05559 0.563148 4.74844C0.84105 4.44128 1.31533 4.41757 1.62249 4.69547L3.73256 6.60459L7.49741 0.840706C7.72393 0.493916 8.18868 0.396414 8.53547 0.62293Z",
      })
    )
  );
  iC.displayName = "ThickCheckIcon";
  const sC = h.forwardRef(({ color: e = "currentColor", ...t }, r) =>
    h.createElement(
      "svg",
      { width: "9", height: "9", viewBox: "0 0 9 9", fill: e, xmlns: "http://www.w3.org/2000/svg", ...t, ref: r },
      h.createElement("path", {
        d: "M0.135232 3.15803C0.324102 2.95657 0.640521 2.94637 0.841971 3.13523L4.5 6.56464L8.158 3.13523C8.3595 2.94637 8.6759 2.95657 8.8648 3.15803C9.0536 3.35949 9.0434 3.67591 8.842 3.86477L4.84197 7.6148C4.64964 7.7951 4.35036 7.7951 4.15803 7.6148L0.158031 3.86477C-0.0434285 3.67591 -0.0536285 3.35949 0.135232 3.15803Z",
      })
    )
  );
  sC.displayName = "ChevronDownIcon";
  const SN = h.forwardRef(({ color: e = "currentColor", ...t }, r) =>
    h.createElement(
      "svg",
      { width: "9", height: "9", viewBox: "0 0 9 9", fill: e, xmlns: "http://www.w3.org/2000/svg", ...t, ref: r },
      h.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3.23826 0.201711C3.54108 -0.0809141 4.01567 -0.0645489 4.29829 0.238264L7.79829 3.98826C8.06724 4.27642 8.06724 4.72359 7.79829 5.01174L4.29829 8.76174C4.01567 9.06455 3.54108 9.08092 3.23826 8.79829C2.93545 8.51567 2.91909 8.04108 3.20171 7.73826L6.22409 4.5L3.20171 1.26174C2.91909 0.958928 2.93545 0.484337 3.23826 0.201711Z",
      })
    )
  );
  SN.displayName = "ThickChevronRightIcon";
  const EN = h.forwardRef(({ color: e = "currentColor", ...t }, r) =>
    h.createElement(
      "svg",
      { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t, ref: r },
      h.createElement("path", {
        d: "M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM8.24992 4.49999C8.24992 4.9142 7.91413 5.24999 7.49992 5.24999C7.08571 5.24999 6.74992 4.9142 6.74992 4.49999C6.74992 4.08577 7.08571 3.74999 7.49992 3.74999C7.91413 3.74999 8.24992 4.08577 8.24992 4.49999ZM6.00003 5.99999H6.50003H7.50003C7.77618 5.99999 8.00003 6.22384 8.00003 6.49999V9.99999H8.50003H9.00003V11H8.50003H7.50003H6.50003H6.00003V9.99999H6.50003H7.00003V6.99999H6.50003H6.00003V5.99999Z",
        fill: e,
        fillRule: "evenodd",
        clipRule: "evenodd",
      })
    )
  );
  EN.displayName = "InfoCircledIcon";
  function xN(e) {
    const t = e + "CollectionProvider",
      [r, n] = Es(t),
      [a, o] = r(t, { collectionRef: { current: null }, itemMap: new Map() }),
      i = (v) => {
        const { scope: p, children: m } = v,
          g = Ge.useRef(null),
          y = Ge.useRef(new Map()).current;
        return Ge.createElement(a, { scope: p, itemMap: y, collectionRef: g }, m);
      },
      s = e + "CollectionSlot",
      c = Ge.forwardRef((v, p) => {
        const { scope: m, children: g } = v,
          y = o(s, m),
          b = ke(p, y.collectionRef);
        return Ge.createElement(la, { ref: b }, g);
      }),
      l = e + "CollectionItemSlot",
      u = "data-radix-collection-item",
      f = Ge.forwardRef((v, p) => {
        const { scope: m, children: g, ...y } = v,
          b = Ge.useRef(null),
          $ = ke(p, b),
          S = o(l, m);
        return Ge.useEffect(() => (S.itemMap.set(b, { ref: b, ...y }), () => void S.itemMap.delete(b))), Ge.createElement(la, { [u]: "", ref: $ }, g);
      });
    function d(v) {
      const p = o(e + "CollectionConsumer", v);
      return Ge.useCallback(() => {
        const g = p.collectionRef.current;
        if (!g) return [];
        const y = Array.from(g.querySelectorAll(`[${u}]`));
        return Array.from(p.itemMap.values()).sort((S, A) => y.indexOf(S.ref.current) - y.indexOf(A.ref.current));
      }, [p.collectionRef, p.itemMap]);
    }
    return [{ Provider: i, Slot: c, ItemSlot: f }, d, n];
  }
  function vp(e, [t, r]) {
    return Math.min(r, Math.max(t, e));
  }
  let Fd = 0;
  function TN() {
    h.useEffect(() => {
      var e, t;
      const r = document.querySelectorAll("[data-radix-focus-guard]");
      return (
        document.body.insertAdjacentElement("afterbegin", (e = r[0]) !== null && e !== void 0 ? e : kb()),
        document.body.insertAdjacentElement("beforeend", (t = r[1]) !== null && t !== void 0 ? t : kb()),
        Fd++,
        () => {
          Fd === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((n) => n.remove()), Fd--;
        }
      );
    }, []);
  }
  function kb() {
    const e = document.createElement("span");
    return e.setAttribute("data-radix-focus-guard", ""), (e.tabIndex = 0), (e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none"), e;
  }
  const jd = "focusScope.autoFocusOnMount",
    Bd = "focusScope.autoFocusOnUnmount",
    Lb = { bubbles: !1, cancelable: !0 },
    CN = h.forwardRef((e, t) => {
      const { loop: r = !1, trapped: n = !1, onMountAutoFocus: a, onUnmountAutoFocus: o, ...i } = e,
        [s, c] = h.useState(null),
        l = mt(a),
        u = mt(o),
        f = h.useRef(null),
        d = ke(t, (m) => c(m)),
        v = h.useRef({
          paused: !1,
          pause() {
            this.paused = !0;
          },
          resume() {
            this.paused = !1;
          },
        }).current;
      h.useEffect(() => {
        if (n) {
          let m = function ($) {
              if (v.paused || !s) return;
              const S = $.target;
              s.contains(S) ? (f.current = S) : $n(f.current, { select: !0 });
            },
            g = function ($) {
              if (v.paused || !s) return;
              const S = $.relatedTarget;
              S !== null && (s.contains(S) || $n(f.current, { select: !0 }));
            },
            y = function ($) {
              if (document.activeElement === document.body) for (const A of $) A.removedNodes.length > 0 && $n(s);
            };
          document.addEventListener("focusin", m), document.addEventListener("focusout", g);
          const b = new MutationObserver(y);
          return (
            s && b.observe(s, { childList: !0, subtree: !0 }),
            () => {
              document.removeEventListener("focusin", m), document.removeEventListener("focusout", g), b.disconnect();
            }
          );
        }
      }, [n, s, v.paused]),
        h.useEffect(() => {
          if (s) {
            jb.add(v);
            const m = document.activeElement;
            if (!s.contains(m)) {
              const y = new CustomEvent(jd, Lb);
              s.addEventListener(jd, l), s.dispatchEvent(y), y.defaultPrevented || (ON(RN(cC(s)), { select: !0 }), document.activeElement === m && $n(s));
            }
            return () => {
              s.removeEventListener(jd, l),
                setTimeout(() => {
                  const y = new CustomEvent(Bd, Lb);
                  s.addEventListener(Bd, u), s.dispatchEvent(y), y.defaultPrevented || $n(m ?? document.body, { select: !0 }), s.removeEventListener(Bd, u), jb.remove(v);
                }, 0);
            };
          }
        }, [s, l, u, v]);
      const p = h.useCallback(
        (m) => {
          if ((!r && !n) || v.paused) return;
          const g = m.key === "Tab" && !m.altKey && !m.ctrlKey && !m.metaKey,
            y = document.activeElement;
          if (g && y) {
            const b = m.currentTarget,
              [$, S] = _N(b);
            $ && S
              ? !m.shiftKey && y === S
                ? (m.preventDefault(), r && $n($, { select: !0 }))
                : m.shiftKey && y === $ && (m.preventDefault(), r && $n(S, { select: !0 }))
              : y === b && m.preventDefault();
          }
        },
        [r, n, v.paused]
      );
      return h.createElement(Le.div, ue({ tabIndex: -1 }, i, { ref: d, onKeyDown: p }));
    });
  function ON(e, { select: t = !1 } = {}) {
    const r = document.activeElement;
    for (const n of e) if (($n(n, { select: t }), document.activeElement !== r)) return;
  }
  function _N(e) {
    const t = cC(e),
      r = Fb(t, e),
      n = Fb(t.reverse(), e);
    return [r, n];
  }
  function cC(e) {
    const t = [],
      r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: (n) => {
          const a = n.tagName === "INPUT" && n.type === "hidden";
          return n.disabled || n.hidden || a ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
        },
      });
    for (; r.nextNode(); ) t.push(r.currentNode);
    return t;
  }
  function Fb(e, t) {
    for (const r of e) if (!PN(r, { upTo: t })) return r;
  }
  function PN(e, { upTo: t }) {
    if (getComputedStyle(e).visibility === "hidden") return !0;
    for (; e; ) {
      if (t !== void 0 && e === t) return !1;
      if (getComputedStyle(e).display === "none") return !0;
      e = e.parentElement;
    }
    return !1;
  }
  function IN(e) {
    return e instanceof HTMLInputElement && "select" in e;
  }
  function $n(e, { select: t = !1 } = {}) {
    if (e && e.focus) {
      const r = document.activeElement;
      e.focus({ preventScroll: !0 }), e !== r && IN(e) && t && e.select();
    }
  }
  const jb = AN();
  function AN() {
    let e = [];
    return {
      add(t) {
        const r = e[0];
        t !== r && (r == null || r.pause()), (e = Bb(e, t)), e.unshift(t);
      },
      remove(t) {
        var r;
        (e = Bb(e, t)), (r = e[0]) === null || r === void 0 || r.resume();
      },
    };
  }
  function Bb(e, t) {
    const r = [...e],
      n = r.indexOf(t);
    return n !== -1 && r.splice(n, 1), r;
  }
  function RN(e) {
    return e.filter((t) => t.tagName !== "A");
  }
  var lC = MA(),
    Ud = function () {},
    Yu = h.forwardRef(function (e, t) {
      var r = h.useRef(null),
        n = h.useState({ onScrollCapture: Ud, onWheelCapture: Ud, onTouchMoveCapture: Ud }),
        a = n[0],
        o = n[1],
        i = e.forwardProps,
        s = e.children,
        c = e.className,
        l = e.removeScrollBar,
        u = e.enabled,
        f = e.shards,
        d = e.sideCar,
        v = e.noIsolation,
        p = e.inert,
        m = e.allowPinchZoom,
        g = e.as,
        y = g === void 0 ? "div" : g,
        b = xx(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]),
        $ = d,
        S = IA([r, t]),
        A = Sn(Sn({}, b), a);
      return h.createElement(
        h.Fragment,
        null,
        u && h.createElement($, { sideCar: lC, removeScrollBar: l, shards: f, noIsolation: v, inert: p, setCallbacks: o, allowPinchZoom: !!m, lockRef: r }),
        i ? h.cloneElement(h.Children.only(s), Sn(Sn({}, A), { ref: S })) : h.createElement(y, Sn({}, A, { className: c, ref: S }), s)
      );
    });
  Yu.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
  Yu.classNames = { fullWidth: rl, zeroRight: tl };
  var pp = !1;
  if (typeof window < "u")
    try {
      var cc = Object.defineProperty({}, "passive", {
        get: function () {
          return (pp = !0), !0;
        },
      });
      window.addEventListener("test", cc, cc), window.removeEventListener("test", cc, cc);
    } catch {
      pp = !1;
    }
  var Xa = pp ? { passive: !1 } : !1,
    MN = function (e) {
      return e.tagName === "TEXTAREA";
    },
    uC = function (e, t) {
      var r = window.getComputedStyle(e);
      return r[t] !== "hidden" && !(r.overflowY === r.overflowX && !MN(e) && r[t] === "visible");
    },
    DN = function (e) {
      return uC(e, "overflowY");
    },
    NN = function (e) {
      return uC(e, "overflowX");
    },
    Ub = function (e, t) {
      var r = t;
      do {
        typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
        var n = fC(e, r);
        if (n) {
          var a = dC(e, r),
            o = a[1],
            i = a[2];
          if (o > i) return !0;
        }
        r = r.parentNode;
      } while (r && r !== document.body);
      return !1;
    },
    kN = function (e) {
      var t = e.scrollTop,
        r = e.scrollHeight,
        n = e.clientHeight;
      return [t, r, n];
    },
    LN = function (e) {
      var t = e.scrollLeft,
        r = e.scrollWidth,
        n = e.clientWidth;
      return [t, r, n];
    },
    fC = function (e, t) {
      return e === "v" ? DN(t) : NN(t);
    },
    dC = function (e, t) {
      return e === "v" ? kN(t) : LN(t);
    },
    FN = function (e, t) {
      return e === "h" && t === "rtl" ? -1 : 1;
    },
    jN = function (e, t, r, n, a) {
      var o = FN(e, window.getComputedStyle(t).direction),
        i = o * n,
        s = r.target,
        c = t.contains(s),
        l = !1,
        u = i > 0,
        f = 0,
        d = 0;
      do {
        var v = dC(e, s),
          p = v[0],
          m = v[1],
          g = v[2],
          y = m - g - o * p;
        (p || y) && fC(e, s) && ((f += y), (d += p)), (s = s.parentNode);
      } while ((!c && s !== document.body) || (c && (t.contains(s) || t === s)));
      return ((u && ((a && f === 0) || (!a && i > f))) || (!u && ((a && d === 0) || (!a && -i > d)))) && (l = !0), l;
    },
    lc = function (e) {
      return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
    },
    Wb = function (e) {
      return [e.deltaX, e.deltaY];
    },
    Hb = function (e) {
      return e && "current" in e ? e.current : e;
    },
    BN = function (e, t) {
      return e[0] === t[0] && e[1] === t[1];
    },
    UN = function (e) {
      return `
  .block-interactivity-`
        .concat(
          e,
          ` {pointer-events: none;}
  .allow-interactivity-`
        )
        .concat(
          e,
          ` {pointer-events: all;}
`
        );
    },
    WN = 0,
    Za = [];
  function HN(e) {
    var t = h.useRef([]),
      r = h.useRef([0, 0]),
      n = h.useRef(),
      a = h.useState(WN++)[0],
      o = h.useState(function () {
        return nT();
      })[0],
      i = h.useRef(e);
    h.useEffect(
      function () {
        i.current = e;
      },
      [e]
    ),
      h.useEffect(
        function () {
          if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(a));
            var m = Pl([e.lockRef.current], (e.shards || []).map(Hb), !0).filter(Boolean);
            return (
              m.forEach(function (g) {
                return g.classList.add("allow-interactivity-".concat(a));
              }),
              function () {
                document.body.classList.remove("block-interactivity-".concat(a)),
                  m.forEach(function (g) {
                    return g.classList.remove("allow-interactivity-".concat(a));
                  });
              }
            );
          }
        },
        [e.inert, e.lockRef.current, e.shards]
      );
    var s = h.useCallback(function (m, g) {
        if ("touches" in m && m.touches.length === 2) return !i.current.allowPinchZoom;
        var y = lc(m),
          b = r.current,
          $ = "deltaX" in m ? m.deltaX : b[0] - y[0],
          S = "deltaY" in m ? m.deltaY : b[1] - y[1],
          A,
          P = m.target,
          M = Math.abs($) > Math.abs(S) ? "h" : "v";
        if ("touches" in m && M === "h" && P.type === "range") return !1;
        var T = Ub(M, P);
        if (!T) return !0;
        if ((T ? (A = M) : ((A = M === "v" ? "h" : "v"), (T = Ub(M, P))), !T)) return !1;
        if ((!n.current && "changedTouches" in m && ($ || S) && (n.current = A), !A)) return !0;
        var F = n.current || A;
        return jN(F, g, m, F === "h" ? $ : S, !0);
      }, []),
      c = h.useCallback(function (m) {
        var g = m;
        if (!(!Za.length || Za[Za.length - 1] !== o)) {
          var y = "deltaY" in g ? Wb(g) : lc(g),
            b = t.current.filter(function (A) {
              return A.name === g.type && A.target === g.target && BN(A.delta, y);
            })[0];
          if (b && b.should) {
            g.cancelable && g.preventDefault();
            return;
          }
          if (!b) {
            var $ = (i.current.shards || [])
                .map(Hb)
                .filter(Boolean)
                .filter(function (A) {
                  return A.contains(g.target);
                }),
              S = $.length > 0 ? s(g, $[0]) : !i.current.noIsolation;
            S && g.cancelable && g.preventDefault();
          }
        }
      }, []),
      l = h.useCallback(function (m, g, y, b) {
        var $ = { name: m, delta: g, target: y, should: b };
        t.current.push($),
          setTimeout(function () {
            t.current = t.current.filter(function (S) {
              return S !== $;
            });
          }, 1);
      }, []),
      u = h.useCallback(function (m) {
        (r.current = lc(m)), (n.current = void 0);
      }, []),
      f = h.useCallback(function (m) {
        l(m.type, Wb(m), m.target, s(m, e.lockRef.current));
      }, []),
      d = h.useCallback(function (m) {
        l(m.type, lc(m), m.target, s(m, e.lockRef.current));
      }, []);
    h.useEffect(function () {
      return (
        Za.push(o),
        e.setCallbacks({ onScrollCapture: f, onWheelCapture: f, onTouchMoveCapture: d }),
        document.addEventListener("wheel", c, Xa),
        document.addEventListener("touchmove", c, Xa),
        document.addEventListener("touchstart", u, Xa),
        function () {
          (Za = Za.filter(function (m) {
            return m !== o;
          })),
            document.removeEventListener("wheel", c, Xa),
            document.removeEventListener("touchmove", c, Xa),
            document.removeEventListener("touchstart", u, Xa);
        }
      );
    }, []);
    var v = e.removeScrollBar,
      p = e.inert;
    return h.createElement(h.Fragment, null, p ? h.createElement(o, { styles: UN(a) }) : null, v ? h.createElement(TR, { gapMode: "margin" }) : null);
  }
  const zN = DA(lC, HN);
  var hC = h.forwardRef(function (e, t) {
    return h.createElement(Yu, Sn({}, e, { ref: t, sideCar: zN }));
  });
  hC.classNames = Yu.classNames;
  const VN = hC,
    GN = [" ", "Enter", "ArrowUp", "ArrowDown"],
    YN = [" ", "Enter"],
    Ku = "Select",
    [qu, Cg, KN] = xN(Ku),
    [Xo, TEe] = Es(Ku, [KN, Bu]),
    Og = Bu(),
    [qN, Ca] = Xo(Ku),
    [XN, ZN] = Xo(Ku),
    JN = (e) => {
      const { __scopeSelect: t, children: r, open: n, defaultOpen: a, onOpenChange: o, value: i, defaultValue: s, onValueChange: c, dir: l, name: u, autoComplete: f, disabled: d, required: v } = e,
        p = Og(t),
        [m, g] = h.useState(null),
        [y, b] = h.useState(null),
        [$, S] = h.useState(!1),
        A = tC(l),
        [P = !1, M] = dp({ prop: n, defaultProp: a, onChange: o }),
        [T, F] = dp({ prop: i, defaultProp: s, onChange: c }),
        k = h.useRef(null),
        D = m ? !!m.closest("form") : !0,
        [_, O] = h.useState(new Set()),
        w = Array.from(_)
          .map((R) => R.props.value)
          .join(";");
      return h.createElement(
        YT,
        p,
        h.createElement(
          qN,
          {
            required: v,
            scope: t,
            trigger: m,
            onTriggerChange: g,
            valueNode: y,
            onValueNodeChange: b,
            valueNodeHasChildren: $,
            onValueNodeHasChildrenChange: S,
            contentId: Lu(),
            value: T,
            onValueChange: F,
            open: P,
            onOpenChange: M,
            dir: A,
            triggerPointerDownPosRef: k,
            disabled: d,
          },
          h.createElement(
            qu.Provider,
            { scope: t },
            h.createElement(
              XN,
              {
                scope: e.__scopeSelect,
                onNativeOptionAdd: h.useCallback((R) => {
                  O((I) => new Set(I).add(R));
                }, []),
                onNativeOptionRemove: h.useCallback((R) => {
                  O((I) => {
                    const N = new Set(I);
                    return N.delete(R), N;
                  });
                }, []),
              },
              r
            )
          ),
          D
            ? h.createElement(
                gC,
                { key: w, "aria-hidden": !0, required: v, tabIndex: -1, name: u, autoComplete: f, value: T, onChange: (R) => F(R.target.value), disabled: d },
                T === void 0 ? h.createElement("option", { value: "" }) : null,
                Array.from(_)
              )
            : null
        )
      );
    },
    QN = "SelectTrigger",
    ek = h.forwardRef((e, t) => {
      const { __scopeSelect: r, disabled: n = !1, ...a } = e,
        o = Og(r),
        i = Ca(QN, r),
        s = i.disabled || n,
        c = ke(t, i.onTriggerChange),
        l = Cg(r),
        [u, f, d] = yC((p) => {
          const m = l().filter((b) => !b.disabled),
            g = m.find((b) => b.value === i.value),
            y = bC(m, p, g);
          y !== void 0 && i.onValueChange(y.value);
        }),
        v = () => {
          s || (i.onOpenChange(!0), d());
        };
      return h.createElement(
        KT,
        ue({ asChild: !0 }, o),
        h.createElement(
          Le.button,
          ue(
            {
              type: "button",
              role: "combobox",
              "aria-controls": i.contentId,
              "aria-expanded": i.open,
              "aria-required": i.required,
              "aria-autocomplete": "none",
              dir: i.dir,
              "data-state": i.open ? "open" : "closed",
              disabled: s,
              "data-disabled": s ? "" : void 0,
              "data-placeholder": mC(i.value) ? "" : void 0,
            },
            a,
            {
              ref: c,
              onClick: Ee(a.onClick, (p) => {
                p.currentTarget.focus();
              }),
              onPointerDown: Ee(a.onPointerDown, (p) => {
                const m = p.target;
                m.hasPointerCapture(p.pointerId) && m.releasePointerCapture(p.pointerId),
                  p.button === 0 && p.ctrlKey === !1 && (v(), (i.triggerPointerDownPosRef.current = { x: Math.round(p.pageX), y: Math.round(p.pageY) }), p.preventDefault());
              }),
              onKeyDown: Ee(a.onKeyDown, (p) => {
                const m = u.current !== "";
                !(p.ctrlKey || p.altKey || p.metaKey) && p.key.length === 1 && f(p.key), !(m && p.key === " ") && GN.includes(p.key) && (v(), p.preventDefault());
              }),
            }
          )
        )
      );
    }),
    tk = "SelectValue",
    rk = h.forwardRef((e, t) => {
      const { __scopeSelect: r, className: n, style: a, children: o, placeholder: i = "", ...s } = e,
        c = Ca(tk, r),
        { onValueNodeHasChildrenChange: l } = c,
        u = o !== void 0,
        f = ke(t, c.onValueNodeChange);
      return (
        qt(() => {
          l(u);
        }, [l, u]),
        h.createElement(Le.span, ue({}, s, { ref: f, style: { pointerEvents: "none" } }), mC(c.value) ? h.createElement(h.Fragment, null, i) : o)
      );
    }),
    nk = h.forwardRef((e, t) => {
      const { __scopeSelect: r, children: n, ...a } = e;
      return h.createElement(Le.span, ue({ "aria-hidden": !0 }, a, { ref: t }), n || "▼");
    }),
    ak = (e) => h.createElement(XT, ue({ asChild: !0 }, e)),
    No = "SelectContent",
    ok = h.forwardRef((e, t) => {
      const r = Ca(No, e.__scopeSelect),
        [n, a] = h.useState();
      if (
        (qt(() => {
          a(new DocumentFragment());
        }, []),
        !r.open)
      ) {
        const o = n;
        return o ? ms.createPortal(h.createElement(vC, { scope: e.__scopeSelect }, h.createElement(qu.Slot, { scope: e.__scopeSelect }, h.createElement("div", null, e.children))), o) : null;
      }
      return h.createElement(ik, ue({}, e, { ref: t }));
    }),
    Hr = 10,
    [vC, Xu] = Xo(No),
    ik = h.forwardRef((e, t) => {
      const {
          __scopeSelect: r,
          position: n = "item-aligned",
          onCloseAutoFocus: a,
          onEscapeKeyDown: o,
          onPointerDownOutside: i,
          side: s,
          sideOffset: c,
          align: l,
          alignOffset: u,
          arrowPadding: f,
          collisionBoundary: d,
          collisionPadding: v,
          sticky: p,
          hideWhenDetached: m,
          avoidCollisions: g,
          ...y
        } = e,
        b = Ca(No, r),
        [$, S] = h.useState(null),
        [A, P] = h.useState(null),
        M = ke(t, (z) => S(z)),
        [T, F] = h.useState(null),
        [k, D] = h.useState(null),
        _ = Cg(r),
        [O, w] = h.useState(!1),
        R = h.useRef(!1);
      h.useEffect(() => {
        if ($) return fR($);
      }, [$]),
        TN();
      const I = h.useCallback(
          (z) => {
            const [J, ...H] = _().map((L) => L.ref.current),
              [G] = H.slice(-1),
              Y = document.activeElement;
            for (const L of z)
              if (
                L === Y ||
                (L == null || L.scrollIntoView({ block: "nearest" }),
                L === J && A && (A.scrollTop = 0),
                L === G && A && (A.scrollTop = A.scrollHeight),
                L == null || L.focus(),
                document.activeElement !== Y)
              )
                return;
          },
          [_, A]
        ),
        N = h.useCallback(() => I([T, $]), [I, T, $]);
      h.useEffect(() => {
        O && N();
      }, [O, N]);
      const { onOpenChange: B, triggerPointerDownPosRef: W } = b;
      h.useEffect(() => {
        if ($) {
          let z = { x: 0, y: 0 };
          const J = (G) => {
              var Y, L, ne, Z;
              z = {
                x: Math.abs(Math.round(G.pageX) - ((Y = (L = W.current) === null || L === void 0 ? void 0 : L.x) !== null && Y !== void 0 ? Y : 0)),
                y: Math.abs(Math.round(G.pageY) - ((ne = (Z = W.current) === null || Z === void 0 ? void 0 : Z.y) !== null && ne !== void 0 ? ne : 0)),
              };
            },
            H = (G) => {
              z.x <= 10 && z.y <= 10 ? G.preventDefault() : $.contains(G.target) || B(!1), document.removeEventListener("pointermove", J), (W.current = null);
            };
          return (
            W.current !== null && (document.addEventListener("pointermove", J), document.addEventListener("pointerup", H, { capture: !0, once: !0 })),
            () => {
              document.removeEventListener("pointermove", J), document.removeEventListener("pointerup", H, { capture: !0 });
            }
          );
        }
      }, [$, B, W]),
        h.useEffect(() => {
          const z = () => B(!1);
          return (
            window.addEventListener("blur", z),
            window.addEventListener("resize", z),
            () => {
              window.removeEventListener("blur", z), window.removeEventListener("resize", z);
            }
          );
        }, [B]);
      const [C, E] = yC((z) => {
          const J = _().filter((Y) => !Y.disabled),
            H = J.find((Y) => Y.ref.current === document.activeElement),
            G = bC(J, z, H);
          G && setTimeout(() => G.ref.current.focus());
        }),
        V = h.useCallback(
          (z, J, H) => {
            const G = !R.current && !H;
            ((b.value !== void 0 && b.value === J) || G) && (F(z), G && (R.current = !0));
          },
          [b.value]
        ),
        X = h.useCallback(() => ($ == null ? void 0 : $.focus()), [$]),
        q = h.useCallback(
          (z, J, H) => {
            const G = !R.current && !H;
            ((b.value !== void 0 && b.value === J) || G) && D(z);
          },
          [b.value]
        ),
        K = n === "popper" ? zb : sk,
        te = K === zb ? { side: s, sideOffset: c, align: l, alignOffset: u, arrowPadding: f, collisionBoundary: d, collisionPadding: v, sticky: p, hideWhenDetached: m, avoidCollisions: g } : {};
      return h.createElement(
        vC,
        {
          scope: r,
          content: $,
          viewport: A,
          onViewportChange: P,
          itemRefCallback: V,
          selectedItem: T,
          onItemLeave: X,
          itemTextRefCallback: q,
          focusSelectedItem: N,
          selectedItemText: k,
          position: n,
          isPositioned: O,
          searchRef: C,
        },
        h.createElement(
          VN,
          { as: la, allowPinchZoom: !0 },
          h.createElement(
            CN,
            {
              asChild: !0,
              trapped: b.open,
              onMountAutoFocus: (z) => {
                z.preventDefault();
              },
              onUnmountAutoFocus: Ee(a, (z) => {
                var J;
                (J = b.trigger) === null || J === void 0 || J.focus({ preventScroll: !0 }), z.preventDefault();
              }),
            },
            h.createElement(
              PT,
              { asChild: !0, disableOutsidePointerEvents: !0, onEscapeKeyDown: o, onPointerDownOutside: i, onFocusOutside: (z) => z.preventDefault(), onDismiss: () => b.onOpenChange(!1) },
              h.createElement(
                K,
                ue({ role: "listbox", id: b.contentId, "data-state": b.open ? "open" : "closed", dir: b.dir, onContextMenu: (z) => z.preventDefault() }, y, te, {
                  onPlaced: () => w(!0),
                  ref: M,
                  style: { display: "flex", flexDirection: "column", outline: "none", ...y.style },
                  onKeyDown: Ee(y.onKeyDown, (z) => {
                    const J = z.ctrlKey || z.altKey || z.metaKey;
                    if ((z.key === "Tab" && z.preventDefault(), !J && z.key.length === 1 && E(z.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(z.key))) {
                      let G = _()
                        .filter((Y) => !Y.disabled)
                        .map((Y) => Y.ref.current);
                      if ((["ArrowUp", "End"].includes(z.key) && (G = G.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(z.key))) {
                        const Y = z.target,
                          L = G.indexOf(Y);
                        G = G.slice(L + 1);
                      }
                      setTimeout(() => I(G)), z.preventDefault();
                    }
                  }),
                })
              )
            )
          )
        )
      );
    }),
    sk = h.forwardRef((e, t) => {
      const { __scopeSelect: r, onPlaced: n, ...a } = e,
        o = Ca(No, r),
        i = Xu(No, r),
        [s, c] = h.useState(null),
        [l, u] = h.useState(null),
        f = ke(t, (M) => u(M)),
        d = Cg(r),
        v = h.useRef(!1),
        p = h.useRef(!0),
        { viewport: m, selectedItem: g, selectedItemText: y, focusSelectedItem: b } = i,
        $ = h.useCallback(() => {
          if (o.trigger && o.valueNode && s && l && m && g && y) {
            const M = o.trigger.getBoundingClientRect(),
              T = l.getBoundingClientRect(),
              F = o.valueNode.getBoundingClientRect(),
              k = y.getBoundingClientRect();
            if (o.dir !== "rtl") {
              const Y = k.left - T.left,
                L = F.left - Y,
                ne = M.left - L,
                Z = M.width + ne,
                Q = Math.max(Z, T.width),
                le = window.innerWidth - Hr,
                he = vp(L, [Hr, le - Q]);
              (s.style.minWidth = Z + "px"), (s.style.left = he + "px");
            } else {
              const Y = T.right - k.right,
                L = window.innerWidth - F.right - Y,
                ne = window.innerWidth - M.right - L,
                Z = M.width + ne,
                Q = Math.max(Z, T.width),
                le = window.innerWidth - Hr,
                he = vp(L, [Hr, le - Q]);
              (s.style.minWidth = Z + "px"), (s.style.right = he + "px");
            }
            const D = d(),
              _ = window.innerHeight - Hr * 2,
              O = m.scrollHeight,
              w = window.getComputedStyle(l),
              R = parseInt(w.borderTopWidth, 10),
              I = parseInt(w.paddingTop, 10),
              N = parseInt(w.borderBottomWidth, 10),
              B = parseInt(w.paddingBottom, 10),
              W = R + I + O + B + N,
              C = Math.min(g.offsetHeight * 5, W),
              E = window.getComputedStyle(m),
              V = parseInt(E.paddingTop, 10),
              X = parseInt(E.paddingBottom, 10),
              q = M.top + M.height / 2 - Hr,
              K = _ - q,
              te = g.offsetHeight / 2,
              z = g.offsetTop + te,
              J = R + I + z,
              H = W - J;
            if (J <= q) {
              const Y = g === D[D.length - 1].ref.current;
              s.style.bottom = "0px";
              const L = l.clientHeight - m.offsetTop - m.offsetHeight,
                ne = Math.max(K, te + (Y ? X : 0) + L + N),
                Z = J + ne;
              s.style.height = Z + "px";
            } else {
              const Y = g === D[0].ref.current;
              s.style.top = "0px";
              const ne = Math.max(q, R + m.offsetTop + (Y ? V : 0) + te) + H;
              (s.style.height = ne + "px"), (m.scrollTop = J - q + m.offsetTop);
            }
            (s.style.margin = `${Hr}px 0`), (s.style.minHeight = C + "px"), (s.style.maxHeight = _ + "px"), n == null || n(), requestAnimationFrame(() => (v.current = !0));
          }
        }, [d, o.trigger, o.valueNode, s, l, m, g, y, o.dir, n]);
      qt(() => $(), [$]);
      const [S, A] = h.useState();
      qt(() => {
        l && A(window.getComputedStyle(l).zIndex);
      }, [l]);
      const P = h.useCallback(
        (M) => {
          M && p.current === !0 && ($(), b == null || b(), (p.current = !1));
        },
        [$, b]
      );
      return h.createElement(
        ck,
        { scope: r, contentWrapper: s, shouldExpandOnScrollRef: v, onScrollButtonChange: P },
        h.createElement(
          "div",
          { ref: c, style: { display: "flex", flexDirection: "column", position: "fixed", zIndex: S } },
          h.createElement(Le.div, ue({}, a, { ref: f, style: { boxSizing: "border-box", maxHeight: "100%", ...a.style } }))
        )
      );
    }),
    zb = h.forwardRef((e, t) => {
      const { __scopeSelect: r, align: n = "start", collisionPadding: a = Hr, ...o } = e,
        i = Og(r);
      return h.createElement(
        qT,
        ue({}, i, o, {
          ref: t,
          align: n,
          collisionPadding: a,
          style: {
            boxSizing: "border-box",
            ...o.style,
            "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-select-content-available-width": "var(--radix-popper-available-width)",
            "--radix-select-content-available-height": "var(--radix-popper-available-height)",
            "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-select-trigger-height": "var(--radix-popper-anchor-height)",
          },
        })
      );
    }),
    [ck, lk] = Xo(No, {}),
    Vb = "SelectViewport",
    uk = h.forwardRef((e, t) => {
      const { __scopeSelect: r, ...n } = e,
        a = Xu(Vb, r),
        o = lk(Vb, r),
        i = ke(t, a.onViewportChange),
        s = h.useRef(0);
      return h.createElement(
        h.Fragment,
        null,
        h.createElement("style", {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}",
          },
        }),
        h.createElement(
          qu.Slot,
          { scope: r },
          h.createElement(
            Le.div,
            ue({ "data-radix-select-viewport": "", role: "presentation" }, n, {
              ref: i,
              style: { position: "relative", flex: 1, overflow: "auto", ...n.style },
              onScroll: Ee(n.onScroll, (c) => {
                const l = c.currentTarget,
                  { contentWrapper: u, shouldExpandOnScrollRef: f } = o;
                if (f != null && f.current && u) {
                  const d = Math.abs(s.current - l.scrollTop);
                  if (d > 0) {
                    const v = window.innerHeight - Hr * 2,
                      p = parseFloat(u.style.minHeight),
                      m = parseFloat(u.style.height),
                      g = Math.max(p, m);
                    if (g < v) {
                      const y = g + d,
                        b = Math.min(v, y),
                        $ = y - b;
                      (u.style.height = b + "px"), u.style.bottom === "0px" && ((l.scrollTop = $ > 0 ? $ : 0), (u.style.justifyContent = "flex-end"));
                    }
                  }
                }
                s.current = l.scrollTop;
              }),
            })
          )
        )
      );
    }),
    fk = "SelectGroup",
    [dk, hk] = Xo(fk),
    vk = h.forwardRef((e, t) => {
      const { __scopeSelect: r, ...n } = e,
        a = Lu();
      return h.createElement(dk, { scope: r, id: a }, h.createElement(Le.div, ue({ role: "group", "aria-labelledby": a }, n, { ref: t })));
    }),
    pk = "SelectLabel",
    mk = h.forwardRef((e, t) => {
      const { __scopeSelect: r, ...n } = e,
        a = hk(pk, r);
      return h.createElement(Le.div, ue({ id: a.id }, n, { ref: t }));
    }),
    mp = "SelectItem",
    [gk, pC] = Xo(mp),
    yk = h.forwardRef((e, t) => {
      const { __scopeSelect: r, value: n, disabled: a = !1, textValue: o, ...i } = e,
        s = Ca(mp, r),
        c = Xu(mp, r),
        l = s.value === n,
        [u, f] = h.useState(o ?? ""),
        [d, v] = h.useState(!1),
        p = ke(t, (y) => {
          var b;
          return (b = c.itemRefCallback) === null || b === void 0 ? void 0 : b.call(c, y, n, a);
        }),
        m = Lu(),
        g = () => {
          a || (s.onValueChange(n), s.onOpenChange(!1));
        };
      if (n === "")
        throw new Error(
          "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
        );
      return h.createElement(
        gk,
        {
          scope: r,
          value: n,
          disabled: a,
          textId: m,
          isSelected: l,
          onItemTextChange: h.useCallback((y) => {
            f((b) => {
              var $;
              return b || (($ = y == null ? void 0 : y.textContent) !== null && $ !== void 0 ? $ : "").trim();
            });
          }, []),
        },
        h.createElement(
          qu.ItemSlot,
          { scope: r, value: n, disabled: a, textValue: u },
          h.createElement(
            Le.div,
            ue(
              {
                role: "option",
                "aria-labelledby": m,
                "data-highlighted": d ? "" : void 0,
                "aria-selected": l && d,
                "data-state": l ? "checked" : "unchecked",
                "aria-disabled": a || void 0,
                "data-disabled": a ? "" : void 0,
                tabIndex: a ? void 0 : -1,
              },
              i,
              {
                ref: p,
                onFocus: Ee(i.onFocus, () => v(!0)),
                onBlur: Ee(i.onBlur, () => v(!1)),
                onPointerUp: Ee(i.onPointerUp, g),
                onPointerMove: Ee(i.onPointerMove, (y) => {
                  if (a) {
                    var b;
                    (b = c.onItemLeave) === null || b === void 0 || b.call(c);
                  } else y.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: Ee(i.onPointerLeave, (y) => {
                  if (y.currentTarget === document.activeElement) {
                    var b;
                    (b = c.onItemLeave) === null || b === void 0 || b.call(c);
                  }
                }),
                onKeyDown: Ee(i.onKeyDown, (y) => {
                  var b;
                  (((b = c.searchRef) === null || b === void 0 ? void 0 : b.current) !== "" && y.key === " ") || (YN.includes(y.key) && g(), y.key === " " && y.preventDefault());
                }),
              }
            )
          )
        )
      );
    }),
    uc = "SelectItemText",
    bk = h.forwardRef((e, t) => {
      const { __scopeSelect: r, className: n, style: a, ...o } = e,
        i = Ca(uc, r),
        s = Xu(uc, r),
        c = pC(uc, r),
        l = ZN(uc, r),
        [u, f] = h.useState(null),
        d = ke(
          t,
          (y) => f(y),
          c.onItemTextChange,
          (y) => {
            var b;
            return (b = s.itemTextRefCallback) === null || b === void 0 ? void 0 : b.call(s, y, c.value, c.disabled);
          }
        ),
        v = u == null ? void 0 : u.textContent,
        p = h.useMemo(() => h.createElement("option", { key: c.value, value: c.value, disabled: c.disabled }, v), [c.disabled, c.value, v]),
        { onNativeOptionAdd: m, onNativeOptionRemove: g } = l;
      return (
        qt(() => (m(p), () => g(p)), [m, g, p]),
        h.createElement(
          h.Fragment,
          null,
          h.createElement(Le.span, ue({ id: c.textId }, o, { ref: d })),
          c.isSelected && i.valueNode && !i.valueNodeHasChildren ? ms.createPortal(o.children, i.valueNode) : null
        )
      );
    }),
    $k = "SelectItemIndicator",
    wk = h.forwardRef((e, t) => {
      const { __scopeSelect: r, ...n } = e;
      return pC($k, r).isSelected ? h.createElement(Le.span, ue({ "aria-hidden": !0 }, n, { ref: t })) : null;
    }),
    Sk = h.forwardRef((e, t) => {
      const { __scopeSelect: r, ...n } = e;
      return h.createElement(Le.div, ue({ "aria-hidden": !0 }, n, { ref: t }));
    });
  function mC(e) {
    return e === "" || e === void 0;
  }
  const gC = h.forwardRef((e, t) => {
    const { value: r, ...n } = e,
      a = h.useRef(null),
      o = ke(t, a),
      i = wN(r);
    return (
      h.useEffect(() => {
        const s = a.current,
          c = window.HTMLSelectElement.prototype,
          u = Object.getOwnPropertyDescriptor(c, "value").set;
        if (i !== r && u) {
          const f = new Event("change", { bubbles: !0 });
          u.call(s, r), s.dispatchEvent(f);
        }
      }, [i, r]),
      h.createElement(ZT, { asChild: !0 }, h.createElement("select", ue({}, n, { ref: o, defaultValue: r })))
    );
  });
  gC.displayName = "BubbleSelect";
  function yC(e) {
    const t = mt(e),
      r = h.useRef(""),
      n = h.useRef(0),
      a = h.useCallback(
        (i) => {
          const s = r.current + i;
          t(s),
            (function c(l) {
              (r.current = l), window.clearTimeout(n.current), l !== "" && (n.current = window.setTimeout(() => c(""), 1e3));
            })(s);
        },
        [t]
      ),
      o = h.useCallback(() => {
        (r.current = ""), window.clearTimeout(n.current);
      }, []);
    return h.useEffect(() => () => window.clearTimeout(n.current), []), [r, a, o];
  }
  function bC(e, t, r) {
    const a = t.length > 1 && Array.from(t).every((l) => l === t[0]) ? t[0] : t,
      o = r ? e.indexOf(r) : -1;
    let i = Ek(e, Math.max(o, 0));
    a.length === 1 && (i = i.filter((l) => l !== r));
    const c = i.find((l) => l.textValue.toLowerCase().startsWith(a.toLowerCase()));
    return c !== r ? c : void 0;
  }
  function Ek(e, t) {
    return e.map((r, n) => e[(t + n) % e.length]);
  }
  const xk = JN,
    Tk = ek,
    Ck = rk,
    Ok = nk,
    _k = ak,
    Pk = ok,
    Ik = uk,
    Ak = vk,
    Rk = mk,
    Mk = yk,
    Dk = bk,
    Nk = wk,
    kk = Sk;
  function Lk(e, t) {
    return h.useReducer((r, n) => {
      const a = t[r][n];
      return a ?? r;
    }, e);
  }
  const $C = "ScrollArea",
    [wC, CEe] = Es($C),
    [Fk, Mr] = wC($C),
    jk = h.forwardRef((e, t) => {
      const { __scopeScrollArea: r, type: n = "hover", dir: a, scrollHideDelay: o = 600, ...i } = e,
        [s, c] = h.useState(null),
        [l, u] = h.useState(null),
        [f, d] = h.useState(null),
        [v, p] = h.useState(null),
        [m, g] = h.useState(null),
        [y, b] = h.useState(0),
        [$, S] = h.useState(0),
        [A, P] = h.useState(!1),
        [M, T] = h.useState(!1),
        F = ke(t, (D) => c(D)),
        k = tC(a);
      return h.createElement(
        Fk,
        {
          scope: r,
          type: n,
          dir: k,
          scrollHideDelay: o,
          scrollArea: s,
          viewport: l,
          onViewportChange: u,
          content: f,
          onContentChange: d,
          scrollbarX: v,
          onScrollbarXChange: p,
          scrollbarXEnabled: A,
          onScrollbarXEnabledChange: P,
          scrollbarY: m,
          onScrollbarYChange: g,
          scrollbarYEnabled: M,
          onScrollbarYEnabledChange: T,
          onCornerWidthChange: b,
          onCornerHeightChange: S,
        },
        h.createElement(Le.div, ue({ dir: k }, i, { ref: F, style: { position: "relative", "--radix-scroll-area-corner-width": y + "px", "--radix-scroll-area-corner-height": $ + "px", ...e.style } }))
      );
    }),
    Bk = "ScrollAreaViewport",
    Uk = h.forwardRef((e, t) => {
      const { __scopeScrollArea: r, children: n, ...a } = e,
        o = Mr(Bk, r),
        i = h.useRef(null),
        s = ke(t, i, o.onViewportChange);
      return h.createElement(
        h.Fragment,
        null,
        h.createElement("style", {
          dangerouslySetInnerHTML: {
            __html:
              "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}",
          },
        }),
        h.createElement(
          Le.div,
          ue({ "data-radix-scroll-area-viewport": "" }, a, {
            ref: s,
            style: { overflowX: o.scrollbarXEnabled ? "scroll" : "hidden", overflowY: o.scrollbarYEnabled ? "scroll" : "hidden", ...e.style },
          }),
          h.createElement("div", { ref: o.onContentChange, style: { minWidth: "100%", display: "table" } }, n)
        )
      );
    }),
    sn = "ScrollAreaScrollbar",
    Wk = h.forwardRef((e, t) => {
      const { forceMount: r, ...n } = e,
        a = Mr(sn, e.__scopeScrollArea),
        { onScrollbarXEnabledChange: o, onScrollbarYEnabledChange: i } = a,
        s = e.orientation === "horizontal";
      return (
        h.useEffect(
          () => (
            s ? o(!0) : i(!0),
            () => {
              s ? o(!1) : i(!1);
            }
          ),
          [s, o, i]
        ),
        a.type === "hover"
          ? h.createElement(Hk, ue({}, n, { ref: t, forceMount: r }))
          : a.type === "scroll"
          ? h.createElement(zk, ue({}, n, { ref: t, forceMount: r }))
          : a.type === "auto"
          ? h.createElement(SC, ue({}, n, { ref: t, forceMount: r }))
          : a.type === "always"
          ? h.createElement(_g, ue({}, n, { ref: t }))
          : null
      );
    }),
    Hk = h.forwardRef((e, t) => {
      const { forceMount: r, ...n } = e,
        a = Mr(sn, e.__scopeScrollArea),
        [o, i] = h.useState(!1);
      return (
        h.useEffect(() => {
          const s = a.scrollArea;
          let c = 0;
          if (s) {
            const l = () => {
                window.clearTimeout(c), i(!0);
              },
              u = () => {
                c = window.setTimeout(() => i(!1), a.scrollHideDelay);
              };
            return (
              s.addEventListener("pointerenter", l),
              s.addEventListener("pointerleave", u),
              () => {
                window.clearTimeout(c), s.removeEventListener("pointerenter", l), s.removeEventListener("pointerleave", u);
              }
            );
          }
        }, [a.scrollArea, a.scrollHideDelay]),
        h.createElement(Ta, { present: r || o }, h.createElement(SC, ue({ "data-state": o ? "visible" : "hidden" }, n, { ref: t })))
      );
    }),
    zk = h.forwardRef((e, t) => {
      const { forceMount: r, ...n } = e,
        a = Mr(sn, e.__scopeScrollArea),
        o = e.orientation === "horizontal",
        i = Ju(() => c("SCROLL_END"), 100),
        [s, c] = Lk("hidden", {
          hidden: { SCROLL: "scrolling" },
          scrolling: { SCROLL_END: "idle", POINTER_ENTER: "interacting" },
          interacting: { SCROLL: "interacting", POINTER_LEAVE: "idle" },
          idle: { HIDE: "hidden", SCROLL: "scrolling", POINTER_ENTER: "interacting" },
        });
      return (
        h.useEffect(() => {
          if (s === "idle") {
            const l = window.setTimeout(() => c("HIDE"), a.scrollHideDelay);
            return () => window.clearTimeout(l);
          }
        }, [s, a.scrollHideDelay, c]),
        h.useEffect(() => {
          const l = a.viewport,
            u = o ? "scrollLeft" : "scrollTop";
          if (l) {
            let f = l[u];
            const d = () => {
              const v = l[u];
              f !== v && (c("SCROLL"), i()), (f = v);
            };
            return l.addEventListener("scroll", d), () => l.removeEventListener("scroll", d);
          }
        }, [a.viewport, o, c, i]),
        h.createElement(
          Ta,
          { present: r || s !== "hidden" },
          h.createElement(
            _g,
            ue({ "data-state": s === "hidden" ? "hidden" : "visible" }, n, {
              ref: t,
              onPointerEnter: Ee(e.onPointerEnter, () => c("POINTER_ENTER")),
              onPointerLeave: Ee(e.onPointerLeave, () => c("POINTER_LEAVE")),
            })
          )
        )
      );
    }),
    SC = h.forwardRef((e, t) => {
      const r = Mr(sn, e.__scopeScrollArea),
        { forceMount: n, ...a } = e,
        [o, i] = h.useState(!1),
        s = e.orientation === "horizontal",
        c = Ju(() => {
          if (r.viewport) {
            const l = r.viewport.offsetWidth < r.viewport.scrollWidth,
              u = r.viewport.offsetHeight < r.viewport.scrollHeight;
            i(s ? l : u);
          }
        }, 10);
      return Hl(r.viewport, c), Hl(r.content, c), h.createElement(Ta, { present: n || o }, h.createElement(_g, ue({ "data-state": o ? "visible" : "hidden" }, a, { ref: t })));
    }),
    _g = h.forwardRef((e, t) => {
      const { orientation: r = "vertical", ...n } = e,
        a = Mr(sn, e.__scopeScrollArea),
        o = h.useRef(null),
        i = h.useRef(0),
        [s, c] = h.useState({ content: 0, viewport: 0, scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 } }),
        l = TC(s.viewport, s.content),
        u = { ...n, sizes: s, onSizesChange: c, hasThumb: l > 0 && l < 1, onThumbChange: (d) => (o.current = d), onThumbPointerUp: () => (i.current = 0), onThumbPointerDown: (d) => (i.current = d) };
      function f(d, v) {
        return Xk(d, i.current, s, v);
      }
      return r === "horizontal"
        ? h.createElement(
            Vk,
            ue({}, u, {
              ref: t,
              onThumbPositionChange: () => {
                if (a.viewport && o.current) {
                  const d = a.viewport.scrollLeft,
                    v = Gb(d, s, a.dir);
                  o.current.style.transform = `translate3d(${v}px, 0, 0)`;
                }
              },
              onWheelScroll: (d) => {
                a.viewport && (a.viewport.scrollLeft = d);
              },
              onDragScroll: (d) => {
                a.viewport && (a.viewport.scrollLeft = f(d, a.dir));
              },
            })
          )
        : r === "vertical"
        ? h.createElement(
            Gk,
            ue({}, u, {
              ref: t,
              onThumbPositionChange: () => {
                if (a.viewport && o.current) {
                  const d = a.viewport.scrollTop,
                    v = Gb(d, s);
                  o.current.style.transform = `translate3d(0, ${v}px, 0)`;
                }
              },
              onWheelScroll: (d) => {
                a.viewport && (a.viewport.scrollTop = d);
              },
              onDragScroll: (d) => {
                a.viewport && (a.viewport.scrollTop = f(d));
              },
            })
          )
        : null;
    }),
    Vk = h.forwardRef((e, t) => {
      const { sizes: r, onSizesChange: n, ...a } = e,
        o = Mr(sn, e.__scopeScrollArea),
        [i, s] = h.useState(),
        c = h.useRef(null),
        l = ke(t, c, o.onScrollbarXChange);
      return (
        h.useEffect(() => {
          c.current && s(getComputedStyle(c.current));
        }, [c]),
        h.createElement(
          xC,
          ue({ "data-orientation": "horizontal" }, a, {
            ref: l,
            sizes: r,
            style: {
              bottom: 0,
              left: o.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
              right: o.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
              "--radix-scroll-area-thumb-width": Zu(r) + "px",
              ...e.style,
            },
            onThumbPointerDown: (u) => e.onThumbPointerDown(u.x),
            onDragScroll: (u) => e.onDragScroll(u.x),
            onWheelScroll: (u, f) => {
              if (o.viewport) {
                const d = o.viewport.scrollLeft + u.deltaX;
                e.onWheelScroll(d), OC(d, f) && u.preventDefault();
              }
            },
            onResize: () => {
              c.current &&
                o.viewport &&
                i &&
                n({ content: o.viewport.scrollWidth, viewport: o.viewport.offsetWidth, scrollbar: { size: c.current.clientWidth, paddingStart: Wl(i.paddingLeft), paddingEnd: Wl(i.paddingRight) } });
            },
          })
        )
      );
    }),
    Gk = h.forwardRef((e, t) => {
      const { sizes: r, onSizesChange: n, ...a } = e,
        o = Mr(sn, e.__scopeScrollArea),
        [i, s] = h.useState(),
        c = h.useRef(null),
        l = ke(t, c, o.onScrollbarYChange);
      return (
        h.useEffect(() => {
          c.current && s(getComputedStyle(c.current));
        }, [c]),
        h.createElement(
          xC,
          ue({ "data-orientation": "vertical" }, a, {
            ref: l,
            sizes: r,
            style: {
              top: 0,
              right: o.dir === "ltr" ? 0 : void 0,
              left: o.dir === "rtl" ? 0 : void 0,
              bottom: "var(--radix-scroll-area-corner-height)",
              "--radix-scroll-area-thumb-height": Zu(r) + "px",
              ...e.style,
            },
            onThumbPointerDown: (u) => e.onThumbPointerDown(u.y),
            onDragScroll: (u) => e.onDragScroll(u.y),
            onWheelScroll: (u, f) => {
              if (o.viewport) {
                const d = o.viewport.scrollTop + u.deltaY;
                e.onWheelScroll(d), OC(d, f) && u.preventDefault();
              }
            },
            onResize: () => {
              c.current &&
                o.viewport &&
                i &&
                n({
                  content: o.viewport.scrollHeight,
                  viewport: o.viewport.offsetHeight,
                  scrollbar: { size: c.current.clientHeight, paddingStart: Wl(i.paddingTop), paddingEnd: Wl(i.paddingBottom) },
                });
            },
          })
        )
      );
    }),
    [Yk, EC] = wC(sn),
    xC = h.forwardRef((e, t) => {
      const {
          __scopeScrollArea: r,
          sizes: n,
          hasThumb: a,
          onThumbChange: o,
          onThumbPointerUp: i,
          onThumbPointerDown: s,
          onThumbPositionChange: c,
          onDragScroll: l,
          onWheelScroll: u,
          onResize: f,
          ...d
        } = e,
        v = Mr(sn, r),
        [p, m] = h.useState(null),
        g = ke(t, (F) => m(F)),
        y = h.useRef(null),
        b = h.useRef(""),
        $ = v.viewport,
        S = n.content - n.viewport,
        A = mt(u),
        P = mt(c),
        M = Ju(f, 10);
      function T(F) {
        if (y.current) {
          const k = F.clientX - y.current.left,
            D = F.clientY - y.current.top;
          l({ x: k, y: D });
        }
      }
      return (
        h.useEffect(() => {
          const F = (k) => {
            const D = k.target;
            (p == null ? void 0 : p.contains(D)) && A(k, S);
          };
          return document.addEventListener("wheel", F, { passive: !1 }), () => document.removeEventListener("wheel", F, { passive: !1 });
        }, [$, p, S, A]),
        h.useEffect(P, [n, P]),
        Hl(p, M),
        Hl(v.content, M),
        h.createElement(
          Yk,
          { scope: r, scrollbar: p, hasThumb: a, onThumbChange: mt(o), onThumbPointerUp: mt(i), onThumbPositionChange: P, onThumbPointerDown: mt(s) },
          h.createElement(
            Le.div,
            ue({}, d, {
              ref: g,
              style: { position: "absolute", ...d.style },
              onPointerDown: Ee(e.onPointerDown, (F) => {
                F.button === 0 &&
                  (F.target.setPointerCapture(F.pointerId),
                  (y.current = p.getBoundingClientRect()),
                  (b.current = document.body.style.webkitUserSelect),
                  (document.body.style.webkitUserSelect = "none"),
                  v.viewport && (v.viewport.style.scrollBehavior = "auto"),
                  T(F));
              }),
              onPointerMove: Ee(e.onPointerMove, T),
              onPointerUp: Ee(e.onPointerUp, (F) => {
                const k = F.target;
                k.hasPointerCapture(F.pointerId) && k.releasePointerCapture(F.pointerId),
                  (document.body.style.webkitUserSelect = b.current),
                  v.viewport && (v.viewport.style.scrollBehavior = ""),
                  (y.current = null);
              }),
            })
          )
        )
      );
    }),
    gp = "ScrollAreaThumb",
    Kk = h.forwardRef((e, t) => {
      const { forceMount: r, ...n } = e,
        a = EC(gp, e.__scopeScrollArea);
      return h.createElement(Ta, { present: r || a.hasThumb }, h.createElement(qk, ue({ ref: t }, n)));
    }),
    qk = h.forwardRef((e, t) => {
      const { __scopeScrollArea: r, style: n, ...a } = e,
        o = Mr(gp, r),
        i = EC(gp, r),
        { onThumbPositionChange: s } = i,
        c = ke(t, (f) => i.onThumbChange(f)),
        l = h.useRef(),
        u = Ju(() => {
          l.current && (l.current(), (l.current = void 0));
        }, 100);
      return (
        h.useEffect(() => {
          const f = o.viewport;
          if (f) {
            const d = () => {
              if ((u(), !l.current)) {
                const v = Zk(f, s);
                (l.current = v), s();
              }
            };
            return s(), f.addEventListener("scroll", d), () => f.removeEventListener("scroll", d);
          }
        }, [o.viewport, u, s]),
        h.createElement(
          Le.div,
          ue({ "data-state": i.hasThumb ? "visible" : "hidden" }, a, {
            ref: c,
            style: { width: "var(--radix-scroll-area-thumb-width)", height: "var(--radix-scroll-area-thumb-height)", ...n },
            onPointerDownCapture: Ee(e.onPointerDownCapture, (f) => {
              const v = f.target.getBoundingClientRect(),
                p = f.clientX - v.left,
                m = f.clientY - v.top;
              i.onThumbPointerDown({ x: p, y: m });
            }),
            onPointerUp: Ee(e.onPointerUp, i.onThumbPointerUp),
          })
        )
      );
    });
  function Wl(e) {
    return e ? parseInt(e, 10) : 0;
  }
  function TC(e, t) {
    const r = e / t;
    return isNaN(r) ? 0 : r;
  }
  function Zu(e) {
    const t = TC(e.viewport, e.content),
      r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
      n = (e.scrollbar.size - r) * t;
    return Math.max(n, 18);
  }
  function Xk(e, t, r, n = "ltr") {
    const a = Zu(r),
      o = a / 2,
      i = t || o,
      s = a - i,
      c = r.scrollbar.paddingStart + i,
      l = r.scrollbar.size - r.scrollbar.paddingEnd - s,
      u = r.content - r.viewport,
      f = n === "ltr" ? [0, u] : [u * -1, 0];
    return CC([c, l], f)(e);
  }
  function Gb(e, t, r = "ltr") {
    const n = Zu(t),
      a = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
      o = t.scrollbar.size - a,
      i = t.content - t.viewport,
      s = o - n,
      c = r === "ltr" ? [0, i] : [i * -1, 0],
      l = vp(e, c);
    return CC([0, i], [0, s])(l);
  }
  function CC(e, t) {
    return (r) => {
      if (e[0] === e[1] || t[0] === t[1]) return t[0];
      const n = (t[1] - t[0]) / (e[1] - e[0]);
      return t[0] + n * (r - e[0]);
    };
  }
  function OC(e, t) {
    return e > 0 && e < t;
  }
  const Zk = (e, t = () => {}) => {
    let r = { left: e.scrollLeft, top: e.scrollTop },
      n = 0;
    return (
      (function a() {
        const o = { left: e.scrollLeft, top: e.scrollTop },
          i = r.left !== o.left,
          s = r.top !== o.top;
        (i || s) && t(), (r = o), (n = window.requestAnimationFrame(a));
      })(),
      () => window.cancelAnimationFrame(n)
    );
  };
  function Ju(e, t) {
    const r = mt(e),
      n = h.useRef(0);
    return (
      h.useEffect(() => () => window.clearTimeout(n.current), []),
      h.useCallback(() => {
        window.clearTimeout(n.current), (n.current = window.setTimeout(r, t));
      }, [r, t])
    );
  }
  function Hl(e, t) {
    const r = mt(t);
    qt(() => {
      let n = 0;
      if (e) {
        const a = new ResizeObserver(() => {
          cancelAnimationFrame(n), (n = window.requestAnimationFrame(r));
        });
        return (
          a.observe(e),
          () => {
            window.cancelAnimationFrame(n), a.unobserve(e);
          }
        );
      }
    }, [e, r]);
  }
  const Jk = jk,
    Qk = Uk,
    eL = Wk,
    tL = Kk,
    rL = ["1", "2", "3"],
    nL = { size: { type: "enum", values: rL, default: "2", responsive: !0 } },
    aL = ["classic", "surface", "soft", "ghost"],
    Wd = { variant: { type: "enum", values: aL, default: "surface" }, color: zu, radius: aC },
    oL = ["solid", "soft"],
    Hd = { variant: { type: "enum", values: oL, default: "solid" }, color: zu, highContrast: xg },
    Pg = h.createContext({}),
    _C = (e) => {
      const { children: t, size: r = nL.size.default, ...n } = e;
      return h.createElement(xk, { ...n }, h.createElement(Pg.Provider, { value: h.useMemo(() => ({ size: r }), [r]) }, t));
    };
  _C.displayName = "SelectRoot";
  const PC = h.forwardRef((e, t) => {
    const { rest: r, ...n } = Vu(e),
      { className: a, variant: o = Wd.variant.default, color: i = Wd.color.default, radius: s = Wd.radius.default, placeholder: c, ...l } = r,
      { size: u } = h.useContext(Pg);
    return h.createElement(
      Tk,
      { asChild: !0 },
      h.createElement(
        "button",
        { "data-accent-color": i, "data-radius": s, ...l, ref: t, className: Jt("rt-reset", "rt-SelectTrigger", a, St(u, "rt-r-size"), `rt-variant-${o}`, Gu(n)) },
        h.createElement("span", { className: "rt-SelectTriggerInner" }, h.createElement(Ck, { placeholder: c })),
        h.createElement(Ok, { asChild: !0 }, h.createElement(sC, { className: "rt-SelectIcon" }))
      )
    );
  });
  PC.displayName = "SelectTrigger";
  const IC = h.forwardRef((e, t) => {
    const { className: r, children: n, variant: a = Hd.variant.default, highContrast: o = Hd.highContrast.default, color: i = Hd.color.default, container: s, ...c } = e,
      { size: l } = h.useContext(Pg),
      u = uN(),
      f = i ?? u.accentColor;
    return h.createElement(
      _k,
      { container: s },
      h.createElement(
        Hu,
        { asChild: !0 },
        h.createElement(
          Pk,
          {
            "data-accent-color": f,
            sideOffset: 4,
            ...c,
            ref: t,
            className: Jt({ "rt-PopperContent": c.position === "popper" }, "rt-SelectContent", r, St(l, "rt-r-size"), `rt-variant-${a}`, { "rt-high-contrast": o }),
          },
          h.createElement(
            Jk,
            { type: "auto", className: "rt-ScrollAreaRoot" },
            h.createElement(Ik, { asChild: !0, className: "rt-SelectViewport" }, h.createElement(Qk, { className: "rt-ScrollAreaViewport", style: { overflowY: void 0 } }, n)),
            h.createElement(eL, { className: "rt-ScrollAreaScrollbar rt-r-size-1", orientation: "vertical" }, h.createElement(tL, { className: "rt-ScrollAreaThumb" }))
          )
        )
      )
    );
  });
  IC.displayName = "SelectContent";
  const AC = h.forwardRef((e, t) => {
    const { className: r, children: n, ...a } = e;
    return h.createElement(
      Mk,
      { ...a, ref: t, className: Jt("rt-SelectItem", r) },
      h.createElement(Nk, { className: "rt-SelectItemIndicator" }, h.createElement(iC, { className: "rt-SelectItemIndicatorIcon" })),
      h.createElement(Dk, null, n)
    );
  });
  AC.displayName = "SelectItem";
  const RC = h.forwardRef((e, t) => h.createElement(Ak, { ...e, ref: t, className: Jt("rt-SelectGroup", e.className) }));
  RC.displayName = "SelectGroup";
  const MC = h.forwardRef((e, t) => h.createElement(Rk, { ...e, ref: t, className: Jt("rt-SelectLabel", e.className) }));
  MC.displayName = "SelectLabel";
  const DC = h.forwardRef((e, t) => h.createElement(kk, { ...e, ref: t, className: Jt("rt-SelectSeparator", e.className) }));
  DC.displayName = "SelectSeparator";
  const gn = Object.assign({}, { Root: _C, Trigger: PC, Content: IC, Item: AC, Group: RC, Label: MC, Separator: DC }),
    vt = h.forwardRef((e, t) => {
      const { children: r, className: n, open: a, defaultOpen: o, onOpenChange: i, delayDuration: s, disableHoverableContent: c, content: l, container: u, forceMount: f, ...d } = e,
        v = { open: a, defaultOpen: o, onOpenChange: i, delayDuration: s, disableHoverableContent: c };
      return h.createElement(
        zD,
        { ...v },
        h.createElement(VD, { asChild: !0 }, r),
        h.createElement(
          GD,
          { container: u, forceMount: f },
          h.createElement(
            Hu,
            { asChild: !0 },
            h.createElement(
              YD,
              { sideOffset: 4, collisionPadding: 10, ...d, ref: t, className: Jt("rt-TooltipContent", n) },
              h.createElement(Tg, { as: "p", className: "rt-TooltipText", size: "1" }, l),
              h.createElement(KD, { className: "rt-TooltipArrow" })
            )
          )
        )
      );
    });
  vt.displayName = "Tooltip";
  const iL = ["1", "2"],
    sL = ["solid", "soft", "surface", "outline"],
    li = { size: { type: "enum", values: iL, default: "1", responsive: !0 }, variant: { type: "enum", values: sL, default: "soft" }, color: { ...zu, default: void 0 }, highContrast: xg, radius: aC },
    NC = h.forwardRef((e, t) => {
      const { rest: r, ...n } = Vu(e),
        { className: a, size: o = li.size.default, variant: i = li.variant.default, color: s = li.color.default, highContrast: c = li.highContrast.default, radius: l = li.radius.default, ...u } = r;
      return h.createElement("span", { "data-accent-color": s, "data-radius": l, ...u, ref: t, className: Jt("rt-Badge", a, St(o, "rt-r-size"), `rt-variant-${i}`, { "rt-high-contrast": c }, Gu(n)) });
    });
  NC.displayName = "Badge";
  const cL = ["auto", "hover", "always"],
    lL = { size: or.size, weight: or.weight, trim: or.trim, underline: { type: "enum", values: cL, default: "auto" }, color: or.color, highContrast: or.highContrast },
    kC = h.forwardRef((e, t) => {
      const { children: r, className: n, asChild: a = !1, underline: o = lL.underline.default, ...i } = e;
      return h.createElement(Tg, { ...i, ref: t, asChild: !0, className: Jt("rt-reset", "rt-Link", n, `rt-underline-${o}`) }, a ? r : h.createElement("a", null, r));
    });
  kC.displayName = "Link";
  let uL = 0;
  function fL(e, t) {
    const r = `atom${++uL}`,
      n = { toString: () => r };
    return typeof e == "function" ? (n.read = e) : ((n.init = e), (n.read = dL), (n.write = hL)), t && (n.write = t), n;
  }
  function dL(e) {
    return e(this);
  }
  function hL(e, t, r) {
    return t(this, typeof r == "function" ? r(e(this)) : r);
  }
  const zd = (e, t) => (e.unstable_is ? e.unstable_is(t) : t === e),
    Yb = (e) => "init" in e,
    Kb = (e) => !!e.write,
    zl = new WeakMap(),
    vL = (e, t) => {
      zl.set(e, t), e.catch(() => {}).finally(() => zl.delete(e));
    },
    qb = (e, t) => {
      const r = zl.get(e);
      r && (zl.delete(e), r(t));
    },
    Xb = (e, t) => {
      (e.status = "fulfilled"), (e.value = t);
    },
    Zb = (e, t) => {
      (e.status = "rejected"), (e.reason = t);
    },
    pL = (e) => typeof (e == null ? void 0 : e.then) == "function",
    ui = (e, t) => !!e && "v" in e && "v" in t && Object.is(e.v, t.v),
    Jb = (e, t) => !!e && "e" in e && "e" in t && Object.is(e.e, t.e),
    Ja = (e) => !!e && "v" in e && e.v instanceof Promise,
    mL = (e, t) => "v" in e && "v" in t && e.v.orig && e.v.orig === t.v.orig,
    fc = (e) => {
      if ("e" in e) throw e.e;
      return e.v;
    },
    Ig = () => {
      const e = new WeakMap(),
        t = new WeakMap(),
        r = new Map();
      let n, a;
      const o = (T) => e.get(T),
        i = (T, F) => {
          const k = o(T);
          if ((e.set(T, F), r.has(T) || r.set(T, k), Ja(k))) {
            const D = "v" in F ? (F.v instanceof Promise ? F.v : Promise.resolve(F.v)) : Promise.reject(F.e);
            k.v !== D && qb(k.v, D);
          }
        },
        s = (T, F, k, D) => {
          const _ = new Map(D ? F.d : null);
          let O = !1;
          k.forEach((w, R) => {
            !w && zd(T, R) && (w = F), w && (_.set(R, w), F.d.get(R) !== w && (O = !0));
          }),
            (O || F.d.size !== _.size) && (F.d = _);
        },
        c = (T, F, k, D) => {
          const _ = o(T),
            O = { d: (_ == null ? void 0 : _.d) || new Map(), v: F };
          if ((k && s(T, O, k, D), ui(_, O) && _.d === O.d)) return _;
          if (Ja(_) && Ja(O) && mL(_, O)) {
            if (_.d === O.d) return _;
            O.v = _.v;
          }
          return i(T, O), O;
        },
        l = (T, F, k, D) => {
          if (pL(F)) {
            let _;
            const O = () => {
                const R = o(T);
                if (!Ja(R) || R.v !== w) return;
                const I = c(T, w, k);
                t.has(T) && R.d !== I.d && A(T, I, R.d);
              },
              w = new Promise((R, I) => {
                let N = !1;
                F.then(
                  (B) => {
                    N || ((N = !0), Xb(w, B), R(B), O());
                  },
                  (B) => {
                    N || ((N = !0), Zb(w, B), I(B), O());
                  }
                ),
                  (_ = (B) => {
                    N ||
                      ((N = !0),
                      B.then(
                        (W) => Xb(w, W),
                        (W) => Zb(w, W)
                      ),
                      R(B));
                  });
              });
            return (
              (w.orig = F),
              (w.status = "pending"),
              vL(w, (R) => {
                R && _(R), D == null || D();
              }),
              c(T, w, k, !0)
            );
          }
          return c(T, F, k);
        },
        u = (T, F, k) => {
          const D = o(T),
            _ = { d: (D == null ? void 0 : D.d) || new Map(), e: F };
          return k && s(T, _, k), Jb(D, _) && D.d === _.d ? D : (i(T, _), _);
        },
        f = (T, F) => {
          const k = o(T);
          if (
            !F &&
            k &&
            (t.has(T) ||
              Array.from(k.d).every(([N, B]) => {
                if (N === T) return !0;
                const W = f(N);
                return W === B || ui(W, B);
              }))
          )
            return k;
          const D = new Map();
          let _ = !0;
          const O = (N) => {
            if (zd(T, N)) {
              const W = o(N);
              if (W) return D.set(N, W), fc(W);
              if (Yb(N)) return D.set(N, void 0), N.init;
              throw new Error("no atom init");
            }
            const B = f(N);
            return D.set(N, B), fc(B);
          };
          let w, R;
          const I = {
            get signal() {
              return w || (w = new AbortController()), w.signal;
            },
            get setSelf() {
              return (
                !R &&
                  Kb(T) &&
                  (R = (...N) => {
                    if (!_) return b(T, ...N);
                  }),
                R
              );
            },
          };
          try {
            const N = T.read(O, I);
            return l(T, N, D, () => (w == null ? void 0 : w.abort()));
          } catch (N) {
            return u(T, N, D);
          } finally {
            _ = !1;
          }
        },
        d = (T) => fc(f(T)),
        v = (T) => {
          let F = t.get(T);
          return F || (F = $(T)), F;
        },
        p = (T, F) => !F.l.size && (!F.t.size || (F.t.size === 1 && F.t.has(T))),
        m = (T) => {
          const F = t.get(T);
          F && p(T, F) && S(T);
        },
        g = (T) => {
          const F = (w) => {
              var R;
              const I = new Set((R = t.get(w)) == null ? void 0 : R.t);
              return (
                r.forEach((N, B) => {
                  var W;
                  (W = o(B)) != null && W.d.has(w) && I.add(B);
                }),
                I
              );
            },
            k = new Array(),
            D = new Set(),
            _ = (w) => {
              if (!D.has(w)) {
                D.add(w);
                for (const R of F(w)) w !== R && _(R);
                k.push(w);
              }
            };
          _(T);
          const O = new Set([T]);
          for (let w = k.length - 1; w >= 0; --w) {
            const R = k[w],
              I = o(R);
            if (!I) continue;
            let N = !1;
            for (const B of I.d.keys())
              if (B !== R && O.has(B)) {
                N = !0;
                break;
              }
            if (N) {
              const B = f(R, !0);
              ui(I, B) || O.add(R);
            }
          }
        },
        y = (T, ...F) => {
          let k = !0;
          const D = (w) => fc(f(w)),
            _ = (w, ...R) => {
              let I;
              if (zd(T, w)) {
                if (!Yb(w)) throw new Error("atom not writable");
                const N = o(w),
                  B = l(w, R[0]);
                ui(N, B) || g(w);
              } else I = y(w, ...R);
              if (!k) {
                const N = P();
              }
              return I;
            },
            O = T.write(D, _, ...F);
          return (k = !1), O;
        },
        b = (T, ...F) => {
          const k = y(T, ...F),
            D = P();
          return k;
        },
        $ = (T, F, k) => {
          var D;
          const _ = k || [];
          (D = o(T)) == null ||
            D.d.forEach((w, R) => {
              const I = t.get(R);
              I ? I.t.add(T) : R !== T && $(R, T, _);
            }),
            f(T);
          const O = { t: new Set(F && [F]), l: new Set() };
          if ((t.set(T, O), Kb(T) && T.onMount)) {
            const { onMount: w } = T;
            _.push(() => {
              const R = w((...I) => b(T, ...I));
              R && (O.u = R);
            });
          }
          return k || _.forEach((w) => w()), O;
        },
        S = (T) => {
          var F;
          const k = (F = t.get(T)) == null ? void 0 : F.u;
          k && k(), t.delete(T);
          const D = o(T);
          D &&
            (Ja(D) && qb(D.v),
            D.d.forEach((_, O) => {
              if (O !== T) {
                const w = t.get(O);
                w && (w.t.delete(T), p(O, w) && S(O));
              }
            }));
        },
        A = (T, F, k) => {
          const D = new Set(F.d.keys()),
            _ = new Set();
          k == null ||
            k.forEach((O, w) => {
              if (D.has(w)) {
                D.delete(w);
                return;
              }
              _.add(w);
              const R = t.get(w);
              R && R.t.delete(T);
            }),
            D.forEach((O) => {
              const w = t.get(O);
              w ? w.t.add(T) : t.has(T) && $(O, T);
            }),
            _.forEach((O) => {
              const w = t.get(O);
              w && p(O, w) && S(O);
            });
        },
        P = () => {
          let T;
          for (; r.size; ) {
            const F = Array.from(r);
            r.clear(),
              F.forEach(([k, D]) => {
                const _ = o(k);
                if (_) {
                  const O = t.get(k);
                  O && _.d !== (D == null ? void 0 : D.d) && A(k, _, D == null ? void 0 : D.d), O && !(!Ja(D) && (ui(D, _) || Jb(D, _))) && O.l.forEach((w) => w());
                }
              });
          }
        };
      return {
        get: d,
        set: b,
        sub: (T, F) => {
          const k = v(T),
            D = P(),
            _ = k.l;
          return (
            _.add(F),
            () => {
              _.delete(F), m(T);
            }
          );
        },
      };
    };
  let Vd;
  const gL = () => (Vd || (Vd = Ig()), Vd),
    LC = h.createContext(void 0),
    FC = (e) => {
      const t = h.useContext(LC);
      return (e == null ? void 0 : e.store) || t || gL();
    },
    yL = ({ children: e, store: t }) => {
      const r = h.useRef();
      return !t && !r.current && (r.current = Ig()), h.createElement(LC.Provider, { value: t || r.current }, e);
    },
    bL = (e) => typeof (e == null ? void 0 : e.then) == "function",
    $L =
      Ge.use ||
      ((e) => {
        if (e.status === "pending") throw e;
        if (e.status === "fulfilled") return e.value;
        throw e.status === "rejected"
          ? e.reason
          : ((e.status = "pending"),
            e.then(
              (t) => {
                (e.status = "fulfilled"), (e.value = t);
              },
              (t) => {
                (e.status = "rejected"), (e.reason = t);
              }
            ),
            e);
      });
  function jC(e, t) {
    const r = FC(t),
      [[n, a, o], i] = h.useReducer(
        (l) => {
          const u = r.get(e);
          return Object.is(l[0], u) && l[1] === r && l[2] === e ? l : [u, r, e];
        },
        void 0,
        () => [r.get(e), r, e]
      );
    let s = n;
    (a !== r || o !== e) && (i(), (s = r.get(e)));
    const c = t == null ? void 0 : t.delay;
    return (
      h.useEffect(() => {
        const l = r.sub(e, () => {
          if (typeof c == "number") {
            setTimeout(i, c);
            return;
          }
          i();
        });
        return i(), l;
      }, [r, e, c]),
      h.useDebugValue(s),
      bL(s) ? $L(s) : s
    );
  }
  function Ag(e, t) {
    const r = FC(t);
    return h.useCallback((...a) => r.set(e, ...a), [r, e]);
  }
  function wL(e, t) {
    return [jC(e, t), Ag(e, t)];
  }
  var BC = { color: void 0, size: void 0, className: void 0, style: void 0, attr: void 0 },
    Qb = Ge.createContext && Ge.createContext(BC),
    SL = ["attr", "size", "title"];
  function EL(e, t) {
    if (e == null) return {};
    var r = xL(e, t),
      n,
      a;
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      for (a = 0; a < o.length; a++) (n = o[a]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
    }
    return r;
  }
  function xL(e, t) {
    if (e == null) return {};
    var r = {},
      n = Object.keys(e),
      a,
      o;
    for (o = 0; o < n.length; o++) (a = n[o]), !(t.indexOf(a) >= 0) && (r[a] = e[a]);
    return r;
  }
  function Vl() {
    return (
      (Vl = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }),
      Vl.apply(this, arguments)
    );
  }
  function e1(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t &&
        (n = n.filter(function (a) {
          return Object.getOwnPropertyDescriptor(e, a).enumerable;
        })),
        r.push.apply(r, n);
    }
    return r;
  }
  function Gl(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] != null ? arguments[t] : {};
      t % 2
        ? e1(Object(r), !0).forEach(function (n) {
            TL(e, n, r[n]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : e1(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
    }
    return e;
  }
  function TL(e, t, r) {
    return (t = CL(t)), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
  }
  function CL(e) {
    var t = OL(e, "string");
    return typeof t == "symbol" ? t : String(t);
  }
  function OL(e, t) {
    if (typeof e != "object" || e === null) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
      var n = r.call(e, t || "default");
      if (typeof n != "object") return n;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (t === "string" ? String : Number)(e);
  }
  function UC(e) {
    return e && e.map((t, r) => Ge.createElement(t.tag, Gl({ key: r }, t.attr), UC(t.child)));
  }
  function WC(e) {
    return (t) => Ge.createElement(_L, Vl({ attr: Gl({}, e.attr) }, t), UC(e.child));
  }
  function _L(e) {
    var t = (r) => {
      var { attr: n, size: a, title: o } = e,
        i = EL(e, SL),
        s = a || r.size || "1em",
        c;
      return (
        r.className && (c = r.className),
        e.className && (c = (c ? c + " " : "") + e.className),
        Ge.createElement(
          "svg",
          Vl({ stroke: "currentColor", fill: "currentColor", strokeWidth: "0" }, r.attr, n, i, {
            className: c,
            style: Gl(Gl({ color: e.color || r.color }, r.style), e.style),
            height: s,
            width: s,
            xmlns: "http://www.w3.org/2000/svg",
          }),
          o && Ge.createElement("title", null, o),
          e.children
        )
      );
    };
    return Qb !== void 0 ? Ge.createElement(Qb.Consumer, null, (r) => t(r)) : t(BC);
  }
  function PL(e) {
    return WC({
      tag: "svg",
      attr: { fill: "currentColor", viewBox: "0 0 16 16" },
      child: [
        {
          tag: "path",
          attr: {
            d: "M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zm6 4v7.5a1.5 1.5 0 0 1-1.5 1.5H9V7h6zM2.5 16A1.5 1.5 0 0 1 1 14.5V7h6v9H2.5z",
          },
          child: [],
        },
      ],
    })(e);
  }
  const IL = Ig(),
    Qu = fL({ isEnterLicense: !1, isTrialCheckModalShow: !1 });
  var AL = function (t) {
    return RL(t) && !ML(t);
  };
  function RL(e) {
    return !!e && typeof e == "object";
  }
  function ML(e) {
    var t = Object.prototype.toString.call(e);
    return t === "[object RegExp]" || t === "[object Date]" || kL(e);
  }
  var DL = typeof Symbol == "function" && Symbol.for,
    NL = DL ? Symbol.for("react.element") : 60103;
  function kL(e) {
    return e.$$typeof === NL;
  }
  function LL(e) {
    return Array.isArray(e) ? [] : {};
  }
  function Yl(e, t) {
    return t.clone !== !1 && t.isMergeableObject(e) ? Zi(LL(e), e, t) : e;
  }
  function FL(e, t, r) {
    return e.concat(t).map(function (n) {
      return Yl(n, r);
    });
  }
  function jL(e, t, r) {
    var n = {};
    return (
      r.isMergeableObject(e) &&
        Object.keys(e).forEach(function (a) {
          n[a] = Yl(e[a], r);
        }),
      Object.keys(t).forEach(function (a) {
        !r.isMergeableObject(t[a]) || !e[a] ? (n[a] = Yl(t[a], r)) : (n[a] = Zi(e[a], t[a], r));
      }),
      n
    );
  }
  function Zi(e, t, r) {
    (r = r || {}), (r.arrayMerge = r.arrayMerge || FL), (r.isMergeableObject = r.isMergeableObject || AL);
    var n = Array.isArray(t),
      a = Array.isArray(e),
      o = n === a;
    return o ? (n ? r.arrayMerge(e, t, r) : jL(e, t, r)) : Yl(t, r);
  }
  Zi.all = function (t, r) {
    if (!Array.isArray(t)) throw new Error("first argument should be an array");
    return t.reduce(function (n, a) {
      return Zi(n, a, r);
    }, {});
  };
  var yp = Zi,
    BL = typeof global == "object" && global && global.Object === Object && global;
  const HC = BL;
  var UL = typeof self == "object" && self && self.Object === Object && self,
    WL = HC || UL || Function("return this")();
  const Dr = WL;
  var HL = Dr.Symbol;
  const An = HL;
  var zC = Object.prototype,
    zL = zC.hasOwnProperty,
    VL = zC.toString,
    fi = An ? An.toStringTag : void 0;
  function GL(e) {
    var t = zL.call(e, fi),
      r = e[fi];
    try {
      e[fi] = void 0;
      var n = !0;
    } catch {}
    var a = VL.call(e);
    return n && (t ? (e[fi] = r) : delete e[fi]), a;
  }
  var YL = Object.prototype,
    KL = YL.toString;
  function qL(e) {
    return KL.call(e);
  }
  var XL = "[object Null]",
    ZL = "[object Undefined]",
    t1 = An ? An.toStringTag : void 0;
  function Oa(e) {
    return e == null ? (e === void 0 ? ZL : XL) : t1 && t1 in Object(e) ? GL(e) : qL(e);
  }
  function VC(e, t) {
    return function (r) {
      return e(t(r));
    };
  }
  var JL = VC(Object.getPrototypeOf, Object);
  const Rg = JL;
  function _a(e) {
    return e != null && typeof e == "object";
  }
  var QL = "[object Object]",
    eF = Function.prototype,
    tF = Object.prototype,
    GC = eF.toString,
    rF = tF.hasOwnProperty,
    nF = GC.call(Object);
  function r1(e) {
    if (!_a(e) || Oa(e) != QL) return !1;
    var t = Rg(e);
    if (t === null) return !0;
    var r = rF.call(t, "constructor") && t.constructor;
    return typeof r == "function" && r instanceof r && GC.call(r) == nF;
  }
  var n1 = Array.isArray,
    a1 = Object.keys,
    aF = Object.prototype.hasOwnProperty,
    oF = typeof Element < "u";
  function bp(e, t) {
    if (e === t) return !0;
    if (e && t && typeof e == "object" && typeof t == "object") {
      var r = n1(e),
        n = n1(t),
        a,
        o,
        i;
      if (r && n) {
        if (((o = e.length), o != t.length)) return !1;
        for (a = o; a-- !== 0; ) if (!bp(e[a], t[a])) return !1;
        return !0;
      }
      if (r != n) return !1;
      var s = e instanceof Date,
        c = t instanceof Date;
      if (s != c) return !1;
      if (s && c) return e.getTime() == t.getTime();
      var l = e instanceof RegExp,
        u = t instanceof RegExp;
      if (l != u) return !1;
      if (l && u) return e.toString() == t.toString();
      var f = a1(e);
      if (((o = f.length), o !== a1(t).length)) return !1;
      for (a = o; a-- !== 0; ) if (!aF.call(t, f[a])) return !1;
      if (oF && e instanceof Element && t instanceof Element) return e === t;
      for (a = o; a-- !== 0; ) if (((i = f[a]), !(i === "_owner" && e.$$typeof) && !bp(e[i], t[i]))) return !1;
      return !0;
    }
    return e !== e && t !== t;
  }
  var iF = function (t, r) {
    try {
      return bp(t, r);
    } catch (n) {
      if ((n.message && n.message.match(/stack|recursion/i)) || n.number === -2146828260) return !1;
      throw n;
    }
  };
  const Zn = Rx(iF);
  var sF = !0;
  function cF(e, t) {
    if (!sF) {
      if (e) return;
      var r = "Warning: " + t;
      try {
        throw Error(r);
      } catch {}
    }
  }
  function lF() {
    (this.__data__ = []), (this.size = 0);
  }
  function YC(e, t) {
    return e === t || (e !== e && t !== t);
  }
  function ef(e, t) {
    for (var r = e.length; r--; ) if (YC(e[r][0], t)) return r;
    return -1;
  }
  var uF = Array.prototype,
    fF = uF.splice;
  function dF(e) {
    var t = this.__data__,
      r = ef(t, e);
    if (r < 0) return !1;
    var n = t.length - 1;
    return r == n ? t.pop() : fF.call(t, r, 1), --this.size, !0;
  }
  function hF(e) {
    var t = this.__data__,
      r = ef(t, e);
    return r < 0 ? void 0 : t[r][1];
  }
  function vF(e) {
    return ef(this.__data__, e) > -1;
  }
  function pF(e, t) {
    var r = this.__data__,
      n = ef(r, e);
    return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
  }
  function cn(e) {
    var t = -1,
      r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
      var n = e[t];
      this.set(n[0], n[1]);
    }
  }
  cn.prototype.clear = lF;
  cn.prototype.delete = dF;
  cn.prototype.get = hF;
  cn.prototype.has = vF;
  cn.prototype.set = pF;
  function mF() {
    (this.__data__ = new cn()), (this.size = 0);
  }
  function gF(e) {
    var t = this.__data__,
      r = t.delete(e);
    return (this.size = t.size), r;
  }
  function yF(e) {
    return this.__data__.get(e);
  }
  function bF(e) {
    return this.__data__.has(e);
  }
  function Cs(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function");
  }
  var $F = "[object AsyncFunction]",
    wF = "[object Function]",
    SF = "[object GeneratorFunction]",
    EF = "[object Proxy]";
  function KC(e) {
    if (!Cs(e)) return !1;
    var t = Oa(e);
    return t == wF || t == SF || t == $F || t == EF;
  }
  var xF = Dr["__core-js_shared__"];
  const Gd = xF;
  var o1 = (function () {
    var e = /[^.]+$/.exec((Gd && Gd.keys && Gd.keys.IE_PROTO) || "");
    return e ? "Symbol(src)_1." + e : "";
  })();
  function TF(e) {
    return !!o1 && o1 in e;
  }
  var CF = Function.prototype,
    OF = CF.toString;
  function Pa(e) {
    if (e != null) {
      try {
        return OF.call(e);
      } catch {}
      try {
        return e + "";
      } catch {}
    }
    return "";
  }
  var _F = /[\\^$.*+?()[\]{}|]/g,
    PF = /^\[object .+?Constructor\]$/,
    IF = Function.prototype,
    AF = Object.prototype,
    RF = IF.toString,
    MF = AF.hasOwnProperty,
    DF = RegExp(
      "^" +
        RF.call(MF)
          .replace(_F, "\\$&")
          .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
        "$"
    );
  function NF(e) {
    if (!Cs(e) || TF(e)) return !1;
    var t = KC(e) ? DF : PF;
    return t.test(Pa(e));
  }
  function kF(e, t) {
    return e == null ? void 0 : e[t];
  }
  function Ia(e, t) {
    var r = kF(e, t);
    return NF(r) ? r : void 0;
  }
  var LF = Ia(Dr, "Map");
  const Ji = LF;
  var FF = Ia(Object, "create");
  const Qi = FF;
  function jF() {
    (this.__data__ = Qi ? Qi(null) : {}), (this.size = 0);
  }
  function BF(e) {
    var t = this.has(e) && delete this.__data__[e];
    return (this.size -= t ? 1 : 0), t;
  }
  var UF = "__lodash_hash_undefined__",
    WF = Object.prototype,
    HF = WF.hasOwnProperty;
  function zF(e) {
    var t = this.__data__;
    if (Qi) {
      var r = t[e];
      return r === UF ? void 0 : r;
    }
    return HF.call(t, e) ? t[e] : void 0;
  }
  var VF = Object.prototype,
    GF = VF.hasOwnProperty;
  function YF(e) {
    var t = this.__data__;
    return Qi ? t[e] !== void 0 : GF.call(t, e);
  }
  var KF = "__lodash_hash_undefined__";
  function qF(e, t) {
    var r = this.__data__;
    return (this.size += this.has(e) ? 0 : 1), (r[e] = Qi && t === void 0 ? KF : t), this;
  }
  function fa(e) {
    var t = -1,
      r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
      var n = e[t];
      this.set(n[0], n[1]);
    }
  }
  fa.prototype.clear = jF;
  fa.prototype.delete = BF;
  fa.prototype.get = zF;
  fa.prototype.has = YF;
  fa.prototype.set = qF;
  function XF() {
    (this.size = 0), (this.__data__ = { hash: new fa(), map: new (Ji || cn)(), string: new fa() });
  }
  function ZF(e) {
    var t = typeof e;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
  }
  function tf(e, t) {
    var r = e.__data__;
    return ZF(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
  }
  function JF(e) {
    var t = tf(this, e).delete(e);
    return (this.size -= t ? 1 : 0), t;
  }
  function QF(e) {
    return tf(this, e).get(e);
  }
  function ej(e) {
    return tf(this, e).has(e);
  }
  function tj(e, t) {
    var r = tf(this, e),
      n = r.size;
    return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
  }
  function Ln(e) {
    var t = -1,
      r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
      var n = e[t];
      this.set(n[0], n[1]);
    }
  }
  Ln.prototype.clear = XF;
  Ln.prototype.delete = JF;
  Ln.prototype.get = QF;
  Ln.prototype.has = ej;
  Ln.prototype.set = tj;
  var rj = 200;
  function nj(e, t) {
    var r = this.__data__;
    if (r instanceof cn) {
      var n = r.__data__;
      if (!Ji || n.length < rj - 1) return n.push([e, t]), (this.size = ++r.size), this;
      r = this.__data__ = new Ln(n);
    }
    return r.set(e, t), (this.size = r.size), this;
  }
  function Zo(e) {
    var t = (this.__data__ = new cn(e));
    this.size = t.size;
  }
  Zo.prototype.clear = mF;
  Zo.prototype.delete = gF;
  Zo.prototype.get = yF;
  Zo.prototype.has = bF;
  Zo.prototype.set = nj;
  function aj(e, t) {
    for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; );
    return e;
  }
  var oj = (function () {
    try {
      var e = Ia(Object, "defineProperty");
      return e({}, "", {}), e;
    } catch {}
  })();
  const i1 = oj;
  function qC(e, t, r) {
    t == "__proto__" && i1 ? i1(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 }) : (e[t] = r);
  }
  var ij = Object.prototype,
    sj = ij.hasOwnProperty;
  function XC(e, t, r) {
    var n = e[t];
    (!(sj.call(e, t) && YC(n, r)) || (r === void 0 && !(t in e))) && qC(e, t, r);
  }
  function rf(e, t, r, n) {
    var a = !r;
    r || (r = {});
    for (var o = -1, i = t.length; ++o < i; ) {
      var s = t[o],
        c = n ? n(r[s], e[s], s, r, e) : void 0;
      c === void 0 && (c = e[s]), a ? qC(r, s, c) : XC(r, s, c);
    }
    return r;
  }
  function cj(e, t) {
    for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
    return n;
  }
  var lj = "[object Arguments]";
  function s1(e) {
    return _a(e) && Oa(e) == lj;
  }
  var ZC = Object.prototype,
    uj = ZC.hasOwnProperty,
    fj = ZC.propertyIsEnumerable,
    dj = s1(
      (function () {
        return arguments;
      })()
    )
      ? s1
      : function (e) {
          return _a(e) && uj.call(e, "callee") && !fj.call(e, "callee");
        };
  const hj = dj;
  var vj = Array.isArray;
  const Os = vj;
  function pj() {
    return !1;
  }
  var JC = typeof Me == "object" && Me && !Me.nodeType && Me,
    c1 = JC && typeof De == "object" && De && !De.nodeType && De,
    mj = c1 && c1.exports === JC,
    l1 = mj ? Dr.Buffer : void 0,
    gj = l1 ? l1.isBuffer : void 0,
    yj = gj || pj;
  const QC = yj;
  var bj = 9007199254740991,
    $j = /^(?:0|[1-9]\d*)$/;
  function wj(e, t) {
    var r = typeof e;
    return (t = t ?? bj), !!t && (r == "number" || (r != "symbol" && $j.test(e))) && e > -1 && e % 1 == 0 && e < t;
  }
  var Sj = 9007199254740991;
  function eO(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Sj;
  }
  var Ej = "[object Arguments]",
    xj = "[object Array]",
    Tj = "[object Boolean]",
    Cj = "[object Date]",
    Oj = "[object Error]",
    _j = "[object Function]",
    Pj = "[object Map]",
    Ij = "[object Number]",
    Aj = "[object Object]",
    Rj = "[object RegExp]",
    Mj = "[object Set]",
    Dj = "[object String]",
    Nj = "[object WeakMap]",
    kj = "[object ArrayBuffer]",
    Lj = "[object DataView]",
    Fj = "[object Float32Array]",
    jj = "[object Float64Array]",
    Bj = "[object Int8Array]",
    Uj = "[object Int16Array]",
    Wj = "[object Int32Array]",
    Hj = "[object Uint8Array]",
    zj = "[object Uint8ClampedArray]",
    Vj = "[object Uint16Array]",
    Gj = "[object Uint32Array]",
    Pe = {};
  Pe[Fj] = Pe[jj] = Pe[Bj] = Pe[Uj] = Pe[Wj] = Pe[Hj] = Pe[zj] = Pe[Vj] = Pe[Gj] = !0;
  Pe[Ej] = Pe[xj] = Pe[kj] = Pe[Tj] = Pe[Lj] = Pe[Cj] = Pe[Oj] = Pe[_j] = Pe[Pj] = Pe[Ij] = Pe[Aj] = Pe[Rj] = Pe[Mj] = Pe[Dj] = Pe[Nj] = !1;
  function Yj(e) {
    return _a(e) && eO(e.length) && !!Pe[Oa(e)];
  }
  function Mg(e) {
    return function (t) {
      return e(t);
    };
  }
  var tO = typeof Me == "object" && Me && !Me.nodeType && Me,
    Li = tO && typeof De == "object" && De && !De.nodeType && De,
    Kj = Li && Li.exports === tO,
    Yd = Kj && HC.process,
    qj = (function () {
      try {
        var e = Li && Li.require && Li.require("util").types;
        return e || (Yd && Yd.binding && Yd.binding("util"));
      } catch {}
    })();
  const ko = qj;
  var u1 = ko && ko.isTypedArray,
    Xj = u1 ? Mg(u1) : Yj;
  const Zj = Xj;
  var Jj = Object.prototype,
    Qj = Jj.hasOwnProperty;
  function rO(e, t) {
    var r = Os(e),
      n = !r && hj(e),
      a = !r && !n && QC(e),
      o = !r && !n && !a && Zj(e),
      i = r || n || a || o,
      s = i ? cj(e.length, String) : [],
      c = s.length;
    for (var l in e)
      (t || Qj.call(e, l)) && !(i && (l == "length" || (a && (l == "offset" || l == "parent")) || (o && (l == "buffer" || l == "byteLength" || l == "byteOffset")) || wj(l, c))) && s.push(l);
    return s;
  }
  var eB = Object.prototype;
  function Dg(e) {
    var t = e && e.constructor,
      r = (typeof t == "function" && t.prototype) || eB;
    return e === r;
  }
  var tB = VC(Object.keys, Object);
  const rB = tB;
  var nB = Object.prototype,
    aB = nB.hasOwnProperty;
  function oB(e) {
    if (!Dg(e)) return rB(e);
    var t = [];
    for (var r in Object(e)) aB.call(e, r) && r != "constructor" && t.push(r);
    return t;
  }
  function nO(e) {
    return e != null && eO(e.length) && !KC(e);
  }
  function Ng(e) {
    return nO(e) ? rO(e) : oB(e);
  }
  function iB(e, t) {
    return e && rf(t, Ng(t), e);
  }
  function sB(e) {
    var t = [];
    if (e != null) for (var r in Object(e)) t.push(r);
    return t;
  }
  var cB = Object.prototype,
    lB = cB.hasOwnProperty;
  function uB(e) {
    if (!Cs(e)) return sB(e);
    var t = Dg(e),
      r = [];
    for (var n in e) (n == "constructor" && (t || !lB.call(e, n))) || r.push(n);
    return r;
  }
  function kg(e) {
    return nO(e) ? rO(e, !0) : uB(e);
  }
  function fB(e, t) {
    return e && rf(t, kg(t), e);
  }
  var aO = typeof Me == "object" && Me && !Me.nodeType && Me,
    f1 = aO && typeof De == "object" && De && !De.nodeType && De,
    dB = f1 && f1.exports === aO,
    d1 = dB ? Dr.Buffer : void 0,
    h1 = d1 ? d1.allocUnsafe : void 0;
  function hB(e, t) {
    if (t) return e.slice();
    var r = e.length,
      n = h1 ? h1(r) : new e.constructor(r);
    return e.copy(n), n;
  }
  function oO(e, t) {
    var r = -1,
      n = e.length;
    for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
    return t;
  }
  function vB(e, t) {
    for (var r = -1, n = e == null ? 0 : e.length, a = 0, o = []; ++r < n; ) {
      var i = e[r];
      t(i, r, e) && (o[a++] = i);
    }
    return o;
  }
  function iO() {
    return [];
  }
  var pB = Object.prototype,
    mB = pB.propertyIsEnumerable,
    v1 = Object.getOwnPropertySymbols,
    gB = v1
      ? function (e) {
          return e == null
            ? []
            : ((e = Object(e)),
              vB(v1(e), function (t) {
                return mB.call(e, t);
              }));
        }
      : iO;
  const Lg = gB;
  function yB(e, t) {
    return rf(e, Lg(e), t);
  }
  function sO(e, t) {
    for (var r = -1, n = t.length, a = e.length; ++r < n; ) e[a + r] = t[r];
    return e;
  }
  var bB = Object.getOwnPropertySymbols,
    $B = bB
      ? function (e) {
          for (var t = []; e; ) sO(t, Lg(e)), (e = Rg(e));
          return t;
        }
      : iO;
  const cO = $B;
  function wB(e, t) {
    return rf(e, cO(e), t);
  }
  function lO(e, t, r) {
    var n = t(e);
    return Os(e) ? n : sO(n, r(e));
  }
  function SB(e) {
    return lO(e, Ng, Lg);
  }
  function EB(e) {
    return lO(e, kg, cO);
  }
  var xB = Ia(Dr, "DataView");
  const $p = xB;
  var TB = Ia(Dr, "Promise");
  const wp = TB;
  var CB = Ia(Dr, "Set");
  const Sp = CB;
  var OB = Ia(Dr, "WeakMap");
  const Ep = OB;
  var p1 = "[object Map]",
    _B = "[object Object]",
    m1 = "[object Promise]",
    g1 = "[object Set]",
    y1 = "[object WeakMap]",
    b1 = "[object DataView]",
    PB = Pa($p),
    IB = Pa(Ji),
    AB = Pa(wp),
    RB = Pa(Sp),
    MB = Pa(Ep),
    Jn = Oa;
  (($p && Jn(new $p(new ArrayBuffer(1))) != b1) || (Ji && Jn(new Ji()) != p1) || (wp && Jn(wp.resolve()) != m1) || (Sp && Jn(new Sp()) != g1) || (Ep && Jn(new Ep()) != y1)) &&
    (Jn = function (e) {
      var t = Oa(e),
        r = t == _B ? e.constructor : void 0,
        n = r ? Pa(r) : "";
      if (n)
        switch (n) {
          case PB:
            return b1;
          case IB:
            return p1;
          case AB:
            return m1;
          case RB:
            return g1;
          case MB:
            return y1;
        }
      return t;
    });
  const Fg = Jn;
  var DB = Object.prototype,
    NB = DB.hasOwnProperty;
  function kB(e) {
    var t = e.length,
      r = new e.constructor(t);
    return t && typeof e[0] == "string" && NB.call(e, "index") && ((r.index = e.index), (r.input = e.input)), r;
  }
  var LB = Dr.Uint8Array;
  const $1 = LB;
  function jg(e) {
    var t = new e.constructor(e.byteLength);
    return new $1(t).set(new $1(e)), t;
  }
  function FB(e, t) {
    var r = t ? jg(e.buffer) : e.buffer;
    return new e.constructor(r, e.byteOffset, e.byteLength);
  }
  var jB = /\w*$/;
  function BB(e) {
    var t = new e.constructor(e.source, jB.exec(e));
    return (t.lastIndex = e.lastIndex), t;
  }
  var w1 = An ? An.prototype : void 0,
    S1 = w1 ? w1.valueOf : void 0;
  function UB(e) {
    return S1 ? Object(S1.call(e)) : {};
  }
  function WB(e, t) {
    var r = t ? jg(e.buffer) : e.buffer;
    return new e.constructor(r, e.byteOffset, e.length);
  }
  var HB = "[object Boolean]",
    zB = "[object Date]",
    VB = "[object Map]",
    GB = "[object Number]",
    YB = "[object RegExp]",
    KB = "[object Set]",
    qB = "[object String]",
    XB = "[object Symbol]",
    ZB = "[object ArrayBuffer]",
    JB = "[object DataView]",
    QB = "[object Float32Array]",
    eU = "[object Float64Array]",
    tU = "[object Int8Array]",
    rU = "[object Int16Array]",
    nU = "[object Int32Array]",
    aU = "[object Uint8Array]",
    oU = "[object Uint8ClampedArray]",
    iU = "[object Uint16Array]",
    sU = "[object Uint32Array]";
  function cU(e, t, r) {
    var n = e.constructor;
    switch (t) {
      case ZB:
        return jg(e);
      case HB:
      case zB:
        return new n(+e);
      case JB:
        return FB(e, r);
      case QB:
      case eU:
      case tU:
      case rU:
      case nU:
      case aU:
      case oU:
      case iU:
      case sU:
        return WB(e, r);
      case VB:
        return new n();
      case GB:
      case qB:
        return new n(e);
      case YB:
        return BB(e);
      case KB:
        return new n();
      case XB:
        return UB(e);
    }
  }
  var E1 = Object.create,
    lU = (function () {
      function e() {}
      return function (t) {
        if (!Cs(t)) return {};
        if (E1) return E1(t);
        e.prototype = t;
        var r = new e();
        return (e.prototype = void 0), r;
      };
    })();
  const uU = lU;
  function fU(e) {
    return typeof e.constructor == "function" && !Dg(e) ? uU(Rg(e)) : {};
  }
  var dU = "[object Map]";
  function hU(e) {
    return _a(e) && Fg(e) == dU;
  }
  var x1 = ko && ko.isMap,
    vU = x1 ? Mg(x1) : hU;
  const pU = vU;
  var mU = "[object Set]";
  function gU(e) {
    return _a(e) && Fg(e) == mU;
  }
  var T1 = ko && ko.isSet,
    yU = T1 ? Mg(T1) : gU;
  const bU = yU;
  var $U = 1,
    wU = 2,
    SU = 4,
    uO = "[object Arguments]",
    EU = "[object Array]",
    xU = "[object Boolean]",
    TU = "[object Date]",
    CU = "[object Error]",
    fO = "[object Function]",
    OU = "[object GeneratorFunction]",
    _U = "[object Map]",
    PU = "[object Number]",
    dO = "[object Object]",
    IU = "[object RegExp]",
    AU = "[object Set]",
    RU = "[object String]",
    MU = "[object Symbol]",
    DU = "[object WeakMap]",
    NU = "[object ArrayBuffer]",
    kU = "[object DataView]",
    LU = "[object Float32Array]",
    FU = "[object Float64Array]",
    jU = "[object Int8Array]",
    BU = "[object Int16Array]",
    UU = "[object Int32Array]",
    WU = "[object Uint8Array]",
    HU = "[object Uint8ClampedArray]",
    zU = "[object Uint16Array]",
    VU = "[object Uint32Array]",
    Oe = {};
  Oe[uO] =
    Oe[EU] =
    Oe[NU] =
    Oe[kU] =
    Oe[xU] =
    Oe[TU] =
    Oe[LU] =
    Oe[FU] =
    Oe[jU] =
    Oe[BU] =
    Oe[UU] =
    Oe[_U] =
    Oe[PU] =
    Oe[dO] =
    Oe[IU] =
    Oe[AU] =
    Oe[RU] =
    Oe[MU] =
    Oe[WU] =
    Oe[HU] =
    Oe[zU] =
    Oe[VU] =
      !0;
  Oe[CU] = Oe[fO] = Oe[DU] = !1;
  function sl(e, t, r, n, a, o) {
    var i,
      s = t & $U,
      c = t & wU,
      l = t & SU;
    if ((r && (i = a ? r(e, n, a, o) : r(e)), i !== void 0)) return i;
    if (!Cs(e)) return e;
    var u = Os(e);
    if (u) {
      if (((i = kB(e)), !s)) return oO(e, i);
    } else {
      var f = Fg(e),
        d = f == fO || f == OU;
      if (QC(e)) return hB(e, s);
      if (f == dO || f == uO || (d && !a)) {
        if (((i = c || d ? {} : fU(e)), !s)) return c ? wB(e, fB(i, e)) : yB(e, iB(i, e));
      } else {
        if (!Oe[f]) return a ? e : {};
        i = cU(e, f, s);
      }
    }
    o || (o = new Zo());
    var v = o.get(e);
    if (v) return v;
    o.set(e, i),
      bU(e)
        ? e.forEach(function (g) {
            i.add(sl(g, t, r, g, e, o));
          })
        : pU(e) &&
          e.forEach(function (g, y) {
            i.set(y, sl(g, t, r, y, e, o));
          });
    var p = l ? (c ? EB : SB) : c ? kg : Ng,
      m = u ? void 0 : p(e);
    return (
      aj(m || e, function (g, y) {
        m && ((y = g), (g = e[y])), XC(i, y, sl(g, t, r, y, e, o));
      }),
      i
    );
  }
  var GU = 4;
  function C1(e) {
    return sl(e, GU);
  }
  function hO(e, t) {
    for (var r = -1, n = e == null ? 0 : e.length, a = Array(n); ++r < n; ) a[r] = t(e[r], r, e);
    return a;
  }
  var YU = "[object Symbol]";
  function Bg(e) {
    return typeof e == "symbol" || (_a(e) && Oa(e) == YU);
  }
  var KU = "Expected a function";
  function Ug(e, t) {
    if (typeof e != "function" || (t != null && typeof t != "function")) throw new TypeError(KU);
    var r = function () {
      var n = arguments,
        a = t ? t.apply(this, n) : n[0],
        o = r.cache;
      if (o.has(a)) return o.get(a);
      var i = e.apply(this, n);
      return (r.cache = o.set(a, i) || o), i;
    };
    return (r.cache = new (Ug.Cache || Ln)()), r;
  }
  Ug.Cache = Ln;
  var qU = 500;
  function XU(e) {
    var t = Ug(e, function (n) {
        return r.size === qU && r.clear(), n;
      }),
      r = t.cache;
    return t;
  }
  var ZU = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    JU = /\\(\\)?/g,
    QU = XU(function (e) {
      var t = [];
      return (
        e.charCodeAt(0) === 46 && t.push(""),
        e.replace(ZU, function (r, n, a, o) {
          t.push(a ? o.replace(JU, "$1") : n || r);
        }),
        t
      );
    });
  const eW = QU;
  var tW = 1 / 0;
  function rW(e) {
    if (typeof e == "string" || Bg(e)) return e;
    var t = e + "";
    return t == "0" && 1 / e == -tW ? "-0" : t;
  }
  var nW = 1 / 0,
    O1 = An ? An.prototype : void 0,
    _1 = O1 ? O1.toString : void 0;
  function vO(e) {
    if (typeof e == "string") return e;
    if (Os(e)) return hO(e, vO) + "";
    if (Bg(e)) return _1 ? _1.call(e) : "";
    var t = e + "";
    return t == "0" && 1 / e == -nW ? "-0" : t;
  }
  function aW(e) {
    return e == null ? "" : vO(e);
  }
  function pO(e) {
    return Os(e) ? hO(e, rW) : Bg(e) ? [e] : oO(eW(aW(e)));
  }
  function Ae() {
    return (
      (Ae =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
      Ae.apply(this, arguments)
    );
  }
  function ho(e, t) {
    if (e == null) return {};
    var r = {},
      n = Object.keys(e),
      a,
      o;
    for (o = 0; o < n.length; o++) (a = n[o]), !(t.indexOf(a) >= 0) && (r[a] = e[a]);
    return r;
  }
  var nf = h.createContext(void 0);
  nf.displayName = "FormikContext";
  var oW = nf.Provider;
  nf.Consumer;
  function mO() {
    var e = h.useContext(nf);
    return e || cF(!1), e;
  }
  var Mt = function (t) {
      return typeof t == "function";
    },
    af = function (t) {
      return t !== null && typeof t == "object";
    },
    iW = function (t) {
      return String(Math.floor(Number(t))) === t;
    },
    Kd = function (t) {
      return Object.prototype.toString.call(t) === "[object String]";
    },
    sW = function (t) {
      return h.Children.count(t) === 0;
    },
    qd = function (t) {
      return af(t) && Mt(t.then);
    };
  function Rt(e, t, r, n) {
    n === void 0 && (n = 0);
    for (var a = pO(t); e && n < a.length; ) e = e[a[n++]];
    return (n !== a.length && !e) || e === void 0 ? r : e;
  }
  function aa(e, t, r) {
    for (var n = C1(e), a = n, o = 0, i = pO(t); o < i.length - 1; o++) {
      var s = i[o],
        c = Rt(e, i.slice(0, o + 1));
      if (c && (af(c) || Array.isArray(c))) a = a[s] = C1(c);
      else {
        var l = i[o + 1];
        a = a[s] = iW(l) && Number(l) >= 0 ? [] : {};
      }
    }
    return (o === 0 ? e : a)[i[o]] === r ? e : (r === void 0 ? delete a[i[o]] : (a[i[o]] = r), o === 0 && r === void 0 && delete n[i[o]], n);
  }
  function gO(e, t, r, n) {
    r === void 0 && (r = new WeakMap()), n === void 0 && (n = {});
    for (var a = 0, o = Object.keys(e); a < o.length; a++) {
      var i = o[a],
        s = e[i];
      af(s) ? r.get(s) || (r.set(s, !0), (n[i] = Array.isArray(s) ? [] : {}), gO(s, t, r, n[i])) : (n[i] = t);
    }
    return n;
  }
  function cW(e, t) {
    switch (t.type) {
      case "SET_VALUES":
        return Ae({}, e, { values: t.payload });
      case "SET_TOUCHED":
        return Ae({}, e, { touched: t.payload });
      case "SET_ERRORS":
        return Zn(e.errors, t.payload) ? e : Ae({}, e, { errors: t.payload });
      case "SET_STATUS":
        return Ae({}, e, { status: t.payload });
      case "SET_ISSUBMITTING":
        return Ae({}, e, { isSubmitting: t.payload });
      case "SET_ISVALIDATING":
        return Ae({}, e, { isValidating: t.payload });
      case "SET_FIELD_VALUE":
        return Ae({}, e, { values: aa(e.values, t.payload.field, t.payload.value) });
      case "SET_FIELD_TOUCHED":
        return Ae({}, e, { touched: aa(e.touched, t.payload.field, t.payload.value) });
      case "SET_FIELD_ERROR":
        return Ae({}, e, { errors: aa(e.errors, t.payload.field, t.payload.value) });
      case "RESET_FORM":
        return Ae({}, e, t.payload);
      case "SET_FORMIK_STATE":
        return t.payload(e);
      case "SUBMIT_ATTEMPT":
        return Ae({}, e, { touched: gO(e.values, !0), isSubmitting: !0, submitCount: e.submitCount + 1 });
      case "SUBMIT_FAILURE":
        return Ae({}, e, { isSubmitting: !1 });
      case "SUBMIT_SUCCESS":
        return Ae({}, e, { isSubmitting: !1 });
      default:
        return e;
    }
  }
  var Gn = {},
    dc = {};
  function lW(e) {
    var t = e.validateOnChange,
      r = t === void 0 ? !0 : t,
      n = e.validateOnBlur,
      a = n === void 0 ? !0 : n,
      o = e.validateOnMount,
      i = o === void 0 ? !1 : o,
      s = e.isInitialValid,
      c = e.enableReinitialize,
      l = c === void 0 ? !1 : c,
      u = e.onSubmit,
      f = ho(e, ["validateOnChange", "validateOnBlur", "validateOnMount", "isInitialValid", "enableReinitialize", "onSubmit"]),
      d = Ae({ validateOnChange: r, validateOnBlur: a, validateOnMount: i, onSubmit: u }, f),
      v = h.useRef(d.initialValues),
      p = h.useRef(d.initialErrors || Gn),
      m = h.useRef(d.initialTouched || dc),
      g = h.useRef(d.initialStatus),
      y = h.useRef(!1),
      b = h.useRef({});
    h.useEffect(function () {
      return (
        (y.current = !0),
        function () {
          y.current = !1;
        }
      );
    }, []);
    var $ = h.useState(0),
      S = $[1],
      A = h.useRef({ values: d.initialValues, errors: d.initialErrors || Gn, touched: d.initialTouched || dc, status: d.initialStatus, isSubmitting: !1, isValidating: !1, submitCount: 0 }),
      P = A.current,
      M = h.useCallback(function (U) {
        var re = A.current;
        (A.current = cW(re, U)),
          re !== A.current &&
            S(function (ae) {
              return ae + 1;
            });
      }, []),
      T = h.useCallback(
        function (U, re) {
          return new Promise(function (ae, ce) {
            var fe = d.validate(U, re);
            fe == null
              ? ae(Gn)
              : qd(fe)
              ? fe.then(
                  function (me) {
                    ae(me || Gn);
                  },
                  function (me) {
                    ce(me);
                  }
                )
              : ae(fe);
          });
        },
        [d.validate]
      ),
      F = h.useCallback(
        function (U, re) {
          var ae = d.validationSchema,
            ce = Mt(ae) ? ae(re) : ae,
            fe = re && ce.validateAt ? ce.validateAt(re, U) : dW(U, ce);
          return new Promise(function (me, Te) {
            fe.then(
              function () {
                me(Gn);
              },
              function (dt) {
                dt.name === "ValidationError" ? me(fW(dt)) : Te(dt);
              }
            );
          });
        },
        [d.validationSchema]
      ),
      k = h.useCallback(function (U, re) {
        return new Promise(function (ae) {
          return ae(b.current[U].validate(re));
        });
      }, []),
      D = h.useCallback(
        function (U) {
          var re = Object.keys(b.current).filter(function (ce) {
              return Mt(b.current[ce].validate);
            }),
            ae =
              re.length > 0
                ? re.map(function (ce) {
                    return k(ce, Rt(U, ce));
                  })
                : [Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];
          return Promise.all(ae).then(function (ce) {
            return ce.reduce(function (fe, me, Te) {
              return me === "DO_NOT_DELETE_YOU_WILL_BE_FIRED" || (me && (fe = aa(fe, re[Te], me))), fe;
            }, {});
          });
        },
        [k]
      ),
      _ = h.useCallback(
        function (U) {
          return Promise.all([D(U), d.validationSchema ? F(U) : {}, d.validate ? T(U) : {}]).then(function (re) {
            var ae = re[0],
              ce = re[1],
              fe = re[2],
              me = yp.all([ae, ce, fe], { arrayMerge: hW });
            return me;
          });
        },
        [d.validate, d.validationSchema, D, T, F]
      ),
      O = Bt(function (U) {
        return (
          U === void 0 && (U = P.values),
          M({ type: "SET_ISVALIDATING", payload: !0 }),
          _(U).then(function (re) {
            return y.current && (M({ type: "SET_ISVALIDATING", payload: !1 }), M({ type: "SET_ERRORS", payload: re })), re;
          })
        );
      });
    h.useEffect(
      function () {
        i && y.current === !0 && Zn(v.current, d.initialValues) && O(v.current);
      },
      [i, O]
    );
    var w = h.useCallback(
      function (U) {
        var re = U && U.values ? U.values : v.current,
          ae = U && U.errors ? U.errors : p.current ? p.current : d.initialErrors || {},
          ce = U && U.touched ? U.touched : m.current ? m.current : d.initialTouched || {},
          fe = U && U.status ? U.status : g.current ? g.current : d.initialStatus;
        (v.current = re), (p.current = ae), (m.current = ce), (g.current = fe);
        var me = function () {
          M({
            type: "RESET_FORM",
            payload: {
              isSubmitting: !!U && !!U.isSubmitting,
              errors: ae,
              touched: ce,
              status: fe,
              values: re,
              isValidating: !!U && !!U.isValidating,
              submitCount: U && U.submitCount && typeof U.submitCount == "number" ? U.submitCount : 0,
            },
          });
        };
        if (d.onReset) {
          var Te = d.onReset(P.values, ne);
          qd(Te) ? Te.then(me) : me();
        } else me();
      },
      [d.initialErrors, d.initialStatus, d.initialTouched, d.onReset]
    );
    h.useEffect(
      function () {
        y.current === !0 && !Zn(v.current, d.initialValues) && l && ((v.current = d.initialValues), w(), i && O(v.current));
      },
      [l, d.initialValues, w, i, O]
    ),
      h.useEffect(
        function () {
          l && y.current === !0 && !Zn(p.current, d.initialErrors) && ((p.current = d.initialErrors || Gn), M({ type: "SET_ERRORS", payload: d.initialErrors || Gn }));
        },
        [l, d.initialErrors]
      ),
      h.useEffect(
        function () {
          l && y.current === !0 && !Zn(m.current, d.initialTouched) && ((m.current = d.initialTouched || dc), M({ type: "SET_TOUCHED", payload: d.initialTouched || dc }));
        },
        [l, d.initialTouched]
      ),
      h.useEffect(
        function () {
          l && y.current === !0 && !Zn(g.current, d.initialStatus) && ((g.current = d.initialStatus), M({ type: "SET_STATUS", payload: d.initialStatus }));
        },
        [l, d.initialStatus, d.initialTouched]
      );
    var R = Bt(function (U) {
        if (b.current[U] && Mt(b.current[U].validate)) {
          var re = Rt(P.values, U),
            ae = b.current[U].validate(re);
          return qd(ae)
            ? (M({ type: "SET_ISVALIDATING", payload: !0 }),
              ae
                .then(function (ce) {
                  return ce;
                })
                .then(function (ce) {
                  M({ type: "SET_FIELD_ERROR", payload: { field: U, value: ce } }), M({ type: "SET_ISVALIDATING", payload: !1 });
                }))
            : (M({ type: "SET_FIELD_ERROR", payload: { field: U, value: ae } }), Promise.resolve(ae));
        } else if (d.validationSchema)
          return (
            M({ type: "SET_ISVALIDATING", payload: !0 }),
            F(P.values, U)
              .then(function (ce) {
                return ce;
              })
              .then(function (ce) {
                M({ type: "SET_FIELD_ERROR", payload: { field: U, value: Rt(ce, U) } }), M({ type: "SET_ISVALIDATING", payload: !1 });
              })
          );
        return Promise.resolve();
      }),
      I = h.useCallback(function (U, re) {
        var ae = re.validate;
        b.current[U] = { validate: ae };
      }, []),
      N = h.useCallback(function (U) {
        delete b.current[U];
      }, []),
      B = Bt(function (U, re) {
        M({ type: "SET_TOUCHED", payload: U });
        var ae = re === void 0 ? a : re;
        return ae ? O(P.values) : Promise.resolve();
      }),
      W = h.useCallback(function (U) {
        M({ type: "SET_ERRORS", payload: U });
      }, []),
      C = Bt(function (U, re) {
        var ae = Mt(U) ? U(P.values) : U;
        M({ type: "SET_VALUES", payload: ae });
        var ce = re === void 0 ? r : re;
        return ce ? O(ae) : Promise.resolve();
      }),
      E = h.useCallback(function (U, re) {
        M({ type: "SET_FIELD_ERROR", payload: { field: U, value: re } });
      }, []),
      V = Bt(function (U, re, ae) {
        M({ type: "SET_FIELD_VALUE", payload: { field: U, value: re } });
        var ce = ae === void 0 ? r : ae;
        return ce ? O(aa(P.values, U, re)) : Promise.resolve();
      }),
      X = h.useCallback(
        function (U, re) {
          var ae = re,
            ce = U,
            fe;
          if (!Kd(U)) {
            U.persist && U.persist();
            var me = U.target ? U.target : U.currentTarget,
              Te = me.type,
              dt = me.name,
              mr = me.id,
              gr = me.value,
              ie = me.checked,
              ve = me.outerHTML,
              yr = me.options,
              it = me.multiple;
            (ae = re || dt || mr), (ce = /number|range/.test(Te) ? ((fe = parseFloat(gr)), isNaN(fe) ? "" : fe) : /checkbox/.test(Te) ? pW(Rt(P.values, ae), ie, gr) : yr && it ? vW(yr) : gr);
          }
          ae && V(ae, ce);
        },
        [V, P.values]
      ),
      q = Bt(function (U) {
        if (Kd(U))
          return function (re) {
            return X(re, U);
          };
        X(U);
      }),
      K = Bt(function (U, re, ae) {
        re === void 0 && (re = !0), M({ type: "SET_FIELD_TOUCHED", payload: { field: U, value: re } });
        var ce = ae === void 0 ? a : ae;
        return ce ? O(P.values) : Promise.resolve();
      }),
      te = h.useCallback(
        function (U, re) {
          U.persist && U.persist();
          var ae = U.target,
            ce = ae.name,
            fe = ae.id,
            me = ae.outerHTML,
            Te = re || ce || fe;
          K(Te, !0);
        },
        [K]
      ),
      z = Bt(function (U) {
        if (Kd(U))
          return function (re) {
            return te(re, U);
          };
        te(U);
      }),
      J = h.useCallback(function (U) {
        Mt(U)
          ? M({ type: "SET_FORMIK_STATE", payload: U })
          : M({
              type: "SET_FORMIK_STATE",
              payload: function () {
                return U;
              },
            });
      }, []),
      H = h.useCallback(function (U) {
        M({ type: "SET_STATUS", payload: U });
      }, []),
      G = h.useCallback(function (U) {
        M({ type: "SET_ISSUBMITTING", payload: U });
      }, []),
      Y = Bt(function () {
        return (
          M({ type: "SUBMIT_ATTEMPT" }),
          O().then(function (U) {
            var re = U instanceof Error,
              ae = !re && Object.keys(U).length === 0;
            if (ae) {
              var ce;
              try {
                if (((ce = Z()), ce === void 0)) return;
              } catch (fe) {
                throw fe;
              }
              return Promise.resolve(ce)
                .then(function (fe) {
                  return y.current && M({ type: "SUBMIT_SUCCESS" }), fe;
                })
                .catch(function (fe) {
                  if (y.current) throw (M({ type: "SUBMIT_FAILURE" }), fe);
                });
            } else if (y.current && (M({ type: "SUBMIT_FAILURE" }), re)) throw U;
          })
        );
      }),
      L = Bt(function (U) {
        U && U.preventDefault && Mt(U.preventDefault) && U.preventDefault(), U && U.stopPropagation && Mt(U.stopPropagation) && U.stopPropagation(), Y().catch(function (re) {});
      }),
      ne = {
        resetForm: w,
        validateForm: O,
        validateField: R,
        setErrors: W,
        setFieldError: E,
        setFieldTouched: K,
        setFieldValue: V,
        setStatus: H,
        setSubmitting: G,
        setTouched: B,
        setValues: C,
        setFormikState: J,
        submitForm: Y,
      },
      Z = Bt(function () {
        return u(P.values, ne);
      }),
      Q = Bt(function (U) {
        U && U.preventDefault && Mt(U.preventDefault) && U.preventDefault(), U && U.stopPropagation && Mt(U.stopPropagation) && U.stopPropagation(), w();
      }),
      le = h.useCallback(
        function (U) {
          return { value: Rt(P.values, U), error: Rt(P.errors, U), touched: !!Rt(P.touched, U), initialValue: Rt(v.current, U), initialTouched: !!Rt(m.current, U), initialError: Rt(p.current, U) };
        },
        [P.errors, P.touched, P.values]
      ),
      he = h.useCallback(
        function (U) {
          return {
            setValue: function (ae, ce) {
              return V(U, ae, ce);
            },
            setTouched: function (ae, ce) {
              return K(U, ae, ce);
            },
            setError: function (ae) {
              return E(U, ae);
            },
          };
        },
        [V, K, E]
      ),
      $e = h.useCallback(
        function (U) {
          var re = af(U),
            ae = re ? U.name : U,
            ce = Rt(P.values, ae),
            fe = { name: ae, value: ce, onChange: q, onBlur: z };
          if (re) {
            var me = U.type,
              Te = U.value,
              dt = U.as,
              mr = U.multiple;
            me === "checkbox"
              ? Te === void 0
                ? (fe.checked = !!ce)
                : ((fe.checked = !!(Array.isArray(ce) && ~ce.indexOf(Te))), (fe.value = Te))
              : me === "radio"
              ? ((fe.checked = ce === Te), (fe.value = Te))
              : dt === "select" && mr && ((fe.value = fe.value || []), (fe.multiple = !0));
          }
          return fe;
        },
        [z, q, P.values]
      ),
      He = h.useMemo(
        function () {
          return !Zn(v.current, P.values);
        },
        [v.current, P.values]
      ),
      Se = h.useMemo(
        function () {
          return typeof s < "u" ? (He ? P.errors && Object.keys(P.errors).length === 0 : s !== !1 && Mt(s) ? s(d) : s) : P.errors && Object.keys(P.errors).length === 0;
        },
        [s, He, P.errors, d]
      ),
      Xe = Ae({}, P, {
        initialValues: v.current,
        initialErrors: p.current,
        initialTouched: m.current,
        initialStatus: g.current,
        handleBlur: z,
        handleChange: q,
        handleReset: Q,
        handleSubmit: L,
        resetForm: w,
        setErrors: W,
        setFormikState: J,
        setFieldTouched: K,
        setFieldValue: V,
        setFieldError: E,
        setStatus: H,
        setSubmitting: G,
        setTouched: B,
        setValues: C,
        submitForm: Y,
        validateForm: O,
        validateField: R,
        isValid: Se,
        dirty: He,
        unregisterField: N,
        registerField: I,
        getFieldProps: $e,
        getFieldMeta: le,
        getFieldHelpers: he,
        validateOnBlur: a,
        validateOnChange: r,
        validateOnMount: i,
      });
    return Xe;
  }
  function uW(e) {
    var t = lW(e),
      r = e.component,
      n = e.children,
      a = e.render,
      o = e.innerRef;
    return (
      h.useImperativeHandle(o, function () {
        return t;
      }),
      h.createElement(oW, { value: t }, r ? h.createElement(r, t) : a ? a(t) : n ? (Mt(n) ? n(t) : sW(n) ? null : h.Children.only(n)) : null)
    );
  }
  function fW(e) {
    var t = {};
    if (e.inner) {
      if (e.inner.length === 0) return aa(t, e.path, e.message);
      for (var a = e.inner, r = Array.isArray(a), n = 0, a = r ? a : a[Symbol.iterator](); ; ) {
        var o;
        if (r) {
          if (n >= a.length) break;
          o = a[n++];
        } else {
          if (((n = a.next()), n.done)) break;
          o = n.value;
        }
        var i = o;
        Rt(t, i.path) || (t = aa(t, i.path, i.message));
      }
    }
    return t;
  }
  function dW(e, t, r, n) {
    r === void 0 && (r = !1);
    var a = xp(e);
    return t[r ? "validateSync" : "validate"](a, { abortEarly: !1, context: n || a });
  }
  function xp(e) {
    var t = Array.isArray(e) ? [] : {};
    for (var r in e)
      if (Object.prototype.hasOwnProperty.call(e, r)) {
        var n = String(r);
        Array.isArray(e[n]) === !0
          ? (t[n] = e[n].map(function (a) {
              return Array.isArray(a) === !0 || r1(a) ? xp(a) : a !== "" ? a : void 0;
            }))
          : r1(e[n])
          ? (t[n] = xp(e[n]))
          : (t[n] = e[n] !== "" ? e[n] : void 0);
      }
    return t;
  }
  function hW(e, t, r) {
    var n = e.slice();
    return (
      t.forEach(function (o, i) {
        if (typeof n[i] > "u") {
          var s = r.clone !== !1,
            c = s && r.isMergeableObject(o);
          n[i] = c ? yp(Array.isArray(o) ? [] : {}, o, r) : o;
        } else r.isMergeableObject(o) ? (n[i] = yp(e[i], o, r)) : e.indexOf(o) === -1 && n.push(o);
      }),
      n
    );
  }
  function vW(e) {
    return Array.from(e)
      .filter(function (t) {
        return t.selected;
      })
      .map(function (t) {
        return t.value;
      });
  }
  function pW(e, t, r) {
    if (typeof e == "boolean") return !!t;
    var n = [],
      a = !1,
      o = -1;
    if (Array.isArray(e)) (n = e), (o = e.indexOf(r)), (a = o >= 0);
    else if (!r || r == "true" || r == "false") return !!t;
    return t && r && !a ? n.concat(r) : a ? n.slice(0, o).concat(n.slice(o + 1)) : n;
  }
  var mW = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? h.useLayoutEffect : h.useEffect;
  function Bt(e) {
    var t = h.useRef(e);
    return (
      mW(function () {
        t.current = e;
      }),
      h.useCallback(function () {
        for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++) n[a] = arguments[a];
        return t.current.apply(void 0, n);
      }, [])
    );
  }
  function gW(e) {
    var t = e.validate,
      r = e.name,
      n = e.render,
      a = e.children,
      o = e.as,
      i = e.component,
      s = e.className,
      c = ho(e, ["validate", "name", "render", "children", "as", "component", "className"]),
      l = mO(),
      u = ho(l, ["validate", "validationSchema"]),
      f = u.registerField,
      d = u.unregisterField;
    h.useEffect(
      function () {
        return (
          f(r, { validate: t }),
          function () {
            d(r);
          }
        );
      },
      [f, d, r, t]
    );
    var v = u.getFieldProps(Ae({ name: r }, c)),
      p = u.getFieldMeta(r),
      m = { field: v, form: u };
    if (n) return n(Ae({}, m, { meta: p }));
    if (Mt(a)) return a(Ae({}, m, { meta: p }));
    if (i) {
      if (typeof i == "string") {
        var g = c.innerRef,
          y = ho(c, ["innerRef"]);
        return h.createElement(i, Ae({ ref: g }, v, y, { className: s }), a);
      }
      return h.createElement(i, Ae({ field: v, form: u }, c, { className: s }), a);
    }
    var b = o || "input";
    if (typeof b == "string") {
      var $ = c.innerRef,
        S = ho(c, ["innerRef"]);
      return h.createElement(b, Ae({ ref: $ }, v, S, { className: s }), a);
    }
    return h.createElement(b, Ae({}, v, c, { className: s }), a);
  }
  var yO = h.forwardRef(function (e, t) {
    var r = e.action,
      n = ho(e, ["action"]),
      a = r ?? "#",
      o = mO(),
      i = o.handleReset,
      s = o.handleSubmit;
    return h.createElement("form", Ae({ onSubmit: s, ref: t, onReset: i, action: a }, n));
  });
  yO.displayName = "Form";
  var Wg = {};
  (function e(t, r, n, a) {
    var o = !!(
        t.Worker &&
        t.Blob &&
        t.Promise &&
        t.OffscreenCanvas &&
        t.OffscreenCanvasRenderingContext2D &&
        t.HTMLCanvasElement &&
        t.HTMLCanvasElement.prototype.transferControlToOffscreen &&
        t.URL &&
        t.URL.createObjectURL
      ),
      i = typeof Path2D == "function" && typeof DOMMatrix == "function",
      s = (function () {
        if (!t.OffscreenCanvas) return !1;
        var C = new OffscreenCanvas(1, 1),
          E = C.getContext("2d");
        E.fillRect(0, 0, 1, 1);
        var V = C.transferToImageBitmap();
        try {
          E.createPattern(V, "no-repeat");
        } catch {
          return !1;
        }
        return !0;
      })();
    function c() {}
    function l(C) {
      var E = r.exports.Promise,
        V = E !== void 0 ? E : t.Promise;
      return typeof V == "function" ? new V(C) : (C(c, c), null);
    }
    var u = (function (C, E) {
        return {
          transform: function (V) {
            if (C) return V;
            if (E.has(V)) return E.get(V);
            var X = new OffscreenCanvas(V.width, V.height),
              q = X.getContext("2d");
            return q.drawImage(V, 0, 0), E.set(V, X), X;
          },
          clear: function () {
            E.clear();
          },
        };
      })(s, new Map()),
      f = (function () {
        var C = Math.floor(16.666666666666668),
          E,
          V,
          X = {},
          q = 0;
        return (
          typeof requestAnimationFrame == "function" && typeof cancelAnimationFrame == "function"
            ? ((E = function (K) {
                var te = Math.random();
                return (
                  (X[te] = requestAnimationFrame(function z(J) {
                    q === J || q + C - 1 < J ? ((q = J), delete X[te], K()) : (X[te] = requestAnimationFrame(z));
                  })),
                  te
                );
              }),
              (V = function (K) {
                X[K] && cancelAnimationFrame(X[K]);
              }))
            : ((E = function (K) {
                return setTimeout(K, C);
              }),
              (V = function (K) {
                return clearTimeout(K);
              })),
          { frame: E, cancel: V }
        );
      })(),
      d = (function () {
        var C,
          E,
          V = {};
        function X(q) {
          function K(te, z) {
            q.postMessage({ options: te || {}, callback: z });
          }
          (q.init = function (z) {
            var J = z.transferControlToOffscreen();
            q.postMessage({ canvas: J }, [J]);
          }),
            (q.fire = function (z, J, H) {
              if (E) return K(z, null), E;
              var G = Math.random().toString(36).slice(2);
              return (
                (E = l(function (Y) {
                  function L(ne) {
                    ne.data.callback === G && (delete V[G], q.removeEventListener("message", L), (E = null), u.clear(), H(), Y());
                  }
                  q.addEventListener("message", L), K(z, G), (V[G] = L.bind(null, { data: { callback: G } }));
                })),
                E
              );
            }),
            (q.reset = function () {
              q.postMessage({ reset: !0 });
              for (var z in V) V[z](), delete V[z];
            });
        }
        return function () {
          if (C) return C;
          if (!n && o) {
            var q = [
              "var CONFETTI, SIZE = {}, module = {};",
              "(" + e.toString() + ")(this, module, true, SIZE);",
              "onmessage = function(msg) {",
              "  if (msg.data.options) {",
              "    CONFETTI(msg.data.options).then(function () {",
              "      if (msg.data.callback) {",
              "        postMessage({ callback: msg.data.callback });",
              "      }",
              "    });",
              "  } else if (msg.data.reset) {",
              "    CONFETTI && CONFETTI.reset();",
              "  } else if (msg.data.resize) {",
              "    SIZE.width = msg.data.resize.width;",
              "    SIZE.height = msg.data.resize.height;",
              "  } else if (msg.data.canvas) {",
              "    SIZE.width = msg.data.canvas.width;",
              "    SIZE.height = msg.data.canvas.height;",
              "    CONFETTI = module.exports.create(msg.data.canvas);",
              "  }",
              "}",
            ].join(`
`);
            try {
              C = new Worker(URL.createObjectURL(new Blob([q])));
            } catch {
              return null;
            }
            X(C);
          }
          return C;
        };
      })(),
      v = {
        particleCount: 50,
        angle: 90,
        spread: 45,
        startVelocity: 45,
        decay: 0.9,
        gravity: 1,
        drift: 0,
        ticks: 200,
        x: 0.5,
        y: 0.5,
        shapes: ["square", "circle"],
        zIndex: 100,
        colors: ["#26ccff", "#a25afd", "#ff5e7e", "#88ff5a", "#fcff42", "#ffa62d", "#ff36ff"],
        disableForReducedMotion: !1,
        scalar: 1,
      };
    function p(C, E) {
      return E ? E(C) : C;
    }
    function m(C) {
      return C != null;
    }
    function g(C, E, V) {
      return p(C && m(C[E]) ? C[E] : v[E], V);
    }
    function y(C) {
      return C < 0 ? 0 : Math.floor(C);
    }
    function b(C, E) {
      return Math.floor(Math.random() * (E - C)) + C;
    }
    function $(C) {
      return parseInt(C, 16);
    }
    function S(C) {
      return C.map(A);
    }
    function A(C) {
      var E = String(C).replace(/[^0-9a-f]/gi, "");
      return E.length < 6 && (E = E[0] + E[0] + E[1] + E[1] + E[2] + E[2]), { r: $(E.substring(0, 2)), g: $(E.substring(2, 4)), b: $(E.substring(4, 6)) };
    }
    function P(C) {
      var E = g(C, "origin", Object);
      return (E.x = g(E, "x", Number)), (E.y = g(E, "y", Number)), E;
    }
    function M(C) {
      (C.width = document.documentElement.clientWidth), (C.height = document.documentElement.clientHeight);
    }
    function T(C) {
      var E = C.getBoundingClientRect();
      (C.width = E.width), (C.height = E.height);
    }
    function F(C) {
      var E = document.createElement("canvas");
      return (E.style.position = "fixed"), (E.style.top = "0px"), (E.style.left = "0px"), (E.style.pointerEvents = "none"), (E.style.zIndex = C), E;
    }
    function k(C, E, V, X, q, K, te, z, J) {
      C.save(), C.translate(E, V), C.rotate(K), C.scale(X, q), C.arc(0, 0, 1, te, z, J), C.restore();
    }
    function D(C) {
      var E = C.angle * (Math.PI / 180),
        V = C.spread * (Math.PI / 180);
      return {
        x: C.x,
        y: C.y,
        wobble: Math.random() * 10,
        wobbleSpeed: Math.min(0.11, Math.random() * 0.1 + 0.05),
        velocity: C.startVelocity * 0.5 + Math.random() * C.startVelocity,
        angle2D: -E + (0.5 * V - Math.random() * V),
        tiltAngle: (Math.random() * (0.75 - 0.25) + 0.25) * Math.PI,
        color: C.color,
        shape: C.shape,
        tick: 0,
        totalTicks: C.ticks,
        decay: C.decay,
        drift: C.drift,
        random: Math.random() + 2,
        tiltSin: 0,
        tiltCos: 0,
        wobbleX: 0,
        wobbleY: 0,
        gravity: C.gravity * 3,
        ovalScalar: 0.6,
        scalar: C.scalar,
        flat: C.flat,
      };
    }
    function _(C, E) {
      (E.x += Math.cos(E.angle2D) * E.velocity + E.drift),
        (E.y += Math.sin(E.angle2D) * E.velocity + E.gravity),
        (E.velocity *= E.decay),
        E.flat
          ? ((E.wobble = 0), (E.wobbleX = E.x + 10 * E.scalar), (E.wobbleY = E.y + 10 * E.scalar), (E.tiltSin = 0), (E.tiltCos = 0), (E.random = 1))
          : ((E.wobble += E.wobbleSpeed),
            (E.wobbleX = E.x + 10 * E.scalar * Math.cos(E.wobble)),
            (E.wobbleY = E.y + 10 * E.scalar * Math.sin(E.wobble)),
            (E.tiltAngle += 0.1),
            (E.tiltSin = Math.sin(E.tiltAngle)),
            (E.tiltCos = Math.cos(E.tiltAngle)),
            (E.random = Math.random() + 2));
      var V = E.tick++ / E.totalTicks,
        X = E.x + E.random * E.tiltCos,
        q = E.y + E.random * E.tiltSin,
        K = E.wobbleX + E.random * E.tiltCos,
        te = E.wobbleY + E.random * E.tiltSin;
      if (
        ((C.fillStyle = "rgba(" + E.color.r + ", " + E.color.g + ", " + E.color.b + ", " + (1 - V) + ")"),
        C.beginPath(),
        i && E.shape.type === "path" && typeof E.shape.path == "string" && Array.isArray(E.shape.matrix))
      )
        C.fill(N(E.shape.path, E.shape.matrix, E.x, E.y, Math.abs(K - X) * 0.1, Math.abs(te - q) * 0.1, (Math.PI / 10) * E.wobble));
      else if (E.shape.type === "bitmap") {
        var z = (Math.PI / 10) * E.wobble,
          J = Math.abs(K - X) * 0.1,
          H = Math.abs(te - q) * 0.1,
          G = E.shape.bitmap.width * E.scalar,
          Y = E.shape.bitmap.height * E.scalar,
          L = new DOMMatrix([Math.cos(z) * J, Math.sin(z) * J, -Math.sin(z) * H, Math.cos(z) * H, E.x, E.y]);
        L.multiplySelf(new DOMMatrix(E.shape.matrix));
        var ne = C.createPattern(u.transform(E.shape.bitmap), "no-repeat");
        ne.setTransform(L), (C.globalAlpha = 1 - V), (C.fillStyle = ne), C.fillRect(E.x - G / 2, E.y - Y / 2, G, Y), (C.globalAlpha = 1);
      } else if (E.shape === "circle")
        C.ellipse
          ? C.ellipse(E.x, E.y, Math.abs(K - X) * E.ovalScalar, Math.abs(te - q) * E.ovalScalar, (Math.PI / 10) * E.wobble, 0, 2 * Math.PI)
          : k(C, E.x, E.y, Math.abs(K - X) * E.ovalScalar, Math.abs(te - q) * E.ovalScalar, (Math.PI / 10) * E.wobble, 0, 2 * Math.PI);
      else if (E.shape === "star")
        for (var Z = (Math.PI / 2) * 3, Q = 4 * E.scalar, le = 8 * E.scalar, he = E.x, $e = E.y, He = 5, Se = Math.PI / He; He--; )
          (he = E.x + Math.cos(Z) * le), ($e = E.y + Math.sin(Z) * le), C.lineTo(he, $e), (Z += Se), (he = E.x + Math.cos(Z) * Q), ($e = E.y + Math.sin(Z) * Q), C.lineTo(he, $e), (Z += Se);
      else C.moveTo(Math.floor(E.x), Math.floor(E.y)), C.lineTo(Math.floor(E.wobbleX), Math.floor(q)), C.lineTo(Math.floor(K), Math.floor(te)), C.lineTo(Math.floor(X), Math.floor(E.wobbleY));
      return C.closePath(), C.fill(), E.tick < E.totalTicks;
    }
    function O(C, E, V, X, q) {
      var K = E.slice(),
        te = C.getContext("2d"),
        z,
        J,
        H = l(function (G) {
          function Y() {
            (z = J = null), te.clearRect(0, 0, X.width, X.height), u.clear(), q(), G();
          }
          function L() {
            n && !(X.width === a.width && X.height === a.height) && ((X.width = C.width = a.width), (X.height = C.height = a.height)),
              !X.width && !X.height && (V(C), (X.width = C.width), (X.height = C.height)),
              te.clearRect(0, 0, X.width, X.height),
              (K = K.filter(function (ne) {
                return _(te, ne);
              })),
              K.length ? (z = f.frame(L)) : Y();
          }
          (z = f.frame(L)), (J = Y);
        });
      return {
        addFettis: function (G) {
          return (K = K.concat(G)), H;
        },
        canvas: C,
        promise: H,
        reset: function () {
          z && f.cancel(z), J && J();
        },
      };
    }
    function w(C, E) {
      var V = !C,
        X = !!g(E || {}, "resize"),
        q = !1,
        K = g(E, "disableForReducedMotion", Boolean),
        te = o && !!g(E || {}, "useWorker"),
        z = te ? d() : null,
        J = V ? M : T,
        H = C && z ? !!C.__confetti_initialized : !1,
        G = typeof matchMedia == "function" && matchMedia("(prefers-reduced-motion)").matches,
        Y;
      function L(Z, Q, le) {
        for (
          var he = g(Z, "particleCount", y),
            $e = g(Z, "angle", Number),
            He = g(Z, "spread", Number),
            Se = g(Z, "startVelocity", Number),
            Xe = g(Z, "decay", Number),
            U = g(Z, "gravity", Number),
            re = g(Z, "drift", Number),
            ae = g(Z, "colors", S),
            ce = g(Z, "ticks", Number),
            fe = g(Z, "shapes"),
            me = g(Z, "scalar"),
            Te = !!g(Z, "flat"),
            dt = P(Z),
            mr = he,
            gr = [],
            ie = C.width * dt.x,
            ve = C.height * dt.y;
          mr--;

        )
          gr.push(
            D({ x: ie, y: ve, angle: $e, spread: He, startVelocity: Se, color: ae[mr % ae.length], shape: fe[b(0, fe.length)], ticks: ce, decay: Xe, gravity: U, drift: re, scalar: me, flat: Te })
          );
        return Y ? Y.addFettis(gr) : ((Y = O(C, gr, J, Q, le)), Y.promise);
      }
      function ne(Z) {
        var Q = K || g(Z, "disableForReducedMotion", Boolean),
          le = g(Z, "zIndex", Number);
        if (Q && G)
          return l(function (Se) {
            Se();
          });
        V && Y ? (C = Y.canvas) : V && !C && ((C = F(le)), document.body.appendChild(C)), X && !H && J(C);
        var he = { width: C.width, height: C.height };
        z && !H && z.init(C), (H = !0), z && (C.__confetti_initialized = !0);
        function $e() {
          if (z) {
            var Se = {
              getBoundingClientRect: function () {
                if (!V) return C.getBoundingClientRect();
              },
            };
            J(Se), z.postMessage({ resize: { width: Se.width, height: Se.height } });
            return;
          }
          he.width = he.height = null;
        }
        function He() {
          (Y = null), X && ((q = !1), t.removeEventListener("resize", $e)), V && C && (document.body.removeChild(C), (C = null), (H = !1));
        }
        return X && !q && ((q = !0), t.addEventListener("resize", $e, !1)), z ? z.fire(Z, he, He) : L(Z, he, He);
      }
      return (
        (ne.reset = function () {
          z && z.reset(), Y && Y.reset();
        }),
        ne
      );
    }
    var R;
    function I() {
      return R || (R = w(null, { useWorker: !0, resize: !0 })), R;
    }
    function N(C, E, V, X, q, K, te) {
      var z = new Path2D(C),
        J = new Path2D();
      J.addPath(z, new DOMMatrix(E));
      var H = new Path2D();
      return H.addPath(J, new DOMMatrix([Math.cos(te) * q, Math.sin(te) * q, -Math.sin(te) * K, Math.cos(te) * K, V, X])), H;
    }
    function B(C) {
      if (!i) throw new Error("path confetti are not supported in this browser");
      var E, V;
      typeof C == "string" ? (E = C) : ((E = C.path), (V = C.matrix));
      var X = new Path2D(E),
        q = document.createElement("canvas"),
        K = q.getContext("2d");
      if (!V) {
        for (var te = 1e3, z = te, J = te, H = 0, G = 0, Y, L, ne = 0; ne < te; ne += 2)
          for (var Z = 0; Z < te; Z += 2) K.isPointInPath(X, ne, Z, "nonzero") && ((z = Math.min(z, ne)), (J = Math.min(J, Z)), (H = Math.max(H, ne)), (G = Math.max(G, Z)));
        (Y = H - z), (L = G - J);
        var Q = 10,
          le = Math.min(Q / Y, Q / L);
        V = [le, 0, 0, le, -Math.round(Y / 2 + z) * le, -Math.round(L / 2 + J) * le];
      }
      return { type: "path", path: E, matrix: V };
    }
    function W(C) {
      var E,
        V = 1,
        X = "#000000",
        q = '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';
      typeof C == "string" ? (E = C) : ((E = C.text), (V = "scalar" in C ? C.scalar : V), (q = "fontFamily" in C ? C.fontFamily : q), (X = "color" in C ? C.color : X));
      var K = 10 * V,
        te = "" + K + "px " + q,
        z = new OffscreenCanvas(K, K),
        J = z.getContext("2d");
      J.font = te;
      var H = J.measureText(E),
        G = Math.ceil(H.actualBoundingBoxRight + H.actualBoundingBoxLeft),
        Y = Math.ceil(H.actualBoundingBoxAscent + H.actualBoundingBoxDescent),
        L = 2,
        ne = H.actualBoundingBoxLeft + L,
        Z = H.actualBoundingBoxAscent + L;
      (G += L + L), (Y += L + L), (z = new OffscreenCanvas(G, Y)), (J = z.getContext("2d")), (J.font = te), (J.fillStyle = X), J.fillText(E, ne, Z);
      var Q = 1 / V;
      return { type: "bitmap", bitmap: z.transferToImageBitmap(), matrix: [Q, 0, 0, Q, (-G * Q) / 2, (-Y * Q) / 2] };
    }
    (r.exports = function () {
      return I().apply(this, arguments);
    }),
      (r.exports.reset = function () {
        I().reset();
      }),
      (r.exports.create = w),
      (r.exports.shapeFromPath = B),
      (r.exports.shapeFromText = W);
  })(
    (function () {
      return typeof window < "u" ? window : typeof self < "u" ? self : this || {};
    })(),
    Wg,
    !1
  );
  const yW = Wg.exports;
  Wg.exports.create;
  var bO = J8({
    displayName: "CloseIcon",
    d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z",
  });
  function bW() {
    const e = Q8(),
      t = h.useRef(null),
      [r, n] = h.useState(!1),
      a = Ag(Qu),
      o = (c) => {
        let l;
        return l;
      },
      i = () => {
        a((c) => ({ ...c, isEnterLicense: !1 }));
      },
      s = (c, l) => {
        if (r) return;
        const u = { licenseKey: c.license };
        n(!0),
          M8(u)
            .then((f) => {
              var v, p, m, g, y, b, $;
              let d = !1;
              (v = f == null ? void 0 : f.validResult) != null && v.valid && ((m = (p = f == null ? void 0 : f.validResult) == null ? void 0 : p.license_key) == null ? void 0 : m.test_mode) === !1
                ? ((y = (g = f == null ? void 0 : f.validResult) == null ? void 0 : g.meta) == null ? void 0 : y.store_id) === F8 &&
                  (($ = (b = f == null ? void 0 : f.validResult) == null ? void 0 : b.meta) == null ? void 0 : $.product_id) === j8 &&
                  (d = !0)
                : (d = !1),
                c.license === B8 && (d = !0),
                d
                  ? (yW({ particleCount: 100, spread: 70, origin: { y: 0.6 } }),
                    e({ title: "Success", description: "Successfully add a valid license.", status: "success", isClosable: !0, position: "top", duration: 2e3 }),
                    En({ licenseKey: c.license, isLicenseValid: !0 }),
                    i())
                  : (l.setErrors({ license: "Invalid license" }), En({ licenseKey: c.license, isLicenseValid: !1 })),
                l.setSubmitting(!1);
            })
            .finally(() => {
              n(!1);
            });
      };
    return (
      h.useEffect(() => {
        (async function () {
          var l;
          const c = await gs(["licenseKey"]);
          c != null && c.licenseKey && ((l = t.current) == null || l.setFieldValue("license", c == null ? void 0 : c.licenseKey));
        })();
      }, []),
      se("div", {
        className: "p-8 pt-4 h-full w-full bg-white shadow-md",
        children: [
          se("div", {
            className: "text-xl relative\r font-bold mt-4 mb-1",
            children: ["Empower Your Notion ✨", x(bO, { className: "absolute right-0 top-1 cursor-pointer", boxSize: 3, onClick: () => i() })],
          }),
          x(_o, { className: "mb-3", fontSize: "sm", children: "Buy once, use forever!" }),
          x(uW, {
            initialValues: {},
            onSubmit: s,
            innerRef: t,
            children: (c) =>
              se(yO, {
                children: [
                  x(gW, {
                    name: "license",
                    validate: o,
                    children: ({ field: l, form: u }) =>
                      se(Fx, { isInvalid: u.errors.license && u.touched.license, isRequired: !0, children: [x(Bx, { children: "License" }), x(ag, { ...l }), x(jx, { children: u.errors.license })] }),
                  }),
                  se("button", {
                    type: "submit",
                    className: `flex w-full justify-center items-center rounded-md bg-[#FFA700]  mt-2 px-3 py-2 text-md font-bold  text-white shadow-sm
              ${r ? "cursor-not-allowed opacity-50" : ""}
               hover:bg-[#FFA700] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-[#FFA700]`,
                    children: ["Validate License", (c == null ? void 0 : c.isSubmitting) && x(R8, { color: "#fff", size: "sm", className: "ml-2" })],
                  }),
                ],
              }),
          }),
          x(Al, { variant: "link", className: "mt-5", onClick: Ax, children: "Get a lifetime license Now?" }),
          x(_o, { className: "mt-1", fontSize: "sm", children: "The purchase is one-time; all subsequent features and updates are free of charge." }),
          x("div", { children: x(Al, { variant: "link", className: "mt-3", onClick: Mx, children: "View All Features" }) }),
        ],
      })
    );
  }
  const $W = 9,
    wW = [1, 2, 1, 1, 2, 1, 1, 1, 2];
  function $O() {
    const [e, t] = h.useState(!1),
      r = h.useRef(null),
      n = h.useRef([]);
    return (
      h.useEffect(() => {
        let a, o;
        return (
          setTimeout(() => {
            const i = document.getElementById("trigger-ele-one"),
              s = document.getElementById("trigger-ele-two");
            if (i && s) {
              (a = kl(i, "click").pipe(Nl(() => 1))), (o = kl(s, "click").pipe(Nl(() => 2)));
              const c = KM(a, o);
              r.current ||
                (r.current = c
                  .pipe(
                    qM(300),
                    XM((l) => {
                      n.current.push(l);
                      const u = n.current.slice(-9);
                      u.length === $W && u.join(",") === wW.join(",") && t(!0);
                    })
                  )
                  .subscribe());
            }
          }, 4e3),
          () => {
            var i;
            r && ((i = r.current) == null || i.unsubscribe());
          }
        );
      }, []),
      { isHiddenFeatureOn: e }
    );
  }
  function wO() {
    const [e, t] = h.useState(""),
      [r, n] = h.useState(!1),
      { isHiddenFeatureOn: a } = $O();
    return (
      h.useEffect(() => {
        chrome.storage.onChanged.addListener(function (i, s) {
          var c, l, u, f;
          (c = i == null ? void 0 : i.licenseKey) != null && c.newValue && t((l = i == null ? void 0 : i.licenseKey) == null ? void 0 : l.newValue),
            Zy((u = i == null ? void 0 : i.isLicenseValid) == null ? void 0 : u.newValue) && n((f = i == null ? void 0 : i.isLicenseValid) == null ? void 0 : f.newValue);
        }),
          gs(["licenseKey", "isLicenseValid"]).then((o) => {
            o != null && o.licenseKey && t((o == null ? void 0 : o.licenseKey) || ""), Zy(o == null ? void 0 : o.isLicenseValid) && n((o == null ? void 0 : o.isLicenseValid) || !1);
          });
      }, []),
      h.useEffect(() => {
        a && n(!0);
      }, [a]),
      { license: e, isLicenseValid: r }
    );
  }
  function SW() {
    return wO(), Ag(Qu), null;
  }
  function EW(e) {
    return WC({
      tag: "svg",
      attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
      child: [
        { tag: "path", attr: { d: "M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5" }, child: [] },
        { tag: "path", attr: { d: "M16 2v4" }, child: [] },
        { tag: "path", attr: { d: "M8 2v4" }, child: [] },
        { tag: "path", attr: { d: "M3 10h5" }, child: [] },
        { tag: "path", attr: { d: "M17.5 17.5 16 16.25V14" }, child: [] },
        { tag: "path", attr: { d: "M22 16a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z" }, child: [] },
      ],
    })(e);
  }
  var wo = ((e) => ((e[(e.in = 0)] = "in"), (e[(e.expired = 9999)] = "expired"), e))(wo || {});
  async function SO() {
    const e = await gs(["trialStartDate", "isLicenseValid"]);
    let t = wo.in,
      r = !0,
      n = ec,
      a;
    if (e != null && e.isLicenseValid) r = !0;
    else {
      (r = !1), e != null && e.trialStartDate ? (a = e == null ? void 0 : e.trialStartDate) : (a = Rl().format("YYYY-MM-DD"));
      const o = Rl().diff(a, "day");
      o > ec ? (t = wo.expired) : o >= 0 && o <= ec && (t = wo.in), (n = ec - o), n < 0 && (n = 0);
    }
    return { trialStatus: t, isLicenseValid: r, leftTrialDays: n };
  }
  function xW() {
    const [e, t] = h.useState(0),
      [r, n] = wL(Qu),
      a = () => {
        n((i) => ({ ...i, isTrialCheckModalShow: !1 }));
      },
      o = () => {
        n((i) => ({ isTrialCheckModalShow: !1, isEnterLicense: !0 }));
      };
    return (
      h.useEffect(() => {
        SO().then((i) => {
          t(i == null ? void 0 : i.leftTrialDays);
        });
      }, []),
      se("div", {
        className: "p-8 pt-4 h-full w-full bg-white shadow-md",
        children: [
          se("div", {
            className: "text-xl relative\r font-bold mt-4 mb-1",
            children: ["Empower Your Notion ✨", x(bO, { className: "absolute right-0 top-1 cursor-pointer", boxSize: 3, onClick: () => a() })],
          }),
          se("div", {
            className: "bg-yellow-50 border border-yellow-200 rounded-lg p-6 max-w-md mx-auto mt-4",
            children: [
              se("div", {
                className: "flex items-center",
                children: [
                  x("div", { className: "bg-yellow-100 rounded-full p-2 mr-4 inline-flex justify-center items-center", children: x(EW, {}) }),
                  se("div", {
                    children: [
                      x("h3", { className: "text-xl font-bold text-yellow-800", children: "Your trial is ending soon" }),
                      se("p", {
                        className: "text-yellow-600 font-medium",
                        children: [
                          se("span", { className: "font-bold", children: [e, " days"] }),
                          `
                `,
                          "left in your 3 days trial.",
                          `
                `,
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              x(_o, { className: "mb-3 mt-4", fontSize: "sm", children: "Buy once, use forever!" }),
              x(_o, { className: "mt-1", fontSize: "sm", children: "The purchase is one-time; all subsequent features and updates are free of charge." }),
              x("div", {
                className: "mt-4 flex justify-end",
                children: x("button", {
                  onClick: Ax,
                  type: "submit",
                  className: `flex w-full justify-center items-center rounded-md bg-[#FFA700]  mt-2 px-3 py-2 text-md font-bold  text-white shadow-sm
               hover:bg-[#FFA700] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-[#FFA700]`,
                  children: "Get a lifetime license Now?",
                }),
              }),
              x(Al, { variant: "link", className: "mt-5", onClick: o, children: "Enter The License" }),
              x("div", { children: x(Al, { variant: "link", className: "mt-3", onClick: Mx, children: "View All Features" }) }),
            ],
          }),
        ],
      })
    );
  }
  const TW = "/assets/bus-590147c5.svg",
    CW = "modulepreload",
    OW = function (e) {
      return "/" + e;
    },
    P1 = {},
    _W = function (t, r, n) {
      if (!r || r.length === 0) return t();
      const a = document.getElementsByTagName("link");
      return Promise.all(
        r.map((o) => {
          if (((o = OW(o)), o in P1)) return;
          P1[o] = !0;
          const i = o.endsWith(".css"),
            s = i ? '[rel="stylesheet"]' : "";
          if (!!n)
            for (let u = a.length - 1; u >= 0; u--) {
              const f = a[u];
              if (f.href === o && (!i || f.rel === "stylesheet")) return;
            }
          else if (document.querySelector(`link[href="${o}"]${s}`)) return;
          const l = document.createElement("link");
          if (((l.rel = i ? "stylesheet" : CW), i || ((l.as = "script"), (l.crossOrigin = "")), (l.href = o), document.head.appendChild(l), i))
            return new Promise((u, f) => {
              l.addEventListener("load", u), l.addEventListener("error", () => f(new Error(`Unable to preload CSS for ${o}`)));
            });
        })
      )
        .then(() => t())
        .catch((o) => {
          const i = new Event("vite:preloadError", { cancelable: !0 });
          if (((i.payload = o), window.dispatchEvent(i), !i.defaultPrevented)) throw o;
        });
    };
  var Tp = "http://www.w3.org/1999/xhtml";
  const I1 = { svg: "http://www.w3.org/2000/svg", xhtml: Tp, xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace", xmlns: "http://www.w3.org/2000/xmlns/" };
  function of(e) {
    var t = (e += ""),
      r = t.indexOf(":");
    return r >= 0 && (t = e.slice(0, r)) !== "xmlns" && (e = e.slice(r + 1)), I1.hasOwnProperty(t) ? { space: I1[t], local: e } : e;
  }
  function PW(e) {
    return function () {
      var t = this.ownerDocument,
        r = this.namespaceURI;
      return r === Tp && t.documentElement.namespaceURI === Tp ? t.createElement(e) : t.createElementNS(r, e);
    };
  }
  function IW(e) {
    return function () {
      return this.ownerDocument.createElementNS(e.space, e.local);
    };
  }
  function EO(e) {
    var t = of(e);
    return (t.local ? IW : PW)(t);
  }
  function AW() {}
  function Hg(e) {
    return e == null
      ? AW
      : function () {
          return this.querySelector(e);
        };
  }
  function RW(e) {
    typeof e != "function" && (e = Hg(e));
    for (var t = this._groups, r = t.length, n = new Array(r), a = 0; a < r; ++a)
      for (var o = t[a], i = o.length, s = (n[a] = new Array(i)), c, l, u = 0; u < i; ++u)
        (c = o[u]) && (l = e.call(c, c.__data__, u, o)) && ("__data__" in c && (l.__data__ = c.__data__), (s[u] = l));
    return new jt(n, this._parents);
  }
  function MW(e) {
    return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
  }
  function DW() {
    return [];
  }
  function xO(e) {
    return e == null
      ? DW
      : function () {
          return this.querySelectorAll(e);
        };
  }
  function NW(e) {
    return function () {
      return MW(e.apply(this, arguments));
    };
  }
  function kW(e) {
    typeof e == "function" ? (e = NW(e)) : (e = xO(e));
    for (var t = this._groups, r = t.length, n = [], a = [], o = 0; o < r; ++o) for (var i = t[o], s = i.length, c, l = 0; l < s; ++l) (c = i[l]) && (n.push(e.call(c, c.__data__, l, i)), a.push(c));
    return new jt(n, a);
  }
  function TO(e) {
    return function () {
      return this.matches(e);
    };
  }
  function CO(e) {
    return function (t) {
      return t.matches(e);
    };
  }
  var LW = Array.prototype.find;
  function FW(e) {
    return function () {
      return LW.call(this.children, e);
    };
  }
  function jW() {
    return this.firstElementChild;
  }
  function BW(e) {
    return this.select(e == null ? jW : FW(typeof e == "function" ? e : CO(e)));
  }
  var UW = Array.prototype.filter;
  function WW() {
    return Array.from(this.children);
  }
  function HW(e) {
    return function () {
      return UW.call(this.children, e);
    };
  }
  function zW(e) {
    return this.selectAll(e == null ? WW : HW(typeof e == "function" ? e : CO(e)));
  }
  function VW(e) {
    typeof e != "function" && (e = TO(e));
    for (var t = this._groups, r = t.length, n = new Array(r), a = 0; a < r; ++a)
      for (var o = t[a], i = o.length, s = (n[a] = []), c, l = 0; l < i; ++l) (c = o[l]) && e.call(c, c.__data__, l, o) && s.push(c);
    return new jt(n, this._parents);
  }
  function OO(e) {
    return new Array(e.length);
  }
  function GW() {
    return new jt(this._enter || this._groups.map(OO), this._parents);
  }
  function Kl(e, t) {
    (this.ownerDocument = e.ownerDocument), (this.namespaceURI = e.namespaceURI), (this._next = null), (this._parent = e), (this.__data__ = t);
  }
  Kl.prototype = {
    constructor: Kl,
    appendChild: function (e) {
      return this._parent.insertBefore(e, this._next);
    },
    insertBefore: function (e, t) {
      return this._parent.insertBefore(e, t);
    },
    querySelector: function (e) {
      return this._parent.querySelector(e);
    },
    querySelectorAll: function (e) {
      return this._parent.querySelectorAll(e);
    },
  };
  function YW(e) {
    return function () {
      return e;
    };
  }
  function KW(e, t, r, n, a, o) {
    for (var i = 0, s, c = t.length, l = o.length; i < l; ++i) (s = t[i]) ? ((s.__data__ = o[i]), (n[i] = s)) : (r[i] = new Kl(e, o[i]));
    for (; i < c; ++i) (s = t[i]) && (a[i] = s);
  }
  function qW(e, t, r, n, a, o, i) {
    var s,
      c,
      l = new Map(),
      u = t.length,
      f = o.length,
      d = new Array(u),
      v;
    for (s = 0; s < u; ++s) (c = t[s]) && ((d[s] = v = i.call(c, c.__data__, s, t) + ""), l.has(v) ? (a[s] = c) : l.set(v, c));
    for (s = 0; s < f; ++s) (v = i.call(e, o[s], s, o) + ""), (c = l.get(v)) ? ((n[s] = c), (c.__data__ = o[s]), l.delete(v)) : (r[s] = new Kl(e, o[s]));
    for (s = 0; s < u; ++s) (c = t[s]) && l.get(d[s]) === c && (a[s] = c);
  }
  function XW(e) {
    return e.__data__;
  }
  function ZW(e, t) {
    if (!arguments.length) return Array.from(this, XW);
    var r = t ? qW : KW,
      n = this._parents,
      a = this._groups;
    typeof e != "function" && (e = YW(e));
    for (var o = a.length, i = new Array(o), s = new Array(o), c = new Array(o), l = 0; l < o; ++l) {
      var u = n[l],
        f = a[l],
        d = f.length,
        v = JW(e.call(u, u && u.__data__, l, n)),
        p = v.length,
        m = (s[l] = new Array(p)),
        g = (i[l] = new Array(p)),
        y = (c[l] = new Array(d));
      r(u, f, m, g, y, v, t);
      for (var b = 0, $ = 0, S, A; b < p; ++b)
        if ((S = m[b])) {
          for (b >= $ && ($ = b + 1); !(A = g[$]) && ++$ < p; );
          S._next = A || null;
        }
    }
    return (i = new jt(i, n)), (i._enter = s), (i._exit = c), i;
  }
  function JW(e) {
    return typeof e == "object" && "length" in e ? e : Array.from(e);
  }
  function QW() {
    return new jt(this._exit || this._groups.map(OO), this._parents);
  }
  function eH(e, t, r) {
    var n = this.enter(),
      a = this,
      o = this.exit();
    return (
      typeof e == "function" ? ((n = e(n)), n && (n = n.selection())) : (n = n.append(e + "")),
      t != null && ((a = t(a)), a && (a = a.selection())),
      r == null ? o.remove() : r(o),
      n && a ? n.merge(a).order() : a
    );
  }
  function tH(e) {
    for (var t = e.selection ? e.selection() : e, r = this._groups, n = t._groups, a = r.length, o = n.length, i = Math.min(a, o), s = new Array(a), c = 0; c < i; ++c)
      for (var l = r[c], u = n[c], f = l.length, d = (s[c] = new Array(f)), v, p = 0; p < f; ++p) (v = l[p] || u[p]) && (d[p] = v);
    for (; c < a; ++c) s[c] = r[c];
    return new jt(s, this._parents);
  }
  function rH() {
    for (var e = this._groups, t = -1, r = e.length; ++t < r; )
      for (var n = e[t], a = n.length - 1, o = n[a], i; --a >= 0; ) (i = n[a]) && (o && i.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(i, o), (o = i));
    return this;
  }
  function nH(e) {
    e || (e = aH);
    function t(f, d) {
      return f && d ? e(f.__data__, d.__data__) : !f - !d;
    }
    for (var r = this._groups, n = r.length, a = new Array(n), o = 0; o < n; ++o) {
      for (var i = r[o], s = i.length, c = (a[o] = new Array(s)), l, u = 0; u < s; ++u) (l = i[u]) && (c[u] = l);
      c.sort(t);
    }
    return new jt(a, this._parents).order();
  }
  function aH(e, t) {
    return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
  }
  function oH() {
    var e = arguments[0];
    return (arguments[0] = this), e.apply(null, arguments), this;
  }
  function iH() {
    return Array.from(this);
  }
  function sH() {
    for (var e = this._groups, t = 0, r = e.length; t < r; ++t)
      for (var n = e[t], a = 0, o = n.length; a < o; ++a) {
        var i = n[a];
        if (i) return i;
      }
    return null;
  }
  function cH() {
    let e = 0;
    for (const t of this) ++e;
    return e;
  }
  function lH() {
    return !this.node();
  }
  function uH(e) {
    for (var t = this._groups, r = 0, n = t.length; r < n; ++r) for (var a = t[r], o = 0, i = a.length, s; o < i; ++o) (s = a[o]) && e.call(s, s.__data__, o, a);
    return this;
  }
  function fH(e) {
    return function () {
      this.removeAttribute(e);
    };
  }
  function dH(e) {
    return function () {
      this.removeAttributeNS(e.space, e.local);
    };
  }
  function hH(e, t) {
    return function () {
      this.setAttribute(e, t);
    };
  }
  function vH(e, t) {
    return function () {
      this.setAttributeNS(e.space, e.local, t);
    };
  }
  function pH(e, t) {
    return function () {
      var r = t.apply(this, arguments);
      r == null ? this.removeAttribute(e) : this.setAttribute(e, r);
    };
  }
  function mH(e, t) {
    return function () {
      var r = t.apply(this, arguments);
      r == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, r);
    };
  }
  function gH(e, t) {
    var r = of(e);
    if (arguments.length < 2) {
      var n = this.node();
      return r.local ? n.getAttributeNS(r.space, r.local) : n.getAttribute(r);
    }
    return this.each((t == null ? (r.local ? dH : fH) : typeof t == "function" ? (r.local ? mH : pH) : r.local ? vH : hH)(r, t));
  }
  function _O(e) {
    return (e.ownerDocument && e.ownerDocument.defaultView) || (e.document && e) || e.defaultView;
  }
  function yH(e) {
    return function () {
      this.style.removeProperty(e);
    };
  }
  function bH(e, t, r) {
    return function () {
      this.style.setProperty(e, t, r);
    };
  }
  function $H(e, t, r) {
    return function () {
      var n = t.apply(this, arguments);
      n == null ? this.style.removeProperty(e) : this.style.setProperty(e, n, r);
    };
  }
  function wH(e, t, r) {
    return arguments.length > 1 ? this.each((t == null ? yH : typeof t == "function" ? $H : bH)(e, t, r ?? "")) : Lo(this.node(), e);
  }
  function Lo(e, t) {
    return e.style.getPropertyValue(t) || _O(e).getComputedStyle(e, null).getPropertyValue(t);
  }
  function SH(e) {
    return function () {
      delete this[e];
    };
  }
  function EH(e, t) {
    return function () {
      this[e] = t;
    };
  }
  function xH(e, t) {
    return function () {
      var r = t.apply(this, arguments);
      r == null ? delete this[e] : (this[e] = r);
    };
  }
  function TH(e, t) {
    return arguments.length > 1 ? this.each((t == null ? SH : typeof t == "function" ? xH : EH)(e, t)) : this.node()[e];
  }
  function PO(e) {
    return e.trim().split(/^|\s+/);
  }
  function zg(e) {
    return e.classList || new IO(e);
  }
  function IO(e) {
    (this._node = e), (this._names = PO(e.getAttribute("class") || ""));
  }
  IO.prototype = {
    add: function (e) {
      var t = this._names.indexOf(e);
      t < 0 && (this._names.push(e), this._node.setAttribute("class", this._names.join(" ")));
    },
    remove: function (e) {
      var t = this._names.indexOf(e);
      t >= 0 && (this._names.splice(t, 1), this._node.setAttribute("class", this._names.join(" ")));
    },
    contains: function (e) {
      return this._names.indexOf(e) >= 0;
    },
  };
  function AO(e, t) {
    for (var r = zg(e), n = -1, a = t.length; ++n < a; ) r.add(t[n]);
  }
  function RO(e, t) {
    for (var r = zg(e), n = -1, a = t.length; ++n < a; ) r.remove(t[n]);
  }
  function CH(e) {
    return function () {
      AO(this, e);
    };
  }
  function OH(e) {
    return function () {
      RO(this, e);
    };
  }
  function _H(e, t) {
    return function () {
      (t.apply(this, arguments) ? AO : RO)(this, e);
    };
  }
  function PH(e, t) {
    var r = PO(e + "");
    if (arguments.length < 2) {
      for (var n = zg(this.node()), a = -1, o = r.length; ++a < o; ) if (!n.contains(r[a])) return !1;
      return !0;
    }
    return this.each((typeof t == "function" ? _H : t ? CH : OH)(r, t));
  }
  function IH() {
    this.textContent = "";
  }
  function AH(e) {
    return function () {
      this.textContent = e;
    };
  }
  function RH(e) {
    return function () {
      var t = e.apply(this, arguments);
      this.textContent = t ?? "";
    };
  }
  function MH(e) {
    return arguments.length ? this.each(e == null ? IH : (typeof e == "function" ? RH : AH)(e)) : this.node().textContent;
  }
  function DH() {
    this.innerHTML = "";
  }
  function NH(e) {
    return function () {
      this.innerHTML = e;
    };
  }
  function kH(e) {
    return function () {
      var t = e.apply(this, arguments);
      this.innerHTML = t ?? "";
    };
  }
  function LH(e) {
    return arguments.length ? this.each(e == null ? DH : (typeof e == "function" ? kH : NH)(e)) : this.node().innerHTML;
  }
  function FH() {
    this.nextSibling && this.parentNode.appendChild(this);
  }
  function jH() {
    return this.each(FH);
  }
  function BH() {
    this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
  }
  function UH() {
    return this.each(BH);
  }
  function WH(e) {
    var t = typeof e == "function" ? e : EO(e);
    return this.select(function () {
      return this.appendChild(t.apply(this, arguments));
    });
  }
  function HH() {
    return null;
  }
  function zH(e, t) {
    var r = typeof e == "function" ? e : EO(e),
      n = t == null ? HH : typeof t == "function" ? t : Hg(t);
    return this.select(function () {
      return this.insertBefore(r.apply(this, arguments), n.apply(this, arguments) || null);
    });
  }
  function VH() {
    var e = this.parentNode;
    e && e.removeChild(this);
  }
  function GH() {
    return this.each(VH);
  }
  function YH() {
    var e = this.cloneNode(!1),
      t = this.parentNode;
    return t ? t.insertBefore(e, this.nextSibling) : e;
  }
  function KH() {
    var e = this.cloneNode(!0),
      t = this.parentNode;
    return t ? t.insertBefore(e, this.nextSibling) : e;
  }
  function qH(e) {
    return this.select(e ? KH : YH);
  }
  function XH(e) {
    return arguments.length ? this.property("__data__", e) : this.node().__data__;
  }
  function ZH(e) {
    return function (t) {
      e.call(this, t, this.__data__);
    };
  }
  function JH(e) {
    return e
      .trim()
      .split(/^|\s+/)
      .map(function (t) {
        var r = "",
          n = t.indexOf(".");
        return n >= 0 && ((r = t.slice(n + 1)), (t = t.slice(0, n))), { type: t, name: r };
      });
  }
  function QH(e) {
    return function () {
      var t = this.__on;
      if (t) {
        for (var r = 0, n = -1, a = t.length, o; r < a; ++r) (o = t[r]), (!e.type || o.type === e.type) && o.name === e.name ? this.removeEventListener(o.type, o.listener, o.options) : (t[++n] = o);
        ++n ? (t.length = n) : delete this.__on;
      }
    };
  }
  function ez(e, t, r) {
    return function () {
      var n = this.__on,
        a,
        o = ZH(t);
      if (n) {
        for (var i = 0, s = n.length; i < s; ++i)
          if ((a = n[i]).type === e.type && a.name === e.name) {
            this.removeEventListener(a.type, a.listener, a.options), this.addEventListener(a.type, (a.listener = o), (a.options = r)), (a.value = t);
            return;
          }
      }
      this.addEventListener(e.type, o, r), (a = { type: e.type, name: e.name, value: t, listener: o, options: r }), n ? n.push(a) : (this.__on = [a]);
    };
  }
  function tz(e, t, r) {
    var n = JH(e + ""),
      a,
      o = n.length,
      i;
    if (arguments.length < 2) {
      var s = this.node().__on;
      if (s) {
        for (var c = 0, l = s.length, u; c < l; ++c) for (a = 0, u = s[c]; a < o; ++a) if ((i = n[a]).type === u.type && i.name === u.name) return u.value;
      }
      return;
    }
    for (s = t ? ez : QH, a = 0; a < o; ++a) this.each(s(n[a], t, r));
    return this;
  }
  function MO(e, t, r) {
    var n = _O(e),
      a = n.CustomEvent;
    typeof a == "function" ? (a = new a(t, r)) : ((a = n.document.createEvent("Event")), r ? (a.initEvent(t, r.bubbles, r.cancelable), (a.detail = r.detail)) : a.initEvent(t, !1, !1)),
      e.dispatchEvent(a);
  }
  function rz(e, t) {
    return function () {
      return MO(this, e, t);
    };
  }
  function nz(e, t) {
    return function () {
      return MO(this, e, t.apply(this, arguments));
    };
  }
  function az(e, t) {
    return this.each((typeof t == "function" ? nz : rz)(e, t));
  }
  function* oz() {
    for (var e = this._groups, t = 0, r = e.length; t < r; ++t) for (var n = e[t], a = 0, o = n.length, i; a < o; ++a) (i = n[a]) && (yield i);
  }
  var DO = [null];
  function jt(e, t) {
    (this._groups = e), (this._parents = t);
  }
  function _s() {
    return new jt([[document.documentElement]], DO);
  }
  function iz() {
    return this;
  }
  jt.prototype = _s.prototype = {
    constructor: jt,
    select: RW,
    selectAll: kW,
    selectChild: BW,
    selectChildren: zW,
    filter: VW,
    data: ZW,
    enter: GW,
    exit: QW,
    join: eH,
    merge: tH,
    selection: iz,
    order: rH,
    sort: nH,
    call: oH,
    nodes: iH,
    node: sH,
    size: cH,
    empty: lH,
    each: uH,
    attr: gH,
    style: wH,
    property: TH,
    classed: PH,
    text: MH,
    html: LH,
    raise: jH,
    lower: UH,
    append: WH,
    insert: zH,
    remove: GH,
    clone: qH,
    datum: XH,
    on: tz,
    dispatch: az,
    [Symbol.iterator]: oz,
  };
  function ql(e) {
    return typeof e == "string" ? new jt([[document.querySelector(e)]], [document.documentElement]) : new jt([[e]], DO);
  }
  function Jo(e, t, r) {
    (e.prototype = t.prototype = r), (r.constructor = e);
  }
  function Ps(e, t) {
    var r = Object.create(e.prototype);
    for (var n in t) r[n] = t[n];
    return r;
  }
  function Fn() {}
  var da = 0.7,
    Fo = 1 / da,
    So = "\\s*([+-]?\\d+)\\s*",
    es = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    Er = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    sz = /^#([0-9a-f]{3,8})$/,
    cz = new RegExp(`^rgb\\(${So},${So},${So}\\)$`),
    lz = new RegExp(`^rgb\\(${Er},${Er},${Er}\\)$`),
    uz = new RegExp(`^rgba\\(${So},${So},${So},${es}\\)$`),
    fz = new RegExp(`^rgba\\(${Er},${Er},${Er},${es}\\)$`),
    dz = new RegExp(`^hsl\\(${es},${Er},${Er}\\)$`),
    hz = new RegExp(`^hsla\\(${es},${Er},${Er},${es}\\)$`),
    A1 = {
      aliceblue: 15792383,
      antiquewhite: 16444375,
      aqua: 65535,
      aquamarine: 8388564,
      azure: 15794175,
      beige: 16119260,
      bisque: 16770244,
      black: 0,
      blanchedalmond: 16772045,
      blue: 255,
      blueviolet: 9055202,
      brown: 10824234,
      burlywood: 14596231,
      cadetblue: 6266528,
      chartreuse: 8388352,
      chocolate: 13789470,
      coral: 16744272,
      cornflowerblue: 6591981,
      cornsilk: 16775388,
      crimson: 14423100,
      cyan: 65535,
      darkblue: 139,
      darkcyan: 35723,
      darkgoldenrod: 12092939,
      darkgray: 11119017,
      darkgreen: 25600,
      darkgrey: 11119017,
      darkkhaki: 12433259,
      darkmagenta: 9109643,
      darkolivegreen: 5597999,
      darkorange: 16747520,
      darkorchid: 10040012,
      darkred: 9109504,
      darksalmon: 15308410,
      darkseagreen: 9419919,
      darkslateblue: 4734347,
      darkslategray: 3100495,
      darkslategrey: 3100495,
      darkturquoise: 52945,
      darkviolet: 9699539,
      deeppink: 16716947,
      deepskyblue: 49151,
      dimgray: 6908265,
      dimgrey: 6908265,
      dodgerblue: 2003199,
      firebrick: 11674146,
      floralwhite: 16775920,
      forestgreen: 2263842,
      fuchsia: 16711935,
      gainsboro: 14474460,
      ghostwhite: 16316671,
      gold: 16766720,
      goldenrod: 14329120,
      gray: 8421504,
      green: 32768,
      greenyellow: 11403055,
      grey: 8421504,
      honeydew: 15794160,
      hotpink: 16738740,
      indianred: 13458524,
      indigo: 4915330,
      ivory: 16777200,
      khaki: 15787660,
      lavender: 15132410,
      lavenderblush: 16773365,
      lawngreen: 8190976,
      lemonchiffon: 16775885,
      lightblue: 11393254,
      lightcoral: 15761536,
      lightcyan: 14745599,
      lightgoldenrodyellow: 16448210,
      lightgray: 13882323,
      lightgreen: 9498256,
      lightgrey: 13882323,
      lightpink: 16758465,
      lightsalmon: 16752762,
      lightseagreen: 2142890,
      lightskyblue: 8900346,
      lightslategray: 7833753,
      lightslategrey: 7833753,
      lightsteelblue: 11584734,
      lightyellow: 16777184,
      lime: 65280,
      limegreen: 3329330,
      linen: 16445670,
      magenta: 16711935,
      maroon: 8388608,
      mediumaquamarine: 6737322,
      mediumblue: 205,
      mediumorchid: 12211667,
      mediumpurple: 9662683,
      mediumseagreen: 3978097,
      mediumslateblue: 8087790,
      mediumspringgreen: 64154,
      mediumturquoise: 4772300,
      mediumvioletred: 13047173,
      midnightblue: 1644912,
      mintcream: 16121850,
      mistyrose: 16770273,
      moccasin: 16770229,
      navajowhite: 16768685,
      navy: 128,
      oldlace: 16643558,
      olive: 8421376,
      olivedrab: 7048739,
      orange: 16753920,
      orangered: 16729344,
      orchid: 14315734,
      palegoldenrod: 15657130,
      palegreen: 10025880,
      paleturquoise: 11529966,
      palevioletred: 14381203,
      papayawhip: 16773077,
      peachpuff: 16767673,
      peru: 13468991,
      pink: 16761035,
      plum: 14524637,
      powderblue: 11591910,
      purple: 8388736,
      rebeccapurple: 6697881,
      red: 16711680,
      rosybrown: 12357519,
      royalblue: 4286945,
      saddlebrown: 9127187,
      salmon: 16416882,
      sandybrown: 16032864,
      seagreen: 3050327,
      seashell: 16774638,
      sienna: 10506797,
      silver: 12632256,
      skyblue: 8900331,
      slateblue: 6970061,
      slategray: 7372944,
      slategrey: 7372944,
      snow: 16775930,
      springgreen: 65407,
      steelblue: 4620980,
      tan: 13808780,
      teal: 32896,
      thistle: 14204888,
      tomato: 16737095,
      turquoise: 4251856,
      violet: 15631086,
      wheat: 16113331,
      white: 16777215,
      whitesmoke: 16119285,
      yellow: 16776960,
      yellowgreen: 10145074,
    };
  Jo(Fn, ha, {
    copy(e) {
      return Object.assign(new this.constructor(), this, e);
    },
    displayable() {
      return this.rgb().displayable();
    },
    hex: R1,
    formatHex: R1,
    formatHex8: vz,
    formatHsl: pz,
    formatRgb: M1,
    toString: M1,
  });
  function R1() {
    return this.rgb().formatHex();
  }
  function vz() {
    return this.rgb().formatHex8();
  }
  function pz() {
    return NO(this).formatHsl();
  }
  function M1() {
    return this.rgb().formatRgb();
  }
  function ha(e) {
    var t, r;
    return (
      (e = (e + "").trim().toLowerCase()),
      (t = sz.exec(e))
        ? ((r = t[1].length),
          (t = parseInt(t[1], 16)),
          r === 6
            ? D1(t)
            : r === 3
            ? new tt(((t >> 8) & 15) | ((t >> 4) & 240), ((t >> 4) & 15) | (t & 240), ((t & 15) << 4) | (t & 15), 1)
            : r === 8
            ? hc((t >> 24) & 255, (t >> 16) & 255, (t >> 8) & 255, (t & 255) / 255)
            : r === 4
            ? hc(((t >> 12) & 15) | ((t >> 8) & 240), ((t >> 8) & 15) | ((t >> 4) & 240), ((t >> 4) & 15) | (t & 240), (((t & 15) << 4) | (t & 15)) / 255)
            : null)
        : (t = cz.exec(e))
        ? new tt(t[1], t[2], t[3], 1)
        : (t = lz.exec(e))
        ? new tt((t[1] * 255) / 100, (t[2] * 255) / 100, (t[3] * 255) / 100, 1)
        : (t = uz.exec(e))
        ? hc(t[1], t[2], t[3], t[4])
        : (t = fz.exec(e))
        ? hc((t[1] * 255) / 100, (t[2] * 255) / 100, (t[3] * 255) / 100, t[4])
        : (t = dz.exec(e))
        ? L1(t[1], t[2] / 100, t[3] / 100, 1)
        : (t = hz.exec(e))
        ? L1(t[1], t[2] / 100, t[3] / 100, t[4])
        : A1.hasOwnProperty(e)
        ? D1(A1[e])
        : e === "transparent"
        ? new tt(NaN, NaN, NaN, 0)
        : null
    );
  }
  function D1(e) {
    return new tt((e >> 16) & 255, (e >> 8) & 255, e & 255, 1);
  }
  function hc(e, t, r, n) {
    return n <= 0 && (e = t = r = NaN), new tt(e, t, r, n);
  }
  function Vg(e) {
    return e instanceof Fn || (e = ha(e)), e ? ((e = e.rgb()), new tt(e.r, e.g, e.b, e.opacity)) : new tt();
  }
  function ts(e, t, r, n) {
    return arguments.length === 1 ? Vg(e) : new tt(e, t, r, n ?? 1);
  }
  function tt(e, t, r, n) {
    (this.r = +e), (this.g = +t), (this.b = +r), (this.opacity = +n);
  }
  Jo(
    tt,
    ts,
    Ps(Fn, {
      brighter(e) {
        return (e = e == null ? Fo : Math.pow(Fo, e)), new tt(this.r * e, this.g * e, this.b * e, this.opacity);
      },
      darker(e) {
        return (e = e == null ? da : Math.pow(da, e)), new tt(this.r * e, this.g * e, this.b * e, this.opacity);
      },
      rgb() {
        return this;
      },
      clamp() {
        return new tt(oa(this.r), oa(this.g), oa(this.b), Xl(this.opacity));
      },
      displayable() {
        return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
      },
      hex: N1,
      formatHex: N1,
      formatHex8: mz,
      formatRgb: k1,
      toString: k1,
    })
  );
  function N1() {
    return `#${ra(this.r)}${ra(this.g)}${ra(this.b)}`;
  }
  function mz() {
    return `#${ra(this.r)}${ra(this.g)}${ra(this.b)}${ra((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
  }
  function k1() {
    const e = Xl(this.opacity);
    return `${e === 1 ? "rgb(" : "rgba("}${oa(this.r)}, ${oa(this.g)}, ${oa(this.b)}${e === 1 ? ")" : `, ${e})`}`;
  }
  function Xl(e) {
    return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
  }
  function oa(e) {
    return Math.max(0, Math.min(255, Math.round(e) || 0));
  }
  function ra(e) {
    return (e = oa(e)), (e < 16 ? "0" : "") + e.toString(16);
  }
  function L1(e, t, r, n) {
    return n <= 0 ? (e = t = r = NaN) : r <= 0 || r >= 1 ? (e = t = NaN) : t <= 0 && (e = NaN), new cr(e, t, r, n);
  }
  function NO(e) {
    if (e instanceof cr) return new cr(e.h, e.s, e.l, e.opacity);
    if ((e instanceof Fn || (e = ha(e)), !e)) return new cr();
    if (e instanceof cr) return e;
    e = e.rgb();
    var t = e.r / 255,
      r = e.g / 255,
      n = e.b / 255,
      a = Math.min(t, r, n),
      o = Math.max(t, r, n),
      i = NaN,
      s = o - a,
      c = (o + a) / 2;
    return (
      s ? (t === o ? (i = (r - n) / s + (r < n) * 6) : r === o ? (i = (n - t) / s + 2) : (i = (t - r) / s + 4), (s /= c < 0.5 ? o + a : 2 - o - a), (i *= 60)) : (s = c > 0 && c < 1 ? 0 : i),
      new cr(i, s, c, e.opacity)
    );
  }
  function Cp(e, t, r, n) {
    return arguments.length === 1 ? NO(e) : new cr(e, t, r, n ?? 1);
  }
  function cr(e, t, r, n) {
    (this.h = +e), (this.s = +t), (this.l = +r), (this.opacity = +n);
  }
  Jo(
    cr,
    Cp,
    Ps(Fn, {
      brighter(e) {
        return (e = e == null ? Fo : Math.pow(Fo, e)), new cr(this.h, this.s, this.l * e, this.opacity);
      },
      darker(e) {
        return (e = e == null ? da : Math.pow(da, e)), new cr(this.h, this.s, this.l * e, this.opacity);
      },
      rgb() {
        var e = (this.h % 360) + (this.h < 0) * 360,
          t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
          r = this.l,
          n = r + (r < 0.5 ? r : 1 - r) * t,
          a = 2 * r - n;
        return new tt(Xd(e >= 240 ? e - 240 : e + 120, a, n), Xd(e, a, n), Xd(e < 120 ? e + 240 : e - 120, a, n), this.opacity);
      },
      clamp() {
        return new cr(F1(this.h), vc(this.s), vc(this.l), Xl(this.opacity));
      },
      displayable() {
        return ((0 <= this.s && this.s <= 1) || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
      },
      formatHsl() {
        const e = Xl(this.opacity);
        return `${e === 1 ? "hsl(" : "hsla("}${F1(this.h)}, ${vc(this.s) * 100}%, ${vc(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
      },
    })
  );
  function F1(e) {
    return (e = (e || 0) % 360), e < 0 ? e + 360 : e;
  }
  function vc(e) {
    return Math.max(0, Math.min(1, e || 0));
  }
  function Xd(e, t, r) {
    return (e < 60 ? t + ((r - t) * e) / 60 : e < 180 ? r : e < 240 ? t + ((r - t) * (240 - e)) / 60 : t) * 255;
  }
  const kO = Math.PI / 180,
    LO = 180 / Math.PI,
    Zl = 18,
    FO = 0.96422,
    jO = 1,
    BO = 0.82521,
    UO = 4 / 29,
    Eo = 6 / 29,
    WO = 3 * Eo * Eo,
    gz = Eo * Eo * Eo;
  function HO(e) {
    if (e instanceof xr) return new xr(e.l, e.a, e.b, e.opacity);
    if (e instanceof zr) return zO(e);
    e instanceof tt || (e = Vg(e));
    var t = eh(e.r),
      r = eh(e.g),
      n = eh(e.b),
      a = Zd((0.2225045 * t + 0.7168786 * r + 0.0606169 * n) / jO),
      o,
      i;
    return (
      t === r && r === n ? (o = i = a) : ((o = Zd((0.4360747 * t + 0.3850649 * r + 0.1430804 * n) / FO)), (i = Zd((0.0139322 * t + 0.0971045 * r + 0.7141733 * n) / BO))),
      new xr(116 * a - 16, 500 * (o - a), 200 * (a - i), e.opacity)
    );
  }
  function Op(e, t, r, n) {
    return arguments.length === 1 ? HO(e) : new xr(e, t, r, n ?? 1);
  }
  function xr(e, t, r, n) {
    (this.l = +e), (this.a = +t), (this.b = +r), (this.opacity = +n);
  }
  Jo(
    xr,
    Op,
    Ps(Fn, {
      brighter(e) {
        return new xr(this.l + Zl * (e ?? 1), this.a, this.b, this.opacity);
      },
      darker(e) {
        return new xr(this.l - Zl * (e ?? 1), this.a, this.b, this.opacity);
      },
      rgb() {
        var e = (this.l + 16) / 116,
          t = isNaN(this.a) ? e : e + this.a / 500,
          r = isNaN(this.b) ? e : e - this.b / 200;
        return (
          (t = FO * Jd(t)),
          (e = jO * Jd(e)),
          (r = BO * Jd(r)),
          new tt(Qd(3.1338561 * t - 1.6168667 * e - 0.4906146 * r), Qd(-0.9787684 * t + 1.9161415 * e + 0.033454 * r), Qd(0.0719453 * t - 0.2289914 * e + 1.4052427 * r), this.opacity)
        );
      },
    })
  );
  function Zd(e) {
    return e > gz ? Math.pow(e, 1 / 3) : e / WO + UO;
  }
  function Jd(e) {
    return e > Eo ? e * e * e : WO * (e - UO);
  }
  function Qd(e) {
    return 255 * (e <= 0.0031308 ? 12.92 * e : 1.055 * Math.pow(e, 1 / 2.4) - 0.055);
  }
  function eh(e) {
    return (e /= 255) <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4);
  }
  function yz(e) {
    if (e instanceof zr) return new zr(e.h, e.c, e.l, e.opacity);
    if ((e instanceof xr || (e = HO(e)), e.a === 0 && e.b === 0)) return new zr(NaN, 0 < e.l && e.l < 100 ? 0 : NaN, e.l, e.opacity);
    var t = Math.atan2(e.b, e.a) * LO;
    return new zr(t < 0 ? t + 360 : t, Math.sqrt(e.a * e.a + e.b * e.b), e.l, e.opacity);
  }
  function Jl(e, t, r, n) {
    return arguments.length === 1 ? yz(e) : new zr(e, t, r, n ?? 1);
  }
  function zr(e, t, r, n) {
    (this.h = +e), (this.c = +t), (this.l = +r), (this.opacity = +n);
  }
  function zO(e) {
    if (isNaN(e.h)) return new xr(e.l, 0, 0, e.opacity);
    var t = e.h * kO;
    return new xr(e.l, Math.cos(t) * e.c, Math.sin(t) * e.c, e.opacity);
  }
  Jo(
    zr,
    Jl,
    Ps(Fn, {
      brighter(e) {
        return new zr(this.h, this.c, this.l + Zl * (e ?? 1), this.opacity);
      },
      darker(e) {
        return new zr(this.h, this.c, this.l - Zl * (e ?? 1), this.opacity);
      },
      rgb() {
        return zO(this).rgb();
      },
    })
  );
  var VO = -0.14861,
    Gg = 1.78277,
    Yg = -0.29227,
    sf = -0.90649,
    rs = 1.97294,
    j1 = rs * sf,
    B1 = rs * Gg,
    U1 = Gg * Yg - sf * VO;
  function bz(e) {
    if (e instanceof ia) return new ia(e.h, e.s, e.l, e.opacity);
    e instanceof tt || (e = Vg(e));
    var t = e.r / 255,
      r = e.g / 255,
      n = e.b / 255,
      a = (U1 * n + j1 * t - B1 * r) / (U1 + j1 - B1),
      o = n - a,
      i = (rs * (r - a) - Yg * o) / sf,
      s = Math.sqrt(i * i + o * o) / (rs * a * (1 - a)),
      c = s ? Math.atan2(i, o) * LO - 120 : NaN;
    return new ia(c < 0 ? c + 360 : c, s, a, e.opacity);
  }
  function Or(e, t, r, n) {
    return arguments.length === 1 ? bz(e) : new ia(e, t, r, n ?? 1);
  }
  function ia(e, t, r, n) {
    (this.h = +e), (this.s = +t), (this.l = +r), (this.opacity = +n);
  }
  Jo(
    ia,
    Or,
    Ps(Fn, {
      brighter(e) {
        return (e = e == null ? Fo : Math.pow(Fo, e)), new ia(this.h, this.s, this.l * e, this.opacity);
      },
      darker(e) {
        return (e = e == null ? da : Math.pow(da, e)), new ia(this.h, this.s, this.l * e, this.opacity);
      },
      rgb() {
        var e = isNaN(this.h) ? 0 : (this.h + 120) * kO,
          t = +this.l,
          r = isNaN(this.s) ? 0 : this.s * t * (1 - t),
          n = Math.cos(e),
          a = Math.sin(e);
        return new tt(255 * (t + r * (VO * n + Gg * a)), 255 * (t + r * (Yg * n + sf * a)), 255 * (t + r * (rs * n)), this.opacity);
      },
    })
  );
  function On(e, t) {
    return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
  }
  function cf(e, t) {
    return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
  }
  function Kg(e) {
    let t, r, n;
    e.length !== 2 ? ((t = On), (r = (s, c) => On(e(s), c)), (n = (s, c) => e(s) - c)) : ((t = e === On || e === cf ? e : $z), (r = e), (n = e));
    function a(s, c, l = 0, u = s.length) {
      if (l < u) {
        if (t(c, c) !== 0) return u;
        do {
          const f = (l + u) >>> 1;
          r(s[f], c) < 0 ? (l = f + 1) : (u = f);
        } while (l < u);
      }
      return l;
    }
    function o(s, c, l = 0, u = s.length) {
      if (l < u) {
        if (t(c, c) !== 0) return u;
        do {
          const f = (l + u) >>> 1;
          r(s[f], c) <= 0 ? (l = f + 1) : (u = f);
        } while (l < u);
      }
      return l;
    }
    function i(s, c, l = 0, u = s.length) {
      const f = a(s, c, l, u - 1);
      return f > l && n(s[f - 1], c) > -n(s[f], c) ? f - 1 : f;
    }
    return { left: a, center: i, right: o };
  }
  function $z() {
    return 0;
  }
  function GO(e) {
    return e === null ? NaN : +e;
  }
  function* wz(e, t) {
    if (t === void 0) for (let r of e) r != null && (r = +r) >= r && (yield r);
    else {
      let r = -1;
      for (let n of e) (n = t(n, ++r, e)) != null && (n = +n) >= n && (yield n);
    }
  }
  const Sz = Kg(On),
    Ez = Sz.right;
  Kg(GO).center;
  const qg = Ez;
  function Xg(e, t) {
    let r, n;
    if (t === void 0) for (const a of e) a != null && (r === void 0 ? a >= a && (r = n = a) : (r > a && (r = a), n < a && (n = a)));
    else {
      let a = -1;
      for (let o of e) (o = t(o, ++a, e)) != null && (r === void 0 ? o >= o && (r = n = o) : (r > o && (r = o), n < o && (n = o)));
    }
    return [r, n];
  }
  class W1 extends Map {
    constructor(t, r = qO) {
      if ((super(), Object.defineProperties(this, { _intern: { value: new Map() }, _key: { value: r } }), t != null)) for (const [n, a] of t) this.set(n, a);
    }
    get(t) {
      return super.get(_p(this, t));
    }
    has(t) {
      return super.has(_p(this, t));
    }
    set(t, r) {
      return super.set(YO(this, t), r);
    }
    delete(t) {
      return super.delete(KO(this, t));
    }
  }
  class xz extends Set {
    constructor(t, r = qO) {
      if ((super(), Object.defineProperties(this, { _intern: { value: new Map() }, _key: { value: r } }), t != null)) for (const n of t) this.add(n);
    }
    has(t) {
      return super.has(_p(this, t));
    }
    add(t) {
      return super.add(YO(this, t));
    }
    delete(t) {
      return super.delete(KO(this, t));
    }
  }
  function _p({ _intern: e, _key: t }, r) {
    const n = t(r);
    return e.has(n) ? e.get(n) : r;
  }
  function YO({ _intern: e, _key: t }, r) {
    const n = t(r);
    return e.has(n) ? e.get(n) : (e.set(n, r), r);
  }
  function KO({ _intern: e, _key: t }, r) {
    const n = t(r);
    return e.has(n) && ((r = e.get(n)), e.delete(n)), r;
  }
  function qO(e) {
    return e !== null && typeof e == "object" ? e.valueOf() : e;
  }
  function Tz(e, t) {
    return Array.from(t, (r) => e[r]);
  }
  function Cz(e, ...t) {
    if (typeof e[Symbol.iterator] != "function") throw new TypeError("values is not iterable");
    e = Array.from(e);
    let [r] = t;
    if ((r && r.length !== 2) || t.length > 1) {
      const n = Uint32Array.from(e, (a, o) => o);
      return (
        t.length > 1
          ? ((t = t.map((a) => e.map(a))),
            n.sort((a, o) => {
              for (const i of t) {
                const s = Ql(i[a], i[o]);
                if (s) return s;
              }
            }))
          : ((r = e.map(r)), n.sort((a, o) => Ql(r[a], r[o]))),
        Tz(e, n)
      );
    }
    return e.sort(XO(r));
  }
  function XO(e = On) {
    if (e === On) return Ql;
    if (typeof e != "function") throw new TypeError("compare is not a function");
    return (t, r) => {
      const n = e(t, r);
      return n || n === 0 ? n : (e(r, r) === 0) - (e(t, t) === 0);
    };
  }
  function Ql(e, t) {
    return (e == null || !(e >= e)) - (t == null || !(t >= t)) || (e < t ? -1 : e > t ? 1 : 0);
  }
  const Oz = Math.sqrt(50),
    _z = Math.sqrt(10),
    Pz = Math.sqrt(2);
  function eu(e, t, r) {
    const n = (t - e) / Math.max(0, r),
      a = Math.floor(Math.log10(n)),
      o = n / Math.pow(10, a),
      i = o >= Oz ? 10 : o >= _z ? 5 : o >= Pz ? 2 : 1;
    let s, c, l;
    return (
      a < 0
        ? ((l = Math.pow(10, -a) / i), (s = Math.round(e * l)), (c = Math.round(t * l)), s / l < e && ++s, c / l > t && --c, (l = -l))
        : ((l = Math.pow(10, a) * i), (s = Math.round(e / l)), (c = Math.round(t / l)), s * l < e && ++s, c * l > t && --c),
      c < s && 0.5 <= r && r < 2 ? eu(e, t, r * 2) : [s, c, l]
    );
  }
  function tu(e, t, r) {
    if (((t = +t), (e = +e), (r = +r), !(r > 0))) return [];
    if (e === t) return [e];
    const n = t < e,
      [a, o, i] = n ? eu(t, e, r) : eu(e, t, r);
    if (!(o >= a)) return [];
    const s = o - a + 1,
      c = new Array(s);
    if (n)
      if (i < 0) for (let l = 0; l < s; ++l) c[l] = (o - l) / -i;
      else for (let l = 0; l < s; ++l) c[l] = (o - l) * i;
    else if (i < 0) for (let l = 0; l < s; ++l) c[l] = (a + l) / -i;
    else for (let l = 0; l < s; ++l) c[l] = (a + l) * i;
    return c;
  }
  function Pp(e, t, r) {
    return (t = +t), (e = +e), (r = +r), eu(e, t, r)[2];
  }
  function Ip(e, t, r) {
    (t = +t), (e = +e), (r = +r);
    const n = t < e,
      a = n ? Pp(t, e, r) : Pp(e, t, r);
    return (n ? -1 : 1) * (a < 0 ? 1 / -a : a);
  }
  function Rn(e, t) {
    let r;
    if (t === void 0) for (const n of e) n != null && (r < n || (r === void 0 && n >= n)) && (r = n);
    else {
      let n = -1;
      for (let a of e) (a = t(a, ++n, e)) != null && (r < a || (r === void 0 && a >= a)) && (r = a);
    }
    return r;
  }
  function ru(e, t) {
    let r;
    if (t === void 0) for (const n of e) n != null && (r > n || (r === void 0 && n >= n)) && (r = n);
    else {
      let n = -1;
      for (let a of e) (a = t(a, ++n, e)) != null && (r > a || (r === void 0 && a >= a)) && (r = a);
    }
    return r;
  }
  function ZO(e, t, r = 0, n = 1 / 0, a) {
    if (((t = Math.floor(t)), (r = Math.floor(Math.max(0, r))), (n = Math.floor(Math.min(e.length - 1, n))), !(r <= t && t <= n))) return e;
    for (a = a === void 0 ? Ql : XO(a); n > r; ) {
      if (n - r > 600) {
        const c = n - r + 1,
          l = t - r + 1,
          u = Math.log(c),
          f = 0.5 * Math.exp((2 * u) / 3),
          d = 0.5 * Math.sqrt((u * f * (c - f)) / c) * (l - c / 2 < 0 ? -1 : 1),
          v = Math.max(r, Math.floor(t - (l * f) / c + d)),
          p = Math.min(n, Math.floor(t + ((c - l) * f) / c + d));
        ZO(e, t, v, p, a);
      }
      const o = e[t];
      let i = r,
        s = n;
      for (di(e, r, t), a(e[n], o) > 0 && di(e, r, n); i < s; ) {
        for (di(e, i, s), ++i, --s; a(e[i], o) < 0; ) ++i;
        for (; a(e[s], o) > 0; ) --s;
      }
      a(e[r], o) === 0 ? di(e, r, s) : (++s, di(e, s, n)), s <= t && (r = s + 1), t <= s && (n = s - 1);
    }
    return e;
  }
  function di(e, t, r) {
    const n = e[t];
    (e[t] = e[r]), (e[r] = n);
  }
  function Ap(e, t, r) {
    if (((e = Float64Array.from(wz(e, r))), !(!(n = e.length) || isNaN((t = +t))))) {
      if (t <= 0 || n < 2) return ru(e);
      if (t >= 1) return Rn(e);
      var n,
        a = (n - 1) * t,
        o = Math.floor(a),
        i = Rn(ZO(e, o).subarray(0, o + 1)),
        s = ru(e.subarray(o + 1));
      return i + (s - i) * (a - o);
    }
  }
  function Iz(e, t, r = GO) {
    if (!(!(n = e.length) || isNaN((t = +t)))) {
      if (t <= 0 || n < 2) return +r(e[0], 0, e);
      if (t >= 1) return +r(e[n - 1], n - 1, e);
      var n,
        a = (n - 1) * t,
        o = Math.floor(a),
        i = +r(e[o], o, e),
        s = +r(e[o + 1], o + 1, e);
      return i + (s - i) * (a - o);
    }
  }
  function H1(e, t) {
    return Ap(e, 0.5, t);
  }
  function Rp(e, t, r) {
    (e = +e), (t = +t), (r = (a = arguments.length) < 2 ? ((t = e), (e = 0), 1) : a < 3 ? 1 : +r);
    for (var n = -1, a = Math.max(0, Math.ceil((t - e) / r)) | 0, o = new Array(a); ++n < a; ) o[n] = e + n * r;
    return o;
  }
  function nu(e) {
    if (typeof e[Symbol.iterator] != "function") throw new TypeError("values is not iterable");
    return Array.from(e).reverse();
  }
  var Az = { value: () => {} };
  function JO() {
    for (var e = 0, t = arguments.length, r = {}, n; e < t; ++e) {
      if (!(n = arguments[e] + "") || n in r || /[\s.]/.test(n)) throw new Error("illegal type: " + n);
      r[n] = [];
    }
    return new cl(r);
  }
  function cl(e) {
    this._ = e;
  }
  function Rz(e, t) {
    return e
      .trim()
      .split(/^|\s+/)
      .map(function (r) {
        var n = "",
          a = r.indexOf(".");
        if ((a >= 0 && ((n = r.slice(a + 1)), (r = r.slice(0, a))), r && !t.hasOwnProperty(r))) throw new Error("unknown type: " + r);
        return { type: r, name: n };
      });
  }
  cl.prototype = JO.prototype = {
    constructor: cl,
    on: function (e, t) {
      var r = this._,
        n = Rz(e + "", r),
        a,
        o = -1,
        i = n.length;
      if (arguments.length < 2) {
        for (; ++o < i; ) if ((a = (e = n[o]).type) && (a = Mz(r[a], e.name))) return a;
        return;
      }
      if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
      for (; ++o < i; )
        if ((a = (e = n[o]).type)) r[a] = z1(r[a], e.name, t);
        else if (t == null) for (a in r) r[a] = z1(r[a], e.name, null);
      return this;
    },
    copy: function () {
      var e = {},
        t = this._;
      for (var r in t) e[r] = t[r].slice();
      return new cl(e);
    },
    call: function (e, t) {
      if ((a = arguments.length - 2) > 0) for (var r = new Array(a), n = 0, a, o; n < a; ++n) r[n] = arguments[n + 2];
      if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
      for (o = this._[e], n = 0, a = o.length; n < a; ++n) o[n].value.apply(t, r);
    },
    apply: function (e, t, r) {
      if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
      for (var n = this._[e], a = 0, o = n.length; a < o; ++a) n[a].value.apply(t, r);
    },
  };
  function Mz(e, t) {
    for (var r = 0, n = e.length, a; r < n; ++r) if ((a = e[r]).name === t) return a.value;
  }
  function z1(e, t, r) {
    for (var n = 0, a = e.length; n < a; ++n)
      if (e[n].name === t) {
        (e[n] = Az), (e = e.slice(0, n).concat(e.slice(n + 1)));
        break;
      }
    return r != null && e.push({ name: t, value: r }), e;
  }
  function Dz(e, t, r, n, a) {
    var o = e * e,
      i = o * e;
    return ((1 - 3 * e + 3 * o - i) * t + (4 - 6 * o + 3 * i) * r + (1 + 3 * e + 3 * o - 3 * i) * n + i * a) / 6;
  }
  function Nz(e) {
    var t = e.length - 1;
    return function (r) {
      var n = r <= 0 ? (r = 0) : r >= 1 ? ((r = 1), t - 1) : Math.floor(r * t),
        a = e[n],
        o = e[n + 1],
        i = n > 0 ? e[n - 1] : 2 * a - o,
        s = n < t - 1 ? e[n + 2] : 2 * o - a;
      return Dz((r - n / t) * t, i, a, o, s);
    };
  }
  const lf = (e) => () => e;
  function QO(e, t) {
    return function (r) {
      return e + r * t;
    };
  }
  function kz(e, t, r) {
    return (
      (e = Math.pow(e, r)),
      (t = Math.pow(t, r) - e),
      (r = 1 / r),
      function (n) {
        return Math.pow(e + n * t, r);
      }
    );
  }
  function Zg(e, t) {
    var r = t - e;
    return r ? QO(e, r > 180 || r < -180 ? r - 360 * Math.round(r / 360) : r) : lf(isNaN(e) ? t : e);
  }
  function Lz(e) {
    return (e = +e) == 1
      ? gt
      : function (t, r) {
          return r - t ? kz(t, r, e) : lf(isNaN(t) ? r : t);
        };
  }
  function gt(e, t) {
    var r = t - e;
    return r ? QO(e, r) : lf(isNaN(e) ? t : e);
  }
  const va = (function e(t) {
    var r = Lz(t);
    function n(a, o) {
      var i = r((a = ts(a)).r, (o = ts(o)).r),
        s = r(a.g, o.g),
        c = r(a.b, o.b),
        l = gt(a.opacity, o.opacity);
      return function (u) {
        return (a.r = i(u)), (a.g = s(u)), (a.b = c(u)), (a.opacity = l(u)), a + "";
      };
    }
    return (n.gamma = e), n;
  })(1);
  function Fz(e) {
    return function (t) {
      var r = t.length,
        n = new Array(r),
        a = new Array(r),
        o = new Array(r),
        i,
        s;
      for (i = 0; i < r; ++i) (s = ts(t[i])), (n[i] = s.r || 0), (a[i] = s.g || 0), (o[i] = s.b || 0);
      return (
        (n = e(n)),
        (a = e(a)),
        (o = e(o)),
        (s.opacity = 1),
        function (c) {
          return (s.r = n(c)), (s.g = a(c)), (s.b = o(c)), s + "";
        }
      );
    };
  }
  var jz = Fz(Nz);
  function Bz(e, t) {
    t || (t = []);
    var r = e ? Math.min(t.length, e.length) : 0,
      n = t.slice(),
      a;
    return function (o) {
      for (a = 0; a < r; ++a) n[a] = e[a] * (1 - o) + t[a] * o;
      return n;
    };
  }
  function Uz(e) {
    return ArrayBuffer.isView(e) && !(e instanceof DataView);
  }
  function Wz(e, t) {
    var r = t ? t.length : 0,
      n = e ? Math.min(r, e.length) : 0,
      a = new Array(n),
      o = new Array(r),
      i;
    for (i = 0; i < n; ++i) a[i] = Is(e[i], t[i]);
    for (; i < r; ++i) o[i] = t[i];
    return function (s) {
      for (i = 0; i < n; ++i) o[i] = a[i](s);
      return o;
    };
  }
  function Hz(e, t) {
    var r = new Date();
    return (
      (e = +e),
      (t = +t),
      function (n) {
        return r.setTime(e * (1 - n) + t * n), r;
      }
    );
  }
  function Et(e, t) {
    return (
      (e = +e),
      (t = +t),
      function (r) {
        return e * (1 - r) + t * r;
      }
    );
  }
  function zz(e, t) {
    var r = {},
      n = {},
      a;
    (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
    for (a in t) a in e ? (r[a] = Is(e[a], t[a])) : (n[a] = t[a]);
    return function (o) {
      for (a in r) n[a] = r[a](o);
      return n;
    };
  }
  var Mp = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    th = new RegExp(Mp.source, "g");
  function Vz(e) {
    return function () {
      return e;
    };
  }
  function Gz(e) {
    return function (t) {
      return e(t) + "";
    };
  }
  function e_(e, t) {
    var r = (Mp.lastIndex = th.lastIndex = 0),
      n,
      a,
      o,
      i = -1,
      s = [],
      c = [];
    for (e = e + "", t = t + ""; (n = Mp.exec(e)) && (a = th.exec(t)); )
      (o = a.index) > r && ((o = t.slice(r, o)), s[i] ? (s[i] += o) : (s[++i] = o)),
        (n = n[0]) === (a = a[0]) ? (s[i] ? (s[i] += a) : (s[++i] = a)) : ((s[++i] = null), c.push({ i, x: Et(n, a) })),
        (r = th.lastIndex);
    return (
      r < t.length && ((o = t.slice(r)), s[i] ? (s[i] += o) : (s[++i] = o)),
      s.length < 2
        ? c[0]
          ? Gz(c[0].x)
          : Vz(t)
        : ((t = c.length),
          function (l) {
            for (var u = 0, f; u < t; ++u) s[(f = c[u]).i] = f.x(l);
            return s.join("");
          })
    );
  }
  function Is(e, t) {
    var r = typeof t,
      n;
    return t == null || r === "boolean"
      ? lf(t)
      : (r === "number"
          ? Et
          : r === "string"
          ? (n = ha(t))
            ? ((t = n), va)
            : e_
          : t instanceof ha
          ? va
          : t instanceof Date
          ? Hz
          : Uz(t)
          ? Bz
          : Array.isArray(t)
          ? Wz
          : (typeof t.valueOf != "function" && typeof t.toString != "function") || isNaN(t)
          ? zz
          : Et)(e, t);
  }
  function Jg(e, t) {
    return (
      (e = +e),
      (t = +t),
      function (r) {
        return Math.round(e * (1 - r) + t * r);
      }
    );
  }
  var V1 = 180 / Math.PI,
    Dp = { translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1 };
  function t_(e, t, r, n, a, o) {
    var i, s, c;
    return (
      (i = Math.sqrt(e * e + t * t)) && ((e /= i), (t /= i)),
      (c = e * r + t * n) && ((r -= e * c), (n -= t * c)),
      (s = Math.sqrt(r * r + n * n)) && ((r /= s), (n /= s), (c /= s)),
      e * n < t * r && ((e = -e), (t = -t), (c = -c), (i = -i)),
      { translateX: a, translateY: o, rotate: Math.atan2(t, e) * V1, skewX: Math.atan(c) * V1, scaleX: i, scaleY: s }
    );
  }
  var pc;
  function Yz(e) {
    const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
    return t.isIdentity ? Dp : t_(t.a, t.b, t.c, t.d, t.e, t.f);
  }
  function Kz(e) {
    return e == null || (pc || (pc = document.createElementNS("http://www.w3.org/2000/svg", "g")), pc.setAttribute("transform", e), !(e = pc.transform.baseVal.consolidate()))
      ? Dp
      : ((e = e.matrix), t_(e.a, e.b, e.c, e.d, e.e, e.f));
  }
  function r_(e, t, r, n) {
    function a(l) {
      return l.length ? l.pop() + " " : "";
    }
    function o(l, u, f, d, v, p) {
      if (l !== f || u !== d) {
        var m = v.push("translate(", null, t, null, r);
        p.push({ i: m - 4, x: Et(l, f) }, { i: m - 2, x: Et(u, d) });
      } else (f || d) && v.push("translate(" + f + t + d + r);
    }
    function i(l, u, f, d) {
      l !== u ? (l - u > 180 ? (u += 360) : u - l > 180 && (l += 360), d.push({ i: f.push(a(f) + "rotate(", null, n) - 2, x: Et(l, u) })) : u && f.push(a(f) + "rotate(" + u + n);
    }
    function s(l, u, f, d) {
      l !== u ? d.push({ i: f.push(a(f) + "skewX(", null, n) - 2, x: Et(l, u) }) : u && f.push(a(f) + "skewX(" + u + n);
    }
    function c(l, u, f, d, v, p) {
      if (l !== f || u !== d) {
        var m = v.push(a(v) + "scale(", null, ",", null, ")");
        p.push({ i: m - 4, x: Et(l, f) }, { i: m - 2, x: Et(u, d) });
      } else (f !== 1 || d !== 1) && v.push(a(v) + "scale(" + f + "," + d + ")");
    }
    return function (l, u) {
      var f = [],
        d = [];
      return (
        (l = e(l)),
        (u = e(u)),
        o(l.translateX, l.translateY, u.translateX, u.translateY, f, d),
        i(l.rotate, u.rotate, f, d),
        s(l.skewX, u.skewX, f, d),
        c(l.scaleX, l.scaleY, u.scaleX, u.scaleY, f, d),
        (l = u = null),
        function (v) {
          for (var p = -1, m = d.length, g; ++p < m; ) f[(g = d[p]).i] = g.x(v);
          return f.join("");
        }
      );
    };
  }
  var qz = r_(Yz, "px, ", "px)", "deg)"),
    Xz = r_(Kz, ", ", ")", ")");
  function Zz(e) {
    return function (t, r) {
      var n = e((t = Cp(t)).h, (r = Cp(r)).h),
        a = gt(t.s, r.s),
        o = gt(t.l, r.l),
        i = gt(t.opacity, r.opacity);
      return function (s) {
        return (t.h = n(s)), (t.s = a(s)), (t.l = o(s)), (t.opacity = i(s)), t + "";
      };
    };
  }
  const Jz = Zz(Zg);
  function Qz(e, t) {
    var r = gt((e = Op(e)).l, (t = Op(t)).l),
      n = gt(e.a, t.a),
      a = gt(e.b, t.b),
      o = gt(e.opacity, t.opacity);
    return function (i) {
      return (e.l = r(i)), (e.a = n(i)), (e.b = a(i)), (e.opacity = o(i)), e + "";
    };
  }
  function eV(e) {
    return function (t, r) {
      var n = e((t = Jl(t)).h, (r = Jl(r)).h),
        a = gt(t.c, r.c),
        o = gt(t.l, r.l),
        i = gt(t.opacity, r.opacity);
      return function (s) {
        return (t.h = n(s)), (t.c = a(s)), (t.l = o(s)), (t.opacity = i(s)), t + "";
      };
    };
  }
  const tV = eV(Zg);
  function n_(e) {
    return (function t(r) {
      r = +r;
      function n(a, o) {
        var i = e((a = Or(a)).h, (o = Or(o)).h),
          s = gt(a.s, o.s),
          c = gt(a.l, o.l),
          l = gt(a.opacity, o.opacity);
        return function (u) {
          return (a.h = i(u)), (a.s = s(u)), (a.l = c(Math.pow(u, r))), (a.opacity = l(u)), a + "";
        };
      }
      return (n.gamma = t), n;
    })(1);
  }
  n_(Zg);
  var Qg = n_(gt);
  function a_(e, t) {
    t === void 0 && ((t = e), (e = Is));
    for (var r = 0, n = t.length - 1, a = t[0], o = new Array(n < 0 ? 0 : n); r < n; ) o[r] = e(a, (a = t[++r]));
    return function (i) {
      var s = Math.max(0, Math.min(n - 1, Math.floor((i *= n))));
      return o[s](i - s);
    };
  }
  function _r(e, t) {
    for (var r = new Array(t), n = 0; n < t; ++n) r[n] = e(n / (t - 1));
    return r;
  }
  var jo = 0,
    _i = 0,
    hi = 0,
    o_ = 1e3,
    au,
    Pi,
    ou = 0,
    pa = 0,
    uf = 0,
    ns = typeof performance == "object" && performance.now ? performance : Date,
    i_ =
      typeof window == "object" && window.requestAnimationFrame
        ? window.requestAnimationFrame.bind(window)
        : function (e) {
            setTimeout(e, 17);
          };
  function e0() {
    return pa || (i_(rV), (pa = ns.now() + uf));
  }
  function rV() {
    pa = 0;
  }
  function iu() {
    this._call = this._time = this._next = null;
  }
  iu.prototype = s_.prototype = {
    constructor: iu,
    restart: function (e, t, r) {
      if (typeof e != "function") throw new TypeError("callback is not a function");
      (r = (r == null ? e0() : +r) + (t == null ? 0 : +t)), !this._next && Pi !== this && (Pi ? (Pi._next = this) : (au = this), (Pi = this)), (this._call = e), (this._time = r), Np();
    },
    stop: function () {
      this._call && ((this._call = null), (this._time = 1 / 0), Np());
    },
  };
  function s_(e, t, r) {
    var n = new iu();
    return n.restart(e, t, r), n;
  }
  function nV() {
    e0(), ++jo;
    for (var e = au, t; e; ) (t = pa - e._time) >= 0 && e._call.call(void 0, t), (e = e._next);
    --jo;
  }
  function G1() {
    (pa = (ou = ns.now()) + uf), (jo = _i = 0);
    try {
      nV();
    } finally {
      (jo = 0), oV(), (pa = 0);
    }
  }
  function aV() {
    var e = ns.now(),
      t = e - ou;
    t > o_ && ((uf -= t), (ou = e));
  }
  function oV() {
    for (var e, t = au, r, n = 1 / 0; t; ) t._call ? (n > t._time && (n = t._time), (e = t), (t = t._next)) : ((r = t._next), (t._next = null), (t = e ? (e._next = r) : (au = r)));
    (Pi = e), Np(n);
  }
  function Np(e) {
    if (!jo) {
      _i && (_i = clearTimeout(_i));
      var t = e - pa;
      t > 24 ? (e < 1 / 0 && (_i = setTimeout(G1, e - ns.now() - uf)), hi && (hi = clearInterval(hi))) : (hi || ((ou = ns.now()), (hi = setInterval(aV, o_))), (jo = 1), i_(G1));
    }
  }
  function Y1(e, t, r) {
    var n = new iu();
    return (
      (t = t == null ? 0 : +t),
      n.restart(
        (a) => {
          n.stop(), e(a + t);
        },
        t,
        r
      ),
      n
    );
  }
  var iV = JO("start", "end", "cancel", "interrupt"),
    sV = [],
    c_ = 0,
    K1 = 1,
    kp = 2,
    ll = 3,
    q1 = 4,
    Lp = 5,
    ul = 6;
  function ff(e, t, r, n, a, o) {
    var i = e.__transition;
    if (!i) e.__transition = {};
    else if (r in i) return;
    cV(e, r, { name: t, index: n, group: a, on: iV, tween: sV, time: o.time, delay: o.delay, duration: o.duration, ease: o.ease, timer: null, state: c_ });
  }
  function t0(e, t) {
    var r = fr(e, t);
    if (r.state > c_) throw new Error("too late; already scheduled");
    return r;
  }
  function Nr(e, t) {
    var r = fr(e, t);
    if (r.state > ll) throw new Error("too late; already running");
    return r;
  }
  function fr(e, t) {
    var r = e.__transition;
    if (!r || !(r = r[t])) throw new Error("transition not found");
    return r;
  }
  function cV(e, t, r) {
    var n = e.__transition,
      a;
    (n[t] = r), (r.timer = s_(o, 0, r.time));
    function o(l) {
      (r.state = K1), r.timer.restart(i, r.delay, r.time), r.delay <= l && i(l - r.delay);
    }
    function i(l) {
      var u, f, d, v;
      if (r.state !== K1) return c();
      for (u in n)
        if (((v = n[u]), v.name === r.name)) {
          if (v.state === ll) return Y1(i);
          v.state === q1
            ? ((v.state = ul), v.timer.stop(), v.on.call("interrupt", e, e.__data__, v.index, v.group), delete n[u])
            : +u < t && ((v.state = ul), v.timer.stop(), v.on.call("cancel", e, e.__data__, v.index, v.group), delete n[u]);
        }
      if (
        (Y1(function () {
          r.state === ll && ((r.state = q1), r.timer.restart(s, r.delay, r.time), s(l));
        }),
        (r.state = kp),
        r.on.call("start", e, e.__data__, r.index, r.group),
        r.state === kp)
      ) {
        for (r.state = ll, a = new Array((d = r.tween.length)), u = 0, f = -1; u < d; ++u) (v = r.tween[u].value.call(e, e.__data__, r.index, r.group)) && (a[++f] = v);
        a.length = f + 1;
      }
    }
    function s(l) {
      for (var u = l < r.duration ? r.ease.call(null, l / r.duration) : (r.timer.restart(c), (r.state = Lp), 1), f = -1, d = a.length; ++f < d; ) a[f].call(e, u);
      r.state === Lp && (r.on.call("end", e, e.__data__, r.index, r.group), c());
    }
    function c() {
      (r.state = ul), r.timer.stop(), delete n[t];
      for (var l in n) return;
      delete e.__transition;
    }
  }
  function lV(e, t) {
    var r = e.__transition,
      n,
      a,
      o = !0,
      i;
    if (r) {
      t = t == null ? null : t + "";
      for (i in r) {
        if ((n = r[i]).name !== t) {
          o = !1;
          continue;
        }
        (a = n.state > kp && n.state < Lp), (n.state = ul), n.timer.stop(), n.on.call(a ? "interrupt" : "cancel", e, e.__data__, n.index, n.group), delete r[i];
      }
      o && delete e.__transition;
    }
  }
  function uV(e) {
    return this.each(function () {
      lV(this, e);
    });
  }
  function fV(e, t) {
    var r, n;
    return function () {
      var a = Nr(this, e),
        o = a.tween;
      if (o !== r) {
        n = r = o;
        for (var i = 0, s = n.length; i < s; ++i)
          if (n[i].name === t) {
            (n = n.slice()), n.splice(i, 1);
            break;
          }
      }
      a.tween = n;
    };
  }
  function dV(e, t, r) {
    var n, a;
    if (typeof r != "function") throw new Error();
    return function () {
      var o = Nr(this, e),
        i = o.tween;
      if (i !== n) {
        a = (n = i).slice();
        for (var s = { name: t, value: r }, c = 0, l = a.length; c < l; ++c)
          if (a[c].name === t) {
            a[c] = s;
            break;
          }
        c === l && a.push(s);
      }
      o.tween = a;
    };
  }
  function hV(e, t) {
    var r = this._id;
    if (((e += ""), arguments.length < 2)) {
      for (var n = fr(this.node(), r).tween, a = 0, o = n.length, i; a < o; ++a) if ((i = n[a]).name === e) return i.value;
      return null;
    }
    return this.each((t == null ? fV : dV)(r, e, t));
  }
  function r0(e, t, r) {
    var n = e._id;
    return (
      e.each(function () {
        var a = Nr(this, n);
        (a.value || (a.value = {}))[t] = r.apply(this, arguments);
      }),
      function (a) {
        return fr(a, n).value[t];
      }
    );
  }
  function l_(e, t) {
    var r;
    return (typeof t == "number" ? Et : t instanceof ha ? va : (r = ha(t)) ? ((t = r), va) : e_)(e, t);
  }
  function vV(e) {
    return function () {
      this.removeAttribute(e);
    };
  }
  function pV(e) {
    return function () {
      this.removeAttributeNS(e.space, e.local);
    };
  }
  function mV(e, t, r) {
    var n,
      a = r + "",
      o;
    return function () {
      var i = this.getAttribute(e);
      return i === a ? null : i === n ? o : (o = t((n = i), r));
    };
  }
  function gV(e, t, r) {
    var n,
      a = r + "",
      o;
    return function () {
      var i = this.getAttributeNS(e.space, e.local);
      return i === a ? null : i === n ? o : (o = t((n = i), r));
    };
  }
  function yV(e, t, r) {
    var n, a, o;
    return function () {
      var i,
        s = r(this),
        c;
      return s == null ? void this.removeAttribute(e) : ((i = this.getAttribute(e)), (c = s + ""), i === c ? null : i === n && c === a ? o : ((a = c), (o = t((n = i), s))));
    };
  }
  function bV(e, t, r) {
    var n, a, o;
    return function () {
      var i,
        s = r(this),
        c;
      return s == null
        ? void this.removeAttributeNS(e.space, e.local)
        : ((i = this.getAttributeNS(e.space, e.local)), (c = s + ""), i === c ? null : i === n && c === a ? o : ((a = c), (o = t((n = i), s))));
    };
  }
  function $V(e, t) {
    var r = of(e),
      n = r === "transform" ? Xz : l_;
    return this.attrTween(e, typeof t == "function" ? (r.local ? bV : yV)(r, n, r0(this, "attr." + e, t)) : t == null ? (r.local ? pV : vV)(r) : (r.local ? gV : mV)(r, n, t));
  }
  function wV(e, t) {
    return function (r) {
      this.setAttribute(e, t.call(this, r));
    };
  }
  function SV(e, t) {
    return function (r) {
      this.setAttributeNS(e.space, e.local, t.call(this, r));
    };
  }
  function EV(e, t) {
    var r, n;
    function a() {
      var o = t.apply(this, arguments);
      return o !== n && (r = (n = o) && SV(e, o)), r;
    }
    return (a._value = t), a;
  }
  function xV(e, t) {
    var r, n;
    function a() {
      var o = t.apply(this, arguments);
      return o !== n && (r = (n = o) && wV(e, o)), r;
    }
    return (a._value = t), a;
  }
  function TV(e, t) {
    var r = "attr." + e;
    if (arguments.length < 2) return (r = this.tween(r)) && r._value;
    if (t == null) return this.tween(r, null);
    if (typeof t != "function") throw new Error();
    var n = of(e);
    return this.tween(r, (n.local ? EV : xV)(n, t));
  }
  function CV(e, t) {
    return function () {
      t0(this, e).delay = +t.apply(this, arguments);
    };
  }
  function OV(e, t) {
    return (
      (t = +t),
      function () {
        t0(this, e).delay = t;
      }
    );
  }
  function _V(e) {
    var t = this._id;
    return arguments.length ? this.each((typeof e == "function" ? CV : OV)(t, e)) : fr(this.node(), t).delay;
  }
  function PV(e, t) {
    return function () {
      Nr(this, e).duration = +t.apply(this, arguments);
    };
  }
  function IV(e, t) {
    return (
      (t = +t),
      function () {
        Nr(this, e).duration = t;
      }
    );
  }
  function AV(e) {
    var t = this._id;
    return arguments.length ? this.each((typeof e == "function" ? PV : IV)(t, e)) : fr(this.node(), t).duration;
  }
  function RV(e, t) {
    if (typeof t != "function") throw new Error();
    return function () {
      Nr(this, e).ease = t;
    };
  }
  function MV(e) {
    var t = this._id;
    return arguments.length ? this.each(RV(t, e)) : fr(this.node(), t).ease;
  }
  function DV(e, t) {
    return function () {
      var r = t.apply(this, arguments);
      if (typeof r != "function") throw new Error();
      Nr(this, e).ease = r;
    };
  }
  function NV(e) {
    if (typeof e != "function") throw new Error();
    return this.each(DV(this._id, e));
  }
  function kV(e) {
    typeof e != "function" && (e = TO(e));
    for (var t = this._groups, r = t.length, n = new Array(r), a = 0; a < r; ++a)
      for (var o = t[a], i = o.length, s = (n[a] = []), c, l = 0; l < i; ++l) (c = o[l]) && e.call(c, c.__data__, l, o) && s.push(c);
    return new Qr(n, this._parents, this._name, this._id);
  }
  function LV(e) {
    if (e._id !== this._id) throw new Error();
    for (var t = this._groups, r = e._groups, n = t.length, a = r.length, o = Math.min(n, a), i = new Array(n), s = 0; s < o; ++s)
      for (var c = t[s], l = r[s], u = c.length, f = (i[s] = new Array(u)), d, v = 0; v < u; ++v) (d = c[v] || l[v]) && (f[v] = d);
    for (; s < n; ++s) i[s] = t[s];
    return new Qr(i, this._parents, this._name, this._id);
  }
  function FV(e) {
    return (e + "")
      .trim()
      .split(/^|\s+/)
      .every(function (t) {
        var r = t.indexOf(".");
        return r >= 0 && (t = t.slice(0, r)), !t || t === "start";
      });
  }
  function jV(e, t, r) {
    var n,
      a,
      o = FV(t) ? t0 : Nr;
    return function () {
      var i = o(this, e),
        s = i.on;
      s !== n && (a = (n = s).copy()).on(t, r), (i.on = a);
    };
  }
  function BV(e, t) {
    var r = this._id;
    return arguments.length < 2 ? fr(this.node(), r).on.on(e) : this.each(jV(r, e, t));
  }
  function UV(e) {
    return function () {
      var t = this.parentNode;
      for (var r in this.__transition) if (+r !== e) return;
      t && t.removeChild(this);
    };
  }
  function WV() {
    return this.on("end.remove", UV(this._id));
  }
  function HV(e) {
    var t = this._name,
      r = this._id;
    typeof e != "function" && (e = Hg(e));
    for (var n = this._groups, a = n.length, o = new Array(a), i = 0; i < a; ++i)
      for (var s = n[i], c = s.length, l = (o[i] = new Array(c)), u, f, d = 0; d < c; ++d)
        (u = s[d]) && (f = e.call(u, u.__data__, d, s)) && ("__data__" in u && (f.__data__ = u.__data__), (l[d] = f), ff(l[d], t, r, d, l, fr(u, r)));
    return new Qr(o, this._parents, t, r);
  }
  function zV(e) {
    var t = this._name,
      r = this._id;
    typeof e != "function" && (e = xO(e));
    for (var n = this._groups, a = n.length, o = [], i = [], s = 0; s < a; ++s)
      for (var c = n[s], l = c.length, u, f = 0; f < l; ++f)
        if ((u = c[f])) {
          for (var d = e.call(u, u.__data__, f, c), v, p = fr(u, r), m = 0, g = d.length; m < g; ++m) (v = d[m]) && ff(v, t, r, m, d, p);
          o.push(d), i.push(u);
        }
    return new Qr(o, i, t, r);
  }
  var VV = _s.prototype.constructor;
  function GV() {
    return new VV(this._groups, this._parents);
  }
  function YV(e, t) {
    var r, n, a;
    return function () {
      var o = Lo(this, e),
        i = (this.style.removeProperty(e), Lo(this, e));
      return o === i ? null : o === r && i === n ? a : (a = t((r = o), (n = i)));
    };
  }
  function u_(e) {
    return function () {
      this.style.removeProperty(e);
    };
  }
  function KV(e, t, r) {
    var n,
      a = r + "",
      o;
    return function () {
      var i = Lo(this, e);
      return i === a ? null : i === n ? o : (o = t((n = i), r));
    };
  }
  function qV(e, t, r) {
    var n, a, o;
    return function () {
      var i = Lo(this, e),
        s = r(this),
        c = s + "";
      return s == null && (c = s = (this.style.removeProperty(e), Lo(this, e))), i === c ? null : i === n && c === a ? o : ((a = c), (o = t((n = i), s)));
    };
  }
  function XV(e, t) {
    var r,
      n,
      a,
      o = "style." + t,
      i = "end." + o,
      s;
    return function () {
      var c = Nr(this, e),
        l = c.on,
        u = c.value[o] == null ? s || (s = u_(t)) : void 0;
      (l !== r || a !== u) && (n = (r = l).copy()).on(i, (a = u)), (c.on = n);
    };
  }
  function ZV(e, t, r) {
    var n = (e += "") == "transform" ? qz : l_;
    return t == null
      ? this.styleTween(e, YV(e, n)).on("end.style." + e, u_(e))
      : typeof t == "function"
      ? this.styleTween(e, qV(e, n, r0(this, "style." + e, t))).each(XV(this._id, e))
      : this.styleTween(e, KV(e, n, t), r).on("end.style." + e, null);
  }
  function JV(e, t, r) {
    return function (n) {
      this.style.setProperty(e, t.call(this, n), r);
    };
  }
  function QV(e, t, r) {
    var n, a;
    function o() {
      var i = t.apply(this, arguments);
      return i !== a && (n = (a = i) && JV(e, i, r)), n;
    }
    return (o._value = t), o;
  }
  function eG(e, t, r) {
    var n = "style." + (e += "");
    if (arguments.length < 2) return (n = this.tween(n)) && n._value;
    if (t == null) return this.tween(n, null);
    if (typeof t != "function") throw new Error();
    return this.tween(n, QV(e, t, r ?? ""));
  }
  function tG(e) {
    return function () {
      this.textContent = e;
    };
  }
  function rG(e) {
    return function () {
      var t = e(this);
      this.textContent = t ?? "";
    };
  }
  function nG(e) {
    return this.tween("text", typeof e == "function" ? rG(r0(this, "text", e)) : tG(e == null ? "" : e + ""));
  }
  function aG(e) {
    return function (t) {
      this.textContent = e.call(this, t);
    };
  }
  function oG(e) {
    var t, r;
    function n() {
      var a = e.apply(this, arguments);
      return a !== r && (t = (r = a) && aG(a)), t;
    }
    return (n._value = e), n;
  }
  function iG(e) {
    var t = "text";
    if (arguments.length < 1) return (t = this.tween(t)) && t._value;
    if (e == null) return this.tween(t, null);
    if (typeof e != "function") throw new Error();
    return this.tween(t, oG(e));
  }
  function sG() {
    for (var e = this._name, t = this._id, r = f_(), n = this._groups, a = n.length, o = 0; o < a; ++o)
      for (var i = n[o], s = i.length, c, l = 0; l < s; ++l)
        if ((c = i[l])) {
          var u = fr(c, t);
          ff(c, e, r, l, i, { time: u.time + u.delay + u.duration, delay: 0, duration: u.duration, ease: u.ease });
        }
    return new Qr(n, this._parents, e, r);
  }
  function cG() {
    var e,
      t,
      r = this,
      n = r._id,
      a = r.size();
    return new Promise(function (o, i) {
      var s = { value: i },
        c = {
          value: function () {
            --a === 0 && o();
          },
        };
      r.each(function () {
        var l = Nr(this, n),
          u = l.on;
        u !== e && ((t = (e = u).copy()), t._.cancel.push(s), t._.interrupt.push(s), t._.end.push(c)), (l.on = t);
      }),
        a === 0 && o();
    });
  }
  var lG = 0;
  function Qr(e, t, r, n) {
    (this._groups = e), (this._parents = t), (this._name = r), (this._id = n);
  }
  function f_() {
    return ++lG;
  }
  var Br = _s.prototype;
  Qr.prototype = {
    constructor: Qr,
    select: HV,
    selectAll: zV,
    selectChild: Br.selectChild,
    selectChildren: Br.selectChildren,
    filter: kV,
    merge: LV,
    selection: GV,
    transition: sG,
    call: Br.call,
    nodes: Br.nodes,
    node: Br.node,
    size: Br.size,
    empty: Br.empty,
    each: Br.each,
    on: BV,
    attr: $V,
    attrTween: TV,
    style: ZV,
    styleTween: eG,
    text: nG,
    textTween: iG,
    remove: WV,
    tween: hV,
    delay: _V,
    duration: AV,
    ease: MV,
    easeVarying: NV,
    end: cG,
    [Symbol.iterator]: Br[Symbol.iterator],
  };
  function uG(e) {
    return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
  }
  var fG = { time: null, delay: 0, duration: 250, ease: uG };
  function dG(e, t) {
    for (var r; !(r = e.__transition) || !(r = r[t]); ) if (!(e = e.parentNode)) throw new Error(`transition ${t} not found`);
    return r;
  }
  function hG(e) {
    var t, r;
    e instanceof Qr ? ((t = e._id), (e = e._name)) : ((t = f_()), ((r = fG).time = e0()), (e = e == null ? null : e + ""));
    for (var n = this._groups, a = n.length, o = 0; o < a; ++o) for (var i = n[o], s = i.length, c, l = 0; l < s; ++l) (c = i[l]) && ff(c, e, t, l, i, r || dG(c, t));
    return new Qr(n, this._parents, e, t);
  }
  _s.prototype.interrupt = uV;
  _s.prototype.transition = hG;
  var X1 = {},
    rh = {},
    nh = 34,
    vi = 10,
    ah = 13;
  function d_(e) {
    return new Function(
      "d",
      "return {" +
        e
          .map(function (t, r) {
            return JSON.stringify(t) + ": d[" + r + '] || ""';
          })
          .join(",") +
        "}"
    );
  }
  function vG(e, t) {
    var r = d_(e);
    return function (n, a) {
      return t(r(n), a, e);
    };
  }
  function Z1(e) {
    var t = Object.create(null),
      r = [];
    return (
      e.forEach(function (n) {
        for (var a in n) a in t || r.push((t[a] = a));
      }),
      r
    );
  }
  function Ot(e, t) {
    var r = e + "",
      n = r.length;
    return n < t ? new Array(t - n + 1).join(0) + r : r;
  }
  function pG(e) {
    return e < 0 ? "-" + Ot(-e, 6) : e > 9999 ? "+" + Ot(e, 6) : Ot(e, 4);
  }
  function mG(e) {
    var t = e.getUTCHours(),
      r = e.getUTCMinutes(),
      n = e.getUTCSeconds(),
      a = e.getUTCMilliseconds();
    return isNaN(e)
      ? "Invalid Date"
      : pG(e.getUTCFullYear()) +
          "-" +
          Ot(e.getUTCMonth() + 1, 2) +
          "-" +
          Ot(e.getUTCDate(), 2) +
          (a
            ? "T" + Ot(t, 2) + ":" + Ot(r, 2) + ":" + Ot(n, 2) + "." + Ot(a, 3) + "Z"
            : n
            ? "T" + Ot(t, 2) + ":" + Ot(r, 2) + ":" + Ot(n, 2) + "Z"
            : r || t
            ? "T" + Ot(t, 2) + ":" + Ot(r, 2) + "Z"
            : "");
  }
  function h_(e) {
    var t = new RegExp(
        '["' +
          e +
          `
\r]`
      ),
      r = e.charCodeAt(0);
    function n(f, d) {
      var v,
        p,
        m = a(f, function (g, y) {
          if (v) return v(g, y - 1);
          (p = g), (v = d ? vG(g, d) : d_(g));
        });
      return (m.columns = p || []), m;
    }
    function a(f, d) {
      var v = [],
        p = f.length,
        m = 0,
        g = 0,
        y,
        b = p <= 0,
        $ = !1;
      f.charCodeAt(p - 1) === vi && --p, f.charCodeAt(p - 1) === ah && --p;
      function S() {
        if (b) return rh;
        if ($) return ($ = !1), X1;
        var P,
          M = m,
          T;
        if (f.charCodeAt(M) === nh) {
          for (; (m++ < p && f.charCodeAt(m) !== nh) || f.charCodeAt(++m) === nh; );
          return (P = m) >= p ? (b = !0) : (T = f.charCodeAt(m++)) === vi ? ($ = !0) : T === ah && (($ = !0), f.charCodeAt(m) === vi && ++m), f.slice(M + 1, P - 1).replace(/""/g, '"');
        }
        for (; m < p; ) {
          if ((T = f.charCodeAt((P = m++))) === vi) $ = !0;
          else if (T === ah) ($ = !0), f.charCodeAt(m) === vi && ++m;
          else if (T !== r) continue;
          return f.slice(M, P);
        }
        return (b = !0), f.slice(M, p);
      }
      for (; (y = S()) !== rh; ) {
        for (var A = []; y !== X1 && y !== rh; ) A.push(y), (y = S());
        (d && (A = d(A, g++)) == null) || v.push(A);
      }
      return v;
    }
    function o(f, d) {
      return f.map(function (v) {
        return d
          .map(function (p) {
            return u(v[p]);
          })
          .join(e);
      });
    }
    function i(f, d) {
      return (
        d == null && (d = Z1(f)),
        [d.map(u).join(e)].concat(o(f, d)).join(`
`)
      );
    }
    function s(f, d) {
      return (
        d == null && (d = Z1(f)),
        o(f, d).join(`
`)
      );
    }
    function c(f) {
      return f.map(l).join(`
`);
    }
    function l(f) {
      return f.map(u).join(e);
    }
    function u(f) {
      return f == null ? "" : f instanceof Date ? mG(f) : t.test((f += "")) ? '"' + f.replace(/"/g, '""') + '"' : f;
    }
    return { parse: n, parseRows: a, format: i, formatBody: s, formatRows: c, formatRow: l, formatValue: u };
  }
  var gG = h_(","),
    yG = gG.parse;
  function bG(e) {
    if (!e.ok) throw new Error(e.status + " " + e.statusText);
    return e.text();
  }
  function n0(e, t) {
    return fetch(e, t).then(bG);
  }
  function $G(e) {
    return function (t, r, n) {
      return (
        arguments.length === 2 && typeof r == "function" && ((n = r), (r = void 0)),
        n0(t, r).then(function (a) {
          return e(a, n);
        })
      );
    };
  }
  function wG(e, t, r, n) {
    arguments.length === 3 && typeof r == "function" && ((n = r), (r = void 0));
    var a = h_(e);
    return n0(t, r).then(function (o) {
      return a.parse(o, n);
    });
  }
  var SG = $G(yG);
  function EG(e) {
    if (!e.ok) throw new Error(e.status + " " + e.statusText);
    if (!(e.status === 204 || e.status === 205)) return e.json();
  }
  function xG(e, t) {
    return fetch(e, t).then(EG);
  }
  function TG(e) {
    return Math.abs((e = Math.round(e))) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
  }
  function su(e, t) {
    if ((r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
    var r,
      n = e.slice(0, r);
    return [n.length > 1 ? n[0] + n.slice(2) : n, +e.slice(r + 1)];
  }
  function Bo(e) {
    return (e = su(Math.abs(e))), e ? e[1] : NaN;
  }
  function CG(e, t) {
    return function (r, n) {
      for (var a = r.length, o = [], i = 0, s = e[0], c = 0; a > 0 && s > 0 && (c + s + 1 > n && (s = Math.max(1, n - c)), o.push(r.substring((a -= s), a + s)), !((c += s + 1) > n)); )
        s = e[(i = (i + 1) % e.length)];
      return o.reverse().join(t);
    };
  }
  function OG(e) {
    return function (t) {
      return t.replace(/[0-9]/g, function (r) {
        return e[+r];
      });
    };
  }
  var _G = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
  function as(e) {
    if (!(t = _G.exec(e))) throw new Error("invalid format: " + e);
    var t;
    return new a0({ fill: t[1], align: t[2], sign: t[3], symbol: t[4], zero: t[5], width: t[6], comma: t[7], precision: t[8] && t[8].slice(1), trim: t[9], type: t[10] });
  }
  as.prototype = a0.prototype;
  function a0(e) {
    (this.fill = e.fill === void 0 ? " " : e.fill + ""),
      (this.align = e.align === void 0 ? ">" : e.align + ""),
      (this.sign = e.sign === void 0 ? "-" : e.sign + ""),
      (this.symbol = e.symbol === void 0 ? "" : e.symbol + ""),
      (this.zero = !!e.zero),
      (this.width = e.width === void 0 ? void 0 : +e.width),
      (this.comma = !!e.comma),
      (this.precision = e.precision === void 0 ? void 0 : +e.precision),
      (this.trim = !!e.trim),
      (this.type = e.type === void 0 ? "" : e.type + "");
  }
  a0.prototype.toString = function () {
    return (
      this.fill +
      this.align +
      this.sign +
      this.symbol +
      (this.zero ? "0" : "") +
      (this.width === void 0 ? "" : Math.max(1, this.width | 0)) +
      (this.comma ? "," : "") +
      (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) +
      (this.trim ? "~" : "") +
      this.type
    );
  };
  function PG(e) {
    e: for (var t = e.length, r = 1, n = -1, a; r < t; ++r)
      switch (e[r]) {
        case ".":
          n = a = r;
          break;
        case "0":
          n === 0 && (n = r), (a = r);
          break;
        default:
          if (!+e[r]) break e;
          n > 0 && (n = 0);
          break;
      }
    return n > 0 ? e.slice(0, n) + e.slice(a + 1) : e;
  }
  var v_;
  function IG(e, t) {
    var r = su(e, t);
    if (!r) return e + "";
    var n = r[0],
      a = r[1],
      o = a - (v_ = Math.max(-8, Math.min(8, Math.floor(a / 3))) * 3) + 1,
      i = n.length;
    return o === i ? n : o > i ? n + new Array(o - i + 1).join("0") : o > 0 ? n.slice(0, o) + "." + n.slice(o) : "0." + new Array(1 - o).join("0") + su(e, Math.max(0, t + o - 1))[0];
  }
  function J1(e, t) {
    var r = su(e, t);
    if (!r) return e + "";
    var n = r[0],
      a = r[1];
    return a < 0 ? "0." + new Array(-a).join("0") + n : n.length > a + 1 ? n.slice(0, a + 1) + "." + n.slice(a + 1) : n + new Array(a - n.length + 2).join("0");
  }
  const Q1 = {
    "%": (e, t) => (e * 100).toFixed(t),
    b: (e) => Math.round(e).toString(2),
    c: (e) => e + "",
    d: TG,
    e: (e, t) => e.toExponential(t),
    f: (e, t) => e.toFixed(t),
    g: (e, t) => e.toPrecision(t),
    o: (e) => Math.round(e).toString(8),
    p: (e, t) => J1(e * 100, t),
    r: J1,
    s: IG,
    X: (e) => Math.round(e).toString(16).toUpperCase(),
    x: (e) => Math.round(e).toString(16),
  };
  function e$(e) {
    return e;
  }
  var t$ = Array.prototype.map,
    r$ = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
  function AG(e) {
    var t = e.grouping === void 0 || e.thousands === void 0 ? e$ : CG(t$.call(e.grouping, Number), e.thousands + ""),
      r = e.currency === void 0 ? "" : e.currency[0] + "",
      n = e.currency === void 0 ? "" : e.currency[1] + "",
      a = e.decimal === void 0 ? "." : e.decimal + "",
      o = e.numerals === void 0 ? e$ : OG(t$.call(e.numerals, String)),
      i = e.percent === void 0 ? "%" : e.percent + "",
      s = e.minus === void 0 ? "−" : e.minus + "",
      c = e.nan === void 0 ? "NaN" : e.nan + "";
    function l(f) {
      f = as(f);
      var d = f.fill,
        v = f.align,
        p = f.sign,
        m = f.symbol,
        g = f.zero,
        y = f.width,
        b = f.comma,
        $ = f.precision,
        S = f.trim,
        A = f.type;
      A === "n" ? ((b = !0), (A = "g")) : Q1[A] || ($ === void 0 && ($ = 12), (S = !0), (A = "g")), (g || (d === "0" && v === "=")) && ((g = !0), (d = "0"), (v = "="));
      var P = m === "$" ? r : m === "#" && /[boxX]/.test(A) ? "0" + A.toLowerCase() : "",
        M = m === "$" ? n : /[%p]/.test(A) ? i : "",
        T = Q1[A],
        F = /[defgprs%]/.test(A);
      $ = $ === void 0 ? 6 : /[gprs]/.test(A) ? Math.max(1, Math.min(21, $)) : Math.max(0, Math.min(20, $));
      function k(D) {
        var _ = P,
          O = M,
          w,
          R,
          I;
        if (A === "c") (O = T(D) + O), (D = "");
        else {
          D = +D;
          var N = D < 0 || 1 / D < 0;
          if (
            ((D = isNaN(D) ? c : T(Math.abs(D), $)),
            S && (D = PG(D)),
            N && +D == 0 && p !== "+" && (N = !1),
            (_ = (N ? (p === "(" ? p : s) : p === "-" || p === "(" ? "" : p) + _),
            (O = (A === "s" ? r$[8 + v_ / 3] : "") + O + (N && p === "(" ? ")" : "")),
            F)
          ) {
            for (w = -1, R = D.length; ++w < R; )
              if (((I = D.charCodeAt(w)), 48 > I || I > 57)) {
                (O = (I === 46 ? a + D.slice(w + 1) : D.slice(w)) + O), (D = D.slice(0, w));
                break;
              }
          }
        }
        b && !g && (D = t(D, 1 / 0));
        var B = _.length + D.length + O.length,
          W = B < y ? new Array(y - B + 1).join(d) : "";
        switch ((b && g && ((D = t(W + D, W.length ? y - O.length : 1 / 0)), (W = "")), v)) {
          case "<":
            D = _ + D + O + W;
            break;
          case "=":
            D = _ + W + D + O;
            break;
          case "^":
            D = W.slice(0, (B = W.length >> 1)) + _ + D + O + W.slice(B);
            break;
          default:
            D = W + _ + D + O;
            break;
        }
        return o(D);
      }
      return (
        (k.toString = function () {
          return f + "";
        }),
        k
      );
    }
    function u(f, d) {
      var v = l(((f = as(f)), (f.type = "f"), f)),
        p = Math.max(-8, Math.min(8, Math.floor(Bo(d) / 3))) * 3,
        m = Math.pow(10, -p),
        g = r$[8 + p / 3];
      return function (y) {
        return v(m * y) + g;
      };
    }
    return { format: l, formatPrefix: u };
  }
  var mc, o0, p_;
  RG({ thousands: ",", grouping: [3], currency: ["$", ""] });
  function RG(e) {
    return (mc = AG(e)), (o0 = mc.format), (p_ = mc.formatPrefix), mc;
  }
  function MG(e) {
    return Math.max(0, -Bo(Math.abs(e)));
  }
  function DG(e, t) {
    return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Bo(t) / 3))) * 3 - Bo(Math.abs(e)));
  }
  function NG(e, t) {
    return (e = Math.abs(e)), (t = Math.abs(t) - e), Math.max(0, Bo(t) - Bo(e)) + 1;
  }
  function kr(e, t) {
    switch (arguments.length) {
      case 0:
        break;
      case 1:
        this.range(e);
        break;
      default:
        this.range(t).domain(e);
        break;
    }
    return this;
  }
  function df(e, t) {
    switch (arguments.length) {
      case 0:
        break;
      case 1: {
        typeof e == "function" ? this.interpolator(e) : this.range(e);
        break;
      }
      default: {
        this.domain(e), typeof t == "function" ? this.interpolator(t) : this.range(t);
        break;
      }
    }
    return this;
  }
  const Fp = Symbol("implicit");
  function i0() {
    var e = new W1(),
      t = [],
      r = [],
      n = Fp;
    function a(o) {
      let i = e.get(o);
      if (i === void 0) {
        if (n !== Fp) return n;
        e.set(o, (i = t.push(o) - 1));
      }
      return r[i % r.length];
    }
    return (
      (a.domain = function (o) {
        if (!arguments.length) return t.slice();
        (t = []), (e = new W1());
        for (const i of o) e.has(i) || e.set(i, t.push(i) - 1);
        return a;
      }),
      (a.range = function (o) {
        return arguments.length ? ((r = Array.from(o)), a) : r.slice();
      }),
      (a.unknown = function (o) {
        return arguments.length ? ((n = o), a) : n;
      }),
      (a.copy = function () {
        return i0(t, r).unknown(n);
      }),
      kr.apply(a, arguments),
      a
    );
  }
  function s0() {
    var e = i0().unknown(void 0),
      t = e.domain,
      r = e.range,
      n = 0,
      a = 1,
      o,
      i,
      s = !1,
      c = 0,
      l = 0,
      u = 0.5;
    delete e.unknown;
    function f() {
      var d = t().length,
        v = a < n,
        p = v ? a : n,
        m = v ? n : a;
      (o = (m - p) / Math.max(1, d - c + l * 2)), s && (o = Math.floor(o)), (p += (m - p - o * (d - c)) * u), (i = o * (1 - c)), s && ((p = Math.round(p)), (i = Math.round(i)));
      var g = Rp(d).map(function (y) {
        return p + o * y;
      });
      return r(v ? g.reverse() : g);
    }
    return (
      (e.domain = function (d) {
        return arguments.length ? (t(d), f()) : t();
      }),
      (e.range = function (d) {
        return arguments.length ? (([n, a] = d), (n = +n), (a = +a), f()) : [n, a];
      }),
      (e.rangeRound = function (d) {
        return ([n, a] = d), (n = +n), (a = +a), (s = !0), f();
      }),
      (e.bandwidth = function () {
        return i;
      }),
      (e.step = function () {
        return o;
      }),
      (e.round = function (d) {
        return arguments.length ? ((s = !!d), f()) : s;
      }),
      (e.padding = function (d) {
        return arguments.length ? ((c = Math.min(1, (l = +d))), f()) : c;
      }),
      (e.paddingInner = function (d) {
        return arguments.length ? ((c = Math.min(1, d)), f()) : c;
      }),
      (e.paddingOuter = function (d) {
        return arguments.length ? ((l = +d), f()) : l;
      }),
      (e.align = function (d) {
        return arguments.length ? ((u = Math.max(0, Math.min(1, d))), f()) : u;
      }),
      (e.copy = function () {
        return s0(t(), [n, a]).round(s).paddingInner(c).paddingOuter(l).align(u);
      }),
      kr.apply(f(), arguments)
    );
  }
  function m_(e) {
    var t = e.copy;
    return (
      (e.padding = e.paddingOuter),
      delete e.paddingInner,
      delete e.paddingOuter,
      (e.copy = function () {
        return m_(t());
      }),
      e
    );
  }
  function kG() {
    return m_(s0.apply(null, arguments).paddingInner(1));
  }
  function LG(e) {
    return function () {
      return e;
    };
  }
  function jp(e) {
    return +e;
  }
  var n$ = [0, 1];
  function Ht(e) {
    return e;
  }
  function Bp(e, t) {
    return (t -= e = +e)
      ? function (r) {
          return (r - e) / t;
        }
      : LG(isNaN(t) ? NaN : 0.5);
  }
  function FG(e, t) {
    var r;
    return (
      e > t && ((r = e), (e = t), (t = r)),
      function (n) {
        return Math.max(e, Math.min(t, n));
      }
    );
  }
  function jG(e, t, r) {
    var n = e[0],
      a = e[1],
      o = t[0],
      i = t[1];
    return (
      a < n ? ((n = Bp(a, n)), (o = r(i, o))) : ((n = Bp(n, a)), (o = r(o, i))),
      function (s) {
        return o(n(s));
      }
    );
  }
  function BG(e, t, r) {
    var n = Math.min(e.length, t.length) - 1,
      a = new Array(n),
      o = new Array(n),
      i = -1;
    for (e[n] < e[0] && ((e = e.slice().reverse()), (t = t.slice().reverse())); ++i < n; ) (a[i] = Bp(e[i], e[i + 1])), (o[i] = r(t[i], t[i + 1]));
    return function (s) {
      var c = qg(e, s, 1, n) - 1;
      return o[c](a[c](s));
    };
  }
  function As(e, t) {
    return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
  }
  function hf() {
    var e = n$,
      t = n$,
      r = Is,
      n,
      a,
      o,
      i = Ht,
      s,
      c,
      l;
    function u() {
      var d = Math.min(e.length, t.length);
      return i !== Ht && (i = FG(e[0], e[d - 1])), (s = d > 2 ? BG : jG), (c = l = null), f;
    }
    function f(d) {
      return d == null || isNaN((d = +d)) ? o : (c || (c = s(e.map(n), t, r)))(n(i(d)));
    }
    return (
      (f.invert = function (d) {
        return i(a((l || (l = s(t, e.map(n), Et)))(d)));
      }),
      (f.domain = function (d) {
        return arguments.length ? ((e = Array.from(d, jp)), u()) : e.slice();
      }),
      (f.range = function (d) {
        return arguments.length ? ((t = Array.from(d)), u()) : t.slice();
      }),
      (f.rangeRound = function (d) {
        return (t = Array.from(d)), (r = Jg), u();
      }),
      (f.clamp = function (d) {
        return arguments.length ? ((i = d ? !0 : Ht), u()) : i !== Ht;
      }),
      (f.interpolate = function (d) {
        return arguments.length ? ((r = d), u()) : r;
      }),
      (f.unknown = function (d) {
        return arguments.length ? ((o = d), f) : o;
      }),
      function (d, v) {
        return (n = d), (a = v), u();
      }
    );
  }
  function g_() {
    return hf()(Ht, Ht);
  }
  function UG(e, t, r, n) {
    var a = Ip(e, t, r),
      o;
    switch (((n = as(n ?? ",f")), n.type)) {
      case "s": {
        var i = Math.max(Math.abs(e), Math.abs(t));
        return n.precision == null && !isNaN((o = DG(a, i))) && (n.precision = o), p_(n, i);
      }
      case "":
      case "e":
      case "g":
      case "p":
      case "r": {
        n.precision == null && !isNaN((o = NG(a, Math.max(Math.abs(e), Math.abs(t))))) && (n.precision = o - (n.type === "e"));
        break;
      }
      case "f":
      case "%": {
        n.precision == null && !isNaN((o = MG(a))) && (n.precision = o - (n.type === "%") * 2);
        break;
      }
    }
    return o0(n);
  }
  function Rs(e) {
    var t = e.domain;
    return (
      (e.ticks = function (r) {
        var n = t();
        return tu(n[0], n[n.length - 1], r ?? 10);
      }),
      (e.tickFormat = function (r, n) {
        var a = t();
        return UG(a[0], a[a.length - 1], r ?? 10, n);
      }),
      (e.nice = function (r) {
        r == null && (r = 10);
        var n = t(),
          a = 0,
          o = n.length - 1,
          i = n[a],
          s = n[o],
          c,
          l,
          u = 10;
        for (s < i && ((l = i), (i = s), (s = l), (l = a), (a = o), (o = l)); u-- > 0; ) {
          if (((l = Pp(i, s, r)), l === c)) return (n[a] = i), (n[o] = s), t(n);
          if (l > 0) (i = Math.floor(i / l) * l), (s = Math.ceil(s / l) * l);
          else if (l < 0) (i = Math.ceil(i * l) / l), (s = Math.floor(s * l) / l);
          else break;
          c = l;
        }
        return e;
      }),
      e
    );
  }
  function y_() {
    var e = g_();
    return (
      (e.copy = function () {
        return As(e, y_());
      }),
      kr.apply(e, arguments),
      Rs(e)
    );
  }
  function b_(e) {
    var t;
    function r(n) {
      return n == null || isNaN((n = +n)) ? t : n;
    }
    return (
      (r.invert = r),
      (r.domain = r.range =
        function (n) {
          return arguments.length ? ((e = Array.from(n, jp)), r) : e.slice();
        }),
      (r.unknown = function (n) {
        return arguments.length ? ((t = n), r) : t;
      }),
      (r.copy = function () {
        return b_(e).unknown(t);
      }),
      (e = arguments.length ? Array.from(e, jp) : [0, 1]),
      Rs(r)
    );
  }
  function $_(e, t) {
    e = e.slice();
    var r = 0,
      n = e.length - 1,
      a = e[r],
      o = e[n],
      i;
    return o < a && ((i = r), (r = n), (n = i), (i = a), (a = o), (o = i)), (e[r] = t.floor(a)), (e[n] = t.ceil(o)), e;
  }
  function a$(e) {
    return Math.log(e);
  }
  function o$(e) {
    return Math.exp(e);
  }
  function WG(e) {
    return -Math.log(-e);
  }
  function HG(e) {
    return -Math.exp(-e);
  }
  function zG(e) {
    return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
  }
  function VG(e) {
    return e === 10 ? zG : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
  }
  function GG(e) {
    return e === Math.E ? Math.log : (e === 10 && Math.log10) || (e === 2 && Math.log2) || ((e = Math.log(e)), (t) => Math.log(t) / e);
  }
  function i$(e) {
    return (t, r) => -e(-t, r);
  }
  function w_(e) {
    const t = e(a$, o$),
      r = t.domain;
    let n = 10,
      a,
      o;
    function i() {
      return (a = GG(n)), (o = VG(n)), r()[0] < 0 ? ((a = i$(a)), (o = i$(o)), e(WG, HG)) : e(a$, o$), t;
    }
    return (
      (t.base = function (s) {
        return arguments.length ? ((n = +s), i()) : n;
      }),
      (t.domain = function (s) {
        return arguments.length ? (r(s), i()) : r();
      }),
      (t.ticks = (s) => {
        const c = r();
        let l = c[0],
          u = c[c.length - 1];
        const f = u < l;
        f && ([l, u] = [u, l]);
        let d = a(l),
          v = a(u),
          p,
          m;
        const g = s == null ? 10 : +s;
        let y = [];
        if (!(n % 1) && v - d < g) {
          if (((d = Math.floor(d)), (v = Math.ceil(v)), l > 0)) {
            for (; d <= v; ++d)
              for (p = 1; p < n; ++p)
                if (((m = d < 0 ? p / o(-d) : p * o(d)), !(m < l))) {
                  if (m > u) break;
                  y.push(m);
                }
          } else
            for (; d <= v; ++d)
              for (p = n - 1; p >= 1; --p)
                if (((m = d > 0 ? p / o(-d) : p * o(d)), !(m < l))) {
                  if (m > u) break;
                  y.push(m);
                }
          y.length * 2 < g && (y = tu(l, u, g));
        } else y = tu(d, v, Math.min(v - d, g)).map(o);
        return f ? y.reverse() : y;
      }),
      (t.tickFormat = (s, c) => {
        if ((s == null && (s = 10), c == null && (c = n === 10 ? "s" : ","), typeof c != "function" && (!(n % 1) && (c = as(c)).precision == null && (c.trim = !0), (c = o0(c))), s === 1 / 0))
          return c;
        const l = Math.max(1, (n * s) / t.ticks().length);
        return (u) => {
          let f = u / o(Math.round(a(u)));
          return f * n < n - 0.5 && (f *= n), f <= l ? c(u) : "";
        };
      }),
      (t.nice = () => r($_(r(), { floor: (s) => o(Math.floor(a(s))), ceil: (s) => o(Math.ceil(a(s))) }))),
      t
    );
  }
  function S_() {
    const e = w_(hf()).domain([1, 10]);
    return (e.copy = () => As(e, S_()).base(e.base())), kr.apply(e, arguments), e;
  }
  function s$(e) {
    return function (t) {
      return Math.sign(t) * Math.log1p(Math.abs(t / e));
    };
  }
  function c$(e) {
    return function (t) {
      return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
    };
  }
  function E_(e) {
    var t = 1,
      r = e(s$(t), c$(t));
    return (
      (r.constant = function (n) {
        return arguments.length ? e(s$((t = +n)), c$(t)) : t;
      }),
      Rs(r)
    );
  }
  function x_() {
    var e = E_(hf());
    return (
      (e.copy = function () {
        return As(e, x_()).constant(e.constant());
      }),
      kr.apply(e, arguments)
    );
  }
  function l$(e) {
    return function (t) {
      return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
    };
  }
  function YG(e) {
    return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
  }
  function KG(e) {
    return e < 0 ? -e * e : e * e;
  }
  function T_(e) {
    var t = e(Ht, Ht),
      r = 1;
    function n() {
      return r === 1 ? e(Ht, Ht) : r === 0.5 ? e(YG, KG) : e(l$(r), l$(1 / r));
    }
    return (
      (t.exponent = function (a) {
        return arguments.length ? ((r = +a), n()) : r;
      }),
      Rs(t)
    );
  }
  function C_() {
    var e = T_(hf());
    return (
      (e.copy = function () {
        return As(e, C_()).exponent(e.exponent());
      }),
      kr.apply(e, arguments),
      e
    );
  }
  function O_() {
    var e = [],
      t = [],
      r = [],
      n;
    function a() {
      var i = 0,
        s = Math.max(1, t.length);
      for (r = new Array(s - 1); ++i < s; ) r[i - 1] = Iz(e, i / s);
      return o;
    }
    function o(i) {
      return i == null || isNaN((i = +i)) ? n : t[qg(r, i)];
    }
    return (
      (o.invertExtent = function (i) {
        var s = t.indexOf(i);
        return s < 0 ? [NaN, NaN] : [s > 0 ? r[s - 1] : e[0], s < r.length ? r[s] : e[e.length - 1]];
      }),
      (o.domain = function (i) {
        if (!arguments.length) return e.slice();
        e = [];
        for (let s of i) s != null && !isNaN((s = +s)) && e.push(s);
        return e.sort(On), a();
      }),
      (o.range = function (i) {
        return arguments.length ? ((t = Array.from(i)), a()) : t.slice();
      }),
      (o.unknown = function (i) {
        return arguments.length ? ((n = i), o) : n;
      }),
      (o.quantiles = function () {
        return r.slice();
      }),
      (o.copy = function () {
        return O_().domain(e).range(t).unknown(n);
      }),
      kr.apply(o, arguments)
    );
  }
  function __() {
    var e = [0.5],
      t = [0, 1],
      r,
      n = 1;
    function a(o) {
      return o != null && o <= o ? t[qg(e, o, 0, n)] : r;
    }
    return (
      (a.domain = function (o) {
        return arguments.length ? ((e = Array.from(o)), (n = Math.min(e.length, t.length - 1)), a) : e.slice();
      }),
      (a.range = function (o) {
        return arguments.length ? ((t = Array.from(o)), (n = Math.min(e.length, t.length - 1)), a) : t.slice();
      }),
      (a.invertExtent = function (o) {
        var i = t.indexOf(o);
        return [e[i - 1], e[i]];
      }),
      (a.unknown = function (o) {
        return arguments.length ? ((r = o), a) : r;
      }),
      (a.copy = function () {
        return __().domain(e).range(t).unknown(r);
      }),
      kr.apply(a, arguments)
    );
  }
  const oh = new Date(),
    ih = new Date();
  function Ye(e, t, r, n) {
    function a(o) {
      return e((o = arguments.length === 0 ? new Date() : new Date(+o))), o;
    }
    return (
      (a.floor = (o) => (e((o = new Date(+o))), o)),
      (a.ceil = (o) => (e((o = new Date(o - 1))), t(o, 1), e(o), o)),
      (a.round = (o) => {
        const i = a(o),
          s = a.ceil(o);
        return o - i < s - o ? i : s;
      }),
      (a.offset = (o, i) => (t((o = new Date(+o)), i == null ? 1 : Math.floor(i)), o)),
      (a.range = (o, i, s) => {
        const c = [];
        if (((o = a.ceil(o)), (s = s == null ? 1 : Math.floor(s)), !(o < i) || !(s > 0))) return c;
        let l;
        do c.push((l = new Date(+o))), t(o, s), e(o);
        while (l < o && o < i);
        return c;
      }),
      (a.filter = (o) =>
        Ye(
          (i) => {
            if (i >= i) for (; e(i), !o(i); ) i.setTime(i - 1);
          },
          (i, s) => {
            if (i >= i)
              if (s < 0) for (; ++s <= 0; ) for (; t(i, -1), !o(i); );
              else for (; --s >= 0; ) for (; t(i, 1), !o(i); );
          }
        )),
      r &&
        ((a.count = (o, i) => (oh.setTime(+o), ih.setTime(+i), e(oh), e(ih), Math.floor(r(oh, ih)))),
        (a.every = (o) => ((o = Math.floor(o)), !isFinite(o) || !(o > 0) ? null : o > 1 ? a.filter(n ? (i) => n(i) % o === 0 : (i) => a.count(0, i) % o === 0) : a))),
      a
    );
  }
  const cu = Ye(
    () => {},
    (e, t) => {
      e.setTime(+e + t);
    },
    (e, t) => t - e
  );
  cu.every = (e) => (
    (e = Math.floor(e)),
    !isFinite(e) || !(e > 0)
      ? null
      : e > 1
      ? Ye(
          (t) => {
            t.setTime(Math.floor(t / e) * e);
          },
          (t, r) => {
            t.setTime(+t + r * e);
          },
          (t, r) => (r - t) / e
        )
      : cu
  );
  cu.range;
  const Vr = 1e3,
    zt = Vr * 60,
    Gr = zt * 60,
    en = Gr * 24,
    c0 = en * 7,
    u$ = en * 30,
    sh = en * 365,
    Yr = Ye(
      (e) => {
        e.setTime(e - e.getMilliseconds());
      },
      (e, t) => {
        e.setTime(+e + t * Vr);
      },
      (e, t) => (t - e) / Vr,
      (e) => e.getUTCSeconds()
    );
  Yr.range;
  const vf = Ye(
    (e) => {
      e.setTime(e - e.getMilliseconds() - e.getSeconds() * Vr);
    },
    (e, t) => {
      e.setTime(+e + t * zt);
    },
    (e, t) => (t - e) / zt,
    (e) => e.getMinutes()
  );
  vf.range;
  const pf = Ye(
    (e) => {
      e.setUTCSeconds(0, 0);
    },
    (e, t) => {
      e.setTime(+e + t * zt);
    },
    (e, t) => (t - e) / zt,
    (e) => e.getUTCMinutes()
  );
  pf.range;
  const mf = Ye(
    (e) => {
      e.setTime(e - e.getMilliseconds() - e.getSeconds() * Vr - e.getMinutes() * zt);
    },
    (e, t) => {
      e.setTime(+e + t * Gr);
    },
    (e, t) => (t - e) / Gr,
    (e) => e.getHours()
  );
  mf.range;
  const gf = Ye(
    (e) => {
      e.setUTCMinutes(0, 0, 0);
    },
    (e, t) => {
      e.setTime(+e + t * Gr);
    },
    (e, t) => (t - e) / Gr,
    (e) => e.getUTCHours()
  );
  gf.range;
  const Qo = Ye(
    (e) => e.setHours(0, 0, 0, 0),
    (e, t) => e.setDate(e.getDate() + t),
    (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * zt) / en,
    (e) => e.getDate() - 1
  );
  Qo.range;
  const Ms = Ye(
    (e) => {
      e.setUTCHours(0, 0, 0, 0);
    },
    (e, t) => {
      e.setUTCDate(e.getUTCDate() + t);
    },
    (e, t) => (t - e) / en,
    (e) => e.getUTCDate() - 1
  );
  Ms.range;
  const P_ = Ye(
    (e) => {
      e.setUTCHours(0, 0, 0, 0);
    },
    (e, t) => {
      e.setUTCDate(e.getUTCDate() + t);
    },
    (e, t) => (t - e) / en,
    (e) => Math.floor(e / en)
  );
  P_.range;
  function Aa(e) {
    return Ye(
      (t) => {
        t.setDate(t.getDate() - ((t.getDay() + 7 - e) % 7)), t.setHours(0, 0, 0, 0);
      },
      (t, r) => {
        t.setDate(t.getDate() + r * 7);
      },
      (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * zt) / c0
    );
  }
  const Uo = Aa(0),
    os = Aa(1),
    I_ = Aa(2),
    A_ = Aa(3),
    ma = Aa(4),
    R_ = Aa(5),
    M_ = Aa(6);
  Uo.range;
  os.range;
  I_.range;
  A_.range;
  ma.range;
  R_.range;
  M_.range;
  function Ra(e) {
    return Ye(
      (t) => {
        t.setUTCDate(t.getUTCDate() - ((t.getUTCDay() + 7 - e) % 7)), t.setUTCHours(0, 0, 0, 0);
      },
      (t, r) => {
        t.setUTCDate(t.getUTCDate() + r * 7);
      },
      (t, r) => (r - t) / c0
    );
  }
  const Wo = Ra(0),
    is = Ra(1),
    D_ = Ra(2),
    N_ = Ra(3),
    ga = Ra(4),
    k_ = Ra(5),
    L_ = Ra(6);
  Wo.range;
  is.range;
  D_.range;
  N_.range;
  ga.range;
  k_.range;
  L_.range;
  const xo = Ye(
    (e) => {
      e.setDate(1), e.setHours(0, 0, 0, 0);
    },
    (e, t) => {
      e.setMonth(e.getMonth() + t);
    },
    (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12,
    (e) => e.getMonth()
  );
  xo.range;
  const To = Ye(
    (e) => {
      e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
    },
    (e, t) => {
      e.setUTCMonth(e.getUTCMonth() + t);
    },
    (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12,
    (e) => e.getUTCMonth()
  );
  To.range;
  const Pr = Ye(
    (e) => {
      e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
    },
    (e, t) => {
      e.setFullYear(e.getFullYear() + t);
    },
    (e, t) => t.getFullYear() - e.getFullYear(),
    (e) => e.getFullYear()
  );
  Pr.every = (e) =>
    !isFinite((e = Math.floor(e))) || !(e > 0)
      ? null
      : Ye(
          (t) => {
            t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
          },
          (t, r) => {
            t.setFullYear(t.getFullYear() + r * e);
          }
        );
  Pr.range;
  const Ir = Ye(
    (e) => {
      e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
    },
    (e, t) => {
      e.setUTCFullYear(e.getUTCFullYear() + t);
    },
    (e, t) => t.getUTCFullYear() - e.getUTCFullYear(),
    (e) => e.getUTCFullYear()
  );
  Ir.every = (e) =>
    !isFinite((e = Math.floor(e))) || !(e > 0)
      ? null
      : Ye(
          (t) => {
            t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
          },
          (t, r) => {
            t.setUTCFullYear(t.getUTCFullYear() + r * e);
          }
        );
  Ir.range;
  function F_(e, t, r, n, a, o) {
    const i = [
      [Yr, 1, Vr],
      [Yr, 5, 5 * Vr],
      [Yr, 15, 15 * Vr],
      [Yr, 30, 30 * Vr],
      [o, 1, zt],
      [o, 5, 5 * zt],
      [o, 15, 15 * zt],
      [o, 30, 30 * zt],
      [a, 1, Gr],
      [a, 3, 3 * Gr],
      [a, 6, 6 * Gr],
      [a, 12, 12 * Gr],
      [n, 1, en],
      [n, 2, 2 * en],
      [r, 1, c0],
      [t, 1, u$],
      [t, 3, 3 * u$],
      [e, 1, sh],
    ];
    function s(l, u, f) {
      const d = u < l;
      d && ([l, u] = [u, l]);
      const v = f && typeof f.range == "function" ? f : c(l, u, f),
        p = v ? v.range(l, +u + 1) : [];
      return d ? p.reverse() : p;
    }
    function c(l, u, f) {
      const d = Math.abs(u - l) / f,
        v = Kg(([, , g]) => g).right(i, d);
      if (v === i.length) return e.every(Ip(l / sh, u / sh, f));
      if (v === 0) return cu.every(Math.max(Ip(l, u, f), 1));
      const [p, m] = i[d / i[v - 1][2] < i[v][2] / d ? v - 1 : v];
      return p.every(m);
    }
    return [s, c];
  }
  const [qG, XG] = F_(Ir, To, Wo, P_, gf, pf),
    [ZG, JG] = F_(Pr, xo, Uo, Qo, mf, vf);
  function ch(e) {
    if (0 <= e.y && e.y < 100) {
      var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
      return t.setFullYear(e.y), t;
    }
    return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
  }
  function lh(e) {
    if (0 <= e.y && e.y < 100) {
      var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
      return t.setUTCFullYear(e.y), t;
    }
    return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
  }
  function pi(e, t, r) {
    return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
  }
  function QG(e) {
    var t = e.dateTime,
      r = e.date,
      n = e.time,
      a = e.periods,
      o = e.days,
      i = e.shortDays,
      s = e.months,
      c = e.shortMonths,
      l = mi(a),
      u = gi(a),
      f = mi(o),
      d = gi(o),
      v = mi(i),
      p = gi(i),
      m = mi(s),
      g = gi(s),
      y = mi(c),
      b = gi(c),
      $ = {
        a: N,
        A: B,
        b: W,
        B: C,
        c: null,
        d: m$,
        e: m$,
        f: SY,
        g: RY,
        G: DY,
        H: bY,
        I: $Y,
        j: wY,
        L: j_,
        m: EY,
        M: xY,
        p: E,
        q: V,
        Q: b$,
        s: $$,
        S: TY,
        u: CY,
        U: OY,
        V: _Y,
        w: PY,
        W: IY,
        x: null,
        X: null,
        y: AY,
        Y: MY,
        Z: NY,
        "%": y$,
      },
      S = {
        a: X,
        A: q,
        b: K,
        B: te,
        c: null,
        d: g$,
        e: g$,
        f: jY,
        g: qY,
        G: ZY,
        H: kY,
        I: LY,
        j: FY,
        L: U_,
        m: BY,
        M: UY,
        p: z,
        q: J,
        Q: b$,
        s: $$,
        S: WY,
        u: HY,
        U: zY,
        V: VY,
        w: GY,
        W: YY,
        x: null,
        X: null,
        y: KY,
        Y: XY,
        Z: JY,
        "%": y$,
      },
      A = {
        a: k,
        A: D,
        b: _,
        B: O,
        c: w,
        d: v$,
        e: v$,
        f: pY,
        g: h$,
        G: d$,
        H: p$,
        I: p$,
        j: fY,
        L: vY,
        m: uY,
        M: dY,
        p: F,
        q: lY,
        Q: gY,
        s: yY,
        S: hY,
        u: aY,
        U: oY,
        V: iY,
        w: nY,
        W: sY,
        x: R,
        X: I,
        y: h$,
        Y: d$,
        Z: cY,
        "%": mY,
      };
    ($.x = P(r, $)), ($.X = P(n, $)), ($.c = P(t, $)), (S.x = P(r, S)), (S.X = P(n, S)), (S.c = P(t, S));
    function P(H, G) {
      return function (Y) {
        var L = [],
          ne = -1,
          Z = 0,
          Q = H.length,
          le,
          he,
          $e;
        for (Y instanceof Date || (Y = new Date(+Y)); ++ne < Q; )
          H.charCodeAt(ne) === 37 &&
            (L.push(H.slice(Z, ne)), (he = f$[(le = H.charAt(++ne))]) != null ? (le = H.charAt(++ne)) : (he = le === "e" ? " " : "0"), ($e = G[le]) && (le = $e(Y, he)), L.push(le), (Z = ne + 1));
        return L.push(H.slice(Z, ne)), L.join("");
      };
    }
    function M(H, G) {
      return function (Y) {
        var L = pi(1900, void 0, 1),
          ne = T(L, H, (Y += ""), 0),
          Z,
          Q;
        if (ne != Y.length) return null;
        if ("Q" in L) return new Date(L.Q);
        if ("s" in L) return new Date(L.s * 1e3 + ("L" in L ? L.L : 0));
        if ((G && !("Z" in L) && (L.Z = 0), "p" in L && (L.H = (L.H % 12) + L.p * 12), L.m === void 0 && (L.m = "q" in L ? L.q : 0), "V" in L)) {
          if (L.V < 1 || L.V > 53) return null;
          "w" in L || (L.w = 1),
            "Z" in L
              ? ((Z = lh(pi(L.y, 0, 1))),
                (Q = Z.getUTCDay()),
                (Z = Q > 4 || Q === 0 ? is.ceil(Z) : is(Z)),
                (Z = Ms.offset(Z, (L.V - 1) * 7)),
                (L.y = Z.getUTCFullYear()),
                (L.m = Z.getUTCMonth()),
                (L.d = Z.getUTCDate() + ((L.w + 6) % 7)))
              : ((Z = ch(pi(L.y, 0, 1))),
                (Q = Z.getDay()),
                (Z = Q > 4 || Q === 0 ? os.ceil(Z) : os(Z)),
                (Z = Qo.offset(Z, (L.V - 1) * 7)),
                (L.y = Z.getFullYear()),
                (L.m = Z.getMonth()),
                (L.d = Z.getDate() + ((L.w + 6) % 7)));
        } else
          ("W" in L || "U" in L) &&
            ("w" in L || (L.w = "u" in L ? L.u % 7 : "W" in L ? 1 : 0),
            (Q = "Z" in L ? lh(pi(L.y, 0, 1)).getUTCDay() : ch(pi(L.y, 0, 1)).getDay()),
            (L.m = 0),
            (L.d = "W" in L ? ((L.w + 6) % 7) + L.W * 7 - ((Q + 5) % 7) : L.w + L.U * 7 - ((Q + 6) % 7)));
        return "Z" in L ? ((L.H += (L.Z / 100) | 0), (L.M += L.Z % 100), lh(L)) : ch(L);
      };
    }
    function T(H, G, Y, L) {
      for (var ne = 0, Z = G.length, Q = Y.length, le, he; ne < Z; ) {
        if (L >= Q) return -1;
        if (((le = G.charCodeAt(ne++)), le === 37)) {
          if (((le = G.charAt(ne++)), (he = A[le in f$ ? G.charAt(ne++) : le]), !he || (L = he(H, Y, L)) < 0)) return -1;
        } else if (le != Y.charCodeAt(L++)) return -1;
      }
      return L;
    }
    function F(H, G, Y) {
      var L = l.exec(G.slice(Y));
      return L ? ((H.p = u.get(L[0].toLowerCase())), Y + L[0].length) : -1;
    }
    function k(H, G, Y) {
      var L = v.exec(G.slice(Y));
      return L ? ((H.w = p.get(L[0].toLowerCase())), Y + L[0].length) : -1;
    }
    function D(H, G, Y) {
      var L = f.exec(G.slice(Y));
      return L ? ((H.w = d.get(L[0].toLowerCase())), Y + L[0].length) : -1;
    }
    function _(H, G, Y) {
      var L = y.exec(G.slice(Y));
      return L ? ((H.m = b.get(L[0].toLowerCase())), Y + L[0].length) : -1;
    }
    function O(H, G, Y) {
      var L = m.exec(G.slice(Y));
      return L ? ((H.m = g.get(L[0].toLowerCase())), Y + L[0].length) : -1;
    }
    function w(H, G, Y) {
      return T(H, t, G, Y);
    }
    function R(H, G, Y) {
      return T(H, r, G, Y);
    }
    function I(H, G, Y) {
      return T(H, n, G, Y);
    }
    function N(H) {
      return i[H.getDay()];
    }
    function B(H) {
      return o[H.getDay()];
    }
    function W(H) {
      return c[H.getMonth()];
    }
    function C(H) {
      return s[H.getMonth()];
    }
    function E(H) {
      return a[+(H.getHours() >= 12)];
    }
    function V(H) {
      return 1 + ~~(H.getMonth() / 3);
    }
    function X(H) {
      return i[H.getUTCDay()];
    }
    function q(H) {
      return o[H.getUTCDay()];
    }
    function K(H) {
      return c[H.getUTCMonth()];
    }
    function te(H) {
      return s[H.getUTCMonth()];
    }
    function z(H) {
      return a[+(H.getUTCHours() >= 12)];
    }
    function J(H) {
      return 1 + ~~(H.getUTCMonth() / 3);
    }
    return {
      format: function (H) {
        var G = P((H += ""), $);
        return (
          (G.toString = function () {
            return H;
          }),
          G
        );
      },
      parse: function (H) {
        var G = M((H += ""), !1);
        return (
          (G.toString = function () {
            return H;
          }),
          G
        );
      },
      utcFormat: function (H) {
        var G = P((H += ""), S);
        return (
          (G.toString = function () {
            return H;
          }),
          G
        );
      },
      utcParse: function (H) {
        var G = M((H += ""), !0);
        return (
          (G.toString = function () {
            return H;
          }),
          G
        );
      },
    };
  }
  var f$ = { "-": "", _: " ", 0: "0" },
    at = /^\s*\d+/,
    eY = /^%/,
    tY = /[\\^$*+?|[\]().{}]/g;
  function ye(e, t, r) {
    var n = e < 0 ? "-" : "",
      a = (n ? -e : e) + "",
      o = a.length;
    return n + (o < r ? new Array(r - o + 1).join(t) + a : a);
  }
  function rY(e) {
    return e.replace(tY, "\\$&");
  }
  function mi(e) {
    return new RegExp("^(?:" + e.map(rY).join("|") + ")", "i");
  }
  function gi(e) {
    return new Map(e.map((t, r) => [t.toLowerCase(), r]));
  }
  function nY(e, t, r) {
    var n = at.exec(t.slice(r, r + 1));
    return n ? ((e.w = +n[0]), r + n[0].length) : -1;
  }
  function aY(e, t, r) {
    var n = at.exec(t.slice(r, r + 1));
    return n ? ((e.u = +n[0]), r + n[0].length) : -1;
  }
  function oY(e, t, r) {
    var n = at.exec(t.slice(r, r + 2));
    return n ? ((e.U = +n[0]), r + n[0].length) : -1;
  }
  function iY(e, t, r) {
    var n = at.exec(t.slice(r, r + 2));
    return n ? ((e.V = +n[0]), r + n[0].length) : -1;
  }
  function sY(e, t, r) {
    var n = at.exec(t.slice(r, r + 2));
    return n ? ((e.W = +n[0]), r + n[0].length) : -1;
  }
  function d$(e, t, r) {
    var n = at.exec(t.slice(r, r + 4));
    return n ? ((e.y = +n[0]), r + n[0].length) : -1;
  }
  function h$(e, t, r) {
    var n = at.exec(t.slice(r, r + 2));
    return n ? ((e.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3)), r + n[0].length) : -1;
  }
  function cY(e, t, r) {
    var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
    return n ? ((e.Z = n[1] ? 0 : -(n[2] + (n[3] || "00"))), r + n[0].length) : -1;
  }
  function lY(e, t, r) {
    var n = at.exec(t.slice(r, r + 1));
    return n ? ((e.q = n[0] * 3 - 3), r + n[0].length) : -1;
  }
  function uY(e, t, r) {
    var n = at.exec(t.slice(r, r + 2));
    return n ? ((e.m = n[0] - 1), r + n[0].length) : -1;
  }
  function v$(e, t, r) {
    var n = at.exec(t.slice(r, r + 2));
    return n ? ((e.d = +n[0]), r + n[0].length) : -1;
  }
  function fY(e, t, r) {
    var n = at.exec(t.slice(r, r + 3));
    return n ? ((e.m = 0), (e.d = +n[0]), r + n[0].length) : -1;
  }
  function p$(e, t, r) {
    var n = at.exec(t.slice(r, r + 2));
    return n ? ((e.H = +n[0]), r + n[0].length) : -1;
  }
  function dY(e, t, r) {
    var n = at.exec(t.slice(r, r + 2));
    return n ? ((e.M = +n[0]), r + n[0].length) : -1;
  }
  function hY(e, t, r) {
    var n = at.exec(t.slice(r, r + 2));
    return n ? ((e.S = +n[0]), r + n[0].length) : -1;
  }
  function vY(e, t, r) {
    var n = at.exec(t.slice(r, r + 3));
    return n ? ((e.L = +n[0]), r + n[0].length) : -1;
  }
  function pY(e, t, r) {
    var n = at.exec(t.slice(r, r + 6));
    return n ? ((e.L = Math.floor(n[0] / 1e3)), r + n[0].length) : -1;
  }
  function mY(e, t, r) {
    var n = eY.exec(t.slice(r, r + 1));
    return n ? r + n[0].length : -1;
  }
  function gY(e, t, r) {
    var n = at.exec(t.slice(r));
    return n ? ((e.Q = +n[0]), r + n[0].length) : -1;
  }
  function yY(e, t, r) {
    var n = at.exec(t.slice(r));
    return n ? ((e.s = +n[0]), r + n[0].length) : -1;
  }
  function m$(e, t) {
    return ye(e.getDate(), t, 2);
  }
  function bY(e, t) {
    return ye(e.getHours(), t, 2);
  }
  function $Y(e, t) {
    return ye(e.getHours() % 12 || 12, t, 2);
  }
  function wY(e, t) {
    return ye(1 + Qo.count(Pr(e), e), t, 3);
  }
  function j_(e, t) {
    return ye(e.getMilliseconds(), t, 3);
  }
  function SY(e, t) {
    return j_(e, t) + "000";
  }
  function EY(e, t) {
    return ye(e.getMonth() + 1, t, 2);
  }
  function xY(e, t) {
    return ye(e.getMinutes(), t, 2);
  }
  function TY(e, t) {
    return ye(e.getSeconds(), t, 2);
  }
  function CY(e) {
    var t = e.getDay();
    return t === 0 ? 7 : t;
  }
  function OY(e, t) {
    return ye(Uo.count(Pr(e) - 1, e), t, 2);
  }
  function B_(e) {
    var t = e.getDay();
    return t >= 4 || t === 0 ? ma(e) : ma.ceil(e);
  }
  function _Y(e, t) {
    return (e = B_(e)), ye(ma.count(Pr(e), e) + (Pr(e).getDay() === 4), t, 2);
  }
  function PY(e) {
    return e.getDay();
  }
  function IY(e, t) {
    return ye(os.count(Pr(e) - 1, e), t, 2);
  }
  function AY(e, t) {
    return ye(e.getFullYear() % 100, t, 2);
  }
  function RY(e, t) {
    return (e = B_(e)), ye(e.getFullYear() % 100, t, 2);
  }
  function MY(e, t) {
    return ye(e.getFullYear() % 1e4, t, 4);
  }
  function DY(e, t) {
    var r = e.getDay();
    return (e = r >= 4 || r === 0 ? ma(e) : ma.ceil(e)), ye(e.getFullYear() % 1e4, t, 4);
  }
  function NY(e) {
    var t = e.getTimezoneOffset();
    return (t > 0 ? "-" : ((t *= -1), "+")) + ye((t / 60) | 0, "0", 2) + ye(t % 60, "0", 2);
  }
  function g$(e, t) {
    return ye(e.getUTCDate(), t, 2);
  }
  function kY(e, t) {
    return ye(e.getUTCHours(), t, 2);
  }
  function LY(e, t) {
    return ye(e.getUTCHours() % 12 || 12, t, 2);
  }
  function FY(e, t) {
    return ye(1 + Ms.count(Ir(e), e), t, 3);
  }
  function U_(e, t) {
    return ye(e.getUTCMilliseconds(), t, 3);
  }
  function jY(e, t) {
    return U_(e, t) + "000";
  }
  function BY(e, t) {
    return ye(e.getUTCMonth() + 1, t, 2);
  }
  function UY(e, t) {
    return ye(e.getUTCMinutes(), t, 2);
  }
  function WY(e, t) {
    return ye(e.getUTCSeconds(), t, 2);
  }
  function HY(e) {
    var t = e.getUTCDay();
    return t === 0 ? 7 : t;
  }
  function zY(e, t) {
    return ye(Wo.count(Ir(e) - 1, e), t, 2);
  }
  function W_(e) {
    var t = e.getUTCDay();
    return t >= 4 || t === 0 ? ga(e) : ga.ceil(e);
  }
  function VY(e, t) {
    return (e = W_(e)), ye(ga.count(Ir(e), e) + (Ir(e).getUTCDay() === 4), t, 2);
  }
  function GY(e) {
    return e.getUTCDay();
  }
  function YY(e, t) {
    return ye(is.count(Ir(e) - 1, e), t, 2);
  }
  function KY(e, t) {
    return ye(e.getUTCFullYear() % 100, t, 2);
  }
  function qY(e, t) {
    return (e = W_(e)), ye(e.getUTCFullYear() % 100, t, 2);
  }
  function XY(e, t) {
    return ye(e.getUTCFullYear() % 1e4, t, 4);
  }
  function ZY(e, t) {
    var r = e.getUTCDay();
    return (e = r >= 4 || r === 0 ? ga(e) : ga.ceil(e)), ye(e.getUTCFullYear() % 1e4, t, 4);
  }
  function JY() {
    return "+0000";
  }
  function y$() {
    return "%";
  }
  function b$(e) {
    return +e;
  }
  function $$(e) {
    return Math.floor(+e / 1e3);
  }
  var Qa, H_, z_;
  QY({
    dateTime: "%x, %X",
    date: "%-m/%-d/%Y",
    time: "%-I:%M:%S %p",
    periods: ["AM", "PM"],
    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  });
  function QY(e) {
    return (Qa = QG(e)), (H_ = Qa.format), Qa.parse, (z_ = Qa.utcFormat), Qa.utcParse, Qa;
  }
  function eK(e) {
    return new Date(e);
  }
  function tK(e) {
    return e instanceof Date ? +e : +new Date(+e);
  }
  function l0(e, t, r, n, a, o, i, s, c, l) {
    var u = g_(),
      f = u.invert,
      d = u.domain,
      v = l(".%L"),
      p = l(":%S"),
      m = l("%I:%M"),
      g = l("%I %p"),
      y = l("%a %d"),
      b = l("%b %d"),
      $ = l("%B"),
      S = l("%Y");
    function A(P) {
      return (c(P) < P ? v : s(P) < P ? p : i(P) < P ? m : o(P) < P ? g : n(P) < P ? (a(P) < P ? y : b) : r(P) < P ? $ : S)(P);
    }
    return (
      (u.invert = function (P) {
        return new Date(f(P));
      }),
      (u.domain = function (P) {
        return arguments.length ? d(Array.from(P, tK)) : d().map(eK);
      }),
      (u.ticks = function (P) {
        var M = d();
        return e(M[0], M[M.length - 1], P ?? 10);
      }),
      (u.tickFormat = function (P, M) {
        return M == null ? A : l(M);
      }),
      (u.nice = function (P) {
        var M = d();
        return (!P || typeof P.range != "function") && (P = t(M[0], M[M.length - 1], P ?? 10)), P ? d($_(M, P)) : u;
      }),
      (u.copy = function () {
        return As(u, l0(e, t, r, n, a, o, i, s, c, l));
      }),
      u
    );
  }
  function rK() {
    return kr.apply(l0(ZG, JG, Pr, xo, Uo, Qo, mf, vf, Yr, H_).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
  }
  function nK() {
    return kr.apply(l0(qG, XG, Ir, To, Wo, Ms, gf, pf, Yr, z_).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
  }
  function yf(e, t) {
    return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
  }
  function bf() {
    var e = 0,
      t = 0.5,
      r = 1,
      n = 1,
      a,
      o,
      i,
      s,
      c,
      l = Ht,
      u,
      f = !1,
      d;
    function v(m) {
      return isNaN((m = +m)) ? d : ((m = 0.5 + ((m = +u(m)) - o) * (n * m < n * o ? s : c)), l(f ? Math.max(0, Math.min(1, m)) : m));
    }
    (v.domain = function (m) {
      return arguments.length
        ? (([e, t, r] = m), (a = u((e = +e))), (o = u((t = +t))), (i = u((r = +r))), (s = a === o ? 0 : 0.5 / (o - a)), (c = o === i ? 0 : 0.5 / (i - o)), (n = o < a ? -1 : 1), v)
        : [e, t, r];
    }),
      (v.clamp = function (m) {
        return arguments.length ? ((f = !!m), v) : f;
      }),
      (v.interpolator = function (m) {
        return arguments.length ? ((l = m), v) : l;
      });
    function p(m) {
      return function (g) {
        var y, b, $;
        return arguments.length ? (([y, b, $] = g), (l = a_(m, [y, b, $])), v) : [l(0), l(0.5), l(1)];
      };
    }
    return (
      (v.range = p(Is)),
      (v.rangeRound = p(Jg)),
      (v.unknown = function (m) {
        return arguments.length ? ((d = m), v) : d;
      }),
      function (m) {
        return (u = m), (a = m(e)), (o = m(t)), (i = m(r)), (s = a === o ? 0 : 0.5 / (o - a)), (c = o === i ? 0 : 0.5 / (i - o)), (n = o < a ? -1 : 1), v;
      }
    );
  }
  function V_() {
    var e = Rs(bf()(Ht));
    return (
      (e.copy = function () {
        return yf(e, V_());
      }),
      df.apply(e, arguments)
    );
  }
  function G_() {
    var e = w_(bf()).domain([0.1, 1, 10]);
    return (
      (e.copy = function () {
        return yf(e, G_()).base(e.base());
      }),
      df.apply(e, arguments)
    );
  }
  function Y_() {
    var e = E_(bf());
    return (
      (e.copy = function () {
        return yf(e, Y_()).constant(e.constant());
      }),
      df.apply(e, arguments)
    );
  }
  function K_() {
    var e = T_(bf());
    return (
      (e.copy = function () {
        return yf(e, K_()).exponent(e.exponent());
      }),
      df.apply(e, arguments)
    );
  }
  function pe(e) {
    for (var t = (e.length / 6) | 0, r = new Array(t), n = 0; n < t; ) r[n] = "#" + e.slice(n * 6, ++n * 6);
    return r;
  }
  const aK = pe("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"),
    oK = pe("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666"),
    iK = pe("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666"),
    sK = pe("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"),
    cK = pe("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"),
    lK = pe("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc"),
    uK = pe("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"),
    fK = pe("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"),
    dK = pe("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f"),
    hK = pe("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab"),
    Ce = (e) => jz(e[e.length - 1]);
  var q_ = new Array(3)
    .concat(
      "d8b365f5f5f55ab4ac",
      "a6611adfc27d80cdc1018571",
      "a6611adfc27df5f5f580cdc1018571",
      "8c510ad8b365f6e8c3c7eae55ab4ac01665e",
      "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e",
      "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e",
      "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e",
      "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30",
      "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30"
    )
    .map(pe);
  const X_ = Ce(q_);
  var Z_ = new Array(3)
    .concat(
      "af8dc3f7f7f77fbf7b",
      "7b3294c2a5cfa6dba0008837",
      "7b3294c2a5cff7f7f7a6dba0008837",
      "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837",
      "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837",
      "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837",
      "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837",
      "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b",
      "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b"
    )
    .map(pe);
  const J_ = Ce(Z_);
  var Q_ = new Array(3)
    .concat(
      "e9a3c9f7f7f7a1d76a",
      "d01c8bf1b6dab8e1864dac26",
      "d01c8bf1b6daf7f7f7b8e1864dac26",
      "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221",
      "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221",
      "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221",
      "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221",
      "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419",
      "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419"
    )
    .map(pe);
  const eP = Ce(Q_);
  var tP = new Array(3)
    .concat(
      "998ec3f7f7f7f1a340",
      "5e3c99b2abd2fdb863e66101",
      "5e3c99b2abd2f7f7f7fdb863e66101",
      "542788998ec3d8daebfee0b6f1a340b35806",
      "542788998ec3d8daebf7f7f7fee0b6f1a340b35806",
      "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806",
      "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806",
      "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08",
      "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08"
    )
    .map(pe);
  const rP = Ce(tP);
  var Up = new Array(3)
    .concat(
      "ef8a62f7f7f767a9cf",
      "ca0020f4a58292c5de0571b0",
      "ca0020f4a582f7f7f792c5de0571b0",
      "b2182bef8a62fddbc7d1e5f067a9cf2166ac",
      "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac",
      "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac",
      "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac",
      "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061",
      "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061"
    )
    .map(pe);
  const lu = Ce(Up);
  var nP = new Array(3)
    .concat(
      "ef8a62ffffff999999",
      "ca0020f4a582bababa404040",
      "ca0020f4a582ffffffbababa404040",
      "b2182bef8a62fddbc7e0e0e09999994d4d4d",
      "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d",
      "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d",
      "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d",
      "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a",
      "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a"
    )
    .map(pe);
  const aP = Ce(nP);
  var Wp = new Array(3)
    .concat(
      "fc8d59ffffbf91bfdb",
      "d7191cfdae61abd9e92c7bb6",
      "d7191cfdae61ffffbfabd9e92c7bb6",
      "d73027fc8d59fee090e0f3f891bfdb4575b4",
      "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4",
      "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4",
      "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4",
      "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695",
      "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695"
    )
    .map(pe);
  const uu = Ce(Wp);
  var oP = new Array(3)
    .concat(
      "fc8d59ffffbf91cf60",
      "d7191cfdae61a6d96a1a9641",
      "d7191cfdae61ffffbfa6d96a1a9641",
      "d73027fc8d59fee08bd9ef8b91cf601a9850",
      "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850",
      "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850",
      "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850",
      "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837",
      "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837"
    )
    .map(pe);
  const iP = Ce(oP);
  var sP = new Array(3)
    .concat(
      "fc8d59ffffbf99d594",
      "d7191cfdae61abdda42b83ba",
      "d7191cfdae61ffffbfabdda42b83ba",
      "d53e4ffc8d59fee08be6f59899d5943288bd",
      "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd",
      "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd",
      "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd",
      "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2",
      "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2"
    )
    .map(pe);
  const cP = Ce(sP);
  var lP = new Array(3)
    .concat(
      "e5f5f999d8c92ca25f",
      "edf8fbb2e2e266c2a4238b45",
      "edf8fbb2e2e266c2a42ca25f006d2c",
      "edf8fbccece699d8c966c2a42ca25f006d2c",
      "edf8fbccece699d8c966c2a441ae76238b45005824",
      "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824",
      "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b"
    )
    .map(pe);
  const uP = Ce(lP);
  var fP = new Array(3)
    .concat(
      "e0ecf49ebcda8856a7",
      "edf8fbb3cde38c96c688419d",
      "edf8fbb3cde38c96c68856a7810f7c",
      "edf8fbbfd3e69ebcda8c96c68856a7810f7c",
      "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b",
      "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b",
      "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b"
    )
    .map(pe);
  const dP = Ce(fP);
  var hP = new Array(3)
    .concat(
      "e0f3dba8ddb543a2ca",
      "f0f9e8bae4bc7bccc42b8cbe",
      "f0f9e8bae4bc7bccc443a2ca0868ac",
      "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac",
      "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e",
      "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e",
      "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081"
    )
    .map(pe);
  const vP = Ce(hP);
  var pP = new Array(3)
    .concat(
      "fee8c8fdbb84e34a33",
      "fef0d9fdcc8afc8d59d7301f",
      "fef0d9fdcc8afc8d59e34a33b30000",
      "fef0d9fdd49efdbb84fc8d59e34a33b30000",
      "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000",
      "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000",
      "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000"
    )
    .map(pe);
  const mP = Ce(pP);
  var gP = new Array(3)
    .concat(
      "ece2f0a6bddb1c9099",
      "f6eff7bdc9e167a9cf02818a",
      "f6eff7bdc9e167a9cf1c9099016c59",
      "f6eff7d0d1e6a6bddb67a9cf1c9099016c59",
      "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450",
      "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450",
      "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636"
    )
    .map(pe);
  const yP = Ce(gP);
  var bP = new Array(3)
    .concat(
      "ece7f2a6bddb2b8cbe",
      "f1eef6bdc9e174a9cf0570b0",
      "f1eef6bdc9e174a9cf2b8cbe045a8d",
      "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d",
      "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b",
      "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b",
      "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858"
    )
    .map(pe);
  const $P = Ce(bP);
  var wP = new Array(3)
    .concat(
      "e7e1efc994c7dd1c77",
      "f1eef6d7b5d8df65b0ce1256",
      "f1eef6d7b5d8df65b0dd1c77980043",
      "f1eef6d4b9dac994c7df65b0dd1c77980043",
      "f1eef6d4b9dac994c7df65b0e7298ace125691003f",
      "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f",
      "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f"
    )
    .map(pe);
  const SP = Ce(wP);
  var EP = new Array(3)
    .concat(
      "fde0ddfa9fb5c51b8a",
      "feebe2fbb4b9f768a1ae017e",
      "feebe2fbb4b9f768a1c51b8a7a0177",
      "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177",
      "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177",
      "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177",
      "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a"
    )
    .map(pe);
  const xP = Ce(EP);
  var TP = new Array(3)
    .concat(
      "edf8b17fcdbb2c7fb8",
      "ffffcca1dab441b6c4225ea8",
      "ffffcca1dab441b6c42c7fb8253494",
      "ffffccc7e9b47fcdbb41b6c42c7fb8253494",
      "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84",
      "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84",
      "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58"
    )
    .map(pe);
  const CP = Ce(TP);
  var OP = new Array(3)
    .concat(
      "f7fcb9addd8e31a354",
      "ffffccc2e69978c679238443",
      "ffffccc2e69978c67931a354006837",
      "ffffccd9f0a3addd8e78c67931a354006837",
      "ffffccd9f0a3addd8e78c67941ab5d238443005a32",
      "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32",
      "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529"
    )
    .map(pe);
  const _P = Ce(OP);
  var PP = new Array(3)
    .concat(
      "fff7bcfec44fd95f0e",
      "ffffd4fed98efe9929cc4c02",
      "ffffd4fed98efe9929d95f0e993404",
      "ffffd4fee391fec44ffe9929d95f0e993404",
      "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04",
      "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04",
      "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506"
    )
    .map(pe);
  const IP = Ce(PP);
  var AP = new Array(3)
    .concat(
      "ffeda0feb24cf03b20",
      "ffffb2fecc5cfd8d3ce31a1c",
      "ffffb2fecc5cfd8d3cf03b20bd0026",
      "ffffb2fed976feb24cfd8d3cf03b20bd0026",
      "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026",
      "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026",
      "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026"
    )
    .map(pe);
  const RP = Ce(AP);
  var MP = new Array(3)
    .concat(
      "deebf79ecae13182bd",
      "eff3ffbdd7e76baed62171b5",
      "eff3ffbdd7e76baed63182bd08519c",
      "eff3ffc6dbef9ecae16baed63182bd08519c",
      "eff3ffc6dbef9ecae16baed64292c62171b5084594",
      "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594",
      "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b"
    )
    .map(pe);
  const DP = Ce(MP);
  var NP = new Array(3)
    .concat(
      "e5f5e0a1d99b31a354",
      "edf8e9bae4b374c476238b45",
      "edf8e9bae4b374c47631a354006d2c",
      "edf8e9c7e9c0a1d99b74c47631a354006d2c",
      "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32",
      "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32",
      "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b"
    )
    .map(pe);
  const kP = Ce(NP);
  var LP = new Array(3)
    .concat(
      "f0f0f0bdbdbd636363",
      "f7f7f7cccccc969696525252",
      "f7f7f7cccccc969696636363252525",
      "f7f7f7d9d9d9bdbdbd969696636363252525",
      "f7f7f7d9d9d9bdbdbd969696737373525252252525",
      "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525",
      "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000"
    )
    .map(pe);
  const FP = Ce(LP);
  var jP = new Array(3)
    .concat(
      "efedf5bcbddc756bb1",
      "f2f0f7cbc9e29e9ac86a51a3",
      "f2f0f7cbc9e29e9ac8756bb154278f",
      "f2f0f7dadaebbcbddc9e9ac8756bb154278f",
      "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486",
      "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486",
      "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d"
    )
    .map(pe);
  const BP = Ce(jP);
  var UP = new Array(3)
    .concat(
      "fee0d2fc9272de2d26",
      "fee5d9fcae91fb6a4acb181d",
      "fee5d9fcae91fb6a4ade2d26a50f15",
      "fee5d9fcbba1fc9272fb6a4ade2d26a50f15",
      "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d",
      "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d",
      "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d"
    )
    .map(pe);
  const WP = Ce(UP);
  var HP = new Array(3)
    .concat(
      "fee6cefdae6be6550d",
      "feeddefdbe85fd8d3cd94701",
      "feeddefdbe85fd8d3ce6550da63603",
      "feeddefdd0a2fdae6bfd8d3ce6550da63603",
      "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04",
      "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04",
      "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704"
    )
    .map(pe);
  const zP = Ce(HP);
  function VP(e) {
    return (
      (e = Math.max(0, Math.min(1, e))),
      "rgb(" +
        Math.max(0, Math.min(255, Math.round(-4.54 - e * (35.34 - e * (2381.73 - e * (6402.7 - e * (7024.72 - e * 2710.57))))))) +
        ", " +
        Math.max(0, Math.min(255, Math.round(32.49 + e * (170.73 + e * (52.82 - e * (131.46 - e * (176.58 - e * 67.37))))))) +
        ", " +
        Math.max(0, Math.min(255, Math.round(81.24 + e * (442.36 - e * (2482.43 - e * (6167.24 - e * (6614.94 - e * 2475.67))))))) +
        ")"
    );
  }
  const GP = Qg(Or(300, 0.5, 0), Or(-240, 0.5, 1));
  var YP = Qg(Or(-100, 0.75, 0.35), Or(80, 1.5, 0.8)),
    KP = Qg(Or(260, 0.75, 0.35), Or(80, 1.5, 0.8)),
    gc = Or();
  function qP(e) {
    (e < 0 || e > 1) && (e -= Math.floor(e));
    var t = Math.abs(e - 0.5);
    return (gc.h = 360 * e - 100), (gc.s = 1.5 - 1.5 * t), (gc.l = 0.8 - 0.9 * t), gc + "";
  }
  var yc = ts(),
    vK = Math.PI / 3,
    pK = (Math.PI * 2) / 3;
  function XP(e) {
    var t;
    return (e = (0.5 - e) * Math.PI), (yc.r = 255 * (t = Math.sin(e)) * t), (yc.g = 255 * (t = Math.sin(e + vK)) * t), (yc.b = 255 * (t = Math.sin(e + pK)) * t), yc + "";
  }
  function ZP(e) {
    return (
      (e = Math.max(0, Math.min(1, e))),
      "rgb(" +
        Math.max(0, Math.min(255, Math.round(34.61 + e * (1172.33 - e * (10793.56 - e * (33300.12 - e * (38394.49 - e * 14825.05))))))) +
        ", " +
        Math.max(0, Math.min(255, Math.round(23.31 + e * (557.33 + e * (1225.33 - e * (3574.96 - e * (1073.77 + e * 707.56))))))) +
        ", " +
        Math.max(0, Math.min(255, Math.round(27.2 + e * (3211.1 - e * (15327.97 - e * (27814 - e * (22569.18 - e * 6838.66))))))) +
        ")"
    );
  }
  function $f(e) {
    var t = e.length;
    return function (r) {
      return e[Math.max(0, Math.min(t - 1, Math.floor(r * t)))];
    };
  }
  const JP = $f(
    pe(
      "44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"
    )
  );
  var QP = $f(
      pe(
        "00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"
      )
    ),
    e5 = $f(
      pe(
        "00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"
      )
    ),
    t5 = $f(
      pe(
        "0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"
      )
    );
  const r5 = Math.cos,
    u0 = Math.min,
    fu = Math.sin,
    Ke = Math.sqrt,
    du = Math.PI,
    wf = 2 * du,
    mK = Ke(3),
    n5 = {
      draw(e, t) {
        const r = Ke(t + u0(t / 28, 0.75)) * 0.59436,
          n = r / 2,
          a = n * mK;
        e.moveTo(0, r), e.lineTo(0, -r), e.moveTo(-a, -n), e.lineTo(a, n), e.moveTo(-a, n), e.lineTo(a, -n);
      },
    },
    f0 = {
      draw(e, t) {
        const r = Ke(t / du);
        e.moveTo(r, 0), e.arc(0, 0, r, 0, wf);
      },
    },
    a5 = {
      draw(e, t) {
        const r = Ke(t / 5) / 2;
        e.moveTo(-3 * r, -r),
          e.lineTo(-r, -r),
          e.lineTo(-r, -3 * r),
          e.lineTo(r, -3 * r),
          e.lineTo(r, -r),
          e.lineTo(3 * r, -r),
          e.lineTo(3 * r, r),
          e.lineTo(r, r),
          e.lineTo(r, 3 * r),
          e.lineTo(-r, 3 * r),
          e.lineTo(-r, r),
          e.lineTo(-3 * r, r),
          e.closePath();
      },
    },
    o5 = Ke(1 / 3),
    gK = o5 * 2,
    i5 = {
      draw(e, t) {
        const r = Ke(t / gK),
          n = r * o5;
        e.moveTo(0, -r), e.lineTo(n, 0), e.lineTo(0, r), e.lineTo(-n, 0), e.closePath();
      },
    },
    s5 = {
      draw(e, t) {
        const r = Ke(t) * 0.62625;
        e.moveTo(0, -r), e.lineTo(r, 0), e.lineTo(0, r), e.lineTo(-r, 0), e.closePath();
      },
    },
    c5 = {
      draw(e, t) {
        const r = Ke(t - u0(t / 7, 2)) * 0.87559;
        e.moveTo(-r, 0), e.lineTo(r, 0), e.moveTo(0, r), e.lineTo(0, -r);
      },
    },
    l5 = {
      draw(e, t) {
        const r = Ke(t),
          n = -r / 2;
        e.rect(n, n, r, r);
      },
    },
    u5 = {
      draw(e, t) {
        const r = Ke(t) * 0.4431;
        e.moveTo(r, r), e.lineTo(r, -r), e.lineTo(-r, -r), e.lineTo(-r, r), e.closePath();
      },
    },
    yK = 0.8908130915292852,
    f5 = fu(du / 10) / fu((7 * du) / 10),
    bK = fu(wf / 10) * f5,
    $K = -r5(wf / 10) * f5,
    d5 = {
      draw(e, t) {
        const r = Ke(t * yK),
          n = bK * r,
          a = $K * r;
        e.moveTo(0, -r), e.lineTo(n, a);
        for (let o = 1; o < 5; ++o) {
          const i = (wf * o) / 5,
            s = r5(i),
            c = fu(i);
          e.lineTo(c * r, -s * r), e.lineTo(s * n - c * a, c * n + s * a);
        }
        e.closePath();
      },
    },
    uh = Ke(3),
    h5 = {
      draw(e, t) {
        const r = -Ke(t / (uh * 3));
        e.moveTo(0, r * 2), e.lineTo(-uh * r, -r), e.lineTo(uh * r, -r), e.closePath();
      },
    },
    wK = Ke(3),
    v5 = {
      draw(e, t) {
        const r = Ke(t) * 0.6824,
          n = r / 2,
          a = (r * wK) / 2;
        e.moveTo(0, -r), e.lineTo(a, n), e.lineTo(-a, n), e.closePath();
      },
    },
    Ut = -0.5,
    Wt = Ke(3) / 2,
    Hp = 1 / Ke(12),
    SK = (Hp / 2 + 1) * 3,
    p5 = {
      draw(e, t) {
        const r = Ke(t / SK),
          n = r / 2,
          a = r * Hp,
          o = n,
          i = r * Hp + r,
          s = -o,
          c = i;
        e.moveTo(n, a),
          e.lineTo(o, i),
          e.lineTo(s, c),
          e.lineTo(Ut * n - Wt * a, Wt * n + Ut * a),
          e.lineTo(Ut * o - Wt * i, Wt * o + Ut * i),
          e.lineTo(Ut * s - Wt * c, Wt * s + Ut * c),
          e.lineTo(Ut * n + Wt * a, Ut * a - Wt * n),
          e.lineTo(Ut * o + Wt * i, Ut * i - Wt * o),
          e.lineTo(Ut * s + Wt * c, Ut * c - Wt * s),
          e.closePath();
      },
    },
    m5 = {
      draw(e, t) {
        const r = Ke(t - u0(t / 6, 1.7)) * 0.6189;
        e.moveTo(-r, -r), e.lineTo(r, r), e.moveTo(-r, r), e.lineTo(r, -r);
      },
    },
    EK = [f0, a5, i5, l5, d5, h5, p5],
    xK = [f0, c5, m5, v5, n5, u5, s5];
  function Ii(e, t, r) {
    (this.k = e), (this.x = t), (this.y = r);
  }
  Ii.prototype = {
    constructor: Ii,
    scale: function (e) {
      return e === 1 ? this : new Ii(this.k * e, this.x, this.y);
    },
    translate: function (e, t) {
      return (e === 0) & (t === 0) ? this : new Ii(this.k, this.x + this.k * e, this.y + this.k * t);
    },
    apply: function (e) {
      return [e[0] * this.k + this.x, e[1] * this.k + this.y];
    },
    applyX: function (e) {
      return e * this.k + this.x;
    },
    applyY: function (e) {
      return e * this.k + this.y;
    },
    invert: function (e) {
      return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k];
    },
    invertX: function (e) {
      return (e - this.x) / this.k;
    },
    invertY: function (e) {
      return (e - this.y) / this.k;
    },
    rescaleX: function (e) {
      return e.copy().domain(e.range().map(this.invertX, this).map(e.invert, e));
    },
    rescaleY: function (e) {
      return e.copy().domain(e.range().map(this.invertY, this).map(e.invert, e));
    },
    toString: function () {
      return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
    },
  };
  Ii.prototype;
  function TK(e, t) {
    var r = e == null ? null : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
    if (r != null) {
      var n,
        a,
        o,
        i,
        s = [],
        c = !0,
        l = !1;
      try {
        if (((o = (r = r.call(e)).next), t === 0)) {
          if (Object(r) !== r) return;
          c = !1;
        } else for (; !(c = (n = o.call(r)).done) && (s.push(n.value), s.length !== t); c = !0);
      } catch (u) {
        (l = !0), (a = u);
      } finally {
        try {
          if (!c && r.return != null && ((i = r.return()), Object(i) !== i)) return;
        } finally {
          if (l) throw a;
        }
      }
      return s;
    }
  }
  function ya() {
    ya = function () {
      return e;
    };
    var e = {},
      t = Object.prototype,
      r = t.hasOwnProperty,
      n =
        Object.defineProperty ||
        function (_, O, w) {
          _[O] = w.value;
        },
      a = typeof Symbol == "function" ? Symbol : {},
      o = a.iterator || "@@iterator",
      i = a.asyncIterator || "@@asyncIterator",
      s = a.toStringTag || "@@toStringTag";
    function c(_, O, w) {
      return Object.defineProperty(_, O, { value: w, enumerable: !0, configurable: !0, writable: !0 }), _[O];
    }
    try {
      c({}, "");
    } catch {
      c = function (O, w, R) {
        return (O[w] = R);
      };
    }
    function l(_, O, w, R) {
      var I = O && O.prototype instanceof d ? O : d,
        N = Object.create(I.prototype),
        B = new F(R || []);
      return n(N, "_invoke", { value: A(_, w, B) }), N;
    }
    function u(_, O, w) {
      try {
        return { type: "normal", arg: _.call(O, w) };
      } catch (R) {
        return { type: "throw", arg: R };
      }
    }
    e.wrap = l;
    var f = {};
    function d() {}
    function v() {}
    function p() {}
    var m = {};
    c(m, o, function () {
      return this;
    });
    var g = Object.getPrototypeOf,
      y = g && g(g(k([])));
    y && y !== t && r.call(y, o) && (m = y);
    var b = (p.prototype = d.prototype = Object.create(m));
    function $(_) {
      ["next", "throw", "return"].forEach(function (O) {
        c(_, O, function (w) {
          return this._invoke(O, w);
        });
      });
    }
    function S(_, O) {
      function w(I, N, B, W) {
        var C = u(_[I], _, N);
        if (C.type !== "throw") {
          var E = C.arg,
            V = E.value;
          return V && typeof V == "object" && r.call(V, "__await")
            ? O.resolve(V.__await).then(
                function (X) {
                  w("next", X, B, W);
                },
                function (X) {
                  w("throw", X, B, W);
                }
              )
            : O.resolve(V).then(
                function (X) {
                  (E.value = X), B(E);
                },
                function (X) {
                  return w("throw", X, B, W);
                }
              );
        }
        W(C.arg);
      }
      var R;
      n(this, "_invoke", {
        value: function (I, N) {
          function B() {
            return new O(function (W, C) {
              w(I, N, W, C);
            });
          }
          return (R = R ? R.then(B, B) : B());
        },
      });
    }
    function A(_, O, w) {
      var R = "suspendedStart";
      return function (I, N) {
        if (R === "executing") throw new Error("Generator is already running");
        if (R === "completed") {
          if (I === "throw") throw N;
          return D();
        }
        for (w.method = I, w.arg = N; ; ) {
          var B = w.delegate;
          if (B) {
            var W = P(B, w);
            if (W) {
              if (W === f) continue;
              return W;
            }
          }
          if (w.method === "next") w.sent = w._sent = w.arg;
          else if (w.method === "throw") {
            if (R === "suspendedStart") throw ((R = "completed"), w.arg);
            w.dispatchException(w.arg);
          } else w.method === "return" && w.abrupt("return", w.arg);
          R = "executing";
          var C = u(_, O, w);
          if (C.type === "normal") {
            if (((R = w.done ? "completed" : "suspendedYield"), C.arg === f)) continue;
            return { value: C.arg, done: w.done };
          }
          C.type === "throw" && ((R = "completed"), (w.method = "throw"), (w.arg = C.arg));
        }
      };
    }
    function P(_, O) {
      var w = O.method,
        R = _.iterator[w];
      if (R === void 0)
        return (
          (O.delegate = null),
          (w === "throw" && _.iterator.return && ((O.method = "return"), (O.arg = void 0), P(_, O), O.method === "throw")) ||
            (w !== "return" && ((O.method = "throw"), (O.arg = new TypeError("The iterator does not provide a '" + w + "' method")))),
          f
        );
      var I = u(R, _.iterator, O.arg);
      if (I.type === "throw") return (O.method = "throw"), (O.arg = I.arg), (O.delegate = null), f;
      var N = I.arg;
      return N
        ? N.done
          ? ((O[_.resultName] = N.value), (O.next = _.nextLoc), O.method !== "return" && ((O.method = "next"), (O.arg = void 0)), (O.delegate = null), f)
          : N
        : ((O.method = "throw"), (O.arg = new TypeError("iterator result is not an object")), (O.delegate = null), f);
    }
    function M(_) {
      var O = { tryLoc: _[0] };
      1 in _ && (O.catchLoc = _[1]), 2 in _ && ((O.finallyLoc = _[2]), (O.afterLoc = _[3])), this.tryEntries.push(O);
    }
    function T(_) {
      var O = _.completion || {};
      (O.type = "normal"), delete O.arg, (_.completion = O);
    }
    function F(_) {
      (this.tryEntries = [{ tryLoc: "root" }]), _.forEach(M, this), this.reset(!0);
    }
    function k(_) {
      if (_) {
        var O = _[o];
        if (O) return O.call(_);
        if (typeof _.next == "function") return _;
        if (!isNaN(_.length)) {
          var w = -1,
            R = function I() {
              for (; ++w < _.length; ) if (r.call(_, w)) return (I.value = _[w]), (I.done = !1), I;
              return (I.value = void 0), (I.done = !0), I;
            };
          return (R.next = R);
        }
      }
      return { next: D };
    }
    function D() {
      return { value: void 0, done: !0 };
    }
    return (
      (v.prototype = p),
      n(b, "constructor", { value: p, configurable: !0 }),
      n(p, "constructor", { value: v, configurable: !0 }),
      (v.displayName = c(p, s, "GeneratorFunction")),
      (e.isGeneratorFunction = function (_) {
        var O = typeof _ == "function" && _.constructor;
        return !!O && (O === v || (O.displayName || O.name) === "GeneratorFunction");
      }),
      (e.mark = function (_) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(_, p) : ((_.__proto__ = p), c(_, s, "GeneratorFunction")), (_.prototype = Object.create(b)), _;
      }),
      (e.awrap = function (_) {
        return { __await: _ };
      }),
      $(S.prototype),
      c(S.prototype, i, function () {
        return this;
      }),
      (e.AsyncIterator = S),
      (e.async = function (_, O, w, R, I) {
        I === void 0 && (I = Promise);
        var N = new S(l(_, O, w, R), I);
        return e.isGeneratorFunction(O)
          ? N
          : N.next().then(function (B) {
              return B.done ? B.value : N.next();
            });
      }),
      $(b),
      c(b, s, "Generator"),
      c(b, o, function () {
        return this;
      }),
      c(b, "toString", function () {
        return "[object Generator]";
      }),
      (e.keys = function (_) {
        var O = Object(_),
          w = [];
        for (var R in O) w.push(R);
        return (
          w.reverse(),
          function I() {
            for (; w.length; ) {
              var N = w.pop();
              if (N in O) return (I.value = N), (I.done = !1), I;
            }
            return (I.done = !0), I;
          }
        );
      }),
      (e.values = k),
      (F.prototype = {
        constructor: F,
        reset: function (_) {
          if (
            ((this.prev = 0), (this.next = 0), (this.sent = this._sent = void 0), (this.done = !1), (this.delegate = null), (this.method = "next"), (this.arg = void 0), this.tryEntries.forEach(T), !_)
          )
            for (var O in this) O.charAt(0) === "t" && r.call(this, O) && !isNaN(+O.slice(1)) && (this[O] = void 0);
        },
        stop: function () {
          this.done = !0;
          var _ = this.tryEntries[0].completion;
          if (_.type === "throw") throw _.arg;
          return this.rval;
        },
        dispatchException: function (_) {
          if (this.done) throw _;
          var O = this;
          function w(C, E) {
            return (N.type = "throw"), (N.arg = _), (O.next = C), E && ((O.method = "next"), (O.arg = void 0)), !!E;
          }
          for (var R = this.tryEntries.length - 1; R >= 0; --R) {
            var I = this.tryEntries[R],
              N = I.completion;
            if (I.tryLoc === "root") return w("end");
            if (I.tryLoc <= this.prev) {
              var B = r.call(I, "catchLoc"),
                W = r.call(I, "finallyLoc");
              if (B && W) {
                if (this.prev < I.catchLoc) return w(I.catchLoc, !0);
                if (this.prev < I.finallyLoc) return w(I.finallyLoc);
              } else if (B) {
                if (this.prev < I.catchLoc) return w(I.catchLoc, !0);
              } else {
                if (!W) throw new Error("try statement without catch or finally");
                if (this.prev < I.finallyLoc) return w(I.finallyLoc);
              }
            }
          }
        },
        abrupt: function (_, O) {
          for (var w = this.tryEntries.length - 1; w >= 0; --w) {
            var R = this.tryEntries[w];
            if (R.tryLoc <= this.prev && r.call(R, "finallyLoc") && this.prev < R.finallyLoc) {
              var I = R;
              break;
            }
          }
          I && (_ === "break" || _ === "continue") && I.tryLoc <= O && O <= I.finallyLoc && (I = null);
          var N = I ? I.completion : {};
          return (N.type = _), (N.arg = O), I ? ((this.method = "next"), (this.next = I.finallyLoc), f) : this.complete(N);
        },
        complete: function (_, O) {
          if (_.type === "throw") throw _.arg;
          return (
            _.type === "break" || _.type === "continue"
              ? (this.next = _.arg)
              : _.type === "return"
              ? ((this.rval = this.arg = _.arg), (this.method = "return"), (this.next = "end"))
              : _.type === "normal" && O && (this.next = O),
            f
          );
        },
        finish: function (_) {
          for (var O = this.tryEntries.length - 1; O >= 0; --O) {
            var w = this.tryEntries[O];
            if (w.finallyLoc === _) return this.complete(w.completion, w.afterLoc), T(w), f;
          }
        },
        catch: function (_) {
          for (var O = this.tryEntries.length - 1; O >= 0; --O) {
            var w = this.tryEntries[O];
            if (w.tryLoc === _) {
              var R = w.completion;
              if (R.type === "throw") {
                var I = R.arg;
                T(w);
              }
              return I;
            }
          }
          throw new Error("illegal catch attempt");
        },
        delegateYield: function (_, O, w) {
          return (this.delegate = { iterator: k(_), resultName: O, nextLoc: w }), this.method === "next" && (this.arg = void 0), f;
        },
      }),
      e
    );
  }
  function Fi(e) {
    "@babel/helpers - typeof";
    return (
      (Fi =
        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
            }),
      Fi(e)
    );
  }
  function bt(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }
  function w$(e, t) {
    for (var r = 0; r < t.length; r++) {
      var n = t[r];
      (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, b5(n.key), n);
    }
  }
  function $t(e, t, r) {
    return t && w$(e.prototype, t), r && w$(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
  }
  function CK(e, t, r) {
    return (t = b5(t)), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
  }
  function g5(e, t) {
    return _K(e) || TK(e, t) || y5(e, t) || AK();
  }
  function zp(e) {
    return OK(e) || PK(e) || y5(e) || IK();
  }
  function OK(e) {
    if (Array.isArray(e)) return Vp(e);
  }
  function _K(e) {
    if (Array.isArray(e)) return e;
  }
  function PK(e) {
    if ((typeof Symbol < "u" && e[Symbol.iterator] != null) || e["@@iterator"] != null) return Array.from(e);
  }
  function y5(e, t) {
    if (e) {
      if (typeof e == "string") return Vp(e, t);
      var r = Object.prototype.toString.call(e).slice(8, -1);
      if ((r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")) return Array.from(e);
      if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Vp(e, t);
    }
  }
  function Vp(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
  }
  function IK() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function AK() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function RK(e, t) {
    if (typeof e != "object" || e === null) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
      var n = r.call(e, t || "default");
      if (typeof n != "object") return n;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (t === "string" ? String : Number)(e);
  }
  function b5(e) {
    var t = RK(e, "string");
    return typeof t == "symbol" ? t : String(t);
  }
  var rt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
  function xt(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
  }
  var yi = function (e) {
      return e && e.Math === Math && e;
    },
    Fe =
      yi(typeof globalThis == "object" && globalThis) ||
      yi(typeof window == "object" && window) ||
      yi(typeof self == "object" && self) ||
      yi(typeof rt == "object" && rt) ||
      yi(typeof rt == "object" && rt) ||
      (function () {
        return this;
      })() ||
      Function("return this")(),
    $5 = { exports: {} },
    S$ = Fe,
    MK = Object.defineProperty,
    d0 = function (e, t) {
      try {
        MK(S$, e, { value: t, configurable: !0, writable: !0 });
      } catch {
        S$[e] = t;
      }
      return t;
    },
    DK = Fe,
    NK = d0,
    E$ = "__core-js_shared__",
    kK = DK[E$] || NK(E$, {}),
    h0 = kK,
    x$ = h0;
  ($5.exports = function (e, t) {
    return x$[e] || (x$[e] = t !== void 0 ? t : {});
  })("versions", []).push({
    version: "3.34.0",
    mode: "global",
    copyright: "© 2014-2023 Denis Pushkarev (zloirock.ru)",
    license: "https://github.com/zloirock/core-js/blob/v3.34.0/LICENSE",
    source: "https://github.com/zloirock/core-js",
  });
  var v0 = $5.exports,
    be = function (e) {
      try {
        return !!e();
      } catch {
        return !0;
      }
    },
    LK = be,
    Sf = !LK(function () {
      var e = function () {}.bind();
      return typeof e != "function" || e.hasOwnProperty("prototype");
    }),
    w5 = Sf,
    S5 = Function.prototype,
    Gp = S5.call,
    FK = w5 && S5.bind.bind(Gp, Gp),
    xe = w5
      ? FK
      : function (e) {
          return function () {
            return Gp.apply(e, arguments);
          };
        },
    jn = function (e) {
      return e == null;
    },
    jK = jn,
    BK = TypeError,
    Ma = function (e) {
      if (jK(e)) throw new BK("Can't call method on " + e);
      return e;
    },
    UK = Ma,
    WK = Object,
    Lr = function (e) {
      return WK(UK(e));
    },
    HK = xe,
    zK = Lr,
    VK = HK({}.hasOwnProperty),
    Qt =
      Object.hasOwn ||
      function (t, r) {
        return VK(zK(t), r);
      },
    GK = xe,
    YK = 0,
    KK = Math.random(),
    qK = GK((1).toString),
    p0 = function (e) {
      return "Symbol(" + (e === void 0 ? "" : e) + ")_" + qK(++YK + KK, 36);
    },
    Da = (typeof navigator < "u" && String(navigator.userAgent)) || "",
    E5 = Fe,
    fh = Da,
    T$ = E5.process,
    C$ = E5.Deno,
    O$ = (T$ && T$.versions) || (C$ && C$.version),
    _$ = O$ && O$.v8,
    ir,
    hu;
  _$ && ((ir = _$.split(".")), (hu = ir[0] > 0 && ir[0] < 4 ? 1 : +(ir[0] + ir[1])));
  !hu && fh && ((ir = fh.match(/Edge\/(\d+)/)), (!ir || ir[1] >= 74) && ((ir = fh.match(/Chrome\/(\d+)/)), ir && (hu = +ir[1])));
  var Ds = hu,
    P$ = Ds,
    XK = be,
    ZK = Fe,
    JK = ZK.String,
    x5 =
      !!Object.getOwnPropertySymbols &&
      !XK(function () {
        var e = Symbol("symbol detection");
        return !JK(e) || !(Object(e) instanceof Symbol) || (!Symbol.sham && P$ && P$ < 41);
      }),
    QK = x5,
    T5 = QK && !Symbol.sham && typeof Symbol.iterator == "symbol",
    eq = Fe,
    tq = v0,
    I$ = Qt,
    rq = p0,
    nq = x5,
    aq = T5,
    vo = eq.Symbol,
    dh = tq("wks"),
    oq = aq ? vo.for || vo : (vo && vo.withoutSetter) || rq,
    je = function (e) {
      return I$(dh, e) || (dh[e] = nq && I$(vo, e) ? vo[e] : oq("Symbol." + e)), dh[e];
    },
    iq = je,
    sq = iq("toStringTag"),
    C5 = {};
  C5[sq] = "z";
  var m0 = String(C5) === "[object z]",
    Yp = typeof document == "object" && document.all,
    cq = typeof Yp > "u" && Yp !== void 0,
    O5 = { all: Yp, IS_HTMLDDA: cq },
    _5 = O5,
    lq = _5.all,
    Ne = _5.IS_HTMLDDA
      ? function (e) {
          return typeof e == "function" || e === lq;
        }
      : function (e) {
          return typeof e == "function";
        },
    dr = {},
    uq = be,
    At = !uq(function () {
      return (
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1] !== 7
      );
    }),
    A$ = Ne,
    P5 = O5,
    fq = P5.all,
    lt = P5.IS_HTMLDDA
      ? function (e) {
          return typeof e == "object" ? e !== null : A$(e) || e === fq;
        }
      : function (e) {
          return typeof e == "object" ? e !== null : A$(e);
        },
    dq = Fe,
    R$ = lt,
    Kp = dq.document,
    hq = R$(Kp) && R$(Kp.createElement),
    Ef = function (e) {
      return hq ? Kp.createElement(e) : {};
    },
    vq = At,
    pq = be,
    mq = Ef,
    I5 =
      !vq &&
      !pq(function () {
        return (
          Object.defineProperty(mq("div"), "a", {
            get: function () {
              return 7;
            },
          }).a !== 7
        );
      }),
    gq = At,
    yq = be,
    A5 =
      gq &&
      yq(function () {
        return Object.defineProperty(function () {}, "prototype", { value: 42, writable: !1 }).prototype !== 42;
      }),
    bq = lt,
    $q = String,
    wq = TypeError,
    Tt = function (e) {
      if (bq(e)) return e;
      throw new wq($q(e) + " is not an object");
    },
    Sq = Sf,
    bc = Function.prototype.call,
    ut = Sq
      ? bc.bind(bc)
      : function () {
          return bc.apply(bc, arguments);
        },
    hh = Fe,
    Eq = Ne,
    xq = function (e) {
      return Eq(e) ? e : void 0;
    },
    Na = function (e, t) {
      return arguments.length < 2 ? xq(hh[e]) : hh[e] && hh[e][t];
    },
    Tq = xe,
    g0 = Tq({}.isPrototypeOf),
    Cq = Na,
    Oq = Ne,
    _q = g0,
    Pq = T5,
    Iq = Object,
    R5 = Pq
      ? function (e) {
          return typeof e == "symbol";
        }
      : function (e) {
          var t = Cq("Symbol");
          return Oq(t) && _q(t.prototype, Iq(e));
        },
    Aq = String,
    Ns = function (e) {
      try {
        return Aq(e);
      } catch {
        return "Object";
      }
    },
    Rq = Ne,
    Mq = Ns,
    Dq = TypeError,
    Fr = function (e) {
      if (Rq(e)) return e;
      throw new Dq(Mq(e) + " is not a function");
    },
    Nq = Fr,
    kq = jn,
    xf = function (e, t) {
      var r = e[t];
      return kq(r) ? void 0 : Nq(r);
    },
    vh = ut,
    ph = Ne,
    mh = lt,
    Lq = TypeError,
    Fq = function (e, t) {
      var r, n;
      if ((t === "string" && ph((r = e.toString)) && !mh((n = vh(r, e)))) || (ph((r = e.valueOf)) && !mh((n = vh(r, e)))) || (t !== "string" && ph((r = e.toString)) && !mh((n = vh(r, e))))) return n;
      throw new Lq("Can't convert object to primitive value");
    },
    jq = ut,
    M$ = lt,
    D$ = R5,
    Bq = xf,
    Uq = Fq,
    Wq = je,
    Hq = TypeError,
    zq = Wq("toPrimitive"),
    Vq = function (e, t) {
      if (!M$(e) || D$(e)) return e;
      var r = Bq(e, zq),
        n;
      if (r) {
        if ((t === void 0 && (t = "default"), (n = jq(r, e, t)), !M$(n) || D$(n))) return n;
        throw new Hq("Can't convert object to primitive value");
      }
      return t === void 0 && (t = "number"), Uq(e, t);
    },
    Gq = Vq,
    Yq = R5,
    y0 = function (e) {
      var t = Gq(e, "string");
      return Yq(t) ? t : t + "";
    },
    Kq = At,
    qq = I5,
    Xq = A5,
    $c = Tt,
    N$ = y0,
    Zq = TypeError,
    gh = Object.defineProperty,
    Jq = Object.getOwnPropertyDescriptor,
    yh = "enumerable",
    bh = "configurable",
    $h = "writable";
  dr.f = Kq
    ? Xq
      ? function (t, r, n) {
          if (($c(t), (r = N$(r)), $c(n), typeof t == "function" && r === "prototype" && "value" in n && $h in n && !n[$h])) {
            var a = Jq(t, r);
            a && a[$h] && ((t[r] = n.value), (n = { configurable: bh in n ? n[bh] : a[bh], enumerable: yh in n ? n[yh] : a[yh], writable: !1 }));
          }
          return gh(t, r, n);
        }
      : gh
    : function (t, r, n) {
        if (($c(t), (r = N$(r)), $c(n), qq))
          try {
            return gh(t, r, n);
          } catch {}
        if ("get" in n || "set" in n) throw new Zq("Accessors not supported");
        return "value" in n && (t[r] = n.value), t;
      };
  var M5 = { exports: {} },
    qp = At,
    Qq = Qt,
    D5 = Function.prototype,
    eX = qp && Object.getOwnPropertyDescriptor,
    b0 = Qq(D5, "name"),
    tX = b0 && function () {}.name === "something",
    rX = b0 && (!qp || (qp && eX(D5, "name").configurable)),
    Tf = { EXISTS: b0, PROPER: tX, CONFIGURABLE: rX },
    nX = xe,
    aX = Ne,
    Xp = h0,
    oX = nX(Function.toString);
  aX(Xp.inspectSource) ||
    (Xp.inspectSource = function (e) {
      return oX(e);
    });
  var $0 = Xp.inspectSource,
    iX = Fe,
    sX = Ne,
    k$ = iX.WeakMap,
    cX = sX(k$) && /native code/.test(String(k$)),
    Cf = function (e, t) {
      return { enumerable: !(e & 1), configurable: !(e & 2), writable: !(e & 4), value: t };
    },
    lX = At,
    uX = dr,
    fX = Cf,
    ei = lX
      ? function (e, t, r) {
          return uX.f(e, t, fX(1, r));
        }
      : function (e, t, r) {
          return (e[t] = r), e;
        },
    dX = v0,
    hX = p0,
    L$ = dX("keys"),
    w0 = function (e) {
      return L$[e] || (L$[e] = hX(e));
    },
    Of = {},
    vX = cX,
    N5 = Fe,
    pX = lt,
    mX = ei,
    wh = Qt,
    Sh = h0,
    gX = w0,
    yX = Of,
    F$ = "Object already initialized",
    Zp = N5.TypeError,
    bX = N5.WeakMap,
    vu,
    ss,
    pu,
    $X = function (e) {
      return pu(e) ? ss(e) : vu(e, {});
    },
    wX = function (e) {
      return function (t) {
        var r;
        if (!pX(t) || (r = ss(t)).type !== e) throw new Zp("Incompatible receiver, " + e + " required");
        return r;
      };
    };
  if (vX || Sh.state) {
    var br = Sh.state || (Sh.state = new bX());
    (br.get = br.get),
      (br.has = br.has),
      (br.set = br.set),
      (vu = function (e, t) {
        if (br.has(e)) throw new Zp(F$);
        return (t.facade = e), br.set(e, t), t;
      }),
      (ss = function (e) {
        return br.get(e) || {};
      }),
      (pu = function (e) {
        return br.has(e);
      });
  } else {
    var eo = gX("state");
    (yX[eo] = !0),
      (vu = function (e, t) {
        if (wh(e, eo)) throw new Zp(F$);
        return (t.facade = e), mX(e, eo, t), t;
      }),
      (ss = function (e) {
        return wh(e, eo) ? e[eo] : {};
      }),
      (pu = function (e) {
        return wh(e, eo);
      });
  }
  var ka = { set: vu, get: ss, has: pu, enforce: $X, getterFor: wX },
    S0 = xe,
    SX = be,
    EX = Ne,
    wc = Qt,
    Jp = At,
    xX = Tf.CONFIGURABLE,
    TX = $0,
    k5 = ka,
    CX = k5.enforce,
    OX = k5.get,
    j$ = String,
    fl = Object.defineProperty,
    _X = S0("".slice),
    PX = S0("".replace),
    IX = S0([].join),
    AX =
      Jp &&
      !SX(function () {
        return fl(function () {}, "length", { value: 8 }).length !== 8;
      }),
    RX = String(String).split("String"),
    MX = (M5.exports = function (e, t, r) {
      _X(j$(t), 0, 7) === "Symbol(" && (t = "[" + PX(j$(t), /^Symbol\(([^)]*)\)/, "$1") + "]"),
        r && r.getter && (t = "get " + t),
        r && r.setter && (t = "set " + t),
        (!wc(e, "name") || (xX && e.name !== t)) && (Jp ? fl(e, "name", { value: t, configurable: !0 }) : (e.name = t)),
        AX && r && wc(r, "arity") && e.length !== r.arity && fl(e, "length", { value: r.arity });
      try {
        r && wc(r, "constructor") && r.constructor ? Jp && fl(e, "prototype", { writable: !1 }) : e.prototype && (e.prototype = void 0);
      } catch {}
      var n = CX(e);
      return wc(n, "source") || (n.source = IX(RX, typeof t == "string" ? t : "")), e;
    });
  Function.prototype.toString = MX(function () {
    return (EX(this) && OX(this).source) || TX(this);
  }, "toString");
  var L5 = M5.exports,
    DX = Ne,
    NX = dr,
    kX = L5,
    LX = d0,
    ln = function (e, t, r, n) {
      n || (n = {});
      var a = n.enumerable,
        o = n.name !== void 0 ? n.name : t;
      if ((DX(r) && kX(r, o, n), n.global)) a ? (e[t] = r) : LX(t, r);
      else {
        try {
          n.unsafe ? e[t] && (a = !0) : delete e[t];
        } catch {}
        a ? (e[t] = r) : NX.f(e, t, { value: r, enumerable: !1, configurable: !n.nonConfigurable, writable: !n.nonWritable });
      }
      return e;
    },
    F5 = xe,
    FX = F5({}.toString),
    jX = F5("".slice),
    un = function (e) {
      return jX(FX(e), 8, -1);
    },
    BX = m0,
    UX = Ne,
    dl = un,
    WX = je,
    HX = WX("toStringTag"),
    zX = Object,
    VX =
      dl(
        (function () {
          return arguments;
        })()
      ) === "Arguments",
    GX = function (e, t) {
      try {
        return e[t];
      } catch {}
    },
    _f = BX
      ? dl
      : function (e) {
          var t, r, n;
          return e === void 0 ? "Undefined" : e === null ? "Null" : typeof (r = GX((t = zX(e)), HX)) == "string" ? r : VX ? dl(t) : (n = dl(t)) === "Object" && UX(t.callee) ? "Arguments" : n;
        },
    YX = m0,
    KX = _f,
    qX = YX
      ? {}.toString
      : function () {
          return "[object " + KX(this) + "]";
        },
    XX = m0,
    ZX = ln,
    JX = qX;
  XX || ZX(Object.prototype, "toString", JX, { unsafe: !0 });
  var ks = {},
    Pf = {},
    j5 = {}.propertyIsEnumerable,
    B5 = Object.getOwnPropertyDescriptor,
    QX = B5 && !j5.call({ 1: 2 }, 1);
  Pf.f = QX
    ? function (t) {
        var r = B5(this, t);
        return !!r && r.enumerable;
      }
    : j5;
  var eZ = xe,
    tZ = be,
    rZ = un,
    Eh = Object,
    nZ = eZ("".split),
    If = tZ(function () {
      return !Eh("z").propertyIsEnumerable(0);
    })
      ? function (e) {
          return rZ(e) === "String" ? nZ(e, "") : Eh(e);
        }
      : Eh,
    aZ = If,
    oZ = Ma,
    fn = function (e) {
      return aZ(oZ(e));
    },
    iZ = At,
    sZ = ut,
    cZ = Pf,
    lZ = Cf,
    uZ = fn,
    fZ = y0,
    dZ = Qt,
    hZ = I5,
    B$ = Object.getOwnPropertyDescriptor;
  ks.f = iZ
    ? B$
    : function (t, r) {
        if (((t = uZ(t)), (r = fZ(r)), hZ))
          try {
            return B$(t, r);
          } catch {}
        if (dZ(t, r)) return lZ(!sZ(cZ.f, t, r), t[r]);
      };
  var Af = {},
    vZ = Math.ceil,
    pZ = Math.floor,
    mZ =
      Math.trunc ||
      function (t) {
        var r = +t;
        return (r > 0 ? pZ : vZ)(r);
      },
    gZ = mZ,
    Rf = function (e) {
      var t = +e;
      return t !== t || t === 0 ? 0 : gZ(t);
    },
    yZ = Rf,
    bZ = Math.max,
    $Z = Math.min,
    Mf = function (e, t) {
      var r = yZ(e);
      return r < 0 ? bZ(r + t, 0) : $Z(r, t);
    },
    wZ = Rf,
    SZ = Math.min,
    E0 = function (e) {
      return e > 0 ? SZ(wZ(e), 9007199254740991) : 0;
    },
    EZ = E0,
    dn = function (e) {
      return EZ(e.length);
    },
    xZ = fn,
    TZ = Mf,
    CZ = dn,
    U$ = function (e) {
      return function (t, r, n) {
        var a = xZ(t),
          o = CZ(a),
          i = TZ(n, o),
          s;
        if (e && r !== r) {
          for (; o > i; ) if (((s = a[i++]), s !== s)) return !0;
        } else for (; o > i; i++) if ((e || i in a) && a[i] === r) return e || i || 0;
        return !e && -1;
      };
    },
    U5 = { includes: U$(!0), indexOf: U$(!1) },
    OZ = xe,
    xh = Qt,
    _Z = fn,
    PZ = U5.indexOf,
    IZ = Of,
    W$ = OZ([].push),
    W5 = function (e, t) {
      var r = _Z(e),
        n = 0,
        a = [],
        o;
      for (o in r) !xh(IZ, o) && xh(r, o) && W$(a, o);
      for (; t.length > n; ) xh(r, (o = t[n++])) && (~PZ(a, o) || W$(a, o));
      return a;
    },
    x0 = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
    AZ = W5,
    RZ = x0,
    MZ = RZ.concat("length", "prototype");
  Af.f =
    Object.getOwnPropertyNames ||
    function (t) {
      return AZ(t, MZ);
    };
  var T0 = {};
  T0.f = Object.getOwnPropertySymbols;
  var DZ = Na,
    NZ = xe,
    kZ = Af,
    LZ = T0,
    FZ = Tt,
    jZ = NZ([].concat),
    BZ =
      DZ("Reflect", "ownKeys") ||
      function (t) {
        var r = kZ.f(FZ(t)),
          n = LZ.f;
        return n ? jZ(r, n(t)) : r;
      },
    H$ = Qt,
    UZ = BZ,
    WZ = ks,
    HZ = dr,
    zZ = function (e, t, r) {
      for (var n = UZ(t), a = HZ.f, o = WZ.f, i = 0; i < n.length; i++) {
        var s = n[i];
        !H$(e, s) && !(r && H$(r, s)) && a(e, s, o(t, s));
      }
    },
    VZ = be,
    GZ = Ne,
    YZ = /#|\.prototype\./,
    Ls = function (e, t) {
      var r = qZ[KZ(e)];
      return r === ZZ ? !0 : r === XZ ? !1 : GZ(t) ? VZ(t) : !!t;
    },
    KZ = (Ls.normalize = function (e) {
      return String(e).replace(YZ, ".").toLowerCase();
    }),
    qZ = (Ls.data = {}),
    XZ = (Ls.NATIVE = "N"),
    ZZ = (Ls.POLYFILL = "P"),
    C0 = Ls,
    Th = Fe,
    JZ = ks.f,
    QZ = ei,
    eJ = ln,
    tJ = d0,
    rJ = zZ,
    nJ = C0,
    _e = function (e, t) {
      var r = e.target,
        n = e.global,
        a = e.stat,
        o,
        i,
        s,
        c,
        l,
        u;
      if ((n ? (i = Th) : a ? (i = Th[r] || tJ(r, {})) : (i = (Th[r] || {}).prototype), i))
        for (s in t) {
          if (((l = t[s]), e.dontCallGetSet ? ((u = JZ(i, s)), (c = u && u.value)) : (c = i[s]), (o = nJ(n ? s : r + (a ? "." : "#") + s, e.forced)), !o && c !== void 0)) {
            if (typeof l == typeof c) continue;
            rJ(l, c);
          }
          (e.sham || (c && c.sham)) && QZ(l, "sham", !0), eJ(i, s, l, e);
        }
    },
    aJ = Fe,
    oJ = un,
    Df = oJ(aJ.process) === "process",
    iJ = xe,
    sJ = Fr,
    cJ = function (e, t, r) {
      try {
        return iJ(sJ(Object.getOwnPropertyDescriptor(e, t)[r]));
      } catch {}
    },
    lJ = Ne,
    uJ = String,
    fJ = TypeError,
    dJ = function (e) {
      if (typeof e == "object" || lJ(e)) return e;
      throw new fJ("Can't set " + uJ(e) + " as a prototype");
    },
    hJ = cJ,
    vJ = Tt,
    pJ = dJ,
    O0 =
      Object.setPrototypeOf ||
      ("__proto__" in {}
        ? (function () {
            var e = !1,
              t = {},
              r;
            try {
              (r = hJ(Object.prototype, "__proto__", "set")), r(t, []), (e = t instanceof Array);
            } catch {}
            return function (a, o) {
              return vJ(a), pJ(o), e ? r(a, o) : (a.__proto__ = o), a;
            };
          })()
        : void 0),
    mJ = dr.f,
    gJ = Qt,
    yJ = je,
    z$ = yJ("toStringTag"),
    Fs = function (e, t, r) {
      e && !r && (e = e.prototype), e && !gJ(e, z$) && mJ(e, z$, { configurable: !0, value: t });
    },
    V$ = L5,
    bJ = dr,
    _0 = function (e, t, r) {
      return r.get && V$(r.get, t, { getter: !0 }), r.set && V$(r.set, t, { setter: !0 }), bJ.f(e, t, r);
    },
    $J = Na,
    wJ = _0,
    SJ = je,
    EJ = At,
    G$ = SJ("species"),
    H5 = function (e) {
      var t = $J(e);
      EJ &&
        t &&
        !t[G$] &&
        wJ(t, G$, {
          configurable: !0,
          get: function () {
            return this;
          },
        });
    },
    xJ = g0,
    TJ = TypeError,
    Nf = function (e, t) {
      if (xJ(t, e)) return e;
      throw new TJ("Incorrect invocation");
    },
    CJ = xe,
    OJ = be,
    z5 = Ne,
    _J = _f,
    PJ = Na,
    IJ = $0,
    V5 = function () {},
    AJ = [],
    G5 = PJ("Reflect", "construct"),
    P0 = /^\s*(?:class|function)\b/,
    RJ = CJ(P0.exec),
    MJ = !P0.test(V5),
    bi = function (t) {
      if (!z5(t)) return !1;
      try {
        return G5(V5, AJ, t), !0;
      } catch {
        return !1;
      }
    },
    Y5 = function (t) {
      if (!z5(t)) return !1;
      switch (_J(t)) {
        case "AsyncFunction":
        case "GeneratorFunction":
        case "AsyncGeneratorFunction":
          return !1;
      }
      try {
        return MJ || !!RJ(P0, IJ(t));
      } catch {
        return !0;
      }
    };
  Y5.sham = !0;
  var kf =
      !G5 ||
      OJ(function () {
        var e;
        return (
          bi(bi.call) ||
          !bi(Object) ||
          !bi(function () {
            e = !0;
          }) ||
          e
        );
      })
        ? Y5
        : bi,
    DJ = kf,
    NJ = Ns,
    kJ = TypeError,
    LJ = function (e) {
      if (DJ(e)) return e;
      throw new kJ(NJ(e) + " is not a constructor");
    },
    Y$ = Tt,
    FJ = LJ,
    jJ = jn,
    BJ = je,
    UJ = BJ("species"),
    WJ = function (e, t) {
      var r = Y$(e).constructor,
        n;
      return r === void 0 || jJ((n = Y$(r)[UJ])) ? t : FJ(n);
    },
    HJ = Sf,
    K5 = Function.prototype,
    K$ = K5.apply,
    q$ = K5.call,
    q5 =
      (typeof Reflect == "object" && Reflect.apply) ||
      (HJ
        ? q$.bind(K$)
        : function () {
            return q$.apply(K$, arguments);
          }),
    zJ = un,
    VJ = xe,
    I0 = function (e) {
      if (zJ(e) === "Function") return VJ(e);
    },
    X$ = I0,
    GJ = Fr,
    YJ = Sf,
    KJ = X$(X$.bind),
    ti = function (e, t) {
      return (
        GJ(e),
        t === void 0
          ? e
          : YJ
          ? KJ(e, t)
          : function () {
              return e.apply(t, arguments);
            }
      );
    },
    qJ = Na,
    X5 = qJ("document", "documentElement"),
    XJ = xe,
    Z5 = XJ([].slice),
    ZJ = TypeError,
    JJ = function (e, t) {
      if (e < t) throw new ZJ("Not enough arguments");
      return e;
    },
    QJ = Da,
    J5 = /(?:ipad|iphone|ipod).*applewebkit/i.test(QJ),
    Nt = Fe,
    eQ = q5,
    tQ = ti,
    Z$ = Ne,
    rQ = Qt,
    Q5 = be,
    J$ = X5,
    nQ = Z5,
    Q$ = Ef,
    aQ = JJ,
    oQ = J5,
    iQ = Df,
    Qp = Nt.setImmediate,
    em = Nt.clearImmediate,
    sQ = Nt.process,
    Ch = Nt.Dispatch,
    cQ = Nt.Function,
    ew = Nt.MessageChannel,
    lQ = Nt.String,
    Oh = 0,
    ji = {},
    tw = "onreadystatechange",
    cs,
    Yn,
    _h,
    Ph;
  Q5(function () {
    cs = Nt.location;
  });
  var A0 = function (e) {
      if (rQ(ji, e)) {
        var t = ji[e];
        delete ji[e], t();
      }
    },
    Ih = function (e) {
      return function () {
        A0(e);
      };
    },
    rw = function (e) {
      A0(e.data);
    },
    nw = function (e) {
      Nt.postMessage(lQ(e), cs.protocol + "//" + cs.host);
    };
  (!Qp || !em) &&
    ((Qp = function (t) {
      aQ(arguments.length, 1);
      var r = Z$(t) ? t : cQ(t),
        n = nQ(arguments, 1);
      return (
        (ji[++Oh] = function () {
          eQ(r, void 0, n);
        }),
        Yn(Oh),
        Oh
      );
    }),
    (em = function (t) {
      delete ji[t];
    }),
    iQ
      ? (Yn = function (e) {
          sQ.nextTick(Ih(e));
        })
      : Ch && Ch.now
      ? (Yn = function (e) {
          Ch.now(Ih(e));
        })
      : ew && !oQ
      ? ((_h = new ew()), (Ph = _h.port2), (_h.port1.onmessage = rw), (Yn = tQ(Ph.postMessage, Ph)))
      : Nt.addEventListener && Z$(Nt.postMessage) && !Nt.importScripts && cs && cs.protocol !== "file:" && !Q5(nw)
      ? ((Yn = nw), Nt.addEventListener("message", rw, !1))
      : tw in Q$("script")
      ? (Yn = function (e) {
          J$.appendChild(Q$("script"))[tw] = function () {
            J$.removeChild(this), A0(e);
          };
        })
      : (Yn = function (e) {
          setTimeout(Ih(e), 0);
        }));
  var e3 = { set: Qp, clear: em },
    t3 = function () {
      (this.head = null), (this.tail = null);
    };
  t3.prototype = {
    add: function (e) {
      var t = { item: e, next: null },
        r = this.tail;
      r ? (r.next = t) : (this.head = t), (this.tail = t);
    },
    get: function () {
      var e = this.head;
      if (e) {
        var t = (this.head = e.next);
        return t === null && (this.tail = null), e.item;
      }
    },
  };
  var r3 = t3,
    uQ = Da,
    fQ = /ipad|iphone|ipod/i.test(uQ) && typeof Pebble < "u",
    dQ = Da,
    hQ = /web0s(?!.*chrome)/i.test(dQ),
    ba = Fe,
    aw = ti,
    vQ = ks.f,
    Ah = e3.set,
    pQ = r3,
    mQ = J5,
    gQ = fQ,
    yQ = hQ,
    Rh = Df,
    ow = ba.MutationObserver || ba.WebKitMutationObserver,
    iw = ba.document,
    sw = ba.process,
    Sc = ba.Promise,
    cw = vQ(ba, "queueMicrotask"),
    tm = cw && cw.value,
    to,
    Mh,
    Dh,
    Ec,
    lw;
  if (!tm) {
    var xc = new pQ(),
      Tc = function () {
        var e, t;
        for (Rh && (e = sw.domain) && e.exit(); (t = xc.get()); )
          try {
            t();
          } catch (r) {
            throw (xc.head && to(), r);
          }
        e && e.enter();
      };
    !mQ && !Rh && !yQ && ow && iw
      ? ((Mh = !0),
        (Dh = iw.createTextNode("")),
        new ow(Tc).observe(Dh, { characterData: !0 }),
        (to = function () {
          Dh.data = Mh = !Mh;
        }))
      : !gQ && Sc && Sc.resolve
      ? ((Ec = Sc.resolve(void 0)),
        (Ec.constructor = Sc),
        (lw = aw(Ec.then, Ec)),
        (to = function () {
          lw(Tc);
        }))
      : Rh
      ? (to = function () {
          sw.nextTick(Tc);
        })
      : ((Ah = aw(Ah, ba)),
        (to = function () {
          Ah(Tc);
        })),
      (tm = function (e) {
        xc.head || to(), xc.add(e);
      });
  }
  var bQ = tm,
    $Q = function (e, t) {
      try {
        arguments.length;
      } catch {}
    },
    Lf = function (e) {
      try {
        return { error: !1, value: e() };
      } catch (t) {
        return { error: !0, value: t };
      }
    },
    wQ = Fe,
    Ff = wQ.Promise,
    n3 = typeof Deno == "object" && Deno && typeof Deno.version == "object",
    SQ = n3,
    EQ = Df,
    xQ = !SQ && !EQ && typeof window == "object" && typeof document == "object",
    TQ = Fe,
    Bi = Ff,
    CQ = Ne,
    OQ = C0,
    _Q = $0,
    PQ = je,
    IQ = xQ,
    AQ = n3,
    Nh = Ds;
  Bi && Bi.prototype;
  var RQ = PQ("species"),
    rm = !1,
    a3 = CQ(TQ.PromiseRejectionEvent),
    MQ = OQ("Promise", function () {
      var e = _Q(Bi),
        t = e !== String(Bi);
      if (!t && Nh === 66) return !0;
      if (!Nh || Nh < 51 || !/native code/.test(e)) {
        var r = new Bi(function (o) {
            o(1);
          }),
          n = function (o) {
            o(
              function () {},
              function () {}
            );
          },
          a = (r.constructor = {});
        if (((a[RQ] = n), (rm = r.then(function () {}) instanceof n), !rm)) return !0;
      }
      return !t && (IQ || AQ) && !a3;
    }),
    js = { CONSTRUCTOR: MQ, REJECTION_EVENT: a3, SUBCLASSING: rm },
    La = {},
    uw = Fr,
    DQ = TypeError,
    NQ = function (e) {
      var t, r;
      (this.promise = new e(function (n, a) {
        if (t !== void 0 || r !== void 0) throw new DQ("Bad Promise constructor");
        (t = n), (r = a);
      })),
        (this.resolve = uw(t)),
        (this.reject = uw(r));
    };
  La.f = function (e) {
    return new NQ(e);
  };
  var kQ = _e,
    mu = Df,
    Mn = Fe,
    Ho = ut,
    fw = ln,
    dw = O0,
    LQ = Fs,
    FQ = H5,
    jQ = Fr,
    hl = Ne,
    BQ = lt,
    UQ = Nf,
    WQ = WJ,
    o3 = e3.set,
    R0 = bQ,
    HQ = $Q,
    zQ = Lf,
    VQ = r3,
    i3 = ka,
    gu = Ff,
    M0 = js,
    s3 = La,
    jf = "Promise",
    c3 = M0.CONSTRUCTOR,
    GQ = M0.REJECTION_EVENT,
    YQ = M0.SUBCLASSING,
    kh = i3.getterFor(jf),
    KQ = i3.set,
    lo = gu && gu.prototype,
    ea = gu,
    Cc = lo,
    l3 = Mn.TypeError,
    nm = Mn.document,
    D0 = Mn.process,
    am = s3.f,
    qQ = am,
    XQ = !!(nm && nm.createEvent && Mn.dispatchEvent),
    u3 = "unhandledrejection",
    ZQ = "rejectionhandled",
    hw = 0,
    f3 = 1,
    JQ = 2,
    N0 = 1,
    d3 = 2,
    Oc,
    vw,
    QQ,
    pw,
    h3 = function (e) {
      var t;
      return BQ(e) && hl((t = e.then)) ? t : !1;
    },
    v3 = function (e, t) {
      var r = t.value,
        n = t.state === f3,
        a = n ? e.ok : e.fail,
        o = e.resolve,
        i = e.reject,
        s = e.domain,
        c,
        l,
        u;
      try {
        a
          ? (n || (t.rejection === d3 && tee(t), (t.rejection = N0)),
            a === !0 ? (c = r) : (s && s.enter(), (c = a(r)), s && (s.exit(), (u = !0))),
            c === e.promise ? i(new l3("Promise-chain cycle")) : (l = h3(c)) ? Ho(l, c, o, i) : o(c))
          : i(r);
      } catch (f) {
        s && !u && s.exit(), i(f);
      }
    },
    p3 = function (e, t) {
      e.notified ||
        ((e.notified = !0),
        R0(function () {
          for (var r = e.reactions, n; (n = r.get()); ) v3(n, e);
          (e.notified = !1), t && !e.rejection && eee(e);
        }));
    },
    m3 = function (e, t, r) {
      var n, a;
      XQ ? ((n = nm.createEvent("Event")), (n.promise = t), (n.reason = r), n.initEvent(e, !1, !0), Mn.dispatchEvent(n)) : (n = { promise: t, reason: r }),
        !GQ && (a = Mn["on" + e]) ? a(n) : e === u3 && HQ("Unhandled promise rejection", r);
    },
    eee = function (e) {
      Ho(o3, Mn, function () {
        var t = e.facade,
          r = e.value,
          n = mw(e),
          a;
        if (
          n &&
          ((a = zQ(function () {
            mu ? D0.emit("unhandledRejection", r, t) : m3(u3, t, r);
          })),
          (e.rejection = mu || mw(e) ? d3 : N0),
          a.error)
        )
          throw a.value;
      });
    },
    mw = function (e) {
      return e.rejection !== N0 && !e.parent;
    },
    tee = function (e) {
      Ho(o3, Mn, function () {
        var t = e.facade;
        mu ? D0.emit("rejectionHandled", t) : m3(ZQ, t, e.value);
      });
    },
    po = function (e, t, r) {
      return function (n) {
        e(t, n, r);
      };
    },
    Co = function (e, t, r) {
      e.done || ((e.done = !0), r && (e = r), (e.value = t), (e.state = JQ), p3(e, !0));
    },
    om = function (e, t, r) {
      if (!e.done) {
        (e.done = !0), r && (e = r);
        try {
          if (e.facade === t) throw new l3("Promise can't be resolved itself");
          var n = h3(t);
          n
            ? R0(function () {
                var a = { done: !1 };
                try {
                  Ho(n, t, po(om, a, e), po(Co, a, e));
                } catch (o) {
                  Co(a, o, e);
                }
              })
            : ((e.value = t), (e.state = f3), p3(e, !1));
        } catch (a) {
          Co({ done: !1 }, a, e);
        }
      }
    };
  if (
    c3 &&
    ((ea = function (t) {
      UQ(this, Cc), jQ(t), Ho(Oc, this);
      var r = kh(this);
      try {
        t(po(om, r), po(Co, r));
      } catch (n) {
        Co(r, n);
      }
    }),
    (Cc = ea.prototype),
    (Oc = function (t) {
      KQ(this, { type: jf, done: !1, notified: !1, parent: !1, reactions: new VQ(), rejection: !1, state: hw, value: void 0 });
    }),
    (Oc.prototype = fw(Cc, "then", function (t, r) {
      var n = kh(this),
        a = am(WQ(this, ea));
      return (
        (n.parent = !0),
        (a.ok = hl(t) ? t : !0),
        (a.fail = hl(r) && r),
        (a.domain = mu ? D0.domain : void 0),
        n.state === hw
          ? n.reactions.add(a)
          : R0(function () {
              v3(a, n);
            }),
        a.promise
      );
    })),
    (vw = function () {
      var e = new Oc(),
        t = kh(e);
      (this.promise = e), (this.resolve = po(om, t)), (this.reject = po(Co, t));
    }),
    (s3.f = am =
      function (e) {
        return e === ea || e === QQ ? new vw(e) : qQ(e);
      }),
    hl(gu) && lo !== Object.prototype)
  ) {
    (pw = lo.then),
      YQ ||
        fw(
          lo,
          "then",
          function (t, r) {
            var n = this;
            return new ea(function (a, o) {
              Ho(pw, n, a, o);
            }).then(t, r);
          },
          { unsafe: !0 }
        );
    try {
      delete lo.constructor;
    } catch {}
    dw && dw(lo, Cc);
  }
  kQ({ global: !0, constructor: !0, wrap: !0, forced: c3 }, { Promise: ea });
  LQ(ea, jf, !1);
  FQ(jf);
  var Bs = {},
    ree = je,
    nee = Bs,
    aee = ree("iterator"),
    oee = Array.prototype,
    g3 = function (e) {
      return e !== void 0 && (nee.Array === e || oee[aee] === e);
    },
    iee = _f,
    gw = xf,
    see = jn,
    cee = Bs,
    lee = je,
    uee = lee("iterator"),
    k0 = function (e) {
      if (!see(e)) return gw(e, uee) || gw(e, "@@iterator") || cee[iee(e)];
    },
    fee = ut,
    dee = Fr,
    hee = Tt,
    vee = Ns,
    pee = k0,
    mee = TypeError,
    y3 = function (e, t) {
      var r = arguments.length < 2 ? pee(e) : t;
      if (dee(r)) return hee(fee(r, e));
      throw new mee(vee(e) + " is not iterable");
    },
    gee = ut,
    yw = Tt,
    yee = xf,
    b3 = function (e, t, r) {
      var n, a;
      yw(e);
      try {
        if (((n = yee(e, "return")), !n)) {
          if (t === "throw") throw r;
          return r;
        }
        n = gee(n, e);
      } catch (o) {
        (a = !0), (n = o);
      }
      if (t === "throw") throw r;
      if (a) throw n;
      return yw(n), r;
    },
    bee = ti,
    $ee = ut,
    wee = Tt,
    See = Ns,
    Eee = g3,
    xee = dn,
    bw = g0,
    Tee = y3,
    Cee = k0,
    $w = b3,
    Oee = TypeError,
    vl = function (e, t) {
      (this.stopped = e), (this.result = t);
    },
    ww = vl.prototype,
    ri = function (e, t, r) {
      var n = r && r.that,
        a = !!(r && r.AS_ENTRIES),
        o = !!(r && r.IS_RECORD),
        i = !!(r && r.IS_ITERATOR),
        s = !!(r && r.INTERRUPTED),
        c = bee(t, n),
        l,
        u,
        f,
        d,
        v,
        p,
        m,
        g = function (b) {
          return l && $w(l, "normal", b), new vl(!0, b);
        },
        y = function (b) {
          return a ? (wee(b), s ? c(b[0], b[1], g) : c(b[0], b[1])) : s ? c(b, g) : c(b);
        };
      if (o) l = e.iterator;
      else if (i) l = e;
      else {
        if (((u = Cee(e)), !u)) throw new Oee(See(e) + " is not iterable");
        if (Eee(u)) {
          for (f = 0, d = xee(e); d > f; f++) if (((v = y(e[f])), v && bw(ww, v))) return v;
          return new vl(!1);
        }
        l = Tee(e, u);
      }
      for (p = o ? e.next : l.next; !(m = $ee(p, l)).done; ) {
        try {
          v = y(m.value);
        } catch (b) {
          $w(l, "throw", b);
        }
        if (typeof v == "object" && v && bw(ww, v)) return v;
      }
      return new vl(!1);
    },
    _ee = je,
    $3 = _ee("iterator"),
    w3 = !1;
  try {
    var Pee = 0,
      Sw = {
        next: function () {
          return { done: !!Pee++ };
        },
        return: function () {
          w3 = !0;
        },
      };
    (Sw[$3] = function () {
      return this;
    }),
      Array.from(Sw, function () {
        throw 2;
      });
  } catch {}
  var L0 = function (e, t) {
      try {
        if (!t && !w3) return !1;
      } catch {
        return !1;
      }
      var r = !1;
      try {
        var n = {};
        (n[$3] = function () {
          return {
            next: function () {
              return { done: (r = !0) };
            },
          };
        }),
          e(n);
      } catch {}
      return r;
    },
    Iee = Ff,
    Aee = L0,
    Ree = js.CONSTRUCTOR,
    F0 =
      Ree ||
      !Aee(function (e) {
        Iee.all(e).then(void 0, function () {});
      }),
    Mee = _e,
    Dee = ut,
    Nee = Fr,
    kee = La,
    Lee = Lf,
    Fee = ri,
    jee = F0;
  Mee(
    { target: "Promise", stat: !0, forced: jee },
    {
      all: function (t) {
        var r = this,
          n = kee.f(r),
          a = n.resolve,
          o = n.reject,
          i = Lee(function () {
            var s = Nee(r.resolve),
              c = [],
              l = 0,
              u = 1;
            Fee(t, function (f) {
              var d = l++,
                v = !1;
              u++,
                Dee(s, r, f).then(function (p) {
                  v || ((v = !0), (c[d] = p), --u || a(c));
                }, o);
            }),
              --u || a(c);
          });
        return i.error && o(i.value), n.promise;
      },
    }
  );
  var Bee = _e,
    Uee = js.CONSTRUCTOR,
    im = Ff,
    Wee = Na,
    Hee = Ne,
    zee = ln,
    Ew = im && im.prototype;
  Bee(
    { target: "Promise", proto: !0, forced: Uee, real: !0 },
    {
      catch: function (e) {
        return this.then(void 0, e);
      },
    }
  );
  if (Hee(im)) {
    var xw = Wee("Promise").prototype.catch;
    Ew.catch !== xw && zee(Ew, "catch", xw, { unsafe: !0 });
  }
  var Vee = _e,
    Gee = ut,
    Yee = Fr,
    Kee = La,
    qee = Lf,
    Xee = ri,
    Zee = F0;
  Vee(
    { target: "Promise", stat: !0, forced: Zee },
    {
      race: function (t) {
        var r = this,
          n = Kee.f(r),
          a = n.reject,
          o = qee(function () {
            var i = Yee(r.resolve);
            Xee(t, function (s) {
              Gee(i, r, s).then(n.resolve, a);
            });
          });
        return o.error && a(o.value), n.promise;
      },
    }
  );
  var Jee = _e,
    Qee = ut,
    ete = La,
    tte = js.CONSTRUCTOR;
  Jee(
    { target: "Promise", stat: !0, forced: tte },
    {
      reject: function (t) {
        var r = ete.f(this);
        return Qee(r.reject, void 0, t), r.promise;
      },
    }
  );
  var rte = Tt,
    nte = lt,
    ate = La,
    ote = function (e, t) {
      if ((rte(e), nte(t) && t.constructor === e)) return t;
      var r = ate.f(e),
        n = r.resolve;
      return n(t), r.promise;
    },
    ite = _e,
    ste = Na,
    cte = js.CONSTRUCTOR,
    lte = ote;
  ste("Promise");
  ite(
    { target: "Promise", stat: !0, forced: cte },
    {
      resolve: function (t) {
        return lte(this, t);
      },
    }
  );
  var S3 = {},
    ute = W5,
    fte = x0,
    Bf =
      Object.keys ||
      function (t) {
        return ute(t, fte);
      },
    dte = At,
    hte = A5,
    vte = dr,
    pte = Tt,
    mte = fn,
    gte = Bf;
  S3.f =
    dte && !hte
      ? Object.defineProperties
      : function (t, r) {
          pte(t);
          for (var n = mte(r), a = gte(r), o = a.length, i = 0, s; o > i; ) vte.f(t, (s = a[i++]), n[s]);
          return t;
        };
  var yte = Tt,
    bte = S3,
    Tw = x0,
    $te = Of,
    wte = X5,
    Ste = Ef,
    Ete = w0,
    Cw = ">",
    Ow = "<",
    sm = "prototype",
    cm = "script",
    E3 = Ete("IE_PROTO"),
    Lh = function () {},
    x3 = function (e) {
      return Ow + cm + Cw + e + Ow + "/" + cm + Cw;
    },
    _w = function (e) {
      e.write(x3("")), e.close();
      var t = e.parentWindow.Object;
      return (e = null), t;
    },
    xte = function () {
      var e = Ste("iframe"),
        t = "java" + cm + ":",
        r;
      return (e.style.display = "none"), wte.appendChild(e), (e.src = String(t)), (r = e.contentWindow.document), r.open(), r.write(x3("document.F=Object")), r.close(), r.F;
    },
    _c,
    pl = function () {
      try {
        _c = new ActiveXObject("htmlfile");
      } catch {}
      pl = typeof document < "u" ? (document.domain && _c ? _w(_c) : xte()) : _w(_c);
      for (var e = Tw.length; e--; ) delete pl[sm][Tw[e]];
      return pl();
    };
  $te[E3] = !0;
  var Uf =
      Object.create ||
      function (t, r) {
        var n;
        return t !== null ? ((Lh[sm] = yte(t)), (n = new Lh()), (Lh[sm] = null), (n[E3] = t)) : (n = pl()), r === void 0 ? n : bte.f(n, r);
      },
    Tte = je,
    Cte = Uf,
    Ote = dr.f,
    lm = Tte("unscopables"),
    um = Array.prototype;
  um[lm] === void 0 && Ote(um, lm, { configurable: !0, value: Cte(null) });
  var j0 = function (e) {
      um[lm][e] = !0;
    },
    _te = be,
    Pte = !_te(function () {
      function e() {}
      return (e.prototype.constructor = null), Object.getPrototypeOf(new e()) !== e.prototype;
    }),
    Ite = Qt,
    Ate = Ne,
    Rte = Lr,
    Mte = w0,
    Dte = Pte,
    Pw = Mte("IE_PROTO"),
    fm = Object,
    Nte = fm.prototype,
    B0 = Dte
      ? fm.getPrototypeOf
      : function (e) {
          var t = Rte(e);
          if (Ite(t, Pw)) return t[Pw];
          var r = t.constructor;
          return Ate(r) && t instanceof r ? r.prototype : t instanceof fm ? Nte : null;
        },
    kte = be,
    Lte = Ne,
    Fte = lt,
    Iw = B0,
    jte = ln,
    Bte = je,
    dm = Bte("iterator"),
    T3 = !1,
    $a,
    Fh,
    jh;
  [].keys && ((jh = [].keys()), "next" in jh ? ((Fh = Iw(Iw(jh))), Fh !== Object.prototype && ($a = Fh)) : (T3 = !0));
  var Ute =
    !Fte($a) ||
    kte(function () {
      var e = {};
      return $a[dm].call(e) !== e;
    });
  Ute && ($a = {});
  Lte($a[dm]) ||
    jte($a, dm, function () {
      return this;
    });
  var C3 = { IteratorPrototype: $a, BUGGY_SAFARI_ITERATORS: T3 },
    Wte = C3.IteratorPrototype,
    Hte = Uf,
    zte = Cf,
    Vte = Fs,
    Gte = Bs,
    Yte = function () {
      return this;
    },
    Kte = function (e, t, r, n) {
      var a = t + " Iterator";
      return (e.prototype = Hte(Wte, { next: zte(+!n, r) })), Vte(e, a, !1), (Gte[a] = Yte), e;
    },
    qte = _e,
    Xte = ut,
    O3 = Tf,
    Zte = Ne,
    Jte = Kte,
    Aw = B0,
    Rw = O0,
    Qte = Fs,
    ere = ei,
    Bh = ln,
    tre = je,
    rre = Bs,
    _3 = C3,
    nre = O3.PROPER,
    are = O3.CONFIGURABLE,
    Mw = _3.IteratorPrototype,
    Pc = _3.BUGGY_SAFARI_ITERATORS,
    $i = tre("iterator"),
    Dw = "keys",
    wi = "values",
    Nw = "entries",
    ore = function () {
      return this;
    },
    U0 = function (e, t, r, n, a, o, i) {
      Jte(r, t, n);
      var s = function (y) {
          if (y === a && d) return d;
          if (!Pc && y && y in u) return u[y];
          switch (y) {
            case Dw:
              return function () {
                return new r(this, y);
              };
            case wi:
              return function () {
                return new r(this, y);
              };
            case Nw:
              return function () {
                return new r(this, y);
              };
          }
          return function () {
            return new r(this);
          };
        },
        c = t + " Iterator",
        l = !1,
        u = e.prototype,
        f = u[$i] || u["@@iterator"] || (a && u[a]),
        d = (!Pc && f) || s(a),
        v = (t === "Array" && u.entries) || f,
        p,
        m,
        g;
      if (
        (v && ((p = Aw(v.call(new e()))), p !== Object.prototype && p.next && (Aw(p) !== Mw && (Rw ? Rw(p, Mw) : Zte(p[$i]) || Bh(p, $i, ore)), Qte(p, c, !0))),
        nre &&
          a === wi &&
          f &&
          f.name !== wi &&
          (are
            ? ere(u, "name", wi)
            : ((l = !0),
              (d = function () {
                return Xte(f, this);
              }))),
        a)
      )
        if (((m = { values: s(wi), keys: o ? d : s(Dw), entries: s(Nw) }), i)) for (g in m) (Pc || l || !(g in u)) && Bh(u, g, m[g]);
        else qte({ target: t, proto: !0, forced: Pc || l }, m);
      return u[$i] !== d && Bh(u, $i, d, { name: a }), (rre[t] = d), m;
    },
    W0 = function (e, t) {
      return { value: e, done: t };
    },
    ire = fn,
    H0 = j0,
    kw = Bs,
    P3 = ka,
    sre = dr.f,
    cre = U0,
    Ic = W0,
    lre = At,
    I3 = "Array Iterator",
    ure = P3.set,
    fre = P3.getterFor(I3),
    dre = cre(
      Array,
      "Array",
      function (e, t) {
        ure(this, { type: I3, target: ire(e), index: 0, kind: t });
      },
      function () {
        var e = fre(this),
          t = e.target,
          r = e.index++;
        if (!t || r >= t.length) return (e.target = void 0), Ic(void 0, !0);
        switch (e.kind) {
          case "keys":
            return Ic(r, !1);
          case "values":
            return Ic(t[r], !1);
        }
        return Ic([r, t[r]], !1);
      },
      "values"
    ),
    Lw = (kw.Arguments = kw.Array);
  H0("keys");
  H0("values");
  H0("entries");
  if (lre && Lw.name !== "values")
    try {
      sre(Lw, "name", { value: "values" });
    } catch {}
  var hre = _e,
    vre = ut,
    pre = Fr,
    mre = La,
    gre = Lf,
    yre = ri,
    bre = F0;
  hre(
    { target: "Promise", stat: !0, forced: bre },
    {
      allSettled: function (t) {
        var r = this,
          n = mre.f(r),
          a = n.resolve,
          o = n.reject,
          i = gre(function () {
            var s = pre(r.resolve),
              c = [],
              l = 0,
              u = 1;
            yre(t, function (f) {
              var d = l++,
                v = !1;
              u++,
                vre(s, r, f).then(
                  function (p) {
                    v || ((v = !0), (c[d] = { status: "fulfilled", value: p }), --u || a(c));
                  },
                  function (p) {
                    v || ((v = !0), (c[d] = { status: "rejected", reason: p }), --u || a(c));
                  }
                );
            }),
              --u || a(c);
          });
        return i.error && o(i.value), n.promise;
      },
    }
  );
  var $re = _f,
    wre = String,
    Bn = function (e) {
      if ($re(e) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
      return wre(e);
    },
    z0 = xe,
    Sre = Rf,
    Ere = Bn,
    xre = Ma,
    Tre = z0("".charAt),
    Fw = z0("".charCodeAt),
    Cre = z0("".slice),
    jw = function (e) {
      return function (t, r) {
        var n = Ere(xre(t)),
          a = Sre(r),
          o = n.length,
          i,
          s;
        return a < 0 || a >= o
          ? e
            ? ""
            : void 0
          : ((i = Fw(n, a)), i < 55296 || i > 56319 || a + 1 === o || (s = Fw(n, a + 1)) < 56320 || s > 57343 ? (e ? Tre(n, a) : i) : e ? Cre(n, a, a + 2) : ((i - 55296) << 10) + (s - 56320) + 65536);
      };
    },
    A3 = { codeAt: jw(!1), charAt: jw(!0) },
    Ore = A3.charAt,
    _re = Bn,
    R3 = ka,
    Pre = U0,
    Bw = W0,
    M3 = "String Iterator",
    Ire = R3.set,
    Are = R3.getterFor(M3);
  Pre(
    String,
    "String",
    function (e) {
      Ire(this, { type: M3, string: _re(e), index: 0 });
    },
    function () {
      var t = Are(this),
        r = t.string,
        n = t.index,
        a;
      return n >= r.length ? Bw(void 0, !0) : ((a = Ore(r, n)), (t.index += a.length), Bw(a, !1));
    }
  );
  var D3 = {
      CSSRuleList: 0,
      CSSStyleDeclaration: 0,
      CSSValueList: 0,
      ClientRectList: 0,
      DOMRectList: 0,
      DOMStringList: 0,
      DOMTokenList: 1,
      DataTransferItemList: 0,
      FileList: 0,
      HTMLAllCollection: 0,
      HTMLCollection: 0,
      HTMLFormElement: 0,
      HTMLSelectElement: 0,
      MediaList: 0,
      MimeTypeArray: 0,
      NamedNodeMap: 0,
      NodeList: 1,
      PaintRequestList: 0,
      Plugin: 0,
      PluginArray: 0,
      SVGLengthList: 0,
      SVGNumberList: 0,
      SVGPathSegList: 0,
      SVGPointList: 0,
      SVGStringList: 0,
      SVGTransformList: 0,
      SourceBufferList: 0,
      StyleSheetList: 0,
      TextTrackCueList: 0,
      TextTrackList: 0,
      TouchList: 0,
    },
    Rre = Ef,
    Uh = Rre("span").classList,
    Uw = Uh && Uh.constructor && Uh.constructor.prototype,
    N3 = Uw === Object.prototype ? void 0 : Uw,
    Ww = Fe,
    k3 = D3,
    Mre = N3,
    Ai = dre,
    Hw = ei,
    Dre = Fs,
    Nre = je,
    Wh = Nre("iterator"),
    Hh = Ai.values,
    L3 = function (e, t) {
      if (e) {
        if (e[Wh] !== Hh)
          try {
            Hw(e, Wh, Hh);
          } catch {
            e[Wh] = Hh;
          }
        if ((Dre(e, t, !0), k3[t])) {
          for (var r in Ai)
            if (e[r] !== Ai[r])
              try {
                Hw(e, r, Ai[r]);
              } catch {
                e[r] = Ai[r];
              }
        }
      }
    };
  for (var zh in k3) L3(Ww[zh] && Ww[zh].prototype, zh);
  L3(Mre, "DOMTokenList");
  var kre = Lr,
    zw = Mf,
    Lre = dn,
    Fre = function (t) {
      for (var r = kre(this), n = Lre(r), a = arguments.length, o = zw(a > 1 ? arguments[1] : void 0, n), i = a > 2 ? arguments[2] : void 0, s = i === void 0 ? n : zw(i, n); s > o; ) r[o++] = t;
      return r;
    },
    jre = _e,
    Bre = Fre,
    Ure = j0;
  jre({ target: "Array", proto: !0 }, { fill: Bre });
  Ure("fill");
  var Wre = un,
    V0 =
      Array.isArray ||
      function (t) {
        return Wre(t) === "Array";
      },
    Hre = y0,
    zre = dr,
    Vre = Cf,
    Wf = function (e, t, r) {
      var n = Hre(t);
      n in e ? zre.f(e, n, Vre(0, r)) : (e[n] = r);
    },
    Gre = be,
    Yre = je,
    Kre = Ds,
    qre = Yre("species"),
    Hf = function (e) {
      return (
        Kre >= 51 ||
        !Gre(function () {
          var t = [],
            r = (t.constructor = {});
          return (
            (r[qre] = function () {
              return { foo: 1 };
            }),
            t[e](Boolean).foo !== 1
          );
        })
      );
    },
    Xre = _e,
    Vw = V0,
    Zre = kf,
    Jre = lt,
    Gw = Mf,
    Qre = dn,
    ene = fn,
    tne = Wf,
    rne = je,
    nne = Hf,
    ane = Z5,
    one = nne("slice"),
    ine = rne("species"),
    Vh = Array,
    sne = Math.max;
  Xre(
    { target: "Array", proto: !0, forced: !one },
    {
      slice: function (t, r) {
        var n = ene(this),
          a = Qre(n),
          o = Gw(t, a),
          i = Gw(r === void 0 ? a : r, a),
          s,
          c,
          l;
        if (Vw(n) && ((s = n.constructor), Zre(s) && (s === Vh || Vw(s.prototype)) ? (s = void 0) : Jre(s) && ((s = s[ine]), s === null && (s = void 0)), s === Vh || s === void 0))
          return ane(n, o, i);
        for (c = new (s === void 0 ? Vh : s)(sne(i - o, 0)), l = 0; o < i; o++, l++) o in n && tne(c, l, n[o]);
        return (c.length = l), c;
      },
    }
  );
  function G0(e, t, r, n) {
    function a(o) {
      return o instanceof r
        ? o
        : new r(function (i) {
            i(o);
          });
    }
    return new (r || (r = Promise))(function (o, i) {
      function s(u) {
        try {
          l(n.next(u));
        } catch (f) {
          i(f);
        }
      }
      function c(u) {
        try {
          l(n.throw(u));
        } catch (f) {
          i(f);
        }
      }
      function l(u) {
        u.done ? o(u.value) : a(u.value).then(s, c);
      }
      l((n = n.apply(e, t || [])).next());
    });
  }
  function de(e, t, r, n) {
    if (r === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
    if (typeof t == "function" ? e !== t || !n : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return r === "m" ? n : r === "a" ? n.call(e) : n ? n.value : t.get(e);
  }
  var F3 = { exports: {} };
  (function (e) {
    var t = Object.prototype.hasOwnProperty,
      r = "~";
    function n() {}
    Object.create && ((n.prototype = Object.create(null)), new n().__proto__ || (r = !1));
    function a(c, l, u) {
      (this.fn = c), (this.context = l), (this.once = u || !1);
    }
    function o(c, l, u, f, d) {
      if (typeof u != "function") throw new TypeError("The listener must be a function");
      var v = new a(u, f || c, d),
        p = r ? r + l : l;
      return c._events[p] ? (c._events[p].fn ? (c._events[p] = [c._events[p], v]) : c._events[p].push(v)) : ((c._events[p] = v), c._eventsCount++), c;
    }
    function i(c, l) {
      --c._eventsCount === 0 ? (c._events = new n()) : delete c._events[l];
    }
    function s() {
      (this._events = new n()), (this._eventsCount = 0);
    }
    (s.prototype.eventNames = function () {
      var l = [],
        u,
        f;
      if (this._eventsCount === 0) return l;
      for (f in (u = this._events)) t.call(u, f) && l.push(r ? f.slice(1) : f);
      return Object.getOwnPropertySymbols ? l.concat(Object.getOwnPropertySymbols(u)) : l;
    }),
      (s.prototype.listeners = function (l) {
        var u = r ? r + l : l,
          f = this._events[u];
        if (!f) return [];
        if (f.fn) return [f.fn];
        for (var d = 0, v = f.length, p = new Array(v); d < v; d++) p[d] = f[d].fn;
        return p;
      }),
      (s.prototype.listenerCount = function (l) {
        var u = r ? r + l : l,
          f = this._events[u];
        return f ? (f.fn ? 1 : f.length) : 0;
      }),
      (s.prototype.emit = function (l, u, f, d, v, p) {
        var m = r ? r + l : l;
        if (!this._events[m]) return !1;
        var g = this._events[m],
          y = arguments.length,
          b,
          $;
        if (g.fn) {
          switch ((g.once && this.removeListener(l, g.fn, void 0, !0), y)) {
            case 1:
              return g.fn.call(g.context), !0;
            case 2:
              return g.fn.call(g.context, u), !0;
            case 3:
              return g.fn.call(g.context, u, f), !0;
            case 4:
              return g.fn.call(g.context, u, f, d), !0;
            case 5:
              return g.fn.call(g.context, u, f, d, v), !0;
            case 6:
              return g.fn.call(g.context, u, f, d, v, p), !0;
          }
          for ($ = 1, b = new Array(y - 1); $ < y; $++) b[$ - 1] = arguments[$];
          g.fn.apply(g.context, b);
        } else {
          var S = g.length,
            A;
          for ($ = 0; $ < S; $++)
            switch ((g[$].once && this.removeListener(l, g[$].fn, void 0, !0), y)) {
              case 1:
                g[$].fn.call(g[$].context);
                break;
              case 2:
                g[$].fn.call(g[$].context, u);
                break;
              case 3:
                g[$].fn.call(g[$].context, u, f);
                break;
              case 4:
                g[$].fn.call(g[$].context, u, f, d);
                break;
              default:
                if (!b) for (A = 1, b = new Array(y - 1); A < y; A++) b[A - 1] = arguments[A];
                g[$].fn.apply(g[$].context, b);
            }
        }
        return !0;
      }),
      (s.prototype.on = function (l, u, f) {
        return o(this, l, u, f, !1);
      }),
      (s.prototype.once = function (l, u, f) {
        return o(this, l, u, f, !0);
      }),
      (s.prototype.removeListener = function (l, u, f, d) {
        var v = r ? r + l : l;
        if (!this._events[v]) return this;
        if (!u) return i(this, v), this;
        var p = this._events[v];
        if (p.fn) p.fn === u && (!d || p.once) && (!f || p.context === f) && i(this, v);
        else {
          for (var m = 0, g = [], y = p.length; m < y; m++) (p[m].fn !== u || (d && !p[m].once) || (f && p[m].context !== f)) && g.push(p[m]);
          g.length ? (this._events[v] = g.length === 1 ? g[0] : g) : i(this, v);
        }
        return this;
      }),
      (s.prototype.removeAllListeners = function (l) {
        var u;
        return l ? ((u = r ? r + l : l), this._events[u] && i(this, u)) : ((this._events = new n()), (this._eventsCount = 0)), this;
      }),
      (s.prototype.off = s.prototype.removeListener),
      (s.prototype.addListener = s.prototype.on),
      (s.prefixed = r),
      (s.EventEmitter = s),
      (e.exports = s);
  })(F3);
  var cne = F3.exports,
    lne = xt(cne),
    une = Array.isArray,
    Zt = une;
  function zf() {
    if (!arguments.length) return [];
    var e = arguments[0];
    return Zt(e) ? e : [e];
  }
  var Yw = V0,
    fne = kf,
    dne = lt,
    hne = je,
    vne = hne("species"),
    Kw = Array,
    pne = function (e) {
      var t;
      return Yw(e) && ((t = e.constructor), fne(t) && (t === Kw || Yw(t.prototype)) ? (t = void 0) : dne(t) && ((t = t[vne]), t === null && (t = void 0))), t === void 0 ? Kw : t;
    },
    mne = pne,
    j3 = function (e, t) {
      return new (mne(e))(t === 0 ? 0 : t);
    },
    gne = ti,
    yne = xe,
    bne = If,
    $ne = Lr,
    wne = dn,
    Sne = j3,
    qw = yne([].push),
    yn = function (e) {
      var t = e === 1,
        r = e === 2,
        n = e === 3,
        a = e === 4,
        o = e === 6,
        i = e === 7,
        s = e === 5 || o;
      return function (c, l, u, f) {
        for (var d = $ne(c), v = bne(d), p = wne(v), m = gne(l, u), g = 0, y = f || Sne, b = t ? y(c, p) : r || i ? y(c, 0) : void 0, $, S; p > g; g++)
          if ((s || g in v) && (($ = v[g]), (S = m($, g, d)), e))
            if (t) b[g] = S;
            else if (S)
              switch (e) {
                case 3:
                  return !0;
                case 5:
                  return $;
                case 6:
                  return g;
                case 2:
                  qw(b, $);
              }
            else
              switch (e) {
                case 4:
                  return !1;
                case 7:
                  qw(b, $);
              }
        return o ? -1 : n || a ? a : b;
      };
    },
    Vf = { forEach: yn(0), map: yn(1), filter: yn(2), some: yn(3), every: yn(4), find: yn(5), findIndex: yn(6), filterReject: yn(7) },
    Ene = _e,
    xne = Vf.map,
    Tne = Hf,
    Cne = Tne("map");
  Ene(
    { target: "Array", proto: !0, forced: !Cne },
    {
      map: function (t) {
        return xne(this, t, arguments.length > 1 ? arguments[1] : void 0);
      },
    }
  );
  var Xw = At,
    One = xe,
    _ne = ut,
    Pne = be,
    Gh = Bf,
    Ine = T0,
    Ane = Pf,
    Rne = Lr,
    Mne = If,
    ro = Object.assign,
    Zw = Object.defineProperty,
    Dne = One([].concat),
    Nne =
      !ro ||
      Pne(function () {
        if (
          Xw &&
          ro(
            { b: 1 },
            ro(
              Zw({}, "a", {
                enumerable: !0,
                get: function () {
                  Zw(this, "b", { value: 3, enumerable: !1 });
                },
              }),
              { b: 2 }
            )
          ).b !== 1
        )
          return !0;
        var e = {},
          t = {},
          r = Symbol("assign detection"),
          n = "abcdefghijklmnopqrst";
        return (
          (e[r] = 7),
          n.split("").forEach(function (a) {
            t[a] = a;
          }),
          ro({}, e)[r] !== 7 || Gh(ro({}, t)).join("") !== n
        );
      })
        ? function (t, r) {
            for (var n = Rne(t), a = arguments.length, o = 1, i = Ine.f, s = Ane.f; a > o; )
              for (var c = Mne(arguments[o++]), l = i ? Dne(Gh(c), i(c)) : Gh(c), u = l.length, f = 0, d; u > f; ) (d = l[f++]), (!Xw || _ne(s, c, d)) && (n[d] = c[d]);
            return n;
          }
        : ro,
    kne = _e,
    Jw = Nne;
  kne({ target: "Object", stat: !0, arity: 2, forced: Object.assign !== Jw }, { assign: Jw });
  var B3 = { exports: {} },
    U3 = {},
    Qw = Mf,
    Lne = dn,
    Fne = Wf,
    jne = Array,
    Bne = Math.max,
    W3 = function (e, t, r) {
      for (var n = Lne(e), a = Qw(t, n), o = Qw(r === void 0 ? n : r, n), i = jne(Bne(o - a, 0)), s = 0; a < o; a++, s++) Fne(i, s, e[a]);
      return (i.length = s), i;
    },
    Une = un,
    Wne = fn,
    H3 = Af.f,
    Hne = W3,
    z3 = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
    zne = function (e) {
      try {
        return H3(e);
      } catch {
        return Hne(z3);
      }
    };
  U3.f = function (t) {
    return z3 && Une(t) === "Window" ? zne(t) : H3(Wne(t));
  };
  var Vne = be,
    Gne = Vne(function () {
      if (typeof ArrayBuffer == "function") {
        var e = new ArrayBuffer(8);
        Object.isExtensible(e) && Object.defineProperty(e, "a", { value: 8 });
      }
    }),
    Yne = be,
    Kne = lt,
    qne = un,
    eS = Gne,
    ml = Object.isExtensible,
    Xne = Yne(function () {
      ml(1);
    }),
    Zne =
      Xne || eS
        ? function (t) {
            return !Kne(t) || (eS && qne(t) === "ArrayBuffer") ? !1 : ml ? ml(t) : !0;
          }
        : ml,
    Jne = be,
    Qne = !Jne(function () {
      return Object.isExtensible(Object.preventExtensions({}));
    }),
    eae = _e,
    tae = xe,
    rae = Of,
    nae = lt,
    Y0 = Qt,
    aae = dr.f,
    tS = Af,
    oae = U3,
    K0 = Zne,
    iae = p0,
    sae = Qne,
    V3 = !1,
    tn = iae("meta"),
    cae = 0,
    q0 = function (e) {
      aae(e, tn, { value: { objectID: "O" + cae++, weakData: {} } });
    },
    lae = function (e, t) {
      if (!nae(e)) return typeof e == "symbol" ? e : (typeof e == "string" ? "S" : "P") + e;
      if (!Y0(e, tn)) {
        if (!K0(e)) return "F";
        if (!t) return "E";
        q0(e);
      }
      return e[tn].objectID;
    },
    uae = function (e, t) {
      if (!Y0(e, tn)) {
        if (!K0(e)) return !0;
        if (!t) return !1;
        q0(e);
      }
      return e[tn].weakData;
    },
    fae = function (e) {
      return sae && V3 && K0(e) && !Y0(e, tn) && q0(e), e;
    },
    dae = function () {
      (hae.enable = function () {}), (V3 = !0);
      var e = tS.f,
        t = tae([].splice),
        r = {};
      (r[tn] = 1),
        e(r).length &&
          ((tS.f = function (n) {
            for (var a = e(n), o = 0, i = a.length; o < i; o++)
              if (a[o] === tn) {
                t(a, o, 1);
                break;
              }
            return a;
          }),
          eae({ target: "Object", stat: !0, forced: !0 }, { getOwnPropertyNames: oae.f }));
    },
    hae = (B3.exports = { enable: dae, fastKey: lae, getWeakData: uae, onFreeze: fae });
  rae[tn] = !0;
  var X0 = B3.exports,
    vae = Ne,
    pae = lt,
    rS = O0,
    mae = function (e, t, r) {
      var n, a;
      return rS && vae((n = t.constructor)) && n !== r && pae((a = n.prototype)) && a !== r.prototype && rS(e, a), e;
    },
    gae = _e,
    yae = Fe,
    bae = xe,
    nS = C0,
    $ae = ln,
    wae = X0,
    Sae = ri,
    Eae = Nf,
    xae = Ne,
    Tae = jn,
    Yh = lt,
    Kh = be,
    Cae = L0,
    Oae = Fs,
    _ae = mae,
    Z0 = function (e, t, r) {
      var n = e.indexOf("Map") !== -1,
        a = e.indexOf("Weak") !== -1,
        o = n ? "set" : "add",
        i = yae[e],
        s = i && i.prototype,
        c = i,
        l = {},
        u = function (y) {
          var b = bae(s[y]);
          $ae(
            s,
            y,
            y === "add"
              ? function (S) {
                  return b(this, S === 0 ? 0 : S), this;
                }
              : y === "delete"
              ? function ($) {
                  return a && !Yh($) ? !1 : b(this, $ === 0 ? 0 : $);
                }
              : y === "get"
              ? function (S) {
                  return a && !Yh(S) ? void 0 : b(this, S === 0 ? 0 : S);
                }
              : y === "has"
              ? function (S) {
                  return a && !Yh(S) ? !1 : b(this, S === 0 ? 0 : S);
                }
              : function (S, A) {
                  return b(this, S === 0 ? 0 : S, A), this;
                }
          );
        },
        f = nS(
          e,
          !xae(i) ||
            !(
              a ||
              (s.forEach &&
                !Kh(function () {
                  new i().entries().next();
                }))
            )
        );
      if (f) (c = r.getConstructor(t, e, n, o)), wae.enable();
      else if (nS(e, !0)) {
        var d = new c(),
          v = d[o](a ? {} : -0, 1) !== d,
          p = Kh(function () {
            d.has(1);
          }),
          m = Cae(function (y) {
            new i(y);
          }),
          g =
            !a &&
            Kh(function () {
              for (var y = new i(), b = 5; b--; ) y[o](b, b);
              return !y.has(-0);
            });
        m ||
          ((c = t(function (y, b) {
            Eae(y, s);
            var $ = _ae(new i(), y, c);
            return Tae(b) || Sae(b, $[o], { that: $, AS_ENTRIES: n }), $;
          })),
          (c.prototype = s),
          (s.constructor = c)),
          (p || g) && (u("delete"), u("has"), n && u("get")),
          (g || v) && u(o),
          a && s.clear && delete s.clear;
      }
      return (l[e] = c), gae({ global: !0, constructor: !0, forced: c !== i }, l), Oae(c, e), a || r.setStrong(c, e, n), c;
    },
    Pae = ln,
    G3 = function (e, t, r) {
      for (var n in t) Pae(e, n, t[n], r);
      return e;
    },
    Iae = xe,
    aS = G3,
    Ac = X0.getWeakData,
    Aae = Nf,
    Rae = Tt,
    Mae = jn,
    qh = lt,
    Dae = ri,
    Y3 = Vf,
    oS = Qt,
    K3 = ka,
    Nae = K3.set,
    kae = K3.getterFor,
    Lae = Y3.find,
    Fae = Y3.findIndex,
    jae = Iae([].splice),
    Bae = 0,
    Rc = function (e) {
      return e.frozen || (e.frozen = new q3());
    },
    q3 = function () {
      this.entries = [];
    },
    Xh = function (e, t) {
      return Lae(e.entries, function (r) {
        return r[0] === t;
      });
    };
  q3.prototype = {
    get: function (e) {
      var t = Xh(this, e);
      if (t) return t[1];
    },
    has: function (e) {
      return !!Xh(this, e);
    },
    set: function (e, t) {
      var r = Xh(this, e);
      r ? (r[1] = t) : this.entries.push([e, t]);
    },
    delete: function (e) {
      var t = Fae(this.entries, function (r) {
        return r[0] === e;
      });
      return ~t && jae(this.entries, t, 1), !!~t;
    },
  };
  var Uae = {
      getConstructor: function (e, t, r, n) {
        var a = e(function (c, l) {
            Aae(c, o), Nae(c, { type: t, id: Bae++, frozen: void 0 }), Mae(l) || Dae(l, c[n], { that: c, AS_ENTRIES: r });
          }),
          o = a.prototype,
          i = kae(t),
          s = function (c, l, u) {
            var f = i(c),
              d = Ac(Rae(l), !0);
            return d === !0 ? Rc(f).set(l, u) : (d[f.id] = u), c;
          };
        return (
          aS(o, {
            delete: function (c) {
              var l = i(this);
              if (!qh(c)) return !1;
              var u = Ac(c);
              return u === !0 ? Rc(l).delete(c) : u && oS(u, l.id) && delete u[l.id];
            },
            has: function (l) {
              var u = i(this);
              if (!qh(l)) return !1;
              var f = Ac(l);
              return f === !0 ? Rc(u).has(l) : f && oS(f, u.id);
            },
          }),
          aS(
            o,
            r
              ? {
                  get: function (l) {
                    var u = i(this);
                    if (qh(l)) {
                      var f = Ac(l);
                      return f === !0 ? Rc(u).get(l) : f ? f[u.id] : void 0;
                    }
                  },
                  set: function (l, u) {
                    return s(this, l, u);
                  },
                }
              : {
                  add: function (l) {
                    return s(this, l, !0);
                  },
                }
          ),
          a
        );
      },
    },
    Wae = Z0,
    Hae = Uae;
  Wae(
    "WeakSet",
    function (e) {
      return function () {
        return e(this, arguments.length ? arguments[0] : void 0);
      };
    },
    Hae
  );
  var ze;
  (function (e) {
    (e[(e.SCROLL_NONE = 0)] = "SCROLL_NONE"), (e[(e.SCROLL_BACKWARD = 1)] = "SCROLL_BACKWARD"), (e[(e.SCROLL_FORWARD = 2)] = "SCROLL_FORWARD");
  })(ze || (ze = {}));
  var Ar;
  (function (e) {
    (e[(e.TOP = 0)] = "TOP"), (e[(e.RIGHT = 1)] = "RIGHT"), (e[(e.BOTTOM = 2)] = "BOTTOM"), (e[(e.LEFT = 3)] = "LEFT");
  })(Ar || (Ar = {}));
  var zae = "hour",
    Vae = "minute",
    Gae = 10,
    Yae = 10,
    Kae = 2,
    qae = 0,
    Xae = 200,
    Zae = 12,
    Jae = "#cal-heatmap",
    Qae = "light",
    eoe = "en",
    toe = "red",
    roe = "YlOrBr",
    noe = "quantize",
    aoe = [0, 100],
    gl,
    X3,
    Z3,
    ooe = (function () {
      function e(t) {
        bt(this, e), gl.add(this), (this.calendar = t), (this.maxDomainReached = !1), (this.minDomainReached = !1);
      }
      return (
        $t(e, [
          {
            key: "loadNewDomains",
            value: function (r) {
              var n = this,
                a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ze.SCROLL_NONE,
                o = this.calendar.options.options,
                i = this.calendar.templateCollection,
                s = o.date.min ? i.get(o.domain.type).extractUnit(+o.date.min) : void 0,
                c = o.date.max ? i.get(o.domain.type).extractUnit(+o.date.max) : void 0,
                l = this.calendar.domainCollection;
              return de(this, gl, "m", X3).call(this, r, s, c, a)
                ? ze.SCROLL_NONE
                : (a !== ze.SCROLL_NONE && r.clamp(s, c).slice(o.range, a === ze.SCROLL_FORWARD),
                  l.merge(r, o.range, function (u, f) {
                    var d = null;
                    return (
                      r.at(f + 1) ? (d = r.at(f + 1)) : (d = n.calendar.dateHelper.intervals(o.domain.type, u, 2).pop()),
                      i
                        .get(o.subDomain.type)
                        .mapping(u, d)
                        .map(function (v) {
                          return Object.assign(Object.assign({}, v), { v: o.data.defaultValue });
                        })
                    );
                  }),
                  de(this, gl, "m", Z3).call(this, l.min, l.max, s, c),
                  a === ze.SCROLL_BACKWARD ? this.calendar.eventEmitter.emit("domainsLoaded", [l.min]) : a === ze.SCROLL_FORWARD && this.calendar.eventEmitter.emit("domainsLoaded", [l.max]),
                  a);
            },
          },
          {
            key: "jumpTo",
            value: function (r, n) {
              var a = this.calendar,
                o = a.domainCollection,
                i = a.options,
                s = new Date(o.min),
                c = new Date(o.max);
              return r < s
                ? this.loadNewDomains(this.calendar.createDomainCollection(r, s, !1), ze.SCROLL_BACKWARD)
                : n
                ? this.loadNewDomains(this.calendar.createDomainCollection(r, i.options.range), s < r ? ze.SCROLL_FORWARD : ze.SCROLL_BACKWARD)
                : r > c
                ? this.loadNewDomains(this.calendar.createDomainCollection(c, r, !1), ze.SCROLL_FORWARD)
                : ze.SCROLL_NONE;
            },
          },
        ]),
        e
      );
    })();
  (gl = new WeakSet()),
    (X3 = function (t, r, n, a) {
      return !!((n && t.max >= n && this.maxDomainReached && a === ze.SCROLL_FORWARD) || (r && t.min <= r && this.minDomainReached && a === ze.SCROLL_BACKWARD));
    }),
    (Z3 = function (t, r, n, a) {
      if (n) {
        var o = t <= n;
        this.calendar.eventEmitter.emit(o ? "minDateReached" : "minDateNotReached"), (this.minDomainReached = o);
      }
      if (a) {
        var i = r >= a;
        this.calendar.eventEmitter.emit(i ? "maxDateReached" : "maxDateNotReached"), (this.maxDomainReached = i);
      }
    });
  var ioe = TypeError,
    soe = 9007199254740991,
    coe = function (e) {
      if (e > soe) throw ioe("Maximum allowed index exceeded");
      return e;
    },
    loe = _e,
    uoe = be,
    foe = V0,
    doe = lt,
    hoe = Lr,
    voe = dn,
    iS = coe,
    sS = Wf,
    poe = j3,
    moe = Hf,
    goe = je,
    yoe = Ds,
    J3 = goe("isConcatSpreadable"),
    boe =
      yoe >= 51 ||
      !uoe(function () {
        var e = [];
        return (e[J3] = !1), e.concat()[0] !== e;
      }),
    $oe = function (e) {
      if (!doe(e)) return !1;
      var t = e[J3];
      return t !== void 0 ? !!t : foe(e);
    },
    woe = !boe || !moe("concat");
  loe(
    { target: "Array", proto: !0, arity: 1, forced: woe },
    {
      concat: function (t) {
        var r = hoe(this),
          n = poe(r, 0),
          a = 0,
          o,
          i,
          s,
          c,
          l;
        for (o = -1, s = arguments.length; o < s; o++)
          if (((l = o === -1 ? r : arguments[o]), $oe(l))) for (c = voe(l), iS(a + c), i = 0; i < c; i++, a++) i in l && sS(n, a, l[i]);
          else iS(a + 1), sS(n, a++, l);
        return (n.length = a), n;
      },
    }
  );
  var Soe = be,
    J0 = function (e, t) {
      var r = [][e];
      return (
        !!r &&
        Soe(function () {
          r.call(
            null,
            t ||
              function () {
                return 1;
              },
            1
          );
        })
      );
    },
    Eoe = _e,
    xoe = xe,
    Toe = If,
    Coe = fn,
    Ooe = J0,
    _oe = xoe([].join),
    Poe = Toe !== Object,
    Ioe = Poe || !Ooe("join", ",");
  Eoe(
    { target: "Array", proto: !0, forced: Ioe },
    {
      join: function (t) {
        return _oe(Coe(this), t === void 0 ? "," : t);
      },
    }
  );
  var Aoe = Uf,
    Roe = _0,
    cS = G3,
    Moe = ti,
    Doe = Nf,
    Noe = jn,
    koe = ri,
    Loe = U0,
    Mc = W0,
    Foe = H5,
    Si = At,
    lS = X0.fastKey,
    Q3 = ka,
    uS = Q3.set,
    Zh = Q3.getterFor,
    e7 = {
      getConstructor: function (e, t, r, n) {
        var a = e(function (l, u) {
            Doe(l, o), uS(l, { type: t, index: Aoe(null), first: void 0, last: void 0, size: 0 }), Si || (l.size = 0), Noe(u) || koe(u, l[n], { that: l, AS_ENTRIES: r });
          }),
          o = a.prototype,
          i = Zh(t),
          s = function (l, u, f) {
            var d = i(l),
              v = c(l, u),
              p,
              m;
            return (
              v
                ? (v.value = f)
                : ((d.last = v = { index: (m = lS(u, !0)), key: u, value: f, previous: (p = d.last), next: void 0, removed: !1 }),
                  d.first || (d.first = v),
                  p && (p.next = v),
                  Si ? d.size++ : l.size++,
                  m !== "F" && (d.index[m] = v)),
              l
            );
          },
          c = function (l, u) {
            var f = i(l),
              d = lS(u),
              v;
            if (d !== "F") return f.index[d];
            for (v = f.first; v; v = v.next) if (v.key === u) return v;
          };
        return (
          cS(o, {
            clear: function () {
              for (var u = this, f = i(u), d = f.index, v = f.first; v; ) (v.removed = !0), v.previous && (v.previous = v.previous.next = void 0), delete d[v.index], (v = v.next);
              (f.first = f.last = void 0), Si ? (f.size = 0) : (u.size = 0);
            },
            delete: function (l) {
              var u = this,
                f = i(u),
                d = c(u, l);
              if (d) {
                var v = d.next,
                  p = d.previous;
                delete f.index[d.index], (d.removed = !0), p && (p.next = v), v && (v.previous = p), f.first === d && (f.first = v), f.last === d && (f.last = p), Si ? f.size-- : u.size--;
              }
              return !!d;
            },
            forEach: function (u) {
              for (var f = i(this), d = Moe(u, arguments.length > 1 ? arguments[1] : void 0), v; (v = v ? v.next : f.first); ) for (d(v.value, v.key, this); v && v.removed; ) v = v.previous;
            },
            has: function (u) {
              return !!c(this, u);
            },
          }),
          cS(
            o,
            r
              ? {
                  get: function (u) {
                    var f = c(this, u);
                    return f && f.value;
                  },
                  set: function (u, f) {
                    return s(this, u === 0 ? 0 : u, f);
                  },
                }
              : {
                  add: function (u) {
                    return s(this, (u = u === 0 ? 0 : u), u);
                  },
                }
          ),
          Si &&
            Roe(o, "size", {
              configurable: !0,
              get: function () {
                return i(this).size;
              },
            }),
          a
        );
      },
      setStrong: function (e, t, r) {
        var n = t + " Iterator",
          a = Zh(t),
          o = Zh(n);
        Loe(
          e,
          t,
          function (i, s) {
            uS(this, { type: n, target: i, state: a(i), kind: s, last: void 0 });
          },
          function () {
            for (var i = o(this), s = i.kind, c = i.last; c && c.removed; ) c = c.previous;
            return !i.target || !(i.last = c = c ? c.next : i.state.first) ? ((i.target = void 0), Mc(void 0, !0)) : Mc(s === "keys" ? c.key : s === "values" ? c.value : [c.key, c.value], !1);
          },
          r ? "entries" : "values",
          !r,
          !0
        ),
          Foe(t);
      },
    },
    joe = Z0,
    Boe = e7;
  joe(
    "Map",
    function (e) {
      return function () {
        return e(this, arguments.length ? arguments[0] : void 0);
      };
    },
    Boe
  );
  var fS = Ns,
    Uoe = TypeError,
    Woe = function (e, t) {
      if (!delete e[t]) throw new Uoe("Cannot delete property " + fS(t) + " of " + fS(e));
    },
    dS = W3,
    Hoe = Math.floor,
    hm = function (e, t) {
      var r = e.length,
        n = Hoe(r / 2);
      return r < 8 ? zoe(e, t) : Voe(e, hm(dS(e, 0, n), t), hm(dS(e, n), t), t);
    },
    zoe = function (e, t) {
      for (var r = e.length, n = 1, a, o; n < r; ) {
        for (o = n, a = e[n]; o && t(e[o - 1], a) > 0; ) e[o] = e[--o];
        o !== n++ && (e[o] = a);
      }
      return e;
    },
    Voe = function (e, t, r, n) {
      for (var a = t.length, o = r.length, i = 0, s = 0; i < a || s < o; ) e[i + s] = i < a && s < o ? (n(t[i], r[s]) <= 0 ? t[i++] : r[s++]) : i < a ? t[i++] : r[s++];
      return e;
    },
    Goe = hm,
    Yoe = Da,
    hS = Yoe.match(/firefox\/(\d+)/i),
    Koe = !!hS && +hS[1],
    qoe = Da,
    Xoe = /MSIE|Trident/.test(qoe),
    Zoe = Da,
    vS = Zoe.match(/AppleWebKit\/(\d+)\./),
    Joe = !!vS && +vS[1],
    Qoe = _e,
    t7 = xe,
    eie = Fr,
    tie = Lr,
    pS = dn,
    rie = Woe,
    mS = Bn,
    Q0 = be,
    nie = Goe,
    aie = J0,
    gS = Koe,
    oie = Xoe,
    yS = Ds,
    bS = Joe,
    xn = [],
    $S = t7(xn.sort),
    iie = t7(xn.push),
    sie = Q0(function () {
      xn.sort(void 0);
    }),
    cie = Q0(function () {
      xn.sort(null);
    }),
    lie = aie("sort"),
    r7 = !Q0(function () {
      if (yS) return yS < 70;
      if (!(gS && gS > 3)) {
        if (oie) return !0;
        if (bS) return bS < 603;
        var e = "",
          t,
          r,
          n,
          a;
        for (t = 65; t < 76; t++) {
          switch (((r = String.fromCharCode(t)), t)) {
            case 66:
            case 69:
            case 70:
            case 72:
              n = 3;
              break;
            case 68:
            case 71:
              n = 4;
              break;
            default:
              n = 2;
          }
          for (a = 0; a < 47; a++) xn.push({ k: r + a, v: n });
        }
        for (
          xn.sort(function (o, i) {
            return i.v - o.v;
          }),
            a = 0;
          a < xn.length;
          a++
        )
          (r = xn[a].k.charAt(0)), e.charAt(e.length - 1) !== r && (e += r);
        return e !== "DGBEFHACIJK";
      }
    }),
    uie = sie || !cie || !lie || !r7,
    fie = function (e) {
      return function (t, r) {
        return r === void 0 ? -1 : t === void 0 ? 1 : e !== void 0 ? +e(t, r) || 0 : mS(t) > mS(r) ? 1 : -1;
      };
    };
  Qoe(
    { target: "Array", proto: !0, forced: uie },
    {
      sort: function (t) {
        t !== void 0 && eie(t);
        var r = tie(this);
        if (r7) return t === void 0 ? $S(r) : $S(r, t);
        var n = [],
          a = pS(r),
          o,
          i;
        for (i = 0; i < a; i++) i in r && iie(n, r[i]);
        for (nie(n, fie(t)), o = pS(n), i = 0; i < o; ) r[i] = n[i++];
        for (; i < a; ) rie(r, i++);
        return r;
      },
    }
  );
  var die = Vf.forEach,
    hie = J0,
    vie = hie("forEach"),
    pie = vie
      ? [].forEach
      : function (t) {
          return die(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
    wS = Fe,
    SS = D3,
    mie = N3,
    Jh = pie,
    gie = ei,
    n7 = function (e) {
      if (e && e.forEach !== Jh)
        try {
          gie(e, "forEach", Jh);
        } catch {
          e.forEach = Jh;
        }
    };
  for (var Qh in SS) SS[Qh] && n7(wS[Qh] && wS[Qh].prototype);
  n7(mie);
  function ES(e) {
    return e === "top" || e === "bottom";
  }
  function a7(e) {
    return e[Ar.LEFT] + e[Ar.RIGHT];
  }
  function o7(e) {
    return e[Ar.TOP] + e[Ar.BOTTOM];
  }
  var yl,
    i7,
    s7,
    yie = (function () {
      function e(t, r) {
        bt(this, e), yl.add(this), (this.calendar = t), (this.domainPainter = r), (this.collection = new Map()), (this.scrollDirection = ze.SCROLL_FORWARD);
      }
      return (
        $t(e, [
          {
            key: "get",
            value: function (r) {
              return this.collection.get(r);
            },
          },
          {
            key: "update",
            value: function (r, n) {
              var a = this,
                o = this.calendar.options.options,
                i = o.verticalOrientation,
                s = o.domain;
              this.scrollDirection = n;
              var c = { width: 0, height: 0 },
                l = 0,
                u = n === ze.SCROLL_FORWARD ? -1 : 1,
                f = r.keys;
              return (
                this.calendar.options.options.domain.sort === "desc" && (f.reverse(), (u *= -1)),
                r.yankedDomains.forEach(function (d) {
                  l += a.collection.get(d)[i ? "height" : "width"];
                }),
                r.yankedDomains.forEach(function (d) {
                  var v = a.collection.get(d);
                  a.collection.set(d, Object.assign(Object.assign({}, v), { x: i ? v.x : v.x + l * u, y: i ? v.y + l * u : v.y }));
                }),
                f.forEach(function (d) {
                  var v = de(a, yl, "m", i7).call(a, d),
                    p = de(a, yl, "m", s7).call(a, d);
                  i ? ((c.height += p), (c.width = Math.max(v, c.width))) : ((c.width += v), (c.height = Math.max(p, c.height)));
                  var m = c.width - v,
                    g = c.height - p;
                  a.collection.set(
                    d,
                    Object.assign(Object.assign({}, a.collection.get(d)), {
                      x: i ? 0 : m,
                      y: i ? g : 0,
                      pre_x: i ? m : m - l * u,
                      pre_y: i ? g - l * u : g,
                      width: v,
                      height: p,
                      inner_width: v - (i ? 0 : s.gutter),
                      inner_height: p - (i ? s.gutter : 0),
                    })
                  );
                }),
                c
              );
            },
          },
        ]),
        e
      );
    })();
  (yl = new WeakSet()),
    (i7 = function (t) {
      var r = this.calendar.options.options,
        n = r.domain,
        a = r.subDomain,
        o = r.x,
        i = r.verticalOrientation,
        s = this.calendar.templateCollection.get(a.type).columnsCount(t),
        c = (a.width + a.gutter) * s - a.gutter;
      return a7(n.padding) + o.domainHorizontalLabelWidth + (i ? 0 : n.gutter) + c;
    }),
    (s7 = function (t) {
      var r = this.calendar.options.options,
        n = r.domain,
        a = r.subDomain,
        o = r.x,
        i = r.verticalOrientation,
        s = this.calendar.templateCollection.get(a.type).rowsCount(t),
        c = (a.height + a.gutter) * s - a.gutter;
      return o7(n.padding) + c + (i ? n.gutter : 0) + o.domainVerticalLabelHeight;
    });
  var vm,
    c7,
    bl = ".ch-domain",
    bie = (function () {
      function e(t) {
        bt(this, e), vm.add(this), (this.calendar = t), (this.coordinates = new yie(t, this)), (this.root = null), (this.dimensions = { width: 0, height: 0 });
      }
      return (
        $t(e, [
          {
            key: "paint",
            value: function (r, n) {
              var a = this,
                o = this.calendar.options.options.animationDuration,
                i = n.transition().duration(o),
                s = this.coordinates;
              this.dimensions = s.update(this.calendar.domainCollection, r);
              var c = [];
              return (
                (this.root = n
                  .selectAll(bl)
                  .data(this.calendar.domainCollection.keys, function (l) {
                    return l;
                  })
                  .join(
                    function (l) {
                      return l
                        .append("svg")
                        .attr("x", function (u) {
                          return s.get(u).pre_x;
                        })
                        .attr("y", function (u) {
                          return s.get(u).pre_y;
                        })
                        .attr("width", function (u) {
                          return s.get(u).inner_width;
                        })
                        .attr("height", function (u) {
                          return s.get(u).inner_height;
                        })
                        .attr("class", function (u) {
                          return de(a, vm, "m", c7).call(a, u);
                        })
                        .call(function (u) {
                          return u
                            .append("rect")
                            .attr("width", function (f) {
                              return s.get(f).inner_width;
                            })
                            .attr("height", function (f) {
                              return s.get(f).inner_height;
                            })
                            .attr("class", "".concat(bl.slice(1), "-bg"));
                        })
                        .call(function (u) {
                          return c.push(
                            u
                              .transition(i)
                              .attr("x", function (f) {
                                return s.get(f).x;
                              })
                              .attr("y", function (f) {
                                return s.get(f).y;
                              })
                              .end()
                          );
                        });
                    },
                    function (l) {
                      return l
                        .call(function (u) {
                          return c.push(
                            u
                              .transition(i)
                              .attr("x", function (f) {
                                return s.get(f).x;
                              })
                              .attr("y", function (f) {
                                return s.get(f).y;
                              })
                              .attr("width", function (f) {
                                return s.get(f).inner_width;
                              })
                              .attr("height", function (f) {
                                return s.get(f).inner_height;
                              })
                              .end()
                          );
                        })
                        .call(function (u) {
                          return c.push(
                            u
                              .selectAll("".concat(bl, "-bg"))
                              .transition(i)
                              .attr("width", function (f) {
                                return s.get(f).inner_width;
                              })
                              .attr("height", function (f) {
                                return s.get(f).inner_height;
                              })
                              .end()
                          );
                        });
                    },
                    function (l) {
                      return l.call(function (u) {
                        return c.push(
                          u
                            .transition(i)
                            .attr("x", function (f) {
                              return s.get(f).x;
                            })
                            .attr("y", function (f) {
                              return s.get(f).y;
                            })
                            .remove()
                            .end()
                        );
                      });
                    }
                  )),
                c
              );
            },
          },
        ]),
        e
      );
    })();
  (vm = new WeakSet()),
    (c7 = function (t) {
      var r = bl.slice(1),
        n = this.calendar.dateHelper.date(t);
      switch (this.calendar.options.options.domain.type) {
        case "hour":
          r += " h_".concat(n.hour());
          break;
        case "day":
          r += " d_".concat(n.date(), " dy_").concat(n.format("d") + 1);
          break;
        case "week":
          r += " w_".concat(n.week());
          break;
        case "month":
          r += " m_".concat(n.month() + 1);
          break;
        case "year":
          r += " y_".concat(n.year());
          break;
      }
      return r;
    });
  var $ie = _e,
    wie = U5.includes,
    Sie = be,
    Eie = j0,
    xie = Sie(function () {
      return !Array(1).includes();
    });
  $ie(
    { target: "Array", proto: !0, forced: xie },
    {
      includes: function (t) {
        return wie(this, t, arguments.length > 1 ? arguments[1] : void 0);
      },
    }
  );
  Eie("includes");
  var Tie = _e,
    Cie = Vf.filter,
    Oie = Hf,
    _ie = Oie("filter");
  Tie(
    { target: "Array", proto: !0, forced: !_ie },
    {
      filter: function (t) {
        return Cie(this, t, arguments.length > 1 ? arguments[1] : void 0);
      },
    }
  );
  var Pie = Tt,
    Iie = b3,
    Aie = function (e, t, r, n) {
      try {
        return n ? t(Pie(r)[0], r[1]) : t(r);
      } catch (a) {
        Iie(e, "throw", a);
      }
    },
    Rie = ti,
    Mie = ut,
    Die = Lr,
    Nie = Aie,
    kie = g3,
    Lie = kf,
    Fie = dn,
    xS = Wf,
    jie = y3,
    Bie = k0,
    TS = Array,
    Uie = function (t) {
      var r = Die(t),
        n = Lie(this),
        a = arguments.length,
        o = a > 1 ? arguments[1] : void 0,
        i = o !== void 0;
      i && (o = Rie(o, a > 2 ? arguments[2] : void 0));
      var s = Bie(r),
        c = 0,
        l,
        u,
        f,
        d,
        v,
        p;
      if (s && !(this === TS && kie(s))) for (d = jie(r, s), v = d.next, u = n ? new this() : []; !(f = Mie(v, d)).done; c++) (p = i ? Nie(d, o, [f.value, c], !0) : f.value), xS(u, c, p);
      else for (l = Fie(r), u = n ? new this(l) : TS(l); l > c; c++) (p = i ? o(r[c], c) : r[c]), xS(u, c, p);
      return (u.length = c), u;
    },
    Wie = _e,
    Hie = Uie,
    zie = L0,
    Vie = !zie(function (e) {
      Array.from(e);
    });
  Wie({ target: "Array", stat: !0, forced: Vie }, { from: Hie });
  var wn,
    l7,
    CS,
    Ri,
    Gie = { year: "YYYY", month: "MMMM", week: "wo [week] YYYY", xDay: "Do MMM", ghDay: "Do MMM", day: "Do MMM", hour: "HH:00", minute: "HH:mm" },
    OS = (function () {
      function e(t, r, n, a) {
        var o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
        if ((bt(this, e), wn.add(this), (this.collection = new Map()), (this.dateHelper = t), r && n && a)) {
          var i = this.dateHelper.intervals(r, n, a, o).map(function (s) {
            return zf(s);
          });
          this.collection = new Map(i);
        }
        (this.min = 0), (this.max = 0), (this.keys = []), (this.yankedDomains = []), this.collection.size > 0 && de(this, wn, "m", Ri).call(this);
      }
      return (
        $t(e, [
          {
            key: "has",
            value: function (r) {
              return this.collection.has(r);
            },
          },
          {
            key: "get",
            value: function (r) {
              return this.collection.get(r);
            },
          },
          {
            key: "forEach",
            value: function (r) {
              return this.collection.forEach(r);
            },
          },
          {
            key: "at",
            value: function (r) {
              return this.keys[r];
            },
          },
          {
            key: "clamp",
            value: function (r, n) {
              var a = this;
              return (
                r &&
                  this.min < r &&
                  this.keys
                    .filter(function (o) {
                      return o < r;
                    })
                    .forEach(function (o) {
                      return a.collection.delete(o);
                    }),
                n &&
                  this.max > n &&
                  this.keys
                    .filter(function (o) {
                      return o > n;
                    })
                    .forEach(function (o) {
                      return a.collection.delete(o);
                    }),
                de(this, wn, "m", Ri).call(this),
                this
              );
            },
          },
          {
            key: "merge",
            value: function (r, n, a) {
              var o = this;
              (this.yankedDomains = []),
                r.keys.forEach(function (i, s) {
                  if (!o.has(i)) {
                    if (o.collection.size >= n) {
                      var c = o.max;
                      i > o.max && (c = o.min), c && o.collection.delete(c) && o.yankedDomains.push(c);
                    }
                    o.collection.set(i, a(i, s)), de(o, wn, "m", Ri).call(o);
                  }
                }),
                (this.yankedDomains = this.yankedDomains.sort(function (i, s) {
                  return i - s;
                }));
            },
          },
          {
            key: "slice",
            value: function () {
              var r = this,
                n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0,
                a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
              if (this.keys.length > n) {
                var o = a ? this.keys.slice(0, -n) : this.keys.slice(n);
                o.forEach(function (i) {
                  r.collection.delete(i);
                }),
                  de(this, wn, "m", Ri).call(this);
              }
              return this;
            },
          },
          {
            key: "fill",
            value: function (r, n, a) {
              var o = this,
                i = n.x,
                s = n.y,
                c = n.groupY,
                l = n.defaultValue,
                u = this.groupRecords(r, i, a);
              this.keys.forEach(function (f) {
                var d = u.get(f) || {};
                de(o, wn, "m", l7).call(o, f, d, s, c, l);
              });
            },
          },
          {
            key: "groupRecords",
            value: function (r, n, a) {
              var o = this,
                i = new Map(),
                s = new Map();
              return (
                this.keys.forEach(function (c) {
                  o.get(c).forEach(function (l) {
                    s.set(l.t, c);
                  });
                }),
                r.forEach(function (c) {
                  var l = o.extractTimestamp(c, n, a);
                  if (s.has(l)) {
                    var u = s.get(l),
                      f = i.get(u) || {};
                    f[l] || (f[l] = []), f[l].push(c), i.set(u, f);
                  }
                }),
                i
              );
            },
          },
          {
            key: "groupValues",
            value: function (r, n) {
              var a = r.filter(function (o) {
                return o !== null;
              });
              if (typeof n == "string") {
                if (
                  a.every(function (o) {
                    return typeof o == "number";
                  })
                )
                  switch (n) {
                    case "sum":
                      return a.reduce(function (o, i) {
                        return o + i;
                      }, 0);
                    case "count":
                      return a.length;
                    case "min":
                      return Math.min.apply(Math, zp(a)) || null;
                    case "max":
                      return Math.max.apply(Math, zp(a)) || null;
                    case "average":
                      return a.length > 0
                        ? a.reduce(function (o, i) {
                            return o + i;
                          }, 0) / a.length
                        : null;
                    default:
                      return null;
                  }
                switch (n) {
                  case "count":
                    return a.length;
                  default:
                    return null;
                }
              } else if (typeof n == "function") return n(a);
              return null;
            },
          },
          {
            key: "extractTimestamp",
            value: function (r, n, a) {
              var o = typeof n == "function" ? n(r) : r[n];
              return typeof o == "string" && (o = +new Date(o)), a(o);
            },
          },
        ]),
        e
      );
    })();
  (wn = new WeakSet()),
    (l7 = function (t, r, n, a, o) {
      var i = this;
      this.get(t).forEach(function (s, c) {
        var l = o;
        r.hasOwnProperty(s.t) && (l = i.groupValues(de(i, wn, "m", CS).call(i, r[s.t], n), a)), (i.get(t)[c].v = l);
      });
    }),
    (CS = function (t, r) {
      return t.map(function (n) {
        return typeof r == "function" ? r(n) : n[r];
      });
    }),
    (Ri = function () {
      this.keys = Array.from(this.collection.keys())
        .map(function (r) {
          return parseInt(r, 10);
        })
        .sort(function (r, n) {
          return r - n;
        });
      var t = this.keys;
      return (this.min = t[0]), (this.max = t[t.length - 1]), this.keys;
    });
  var et,
    pm,
    mm,
    gm,
    no,
    Dc,
    ym,
    _S = ".ch-domain-text",
    Yie = (function () {
      function e(t) {
        bt(this, e), et.add(this), (this.calendar = t);
      }
      return (
        $t(e, [
          {
            key: "paint",
            value: function (r) {
              var n = this,
                a = this.calendar.options.options.domain,
                o = a.label,
                i = a.type,
                s = this.calendar.dateHelper,
                c = o.text;
              c === null ||
                c === "" ||
                (typeof c > "u" && (c = Gie[i]),
                r
                  .selectAll(_S)
                  .data(
                    function (l) {
                      return [l];
                    },
                    function (l) {
                      return l;
                    }
                  )
                  .join(
                    function (l) {
                      return l
                        .append("text")
                        .attr("class", _S.slice(1))
                        .attr("x", function (u) {
                          return de(n, et, "m", mm).call(n, u);
                        })
                        .attr("y", function (u) {
                          return de(n, et, "m", gm).call(n, u);
                        })
                        .attr("text-anchor", o.textAlign)
                        .attr("dominant-baseline", function () {
                          return de(n, et, "m", pm).call(n);
                        })
                        .text(function (u, f, d) {
                          return s.format(u, c, d[f]);
                        })
                        .call(function (u) {
                          return de(n, et, "m", ym).call(n, u);
                        });
                    },
                    function (l) {
                      l.attr("x", function (u) {
                        return de(n, et, "m", mm).call(n, u);
                      })
                        .attr("y", function (u) {
                          return de(n, et, "m", gm).call(n, u);
                        })
                        .attr("text-anchor", o.textAlign)
                        .attr("dominant-baseline", function () {
                          return de(n, et, "m", pm).call(n);
                        })
                        .text(function (u, f, d) {
                          return s.format(u, c, d[f]);
                        })
                        .call(function (u) {
                          return de(n, et, "m", ym).call(n, u);
                        });
                    }
                  ));
            },
          },
        ]),
        e
      );
    })();
  (et = new WeakSet()),
    (pm = function () {
      var t = this.calendar.options.options.domain.label,
        r = t.position,
        n = t.rotate;
      return ES(r) ? "middle" : (n === "left" && r === "left") || (n === "right" && r === "right") ? "bottom" : "hanging";
    }),
    (mm = function (t) {
      var r = this.calendar.options.options.domain,
        n = r.padding,
        a = r.label,
        o = a.position,
        i = a.textAlign,
        s = a.offset,
        c = this.calendar.options.options.x.domainHorizontalLabelWidth,
        l = n[Ar.LEFT];
      return (
        o === "right" && (l += de(this, et, "m", no).call(this, t)),
        i === "middle" && (["top", "bottom"].includes(o) ? (l += de(this, et, "m", no).call(this, t) / 2) : (l += c / 2)),
        i === "end" && (ES(o) ? (l += de(this, et, "m", no).call(this, t)) : (l += c)),
        l + s.x
      );
    }),
    (gm = function (t) {
      var r = this.calendar.options.options,
        n = r.domain,
        a = n.label,
        o = a.position,
        i = a.offset,
        s = n.padding,
        c = r.x,
        l = s[Ar.TOP] + c.domainVerticalLabelHeight / 2;
      return o === "bottom" && (l += de(this, et, "m", Dc).call(this, t)), l + i.y;
    }),
    (no = function (t) {
      var r = this.calendar.options.options,
        n = r.domain.padding,
        a = r.x.domainHorizontalLabelWidth,
        o = this.calendar.calendarPainter.domainsContainerPainter.domainPainter.coordinates;
      return o.get(t).inner_width - a - a7(n);
    }),
    (Dc = function (t) {
      var r = this.calendar.options.options,
        n = r.x.domainVerticalLabelHeight,
        a = r.domain.padding,
        o = this.calendar.calendarPainter.domainsContainerPainter.domainPainter.coordinates;
      return o.get(t).inner_height - n - o7(a);
    }),
    (ym = function (t) {
      var r = this,
        n = this.calendar.options.options,
        a = n.domain.label,
        o = a.rotate,
        i = a.textAlign,
        s = a.position,
        c = n.x,
        l = c.domainHorizontalLabelWidth;
      switch (o) {
        case "right":
          t.attr("transform", function (u) {
            var f = de(r, et, "m", no).call(r, u),
              d = de(r, et, "m", Dc).call(r, u),
              v = ["rotate(90, ".concat(s === "right" ? f : l, ", 0)")];
            switch (s) {
              case "right":
                i === "middle" ? v.push("translate(".concat(d / 2 - l / 2, ")")) : i === "end" && v.push("translate(".concat(d - l, ")"));
                break;
              case "left":
                i === "start" ? v.push("translate(".concat(l, ")")) : i === "middle" ? v.push("translate(".concat(l / 2 + d / 2, ")")) : i === "end" && v.push("translate(".concat(d, ")"));
                break;
            }
            return v.join(",");
          });
          break;
        case "left":
          t.attr("transform", function (u) {
            var f = de(r, et, "m", no).call(r, u),
              d = de(r, et, "m", Dc).call(r, u),
              v = ["rotate(270, ".concat(s === "right" ? f : l, ", 0)")];
            switch (s) {
              case "right":
                i === "start" ? v.push("translate(-".concat(d, ")")) : i === "middle" ? v.push("translate(-".concat(d / 2 + l / 2, ")")) : i === "end" && v.push("translate(-".concat(l, ")"));
                break;
              case "left":
                i === "start" ? v.push("translate(".concat(l - d, ")")) : i === "middle" && v.push("translate(".concat(l / 2 - d / 2, ")"));
                break;
            }
            return v.join(",");
          });
          break;
      }
    });
  var u7 = `	
\v\f\r                　\u2028\u2029\uFEFF`,
    Kie = xe,
    qie = Ma,
    Xie = Bn,
    bm = u7,
    PS = Kie("".replace),
    Zie = RegExp("^[" + bm + "]+"),
    Jie = RegExp("(^|[^" + bm + "])[" + bm + "]+$"),
    ev = function (e) {
      return function (t) {
        var r = Xie(qie(t));
        return e & 1 && (r = PS(r, Zie, "")), e & 2 && (r = PS(r, Jie, "$1")), r;
      };
    },
    Qie = { start: ev(1), end: ev(2), trim: ev(3) },
    ese = Tf.PROPER,
    tse = be,
    IS = u7,
    AS = "​᠎",
    rse = function (e) {
      return tse(function () {
        return !!IS[e]() || AS[e]() !== AS || (ese && IS[e].name !== e);
      });
    },
    nse = _e,
    ase = Qie.trim,
    ose = rse;
  nse(
    { target: "String", proto: !0, forced: ose("trim") },
    {
      trim: function () {
        return ase(this);
      },
    }
  );
  var pt,
    $m,
    yu,
    f7,
    tv,
    bu,
    $u,
    $l = ".ch-subdomain",
    ise = "highlight",
    sse = (function () {
      function e(t) {
        bt(this, e), pt.add(this), (this.calendar = t), (this.root = null);
      }
      return (
        $t(e, [
          {
            key: "paint",
            value: function (r) {
              var n = this;
              this.root = r || this.root;
              var a = "".concat($l, "-container"),
                o = this.root
                  .selectAll(a)
                  .data(
                    function (d) {
                      return [d];
                    },
                    function (d) {
                      return d;
                    }
                  )
                  .join(
                    function (d) {
                      return d
                        .append("svg")
                        .call(function (v) {
                          return de(n, pt, "m", $m).call(n, v);
                        })
                        .attr("class", a.slice(1));
                    },
                    function (d) {
                      return d.call(function (v) {
                        return de(n, pt, "m", $m).call(n, v);
                      });
                    }
                  ),
                i = this.calendar.options.options.subDomain,
                s = i.radius,
                c = i.width,
                l = i.height,
                u = i.sort,
                f = this.calendar.eventEmitter;
              o.selectAll("g")
                .data(function (d) {
                  var v = n.calendar.domainCollection.get(d);
                  if (u === "desc") {
                    var p = Math.max.apply(
                      Math,
                      zp(
                        v.map(function (m) {
                          return m.x;
                        })
                      )
                    );
                    v.forEach(function (m, g) {
                      v[g].x = Math.abs(m.x - p);
                    });
                  }
                  return v;
                })
                .join(
                  function (d) {
                    return d
                      .append("g")
                      .call(function (v) {
                        return v
                          .insert("rect")
                          .attr("class", function (p) {
                            return de(n, pt, "m", yu).call(n, p.t, "".concat($l.slice(1), "-bg"));
                          })
                          .attr("width", c)
                          .attr("height", l)
                          .attr("x", function (p) {
                            return de(n, pt, "m", bu).call(n, p);
                          })
                          .attr("y", function (p) {
                            return de(n, pt, "m", $u).call(n, p);
                          })
                          .on("click", function (p, m) {
                            return f.emit("click", p, m.t, m.v);
                          })
                          .on("mouseover", function (p, m) {
                            return f.emit("mouseover", p, m.t, m.v);
                          })
                          .on("mouseout", function (p, m) {
                            return f.emit("mouseout", p, m.t, m.v);
                          })
                          .attr("rx", s > 0 ? s : null)
                          .attr("ry", s > 0 ? s : null);
                      })
                      .call(function (v) {
                        return de(n, pt, "m", f7).call(n, v);
                      });
                  },
                  function (d) {
                    return d
                      .selectAll("rect")
                      .attr("class", function (v) {
                        return de(n, pt, "m", yu).call(n, v.t, "".concat($l.slice(1), "-bg"));
                      })
                      .attr("width", c)
                      .attr("height", l)
                      .attr("x", function (v) {
                        return de(n, pt, "m", bu).call(n, v);
                      })
                      .attr("y", function (v) {
                        return de(n, pt, "m", $u).call(n, v);
                      })
                      .attr("rx", s)
                      .attr("ry", s);
                  }
                );
            },
          },
        ]),
        e
      );
    })();
  (pt = new WeakSet()),
    ($m = function (t) {
      var r = this.calendar.options.options,
        n = r.domain,
        a = n.padding,
        o = n.label.position;
      t.attr("x", function () {
        var i = a[Ar.LEFT];
        return o === "left" && (i += r.x.domainHorizontalLabelWidth), i;
      }).attr("y", function () {
        var i = a[Ar.TOP];
        return o === "top" && (i += r.x.domainVerticalLabelHeight), i;
      });
    }),
    (yu = function (t) {
      var r = this,
        n = this.calendar.options.options,
        a = n.date.highlight,
        o = n.subDomain.type,
        i = "";
      a.length > 0 &&
        a.forEach(function (u) {
          var f = r.calendar.templateCollection.get(o).extractUnit;
          f(+u) === f(t) && (i = ise);
        });
      for (var s = arguments.length, c = new Array(s > 1 ? s - 1 : 0), l = 1; l < s; l++) c[l - 1] = arguments[l];
      return [i].concat(c).join(" ").trim();
    }),
    (f7 = function (t) {
      var r = this,
        n = this.calendar.options.options.subDomain,
        a = n.width,
        o = n.height,
        i = n.label;
      return i
        ? t
            .append("text")
            .attr("class", function (s) {
              return de(r, pt, "m", yu).call(r, s.t, "".concat($l.slice(1), "-text"));
            })
            .attr("x", function (s) {
              return de(r, pt, "m", bu).call(r, s) + a / 2;
            })
            .attr("y", function (s) {
              return de(r, pt, "m", $u).call(r, s) + o / 2;
            })
            .attr("text-anchor", "middle")
            .attr("dominant-baseline", "central")
            .text(function (s, c, l) {
              return r.calendar.dateHelper.format(s.t, i, s.v, l[c]);
            })
        : null;
    }),
    (tv = function (t, r) {
      var n = this.calendar.options.options.subDomain;
      return r[t] * (n[t === "x" ? "width" : "height"] + n.gutter);
    }),
    (bu = function (t) {
      return de(this, pt, "m", tv).call(this, "x", t);
    }),
    ($u = function (t) {
      return de(this, pt, "m", tv).call(this, "y", t);
    });
  var uo,
    wm,
    d7,
    h7,
    RS = ".ch-domain-container",
    MS = "in-transition",
    cse = (function () {
      function e(t) {
        bt(this, e),
          uo.add(this),
          (this.calendar = t),
          (this.domainPainter = new bie(t)),
          (this.subDomainPainter = new sse(t)),
          (this.domainLabelPainter = new Yie(t)),
          (this.dimensions = { width: 0, height: 0 }),
          (this.transitionsQueueCount = 0);
      }
      return (
        $t(e, [
          {
            key: "setup",
            value: function () {
              this.root = this.calendar.calendarPainter.root
                .attr("x", 0)
                .attr("y", 0)
                .append("svg")
                .attr("class", RS.slice(1))
                .append("svg")
                .attr("class", "".concat(RS.slice(1), "-animation-wrapper"));
            },
          },
          {
            key: "paint",
            value: function (r) {
              var n = this;
              de(this, uo, "m", wm).call(this);
              var a = this.domainPainter.paint(r, this.root);
              return (
                this.subDomainPainter.paint(this.domainPainter.root),
                this.domainLabelPainter.paint(this.domainPainter.root),
                de(this, uo, "m", h7).call(this),
                Promise.allSettled(a).then(function () {
                  de(n, uo, "m", d7).call(n);
                }),
                a
              );
            },
          },
          {
            key: "updatePosition",
            value: function () {
              var r;
              if (!(!((r = this.root) === null || r === void 0) && r.node())) return Promise.resolve();
              var n = this.calendar.options.options.animationDuration,
                a = this.calendar.pluginManager.getHeightFromPosition("top"),
                o = this.calendar.pluginManager.getWidthFromPosition("left");
              return [
                ql(this.root.node().parentNode)
                  .transition()
                  .duration(n)
                  .call(function (i) {
                    i.attr("x", o).attr("y", a);
                  })
                  .end(),
              ];
            },
          },
          {
            key: "width",
            value: function () {
              return this.dimensions.width;
            },
          },
          {
            key: "height",
            value: function () {
              return this.dimensions.height;
            },
          },
          {
            key: "destroy",
            value: function () {
              return de(this, uo, "m", wm).call(this), Promise.resolve();
            },
          },
        ]),
        e
      );
    })();
  (uo = new WeakSet()),
    (wm = function () {
      var t;
      !((t = this.root) === null || t === void 0) && t.node() && ((this.transitionsQueueCount += 1), ql(this.root.node().parentNode).classed(MS, !0));
    }),
    (d7 = function () {
      var t;
      !((t = this.root) === null || t === void 0) && t.node() && ((this.transitionsQueueCount -= 1), this.transitionsQueueCount === 0 && ql(this.root.node().parentNode).classed(MS, !1));
    }),
    (h7 = function () {
      var t = this.calendar.options.options,
        r = t.animationDuration,
        n = t.verticalOrientation,
        a = t.domain.gutter,
        o = this.domainPainter.dimensions;
      (this.dimensions = { width: o.width - (n ? 0 : a), height: o.height - (n ? a : 0) }),
        this.root.transition().duration(r).attr("width", this.dimensions.width).attr("height", this.dimensions.height);
    });
  var lse = (function () {
      function e(t) {
        bt(this, e), (this.calendar = t);
      }
      return (
        $t(e, [
          {
            key: "paint",
            value: function () {
              var r = [];
              return (r = r.concat(this.calendar.pluginManager.paintAll())), (r = r.concat(this.setPluginsPosition())), r;
            },
          },
          {
            key: "setPluginsPosition",
            value: function () {
              var r = this.calendar.pluginManager,
                n = this.calendar.options.options.animationDuration,
                a = this.calendar.calendarPainter.domainsContainerPainter,
                o = r.getFromPosition("top"),
                i = r.getFromPosition("right"),
                s = r.getFromPosition("bottom"),
                c = r.getFromPosition("left"),
                l = r.getHeightFromPosition("top"),
                u = r.getWidthFromPosition("left"),
                f = [],
                d = 0;
              o.forEach(function (p) {
                f.push(p.root.transition().duration(n).attr("y", d).attr("x", u).end()), (d += p.options.dimensions.height);
              });
              var v = 0;
              return (
                c.forEach(function (p) {
                  f.push(p.root.transition().duration(n).attr("x", v).attr("y", l).end()), (v += p.options.dimensions.width);
                }),
                s.forEach(function (p) {
                  f.push(
                    p.root
                      .transition()
                      .duration(n)
                      .attr("x", u)
                      .attr("y", l + a.height())
                      .end()
                  );
                }),
                (v += a.width()),
                i.forEach(function (p) {
                  f.push(p.root.transition().duration(n).attr("x", v).attr("y", l).end()), (v += p.options.dimensions.width);
                }),
                f
              );
            },
          },
          {
            key: "insideWidth",
            value: function () {
              return this.calendar.pluginManager.getWidthFromPosition("left") + this.calendar.pluginManager.getWidthFromPosition("right");
            },
          },
          {
            key: "insideHeight",
            value: function () {
              return this.calendar.pluginManager.getHeightFromPosition("top") + this.calendar.pluginManager.getHeightFromPosition("bottom");
            },
          },
        ]),
        e
      );
    })(),
    Ui,
    DS,
    NS,
    v7,
    use = ".ch-container",
    fse = (function () {
      function e(t) {
        bt(this, e), Ui.add(this), (this.calendar = t), (this.dimensions = { width: 0, height: 0 }), (this.root = null), (this.domainsContainerPainter = new cse(t)), (this.pluginPainter = new lse(t));
      }
      return (
        $t(e, [
          {
            key: "setup",
            value: function () {
              var r = this.calendar.options.options,
                n = r.itemSelector,
                a = r.theme;
              return (
                this.root || ((this.root = ql(n).append("svg").attr("data-theme", a).attr("class", use.slice(1))), this.domainsContainerPainter.setup()), this.calendar.pluginManager.setupAll(), !0
              );
            },
          },
          {
            key: "paint",
            value: function () {
              var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ze.SCROLL_NONE,
                n = this.domainsContainerPainter.paint(r).concat(this.pluginPainter.paint()).concat(this.domainsContainerPainter.updatePosition());
              return de(this, Ui, "m", v7).call(this), Promise.allSettled(n);
            },
          },
          {
            key: "destroy",
            value: function () {
              var r = this.calendar.pluginManager.destroyAll().concat(this.domainsContainerPainter.destroy());
              return this.root && r.push(this.root.transition().duration(this.calendar.options.options.animationDuration).attr("width", 0).attr("height", 0).remove().end()), Promise.allSettled(r);
            },
          },
        ]),
        e
      );
    })();
  (Ui = new WeakSet()),
    (DS = function () {
      return this.domainsContainerPainter.height() + this.pluginPainter.insideHeight();
    }),
    (NS = function () {
      return this.domainsContainerPainter.width() + this.pluginPainter.insideWidth();
    }),
    (v7 = function () {
      var t = this.calendar.options.options,
        r = de(this, Ui, "m", NS).call(this),
        n = de(this, Ui, "m", DS).call(this);
      this.root.transition().duration(t.animationDuration).attr("width", r).attr("height", n),
        (r !== this.dimensions.width || n !== this.dimensions.height) && this.calendar.eventEmitter.emit("resize", r, n, this.dimensions.width, this.dimensions.height),
        (this.dimensions = { width: r, height: n });
    });
  var dse = typeof global == "object" && global && global.Object === Object && global,
    p7 = dse,
    hse = typeof self == "object" && self && self.Object === Object && self,
    vse = p7 || hse || Function("return this")(),
    jr = vse,
    pse = jr.Symbol,
    Dn = pse,
    m7 = Object.prototype,
    mse = m7.hasOwnProperty,
    gse = m7.toString,
    Ei = Dn ? Dn.toStringTag : void 0;
  function yse(e) {
    var t = mse.call(e, Ei),
      r = e[Ei];
    try {
      e[Ei] = void 0;
      var n = !0;
    } catch {}
    var a = gse.call(e);
    return n && (t ? (e[Ei] = r) : delete e[Ei]), a;
  }
  var bse = Object.prototype,
    $se = bse.toString;
  function wse(e) {
    return $se.call(e);
  }
  var Sse = "[object Null]",
    Ese = "[object Undefined]",
    kS = Dn ? Dn.toStringTag : void 0;
  function Un(e) {
    return e == null ? (e === void 0 ? Ese : Sse) : kS && kS in Object(e) ? yse(e) : wse(e);
  }
  function rn(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function");
  }
  var xse = "[object AsyncFunction]",
    Tse = "[object Function]",
    Cse = "[object GeneratorFunction]",
    Ose = "[object Proxy]";
  function Us(e) {
    if (!rn(e)) return !1;
    var t = Un(e);
    return t == Tse || t == Cse || t == xse || t == Ose;
  }
  var _se = _e,
    Pse = Lr,
    g7 = Bf,
    Ise = be,
    Ase = Ise(function () {
      g7(1);
    });
  _se(
    { target: "Object", stat: !0, forced: Ase },
    {
      keys: function (t) {
        return g7(Pse(t));
      },
    }
  );
  var Rse = lt,
    Mse = un,
    Dse = je,
    Nse = Dse("match"),
    kse = function (e) {
      var t;
      return Rse(e) && ((t = e[Nse]) !== void 0 ? !!t : Mse(e) === "RegExp");
    },
    Lse = kse,
    Fse = TypeError,
    y7 = function (e) {
      if (Lse(e)) throw new Fse("The method doesn't accept regular expressions");
      return e;
    },
    jse = je,
    Bse = jse("match"),
    b7 = function (e) {
      var t = /./;
      try {
        "/./"[e](t);
      } catch {
        try {
          return (t[Bse] = !1), "/./"[e](t);
        } catch {}
      }
      return !1;
    },
    Use = _e,
    $7 = I0,
    Wse = ks.f,
    Hse = E0,
    LS = Bn,
    zse = y7,
    Vse = Ma,
    Gse = b7,
    FS = $7("".startsWith),
    Yse = $7("".slice),
    Kse = Math.min,
    w7 = Gse("startsWith"),
    qse =
      !w7 &&
      !!(function () {
        var e = Wse(String.prototype, "startsWith");
        return e && !e.writable;
      })();
  Use(
    { target: "String", proto: !0, forced: !qse && !w7 },
    {
      startsWith: function (t) {
        var r = LS(Vse(this));
        zse(t);
        var n = Hse(Kse(arguments.length > 1 ? arguments[1] : void 0, r.length)),
          a = LS(t);
        return FS ? FS(r, a, n) : Yse(r, n, n + a.length) === a;
      },
    }
  );
  var S7 = At,
    Xse = be,
    E7 = xe,
    Zse = B0,
    Jse = Bf,
    Qse = fn,
    ece = Pf.f,
    x7 = E7(ece),
    tce = E7([].push),
    rce =
      S7 &&
      Xse(function () {
        var e = Object.create(null);
        return (e[2] = 2), !x7(e, 2);
      }),
    jS = function (e) {
      return function (t) {
        for (var r = Qse(t), n = Jse(r), a = rce && Zse(r) === null, o = n.length, i = 0, s = [], c; o > i; ) (c = n[i++]), (!S7 || (a ? c in r : x7(r, c))) && tce(s, e ? [c, r[c]] : r[c]);
        return s;
      };
    },
    nce = { entries: jS(!0), values: jS(!1) },
    ace = _e,
    oce = nce.entries;
  ace(
    { target: "Object", stat: !0 },
    {
      entries: function (t) {
        return oce(t);
      },
    }
  );
  function BS(e) {
    return e != null && !Number.isNaN(e);
  }
  function ice(e, t) {
    return +BS(t) - +BS(e) || On(e, t);
  }
  function T7(e) {
    return isFinite(e) ? e : NaN;
  }
  function ey(e) {
    return e > 0 && isFinite(e) ? e : NaN;
  }
  function C7(e) {
    return e < 0 && isFinite(e) ? e : NaN;
  }
  const sce = /^(?:[-+]\d{2})?\d{4}(?:-\d{2}(?:-\d{2})?)?(?:T\d{2}:\d{2}(?::\d{2}(?:\.\d{3})?)?(?:Z|[-+]\d{2}:?\d{2})?)?$/;
  function O7(e, t) {
    return sce.test((e += "")) ? new Date(e) : typeof t == "function" ? t(e) : t;
  }
  const cce = new Map([
      ["second", Yr],
      ["minute", vf],
      ["hour", mf],
      ["day", Qo],
      ["week", Uo],
      ["month", xo],
      ["quarter", xo.every(3)],
      ["half", xo.every(6)],
      ["year", Pr],
      ["monday", os],
      ["tuesday", I_],
      ["wednesday", A_],
      ["thursday", ma],
      ["friday", R_],
      ["saturday", M_],
      ["sunday", Uo],
    ]),
    lce = new Map([
      ["second", Yr],
      ["minute", pf],
      ["hour", gf],
      ["day", Ms],
      ["week", Wo],
      ["month", To],
      ["quarter", To.every(3)],
      ["half", To.every(6)],
      ["year", Ir],
      ["monday", is],
      ["tuesday", D_],
      ["wednesday", N_],
      ["thursday", ga],
      ["friday", k_],
      ["saturday", L_],
      ["sunday", Wo],
    ]);
  function uce(e) {
    const t = cce.get(`${e}`.toLowerCase());
    if (!t) throw new Error(`unknown interval: ${e}`);
    return t;
  }
  function fce(e) {
    const t = lce.get(`${e}`.toLowerCase());
    if (!t) throw new Error(`unknown interval: ${e}`);
    return t;
  }
  const _7 = Object.getPrototypeOf(Uint8Array),
    dce = Object.prototype.toString,
    hce = (e) => () => e;
  function US(e) {
    return e instanceof _7 ? e : Gf(e, vce, Float64Array);
  }
  function vce(e) {
    return e == null ? NaN : Number(e);
  }
  function pce(e) {
    return Gf(e, mce);
  }
  function mce(e) {
    return e instanceof Date && !isNaN(e) ? e : typeof e == "string" ? O7(e) : e == null || isNaN((e = +e)) ? void 0 : new Date(e);
  }
  function P7(e) {
    return e == null || e instanceof Array || e instanceof _7 ? e : Array.from(e);
  }
  function Gf(e, t, r = Array) {
    return e == null ? e : e instanceof r ? e.map(t) : r.from(e, t);
  }
  function Sm(e, t = Array) {
    return e instanceof t ? e.slice() : t.from(e);
  }
  function gce(e) {
    return (e == null ? void 0 : e.toString) === dce;
  }
  function yce(e) {
    return gce(e) && (e.type !== void 0 || e.domain !== void 0);
  }
  function bce(e, t) {
    if (e != null) {
      if (typeof e == "number") {
        0 < e && e < 1 && Number.isInteger(1 / e) && (e = -1 / e);
        const r = Math.abs(e);
        return e < 0
          ? { floor: (n) => Math.floor(n * r) / r, offset: (n) => (n * r + 1) / r, range: (n, a) => Rp(Math.ceil(n * r), a * r).map((o) => o / r) }
          : { floor: (n) => Math.floor(n / r) * r, offset: (n) => n + r, range: (n, a) => Rp(Math.ceil(n / r), a / r).map((o) => o * r) };
      }
      if (typeof e == "string") return (t === "time" ? uce : fce)(e);
      if (typeof e.floor != "function") throw new Error("invalid interval; missing floor method");
      if (typeof e.offset != "function") throw new Error("invalid interval; missing offset method");
      return e;
    }
  }
  function Yf(e, t) {
    if (((e = bce(e, t)), e && typeof e.range != "function")) throw new Error("invalid interval: missing range method");
    return e;
  }
  function $ce(e, t) {
    if (((e = Yf(e, t)), e && typeof e.ceil != "function")) throw new Error("invalid interval: missing ceil method");
    return e;
  }
  function WS(e) {
    for (const t of e) {
      if (t == null) continue;
      const r = typeof t;
      return r === "string" || r === "boolean";
    }
  }
  function Em(e) {
    for (const t of e) if (t != null) return t instanceof Date;
  }
  function wce(e) {
    for (const t of e) if (t != null) return typeof t == "string" && isNaN(t) && O7(t);
  }
  function Sce(e) {
    for (const t of e)
      if (t != null) {
        if (typeof t != "string") return !1;
        if (t.trim()) return !isNaN(t);
      }
  }
  function Ece(e) {
    return e == null || xce(e);
  }
  function xce(e) {
    return /^\s*none\s*$/i.test(e);
  }
  function ty(e) {
    if (e == null) return;
    const t = e[0],
      r = e[e.length - 1];
    return cf(t, r);
  }
  const Tn = Symbol("position"),
    Rr = Symbol("color"),
    Kf = Symbol("radius"),
    qf = Symbol("length"),
    Xf = Symbol("opacity"),
    Zf = Symbol("symbol"),
    yt = new Map([
      ["x", Tn],
      ["y", Tn],
      ["fx", Tn],
      ["fy", Tn],
      ["r", Kf],
      ["color", Rr],
      ["opacity", Xf],
      ["symbol", Zf],
      ["length", qf],
    ]),
    Tce = Math.sqrt(3),
    Cce = 2 / Tce,
    Oce = {
      draw(e, t) {
        const r = Math.sqrt(t / Math.PI),
          n = r * Cce,
          a = n / 2;
        e.moveTo(0, n), e.lineTo(r, a), e.lineTo(r, -a), e.lineTo(0, -n), e.lineTo(-r, -a), e.lineTo(-r, a), e.closePath();
      },
    },
    _ce = new Map([
      ["asterisk", n5],
      ["circle", f0],
      ["cross", a5],
      ["diamond", i5],
      ["diamond2", s5],
      ["hexagon", Oce],
      ["plus", c5],
      ["square", l5],
      ["square2", u5],
      ["star", d5],
      ["times", m5],
      ["triangle", h5],
      ["triangle2", v5],
      ["wye", p5],
    ]);
  function Pce(e) {
    return e && typeof e.draw == "function";
  }
  function I7(e) {
    if (e == null || Pce(e)) return e;
    const t = _ce.get(`${e}`.toLowerCase());
    if (t) return t;
    throw new Error(`invalid symbol: ${e}`);
  }
  const HS = new Map([
    ["accent", oK],
    ["category10", aK],
    ["dark2", iK],
    ["paired", sK],
    ["pastel1", cK],
    ["pastel2", lK],
    ["set1", uK],
    ["set2", fK],
    ["set3", dK],
    ["tableau10", hK],
    ["brbg", Ur(q_, X_)],
    ["prgn", Ur(Z_, J_)],
    ["piyg", Ur(Q_, eP)],
    ["puor", Ur(tP, rP)],
    ["rdbu", Ur(Up, lu)],
    ["rdgy", Ur(nP, aP)],
    ["rdylbu", Ur(Wp, uu)],
    ["rdylgn", Ur(oP, iP)],
    ["spectral", Ur(sP, cP)],
    ["burd", zS(Up, lu)],
    ["buylrd", zS(Wp, uu)],
    ["blues", Ze(MP, DP)],
    ["greens", Ze(NP, kP)],
    ["greys", Ze(LP, FP)],
    ["oranges", Ze(HP, zP)],
    ["purples", Ze(jP, BP)],
    ["reds", Ze(UP, WP)],
    ["turbo", Wr(ZP)],
    ["viridis", Wr(JP)],
    ["magma", Wr(QP)],
    ["inferno", Wr(e5)],
    ["plasma", Wr(t5)],
    ["cividis", Wr(VP)],
    ["cubehelix", Wr(GP)],
    ["warm", Wr(YP)],
    ["cool", Wr(KP)],
    ["bugn", Ze(lP, uP)],
    ["bupu", Ze(fP, dP)],
    ["gnbu", Ze(hP, vP)],
    ["orrd", Ze(pP, mP)],
    ["pubu", Ze(bP, $P)],
    ["pubugn", Ze(gP, yP)],
    ["purd", Ze(wP, SP)],
    ["rdpu", Ze(EP, xP)],
    ["ylgn", Ze(OP, _P)],
    ["ylgnbu", Ze(TP, CP)],
    ["ylorbr", Ze(PP, IP)],
    ["ylorrd", Ze(AP, RP)],
    ["rainbow", VS(qP)],
    ["sinebow", VS(XP)],
  ]);
  function Ze(e, t) {
    return ({ length: r }) => (r === 1 ? [e[3][1]] : r === 2 ? [e[3][1], e[3][2]] : ((r = Math.max(3, Math.floor(r))), r > 9 ? _r(t, r) : e[r]));
  }
  function Ur(e, t) {
    return ({ length: r }) => (r === 2 ? [e[3][0], e[3][2]] : ((r = Math.max(3, Math.floor(r))), r > 11 ? _r(t, r) : e[r]));
  }
  function zS(e, t) {
    return ({ length: r }) => (r === 2 ? [e[3][2], e[3][0]] : ((r = Math.max(3, Math.floor(r))), r > 11 ? _r((n) => t(1 - n), r) : e[r].slice().reverse()));
  }
  function Wr(e) {
    return ({ length: t }) => _r(e, Math.max(2, Math.floor(t)));
  }
  function VS(e) {
    return ({ length: t }) => _r(e, Math.floor(t) + 1).slice(0, -1);
  }
  function A7(e) {
    const t = `${e}`.toLowerCase();
    if (!HS.has(t)) throw new Error(`unknown ordinal scheme: ${t}`);
    return HS.get(t);
  }
  function Jf(e, t) {
    const r = A7(e),
      n = typeof r == "function" ? r({ length: t }) : r;
    return n.length !== t ? n.slice(0, t) : n;
  }
  function Ice(e, t = "greys") {
    const r = new Set(),
      [n, a] = Jf(t, 2);
    for (const o of e)
      if (o != null)
        if (o === !0) r.add(a);
        else if (o === !1) r.add(n);
        else return;
    return [...r];
  }
  const GS = new Map([
    ["brbg", X_],
    ["prgn", J_],
    ["piyg", eP],
    ["puor", rP],
    ["rdbu", lu],
    ["rdgy", aP],
    ["rdylbu", uu],
    ["rdylgn", iP],
    ["spectral", cP],
    ["burd", (e) => lu(1 - e)],
    ["buylrd", (e) => uu(1 - e)],
    ["blues", DP],
    ["greens", kP],
    ["greys", FP],
    ["purples", BP],
    ["reds", WP],
    ["oranges", zP],
    ["turbo", ZP],
    ["viridis", JP],
    ["magma", QP],
    ["inferno", e5],
    ["plasma", t5],
    ["cividis", VP],
    ["cubehelix", GP],
    ["warm", YP],
    ["cool", KP],
    ["bugn", uP],
    ["bupu", dP],
    ["gnbu", vP],
    ["orrd", mP],
    ["pubugn", yP],
    ["pubu", $P],
    ["purd", SP],
    ["rdpu", xP],
    ["ylgnbu", CP],
    ["ylgn", _P],
    ["ylorbr", IP],
    ["ylorrd", RP],
    ["rainbow", qP],
    ["sinebow", XP],
  ]);
  function ry(e) {
    const t = `${e}`.toLowerCase();
    if (!GS.has(t)) throw new Error(`unknown quantitative scheme: ${t}`);
    return GS.get(t);
  }
  const Ace = new Set(["brbg", "prgn", "piyg", "puor", "rdbu", "rdgy", "rdylbu", "rdylgn", "spectral", "burd", "buylrd"]);
  function YS(e) {
    return e != null && Ace.has(`${e}`.toLowerCase());
  }
  const R7 = (e) => (t) => e(1 - t),
    rv = [0, 1],
    KS = new Map([
      ["number", Et],
      ["rgb", va],
      ["hsl", Jz],
      ["hcl", tV],
      ["lab", Qz],
    ]);
  function M7(e) {
    const t = `${e}`.toLowerCase();
    if (!KS.has(t)) throw new Error(`unknown interpolator: ${t}`);
    return KS.get(t);
  }
  function Ws(
    e,
    t,
    r,
    {
      type: n,
      nice: a,
      clamp: o,
      zero: i,
      domain: s = N7(e, r),
      unknown: c,
      round: l,
      scheme: u,
      interval: f,
      range: d = yt.get(e) === Kf ? Wce(r, s) : yt.get(e) === qf ? Hce(r, s) : yt.get(e) === Xf ? rv : void 0,
      interpolate: v = yt.get(e) === Rr ? (u == null && d !== void 0 ? va : ry(u !== void 0 ? u : n === "cyclical" ? "rainbow" : "turbo")) : l ? Jg : Et,
      reverse: p,
    }
  ) {
    if (
      ((f = Yf(f, n)),
      (n === "cyclical" || n === "sequential") && (n = "linear"),
      (p = !!p),
      typeof v != "function" && (v = M7(v)),
      v.length === 1
        ? (p && ((v = R7(v)), (p = !1)), d === void 0 && ((d = Float64Array.from(s, (m, g) => g / (s.length - 1))), d.length === 2 && (d = rv)), t.interpolate((d === rv ? hce : k7)(v)))
        : t.interpolate(v),
      i)
    ) {
      const [m, g] = Xg(s);
      (m > 0 || g < 0) && ((s = Sm(s)), ty(s) !== Math.sign(m) ? (s[s.length - 1] = 0) : (s[0] = 0));
    }
    return (
      p && (s = nu(s)),
      t.domain(s).unknown(c),
      a && (t.nice(Rce(a, n)), (s = t.domain())),
      d !== void 0 && t.range(d),
      o && t.clamp(o),
      { type: n, domain: s, range: d, scale: t, interpolate: v, interval: f }
    );
  }
  function Rce(e, t) {
    return e === !0 ? void 0 : typeof e == "number" ? e : $ce(e, t);
  }
  function Mce(e, t, r) {
    return Ws(e, y_(), t, r);
  }
  function Dce(e, t, r) {
    return D7(e, t, { ...r, exponent: 0.5 });
  }
  function D7(e, t, { exponent: r = 1, ...n }) {
    return Ws(e, C_().exponent(r), t, { ...n, type: "pow" });
  }
  function Nce(e, t, { base: r = 10, domain: n = zce(t), ...a }) {
    return Ws(e, S_().base(r), t, { ...a, domain: n });
  }
  function kce(e, t, { constant: r = 1, ...n }) {
    return Ws(e, x_().constant(r), t, n);
  }
  function Lce(e, t, { range: r, quantiles: n = r === void 0 ? 5 : (r = [...r]).length, n: a = n, scheme: o = "rdylbu", domain: i = Vce(t), unknown: s, interpolate: c, reverse: l }) {
    return (
      r === void 0 && (r = c !== void 0 ? _r(c, a) : yt.get(e) === Rr ? Jf(o, a) : void 0),
      i.length > 0 && (i = O_(i, r === void 0 ? { length: a } : r).quantiles()),
      ny(e, t, { domain: i, range: r, reverse: l, unknown: s })
    );
  }
  function Fce(e, t, { range: r, n = r === void 0 ? 5 : (r = [...r]).length, scheme: a = "rdylbu", domain: o = N7(e, t), unknown: i, interpolate: s, reverse: c }) {
    const [l, u] = Xg(o);
    let f;
    return (
      r === void 0
        ? ((f = tu(l, u, n)), f[0] <= l && f.splice(0, 1), f[f.length - 1] >= u && f.pop(), (n = f.length + 1), (r = s !== void 0 ? _r(s, n) : yt.get(e) === Rr ? Jf(a, n) : void 0))
        : ((f = _r(Et(l, u), n + 1).slice(1, -1)), l instanceof Date && (f = f.map((d) => new Date(d)))),
      ty(P7(o)) < 0 && f.reverse(),
      ny(e, t, { domain: f, range: r, reverse: c, unknown: i })
    );
  }
  function ny(
    e,
    t,
    { domain: r = [0], unknown: n, scheme: a = "rdylbu", interpolate: o, range: i = o !== void 0 ? _r(o, r.length + 1) : yt.get(e) === Rr ? Jf(a, r.length + 1) : void 0, reverse: s }
  ) {
    r = P7(r);
    const c = ty(r);
    if (!isNaN(c) && !jce(r, c)) throw new Error(`the ${e} scale has a non-monotonic domain`);
    return s && (i = nu(i)), { type: "threshold", scale: __(c < 0 ? nu(r) : r, i === void 0 ? [] : i).unknown(n), domain: r, range: i };
  }
  function jce(e, t) {
    for (let r = 1, n = e.length, a = e[0]; r < n; ++r) {
      const o = cf(a, (a = e[r]));
      if (o !== 0 && o !== t) return !1;
    }
    return !0;
  }
  function Bce() {
    return { type: "identity", scale: b_() };
  }
  function ls(e, t = T7) {
    return e.length ? [ru(e, ({ value: r }) => (r === void 0 ? r : ru(r, t))), Rn(e, ({ value: r }) => (r === void 0 ? r : Rn(r, t)))] : [0, 1];
  }
  function N7(e, t) {
    const r = yt.get(e);
    return (r === Kf || r === Xf || r === qf ? Uce : ls)(t);
  }
  function Uce(e) {
    return [0, e.length ? Rn(e, ({ value: t }) => (t === void 0 ? t : Rn(t, T7))) : 1];
  }
  function Wce(e, t) {
    const r = e.find(({ radius: i }) => i !== void 0);
    if (r !== void 0) return [0, r.radius];
    const n = Ap(e, 0.5, ({ value: i }) => (i === void 0 ? NaN : Ap(i, 0.25, ey))),
      a = t.map((i) => 3 * Math.sqrt(i / n)),
      o = 30 / Rn(a);
    return o < 1 ? a.map((i) => i * o) : a;
  }
  function Hce(e, t) {
    const r = H1(e, ({ value: o }) => (o === void 0 ? NaN : H1(o, Math.abs))),
      n = t.map((o) => (12 * o) / r),
      a = 60 / Rn(n);
    return a < 1 ? n.map((o) => o * a) : n;
  }
  function zce(e) {
    for (const { value: t } of e)
      if (t !== void 0)
        for (let r of t) {
          if (r > 0) return ls(e, ey);
          if (r < 0) return ls(e, C7);
        }
    return [1, 10];
  }
  function Vce(e) {
    const t = [];
    for (const { value: r } of e) if (r !== void 0) for (const n of r) t.push(n);
    return t;
  }
  function k7(e) {
    return (t, r) => (n) => e(t + n * (r - t));
  }
  function Qf(
    e,
    t,
    r,
    n,
    {
      type: a,
      nice: o,
      clamp: i,
      domain: s = ls(n),
      unknown: c,
      pivot: l = 0,
      scheme: u,
      range: f,
      symmetric: d = !0,
      interpolate: v = yt.get(e) === Rr ? (u == null && f !== void 0 ? va : ry(u !== void 0 ? u : "rdbu")) : Et,
      reverse: p,
    }
  ) {
    l = +l;
    let [m, g] = s;
    if (
      (cf(m, g) < 0 && (([m, g] = [g, m]), (p = !p)),
      (m = Math.min(m, l)),
      (g = Math.max(g, l)),
      typeof v != "function" && (v = M7(v)),
      f !== void 0 && (v = v.length === 1 ? k7(v)(...f) : a_(v, f)),
      p && (v = R7(v)),
      d)
    ) {
      const y = r.apply(l),
        b = y - r.apply(m),
        $ = r.apply(g) - y;
      b < $ ? (m = r.invert(y - $)) : b > $ && (g = r.invert(y + b));
    }
    return t.domain([m, l, g]).unknown(c).interpolator(v), i && t.clamp(i), o && t.nice(o), { type: a, domain: [m, g], pivot: l, interpolate: v, scale: t };
  }
  function Gce(e, t, r) {
    return Qf(e, V_(), Xce, t, r);
  }
  function Yce(e, t, r) {
    return L7(e, t, { ...r, exponent: 0.5 });
  }
  function L7(e, t, { exponent: r = 1, ...n }) {
    return Qf(e, K_().exponent((r = +r)), Qce(r), t, { ...n, type: "diverging-pow" });
  }
  function Kce(e, t, { base: r = 10, pivot: n = 1, domain: a = ls(t, n < 0 ? C7 : ey), ...o }) {
    return Qf(e, G_().base((r = +r)), Zce, t, { domain: a, pivot: n, ...o });
  }
  function qce(e, t, { constant: r = 1, ...n }) {
    return Qf(e, Y_().constant((r = +r)), ele(r), t, n);
  }
  const Xce = {
      apply(e) {
        return e;
      },
      invert(e) {
        return e;
      },
    },
    Zce = { apply: Math.log, invert: Math.exp },
    Jce = {
      apply(e) {
        return Math.sign(e) * Math.sqrt(Math.abs(e));
      },
      invert(e) {
        return Math.sign(e) * (e * e);
      },
    };
  function Qce(e) {
    return e === 0.5
      ? Jce
      : {
          apply(t) {
            return Math.sign(t) * Math.pow(Math.abs(t), e);
          },
          invert(t) {
            return Math.sign(t) * Math.pow(Math.abs(t), 1 / e);
          },
        };
  }
  function ele(e) {
    return {
      apply(t) {
        return Math.sign(t) * Math.log1p(Math.abs(t / e));
      },
      invert(t) {
        return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
      },
    };
  }
  function F7(e, t, r, n) {
    return Ws(e, t, r, n);
  }
  function tle(e, t, r) {
    return F7(e, rK(), t, r);
  }
  function rle(e, t, r) {
    return F7(e, nK(), t, r);
  }
  const Hs = Symbol("ordinal");
  function j7(e, t, r, { type: n, interval: a, domain: o, range: i, reverse: s, hint: c }) {
    return (
      (a = Yf(a, n)),
      o === void 0 && (o = U7(r, a, e)),
      (n === "categorical" || n === Hs) && (n = "ordinal"),
      s && (o = nu(o)),
      t.domain(o),
      i !== void 0 && (typeof i == "function" && (i = i(o)), t.range(i)),
      { type: n, domain: o, range: i, scale: t, hint: c, interval: a }
    );
  }
  function nle(e, t, { type: r, interval: n, domain: a, range: o, scheme: i, unknown: s, ...c }) {
    (n = Yf(n, r)), a === void 0 && (a = U7(t, n, e));
    let l;
    if (yt.get(e) === Zf) (l = ile(t)), (o = o === void 0 ? sle(l) : Gf(o, I7));
    else if (
      yt.get(e) === Rr &&
      (o === void 0 && (r === "ordinal" || r === Hs) && ((o = Ice(a, i)), o !== void 0 && (i = void 0)), i === void 0 && o === void 0 && (i = r === "ordinal" ? "turbo" : "tableau10"), i !== void 0)
    )
      if (o !== void 0) {
        const u = ry(i),
          f = o[0],
          d = o[1] - o[0];
        o = ({ length: v }) => _r((p) => u(f + d * p), v);
      } else o = A7(i);
    if (s === Fp) throw new Error(`implicit unknown on ${e} scale is not supported`);
    return j7(e, i0().unknown(s), t, { ...c, type: r, domain: a, range: o, hint: l });
  }
  function ale(e, t, { align: r = 0.5, padding: n = 0.5, ...a }) {
    return B7(kG().align(r).padding(n), t, a, e);
  }
  function ole(e, t, { align: r = 0.5, padding: n = 0.1, paddingInner: a = n, paddingOuter: o = e === "fx" || e === "fy" ? 0 : n, ...i }) {
    return B7(s0().align(r).paddingInner(a).paddingOuter(o), t, i, e);
  }
  function B7(e, t, r, n) {
    let { round: a } = r;
    return a !== void 0 && e.round((a = !!a)), (e = j7(n, e, t, r)), (e.round = a), e;
  }
  function U7(e, t, r) {
    const n = new xz();
    for (const { value: a, domain: o } of e) {
      if (o !== void 0) return o();
      if (a !== void 0) for (const i of a) n.add(i);
    }
    if (t !== void 0) {
      const [a, o] = Xg(n).map(t.floor, t);
      return t.range(a, t.offset(o));
    }
    if (n.size > 1e4 && yt.get(r) === Tn) throw new Error(`implicit ordinal domain of ${r} scale has more than 10,000 values`);
    return Cz(n, ice);
  }
  function qS(e, t) {
    let r;
    for (const { hint: n } of e) {
      const a = n == null ? void 0 : n[t];
      if (a !== void 0) {
        if (r === void 0) r = a;
        else if (r !== a) return;
      }
    }
    return r;
  }
  function ile(e) {
    return { fill: qS(e, "fill"), stroke: qS(e, "stroke") };
  }
  function sle(e) {
    return Ece(e.fill) ? xK : EK;
  }
  function cle(e, t, r) {
    return lle(e, r === void 0 ? void 0 : [{ hint: r }], { ...t });
  }
  function lle(e, t = [], r = {}) {
    const n = ule(e, t, r);
    if (r.type === void 0 && r.domain === void 0 && r.range === void 0 && r.interval == null && e !== "fx" && e !== "fy" && fle({ type: n })) {
      const a = t.map(({ value: o }) => o).filter((o) => o !== void 0);
      a.some(Em) ? (`${e}${ao(n)}${e}${e}${ao(n)}`, void 0) : a.some(wce) ? (`${e}${ao(n)}${e}${ao(n)}`, void 0) : a.some(Sce) && (`${e}${ao(n)}${e}${e}${ao(n)}`, void 0);
    }
    switch (((r.type = n), n)) {
      case "diverging":
      case "diverging-sqrt":
      case "diverging-pow":
      case "diverging-log":
      case "diverging-symlog":
      case "cyclical":
      case "sequential":
      case "linear":
      case "sqrt":
      case "threshold":
      case "quantile":
      case "pow":
      case "log":
      case "symlog":
        r = Nc(t, r, US);
        break;
      case "identity":
        switch (yt.get(e)) {
          case Tn:
            r = Nc(t, r, US);
            break;
          case Zf:
            r = Nc(t, r, dle);
            break;
        }
        break;
      case "utc":
      case "time":
        r = Nc(t, r, pce);
        break;
    }
    switch (n) {
      case "diverging":
        return Gce(e, t, r);
      case "diverging-sqrt":
        return Yce(e, t, r);
      case "diverging-pow":
        return L7(e, t, r);
      case "diverging-log":
        return Kce(e, t, r);
      case "diverging-symlog":
        return qce(e, t, r);
      case "categorical":
      case "ordinal":
      case Hs:
        return nle(e, t, r);
      case "cyclical":
      case "sequential":
      case "linear":
        return Mce(e, t, r);
      case "sqrt":
        return Dce(e, t, r);
      case "threshold":
        return ny(e, t, r);
      case "quantile":
        return Lce(e, t, r);
      case "quantize":
        return Fce(e, t, r);
      case "pow":
        return D7(e, t, r);
      case "log":
        return Nce(e, t, r);
      case "symlog":
        return kce(e, t, r);
      case "utc":
        return rle(e, t, r);
      case "time":
        return tle(e, t, r);
      case "point":
        return ale(e, t, r);
      case "band":
        return ole(e, t, r);
      case "identity":
        return yt.get(e) === Tn ? Bce() : { type: "identity" };
      case void 0:
        return;
      default:
        throw new Error(`unknown scale type: ${n}`);
    }
  }
  function ao(e) {
    return typeof e == "symbol" ? e.description : e;
  }
  const XS = { toString: () => "projection" };
  function ule(e, t, { type: r, domain: n, range: a, scheme: o, pivot: i, projection: s }) {
    if (e === "fx" || e === "fy") return "band";
    (e === "x" || e === "y") && s != null && (r = XS);
    for (const { type: u } of t)
      if (u !== void 0) {
        if (r === void 0) r = u;
        else if (r !== u) throw new Error(`scale incompatible with channel: ${r} !== ${u}`);
      }
    if (r === XS) return;
    if (r !== void 0) return r;
    if (n === void 0 && !t.some(({ value: u }) => u !== void 0)) return;
    const c = yt.get(e);
    if (c === Kf) return "sqrt";
    if (c === Xf || c === qf) return "linear";
    if (c === Zf) return "ordinal";
    if ((n || a || []).length > 2) return nv(c);
    if (n !== void 0) return WS(n) ? nv(c) : Em(n) ? "utc" : c === Rr && (i != null || YS(o)) ? "diverging" : "linear";
    const l = t.map(({ value: u }) => u).filter((u) => u !== void 0);
    return l.some(WS) ? nv(c) : l.some(Em) ? "utc" : c === Rr && (i != null || YS(o)) ? "diverging" : "linear";
  }
  function nv(e) {
    switch (e) {
      case Tn:
        return "point";
      case Rr:
        return Hs;
      default:
        return "ordinal";
    }
  }
  function fle({ type: e }) {
    return e === "ordinal" || e === "point" || e === "band" || e === Hs;
  }
  function Nc(e, { domain: t, ...r }, n) {
    for (const a of e) a.value !== void 0 && (a.value = n(a.value));
    return { domain: t === void 0 ? t : n(t), ...r };
  }
  function dle(e) {
    return Gf(e, I7);
  }
  function hle(e = {}) {
    let t;
    for (const r in e)
      if (yt.has(r) && yce(e[r])) {
        if (t !== void 0) throw new Error("ambiguous scale definition; multiple scales found");
        t = vle(cle(r, e[r]));
      }
    if (t === void 0) throw new Error("invalid scale definition; no scale found");
    return t;
  }
  function vle({ scale: e, type: t, domain: r, range: n, interpolate: a, interval: o, transform: i, percent: s, pivot: c }) {
    if (t === "identity") return { type: "identity", apply: (u) => u, invert: (u) => u };
    const l = e.unknown ? e.unknown() : void 0;
    return {
      type: t,
      domain: Sm(r),
      ...(n !== void 0 && { range: Sm(n) }),
      ...(i !== void 0 && { transform: i }),
      ...(s && { percent: s }),
      ...(l !== void 0 && { unknown: l }),
      ...(o !== void 0 && { interval: o }),
      ...(a !== void 0 && { interpolate: a }),
      ...(e.clamp && { clamp: e.clamp() }),
      ...(c !== void 0 && { pivot: c, symmetric: !1 }),
      ...(e.base && { base: e.base() }),
      ...(e.exponent && { exponent: e.exponent() }),
      ...(e.constant && { constant: e.constant() }),
      ...(e.align && { align: e.align(), round: e.round() }),
      ...(e.padding && (e.paddingInner ? { paddingInner: e.paddingInner(), paddingOuter: e.paddingOuter() } : { padding: e.padding() })),
      ...(e.bandwidth && { bandwidth: e.bandwidth(), step: e.step() }),
      apply: (u) => e(u),
      ...(e.invert && { invert: (u) => e.invert(u) }),
    };
  }
  function ple(e) {
    try {
      var t = Object.keys(e)[0];
      return hle(CK({}, t, Object.assign(Object.assign({}, e[t]), { clamp: !0 })));
    } catch {
      return null;
    }
  }
  function mle(e, t) {
    var r = {};
    return (
      t.hasOwnProperty("opacity")
        ? ((r.fill = function () {
            return t.opacity.baseColor || toe;
          }),
          (r["fill-opacity"] = function (n) {
            return e == null ? void 0 : e.apply(n);
          }))
        : (r.fill = function (n) {
            return typeof n == "string" && n != null && n.startsWith("#") ? n : e == null ? void 0 : e.apply(n);
          }),
      r
    );
  }
  function gle(e, t, r, n) {
    Object.entries(mle(t, r)).forEach(function (a) {
      var o = g5(a, 2),
        i = o[0],
        s = o[1];
      return e.style(i, function (c) {
        return s(n ? c[n] : c);
      });
    });
  }
  var yle = (function () {
    function e(t) {
      bt(this, e), (this.calendar = t);
    }
    return (
      $t(e, [
        {
          key: "populate",
          value: function () {
            var r = this.calendar,
              n = r.options.options,
              a = n.scale,
              o = n.subDomain,
              i = ple(a);
            r.calendarPainter.root
              .selectAll(".ch-domain")
              .selectAll("svg")
              .selectAll("g")
              .data(function (s) {
                return r.domainCollection.get(s) || [];
              })
              .call(function (s) {
                gle(s.select("rect"), i, a, "v");
              })
              .call(function (s) {
                s.select("text")
                  .attr("style", function (c) {
                    var l = Jl(i == null ? void 0 : i.apply(c.v)).l > 60 ? "#000" : "#fff",
                      u = o.color || (c.v ? l : null);
                    return Us(u) && (u = u(c.t, c.v, i == null ? void 0 : i.apply(c.v))), u ? "fill: ".concat(u, ";") : null;
                  })
                  .text(function (c, l, u) {
                    return r.dateHelper.format(c.t, o.label, c.v, u[l]);
                  });
              })
              .call(function () {
                r.eventEmitter.emit("fill");
              });
          },
        },
      ]),
      e
    );
  })();
  function ble() {
    (this.__data__ = []), (this.size = 0);
  }
  function zs(e, t) {
    return e === t || (e !== e && t !== t);
  }
  function ed(e, t) {
    for (var r = e.length; r--; ) if (zs(e[r][0], t)) return r;
    return -1;
  }
  var $le = Array.prototype,
    wle = $le.splice;
  function Sle(e) {
    var t = this.__data__,
      r = ed(t, e);
    if (r < 0) return !1;
    var n = t.length - 1;
    return r == n ? t.pop() : wle.call(t, r, 1), --this.size, !0;
  }
  function Ele(e) {
    var t = this.__data__,
      r = ed(t, e);
    return r < 0 ? void 0 : t[r][1];
  }
  function xle(e) {
    return ed(this.__data__, e) > -1;
  }
  function Tle(e, t) {
    var r = this.__data__,
      n = ed(r, e);
    return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
  }
  function hn(e) {
    var t = -1,
      r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
      var n = e[t];
      this.set(n[0], n[1]);
    }
  }
  hn.prototype.clear = ble;
  hn.prototype.delete = Sle;
  hn.prototype.get = Ele;
  hn.prototype.has = xle;
  hn.prototype.set = Tle;
  function Cle() {
    (this.__data__ = new hn()), (this.size = 0);
  }
  function Ole(e) {
    var t = this.__data__,
      r = t.delete(e);
    return (this.size = t.size), r;
  }
  function _le(e) {
    return this.__data__.get(e);
  }
  function Ple(e) {
    return this.__data__.has(e);
  }
  var Ile = jr["__core-js_shared__"],
    av = Ile,
    ZS = (function () {
      var e = /[^.]+$/.exec((av && av.keys && av.keys.IE_PROTO) || "");
      return e ? "Symbol(src)_1." + e : "";
    })();
  function Ale(e) {
    return !!ZS && ZS in e;
  }
  var Rle = Function.prototype,
    Mle = Rle.toString;
  function Fa(e) {
    if (e != null) {
      try {
        return Mle.call(e);
      } catch {}
      try {
        return e + "";
      } catch {}
    }
    return "";
  }
  var Dle = /[\\^$.*+?()[\]{}|]/g,
    Nle = /^\[object .+?Constructor\]$/,
    kle = Function.prototype,
    Lle = Object.prototype,
    Fle = kle.toString,
    jle = Lle.hasOwnProperty,
    Ble = RegExp(
      "^" +
        Fle.call(jle)
          .replace(Dle, "\\$&")
          .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
        "$"
    );
  function Ule(e) {
    if (!rn(e) || Ale(e)) return !1;
    var t = Us(e) ? Ble : Nle;
    return t.test(Fa(e));
  }
  function Wle(e, t) {
    return e == null ? void 0 : e[t];
  }
  function ja(e, t) {
    var r = Wle(e, t);
    return Ule(r) ? r : void 0;
  }
  var Hle = ja(jr, "Map"),
    us = Hle,
    zle = ja(Object, "create"),
    fs = zle;
  function Vle() {
    (this.__data__ = fs ? fs(null) : {}), (this.size = 0);
  }
  function Gle(e) {
    var t = this.has(e) && delete this.__data__[e];
    return (this.size -= t ? 1 : 0), t;
  }
  var Yle = "__lodash_hash_undefined__",
    Kle = Object.prototype,
    qle = Kle.hasOwnProperty;
  function Xle(e) {
    var t = this.__data__;
    if (fs) {
      var r = t[e];
      return r === Yle ? void 0 : r;
    }
    return qle.call(t, e) ? t[e] : void 0;
  }
  var Zle = Object.prototype,
    Jle = Zle.hasOwnProperty;
  function Qle(e) {
    var t = this.__data__;
    return fs ? t[e] !== void 0 : Jle.call(t, e);
  }
  var eue = "__lodash_hash_undefined__";
  function tue(e, t) {
    var r = this.__data__;
    return (this.size += this.has(e) ? 0 : 1), (r[e] = fs && t === void 0 ? eue : t), this;
  }
  function wa(e) {
    var t = -1,
      r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
      var n = e[t];
      this.set(n[0], n[1]);
    }
  }
  wa.prototype.clear = Vle;
  wa.prototype.delete = Gle;
  wa.prototype.get = Xle;
  wa.prototype.has = Qle;
  wa.prototype.set = tue;
  function rue() {
    (this.size = 0), (this.__data__ = { hash: new wa(), map: new (us || hn)(), string: new wa() });
  }
  function nue(e) {
    var t = typeof e;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
  }
  function td(e, t) {
    var r = e.__data__;
    return nue(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
  }
  function aue(e) {
    var t = td(this, e).delete(e);
    return (this.size -= t ? 1 : 0), t;
  }
  function oue(e) {
    return td(this, e).get(e);
  }
  function iue(e) {
    return td(this, e).has(e);
  }
  function sue(e, t) {
    var r = td(this, e),
      n = r.size;
    return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
  }
  function vn(e) {
    var t = -1,
      r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
      var n = e[t];
      this.set(n[0], n[1]);
    }
  }
  vn.prototype.clear = rue;
  vn.prototype.delete = aue;
  vn.prototype.get = oue;
  vn.prototype.has = iue;
  vn.prototype.set = sue;
  var cue = 200;
  function lue(e, t) {
    var r = this.__data__;
    if (r instanceof hn) {
      var n = r.__data__;
      if (!us || n.length < cue - 1) return n.push([e, t]), (this.size = ++r.size), this;
      r = this.__data__ = new vn(n);
    }
    return r.set(e, t), (this.size = r.size), this;
  }
  function Kr(e) {
    var t = (this.__data__ = new hn(e));
    this.size = t.size;
  }
  Kr.prototype.clear = Cle;
  Kr.prototype.delete = Ole;
  Kr.prototype.get = _le;
  Kr.prototype.has = Ple;
  Kr.prototype.set = lue;
  var uue = (function () {
      try {
        var e = ja(Object, "defineProperty");
        return e({}, "", {}), e;
      } catch {}
    })(),
    wu = uue;
  function ay(e, t, r) {
    t == "__proto__" && wu ? wu(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 }) : (e[t] = r);
  }
  function xm(e, t, r) {
    ((r !== void 0 && !zs(e[t], r)) || (r === void 0 && !(t in e))) && ay(e, t, r);
  }
  function fue(e) {
    return function (t, r, n) {
      for (var a = -1, o = Object(t), i = n(t), s = i.length; s--; ) {
        var c = i[e ? s : ++a];
        if (r(o[c], c, o) === !1) break;
      }
      return t;
    };
  }
  var due = fue(),
    hue = due,
    W7 = typeof Me == "object" && Me && !Me.nodeType && Me,
    JS = W7 && typeof De == "object" && De && !De.nodeType && De,
    vue = JS && JS.exports === W7,
    QS = vue ? jr.Buffer : void 0,
    e2 = QS ? QS.allocUnsafe : void 0;
  function pue(e, t) {
    if (t) return e.slice();
    var r = e.length,
      n = e2 ? e2(r) : new e.constructor(r);
    return e.copy(n), n;
  }
  var mue = jr.Uint8Array,
    Su = mue;
  function gue(e) {
    var t = new e.constructor(e.byteLength);
    return new Su(t).set(new Su(e)), t;
  }
  function yue(e, t) {
    var r = t ? gue(e.buffer) : e.buffer;
    return new e.constructor(r, e.byteOffset, e.length);
  }
  function bue(e, t) {
    var r = -1,
      n = e.length;
    for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
    return t;
  }
  var t2 = Object.create,
    $ue = (function () {
      function e() {}
      return function (t) {
        if (!rn(t)) return {};
        if (t2) return t2(t);
        e.prototype = t;
        var r = new e();
        return (e.prototype = void 0), r;
      };
    })(),
    wue = $ue;
  function H7(e, t) {
    return function (r) {
      return e(t(r));
    };
  }
  var Sue = H7(Object.getPrototypeOf, Object),
    z7 = Sue,
    Eue = Object.prototype;
  function oy(e) {
    var t = e && e.constructor,
      r = (typeof t == "function" && t.prototype) || Eue;
    return e === r;
  }
  function xue(e) {
    return typeof e.constructor == "function" && !oy(e) ? wue(z7(e)) : {};
  }
  function nn(e) {
    return e != null && typeof e == "object";
  }
  var Tue = "[object Arguments]";
  function r2(e) {
    return nn(e) && Un(e) == Tue;
  }
  var V7 = Object.prototype,
    Cue = V7.hasOwnProperty,
    Oue = V7.propertyIsEnumerable,
    _ue = r2(
      (function () {
        return arguments;
      })()
    )
      ? r2
      : function (e) {
          return nn(e) && Cue.call(e, "callee") && !Oue.call(e, "callee");
        },
    Eu = _ue,
    Pue = 9007199254740991;
  function iy(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Pue;
  }
  function rd(e) {
    return e != null && iy(e.length) && !Us(e);
  }
  function Iue(e) {
    return nn(e) && rd(e);
  }
  function Aue() {
    return !1;
  }
  var G7 = typeof Me == "object" && Me && !Me.nodeType && Me,
    n2 = G7 && typeof De == "object" && De && !De.nodeType && De,
    Rue = n2 && n2.exports === G7,
    a2 = Rue ? jr.Buffer : void 0,
    Mue = a2 ? a2.isBuffer : void 0,
    Due = Mue || Aue,
    xu = Due,
    Nue = "[object Object]",
    kue = Function.prototype,
    Lue = Object.prototype,
    Y7 = kue.toString,
    Fue = Lue.hasOwnProperty,
    jue = Y7.call(Object);
  function Bue(e) {
    if (!nn(e) || Un(e) != Nue) return !1;
    var t = z7(e);
    if (t === null) return !0;
    var r = Fue.call(t, "constructor") && t.constructor;
    return typeof r == "function" && r instanceof r && Y7.call(r) == jue;
  }
  var Uue = "[object Arguments]",
    Wue = "[object Array]",
    Hue = "[object Boolean]",
    zue = "[object Date]",
    Vue = "[object Error]",
    Gue = "[object Function]",
    Yue = "[object Map]",
    Kue = "[object Number]",
    que = "[object Object]",
    Xue = "[object RegExp]",
    Zue = "[object Set]",
    Jue = "[object String]",
    Que = "[object WeakMap]",
    efe = "[object ArrayBuffer]",
    tfe = "[object DataView]",
    rfe = "[object Float32Array]",
    nfe = "[object Float64Array]",
    afe = "[object Int8Array]",
    ofe = "[object Int16Array]",
    ife = "[object Int32Array]",
    sfe = "[object Uint8Array]",
    cfe = "[object Uint8ClampedArray]",
    lfe = "[object Uint16Array]",
    ufe = "[object Uint32Array]",
    Ie = {};
  Ie[rfe] = Ie[nfe] = Ie[afe] = Ie[ofe] = Ie[ife] = Ie[sfe] = Ie[cfe] = Ie[lfe] = Ie[ufe] = !0;
  Ie[Uue] = Ie[Wue] = Ie[efe] = Ie[Hue] = Ie[tfe] = Ie[zue] = Ie[Vue] = Ie[Gue] = Ie[Yue] = Ie[Kue] = Ie[que] = Ie[Xue] = Ie[Zue] = Ie[Jue] = Ie[Que] = !1;
  function ffe(e) {
    return nn(e) && iy(e.length) && !!Ie[Un(e)];
  }
  function dfe(e) {
    return function (t) {
      return e(t);
    };
  }
  var K7 = typeof Me == "object" && Me && !Me.nodeType && Me,
    Wi = K7 && typeof De == "object" && De && !De.nodeType && De,
    hfe = Wi && Wi.exports === K7,
    ov = hfe && p7.process,
    vfe = (function () {
      try {
        var e = Wi && Wi.require && Wi.require("util").types;
        return e || (ov && ov.binding && ov.binding("util"));
      } catch {}
    })(),
    o2 = vfe,
    i2 = o2 && o2.isTypedArray,
    pfe = i2 ? dfe(i2) : ffe,
    sy = pfe;
  function Tm(e, t) {
    if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__") return e[t];
  }
  var mfe = Object.prototype,
    gfe = mfe.hasOwnProperty;
  function q7(e, t, r) {
    var n = e[t];
    (!(gfe.call(e, t) && zs(n, r)) || (r === void 0 && !(t in e))) && ay(e, t, r);
  }
  function yfe(e, t, r, n) {
    var a = !r;
    r || (r = {});
    for (var o = -1, i = t.length; ++o < i; ) {
      var s = t[o],
        c = n ? n(r[s], e[s], s, r, e) : void 0;
      c === void 0 && (c = e[s]), a ? ay(r, s, c) : q7(r, s, c);
    }
    return r;
  }
  function bfe(e, t) {
    for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
    return n;
  }
  var $fe = 9007199254740991,
    wfe = /^(?:0|[1-9]\d*)$/;
  function nd(e, t) {
    var r = typeof e;
    return (t = t ?? $fe), !!t && (r == "number" || (r != "symbol" && wfe.test(e))) && e > -1 && e % 1 == 0 && e < t;
  }
  var Sfe = Object.prototype,
    Efe = Sfe.hasOwnProperty;
  function X7(e, t) {
    var r = Zt(e),
      n = !r && Eu(e),
      a = !r && !n && xu(e),
      o = !r && !n && !a && sy(e),
      i = r || n || a || o,
      s = i ? bfe(e.length, String) : [],
      c = s.length;
    for (var l in e)
      (t || Efe.call(e, l)) && !(i && (l == "length" || (a && (l == "offset" || l == "parent")) || (o && (l == "buffer" || l == "byteLength" || l == "byteOffset")) || nd(l, c))) && s.push(l);
    return s;
  }
  function xfe(e) {
    var t = [];
    if (e != null) for (var r in Object(e)) t.push(r);
    return t;
  }
  var Tfe = Object.prototype,
    Cfe = Tfe.hasOwnProperty;
  function Ofe(e) {
    if (!rn(e)) return xfe(e);
    var t = oy(e),
      r = [];
    for (var n in e) (n == "constructor" && (t || !Cfe.call(e, n))) || r.push(n);
    return r;
  }
  function Z7(e) {
    return rd(e) ? X7(e, !0) : Ofe(e);
  }
  function _fe(e) {
    return yfe(e, Z7(e));
  }
  function Pfe(e, t, r, n, a, o, i) {
    var s = Tm(e, r),
      c = Tm(t, r),
      l = i.get(c);
    if (l) {
      xm(e, r, l);
      return;
    }
    var u = o ? o(s, c, r + "", e, t, i) : void 0,
      f = u === void 0;
    if (f) {
      var d = Zt(c),
        v = !d && xu(c),
        p = !d && !v && sy(c);
      (u = c),
        d || v || p
          ? Zt(s)
            ? (u = s)
            : Iue(s)
            ? (u = bue(s))
            : v
            ? ((f = !1), (u = pue(c, !0)))
            : p
            ? ((f = !1), (u = yue(c, !0)))
            : (u = [])
          : Bue(c) || Eu(c)
          ? ((u = s), Eu(s) ? (u = _fe(s)) : (!rn(s) || Us(s)) && (u = xue(c)))
          : (f = !1);
    }
    f && (i.set(c, u), a(u, c, n, o, i), i.delete(c)), xm(e, r, u);
  }
  function J7(e, t, r, n, a) {
    e !== t &&
      hue(
        t,
        function (o, i) {
          if ((a || (a = new Kr()), rn(o))) Pfe(e, t, i, r, J7, n, a);
          else {
            var s = n ? n(Tm(e, i), o, i + "", e, t, a) : void 0;
            s === void 0 && (s = o), xm(e, i, s);
          }
        },
        Z7
      );
  }
  function Q7(e) {
    return e;
  }
  function Ife(e, t, r) {
    switch (r.length) {
      case 0:
        return e.call(t);
      case 1:
        return e.call(t, r[0]);
      case 2:
        return e.call(t, r[0], r[1]);
      case 3:
        return e.call(t, r[0], r[1], r[2]);
    }
    return e.apply(t, r);
  }
  var s2 = Math.max;
  function Afe(e, t, r) {
    return (
      (t = s2(t === void 0 ? e.length - 1 : t, 0)),
      function () {
        for (var n = arguments, a = -1, o = s2(n.length - t, 0), i = Array(o); ++a < o; ) i[a] = n[t + a];
        a = -1;
        for (var s = Array(t + 1); ++a < t; ) s[a] = n[a];
        return (s[t] = r(i)), Ife(e, this, s);
      }
    );
  }
  function Rfe(e) {
    return function () {
      return e;
    };
  }
  var Mfe = wu
      ? function (e, t) {
          return wu(e, "toString", { configurable: !0, enumerable: !1, value: Rfe(t), writable: !0 });
        }
      : Q7,
    Dfe = Mfe,
    Nfe = 800,
    kfe = 16,
    Lfe = Date.now;
  function Ffe(e) {
    var t = 0,
      r = 0;
    return function () {
      var n = Lfe(),
        a = kfe - (n - r);
      if (((r = n), a > 0)) {
        if (++t >= Nfe) return arguments[0];
      } else t = 0;
      return e.apply(void 0, arguments);
    };
  }
  var jfe = Ffe(Dfe),
    Bfe = jfe;
  function Ufe(e, t) {
    return Bfe(Afe(e, t, Q7), e + "");
  }
  function Wfe(e, t, r) {
    if (!rn(r)) return !1;
    var n = typeof t;
    return (n == "number" ? rd(r) && nd(t, r.length) : n == "string" && t in r) ? zs(r[t], e) : !1;
  }
  function Hfe(e) {
    return Ufe(function (t, r) {
      var n = -1,
        a = r.length,
        o = a > 1 ? r[a - 1] : void 0,
        i = a > 2 ? r[2] : void 0;
      for (o = e.length > 3 && typeof o == "function" ? (a--, o) : void 0, i && Wfe(r[0], r[1], i) && ((o = a < 3 ? void 0 : o), (a = 1)), t = Object(t); ++n < a; ) {
        var s = r[n];
        s && e(t, s, n, o);
      }
      return t;
    });
  }
  var zfe = Hfe(function (e, t, r, n) {
      J7(e, t, r, n);
    }),
    Vfe = zfe,
    Gfe = "__lodash_hash_undefined__";
  function Yfe(e) {
    return this.__data__.set(e, Gfe), this;
  }
  function Kfe(e) {
    return this.__data__.has(e);
  }
  function Tu(e) {
    var t = -1,
      r = e == null ? 0 : e.length;
    for (this.__data__ = new vn(); ++t < r; ) this.add(e[t]);
  }
  Tu.prototype.add = Tu.prototype.push = Yfe;
  Tu.prototype.has = Kfe;
  function qfe(e, t) {
    for (var r = -1, n = e == null ? 0 : e.length; ++r < n; ) if (t(e[r], r, e)) return !0;
    return !1;
  }
  function Xfe(e, t) {
    return e.has(t);
  }
  var Zfe = 1,
    Jfe = 2;
  function e6(e, t, r, n, a, o) {
    var i = r & Zfe,
      s = e.length,
      c = t.length;
    if (s != c && !(i && c > s)) return !1;
    var l = o.get(e),
      u = o.get(t);
    if (l && u) return l == t && u == e;
    var f = -1,
      d = !0,
      v = r & Jfe ? new Tu() : void 0;
    for (o.set(e, t), o.set(t, e); ++f < s; ) {
      var p = e[f],
        m = t[f];
      if (n) var g = i ? n(m, p, f, t, e, o) : n(p, m, f, e, t, o);
      if (g !== void 0) {
        if (g) continue;
        d = !1;
        break;
      }
      if (v) {
        if (
          !qfe(t, function (y, b) {
            if (!Xfe(v, b) && (p === y || a(p, y, r, n, o))) return v.push(b);
          })
        ) {
          d = !1;
          break;
        }
      } else if (!(p === m || a(p, m, r, n, o))) {
        d = !1;
        break;
      }
    }
    return o.delete(e), o.delete(t), d;
  }
  function Qfe(e) {
    var t = -1,
      r = Array(e.size);
    return (
      e.forEach(function (n, a) {
        r[++t] = [a, n];
      }),
      r
    );
  }
  function ede(e) {
    var t = -1,
      r = Array(e.size);
    return (
      e.forEach(function (n) {
        r[++t] = n;
      }),
      r
    );
  }
  var tde = 1,
    rde = 2,
    nde = "[object Boolean]",
    ade = "[object Date]",
    ode = "[object Error]",
    ide = "[object Map]",
    sde = "[object Number]",
    cde = "[object RegExp]",
    lde = "[object Set]",
    ude = "[object String]",
    fde = "[object Symbol]",
    dde = "[object ArrayBuffer]",
    hde = "[object DataView]",
    c2 = Dn ? Dn.prototype : void 0,
    iv = c2 ? c2.valueOf : void 0;
  function vde(e, t, r, n, a, o, i) {
    switch (r) {
      case hde:
        if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
        (e = e.buffer), (t = t.buffer);
      case dde:
        return !(e.byteLength != t.byteLength || !o(new Su(e), new Su(t)));
      case nde:
      case ade:
      case sde:
        return zs(+e, +t);
      case ode:
        return e.name == t.name && e.message == t.message;
      case cde:
      case ude:
        return e == t + "";
      case ide:
        var s = Qfe;
      case lde:
        var c = n & tde;
        if ((s || (s = ede), e.size != t.size && !c)) return !1;
        var l = i.get(e);
        if (l) return l == t;
        (n |= rde), i.set(e, t);
        var u = e6(s(e), s(t), n, a, o, i);
        return i.delete(e), u;
      case fde:
        if (iv) return iv.call(e) == iv.call(t);
    }
    return !1;
  }
  function pde(e, t) {
    for (var r = -1, n = t.length, a = e.length; ++r < n; ) e[a + r] = t[r];
    return e;
  }
  function mde(e, t, r) {
    var n = t(e);
    return Zt(e) ? n : pde(n, r(e));
  }
  function gde(e, t) {
    for (var r = -1, n = e == null ? 0 : e.length, a = 0, o = []; ++r < n; ) {
      var i = e[r];
      t(i, r, e) && (o[a++] = i);
    }
    return o;
  }
  function yde() {
    return [];
  }
  var bde = Object.prototype,
    $de = bde.propertyIsEnumerable,
    l2 = Object.getOwnPropertySymbols,
    wde = l2
      ? function (e) {
          return e == null
            ? []
            : ((e = Object(e)),
              gde(l2(e), function (t) {
                return $de.call(e, t);
              }));
        }
      : yde,
    Sde = wde,
    Ede = H7(Object.keys, Object),
    xde = Ede,
    Tde = Object.prototype,
    Cde = Tde.hasOwnProperty;
  function Ode(e) {
    if (!oy(e)) return xde(e);
    var t = [];
    for (var r in Object(e)) Cde.call(e, r) && r != "constructor" && t.push(r);
    return t;
  }
  function _de(e) {
    return rd(e) ? X7(e) : Ode(e);
  }
  function u2(e) {
    return mde(e, _de, Sde);
  }
  var Pde = 1,
    Ide = Object.prototype,
    Ade = Ide.hasOwnProperty;
  function Rde(e, t, r, n, a, o) {
    var i = r & Pde,
      s = u2(e),
      c = s.length,
      l = u2(t),
      u = l.length;
    if (c != u && !i) return !1;
    for (var f = c; f--; ) {
      var d = s[f];
      if (!(i ? d in t : Ade.call(t, d))) return !1;
    }
    var v = o.get(e),
      p = o.get(t);
    if (v && p) return v == t && p == e;
    var m = !0;
    o.set(e, t), o.set(t, e);
    for (var g = i; ++f < c; ) {
      d = s[f];
      var y = e[d],
        b = t[d];
      if (n) var $ = i ? n(b, y, d, t, e, o) : n(y, b, d, e, t, o);
      if (!($ === void 0 ? y === b || a(y, b, r, n, o) : $)) {
        m = !1;
        break;
      }
      g || (g = d == "constructor");
    }
    if (m && !g) {
      var S = e.constructor,
        A = t.constructor;
      S != A && "constructor" in e && "constructor" in t && !(typeof S == "function" && S instanceof S && typeof A == "function" && A instanceof A) && (m = !1);
    }
    return o.delete(e), o.delete(t), m;
  }
  var Mde = ja(jr, "DataView"),
    Cm = Mde,
    Dde = ja(jr, "Promise"),
    Om = Dde,
    Nde = ja(jr, "Set"),
    _m = Nde,
    kde = ja(jr, "WeakMap"),
    Pm = kde,
    f2 = "[object Map]",
    Lde = "[object Object]",
    d2 = "[object Promise]",
    h2 = "[object Set]",
    v2 = "[object WeakMap]",
    p2 = "[object DataView]",
    Fde = Fa(Cm),
    jde = Fa(us),
    Bde = Fa(Om),
    Ude = Fa(_m),
    Wde = Fa(Pm),
    Qn = Un;
  ((Cm && Qn(new Cm(new ArrayBuffer(1))) != p2) || (us && Qn(new us()) != f2) || (Om && Qn(Om.resolve()) != d2) || (_m && Qn(new _m()) != h2) || (Pm && Qn(new Pm()) != v2)) &&
    (Qn = function (e) {
      var t = Un(e),
        r = t == Lde ? e.constructor : void 0,
        n = r ? Fa(r) : "";
      if (n)
        switch (n) {
          case Fde:
            return p2;
          case jde:
            return f2;
          case Bde:
            return d2;
          case Ude:
            return h2;
          case Wde:
            return v2;
        }
      return t;
    });
  var m2 = Qn,
    Hde = 1,
    g2 = "[object Arguments]",
    y2 = "[object Array]",
    kc = "[object Object]",
    zde = Object.prototype,
    b2 = zde.hasOwnProperty;
  function Vde(e, t, r, n, a, o) {
    var i = Zt(e),
      s = Zt(t),
      c = i ? y2 : m2(e),
      l = s ? y2 : m2(t);
    (c = c == g2 ? kc : c), (l = l == g2 ? kc : l);
    var u = c == kc,
      f = l == kc,
      d = c == l;
    if (d && xu(e)) {
      if (!xu(t)) return !1;
      (i = !0), (u = !1);
    }
    if (d && !u) return o || (o = new Kr()), i || sy(e) ? e6(e, t, r, n, a, o) : vde(e, t, c, r, n, a, o);
    if (!(r & Hde)) {
      var v = u && b2.call(e, "__wrapped__"),
        p = f && b2.call(t, "__wrapped__");
      if (v || p) {
        var m = v ? e.value() : e,
          g = p ? t.value() : t;
        return o || (o = new Kr()), a(m, g, r, n, o);
      }
    }
    return d ? (o || (o = new Kr()), Rde(e, t, r, n, a, o)) : !1;
  }
  function t6(e, t, r, n, a) {
    return e === t ? !0 : e == null || t == null || (!nn(e) && !nn(t)) ? e !== e && t !== t : Vde(e, t, r, n, t6, a);
  }
  function r6(e, t) {
    return t6(e, t);
  }
  var Gde = Object.prototype,
    Yde = Gde.hasOwnProperty;
  function Kde(e, t) {
    return e != null && Yde.call(e, t);
  }
  var qde = "[object Symbol]";
  function cy(e) {
    return typeof e == "symbol" || (nn(e) && Un(e) == qde);
  }
  var Xde = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    Zde = /^\w*$/;
  function Jde(e, t) {
    if (Zt(e)) return !1;
    var r = typeof e;
    return r == "number" || r == "symbol" || r == "boolean" || e == null || cy(e) ? !0 : Zde.test(e) || !Xde.test(e) || (t != null && e in Object(t));
  }
  var Qde = "Expected a function";
  function ly(e, t) {
    if (typeof e != "function" || (t != null && typeof t != "function")) throw new TypeError(Qde);
    var r = function () {
      var n = arguments,
        a = t ? t.apply(this, n) : n[0],
        o = r.cache;
      if (o.has(a)) return o.get(a);
      var i = e.apply(this, n);
      return (r.cache = o.set(a, i) || o), i;
    };
    return (r.cache = new (ly.Cache || vn)()), r;
  }
  ly.Cache = vn;
  var ehe = 500;
  function the(e) {
    var t = ly(e, function (n) {
        return r.size === ehe && r.clear(), n;
      }),
      r = t.cache;
    return t;
  }
  var rhe = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    nhe = /\\(\\)?/g,
    ahe = the(function (e) {
      var t = [];
      return (
        e.charCodeAt(0) === 46 && t.push(""),
        e.replace(rhe, function (r, n, a, o) {
          t.push(a ? o.replace(nhe, "$1") : n || r);
        }),
        t
      );
    }),
    ohe = ahe;
  function ihe(e, t) {
    for (var r = -1, n = e == null ? 0 : e.length, a = Array(n); ++r < n; ) a[r] = t(e[r], r, e);
    return a;
  }
  var she = 1 / 0,
    $2 = Dn ? Dn.prototype : void 0,
    w2 = $2 ? $2.toString : void 0;
  function n6(e) {
    if (typeof e == "string") return e;
    if (Zt(e)) return ihe(e, n6) + "";
    if (cy(e)) return w2 ? w2.call(e) : "";
    var t = e + "";
    return t == "0" && 1 / e == -she ? "-0" : t;
  }
  function che(e) {
    return e == null ? "" : n6(e);
  }
  function uy(e, t) {
    return Zt(e) ? e : Jde(e, t) ? [e] : ohe(che(e));
  }
  var lhe = 1 / 0;
  function fy(e) {
    if (typeof e == "string" || cy(e)) return e;
    var t = e + "";
    return t == "0" && 1 / e == -lhe ? "-0" : t;
  }
  function uhe(e, t, r) {
    t = uy(t, e);
    for (var n = -1, a = t.length, o = !1; ++n < a; ) {
      var i = fy(t[n]);
      if (!(o = e != null && r(e, i))) break;
      e = e[i];
    }
    return o || ++n != a ? o : ((a = e == null ? 0 : e.length), !!a && iy(a) && nd(i, a) && (Zt(e) || Eu(e)));
  }
  function S2(e, t) {
    return e != null && uhe(e, t, Kde);
  }
  function fhe(e, t) {
    t = uy(t, e);
    for (var r = 0, n = t.length; e != null && r < n; ) e = e[fy(t[r++])];
    return r && r == n ? e : void 0;
  }
  function Lc(e, t, r) {
    var n = e == null ? void 0 : fhe(e, t);
    return n === void 0 ? r : n;
  }
  function dhe(e, t, r, n) {
    if (!rn(e)) return e;
    t = uy(t, e);
    for (var a = -1, o = t.length, i = o - 1, s = e; s != null && ++a < o; ) {
      var c = fy(t[a]),
        l = r;
      if (c === "__proto__" || c === "constructor" || c === "prototype") return e;
      if (a != i) {
        var u = s[c];
        (l = n ? n(u, c, s) : void 0), l === void 0 && (l = rn(u) ? u : nd(t[a + 1]) ? [] : {});
      }
      q7(s, c, l), (s = s[c]);
    }
    return e;
  }
  function E2(e, t, r) {
    return e == null ? e : dhe(e, t, r);
  }
  var hhe = "[object String]";
  function vhe(e) {
    return typeof e == "string" || (!Zt(e) && nn(e) && Un(e) == hhe);
  }
  var phe = {
      range: function (t) {
        return Math.max(+t, 1);
      },
      "date.highlight": function (t) {
        return zf(t);
      },
      "subDomain.label": function (t) {
        return (vhe(t) && t !== "") || Us(t) ? t : null;
      },
    },
    mhe = (function () {
      function e() {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : phe;
        bt(this, e),
          (this.preProcessors = t),
          (this.options = {
            itemSelector: Jae,
            range: Zae,
            domain: {
              type: zae,
              gutter: 4,
              padding: [0, 0, 0, 0],
              dynamicDimension: !0,
              sort: "asc",
              label: { text: void 0, position: "bottom", textAlign: "middle", offset: { x: 0, y: 0 }, rotate: null, width: 100, height: 25 },
            },
            subDomain: { type: Vae, width: Gae, height: Yae, gutter: Kae, radius: qae, label: null, color: void 0, sort: "asc" },
            date: { start: new Date(), min: void 0, max: void 0, highlight: [], locale: eoe, timezone: void 0 },
            verticalOrientation: !1,
            data: { source: "", type: "json", requestInit: {}, x: "", y: "", groupY: "sum", defaultValue: null },
            scale: void 0,
            animationDuration: Xae,
            theme: Qae,
            x: { domainHorizontalLabelWidth: 0, domainVerticalLabelHeight: 0 },
          });
      }
      return (
        $t(e, [
          {
            key: "set",
            value: function (r, n) {
              return !S2(this.options, r) || r6(Lc(this.options, r), n) ? !1 : (E2(this.options, r, S2(this.preProcessors, r) ? Lc(this.preProcessors, r)(n) : n), !0);
            },
          },
          {
            key: "init",
            value: function (r) {
              var n = this;
              this.options = Object.assign(
                {},
                Vfe(this.options, r, function (o, i) {
                  return Array.isArray(i) ? i : void 0;
                })
              );
              var a = this.options;
              Object.keys(this.preProcessors).forEach(function (o) {
                E2(a, o, Lc(n.preProcessors, o)(Lc(a, o)));
              }),
                typeof a.scale > "u" && this.initScale(),
                (a.x.domainVerticalLabelHeight = a.domain.label.height),
                a.domain.label.position === "top" || a.domain.label.position === "bottom"
                  ? (a.x.domainHorizontalLabelWidth = 0)
                  : ((a.x.domainVerticalLabelHeight = 0), (a.x.domainHorizontalLabelWidth = a.domain.label.width)),
                (a.domain.label.text === null || a.domain.label.text === "") && ((a.x.domainVerticalLabelHeight = 0), (a.x.domainHorizontalLabelWidth = 0));
            },
          },
          {
            key: "initScale",
            value: function () {
              this.options.scale = { color: { scheme: roe, type: noe, domain: aoe } };
            },
          },
        ]),
        e
      );
    })(),
    ghe = Tt,
    yhe = function () {
      var e = ghe(this),
        t = "";
      return (
        e.hasIndices && (t += "d"),
        e.global && (t += "g"),
        e.ignoreCase && (t += "i"),
        e.multiline && (t += "m"),
        e.dotAll && (t += "s"),
        e.unicode && (t += "u"),
        e.unicodeSets && (t += "v"),
        e.sticky && (t += "y"),
        t
      );
    },
    dy = be,
    bhe = Fe,
    hy = bhe.RegExp,
    vy = dy(function () {
      var e = hy("a", "y");
      return (e.lastIndex = 2), e.exec("abcd") !== null;
    }),
    $he =
      vy ||
      dy(function () {
        return !hy("a", "y").sticky;
      }),
    whe =
      vy ||
      dy(function () {
        var e = hy("^r", "gy");
        return (e.lastIndex = 2), e.exec("str") !== null;
      }),
    She = { BROKEN_CARET: whe, MISSED_STICKY: $he, UNSUPPORTED_Y: vy },
    Ehe = be,
    xhe = Fe,
    The = xhe.RegExp,
    Che = Ehe(function () {
      var e = The(".", "s");
      return !(
        e.dotAll &&
        e.test(`
`) &&
        e.flags === "s"
      );
    }),
    Ohe = be,
    _he = Fe,
    Phe = _he.RegExp,
    Ihe = Ohe(function () {
      var e = Phe("(?<a>b)", "g");
      return e.exec("b").groups.a !== "b" || "b".replace(e, "$<a>c") !== "bc";
    }),
    mo = ut,
    ad = xe,
    Ahe = Bn,
    Rhe = yhe,
    Mhe = She,
    Dhe = v0,
    Nhe = Uf,
    khe = ka.get,
    Lhe = Che,
    Fhe = Ihe,
    jhe = Dhe("native-string-replace", String.prototype.replace),
    Cu = RegExp.prototype.exec,
    Im = Cu,
    Bhe = ad("".charAt),
    Uhe = ad("".indexOf),
    Whe = ad("".replace),
    sv = ad("".slice),
    Am = (function () {
      var e = /a/,
        t = /b*/g;
      return mo(Cu, e, "a"), mo(Cu, t, "a"), e.lastIndex !== 0 || t.lastIndex !== 0;
    })(),
    a6 = Mhe.BROKEN_CARET,
    Rm = /()??/.exec("")[1] !== void 0,
    Hhe = Am || Rm || a6 || Lhe || Fhe;
  Hhe &&
    (Im = function (t) {
      var r = this,
        n = khe(r),
        a = Ahe(t),
        o = n.raw,
        i,
        s,
        c,
        l,
        u,
        f,
        d;
      if (o) return (o.lastIndex = r.lastIndex), (i = mo(Im, o, a)), (r.lastIndex = o.lastIndex), i;
      var v = n.groups,
        p = a6 && r.sticky,
        m = mo(Rhe, r),
        g = r.source,
        y = 0,
        b = a;
      if (
        (p &&
          ((m = Whe(m, "y", "")),
          Uhe(m, "g") === -1 && (m += "g"),
          (b = sv(a, r.lastIndex)),
          r.lastIndex > 0 &&
            (!r.multiline ||
              (r.multiline &&
                Bhe(a, r.lastIndex - 1) !==
                  `
`)) &&
            ((g = "(?: " + g + ")"), (b = " " + b), y++),
          (s = new RegExp("^(?:" + g + ")", m))),
        Rm && (s = new RegExp("^" + g + "$(?!\\s)", m)),
        Am && (c = r.lastIndex),
        (l = mo(Cu, p ? s : r, b)),
        p
          ? l
            ? ((l.input = sv(l.input, y)), (l[0] = sv(l[0], y)), (l.index = r.lastIndex), (r.lastIndex += l[0].length))
            : (r.lastIndex = 0)
          : Am && l && (r.lastIndex = r.global ? l.index + l[0].length : c),
        Rm &&
          l &&
          l.length > 1 &&
          mo(jhe, l[0], s, function () {
            for (u = 1; u < arguments.length - 2; u++) arguments[u] === void 0 && (l[u] = void 0);
          }),
        l && v)
      )
        for (l.groups = f = Nhe(null), u = 0; u < v.length; u++) (d = v[u]), (f[d[0]] = l[d[1]]);
      return l;
    });
  var py = Im,
    zhe = _e,
    x2 = py;
  zhe({ target: "RegExp", proto: !0, forced: /./.exec !== x2 }, { exec: x2 });
  var T2 = I0,
    C2 = ln,
    Vhe = py,
    O2 = be,
    o6 = je,
    Ghe = ei,
    Yhe = o6("species"),
    cv = RegExp.prototype,
    Khe = function (e, t, r, n) {
      var a = o6(e),
        o = !O2(function () {
          var l = {};
          return (
            (l[a] = function () {
              return 7;
            }),
            ""[e](l) !== 7
          );
        }),
        i =
          o &&
          !O2(function () {
            var l = !1,
              u = /a/;
            return (
              e === "split" &&
                ((u = {}),
                (u.constructor = {}),
                (u.constructor[Yhe] = function () {
                  return u;
                }),
                (u.flags = ""),
                (u[a] = /./[a])),
              (u.exec = function () {
                return (l = !0), null;
              }),
              u[a](""),
              !l
            );
          });
      if (!o || !i || r) {
        var s = T2(/./[a]),
          c = t(a, ""[e], function (l, u, f, d, v) {
            var p = T2(l),
              m = u.exec;
            return m === Vhe || m === cv.exec ? (o && !v ? { done: !0, value: s(u, f, d) } : { done: !0, value: p(f, u, d) }) : { done: !1 };
          });
        C2(String.prototype, e, c[0]), C2(cv, a, c[1]);
      }
      n && Ghe(cv[a], "sham", !0);
    },
    qhe = A3.charAt,
    Xhe = function (e, t, r) {
      return t + (r ? qhe(e, t).length : 1);
    },
    my = xe,
    Zhe = Lr,
    Jhe = Math.floor,
    lv = my("".charAt),
    Qhe = my("".replace),
    uv = my("".slice),
    eve = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
    tve = /\$([$&'`]|\d{1,2})/g,
    rve = function (e, t, r, n, a, o) {
      var i = r + e.length,
        s = n.length,
        c = tve;
      return (
        a !== void 0 && ((a = Zhe(a)), (c = eve)),
        Qhe(o, c, function (l, u) {
          var f;
          switch (lv(u, 0)) {
            case "$":
              return "$";
            case "&":
              return e;
            case "`":
              return uv(t, 0, r);
            case "'":
              return uv(t, i);
            case "<":
              f = a[uv(u, 1, -1)];
              break;
            default:
              var d = +u;
              if (d === 0) return l;
              if (d > s) {
                var v = Jhe(d / 10);
                return v === 0 ? l : v <= s ? (n[v - 1] === void 0 ? lv(u, 1) : n[v - 1] + lv(u, 1)) : l;
              }
              f = n[d - 1];
          }
          return f === void 0 ? "" : f;
        })
      );
    },
    _2 = ut,
    nve = Tt,
    ave = Ne,
    ove = un,
    ive = py,
    sve = TypeError,
    cve = function (e, t) {
      var r = e.exec;
      if (ave(r)) {
        var n = _2(r, e, t);
        return n !== null && nve(n), n;
      }
      if (ove(e) === "RegExp") return _2(ive, e, t);
      throw new sve("RegExp#exec called on incompatible receiver");
    },
    lve = q5,
    P2 = ut,
    od = xe,
    uve = Khe,
    fve = be,
    dve = Tt,
    hve = Ne,
    vve = jn,
    pve = Rf,
    mve = E0,
    oo = Bn,
    gve = Ma,
    yve = Xhe,
    bve = xf,
    $ve = rve,
    wve = cve,
    Sve = je,
    Mm = Sve("replace"),
    Eve = Math.max,
    xve = Math.min,
    Tve = od([].concat),
    fv = od([].push),
    I2 = od("".indexOf),
    A2 = od("".slice),
    Cve = function (e) {
      return e === void 0 ? e : String(e);
    },
    Ove = (function () {
      return "a".replace(/./, "$0") === "$0";
    })(),
    R2 = (function () {
      return /./[Mm] ? /./[Mm]("a", "$0") === "" : !1;
    })(),
    _ve = !fve(function () {
      var e = /./;
      return (
        (e.exec = function () {
          var t = [];
          return (t.groups = { a: "7" }), t;
        }),
        "".replace(e, "$<a>") !== "7"
      );
    });
  uve(
    "replace",
    function (e, t, r) {
      var n = R2 ? "$" : "$0";
      return [
        function (o, i) {
          var s = gve(this),
            c = vve(o) ? void 0 : bve(o, Mm);
          return c ? P2(c, o, s, i) : P2(t, oo(s), o, i);
        },
        function (a, o) {
          var i = dve(this),
            s = oo(a);
          if (typeof o == "string" && I2(o, n) === -1 && I2(o, "$<") === -1) {
            var c = r(t, i, s, o);
            if (c.done) return c.value;
          }
          var l = hve(o);
          l || (o = oo(o));
          var u = i.global,
            f;
          u && ((f = i.unicode), (i.lastIndex = 0));
          for (var d = [], v; (v = wve(i, s)), !(v === null || (fv(d, v), !u)); ) {
            var p = oo(v[0]);
            p === "" && (i.lastIndex = yve(s, mve(i.lastIndex), f));
          }
          for (var m = "", g = 0, y = 0; y < d.length; y++) {
            v = d[y];
            for (var b = oo(v[0]), $ = Eve(xve(pve(v.index), s.length), 0), S = [], A, P = 1; P < v.length; P++) fv(S, Cve(v[P]));
            var M = v.groups;
            if (l) {
              var T = Tve([b], S, $, s);
              M !== void 0 && fv(T, M), (A = oo(lve(o, void 0, T)));
            } else A = $ve(b, s, $, S, M, o);
            $ >= g && ((m += A2(s, g, $) + A), (g = $ + b.length));
          }
          return m + A2(s, g);
        },
      ];
    },
    !_ve || !Ove || R2
  );
  var Dm,
    i6,
    Pve = (function () {
      function e(t) {
        bt(this, e), Dm.add(this), (this.calendar = t);
      }
      return (
        $t(e, [
          {
            key: "getDatas",
            value: function (r, n, a) {
              return G0(
                this,
                void 0,
                void 0,
                ya().mark(function o() {
                  var i;
                  return ya().wrap(
                    function (c) {
                      for (;;)
                        switch ((c.prev = c.next)) {
                          case 0:
                            if (!(typeof r == "string" && r.length > 0)) {
                              c.next = 2;
                              break;
                            }
                            return c.abrupt("return", de(this, Dm, "m", i6).call(this, r, n, a));
                          case 2:
                            return (
                              (i = []),
                              Array.isArray(r) && (i = r),
                              c.abrupt(
                                "return",
                                new Promise(function (l) {
                                  l(i);
                                })
                              )
                            );
                          case 5:
                          case "end":
                            return c.stop();
                        }
                    },
                    o,
                    this
                  );
                })
              );
            },
          },
          {
            key: "parseURI",
            value: function (r, n, a) {
              var o = this,
                i = r.replace(/\{\{start=(.*?)\}\}/g, function (s, c) {
                  return o.calendar.dateHelper.date(n).format(c);
                });
              return (
                (i = i.replace(/\{\{end=(.*?)\}\}/g, function (s, c) {
                  return o.calendar.dateHelper.date(a).format(c);
                })),
                i
              );
            },
          },
        ]),
        e
      );
    })();
  (Dm = new WeakSet()),
    (i6 = function (t, r, n) {
      var a = this.calendar.options.options.data,
        o = a.type,
        i = a.requestInit,
        s = this.parseURI(t, r, n);
      switch (o) {
        case "json":
          return xG(s, i);
        case "csv":
          return SG(s, i);
        case "tsv":
          return wG("	", s, i);
        case "txt":
          return n0(s, i);
        default:
          return new Promise(function (c) {
            c([]);
          });
      }
    });
  var Ive = At,
    Ave = Tf.EXISTS,
    s6 = xe,
    Rve = _0,
    c6 = Function.prototype,
    Mve = s6(c6.toString),
    l6 = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,
    Dve = s6(l6.exec),
    Nve = "name";
  Ive &&
    !Ave &&
    Rve(c6, Nve, {
      configurable: !0,
      get: function () {
        try {
          return Dve(l6, Mve(this))[1];
        } catch {
          return "";
        }
      },
    });
  var u6 = { exports: {} };
  (function (e, t) {
    (function (r, n) {
      e.exports = n();
    })(rt, function () {
      var r = 1e3,
        n = 6e4,
        a = 36e5,
        o = "millisecond",
        i = "second",
        s = "minute",
        c = "hour",
        l = "day",
        u = "week",
        f = "month",
        d = "quarter",
        v = "year",
        p = "date",
        m = "Invalid Date",
        g = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
        y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
        b = {
          name: "en",
          weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
          months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
          ordinal: function (w) {
            var R = ["th", "st", "nd", "rd"],
              I = w % 100;
            return "[" + w + (R[(I - 20) % 10] || R[I] || R[0]) + "]";
          },
        },
        $ = function (w, R, I) {
          var N = String(w);
          return !N || N.length >= R ? w : "" + Array(R + 1 - N.length).join(I) + w;
        },
        S = {
          s: $,
          z: function (w) {
            var R = -w.utcOffset(),
              I = Math.abs(R),
              N = Math.floor(I / 60),
              B = I % 60;
            return (R <= 0 ? "+" : "-") + $(N, 2, "0") + ":" + $(B, 2, "0");
          },
          m: function w(R, I) {
            if (R.date() < I.date()) return -w(I, R);
            var N = 12 * (I.year() - R.year()) + (I.month() - R.month()),
              B = R.clone().add(N, f),
              W = I - B < 0,
              C = R.clone().add(N + (W ? -1 : 1), f);
            return +(-(N + (I - B) / (W ? B - C : C - B)) || 0);
          },
          a: function (w) {
            return w < 0 ? Math.ceil(w) || 0 : Math.floor(w);
          },
          p: function (w) {
            return (
              { M: f, y: v, w: u, d: l, D: p, h: c, m: s, s: i, ms: o, Q: d }[w] ||
              String(w || "")
                .toLowerCase()
                .replace(/s$/, "")
            );
          },
          u: function (w) {
            return w === void 0;
          },
        },
        A = "en",
        P = {};
      P[A] = b;
      var M = "$isDayjsObject",
        T = function (w) {
          return w instanceof _ || !(!w || !w[M]);
        },
        F = function w(R, I, N) {
          var B;
          if (!R) return A;
          if (typeof R == "string") {
            var W = R.toLowerCase();
            P[W] && (B = W), I && ((P[W] = I), (B = W));
            var C = R.split("-");
            if (!B && C.length > 1) return w(C[0]);
          } else {
            var E = R.name;
            (P[E] = R), (B = E);
          }
          return !N && B && (A = B), B || (!N && A);
        },
        k = function (w, R) {
          if (T(w)) return w.clone();
          var I = typeof R == "object" ? R : {};
          return (I.date = w), (I.args = arguments), new _(I);
        },
        D = S;
      (D.l = F),
        (D.i = T),
        (D.w = function (w, R) {
          return k(w, { locale: R.$L, utc: R.$u, x: R.$x, $offset: R.$offset });
        });
      var _ = (function () {
          function w(I) {
            (this.$L = F(I.locale, null, !0)), this.parse(I), (this.$x = this.$x || I.x || {}), (this[M] = !0);
          }
          var R = w.prototype;
          return (
            (R.parse = function (I) {
              (this.$d = (function (N) {
                var B = N.date,
                  W = N.utc;
                if (B === null) return new Date(NaN);
                if (D.u(B)) return new Date();
                if (B instanceof Date) return new Date(B);
                if (typeof B == "string" && !/Z$/i.test(B)) {
                  var C = B.match(g);
                  if (C) {
                    var E = C[2] - 1 || 0,
                      V = (C[7] || "0").substring(0, 3);
                    return W ? new Date(Date.UTC(C[1], E, C[3] || 1, C[4] || 0, C[5] || 0, C[6] || 0, V)) : new Date(C[1], E, C[3] || 1, C[4] || 0, C[5] || 0, C[6] || 0, V);
                  }
                }
                return new Date(B);
              })(I)),
                this.init();
            }),
            (R.init = function () {
              var I = this.$d;
              (this.$y = I.getFullYear()),
                (this.$M = I.getMonth()),
                (this.$D = I.getDate()),
                (this.$W = I.getDay()),
                (this.$H = I.getHours()),
                (this.$m = I.getMinutes()),
                (this.$s = I.getSeconds()),
                (this.$ms = I.getMilliseconds());
            }),
            (R.$utils = function () {
              return D;
            }),
            (R.isValid = function () {
              return this.$d.toString() !== m;
            }),
            (R.isSame = function (I, N) {
              var B = k(I);
              return this.startOf(N) <= B && B <= this.endOf(N);
            }),
            (R.isAfter = function (I, N) {
              return k(I) < this.startOf(N);
            }),
            (R.isBefore = function (I, N) {
              return this.endOf(N) < k(I);
            }),
            (R.$g = function (I, N, B) {
              return D.u(I) ? this[N] : this.set(B, I);
            }),
            (R.unix = function () {
              return Math.floor(this.valueOf() / 1e3);
            }),
            (R.valueOf = function () {
              return this.$d.getTime();
            }),
            (R.startOf = function (I, N) {
              var B = this,
                W = !!D.u(N) || N,
                C = D.p(I),
                E = function (H, G) {
                  var Y = D.w(B.$u ? Date.UTC(B.$y, G, H) : new Date(B.$y, G, H), B);
                  return W ? Y : Y.endOf(l);
                },
                V = function (H, G) {
                  return D.w(B.toDate()[H].apply(B.toDate("s"), (W ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(G)), B);
                },
                X = this.$W,
                q = this.$M,
                K = this.$D,
                te = "set" + (this.$u ? "UTC" : "");
              switch (C) {
                case v:
                  return W ? E(1, 0) : E(31, 11);
                case f:
                  return W ? E(1, q) : E(0, q + 1);
                case u:
                  var z = this.$locale().weekStart || 0,
                    J = (X < z ? X + 7 : X) - z;
                  return E(W ? K - J : K + (6 - J), q);
                case l:
                case p:
                  return V(te + "Hours", 0);
                case c:
                  return V(te + "Minutes", 1);
                case s:
                  return V(te + "Seconds", 2);
                case i:
                  return V(te + "Milliseconds", 3);
                default:
                  return this.clone();
              }
            }),
            (R.endOf = function (I) {
              return this.startOf(I, !1);
            }),
            (R.$set = function (I, N) {
              var B,
                W = D.p(I),
                C = "set" + (this.$u ? "UTC" : ""),
                E = ((B = {}),
                (B[l] = C + "Date"),
                (B[p] = C + "Date"),
                (B[f] = C + "Month"),
                (B[v] = C + "FullYear"),
                (B[c] = C + "Hours"),
                (B[s] = C + "Minutes"),
                (B[i] = C + "Seconds"),
                (B[o] = C + "Milliseconds"),
                B)[W],
                V = W === l ? this.$D + (N - this.$W) : N;
              if (W === f || W === v) {
                var X = this.clone().set(p, 1);
                X.$d[E](V), X.init(), (this.$d = X.set(p, Math.min(this.$D, X.daysInMonth())).$d);
              } else E && this.$d[E](V);
              return this.init(), this;
            }),
            (R.set = function (I, N) {
              return this.clone().$set(I, N);
            }),
            (R.get = function (I) {
              return this[D.p(I)]();
            }),
            (R.add = function (I, N) {
              var B,
                W = this;
              I = Number(I);
              var C = D.p(N),
                E = function (q) {
                  var K = k(W);
                  return D.w(K.date(K.date() + Math.round(q * I)), W);
                };
              if (C === f) return this.set(f, this.$M + I);
              if (C === v) return this.set(v, this.$y + I);
              if (C === l) return E(1);
              if (C === u) return E(7);
              var V = ((B = {}), (B[s] = n), (B[c] = a), (B[i] = r), B)[C] || 1,
                X = this.$d.getTime() + I * V;
              return D.w(X, this);
            }),
            (R.subtract = function (I, N) {
              return this.add(-1 * I, N);
            }),
            (R.format = function (I) {
              var N = this,
                B = this.$locale();
              if (!this.isValid()) return B.invalidDate || m;
              var W = I || "YYYY-MM-DDTHH:mm:ssZ",
                C = D.z(this),
                E = this.$H,
                V = this.$m,
                X = this.$M,
                q = B.weekdays,
                K = B.months,
                te = B.meridiem,
                z = function (G, Y, L, ne) {
                  return (G && (G[Y] || G(N, W))) || L[Y].slice(0, ne);
                },
                J = function (G) {
                  return D.s(E % 12 || 12, G, "0");
                },
                H =
                  te ||
                  function (G, Y, L) {
                    var ne = G < 12 ? "AM" : "PM";
                    return L ? ne.toLowerCase() : ne;
                  };
              return W.replace(y, function (G, Y) {
                return (
                  Y ||
                  (function (L) {
                    switch (L) {
                      case "YY":
                        return String(N.$y).slice(-2);
                      case "YYYY":
                        return D.s(N.$y, 4, "0");
                      case "M":
                        return X + 1;
                      case "MM":
                        return D.s(X + 1, 2, "0");
                      case "MMM":
                        return z(B.monthsShort, X, K, 3);
                      case "MMMM":
                        return z(K, X);
                      case "D":
                        return N.$D;
                      case "DD":
                        return D.s(N.$D, 2, "0");
                      case "d":
                        return String(N.$W);
                      case "dd":
                        return z(B.weekdaysMin, N.$W, q, 2);
                      case "ddd":
                        return z(B.weekdaysShort, N.$W, q, 3);
                      case "dddd":
                        return q[N.$W];
                      case "H":
                        return String(E);
                      case "HH":
                        return D.s(E, 2, "0");
                      case "h":
                        return J(1);
                      case "hh":
                        return J(2);
                      case "a":
                        return H(E, V, !0);
                      case "A":
                        return H(E, V, !1);
                      case "m":
                        return String(V);
                      case "mm":
                        return D.s(V, 2, "0");
                      case "s":
                        return String(N.$s);
                      case "ss":
                        return D.s(N.$s, 2, "0");
                      case "SSS":
                        return D.s(N.$ms, 3, "0");
                      case "Z":
                        return C;
                    }
                    return null;
                  })(G) ||
                  C.replace(":", "")
                );
              });
            }),
            (R.utcOffset = function () {
              return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
            }),
            (R.diff = function (I, N, B) {
              var W,
                C = this,
                E = D.p(N),
                V = k(I),
                X = (V.utcOffset() - this.utcOffset()) * n,
                q = this - V,
                K = function () {
                  return D.m(C, V);
                };
              switch (E) {
                case v:
                  W = K() / 12;
                  break;
                case f:
                  W = K();
                  break;
                case d:
                  W = K() / 3;
                  break;
                case u:
                  W = (q - X) / 6048e5;
                  break;
                case l:
                  W = (q - X) / 864e5;
                  break;
                case c:
                  W = q / a;
                  break;
                case s:
                  W = q / n;
                  break;
                case i:
                  W = q / r;
                  break;
                default:
                  W = q;
              }
              return B ? W : D.a(W);
            }),
            (R.daysInMonth = function () {
              return this.endOf(f).$D;
            }),
            (R.$locale = function () {
              return P[this.$L];
            }),
            (R.locale = function (I, N) {
              if (!I) return this.$L;
              var B = this.clone(),
                W = F(I, N, !0);
              return W && (B.$L = W), B;
            }),
            (R.clone = function () {
              return D.w(this.$d, this);
            }),
            (R.toDate = function () {
              return new Date(this.valueOf());
            }),
            (R.toJSON = function () {
              return this.isValid() ? this.toISOString() : null;
            }),
            (R.toISOString = function () {
              return this.$d.toISOString();
            }),
            (R.toString = function () {
              return this.$d.toUTCString();
            }),
            w
          );
        })(),
        O = _.prototype;
      return (
        (k.prototype = O),
        [
          ["$ms", o],
          ["$s", i],
          ["$m", s],
          ["$H", c],
          ["$W", l],
          ["$M", f],
          ["$y", v],
          ["$D", p],
        ].forEach(function (w) {
          O[w[1]] = function (R) {
            return this.$g(R, w[0], w[1]);
          };
        }),
        (k.extend = function (w, R) {
          return w.$i || (w(R, _, k), (w.$i = !0)), k;
        }),
        (k.locale = F),
        (k.isDayjs = T),
        (k.unix = function (w) {
          return k(1e3 * w);
        }),
        (k.en = P[A]),
        (k.Ls = P),
        (k.p = {}),
        k
      );
    });
  })(u6);
  var kve = u6.exports,
    Re = xt(kve),
    f6 = { exports: {} };
  (function (e, t) {
    (function (r, n) {
      e.exports = n();
    })(rt, function () {
      var r = "week",
        n = "year";
      return function (a, o, i) {
        var s = o.prototype;
        (s.week = function (c) {
          if ((c === void 0 && (c = null), c !== null)) return this.add(7 * (c - this.week()), "day");
          var l = this.$locale().yearStart || 1;
          if (this.month() === 11 && this.date() > 25) {
            var u = i(this).startOf(n).add(1, n).date(l),
              f = i(this).endOf(r);
            if (u.isBefore(f)) return 1;
          }
          var d = i(this).startOf(n).date(l).startOf(r).subtract(1, "millisecond"),
            v = this.diff(d, r, !0);
          return v < 0 ? i(this).startOf("week").week() : Math.ceil(v);
        }),
          (s.weeks = function (c) {
            return c === void 0 && (c = null), this.week(c);
          });
      };
    });
  })(f6);
  var Lve = f6.exports,
    Fve = xt(Lve),
    d6 = { exports: {} };
  (function (e, t) {
    (function (r, n) {
      e.exports = n();
    })(rt, function () {
      return function (r, n, a) {
        n.prototype.dayOfYear = function (o) {
          var i = Math.round((a(this).startOf("day") - a(this).startOf("year")) / 864e5) + 1;
          return o == null ? i : this.add(o - i, "day");
        };
      };
    });
  })(d6);
  var jve = d6.exports,
    Bve = xt(jve),
    h6 = { exports: {} };
  (function (e, t) {
    (function (r, n) {
      e.exports = n();
    })(rt, function () {
      return function (r, n) {
        n.prototype.weekday = function (a) {
          var o = this.$locale().weekStart || 0,
            i = this.$W,
            s = (i < o ? i + 7 : i) - o;
          return this.$utils().u(a) ? s : this.subtract(s, "day").add(a, "day");
        };
      };
    });
  })(h6);
  var Uve = h6.exports,
    Wve = xt(Uve),
    v6 = { exports: {} };
  (function (e, t) {
    (function (r, n) {
      e.exports = n();
    })(rt, function () {
      return function (r, n, a) {
        var o = function (i, s) {
          if (!s || !s.length || (s.length === 1 && !s[0]) || (s.length === 1 && Array.isArray(s[0]) && !s[0].length)) return null;
          var c;
          s.length === 1 && s[0].length > 0 && (s = s[0]),
            (c = (s = s.filter(function (u) {
              return u;
            }))[0]);
          for (var l = 1; l < s.length; l += 1) (s[l].isValid() && !s[l][i](c)) || (c = s[l]);
          return c;
        };
        (a.max = function () {
          var i = [].slice.call(arguments, 0);
          return o("isAfter", i);
        }),
          (a.min = function () {
            var i = [].slice.call(arguments, 0);
            return o("isBefore", i);
          });
      };
    });
  })(v6);
  var Hve = v6.exports,
    zve = xt(Hve),
    p6 = { exports: {} };
  (function (e, t) {
    (function (r, n) {
      e.exports = n();
    })(rt, function () {
      return function (r, n) {
        n.prototype.isoWeeksInYear = function () {
          var a = this.isLeapYear(),
            o = this.endOf("y").day();
          return o === 4 || (a && o === 5) ? 53 : 52;
        };
      };
    });
  })(p6);
  var Vve = p6.exports,
    Gve = xt(Vve),
    m6 = { exports: {} };
  (function (e, t) {
    (function (r, n) {
      e.exports = n();
    })(rt, function () {
      var r = "day";
      return function (n, a, o) {
        var i = function (l) {
            return l.add(4 - l.isoWeekday(), r);
          },
          s = a.prototype;
        (s.isoWeekYear = function () {
          return i(this).year();
        }),
          (s.isoWeek = function (l) {
            if (!this.$utils().u(l)) return this.add(7 * (l - this.isoWeek()), r);
            var u,
              f,
              d,
              v,
              p = i(this),
              m = ((u = this.isoWeekYear()), (f = this.$u), (d = (f ? o.utc : o)().year(u).startOf("year")), (v = 4 - d.isoWeekday()), d.isoWeekday() > 4 && (v += 7), d.add(v, r));
            return p.diff(m, "week") + 1;
          }),
          (s.isoWeekday = function (l) {
            return this.$utils().u(l) ? this.day() || 7 : this.day(this.day() % 7 ? l : l - 7);
          });
        var c = s.startOf;
        s.startOf = function (l, u) {
          var f = this.$utils(),
            d = !!f.u(u) || u;
          return f.p(l) === "isoweek"
            ? d
              ? this.date(this.date() - (this.isoWeekday() - 1)).startOf("day")
              : this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf("day")
            : c.bind(this)(l, u);
        };
      };
    });
  })(m6);
  var Yve = m6.exports,
    Kve = xt(Yve),
    g6 = { exports: {} };
  (function (e, t) {
    (function (r, n) {
      e.exports = n();
    })(rt, function () {
      return function (r, n) {
        n.prototype.isLeapYear = function () {
          return (this.$y % 4 == 0 && this.$y % 100 != 0) || this.$y % 400 == 0;
        };
      };
    });
  })(g6);
  var qve = g6.exports,
    Xve = xt(qve),
    y6 = { exports: {} };
  (function (e, t) {
    (function (r, n) {
      e.exports = n();
    })(rt, function () {
      return function (r, n) {
        var a = n.prototype,
          o = a.format;
        a.format = function (i) {
          var s = this,
            c = this.$locale();
          if (!this.isValid()) return o.bind(this)(i);
          var l = this.$utils(),
            u = (i || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, function (f) {
              switch (f) {
                case "Q":
                  return Math.ceil((s.$M + 1) / 3);
                case "Do":
                  return c.ordinal(s.$D);
                case "gggg":
                  return s.weekYear();
                case "GGGG":
                  return s.isoWeekYear();
                case "wo":
                  return c.ordinal(s.week(), "W");
                case "w":
                case "ww":
                  return l.s(s.week(), f === "w" ? 1 : 2, "0");
                case "W":
                case "WW":
                  return l.s(s.isoWeek(), f === "W" ? 1 : 2, "0");
                case "k":
                case "kk":
                  return l.s(String(s.$H === 0 ? 24 : s.$H), f === "k" ? 1 : 2, "0");
                case "X":
                  return Math.floor(s.$d.getTime() / 1e3);
                case "x":
                  return s.$d.getTime();
                case "z":
                  return "[" + s.offsetName() + "]";
                case "zzz":
                  return "[" + s.offsetName("long") + "]";
                default:
                  return f;
              }
            });
          return o.bind(this)(u);
        };
      };
    });
  })(y6);
  var Zve = y6.exports,
    Jve = xt(Zve),
    b6 = { exports: {} };
  (function (e, t) {
    (function (r, n) {
      e.exports = n();
    })(rt, function () {
      var r = "minute",
        n = /[+-]\d\d(?::?\d\d)?/g,
        a = /([+-]|\d\d)/g;
      return function (o, i, s) {
        var c = i.prototype;
        (s.utc = function (m) {
          var g = { date: m, utc: !0, args: arguments };
          return new i(g);
        }),
          (c.utc = function (m) {
            var g = s(this.toDate(), { locale: this.$L, utc: !0 });
            return m ? g.add(this.utcOffset(), r) : g;
          }),
          (c.local = function () {
            return s(this.toDate(), { locale: this.$L, utc: !1 });
          });
        var l = c.parse;
        c.parse = function (m) {
          m.utc && (this.$u = !0), this.$utils().u(m.$offset) || (this.$offset = m.$offset), l.call(this, m);
        };
        var u = c.init;
        c.init = function () {
          if (this.$u) {
            var m = this.$d;
            (this.$y = m.getUTCFullYear()),
              (this.$M = m.getUTCMonth()),
              (this.$D = m.getUTCDate()),
              (this.$W = m.getUTCDay()),
              (this.$H = m.getUTCHours()),
              (this.$m = m.getUTCMinutes()),
              (this.$s = m.getUTCSeconds()),
              (this.$ms = m.getUTCMilliseconds());
          } else u.call(this);
        };
        var f = c.utcOffset;
        c.utcOffset = function (m, g) {
          var y = this.$utils().u;
          if (y(m)) return this.$u ? 0 : y(this.$offset) ? f.call(this) : this.$offset;
          if (
            typeof m == "string" &&
            ((m = (function (A) {
              A === void 0 && (A = "");
              var P = A.match(n);
              if (!P) return null;
              var M = ("" + P[0]).match(a) || ["-", 0, 0],
                T = M[0],
                F = 60 * +M[1] + +M[2];
              return F === 0 ? 0 : T === "+" ? F : -F;
            })(m)),
            m === null)
          )
            return this;
          var b = Math.abs(m) <= 16 ? 60 * m : m,
            $ = this;
          if (g) return ($.$offset = b), ($.$u = m === 0), $;
          if (m !== 0) {
            var S = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
            (($ = this.local().add(b + S, r)).$offset = b), ($.$x.$localOffset = S);
          } else $ = this.utc();
          return $;
        };
        var d = c.format;
        (c.format = function (m) {
          var g = m || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
          return d.call(this, g);
        }),
          (c.valueOf = function () {
            var m = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
            return this.$d.valueOf() - 6e4 * m;
          }),
          (c.isUTC = function () {
            return !!this.$u;
          }),
          (c.toISOString = function () {
            return this.toDate().toISOString();
          }),
          (c.toString = function () {
            return this.toDate().toUTCString();
          });
        var v = c.toDate;
        c.toDate = function (m) {
          return m === "s" && this.$offset ? s(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : v.call(this);
        };
        var p = c.diff;
        c.diff = function (m, g, y) {
          if (m && this.$u === m.$u) return p.call(this, m, g, y);
          var b = this.local(),
            $ = s(m).local();
          return p.call(b, $, g, y);
        };
      };
    });
  })(b6);
  var Qve = b6.exports,
    epe = xt(Qve),
    $6 = { exports: {} };
  (function (e, t) {
    (function (r, n) {
      e.exports = n();
    })(rt, function () {
      var r = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 },
        n = {};
      return function (a, o, i) {
        var s,
          c = function (d, v, p) {
            p === void 0 && (p = {});
            var m = new Date(d),
              g = (function (y, b) {
                b === void 0 && (b = {});
                var $ = b.timeZoneName || "short",
                  S = y + "|" + $,
                  A = n[S];
                return (
                  A ||
                    ((A = new Intl.DateTimeFormat("en-US", {
                      hour12: !1,
                      timeZone: y,
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                      hour: "2-digit",
                      minute: "2-digit",
                      second: "2-digit",
                      timeZoneName: $,
                    })),
                    (n[S] = A)),
                  A
                );
              })(v, p);
            return g.formatToParts(m);
          },
          l = function (d, v) {
            for (var p = c(d, v), m = [], g = 0; g < p.length; g += 1) {
              var y = p[g],
                b = y.type,
                $ = y.value,
                S = r[b];
              S >= 0 && (m[S] = parseInt($, 10));
            }
            var A = m[3],
              P = A === 24 ? 0 : A,
              M = m[0] + "-" + m[1] + "-" + m[2] + " " + P + ":" + m[4] + ":" + m[5] + ":000",
              T = +d;
            return (i.utc(M).valueOf() - (T -= T % 1e3)) / 6e4;
          },
          u = o.prototype;
        (u.tz = function (d, v) {
          d === void 0 && (d = s);
          var p = this.utcOffset(),
            m = this.toDate(),
            g = m.toLocaleString("en-US", { timeZone: d }),
            y = Math.round((m - new Date(g)) / 1e3 / 60),
            b = i(g, { locale: this.$L })
              .$set("millisecond", this.$ms)
              .utcOffset(15 * -Math.round(m.getTimezoneOffset() / 15) - y, !0);
          if (v) {
            var $ = b.utcOffset();
            b = b.add(p - $, "minute");
          }
          return (b.$x.$timezone = d), b;
        }),
          (u.offsetName = function (d) {
            var v = this.$x.$timezone || i.tz.guess(),
              p = c(this.valueOf(), v, { timeZoneName: d }).find(function (m) {
                return m.type.toLowerCase() === "timezonename";
              });
            return p && p.value;
          });
        var f = u.startOf;
        (u.startOf = function (d, v) {
          if (!this.$x || !this.$x.$timezone) return f.call(this, d, v);
          var p = i(this.format("YYYY-MM-DD HH:mm:ss:SSS"), { locale: this.$L });
          return f.call(p, d, v).tz(this.$x.$timezone, !0);
        }),
          (i.tz = function (d, v, p) {
            var m = p && v,
              g = p || v || s,
              y = l(+i(), g);
            if (typeof d != "string") return i(d).tz(g);
            var b = (function (P, M, T) {
                var F = P - 60 * M * 1e3,
                  k = l(F, T);
                if (M === k) return [F, M];
                var D = l((F -= 60 * (k - M) * 1e3), T);
                return k === D ? [F, k] : [P - 60 * Math.min(k, D) * 1e3, Math.max(k, D)];
              })(i.utc(d, m).valueOf(), y, g),
              $ = b[0],
              S = b[1],
              A = i($).utcOffset(S);
            return (A.$x.$timezone = g), A;
          }),
          (i.tz.guess = function () {
            return Intl.DateTimeFormat().resolvedOptions().timeZone;
          }),
          (i.tz.setDefault = function (d) {
            s = d;
          });
      };
    });
  })($6);
  var tpe = $6.exports,
    rpe = xt(tpe),
    w6 = { exports: {} };
  (function (e, t) {
    (function (r, n) {
      e.exports = n();
    })(rt, function () {
      return function (r, n, a) {
        var o = n.prototype,
          i = function (f) {
            return f && (f.indexOf ? f : f.s);
          },
          s = function (f, d, v, p, m) {
            var g = f.name ? f : f.$locale(),
              y = i(g[d]),
              b = i(g[v]),
              $ =
                y ||
                b.map(function (A) {
                  return A.slice(0, p);
                });
            if (!m) return $;
            var S = g.weekStart;
            return $.map(function (A, P) {
              return $[(P + (S || 0)) % 7];
            });
          },
          c = function () {
            return a.Ls[a.locale()];
          },
          l = function (f, d) {
            return (
              f.formats[d] ||
              (function (v) {
                return v.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function (p, m, g) {
                  return m || g.slice(1);
                });
              })(f.formats[d.toUpperCase()])
            );
          },
          u = function () {
            var f = this;
            return {
              months: function (d) {
                return d ? d.format("MMMM") : s(f, "months");
              },
              monthsShort: function (d) {
                return d ? d.format("MMM") : s(f, "monthsShort", "months", 3);
              },
              firstDayOfWeek: function () {
                return f.$locale().weekStart || 0;
              },
              weekdays: function (d) {
                return d ? d.format("dddd") : s(f, "weekdays");
              },
              weekdaysMin: function (d) {
                return d ? d.format("dd") : s(f, "weekdaysMin", "weekdays", 2);
              },
              weekdaysShort: function (d) {
                return d ? d.format("ddd") : s(f, "weekdaysShort", "weekdays", 3);
              },
              longDateFormat: function (d) {
                return l(f.$locale(), d);
              },
              meridiem: this.$locale().meridiem,
              ordinal: this.$locale().ordinal,
            };
          };
        (o.localeData = function () {
          return u.bind(this)();
        }),
          (a.localeData = function () {
            var f = c();
            return {
              firstDayOfWeek: function () {
                return f.weekStart || 0;
              },
              weekdays: function () {
                return a.weekdays();
              },
              weekdaysShort: function () {
                return a.weekdaysShort();
              },
              weekdaysMin: function () {
                return a.weekdaysMin();
              },
              months: function () {
                return a.months();
              },
              monthsShort: function () {
                return a.monthsShort();
              },
              longDateFormat: function (d) {
                return l(f, d);
              },
              meridiem: f.meridiem,
              ordinal: f.ordinal,
            };
          }),
          (a.months = function () {
            return s(c(), "months");
          }),
          (a.monthsShort = function () {
            return s(c(), "monthsShort", "months", 3);
          }),
          (a.weekdays = function (f) {
            return s(c(), "weekdays", null, null, f);
          }),
          (a.weekdaysShort = function (f) {
            return s(c(), "weekdaysShort", "weekdays", 3, f);
          }),
          (a.weekdaysMin = function (f) {
            return s(c(), "weekdaysMin", "weekdays", 2, f);
          });
      };
    });
  })(w6);
  var npe = w6.exports,
    ape = xt(npe),
    S6 = { exports: {} };
  (function (e, t) {
    (function (r, n) {
      e.exports = n();
    })(rt, function () {
      var r = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
      return function (n, a, o) {
        var i = a.prototype,
          s = i.format;
        (o.en.formats = r),
          (i.format = function (c) {
            c === void 0 && (c = "YYYY-MM-DDTHH:mm:ssZ");
            var l = this.$locale().formats,
              u = (function (f, d) {
                return f.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function (v, p, m) {
                  var g = m && m.toUpperCase();
                  return (
                    p ||
                    d[m] ||
                    r[m] ||
                    d[g].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function (y, b, $) {
                      return b || $.slice(1);
                    })
                  );
                });
              })(c, l === void 0 ? {} : l);
            return s.call(this, u);
          });
      };
    });
  })(S6);
  var ope = S6.exports,
    ipe = xt(ope),
    E6 = { exports: {} };
  (function (e, t) {
    (function (r, n) {
      e.exports = n();
    })(rt, function () {
      return function (r, n, a) {
        a.updateLocale = function (o, i) {
          var s = a.Ls[o];
          if (s)
            return (
              (i ? Object.keys(i) : []).forEach(function (c) {
                s[c] = i[c];
              }),
              s
            );
        };
      };
    });
  })(E6);
  var spe = E6.exports,
    cpe = xt(spe);
  Re.extend(Fve);
  Re.extend(Gve);
  Re.extend(Kve);
  Re.extend(Xve);
  Re.extend(Bve);
  Re.extend(Wve);
  Re.extend(zve);
  Re.extend(Jve);
  Re.extend(epe);
  Re.extend(rpe);
  Re.extend(ape);
  Re.extend(ipe);
  Re.extend(cpe);
  var dv = "en",
    lpe = (function () {
      function e() {
        bt(this, e);
        var t;
        (this.locale = dv), (this.timezone = Re.tz.guess()), (typeof window > "u" ? "undefined" : Fi(window)) === "object" && ((t = window).dayjs || (t.dayjs = Re));
      }
      return (
        $t(e, [
          {
            key: "setup",
            value: function (r) {
              var n = r.options;
              return G0(
                this,
                void 0,
                void 0,
                ya().mark(function a() {
                  var o, i;
                  return ya().wrap(
                    function (c) {
                      for (;;)
                        switch ((c.prev = c.next)) {
                          case 0:
                            if (((this.timezone = n.date.timezone || Re.tz.guess()), (o = n.date.locale), !(typeof o == "string" && o !== dv))) {
                              c.next = 17;
                              break;
                            }
                            if ((typeof window > "u" ? "undefined" : Fi(window)) !== "object") {
                              c.next = 12;
                              break;
                            }
                            if (((c.t0 = window["dayjs_locale_".concat(o)]), c.t0)) {
                              c.next = 9;
                              break;
                            }
                            return (c.next = 8), this.loadBrowserLocale(o);
                          case 8:
                            c.t0 = c.sent;
                          case 9:
                            (i = c.t0), (c.next = 15);
                            break;
                          case 12:
                            return (c.next = 14), this.loadNodeLocale(o);
                          case 14:
                            i = c.sent;
                          case 15:
                            Re.locale(o), (this.locale = i);
                          case 17:
                            Fi(o) === "object" && (o.hasOwnProperty("name") ? (Re.locale(o.name, o), (this.locale = o)) : (this.locale = Re.updateLocale(dv, o)));
                          case 18:
                          case "end":
                            return c.stop();
                        }
                    },
                    a,
                    this
                  );
                })
              );
            },
          },
          {
            key: "extend",
            value: function (r) {
              return Re.extend(r);
            },
          },
          {
            key: "getMonthWeekNumber",
            value: function (r) {
              var n = this.date(r),
                a = n.startOf("day"),
                o = n.startOf("month").endOf("week");
              return a <= o ? 1 : Math.ceil(a.diff(o, "weeks", !0)) + 1;
            },
          },
          {
            key: "getWeeksCountInMonth",
            value: function (r) {
              var n = this.date(r);
              return this.getLastWeekOfMonth(n).diff(this.getFirstWeekOfMonth(n), "week") + 1;
            },
          },
          {
            key: "getFirstWeekOfMonth",
            value: function (r) {
              var n = this.date(r).startOf("month"),
                a = n.startOf("week");
              return n.weekday() > 4 && (a = a.add(1, "week")), a;
            },
          },
          {
            key: "getLastWeekOfMonth",
            value: function (r) {
              var n = this.date(r).endOf("month"),
                a = n.endOf("week");
              return n.weekday() < 4 && (a = a.subtract(1, "week")), a;
            },
          },
          {
            key: "date",
            value: function () {
              var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : new Date();
              return Re.isDayjs(r) ? r : Re(r).tz(this.timezone).utcOffset(0).locale(this.locale);
            },
          },
          {
            key: "format",
            value: function (r, n) {
              if (typeof n == "function") {
                for (var a = arguments.length, o = new Array(a > 2 ? a - 2 : 0), i = 2; i < a; i++) o[i - 2] = arguments[i];
                return n.apply(void 0, [r].concat(o));
              }
              return typeof n == "string" ? this.date(r).format(n) : null;
            },
          },
          {
            key: "intervals",
            value: function (r, n, a) {
              var o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0,
                i = this.date(n),
                s;
              typeof a == "number" ? (s = i.add(a, r)) : Re.isDayjs(a) ? (s = a) : (s = this.date(a)), (i = i.startOf(r)), (s = s.startOf(r));
              var c = Re.min(i, s);
              s = Re.max(i, s);
              var l = [];
              o || (s = s.add(1, "second"));
              do l.push(+c), (c = c.add(1, r));
              while (c < s);
              return l;
            },
          },
          {
            key: "loadBrowserLocale",
            value: function (r) {
              return new Promise(function (n, a) {
                var o = document.createElement("script");
                (o.type = "text/javascript"),
                  (o.async = !0),
                  (o.src = "".concat(r, ".js")),
                  (o.onerror = function (i) {
                    a(i);
                  }),
                  (o.onload = function () {
                    n(window["dayjs_locale_".concat(r)]);
                  }),
                  document.head.appendChild(o);
              });
            },
          },
          {
            key: "loadNodeLocale",
            value: function (r) {
              return _W(() => import("dayjs/locale/".concat(r, ".js")), []);
            },
          },
        ]),
        e
      );
    })(),
    upe = _e,
    fpe = xe,
    dpe = y7,
    hpe = Ma,
    M2 = Bn,
    vpe = b7,
    ppe = fpe("".indexOf);
  upe(
    { target: "String", proto: !0, forced: !vpe("includes") },
    {
      includes: function (t) {
        return !!~ppe(M2(hpe(this)), M2(dpe(t)), arguments.length > 1 ? arguments[1] : void 0);
      },
    }
  );
  var mpe = ["json", "csv", "tsv", "txt"];
  function gpe(e, t) {
    var r = t.domain,
      n = t.subDomain,
      a = t.data,
      o = r.type,
      i = n.type;
    if (!e.has(o)) throw new Error("'".concat(o, "' is not a valid domain type'"));
    if (!e.has(i)) throw new Error("'".concat(i, "' is not a valid subDomain type'"));
    if (a.type && !mpe.includes(a.type)) throw new Error("The data type '".concat(a.type, "' is not valid data type"));
    if (!(e.get(i).allowedDomainType || []).includes(o)) throw new Error("The subDomain.type '".concat(i, "' can not be used together ") + "with the domain type ".concat(o));
    return !0;
  }
  var ype = Z0,
    bpe = e7;
  ype(
    "Set",
    function (e) {
      return function () {
        return e(this, arguments.length ? arguments[0] : void 0);
      };
    },
    bpe
  );
  function $pe(e, t) {
    return new e(t);
  }
  function wpe(e, t) {
    return "".concat(new e().name).concat((t == null ? void 0 : t.key) || "");
  }
  var Spe = (function () {
      function e(t) {
        bt(this, e), (this.calendar = t), (this.settings = new Map()), (this.plugins = new Map()), (this.pendingPaint = new Set());
      }
      return (
        $t(e, [
          {
            key: "add",
            value: function (r) {
              var n = this;
              r.forEach(function (a) {
                var o = g5(a, 2),
                  i = o[0],
                  s = o[1],
                  c = wpe(i, s),
                  l = n.plugins.get(c);
                (l && n.settings.get(c) && r6(n.settings.get(c).options, s)) ||
                  (n.settings.set(c, { options: s, dirty: !0 }), n.plugins.has(c) || n.plugins.set(c, $pe(i, n.calendar)), n.pendingPaint.add(n.plugins.get(c)));
              });
            },
          },
          {
            key: "setupAll",
            value: function () {
              var r = this;
              this.plugins.forEach(function (n, a) {
                var o = r.settings.get(a);
                typeof o < "u" && o.dirty && (n.setup(o.options), (o.dirty = !1), r.settings.set(a, o));
              });
            },
          },
          {
            key: "paintAll",
            value: function () {
              return Array.from(this.pendingPaint.values()).map(function (r) {
                return r.paint();
              });
            },
          },
          {
            key: "destroyAll",
            value: function () {
              return this.allPlugins().map(function (r) {
                return r.destroy();
              });
            },
          },
          {
            key: "getFromPosition",
            value: function (r) {
              return this.allPlugins().filter(function (n) {
                var a;
                return ((a = n.options) === null || a === void 0 ? void 0 : a.position) === r;
              });
            },
          },
          {
            key: "getHeightFromPosition",
            value: function (r) {
              return this.getFromPosition(r)
                .map(function (n) {
                  return n.options.dimensions.height;
                })
                .reduce(function (n, a) {
                  return n + a;
                }, 0);
            },
          },
          {
            key: "getWidthFromPosition",
            value: function (r) {
              return this.getFromPosition(r)
                .map(function (n) {
                  return n.options.dimensions.width;
                })
                .reduce(function (n, a) {
                  return n + a;
                }, 0);
            },
          },
          {
            key: "allPlugins",
            value: function () {
              return Array.from(this.plugins.values());
            },
          },
        ]),
        e
      );
    })(),
    Epe = "4.2.4",
    xpe = function (t) {
      var r = 10,
        n = 6,
        a = ["day", "hour"];
      return {
        name: "minute",
        allowedDomainType: a,
        rowsCount: function () {
          return r;
        },
        columnsCount: function () {
          return n;
        },
        mapping: function (i, s) {
          return t.intervals("minute", i, t.date(s)).map(function (c, l) {
            return { t: c, x: Math.floor(l / r), y: l % r };
          });
        },
        extractUnit: function (i) {
          return t.date(i).startOf("minute").valueOf();
        },
      };
    },
    Tpe = function (t, r) {
      var n = r.domain,
        a = 24,
        o = 6,
        i = ["month", "week", "day"];
      return {
        name: "hour",
        allowedDomainType: i,
        rowsCount: function () {
          return o;
        },
        columnsCount: function (c) {
          switch (n.type) {
            case "week":
              return (a / o) * 7;
            case "month":
              return (a / o) * (n.dynamicDimension ? t.date(c).daysInMonth() : 31);
            case "day":
            default:
              return a / o;
          }
        },
        mapping: function (c, l) {
          return t.intervals("hour", c, t.date(l)).map(function (u) {
            var f = t.date(u),
              d = f.hour(),
              v = f.date(),
              p = Math.floor(d / o),
              m = a / o;
            return n.type === "month" && (p += (v - 1) * m), n.type === "week" && (p += +f.format("d") * m), { t: u, x: p, y: Math.floor(d % o) };
          });
        },
        extractUnit: function (c) {
          return t.date(c).startOf("hour").valueOf();
        },
      };
    },
    Cpe = function (t, r) {
      var n = r.domain,
        a = r.verticalOrientation,
        o = 7,
        i = ["year", "month", "week"];
      return {
        name: "day",
        allowedDomainType: i,
        rowsCount: function () {
          return n.type === "week" ? 1 : o;
        },
        columnsCount: function (c) {
          switch (n.type) {
            case "month":
              return Math.ceil(n.dynamicDimension && !a ? t.getMonthWeekNumber(t.date(c).endOf("month")) : 6);
            case "year":
              return Math.ceil(n.dynamicDimension ? t.date(c).endOf("year").dayOfYear() / o : 54);
            case "week":
            default:
              return o;
          }
        },
        mapping: function (c, l) {
          var u = 0,
            f = -1;
          return t.intervals("day", c, t.date(l)).map(function (d) {
            var v = t.date(d);
            switch (n.type) {
              case "month":
                f = t.getMonthWeekNumber(d) - 1;
                break;
              case "year":
                u !== v.week() && ((u = v.week()), (f += 1));
                break;
              case "week":
                f = v.weekday();
                break;
            }
            return { t: d, x: f, y: n.type === "week" ? 0 : v.weekday() };
          });
        },
        extractUnit: function (c) {
          return t.date(c).startOf("day").valueOf();
        },
      };
    },
    Ope = function (t, r) {
      var n = r.domain,
        a = r.verticalOrientation,
        o = 7,
        i = ["year", "month", "week"];
      return {
        name: "xDay",
        allowedDomainType: i,
        rowsCount: function (c) {
          switch (n.type) {
            case "month":
              return Math.ceil(n.dynamicDimension && !a ? t.getMonthWeekNumber(t.date(c).endOf("month")) : 6);
            case "year":
              return Math.ceil(n.dynamicDimension ? t.date(c).endOf("year").dayOfYear() / o : 54);
            case "week":
            default:
              return o;
          }
        },
        columnsCount: function () {
          return n.type === "week" ? 1 : o;
        },
        mapping: function (c, l) {
          return t.intervals("day", c, t.date(l)).map(function (u) {
            var f = t.date(u),
              d = f.endOf("year").week(),
              v = 0;
            switch (n.type) {
              case "month":
                v = t.getMonthWeekNumber(u) - 1;
                break;
              case "year":
                d === 1 && f.week() === d && (v = f.subtract(1, "week").week() + 1), (v = f.week() - 1);
                break;
              case "week":
                v = f.weekday();
                break;
            }
            return { t: u, y: v, x: n.type === "week" ? 0 : f.weekday() };
          });
        },
        extractUnit: function (c) {
          return t.date(c).startOf("day").valueOf();
        },
      };
    },
    _pe = function (t) {
      var r = 7,
        n = ["month"];
      return {
        name: "ghDay",
        allowedDomainType: n,
        rowsCount: function () {
          return r;
        },
        columnsCount: function (o) {
          return t.getWeeksCountInMonth(o);
        },
        mapping: function (o, i) {
          var s = t.getFirstWeekOfMonth(o),
            c = t.getFirstWeekOfMonth(i),
            l = -1,
            u = s.weekday();
          return t.intervals("day", s, c).map(function (f) {
            var d = t.date(f).weekday();
            return d === u && (l += 1), { t: f, x: l, y: d };
          });
        },
        extractUnit: function (o) {
          return t.date(o).startOf("day").valueOf();
        },
      };
    },
    Ppe = function (t, r) {
      var n = r.domain,
        a = ["year", "month"];
      return {
        name: "week",
        allowedDomainType: a,
        rowsCount: function () {
          return 1;
        },
        columnsCount: function (i) {
          switch (n.type) {
            case "year":
              return n.dynamicDimension ? t.date(i).endOf("year").isoWeeksInYear() : 53;
            case "month":
              return n.dynamicDimension ? t.getWeeksCountInMonth(i) : 5;
            default:
              return 1;
          }
        },
        mapping: function (i, s) {
          var c = t.getFirstWeekOfMonth(i),
            l = t.getFirstWeekOfMonth(s);
          return t.intervals("week", c, l).map(function (u, f) {
            return { t: u, x: f, y: 0 };
          });
        },
        extractUnit: function (i) {
          return t.date(i).startOf("week").valueOf();
        },
      };
    },
    Ipe = function (t) {
      var r = ["year"];
      return {
        name: "month",
        allowedDomainType: r,
        rowsCount: function () {
          return 1;
        },
        columnsCount: function () {
          return 12;
        },
        mapping: function (a, o) {
          return t.intervals("month", a, t.date(o)).map(function (i) {
            return { t: i, x: t.date(i).month(), y: 0 };
          });
        },
        extractUnit: function (a) {
          return t.date(a).startOf("month").valueOf();
        },
      };
    },
    Ape = function (t) {
      var r = [];
      return {
        name: "year",
        allowedDomainType: r,
        rowsCount: function () {
          return 1;
        },
        columnsCount: function () {
          return 1;
        },
        mapping: function (a, o) {
          return t.intervals("year", a, t.date(o)).map(function (i, s) {
            return { t: i, x: s, y: 0 };
          });
        },
        extractUnit: function (a) {
          return t.date(a).startOf("year").valueOf();
        },
      };
    },
    Rpe = [xpe, Tpe, Cpe, Ope, _pe, Ppe, Ipe, Ape],
    Mpe = (function () {
      function e(t, r) {
        bt(this, e), (this.settings = new Map()), (this.dateHelper = t), (this.options = r), (this.initiated = !1);
      }
      return (
        $t(e, [
          {
            key: "get",
            value: function (r) {
              return this.settings.get(r);
            },
          },
          {
            key: "has",
            value: function (r) {
              return this.settings.has(r);
            },
          },
          {
            key: "init",
            value: function () {
              this.initiated || ((this.initiated = !0), this.add(Rpe));
            },
          },
          {
            key: "add",
            value: function (r) {
              var n = this;
              this.init();
              var a = [];
              zf(r).forEach(function (o) {
                var i = o(n.dateHelper, n.options.options);
                n.settings.set(i.name, i), i.hasOwnProperty("parent") && a.push(i.name);
              }),
                a.forEach(function (o) {
                  var i = n.settings.get(n.settings.get(o).parent);
                  i && n.settings.set(o, Object.assign(Object.assign({}, i), n.settings.get(o)));
                });
            },
          },
        ]),
        e
      );
    })(),
    x6 = (function () {
      function e() {
        bt(this, e),
          (this.options = new mhe()),
          (this.dateHelper = new lpe()),
          (this.templateCollection = new Mpe(this.dateHelper, this.options)),
          (this.dataFetcher = new Pve(this)),
          (this.navigator = new ooe(this)),
          (this.populator = new yle(this)),
          (this.calendarPainter = new fse(this)),
          (this.eventEmitter = new lne()),
          (this.pluginManager = new Spe(this));
      }
      return (
        $t(e, [
          {
            key: "createDomainCollection",
            value: function (r, n) {
              var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
              return new OS(this.dateHelper, this.options.options.domain.type, r, n, a);
            },
          },
          {
            key: "paint",
            value: function (r, n) {
              return G0(
                this,
                void 0,
                void 0,
                ya().mark(function a() {
                  return ya().wrap(
                    function (i) {
                      for (;;)
                        switch ((i.prev = i.next)) {
                          case 0:
                            return this.options.init(r), (i.next = 3), this.dateHelper.setup(this.options);
                          case 3:
                            this.templateCollection.init(), (i.prev = 4), gpe(this.templateCollection, this.options.options), (i.next = 11);
                            break;
                          case 8:
                            return (i.prev = 8), (i.t0 = i.catch(4)), i.abrupt("return", Promise.reject(i.t0));
                          case 11:
                            return (
                              n && this.pluginManager.add(zf(n)),
                              this.calendarPainter.setup(),
                              (this.domainCollection = new OS(this.dateHelper)),
                              this.navigator.loadNewDomains(this.createDomainCollection(this.options.options.date.start, this.options.options.range)),
                              i.abrupt("return", Promise.allSettled([this.calendarPainter.paint(), this.fill()]))
                            );
                          case 16:
                          case "end":
                            return i.stop();
                        }
                    },
                    a,
                    this,
                    [[4, 8]]
                  );
                })
              );
            },
          },
          {
            key: "addTemplates",
            value: function (r) {
              this.templateCollection.add(r);
            },
          },
          {
            key: "next",
            value: function () {
              var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1,
                n = this.navigator.loadNewDomains(this.createDomainCollection(this.domainCollection.max, r + 1).slice(r), ze.SCROLL_FORWARD);
              return Promise.allSettled([this.calendarPainter.paint(n), this.fill()]);
            },
          },
          {
            key: "previous",
            value: function () {
              var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1,
                n = this.navigator.loadNewDomains(this.createDomainCollection(this.domainCollection.min, -r), ze.SCROLL_BACKWARD);
              return Promise.allSettled([this.calendarPainter.paint(n), this.fill()]);
            },
          },
          {
            key: "jumpTo",
            value: function (r) {
              var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
              return Promise.allSettled([this.calendarPainter.paint(this.navigator.jumpTo(r, n)), this.fill()]);
            },
          },
          {
            key: "fill",
            value: function () {
              var r = this,
                n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.options.options.data.source,
                a = this.options.options,
                o = this.templateCollection,
                i = this.dateHelper.intervals(a.domain.type, this.domainCollection.max, 2)[1],
                s = this.dataFetcher.getDatas(n, this.domainCollection.min, i);
              return new Promise(function (c, l) {
                s.then(
                  function (u) {
                    r.domainCollection.fill(u, a.data, o.get(a.subDomain.type).extractUnit), r.populator.populate(), c(null);
                  },
                  function (u) {
                    l(u);
                  }
                );
              });
            },
          },
          {
            key: "on",
            value: function (r, n) {
              this.eventEmitter.on(r, n);
            },
          },
          {
            key: "dimensions",
            value: function () {
              return this.calendarPainter.dimensions;
            },
          },
          {
            key: "destroy",
            value: function () {
              return this.calendarPainter.destroy();
            },
          },
          {
            key: "extendDayjs",
            value: function (r) {
              return this.dateHelper.extend(r);
            },
          },
        ]),
        e
      );
    })();
  x6.VERSION = Epe;
  function Dpe(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }
  function D2(e, t) {
    for (var r = 0; r < t.length; r++) {
      var n = t[r];
      (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, Upe(n.key), n);
    }
  }
  function Npe(e, t, r) {
    return t && D2(e.prototype, t), r && D2(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
  }
  function N2(e) {
    return kpe(e) || Lpe(e) || Fpe(e) || jpe();
  }
  function kpe(e) {
    if (Array.isArray(e)) return Nm(e);
  }
  function Lpe(e) {
    if ((typeof Symbol < "u" && e[Symbol.iterator] != null) || e["@@iterator"] != null) return Array.from(e);
  }
  function Fpe(e, t) {
    if (e) {
      if (typeof e == "string") return Nm(e, t);
      var r = Object.prototype.toString.call(e).slice(8, -1);
      if ((r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")) return Array.from(e);
      if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Nm(e, t);
    }
  }
  function Nm(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
  }
  function jpe() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function Bpe(e, t) {
    if (typeof e != "object" || e === null) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
      var n = r.call(e, t || "default");
      if (typeof n != "object") return n;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (t === "string" ? String : Number)(e);
  }
  function Upe(e) {
    var t = Bpe(e, "string");
    return typeof t == "symbol" ? t : String(t);
  }
  var Fc = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {},
    xi = function (e) {
      return e && e.Math === Math && e;
    },
    ot =
      xi(typeof globalThis == "object" && globalThis) ||
      xi(typeof window == "object" && window) ||
      xi(typeof self == "object" && self) ||
      xi(typeof Fc == "object" && Fc) ||
      xi(typeof Fc == "object" && Fc) ||
      (function () {
        return this;
      })() ||
      Function("return this")(),
    id = {},
    qe = function (e) {
      try {
        return !!e();
      } catch {
        return !0;
      }
    },
    Wpe = qe,
    er = !Wpe(function () {
      return (
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1] !== 7
      );
    }),
    Hpe = qe,
    sd = !Hpe(function () {
      var e = function () {}.bind();
      return typeof e != "function" || e.hasOwnProperty("prototype");
    }),
    zpe = sd,
    jc = Function.prototype.call,
    tr = zpe
      ? jc.bind(jc)
      : function () {
          return jc.apply(jc, arguments);
        },
    gy = {},
    T6 = {}.propertyIsEnumerable,
    C6 = Object.getOwnPropertyDescriptor,
    Vpe = C6 && !T6.call({ 1: 2 }, 1);
  gy.f = Vpe
    ? function (t) {
        var r = C6(this, t);
        return !!r && r.enumerable;
      }
    : T6;
  var cd = function (e, t) {
      return { enumerable: !(e & 1), configurable: !(e & 2), writable: !(e & 4), value: t };
    },
    O6 = sd,
    _6 = Function.prototype,
    km = _6.call,
    Gpe = O6 && _6.bind.bind(km, km),
    Ve = O6
      ? Gpe
      : function (e) {
          return function () {
            return km.apply(e, arguments);
          };
        },
    P6 = Ve,
    Ype = P6({}.toString),
    Kpe = P6("".slice),
    Ba = function (e) {
      return Kpe(Ype(e), 8, -1);
    },
    qpe = Ve,
    Xpe = qe,
    Zpe = Ba,
    hv = Object,
    Jpe = qpe("".split),
    yy = Xpe(function () {
      return !hv("z").propertyIsEnumerable(0);
    })
      ? function (e) {
          return Zpe(e) === "String" ? Jpe(e, "") : hv(e);
        }
      : hv,
    ni = function (e) {
      return e == null;
    },
    Qpe = ni,
    eme = TypeError,
    by = function (e) {
      if (Qpe(e)) throw new eme("Can't call method on " + e);
      return e;
    },
    tme = yy,
    rme = by,
    ai = function (e) {
      return tme(rme(e));
    },
    Lm = typeof document == "object" && document.all,
    nme = typeof Lm > "u" && Lm !== void 0,
    I6 = { all: Lm, IS_HTMLDDA: nme },
    A6 = I6,
    ame = A6.all,
    Be = A6.IS_HTMLDDA
      ? function (e) {
          return typeof e == "function" || e === ame;
        }
      : function (e) {
          return typeof e == "function";
        },
    k2 = Be,
    R6 = I6,
    ome = R6.all,
    Ct = R6.IS_HTMLDDA
      ? function (e) {
          return typeof e == "object" ? e !== null : k2(e) || e === ome;
        }
      : function (e) {
          return typeof e == "object" ? e !== null : k2(e);
        },
    vv = ot,
    ime = Be,
    sme = function (e) {
      return ime(e) ? e : void 0;
    },
    Ua = function (e, t) {
      return arguments.length < 2 ? sme(vv[e]) : vv[e] && vv[e][t];
    },
    cme = Ve,
    $y = cme({}.isPrototypeOf),
    ld = (typeof navigator < "u" && String(navigator.userAgent)) || "",
    M6 = ot,
    pv = ld,
    L2 = M6.process,
    F2 = M6.Deno,
    j2 = (L2 && L2.versions) || (F2 && F2.version),
    B2 = j2 && j2.v8,
    sr,
    Ou;
  B2 && ((sr = B2.split(".")), (Ou = sr[0] > 0 && sr[0] < 4 ? 1 : +(sr[0] + sr[1])));
  !Ou && pv && ((sr = pv.match(/Edge\/(\d+)/)), (!sr || sr[1] >= 74) && ((sr = pv.match(/Chrome\/(\d+)/)), sr && (Ou = +sr[1])));
  var ud = Ou,
    U2 = ud,
    lme = qe,
    ume = ot,
    fme = ume.String,
    D6 =
      !!Object.getOwnPropertySymbols &&
      !lme(function () {
        var e = Symbol("symbol detection");
        return !fme(e) || !(Object(e) instanceof Symbol) || (!Symbol.sham && U2 && U2 < 41);
      }),
    dme = D6,
    N6 = dme && !Symbol.sham && typeof Symbol.iterator == "symbol",
    hme = Ua,
    vme = Be,
    pme = $y,
    mme = N6,
    gme = Object,
    k6 = mme
      ? function (e) {
          return typeof e == "symbol";
        }
      : function (e) {
          var t = hme("Symbol");
          return vme(t) && pme(t.prototype, gme(e));
        },
    yme = String,
    fd = function (e) {
      try {
        return yme(e);
      } catch {
        return "Object";
      }
    },
    bme = Be,
    $me = fd,
    wme = TypeError,
    Wn = function (e) {
      if (bme(e)) return e;
      throw new wme($me(e) + " is not a function");
    },
    Sme = Wn,
    Eme = ni,
    wy = function (e, t) {
      var r = e[t];
      return Eme(r) ? void 0 : Sme(r);
    },
    mv = tr,
    gv = Be,
    yv = Ct,
    xme = TypeError,
    Tme = function (e, t) {
      var r, n;
      if ((t === "string" && gv((r = e.toString)) && !yv((n = mv(r, e)))) || (gv((r = e.valueOf)) && !yv((n = mv(r, e)))) || (t !== "string" && gv((r = e.toString)) && !yv((n = mv(r, e))))) return n;
      throw new xme("Can't convert object to primitive value");
    },
    L6 = { exports: {} },
    W2 = ot,
    Cme = Object.defineProperty,
    Sy = function (e, t) {
      try {
        Cme(W2, e, { value: t, configurable: !0, writable: !0 });
      } catch {
        W2[e] = t;
      }
      return t;
    },
    Ome = ot,
    _me = Sy,
    H2 = "__core-js_shared__",
    Pme = Ome[H2] || _me(H2, {}),
    Ey = Pme,
    z2 = Ey;
  (L6.exports = function (e, t) {
    return z2[e] || (z2[e] = t !== void 0 ? t : {});
  })("versions", []).push({
    version: "3.34.0",
    mode: "global",
    copyright: "© 2014-2023 Denis Pushkarev (zloirock.ru)",
    license: "https://github.com/zloirock/core-js/blob/v3.34.0/LICENSE",
    source: "https://github.com/zloirock/core-js",
  });
  var F6 = L6.exports,
    Ime = by,
    Ame = Object,
    Vs = function (e) {
      return Ame(Ime(e));
    },
    Rme = Ve,
    Mme = Vs,
    Dme = Rme({}.hasOwnProperty),
    rr =
      Object.hasOwn ||
      function (t, r) {
        return Dme(Mme(t), r);
      },
    Nme = Ve,
    kme = 0,
    Lme = Math.random(),
    Fme = Nme((1).toString),
    xy = function (e) {
      return "Symbol(" + (e === void 0 ? "" : e) + ")_" + Fme(++kme + Lme, 36);
    },
    jme = ot,
    Bme = F6,
    V2 = rr,
    Ume = xy,
    Wme = D6,
    Hme = N6,
    go = jme.Symbol,
    bv = Bme("wks"),
    zme = Hme ? go.for || go : (go && go.withoutSetter) || Ume,
    ft = function (e) {
      return V2(bv, e) || (bv[e] = Wme && V2(go, e) ? go[e] : zme("Symbol." + e)), bv[e];
    },
    Vme = tr,
    G2 = Ct,
    Y2 = k6,
    Gme = wy,
    Yme = Tme,
    Kme = ft,
    qme = TypeError,
    Xme = Kme("toPrimitive"),
    Zme = function (e, t) {
      if (!G2(e) || Y2(e)) return e;
      var r = Gme(e, Xme),
        n;
      if (r) {
        if ((t === void 0 && (t = "default"), (n = Vme(r, e, t)), !G2(n) || Y2(n))) return n;
        throw new qme("Can't convert object to primitive value");
      }
      return t === void 0 && (t = "number"), Yme(e, t);
    },
    Jme = Zme,
    Qme = k6,
    Ty = function (e) {
      var t = Jme(e, "string");
      return Qme(t) ? t : t + "";
    },
    ege = ot,
    K2 = Ct,
    Fm = ege.document,
    tge = K2(Fm) && K2(Fm.createElement),
    dd = function (e) {
      return tge ? Fm.createElement(e) : {};
    },
    rge = er,
    nge = qe,
    age = dd,
    j6 =
      !rge &&
      !nge(function () {
        return (
          Object.defineProperty(age("div"), "a", {
            get: function () {
              return 7;
            },
          }).a !== 7
        );
      }),
    oge = er,
    ige = tr,
    sge = gy,
    cge = cd,
    lge = ai,
    uge = Ty,
    fge = rr,
    dge = j6,
    q2 = Object.getOwnPropertyDescriptor;
  id.f = oge
    ? q2
    : function (t, r) {
        if (((t = lge(t)), (r = uge(r)), dge))
          try {
            return q2(t, r);
          } catch {}
        if (fge(t, r)) return cge(!ige(sge.f, t, r), t[r]);
      };
  var hr = {},
    hge = er,
    vge = qe,
    B6 =
      hge &&
      vge(function () {
        return Object.defineProperty(function () {}, "prototype", { value: 42, writable: !1 }).prototype !== 42;
      }),
    pge = Ct,
    mge = String,
    gge = TypeError,
    vr = function (e) {
      if (pge(e)) return e;
      throw new gge(mge(e) + " is not an object");
    },
    yge = er,
    bge = j6,
    $ge = B6,
    Bc = vr,
    X2 = Ty,
    wge = TypeError,
    $v = Object.defineProperty,
    Sge = Object.getOwnPropertyDescriptor,
    wv = "enumerable",
    Sv = "configurable",
    Ev = "writable";
  hr.f = yge
    ? $ge
      ? function (t, r, n) {
          if ((Bc(t), (r = X2(r)), Bc(n), typeof t == "function" && r === "prototype" && "value" in n && Ev in n && !n[Ev])) {
            var a = Sge(t, r);
            a && a[Ev] && ((t[r] = n.value), (n = { configurable: Sv in n ? n[Sv] : a[Sv], enumerable: wv in n ? n[wv] : a[wv], writable: !1 }));
          }
          return $v(t, r, n);
        }
      : $v
    : function (t, r, n) {
        if ((Bc(t), (r = X2(r)), Bc(n), bge))
          try {
            return $v(t, r, n);
          } catch {}
        if ("get" in n || "set" in n) throw new wge("Accessors not supported");
        return "value" in n && (t[r] = n.value), t;
      };
  var Ege = er,
    xge = hr,
    Tge = cd,
    hd = Ege
      ? function (e, t, r) {
          return xge.f(e, t, Tge(1, r));
        }
      : function (e, t, r) {
          return (e[t] = r), e;
        },
    U6 = { exports: {} },
    jm = er,
    Cge = rr,
    W6 = Function.prototype,
    Oge = jm && Object.getOwnPropertyDescriptor,
    Cy = Cge(W6, "name"),
    _ge = Cy && function () {}.name === "something",
    Pge = Cy && (!jm || (jm && Oge(W6, "name").configurable)),
    Oy = { EXISTS: Cy, PROPER: _ge, CONFIGURABLE: Pge },
    Ige = Ve,
    Age = Be,
    Bm = Ey,
    Rge = Ige(Function.toString);
  Age(Bm.inspectSource) ||
    (Bm.inspectSource = function (e) {
      return Rge(e);
    });
  var _y = Bm.inspectSource,
    Mge = ot,
    Dge = Be,
    Z2 = Mge.WeakMap,
    Nge = Dge(Z2) && /native code/.test(String(Z2)),
    kge = F6,
    Lge = xy,
    J2 = kge("keys"),
    Py = function (e) {
      return J2[e] || (J2[e] = Lge(e));
    },
    vd = {},
    Fge = Nge,
    H6 = ot,
    jge = Ct,
    Bge = hd,
    xv = rr,
    Tv = Ey,
    Uge = Py,
    Wge = vd,
    Q2 = "Object already initialized",
    Um = H6.TypeError,
    Hge = H6.WeakMap,
    _u,
    ds,
    Pu,
    zge = function (e) {
      return Pu(e) ? ds(e) : _u(e, {});
    },
    Vge = function (e) {
      return function (t) {
        var r;
        if (!jge(t) || (r = ds(t)).type !== e) throw new Um("Incompatible receiver, " + e + " required");
        return r;
      };
    };
  if (Fge || Tv.state) {
    var $r = Tv.state || (Tv.state = new Hge());
    ($r.get = $r.get),
      ($r.has = $r.has),
      ($r.set = $r.set),
      (_u = function (e, t) {
        if ($r.has(e)) throw new Um(Q2);
        return (t.facade = e), $r.set(e, t), t;
      }),
      (ds = function (e) {
        return $r.get(e) || {};
      }),
      (Pu = function (e) {
        return $r.has(e);
      });
  } else {
    var io = Uge("state");
    (Wge[io] = !0),
      (_u = function (e, t) {
        if (xv(e, io)) throw new Um(Q2);
        return (t.facade = e), Bge(e, io, t), t;
      }),
      (ds = function (e) {
        return xv(e, io) ? e[io] : {};
      }),
      (Pu = function (e) {
        return xv(e, io);
      });
  }
  var Gs = { set: _u, get: ds, has: Pu, enforce: zge, getterFor: Vge },
    Iy = Ve,
    Gge = qe,
    Yge = Be,
    Uc = rr,
    Wm = er,
    Kge = Oy.CONFIGURABLE,
    qge = _y,
    z6 = Gs,
    Xge = z6.enforce,
    Zge = z6.get,
    eE = String,
    wl = Object.defineProperty,
    Jge = Iy("".slice),
    Qge = Iy("".replace),
    e0e = Iy([].join),
    t0e =
      Wm &&
      !Gge(function () {
        return wl(function () {}, "length", { value: 8 }).length !== 8;
      }),
    r0e = String(String).split("String"),
    n0e = (U6.exports = function (e, t, r) {
      Jge(eE(t), 0, 7) === "Symbol(" && (t = "[" + Qge(eE(t), /^Symbol\(([^)]*)\)/, "$1") + "]"),
        r && r.getter && (t = "get " + t),
        r && r.setter && (t = "set " + t),
        (!Uc(e, "name") || (Kge && e.name !== t)) && (Wm ? wl(e, "name", { value: t, configurable: !0 }) : (e.name = t)),
        t0e && r && Uc(r, "arity") && e.length !== r.arity && wl(e, "length", { value: r.arity });
      try {
        r && Uc(r, "constructor") && r.constructor ? Wm && wl(e, "prototype", { writable: !1 }) : e.prototype && (e.prototype = void 0);
      } catch {}
      var n = Xge(e);
      return Uc(n, "source") || (n.source = e0e(r0e, typeof t == "string" ? t : "")), e;
    });
  Function.prototype.toString = n0e(function () {
    return (Yge(this) && Zge(this).source) || qge(this);
  }, "toString");
  var V6 = U6.exports,
    a0e = Be,
    o0e = hr,
    i0e = V6,
    s0e = Sy,
    Hn = function (e, t, r, n) {
      n || (n = {});
      var a = n.enumerable,
        o = n.name !== void 0 ? n.name : t;
      if ((a0e(r) && i0e(r, o, n), n.global)) a ? (e[t] = r) : s0e(t, r);
      else {
        try {
          n.unsafe ? e[t] && (a = !0) : delete e[t];
        } catch {}
        a ? (e[t] = r) : o0e.f(e, t, { value: r, enumerable: !1, configurable: !n.nonConfigurable, writable: !n.nonWritable });
      }
      return e;
    },
    pd = {},
    c0e = Math.ceil,
    l0e = Math.floor,
    u0e =
      Math.trunc ||
      function (t) {
        var r = +t;
        return (r > 0 ? l0e : c0e)(r);
      },
    f0e = u0e,
    Ay = function (e) {
      var t = +e;
      return t !== t || t === 0 ? 0 : f0e(t);
    },
    d0e = Ay,
    h0e = Math.max,
    v0e = Math.min,
    G6 = function (e, t) {
      var r = d0e(e);
      return r < 0 ? h0e(r + t, 0) : v0e(r, t);
    },
    p0e = Ay,
    m0e = Math.min,
    g0e = function (e) {
      return e > 0 ? m0e(p0e(e), 9007199254740991) : 0;
    },
    y0e = g0e,
    Ys = function (e) {
      return y0e(e.length);
    },
    b0e = ai,
    $0e = G6,
    w0e = Ys,
    tE = function (e) {
      return function (t, r, n) {
        var a = b0e(t),
          o = w0e(a),
          i = $0e(n, o),
          s;
        if (e && r !== r) {
          for (; o > i; ) if (((s = a[i++]), s !== s)) return !0;
        } else for (; o > i; i++) if ((e || i in a) && a[i] === r) return e || i || 0;
        return !e && -1;
      };
    },
    S0e = { includes: tE(!0), indexOf: tE(!1) },
    E0e = Ve,
    Cv = rr,
    x0e = ai,
    T0e = S0e.indexOf,
    C0e = vd,
    rE = E0e([].push),
    Y6 = function (e, t) {
      var r = x0e(e),
        n = 0,
        a = [],
        o;
      for (o in r) !Cv(C0e, o) && Cv(r, o) && rE(a, o);
      for (; t.length > n; ) Cv(r, (o = t[n++])) && (~T0e(a, o) || rE(a, o));
      return a;
    },
    Ry = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
    O0e = Y6,
    _0e = Ry,
    P0e = _0e.concat("length", "prototype");
  pd.f =
    Object.getOwnPropertyNames ||
    function (t) {
      return O0e(t, P0e);
    };
  var My = {};
  My.f = Object.getOwnPropertySymbols;
  var I0e = Ua,
    A0e = Ve,
    R0e = pd,
    M0e = My,
    D0e = vr,
    N0e = A0e([].concat),
    k0e =
      I0e("Reflect", "ownKeys") ||
      function (t) {
        var r = R0e.f(D0e(t)),
          n = M0e.f;
        return n ? N0e(r, n(t)) : r;
      },
    nE = rr,
    L0e = k0e,
    F0e = id,
    j0e = hr,
    B0e = function (e, t, r) {
      for (var n = L0e(t), a = j0e.f, o = F0e.f, i = 0; i < n.length; i++) {
        var s = n[i];
        !nE(e, s) && !(r && nE(r, s)) && a(e, s, o(t, s));
      }
    },
    U0e = qe,
    W0e = Be,
    H0e = /#|\.prototype\./,
    Ks = function (e, t) {
      var r = V0e[z0e(e)];
      return r === Y0e ? !0 : r === G0e ? !1 : W0e(t) ? U0e(t) : !!t;
    },
    z0e = (Ks.normalize = function (e) {
      return String(e).replace(H0e, ".").toLowerCase();
    }),
    V0e = (Ks.data = {}),
    G0e = (Ks.NATIVE = "N"),
    Y0e = (Ks.POLYFILL = "P"),
    Dy = Ks,
    Ov = ot,
    K0e = id.f,
    q0e = hd,
    X0e = Hn,
    Z0e = Sy,
    J0e = B0e,
    Q0e = Dy,
    pr = function (e, t) {
      var r = e.target,
        n = e.global,
        a = e.stat,
        o,
        i,
        s,
        c,
        l,
        u;
      if ((n ? (i = Ov) : a ? (i = Ov[r] || Z0e(r, {})) : (i = (Ov[r] || {}).prototype), i))
        for (s in t) {
          if (((l = t[s]), e.dontCallGetSet ? ((u = K0e(i, s)), (c = u && u.value)) : (c = i[s]), (o = Q0e(n ? s : r + (a ? "." : "#") + s, e.forced)), !o && c !== void 0)) {
            if (typeof l == typeof c) continue;
            J0e(l, c);
          }
          (e.sham || (c && c.sham)) && q0e(l, "sham", !0), X0e(i, s, l, e);
        }
    },
    eye = Ba,
    K6 =
      Array.isArray ||
      function (t) {
        return eye(t) === "Array";
      },
    tye = TypeError,
    rye = 9007199254740991,
    nye = function (e) {
      if (e > rye) throw tye("Maximum allowed index exceeded");
      return e;
    },
    aye = Ty,
    oye = hr,
    iye = cd,
    q6 = function (e, t, r) {
      var n = aye(t);
      n in e ? oye.f(e, n, iye(0, r)) : (e[n] = r);
    },
    sye = ft,
    cye = sye("toStringTag"),
    X6 = {};
  X6[cye] = "z";
  var Ny = String(X6) === "[object z]",
    lye = Ny,
    uye = Be,
    Sl = Ba,
    fye = ft,
    dye = fye("toStringTag"),
    hye = Object,
    vye =
      Sl(
        (function () {
          return arguments;
        })()
      ) === "Arguments",
    pye = function (e, t) {
      try {
        return e[t];
      } catch {}
    },
    md = lye
      ? Sl
      : function (e) {
          var t, r, n;
          return e === void 0 ? "Undefined" : e === null ? "Null" : typeof (r = pye((t = hye(e)), dye)) == "string" ? r : vye ? Sl(t) : (n = Sl(t)) === "Object" && uye(t.callee) ? "Arguments" : n;
        },
    mye = Ve,
    gye = qe,
    Z6 = Be,
    yye = md,
    bye = Ua,
    $ye = _y,
    J6 = function () {},
    wye = [],
    Q6 = bye("Reflect", "construct"),
    ky = /^\s*(?:class|function)\b/,
    Sye = mye(ky.exec),
    Eye = !ky.test(J6),
    Ti = function (t) {
      if (!Z6(t)) return !1;
      try {
        return Q6(J6, wye, t), !0;
      } catch {
        return !1;
      }
    },
    eI = function (t) {
      if (!Z6(t)) return !1;
      switch (yye(t)) {
        case "AsyncFunction":
        case "GeneratorFunction":
        case "AsyncGeneratorFunction":
          return !1;
      }
      try {
        return Eye || !!Sye(ky, $ye(t));
      } catch {
        return !0;
      }
    };
  eI.sham = !0;
  var tI =
      !Q6 ||
      gye(function () {
        var e;
        return (
          Ti(Ti.call) ||
          !Ti(Object) ||
          !Ti(function () {
            e = !0;
          }) ||
          e
        );
      })
        ? eI
        : Ti,
    aE = K6,
    xye = tI,
    Tye = Ct,
    Cye = ft,
    Oye = Cye("species"),
    oE = Array,
    _ye = function (e) {
      var t;
      return aE(e) && ((t = e.constructor), xye(t) && (t === oE || aE(t.prototype)) ? (t = void 0) : Tye(t) && ((t = t[Oye]), t === null && (t = void 0))), t === void 0 ? oE : t;
    },
    Pye = _ye,
    rI = function (e, t) {
      return new (Pye(e))(t === 0 ? 0 : t);
    },
    Iye = qe,
    Aye = ft,
    Rye = ud,
    Mye = Aye("species"),
    Dye = function (e) {
      return (
        Rye >= 51 ||
        !Iye(function () {
          var t = [],
            r = (t.constructor = {});
          return (
            (r[Mye] = function () {
              return { foo: 1 };
            }),
            t[e](Boolean).foo !== 1
          );
        })
      );
    },
    Nye = pr,
    kye = qe,
    Lye = K6,
    Fye = Ct,
    jye = Vs,
    Bye = Ys,
    iE = nye,
    sE = q6,
    Uye = rI,
    Wye = Dye,
    Hye = ft,
    zye = ud,
    nI = Hye("isConcatSpreadable"),
    Vye =
      zye >= 51 ||
      !kye(function () {
        var e = [];
        return (e[nI] = !1), e.concat()[0] !== e;
      }),
    Gye = function (e) {
      if (!Fye(e)) return !1;
      var t = e[nI];
      return t !== void 0 ? !!t : Lye(e);
    },
    Yye = !Vye || !Wye("concat");
  Nye(
    { target: "Array", proto: !0, arity: 1, forced: Yye },
    {
      concat: function (t) {
        var r = jye(this),
          n = Uye(r, 0),
          a = 0,
          o,
          i,
          s,
          c,
          l;
        for (o = -1, s = arguments.length; o < s; o++)
          if (((l = o === -1 ? r : arguments[o]), Gye(l))) for (c = Bye(l), iE(a + c), i = 0; i < c; i++, a++) i in l && sE(n, a, l[i]);
          else iE(a + 1), sE(n, a++, l);
        return (n.length = a), n;
      },
    }
  );
  var cE = V6,
    Kye = hr,
    aI = function (e, t, r) {
      return r.get && cE(r.get, t, { getter: !0 }), r.set && cE(r.set, t, { setter: !0 }), Kye.f(e, t, r);
    },
    qye = er,
    Xye = Oy.EXISTS,
    oI = Ve,
    Zye = aI,
    iI = Function.prototype,
    Jye = oI(iI.toString),
    sI = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,
    Qye = oI(sI.exec),
    ebe = "name";
  qye &&
    !Xye &&
    Zye(iI, ebe, {
      configurable: !0,
      get: function () {
        try {
          return Qye(sI, Jye(this))[1];
        } catch {
          return "";
        }
      },
    });
  var tbe = Y6,
    rbe = Ry,
    cI =
      Object.keys ||
      function (t) {
        return tbe(t, rbe);
      },
    lE = er,
    nbe = Ve,
    abe = tr,
    obe = qe,
    _v = cI,
    ibe = My,
    sbe = gy,
    cbe = Vs,
    lbe = yy,
    so = Object.assign,
    uE = Object.defineProperty,
    ube = nbe([].concat),
    fbe =
      !so ||
      obe(function () {
        if (
          lE &&
          so(
            { b: 1 },
            so(
              uE({}, "a", {
                enumerable: !0,
                get: function () {
                  uE(this, "b", { value: 3, enumerable: !1 });
                },
              }),
              { b: 2 }
            )
          ).b !== 1
        )
          return !0;
        var e = {},
          t = {},
          r = Symbol("assign detection"),
          n = "abcdefghijklmnopqrst";
        return (
          (e[r] = 7),
          n.split("").forEach(function (a) {
            t[a] = a;
          }),
          so({}, e)[r] !== 7 || _v(so({}, t)).join("") !== n
        );
      })
        ? function (t, r) {
            for (var n = cbe(t), a = arguments.length, o = 1, i = ibe.f, s = sbe.f; a > o; )
              for (var c = lbe(arguments[o++]), l = i ? ube(_v(c), i(c)) : _v(c), u = l.length, f = 0, d; u > f; ) (d = l[f++]), (!lE || abe(s, c, d)) && (n[d] = c[d]);
            return n;
          }
        : so,
    dbe = pr,
    fE = fbe;
  dbe({ target: "Object", stat: !0, arity: 2, forced: Object.assign !== fE }, { assign: fE });
  var hbe = Ny,
    vbe = md,
    pbe = hbe
      ? {}.toString
      : function () {
          return "[object " + vbe(this) + "]";
        },
    mbe = Ny,
    gbe = Hn,
    ybe = pbe;
  mbe || gbe(Object.prototype, "toString", ybe, { unsafe: !0 });
  var bbe = ot,
    $be = Ba,
    gd = $be(bbe.process) === "process",
    wbe = Ve,
    Sbe = Wn,
    Ebe = function (e, t, r) {
      try {
        return wbe(Sbe(Object.getOwnPropertyDescriptor(e, t)[r]));
      } catch {}
    },
    xbe = Be,
    Tbe = String,
    Cbe = TypeError,
    Obe = function (e) {
      if (typeof e == "object" || xbe(e)) return e;
      throw new Cbe("Can't set " + Tbe(e) + " as a prototype");
    },
    _be = Ebe,
    Pbe = vr,
    Ibe = Obe,
    Ly =
      Object.setPrototypeOf ||
      ("__proto__" in {}
        ? (function () {
            var e = !1,
              t = {},
              r;
            try {
              (r = _be(Object.prototype, "__proto__", "set")), r(t, []), (e = t instanceof Array);
            } catch {}
            return function (a, o) {
              return Pbe(a), Ibe(o), e ? r(a, o) : (a.__proto__ = o), a;
            };
          })()
        : void 0),
    Abe = hr.f,
    Rbe = rr,
    Mbe = ft,
    dE = Mbe("toStringTag"),
    qs = function (e, t, r) {
      e && !r && (e = e.prototype), e && !Rbe(e, dE) && Abe(e, dE, { configurable: !0, value: t });
    },
    Dbe = Ua,
    Nbe = aI,
    kbe = ft,
    Lbe = er,
    hE = kbe("species"),
    Fbe = function (e) {
      var t = Dbe(e);
      Lbe &&
        t &&
        !t[hE] &&
        Nbe(t, hE, {
          configurable: !0,
          get: function () {
            return this;
          },
        });
    },
    jbe = $y,
    Bbe = TypeError,
    Fy = function (e, t) {
      if (jbe(t, e)) return e;
      throw new Bbe("Incorrect invocation");
    },
    Ube = tI,
    Wbe = fd,
    Hbe = TypeError,
    zbe = function (e) {
      if (Ube(e)) return e;
      throw new Hbe(Wbe(e) + " is not a constructor");
    },
    vE = vr,
    Vbe = zbe,
    Gbe = ni,
    Ybe = ft,
    Kbe = Ybe("species"),
    qbe = function (e, t) {
      var r = vE(e).constructor,
        n;
      return r === void 0 || Gbe((n = vE(r)[Kbe])) ? t : Vbe(n);
    },
    Xbe = sd,
    lI = Function.prototype,
    pE = lI.apply,
    mE = lI.call,
    Zbe =
      (typeof Reflect == "object" && Reflect.apply) ||
      (Xbe
        ? mE.bind(pE)
        : function () {
            return mE.apply(pE, arguments);
          }),
    Jbe = Ba,
    Qbe = Ve,
    e1e = function (e) {
      if (Jbe(e) === "Function") return Qbe(e);
    },
    gE = e1e,
    t1e = Wn,
    r1e = sd,
    n1e = gE(gE.bind),
    yd = function (e, t) {
      return (
        t1e(e),
        t === void 0
          ? e
          : r1e
          ? n1e(e, t)
          : function () {
              return e.apply(t, arguments);
            }
      );
    },
    a1e = Ua,
    uI = a1e("document", "documentElement"),
    o1e = Ve,
    i1e = o1e([].slice),
    s1e = TypeError,
    c1e = function (e, t) {
      if (e < t) throw new s1e("Not enough arguments");
      return e;
    },
    l1e = ld,
    fI = /(?:ipad|iphone|ipod).*applewebkit/i.test(l1e),
    kt = ot,
    u1e = Zbe,
    f1e = yd,
    yE = Be,
    d1e = rr,
    dI = qe,
    bE = uI,
    h1e = i1e,
    $E = dd,
    v1e = c1e,
    p1e = fI,
    m1e = gd,
    Hm = kt.setImmediate,
    zm = kt.clearImmediate,
    g1e = kt.process,
    Pv = kt.Dispatch,
    y1e = kt.Function,
    wE = kt.MessageChannel,
    b1e = kt.String,
    Iv = 0,
    Hi = {},
    SE = "onreadystatechange",
    hs,
    Kn,
    Av,
    Rv;
  dI(function () {
    hs = kt.location;
  });
  var jy = function (e) {
      if (d1e(Hi, e)) {
        var t = Hi[e];
        delete Hi[e], t();
      }
    },
    Mv = function (e) {
      return function () {
        jy(e);
      };
    },
    EE = function (e) {
      jy(e.data);
    },
    xE = function (e) {
      kt.postMessage(b1e(e), hs.protocol + "//" + hs.host);
    };
  (!Hm || !zm) &&
    ((Hm = function (t) {
      v1e(arguments.length, 1);
      var r = yE(t) ? t : y1e(t),
        n = h1e(arguments, 1);
      return (
        (Hi[++Iv] = function () {
          u1e(r, void 0, n);
        }),
        Kn(Iv),
        Iv
      );
    }),
    (zm = function (t) {
      delete Hi[t];
    }),
    m1e
      ? (Kn = function (e) {
          g1e.nextTick(Mv(e));
        })
      : Pv && Pv.now
      ? (Kn = function (e) {
          Pv.now(Mv(e));
        })
      : wE && !p1e
      ? ((Av = new wE()), (Rv = Av.port2), (Av.port1.onmessage = EE), (Kn = f1e(Rv.postMessage, Rv)))
      : kt.addEventListener && yE(kt.postMessage) && !kt.importScripts && hs && hs.protocol !== "file:" && !dI(xE)
      ? ((Kn = xE), kt.addEventListener("message", EE, !1))
      : SE in $E("script")
      ? (Kn = function (e) {
          bE.appendChild($E("script"))[SE] = function () {
            bE.removeChild(this), jy(e);
          };
        })
      : (Kn = function (e) {
          setTimeout(Mv(e), 0);
        }));
  var hI = { set: Hm, clear: zm },
    vI = function () {
      (this.head = null), (this.tail = null);
    };
  vI.prototype = {
    add: function (e) {
      var t = { item: e, next: null },
        r = this.tail;
      r ? (r.next = t) : (this.head = t), (this.tail = t);
    },
    get: function () {
      var e = this.head;
      if (e) {
        var t = (this.head = e.next);
        return t === null && (this.tail = null), e.item;
      }
    },
  };
  var pI = vI,
    $1e = ld,
    w1e = /ipad|iphone|ipod/i.test($1e) && typeof Pebble < "u",
    S1e = ld,
    E1e = /web0s(?!.*chrome)/i.test(S1e),
    Sa = ot,
    TE = yd,
    x1e = id.f,
    Dv = hI.set,
    T1e = pI,
    C1e = fI,
    O1e = w1e,
    _1e = E1e,
    Nv = gd,
    CE = Sa.MutationObserver || Sa.WebKitMutationObserver,
    OE = Sa.document,
    _E = Sa.process,
    Wc = Sa.Promise,
    PE = x1e(Sa, "queueMicrotask"),
    Vm = PE && PE.value,
    co,
    kv,
    Lv,
    Hc,
    IE;
  if (!Vm) {
    var zc = new T1e(),
      Vc = function () {
        var e, t;
        for (Nv && (e = _E.domain) && e.exit(); (t = zc.get()); )
          try {
            t();
          } catch (r) {
            throw (zc.head && co(), r);
          }
        e && e.enter();
      };
    !C1e && !Nv && !_1e && CE && OE
      ? ((kv = !0),
        (Lv = OE.createTextNode("")),
        new CE(Vc).observe(Lv, { characterData: !0 }),
        (co = function () {
          Lv.data = kv = !kv;
        }))
      : !O1e && Wc && Wc.resolve
      ? ((Hc = Wc.resolve(void 0)),
        (Hc.constructor = Wc),
        (IE = TE(Hc.then, Hc)),
        (co = function () {
          IE(Vc);
        }))
      : Nv
      ? (co = function () {
          _E.nextTick(Vc);
        })
      : ((Dv = TE(Dv, Sa)),
        (co = function () {
          Dv(Vc);
        })),
      (Vm = function (e) {
        zc.head || co(), zc.add(e);
      });
  }
  var P1e = Vm,
    I1e = function (e, t) {
      try {
        arguments.length;
      } catch {}
    },
    By = function (e) {
      try {
        return { error: !1, value: e() };
      } catch (t) {
        return { error: !0, value: t };
      }
    },
    A1e = ot,
    bd = A1e.Promise,
    mI = typeof Deno == "object" && Deno && typeof Deno.version == "object",
    R1e = mI,
    M1e = gd,
    D1e = !R1e && !M1e && typeof window == "object" && typeof document == "object",
    N1e = ot,
    zi = bd,
    k1e = Be,
    L1e = Dy,
    F1e = _y,
    j1e = ft,
    B1e = D1e,
    U1e = mI,
    Fv = ud;
  zi && zi.prototype;
  var W1e = j1e("species"),
    Gm = !1,
    gI = k1e(N1e.PromiseRejectionEvent),
    H1e = L1e("Promise", function () {
      var e = F1e(zi),
        t = e !== String(zi);
      if (!t && Fv === 66) return !0;
      if (!Fv || Fv < 51 || !/native code/.test(e)) {
        var r = new zi(function (o) {
            o(1);
          }),
          n = function (o) {
            o(
              function () {},
              function () {}
            );
          },
          a = (r.constructor = {});
        if (((a[W1e] = n), (Gm = r.then(function () {}) instanceof n), !Gm)) return !0;
      }
      return !t && (B1e || U1e) && !gI;
    }),
    Xs = { CONSTRUCTOR: H1e, REJECTION_EVENT: gI, SUBCLASSING: Gm },
    oi = {},
    AE = Wn,
    z1e = TypeError,
    V1e = function (e) {
      var t, r;
      (this.promise = new e(function (n, a) {
        if (t !== void 0 || r !== void 0) throw new z1e("Bad Promise constructor");
        (t = n), (r = a);
      })),
        (this.resolve = AE(t)),
        (this.reject = AE(r));
    };
  oi.f = function (e) {
    return new V1e(e);
  };
  var G1e = pr,
    Iu = gd,
    Nn = ot,
    zo = tr,
    RE = Hn,
    ME = Ly,
    Y1e = qs,
    K1e = Fbe,
    q1e = Wn,
    El = Be,
    X1e = Ct,
    Z1e = Fy,
    J1e = qbe,
    yI = hI.set,
    Uy = P1e,
    Q1e = I1e,
    e$e = By,
    t$e = pI,
    bI = Gs,
    Au = bd,
    Wy = Xs,
    $I = oi,
    $d = "Promise",
    wI = Wy.CONSTRUCTOR,
    r$e = Wy.REJECTION_EVENT,
    n$e = Wy.SUBCLASSING,
    jv = bI.getterFor($d),
    a$e = bI.set,
    fo = Au && Au.prototype,
    ta = Au,
    Gc = fo,
    SI = Nn.TypeError,
    Ym = Nn.document,
    Hy = Nn.process,
    Km = $I.f,
    o$e = Km,
    i$e = !!(Ym && Ym.createEvent && Nn.dispatchEvent),
    EI = "unhandledrejection",
    s$e = "rejectionhandled",
    DE = 0,
    xI = 1,
    c$e = 2,
    zy = 1,
    TI = 2,
    Yc,
    NE,
    l$e,
    kE,
    CI = function (e) {
      var t;
      return X1e(e) && El((t = e.then)) ? t : !1;
    },
    OI = function (e, t) {
      var r = t.value,
        n = t.state === xI,
        a = n ? e.ok : e.fail,
        o = e.resolve,
        i = e.reject,
        s = e.domain,
        c,
        l,
        u;
      try {
        a
          ? (n || (t.rejection === TI && f$e(t), (t.rejection = zy)),
            a === !0 ? (c = r) : (s && s.enter(), (c = a(r)), s && (s.exit(), (u = !0))),
            c === e.promise ? i(new SI("Promise-chain cycle")) : (l = CI(c)) ? zo(l, c, o, i) : o(c))
          : i(r);
      } catch (f) {
        s && !u && s.exit(), i(f);
      }
    },
    _I = function (e, t) {
      e.notified ||
        ((e.notified = !0),
        Uy(function () {
          for (var r = e.reactions, n; (n = r.get()); ) OI(n, e);
          (e.notified = !1), t && !e.rejection && u$e(e);
        }));
    },
    PI = function (e, t, r) {
      var n, a;
      i$e ? ((n = Ym.createEvent("Event")), (n.promise = t), (n.reason = r), n.initEvent(e, !1, !0), Nn.dispatchEvent(n)) : (n = { promise: t, reason: r }),
        !r$e && (a = Nn["on" + e]) ? a(n) : e === EI && Q1e("Unhandled promise rejection", r);
    },
    u$e = function (e) {
      zo(yI, Nn, function () {
        var t = e.facade,
          r = e.value,
          n = LE(e),
          a;
        if (
          n &&
          ((a = e$e(function () {
            Iu ? Hy.emit("unhandledRejection", r, t) : PI(EI, t, r);
          })),
          (e.rejection = Iu || LE(e) ? TI : zy),
          a.error)
        )
          throw a.value;
      });
    },
    LE = function (e) {
      return e.rejection !== zy && !e.parent;
    },
    f$e = function (e) {
      zo(yI, Nn, function () {
        var t = e.facade;
        Iu ? Hy.emit("rejectionHandled", t) : PI(s$e, t, e.value);
      });
    },
    yo = function (e, t, r) {
      return function (n) {
        e(t, n, r);
      };
    },
    Oo = function (e, t, r) {
      e.done || ((e.done = !0), r && (e = r), (e.value = t), (e.state = c$e), _I(e, !0));
    },
    qm = function (e, t, r) {
      if (!e.done) {
        (e.done = !0), r && (e = r);
        try {
          if (e.facade === t) throw new SI("Promise can't be resolved itself");
          var n = CI(t);
          n
            ? Uy(function () {
                var a = { done: !1 };
                try {
                  zo(n, t, yo(qm, a, e), yo(Oo, a, e));
                } catch (o) {
                  Oo(a, o, e);
                }
              })
            : ((e.value = t), (e.state = xI), _I(e, !1));
        } catch (a) {
          Oo({ done: !1 }, a, e);
        }
      }
    };
  if (
    wI &&
    ((ta = function (t) {
      Z1e(this, Gc), q1e(t), zo(Yc, this);
      var r = jv(this);
      try {
        t(yo(qm, r), yo(Oo, r));
      } catch (n) {
        Oo(r, n);
      }
    }),
    (Gc = ta.prototype),
    (Yc = function (t) {
      a$e(this, { type: $d, done: !1, notified: !1, parent: !1, reactions: new t$e(), rejection: !1, state: DE, value: void 0 });
    }),
    (Yc.prototype = RE(Gc, "then", function (t, r) {
      var n = jv(this),
        a = Km(J1e(this, ta));
      return (
        (n.parent = !0),
        (a.ok = El(t) ? t : !0),
        (a.fail = El(r) && r),
        (a.domain = Iu ? Hy.domain : void 0),
        n.state === DE
          ? n.reactions.add(a)
          : Uy(function () {
              OI(a, n);
            }),
        a.promise
      );
    })),
    (NE = function () {
      var e = new Yc(),
        t = jv(e);
      (this.promise = e), (this.resolve = yo(qm, t)), (this.reject = yo(Oo, t));
    }),
    ($I.f = Km =
      function (e) {
        return e === ta || e === l$e ? new NE(e) : o$e(e);
      }),
    El(Au) && fo !== Object.prototype)
  ) {
    (kE = fo.then),
      n$e ||
        RE(
          fo,
          "then",
          function (t, r) {
            var n = this;
            return new ta(function (a, o) {
              zo(kE, n, a, o);
            }).then(t, r);
          },
          { unsafe: !0 }
        );
    try {
      delete fo.constructor;
    } catch {}
    ME && ME(fo, Gc);
  }
  G1e({ global: !0, constructor: !0, wrap: !0, forced: wI }, { Promise: ta });
  Y1e(ta, $d, !1);
  K1e($d);
  var Zs = {},
    d$e = ft,
    h$e = Zs,
    v$e = d$e("iterator"),
    p$e = Array.prototype,
    m$e = function (e) {
      return e !== void 0 && (h$e.Array === e || p$e[v$e] === e);
    },
    g$e = md,
    FE = wy,
    y$e = ni,
    b$e = Zs,
    $$e = ft,
    w$e = $$e("iterator"),
    II = function (e) {
      if (!y$e(e)) return FE(e, w$e) || FE(e, "@@iterator") || b$e[g$e(e)];
    },
    S$e = tr,
    E$e = Wn,
    x$e = vr,
    T$e = fd,
    C$e = II,
    O$e = TypeError,
    _$e = function (e, t) {
      var r = arguments.length < 2 ? C$e(e) : t;
      if (E$e(r)) return x$e(S$e(r, e));
      throw new O$e(T$e(e) + " is not iterable");
    },
    P$e = tr,
    jE = vr,
    I$e = wy,
    A$e = function (e, t, r) {
      var n, a;
      jE(e);
      try {
        if (((n = I$e(e, "return")), !n)) {
          if (t === "throw") throw r;
          return r;
        }
        n = P$e(n, e);
      } catch (o) {
        (a = !0), (n = o);
      }
      if (t === "throw") throw r;
      if (a) throw n;
      return jE(n), r;
    },
    R$e = yd,
    M$e = tr,
    D$e = vr,
    N$e = fd,
    k$e = m$e,
    L$e = Ys,
    BE = $y,
    F$e = _$e,
    j$e = II,
    UE = A$e,
    B$e = TypeError,
    xl = function (e, t) {
      (this.stopped = e), (this.result = t);
    },
    WE = xl.prototype,
    wd = function (e, t, r) {
      var n = r && r.that,
        a = !!(r && r.AS_ENTRIES),
        o = !!(r && r.IS_RECORD),
        i = !!(r && r.IS_ITERATOR),
        s = !!(r && r.INTERRUPTED),
        c = R$e(t, n),
        l,
        u,
        f,
        d,
        v,
        p,
        m,
        g = function (b) {
          return l && UE(l, "normal", b), new xl(!0, b);
        },
        y = function (b) {
          return a ? (D$e(b), s ? c(b[0], b[1], g) : c(b[0], b[1])) : s ? c(b, g) : c(b);
        };
      if (o) l = e.iterator;
      else if (i) l = e;
      else {
        if (((u = j$e(e)), !u)) throw new B$e(N$e(e) + " is not iterable");
        if (k$e(u)) {
          for (f = 0, d = L$e(e); d > f; f++) if (((v = y(e[f])), v && BE(WE, v))) return v;
          return new xl(!1);
        }
        l = F$e(e, u);
      }
      for (p = o ? e.next : l.next; !(m = M$e(p, l)).done; ) {
        try {
          v = y(m.value);
        } catch (b) {
          UE(l, "throw", b);
        }
        if (typeof v == "object" && v && BE(WE, v)) return v;
      }
      return new xl(!1);
    },
    U$e = ft,
    AI = U$e("iterator"),
    RI = !1;
  try {
    var W$e = 0,
      HE = {
        next: function () {
          return { done: !!W$e++ };
        },
        return: function () {
          RI = !0;
        },
      };
    (HE[AI] = function () {
      return this;
    }),
      Array.from(HE, function () {
        throw 2;
      });
  } catch {}
  var MI = function (e, t) {
      try {
        if (!t && !RI) return !1;
      } catch {
        return !1;
      }
      var r = !1;
      try {
        var n = {};
        (n[AI] = function () {
          return {
            next: function () {
              return { done: (r = !0) };
            },
          };
        }),
          e(n);
      } catch {}
      return r;
    },
    H$e = bd,
    z$e = MI,
    V$e = Xs.CONSTRUCTOR,
    DI =
      V$e ||
      !z$e(function (e) {
        H$e.all(e).then(void 0, function () {});
      }),
    G$e = pr,
    Y$e = tr,
    K$e = Wn,
    q$e = oi,
    X$e = By,
    Z$e = wd,
    J$e = DI;
  G$e(
    { target: "Promise", stat: !0, forced: J$e },
    {
      all: function (t) {
        var r = this,
          n = q$e.f(r),
          a = n.resolve,
          o = n.reject,
          i = X$e(function () {
            var s = K$e(r.resolve),
              c = [],
              l = 0,
              u = 1;
            Z$e(t, function (f) {
              var d = l++,
                v = !1;
              u++,
                Y$e(s, r, f).then(function (p) {
                  v || ((v = !0), (c[d] = p), --u || a(c));
                }, o);
            }),
              --u || a(c);
          });
        return i.error && o(i.value), n.promise;
      },
    }
  );
  var Q$e = pr,
    ewe = Xs.CONSTRUCTOR,
    Xm = bd,
    twe = Ua,
    rwe = Be,
    nwe = Hn,
    zE = Xm && Xm.prototype;
  Q$e(
    { target: "Promise", proto: !0, forced: ewe, real: !0 },
    {
      catch: function (e) {
        return this.then(void 0, e);
      },
    }
  );
  if (rwe(Xm)) {
    var VE = twe("Promise").prototype.catch;
    zE.catch !== VE && nwe(zE, "catch", VE, { unsafe: !0 });
  }
  var awe = pr,
    owe = tr,
    iwe = Wn,
    swe = oi,
    cwe = By,
    lwe = wd,
    uwe = DI;
  awe(
    { target: "Promise", stat: !0, forced: uwe },
    {
      race: function (t) {
        var r = this,
          n = swe.f(r),
          a = n.reject,
          o = cwe(function () {
            var i = iwe(r.resolve);
            lwe(t, function (s) {
              owe(i, r, s).then(n.resolve, a);
            });
          });
        return o.error && a(o.value), n.promise;
      },
    }
  );
  var fwe = pr,
    dwe = tr,
    hwe = oi,
    vwe = Xs.CONSTRUCTOR;
  fwe(
    { target: "Promise", stat: !0, forced: vwe },
    {
      reject: function (t) {
        var r = hwe.f(this);
        return dwe(r.reject, void 0, t), r.promise;
      },
    }
  );
  var pwe = vr,
    mwe = Ct,
    gwe = oi,
    ywe = function (e, t) {
      if ((pwe(e), mwe(t) && t.constructor === e)) return t;
      var r = gwe.f(e),
        n = r.resolve;
      return n(t), r.promise;
    },
    bwe = pr,
    $we = Ua,
    wwe = Xs.CONSTRUCTOR,
    Swe = ywe;
  $we("Promise");
  bwe(
    { target: "Promise", stat: !0, forced: wwe },
    {
      resolve: function (t) {
        return Swe(this, t);
      },
    }
  );
  var NI = {},
    Ewe = er,
    xwe = B6,
    Twe = hr,
    Cwe = vr,
    Owe = ai,
    _we = cI;
  NI.f =
    Ewe && !xwe
      ? Object.defineProperties
      : function (t, r) {
          Cwe(t);
          for (var n = Owe(r), a = _we(r), o = a.length, i = 0, s; o > i; ) Twe.f(t, (s = a[i++]), n[s]);
          return t;
        };
  var Pwe = vr,
    Iwe = NI,
    GE = Ry,
    Awe = vd,
    Rwe = uI,
    Mwe = dd,
    Dwe = Py,
    YE = ">",
    KE = "<",
    Zm = "prototype",
    Jm = "script",
    kI = Dwe("IE_PROTO"),
    Bv = function () {},
    LI = function (e) {
      return KE + Jm + YE + e + KE + "/" + Jm + YE;
    },
    qE = function (e) {
      e.write(LI("")), e.close();
      var t = e.parentWindow.Object;
      return (e = null), t;
    },
    Nwe = function () {
      var e = Mwe("iframe"),
        t = "java" + Jm + ":",
        r;
      return (e.style.display = "none"), Rwe.appendChild(e), (e.src = String(t)), (r = e.contentWindow.document), r.open(), r.write(LI("document.F=Object")), r.close(), r.F;
    },
    Kc,
    Tl = function () {
      try {
        Kc = new ActiveXObject("htmlfile");
      } catch {}
      Tl = typeof document < "u" ? (document.domain && Kc ? qE(Kc) : Nwe()) : qE(Kc);
      for (var e = GE.length; e--; ) delete Tl[Zm][GE[e]];
      return Tl();
    };
  Awe[kI] = !0;
  var FI =
      Object.create ||
      function (t, r) {
        var n;
        return t !== null ? ((Bv[Zm] = Pwe(t)), (n = new Bv()), (Bv[Zm] = null), (n[kI] = t)) : (n = Tl()), r === void 0 ? n : Iwe.f(n, r);
      },
    kwe = ft,
    Lwe = FI,
    Fwe = hr.f,
    Qm = kwe("unscopables"),
    eg = Array.prototype;
  eg[Qm] === void 0 && Fwe(eg, Qm, { configurable: !0, value: Lwe(null) });
  var jwe = function (e) {
      eg[Qm][e] = !0;
    },
    Bwe = qe,
    Uwe = !Bwe(function () {
      function e() {}
      return (e.prototype.constructor = null), Object.getPrototypeOf(new e()) !== e.prototype;
    }),
    Wwe = rr,
    Hwe = Be,
    zwe = Vs,
    Vwe = Py,
    Gwe = Uwe,
    XE = Vwe("IE_PROTO"),
    tg = Object,
    Ywe = tg.prototype,
    jI = Gwe
      ? tg.getPrototypeOf
      : function (e) {
          var t = zwe(e);
          if (Wwe(t, XE)) return t[XE];
          var r = t.constructor;
          return Hwe(r) && t instanceof r ? r.prototype : t instanceof tg ? Ywe : null;
        },
    Kwe = qe,
    qwe = Be,
    Xwe = Ct,
    ZE = jI,
    Zwe = Hn,
    Jwe = ft,
    rg = Jwe("iterator"),
    BI = !1,
    Ea,
    Uv,
    Wv;
  [].keys && ((Wv = [].keys()), "next" in Wv ? ((Uv = ZE(ZE(Wv))), Uv !== Object.prototype && (Ea = Uv)) : (BI = !0));
  var Qwe =
    !Xwe(Ea) ||
    Kwe(function () {
      var e = {};
      return Ea[rg].call(e) !== e;
    });
  Qwe && (Ea = {});
  qwe(Ea[rg]) ||
    Zwe(Ea, rg, function () {
      return this;
    });
  var UI = { IteratorPrototype: Ea, BUGGY_SAFARI_ITERATORS: BI },
    eSe = UI.IteratorPrototype,
    tSe = FI,
    rSe = cd,
    nSe = qs,
    aSe = Zs,
    oSe = function () {
      return this;
    },
    iSe = function (e, t, r, n) {
      var a = t + " Iterator";
      return (e.prototype = tSe(eSe, { next: rSe(+!n, r) })), nSe(e, a, !1), (aSe[a] = oSe), e;
    },
    sSe = pr,
    cSe = tr,
    WI = Oy,
    lSe = Be,
    uSe = iSe,
    JE = jI,
    QE = Ly,
    fSe = qs,
    dSe = hd,
    Hv = Hn,
    hSe = ft,
    vSe = Zs,
    HI = UI,
    pSe = WI.PROPER,
    mSe = WI.CONFIGURABLE,
    ex = HI.IteratorPrototype,
    qc = HI.BUGGY_SAFARI_ITERATORS,
    Ci = hSe("iterator"),
    tx = "keys",
    Oi = "values",
    rx = "entries",
    gSe = function () {
      return this;
    },
    zI = function (e, t, r, n, a, o, i) {
      uSe(r, t, n);
      var s = function (y) {
          if (y === a && d) return d;
          if (!qc && y && y in u) return u[y];
          switch (y) {
            case tx:
              return function () {
                return new r(this, y);
              };
            case Oi:
              return function () {
                return new r(this, y);
              };
            case rx:
              return function () {
                return new r(this, y);
              };
          }
          return function () {
            return new r(this);
          };
        },
        c = t + " Iterator",
        l = !1,
        u = e.prototype,
        f = u[Ci] || u["@@iterator"] || (a && u[a]),
        d = (!qc && f) || s(a),
        v = (t === "Array" && u.entries) || f,
        p,
        m,
        g;
      if (
        (v && ((p = JE(v.call(new e()))), p !== Object.prototype && p.next && (JE(p) !== ex && (QE ? QE(p, ex) : lSe(p[Ci]) || Hv(p, Ci, gSe)), fSe(p, c, !0))),
        pSe &&
          a === Oi &&
          f &&
          f.name !== Oi &&
          (mSe
            ? dSe(u, "name", Oi)
            : ((l = !0),
              (d = function () {
                return cSe(f, this);
              }))),
        a)
      )
        if (((m = { values: s(Oi), keys: o ? d : s(tx), entries: s(rx) }), i)) for (g in m) (qc || l || !(g in u)) && Hv(u, g, m[g]);
        else sSe({ target: t, proto: !0, forced: qc || l }, m);
      return u[Ci] !== d && Hv(u, Ci, d, { name: a }), (vSe[t] = d), m;
    },
    VI = function (e, t) {
      return { value: e, done: t };
    },
    ySe = ai,
    Vy = jwe,
    nx = Zs,
    GI = Gs,
    bSe = hr.f,
    $Se = zI,
    Xc = VI,
    wSe = er,
    YI = "Array Iterator",
    SSe = GI.set,
    ESe = GI.getterFor(YI),
    xSe = $Se(
      Array,
      "Array",
      function (e, t) {
        SSe(this, { type: YI, target: ySe(e), index: 0, kind: t });
      },
      function () {
        var e = ESe(this),
          t = e.target,
          r = e.index++;
        if (!t || r >= t.length) return (e.target = void 0), Xc(void 0, !0);
        switch (e.kind) {
          case "keys":
            return Xc(r, !1);
          case "values":
            return Xc(t[r], !1);
        }
        return Xc([r, t[r]], !1);
      },
      "values"
    ),
    ax = (nx.Arguments = nx.Array);
  Vy("keys");
  Vy("values");
  Vy("entries");
  if (wSe && ax.name !== "values")
    try {
      bSe(ax, "name", { value: "values" });
    } catch {}
  var TSe = md,
    CSe = String,
    KI = function (e) {
      if (TSe(e) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
      return CSe(e);
    },
    Gy = Ve,
    OSe = Ay,
    _Se = KI,
    PSe = by,
    ISe = Gy("".charAt),
    ox = Gy("".charCodeAt),
    ASe = Gy("".slice),
    ix = function (e) {
      return function (t, r) {
        var n = _Se(PSe(t)),
          a = OSe(r),
          o = n.length,
          i,
          s;
        return a < 0 || a >= o
          ? e
            ? ""
            : void 0
          : ((i = ox(n, a)), i < 55296 || i > 56319 || a + 1 === o || (s = ox(n, a + 1)) < 56320 || s > 57343 ? (e ? ISe(n, a) : i) : e ? ASe(n, a, a + 2) : ((i - 55296) << 10) + (s - 56320) + 65536);
      };
    },
    RSe = { codeAt: ix(!1), charAt: ix(!0) },
    MSe = RSe.charAt,
    DSe = KI,
    qI = Gs,
    NSe = zI,
    sx = VI,
    XI = "String Iterator",
    kSe = qI.set,
    LSe = qI.getterFor(XI);
  NSe(
    String,
    "String",
    function (e) {
      kSe(this, { type: XI, string: DSe(e), index: 0 });
    },
    function () {
      var t = LSe(this),
        r = t.string,
        n = t.index,
        a;
      return n >= r.length ? sx(void 0, !0) : ((a = MSe(r, n)), (t.index += a.length), sx(a, !1));
    }
  );
  var ZI = { exports: {} },
    JI = {},
    cx = G6,
    FSe = Ys,
    jSe = q6,
    BSe = Array,
    USe = Math.max,
    WSe = function (e, t, r) {
      for (var n = FSe(e), a = cx(t, n), o = cx(r === void 0 ? n : r, n), i = BSe(USe(o - a, 0)), s = 0; a < o; a++, s++) jSe(i, s, e[a]);
      return (i.length = s), i;
    },
    HSe = Ba,
    zSe = ai,
    QI = pd.f,
    VSe = WSe,
    e8 = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
    GSe = function (e) {
      try {
        return QI(e);
      } catch {
        return VSe(e8);
      }
    };
  JI.f = function (t) {
    return e8 && HSe(t) === "Window" ? GSe(t) : QI(zSe(t));
  };
  var YSe = qe,
    KSe = YSe(function () {
      if (typeof ArrayBuffer == "function") {
        var e = new ArrayBuffer(8);
        Object.isExtensible(e) && Object.defineProperty(e, "a", { value: 8 });
      }
    }),
    qSe = qe,
    XSe = Ct,
    ZSe = Ba,
    lx = KSe,
    Cl = Object.isExtensible,
    JSe = qSe(function () {
      Cl(1);
    }),
    QSe =
      JSe || lx
        ? function (t) {
            return !XSe(t) || (lx && ZSe(t) === "ArrayBuffer") ? !1 : Cl ? Cl(t) : !0;
          }
        : Cl,
    e2e = qe,
    t2e = !e2e(function () {
      return Object.isExtensible(Object.preventExtensions({}));
    }),
    r2e = pr,
    n2e = Ve,
    a2e = vd,
    o2e = Ct,
    Yy = rr,
    i2e = hr.f,
    ux = pd,
    s2e = JI,
    Ky = QSe,
    c2e = xy,
    l2e = t2e,
    t8 = !1,
    an = c2e("meta"),
    u2e = 0,
    qy = function (e) {
      i2e(e, an, { value: { objectID: "O" + u2e++, weakData: {} } });
    },
    f2e = function (e, t) {
      if (!o2e(e)) return typeof e == "symbol" ? e : (typeof e == "string" ? "S" : "P") + e;
      if (!Yy(e, an)) {
        if (!Ky(e)) return "F";
        if (!t) return "E";
        qy(e);
      }
      return e[an].objectID;
    },
    d2e = function (e, t) {
      if (!Yy(e, an)) {
        if (!Ky(e)) return !0;
        if (!t) return !1;
        qy(e);
      }
      return e[an].weakData;
    },
    h2e = function (e) {
      return l2e && t8 && Ky(e) && !Yy(e, an) && qy(e), e;
    },
    v2e = function () {
      (p2e.enable = function () {}), (t8 = !0);
      var e = ux.f,
        t = n2e([].splice),
        r = {};
      (r[an] = 1),
        e(r).length &&
          ((ux.f = function (n) {
            for (var a = e(n), o = 0, i = a.length; o < i; o++)
              if (a[o] === an) {
                t(a, o, 1);
                break;
              }
            return a;
          }),
          r2e({ target: "Object", stat: !0, forced: !0 }, { getOwnPropertyNames: s2e.f }));
    },
    p2e = (ZI.exports = { enable: v2e, fastKey: f2e, getWeakData: d2e, onFreeze: h2e });
  a2e[an] = !0;
  var r8 = ZI.exports,
    m2e = Be,
    g2e = Ct,
    fx = Ly,
    y2e = function (e, t, r) {
      var n, a;
      return fx && m2e((n = t.constructor)) && n !== r && g2e((a = n.prototype)) && a !== r.prototype && fx(e, a), e;
    },
    b2e = pr,
    $2e = ot,
    w2e = Ve,
    dx = Dy,
    S2e = Hn,
    E2e = r8,
    x2e = wd,
    T2e = Fy,
    C2e = Be,
    O2e = ni,
    zv = Ct,
    Vv = qe,
    _2e = MI,
    P2e = qs,
    I2e = y2e,
    A2e = function (e, t, r) {
      var n = e.indexOf("Map") !== -1,
        a = e.indexOf("Weak") !== -1,
        o = n ? "set" : "add",
        i = $2e[e],
        s = i && i.prototype,
        c = i,
        l = {},
        u = function (y) {
          var b = w2e(s[y]);
          S2e(
            s,
            y,
            y === "add"
              ? function (S) {
                  return b(this, S === 0 ? 0 : S), this;
                }
              : y === "delete"
              ? function ($) {
                  return a && !zv($) ? !1 : b(this, $ === 0 ? 0 : $);
                }
              : y === "get"
              ? function (S) {
                  return a && !zv(S) ? void 0 : b(this, S === 0 ? 0 : S);
                }
              : y === "has"
              ? function (S) {
                  return a && !zv(S) ? !1 : b(this, S === 0 ? 0 : S);
                }
              : function (S, A) {
                  return b(this, S === 0 ? 0 : S, A), this;
                }
          );
        },
        f = dx(
          e,
          !C2e(i) ||
            !(
              a ||
              (s.forEach &&
                !Vv(function () {
                  new i().entries().next();
                }))
            )
        );
      if (f) (c = r.getConstructor(t, e, n, o)), E2e.enable();
      else if (dx(e, !0)) {
        var d = new c(),
          v = d[o](a ? {} : -0, 1) !== d,
          p = Vv(function () {
            d.has(1);
          }),
          m = _2e(function (y) {
            new i(y);
          }),
          g =
            !a &&
            Vv(function () {
              for (var y = new i(), b = 5; b--; ) y[o](b, b);
              return !y.has(-0);
            });
        m ||
          ((c = t(function (y, b) {
            T2e(y, s);
            var $ = I2e(new i(), y, c);
            return O2e(b) || x2e(b, $[o], { that: $, AS_ENTRIES: n }), $;
          })),
          (c.prototype = s),
          (s.constructor = c)),
          (p || g) && (u("delete"), u("has"), n && u("get")),
          (g || v) && u(o),
          a && s.clear && delete s.clear;
      }
      return (l[e] = c), b2e({ global: !0, constructor: !0, forced: c !== i }, l), P2e(c, e), a || r.setStrong(c, e, n), c;
    },
    R2e = Hn,
    M2e = function (e, t, r) {
      for (var n in t) R2e(e, n, t[n], r);
      return e;
    },
    D2e = yd,
    N2e = Ve,
    k2e = yy,
    L2e = Vs,
    F2e = Ys,
    j2e = rI,
    hx = N2e([].push),
    bn = function (e) {
      var t = e === 1,
        r = e === 2,
        n = e === 3,
        a = e === 4,
        o = e === 6,
        i = e === 7,
        s = e === 5 || o;
      return function (c, l, u, f) {
        for (var d = L2e(c), v = k2e(d), p = F2e(v), m = D2e(l, u), g = 0, y = f || j2e, b = t ? y(c, p) : r || i ? y(c, 0) : void 0, $, S; p > g; g++)
          if ((s || g in v) && (($ = v[g]), (S = m($, g, d)), e))
            if (t) b[g] = S;
            else if (S)
              switch (e) {
                case 3:
                  return !0;
                case 5:
                  return $;
                case 6:
                  return g;
                case 2:
                  hx(b, $);
              }
            else
              switch (e) {
                case 4:
                  return !1;
                case 7:
                  hx(b, $);
              }
        return o ? -1 : n || a ? a : b;
      };
    },
    B2e = { forEach: bn(0), map: bn(1), filter: bn(2), some: bn(3), every: bn(4), find: bn(5), findIndex: bn(6), filterReject: bn(7) },
    U2e = Ve,
    vx = M2e,
    Zc = r8.getWeakData,
    W2e = Fy,
    H2e = vr,
    z2e = ni,
    Gv = Ct,
    V2e = wd,
    n8 = B2e,
    px = rr,
    a8 = Gs,
    G2e = a8.set,
    Y2e = a8.getterFor,
    K2e = n8.find,
    q2e = n8.findIndex,
    X2e = U2e([].splice),
    Z2e = 0,
    Jc = function (e) {
      return e.frozen || (e.frozen = new o8());
    },
    o8 = function () {
      this.entries = [];
    },
    Yv = function (e, t) {
      return K2e(e.entries, function (r) {
        return r[0] === t;
      });
    };
  o8.prototype = {
    get: function (e) {
      var t = Yv(this, e);
      if (t) return t[1];
    },
    has: function (e) {
      return !!Yv(this, e);
    },
    set: function (e, t) {
      var r = Yv(this, e);
      r ? (r[1] = t) : this.entries.push([e, t]);
    },
    delete: function (e) {
      var t = q2e(this.entries, function (r) {
        return r[0] === e;
      });
      return ~t && X2e(this.entries, t, 1), !!~t;
    },
  };
  var J2e = {
      getConstructor: function (e, t, r, n) {
        var a = e(function (c, l) {
            W2e(c, o), G2e(c, { type: t, id: Z2e++, frozen: void 0 }), z2e(l) || V2e(l, c[n], { that: c, AS_ENTRIES: r });
          }),
          o = a.prototype,
          i = Y2e(t),
          s = function (c, l, u) {
            var f = i(c),
              d = Zc(H2e(l), !0);
            return d === !0 ? Jc(f).set(l, u) : (d[f.id] = u), c;
          };
        return (
          vx(o, {
            delete: function (c) {
              var l = i(this);
              if (!Gv(c)) return !1;
              var u = Zc(c);
              return u === !0 ? Jc(l).delete(c) : u && px(u, l.id) && delete u[l.id];
            },
            has: function (l) {
              var u = i(this);
              if (!Gv(l)) return !1;
              var f = Zc(l);
              return f === !0 ? Jc(u).has(l) : f && px(f, u.id);
            },
          }),
          vx(
            o,
            r
              ? {
                  get: function (l) {
                    var u = i(this);
                    if (Gv(l)) {
                      var f = Zc(l);
                      return f === !0 ? Jc(u).get(l) : f ? f[u.id] : void 0;
                    }
                  },
                  set: function (l, u) {
                    return s(this, l, u);
                  },
                }
              : {
                  add: function (l) {
                    return s(this, l, !0);
                  },
                }
          ),
          a
        );
      },
    },
    Q2e = A2e,
    eEe = J2e;
  Q2e(
    "WeakSet",
    function (e) {
      return function () {
        return e(this, arguments.length ? arguments[0] : void 0);
      };
    },
    eEe
  );
  var tEe = {
      CSSRuleList: 0,
      CSSStyleDeclaration: 0,
      CSSValueList: 0,
      ClientRectList: 0,
      DOMRectList: 0,
      DOMStringList: 0,
      DOMTokenList: 1,
      DataTransferItemList: 0,
      FileList: 0,
      HTMLAllCollection: 0,
      HTMLCollection: 0,
      HTMLFormElement: 0,
      HTMLSelectElement: 0,
      MediaList: 0,
      MimeTypeArray: 0,
      NamedNodeMap: 0,
      NodeList: 1,
      PaintRequestList: 0,
      Plugin: 0,
      PluginArray: 0,
      SVGLengthList: 0,
      SVGNumberList: 0,
      SVGPathSegList: 0,
      SVGPointList: 0,
      SVGStringList: 0,
      SVGTransformList: 0,
      SourceBufferList: 0,
      StyleSheetList: 0,
      TextTrackCueList: 0,
      TextTrackList: 0,
      TouchList: 0,
    },
    rEe = dd,
    Kv = rEe("span").classList,
    mx = Kv && Kv.constructor && Kv.constructor.prototype,
    nEe = mx === Object.prototype ? void 0 : mx,
    gx = ot,
    i8 = tEe,
    aEe = nEe,
    Mi = xSe,
    yx = hd,
    oEe = qs,
    iEe = ft,
    qv = iEe("iterator"),
    Xv = Mi.values,
    s8 = function (e, t) {
      if (e) {
        if (e[qv] !== Xv)
          try {
            yx(e, qv, Xv);
          } catch {
            e[qv] = Xv;
          }
        if ((oEe(e, t, !0), i8[t])) {
          for (var r in Mi)
            if (e[r] !== Mi[r])
              try {
                yx(e, r, Mi[r]);
              } catch {
                e[r] = Mi[r];
              }
        }
      }
    };
  for (var Zv in i8) s8(gx[Zv] && gx[Zv].prototype, Zv);
  s8(aEe, "DOMTokenList");
  function bx(e, t, r, n) {
    if (r === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
    if (typeof t == "function" ? e !== t || !n : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return r === "m" ? n : r === "a" ? n.call(e) : n ? n.value : t.get(e);
  }
  var Ol,
    c8,
    l8,
    Di = "#ch-tooltip",
    $x = {
      enabled: !0,
      text: function (t, r, n) {
        return "".concat(r, " - ").concat(n.format("LLLL"));
      },
    },
    sEe = { placement: "top", modifiers: [{ name: "offset", options: { offset: [0, 8] } }] },
    u8 = {
      getBoundingClientRect: function () {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0,
          r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        return { width: 0, height: 0, top: r, right: t, bottom: r, left: t, x: t, y: r, toJSON: function () {} };
      },
    },
    cEe = (function () {
      function e(t) {
        Dpe(this, e), Ol.add(this), (this.name = "Tooltip"), (this.calendar = t), (this.root = null), (this.popperInstance = null), (this.options = $x), (this.listenerAttached = !1);
      }
      return (
        Npe(e, [
          {
            key: "setup",
            value: function (r) {
              this.options = Object.assign(Object.assign({}, $x), r);
              var n = this.calendar.eventEmitter;
              if (!this.options.enabled) {
                this.listenerAttached && (n.off("mouseover", this.mouseOverCallback, this), n.off("mouseout", this.mouseOutCallback, this), (this.listenerAttached = !1)), this.destroy();
                return;
              }
              if (((this.popperOptions = Object.assign(Object.assign({}, sEe), this.options)), (this.root = document.getElementById(Di.slice(1))), !this.root)) {
                var a = document.createElement("div");
                a.setAttribute("id", Di.slice(1)),
                  a.setAttribute("role", "tooltip"),
                  (a.innerHTML = '<div id="'.concat(Di.slice(1), '-arrow" data-popper-arrow="true"></div>') + '<span id="'.concat(Di.slice(1), '-body"></span>')),
                  (this.root = document.body.appendChild(a));
              }
              this.root.setAttribute("data-theme", this.calendar.options.options.theme),
                (this.popperInstance = tT(u8, this.root, this.popperOptions)),
                this.listenerAttached || (n.on("mouseover", this.mouseOverCallback, this), n.on("mouseout", this.mouseOutCallback, this), (this.listenerAttached = !0));
            },
          },
          {
            key: "mouseOverCallback",
            value: function (r, n, a) {
              bx(this, Ol, "m", c8).call(this, r.target, n, a);
            },
          },
          {
            key: "mouseOutCallback",
            value: function () {
              bx(this, Ol, "m", l8).call(this);
            },
          },
          {
            key: "paint",
            value: function () {
              return Promise.resolve();
            },
          },
          {
            key: "destroy",
            value: function () {
              return this.root && this.root.remove(), Promise.resolve();
            },
          },
        ]),
        e
      );
    })();
  (Ol = new WeakSet()),
    (c8 = function (t, r, n) {
      var a = this,
        o = this.options.text,
        i = o ? o(r, n, this.calendar.dateHelper.date(r)) : null;
      i &&
        ((u8.getBoundingClientRect = function () {
          return t.getBoundingClientRect();
        }),
        (document.getElementById("".concat(Di.slice(1), "-body")).innerHTML = i),
        this.popperInstance.setOptions(function () {
          return Object.assign(Object.assign({}, a.popperOptions), { modifiers: [].concat(N2(a.popperOptions.modifiers), [{ name: "eventListeners", enabled: !0 }]) });
        }),
        this.popperInstance.update(),
        this.root.setAttribute("data-show", "1"));
    }),
    (l8 = function () {
      var t = this;
      this.root.removeAttribute("data-show"),
        this.popperInstance.setOptions(function () {
          return Object.assign(Object.assign({}, t.popperOptions), { modifiers: [].concat(N2(t.popperOptions.modifiers), [{ name: "eventListeners", enabled: !1 }]) });
        });
    });
  const lEe = () => {
      function e(n) {
        const a = new Date(n, 0, 1),
          o = new Date(n, 11, 31),
          i = [];
        for (let s = a; s <= o; s.setDate(s.getDate() + 1)) i.push({ date: Rl(s).format("YYYY-MM-DD"), value: Math.random() > 0.5 ? Math.floor(Math.random() * 30) : 0 });
        return i;
      }
      const t = new Date().getFullYear();
      return e(t);
    },
    uEe = (e) => {
      const t = new Date().getFullYear(),
        r = new Date(t, 0, 1),
        n = new Date(t, 11, 31),
        a = [];
      for (let o = r; o <= n; o.setDate(o.getDate() + 1)) {
        const i = Rl(o).format("YYYY-MM-DD"),
          s = e.find((c) => c.date === i);
        a.push({ date: i, value: s ? s.value : 0 });
      }
      return a;
    };
  let wx = !1;
  const fEe = () => {
      const { isHiddenFeatureOn: e } = $O(),
        t = h.useRef();
      return (
        h.useEffect(() => {
          const r = document.querySelector("#cal-heatmap-container");
          (r && (r == null ? void 0 : r.children.length) > 1) ||
            (!wx &&
              !t.current &&
              ((wx = !0),
              (t.current = new x6()),
              t.current.paint(
                {
                  itemSelector: "#cal-heatmap-container",
                  range: 12,
                  domain: { type: "month", gutter: 20, label: { text: "MMM", textAlign: "middle", position: "top" } },
                  subDomain: { type: "xDay", radius: 2, width: 12, height: 12, gutter: 2, label: "D", color: (n, a, o) => (a < 10 ? "#ccc" : "#fff") },
                  date: { start: new Date(new Date().getFullYear(), 1, 1) },
                  scale: { color: { range: ["#fff", "#cc8500"], interpolate: "hsl", type: "linear", domain: [1, 30] } },
                  data: { source: [], y: "value", x: "date" },
                },
                [
                  [
                    cEe,
                    {
                      text: function (n, a, o) {
                        return a ? `${a} activities on ${o.format("LL")}` : `No activity on ${o.format("LL")}`;
                      },
                    },
                  ],
                ]
              ),
              gs(["activities"]).then((n) => {
                n != null && n.activities && t.current && t.current.fill(uEe(n == null ? void 0 : n.activities));
              })));
        }, []),
        h.useEffect(() => {
          if (t.current) {
            const r = document.querySelector("#cal-heatmap-container");
            r && (r.style.width = "fit-content");
          }
        }, [t.current]),
        h.useEffect(() => {
          e && t.current && t.current.fill(lEe());
        }, [e]),
        x("div", { id: "cal-heatmap-container" })
      );
    },
    dEe = (e) => {
      let t = 0;
      return e > 3 && (t = 600), e > 6 && (t = 1e3), (e / 12) * t;
    };
  function hEe() {
    const [e, t] = h.useState(!0),
      r = h.useCallback((n) => {
        n !== null &&
          setTimeout(() => {
            const a = new Date().getMonth();
            (n.scrollLeft = dEe(a + 1)),
              setTimeout(() => {
                t(!1);
              }, 150);
          }, 300);
      }, []);
    return x("div", {
      className: "activity-graph-container",
      children: se("div", {
        className: "h-[120px] mt-1 relative",
        children: [
          x("div", { className: "h-[120px] overflow-x-auto  overflow-y-hidden relative transition", ref: r, children: x(fEe, {}) }),
          e ? x("div", { className: "absolute w-full top-0 right-0 bottom-0 left-0 bg-white", children: x(dg, { height: "100px", bg: "#ddd" }) }) : null,
        ],
      }),
    });
  }
  const vEe = new Map([
      [1, "Small"],
      [2, "Default"],
      [3, "Large"],
    ]),
    st = { ".chakra-switch__track[data-checked]:not([data-theme])": { backgroundColor: `${H8}` } },
    pEe = chrome.runtime.getURL(D8),
    mEe = chrome.runtime.getURL(TW),
    gEe = chrome.runtime.getManifest(),
    ht = (e, t) => {
      const r = {};
      switch (t) {
        case "renderWay":
        case "isScrollToTopChecked":
        case "isHideBreadCrumb":
        case "isHideBacklinks":
        case "isEnableCalendarShortcut":
        case "isHidePageProperites":
        case "isHideHorizontalScrollBar":
        case "isEnableImageBorder":
        case "isEnableHeaderCenter":
        case "isEnablePageWidthMedium":
        case "isEnableMoreLineHeight":
        case "isHidePropertyIcon":
        case "isBeautifyScrollBar":
        case "showWordsCount":
        case "isDisableAIPopup":
        case "isHideSlashMenuWhenPressSpacebar":
          (r[t] = e), En(r);
          break;
      }
      Qc(r);
    };
  function yEe() {
    const [e, t] = h.useState(!1),
      [r, n] = h.useState(0),
      [a, o] = h.useState(!1),
      [i, s] = h.useState(!0),
      [c, l] = h.useState(""),
      [u, f] = h.useState(!1),
      [d, v] = h.useState(""),
      [p, m] = h.useState(!1),
      [g, y] = h.useState(2),
      [b, $] = h.useState(!1),
      [S, A] = h.useState(!1),
      [P, M] = h.useState(!1),
      [T, F] = h.useState(!1),
      [k, D] = h.useState(!1),
      [_, O] = h.useState(!1),
      [w, R] = h.useState(!1),
      [I, N] = h.useState(!1),
      [B, W] = h.useState(!1),
      [C, E] = h.useState(!1),
      V = (ee) => {
        var oe, j;
        E((oe = ee.target) == null ? void 0 : oe.checked), ht((j = ee.target) == null ? void 0 : j.checked, "isHideSlashMenuWhenPressSpacebar");
      },
      [X, q] = h.useState(!1),
      K = (ee) => {
        var oe, j;
        q((oe = ee.target) == null ? void 0 : oe.checked), ht((j = ee.target) == null ? void 0 : j.checked, "isDisableAIPopup");
      },
      [te, z] = h.useState(!1),
      [J, H] = h.useState(!1),
      [G, Y] = h.useState(!1),
      L = jC(Qu),
      { isLicenseValid: ne } = wO();
    h.useEffect(() => {
      L.isEnterLicense ? t(!0) : t(!1), L.isTrialCheckModalShow ? o(!0) : o(!1);
    }, [L]);
    const Z = async (ee) => {
        l(ee);
        const oe = { fontfamilay: ee };
        En({ ...oe }), Qc(oe);
      },
      Q = async (ee) => {
        p || (En({ backgroundColor: ee }), v(ee), Qc({ backgroundColor: ee }));
      },
      [le, he] = h.useState(!1),
      $e = (ee) => {
        var oe, j;
        he((oe = ee.target) == null ? void 0 : oe.checked), ht((j = ee.target) == null ? void 0 : j.checked, "renderWay");
      },
      [He, Se] = h.useState(!1),
      Xe = (ee) => {
        var oe, j;
        Se((oe = ee.target) == null ? void 0 : oe.checked), ht((j = ee.target) == null ? void 0 : j.checked, "isEnableMoreLineHeight");
      },
      [U, re] = h.useState(!1),
      [ae, ce] = h.useState(!1),
      fe = (ee) => {
        var oe, j;
        re((oe = ee.target) == null ? void 0 : oe.checked), ht((j = ee.target) == null ? void 0 : j.checked, "isEnablePageWidthMedium");
      },
      me = (ee) => {
        var oe, j;
        ht((oe = ee.target) == null ? void 0 : oe.checked, "isScrollToTopChecked"), A((j = ee.target) == null ? void 0 : j.checked);
      },
      Te = (ee) => {
        var oe, j;
        ht((oe = ee.target) == null ? void 0 : oe.checked, "isEnableImageBorder"), M((j = ee.target) == null ? void 0 : j.checked);
      },
      dt = (ee) => {
        var oe, j;
        ht((oe = ee.target) == null ? void 0 : oe.checked, "isEnableHeaderCenter"), F((j = ee.target) == null ? void 0 : j.checked);
      },
      mr = (ee) => {
        var oe, j;
        ht((oe = ee.target) == null ? void 0 : oe.checked, "showWordsCount"), Y((j = ee.target) == null ? void 0 : j.checked);
      },
      gr = (ee) => {
        var oe, j;
        ht((oe = ee.target) == null ? void 0 : oe.checked, "isHideBreadCrumb"), R((j = ee.target) == null ? void 0 : j.checked);
      },
      ie = (ee) => {
        var oe, j;
        ht((oe = ee.target) == null ? void 0 : oe.checked, "isHideBacklinks"), N((j = ee.target) == null ? void 0 : j.checked);
      },
      ve = (ee) => {
        var oe, j;
        ht((oe = ee.target) == null ? void 0 : oe.checked, "isHideHorizontalScrollBar"), O((j = ee.target) == null ? void 0 : j.checked);
      },
      yr = (ee) => {
        var oe, j;
        ht((oe = ee.target) == null ? void 0 : oe.checked, "isHidePageProperites"), W((j = ee.target) == null ? void 0 : j.checked);
      },
      it = (ee) => {
        var oe, j;
        ht((oe = ee.target) == null ? void 0 : oe.checked, "isHidePropertyIcon"), z((j = ee.target) == null ? void 0 : j.checked);
      },
      nr = (ee) => {
        var oe, j;
        ht((oe = ee.target) == null ? void 0 : oe.checked, "isBeautifyScrollBar"), H((j = ee.target) == null ? void 0 : j.checked);
      },
      ii = (ee) => {
        var oe, j;
        ht((oe = ee.target) == null ? void 0 : oe.checked, "isEnableCalendarShortcut"), D((j = ee.target) == null ? void 0 : j.checked);
      },
      Sd = (ee) => {
        const oe = { fontSize: ee };
        y(ee), En(oe), Qc(oe);
      },
      [Ed, Js] = h.useState(!0);
    return (
      h.useEffect(() => {
        SO().then((j) => {
          const { isLicenseValid: pn, trialStatus: Wa, leftTrialDays: Qs = 0 } = j;
          pn || (Wa === wo.in ? Math.random() >= 0.5 && o(!0) : Wa === wo.expired && o(!0), n(Qs));
        }),
          gs([
            "fontfamilay",
            "backgroundColor",
            "isDarkMode",
            "fontSize",
            "renderWay",
            "isScrollToTopChecked",
            "isEnableCalendarShortcut",
            "isHideHorizontalScrollBar",
            "isHideBreadCrumb",
            "isHideBacklinks",
            "isHidePageProperites",
            "isEnableImageBorder",
            "isEnableHeaderCenter",
            "isEnableMoreLineHeight",
            "isEnablePageWidthMedium",
            "isEnablePageWidthMediumDisabled",
            "isHidePropertyIcon",
            "showWordsCount",
            "isDisableAIPopup",
            "isHideSlashMenuWhenPressSpacebar",
            "trialStartDate",
            "isLicenseValid",
          ]).then((j) => {
            const pn = (j == null ? void 0 : j.fontfamilay) || si[0].value;
            pn && (si.some((f8) => f8.value === pn) ? l(pn) : l(si[0].value));
            const Wa = (j == null ? void 0 : j.backgroundColor) || Qy[0].value;
            Wa && v(Wa);
            const Qs = (j == null ? void 0 : j.isDarkMode) || !1;
            Qs && m(Qs);
            const Xy = j == null ? void 0 : j.fontSize;
            Xy && y(Xy),
              (j == null ? void 0 : j.renderWay) === !0 ? he(!0) : (j == null ? void 0 : j.renderWay) === !1 && he(!1),
              (j == null ? void 0 : j.isScrollToTopChecked) === !0 ? A(!0) : (j == null ? void 0 : j.isScrollToTopChecked) === !1 && A(!1),
              (j == null ? void 0 : j.isEnableCalendarShortcut) === !0 ? D(!0) : (j == null ? void 0 : j.isEnableCalendarShortcut) === !1 && D(!1),
              (j == null ? void 0 : j.isHideHorizontalScrollBar) === !0 ? O(!0) : (j == null ? void 0 : j.isHideHorizontalScrollBar) === !1 && O(!1),
              (j == null ? void 0 : j.isHideBreadCrumb) === !0 ? R(!0) : (j == null ? void 0 : j.isHideBreadCrumb) === !1 && R(!1),
              (j == null ? void 0 : j.isHideBacklinks) === !0 ? N(!0) : (j == null ? void 0 : j.isHideBacklinks) === !1 && N(!1),
              (j == null ? void 0 : j.isHidePageProperites) === !0 ? W(!0) : (j == null ? void 0 : j.isHidePageProperites) === !1 && W(!1),
              (j == null ? void 0 : j.isEnableImageBorder) === !0 ? M(!0) : (j == null ? void 0 : j.isEnableImageBorder) === !1 && M(!1),
              mn(j == null ? void 0 : j.isEnableHeaderCenter) && F(j == null ? void 0 : j.isEnableHeaderCenter),
              mn(j == null ? void 0 : j.isEnableMoreLineHeight) && Se(j == null ? void 0 : j.isEnableMoreLineHeight),
              mn(j == null ? void 0 : j.isEnablePageWidthMedium) && re(j == null ? void 0 : j.isEnablePageWidthMedium),
              mn(j == null ? void 0 : j.isHidePropertyIcon) && z(j == null ? void 0 : j.isHidePropertyIcon),
              mn(j == null ? void 0 : j.isEnablePageWidthMediumDisabled) && ce(j == null ? void 0 : j.isEnablePageWidthMediumDisabled),
              mn(j == null ? void 0 : j.showWordsCount) && Y(j == null ? void 0 : j.showWordsCount),
              mn(j == null ? void 0 : j.isDisableAIPopup) && q(j == null ? void 0 : j.isDisableAIPopup),
              mn(j == null ? void 0 : j.isHideSlashMenuWhenPressSpacebar) && E(j == null ? void 0 : j.isHideSlashMenuWhenPressSpacebar);
          }),
          chrome.tabs.onActivated.addListener(function (j) {
            j.windowId === chrome.windows.WINDOW_ID_CURRENT ? Js(!0) : Js(!1);
          }),
          chrome.runtime.onMessage.addListener(function (j, pn, Wa) {
            j.action === U8 && window.close();
          }),
          chrome.tabs.query({ active: !0, currentWindow: !0 }).then((j) => {
            const pn = j[0].url;
            W8(pn) ? f(!0) : f(!1), s(!1);
          });
        const ee = Jy("isEnablePageWidthMedium");
        ee.subscribe((j) => {
          re(j), En({ isEnablePageWidthMedium: j });
        });
        const oe = Jy("isEnablePageWidthMediumDisabled");
        return (
          oe.subscribe((j) => {
            ce(j), En({ isEnablePageWidthMediumDisabled: j });
          }),
          () => {
            ee.unsubscribe(), oe.unsubscribe();
          }
        );
      }, []),
      se("div", {
        className: "sticky-toc-container",
        children: [
          se("div", {
            className: "head",
            children: [
              x("div", { className: "icon cursor-pointer", onClick: Od, role: "button", tabIndex: 0, style: { backgroundImage: `url(${pEe})` }, "aria-label": "Notion Power logo image" }),
              se("div", {
                className: "title flex items-center",
                children: [
                  x(Ue, { as: "h4", size: "md", className: "cursor-pointer hover:underline", onClick: Od, children: "Notion Power" }),
                  u
                    ? x("div", {
                        onClick: () => t(!0),
                        className: `ml-6 flex items-center gpa-2 !cursor-pointer ${ne ? "" : "heart-beat-animated"}`,
                        role: "button",
                        tabIndex: 0,
                        children: se(_l, {
                          children: [
                            x(PL, { color: ne ? "green" : "red", className: "mr-2  hover:scale-150 hover:tada-animated " }),
                            ne ? null : se("div", { children: [se("span", { className: "font-bold text-red-500", children: [" ", r, " days"] }), " ", "left in free trial"] }),
                          ],
                        }),
                      })
                    : null,
                ],
              }),
            ],
          }),
          x(dg, {
            isLoaded: !i,
            children: x("div", {
              className: "settings p-2",
              children:
                u || !Ed
                  ? se(_l, {
                      children: [
                        x(za, {
                          className: "activity-graph-section",
                          children: x(Ha, {
                            padding: "16px",
                            children: x(qn, {
                              divider: x(Xn, { color: "red" }),
                              spacing: "1",
                              children: se("div", {
                                className: "a",
                                children: [
                                  x(Ue, {
                                    as: "h6",
                                    size: "xs",
                                    children: x(vt, {
                                      content: "Activities Graph indicate your daily activity and usage level on the Notion.",
                                      className: "HoverCardContent",
                                      children: x("div", { className: "text-black cursor-pointer", children: "Activities Graph" }),
                                    }),
                                  }),
                                  x(hEe, {}),
                                ],
                              }),
                            }),
                          }),
                        }),
                        x(za, {
                          className: "mt-2 font-family-section",
                          children: x(Ha, {
                            padding: "16px",
                            children: se(qn, {
                              divider: x(Xn, { color: "red" }),
                              spacing: "1",
                              children: [
                                se("div", {
                                  children: [
                                    se("div", {
                                      className: "color-setting mt-2 flex justify-between",
                                      children: [
                                        x("div", {
                                          className: "font-weight text-left basis-[100px] flex items-center",
                                          id: "trigger-ele-one",
                                          children: x(Ue, { as: "h6", size: "xs", children: "Theme" }),
                                        }),
                                        x("div", {
                                          className: "flex-1 flex justify-around max-w-[200px]",
                                          children: Qy.map((ee, oe) =>
                                            x(
                                              "div",
                                              {
                                                style: { backgroundColor: ee.value },
                                                className: N8(` bgcolor ${d === ee.value ? "active" : ""}`, p ? "cursor-not-allowed opacity-50" : "cursor-pointer"),
                                                onClick: () => Q(ee.value),
                                                role: "button",
                                                tabIndex: 0,
                                                "aria-label": `select ${ee.value} background color`,
                                              },
                                              oe
                                            )
                                          ),
                                        }),
                                      ],
                                    }),
                                    p ? x("div", { className: "text-right text-xs font-thin text-slate-500 mt-2", children: "Not support in dark mode." }) : null,
                                  ],
                                }),
                                x("div", {
                                  children: se("div", {
                                    className: "font-family-setting text-left flex mt-2",
                                    children: [
                                      x("div", {
                                        className: "font-weight text-left basis-[150px]",
                                        id: "trigger-ele-two",
                                        children: se(Ue, { as: "h6", size: "xs", children: ["Font Family ", x(SW, {})] }),
                                      }),
                                      x("div", {
                                        className: "flex-1 text-right",
                                        children: se(gn.Root, {
                                          onValueChange: Z,
                                          size: "1",
                                          value: c,
                                          children: [
                                            x(gn.Trigger, { className: "w-2/3", color: "indigo", placeholder: "Select Font Family", variant: "surface" }),
                                            se(gn.Content, {
                                              position: "popper",
                                              children: [
                                                x(gn.Group, { children: si.slice(0, 1).map((ee, oe) => x(gn.Item, { value: ee.value, children: ee.name }, oe)) }),
                                                x(gn.Separator, {}),
                                                x(gn.Group, { children: si.slice(1).map((ee, oe) => x(gn.Item, { value: ee.value, children: ee.name }, oe)) }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      }),
                                    ],
                                  }),
                                }),
                                x("div", {
                                  children: se("div", {
                                    className: "font-family-setting text-left flex mt-2 justify-between items-center",
                                    children: [
                                      x("div", { className: "font-weight text-left basis-[100px]", children: x(Ue, { as: "h6", size: "xs", children: "Font Size" }) }),
                                      se("div", {
                                        className: "text-right w-[240px] flex justify-between items-center",
                                        children: [
                                          x("span", { className: "text-sm", children: "Aa" }),
                                          se(sT, {
                                            className: "mx-6",
                                            "aria-label": "change font size",
                                            onChange: (ee) => Sd(ee),
                                            onMouseEnter: () => $(!0),
                                            onMouseLeave: () => $(!1),
                                            value: g,
                                            min: 1,
                                            max: 3,
                                            step: 1,
                                            children: [
                                              x(lT, { bg: "red.100", children: x(uT, { bg: "#FFA700" }) }),
                                              x(fT, {
                                                hasArrow: !0,
                                                bg: "#1c2024",
                                                color: "white",
                                                placement: "top",
                                                isOpen: b,
                                                label: `${vEe.get(g)}`,
                                                children: x(cT, { boxSize: 4, color: "tomato" }),
                                              }),
                                            ],
                                          }),
                                          x("span", { className: "text-2xl", children: "Aa" }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          }),
                        }),
                        x(za, {
                          className: "mt-2",
                          children: x(Ha, {
                            padding: "16px",
                            children: se(qn, {
                              divider: x(Xn, { color: "red" }),
                              spacing: "1",
                              children: [
                                se("div", {
                                  className: "toc-settings  text-left mt-2 settings-item-container",
                                  children: [
                                    x("div", {
                                      className: "font-extralight text-left basis-[100px]",
                                      children: x(Ue, {
                                        as: "h6",
                                        size: "xs",
                                        children: x(vt, {
                                          content: "Generate a fixed Table of Contents (TOC) on the right side of the page.",
                                          className: "HoverCardContent",
                                          children: x("div", { className: "text-black", children: "TOC" }),
                                        }),
                                      }),
                                    }),
                                    x("div", { className: "text-right flex-1 pr-2", children: x(Je, { isChecked: le, onChange: (ee) => $e(ee), sx: st, size: "lg" }) }),
                                  ],
                                }),
                                se("div", {
                                  className: "scroll-to-top-settings text-left mt-2 settings-item-container",
                                  children: [
                                    x("div", {
                                      className: "font-extralight text-left basis-[200px]",
                                      children: x(Ue, {
                                        as: "h6",
                                        size: "xs",
                                        children: x(vt, {
                                          content: "A Scroll-To-Top Button located in the bottom\r right corner.",
                                          className: "HoverCardContent",
                                          children: x("div", { className: "text-black", children: "Scroll-To-Top" }),
                                        }),
                                      }),
                                    }),
                                    x("div", { className: "text-right flex-1 pr-2", children: x(Je, { isChecked: S, onChange: me, sx: st, size: "lg" }) }),
                                  ],
                                }),
                                se("div", {
                                  className: "scroll-to-top-settings text-left mt-2 settings-item-container",
                                  children: [
                                    x("div", {
                                      className: "font-extralight text-left basis-[200px]",
                                      children: x(Ue, {
                                        as: "h6",
                                        size: "xs",
                                        children: x(vt, {
                                          content: "Adding a border to an image, relative to the page, increases its distinctiveness.",
                                          className: "HoverCardContent",
                                          children: x("div", { className: "text-black", children: "Image Border" }),
                                        }),
                                      }),
                                    }),
                                    x("div", { className: "text-right flex-1 pr-2", children: x(Je, { isChecked: P, onChange: Te, sx: st, size: "lg" }) }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        }),
                        x(za, {
                          className: "mt-2",
                          children: x(Ha, {
                            padding: "16px",
                            children: se(qn, {
                              divider: x(Xn, { color: "red" }),
                              spacing: "1",
                              children: [
                                se("div", {
                                  className: "text-left mt-2 settings-item-container",
                                  children: [
                                    x("div", {
                                      className: "font-extralight text-left basis-[200px]",
                                      children: se(Ue, {
                                        as: "h6",
                                        size: "xs",
                                        children: [
                                          " ",
                                          x(vt, {
                                            className: "HoverCardContent",
                                            content: "Increase line spacing and enjoy a more comfortable reading environment.",
                                            children: x("div", { className: "text-black", children: "Increase Line Spacing" }),
                                          }),
                                        ],
                                      }),
                                    }),
                                    x("div", {
                                      className: "text-right flex-1",
                                      children: x("div", { className: "text-right flex-1 pr-2", children: x(Je, { isChecked: He, onChange: Xe, sx: st, size: "lg" }) }),
                                    }),
                                  ],
                                }),
                                se("div", {
                                  className: "text-left flex mt-2 justify-between items-center settings-item-container",
                                  children: [
                                    x("div", {
                                      className: "font-extralight text-left basis-[200px]",
                                      children: se(Ue, {
                                        as: "h6",
                                        size: "xs",
                                        children: [
                                          " ",
                                          x(vt, {
                                            className: "HoverCardContent",
                                            content: "Besides the default width and full-screen width, you can set the page to a medium width.",
                                            children: x("div", { className: "text-black", children: "Medium Width" }),
                                          }),
                                        ],
                                      }),
                                    }),
                                    x("div", {
                                      className: "text-right flex-1 ",
                                      children: x("div", {
                                        className: "text-right flex-1 pr-2",
                                        children: ae
                                          ? x(vt, {
                                              className: "HoverCardContent",
                                              content: "Already set to full width. Click the top right corner of the page to disable the full-width setting.",
                                              children: x(Je, { isChecked: U, onChange: fe, sx: st, size: "lg", disabled: ae }),
                                            })
                                          : x(Je, { isChecked: U, onChange: fe, sx: st, size: "lg", disabled: ae }),
                                      }),
                                    }),
                                  ],
                                }),
                                se("div", {
                                  className: "mt-2 settings-item-container",
                                  children: [
                                    x("div", {
                                      className: "font-extralight text-left basis-[200px]",
                                      children: se(Ue, {
                                        as: "h6",
                                        size: "xs",
                                        children: [
                                          " ",
                                          x(vt, {
                                            content: "Center the heading to increase readability and hierarchical structure of the article.",
                                            className: "HoverCardContent",
                                            children: x("div", { className: "text-black", children: "Center Heading" }),
                                          }),
                                        ],
                                      }),
                                    }),
                                    x("div", { className: "text-right flex-1 pr-2", children: x(Je, { isChecked: T, onChange: dt, sx: st, size: "lg" }) }),
                                  ],
                                }),
                                se("div", {
                                  className: "mt-2 settings-item-container",
                                  children: [
                                    x("div", {
                                      className: "font-extralight text-left basis-[200px]",
                                      children: se(Ue, {
                                        as: "h6",
                                        size: "xs",
                                        children: [
                                          " ",
                                          x(vt, {
                                            content: "Count the number of words and characters in the page.",
                                            className: "HoverCardContent",
                                            children: x("div", { className: "text-black", children: "Word Count" }),
                                          }),
                                        ],
                                      }),
                                    }),
                                    x("div", { className: "text-right flex-1 pr-2", children: x(Je, { isChecked: G, onChange: mr, sx: st, size: "lg" }) }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        }),
                        x(za, {
                          className: "mt-2",
                          children: x(Ha, {
                            padding: "16px",
                            children: se(qn, {
                              divider: x(Xn, { color: "red" }),
                              spacing: "1",
                              children: [
                                se("div", {
                                  className: "text-left mt-2 settings-item-container",
                                  children: [
                                    x("div", {
                                      className: "font-extralight text-left basis-[200px]",
                                      children: x(Ue, {
                                        as: "h6",
                                        size: "xs",
                                        children: x(vt, {
                                          content: "Hide the page properties at the top of the page to save space and improve aesthetics.",
                                          className: "HoverCardContent",
                                          children: x("div", { className: "text-black", children: "Hide Page Properties" }),
                                        }),
                                      }),
                                    }),
                                    x("div", {
                                      className: "text-right flex-1",
                                      children: x("div", { className: "text-right flex-1 pr-2", children: x(Je, { isChecked: B, onChange: yr, sx: st, size: "lg" }) }),
                                    }),
                                  ],
                                }),
                                se("div", {
                                  className: "text-left mt-2 settings-item-container",
                                  children: [
                                    x("div", {
                                      className: "font-extralight text-left basis-[300px]",
                                      children: x(Ue, {
                                        as: "h6",
                                        size: "xs",
                                        children: x(vt, {
                                          content: "Remove the icons next to the property name in a table view of a database",
                                          className: "HoverCardContent",
                                          children: x("div", { className: "text-black", children: "Hide Property Icon In Database column" }),
                                        }),
                                      }),
                                    }),
                                    x("div", {
                                      className: "text-right flex-1",
                                      children: x("div", { className: "text-right flex-1 pr-2", children: x(Je, { isChecked: te, onChange: it, sx: st, size: "lg" }) }),
                                    }),
                                  ],
                                }),
                                se("div", {
                                  className: "text-left mt-2 settings-item-container",
                                  children: [
                                    x("div", {
                                      className: "font-extralight text-left basis-[200px]",
                                      children: x(Ue, {
                                        as: "h6",
                                        size: "xs",
                                        children: x(vt, {
                                          content: "Enhance the scrollbar appearance",
                                          className: "HoverCardContent",
                                          children: x("div", { className: "text-black", children: "Beautify Scroll Bar" }),
                                        }),
                                      }),
                                    }),
                                    x("div", {
                                      className: "text-right flex-1",
                                      children: x("div", { className: "text-right flex-1 pr-2", children: x(Je, { isChecked: J, onChange: nr, sx: st, size: "lg" }) }),
                                    }),
                                  ],
                                }),
                                se("div", {
                                  className: "toc-settings  text-left mt-2 settings-item-container",
                                  children: [
                                    x("div", {
                                      className: "font-extralight text-left basis-[200px]",
                                      children: x(Ue, {
                                        as: "h6",
                                        size: "xs",
                                        children: x(vt, {
                                          content: 'Disable the pop-up of AI when press "space"',
                                          className: "HoverCardContent",
                                          children: x("div", { className: "text-black", children: "Disable AI Popup" }),
                                        }),
                                      }),
                                    }),
                                    x("div", { className: "text-right flex-1 pr-2", children: x(Je, { isChecked: X, onChange: (ee) => K(ee), sx: st, size: "lg" }) }),
                                  ],
                                }),
                                se("div", {
                                  className: "toc-settings  text-left mt-2 settings-item-container",
                                  children: [
                                    x("div", {
                                      className: "font-extralight text-left basis-[300px]",
                                      children: x(Ue, {
                                        as: "h6",
                                        size: "xs",
                                        children: x(vt, {
                                          content: 'Hide slash menu when press "spacebar"',
                                          className: "HoverCardContent",
                                          children: x("div", { className: "text-black", children: "Hide slash menu when press spacebar" }),
                                        }),
                                      }),
                                    }),
                                    x("div", { className: "text-right flex-1 pr-2", children: x(Je, { isChecked: C, onChange: (ee) => V(ee), sx: st, size: "lg" }) }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        }),
                        x(za, {
                          className: "mt-2",
                          children: x(Ha, {
                            padding: "16px",
                            children: se(qn, {
                              divider: x(Xn, { color: "red" }),
                              spacing: "1",
                              children: [
                                se("div", {
                                  className: "text-left mt-2 settings-item-container",
                                  children: [
                                    x("div", {
                                      className: "font-extralight text-left basis-[300px]",
                                      children: se(Ue, {
                                        as: "h6",
                                        size: "xs",
                                        children: [
                                          " ",
                                          x(vt, {
                                            className: "HoverCardContent",
                                            content: "Remove the distracting horizontal scrollbar of table in board view.",
                                            children: x("div", { className: "", children: "Prevent Table Overflow Scrollbar" }),
                                          }),
                                        ],
                                      }),
                                    }),
                                    x("div", {
                                      className: "text-right flex-1",
                                      children: x("div", { className: "text-right flex-1 pr-2", children: x(Je, { isChecked: _, onChange: ve, sx: st, size: "lg" }) }),
                                    }),
                                  ],
                                }),
                                se("div", {
                                  className: "text-left mt-2 settings-item-container",
                                  children: [
                                    x("div", { className: "font-extralight text-left basis-[200px]", children: x(Ue, { as: "h6", size: "xs", children: "Hide BreadCrumbs" }) }),
                                    x("div", {
                                      className: "text-right flex-1",
                                      children: x("div", { className: "text-right flex-1 pr-2", children: x(Je, { isChecked: w, onChange: gr, sx: st, size: "lg" }) }),
                                    }),
                                  ],
                                }),
                                se("div", {
                                  className: "text-left mt-2 settings-item-container",
                                  children: [
                                    x("div", { className: "font-extralight text-left basis-[200px]", children: x(Ue, { as: "h6", size: "xs", children: "Hide Backlinks" }) }),
                                    x("div", {
                                      className: "text-right flex-1",
                                      children: x("div", { className: "text-right flex-1 pr-2", children: x(Je, { isChecked: I, onChange: ie, sx: st, size: "lg" }) }),
                                    }),
                                  ],
                                }),
                                se("div", {
                                  className: "text-left mt-2 flex items-center settings-item-container",
                                  children: [
                                    x("div", {
                                      className: "font-extralight text-left basis-[250px]",
                                      children: x("div", {
                                        className: "flex items-center",
                                        children: se(Ue, {
                                          as: "h6",
                                          size: "xs",
                                          className: "flex items-center",
                                          children: [" ", x(oC, { size: "1", className: "mr-4", children: "Ctrl + Alt + P" }), " ", "Open Notion Calendar"],
                                        }),
                                      }),
                                    }),
                                    x("div", {
                                      className: "text-right flex-1",
                                      children: x("div", { className: "text-right flex-1 pr-2", children: x(Je, { isChecked: k, onChange: ii, sx: st, size: "lg" }) }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        }),
                      ],
                    })
                  : se("div", {
                      className: "w-full flex flex-col justify-center items-center h-[200px]",
                      children: [
                        x("div", { className: "des basis-[50px] text-black", children: x(_o, { fontSize: "", children: "Ooops. Only works on Notion.so pages." }) }),
                        x("div", { className: "flex-1 w-full", style: { backgroundImage: `url(${mEe})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "40%" } }),
                      ],
                    }),
            }),
          }),
          se("div", {
            className: "footer border-t",
            children: [
              "@",
              new Date().getFullYear(),
              "  ",
              " ",
              x(kC, { onClick: Od, className: "ml-2!", children: "notionpower.app" }),
              x(NC, { className: "ml-1", color: "orange", radius: "large", size: "1", children: gEe.version }),
            ],
          }),
          e
            ? x("div", {
                className: "enter-license absolute top-0 right-0 bottom-0 left-0 p-5 z-10 backdrop-blur-lg",
                children: x(Jv.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, className: "h-full", children: x(bW, {}) }),
              })
            : null,
          a
            ? x("div", {
                className: "enter-license absolute top-0 right-0 bottom-0 left-0 p-5 z-10 backdrop-blur-lg",
                children: x(Jv.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, children: x(xW, {}) }),
              })
            : null,
        ],
      })
    );
  }
  function bEe() {
    return x(Hu, { children: x(k8, { children: x(yL, { store: IL, children: x(yEe, {}) }) }) });
  }
  L8.createRoot(document.getElementById("root")).render(x(Ge.StrictMode, { children: x(bEe, {}) }));
});
export default $Ee();
