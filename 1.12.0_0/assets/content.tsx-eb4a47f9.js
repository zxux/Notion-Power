import {
  j as F,
  a as T,
  B as An,
  r as u,
  _ as We,
  b as Ln,
  c as In,
  i as H,
  o as U,
  w as G,
  l as Pn,
  F as tn,
  d as it,
  H as xn,
  e as st,
  f as Mn,
  g as Hn,
  R as Nn,
  C as kn,
} from "./logo-768391b8.js";
import { c as he, g as nn, s as j, r as E, f as jn, a as Rn, C as ne, b as re, d as ae, i as ct, D as Dn, N as Bn, E as Fe } from "./const-0b68ee57.js";
const Wn = "https://api.notion.com/v1/oauth/authorize?owner=user&client_id=1be66fdf-7bbb-4b4b-ab2f-594a7ae8b108&redirect_uri=http://localhost:3000/api/accesscode&response_type=code";
function Fn() {
  return F("div", {
    className: "p-8",
    children: [
      T("div", { className: "text-xl\r font-bold my-4", children: "Empower Your Notion ✨ 123" }),
      T(An, {
        mt: 4,
        colorScheme: "teal",
        onClick: () => {
          const t = window.open("", "", "width=500,height=500"),
            n = `<iframe src="${Wn}" width="100%" height="100%"></iframe>`;
          t == null || t.document.write(n);
        },
        children: "Connet Notion Power",
      }),
    ],
  });
}
var oe = function (e) {
    return typeof e == "function";
  },
  Gn = function (e) {
    return typeof e == "string";
  },
  Ve = function (e) {
    return typeof e == "number";
  },
  Un = !1;
const Ze = Un;
function zn(e) {
  Ze && oe(e);
  var t = u.useRef(e);
  t.current = u.useMemo(
    function () {
      return e;
    },
    [e]
  );
  var n = u.useRef();
  return (
    n.current ||
      (n.current = function () {
        for (var r = [], a = 0; a < arguments.length; a++) r[a] = arguments[a];
        return t.current.apply(this, r);
      }),
    n.current
  );
}
function lt(e, t) {
  if (e === t) return !0;
  for (var n = 0; n < e.length; n++) if (!Object.is(e[n], t[n])) return !1;
  return !0;
}
function Ee(e) {
  var t = u.useRef(e);
  return (t.current = e), t;
}
var Kn = function (e) {
  Ze && oe(e);
  var t = Ee(e);
  u.useEffect(function () {
    return function () {
      t.current();
    };
  }, []);
};
const rn = Kn;
function Jn(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var ie = Jn,
  Xn = typeof he == "object" && he && he.Object === Object && he,
  an = Xn,
  Yn = an,
  Vn = typeof self == "object" && self && self.Object === Object && self,
  Zn = Yn || Vn || Function("return this")(),
  D = Zn,
  Qn = D,
  qn = function () {
    return Qn.Date.now();
  },
  er = qn,
  tr = /\s/;
function nr(e) {
  for (var t = e.length; t-- && tr.test(e.charAt(t)); );
  return t;
}
var rr = nr,
  ar = rr,
  or = /^\s+/;
function ir(e) {
  return e && e.slice(0, ar(e) + 1).replace(or, "");
}
var sr = ir,
  cr = D,
  lr = cr.Symbol,
  Qe = lr,
  ut = Qe,
  on = Object.prototype,
  ur = on.hasOwnProperty,
  fr = on.toString,
  q = ut ? ut.toStringTag : void 0;
function dr(e) {
  var t = ur.call(e, q),
    n = e[q];
  try {
    e[q] = void 0;
    var r = !0;
  } catch {}
  var a = fr.call(e);
  return r && (t ? (e[q] = n) : delete e[q]), a;
}
var hr = dr,
  vr = Object.prototype,
  gr = vr.toString;
function pr(e) {
  return gr.call(e);
}
var mr = pr,
  ft = Qe,
  yr = hr,
  br = mr,
  _r = "[object Null]",
  Sr = "[object Undefined]",
  dt = ft ? ft.toStringTag : void 0;
function $r(e) {
  return e == null ? (e === void 0 ? Sr : _r) : dt && dt in Object(e) ? yr(e) : br(e);
}
var se = $r;
function Er(e) {
  return e != null && typeof e == "object";
}
var ce = Er,
  Cr = se,
  wr = ce,
  Tr = "[object Symbol]";
function Or(e) {
  return typeof e == "symbol" || (wr(e) && Cr(e) == Tr);
}
var Ar = Or,
  Lr = sr,
  ht = ie,
  Ir = Ar,
  vt = 0 / 0,
  Pr = /^[-+]0x[0-9a-f]+$/i,
  xr = /^0b[01]+$/i,
  Mr = /^0o[0-7]+$/i,
  Hr = parseInt;
function Nr(e) {
  if (typeof e == "number") return e;
  if (Ir(e)) return vt;
  if (ht(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = ht(t) ? t + "" : t;
  }
  if (typeof e != "string") return e === 0 ? e : +e;
  e = Lr(e);
  var n = xr.test(e);
  return n || Mr.test(e) ? Hr(e.slice(2), n ? 2 : 8) : Pr.test(e) ? vt : +e;
}
var kr = Nr,
  jr = ie,
  He = er,
  gt = kr,
  Rr = "Expected a function",
  Dr = Math.max,
  Br = Math.min;
function Wr(e, t, n) {
  var r,
    a,
    o,
    i,
    s,
    l,
    f = 0,
    v = !1,
    d = !1,
    h = !0;
  if (typeof e != "function") throw new TypeError(Rr);
  (t = gt(t) || 0), jr(n) && ((v = !!n.leading), (d = "maxWait" in n), (o = d ? Dr(gt(n.maxWait) || 0, t) : o), (h = "trailing" in n ? !!n.trailing : h));
  function b(g) {
    var O = r,
      w = a;
    return (r = a = void 0), (f = g), (i = e.apply(w, O)), i;
  }
  function m(g) {
    return (f = g), (s = setTimeout(S, t)), v ? b(g) : i;
  }
  function _(g) {
    var O = g - l,
      w = g - f,
      L = t - O;
    return d ? Br(L, o - w) : L;
  }
  function p(g) {
    var O = g - l,
      w = g - f;
    return l === void 0 || O >= t || O < 0 || (d && w >= o);
  }
  function S() {
    var g = He();
    if (p(g)) return C(g);
    s = setTimeout(S, _(g));
  }
  function C(g) {
    return (s = void 0), h && r ? b(g) : ((r = a = void 0), i);
  }
  function P() {
    s !== void 0 && clearTimeout(s), (f = 0), (r = l = a = s = void 0);
  }
  function x() {
    return s === void 0 ? i : C(He());
  }
  function $() {
    var g = He(),
      O = p(g);
    if (((r = arguments), (a = this), (l = g), O)) {
      if (s === void 0) return m(l);
      if (d) return clearTimeout(s), (s = setTimeout(S, t)), b(l);
    }
    return s === void 0 && (s = setTimeout(S, t)), i;
  }
  return ($.cancel = P), ($.flush = x), $;
}
var Fr = Wr,
  Gr = !!(typeof window < "u" && window.document && window.document.createElement);
const Ur = Gr;
var zr = Fr,
  Kr = ie,
  Jr = "Expected a function";
function Xr(e, t, n) {
  var r = !0,
    a = !0;
  if (typeof e != "function") throw new TypeError(Jr);
  return Kr(n) && ((r = "leading" in n ? !!n.leading : r), (a = "trailing" in n ? !!n.trailing : a)), zr(e, t, { leading: r, maxWait: t, trailing: a });
}
var Yr = Xr;
const Vr = nn(Yr);
function sn(e, t) {
  if (Ur) {
    if (!e) return t;
    var n;
    return oe(e) ? (n = e()) : "current" in e ? (n = e.current) : (n = e), n;
  }
}
var Zr = function (e) {
  var t = function (n, r, a) {
    var o = u.useRef(!1),
      i = u.useRef([]),
      s = u.useRef([]),
      l = u.useRef();
    e(function () {
      var f,
        v = Array.isArray(a) ? a : [a],
        d = v.map(function (h) {
          return sn(h);
        });
      if (!o.current) {
        (o.current = !0), (i.current = d), (s.current = r), (l.current = n());
        return;
      }
      (d.length !== i.current.length || !lt(d, i.current) || !lt(r, s.current)) && ((f = l.current) === null || f === void 0 || f.call(l), (i.current = d), (s.current = r), (l.current = n()));
    }),
      rn(function () {
        var f;
        (f = l.current) === null || f === void 0 || f.call(l), (o.current = !1);
      });
  };
  return t;
};
const Qr = Zr;
var qr = Qr(u.useEffect);
const ea = qr;
function ta() {
  (this.__data__ = []), (this.size = 0);
}
var na = ta;
function ra(e, t) {
  return e === t || (e !== e && t !== t);
}
var cn = ra,
  aa = cn;
function oa(e, t) {
  for (var n = e.length; n--; ) if (aa(e[n][0], t)) return n;
  return -1;
}
var Oe = oa,
  ia = Oe,
  sa = Array.prototype,
  ca = sa.splice;
function la(e) {
  var t = this.__data__,
    n = ia(t, e);
  if (n < 0) return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : ca.call(t, n, 1), --this.size, !0;
}
var ua = la,
  fa = Oe;
function da(e) {
  var t = this.__data__,
    n = fa(t, e);
  return n < 0 ? void 0 : t[n][1];
}
var ha = da,
  va = Oe;
function ga(e) {
  return va(this.__data__, e) > -1;
}
var pa = ga,
  ma = Oe;
function ya(e, t) {
  var n = this.__data__,
    r = ma(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this;
}
var ba = ya,
  _a = na,
  Sa = ua,
  $a = ha,
  Ea = pa,
  Ca = ba;
function K(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
K.prototype.clear = _a;
K.prototype.delete = Sa;
K.prototype.get = $a;
K.prototype.has = Ea;
K.prototype.set = Ca;
var Ae = K,
  wa = Ae;
function Ta() {
  (this.__data__ = new wa()), (this.size = 0);
}
var Oa = Ta;
function Aa(e) {
  var t = this.__data__,
    n = t.delete(e);
  return (this.size = t.size), n;
}
var La = Aa;
function Ia(e) {
  return this.__data__.get(e);
}
var Pa = Ia;
function xa(e) {
  return this.__data__.has(e);
}
var Ma = xa,
  Ha = se,
  Na = ie,
  ka = "[object AsyncFunction]",
  ja = "[object Function]",
  Ra = "[object GeneratorFunction]",
  Da = "[object Proxy]";
function Ba(e) {
  if (!Na(e)) return !1;
  var t = Ha(e);
  return t == ja || t == Ra || t == ka || t == Da;
}
var ln = Ba,
  Wa = D,
  Fa = Wa["__core-js_shared__"],
  Ga = Fa,
  Ne = Ga,
  pt = (function () {
    var e = /[^.]+$/.exec((Ne && Ne.keys && Ne.keys.IE_PROTO) || "");
    return e ? "Symbol(src)_1." + e : "";
  })();
function Ua(e) {
  return !!pt && pt in e;
}
var za = Ua,
  Ka = Function.prototype,
  Ja = Ka.toString;
function Xa(e) {
  if (e != null) {
    try {
      return Ja.call(e);
    } catch {}
    try {
      return e + "";
    } catch {}
  }
  return "";
}
var un = Xa,
  Ya = ln,
  Va = za,
  Za = ie,
  Qa = un,
  qa = /[\\^$.*+?()[\]{}|]/g,
  eo = /^\[object .+?Constructor\]$/,
  to = Function.prototype,
  no = Object.prototype,
  ro = to.toString,
  ao = no.hasOwnProperty,
  oo = RegExp(
    "^" +
      ro
        .call(ao)
        .replace(qa, "\\$&")
        .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
      "$"
  );
function io(e) {
  if (!Za(e) || Va(e)) return !1;
  var t = Ya(e) ? oo : eo;
  return t.test(Qa(e));
}
var so = io;
function co(e, t) {
  return e == null ? void 0 : e[t];
}
var lo = co,
  uo = so,
  fo = lo;
function ho(e, t) {
  var n = fo(e, t);
  return uo(n) ? n : void 0;
}
var J = ho,
  vo = J,
  go = D,
  po = vo(go, "Map"),
  qe = po,
  mo = J,
  yo = mo(Object, "create"),
  Le = yo,
  mt = Le;
function bo() {
  (this.__data__ = mt ? mt(null) : {}), (this.size = 0);
}
var _o = bo;
function So(e) {
  var t = this.has(e) && delete this.__data__[e];
  return (this.size -= t ? 1 : 0), t;
}
var $o = So,
  Eo = Le,
  Co = "__lodash_hash_undefined__",
  wo = Object.prototype,
  To = wo.hasOwnProperty;
function Oo(e) {
  var t = this.__data__;
  if (Eo) {
    var n = t[e];
    return n === Co ? void 0 : n;
  }
  return To.call(t, e) ? t[e] : void 0;
}
var Ao = Oo,
  Lo = Le,
  Io = Object.prototype,
  Po = Io.hasOwnProperty;
function xo(e) {
  var t = this.__data__;
  return Lo ? t[e] !== void 0 : Po.call(t, e);
}
var Mo = xo,
  Ho = Le,
  No = "__lodash_hash_undefined__";
function ko(e, t) {
  var n = this.__data__;
  return (this.size += this.has(e) ? 0 : 1), (n[e] = Ho && t === void 0 ? No : t), this;
}
var jo = ko,
  Ro = _o,
  Do = $o,
  Bo = Ao,
  Wo = Mo,
  Fo = jo;
function X(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
X.prototype.clear = Ro;
X.prototype.delete = Do;
X.prototype.get = Bo;
X.prototype.has = Wo;
X.prototype.set = Fo;
var Go = X,
  yt = Go,
  Uo = Ae,
  zo = qe;
function Ko() {
  (this.size = 0), (this.__data__ = { hash: new yt(), map: new (zo || Uo)(), string: new yt() });
}
var Jo = Ko;
function Xo(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var Yo = Xo,
  Vo = Yo;
function Zo(e, t) {
  var n = e.__data__;
  return Vo(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
var Ie = Zo,
  Qo = Ie;
function qo(e) {
  var t = Qo(this, e).delete(e);
  return (this.size -= t ? 1 : 0), t;
}
var ei = qo,
  ti = Ie;
function ni(e) {
  return ti(this, e).get(e);
}
var ri = ni,
  ai = Ie;
function oi(e) {
  return ai(this, e).has(e);
}
var ii = oi,
  si = Ie;
function ci(e, t) {
  var n = si(this, e),
    r = n.size;
  return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
}
var li = ci,
  ui = Jo,
  fi = ei,
  di = ri,
  hi = ii,
  vi = li;
function Y(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Y.prototype.clear = ui;
Y.prototype.delete = fi;
Y.prototype.get = di;
Y.prototype.has = hi;
Y.prototype.set = vi;
var fn = Y,
  gi = Ae,
  pi = qe,
  mi = fn,
  yi = 200;
function bi(e, t) {
  var n = this.__data__;
  if (n instanceof gi) {
    var r = n.__data__;
    if (!pi || r.length < yi - 1) return r.push([e, t]), (this.size = ++n.size), this;
    n = this.__data__ = new mi(r);
  }
  return n.set(e, t), (this.size = n.size), this;
}
var _i = bi,
  Si = Ae,
  $i = Oa,
  Ei = La,
  Ci = Pa,
  wi = Ma,
  Ti = _i;
function V(e) {
  var t = (this.__data__ = new Si(e));
  this.size = t.size;
}
V.prototype.clear = $i;
V.prototype.delete = Ei;
V.prototype.get = Ci;
V.prototype.has = wi;
V.prototype.set = Ti;
var Oi = V,
  Ai = "__lodash_hash_undefined__";
function Li(e) {
  return this.__data__.set(e, Ai), this;
}
var Ii = Li;
function Pi(e) {
  return this.__data__.has(e);
}
var xi = Pi,
  Mi = fn,
  Hi = Ii,
  Ni = xi;
function Ce(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.__data__ = new Mi(); ++t < n; ) this.add(e[t]);
}
Ce.prototype.add = Ce.prototype.push = Hi;
Ce.prototype.has = Ni;
var ki = Ce;
function ji(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; ) if (t(e[n], n, e)) return !0;
  return !1;
}
var Ri = ji;
function Di(e, t) {
  return e.has(t);
}
var Bi = Di,
  Wi = ki,
  Fi = Ri,
  Gi = Bi,
  Ui = 1,
  zi = 2;
function Ki(e, t, n, r, a, o) {
  var i = n & Ui,
    s = e.length,
    l = t.length;
  if (s != l && !(i && l > s)) return !1;
  var f = o.get(e),
    v = o.get(t);
  if (f && v) return f == t && v == e;
  var d = -1,
    h = !0,
    b = n & zi ? new Wi() : void 0;
  for (o.set(e, t), o.set(t, e); ++d < s; ) {
    var m = e[d],
      _ = t[d];
    if (r) var p = i ? r(_, m, d, t, e, o) : r(m, _, d, e, t, o);
    if (p !== void 0) {
      if (p) continue;
      h = !1;
      break;
    }
    if (b) {
      if (
        !Fi(t, function (S, C) {
          if (!Gi(b, C) && (m === S || a(m, S, n, r, o))) return b.push(C);
        })
      ) {
        h = !1;
        break;
      }
    } else if (!(m === _ || a(m, _, n, r, o))) {
      h = !1;
      break;
    }
  }
  return o.delete(e), o.delete(t), h;
}
var dn = Ki,
  Ji = D,
  Xi = Ji.Uint8Array,
  Yi = Xi;
function Vi(e) {
  var t = -1,
    n = Array(e.size);
  return (
    e.forEach(function (r, a) {
      n[++t] = [a, r];
    }),
    n
  );
}
var Zi = Vi;
function Qi(e) {
  var t = -1,
    n = Array(e.size);
  return (
    e.forEach(function (r) {
      n[++t] = r;
    }),
    n
  );
}
var qi = Qi,
  bt = Qe,
  _t = Yi,
  es = cn,
  ts = dn,
  ns = Zi,
  rs = qi,
  as = 1,
  os = 2,
  is = "[object Boolean]",
  ss = "[object Date]",
  cs = "[object Error]",
  ls = "[object Map]",
  us = "[object Number]",
  fs = "[object RegExp]",
  ds = "[object Set]",
  hs = "[object String]",
  vs = "[object Symbol]",
  gs = "[object ArrayBuffer]",
  ps = "[object DataView]",
  St = bt ? bt.prototype : void 0,
  ke = St ? St.valueOf : void 0;
function ms(e, t, n, r, a, o, i) {
  switch (n) {
    case ps:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
      (e = e.buffer), (t = t.buffer);
    case gs:
      return !(e.byteLength != t.byteLength || !o(new _t(e), new _t(t)));
    case is:
    case ss:
    case us:
      return es(+e, +t);
    case cs:
      return e.name == t.name && e.message == t.message;
    case fs:
    case hs:
      return e == t + "";
    case ls:
      var s = ns;
    case ds:
      var l = r & as;
      if ((s || (s = rs), e.size != t.size && !l)) return !1;
      var f = i.get(e);
      if (f) return f == t;
      (r |= os), i.set(e, t);
      var v = ts(s(e), s(t), r, a, o, i);
      return i.delete(e), v;
    case vs:
      if (ke) return ke.call(e) == ke.call(t);
  }
  return !1;
}
var ys = ms;
function bs(e, t) {
  for (var n = -1, r = t.length, a = e.length; ++n < r; ) e[a + n] = t[n];
  return e;
}
var _s = bs,
  Ss = Array.isArray,
  et = Ss,
  $s = _s,
  Es = et;
function Cs(e, t, n) {
  var r = t(e);
  return Es(e) ? r : $s(r, n(e));
}
var ws = Cs;
function Ts(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, a = 0, o = []; ++n < r; ) {
    var i = e[n];
    t(i, n, e) && (o[a++] = i);
  }
  return o;
}
var Os = Ts;
function As() {
  return [];
}
var Ls = As,
  Is = Os,
  Ps = Ls,
  xs = Object.prototype,
  Ms = xs.propertyIsEnumerable,
  $t = Object.getOwnPropertySymbols,
  Hs = $t
    ? function (e) {
        return e == null
          ? []
          : ((e = Object(e)),
            Is($t(e), function (t) {
              return Ms.call(e, t);
            }));
      }
    : Ps,
  Ns = Hs;
function ks(e, t) {
  for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
  return r;
}
var js = ks,
  Rs = se,
  Ds = ce,
  Bs = "[object Arguments]";
function Ws(e) {
  return Ds(e) && Rs(e) == Bs;
}
var Fs = Ws,
  Et = Fs,
  Gs = ce,
  hn = Object.prototype,
  Us = hn.hasOwnProperty,
  zs = hn.propertyIsEnumerable,
  Ks = Et(
    (function () {
      return arguments;
    })()
  )
    ? Et
    : function (e) {
        return Gs(e) && Us.call(e, "callee") && !zs.call(e, "callee");
      },
  Js = Ks,
  we = { exports: {} };
function Xs() {
  return !1;
}
var Ys = Xs;
we.exports;
(function (e, t) {
  var n = D,
    r = Ys,
    a = t && !t.nodeType && t,
    o = a && !0 && e && !e.nodeType && e,
    i = o && o.exports === a,
    s = i ? n.Buffer : void 0,
    l = s ? s.isBuffer : void 0,
    f = l || r;
  e.exports = f;
})(we, we.exports);
var vn = we.exports,
  Vs = 9007199254740991,
  Zs = /^(?:0|[1-9]\d*)$/;
function Qs(e, t) {
  var n = typeof e;
  return (t = t ?? Vs), !!t && (n == "number" || (n != "symbol" && Zs.test(e))) && e > -1 && e % 1 == 0 && e < t;
}
var qs = Qs,
  ec = 9007199254740991;
function tc(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ec;
}
var gn = tc,
  nc = se,
  rc = gn,
  ac = ce,
  oc = "[object Arguments]",
  ic = "[object Array]",
  sc = "[object Boolean]",
  cc = "[object Date]",
  lc = "[object Error]",
  uc = "[object Function]",
  fc = "[object Map]",
  dc = "[object Number]",
  hc = "[object Object]",
  vc = "[object RegExp]",
  gc = "[object Set]",
  pc = "[object String]",
  mc = "[object WeakMap]",
  yc = "[object ArrayBuffer]",
  bc = "[object DataView]",
  _c = "[object Float32Array]",
  Sc = "[object Float64Array]",
  $c = "[object Int8Array]",
  Ec = "[object Int16Array]",
  Cc = "[object Int32Array]",
  wc = "[object Uint8Array]",
  Tc = "[object Uint8ClampedArray]",
  Oc = "[object Uint16Array]",
  Ac = "[object Uint32Array]",
  y = {};
y[_c] = y[Sc] = y[$c] = y[Ec] = y[Cc] = y[wc] = y[Tc] = y[Oc] = y[Ac] = !0;
y[oc] = y[ic] = y[yc] = y[sc] = y[bc] = y[cc] = y[lc] = y[uc] = y[fc] = y[dc] = y[hc] = y[vc] = y[gc] = y[pc] = y[mc] = !1;
function Lc(e) {
  return ac(e) && rc(e.length) && !!y[nc(e)];
}
var Ic = Lc;
function Pc(e) {
  return function (t) {
    return e(t);
  };
}
var xc = Pc,
  Te = { exports: {} };
Te.exports;
(function (e, t) {
  var n = an,
    r = t && !t.nodeType && t,
    a = r && !0 && e && !e.nodeType && e,
    o = a && a.exports === r,
    i = o && n.process,
    s = (function () {
      try {
        var l = a && a.require && a.require("util").types;
        return l || (i && i.binding && i.binding("util"));
      } catch {}
    })();
  e.exports = s;
})(Te, Te.exports);
var Mc = Te.exports,
  Hc = Ic,
  Nc = xc,
  Ct = Mc,
  wt = Ct && Ct.isTypedArray,
  kc = wt ? Nc(wt) : Hc,
  pn = kc,
  jc = js,
  Rc = Js,
  Dc = et,
  Bc = vn,
  Wc = qs,
  Fc = pn,
  Gc = Object.prototype,
  Uc = Gc.hasOwnProperty;
function zc(e, t) {
  var n = Dc(e),
    r = !n && Rc(e),
    a = !n && !r && Bc(e),
    o = !n && !r && !a && Fc(e),
    i = n || r || a || o,
    s = i ? jc(e.length, String) : [],
    l = s.length;
  for (var f in e)
    (t || Uc.call(e, f)) && !(i && (f == "length" || (a && (f == "offset" || f == "parent")) || (o && (f == "buffer" || f == "byteLength" || f == "byteOffset")) || Wc(f, l))) && s.push(f);
  return s;
}
var Kc = zc,
  Jc = Object.prototype;
function Xc(e) {
  var t = e && e.constructor,
    n = (typeof t == "function" && t.prototype) || Jc;
  return e === n;
}
var Yc = Xc;
function Vc(e, t) {
  return function (n) {
    return e(t(n));
  };
}
var Zc = Vc,
  Qc = Zc,
  qc = Qc(Object.keys, Object),
  el = qc,
  tl = Yc,
  nl = el,
  rl = Object.prototype,
  al = rl.hasOwnProperty;
function ol(e) {
  if (!tl(e)) return nl(e);
  var t = [];
  for (var n in Object(e)) al.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
var il = ol,
  sl = ln,
  cl = gn;
function ll(e) {
  return e != null && cl(e.length) && !sl(e);
}
var ul = ll,
  fl = Kc,
  dl = il,
  hl = ul;
function vl(e) {
  return hl(e) ? fl(e) : dl(e);
}
var gl = vl,
  pl = ws,
  ml = Ns,
  yl = gl;
function bl(e) {
  return pl(e, yl, ml);
}
var _l = bl,
  Tt = _l,
  Sl = 1,
  $l = Object.prototype,
  El = $l.hasOwnProperty;
function Cl(e, t, n, r, a, o) {
  var i = n & Sl,
    s = Tt(e),
    l = s.length,
    f = Tt(t),
    v = f.length;
  if (l != v && !i) return !1;
  for (var d = l; d--; ) {
    var h = s[d];
    if (!(i ? h in t : El.call(t, h))) return !1;
  }
  var b = o.get(e),
    m = o.get(t);
  if (b && m) return b == t && m == e;
  var _ = !0;
  o.set(e, t), o.set(t, e);
  for (var p = i; ++d < l; ) {
    h = s[d];
    var S = e[h],
      C = t[h];
    if (r) var P = i ? r(C, S, h, t, e, o) : r(S, C, h, e, t, o);
    if (!(P === void 0 ? S === C || a(S, C, n, r, o) : P)) {
      _ = !1;
      break;
    }
    p || (p = h == "constructor");
  }
  if (_ && !p) {
    var x = e.constructor,
      $ = t.constructor;
    x != $ && "constructor" in e && "constructor" in t && !(typeof x == "function" && x instanceof x && typeof $ == "function" && $ instanceof $) && (_ = !1);
  }
  return o.delete(e), o.delete(t), _;
}
var wl = Cl,
  Tl = J,
  Ol = D,
  Al = Tl(Ol, "DataView"),
  Ll = Al,
  Il = J,
  Pl = D,
  xl = Il(Pl, "Promise"),
  Ml = xl,
  Hl = J,
  Nl = D,
  kl = Hl(Nl, "Set"),
  jl = kl,
  Rl = J,
  Dl = D,
  Bl = Rl(Dl, "WeakMap"),
  Wl = Bl,
  Ge = Ll,
  Ue = qe,
  ze = Ml,
  Ke = jl,
  Je = Wl,
  mn = se,
  Z = un,
  Ot = "[object Map]",
  Fl = "[object Object]",
  At = "[object Promise]",
  Lt = "[object Set]",
  It = "[object WeakMap]",
  Pt = "[object DataView]",
  Gl = Z(Ge),
  Ul = Z(Ue),
  zl = Z(ze),
  Kl = Z(Ke),
  Jl = Z(Je),
  W = mn;
((Ge && W(new Ge(new ArrayBuffer(1))) != Pt) || (Ue && W(new Ue()) != Ot) || (ze && W(ze.resolve()) != At) || (Ke && W(new Ke()) != Lt) || (Je && W(new Je()) != It)) &&
  (W = function (e) {
    var t = mn(e),
      n = t == Fl ? e.constructor : void 0,
      r = n ? Z(n) : "";
    if (r)
      switch (r) {
        case Gl:
          return Pt;
        case Ul:
          return Ot;
        case zl:
          return At;
        case Kl:
          return Lt;
        case Jl:
          return It;
      }
    return t;
  });
var Xl = W,
  je = Oi,
  Yl = dn,
  Vl = ys,
  Zl = wl,
  xt = Xl,
  Mt = et,
  Ht = vn,
  Ql = pn,
  ql = 1,
  Nt = "[object Arguments]",
  kt = "[object Array]",
  ve = "[object Object]",
  eu = Object.prototype,
  jt = eu.hasOwnProperty;
function tu(e, t, n, r, a, o) {
  var i = Mt(e),
    s = Mt(t),
    l = i ? kt : xt(e),
    f = s ? kt : xt(t);
  (l = l == Nt ? ve : l), (f = f == Nt ? ve : f);
  var v = l == ve,
    d = f == ve,
    h = l == f;
  if (h && Ht(e)) {
    if (!Ht(t)) return !1;
    (i = !0), (v = !1);
  }
  if (h && !v) return o || (o = new je()), i || Ql(e) ? Yl(e, t, n, r, a, o) : Vl(e, t, l, n, r, a, o);
  if (!(n & ql)) {
    var b = v && jt.call(e, "__wrapped__"),
      m = d && jt.call(t, "__wrapped__");
    if (b || m) {
      var _ = b ? e.value() : e,
        p = m ? t.value() : t;
      return o || (o = new je()), a(_, p, n, r, o);
    }
  }
  return h ? (o || (o = new je()), Zl(e, t, n, r, a, o)) : !1;
}
var nu = tu,
  ru = nu,
  Rt = ce;
function yn(e, t, n, r, a) {
  return e === t ? !0 : e == null || t == null || (!Rt(e) && !Rt(t)) ? e !== e && t !== t : ru(e, t, n, r, yn, a);
}
var au = yn,
  ou = au;
function iu(e, t) {
  return ou(e, t);
}
var su = iu;
const cu = nn(su);
var lu = function (e, t) {
    return e === void 0 && (e = []), t === void 0 && (t = []), cu(e, t);
  },
  uu = function (e, t, n) {
    n === void 0 && (n = {});
    var r = zn(e),
      a = u.useRef(null),
      o = u.useCallback(function () {
        a.current && clearInterval(a.current);
      }, []);
    return (
      u.useEffect(
        function () {
          if (!(!Ve(t) || t < 0)) return n.immediate && r(), (a.current = setInterval(r, t)), o;
        },
        [t, n.immediate]
      ),
      o
    );
  };
const fu = uu;
var du = function (e, t, n) {
  var r = u.useRef(),
    a = u.useRef(0);
  lu(t, r.current) || ((r.current = t), (a.current += 1)), ea(e, [a.current], n);
};
const hu = du;
var vu = /(mac|iphone|ipod|ipad)/i.test(typeof navigator < "u" ? (navigator == null ? void 0 : navigator.platform) : "");
const gu = vu;
var bn = {
    0: 48,
    1: 49,
    2: 50,
    3: 51,
    4: 52,
    5: 53,
    6: 54,
    7: 55,
    8: 56,
    9: 57,
    backspace: 8,
    tab: 9,
    enter: 13,
    shift: 16,
    ctrl: 17,
    alt: 18,
    pausebreak: 19,
    capslock: 20,
    esc: 27,
    space: 32,
    pageup: 33,
    pagedown: 34,
    end: 35,
    home: 36,
    leftarrow: 37,
    uparrow: 38,
    rightarrow: 39,
    downarrow: 40,
    insert: 45,
    delete: 46,
    a: 65,
    b: 66,
    c: 67,
    d: 68,
    e: 69,
    f: 70,
    g: 71,
    h: 72,
    i: 73,
    j: 74,
    k: 75,
    l: 76,
    m: 77,
    n: 78,
    o: 79,
    p: 80,
    q: 81,
    r: 82,
    s: 83,
    t: 84,
    u: 85,
    v: 86,
    w: 87,
    x: 88,
    y: 89,
    z: 90,
    leftwindowkey: 91,
    rightwindowkey: 92,
    meta: gu ? [91, 93] : [91, 92],
    selectkey: 93,
    numpad0: 96,
    numpad1: 97,
    numpad2: 98,
    numpad3: 99,
    numpad4: 100,
    numpad5: 101,
    numpad6: 102,
    numpad7: 103,
    numpad8: 104,
    numpad9: 105,
    multiply: 106,
    add: 107,
    subtract: 109,
    decimalpoint: 110,
    divide: 111,
    f1: 112,
    f2: 113,
    f3: 114,
    f4: 115,
    f5: 116,
    f6: 117,
    f7: 118,
    f8: 119,
    f9: 120,
    f10: 121,
    f11: 122,
    f12: 123,
    numlock: 144,
    scrolllock: 145,
    semicolon: 186,
    equalsign: 187,
    comma: 188,
    dash: 189,
    period: 190,
    forwardslash: 191,
    graveaccent: 192,
    openbracket: 219,
    backslash: 220,
    closebracket: 221,
    singlequote: 222,
  },
  Xe = {
    ctrl: function (e) {
      return e.ctrlKey;
    },
    shift: function (e) {
      return e.shiftKey;
    },
    alt: function (e) {
      return e.altKey;
    },
    meta: function (e) {
      return e.type === "keyup" ? bn.meta.includes(e.keyCode) : e.metaKey;
    },
  };
function _n(e) {
  return Gn(e) || Ve(e);
}
function pu(e) {
  var t = Object.keys(Xe).reduce(function (n, r) {
    return Xe[r](e) ? n + 1 : n;
  }, 0);
  return [16, 17, 18, 91, 92].includes(e.keyCode) ? t : t + 1;
}
function Dt(e, t, n) {
  var r, a;
  if (!e.key) return !1;
  if (Ve(t)) return e.keyCode === t ? t : !1;
  var o = t.split("."),
    i = 0;
  try {
    for (var s = We(o), l = s.next(); !l.done; l = s.next()) {
      var f = l.value,
        v = Xe[f],
        d = bn[f.toLowerCase()];
      ((v && v(e)) || (d && d === e.keyCode)) && i++;
    }
  } catch (h) {
    r = { error: h };
  } finally {
    try {
      l && !l.done && (a = s.return) && a.call(s);
    } finally {
      if (r) throw r.error;
    }
  }
  return n ? (i === o.length && pu(e) === o.length ? t : !1) : i === o.length ? t : !1;
}
function mu(e, t) {
  return oe(e)
    ? e
    : _n(e)
    ? function (n) {
        return Dt(n, e, t);
      }
    : Array.isArray(e)
    ? function (n) {
        return e.find(function (r) {
          return Dt(n, r, t);
        });
      }
    : function () {
        return !!e;
      };
}
var yu = ["keydown"];
function bu(e, t, n) {
  var r = n || {},
    a = r.events,
    o = a === void 0 ? yu : a,
    i = r.target,
    s = r.exactMatch,
    l = s === void 0 ? !1 : s,
    f = r.useCapture,
    v = f === void 0 ? !1 : f,
    d = Ee(t),
    h = Ee(e);
  hu(
    function () {
      var b,
        m,
        _,
        p = sn(i, window);
      if (p) {
        var S = function ($) {
          var g,
            O = mu(h.current, l),
            w = O($),
            L = _n(w) ? w : $.key;
          if (w) return (g = d.current) === null || g === void 0 ? void 0 : g.call(d, $, L);
        };
        try {
          for (var C = We(o), P = C.next(); !P.done; P = C.next()) {
            var x = P.value;
            (_ = p == null ? void 0 : p.addEventListener) === null || _ === void 0 || _.call(p, x, S, v);
          }
        } catch ($) {
          b = { error: $ };
        } finally {
          try {
            P && !P.done && (m = C.return) && m.call(C);
          } finally {
            if (b) throw b.error;
          }
        }
        return function () {
          var $, g, O;
          try {
            for (var w = We(o), L = w.next(); !L.done; L = w.next()) {
              var Q = L.value;
              (O = p == null ? void 0 : p.removeEventListener) === null || O === void 0 || O.call(p, Q, S, v);
            }
          } catch (le) {
            $ = { error: le };
          } finally {
            try {
              L && !L.done && (g = w.return) && g.call(w);
            } finally {
              if ($) throw $.error;
            }
          }
        };
      }
    },
    [o],
    i
  );
}
function Bt(e, t) {
  var n;
  Ze && oe(e);
  var r = Ee(e),
    a = (n = t == null ? void 0 : t.wait) !== null && n !== void 0 ? n : 1e3,
    o = u.useMemo(function () {
      return Vr(
        function () {
          for (var i = [], s = 0; s < arguments.length; s++) i[s] = arguments[s];
          return r.current.apply(r, Ln([], In(i), !1));
        },
        a,
        t
      );
    }, []);
  return (
    rn(function () {
      o.cancel();
    }),
    { run: o, cancel: o.cancel, flush: o.flush }
  );
}
let R;
async function _u() {
  const e = await E(["isDarkMode"]),
    n = !((e == null ? void 0 : e.isDarkMode) || !1),
    r = document.querySelector(".notion-topbar");
  r &&
    ((R = null),
    n &&
      ((R = new MutationObserver((a) => {
        a.forEach((o) => {
          o.attributeName === "style" && parseFloat(r.style.opacity) === 0 && (r.style.opacity = "1");
        });
      })),
      R.observe(r, { attributes: !0, attributeFilter: ["style"] })));
}
const Se = async () => {
  const e = await E(["isDarkMode"]),
    t = (e == null ? void 0 : e.isDarkMode) || !1,
    n = await E(["backgroundColor"]);
  if (!n) return;
  let r = n.backgroundColor || "#fff";
  r === "reset" && (r = "#fff"), t && (r = "#191919"), document.querySelector(":root").style.setProperty("--notion-power-background-color", r);
  const o = document.querySelector(".notion-topbar");
  o && ((o.style.backgroundColor = r), R && (R == null || R.disconnect()), _u());
};
function Su() {
  const [e, t] = u.useState(document.body.className.includes("dark"));
  return (
    u.useEffect(() => {
      const n = (o) => {
          for (const i of o)
            i.type === "attributes" &&
              i.attributeName === "class" &&
              (document.body.className.includes("dark") ? (j({ isDarkMode: !0 }), R == null || R.disconnect(), Se()) : (j({ isDarkMode: !1 }), Se()));
        },
        r = new MutationObserver(n),
        a = { attributes: !0, attributeFilter: ["class"] };
      r.observe(document.body, a),
        chrome.runtime.onMessage.addListener(function (o, i, s) {
          o.backgroundColor && (j({ backgroundColor: o.backgroundColor }), Se()), s("Have received your message from content script：" + JSON.stringify(o));
        });
    }, []),
    u.useEffect(() => {
      e ? j({ isDarkMode: !0 }) : j({ isDarkMode: !1 });
    }, [e]),
    { isDarkMode: e }
  );
}
const ge = (e) => {
  const t = document.querySelector(".notion-topbar .shadow-cursor-breadcrumb");
  t && (e ? t.classList.add("hidden") : t.classList.remove("hidden"));
};
function $u() {
  const [e, t] = u.useState(!1);
  return (
    u.useEffect(() => {
      E(["isHideBreadCrumb"]).then((n) => {
        (n == null ? void 0 : n.isHideBreadCrumb) === !0 ? ge(!0) : (n == null ? void 0 : n.isHideBreadCrumb) === !1 && ge(!1);
      });
    }, [e]),
    u.useEffect(() => {
      chrome.runtime.onMessage.addListener(function (n, r, a) {
        (n == null ? void 0 : n.isHideBreadCrumb) === !0 ? ge(!0) : (n == null ? void 0 : n.isHideBreadCrumb) === !1 && ge(!1),
          a("Have received your message from content script：" + JSON.stringify(n));
      });
    }, []),
    { triggerUseHideBreadCrumbs: () => t(!e) }
  );
}
const pe = (e) => {
  const t = document.querySelectorAll(".notion-frame .notion-page-details-controls > div");
  Array.from(t).forEach((n) => {
    var r;
    (r = n.textContent) != null && r.includes("backlink") && (e ? n.classList.add("hidden") : n.classList.remove("hidden"));
  });
};
function Eu() {
  const [e, t] = u.useState(!1);
  return (
    u.useEffect(() => {
      E(["isHideBacklinks"]).then((n) => {
        (n == null ? void 0 : n.isHideBacklinks) === !0 ? pe(!0) : (n == null ? void 0 : n.isHideBacklinks) === !1 && pe(!1);
      });
    }, [e]),
    u.useEffect(() => {
      chrome.runtime.onMessage.addListener(function (n, r, a) {
        (n == null ? void 0 : n.isHideBacklinks) === !0 ? pe(!0) : (n == null ? void 0 : n.isHideBacklinks) === !1 && pe(!1), a("Have received your message from content script：" + JSON.stringify(n));
      });
    }, []),
    { triggerUseHideBackLinks: () => t(!e) }
  );
}
const Cu = () => {
  var t;
  let e = document.querySelector(".notion-cursor-listener .notion-sidebar .calendarDate20");
  e || (e = document.querySelector(".notion-cursor-listener .notion-sidebar .typesRelation")), (t = e == null ? void 0 : e.parentElement) == null || t.click();
};
function wu() {
  const [e, t] = u.useState(!0);
  u.useEffect(() => {
    E(["isEnableCalendarShortcut"]).then((n) => {
      t((n == null ? void 0 : n.isEnableCalendarShortcut) || !1);
    });
  }, []),
    bu("ctrl.alt.p", () => {
      e && Cu();
    }),
    u.useEffect(() => {
      chrome.runtime.onMessage.addListener(function (n, r, a) {
        (n == null ? void 0 : n.isEnableCalendarShortcut) === !0 ? t(!0) : (n == null ? void 0 : n.isEnableCalendarShortcut) === !1 && t(!1),
          a("Have received your message from content script：" + JSON.stringify(n));
      });
    }, []);
}
const me = (e) => {
  const t = document.querySelector(".notion-body");
  t && (e ? t.classList.add("hide-page-properties") : t.classList.remove("hide-page-properties"));
};
function Tu() {
  u.useEffect(() => {
    E(["isHidePageProperites"]).then((e) => {
      (e == null ? void 0 : e.isHidePageProperites) === !0 ? me(!0) : (e == null ? void 0 : e.isHidePageProperites) === !1 && me(!1);
    });
  }, []),
    u.useEffect(() => {
      chrome.runtime.onMessage.addListener(function (e, t, n) {
        (e == null ? void 0 : e.isHidePageProperites) === !0 ? me(!0) : (e == null ? void 0 : e.isHidePageProperites) === !1 && me(!1),
          n("Have received your message from content script：" + JSON.stringify(e));
      });
    }, []);
}
const ye = (e) => {
  const t = document.querySelector(".notion-body");
  t && (e ? t.classList.add("hide-horizontal-scroll-bar") : t.classList.remove("hide-horizontal-scroll-bar"));
};
function Ou() {
  u.useEffect(() => {
    E(["isHideHorizontalScrollBar"]).then((e) => {
      (e == null ? void 0 : e.isHideHorizontalScrollBar) === !0 ? ye(!0) : (e == null ? void 0 : e.isHideHorizontalScrollBar) === !1 && ye(!1);
    });
  }, []),
    u.useEffect(() => {
      chrome.runtime.onMessage.addListener(function (e, t, n) {
        (e == null ? void 0 : e.isHideHorizontalScrollBar) === !0 ? ye(!0) : (e == null ? void 0 : e.isHideHorizontalScrollBar) === !1 && ye(!1),
          n("Have received your message from content script：" + JSON.stringify(e));
      });
    }, []);
}
const Wt = (e, t) => {
    var o;
    const n = `
      .notion-frame h1, .notion-frame h2, .notion-frame h3 {
          font-family: ${e} !important;
      }
      .notion-peek-renderer h1, .notion-peek-renderer h2, .notion-peek-renderer h3  {
        font-family: ${e};
      }
      .notion-body {
        font-family: ${e} !important;
      }
  `,
      r = document.createElement("style");
    (r.textContent = n), (r.id = "FONT_FAMILY_STYLE_ID");
    const a = document.getElementById("FONT_FAMILY_STYLE_ID");
    a && ((o = a.parentNode) == null || o.removeChild(a)), t || document.head.appendChild(r);
  },
  Sn = async () => {
    const e = document.querySelector("#notion-app .notion-app-inner");
    if (e) {
      const t = await E(["fontfamilay"]),
        n = t == null ? void 0 : t.fontfamilay;
      if (n)
        if (n === "reset") {
          j({ fontfamilay: "" });
          const r = await E(["fontfamilyOld"]);
          if (!r) return;
          (e.style.fontFamily = r.fontfamilyOld || ""), Wt(n, !0);
        } else (e.style.fontFamily = n), Wt(n);
    }
  },
  Au = async () => {
    const e = await E(["fontSize"]),
      t = e == null ? void 0 : e.fontSize,
      n = jn[t],
      r = Rn[t],
      a = document.querySelector(":root");
    a.style.setProperty("--notion-power-font-size-text", n), a.style.setProperty("--notion-power-font-size-lg-text", r);
  };
function Lu() {
  u.useEffect(() => {
    chrome.runtime.onMessage.addListener(function (e, t, n) {
      e.fontfamilay && Sn(), e.fontSize && Au(), n("Have received your message from content script：" + JSON.stringify(e));
    });
  }, []);
}
const Ft = (e) => {
  const t = document.querySelector(".notion-body");
  t && (e ? t.classList.add("enable-image-border") : t.classList.remove("enable-image-border"));
};
function Iu() {
  u.useEffect(() => {
    E(["isEnableImageBorder"]).then((e) => {
      H(e == null ? void 0 : e.isEnableImageBorder) && Ft(e == null ? void 0 : e.isEnableImageBorder);
    });
  }, []),
    u.useEffect(() => {
      chrome.runtime.onMessage.addListener(function (e, t, n) {
        H(e == null ? void 0 : e.isEnableImageBorder) && Ft(e == null ? void 0 : e.isEnableImageBorder);
      });
    }, []);
}
const Gt = (e) => {
  const t = document.querySelector(".notion-body");
  t && (e ? t.classList.add("enable-header-center") : t.classList.remove("enable-header-center"));
};
function Pu() {
  u.useEffect(() => {
    E(["isEnableHeaderCenter"]).then((e) => {
      H(e == null ? void 0 : e.isEnableHeaderCenter) && Gt(e == null ? void 0 : e.isEnableHeaderCenter);
    });
  }, []),
    u.useEffect(() => {
      chrome.runtime.onMessage.addListener(function (e, t, n) {
        H(e == null ? void 0 : e.isEnableHeaderCenter) && Gt(e == null ? void 0 : e.isEnableHeaderCenter);
      });
    }, []);
}
function $n(e) {
  const t = u.useRef("");
  u.useEffect(() => {
    typeof e == "function" && e();
  }, []),
    fu(() => {
      t.current !== window.location.href && ((t.current = window.location.href), e());
    }, 300);
}
const Re = async (e) => {
  const t = document.querySelector(".notion-body"),
    n = document.querySelector(".layout");
  if (n != null && n.classList.contains("layout-wide")) {
    t == null || t.classList.remove("page-width-md");
    return;
  }
  t && (e ? t.classList.add("page-width-md") : t.classList.remove("page-width-md"));
};
let ee;
function xu() {
  const [e, t] = u.useState(!1),
    n = () => {
      G(".notion-frame .layout").then(() => {
        const r = document.querySelector(".layout");
        if (!r || ee !== null) return;
        const a = () => {
            r != null && r.classList.contains("layout-wide")
              ? (Re(!1), t(!0), j({ isEnablePageWidthMediumDisabled: !0, isEnablePageWidthMedium: !1 }))
              : (t(!1), j({ isEnablePageWidthMediumDisabled: !1, isEnablePageWidthMedium: !1 }));
          },
          o = (s) => {
            for (const l of s) l.type === "attributes" && l.attributeName === "class" && a();
          };
        a(), (ee = new MutationObserver(o));
        const i = { attributes: !0, attributeFilter: ["class"] };
        ee.observe(r, i);
      });
    };
  return (
    u.useEffect(() => {
      const r = U("isEnablePageWidthMedium");
      return (
        r.subscribe((a) => {
          Re(a);
        }),
        E(["isEnablePageWidthMedium"]).then((a) => {
          H(a == null ? void 0 : a.isEnablePageWidthMedium) && Re(a == null ? void 0 : a.isEnablePageWidthMedium);
        }),
        () => {
          r.unsubscribe(), (ee = null);
        }
      );
    }, []),
    $n(() => {
      (ee = null), n();
    }),
    { isNotionPageWidthWorks: e }
  );
}
const Ut = (e) => {
  const t = document.querySelector(".notion-body");
  t && (e ? t.classList.add("enable-more-line-light") : t.classList.remove("enable-more-line-light"));
  const n = document.querySelectorAll(".notion-page-content");
  if (n.length === 1) {
    const r = n[0];
    e ? (r.style.lineHeight = "1.7") : (r.style.lineHeight = "1.4");
  }
};
function Mu() {
  u.useEffect(() => {
    E(["isEnableMoreLineHeight"]).then((e) => {
      H(e == null ? void 0 : e.isEnableMoreLineHeight) && Ut(e == null ? void 0 : e.isEnableMoreLineHeight);
    }),
      U("isEnableMoreLineHeight").subscribe((e) => {
        Ut(e);
      });
  }, []);
}
const zt = (e) => {
  const t = document.querySelector(".notion-body");
  t && (e ? t.classList.add("hide-table-view-icons-in-databse") : t.classList.remove("hide-table-view-icons-in-databse"));
};
function Hu() {
  u.useEffect(() => {
    const e = U("isHidePropertyIcon");
    return (
      e.subscribe((t) => {
        zt(t);
      }),
      E(["isHidePropertyIcon"]).then((t) => {
        H(t == null ? void 0 : t.isHidePropertyIcon) && zt(t == null ? void 0 : t.isHidePropertyIcon);
      }),
      () => {
        e.unsubscribe();
      }
    );
  }, []);
}
const Kt = (e) => {
  const t = document.querySelector(".notion-body");
  t && (e ? t.classList.add("beautify-scroll-bar") : t.classList.remove("beautify-scroll-bar"));
};
function Nu() {
  u.useEffect(() => {
    const e = U("isBeautifyScrollBar");
    return (
      e.subscribe((t) => {
        Kt(t);
      }),
      E(["isBeautifyScrollBar"]).then((t) => {
        H(t == null ? void 0 : t.isBeautifyScrollBar) && Kt(t == null ? void 0 : t.isBeautifyScrollBar);
      }),
      () => {
        e.unsubscribe();
      }
    );
  }, []);
}
const Jt = (e) => {
  const t = document.querySelector(".notion-body");
  t && (e ? t.classList.add("words-count-ele") : t.classList.remove("words-count-ele"));
};
function ku() {
  const [e, t] = u.useState(!1);
  return (
    u.useEffect(() => {
      const n = U("showWordsCount");
      return (
        n.subscribe((r) => {
          t(r), Jt(r);
        }),
        E(["showWordsCount"]).then((r) => {
          H(r == null ? void 0 : r.showWordsCount) && (t(r == null ? void 0 : r.showWordsCount), Jt(r == null ? void 0 : r.showWordsCount));
        }),
        () => {
          n.unsubscribe();
        }
      );
    }, []),
    { showWordsCount: e }
  );
}
function ju() {
  const [e, t] = u.useState(!1),
    n = (r) => {
      e && r.code === "Space" && (r.preventDefault(), document.execCommand("insertText", !1, " "));
    };
  u.useEffect(() => {
    const r = U("isDisableAIPopup");
    return (
      r.subscribe((a) => {
        t(a);
      }),
      E(["isDisableAIPopup"]).then((a) => {
        H(a == null ? void 0 : a.isDisableAIPopup) && t(a == null ? void 0 : a.isDisableAIPopup);
      }),
      e && window.addEventListener("keydown", n),
      () => {
        r.unsubscribe(), window.removeEventListener("keydown", n);
      }
    );
  }, [e]);
}
function Ru() {
  const [e, t] = u.useState(!1);
  u.useEffect(() => {
    const n = (o) => {
        o.code === "Space" &&
          e &&
          window.dispatchEvent(
            new KeyboardEvent("keydown", {
              altKey: !1,
              code: "Escape",
              ctrlKey: !1,
              isComposing: !1,
              key: "Escape",
              location: 0,
              metaKey: !1,
              repeat: !1,
              shiftKey: !1,
              which: 27,
              charCode: 0,
              keyCode: 27,
            })
          );
      },
      r = document.querySelector("#notion-app .notion-app-inner .whenContentEditable");
    return (
      e &&
        G("#notion-app .notion-app-inner .whenContentEditable").then(() => {
          r == null || r.addEventListener("keydown", n);
        }),
      U("isHideSlashMenuWhenPressSpacebar").subscribe((o) => {
        t(o);
      }),
      E(["isHideSlashMenuWhenPressSpacebar"]).then((o) => {
        H(o == null ? void 0 : o.isHideSlashMenuWhenPressSpacebar) && t(o == null ? void 0 : o.isHideSlashMenuWhenPressSpacebar);
      }),
      () => {
        r == null || r.removeEventListener("keydown", n);
      }
    );
  }, [e]);
}
var En = "complete",
  Xt = "canceled";
function Du(e) {
  if ("requestAnimationFrame" in window) return window.requestAnimationFrame(e);
  setTimeout(e, 16);
}
function Yt(e, t, n) {
  e.self === e ? e.scrollTo(t, n) : ((e.scrollLeft = t), (e.scrollTop = n));
}
function Bu(e, t) {
  var n = e.align,
    r = e.target,
    a = r.getBoundingClientRect(),
    o,
    i,
    s,
    l,
    f,
    v,
    d,
    h = n && n.left != null ? n.left : 0.5,
    b = n && n.top != null ? n.top : 0.5,
    m = n && n.leftOffset != null ? n.leftOffset : 0,
    _ = n && n.topOffset != null ? n.topOffset : 0,
    p = h,
    S = b;
  if (e.isWindow(t))
    (v = Math.min(a.width, t.innerWidth)),
      (d = Math.min(a.height, t.innerHeight)),
      (i = a.left + t.pageXOffset - t.innerWidth * p + v * p),
      (s = a.top + t.pageYOffset - t.innerHeight * S + d * S),
      (i -= m),
      (s -= _),
      (i = e.align.lockX ? t.pageXOffset : i),
      (s = e.align.lockY ? t.pageYOffset : s),
      (l = i - t.pageXOffset),
      (f = s - t.pageYOffset);
  else {
    (v = a.width), (d = a.height), (o = t.getBoundingClientRect());
    var C = a.left - (o.left - t.scrollLeft),
      P = a.top - (o.top - t.scrollTop);
    (i = C + v * p - t.clientWidth * p),
      (s = P + d * S - t.clientHeight * S),
      (i -= m),
      (s -= _),
      (i = Math.max(Math.min(i, t.scrollWidth - t.clientWidth), 0)),
      (s = Math.max(Math.min(s, t.scrollHeight - t.clientHeight), 0)),
      (i = e.align.lockX ? t.scrollLeft : i),
      (s = e.align.lockY ? t.scrollTop : s),
      (l = i - t.scrollLeft),
      (f = s - t.scrollTop);
  }
  return { x: i, y: s, differenceX: l, differenceY: f };
}
function $e(e) {
  var t = e._scrollSettings;
  if (t) {
    var n = t.maxSynchronousAlignments,
      r = Bu(t, e),
      a = Date.now() - t.startTime,
      o = Math.min((1 / t.time) * a, 1);
    if (t.endIterations >= n) return Yt(e, r.x, r.y), (e._scrollSettings = null), t.end(En);
    var i = 1 - t.ease(o);
    if ((Yt(e, r.x - r.differenceX * i, r.y - r.differenceY * i), a >= t.time)) {
      t.endIterations++, t.scrollAncestor && $e(t.scrollAncestor), $e(e);
      return;
    }
    Du($e.bind(null, e));
  }
}
function Wu(e) {
  return e.self === e;
}
function Fu(e, t, n, r, a) {
  var o = !t._scrollSettings,
    i = t._scrollSettings,
    s = Date.now(),
    l,
    f = { passive: !0 };
  i && i.end(Xt);
  function v(h) {
    (t._scrollSettings = null),
      t.parentElement && t.parentElement._scrollSettings && t.parentElement._scrollSettings.end(h),
      n.debug,
      a(h),
      l && (t.removeEventListener("touchstart", l, f), t.removeEventListener("wheel", l, f));
  }
  var d = n.maxSynchronousAlignments;
  return (
    d == null && (d = 3),
    (t._scrollSettings = { startTime: s, endIterations: 0, target: e, time: n.time, ease: n.ease, align: n.align, isWindow: n.isWindow || Wu, maxSynchronousAlignments: d, end: v, scrollAncestor: r }),
    (!("cancellable" in n) || n.cancellable) && ((l = v.bind(null, Xt)), t.addEventListener("touchstart", l, f), t.addEventListener("wheel", l, f)),
    o && $e(t),
    l
  );
}
function Vt(e) {
  return "pageXOffset" in e || ((e.scrollHeight !== e.clientHeight || e.scrollWidth !== e.clientWidth) && getComputedStyle(e).overflow !== "hidden");
}
function Gu() {
  return !0;
}
function Ye(e) {
  if (e.assignedSlot) return Ye(e.assignedSlot);
  if (e.parentElement) return e.parentElement.tagName.toLowerCase() === "body" ? e.parentElement.ownerDocument.defaultView || e.parentElement.ownerDocument.ownerWindow : e.parentElement;
  if (e.getRootNode) {
    var t = e.getRootNode();
    if (t.nodeType === 11) return t.host;
  }
}
const Uu = (e, t, n) => {
    if (!e) return;
    typeof t == "function" && ((n = t), (t = null)),
      t || (t = {}),
      (t.time = isNaN(t.time) ? 1e3 : t.time),
      (t.ease =
        t.ease ||
        function (f) {
          return 1 - Math.pow(1 - f, f / 2);
        }),
      (t.align = t.align || {});
    var r = Ye(e),
      a = 1;
    function o(f) {
      a--, a || (n && n(f));
    }
    var i = t.validTarget || Gu,
      s = t.isScrollable;
    t.debug;
    for (var l = []; r; )
      if ((t.debug, i(r, a) && (s ? s(r, Vt) : Vt(r)) && (a++, l.push(r)), (r = Ye(r)), !r)) {
        o(En);
        break;
      }
    return l.reduce((f, v, d) => Fu(e, v, t, l[d + 1], o), null);
  },
  zu = new RegExp(`${ne}`),
  Ku = new RegExp(`${re}`),
  Ju = new RegExp(`${ae}`),
  Xu = (e) =>
    e.map((t) => {
      const n = t == null ? void 0 : t.getAttribute("data-block-id"),
        r = t.querySelector('[data-content-editable-leaf="true"]').textContent;
      let a;
      return zu.test(t.className) ? (a = ne) : Ku.test(t.className) ? (a = re) : Ju.test(t.className) && (a = ae), { level: a, text: r, hash: n };
    }),
  Yu = "/assets/icon-collapse-b33b49ee.svg";
const Zt = chrome.runtime.getURL(Pn),
  Qt = chrome.runtime.getURL(Yu);
let De = !1;
const qt = 0,
  en = new RegExp(`${ne}|${re}|${ae}`);
let be,
  te,
  _e = Fe,
  Be = null;
const Vu = (e, t) => {
    if (!e || !t || e.length !== t.length) return !1;
    for (let n = 0; n < e.length; n++) {
      const r = e[n],
        a = t[n];
      if (!r || !a || r.level !== a.level || r.text !== a.text) return !1;
    }
    return !0;
  },
  Zu = (e) => {
    if (!e) return "";
    const t = Array.from(e.classList);
    let n = "";
    return t.includes(ne) ? (n = `${ne}`) : t.includes(re) ? (n = `${re}`) : t.includes(ae) && (n = `${ae}`), n;
  };
function Qu() {
  Su(), wu(), Tu(), Ou(), Lu(), Iu(), Pu(), xu(), Mu(), Hu(), Nu(), ju(), Ru();
  const { showWordsCount: e } = ku(),
    { triggerUseHideBreadCrumbs: t } = $u(),
    { triggerUseHideBackLinks: n } = Eu(),
    [r, a] = u.useState([]),
    [o, i] = u.useState([]),
    [s, l] = u.useState(qt),
    [f, v] = u.useState(0),
    [d, h] = u.useState(0),
    b = u.useRef(null),
    m = u.useRef(!1),
    _ = u.useRef(!1),
    [p, S] = u.useState(!0),
    C = (c) => {
      c &&
        ((De = !0),
        Uu(c, { align: { top: 0 } }, () => {
          De = !1;
        }));
    },
    P = (c) => {
      var M, N;
      const I = (N = (M = c.target) == null ? void 0 : M.dataset) == null ? void 0 : N.blockid,
        A = document.querySelector(`.notion-page-content div[data-block-id="${I}"]`);
      A && C(A);
    },
    x = () => {
      var c;
      (m.current = !1), (c = b.current) == null || c.classList.add("hide");
    },
    $ = () => {
      G(".notion-frame .whenContentEditable").then(() => {
        (Be = document.querySelector(".whenContentEditable")),
          !_.current &&
            Be &&
            ((_.current = !0),
            w(),
            (te = new MutationObserver(() => {
              w();
            })),
            te.observe(Be, { subtree: !0, childList: !0, characterData: !0 }));
      });
    },
    g = () => {
      var A, M, N, de;
      const c = document.querySelectorAll(".notion-page-content .notion-selectable");
      if (!c) return null;
      const I = Array.from(c).filter((k) => en.test(k.className));
      for (let k = 0; k < I.length; k++) {
        const rt = I[k];
        if (st(rt)) {
          const at = rt.getAttribute("data-block-id") || "";
          if (_e !== Fe && _e === at) break;
          _e = at;
          const xe = (A = b.current) == null ? void 0 : A.querySelector(".list-container");
          if (!xe) return;
          const z = xe.querySelectorAll(".link-item");
          let ot = 0;
          for (let B = 0; B < k; B++) {
            (M = z[B]) == null || M.classList.remove("current");
            const Me = z[B];
            ot += (Me == null ? void 0 : Me.scrollHeight) || 0;
          }
          l(k), (N = z[k]) == null || N.classList.add("current");
          for (let B = k + 1; B < z.length; B++) (de = z[B]) == null || de.classList.remove("current");
          !Mn(z[k]) && !De && (xe.scrollTop = ot - 100);
          break;
        }
      }
    },
    O = () => {
      var I, A, M;
      const c = document.querySelector(".notion-page-content");
      if (c && e) {
        const N = ((I = c.textContent) == null ? void 0 : I.length) || 0,
          de = ((M = (A = c.textContent) == null ? void 0 : A.match(/\S+/g)) == null ? void 0 : M.length) || 0;
        v(de), h(N);
      }
    },
    { run: w } = Bt(
      () => {
        const c = document.querySelectorAll(".notion-page-content .notion-selectable");
        if ((O(), !c)) return i([]), null;
        const I = Array.from(c).filter((M) => en.test(M.className));
        if (I.length === 0) return i([]), null;
        const A = Xu(I);
        if (Vu(A, r)) return null;
        a(JSON.parse(JSON.stringify(A))), i(I), g();
      },
      { wait: 500 }
    ),
    [L, Q] = u.useState(!1),
    le = (c) => {
      Q(c), j({ isTOCCollapse: c }), w(), g();
    },
    Cn = () => {
      L && L === !0 && le(!1);
    },
    [wn, ue] = u.useState(!1),
    Tn = () => {
      const c = document.querySelector(".notion-frame .notion-page-controls");
      c && !st(c) && C(c);
    },
    Pe = () => {
      var c;
      ct(window.location.href) && ((m.current = !0), w(), (c = b.current) == null || c.classList.remove("hide"));
    },
    { run: tt } = Bt(
      () => {
        g();
      },
      { wait: 500 }
    ),
    fe = u.useRef(!1),
    nt = () => {
      fe.current ||
        G(".notion-frame .notion-scroller").then(() => {
          const c = document.querySelector(".notion-frame .notion-scroller");
          c && (c == null || c.addEventListener("scroll", tt), (fe.current = !0));
        });
    },
    On = () => {
      (_e = Fe),
        l(qt),
        te == null || te.disconnect(),
        be == null || be.disconnect(),
        (be = null),
        (_.current = !1),
        (fe.current = !1),
        v(0),
        h(0),
        setTimeout(() => {
          $(), w();
        }, 0),
        m.current ? Pe() : x(),
        nt(),
        G("#notion-app .notion-frame .notion-page-details-controls", ".notion-frame h1").then(() => {
          document.querySelector("#notion-app .notion-frame .notion-page-details-controls") && n();
        });
    };
  return (
    $n(() => {
      ct(window.location.href) ? S(!0) : S(!1), On();
    }),
    u.useEffect(() => {
      e && O();
    }, [e]),
    u.useEffect(
      () => (
        $(),
        E(["renderWay", "isTOCCollapse", "isScrollToTopChecked"]).then((c) => {
          (c == null ? void 0 : c.renderWay) === !0 ? Pe() : (c == null ? void 0 : c.renderWay) === !1 && x(),
            (c == null ? void 0 : c.isScrollToTopChecked) === !0 ? ue(!0) : (c == null ? void 0 : c.isScrollToTopChecked) === !1 && ue(!1),
            (c == null ? void 0 : c.isTOCCollapse) === !0 ? Q(!0) : Q(!1);
        }),
        chrome.runtime.onMessage.addListener(function (c, I, A) {
          c.renderWay === !0 ? Pe() : c.renderWay === !1 && x(),
            c.isScrollToTopChecked === !0 ? ue(!0) : c.isScrollToTopChecked === !1 && ue(!1),
            A("Have received your message from content script：" + JSON.stringify(c));
        }),
        G("#notion-app .notion-app-inner").then(() => {
          const c = document.querySelector("#notion-app .notion-app-inner");
          c && (j({ fontfamilyOld: c.style.fontFamily }), Sn(), Se());
        }),
        G("#notion-app .notion-topbar .shadow-cursor-breadcrumb").then(() => {
          document.querySelector("#notion-app .notion-topbar .shadow-cursor-breadcrumb") && t();
        }),
        nt(),
        () => {
          const c = document.querySelector(".notion-frame .notion-scroller");
          c == null || c.removeEventListener("scroll", tt), (fe.current = !1);
        }
      ),
      []
    ),
    F(tn, {
      children: [
        F("div", {
          className: it(Dn, m.current && p ? " " : "hide", L ? "COLLAPSE" : ""),
          ref: b,
          children: [
            F("div", {
              className: "toc-header mr-0 p-[10px] flex justify-between items-center",
              children: [
                F("div", {
                  className: "flex items-center",
                  children: [T("div", { className: "header-icon", style: { backgroundImage: `url(${Zt})` } }), T(xn, { as: "h6", size: "xs", marginLeft: 1, children: "NotionX Power" })],
                }),
                T("span", { role: "button", tabIndex: 0, "aria-label": "collapse toc", className: "cursor-pointer icon-collapse", style: { maskImage: `url(${Qt})` }, onClick: () => le(!0) }),
              ],
            }),
            T("div", {
              className: "list-container pt-2",
              onClick: P,
              role: "button",
              tabIndex: 0,
              children: o.length
                ? o.map((c, I) => {
                    var N;
                    const A = c == null ? void 0 : c.getAttribute("data-block-id"),
                      M = c == null ? void 0 : c.getElementsByClassName("notranslate");
                    return T(
                      "div",
                      {
                        className: `link-item ${s === I ? "current" : ""}`,
                        "data-blockid": A,
                        children: T("button", { className: `link ${Zu(c)}`, rel: "noopener noreferrer", "data-blockid": A, children: (N = M[0]) == null ? void 0 : N.textContent }),
                      },
                      I
                    );
                  })
                : T("div", { className: "flex h-full w-full justify-center items-center" }),
            }),
            T("div", { className: it("collapsed-icon", L ? "" : "hide"), "aria-label": "collapsed toc", role: "button", tabIndex: 0, onClick: Cn, style: { backgroundImage: `url(${Zt})` } }),
          ],
        }),
        T("div", {
          className: `${Bn} ${wn && p ? "show" : ""}`,
          onClick: Tn,
          role: "button",
          tabIndex: 0,
          "aria-label": "scroll-to-top button",
          children: T("div", { className: "icon-scroll-to-top", style: { maskImage: `url(${Qt})` } }),
        }),
        F("div", { className: "words-count  text-slate-500 text-sm oveflow-hidden text-nowrap truncate ...", children: [f, " words ", d, " characters"] }),
      ],
    })
  );
}
function qu() {
  const [e, t] = u.useState("testlicense");
  return T("div", { style: { height: "100%", width: "100%" }, children: e === "" ? T(tn, { children: T(Fn, {}) }) : T(Qu, {}) });
}
if (window.self === window.top) {
  const e = "DOM_CONTAINER_CLASS_NOTION_WRAPPER";
  let t = document.querySelector(`.${e}`);
  t || ((t = document.createElement("div")), t.classList.add(`${e}`)), document.body.appendChild(t), Hn.createRoot(t).render(F(Nn.StrictMode, { children: [T(kn, { children: T(qu, {}) }), ","] }));
}
