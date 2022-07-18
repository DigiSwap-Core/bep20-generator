(window.webpackJsonp = window.webpackJsonp || []).push([
  [11],
  {
    260: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = { name: "Features" },
        o = a(15),
        s = Object(o.a)(
          n,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              { staticClass: "features-table" },
              [
                e(
                  "b-row",
                  { staticClass: "mb-5" },
                  [
                    e("b-col", { attrs: { lg: "10", "offset-lg": "1" } }, [
                      e(
                        "h4",
                        {
                          staticClass:
                            "text-center font-weight-light text-light",
                        },
                        [
                          t._v(
                            "\n                You will be able to choose between several features.\n            "
                          ),
                        ]
                      ),
                      t._v(" "),
                      e(
                        "p",
                        {
                          staticClass:
                            "text-center font-weight-light text-light",
                        },
                        [
                          t._v(
                            "\n                What are your Token requirements?\n            "
                          ),
                        ]
                      ),
                    ]),
                  ],
                  1
                ),
                t._v(" "),
                e(
                  "b-card-group",
                  { attrs: { deck: "" } },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-3",
                        attrs: { "sub-title": "Detailed" },
                      },
                      [
                        e("b-card-text", [
                          t._v(
                            "\n                Your Token will be fully compliant with the BEP20 definition and\n                compatible with any BEP20 wallet all around the world.\n                It will have a name, a symbol and a decimals amount.\n            "
                          ),
                        ]),
                      ],
                      1
                    ),
                    t._v(" "),
                    e(
                      "b-card",
                      { staticClass: "mb-3", attrs: { "sub-title": "Capped" } },
                      [
                        e("b-card-text", [
                          t._v(
                            "\n                You won't be able to generate more tokens than the defined token cap.\n                This ensure people that you will not generate more tokens than declared.\n            "
                          ),
                        ]),
                      ],
                      1
                    ),
                    t._v(" "),
                    e(
                      "b-card",
                      {
                        staticClass: "mb-3",
                        attrs: { "sub-title": "Mintable" },
                      },
                      [
                        e("b-card-text", [
                          t._v(
                            "\n                You will be able to generate tokens by minting them.\n                Only token owner will be able to mint.\n                You can also disable minting if you don’t want to generate tokens anymore.\n            "
                          ),
                        ]),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                t._v(" "),
                e(
                  "b-card-group",
                  { attrs: { deck: "" } },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-3",
                        attrs: { "sub-title": "Burnable" },
                      },
                      [
                        e("b-card-text", [
                          t._v(
                            "\n                Your Token can be burnt.\n                It means that you can choose to reduce the circulating supply by destroying some of your\n                tokens.\n            "
                          ),
                        ]),
                      ],
                      1
                    ),
                    t._v(" "),
                    e(
                      "b-card",
                      {
                        staticClass: "mb-3",
                        attrs: { "sub-title": "Ownable Access" },
                      },
                      [
                        e("b-card-text", [
                          t._v(
                            "\n                Your Token will have an Owner.\n                Token owner will be able to mint new tokens or to call the finish minting function.\n            "
                          ),
                        ]),
                      ],
                      1
                    ),
                    t._v(" "),
                    e(
                      "b-card",
                      {
                        staticClass: "mb-3",
                        attrs: { "sub-title": "Role Based Access" },
                      },
                      [
                        e("b-card-text", [
                          t._v(
                            "\n                Your Token will have Roles.\n                You can add or remove ADMIN or MINTER role to addresses. Your token will be Ownable too.\n            "
                          ),
                        ]),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                t._v(" "),
                e(
                  "b-card-group",
                  { attrs: { deck: "" } },
                  [
                    e(
                      "b-card",
                      {
                        staticClass: "mb-3",
                        attrs: { "sub-title": "Operable Token (ERC1363)" },
                      },
                      [
                        e("b-card-text", [
                          t._v(
                            "\n                The Operable Token is a BEP20 compatible Token that can make a\n                callback on the receiver contract to notify token transfers or token approvals.\n            "
                          ),
                        ]),
                      ],
                      1
                    ),
                    t._v(" "),
                    e(
                      "b-card",
                      {
                        staticClass: "mb-3",
                        attrs: { "sub-title": "Token Recover" },
                      },
                      [
                        e("b-card-text", [
                          t._v(
                            "\n                There are lots of tokens lost forever into Smart Contracts.\n                It allows the contract owner to recover any BEP20 token sent into the contract for error.\n            "
                          ),
                        ]),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                t._v(" "),
                e(
                  "b-row",
                  [
                    e(
                      "b-col",
                      { attrs: { lg: "12" } },
                      [
                        e(
                          "b-alert",
                          {
                            staticClass: "mb-3",
                            attrs: { variant: "warning", show: "" },
                          },
                          [
                            e("h4", { staticClass: "alert-heading" }, [
                              t._v("Copyright"),
                            ]),
                            t._v(" "),
                            e("p", [
                              t._v(
                                "\n                    Deploying HelloBEP20 for FREE or SimpleBEP20, a link pointing to this page will be added to\n                    your contract.\n                    Your Token will be fully compliant with the BEP20 Standard and you can use it without issues.\n                    It is only a little credit to advertise BEP20 Token Generator.\n                    You can remove it by choosing an advanced Token type.\n                "
                              ),
                            ]),
                          ]
                        ),
                      ],
                      1
                    ),
                    t._v(" "),
                    e(
                      "b-col",
                      {
                        staticClass: "mt-4",
                        attrs: { lg: "6", "offset-lg": "3" },
                      },
                      [
                        e("p", { staticClass: "text-center text-light" }, [
                          t._v(
                            "\n                Learn more in\n                "
                          ),
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
                              staticClass: "text-reset",
                              attrs: { href: "#faq" },
                            },
                            [
                              t._v(
                                "\n                    Frequently Asked Questions\n                "
                              ),
                            ]
                          ),
                        ]),
                      ]
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
      e.default = s.exports;
    },
  },
]);
