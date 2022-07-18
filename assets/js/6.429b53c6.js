(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    255: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a(240),
        s = a(236),
        i = {
          name: "Docs",
          mixins: [n.a, s.a],
          data: () => ({
            loading: !0,
            currentNetwork: null,
            tokenType: "SimpleBEP20",
            token: {},
          }),
          computed: {
            controlFlow: function () {
              return `https://github.com/DigiSwap-Core/bep20-generator/blob/v${this.token.version}/analysis/control-flow/${this.contracts.token.contractName}.png`;
            },
            inheritanceTree: function () {
              return `https://github.com/DigiSwap-Core/bep20-generator/blob/v${this.token.version}/analysis/inheritance-tree/${this.contracts.token.contractName}.png`;
            },
            uml: function () {
              return `https://github.com/DigiSwap-Core/bep20-generator/blob/v${this.token.version}/analysis/uml/${this.contracts.token.contractName}.svg`;
            },
          },
          mounted() {
            this.initDapp();
          },
          methods: {
            async initDapp() {
              try {
                await this.loadToken();
              } catch (t) {
                console.log(t),
                  this.makeToast("Some error occurred", t, "danger");
              }
            },
            async loadToken() {
              this.initToken(this.tokenType),
                (this.token = this.tokenDetails.find(
                  (t) => t.name === this.tokenType
                )),
                (this.loading = !1);
            },
          },
        },
        r = a(15),
        o = Object(r.a)(
          i,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              [
                e("b-jumbotron", {
                  staticClass: "mb-0 flickr-gradient",
                  attrs: {
                    "text-variant": "white",
                    header: "BEP20 Token Documentation",
                    fluid: "",
                  },
                  scopedSlots: t._u([
                    {
                      key: "lead",
                      fn: function () {
                        return [
                          t._v(
                            "\n            BEP20 Token Generator Tool Documentation.\n            "
                          ),
                          e("br"),
                          t._v(
                            "\n            Discover more details about different BEP20 Token Types, ABI, source code and analysis report.\n        "
                          ),
                        ];
                      },
                      proxy: !0,
                    },
                  ]),
                }),
                t._v(" "),
                e(
                  "b-row",
                  { staticClass: "mx-0", attrs: { id: "token-docs" } },
                  [
                    e(
                      "b-col",
                      {
                        staticClass: "mb-3 p-0",
                        attrs: { lg: "10", "offset-lg": "1" },
                      },
                      [
                        t.loading
                          ? e(
                              "div",
                              { staticClass: "text-center p-5" },
                              [e("ui--loader", { attrs: { loading: !0 } })],
                              1
                            )
                          : t._e(),
                        t._v(" "),
                        t.loading
                          ? t._e()
                          : e(
                              "b-card",
                              {
                                attrs: {
                                  "bg-variant": "transparent",
                                  "border-variant": "0",
                                },
                              },
                              [
                                e(
                                  "b-row",
                                  [
                                    e(
                                      "b-col",
                                      { attrs: { lg: "8" } },
                                      [
                                        e(
                                          "b-card",
                                          {
                                            staticClass: "mt-3",
                                            attrs: {
                                              header: "Token Type",
                                              "header-bg-variant": "dark",
                                              "header-text-variant": "white",
                                            },
                                          },
                                          [
                                            e(
                                              "b-form-group",
                                              {
                                                attrs: {
                                                  description:
                                                    "Choose your Token.",
                                                  label: "Token Type *",
                                                  "label-for": "tokenType",
                                                },
                                              },
                                              [
                                                e(
                                                  "b-form-select",
                                                  {
                                                    attrs: {
                                                      id: "tokenType",
                                                      size: "lg",
                                                    },
                                                    on: { input: t.loadToken },
                                                    model: {
                                                      value: t.tokenType,
                                                      callback: function (e) {
                                                        t.tokenType = e;
                                                      },
                                                      expression: "tokenType",
                                                    },
                                                  },
                                                  t._l(
                                                    t.tokenList,
                                                    function (a, n) {
                                                      return e(
                                                        "option",
                                                        {
                                                          domProps: {
                                                            value: n,
                                                          },
                                                        },
                                                        [
                                                          t._v(
                                                            t._s(a.contractName)
                                                          ),
                                                        ]
                                                      );
                                                    }
                                                  ),
                                                  0
                                                ),
                                              ],
                                              1
                                            ),
                                          ],
                                          1
                                        ),
                                        t._v(" "),
                                        e(
                                          "b-card",
                                          {
                                            staticClass: "mt-3",
                                            attrs: {
                                              "no-body": "",
                                              "bg-variant": "light",
                                              header: "Token Details",
                                              "header-bg-variant": "dark",
                                              "header-text-variant": "white",
                                            },
                                          },
                                          [
                                            e(
                                              "b-list-group",
                                              { attrs: { flush: "" } },
                                              [
                                                e(
                                                  "b-list-group-item",
                                                  { staticClass: "py-4" },
                                                  [
                                                    e(
                                                      "b-link",
                                                      {
                                                        attrs: {
                                                          href: `https://github.com/DigiSwap-Core/bep20-generator/blob/v${t.token.version}/dist/${t.contracts.token.contractName}.dist.sol`,
                                                          target: "_blank",
                                                        },
                                                      },
                                                      [
                                                        e("b-img", {
                                                          attrs: {
                                                            src: `https://img.shields.io/badge/version-${t.token.version}-blue`,
                                                          },
                                                        }),
                                                      ],
                                                      1
                                                    ),
                                                    t._v(" "),
                                                    e(
                                                      "b-link",
                                                      {
                                                        attrs: {
                                                          href: "https://github.com/DigiSwap-Core/bep20-generator/actions",
                                                          target: "_blank",
                                                        },
                                                      },
                                                      [
                                                        e("b-img", {
                                                          attrs: {
                                                            src: "https://github.com/DigiSwap-Core/bep20-generator/workflows/CI/badge.svg?branch=master",
                                                          },
                                                        }),
                                                      ],
                                                      1
                                                    ),
                                                    t._v(" "),
                                                    e(
                                                      "b-link",
                                                      {
                                                        attrs: {
                                                          href: "https://coveralls.io/github/DigiSwap-Core/bep20-generator?branch=master",
                                                          target: "_blank",
                                                        },
                                                      },
                                                      [
                                                        e("b-img", {
                                                          attrs: {
                                                            src: "https://coveralls.io/repos/github/DigiSwap-Core/bep20-generator/badge.svg?branch=master",
                                                          },
                                                        }),
                                                      ],
                                                      1
                                                    ),
                                                    t._v(" "),
                                                    e(
                                                      "b-link",
                                                      {
                                                        attrs: {
                                                          href: "https://github.com/DigiSwap-Core/bep20-generator/blob/master/LICENSE",
                                                          target: "_blank",
                                                        },
                                                      },
                                                      [
                                                        e("b-img", {
                                                          attrs: {
                                                            src: "https://img.shields.io/github/license/DigiSwap-Core/bep20-generator.svg",
                                                          },
                                                        }),
                                                      ],
                                                      1
                                                    ),
                                                  ],
                                                  1
                                                ),
                                                t._v(" "),
                                                e(
                                                  "b-list-group-item",
                                                  { staticClass: "py-4" },
                                                  [
                                                    t._v(
                                                      "\n                                    Contract Name: "
                                                    ),
                                                    e("b", [
                                                      t._v(
                                                        t._s(
                                                          t.contracts.token
                                                            .contractName
                                                        )
                                                      ),
                                                    ]),
                                                  ]
                                                ),
                                                t._v(" "),
                                                e(
                                                  "b-list-group-item",
                                                  { staticClass: "py-4" },
                                                  [
                                                    t._v(
                                                      "\n                                    Compiler: "
                                                    ),
                                                    e("b", [
                                                      t._v(
                                                        t._s(
                                                          t.contracts.token
                                                            .compiler.version
                                                        )
                                                      ),
                                                    ]),
                                                  ]
                                                ),
                                                t._v(" "),
                                                e(
                                                  "b-list-group-item",
                                                  { staticClass: "py-4" },
                                                  [
                                                    t._v(
                                                      "\n                                    Optimization: "
                                                    ),
                                                    e("b", [t._v("Yes")]),
                                                  ]
                                                ),
                                                t._v(" "),
                                                e(
                                                  "b-list-group-item",
                                                  { staticClass: "py-4" },
                                                  [
                                                    t._v(
                                                      "\n                                    Runs (Optimizer): "
                                                    ),
                                                    e("b", [t._v("200")]),
                                                  ]
                                                ),
                                                t._v(" "),
                                                e(
                                                  "b-list-group-item",
                                                  { staticClass: "py-4" },
                                                  [
                                                    t._v(
                                                      "\n                                    Control Flow:\n                                    "
                                                    ),
                                                    e(
                                                      "b-link",
                                                      {
                                                        attrs: {
                                                          href: t.controlFlow,
                                                          target: "_blank",
                                                        },
                                                      },
                                                      [
                                                        e("b", [
                                                          t._v(
                                                            t._s(
                                                              t.contracts.token
                                                                .contractName
                                                            ) + ".png"
                                                          ),
                                                        ]),
                                                      ]
                                                    ),
                                                  ],
                                                  1
                                                ),
                                                t._v(" "),
                                                e(
                                                  "b-list-group-item",
                                                  { staticClass: "py-4" },
                                                  [
                                                    t._v(
                                                      "\n                                    Inheritance Tree:\n                                    "
                                                    ),
                                                    e(
                                                      "b-link",
                                                      {
                                                        attrs: {
                                                          href: t.inheritanceTree,
                                                          target: "_blank",
                                                        },
                                                      },
                                                      [
                                                        e("b", [
                                                          t._v(
                                                            t._s(
                                                              t.contracts.token
                                                                .contractName
                                                            ) + ".png"
                                                          ),
                                                        ]),
                                                      ]
                                                    ),
                                                  ],
                                                  1
                                                ),
                                                t._v(" "),
                                                e(
                                                  "b-list-group-item",
                                                  { staticClass: "py-4" },
                                                  [
                                                    t._v(
                                                      "\n                                    UML:\n                                    "
                                                    ),
                                                    e(
                                                      "b-link",
                                                      {
                                                        attrs: {
                                                          href: t.uml,
                                                          target: "_blank",
                                                        },
                                                      },
                                                      [
                                                        e("b", [
                                                          t._v(
                                                            t._s(
                                                              t.contracts.token
                                                                .contractName
                                                            ) + ".svg"
                                                          ),
                                                        ]),
                                                      ]
                                                    ),
                                                  ],
                                                  1
                                                ),
                                                t._v(" "),
                                                e(
                                                  "b-list-group-item",
                                                  { staticClass: "py-4" },
                                                  [
                                                    e(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "form-group",
                                                      },
                                                      [
                                                        e("label", [
                                                          t._v("ABI:"),
                                                        ]),
                                                        t._v(" "),
                                                        e("b-form-textarea", {
                                                          attrs: {
                                                            readonly: "",
                                                            "no-resize": "",
                                                            rows: "5",
                                                          },
                                                          model: {
                                                            value:
                                                              t.contracts.token
                                                                .stringifiedAbi,
                                                            callback: function (
                                                              e
                                                            ) {
                                                              t.$set(
                                                                t.contracts
                                                                  .token,
                                                                "stringifiedAbi",
                                                                e
                                                              );
                                                            },
                                                            expression:
                                                              "contracts.token.stringifiedAbi",
                                                          },
                                                        }),
                                                      ],
                                                      1
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
                                    ),
                                    t._v(" "),
                                    e(
                                      "b-col",
                                      { attrs: { lg: "4" } },
                                      [
                                        e(
                                          "b-card",
                                          {
                                            staticClass: "mt-3",
                                            attrs: {
                                              "no-body": "",
                                              "bg-variant": "light",
                                              header: "Token Features",
                                              "header-bg-variant": "dark",
                                              "header-text-variant": "white",
                                            },
                                          },
                                          [
                                            e(
                                              "b-list-group",
                                              { attrs: { flush: "" } },
                                              [
                                                e(
                                                  "b-list-group-item",
                                                  {
                                                    staticClass:
                                                      "d-flex justify-content-between align-items-center",
                                                  },
                                                  [
                                                    e("div", [
                                                      t._v(
                                                        "\n                                        BEP20 Compliant"
                                                      ),
                                                      e("br"),
                                                      t._v(" "),
                                                      e(
                                                        "small",
                                                        {
                                                          staticClass:
                                                            "text-muted",
                                                        },
                                                        [
                                                          t._v(
                                                            "\n                                            Your Token will be compliant with the BEP20 Standard.\n                                        "
                                                          ),
                                                        ]
                                                      ),
                                                    ]),
                                                    t._v(" "),
                                                    e("ui--checkmark", {
                                                      attrs: {
                                                        value: t.token.standard,
                                                      },
                                                    }),
                                                  ],
                                                  1
                                                ),
                                                t._v(" "),
                                                e(
                                                  "b-list-group-item",
                                                  {
                                                    staticClass:
                                                      "d-flex justify-content-between align-items-center",
                                                  },
                                                  [
                                                    e("div", [
                                                      t._v(
                                                        "\n                                        Verified Source Code"
                                                      ),
                                                      e("br"),
                                                      t._v(" "),
                                                      e(
                                                        "small",
                                                        {
                                                          staticClass:
                                                            "text-muted",
                                                        },
                                                        [
                                                          t._v(
                                                            "\n                                            Your Token Source Code will be automatically verified on BscScan.\n                                        "
                                                          ),
                                                        ]
                                                      ),
                                                    ]),
                                                    t._v(" "),
                                                    e("ui--checkmark", {
                                                      attrs: {
                                                        value: t.token.verified,
                                                      },
                                                    }),
                                                  ],
                                                  1
                                                ),
                                                t._v(" "),
                                                e(
                                                  "b-list-group-item",
                                                  {
                                                    staticClass:
                                                      "d-flex justify-content-between align-items-center",
                                                  },
                                                  [
                                                    e("div", [
                                                      t._v(
                                                        "\n                                        Detailed"
                                                      ),
                                                      e("br"),
                                                      t._v(" "),
                                                      e(
                                                        "small",
                                                        {
                                                          staticClass:
                                                            "text-muted",
                                                        },
                                                        [
                                                          t._v(
                                                            "\n                                            Your Token will have name, symbol and decimal amount.\n                                        "
                                                          ),
                                                        ]
                                                      ),
                                                    ]),
                                                    t._v(" "),
                                                    e("ui--checkmark", {
                                                      attrs: {
                                                        value: t.token.detailed,
                                                      },
                                                    }),
                                                  ],
                                                  1
                                                ),
                                                t._v(" "),
                                                e(
                                                  "b-list-group-item",
                                                  {
                                                    staticClass:
                                                      "d-flex justify-content-between align-items-center",
                                                  },
                                                  [
                                                    e("div", [
                                                      t._v(
                                                        "\n                                        Customizable Decimals"
                                                      ),
                                                      e("br"),
                                                      t._v(" "),
                                                      e(
                                                        "small",
                                                        {
                                                          staticClass:
                                                            "text-muted",
                                                        },
                                                        [
                                                          t._v(
                                                            "\n                                            You can customize the decimal amount. 18 otherwise.\n                                        "
                                                          ),
                                                        ]
                                                      ),
                                                    ]),
                                                    t._v(" "),
                                                    e("ui--checkmark", {
                                                      attrs: {
                                                        value:
                                                          t.token
                                                            .customizeDecimals,
                                                      },
                                                    }),
                                                  ],
                                                  1
                                                ),
                                                t._v(" "),
                                                e(
                                                  "b-list-group-item",
                                                  {
                                                    staticClass:
                                                      "d-flex justify-content-between align-items-center",
                                                  },
                                                  [
                                                    e("div", [
                                                      t._v(
                                                        "\n                                        Remove Copyright"
                                                      ),
                                                      e("br"),
                                                      t._v(" "),
                                                      e(
                                                        "small",
                                                        {
                                                          staticClass:
                                                            "text-muted",
                                                        },
                                                        [
                                                          t._v(
                                                            "\n                                            Remove the link pointing to this page from your contract.\n                                        "
                                                          ),
                                                        ]
                                                      ),
                                                    ]),
                                                    t._v(" "),
                                                    e("ui--checkmark", {
                                                      attrs: {
                                                        value:
                                                          t.token
                                                            .removeCopyright,
                                                      },
                                                    }),
                                                  ],
                                                  1
                                                ),
                                                t._v(" "),
                                                e(
                                                  "b-list-group-item",
                                                  {
                                                    staticClass:
                                                      "d-flex justify-content-between align-items-center",
                                                  },
                                                  [
                                                    e("div", [
                                                      t._v(
                                                        "\n                                        Supply Type"
                                                      ),
                                                      e("br"),
                                                      t._v(" "),
                                                      e(
                                                        "small",
                                                        {
                                                          staticClass:
                                                            "text-muted",
                                                        },
                                                        [
                                                          t._v(
                                                            "\n                                            Choose between 100k, Fixed, Unlimited or Capped.\n                                        "
                                                          ),
                                                        ]
                                                      ),
                                                    ]),
                                                    t._v(" "),
                                                    e(
                                                      "b-badge",
                                                      {
                                                        attrs: {
                                                          variant:
                                                            "Capped" ===
                                                            t.token.supplyType
                                                              ? "success"
                                                              : "Unlimited" ===
                                                                t.token
                                                                  .supplyType
                                                              ? "info"
                                                              : "Fixed" ===
                                                                t.token
                                                                  .supplyType
                                                              ? "warning"
                                                              : "danger",
                                                        },
                                                      },
                                                      [
                                                        t._v(
                                                          "\n                                        " +
                                                            t._s(
                                                              t.token.supplyType
                                                            ) +
                                                            "\n                                    "
                                                        ),
                                                      ]
                                                    ),
                                                  ],
                                                  1
                                                ),
                                                t._v(" "),
                                                e(
                                                  "b-list-group-item",
                                                  {
                                                    staticClass:
                                                      "d-flex justify-content-between align-items-center",
                                                  },
                                                  [
                                                    e("div", [
                                                      t._v(
                                                        "\n                                        Accesss Type"
                                                      ),
                                                      e("br"),
                                                      t._v(" "),
                                                      e(
                                                        "small",
                                                        {
                                                          staticClass:
                                                            "text-muted",
                                                        },
                                                        [
                                                          t._v(
                                                            "\n                                            Choose between None, Ownable or Role Based.\n                                        "
                                                          ),
                                                        ]
                                                      ),
                                                    ]),
                                                    t._v(" "),
                                                    e(
                                                      "b-badge",
                                                      {
                                                        attrs: {
                                                          variant:
                                                            "Role Based" ===
                                                            t.token.accessType
                                                              ? "success"
                                                              : "Ownable" ===
                                                                t.token
                                                                  .accessType
                                                              ? "info"
                                                              : "warning",
                                                        },
                                                      },
                                                      [
                                                        t._v(
                                                          "\n                                        " +
                                                            t._s(
                                                              t.token.accessType
                                                            ) +
                                                            "\n                                    "
                                                        ),
                                                      ]
                                                    ),
                                                  ],
                                                  1
                                                ),
                                                t._v(" "),
                                                e(
                                                  "b-list-group-item",
                                                  {
                                                    staticClass:
                                                      "d-flex justify-content-between align-items-center",
                                                  },
                                                  [
                                                    e("div", [
                                                      t._v(
                                                        "\n                                        Burnable"
                                                      ),
                                                      e("br"),
                                                      t._v(" "),
                                                      e(
                                                        "small",
                                                        {
                                                          staticClass:
                                                            "text-muted",
                                                        },
                                                        [
                                                          t._v(
                                                            "\n                                            Your Token can be burnt.\n                                        "
                                                          ),
                                                        ]
                                                      ),
                                                    ]),
                                                    t._v(" "),
                                                    e("ui--checkmark", {
                                                      attrs: {
                                                        value: t.token.burnable,
                                                      },
                                                    }),
                                                  ],
                                                  1
                                                ),
                                                t._v(" "),
                                                e(
                                                  "b-list-group-item",
                                                  {
                                                    staticClass:
                                                      "d-flex justify-content-between align-items-center",
                                                  },
                                                  [
                                                    e("div", [
                                                      t._v(
                                                        "\n                                        Mintable"
                                                      ),
                                                      e("br"),
                                                      t._v(" "),
                                                      e(
                                                        "small",
                                                        {
                                                          staticClass:
                                                            "text-muted",
                                                        },
                                                        [
                                                          t._v(
                                                            "\n                                            You will be able to generate tokens by minting them.\n                                        "
                                                          ),
                                                        ]
                                                      ),
                                                    ]),
                                                    t._v(" "),
                                                    e("ui--checkmark", {
                                                      attrs: {
                                                        value: t.token.mintable,
                                                      },
                                                    }),
                                                  ],
                                                  1
                                                ),
                                                t._v(" "),
                                                e(
                                                  "b-list-group-item",
                                                  {
                                                    staticClass:
                                                      "d-flex justify-content-between align-items-center",
                                                  },
                                                  [
                                                    e("div", [
                                                      t._v(
                                                        "\n                                        Operable"
                                                      ),
                                                      e("br"),
                                                      t._v(" "),
                                                      e(
                                                        "small",
                                                        {
                                                          staticClass:
                                                            "text-muted",
                                                        },
                                                        [
                                                          t._v(
                                                            "\n                                            The Operable Token is a BEP20 compatible Token that can make a callback on\n                                            the receiver contract. Operable Token is derived by ERC1363.\n                                        "
                                                          ),
                                                        ]
                                                      ),
                                                    ]),
                                                    t._v(" "),
                                                    e("ui--checkmark", {
                                                      attrs: {
                                                        value: t.token.operable,
                                                      },
                                                    }),
                                                  ],
                                                  1
                                                ),
                                                t._v(" "),
                                                e(
                                                  "b-list-group-item",
                                                  {
                                                    staticClass:
                                                      "d-flex justify-content-between align-items-center",
                                                  },
                                                  [
                                                    e("div", [
                                                      t._v(
                                                        "\n                                        Token Recover"
                                                      ),
                                                      e("br"),
                                                      t._v(" "),
                                                      e(
                                                        "small",
                                                        {
                                                          staticClass:
                                                            "text-muted",
                                                        },
                                                        [
                                                          t._v(
                                                            "\n                                            It allows the contract owner to recover any BEP20 token sent into the\n                                            contract for error.\n                                        "
                                                          ),
                                                        ]
                                                      ),
                                                    ]),
                                                    t._v(" "),
                                                    e("ui--checkmark", {
                                                      attrs: {
                                                        value:
                                                          t.token.tokenRecover,
                                                      },
                                                    }),
                                                  ],
                                                  1
                                                ),
                                                t._v(" "),
                                                e(
                                                  "b-list-group-item",
                                                  {
                                                    staticClass:
                                                      "justify-content-between align-items-center text-center py-3",
                                                    attrs: {
                                                      variant: "warning",
                                                      to: {
                                                        path: "/create-token/",
                                                        query: {
                                                          tokenType:
                                                            t.token.name,
                                                        },
                                                      },
                                                    },
                                                  },
                                                  [
                                                    t._v(
                                                      "\n                                    Create\n                                "
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
                                    ),
                                    t._v(" "),
                                    e(
                                      "b-col",
                                      { attrs: { lg: "12" } },
                                      [
                                        e(
                                          "b-card",
                                          {
                                            staticClass: "mt-3",
                                            attrs: {
                                              header: "Methods",
                                              "header-bg-variant": "dark",
                                              "header-text-variant": "white",
                                            },
                                          },
                                          t._l(
                                            t.contracts.token.abi,
                                            function (a, n) {
                                              return a.name
                                                ? e(
                                                    "b-card",
                                                    {
                                                      key: n,
                                                      staticClass: "mt-4",
                                                      attrs: {
                                                        "no-body": "",
                                                        "bg-variant": "light",
                                                      },
                                                    },
                                                    [
                                                      e("b-card-header", [
                                                        e(
                                                          "a",
                                                          {
                                                            directives: [
                                                              {
                                                                name: "b-toggle",
                                                                rawName:
                                                                  "v-b-toggle",
                                                              },
                                                            ],
                                                            staticClass:
                                                              "stretched-link text-reset text-decoration-none",
                                                            attrs: {
                                                              href:
                                                                "#method-" + n,
                                                            },
                                                            on: {
                                                              click: function (
                                                                t
                                                              ) {
                                                                t.preventDefault();
                                                              },
                                                            },
                                                          },
                                                          [
                                                            t._v(
                                                              "\n                                        " +
                                                                t._s(a.name) +
                                                                "\n                                    "
                                                            ),
                                                          ]
                                                        ),
                                                      ]),
                                                      t._v(" "),
                                                      e(
                                                        "b-collapse",
                                                        {
                                                          staticClass: "p-4",
                                                          attrs: {
                                                            id: "method-" + n,
                                                          },
                                                        },
                                                        [
                                                          e(
                                                            "b-card-sub-title",
                                                            [
                                                              t._v(
                                                                "\n                                        Type: " +
                                                                  t._s(a.type) +
                                                                  "\n                                    "
                                                              ),
                                                            ]
                                                          ),
                                                          t._v(" "),
                                                          a.stateMutability
                                                            ? e("b-card-text", [
                                                                t._v(
                                                                  "\n                                        State Mutability: " +
                                                                    t._s(
                                                                      a.stateMutability
                                                                    ) +
                                                                    "\n                                    "
                                                                ),
                                                              ])
                                                            : t._e(),
                                                          t._v(" "),
                                                          a.inputs &&
                                                          a.inputs.length > 0
                                                            ? e("b-card-text", [
                                                                e("p", [
                                                                  t._v(
                                                                    "Inputs:"
                                                                  ),
                                                                ]),
                                                                t._v(" "),
                                                                e(
                                                                  "ul",
                                                                  t._l(
                                                                    a.inputs,
                                                                    function (
                                                                      a,
                                                                      n
                                                                    ) {
                                                                      return e(
                                                                        "li",
                                                                        {
                                                                          key: n,
                                                                        },
                                                                        [
                                                                          e(
                                                                            "b",
                                                                            [
                                                                              t._v(
                                                                                t._s(
                                                                                  a.type
                                                                                )
                                                                              ),
                                                                            ]
                                                                          ),
                                                                          t._v(
                                                                            " " +
                                                                              t._s(
                                                                                a.name
                                                                              ) +
                                                                              "\n                                            "
                                                                          ),
                                                                        ]
                                                                      );
                                                                    }
                                                                  ),
                                                                  0
                                                                ),
                                                              ])
                                                            : t._e(),
                                                          t._v(" "),
                                                          a.outputs &&
                                                          a.outputs.length > 0
                                                            ? e("b-card-text", [
                                                                e("p", [
                                                                  t._v(
                                                                    "Outputs:"
                                                                  ),
                                                                ]),
                                                                t._v(" "),
                                                                e(
                                                                  "ul",
                                                                  t._l(
                                                                    a.outputs,
                                                                    function (
                                                                      a,
                                                                      n
                                                                    ) {
                                                                      return e(
                                                                        "li",
                                                                        {
                                                                          key: n,
                                                                        },
                                                                        [
                                                                          e(
                                                                            "b",
                                                                            [
                                                                              t._v(
                                                                                t._s(
                                                                                  a.type
                                                                                )
                                                                              ),
                                                                            ]
                                                                          ),
                                                                          t._v(
                                                                            " " +
                                                                              t._s(
                                                                                a.name
                                                                              ) +
                                                                              "\n                                            "
                                                                          ),
                                                                        ]
                                                                      );
                                                                    }
                                                                  ),
                                                                  0
                                                                ),
                                                              ])
                                                            : t._e(),
                                                        ],
                                                        1
                                                      ),
                                                    ],
                                                    1
                                                  )
                                                : t._e();
                                            }
                                          ),
                                          1
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
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
      e.default = o.exports;
    },
  },
]);
