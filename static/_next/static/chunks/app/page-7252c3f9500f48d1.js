(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1931],
  {
    60624: function (e, t, s) {
      Promise.resolve().then(s.bind(s, 53656)),
        Promise.resolve().then(s.t.bind(s, 29928, 23)),
        Promise.resolve().then(s.t.bind(s, 90413, 23)),
        Promise.resolve().then(s.t.bind(s, 68326, 23)),
        Promise.resolve().then(s.bind(s, 35348)),
        Promise.resolve().then(s.bind(s, 13614)),
        Promise.resolve().then(s.bind(s, 37373)),
        Promise.resolve().then(s.bind(s, 4541)),
        Promise.resolve().then(s.bind(s, 21043)),
        Promise.resolve().then(s.bind(s, 58003)),
        Promise.resolve().then(s.bind(s, 61842)),
        Promise.resolve().then(s.bind(s, 24407)),
        Promise.resolve().then(s.bind(s, 17631)),
        Promise.resolve().then(s.bind(s, 64532)),
        Promise.resolve().then(s.bind(s, 16593)),
        Promise.resolve().then(s.bind(s, 46270)),
        Promise.resolve().then(s.bind(s, 36694)),
        Promise.resolve().then(s.bind(s, 54227)),
        Promise.resolve().then(s.bind(s, 74158)),
        Promise.resolve().then(s.bind(s, 41068)),
        Promise.resolve().then(s.bind(s, 50976)),
        Promise.resolve().then(s.bind(s, 68937)),
        Promise.resolve().then(s.bind(s, 42898)),
        Promise.resolve().then(s.bind(s, 22579)),
        Promise.resolve().then(s.bind(s, 21271));
    },
    30816: function (e, t, s) {
      "use strict";
      s.d(t, {
        VN: function () {
          return l;
        },
        b8: function () {
          return n;
        },
        rb: function () {
          return i;
        },
      }),
        s(15231),
        s(470);
      var r = s(31162),
        n = (0, r.$)("628aa9e3847e651b1bb3740de178bf1dbb6c9ed0"),
        i = (0, r.$)("7a1d9d62457619a18119f4fb6c58e254644a991e");
      t.ZP = (0, r.$)("76be1998881c4c8daf6394f7a973c8892c26ce82");
      var l = (0, r.$)("e10f8923128660455f9ee02ca5c24885eb379768");
    },
    90436: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return i;
        },
      });
      var r = s(57437),
        n = s(2265);
      function i(e) {
        let { adKey: t, adHeight: s, adWidth: i } = e,
          l = (0, n.useRef)(),
          a = { key: t, format: "iframe", height: s, width: i, params: {} };
        return (
          (0, n.useEffect)(() => {
            if (l.current && !l.current.firstChild) {
              let e = document.createElement("script"),
                t = document.createElement("script");
              (t.type = "text/javascript"),
                (t.src = "//www.topcreativeformat.com/".concat(
                  a.key,
                  "/invoke.js"
                )),
                (e.innerHTML = "atOptions = ".concat(JSON.stringify(a))),
                l.current.append(e),
                l.current.append(t);
            }
          }, [l]),
          (0, r.jsx)("div", { className: "h-full w-full", ref: l })
        );
      }
    },
    16593: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return c;
          },
        });
      var r = s(57437),
        n = s(61396),
        i = s.n(n),
        l = s(71157),
        a = s(8672),
        o = s(2836);
      function c(e) {
        return (0, a.Ex)()
          ? null
          : (0, r.jsx)(i(), {
              href: "/".concat(l.B.NEW_TRIP),
              onClick: () => {
                (0, o.gR)();
              },
              className:
                "mx-auto flex items-center gap-2 rounded-full bg-accent-green px-8 py-3 text-xl text-white transition-colors hover:bg-accent-green-2",
              children: e.children,
            });
      }
    },
    35348: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return l;
          },
        });
      var r = s(57437);
      s(2265);
      var n = s(90436),
        i = s(42075);
      function l(e) {
        let { tailwindMD: t } = (0, i.Z)();
        return (0, r.jsxs)("div", {
          ...e,
          children: [
            t &&
              (0, r.jsx)(n.Z, {
                adKey: "154410485bb2ccbd30e22e04871f8adb",
                adHeight: 60,
                adWidth: 468,
              }),
            !t &&
              (0, r.jsx)(n.Z, {
                adKey: "6b871952e2bef4ef4366a86cc40261ba",
                adHeight: 50,
                adWidth: 320,
              }),
          ],
        });
      }
    },
    13614: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return d;
          },
        });
      var r = s(57437),
        n = s(2265),
        i = s(14924),
        l = s(68937),
        a = s(68099),
        o = s(8672),
        c = s(90948);
      function d() {
        if (!(0, o.Ex)()) return null;
        let [e, t] = (0, n.useState)(null),
          { updateSearchParams: s } = (0, a.Z)();
        return (0, r.jsxs)("form", {
          onSubmit: (t) => {
            t.preventDefault(),
              e &&
                ((0, c.LR)(e),
                0 === e.sights_count
                  ? s({
                      query: "destinationNoSights",
                      value: JSON.stringify(e),
                    })
                  : s({ query: "destination", value: JSON.stringify(e) }));
          },
          className:
            "mx-auto flex h-fit w-full max-w-xl gap-1.5 rounded-full bg-primary-green p-2 shadow-lg sm:gap-3 lg:p-3",
          children: [
            (0, r.jsx)(i.Z, {
              placeholder: "Find your destination (cities only)",
              classNameOptions:
                "absolute z-50 mt-4 md:mt-6 w-[calc(100%+2.6rem)] sm:w-[calc(100%+5.7rem)]  md:w-[calc(100%+7.5rem)] rounded-md border border-solid border-gray-300 bg-white py-2",
              className:
                "w-full rounded-full border border-solid border-gray-100 bg-white px-3 py-1.5 text-sm hover:border-gray-200 focus:border-gray-300 md:text-lg lg:py-2",
              required: !0,
              classNameContainer: "w-full",
              onChange: (e, t) => {
                1 === t.length && (0, c.DL)(c.wr.LANDING_TRIP);
              },
              onSelectPlace: (e) => {
                (0, c.fw)(e, c.wr.LANDING_TRIP), t(e);
              },
              showSuggestions: !0,
            }),
            (0, r.jsxs)("button", {
              type: "submit",
              className:
                "min-w-fit rounded-full bg-black px-3 py-1.5 text-sm text-white transition-colors disabled:bg-gray-700 md:px-5 md:text-lg lg:py-2 ".concat(
                  e
                    ? "cursor-pointer hover:bg-accent-green-2"
                    : "!cursor-not-allowed"
                ),
              children: [
                (0, r.jsx)("span", {
                  className: "hidden sm:inline-flex",
                  children: "Let's go!",
                }),
                (0, r.jsx)(l.default, {
                  icon: "material-symbols:send",
                  className: "sm:hidden",
                }),
              ],
            }),
          ],
        });
      }
    },
    58003: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return c;
          },
        });
      var r = s(57437),
        n = s(24033),
        i = s(68937),
        l = s(68099),
        a = s(13784),
        o = s(90948);
      function c() {
        let { deleteSearchParam: e } = (0, l.Z)(),
          t = (0, n.useSearchParams)(),
          { setSelectedHotel: s } = (0, a.t)(),
          c = JSON.parse((null == t ? void 0 : t.get("destination")) || "{}");
        return (0, r.jsx)("button", {
          onClick: () => {
            e("destination"), (0, o._L)(o.wr.LANDING_TRIP, c.name), s(null);
          },
          children: (0, r.jsx)("button", {
            className:
              "grid place-items-center rounded-md bg-gray-100 p-1 transition-colors hover:bg-gray-200 md:p-1.5",
            children: (0, r.jsx)(i.default, {
              icon: "iconoir:xmark",
              className: "text-lg",
            }),
          }),
        });
      }
    },
    61842: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return c;
          },
        });
      var r = s(57437),
        n = s(24033),
        i = s(68099),
        l = s(23749),
        a = s(13784),
        o = s(90948);
      function c(e) {
        let { children: t } = e,
          s = (0, n.useSearchParams)(),
          { deleteSearchParam: c } = (0, i.Z)(),
          d = !!s.get("destination"),
          { setSelectedHotel: u } = (0, a.t)(),
          m = JSON.parse((null == s ? void 0 : s.get("destination")) || "{}");
        return (0, r.jsx)(l.g, {
          open: d,
          classNameContainer:
            "flex items-start h-screen justify-center text-center overflow-y-hidden",
          className:
            "relative mx-auto h-full w-full max-w-4xl rounded-xl bg-white md:my-12 md:h-fit",
          closeModal: () => {
            (0, o._L)(o.wr.LANDING_TRIP, m.name), c("destination"), u(null);
          },
          showCloseButton: !1,
          children: t,
        });
      }
    },
    24407: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return c;
          },
        });
      var r = s(57437),
        n = s(24033),
        i = s(68937),
        l = s(13784),
        a = s(13786),
        o = s(90948);
      function c(e) {
        let { trip: t, temporalId: s, origin: c } = e,
          d = (0, n.useRouter)(),
          {
            setSuccessCreation: u,
            setBuildingTrip: m,
            selectedHotel: x,
            setSelectedHotel: h,
            loadingHotels: p,
          } = (0, l.t)();
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)("div", {
            className:
              "sticky bottom-0 w-full bg-white py-7 pb-7 [md:shadow-[-2px_18px_48px_74px_rgba(255,255,255,0.6)]]  md:pb-10",
            children: (0, r.jsx)("button", {
              onClick: () => {
                m("landing"),
                  (0, a.Z)(t, s, x)
                    .then((e) => {
                      (0, o.M6)(c, e, x[0]),
                        u(!0),
                        localStorage.setItem("temporalId", s),
                        setTimeout(() => {
                          d.replace("/trips/".concat(e.id));
                        }, 1500);
                    })
                    .finally(() => h(null, 0));
              },
              disabled: p,
              className:
                "w-full rounded-lg bg-primary-purple px-4 py-2 text-base text-white ring-2 ring-primary-purple-2 ring-offset-2 transition-all hover:bg-primary-purple-2 md:py-3 md:text-lg",
              children: p
                ? (0, r.jsx)(i.default, {
                    icon: "line-md:loading-twotone-loop",
                    className: "mx-auto text-2xl",
                  })
                : (0, r.jsx)("span", {
                    children: "Let's go to my trip! \uD83D\uDD25",
                  }),
            }),
          }),
        });
      }
    },
    46270: function (e, t, s) {
      "use strict";
      s.r(t);
      var r = s(57437);
      s(42913);
      var n = s(36012),
        i = s(35961),
        l = s(16691),
        a = s.n(l);
      let o = [
        { src: "/landing/images/affiliates/freetour.svg", alt: "Free Tour" },
        { src: "/landing/images/affiliates/viator.svg", alt: "Viator" },
        { src: "/landing/images/affiliates/airalo.svg", alt: "Airalo" },
        { src: "/landing/images/affiliates/holafly.svg", alt: "Holafly" },
        { src: "/landing/images/affiliates/tiqets.svg", alt: "Tiqets" },
        {
          src: "/landing/images/affiliates/safety_wing.svg",
          alt: "Safety Wing",
        },
        {
          src: "/landing/images/affiliates/getyourguide.svg",
          alt: "Get Your Guide",
        },
      ];
      t.default = () =>
        (0, r.jsx)("section", {
          className: "",
          children: (0, r.jsx)("div", {
            className: "mx-auto pt-8",
            children: (0, r.jsx)("div", {
              className:
                "flex flex-col items-center justify-center lg:flex-row",
              children: (0, r.jsxs)("div", {
                className: "flex flex-col items-center",
                children: [
                  (0, r.jsx)("div", {
                    className: "mb-3",
                    children: (0, r.jsx)("h3", {
                      className:
                        "px-6 text-center text-3xl font-bold md:text-4xl lg:px-12 xl:text-5xl",
                      children: "Our Trusted Partners",
                    }),
                  }),
                  (0, r.jsxs)("div", {
                    className:
                      "relative max-w-[20rem] cursor-grab py-10 sm:max-w-[40rem] md:py-20 lg:max-w-5xl",
                    children: [
                      (0, r.jsx)("div", {
                        className:
                          "absolute z-[20] h-full w-full max-w-[1rem] bg-gradient-to-r from-white md:max-w-[5rem]",
                      }),
                      (0, r.jsx)("div", {
                        className:
                          "absolute right-0 z-[20] h-full w-full max-w-[1rem] bg-gradient-to-l from-white md:max-w-[5rem]",
                      }),
                      (0, r.jsx)(n.tv, {
                        options: {
                          type: "loop",
                          drag: "free",
                          focus: "center",
                          arrows: !1,
                          perPage: 3,
                          gap: 20,
                          autoHeight: !0,
                          autoWidth: !0,
                          pagination: !1,
                          autoScroll: { speed: 0.6 },
                        },
                        extensions: { AutoScroll: i.l },
                        "aria-label": "My Favorite Images",
                        children: o.map((e, t) =>
                          (0, r.jsx)(
                            n.jw,
                            {
                              className: "px-8",
                              children: (0, r.jsx)("div", {
                                className:
                                  "relative grid h-[4rem] w-fit place-items-center md:h-[8rem]",
                                children: (0, r.jsx)(a(), {
                                  src: e.src,
                                  alt: e.alt,
                                  width: 200,
                                  height: 200,
                                  className: "h-[2rem] w-auto object-cover",
                                }),
                              }),
                            },
                            t
                          )
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        });
    },
    36694: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return o;
          },
        });
      var r = s(57437),
        n = s(16691),
        i = s.n(n);
      s(2265);
      var l = (e) => {
        let { width: t = "w-64" } = e;
        return (0, r.jsx)("div", {
          className: "mb-4 w-full",
          children: (0, r.jsx)("div", {
            className: "mx-auto h-1 bg-primary ".concat(
              t,
              " my-0 mb-10 rounded-t py-0 opacity-25"
            ),
          }),
        });
      };
      let a = [
        {
          title: "The most optimal",
          title2: "way of travel",
          description:
            "Craft your perfect itinerary with Trip Planner AI. Our advanced algorithms take into account your selected explore-sights, dining, and lodging preferences to create the optimal travel plan tailored just for you.",
          img: "/illustrations/story.webp",
        },
        {
          title: "Get Inspired ",
          title2: "by Others' Journeys",
          description:
            "Extract valuable travel insights from Instagram reels and TikToks, explore the mentioned explore-sights, and effortlessly include them in your own adventure with Trip Planner AI.",
          img: "/illustrations/story.webp",
        },
      ];
      var o = () => {
        let [e, t] = a;
        return (0, r.jsx)("section", {
          className: "bg-background mb-12 mt-5 py-8 md:mt-10",
          id: "product",
          children: (0, r.jsxs)("div", {
            className: "container m-8 mx-auto max-w-5xl",
            children: [
              (0, r.jsxs)("h2", {
                className:
                  "px-6 text-center text-3xl font-bold md:text-4xl lg:px-12 xl:text-5xl",
                children: [
                  "Your ",
                  (0, r.jsx)("span", {
                    className: "text-primary-purple",
                    children: "AI-Powered ",
                  }),
                  "Trip",
                ],
              }),
              (0, r.jsx)(l, {}),
              (0, r.jsxs)("div", {
                className: "flex flex-wrap",
                children: [
                  (0, r.jsxs)("div", {
                    className: "w-full p-6 sm:w-1/2 md:mt-8",
                    children: [
                      (0, r.jsx)("h3", {
                        className:
                          "mb-3 w-fit bg-primary-green/70 text-2xl font-bold leading-none text-black md:text-3xl",
                        children: null == e ? void 0 : e.title,
                      }),
                      (0, r.jsx)("p", {
                        className: "text-gray-600",
                        children: null == e ? void 0 : e.description,
                      }),
                    ],
                  }),
                  (0, r.jsx)("div", {
                    className: "w-full p-6 sm:w-1/2",
                    children: (0, r.jsx)(i(), {
                      className: "mx-auto",
                      src: "/illustrations/destinations2.webp",
                      alt: null == e ? void 0 : e.title,
                      width: 250,
                      height: 250,
                    }),
                  }),
                ],
              }),
              (0, r.jsxs)("div", {
                className: "flex flex-col-reverse flex-wrap sm:flex-row",
                children: [
                  (0, r.jsx)("div", {
                    className: "w-full p-6 sm:w-1/2",
                    children: (0, r.jsx)(i(), {
                      className: "mx-auto",
                      src: "/illustrations/map.webp",
                      alt: null == e ? void 0 : e.title,
                      width: 200,
                      height: 200,
                    }),
                  }),
                  (0, r.jsx)("div", {
                    className: "mt-8 w-full p-6 sm:w-1/2",
                    children: (0, r.jsxs)("div", {
                      className: "align-middle",
                      children: [
                        (0, r.jsx)("h3", {
                          className:
                            "mb-3 w-fit bg-primary-green/70 text-2xl font-bold leading-none text-black md:text-3xl",
                          children: null == t ? void 0 : t.title,
                        }),
                        (0, r.jsx)("p", {
                          className: "mb-8 text-gray-600",
                          children: null == t ? void 0 : t.description,
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, r.jsx)("div", {
                className: "relative z-[20] mx-auto mb-[-9rem] mt-12 w-fit",
              }),
            ],
          }),
        });
      };
    },
    54227: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return h;
          },
        });
      var r = s(57437),
        n = s(64174),
        i = s(96036),
        l = s(34570),
        a = s(59291),
        o = s(65320),
        c = s(16691),
        d = s.n(c),
        u = s(2265),
        m = s(42075);
      let x = [
        {
          name: "David Jordan",
          profession: "Digital nomad",
          photo: "/landing/images/reviews/david_jordan.webp",
          review:
            "Trip Planner AI saves time and stress by aiding travel planning, relieving indecision or uncertainty.",
        },
        {
          name: "Tushar",
          profession: "Student",
          photo: "/landing/images/reviews/tushar.webp",
          review:
            "Trip Planner AI offers diverse planning options in a user-friendly interface. Simplifies travel planning for enthusiasts.",
        },
        {
          name: "Steve J",
          profession: "Student",
          photo: "/landing/images/reviews/steve_j.webp",
          review:
            "I love traveling but hate planning. This app quickly organizes trip agendas, reducing decision fatigue.",
        },
      ];
      function h() {
        return (0, r.jsx)("section", {
          id: "reviews",
          children: (0, r.jsx)("div", {
            className: "mx-auto max-w-6xl px-4 sm:px-6",
            children: (0, r.jsxs)("div", {
              className: "md:py-20",
              children: [
                (0, r.jsxs)("div", {
                  className: "mx-auto max-w-3xl pb-7 text-center md:pb-10",
                  children: [
                    (0, r.jsx)("h2", {
                      className:
                        "text-center text-3xl font-bold md:text-4xl xl:text-5xl",
                      children: "Dont take our word for it",
                    }),
                    (0, r.jsx)("p", {
                      className: "mt-3 text-lg text-gray-500 md:text-xl",
                      children:
                        "See what our users have to say about revolutionizing their travel experiences with Trip Planner AI.",
                    }),
                  ],
                }),
                (0, r.jsx)("div", {
                  className:
                    "mx-auto grid h-full grid-cols-1 flex-wrap items-start gap-5 md:mb-20 md:grid-cols-2 md:gap-8 lg:grid-cols-3",
                  children: x.map((e, t) =>
                    (0, r.jsx)(p, { review: e, index: t }, t)
                  ),
                }),
              ],
            }),
          }),
        });
      }
      let p = (e) => {
        let { review: t, index: s } = e,
          { tailwindLG: c } = (0, m.Z)(),
          x = (0, u.useRef)(null),
          { scrollYProgress: h } = (0, l.v)({
            target: x,
            offset: ["start end", "end start"],
          }),
          p = (0, a.H)(
            h,
            [0, 0.8],
            [s % 2 == 0 ? (c ? "50%" : "0%") : c ? "100%" : "0%", "0%"]
          ),
          f = "";
        switch (s) {
          case 0:
            f = "bg-primary-purple/10 border-purple-200";
            break;
          case 1:
            f = "bg-primary-green/10 border-green-100";
            break;
          case 2:
            f = "bg-accent-red/10 border-pink-200";
        }
        return (0, r.jsxs)(o.E.div, {
          ref: x,
          style: { y: p },
          className:
            "relative h-full flex-1 overflow-hidden  rounded-xl border border-solid p-7 md:col-span-2 lg:col-span-1 ".concat(
              f
            ),
          "data-aos": "fade-up",
          children: [
            (0, r.jsxs)("div", {
              className:
                " flex w-full items-center justify-start gap-2 md:top-11",
              children: [
                (0, r.jsx)(d(), {
                  src: t.photo,
                  alt: "Review by ".concat(t.name),
                  className: "h-11 w-11 rounded-full",
                  width: 100,
                  height: 100,
                }),
                (0, r.jsxs)("div", {
                  className: "flex flex-col",
                  children: [
                    (0, r.jsx)("cite", {
                      className: "text-lg not-italic md:text-xl",
                      children: t.name,
                    }),
                    (0, r.jsx)("span", {
                      className: "text-sm text-gray-500",
                      children: t.profession,
                    }),
                  ],
                }),
              ],
            }),
            (0, r.jsxs)("div", {
              className: "mt-6",
              children: [
                (0, r.jsx)("div", {
                  className: "mt-auto",
                  children: (0, r.jsx)(i.Z, {
                    name: "rating",
                    size: "small",
                    value: 10,
                    readOnly: !0,
                    emptyIcon: (0, r.jsx)(n.Z, {
                      style: { opacity: 0.2 },
                      fontSize: "inherit",
                    }),
                  }),
                }),
                (0, r.jsx)("blockquote", {
                  className: "grow text-start text-sm leading-7 md:text-base",
                  children: t.review,
                }),
              ],
            }),
          ],
        });
      };
    },
    74158: function (e, t, s) {
      "use strict";
      s.r(t);
      var r = s(57437),
        n = s(37712),
        i = s(65320),
        l = s(2265);
      t.default = (e) => {
        let { children: t } = e,
          s = (0, n._)(),
          a = (0, l.useRef)(null),
          o = (function (e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "0px",
              [s, r] = (0, l.useState)(!1);
            return (
              (0, l.useEffect)(() => {
                let s = null,
                  n = new IntersectionObserver(
                    (e) => {
                      let [t] = e;
                      (null == t ? void 0 : t.isIntersecting) &&
                        r(null == t ? void 0 : t.isIntersecting);
                    },
                    { rootMargin: t }
                  );
                return (
                  e &&
                    (null == e ? void 0 : e.current) &&
                    ((s = e.current), n.observe(s)),
                  () => {
                    n.unobserve(s);
                  }
                );
              }, [e, t]),
              s
            );
          })(a);
        return (
          (0, l.useEffect)(() => {
            o &&
              s.start({
                x: 0,
                opacity: 1,
                transition: { duration: 0.5, ease: "easeOut" },
              });
          }, [o, s]),
          (0, r.jsx)(i.E.div, {
            className: "lazy-div",
            ref: a,
            initial: { opacity: 0, x: -50 },
            animate: s,
            children: t,
          })
        );
      };
    },
    50976: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return g;
          },
        });
      var r = s(57437),
        n = s(34570),
        i = s(59291),
        l = s(65320),
        a = s(16691),
        o = s.n(a),
        c = s(61396),
        d = s.n(c),
        u = s(22635),
        m = s(2265),
        x = s(68937),
        h = s(71157);
      let p = [
          {
            id: "ff989e43-ce8f-403f-869b-3017630a23a4",
            title: "Trip to Tokyo",
            description:
              "Join me on an exciting 10-day journey through Tokyo, where we'll visit iconic landmarks, indulge in delicious cuisine, and immerse ourselves in the vibrant culture of Japan's capital city.",
            user: {
              display_name: "Ivanner Mora",
              photo_url: "/landing/images/public-plans/user1.jpg",
            },
          },
          {
            id: "ff4437a1-5d04-461e-ba95-7c72932247ea",
            title: "Trip to New York",
            description:
              "Experience the best of New York City in just 7 days! Explore iconic landmarks, indulge in delicious meals, and immerse yourself in the vibrant culture of the city that never sleeps.",
            user: {
              display_name: "Pablo Guzman",
              photo_url: "/landing/images/public-plans/user2.webp",
            },
          },
          {
            id: "ffb140e8-f654-4ea9-8b03-2632ccd7184b",
            title: "Trip to Dubai",
            description:
              "Embark on a thrilling 6-day journey through Dubai, United Arab Emirates. Explore vibrant souks, iconic landmarks, world-class shopping, and enchanting attractions. Join us as we uncover the hidden gems and unforgettable experiences that Dubai has to offer.",
            user: {
              display_name: "john mathew",
              photo_url: "/landing/images/public-plans/user3.jpg",
            },
          },
          {
            id: "ffcf5eb5-03bd-4ca6-b412-6d2e3afee111",
            title: "Trip to Rome",
            description:
              "Join me on a thrilling 5-day adventure in Rome, where we'll explore ancient ruins, marvel at stunning architecture, and indulge in mouthwatering pizza. Get ready for an unforgettable experience!",
            user: {
              display_name: "Rosarinho Alves",
              photo_url: "/landing/images/public-plans/user4.jpg",
            },
          },
        ],
        f = (e) => "https://www.tripplanner.ai/public-trips/".concat(e);
      function g() {
        return (0, r.jsxs)("div", {
          className: "mx-auto mt-3 w-full max-w-screen-2xl md:mt-14",
          children: [
            (0, r.jsx)("h2", {
              className:
                "px-6 text-center text-3xl font-bold md:text-4xl lg:px-12 xl:text-5xl",
              children: "Journey Inspirations from Travelers",
            }),
            (0, r.jsxs)("p", {
              className:
                "mx-auto mt-10 max-w-3xl px-6 text-center text-base lg:px-12 lg:text-lg",
              children: [
                "Dive into unique",
                " ",
                (0, r.jsx)(d(), {
                  href: "/".concat(h.B.PUBLIC_TRIPS),
                  className: "text-accent-red-2 underline",
                  children: "trip itineraries",
                }),
                " ",
                "crafted by our global travelers. Find your next adventure and share your own journey with fellow explorers.",
              ],
            }),
            (0, r.jsxs)("div", {
              className:
                "mx-auto mt-12 flex max-w-6xl flex-col gap-5 px-6 md:flex-row lg:gap-12 lg:px-12",
              children: [
                (0, r.jsxs)("div", {
                  className: "flex flex-auto flex-col gap-5 lg:gap-12",
                  children: [
                    (0, r.jsxs)(b, {
                      href: f(p[0].id),
                      className: "flex h-[15rem] max-w-[50rem] md:h-[16rem]",
                      children: [
                        (0, r.jsx)(b.Image, {
                          src: "https://images.pexels.com/photos/2389171/pexels-photo-2389171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                          className: "absolute h-full w-full",
                          alt: "Trip to Tokyo",
                        }),
                        (0, r.jsxs)(b.TextContainer, {
                          user: p[0].user,
                          children: [
                            (0, r.jsx)(b.Title, { children: p[0].title }),
                            (0, r.jsx)(b.Description, {
                              children: p[0].description,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, r.jsxs)(b, {
                      href: f(p[2].id),
                      className:
                        "relative flex h-[15rem] max-w-[50rem] md:h-[25rem]",
                      children: [
                        (0, r.jsx)(b.Image, {
                          src: "https://images.pexels.com/photos/3873672/pexels-photo-3873672.jpeg?auto=compress&cs=tinysrgb&w=600",
                          alt: "Trip to Tokyo",
                          className: "absolute h-full w-full object-cover",
                        }),
                        (0, r.jsxs)(b.TextContainer, {
                          user: p[2].user,
                          children: [
                            (0, r.jsx)(b.Title, { children: p[2].title }),
                            (0, r.jsx)(b.Description, {
                              children: p[2].description,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className: "flex-2 hidden flex-col gap-5 md:flex lg:gap-12",
                  children: [
                    (0, r.jsxs)(b, {
                      href: f(p[1].id),
                      className:
                        "relative flex h-[15rem] max-w-[50rem] md:h-[25rem]",
                      children: [
                        (0, r.jsx)(b.Image, {
                          src: "https://images.pexels.com/photos/944690/pexels-photo-944690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                          alt: "Trip to Tokyo",
                          className: "absolute h-full w-full object-cover",
                        }),
                        (0, r.jsxs)(b.TextContainer, {
                          user: p[1].user,
                          children: [
                            (0, r.jsx)(b.Title, { children: p[1].title }),
                            (0, r.jsx)(b.Description, {
                              children: p[1].description,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, r.jsxs)(b, {
                      href: f(p[3].id),
                      className:
                        "relative flex h-[15rem] max-w-[50rem] md:h-[18rem]",
                      children: [
                        (0, r.jsx)(b.Image, {
                          src: "https://images.pexels.com/photos/532263/pexels-photo-532263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                          alt: "Trip to Tokyo",
                          className: "absolute h-full w-full object-cover",
                        }),
                        (0, r.jsxs)(b.TextContainer, {
                          user: p[3].user,
                          children: [
                            (0, r.jsx)(b.Title, { children: p[3].title }),
                            (0, r.jsx)(b.Description, {
                              children: p[3].description,
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
        });
      }
      let b = (e) => {
        let t = (0, m.useRef)(null),
          { scrollYProgress: s } = (0, n.v)({
            target: t,
            offset: ["0 1", "1.33 1"],
          }),
          a = (0, i.H)(s, [0, 0.8], [0.8, 1]);
        return (0, r.jsx)(l.E.div, {
          ref: t,
          style: { scale: a },
          className:
            "group relative items-end overflow-hidden rounded-xl md:rounded-3xl ".concat(
              e.className
            ),
          children: (0, r.jsxs)(d(), {
            ...e,
            className: "h-full w-full",
            children: [
              (0, r.jsx)("div", {
                className:
                  "absolute right-0 top-0 z-[20] h-full w-full bg-gradient-to-t from-black/70 via-transparent via-40% to-black/40",
              }),
              (0, r.jsx)("div", {
                className:
                  "absolute right-0 top-0 z-[20] h-full w-full bg-transparent transition-colors duration-700 group-hover:bg-black/50",
              }),
              e.children,
            ],
          }),
        });
      };
      (b.Image = function (e) {
        return (0, r.jsx)(o(), {
          width: 1e3,
          height: 1e3,
          ...e,
          className:
            "object-cover transition-all duration-700 group-hover:scale-110 ".concat(
              null == e ? void 0 : e.className
            ),
        });
      }),
        (b.Title = function (e) {
          return (0, r.jsx)("h2", {
            ...e,
            className: "text-2xl font-bold text-white md:text-3xl",
          });
        }),
        (b.Description = function (e) {
          return (0, r.jsx)("p", {
            ...e,
            className:
              "mt-2 line-clamp-2 text-sm text-white md:mt-5 md:text-base ".concat(
                e.className
              ),
          });
        }),
        (b.TextContainer = function (e) {
          let { data: t } = (0, u.kP)();
          return (0, r.jsxs)("div", {
            className:
              "relative z-[22] flex h-full flex-col justify-between p-4 md:p-7 lg:p-8",
            ...e,
            children: [
              (0, r.jsx)("div", {
                className:
                  "absolute right-5 top-5 z-[20] rounded-lg bg-white ring ring-white ring-offset-2 transition-all duration-300 ease-in-out hover:bg-gray-200 group-hover:text-gray-700 md:right-8 md:top-[-58px] md:p-1 md:group-hover:top-8 xl:group-hover:top-8",
                children: (0, r.jsx)(x.default, {
                  icon: "material-symbols:arrow-outward-rounded",
                  className: "text-gray-700",
                }),
              }),
              (0, r.jsx)(b.User, { user: e.user }),
              (0, r.jsx)("div", { children: e.children }),
            ],
          });
        }),
        (b.User = function (e) {
          let { user: t } = e;
          return (0, r.jsxs)("div", {
            className: "flex items-center gap-2",
            children: [
              (0, r.jsx)(o(), {
                src: null == t ? void 0 : t.photo_url,
                alt: null == t ? void 0 : t.display_name,
                width: 26,
                height: 26,
                className:
                  "h-5 w-5 rounded-full ring ring-white/70 md:h-6 md:w-6",
              }),
              (0, r.jsx)("span", {
                className: "text-sm font-medium text-white md:text-base",
                children: null == t ? void 0 : t.display_name,
              }),
            ],
          });
        });
    },
    42898: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return o;
          },
        });
      var r = s(57437),
        n = s(24033),
        i = s(22635),
        l = s(2265),
        a = s(71157);
      function o() {
        let { data: e } = (0, i.kP)();
        return (
          (0, l.useEffect)(() => {
            (e ||
              (localStorage.getItem("temporalId") &&
                "null" !== localStorage.getItem("temporalId"))) &&
              (0, n.redirect)("/".concat(a.I.TRIPS));
          }, [e]),
          (0, r.jsx)(r.Fragment, {})
        );
      }
    },
    82447: function (e, t, s) {
      "use strict";
      s.d(t, {
        o: function () {
          return l;
        },
      });
      var r = s(2265),
        n = s(30816);
      let i = [
          {
            name: "Goa, India",
            center: [15.50195, 73.91009],
            boundaries: {
              ne: [15.7975387573, 74.3419036865],
              sw: [14.8625049591, 73.6296844482],
            },
            sights_count: 99,
          },
          {
            name: "Paris, France",
            center: [48.85341, 2.3488],
            boundaries: {
              ne: [49.03356694704047, 2.6042489194755207],
              sw: [48.670322030624696, 2.1084049608796893],
            },
            sights_count: 100,
          },
          {
            name: "Rome, Latium, Italy",
            center: [41.89193, 12.51133],
            boundaries: {
              ne: [41.98942097197372, 12.615249866611695],
              sw: [41.79461305370221, 12.379309999999998],
            },
            sights_count: 98,
          },
          {
            name: "New York, NY, United States",
            center: [40.742185, -73.992602],
            boundaries: {
              ne: [40.882214, -73.907],
              sw: [40.679548, -74.047285],
            },
            sights_count: 100,
          },
          {
            name: "Istanbul, Turkey",
            center: [41.01384, 28.94966],
            boundaries: {
              ne: [41.583896981907635, 29.95880097737308],
              sw: [40.80260400000006, 27.971700000085676],
            },
            sights_count: 99,
          },
        ],
        l = function () {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "search-destinations",
            t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            [l, a] = (0, r.useState)(!1),
            [o, c] = (0, r.useState)(""),
            [d, u] = (0, r.useState)(s ? i : []),
            [m, x] = (0, r.useState)({ noResults: !1, queryLength: null }),
            [h, p] = (0, r.useState)(""),
            [f, g] = (0, r.useState)(!1),
            [b, v] = (0, r.useTransition)();
          return (
            (0, r.useEffect)(() => {
              c(
                (function () {
                  let e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 32,
                    t = "",
                    s = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
                  for (let r = 0; r < e; r++)
                    t += s[Math.floor(Math.random() * s.length)];
                  return t;
                })()
              );
            }, []),
            (0, r.useEffect)(() => {
              if (m.queryLength && h.length >= m.queryLength) return;
              if ((x({ noResults: !1, queryLength: null }), h.length <= 1)) {
                u(s ? i : []);
                return;
              }
              g(h.length > 3);
              let r = setTimeout(async () => {
                h.length > 3 &&
                  v(async () => {
                    let s;
                    switch (e) {
                      case "search-hotels":
                        s = await (0, n.rb)(h, o, t);
                        break;
                      case "search-destinations":
                        s = await (0, n.b8)(h, o);
                        break;
                      case "foursquare":
                        s = await (0, n.ZP)(h, o, t, "foursquare");
                        break;
                      case "google-maps":
                        s = await (0, n.ZP)(h, o, t, "google-maps");
                    }
                    g(!1),
                      console.log({ places: s.length }),
                      x({
                        noResults: 0 === s.length,
                        queryLength:
                          0 === s.length
                            ? null == h
                              ? void 0
                              : h.length
                            : null,
                      }),
                      u(s || []);
                  });
              }, 300);
              return () => {
                g(!1), clearTimeout(r);
              };
            }, [h]),
            {
              results: d,
              setResults: u,
              loading: f,
              open: l,
              setOpen: a,
              sessionToken: o,
              autocompleteSearch: h,
              setAutocompleteSearch: p,
              zeroPlacesFound: m,
              setLoading: g,
            }
          );
        };
    },
  },
  function (e) {
    e.O(
      0,
      [
        6603, 3676, 2635, 504, 8326, 4432, 6691, 7460, 1677, 8062, 4704, 9633,
        8350, 9292, 6012, 1320, 4848, 4914, 2637, 9484, 1068, 5282, 2971, 9119,
        8103, 1744,
      ],
      function () {
        return e((e.s = 60624));
      }
    ),
      (_N_E = e.O());
  },
]);
