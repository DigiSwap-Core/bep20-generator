(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    257: function (t, e, a) {
      "use strict";
      a.r(e);
      var s = { name: "Home" },
        i = a(15),
        r = Object(i.a)(
          s,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              [
                e(
                  "b-jumbotron",
                  {
                    staticClass: "mb-0 wiretap-gradient",
                    attrs: {
                      "text-variant": "white",
                      header: "BEP20 Token Generator",
                      fluid: "",
                    },
                    scopedSlots: t._u([
                      {
                        key: "lead",
                        fn: function () {
                          return [
                            t._v(
                              "\n            Create your own BEP20 Smart Contract without coding.\n            "
                            ),
                            e("br"),
                            t._v(
                              "\n            BEP20 Generator is the easiest and fastest way to create your own BEP20 token on the Binance Smart Chain network. No coding skills are required.\n        "
                            ),
                          ];
                        },
                        proxy: !0,
                      },
                    ]),
                  },
                  [
                    t._v(" "),
                    e("hr", { staticClass: "my-5" }),
                    t._v(" "),
                    e(
                      "p",
                      [
                        e(
                          "b-button",
                          {
                            staticClass: "my-2 py-3 px-5 text-uppercase",
                            attrs: {
                              to: "/create-token/",
                              size: "lg",
                              variant: "success",
                            },
                          },
                          [
                            t._v(
                              "\n                Create BEP20 Token\n            "
                            ),
                          ]
                        ),
                        t._v(" "),
                        e(
                          "a",
                          {
                            directives: [
                              {
                                name: "smooth-scroll",
                                rawName: "v-smooth-scroll",
                                value: {
                                  duration: 1e3,
                                  offset: 0,
                                  updateHistory: !1,
                                },
                                expression:
                                  "{ duration: 1000, offset: 0, updateHistory: false }",
                              },
                            ],
                            staticClass:
                              "btn btn-lg btn-outline-light py-3 px-5 text-uppercase",
                            attrs: { href: "#pricing" },
                          },
                          [t._v("\n                Pricing\n            ")]
                        ),
                      ],
                      1
                    ),
                  ]
                ),
                t._v(" "),
                e(
                  "b-row",
                  { staticClass: "mx-0", attrs: { id: "how-it-works" } },
                  [
                    e(
                      "b-col",
                      {
                        staticClass: "mb-3",
                        attrs: { lg: "8", "offset-lg": "2" },
                      },
                      [
                        e(
                          "h2",
                          {
                            staticClass:
                              "p-5 font-weight-lighter text-center text-dark",
                          },
                          [t._v("How it works")]
                        ),
                        t._v(" "),
                        e(
                          "h4",
                          { staticClass: "text-center font-weight-light" },
                          [
                            t._v(
                              "\n                Create a BEP20 Token in less than a minute.\n            "
                            ),
                          ]
                        ),
                        t._v(" "),
                        e(
                          "p",
                          { staticClass: "text-center font-weight-light" },
                          [
                            t._v(
                              "\n                Easily deploy Smart Contract for a Standard, Capped, Mintable, Burnable BEP20 Token.\n                "
                            ),
                            e("br"),
                            t._v(
                              "\n                BEP20 Generator is the easiest and fastest way to create your own BEP20 token on the Binance Smart Chain network. No coding skills are required.\n            "
                            ),
                          ]
                        ),
                        t._v(" "),
                        e("ui--how-it-works"),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                t._v(" "),
                e(
                  "b-row",
                  {
                    staticClass: "aqua-gradient mx-0",
                    attrs: { id: "pricing" },
                  },
                  [
                    e(
                      "b-col",
                      {
                        staticClass: "py-5",
                        attrs: { lg: "12", xl: "10", "offset-xl": "1" },
                      },
                      [
                        e(
                          "h2",
                          {
                            staticClass:
                              "p-5 font-weight-lighter text-center text-light",
                          },
                          [t._v("Pricing")]
                        ),
                        t._v(" "),
                        e("ui--pricing-table"),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                t._v(" "),
                e(
                  "b-row",
                  { staticClass: "bg-dark text-white mx-0" },
                  [
                    e(
                      "b-col",
                      {
                        staticClass: "mb-3 text-center",
                        attrs: { lg: "10", "offset-lg": "1" },
                      },
                      [
                        e(
                          "h2",
                          {
                            staticClass:
                              "pt-5 mb-4 font-weight-lighter text-light",
                          },
                          [t._v("Ready to deploy your BEP20 Token?")]
                        ),
                        t._v(" "),
                        e("p", { staticClass: "font-weight-light" }, [
                          t._v(
                            "\n                Try building your BEP20 Token in less than a minute. You can try on Test Network before to go live.\n            "
                          ),
                        ]),
                        t._v(" "),
                        e(
                          "b-button",
                          {
                            staticClass: "my-5 py-3 px-5 text-uppercase",
                            attrs: {
                              to: "/create-token/",
                              size: "lg",
                              variant: "success",
                            },
                          },
                          [
                            t._v(
                              "\n                Create BEP20 Token\n            "
                            ),
                          ]
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                t._v(" "),
                e(
                  "b-row",
                  {
                    staticClass: "peach-gradient mx-0",
                    attrs: { id: "features" },
                  },
                  [
                    e(
                      "b-col",
                      {
                        staticClass: "py-5",
                        attrs: { lg: "12", xl: "8", "offset-xl": "2" },
                      },
                      [
                        e(
                          "h2",
                          {
                            staticClass:
                              "p-5 font-weight-lighter text-center text-light",
                          },
                          [t._v("Features")]
                        ),
                        t._v(" "),
                        e("ui--features"),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                t._v(" "),
                e(
                  "b-row",
                  { staticClass: "bg-dark text-white mx-0" },
                  [
                    e(
                      "b-col",
                      {
                        staticClass: "mb-3 text-center",
                        attrs: { lg: "10", "offset-lg": "1" },
                      },
                      [
                        e(
                          "h2",
                          {
                            staticClass:
                              "pt-5 mb-4 font-weight-lighter text-light",
                          },
                          [t._v("Need a custom development?")]
                        ),
                        t._v(" "),
                        e("p", { staticClass: "font-weight-light" }, [
                          t._v(
                            "\n                Open to getting in touch with awesome people and projects.\n            "
                          ),
                        ]),
                        t._v(" "),
                        e(
                          "b-button",
                          {
                            directives: [
                              {
                                name: "b-modal",
                                rawName: "v-b-modal.modal-contact",
                                modifiers: { "modal-contact": !0 },
                              },
                            ],
                            staticClass: "my-5 py-3 px-5 text-uppercase",
                            attrs: { size: "lg", variant: "outline-warning" },
                          },
                          [t._v("\n                Let us know\n            ")]
                        ),
                        t._v(" "),
                        e(
                          "b-modal",
                          {
                            attrs: {
                              id: "modal-contact",
                              size: "lg",
                              centered: "",
                              "hide-footer": "",
                            },
                          },
                          [
                            e("b-embed", {
                              attrs: {
                                type: "iframe",
                                aspect: "16by9",
                                src: "https://digiswap-core.github.io/bep20-generator/",
                                allow:
                                  "accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture",
                                allowfullscreen: "",
                              },
                            }),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                t._v(" "),
                e(
                  "b-row",
                  { staticClass: "purple-gradient mx-0", attrs: { id: "faq" } },
                  [
                    e(
                      "b-col",
                      {
                        staticClass: "py-5",
                        attrs: { lg: "12", xl: "8", "offset-xl": "2" },
                      },
                      [
                        e(
                          "h2",
                          {
                            staticClass:
                              "p-5 font-weight-lighter text-center text-light",
                          },
                          [t._v("FAQ")]
                        ),
                        t._v(" "),
                        e("ui--faq"),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                t._v(" "),
                e(
                  "b-row",
                  { staticClass: "bg-light text-dark mx-0" },
                  [
                    e(
                      "b-col",
                      {
                        staticClass: "mb-3 text-center",
                        attrs: { lg: "10", "offset-lg": "1" },
                      },
                      [
                        e(
                          "h2",
                          {
                            staticClass:
                              "pt-5 mb-4 font-weight-lighter text-dark",
                          },
                          [t._v("Ready to deploy your BEP20 Token?")]
                        ),
                        t._v(" "),
                        e("p", { staticClass: "font-weight-light" }, [
                          t._v(
                            "\n                Try building your BEP20 Token in less than a minute. You can try on Test Network before to go live.\n            "
                          ),
                        ]),
                        t._v(" "),
                        e(
                          "b-button",
                          {
                            staticClass: "my-5 py-3 px-5 text-uppercase",
                            attrs: {
                              to: "/create-token/",
                              size: "lg",
                              variant: "success",
                            },
                          },
                          [
                            t._v(
                              "\n                Create BEP20 Token\n            "
                            ),
                          ]
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = r.exports;
    },
  },
]);
