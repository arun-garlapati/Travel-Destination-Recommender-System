(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4952],
  {
    84972: function (e, t, r) {
      Promise.resolve().then(r.bind(r, 43008));
    },
    2547: function (e, t, r) {
      "use strict";
      r(15231), r(470);
      var n = r(31162);
      t.Z = (0, n.$)("833c7cbe8cd5fddf00b8de5be030a6af530118ad");
    },
    30816: function (e, t, r) {
      "use strict";
      r.d(t, {
        VN: function () {
          return s;
        },
        b8: function () {
          return l;
        },
        rb: function () {
          return a;
        },
      }),
        r(15231),
        r(470);
      var n = r(31162),
        l = (0, n.$)("628aa9e3847e651b1bb3740de178bf1dbb6c9ed0"),
        a = (0, n.$)("7a1d9d62457619a18119f4fb6c58e254644a991e");
      t.ZP = (0, n.$)("76be1998881c4c8daf6394f7a973c8892c26ce82");
      var s = (0, n.$)("e10f8923128660455f9ee02ca5c24885eb379768");
    },
    38199: function (e, t, r) {
      "use strict";
      r.d(t, {
        N: function () {
          return l;
        },
      });
      var n = r(4927);
      let l = async () => {
        if (
          null !== localStorage.getItem("temporalId") &&
          "null" !== localStorage.getItem("temporalId")
        )
          return localStorage.getItem("temporalId");
        {
          let e = await (0, n.H)();
          return localStorage.setItem("temporalId", e), e;
        }
      };
    },
    4927: function (e, t, r) {
      "use strict";
      r.d(t, {
        H: function () {
          return l;
        },
        N: function () {
          return a;
        },
      }),
        r(15231),
        r(470);
      var n = r(31162),
        l = (0, n.$)("8e861bd4edecf53f9ce2ab999404a5825198952c"),
        a = (0, n.$)("7e4ee2a2f8f14a70e78a960ac7116c95247888e1");
    },
    55370: function (e, t, r) {
      "use strict";
      r.d(t, {
        E: function () {
          return l;
        },
        T: function () {
          return a;
        },
      }),
        r(15231),
        r(470);
      var n = r(31162),
        l = (0, n.$)("22fa0f60ca6d732e1ee54e301469cf835674a633"),
        a = (0, n.$)("0faa308bfeb8d8c89c79084fee37af358687656d");
    },
    43008: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return ee;
          },
        });
      var n = r(57437),
        l = r(72759),
        a = r(80504),
        s = r(74548),
        i = r.n(s),
        o = r(24033),
        d = r(2265),
        c = r(2547),
        u = r(38199),
        m = r(55370),
        f = r(5551),
        x = r(68937),
        g = (e) => {
          let { increaseDestinationCount: t } = e;
          return (0, n.jsxs)("div", {
            className: "",
            children: [
              (0, n.jsx)("div", {
                className: "ml-6 h-5 border-l-2 border-solid border-gray-200",
              }),
              (0, n.jsxs)("button", {
                className:
                  "flex items-center gap-1.5 rounded-lg bg-accent-red px-3 py-1.5 text-sm text-white transition-colors hover:bg-accent-red-2 md:ml-1.5",
                onClick: (e) => {
                  e.preventDefault(), t(), f.Z.event("added-destination");
                },
                children: [
                  (0, n.jsx)(x.default, {
                    icon: "mdi:plus",
                    className: "text-lg",
                  }),
                  "Add destination",
                ],
              }),
            ],
          });
        },
        p = r(90436),
        h = r(42075);
      function v() {
        let { tailwindMD: e, tailwindXL: t, tailwindLG: r } = (0, h.Z)();
        return (0, n.jsxs)("div", {
          className: "mx-auto w-fit",
          children: [
            e &&
              (0, n.jsx)(p.Z, {
                adKey: "154410485bb2ccbd30e22e04871f8adb",
                adHeight: 60,
                adWidth: 468,
              }),
            !e &&
              (0, n.jsx)(p.Z, {
                adKey: "6b871952e2bef4ef4366a86cc40261ba",
                adHeight: 50,
                adWidth: 320,
              }),
          ],
        });
      }
      function b(e) {
        var t, r, l, a;
        let { errors: s } = e,
          i =
            (null ===
              (t = Object.keys(
                null !== (l = null == s ? void 0 : s.destinations) &&
                  void 0 !== l
                  ? l
                  : {}
              )) || void 0 === t
              ? void 0
              : t.length) > 0 ||
            (null ===
              (r = Object.keys(
                null !== (a = null == s ? void 0 : s.dates) && void 0 !== a
                  ? a
                  : {}
              )) || void 0 === r
              ? void 0
              : r.length) > 0 ||
            (null == s ? void 0 : s.sightCategories);
        return (0, n.jsx)("div", {
          className: "flex items-center justify-center",
          children: (0, n.jsx)("button", {
            disabled: i,
            type: "submit",
            className:
              "mt-8 w-fit items-center rounded-full bg-accent-green px-6 py-2 text-white transition-colors hover:bg-accent-green-2 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-500",
            children: "Create New Trip",
          }),
        });
      }
      var y = (e) => {
          let { message: t } = e;
          return t
            ? (0, n.jsx)("p", {
                className:
                  "mt-1 text-center text-[13px] text-[#ef4444] md:text-sm",
                children: t,
              })
            : null;
        },
        j = r(21412),
        N = r.n(j),
        w = r(14924),
        C = r(28255),
        S = (e) => {
          let {
              errors: t,
              handleSelectPlace: r,
              destinationIdx: l,
              setErrors: a,
              showSuggestions: s,
              selectedPlace: i,
              setWarningModal: o,
            } = e,
            c = (0, d.useRef)(null),
            u = (null == t ? void 0 : t.destinations)
              ? null == t
                ? void 0
                : t.destinations[l]
              : null,
            m = null == t ? void 0 : t.repeated;
          return (
            (0, d.useEffect)(() => {
              if (u && c.current) {
                var e;
                null === (e = c.current) ||
                  void 0 === e ||
                  e.scrollIntoView({ behavior: "smooth", block: "end" });
              }
            }, [u]),
            (0, n.jsx)(n.Fragment, {
              children: (0, n.jsxs)("div", {
                ref: c,
                className: ""
                  .concat(N().variable, " w-full max-w-xl rounded-md ")
                  .concat(
                    u
                      ? "text-gray-700 ring-2 ring-red-400 ring-offset-1 md:ring-offset-2"
                      : ""
                  ),
                children: [
                  (0, n.jsx)(w.Z, {
                    classNameContainer: "w-full",
                    className:
                      "w-full rounded-md border border-solid border-gray-300 bg-white !outline-none transition-colors hover:border-gray-400 focus:border-gray-500",
                    onChange: (e, t) => {
                      0 === t.length &&
                        r((e) => {
                          let t = [...e];
                          return (t[l] = null), t;
                        });
                    },
                    showSuggestions: s,
                    onSelectPlace: (e) => {
                      0 === e.sights_count && o(e.name),
                        (null == e ? void 0 : e.name) && (0, C.EO)(e.name, l),
                        r((t) => {
                          let r = [...t];
                          return (r[l] = e), r;
                        }),
                        (u || m) &&
                          a((e) => {
                            let t = { ...e };
                            return (
                              u && (null == t || delete t.destinations[l]),
                              delete t.repeated,
                              t
                            );
                          });
                    },
                  }),
                  (null == i ? void 0 : i.sights_count) === 0 &&
                    (0, n.jsxs)("p", {
                      className:
                        "-mt-1 flex w-full items-center gap-1 rounded-b-lg bg-[#fff1d1]/60 px-2 py-1 pt-2 text-xs text-gray-700",
                      children: [
                        (0, n.jsx)(x.default, {
                          icon: "ph:warning",
                          className: "text-base",
                        }),
                        "At the moment, we can't generate an itinerary for",
                        " ",
                        null == i ? void 0 : i.name.split(", ")[0],
                        " \uD83D\uDE1E",
                      ],
                    }),
                ],
              }),
            })
          );
        },
        k = r(62067),
        D = r.n(k),
        E = r(59840);
      let P = [
        "#FFD700",
        "#DC143C",
        "#008B8B",
        "#4B0082",
        "#FF4500",
        "#000080",
        "#8A2BE2",
        "#C71585",
        "#FF69B4",
        "#FF0000",
        "#DA70D6",
        "#8B0000",
        "#FF1493",
        "#FF6347",
        "#00008B",
        "#483D8B",
        "#9370DB",
        "#FFA500",
        "#0000CD",
        "#32CD32",
        "#FFA07A",
        "#2E8B57",
        "#3CB371",
        "#556B2F",
        "#008080",
        "#006400",
        "#8B4513",
        "#0000FF",
        "#228B22",
        "#008000",
        "#D2691E",
        "#CD853F",
        "#A0522D",
        "#FF7F50",
        "#FF6347",
        "#FF4500",
      ];
      function I(e, t) {
        let r = Array.from(e),
          n = [],
          l = {},
          a = {};
        return (
          void 0 !== t && r.splice(t, 1),
          r.forEach((e, t) => {
            n.push({
              from: null == e ? void 0 : e.from,
              to: null == e ? void 0 : e.to,
            }),
              (l["destination".concat(t)] = {
                from: null == e ? void 0 : e.from,
                to: null == e ? void 0 : e.to,
              }),
              (a["destination".concat(t)] = {
                border: "2px solid ".concat(P[t]),
              });
          }),
          [n, l, a]
        );
      }
      var F = (e) => {
          let {
              dateErrors: t,
              ranges: r,
              setRange: l,
              destination: a,
              destinationIdx: s,
              setErrors: i,
            } = e,
            [o, c] = (0, d.useState)(!1),
            u = t ? t[s] : null,
            m = (e, t) => D()(t).diff(D()(e), "days");
          return (0, n.jsx)(E.Z, {
            resetInitialValue: !0,
            error: u,
            openPopover: o,
            setOpenPopover: c,
            initialValue: r[s],
            range: r[s],
            onSelectRange: (e, t) => {
              l((r) => {
                let n = [...r];
                return (n[s] = { from: e, to: t }), n;
              }),
                e &&
                  t &&
                  (c(!1),
                  (0, C.QY)(null == a ? void 0 : a.name, s, m(e, t)),
                  i((e) => {
                    let t = { ...e };
                    return delete t.dates, t;
                  }));
            },
            onReset: () =>
              l((e) => {
                let t = [...e];
                return (t[s] = { from: void 0, to: void 0 }), t;
              }),
            disabledDays: [
              { from: new Date(0, 0, 0), to: D()().toDate() },
              ...I(r, s)[0],
            ],
            modifiers: I(r, s)[1],
            modifiersStyles: I(r, s)[2],
          });
        },
        T = r(8672);
      function R(e) {
        let {
            destinationIdx: t,
            selected: r,
            setSelectedDestinations: l,
            errors: a,
            loading: s,
            datesRange: i,
            setDatesRange: o,
            setErrors: d,
            multidestination: c,
            setWarningModal: u,
          } = e,
          m = (0, T.eK)();
        return (0, n.jsx)("div", {
          children: (0, n.jsxs)("div", {
            className: "relative flex md:gap-3 ".concat(
              m
                ? "flex-col items-start gap-2"
                : "flex-col items-start gap-1.5 md:flex-row md:items-center"
            ),
            children: [
              (0, n.jsx)(S, {
                setWarningModal: u,
                selectedPlace: r,
                handleSelectPlace: l,
                errors: a,
                disabledInputs: s,
                destinationIdx: t,
                setErrors: d,
                showSuggestions: 0 === t,
              }),
              (0, n.jsx)(F, {
                dateErrors: null == a ? void 0 : a.dates,
                ranges: i,
                setRange: o,
                disabled: s,
                destinationIdx: t,
                destination: r,
                multidestination: c,
                setErrors: d,
              }),
            ],
          }),
        });
      }
      var O = r(61396),
        _ = r.n(O),
        Z = () =>
          (0, n.jsxs)("p", {
            className: "mt-5 text-center text-sm text-gray-600 opacity-75",
            children: [
              "By clicking Create New Trip, you agree to our",
              " ",
              (0, n.jsx)(_(), {
                href: "/terms",
                className: "text-accent-red hover:underline",
                children: "Terms and Conditions",
              }),
              " ",
              "and",
              " ",
              (0, n.jsx)(_(), {
                href: "/privacy",
                className: "text-accent-red hover:underline",
                children: "Privacy Policy",
              }),
              ".",
            ],
          }),
        B = r(92024),
        H = r(2056);
      function M(e) {
        let {
            sightCategories: t,
            setSightCategories: r,
            sightsError: l,
            setErrors: s,
          } = e,
          i = (0, d.useRef)(null),
          o = null != l ? l : null,
          c = (e) => {
            (null == t ? void 0 : t.includes(e))
              ? r(t.filter((t) => t !== e))
              : (o &&
                  s((e) => {
                    let t = { ...e };
                    return null == t || delete t.sightCategories, t;
                  }),
                r([...(null != t ? t : []), e]));
          };
        return (
          (0, d.useEffect)(() => {
            if (o && i.current) {
              var e;
              null === (e = i.current) ||
                void 0 === e ||
                e.scrollIntoView({ behavior: "smooth", block: "end" });
            }
          }, [o]),
          (0, n.jsxs)("div", {
            children: [
              (0, n.jsx)("h2", {
                ref: i,
                className:
                  "mb-4 w-fit rounded-md text-base transition-all md:text-lg ".concat(
                    o
                      ? "bg-red-100 px-2 text-gray-700 ring-2 ring-red-400 ring-offset-1 hover:!bg-red-200 hover:text-gray-800 md:ring-offset-2"
                      : ""
                  ),
                children: "Select the kind of activities you want to do",
              }),
              (0, n.jsx)("div", {
                className: "flex flex-wrap gap-2 md:gap-2",
                children: H.H.map((e) => {
                  let r = null == t ? void 0 : t.includes(e.value);
                  return (0, n.jsxs)(
                    "label",
                    {
                      htmlFor: e.value,
                      className:
                        "group grow cursor-pointer rounded-lg border border-solid border-gray-200 px-2 py-1.5 transition-all ".concat(
                          r
                            ? "border-primary text-primary border-green-200 bg-primary-green/60 shadow-sm md:hover:bg-primary-green-2"
                            : "text-gray-400 hover:bg-gray-50 md:hover:border-gray-300 md:hover:text-gray-600"
                        ),
                      children: [
                        (0, n.jsxs)("div", {
                          className: "flex items-center justify-center gap-1.5",
                          children: [
                            (0, n.jsx)("div", {
                              className: "grid place-items-center",
                              children: (0, n.jsx)(a.G, {
                                icon: e.icon,
                                className:
                                  "mb-0.5 text-base transition-all ".concat(
                                    r
                                      ? "text-gray-900"
                                      : "text-gray-200 group-hover:text-gray-500"
                                  ),
                              }),
                            }),
                            (0, n.jsx)("span", {
                              className: "line-clamp-1 text-sm md:text-base",
                              children: e.label,
                            }),
                          ],
                        }),
                        (0, n.jsx)("input", {
                          id: e.value,
                          type: "checkbox",
                          defaultValue: "true",
                          name: "visibility",
                          checked: r,
                          className:
                            "sr-only h-4 w-4 rounded border-gray-300 pr-3 text-blue-600 ring-1 ring-gray-200 focus:ring-2 focus:ring-blue-500",
                          onClick: () => {
                            c(e.value), f.Z.event("new-trip-sight-ai-selected");
                          },
                        }),
                      ],
                    },
                    e.value
                  );
                }),
              }),
            ],
          })
        );
      }
      var A = (e) => {
        let { cityName: t, closeModal: r } = e,
          { tailwindMD: s } = (0, h.Z)();
        return (0, n.jsxs)("div", {
          className: "max-w-screen-md rounded-lg bg-white p-5 sm:p-9",
          children: [
            (0, n.jsx)("div", {
              className: "bg-white",
              children: (0, n.jsxs)("div", {
                className:
                  "flex flex-col items-center justify-center sm:flex-row sm:items-start",
                children: [
                  (0, n.jsx)("div", {
                    className:
                      "flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0",
                    children: (0, n.jsx)(a.G, {
                      icon: l.ik8,
                      className: "text-red-500",
                    }),
                  }),
                  (0, n.jsxs)("div", {
                    className: "mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left",
                    children: [
                      (0, n.jsxs)("h3", {
                        className:
                          "text-center text-2xl font-[400] sm:text-start",
                        children: [
                          "Oops! ",
                          (0, n.jsx)("span", {
                            className: "hidden sm:inline-block",
                            children: "\uD83D\uDE41",
                          }),
                        ],
                      }),
                      (0, n.jsx)("div", {
                        className: "mt-2",
                        children: (0, n.jsxs)("p", {
                          className: "text-base sm:text-lg",
                          children: [
                            "Our AI hasn’t been trained with data about",
                            " ",
                            (0, n.jsx)("span", {
                              className: "text-accent-red underline",
                              children: t,
                            }),
                            ". Unfortunately your itinerary will be empty. ",
                            s && (0, n.jsx)("br", {}),
                            s &&
                              (0, n.jsx)("span", {
                                className: "mt-1 text-sm text-gray-500",
                                children:
                                  "We are constantly working on adding new destinations to our platform!",
                              }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, n.jsx)("div", {
              className: "gap-2 px-4 py-3 pt-6 sm:ml-4 sm:flex sm:px-6",
              children: (0, n.jsx)("button", {
                onClick: r,
                className:
                  "hover:bg-primary2 inline-flex w-full justify-center rounded-full bg-accent-green px-4 py-2 text-white shadow-sm hover:bg-accent-green-2 sm:ml-3 sm:w-auto md:py-1.5",
                children: "Got it",
              }),
            }),
          ],
        });
      };
      function L(e) {
        let { peopleCount: t, incrementPeople: r, decrementPeople: l } = e;
        return (0, n.jsxs)("div", {
          children: [
            (0, n.jsx)("p", {
              className: "mb-4 text-base md:text-lg",
              children: "How many people are going?",
            }),
            (0, n.jsx)("div", {
              className: "relative flex max-h-[53px]",
              children: (0, n.jsxs)("div", {
                className:
                  "flex w-full items-center justify-between gap-2 rounded-lg border border-solid border-gray-300 px-4 py-2.5 text-base outline-none",
                children: [
                  (0, n.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [
                      (0, n.jsx)("span", {
                        className:
                          "min-w-[40px] rounded-md border border-solid border-green-200 bg-primary-green/60 p-1 px-3 text-center text-sm",
                        children: t,
                      }),
                      1 === t ? "Person" : "People",
                    ],
                  }),
                  (0, n.jsxs)("div", {
                    className: "flex gap-2",
                    children: [
                      (0, n.jsx)("button", {
                        className:
                          "flex min-w-[42px] items-center justify-center rounded-md border border-solid border-gray-300 p-1 px-3 py-1.5 text-gray-500 transition-colors hover:border-gray-400 md:hover:bg-gray-100 md:hover:text-gray-700",
                        onClick: (e) => {
                          e.preventDefault(), e.stopPropagation(), l();
                        },
                        children: (0, n.jsx)("p", {
                          className: "mb-[2px] text-xl leading-[15px]",
                          children: (0, n.jsx)(x.default, {
                            icon: "majesticons:minus",
                            className: "text-xs",
                          }),
                        }),
                      }),
                      (0, n.jsx)("button", {
                        className:
                          "flex min-w-[42px] items-center justify-center rounded-md border border-solid border-gray-300 p-1 px-3 py-1.5 text-gray-500 transition-colors hover:border-gray-400 md:hover:bg-gray-100 md:hover:text-gray-700",
                        onClick: (e) => {
                          e.preventDefault(), e.stopPropagation(), r();
                        },
                        children: (0, n.jsx)("p", {
                          className: "mb-[2px] text-xl leading-[15px]",
                          children: (0, n.jsx)(x.default, {
                            icon: "majesticons:plus",
                            className: "text-xs",
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      }
      var Y = r(16645);
      let V = [
        { id: 1, text: "Couple", value: "couple", icon: "mdi:heart-multiple" },
        { id: 2, text: "Friends", value: "friends", icon: "carbon:friendship" },
        {
          id: 3,
          text: "Family",
          value: "family",
          icon: "material-symbols:family-restroom",
        },
      ];
      function W(e) {
        let { currentOption: t, setCurrentOption: r, peopleCount: l } = e;
        (0, d.useEffect)(() => {
          l > 2 && "couple" === t.value && r(V[1]);
        }, [l]);
        let a = l > 2 ? V.filter((e) => 1 !== e.id) : V;
        return (0, n.jsxs)("div", {
          children: [
            (0, n.jsx)("h2", {
              className: "mb-4",
              children: "Who is traveling with you?",
            }),
            (0, n.jsx)(Y.E, {
              value: t,
              onChange: (e) => {
                e && (0, C.yr)(e.value), r(e);
              },
              className: "flex gap-2",
              children: a.map((e) =>
                (0, n.jsxs)(
                  Y.E.Option,
                  {
                    value: e,
                    className:
                      "flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-md border border-solid p-2 text-center transition-all ".concat(
                        (null == t ? void 0 : t.id) === e.id
                          ? "border-primary text-primary border-green-200 bg-primary-green/60 shadow-sm md:hover:bg-primary-green-2"
                          : "border-gray-300 text-gray-500 hover:border-gray-400 hover:bg-gray-100 hover:text-gray-700"
                      ),
                    children: [
                      (0, n.jsx)(x.default, { icon: e.icon }),
                      (0, n.jsx)("span", {
                        className: "text-sm md:text-base",
                        children: e.text,
                      }),
                    ],
                  },
                  e.id
                )
              ),
            }),
          ],
        });
      }
      var z = r(33283),
        G = r(22579),
        $ = r(71157),
        q = r(22635);
      let K = () => {
        let { status: e, data: t } = (0, q.kP)(),
          r = (0, o.useRouter)();
        (0, d.useEffect)(() => {
          let e = localStorage.getItem("temporalId");
          console.log({ temporalId: e, session: t }),
            (e && "null" !== e) || t
              ? r.push("/trips?openSearchBar=true")
              : t || r.push("/");
        }, [e]);
      };
      var U = r(34373),
        J = r(13784),
        X = r(28638);
      let Q = (e, t, r, n, l) => {
        if ((l({}), e.some((e) => !e))) {
          let t = e.findIndex((e) => !e);
          return (
            l({
              destinations: {
                [t]: "Please select a destination in ".concat(
                  t,
                  " destination"
                ),
              },
            }),
            !1
          );
        }
        if (t.some((e) => !e || !e.to || !e.from)) {
          let e = t.findIndex((e) => !e || !e.to || !e.from);
          return (
            l({
              dates: {
                [e]: "Please select dates in ".concat(e, " destination"),
              },
            }),
            !1
          );
        }
        if (n && 0 === r.length)
          return (
            l({ sightCategories: "Please select at least one sight category" }),
            !1
          );
        let a = e.some(
          (t, r) =>
            e.findIndex(
              (e) =>
                (null == e ? void 0 : e.name) === (null == t ? void 0 : t.name)
            ) !== r
        );
        return (
          !a ||
          (l({ repeated: { 0: "Please select different destinations" } }), !1)
        );
      };
      function ee() {
        if ((0, T.Ex)()) return K(), null;
        let e = (0, d.useRef)(null),
          { creatingTrip: t, setCreatingTrip: r } = (0, J.t)(),
          s = (0, o.useRouter)(),
          [f, x] = (0, d.useState)(null),
          [p, h] = (0, d.useState)([{ from: void 0, to: void 0 }]),
          [j, N] = (0, d.useState)(1),
          [w, S] = (0, d.useState)({}),
          [k, D] = (0, d.useState)(V[0]),
          [E, P] = (0, d.useState)(
            (function () {
              let e = H.H.filter(
                  (e) =>
                    "amusement_parks" !== e.value && "kid_friendly" !== e.value
                ),
                t = [];
              for (; t.length < 2 && e.length > 1; ) {
                let r = Math.floor(Math.random() * e.length),
                  n = e.splice(r, 1)[0];
                t.push(n), e.filter((e) => e !== n);
              }
              return t;
            })().map((e) => e.value)
          ),
          [I, F] = (0, d.useState)([null]),
          O = !(0, T.R9)(),
          _ = async (e) => {
            var t, n, l;
            if ((e && e.preventDefault(), !Q(I, p, E, O, S))) return;
            r(!0), (0, C.Pr)();
            let a = await (0, m.E)(
              I,
              {
                startDate: p.map((e) =>
                  i()(null == e ? void 0 : e.from).format("YYYY-MM-DD")
                ),
                endDate: p.map((e) =>
                  i()(null == e ? void 0 : e.to).format("YYYY-MM-DD")
                ),
              },
              j,
              !1,
              await (0, u.N)()
            );
            if (a.error) return r(!1), S({ backendError: a.error });
            O && (await ee(null == a ? void 0 : a.trip)),
              (0, X.oW)(a.trip, { traveling_with: 1 === j ? "solo" : k.value });
            let o =
              (null ===
                (t = (
                  (null === (n = a.trip) || void 0 === n
                    ? void 0
                    : n.destinations_summary) || []
                ).filter((e) => {
                  var t;
                  return (
                    null !== (t = e.available_sights_count) && void 0 !== t && t
                  );
                })) || void 0 === t
                ? void 0
                : t.length) > 0;
            o
              ? O
                ? s.push(
                    "/"
                      .concat($.B.TRIPS, "/")
                      .concat(
                        null === (l = a.trip) || void 0 === l ? void 0 : l.id,
                        "/"
                      )
                      .concat($.I.MEALS)
                  )
                : s.push(
                    "/"
                      .concat($.B.TRIPS, "/")
                      .concat(a.trip.id, "/")
                      .concat($.I.SIGHTS)
                  )
              : s.push("/trips/".concat(a.trip.id)),
              r(!1);
          },
          Y = (e) => {
            F((t) => t.filter((t, r) => r !== e)),
              h((t) => t.filter((t, r) => r !== e));
          },
          q = () => {
            x(null);
          },
          ee = async (e) => {
            (0, c.Z)({
              tripId: e.id,
              data: { categories: E, packed_score: 3 },
              temporalId: localStorage.getItem("temporalId"),
            });
          };
        return (0, n.jsxs)(n.Fragment, {
          children: [
            t && (0, n.jsx)(B.default, {}),
            (0, n.jsx)(G.default, { nameEvent: "New Trip Page" }),
            (0, n.jsx)("div", {
              className:
                "flex w-full items-start justify-end gap-2 px-4 md:px-12",
              children: (0, n.jsxs)("div", {
                className: "mx-auto",
                children: [
                  (0, n.jsx)("h1", {
                    className: "mt-5 text-center text-2xl md:mt-12 md:text-3xl",
                    children: "Plan your next adventure",
                  }),
                  (0, n.jsxs)("form", {
                    className: "mt-12 flex w-full max-w-xl flex-col gap-14",
                    onSubmit: _,
                    ref: e,
                    children: [
                      (0, n.jsx)(U.Z, {
                        open: !!f,
                        closeModal: q,
                        children: (0, n.jsx)(A, { cityName: f, closeModal: q }),
                      }),
                      (0, n.jsx)(v, {}),
                      (0, n.jsxs)("div", {
                        children: [
                          (0, n.jsx)("p", {
                            className: "mb-4 text-base md:text-lg",
                            children: "Where do you want to go?",
                          }),
                          I.map((e, r) =>
                            (0, n.jsxs)("div", {
                              children: [
                                (0, n.jsx)("div", {
                                  className: "text-base md:text-lg",
                                  children:
                                    r > 0 &&
                                    (0, n.jsxs)("div", {
                                      className: "text-sm",
                                      children: [
                                        (0, n.jsx)("div", {
                                          className:
                                            "ml-6 h-5 border-l-2 border-solid border-gray-200",
                                        }),
                                        (0, n.jsxs)("div", {
                                          className: "flex items-center gap-2",
                                          children: [
                                            (0, n.jsx)("span", {
                                              children: "Going next to",
                                            }),
                                            (0, n.jsx)(z.W, {
                                              title: "Remove destination",
                                              placement: "top",
                                              children: (0, n.jsx)("button", {
                                                className:
                                                  "grid h-8 w-8 place-items-center rounded-full border border-solid border-gray-200 bg-gray-100 text-gray-600 hover:border-gray-300 hover:bg-gray-200 hover:text-gray-800",
                                                onClick: (e) => {
                                                  Y(r), e.preventDefault();
                                                },
                                                children: (0, n.jsx)(a.G, {
                                                  icon: l.Vui,
                                                  className: "text-xs",
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                        (0, n.jsx)("div", {
                                          className:
                                            "ml-6 h-5 border-l-2 border-solid border-gray-200",
                                        }),
                                      ],
                                    }),
                                }),
                                (0, n.jsx)(R, {
                                  setWarningModal: x,
                                  destinationIdx: r,
                                  datesRange: p,
                                  setDatesRange: h,
                                  setSelectedDestinations: F,
                                  selected: e,
                                  loading: t,
                                  setErrors: S,
                                  errors: w,
                                  multidestination: !0,
                                }),
                              ],
                            })
                          ),
                          (0, n.jsx)(g, {
                            increaseDestinationCount: () => {
                              F((e) => [...e, null]),
                                h((e) => [...e, { from: void 0, to: void 0 }]);
                            },
                          }),
                        ],
                      }),
                      O &&
                        (0, n.jsx)(M, {
                          sightsError: null == w ? void 0 : w.sightCategories,
                          setErrors: S,
                          sightCategories: E,
                          setSightCategories: P,
                        }),
                      (0, n.jsx)(L, {
                        peopleCount: j,
                        incrementPeople: () => {
                          j < 10 && !t && N(j + 1), (0, C.fP)(j + 1);
                        },
                        decrementPeople: () => {
                          j > 1 && !t && N(j - 1), (0, C.Fl)(j - 1);
                        },
                      }),
                      j >= 2 &&
                        (0, n.jsx)(W, {
                          currentOption: k,
                          setCurrentOption: D,
                          peopleCount: j,
                        }),
                      (0, n.jsx)(b, { errors: w }),
                    ],
                  }),
                  w.repeated &&
                    (0, n.jsx)("div", {
                      className: "my-5",
                      children: (0, n.jsx)(y, { message: w.repeated[0] }),
                    }),
                  (0, n.jsx)(y, { message: w.backendError }),
                  !t && (0, n.jsx)(Z, {}),
                ],
              }),
            }),
          ],
        });
      }
    },
    90436: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return a;
        },
      });
      var n = r(57437),
        l = r(2265);
      function a(e) {
        let { adKey: t, adHeight: r, adWidth: a } = e,
          s = (0, l.useRef)(),
          i = { key: t, format: "iframe", height: r, width: a, params: {} };
        return (
          (0, l.useEffect)(() => {
            if (s.current && !s.current.firstChild) {
              let e = document.createElement("script"),
                t = document.createElement("script");
              (t.type = "text/javascript"),
                (t.src = "//www.topcreativeformat.com/".concat(
                  i.key,
                  "/invoke.js"
                )),
                (e.innerHTML = "atOptions = ".concat(JSON.stringify(i))),
                s.current.append(e),
                s.current.append(t);
            }
          }, [s]),
          (0, n.jsx)("div", { className: "h-full w-full", ref: s })
        );
      }
    },
    92024: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return c;
          },
        });
      var n = r(57437),
        l = r(54755),
        a = r(12120),
        s = r(35843),
        i = r(65320),
        o = r(13784);
      let d = (0, s.ZP)(l.Z)((e) => {
        let { theme: t } = e;
        return {
          height: 5,
          ["&.".concat(a.Z.colorPrimary)]: {
            backgroundColor: t.palette.grey[50],
          },
          ["& .".concat(a.Z.bar)]: { borderRadius: 5, background: "#cdf18c" },
        };
      });
      function c() {
        let { creatingTrip: e } = (0, o.t)();
        return e
          ? (0, n.jsxs)("div", {
              className:
                "fixed left-0 top-14 z-30 h-full w-full bg-white/80 transition-all md:top-16",
              children: [
                (0, n.jsx)(d, { variant: "indeterminate" }),
                (0, n.jsx)("div", {
                  className:
                    "relative z-30 flex min-h-[12rem] w-full justify-center bg-gradient-to-b from-white via-white to-[#ffffff00]",
                  children: (0, n.jsx)(i.E.h2, {
                    initial: { opacity: 0, y: 100 },
                    animate: { opacity: 1, y: 0 },
                    className:
                      "mt-8 h-fit rounded-full bg-gray-200 px-6 py-1 text-center text-base font-medium text-black md:mt-12 md:text-lg",
                    children: "Creating your next adventure...",
                  }),
                }),
              ],
            })
          : null;
      }
    },
    33283: function (e, t, r) {
      "use strict";
      r.d(t, {
        W: function () {
          return i;
        },
      });
      var n = r(57437),
        l = r(35843),
        a = r(53741),
        s = r(22202);
      let i = (0, l.ZP)((e) => {
        let { className: t, ...r } = e;
        return (0, n.jsx)(a.Z, { ...r, arrow: !0, classes: { popper: t } });
      })((e) => {
        let { theme: t } = e;
        return {
          ["& .".concat(s.Z.arrow)]: { color: t.palette.common.black },
          ["& .".concat(s.Z.tooltip)]: {
            backgroundColor: t.palette.common.black,
            fontSize: ".8rem !important",
          },
        };
      });
    },
    68937: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return a;
          },
        });
      var n = r(57437),
        l = r(39830);
      function a(e) {
        return (0, n.jsx)(l.JO, { icon: e.icon, ...e });
      }
    },
    63502: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return i;
        },
      });
      var n = r(57437),
        l = r(65050),
        a = r(79633),
        s = r(42075);
      function i(e) {
        let {
            trigger: t,
            children: r,
            align: i = "start",
            openPopover: o,
            setOpenPopover: d,
            className: c,
          } = e,
          { tailwindSM: u } = (0, s.Z)();
        return u
          ? (0, n.jsxs)(l.fC, {
              open: o,
              onOpenChange: d,
              children: [
                (0, n.jsx)(l.xz, {
                  className: "hidden sm:inline-flex",
                  asChild: !0,
                  onClick: (e) => e.stopPropagation(),
                  children: t,
                }),
                (0, n.jsx)(l.h_, {
                  children: (0, n.jsx)(l.VY, {
                    sideOffset: 8,
                    align: i,
                    className:
                      "animate-slide-up-fade z-[106] hidden items-center rounded-md border border-gray-200 bg-white drop-shadow-lg sm:block",
                    children: r,
                  }),
                }),
              ],
            })
          : (0, n.jsxs)(a.d.Root, {
              open: o,
              onOpenChange: d,
              children: [
                (0, n.jsx)(a.d.Trigger, {
                  onClick: (e) => e.stopPropagation(),
                  className: c,
                  children: t,
                }),
                (0, n.jsxs)(a.d.Portal, {
                  children: [
                    (0, n.jsx)(a.d.Overlay, {
                      onClick: (e) => {
                        e.stopPropagation(), d(!1);
                      },
                      className: "fixed inset-0 z-[99] bg-black/40",
                    }),
                    (0, n.jsx)(a.d.Content, {
                      className:
                        "fixed bottom-0 left-0 right-0 z-[100] flex max-h-[96%] flex-col rounded-t-[10px] bg-white",
                      children: (0, n.jsx)("div", {
                        className:
                          "flex w-full flex-col overflow-auto rounded-t-[10px]",
                        children: r,
                      }),
                    }),
                    (0, n.jsx)(a.d.Overlay, {}),
                  ],
                }),
              ],
            });
      }
    },
    22579: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return i;
          },
        });
      var n = r(57437),
        l = r(24033),
        a = r(2265),
        s = r(86222);
      function i(e) {
        let { nameEvent: t } = e,
          r = (0, l.usePathname)(),
          i = (0, a.useRef)(!1);
        return (
          (0, a.useEffect)(() => {
            let e = setTimeout(() => {
              (0, s.rR)(t), (i.current = !0);
            }, 300);
            return () => {
              clearTimeout(e), i.current && ((0, s.Br)(t), (i.current = !1));
            };
          }, [r]),
          (0, n.jsx)(n.Fragment, {})
        );
      }
    },
    14924: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return o;
        },
      });
      var n = r(57437),
        l = r(59292),
        a = r(2265),
        s = r(68937),
        i = r(82447);
      function o(e) {
        let {
            initialCity: t,
            className: r,
            classNameContainer: o,
            classNameOptions:
              d = "absolute z-50 mt-2 w-full rounded-md border border-solid border-gray-300 bg-white py-2",
            onChange: c,
            onSelectPlace: u,
            disabled: m = !1,
            autoFocus: f = !1,
            required: x = !0,
            placeholder: g = "Select a city",
            showSuggestions: p = !1,
            showWarningSights: h = !1,
          } = e,
          [v, b] = (0, a.useState)(null),
          [y, j] = (0, a.useState)(!1),
          {
            results: N,
            loading: w,
            open: C,
            setOpen: S,
            autocompleteSearch: k,
            setAutocompleteSearch: D,
            zeroPlacesFound: E,
          } = (0, i.o)("search-destinations", !1, p);
        (0, a.useEffect)(() => {
          t && b(t);
        }, [t]);
        let {
            getRootProps: P,
            getInputProps: I,
            getListboxProps: F,
            getOptionProps: T,
            groupedOptions: R,
          } = (0, l.o)({
            id: "use-autocomplete-demo",
            options: N,
            getOptionLabel: (e) => (null == e ? void 0 : e.name),
            open: C,
            defaultValue: t,
            value: t,
            onChange: (e, t) => {
              t && (b(t), u && (u(t), j(!1)));
            },
            onOpen: () => {
              S(!0), j(!1);
            },
            clearOnBlur: !1,
            onClose: (e, t) => {
              S(!1), v || "blur" !== t || j(!0);
            },
            onInputChange: (e, t) => {
              D(t), 0 === t.length && b(null), c && c(e, t);
            },
            autoHighlight: !0,
          }),
          O = (e) => {
            let t = RegExp(k, "gi");
            return e.replace(t, (e) =>
              '<span class="text-accent-red-2">'.concat(e, "</span>")
            );
          };
        return (0, n.jsxs)("div", {
          ...P(),
          className: "relative ".concat(o),
          children: [
            (0, n.jsx)("input", {
              className: ""
                .concat(r, " data-hj-allow outline-none ")
                .concat(y ? "!border-red-200" : ""),
              ...I(),
              defaultValue: "Departure city",
              placeholder: g,
              disabled: m,
              required: x,
              autoFocus: f,
              onKeyDown: (e) => {
                "Enter" === e.key &&
                  ((null == N ? void 0 : N.length) === 0 ||
                    (w && k.length >= 3)) &&
                  (e.stopPropagation(), e.preventDefault());
              },
              "data-hj-allow": !0,
            }),
            w &&
              !v &&
              C &&
              (0, n.jsx)("p", {
                className: "px-4 ".concat(d),
                children: (0, n.jsx)("span", {
                  className: "text-sm",
                  children:
                    k.length < 4 ? "Type at least 4 characters" : "Loading...",
                }),
              }),
            R.length > 0
              ? (0, n.jsx)("ul", {
                  className: d,
                  ...F(),
                  children: R.map((e, t) => {
                    let r = e.name.split(", "),
                      l = r[0];
                    return (0, n.jsxs)(
                      "li",
                      {
                        className:
                          "flex cursor-pointer items-center justify-between px-4 py-2 text-start",
                        ...T({ option: e, index: t }),
                        children: [
                          (0, n.jsxs)("div", {
                            className: "flex flex-col",
                            children: [
                              (0, n.jsx)("span", {
                                dangerouslySetInnerHTML: { __html: O(l) },
                              }),
                              (0, n.jsx)("span", {
                                className: "text-xs text-gray-600",
                                children: r.slice(1).join(", "),
                              }),
                            ],
                          }),
                          0 === e.sights_count &&
                            h &&
                            (0, n.jsx)("div", {
                              className: "w-fit",
                              children: (0, n.jsxs)("p", {
                                className:
                                  "w-fit rounded-md bg-[#fff1d1] px-1 py-0.5 text-xs",
                                children: [
                                  (0, n.jsx)(s.default, {
                                    icon: "ph:warning",
                                    className: "mr-1 inline-flex text-sm",
                                  }),
                                  "no enough information",
                                ],
                              }),
                            }),
                        ],
                      },
                      null == e ? void 0 : e.name
                    );
                  }),
                })
              : ((null == E ? void 0 : E.noResults) || (y && !v)) && !w
              ? (0, n.jsx)("div", {
                  className: "px-4 ".concat(
                    d,
                    " !bg-gray-100 text-sm text-gray-700"
                  ),
                  children: (0, n.jsx)("p", {
                    children: "Please select a valid destination",
                  }),
                })
              : null,
          ],
        });
      }
    },
    2056: function (e, t, r) {
      "use strict";
      r.d(t, {
        H: function () {
          return a;
        },
      });
      var n = r(62),
        l = r(72759);
      let a = [
        { value: "kid_friendly", label: "Kid Friendly", icon: l.DX7 },
        { value: "museums", label: "Museums", icon: l.iBD },
        { value: "shopping", label: "Shopping", icon: l.Diu },
        { value: "historic", label: "Historical", icon: l.lg3 },
        { value: "outdoors", label: "Outdoor Adventures", icon: l.S9Y },
        { value: "art_cultural", label: "Art & Cultural", icon: l.q2v },
        { value: "amusement_parks", label: "Amusement Parks", icon: n.Jd$ },
      ];
    },
    71157: function (e, t, r) {
      "use strict";
      var n, l, a, s;
      r.d(t, {
        B: function () {
          return l;
        },
        I: function () {
          return n;
        },
      }),
        ((a = n || (n = {})).DELETE_ACCOUNT = "delete-account"),
        (a.TRIPS = "trips"),
        (a.CREATE_TRIP = "new-trip"),
        (a.MEALS = "meals"),
        (a.HOTEL = "hotel"),
        (a.HOTELS = "hotels"),
        (a.SIGHTS = "sights"),
        (a.EXPLORE_SIGHTS = "explore-sights"),
        (a.NOMAD = "nomad"),
        ((s = l || (l = {})).LANDING = "/"),
        (s.TRIPS = "trips"),
        (s.NEW_TRIP = "new-trip"),
        (s.PUBLIC_TRIPS = "public-trips"),
        (s.DESTINATIONS = "destinations"),
        (s.TERMS_AND_CONDITIONS = "terms"),
        (s.PRIVACY_POLICY = "privacy"),
        (s.COOKIES_POLICY = "cookies");
    },
    59840: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return h;
        },
      });
      var n = r(57437),
        l = r(74548),
        a = r.n(l),
        s = r(62067),
        i = r.n(s),
        o = r(2265),
        d = r(75608),
        c = r(68937),
        u = r(63502),
        m = r(42075),
        f = r(8672),
        x = r(16145);
      let g = { from: new Date(0, 0, 0), to: a()(new Date()).toDate() };
      function p(e, t) {
        for (let r = 0; r < t.length; r++) {
          let n = i()(t[r].from),
            l = i()(t[r].to);
          if (
            i()(e.from).isBetween(n, l, null, "[]") ||
            i()(e.to).isBetween(n, l, null, "[]") ||
            n.isBetween(e.from, e.to, null, "[]") ||
            l.isBetween(e.from, e.to, null, "[]")
          )
            return !0;
        }
        return !1;
      }
      function h(e) {
        let {
            range: t,
            initialValue: r,
            onSelectRange: l,
            modifiers: s,
            modifiersStyles: h,
            onReset: v,
            disabled: b,
            disabledDays: y = g,
            error: j,
            children: N,
            header: w,
            openPopover: C,
            setOpenPopover: S,
            resetInitialValue: k = !1,
          } = e,
          { tailwindMD: D } = (0, m.Z)(),
          [E, P] = (0, o.useState)(t),
          [I, F] = (0, o.useState)(!1),
          T = (0, o.useRef)(null),
          R = (0, f.eK)(),
          O = null == E ? void 0 : E.to,
          _ = null == E ? void 0 : E.from,
          Z = !!(_ && O);
        (0, o.useEffect)(() => {
          if (j && T.current) {
            var e;
            null === (e = T.current) ||
              void 0 === e ||
              e.scrollIntoView({ behavior: "smooth", block: "end" });
          }
        }, [j]),
          (0, o.useEffect)(() => {
            r && k && B(null == r ? void 0 : r.from, null == r ? void 0 : r.to);
          }, [r]);
        let B = (e, t) => {
            P({ from: e, to: t });
          },
          H = _ || O;
        return (0, n.jsx)(u.Z, {
          openPopover: C,
          align: R ? "start" : "end",
          setOpenPopover: (e) => {
            if (e)
              r && B(null == r ? void 0 : r.from, null == r ? void 0 : r.to);
            else {
              if ((O && !_) || (!O && _)) {
                let e = O || _;
                P({ from: e, to: e }), null == l || l(e, e);
              }
              F(!1);
            }
            return S(e), e;
          },
          trigger:
            null != N
              ? N
              : (0, n.jsxs)("div", {
                  ref: T,
                  className: "h-fit "
                    .concat(
                      R
                        ? "hover:bg-gray-100 rounded-md py-1.5 px-2 md:px-2.5 flex items-center gap-2 border border-solid bg-white border-gray-300 cursor-pointer group text-sm transition-all md:text-base"
                        : "relative flex min-w-max cursor-pointer items-center gap-1 rounded-md bg-gray-200 px-2.5 py-1.5 text-sm transition-colors hover:bg-gray-300 md:px-3 md:py-3 ".concat(
                            Z ? "" : "text-gray-500 hover:text-gray-600"
                          ),
                      " "
                    )
                    .concat(
                      j
                        ? "bg-red-100 text-gray-700 ring-2 ring-red-400 ring-offset-1 hover:!bg-red-200 hover:text-gray-800 md:ring-offset-2"
                        : ""
                    ),
                  onClick: () => {
                    b || S((e) => !e);
                  },
                  children: [
                    R
                      ? (0, n.jsx)("div", {
                          className:
                            "grid h-6 w-6 place-items-center gap-2 rounded-full bg-gray-200 group-hover:bg-gray-300 md:h-7 md:w-7",
                          children: (0, n.jsx)(c.default, {
                            icon: "mdi:calendar",
                            className: "text-base text-gray-700",
                          }),
                        })
                      : (0, n.jsx)(c.default, {
                          icon: "mdi:calendar",
                          className: "text-lg",
                        }),
                    (null == E ? void 0 : E.from) && (null == E ? void 0 : E.to)
                      ? (0, n.jsx)("p", {
                          className:
                            "flex items-center gap-2 whitespace-nowrap",
                          children: (0, n.jsxs)("span", {
                            children: [
                              a()(null == E ? void 0 : E.from).format(
                                "DD MMM YY"
                              ),
                              " ~",
                              " ",
                              a()(null == E ? void 0 : E.to).format(
                                "DD MMM YY"
                              ),
                            ],
                          }),
                        })
                      : (0, n.jsx)("span", {
                          className: "whitespace-nowrap",
                          children: "Select dates",
                        }),
                  ],
                }),
          children: (0, n.jsxs)("div", {
            className: "rounded-lg border border-solid border-gray-200 p-5",
            children: [
              (0, n.jsx)("style", { children: x.A }),
              (0, n.jsxs)("div", {
                className:
                  "mb-4 flex w-full justify-between gap-2 text-sm md:justify-start",
                children: [
                  (0, n.jsx)("button", {
                    onClick: () => {
                      B(void 0, void 0), F(!1), v && v();
                    },
                    disabled: !_ && !O,
                    className:
                      "w-fit rounded-md border border-solid border-gray-200 px-6 py-1 hover:bg-gray-100 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-600",
                    children: "Reset",
                  }),
                  w,
                ],
              }),
              (0, n.jsx)(d._W, {
                id: "test",
                mode: "range",
                defaultMonth: H ? new Date(H) : new Date(),
                numberOfMonths: D ? 2 : 1,
                selected: E,
                max: _ && !O ? 10 : void 0,
                footer: !1,
                modifiersClassNames: {
                  selected: "my-selected",
                  today: "my-today",
                },
                onDayClick: (e) => {
                  if ((F(!1), Z)) {
                    P({ from: e, to: void 0 });
                    return;
                  }
                  if (_ && !O) {
                    if (i()(e).isBefore(i()(_))) {
                      if (p({ from: e, to: _ }, y))
                        return null == l || l(void 0, void 0), F(!0);
                      null == l || l(e, _), P({ from: e, to: _ });
                    } else {
                      if (p({ from: _, to: e }, y))
                        return null == l || l(void 0, void 0), F(!0);
                      null == l || l(_, e), P({ from: _, to: e });
                    }
                    return;
                  }
                  if (!Z) {
                    P({ from: e, to: void 0 });
                    return;
                  }
                },
                disabled: y,
                modifiers: s,
                modifiersStyles: h,
                pagedNavigation: !0,
              }),
              (0, n.jsxs)("div", {
                children: [
                  I &&
                    (0, n.jsx)("p", {
                      className:
                        "mt-2 rounded-lg bg-red-100/30 px-2 py-1 text-center text-sm text-red-800",
                      children:
                        "There is a busy day in the selected range, please select another",
                    }),
                  (0, n.jsx)("p", {
                    className:
                      "mt-2 rounded-lg bg-blue-100/30 px-2 py-1 text-center text-sm text-blue-800",
                    children: "Maximum 10 days per destination",
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    82447: function (e, t, r) {
      "use strict";
      r.d(t, {
        o: function () {
          return s;
        },
      });
      var n = r(2265),
        l = r(30816);
      let a = [
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
        s = function () {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "search-destinations",
            t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            [s, i] = (0, n.useState)(!1),
            [o, d] = (0, n.useState)(""),
            [c, u] = (0, n.useState)(r ? a : []),
            [m, f] = (0, n.useState)({ noResults: !1, queryLength: null }),
            [x, g] = (0, n.useState)(""),
            [p, h] = (0, n.useState)(!1),
            [v, b] = (0, n.useTransition)();
          return (
            (0, n.useEffect)(() => {
              d(
                (function () {
                  let e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 32,
                    t = "",
                    r = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
                  for (let n = 0; n < e; n++)
                    t += r[Math.floor(Math.random() * r.length)];
                  return t;
                })()
              );
            }, []),
            (0, n.useEffect)(() => {
              if (m.queryLength && x.length >= m.queryLength) return;
              if ((f({ noResults: !1, queryLength: null }), x.length <= 1)) {
                u(r ? a : []);
                return;
              }
              h(x.length > 3);
              let n = setTimeout(async () => {
                x.length > 3 &&
                  b(async () => {
                    let r;
                    switch (e) {
                      case "search-hotels":
                        r = await (0, l.rb)(x, o, t);
                        break;
                      case "search-destinations":
                        r = await (0, l.b8)(x, o);
                        break;
                      case "foursquare":
                        r = await (0, l.ZP)(x, o, t, "foursquare");
                        break;
                      case "google-maps":
                        r = await (0, l.ZP)(x, o, t, "google-maps");
                    }
                    h(!1),
                      console.log({ places: r.length }),
                      f({
                        noResults: 0 === r.length,
                        queryLength:
                          0 === r.length
                            ? null == x
                              ? void 0
                              : x.length
                            : null,
                      }),
                      u(r || []);
                  });
              }, 300);
              return () => {
                h(!1), clearTimeout(n);
              };
            }, [x]),
            {
              results: c,
              setResults: u,
              loading: p,
              open: s,
              setOpen: i,
              sessionToken: o,
              autocompleteSearch: x,
              setAutocompleteSearch: g,
              zeroPlacesFound: m,
              setLoading: h,
            }
          );
        };
    },
    34373: function (e, t, r) {
      "use strict";
      var n = r(57437),
        l = r(72759),
        a = r(80504),
        s = r(16856),
        i = r(84914),
        o = r(2265);
      t.Z = (e) => {
        let {
            open: t,
            closeModal: r,
            options: d = {
              bg: "bg-[#000000c7]",
              blur: "backdrop-blur-sm",
              fullWidth: !1,
            },
            showCloseButton: c = !0,
            children: u,
          } = e,
          m = (0, o.useRef)(null);
        return (0, n.jsx)(s.u.Root, {
          show: t,
          as: o.Fragment,
          children: (0, n.jsxs)(i.V, {
            as: "div",
            className: "relative z-[100] w-full rounded-xl",
            initialFocus: m,
            onClose: r,
            onClick: (e) => {
              e.stopPropagation(), e.preventDefault();
            },
            children: [
              (0, n.jsx)(s.u.Child, {
                as: o.Fragment,
                enter: "ease-out duration-100",
                enterFrom: "opacity-0",
                enterTo: "opacity-100",
                leave: "ease-in duration-200",
                leaveFrom: "opacity-100",
                leaveTo: "opacity-0",
                children: (0, n.jsx)("div", {
                  className: "fixed inset-0 bg-opacity-50 transition-opacity "
                    .concat(null == d ? void 0 : d.bg, " ")
                    .concat(
                      (null == d ? void 0 : d.blur)
                        ? "backdrop-blur-sm backdrop-filter"
                        : ""
                    ),
                }),
              }),
              (0, n.jsxs)("div", {
                className: "fixed inset-0 z-[100] overflow-y-auto",
                children: [
                  c &&
                    (0, n.jsx)("button", {
                      onClick: r,
                      className:
                        "text-tp-text absolute right-4 top-4 z-[100] flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-gray-100 transition-colors hover:bg-gray-200",
                      children: (0, n.jsx)(a.G, { icon: l.g82 }),
                    }),
                  (0, n.jsx)("div", {
                    className:
                      "relative z-[100] flex min-h-full items-center justify-center p-1 text-center md:p-4",
                    children: (0, n.jsx)(s.u.Child, {
                      as: o.Fragment,
                      enter: "ease-out duration-100",
                      enterFrom:
                        "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                      enterTo: "opacity-100 translate-y-0 sm:scale-100",
                      leave: "ease-in duration-200",
                      leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
                      leaveTo:
                        "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                      children: (0, n.jsx)(i.V.Panel, {
                        className: d.fullWidth ? "w-full" : "",
                        children: u,
                      }),
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      };
    },
    13784: function (e, t, r) {
      "use strict";
      r.d(t, {
        t: function () {
          return l;
        },
      });
      var n = r(94660);
      let l = (0, n.Ue)((e) => ({
        buildingTrip: "idle",
        creatingTrip: !1,
        loadingHotels: !1,
        selectedHotel: [null],
        successCreation: !1,
        setBuildingTrip: (t) => {
          e({ buildingTrip: t });
        },
        setCreatingTrip: (t) => {
          e({ creatingTrip: t });
        },
        setSuccessCreation: (t) => {
          e({ successCreation: t });
        },
        setLoadingHotels: (t) => {
          e({ loadingHotels: t });
        },
        setSelectedHotel: (t, r) => {
          e((e) => {
            var n;
            if (
              (null === (n = e.selectedHotel[r]) || void 0 === n
                ? void 0
                : n.id) === (null == t ? void 0 : t.id)
            ) {
              let t = [...e.selectedHotel];
              return (t[r] = null), { selectedHotel: t };
            }
            {
              let n = [...e.selectedHotel];
              return (n[r] = t), { selectedHotel: n };
            }
          });
        },
        reset: () => {
          e({
            buildingTrip: "idle",
            creatingTrip: !1,
            loadingHotels: !1,
            selectedHotel: [null],
            successCreation: !1,
          });
        },
      }));
    },
    8672: function (e, t, r) {
      "use strict";
      r.d(t, {
        $d: function () {
          return d;
        },
        D6: function () {
          return l;
        },
        Ex: function () {
          return a;
        },
        GG: function () {
          return i;
        },
        R9: function () {
          return o;
        },
        TP: function () {
          return c;
        },
        eK: function () {
          return s;
        },
      });
      var n = r(5265);
      let l = () => (0, n.aS)("trip-detail-affiliate-banners", !1),
        a = () => !1,
        s = () => !0,
        i = () => !1,
        o = () => !1,
        d = () => !1,
        c = () => 1;
    },
    16145: function (e, t, r) {
      "use strict";
      r.d(t, {
        A: function () {
          return n;
        },
      });
      let n =
        "\n  .my-selected:not([disabled]) {\n    border: 2px solid #83d986;\n    color: #000000FF;\n    background-color: #dcffa0b0;\n  }\n  .my-selected:hover:not([disabled]) {\n    color: black;\n    background-color: #DCFFA0 !important;\n  }\n  .my-today {\n    font-weight: font-medium;\n    font-size: 120%;\n    color: blue;\n  }\n  .rdp-caption_label{\n   font-weight: normal;\n  }\n";
    },
  },
  function (e) {
    e.O(
      0,
      [
        6603, 3676, 6990, 3958, 2635, 504, 8326, 4432, 7460, 8062, 4704, 9633,
        8350, 8627, 9292, 6176, 3741, 4914, 2246, 6794, 5653, 2971, 9119, 8103,
        1744,
      ],
      function () {
        return e((e.s = 84972));
      }
    ),
      (_N_E = e.O());
  },
]);
