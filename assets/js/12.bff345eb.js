(window.webpackJsonp = window.webpackJsonp || []).push([
  [12],
  {
    261: function (t, a, e) {
      "use strict";
      e.r(a);
      var s = { name: "HowItWorks" },
        l = e(15),
        r = Object(l.a)(
          s,
          function () {
            var t = this,
              a = t._self._c;
            return a(
              "div",
              { staticClass: "how-it-works-table" },
              [
                a(
                  "b-row",
                  [
                    a(
                      "b-col",
                      {
                        staticClass: "text-center",
                        attrs: { lg: "10", "offset-lg": "1" },
                      },
                      [
                        a(
                          "b-link",
                          {
                            directives: [
                              {
                                name: "b-modal",
                                rawName: "v-b-modal.modal-tutorial",
                                modifiers: { "modal-tutorial": !0 },
                              },
                            ],
                            attrs: { size: "lg" },
                          },
                          [
                            a(
                              "h2",
                              { staticClass: "btn btn-outline-info" },
                              [a("b-icon-play-fill")],
                              1
                            ),
                          ]
                        ),
                        t._v(" "),
                        a("div", [
                          a("small", [t._v("Watch a Video Tutorial")]),
                        ]),
                        t._v(" "),
                        a(
                          "b-modal",
                          {
                            attrs: {
                              id: "modal-tutorial",
                              size: "lg",
                              "ok-only": "",
                              title: "BEP20 Token Generation Tutorial",
                            },
                          },
                          [
                            a("b-embed", {
                              attrs: {
                                type: "iframe",
                                aspect: "16by9",
                                src: "https://www.youtube.com/embed/0e5oGXIrEIQ",
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
                a(
                  "b-row",
                  [
                    a(
                      "b-col",
                      { attrs: { lg: "4" } },
                      [
                        a(
                          "b-card",
                          {
                            staticClass: "mb-3",
                            attrs: {
                              "bg-variant": "light",
                              "border-variant": "light",
                            },
                          },
                          [
                            a(
                              "b-card-title",
                              { staticClass: "font-weight-light text-center" },
                              [
                                a(
                                  "p",
                                  { staticClass: "h1 mb-2" },
                                  [a("b-icon-wallet", { staticClass: "m-4" })],
                                  1
                                ),
                                t._v(" "),
                                a("p", [t._v("Install MetaMask")]),
                              ]
                            ),
                            t._v(" "),
                            a("p", { staticClass: "card-text text-center" }, [
                              t._v(
                                "\n                    You need to have\n                    "
                              ),
                              a(
                                "a",
                                {
                                  staticClass: "text-reset",
                                  attrs: {
                                    href: "https://metamask.io/",
                                    target: "_blank",
                                  },
                                },
                                [t._v("MetaMask")]
                              ),
                              t._v(
                                "\n                    installed with an amount of BNB\n                    to pay for contract deployment.\n                "
                              ),
                            ]),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    t._v(" "),
                    a(
                      "b-col",
                      { attrs: { lg: "4" } },
                      [
                        a(
                          "b-card",
                          {
                            staticClass: "mb-3",
                            attrs: {
                              "bg-variant": "light",
                              "border-variant": "light",
                            },
                          },
                          [
                            a(
                              "b-card-title",
                              { staticClass: "font-weight-light text-center" },
                              [
                                a(
                                  "p",
                                  { staticClass: "h1 mb-2" },
                                  [
                                    a("b-icon-card-checklist", {
                                      staticClass: "m-4",
                                    }),
                                  ],
                                  1
                                ),
                                t._v(" "),
                                a("p", [t._v("Enter Details")]),
                              ]
                            ),
                            t._v(" "),
                            a("p", { staticClass: "card-text text-center" }, [
                              t._v(
                                "\n                    Enter your preferred Token name and symbol.\n                    Choose your supply and Token type.\n                "
                              ),
                            ]),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    t._v(" "),
                    a(
                      "b-col",
                      { attrs: { lg: "4" } },
                      [
                        a(
                          "b-card",
                          {
                            staticClass: "mb-3",
                            attrs: {
                              "bg-variant": "light",
                              "border-variant": "light",
                            },
                          },
                          [
                            a(
                              "b-card-title",
                              { staticClass: "font-weight-light text-center" },
                              [
                                a(
                                  "p",
                                  { staticClass: "h1 mb-2" },
                                  [a("b-icon-link", { staticClass: "m-4" })],
                                  1
                                ),
                                t._v(" "),
                                a("p", [t._v("Deploy Token")]),
                              ]
                            ),
                            t._v(" "),
                            a("p", { staticClass: "card-text text-center" }, [
                              t._v(
                                "\n                    Confirm your transaction using MetaMask.\n                    Once deployed your Token is ready to use.\n                "
                              ),
                            ]),
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
                a(
                  "b-row",
                  [
                    a(
                      "b-col",
                      {
                        staticClass: "text-center",
                        attrs: { lg: "10", "offset-lg": "1" },
                      },
                      [
                        a(
                          "b-button",
                          {
                            staticClass: "my-5 py-3 px-5 text-uppercase",
                            attrs: {
                              to: "/create-token/",
                              size: "lg",
                              variant: "outline-success",
                            },
                          },
                          [t._v("\n                Get Started\n            ")]
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
      a.default = r.exports;
    },
  },
]);
