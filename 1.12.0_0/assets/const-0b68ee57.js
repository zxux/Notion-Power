var q = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function X(d) {
  return d && d.__esModule && Object.prototype.hasOwnProperty.call(d, "default") ? d.default : d;
}
var G = { exports: {} };
(function (d, A) {
  (function (_, S) {
    d.exports = S();
  })(q, function () {
    var _ = 1e3,
      S = 6e4,
      x = 36e5,
      P = "millisecond",
      E = "second",
      w = "minute",
      T = "hour",
      p = "day",
      F = "week",
      O = "month",
      W = "quarter",
      M = "year",
      N = "date",
      B = "Invalid Date",
      Q = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
      J = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
      V = {
        name: "en",
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        ordinal: function (s) {
          var n = ["th", "st", "nd", "rd"],
            t = s % 100;
          return "[" + s + (n[(t - 20) % 10] || n[t] || n[0]) + "]";
        },
      },
      Y = function (s, n, t) {
        var r = String(s);
        return !r || r.length >= n ? s : "" + Array(n + 1 - r.length).join(t) + s;
      },
      K = {
        s: Y,
        z: function (s) {
          var n = -s.utcOffset(),
            t = Math.abs(n),
            r = Math.floor(t / 60),
            e = t % 60;
          return (n <= 0 ? "+" : "-") + Y(r, 2, "0") + ":" + Y(e, 2, "0");
        },
        m: function s(n, t) {
          if (n.date() < t.date()) return -s(t, n);
          var r = 12 * (t.year() - n.year()) + (t.month() - n.month()),
            e = n.clone().add(r, O),
            i = t - e < 0,
            a = n.clone().add(r + (i ? -1 : 1), O);
          return +(-(r + (t - e) / (i ? e - a : a - e)) || 0);
        },
        a: function (s) {
          return s < 0 ? Math.ceil(s) || 0 : Math.floor(s);
        },
        p: function (s) {
          return (
            { M: O, y: M, w: F, d: p, D: N, h: T, m: w, s: E, ms: P, Q: W }[s] ||
            String(s || "")
              .toLowerCase()
              .replace(/s$/, "")
          );
        },
        u: function (s) {
          return s === void 0;
        },
      },
      L = "en",
      y = {};
    y[L] = V;
    var j = "$isDayjsObject",
      U = function (s) {
        return s instanceof k || !(!s || !s[j]);
      },
      I = function s(n, t, r) {
        var e;
        if (!n) return L;
        if (typeof n == "string") {
          var i = n.toLowerCase();
          y[i] && (e = i), t && ((y[i] = t), (e = i));
          var a = n.split("-");
          if (!e && a.length > 1) return s(a[0]);
        } else {
          var u = n.name;
          (y[u] = n), (e = u);
        }
        return !r && e && (L = e), e || (!r && L);
      },
      f = function (s, n) {
        if (U(s)) return s.clone();
        var t = typeof n == "object" ? n : {};
        return (t.date = s), (t.args = arguments), new k(t);
      },
      o = K;
    (o.l = I),
      (o.i = U),
      (o.w = function (s, n) {
        return f(s, { locale: n.$L, utc: n.$u, x: n.$x, $offset: n.$offset });
      });
    var k = (function () {
        function s(t) {
          (this.$L = I(t.locale, null, !0)), this.parse(t), (this.$x = this.$x || t.x || {}), (this[j] = !0);
        }
        var n = s.prototype;
        return (
          (n.parse = function (t) {
            (this.$d = (function (r) {
              var e = r.date,
                i = r.utc;
              if (e === null) return new Date(NaN);
              if (o.u(e)) return new Date();
              if (e instanceof Date) return new Date(e);
              if (typeof e == "string" && !/Z$/i.test(e)) {
                var a = e.match(Q);
                if (a) {
                  var u = a[2] - 1 || 0,
                    c = (a[7] || "0").substring(0, 3);
                  return i ? new Date(Date.UTC(a[1], u, a[3] || 1, a[4] || 0, a[5] || 0, a[6] || 0, c)) : new Date(a[1], u, a[3] || 1, a[4] || 0, a[5] || 0, a[6] || 0, c);
                }
              }
              return new Date(e);
            })(t)),
              this.init();
          }),
          (n.init = function () {
            var t = this.$d;
            (this.$y = t.getFullYear()),
              (this.$M = t.getMonth()),
              (this.$D = t.getDate()),
              (this.$W = t.getDay()),
              (this.$H = t.getHours()),
              (this.$m = t.getMinutes()),
              (this.$s = t.getSeconds()),
              (this.$ms = t.getMilliseconds());
          }),
          (n.$utils = function () {
            return o;
          }),
          (n.isValid = function () {
            return this.$d.toString() !== B;
          }),
          (n.isSame = function (t, r) {
            var e = f(t);
            return this.startOf(r) <= e && e <= this.endOf(r);
          }),
          (n.isAfter = function (t, r) {
            return f(t) < this.startOf(r);
          }),
          (n.isBefore = function (t, r) {
            return this.endOf(r) < f(t);
          }),
          (n.$g = function (t, r, e) {
            return o.u(t) ? this[r] : this.set(e, t);
          }),
          (n.unix = function () {
            return Math.floor(this.valueOf() / 1e3);
          }),
          (n.valueOf = function () {
            return this.$d.getTime();
          }),
          (n.startOf = function (t, r) {
            var e = this,
              i = !!o.u(r) || r,
              a = o.p(t),
              u = function (v, $) {
                var g = o.w(e.$u ? Date.UTC(e.$y, $, v) : new Date(e.$y, $, v), e);
                return i ? g : g.endOf(p);
              },
              c = function (v, $) {
                return o.w(e.toDate()[v].apply(e.toDate("s"), (i ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice($)), e);
              },
              l = this.$W,
              h = this.$M,
              m = this.$D,
              b = "set" + (this.$u ? "UTC" : "");
            switch (a) {
              case M:
                return i ? u(1, 0) : u(31, 11);
              case O:
                return i ? u(1, h) : u(0, h + 1);
              case F:
                var D = this.$locale().weekStart || 0,
                  C = (l < D ? l + 7 : l) - D;
                return u(i ? m - C : m + (6 - C), h);
              case p:
              case N:
                return c(b + "Hours", 0);
              case T:
                return c(b + "Minutes", 1);
              case w:
                return c(b + "Seconds", 2);
              case E:
                return c(b + "Milliseconds", 3);
              default:
                return this.clone();
            }
          }),
          (n.endOf = function (t) {
            return this.startOf(t, !1);
          }),
          (n.$set = function (t, r) {
            var e,
              i = o.p(t),
              a = "set" + (this.$u ? "UTC" : ""),
              u = ((e = {}),
              (e[p] = a + "Date"),
              (e[N] = a + "Date"),
              (e[O] = a + "Month"),
              (e[M] = a + "FullYear"),
              (e[T] = a + "Hours"),
              (e[w] = a + "Minutes"),
              (e[E] = a + "Seconds"),
              (e[P] = a + "Milliseconds"),
              e)[i],
              c = i === p ? this.$D + (r - this.$W) : r;
            if (i === O || i === M) {
              var l = this.clone().set(N, 1);
              l.$d[u](c), l.init(), (this.$d = l.set(N, Math.min(this.$D, l.daysInMonth())).$d);
            } else u && this.$d[u](c);
            return this.init(), this;
          }),
          (n.set = function (t, r) {
            return this.clone().$set(t, r);
          }),
          (n.get = function (t) {
            return this[o.p(t)]();
          }),
          (n.add = function (t, r) {
            var e,
              i = this;
            t = Number(t);
            var a = o.p(r),
              u = function (h) {
                var m = f(i);
                return o.w(m.date(m.date() + Math.round(h * t)), i);
              };
            if (a === O) return this.set(O, this.$M + t);
            if (a === M) return this.set(M, this.$y + t);
            if (a === p) return u(1);
            if (a === F) return u(7);
            var c = ((e = {}), (e[w] = S), (e[T] = x), (e[E] = _), e)[a] || 1,
              l = this.$d.getTime() + t * c;
            return o.w(l, this);
          }),
          (n.subtract = function (t, r) {
            return this.add(-1 * t, r);
          }),
          (n.format = function (t) {
            var r = this,
              e = this.$locale();
            if (!this.isValid()) return e.invalidDate || B;
            var i = t || "YYYY-MM-DDTHH:mm:ssZ",
              a = o.z(this),
              u = this.$H,
              c = this.$m,
              l = this.$M,
              h = e.weekdays,
              m = e.months,
              b = e.meridiem,
              D = function ($, g, R, H) {
                return ($ && ($[g] || $(r, i))) || R[g].slice(0, H);
              },
              C = function ($) {
                return o.s(u % 12 || 12, $, "0");
              },
              v =
                b ||
                function ($, g, R) {
                  var H = $ < 12 ? "AM" : "PM";
                  return R ? H.toLowerCase() : H;
                };
            return i.replace(J, function ($, g) {
              return (
                g ||
                (function (R) {
                  switch (R) {
                    case "YY":
                      return String(r.$y).slice(-2);
                    case "YYYY":
                      return o.s(r.$y, 4, "0");
                    case "M":
                      return l + 1;
                    case "MM":
                      return o.s(l + 1, 2, "0");
                    case "MMM":
                      return D(e.monthsShort, l, m, 3);
                    case "MMMM":
                      return D(m, l);
                    case "D":
                      return r.$D;
                    case "DD":
                      return o.s(r.$D, 2, "0");
                    case "d":
                      return String(r.$W);
                    case "dd":
                      return D(e.weekdaysMin, r.$W, h, 2);
                    case "ddd":
                      return D(e.weekdaysShort, r.$W, h, 3);
                    case "dddd":
                      return h[r.$W];
                    case "H":
                      return String(u);
                    case "HH":
                      return o.s(u, 2, "0");
                    case "h":
                      return C(1);
                    case "hh":
                      return C(2);
                    case "a":
                      return v(u, c, !0);
                    case "A":
                      return v(u, c, !1);
                    case "m":
                      return String(c);
                    case "mm":
                      return o.s(c, 2, "0");
                    case "s":
                      return String(r.$s);
                    case "ss":
                      return o.s(r.$s, 2, "0");
                    case "SSS":
                      return o.s(r.$ms, 3, "0");
                    case "Z":
                      return a;
                  }
                  return null;
                })($) ||
                a.replace(":", "")
              );
            });
          }),
          (n.utcOffset = function () {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
          }),
          (n.diff = function (t, r, e) {
            var i,
              a = this,
              u = o.p(r),
              c = f(t),
              l = (c.utcOffset() - this.utcOffset()) * S,
              h = this - c,
              m = function () {
                return o.m(a, c);
              };
            switch (u) {
              case M:
                i = m() / 12;
                break;
              case O:
                i = m();
                break;
              case W:
                i = m() / 3;
                break;
              case F:
                i = (h - l) / 6048e5;
                break;
              case p:
                i = (h - l) / 864e5;
                break;
              case T:
                i = h / x;
                break;
              case w:
                i = h / S;
                break;
              case E:
                i = h / _;
                break;
              default:
                i = h;
            }
            return e ? i : o.a(i);
          }),
          (n.daysInMonth = function () {
            return this.endOf(O).$D;
          }),
          (n.$locale = function () {
            return y[this.$L];
          }),
          (n.locale = function (t, r) {
            if (!t) return this.$L;
            var e = this.clone(),
              i = I(t, r, !0);
            return i && (e.$L = i), e;
          }),
          (n.clone = function () {
            return o.w(this.$d, this);
          }),
          (n.toDate = function () {
            return new Date(this.valueOf());
          }),
          (n.toJSON = function () {
            return this.isValid() ? this.toISOString() : null;
          }),
          (n.toISOString = function () {
            return this.$d.toISOString();
          }),
          (n.toString = function () {
            return this.$d.toUTCString();
          }),
          s
        );
      })(),
      Z = k.prototype;
    return (
      (f.prototype = Z),
      [
        ["$ms", P],
        ["$s", E],
        ["$m", w],
        ["$H", T],
        ["$W", p],
        ["$M", O],
        ["$y", M],
        ["$D", N],
      ].forEach(function (s) {
        Z[s[1]] = function (n) {
          return this.$g(n, s[0], s[1]);
        };
      }),
      (f.extend = function (s, n) {
        return s.$i || (s(n, k, f), (s.$i = !0)), f;
      }),
      (f.locale = I),
      (f.isDayjs = U),
      (f.unix = function (s) {
        return f(1e3 * s);
      }),
      (f.en = y[L]),
      (f.Ls = y),
      (f.p = {}),
      f
    );
  });
})(G);
var tt = G.exports;
const it = X(tt);
function at(d) {
  return new Promise((A, _) => {
    try {
      chrome.storage.sync.set(d, function () {
        if (!chrome.storage.sync) return _(null);
        chrome.runtime.lastError ? _(chrome.runtime.lastError) : A(null);
      });
    } catch {
      _(null);
    }
  });
}
function ot(d) {
  return new Promise((A, _) => {
    try {
      if (!chrome.storage.sync) return _(null);
      chrome.storage.sync.get(d, function (S) {
        chrome.runtime.lastError ? _(chrome.runtime.lastError) : A(S);
      });
    } catch {
      return _(null);
    }
  });
}
const et = /^https?:\/\/(?:www\.)?notion\.so\/(?:(?!help|templates|product|blog|my-integrations|pricing|webinars|product|mobile|desktop|web-clipper|enterprise|teams|personal|login).*)*$/i,
  ut = (d) => (d === void 0 || d === "https://www.notion.so/" ? !1 : et.test(d)),
  ct = "DOM_CONTAINER_CLASS_NOTION",
  ft = "NOTION_POWER_COMPONENT_SCROLL_TO_TOP",
  lt = "notion-header-block",
  ht = "notion-sub_header-block",
  dt = "notion-sub_sub_header-block",
  $t = "init-block-id",
  mt = [
    { name: "Reset Font Family", value: "reset" },
    { name: "Arial", value: "Arial, Helvetica Neue, Helvetica, sans-serif" },
    { name: "Helvetica", value: "Helvetica, sans-serif" },
    { name: "Times New Roman", value: '"Times New Roman", serif' },
    { name: "Courier New", value: '"Courier New", monospace' },
  ],
  nt = "#FFFFE0",
  _t = [
    { name: "Reset Background Color", value: "reset" },
    { name: "Light Gray", value: "#F5F5F5" },
    { name: "Light Blue", value: "#E6F7FF" },
    { name: "Light Yellow", value: nt },
  ],
  z = "https://notionpower.app",
  Ot = () => {
    chrome.tabs.create({ url: z });
  },
  St = () => {
    chrome.tabs.create({ url: z + "/#feature-list" });
  },
  pt = { 1: "12px", 2: "14px", 3: "16px" },
  Mt = { 1: "14px", 2: "16px", 3: "18px" },
  gt = "#FFA700",
  yt = "SEND_MSG_CLOSE_POPUP",
  rt = 19621,
  st = 194794,
  Dt = rt,
  vt = st,
  Et = "37E5CB33-2BFB-408B-9DD3-A35CF9FDF047",
  wt = 9999;
export {
  nt as B,
  lt as C,
  ct as D,
  $t as E,
  mt as F,
  Et as L,
  ft as N,
  yt as S,
  wt as T,
  Mt as a,
  ht as b,
  q as c,
  dt as d,
  it as e,
  pt as f,
  X as g,
  Ot as h,
  ut as i,
  Dt as j,
  vt as k,
  St as l,
  _t as m,
  gt as n,
  ot as r,
  at as s,
};
