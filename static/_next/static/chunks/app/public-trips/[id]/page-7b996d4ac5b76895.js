(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [66],
  {
    5265: function (e, t, n) {
      "use strict";
      n.d(t, {
        Ny: function () {
          return o;
        },
        aS: function () {
          return l;
        },
      });
      var r = n(2265);
      let i = r.createContext({});
      function l(e, t) {
        let n = (function () {
          let { growthbook: e } = r.useContext(i);
          return e;
        })();
        return n ? n.getFeatureValue(e, t) : t;
      }
      let o = ({ children: e, growthbook: t }) => {
        let [n, l] = r.useState(0);
        return (
          r.useEffect(() => {
            if (t && t.setRenderer)
              return (
                t.setRenderer(() => {
                  l((e) => e + 1);
                }),
                () => {
                  t.setRenderer(() => {});
                }
              );
          }, [t]),
          r.createElement(i.Provider, { value: { growthbook: t } }, e)
        );
      };
    },
    64174: function (e, t, n) {
      "use strict";
      var r = n(26314);
      t.Z = void 0;
      var i = r(n(80984)),
        l = n(57437),
        o = (0, i.default)(
          (0, l.jsx)("path", {
            d: "M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z",
          }),
          "Star"
        );
      t.Z = o;
    },
    80984: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return r.createSvgIcon;
          },
        });
      var r = n(59897);
    },
    55867: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 54458)),
        Promise.resolve().then(n.t.bind(n, 29928, 23)),
        Promise.resolve().then(n.t.bind(n, 90413, 23)),
        Promise.resolve().then(n.t.bind(n, 68326, 23)),
        Promise.resolve().then(n.bind(n, 4840)),
        Promise.resolve().then(n.bind(n, 76796)),
        Promise.resolve().then(n.bind(n, 71197)),
        Promise.resolve().then(n.bind(n, 72659)),
        Promise.resolve().then(n.bind(n, 5834)),
        Promise.resolve().then(n.bind(n, 80909)),
        Promise.resolve().then(n.bind(n, 46369)),
        Promise.resolve().then(n.bind(n, 19399)),
        Promise.resolve().then(n.bind(n, 27074)),
        Promise.resolve().then(n.bind(n, 80280)),
        Promise.resolve().then(n.bind(n, 8204)),
        Promise.resolve().then(n.bind(n, 42174)),
        Promise.resolve().then(n.bind(n, 54533)),
        Promise.resolve().then(n.bind(n, 24683)),
        Promise.resolve().then(n.bind(n, 41380)),
        Promise.resolve().then(n.bind(n, 38192)),
        Promise.resolve().then(n.bind(n, 231)),
        Promise.resolve().then(n.bind(n, 97884));
    },
    4840: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return Error;
          },
        });
      var r = n(57437),
        i = n(16691),
        l = n.n(i),
        o = n(61396),
        a = n.n(o),
        s = n(2265),
        u = n(71157);
      function Error(e) {
        let { error: t, reset: n } = e,
          [i, o] = (0, s.useState)(!1);
        return (0, r.jsx)("div", {
          className: "flex h-screen w-screen items-center justify-center",
          children: (0, r.jsxs)("div", {
            className: "flex flex-col items-center gap-2",
            children: [
              (0, r.jsx)(l(), {
                src: "/trippy/trippy-sad.webp",
                alt: "Trippy sad",
                width: 70,
                height: 70,
              }),
              (0, r.jsx)("h2", {
                className: "text-lg font-medium",
                children: "Something went wrong!",
              }),
              (0, r.jsx)("p", {
                className:
                  "line-clamp-2 max-w-lg text-center text-xs text-gray-700",
                children: null == t ? void 0 : t.message,
              }),
              (0, r.jsx)("button", {
                className:
                  "rounded-md px-3 py-1 text-sm text-accent-red underline hover:bg-gray-100",
                onClick: () => o(!i),
                children: i ? "Hide" : "See more details",
              }),
              i &&
                (0, r.jsx)("p", {
                  className:
                    "mx-4 max-h-32 max-w-lg overflow-y-auto rounded-md border border-solid border-gray-300 p-2 text-xs text-gray-700",
                  children: null == t ? void 0 : t.stack,
                }),
              (0, r.jsx)(a(), {
                href: "/".concat(u.I.TRIPS),
                className:
                  "mt-8 rounded-full border border-solid border-gray-200 px-4 py-1 text-gray-600 hover:border-gray-300",
                children: "Back home",
              }),
            ],
          }),
        });
      }
    },
    90436: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var r = n(57437),
        i = n(2265);
      function l(e) {
        let { adKey: t, adHeight: n, adWidth: l } = e,
          o = (0, i.useRef)(),
          a = { key: t, format: "iframe", height: n, width: l, params: {} };
        return (
          (0, i.useEffect)(() => {
            if (o.current && !o.current.firstChild) {
              let e = document.createElement("script"),
                t = document.createElement("script");
              (t.type = "text/javascript"),
                (t.src = "//www.topcreativeformat.com/".concat(
                  a.key,
                  "/invoke.js"
                )),
                (e.innerHTML = "atOptions = ".concat(JSON.stringify(a))),
                o.current.append(e),
                o.current.append(t);
            }
          }, [o]),
          (0, r.jsx)("div", { className: "h-full w-full", ref: o })
        );
      }
    },
    76796: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        });
      var r = n(57437),
        i = n(72759),
        l = n(80504),
        o = n(61396),
        a = n.n(o),
        s = n(22635),
        u = n(71157);
      function c(e) {
        var t;
        let { trip: n, destination: o, destinationIdx: c } = e,
          { data: d } = (0, s.kP)(),
          f = n.user.display_name.split(" ")[0],
          p = d
            ? "".concat(f).concat(f.endsWith("s") ? "'" : "'s")
            : "This user",
          v = n.destinations.length > 1;
        return (0, r.jsxs)("div", {
          className:
            "mx-auto mb-24 mt-16 flex w-fit flex-col items-center justify-center",
          children: [
            (0, r.jsx)(l.G, {
              icon: i.Wx7,
              className:
                "rounded-full bg-gray-100 p-4 text-xl text-gray-600 md:p-5 md:text-2xl",
            }),
            (0, r.jsx)("h3", {
              className:
                "mt-4 text-xl font-medium text-blue-gray-500 md:text-2xl",
              children: "Wow!",
            }),
            (0, r.jsxs)("p", {
              className: "text-sm md:text-base",
              children: [
                p,
                " hasn't generated an itinerary",
                v
                  ? " for ".concat(
                      null === (t = o.destination_str) || void 0 === t
                        ? void 0
                        : t.split(",")[0]
                    )
                  : "",
                ". Stay tuned \uD83D\uDE01",
              ],
            }),
            v &&
              0 === c &&
              (0, r.jsx)(a(), {
                href: "/".concat(u.B.NEW_TRIP),
                className:
                  "bg-tp-purple-2 mt-5 rounded-full px-4 py-1.5 text-sm text-white md:text-base",
                children: "Create my trip",
              }),
          ],
        });
      }
    },
    71197: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var r = n(57437),
        i = n(59206);
      let l = (e) =>
        window.localStorage.getItem("plans:".concat(e, ":currency")) || "USD";
      function o(e) {
        var t;
        let { activity: n, trip: o } = e,
          a =
            null !== (t = null == o ? void 0 : o.people) && void 0 !== t
              ? t
              : 1,
          s = Math.round(n.price * a),
          u = l(o.id);
        return (0, r.jsx)("div", {
          className: "flex items-center gap-2",
          children: (0, r.jsx)("div", {
            className:
              "flex items-center gap-2 rounded-full py-0.5 text-sm font-medium md:text-base",
            children: (0, r.jsxs)("span", {
              children: [s > 0 && i.Z[u], 0 === s ? "Free" : s],
            }),
          }),
        });
      }
    },
    72659: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        });
      var r = n(57437),
        i = n(72759),
        l = n(80504),
        o = n(16691),
        a = n.n(o),
        s = n(231),
        u = n(7899);
      function c(e) {
        var t, n, o, c, f, p, v, x, m, b, h, g;
        let {
            activity: y,
            dayIdx: R,
            hasPhotos: w,
            location: N,
            destinationIdx: S,
          } = e,
          { centerPlace: j } = (0, u.x)({ activity: y, dayIdx: R }),
          { setSightDetail: O } = (0, s.useSightDetail)(),
          I =
            (null === (n = y.location) || void 0 === n
              ? void 0
              : null === (t = n.editorial_summary) || void 0 === t
              ? void 0
              : t.overview) ||
            (null === (o = y.location) || void 0 === o
              ? void 0
              : o.description),
          T =
            (null == y
              ? void 0
              : null === (c = y.notes) || void 0 === c
              ? void 0
              : c.length) > 0;
        return (0, r.jsxs)("div", {
          className:
            "flex w-full flex-col items-start justify-between gap-0 md:gap-2",
          children: [
            (0, r.jsxs)("div", {
              className:
                "relative right-0 flex h-full w-full cursor-pointer select-none gap-2 rounded-xl text-left text-xl font-[400] text-tp-purple-2 opacity-100 transition-all md:items-center md:gap-1 md:text-xl",
              children: [
                (0, r.jsxs)("div", {
                  className: "w-full",
                  children: [
                    (0, r.jsx)("button", {
                      onMouseEnter: j,
                      onClick: () => {
                        O({
                          data: y,
                          dayIdx: R,
                          activityIdx: y.id,
                          destinationIdx: S,
                        });
                      },
                      className: "".concat(
                        T ? "line-clamp-1" : "",
                        " w-[80%] text-start sm:w-full md:hover:underline"
                      ),
                      children: y.place,
                    }),
                    T
                      ? (0, r.jsxs)("p", {
                          className:
                            "mt-2 w-full border-b border-solid border-gray-200 py-2 text-base text-gray-400 md:mt-0 md:w-[100%]",
                          children: [
                            (0, r.jsx)(l.G, { icon: i.L4e, className: "mr-2" }),
                            (0, r.jsx)("span", {
                              children: null == y ? void 0 : y.notes,
                            }),
                          ],
                        })
                      : (0, r.jsxs)(r.Fragment, {
                          children: [
                            (0, r.jsx)("div", {
                              className: "float-right items-center gap-3",
                              children:
                                w &&
                                (0, r.jsx)(a(), {
                                  src:
                                    null !==
                                      (m =
                                        null !==
                                          (x =
                                            null ===
                                              (f = (
                                                null !==
                                                  (v =
                                                    null == N
                                                      ? void 0
                                                      : N.photos) &&
                                                void 0 !== v
                                                  ? v
                                                  : []
                                              )[0]) || void 0 === f
                                              ? void 0
                                              : f.url) && void 0 !== x
                                          ? x
                                          : null == N
                                          ? void 0
                                          : N.photos[0].photo_urls["480"]) &&
                                    void 0 !== m
                                      ? m
                                      : "",
                                  className:
                                    "pointer-events-none -mt-6 ml-2.5 block h-20 w-24 min-w-[5rem] rounded-lg bg-cover bg-center shadow-md md:hidden",
                                  alt: null == N ? void 0 : N.name,
                                  width: 90,
                                  height: 90,
                                }),
                            }),
                            (0, r.jsx)(d, { description: I }),
                          ],
                        }),
                  ],
                }),
                (0, r.jsx)("div", {
                  children: (0, r.jsx)("div", {
                    className: "float-right items-center gap-3",
                    children:
                      w &&
                      T &&
                      (0, r.jsx)(a(), {
                        src:
                          null !==
                            (g =
                              null !==
                                (h =
                                  null ===
                                    (p = (
                                      null !==
                                        (b = null == N ? void 0 : N.photos) &&
                                      void 0 !== b
                                        ? b
                                        : []
                                    )[0]) || void 0 === p
                                    ? void 0
                                    : p.url) && void 0 !== h
                                ? h
                                : null == N
                                ? void 0
                                : N.photos[0].photo_urls["480"]) && void 0 !== g
                            ? g
                            : "",
                        className:
                          "pointer-events-none block h-20 w-32 min-w-[5rem] rounded-lg bg-cover bg-center shadow-md md:hidden",
                        alt: null == N ? void 0 : N.name,
                        width: 90,
                        height: 90,
                      }),
                  }),
                }),
              ],
            }),
            T &&
              (0, r.jsx)("div", {
                className: "ml-auto mt-2",
                children: (0, r.jsx)(d, { description: I }),
              }),
          ],
        });
      }
      let d = (e) => {
        let { description: t } = e;
        return (null == t ? void 0 : t.length) > 0
          ? (0, r.jsx)("span", {
              className: "w-full text-base text-gray-500",
              children: t,
            })
          : null;
      };
    },
    5834: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var r = n(57437),
        i = n(7899);
      function l(e) {
        let { activity: t, dayIdx: n } = e,
          { centerPlace: l } = (0, i.x)({ activity: t, dayIdx: n });
        return (0, r.jsx)("div", {
          className:
            "group mt-4 flex items-center justify-between gap-3 pb-4 pr-0 md:min-h-[80px]",
          children: (0, r.jsxs)("div", {
            className: "px-3 md:px-3",
            children: [
              (0, r.jsx)("p", {
                className: "flex items-center gap-0 md:gap-2",
                onMouseEnter: l,
                children: (0, r.jsx)("span", {
                  className:
                    "relative right-0 line-clamp-1 cursor-pointer rounded-xl  text-left text-lg font-[400] text-tp-purple-2 opacity-100 transition-all md:max-w-none md:whitespace-nowrap md:text-xl md:hover:underline",
                  children: t.place,
                }),
              }),
              (0, r.jsx)("p", {
                className: "line-clamp-1 w-full text-[15px]  md:line-clamp-1",
                children: "Depart from your stay \uD83C\uDFE8",
              }),
            ],
          }),
        });
      }
    },
    80909: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var r = n(57437),
        i = n(61396),
        l = n.n(i),
        o = n(28638);
      function a(e) {
        let { routeLink: t, trip: n, destinationIdx: i } = e;
        return (0, r.jsxs)(l(), {
          href: t,
          rel: "noopener noreferrer",
          className: "group flex cursor-pointer no-underline",
          onClick: () => {
            (0, o.Eq)(n, i);
          },
          children: [
            (0, r.jsx)("p", { className: "mx-3", children: "~" }),
            (0, r.jsx)("p", {
              className: "text-[12px] text-gray-600 hover:underline",
              children: "Directions",
            }),
          ],
        });
      }
    },
    46369: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var r = n(57437),
        i = n(72759),
        l = n(80504);
      function o(e) {
        let { activity: t } = e;
        return (0, r.jsxs)("div", {
          className: "group grid grid-cols-[auto,1fr] gap-2 md:w-full md:gap-3",
          children: [
            (0, r.jsxs)("div", {
              className: "BOX-LINE relative ml-1 h-full w-fit md:ml-1.5",
              style: { display: "flex", flexDirection: "column" },
              children: [
                (0, r.jsx)("div", {
                  className:
                    "grid h-8 w-8 place-items-center rounded-full bg-gray-200 md:h-9 md:w-9",
                  children: (0, r.jsx)(l.G, {
                    icon: i.Ykk,
                    className: "text-gray-600",
                  }),
                }),
                (0, r.jsx)("div", {
                  className:
                    "absolute left-1/2 z-[-1] h-full border-l-2 border-solid border-gray-200",
                }),
              ],
            }),
            (0, r.jsx)("div", {
              className: "relative flex items-start gap-2",
              children: (0, r.jsx)("div", {
                className:
                  "h-full w-full resize-none whitespace-pre rounded-md border border-solid border-gray-100 bg-gray-50 p-1 py-1.5 text-base text-gray-500 outline-none",
                children: t.text,
              }),
            }),
          ],
        });
      }
    },
    19399: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ItineraryHookWrapper: function () {
            return l;
          },
        });
      var r = n(57437),
        i = n(7899);
      let l = (e) => {
        let { trip: t, destinationIdx: n } = e;
        return (0, i.K)(t, n), (0, r.jsx)(r.Fragment, {});
      };
    },
    27074: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var r = n(2265),
        i = n(59206);
      function l(e) {
        let { trip: t } = e,
          [n, l] = (0, r.useState)("USD");
        return (
          (0, r.useEffect)(() => {
            var e;
            l(
              JSON.parse(
                null !==
                  (e = window.localStorage.getItem(
                    "plans:".concat(t.id, ":currency")
                  )) && void 0 !== e
                  ? e
                  : '"USD"'
              )
            );
          }, [t]),
          i.Z[n]
        );
      }
    },
    80280: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var r = n(57437),
        i = n(97188),
        l = n(72759),
        o = n(80504),
        a = n(2265);
      n(15231), n(470);
      var s = (0, n(31162).$)("40ff480c4e5daffd394625419f95806fb5a83b88"),
        u = n(83247),
        c = n(78255);
      function d(e) {
        var t, n, d;
        let { publicTrip: f } = e,
          [p, v] = (0, u.Z)("likedTrips6", {}),
          x =
            null !==
              (n =
                p[
                  null !== (t = null == f ? void 0 : f.id) && void 0 !== t
                    ? t
                    : ""
                ]) &&
            void 0 !== n &&
            n,
          [m, b] = (0, a.useState)(
            null !== (d = null == f ? void 0 : f.likes) && void 0 !== d ? d : 0
          );
        return (0, r.jsxs)("button", {
          onClick: () => {
            var e, t;
            if (x) {
              let t = { ...p };
              delete t[
                null !== (e = null == f ? void 0 : f.id) && void 0 !== e
                  ? e
                  : ""
              ],
                v(t),
                b((e) => e - 1),
                s({ tripId: null == f ? void 0 : f.id, type: "unlike" });
            } else {
              let e = { ...p };
              (e[
                null !== (t = null == f ? void 0 : f.id) && void 0 !== t
                  ? t
                  : ""
              ] = !0),
                v(e),
                b((e) => e + 1),
                s({ tripId: null == f ? void 0 : f.id, type: "like" }),
                (0, c.y9)(f);
            }
          },
          className:
            "flex items-center gap-2 rounded-full px-3 py-1.5 hover:bg-gray-100",
          children: [
            (0, r.jsx)(o.G, {
              icon: x ? l.m6i : i.m6i,
              className: "".concat(x ? "text-red-500" : ""),
            }),
            m,
          ],
        });
      }
    },
    8204: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var r = n(57437),
        i = n(72759),
        l = n(80504),
        o = n(24033);
      function a(e) {
        let { photoUrl: t } = e,
          n = (0, o.useRouter)();
        return (0, r.jsxs)("button", {
          onClick: () => n.back(),
          className: "".concat(
            t ? "text-white hover:bg-white/25" : "text-white hover:bg-gray-100",
            " group relative z-20 flex items-center gap-2 rounded-lg px-3 py-1.5 text-base font-medium transition-colors "
          ),
          children: [
            (0, r.jsx)(l.G, { icon: i.acZ, className: "h-[15px]" }),
            "Back",
          ],
        });
      }
    },
    42174: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var r = n(57437);
      n(2265);
      var i = n(90436),
        l = n(42075);
      function o(e) {
        let { className: t } = e,
          { tailwindXL: n, tailwindLG: o, tailwindMD: a } = (0, l.Z)();
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsxs)("div", {
            className: t,
            children: [
              n &&
                (0, r.jsx)(i.Z, {
                  adKey: "66e956e8f26ecab736a24cf009d5cb86",
                  adHeight: 90,
                  adWidth: 728,
                }),
              o &&
                !n &&
                (0, r.jsx)(i.Z, {
                  adKey: "154410485bb2ccbd30e22e04871f8adb",
                  adHeight: 60,
                  adWidth: 468,
                }),
              a &&
                !o &&
                (0, r.jsx)(i.Z, {
                  adKey: "154410485bb2ccbd30e22e04871f8adb",
                  adHeight: 60,
                  adWidth: 468,
                }),
              !o &&
                !a &&
                !n &&
                (0, r.jsx)(i.Z, {
                  adKey: "6b871952e2bef4ef4366a86cc40261ba",
                  adHeight: 50,
                  adWidth: 320,
                }),
            ],
          }),
        });
      }
    },
    59206: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = {
        AUD: "A$",
        BGN: "лв",
        BRL: "R$",
        CAD: "C$",
        CHF: "Fr.",
        CNY: "\xa5",
        CZK: "Kč",
        DKK: "kr",
        EUR: "€",
        GBP: "\xa3",
        HKD: "HK$",
        HRK: "kn",
        HUF: "Ft",
        IDR: "Rp",
        ILS: "₪",
        INR: "₹",
        ISK: "kr",
        JPY: "\xa5",
        KRW: "₩",
        MXN: "Mex$",
        MYR: "RM",
        NOK: "kr",
        NZD: "NZ$",
        PHP: "₱",
        PLN: "zł",
        RON: "lei",
        RUB: "₽",
        SEK: "kr",
        SGD: "S$",
        THB: "฿",
        TRY: "₺",
        USD: "$",
        ZAR: "R",
      };
    },
    7899: function (e, t, n) {
      "use strict";
      n.d(t, {
        x: function () {
          return o;
        },
        K: function () {
          return g;
        },
      });
      var r = n(41380),
        i = n(38192),
        l = n(86179);
      function o(e) {
        let { activity: t, dayIdx: n } = e,
          { openPopupMarker: o } = (0, i.useMarkers)(),
          { moveMapToLocation: a } = (0, r.useMapbox)();
        return {
          centerPlace: () => {
            if (
              (o(l.Z.ITINERARY, "".concat(n, "-").concat(t.id)),
              null == t ? void 0 : t.location.center)
            )
              a([
                null == t ? void 0 : t.location.center[1],
                null == t ? void 0 : t.location.center[0],
              ]);
            else {
              var e, r;
              a([
                null == t
                  ? void 0
                  : null === (e = t.location.geometry) || void 0 === e
                  ? void 0
                  : e.location.lng,
                null == t
                  ? void 0
                  : null === (r = t.location.geometry) || void 0 === r
                  ? void 0
                  : r.location.lat,
              ]);
            }
          },
        };
      }
      var a = n(57437),
        s = n(73901),
        u = n.n(s),
        c = n(2265),
        d = n(34040),
        f = n(16234),
        p = n(231),
        v = n(24268),
        x = n(57924),
        m = n(28638),
        b = n(48519),
        h = n(96588);
      function g(e, t) {
        let n = (0, c.useRef)(null),
          o = (0, c.useRef)(null),
          s = (0, h.Z)(e, t),
          g = (0, b.Z)(e, t),
          { map: y, moveMapToLocation: R, mapLoaded: w } = (0, r.useMapbox)(),
          { addMarkers: N, removeMarkersFromMap: S } = (0, i.useMarkers)(),
          { setSightDetail: j } = (0, p.useSightDetail)();
        (0, c.useEffect)(() => {
          e && w && (S(l.Z.SIGHTS), O());
        }, [e, w]);
        let O = () => {
            S(l.Z.ITINERARY);
            let e = {};
            null == g ||
              g.forEach((t, n) => {
                let r = 0;
                null == t ||
                  t.activities.forEach((t) => {
                    if (
                      !(0, x.S)(null == t ? void 0 : t.location) &&
                      (!t.type || "notes" !== t.type)
                    ) {
                      let i = I(t, n, r++);
                      i.addTo(y.current),
                        (e["".concat(n, "-").concat(t.id)] = i);
                    }
                  });
              }),
              N({ [l.Z.ITINERARY]: e });
          },
          I = (e, t, r) => {
            let i = e.location;
            (n.current = document.createElement("div")),
              (o.current = document.createElement("div"));
            let l = s ? r : r + 1;
            d.createRoot(n.current).render(
              (0, a.jsx)(f.Jx, {
                onClick: T,
                placeInfo: i,
                activity: e,
                children:
                  "hotel" === e.type
                    ? (0, a.jsx)("div", {
                        className:
                          "absolute flex h-[38px] w-[38px] rotate-[-45deg] items-center justify-center rounded-full !rounded-bl-none border-solid border-gray-300 bg-white p-1 shadow-[2px_2px_2px_-1px_rgba(0,0,0,0.13)]",
                        children: (0, a.jsx)("p", {
                          className:
                            "rotate-[45deg] text-lg font-[600] text-white",
                          children: "\uD83C\uDFE8",
                        }),
                      })
                    : (0, a.jsx)("div", {
                        className:
                          "marker-pin absolute flex h-[32px] w-[32px] rotate-[-45deg] items-center justify-center rounded-full !rounded-bl-none border-4 border-solid border-white p-1 shadow-[2px_2px_2px_-1px_rgba(0,0,0,0.43)]",
                        style: { backgroundColor: v.x[t] },
                        children: (0, a.jsx)("p", {
                          className:
                            "w-[10px] rotate-[45deg] text-base font-bold text-white",
                          children: l,
                        }),
                      }),
              })
            );
            let c = new (u().Marker)(n.current);
            if ("center" in i && (null == i ? void 0 : i.center))
              c.setLngLat([
                null == i ? void 0 : i.center[1],
                null == i ? void 0 : i.center[0],
              ]);
            else if ("geometry" in i && (null == i ? void 0 : i.geometry)) {
              var p, x;
              c.setLngLat([
                null == i
                  ? void 0
                  : null === (p = i.geometry) || void 0 === p
                  ? void 0
                  : p.location.lng,
                null == i
                  ? void 0
                  : null === (x = i.geometry) || void 0 === x
                  ? void 0
                  : x.location.lat,
              ]);
            }
            d.createRoot(o.current).render(
              (0, a.jsx)(f.GI, {
                onClick: P,
                placeInfo: i,
                activity: e,
                activityIdx: r,
                dayIdx: t,
              })
            );
            let m = new (u().Popup)({
              className: "marker-popup",
              closeButton: !1,
              closeOnClick: !0,
            }).setDOMContent(o.current);
            return c.setPopup(m), c;
          },
          T = (e) => {
            var t, n;
            let r = (null == e ? void 0 : e.center)
              ? [e.center[1], e.center[0]]
              : [
                  null == e
                    ? void 0
                    : null === (t = e.geometry) || void 0 === t
                    ? void 0
                    : t.location.lng,
                  null == e
                    ? void 0
                    : null === (n = e.geometry) || void 0 === n
                    ? void 0
                    : n.location.lat,
                ];
            R(r);
          },
          P = (n, r, i) => {
            j({ data: n, activityIdx: r, dayIdx: i }), (0, m.Sk)(e, i, r, t);
          };
      }
    },
    97884: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n(57437),
        i = n(72759),
        l = n(80504),
        o = n(24033),
        a = n(16234),
        s = n(41380),
        u = n(231),
        c = n(71157);
      t.default = (e) => {
        let { children: t, showMapViewButton: n = !0, trip: d = null } = e,
          { setSightDetail: f, sightDetail: p } = (0, u.useSightDetail)(),
          { showMap: v, isOpenMap: x } = (0, s.useMapbox)(),
          m = (0, o.usePathname)(),
          b =
            m.includes(c.I.SIGHTS) ||
            m.includes(c.I.HOTEL) ||
            m.includes(c.I.MEALS);
        return (0, r.jsxs)("div", {
          className: "z-50 flex flex-col-reverse lg:flex-row",
          id: "right-map",
          children: [
            !x &&
              n &&
              !b &&
              (0, r.jsx)("div", {
                className:
                  "fixed bottom-4 right-4 z-[90] flex justify-end lg:hidden",
                children: (0, r.jsx)("button", {
                  className:
                    "flex h-12 w-12 items-center justify-center gap-2 rounded-full bg-black text-white shadow-md",
                  onClick: () => v(!x),
                  children: (0, r.jsx)(l.G, { icon: x ? i.WA2 : i.Yif }),
                }),
              }),
            (0, r.jsx)("section", {
              id: "left-panel",
              className: "w-full lg:w-[52%]",
              children: t,
            }),
            (0, r.jsx)("section", {
              onClick: (e) => {
                "canvas" === e.target.localName &&
                  (null == p ? void 0 : p.data) &&
                  f({ data: null, dayIdx: null, activityIdx: "" });
              },
              className:
                "fixed right-0 top-0 z-[60] h-screen w-full overflow-hidden border-l  border-solid border-gray-200 transition-transform lg:w-[48%]  ".concat(
                  x
                    ? "lg:translate-x-0"
                    : "translate-x-full md:block lg:translate-x-0"
                ),
              children: (0, r.jsx)(a.JS, { trip: d, pathname: m }),
            }),
          ],
        });
      };
    },
    27361: function () {},
    21412: function (e) {
      e.exports = {
        style: { fontFamily: "'__font_d37563', '__font_Fallback_d37563'" },
        className: "__className_d37563",
        variable: "__variable_d37563",
      };
    },
    26314: function (e) {
      (e.exports = function (e) {
        return e && e.__esModule ? e : { default: e };
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    44734: function (e, t, n) {
      "use strict";
      n.d(t, {
        R: function () {
          return G;
        },
      });
      var r,
        i,
        l,
        o,
        a = n(2265),
        s = n(82769),
        u = n(75606),
        c = n(32600),
        d = n(61858);
      function f(e, t) {
        let [n, r] = (0, a.useState)(e),
          i = (0, d.E)(e);
        return (0, c.e)(() => r(i.current), [i, r, ...t]), n;
      }
      var p = n(46618),
        v = n(11931),
        x = n(60597),
        m = n(85390),
        b = n(93850),
        h = n(53891),
        g = n(35863),
        y = n(65410),
        R = n(25306),
        w = n(8076),
        N = n(90583),
        S = n(58227),
        j = n(28871),
        O = n(54851),
        I = n(12950),
        T = n(10841),
        P = n(13995),
        k = n(19426),
        L =
          (((r = L || {})[(r.Open = 0)] = "Open"),
          (r[(r.Closed = 1)] = "Closed"),
          r),
        D =
          (((i = D || {})[(i.Single = 0)] = "Single"),
          (i[(i.Multi = 1)] = "Multi"),
          i),
        E =
          (((l = E || {})[(l.Pointer = 0)] = "Pointer"),
          (l[(l.Other = 1)] = "Other"),
          l),
        C =
          (((o = C || {})[(o.OpenListbox = 0)] = "OpenListbox"),
          (o[(o.CloseListbox = 1)] = "CloseListbox"),
          (o[(o.GoToOption = 2)] = "GoToOption"),
          (o[(o.Search = 3)] = "Search"),
          (o[(o.ClearSearch = 4)] = "ClearSearch"),
          (o[(o.RegisterOption = 5)] = "RegisterOption"),
          (o[(o.UnregisterOption = 6)] = "UnregisterOption"),
          (o[(o.RegisterLabel = 7)] = "RegisterLabel"),
          o);
      function M(e, t = (e) => e) {
        let n =
            null !== e.activeOptionIndex
              ? e.options[e.activeOptionIndex]
              : null,
          r = (0, y.z2)(
            t(e.options.slice()),
            (e) => e.dataRef.current.domRef.current
          ),
          i = n ? r.indexOf(n) : null;
        return -1 === i && (i = null), { options: r, activeOptionIndex: i };
      }
      let F = {
          1: (e) =>
            e.dataRef.current.disabled || 1 === e.listboxState
              ? e
              : { ...e, activeOptionIndex: null, listboxState: 1 },
          0(e) {
            if (e.dataRef.current.disabled || 0 === e.listboxState) return e;
            let t = e.activeOptionIndex,
              { isSelected: n } = e.dataRef.current,
              r = e.options.findIndex((e) => n(e.dataRef.current.value));
            return (
              -1 !== r && (t = r),
              { ...e, listboxState: 0, activeOptionIndex: t }
            );
          },
          2(e, t) {
            var n;
            if (e.dataRef.current.disabled || 1 === e.listboxState) return e;
            let r = M(e),
              i = (0, h.d)(t, {
                resolveItems: () => r.options,
                resolveActiveIndex: () => r.activeOptionIndex,
                resolveId: (e) => e.id,
                resolveDisabled: (e) => e.dataRef.current.disabled,
              });
            return {
              ...e,
              ...r,
              searchQuery: "",
              activeOptionIndex: i,
              activationTrigger: null != (n = t.trigger) ? n : 1,
            };
          },
          3: (e, t) => {
            if (e.dataRef.current.disabled || 1 === e.listboxState) return e;
            let n = "" !== e.searchQuery ? 0 : 1,
              r = e.searchQuery + t.value.toLowerCase(),
              i = (
                null !== e.activeOptionIndex
                  ? e.options
                      .slice(e.activeOptionIndex + n)
                      .concat(e.options.slice(0, e.activeOptionIndex + n))
                  : e.options
              ).find((e) => {
                var t;
                return (
                  !e.dataRef.current.disabled &&
                  (null == (t = e.dataRef.current.textValue)
                    ? void 0
                    : t.startsWith(r))
                );
              }),
              l = i ? e.options.indexOf(i) : -1;
            return -1 === l || l === e.activeOptionIndex
              ? { ...e, searchQuery: r }
              : {
                  ...e,
                  searchQuery: r,
                  activeOptionIndex: l,
                  activationTrigger: 1,
                };
          },
          4: (e) =>
            e.dataRef.current.disabled ||
            1 === e.listboxState ||
            "" === e.searchQuery
              ? e
              : { ...e, searchQuery: "" },
          5: (e, t) => {
            let n = { id: t.id, dataRef: t.dataRef },
              r = M(e, (e) => [...e, n]);
            return (
              null === e.activeOptionIndex &&
                e.dataRef.current.isSelected(t.dataRef.current.value) &&
                (r.activeOptionIndex = r.options.indexOf(n)),
              { ...e, ...r }
            );
          },
          6: (e, t) => {
            let n = M(e, (e) => {
              let n = e.findIndex((e) => e.id === t.id);
              return -1 !== n && e.splice(n, 1), e;
            });
            return { ...e, ...n, activationTrigger: 1 };
          },
          7: (e, t) => ({ ...e, labelId: t.id }),
        },
        _ = (0, a.createContext)(null);
      function z(e) {
        let t = (0, a.useContext)(_);
        if (null === t) {
          let t = Error(`<${e} /> is missing a parent <Listbox /> component.`);
          throw (Error.captureStackTrace && Error.captureStackTrace(t, z), t);
        }
        return t;
      }
      _.displayName = "ListboxActionsContext";
      let A = (0, a.createContext)(null);
      function Z(e) {
        let t = (0, a.useContext)(A);
        if (null === t) {
          let t = Error(`<${e} /> is missing a parent <Listbox /> component.`);
          throw (Error.captureStackTrace && Error.captureStackTrace(t, Z), t);
        }
        return t;
      }
      function H(e, t) {
        return (0, x.E)(t.type, F, e, t);
      }
      A.displayName = "ListboxDataContext";
      let K = a.Fragment,
        B = v.AN.RenderStrategy | v.AN.Static,
        G = Object.assign(
          (0, v.yV)(function (e, t) {
            let {
                value: n,
                defaultValue: r,
                form: i,
                name: l,
                onChange: o,
                by: u = (e, t) => e === t,
                disabled: d = !1,
                horizontal: f = !1,
                multiple: m = !1,
                ...b
              } = e,
              g = f ? "horizontal" : "vertical",
              w = (0, p.T)(t),
              [O = m ? [] : void 0, P] = (0, T.q)(n, o, r),
              [k, L] = (0, a.useReducer)(H, {
                dataRef: (0, a.createRef)(),
                listboxState: 1,
                options: [],
                searchQuery: "",
                labelId: null,
                activeOptionIndex: null,
                activationTrigger: 1,
              }),
              D = (0, a.useRef)({ static: !1, hold: !1 }),
              E = (0, a.useRef)(null),
              C = (0, a.useRef)(null),
              M = (0, a.useRef)(null),
              F = (0, I.z)(
                "string" == typeof u
                  ? (e, t) =>
                      (null == e ? void 0 : e[u]) ===
                      (null == t ? void 0 : t[u])
                  : u
              ),
              z = (0, a.useCallback)(
                (e) =>
                  (0, x.E)(Z.mode, {
                    1: () => O.some((t) => F(t, e)),
                    0: () => F(O, e),
                  }),
                [O]
              ),
              Z = (0, a.useMemo)(
                () => ({
                  ...k,
                  value: O,
                  disabled: d,
                  mode: m ? 1 : 0,
                  orientation: g,
                  compare: F,
                  isSelected: z,
                  optionsPropsRef: D,
                  labelRef: E,
                  buttonRef: C,
                  optionsRef: M,
                }),
                [O, d, m, k]
              );
            (0, c.e)(() => {
              k.dataRef.current = Z;
            }, [Z]),
              (0, N.O)(
                [Z.buttonRef, Z.optionsRef],
                (e, t) => {
                  var n;
                  L({ type: 1 }),
                    (0, y.sP)(t, y.tJ.Loose) ||
                      (e.preventDefault(),
                      null == (n = Z.buttonRef.current) || n.focus());
                },
                0 === Z.listboxState
              );
            let B = (0, a.useMemo)(
                () => ({ open: 0 === Z.listboxState, disabled: d, value: O }),
                [Z, d, O]
              ),
              G = (0, I.z)((e) => {
                let t = Z.options.find((t) => t.id === e);
                t && J(t.dataRef.current.value);
              }),
              U = (0, I.z)(() => {
                if (null !== Z.activeOptionIndex) {
                  let { dataRef: e, id: t } = Z.options[Z.activeOptionIndex];
                  J(e.current.value),
                    L({ type: 2, focus: h.T.Specific, id: t });
                }
              }),
              $ = (0, I.z)(() => L({ type: 0 })),
              Y = (0, I.z)(() => L({ type: 1 })),
              W = (0, I.z)((e, t, n) =>
                e === h.T.Specific
                  ? L({ type: 2, focus: h.T.Specific, id: t, trigger: n })
                  : L({ type: 2, focus: e, trigger: n })
              ),
              V = (0, I.z)(
                (e, t) => (
                  L({ type: 5, id: e, dataRef: t }), () => L({ type: 6, id: e })
                )
              ),
              Q = (0, I.z)(
                (e) => (L({ type: 7, id: e }), () => L({ type: 7, id: null }))
              ),
              J = (0, I.z)((e) =>
                (0, x.E)(Z.mode, {
                  0: () => (null == P ? void 0 : P(e)),
                  1() {
                    let t = Z.value.slice(),
                      n = t.findIndex((t) => F(t, e));
                    return (
                      -1 === n ? t.push(e) : t.splice(n, 1),
                      null == P ? void 0 : P(t)
                    );
                  },
                })
              ),
              q = (0, I.z)((e) => L({ type: 3, value: e })),
              X = (0, I.z)(() => L({ type: 4 })),
              ee = (0, a.useMemo)(
                () => ({
                  onChange: J,
                  registerOption: V,
                  registerLabel: Q,
                  goToOption: W,
                  closeListbox: Y,
                  openListbox: $,
                  selectActiveOption: U,
                  selectOption: G,
                  search: q,
                  clearSearch: X,
                }),
                []
              ),
              et = (0, a.useRef)(null),
              en = (0, s.G)();
            return (
              (0, a.useEffect)(() => {
                et.current &&
                  void 0 !== r &&
                  en.addEventListener(et.current, "reset", () => {
                    null == P || P(r);
                  });
              }, [et, P]),
              a.createElement(
                _.Provider,
                { value: ee },
                a.createElement(
                  A.Provider,
                  { value: Z },
                  a.createElement(
                    R.up,
                    {
                      value: (0, x.E)(Z.listboxState, {
                        0: R.ZM.Open,
                        1: R.ZM.Closed,
                      }),
                    },
                    null != l &&
                      null != O &&
                      (0, j.t)({ [l]: O }).map(([e, t], n) =>
                        a.createElement(S._, {
                          features: S.A.Hidden,
                          ref:
                            0 === n
                              ? (e) => {
                                  var t;
                                  et.current =
                                    null !=
                                    (t = null == e ? void 0 : e.closest("form"))
                                      ? t
                                      : null;
                                }
                              : void 0,
                          ...(0, v.oA)({
                            key: e,
                            as: "input",
                            type: "hidden",
                            hidden: !0,
                            readOnly: !0,
                            form: i,
                            name: e,
                            value: t,
                          }),
                        })
                      ),
                    (0, v.sY)({
                      ourProps: { ref: w },
                      theirProps: b,
                      slot: B,
                      defaultTag: K,
                      name: "Listbox",
                    })
                  )
                )
              )
            );
          }),
          {
            Button: (0, v.yV)(function (e, t) {
              var n;
              let r = (0, u.M)(),
                { id: i = `headlessui-listbox-button-${r}`, ...l } = e,
                o = Z("Listbox.Button"),
                c = z("Listbox.Button"),
                d = (0, p.T)(o.buttonRef, t),
                x = (0, s.G)(),
                m = (0, I.z)((e) => {
                  switch (e.key) {
                    case b.R.Space:
                    case b.R.Enter:
                    case b.R.ArrowDown:
                      e.preventDefault(),
                        c.openListbox(),
                        x.nextFrame(() => {
                          o.value || c.goToOption(h.T.First);
                        });
                      break;
                    case b.R.ArrowUp:
                      e.preventDefault(),
                        c.openListbox(),
                        x.nextFrame(() => {
                          o.value || c.goToOption(h.T.Last);
                        });
                  }
                }),
                y = (0, I.z)((e) => {
                  e.key === b.R.Space && e.preventDefault();
                }),
                R = (0, I.z)((e) => {
                  if ((0, g.P)(e.currentTarget)) return e.preventDefault();
                  0 === o.listboxState
                    ? (c.closeListbox(),
                      x.nextFrame(() => {
                        var e;
                        return null == (e = o.buttonRef.current)
                          ? void 0
                          : e.focus({ preventScroll: !0 });
                      }))
                    : (e.preventDefault(), c.openListbox());
                }),
                N = f(() => {
                  if (o.labelId) return [o.labelId, i].join(" ");
                }, [o.labelId, i]),
                S = (0, a.useMemo)(
                  () => ({
                    open: 0 === o.listboxState,
                    disabled: o.disabled,
                    value: o.value,
                  }),
                  [o]
                ),
                j = {
                  ref: d,
                  id: i,
                  type: (0, w.f)(e, o.buttonRef),
                  "aria-haspopup": "listbox",
                  "aria-controls":
                    null == (n = o.optionsRef.current) ? void 0 : n.id,
                  "aria-expanded": 0 === o.listboxState,
                  "aria-labelledby": N,
                  disabled: o.disabled,
                  onKeyDown: m,
                  onKeyUp: y,
                  onClick: R,
                };
              return (0,
              v.sY)({ ourProps: j, theirProps: l, slot: S, defaultTag: "button", name: "Listbox.Button" });
            }),
            Label: (0, v.yV)(function (e, t) {
              let n = (0, u.M)(),
                { id: r = `headlessui-listbox-label-${n}`, ...i } = e,
                l = Z("Listbox.Label"),
                o = z("Listbox.Label"),
                s = (0, p.T)(l.labelRef, t);
              (0, c.e)(() => o.registerLabel(r), [r]);
              let d = (0, I.z)(() => {
                  var e;
                  return null == (e = l.buttonRef.current)
                    ? void 0
                    : e.focus({ preventScroll: !0 });
                }),
                f = (0, a.useMemo)(
                  () => ({ open: 0 === l.listboxState, disabled: l.disabled }),
                  [l]
                );
              return (0,
              v.sY)({ ourProps: { ref: s, id: r, onClick: d }, theirProps: i, slot: f, defaultTag: "label", name: "Listbox.Label" });
            }),
            Options: (0, v.yV)(function (e, t) {
              var n;
              let r = (0, u.M)(),
                { id: i = `headlessui-listbox-options-${r}`, ...l } = e,
                o = Z("Listbox.Options"),
                c = z("Listbox.Options"),
                d = (0, p.T)(o.optionsRef, t),
                g = (0, s.G)(),
                y = (0, s.G)(),
                w = (0, R.oJ)(),
                N =
                  null !== w
                    ? (w & R.ZM.Open) === R.ZM.Open
                    : 0 === o.listboxState;
              (0, a.useEffect)(() => {
                var e;
                let t = o.optionsRef.current;
                t &&
                  0 === o.listboxState &&
                  t !==
                    (null == (e = (0, O.r)(t)) ? void 0 : e.activeElement) &&
                  t.focus({ preventScroll: !0 });
              }, [o.listboxState, o.optionsRef]);
              let S = (0, I.z)((e) => {
                  switch ((y.dispose(), e.key)) {
                    case b.R.Space:
                      if ("" !== o.searchQuery)
                        return (
                          e.preventDefault(),
                          e.stopPropagation(),
                          c.search(e.key)
                        );
                    case b.R.Enter:
                      if (
                        (e.preventDefault(),
                        e.stopPropagation(),
                        null !== o.activeOptionIndex)
                      ) {
                        let { dataRef: e } = o.options[o.activeOptionIndex];
                        c.onChange(e.current.value);
                      }
                      0 === o.mode &&
                        (c.closeListbox(),
                        (0, m.k)().nextFrame(() => {
                          var e;
                          return null == (e = o.buttonRef.current)
                            ? void 0
                            : e.focus({ preventScroll: !0 });
                        }));
                      break;
                    case (0, x.E)(o.orientation, {
                      vertical: b.R.ArrowDown,
                      horizontal: b.R.ArrowRight,
                    }):
                      return (
                        e.preventDefault(),
                        e.stopPropagation(),
                        c.goToOption(h.T.Next)
                      );
                    case (0, x.E)(o.orientation, {
                      vertical: b.R.ArrowUp,
                      horizontal: b.R.ArrowLeft,
                    }):
                      return (
                        e.preventDefault(),
                        e.stopPropagation(),
                        c.goToOption(h.T.Previous)
                      );
                    case b.R.Home:
                    case b.R.PageUp:
                      return (
                        e.preventDefault(),
                        e.stopPropagation(),
                        c.goToOption(h.T.First)
                      );
                    case b.R.End:
                    case b.R.PageDown:
                      return (
                        e.preventDefault(),
                        e.stopPropagation(),
                        c.goToOption(h.T.Last)
                      );
                    case b.R.Escape:
                      return (
                        e.preventDefault(),
                        e.stopPropagation(),
                        c.closeListbox(),
                        g.nextFrame(() => {
                          var e;
                          return null == (e = o.buttonRef.current)
                            ? void 0
                            : e.focus({ preventScroll: !0 });
                        })
                      );
                    case b.R.Tab:
                      e.preventDefault(), e.stopPropagation();
                      break;
                    default:
                      1 === e.key.length &&
                        (c.search(e.key),
                        y.setTimeout(() => c.clearSearch(), 350));
                  }
                }),
                j = f(() => {
                  var e, t, n;
                  return null !=
                    (n = null == (e = o.labelRef.current) ? void 0 : e.id)
                    ? n
                    : null == (t = o.buttonRef.current)
                    ? void 0
                    : t.id;
                }, [o.labelRef.current, o.buttonRef.current]),
                T = (0, a.useMemo)(() => ({ open: 0 === o.listboxState }), [o]),
                P = {
                  "aria-activedescendant":
                    null === o.activeOptionIndex ||
                    null == (n = o.options[o.activeOptionIndex])
                      ? void 0
                      : n.id,
                  "aria-multiselectable": 1 === o.mode || void 0,
                  "aria-labelledby": j,
                  "aria-orientation": o.orientation,
                  id: i,
                  onKeyDown: S,
                  role: "listbox",
                  tabIndex: 0,
                  ref: d,
                };
              return (0,
              v.sY)({ ourProps: P, theirProps: l, slot: T, defaultTag: "ul", features: B, visible: N, name: "Listbox.Options" });
            }),
            Option: (0, v.yV)(function (e, t) {
              let n = (0, u.M)(),
                {
                  id: r = `headlessui-listbox-option-${n}`,
                  disabled: i = !1,
                  value: l,
                  ...o
                } = e,
                s = Z("Listbox.Option"),
                f = z("Listbox.Option"),
                x =
                  null !== s.activeOptionIndex &&
                  s.options[s.activeOptionIndex].id === r,
                b = s.isSelected(l),
                g = (0, a.useRef)(null),
                y = (0, k.x)(g),
                R = (0, d.E)({
                  disabled: i,
                  value: l,
                  domRef: g,
                  get textValue() {
                    return y();
                  },
                }),
                w = (0, p.T)(t, g);
              (0, c.e)(() => {
                if (0 !== s.listboxState || !x || 0 === s.activationTrigger)
                  return;
                let e = (0, m.k)();
                return (
                  e.requestAnimationFrame(() => {
                    var e, t;
                    null ==
                      (t =
                        null == (e = g.current) ? void 0 : e.scrollIntoView) ||
                      t.call(e, { block: "nearest" });
                  }),
                  e.dispose
                );
              }, [
                g,
                x,
                s.listboxState,
                s.activationTrigger,
                s.activeOptionIndex,
              ]),
                (0, c.e)(() => f.registerOption(r, R), [R, r]);
              let N = (0, I.z)((e) => {
                  if (i) return e.preventDefault();
                  f.onChange(l),
                    0 === s.mode &&
                      (f.closeListbox(),
                      (0, m.k)().nextFrame(() => {
                        var e;
                        return null == (e = s.buttonRef.current)
                          ? void 0
                          : e.focus({ preventScroll: !0 });
                      }));
                }),
                S = (0, I.z)(() => {
                  if (i) return f.goToOption(h.T.Nothing);
                  f.goToOption(h.T.Specific, r);
                }),
                j = (0, P.g)(),
                O = (0, I.z)((e) => j.update(e)),
                T = (0, I.z)((e) => {
                  j.wasMoved(e) && (i || x || f.goToOption(h.T.Specific, r, 0));
                }),
                L = (0, I.z)((e) => {
                  j.wasMoved(e) && (i || (x && f.goToOption(h.T.Nothing)));
                }),
                D = (0, a.useMemo)(
                  () => ({ active: x, selected: b, disabled: i }),
                  [x, b, i]
                );
              return (0,
              v.sY)({ ourProps: { id: r, ref: w, role: "option", tabIndex: !0 === i ? void 0 : -1, "aria-disabled": !0 === i || void 0, "aria-selected": b, disabled: void 0, onClick: N, onFocus: S, onPointerEnter: O, onMouseEnter: O, onPointerMove: T, onMouseMove: T, onPointerLeave: L, onMouseLeave: L }, theirProps: o, slot: D, defaultTag: "li", name: "Listbox.Option" });
            }),
          }
        );
    },
    10841: function (e, t, n) {
      "use strict";
      n.d(t, {
        q: function () {
          return l;
        },
      });
      var r = n(2265),
        i = n(12950);
      function l(e, t, n) {
        let [l, o] = (0, r.useState)(n),
          a = void 0 !== e,
          s = (0, r.useRef)(a),
          u = (0, r.useRef)(!1),
          c = (0, r.useRef)(!1);
        return (
          !a || s.current || u.current
            ? a ||
              !s.current ||
              c.current ||
              ((c.current = !0),
              (s.current = a),
              console.error(
                "A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen."
              ))
            : ((u.current = !0),
              (s.current = a),
              console.error(
                "A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen."
              )),
          [a ? e : l, (0, i.z)((e) => (a || o(e), null == t ? void 0 : t(e)))]
        );
      }
    },
    8076: function (e, t, n) {
      "use strict";
      n.d(t, {
        f: function () {
          return o;
        },
      });
      var r = n(2265),
        i = n(32600);
      function l(e) {
        var t;
        if (e.type) return e.type;
        let n = null != (t = e.as) ? t : "button";
        if ("string" == typeof n && "button" === n.toLowerCase())
          return "button";
      }
      function o(e, t) {
        let [n, o] = (0, r.useState)(() => l(e));
        return (
          (0, i.e)(() => {
            o(l(e));
          }, [e.type, e.as]),
          (0, i.e)(() => {
            n ||
              (t.current &&
                t.current instanceof HTMLButtonElement &&
                !t.current.hasAttribute("type") &&
                o("button"));
          }, [n, t]),
          n
        );
      }
    },
    19426: function (e, t, n) {
      "use strict";
      n.d(t, {
        x: function () {
          return a;
        },
      });
      var r = n(2265);
      let i =
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
      function l(e) {
        var t, n;
        let r = null != (t = e.innerText) ? t : "",
          l = e.cloneNode(!0);
        if (!(l instanceof HTMLElement)) return r;
        let o = !1;
        for (let e of l.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
          e.remove(), (o = !0);
        let a = o ? (null != (n = l.innerText) ? n : "") : r;
        return i.test(a) && (a = a.replace(i, "")), a;
      }
      var o = n(12950);
      function a(e) {
        let t = (0, r.useRef)(""),
          n = (0, r.useRef)("");
        return (0, o.z)(() => {
          let r = e.current;
          if (!r) return "";
          let i = r.innerText;
          if (t.current === i) return n.current;
          let o = (function (e) {
            let t = e.getAttribute("aria-label");
            if ("string" == typeof t) return t.trim();
            let n = e.getAttribute("aria-labelledby");
            if (n) {
              let e = n
                .split(" ")
                .map((e) => {
                  let t = document.getElementById(e);
                  if (t) {
                    let e = t.getAttribute("aria-label");
                    return "string" == typeof e ? e.trim() : l(t).trim();
                  }
                  return null;
                })
                .filter(Boolean);
              if (e.length > 0) return e.join(", ");
            }
            return l(e).trim();
          })(r)
            .trim()
            .toLowerCase();
          return (t.current = i), (n.current = o), o;
        });
      }
    },
    13995: function (e, t, n) {
      "use strict";
      n.d(t, {
        g: function () {
          return l;
        },
      });
      var r = n(2265);
      function i(e) {
        return [e.screenX, e.screenY];
      }
      function l() {
        let e = (0, r.useRef)([-1, -1]);
        return {
          wasMoved(t) {
            let n = i(t);
            return (
              (e.current[0] !== n[0] || e.current[1] !== n[1]) &&
              ((e.current = n), !0)
            );
          },
          update(t) {
            e.current = i(t);
          },
        };
      }
    },
    53891: function (e, t, n) {
      "use strict";
      n.d(t, {
        T: function () {
          return i;
        },
        d: function () {
          return l;
        },
      });
      var r,
        i =
          (((r = i || {})[(r.First = 0)] = "First"),
          (r[(r.Previous = 1)] = "Previous"),
          (r[(r.Next = 2)] = "Next"),
          (r[(r.Last = 3)] = "Last"),
          (r[(r.Specific = 4)] = "Specific"),
          (r[(r.Nothing = 5)] = "Nothing"),
          r);
      function l(e, t) {
        let n = t.resolveItems();
        if (n.length <= 0) return null;
        let r = t.resolveActiveIndex(),
          i = null != r ? r : -1,
          l = (() => {
            switch (e.focus) {
              case 0:
                return n.findIndex((e) => !t.resolveDisabled(e));
              case 1: {
                let e = n
                  .slice()
                  .reverse()
                  .findIndex(
                    (e, n, r) =>
                      (-1 === i || !(r.length - n - 1 >= i)) &&
                      !t.resolveDisabled(e)
                  );
                return -1 === e ? e : n.length - 1 - e;
              }
              case 2:
                return n.findIndex(
                  (e, n) => !(n <= i) && !t.resolveDisabled(e)
                );
              case 3: {
                let e = n
                  .slice()
                  .reverse()
                  .findIndex((e) => !t.resolveDisabled(e));
                return -1 === e ? e : n.length - 1 - e;
              }
              case 4:
                return n.findIndex((n) => t.resolveId(n) === e.id);
              case 5:
                return null;
              default:
                !(function (e) {
                  throw Error("Unexpected object: " + e);
                })(e);
            }
          })();
        return -1 === l ? r : l;
      }
    },
    28871: function (e, t, n) {
      "use strict";
      function r(e, t) {
        return e ? e + "[" + t + "]" : t;
      }
      function i(e) {
        var t, n;
        let r =
          null != (t = null == e ? void 0 : e.form) ? t : e.closest("form");
        if (r) {
          for (let t of r.elements)
            if (
              t !== e &&
              (("INPUT" === t.tagName && "submit" === t.type) ||
                ("BUTTON" === t.tagName && "submit" === t.type) ||
                ("INPUT" === t.nodeName && "image" === t.type))
            ) {
              t.click();
              return;
            }
          null == (n = r.requestSubmit) || n.call(r);
        }
      }
      n.d(t, {
        g: function () {
          return i;
        },
        t: function () {
          return function e(t = {}, n = null, i = []) {
            for (let [l, o] of Object.entries(t))
              !(function t(n, i, l) {
                if (Array.isArray(l))
                  for (let [e, o] of l.entries()) t(n, r(i, e.toString()), o);
                else
                  l instanceof Date
                    ? n.push([i, l.toISOString()])
                    : "boolean" == typeof l
                    ? n.push([i, l ? "1" : "0"])
                    : "string" == typeof l
                    ? n.push([i, l])
                    : "number" == typeof l
                    ? n.push([i, `${l}`])
                    : null == l
                    ? n.push([i, ""])
                    : e(l, i, n);
              })(i, r(n, l), o);
            return i;
          };
        },
      });
    },
  },
  function (e) {
    e.O(
      0,
      [
        6603, 3676, 3415, 6990, 3958, 2635, 504, 8326, 4432, 6691, 7460, 1677,
        8062, 4704, 9633, 8350, 5975, 8627, 9292, 6176, 6012, 1320, 4848, 5839,
        1689, 4458, 7188, 4772, 4262, 2971, 9119, 8103, 1744,
      ],
      function () {
        return e((e.s = 55867));
      }
    ),
      (_N_E = e.O());
  },
]);
