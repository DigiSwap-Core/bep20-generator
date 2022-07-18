(window.webpackJsonp = window.webpackJsonp || []).push([
  [10],
  {
    259: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = { name: "Faq" },
        o = a(15),
        r = Object(o.a)(
          n,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              {
                staticClass: "faq-table",
                attrs: {
                  itemscope: "",
                  itemtype: "https://schema.org/FAQPage",
                },
              },
              [
                e(
                  "b-row",
                  [
                    e(
                      "b-col",
                      [
                        e(
                          "b-card",
                          {
                            staticClass: "mb-4",
                            attrs: { "bg-variant": "light" },
                          },
                          [
                            e("h3", { staticClass: "font-weight-light" }, [
                              t._v("BEP20 Token Generator"),
                            ]),
                            t._v(" "),
                            e("p", { staticClass: "font-weight-light" }, [
                              t._v(
                                "\n                    Create your own BEP20 Smart Contract without coding. BEP20 Generator is the easiest and fastest way to create your own BEP20 token on the Binance Smart Chain network. No coding skills are required.\n                "
                              ),
                            ]),
                            t._v(" "),
                            e("hr", { staticClass: "my-4" }),
                            t._v(" "),
                            e("h6", { staticClass: "font-weight-light" }, [
                              t._v("The BEP20 Standard"),
                            ]),
                            t._v(" "),
                            e("p", { staticClass: "font-weight-light" }, [
                              t._v(
                                "\n                    BEP20 defines the implementation of APIs for token smart contracts. It is proposed by deriving\n                    the ERC20 protocol of Ethereum and provides the basic functionality to transfer tokens,\n                    allow tokens to be approved so they can be spent by another on-chain third party, and transfer\n                    between Binance Chain and Binance Smart Chain.\n                "
                              ),
                            ]),
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
                  [
                    e(
                      "b-col",
                      [
                        e(
                          "h5",
                          { staticClass: "font-weight-light text-white" },
                          [
                            e(
                              "a",
                              {
                                directives: [
                                  { name: "b-toggle", rawName: "v-b-toggle" },
                                ],
                                staticClass:
                                  "btn-block text-reset text-decoration-none",
                                attrs: { href: "#about-token-features" },
                                on: {
                                  click: function (t) {
                                    t.preventDefault();
                                  },
                                },
                              },
                              [
                                e("b-icon-caret-down-fill"),
                                t._v(" Token Features\n                "),
                              ],
                              1
                            ),
                          ]
                        ),
                        t._v(" "),
                        e(
                          "b-collapse",
                          {
                            staticClass: "mt-4",
                            attrs: {
                              id: "about-token-features",
                              visible: "",
                              accordion: "main-accordion",
                            },
                          },
                          [
                            e(
                              "div",
                              {
                                staticClass: "accordion mb-3",
                                attrs: { role: "tablist" },
                              },
                              [
                                e(
                                  "b-card",
                                  {
                                    attrs: {
                                      "no-body": "",
                                      "bg-variant": "light",
                                      itemscope: "",
                                      itemprop: "mainEntity",
                                      itemtype: "https://schema.org/Question",
                                    },
                                  },
                                  [
                                    e(
                                      "b-card-header",
                                      { attrs: { role: "tab" } },
                                      [
                                        e(
                                          "a",
                                          {
                                            directives: [
                                              {
                                                name: "b-toggle",
                                                rawName: "v-b-toggle",
                                              },
                                            ],
                                            staticClass:
                                              "btn-block text-reset text-decoration-none",
                                            attrs: {
                                              href: "#difference-between-fixed-capped",
                                            },
                                            on: {
                                              click: function (t) {
                                                t.preventDefault();
                                              },
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "name" } },
                                              [
                                                t._v(
                                                  "\n                                    What's the difference between 100k, Fixed, Capped and Unlimited Supply?\n                                "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    e(
                                      "b-collapse",
                                      {
                                        staticClass: "p-4",
                                        attrs: {
                                          id: "difference-between-fixed-capped",
                                          accordion: "features-accordion",
                                        },
                                      },
                                      [
                                        e(
                                          "b-card-text",
                                          {
                                            attrs: {
                                              itemscope: "",
                                              itemprop: "acceptedAnswer",
                                              itemtype:
                                                "https://schema.org/Answer",
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "text" } },
                                              [
                                                e("b", [t._v("100k")]),
                                                e("br"),
                                                t._v(
                                                  "\n                                    Your token supply will be 100.000.\n                                    The entire token supply will be generated during deploy and sent to Token Owner\n                                    wallet. You can't increase or reduce supply later."
                                                ),
                                                e("br"),
                                                e("br"),
                                                t._v(" "),
                                                e("b", [t._v("Fixed Supply")]),
                                                e("br"),
                                                t._v(
                                                  "\n                                    The entire token supply will be generated during deploy and sent to Token Owner\n                                    wallet. You can't increase or reduce supply later."
                                                ),
                                                e("br"),
                                                e("br"),
                                                t._v(" "),
                                                e("b", [t._v("Capped Supply")]),
                                                e("br"),
                                                t._v(
                                                  "\n                                    You can define an initial supply to sent to Token Owner's wallet. You can\n                                    increase or reduce supply later by minting or burning tokens (if allowed).\n                                    You won't be able to generate more tokens than the defined supply cap."
                                                ),
                                                e("br"),
                                                e("br"),
                                                t._v(" "),
                                                e("b", [
                                                  t._v("Unlimited Supply"),
                                                ]),
                                                e("br"),
                                                t._v(
                                                  "\n                                    You can define an initial supply to sent to Token Owner's wallet. You can\n                                    increase or reduce supply later by minting or burning tokens (if allowed).\n                                    You will be able to generate unlimited tokens without an upper limit.\n                                "
                                                ),
                                              ]
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
                                  "b-card",
                                  {
                                    attrs: {
                                      "no-body": "",
                                      "bg-variant": "light",
                                      itemscope: "",
                                      itemprop: "mainEntity",
                                      itemtype: "https://schema.org/Question",
                                    },
                                  },
                                  [
                                    e(
                                      "b-card-header",
                                      { attrs: { role: "tab" } },
                                      [
                                        e(
                                          "a",
                                          {
                                            directives: [
                                              {
                                                name: "b-toggle",
                                                rawName: "v-b-toggle",
                                              },
                                            ],
                                            staticClass:
                                              "btn-block text-reset text-decoration-none",
                                            attrs: {
                                              href: "#difference-between-access",
                                            },
                                            on: {
                                              click: function (t) {
                                                t.preventDefault();
                                              },
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "name" } },
                                              [
                                                t._v(
                                                  "\n                                    What's the difference between None, Ownable and Role Based Access?\n                                "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    e(
                                      "b-collapse",
                                      {
                                        staticClass: "p-4",
                                        attrs: {
                                          id: "difference-between-access",
                                          accordion: "features-accordion",
                                        },
                                      },
                                      [
                                        e(
                                          "b-card-text",
                                          {
                                            attrs: {
                                              itemscope: "",
                                              itemprop: "acceptedAnswer",
                                              itemtype:
                                                "https://schema.org/Answer",
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "text" } },
                                              [
                                                e("b", [t._v("None")]),
                                                e("br"),
                                                t._v(
                                                  "\n                                    Your Token doesn't need an access type because of there are not actions that\n                                    needs privileges."
                                                ),
                                                e("br"),
                                                e("br"),
                                                t._v(" "),
                                                e("b", [t._v("Ownable")]),
                                                e("br"),
                                                t._v(
                                                  "\n                                    Your Token will have an Owner. The account you use to deploy your Token will be\n                                    owner by default and will be able to mint new tokens or call the finish minting\n                                    function. You can transfer token ownership to addresses or Smart Contract.\n                                    "
                                                ),
                                                e("br"),
                                                e("br"),
                                                t._v(" "),
                                                e("b", [t._v("Role Based")]),
                                                e("br"),
                                                t._v(
                                                  '\n                                    Your Token will have Roles. Accounts with "MINTER" role will be able to mint new\n                                    tokens. Accounts with "ADMIN" role will be able to add or remove roles to\n                                    minters or other admins. The account you use to deploy your Token will be ADMIN\n                                    and MINTER by default. In addition your Token will have the Ownable behaviour\n                                    too.\n                                '
                                                ),
                                              ]
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
                                  "b-card",
                                  {
                                    attrs: {
                                      "no-body": "",
                                      "bg-variant": "light",
                                      itemscope: "",
                                      itemprop: "mainEntity",
                                      itemtype: "https://schema.org/Question",
                                    },
                                  },
                                  [
                                    e(
                                      "b-card-header",
                                      { attrs: { role: "tab" } },
                                      [
                                        e(
                                          "a",
                                          {
                                            directives: [
                                              {
                                                name: "b-toggle",
                                                rawName: "v-b-toggle",
                                              },
                                            ],
                                            staticClass:
                                              "btn-block text-reset text-decoration-none",
                                            attrs: {
                                              href: "#who-can-mint-burn",
                                            },
                                            on: {
                                              click: function (t) {
                                                t.preventDefault();
                                              },
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "name" } },
                                              [
                                                t._v(
                                                  "\n                                    Who can mint or burn tokens?\n                                "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    e(
                                      "b-collapse",
                                      {
                                        staticClass: "p-4",
                                        attrs: {
                                          id: "who-can-mint-burn",
                                          accordion: "features-accordion",
                                        },
                                      },
                                      [
                                        e(
                                          "b-card-text",
                                          {
                                            attrs: {
                                              itemscope: "",
                                              itemprop: "acceptedAnswer",
                                              itemtype:
                                                "https://schema.org/Answer",
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "text" } },
                                              [
                                                e("b", [t._v("Mint")]),
                                                e("br"),
                                                t._v(
                                                  "\n                                    It depends on your Token Access Type. If you choose Ownable Access only Token\n                                    Owner will be able to mint new tokens. If you choose Role Based Access only\n                                    addresses with MINTER role will be able to mint new tokens.\n                                    In both cases, if you choose a Capped supply you won't be able to mint more\n                                    tokens than the defined cap. By choosing Unlimited supply instead, you will be\n                                    able to generate unlimited tokens."
                                                ),
                                                e("br"),
                                                e("br"),
                                                t._v(" "),
                                                e("b", [t._v("Burn")]),
                                                e("br"),
                                                t._v(
                                                  "\n                                    Everyone will be able to burn tokens he held. A third party can burn tokens from\n                                    other addresses only after an approval. Nobody, not even the Token Owner,\n                                    will be able to burn tokens from other addresses without approval.\n                                "
                                                ),
                                              ]
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
                                  "b-card",
                                  {
                                    attrs: {
                                      "no-body": "",
                                      "bg-variant": "light",
                                      itemscope: "",
                                      itemprop: "mainEntity",
                                      itemtype: "https://schema.org/Question",
                                    },
                                  },
                                  [
                                    e(
                                      "b-card-header",
                                      { attrs: { role: "tab" } },
                                      [
                                        e(
                                          "a",
                                          {
                                            directives: [
                                              {
                                                name: "b-toggle",
                                                rawName: "v-b-toggle",
                                              },
                                            ],
                                            staticClass:
                                              "btn-block text-reset text-decoration-none",
                                            attrs: {
                                              href: "#what-is-operable",
                                            },
                                            on: {
                                              click: function (t) {
                                                t.preventDefault();
                                              },
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "name" } },
                                              [
                                                t._v(
                                                  "\n                                    What is Operable Token?\n                                "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    e(
                                      "b-collapse",
                                      {
                                        staticClass: "p-4",
                                        attrs: {
                                          id: "what-is-operable",
                                          accordion: "features-accordion",
                                        },
                                      },
                                      [
                                        e(
                                          "b-card-text",
                                          {
                                            attrs: {
                                              itemscope: "",
                                              itemprop: "acceptedAnswer",
                                              itemtype:
                                                "https://schema.org/Answer",
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "text" } },
                                              [
                                                t._v(
                                                  "\n                                    There is no way to execute code after a BEP-20 transfer or approval (i.e.\n                                    making a payment), so to make an action it is required to send another\n                                    transaction and pay GAS twice. Operable Token makes token payments easier and\n                                    working without the use of any other listener. It allows to make a callback\n                                    after a transfer or approval in a single transaction."
                                                ),
                                                e("br"),
                                                t._v(
                                                  "\n                                    There are many proposed uses of Ethereum Smart Contracts that can accept BEP-20\n                                    payments."
                                                ),
                                                e("br"),
                                                t._v(
                                                  "\n                                    Examples could be:\n                                    "
                                                ),
                                                e("ul", [
                                                  e("li", [
                                                    t._v(
                                                      "\n                                            to create a token payable crowdsale\n                                        "
                                                    ),
                                                  ]),
                                                  t._v(" "),
                                                  e("li", [
                                                    t._v(
                                                      "\n                                            selling services for tokens\n                                        "
                                                    ),
                                                  ]),
                                                  t._v(" "),
                                                  e("li", [
                                                    t._v(
                                                      "\n                                            paying invoices\n                                        "
                                                    ),
                                                  ]),
                                                  t._v(" "),
                                                  e("li", [
                                                    t._v(
                                                      "\n                                            making subscriptions\n                                        "
                                                    ),
                                                  ]),
                                                ]),
                                                t._v(
                                                  "\n                                    Operable Token is derived by ERC1363.\n                                "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                        t._v(" "),
                                        e(
                                          "b-link",
                                          {
                                            staticClass: "card-link",
                                            attrs: {
                                              href: "https://eips.ethereum.org/EIPS/eip-1363",
                                              target: "_blank",
                                            },
                                          },
                                          [
                                            t._v(
                                              "\n                                Discover ERC1363\n                            "
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
                                  "b-card",
                                  {
                                    attrs: {
                                      "no-body": "",
                                      "bg-variant": "light",
                                      itemscope: "",
                                      itemprop: "mainEntity",
                                      itemtype: "https://schema.org/Question",
                                    },
                                  },
                                  [
                                    e(
                                      "b-card-header",
                                      { attrs: { role: "tab" } },
                                      [
                                        e(
                                          "a",
                                          {
                                            directives: [
                                              {
                                                name: "b-toggle",
                                                rawName: "v-b-toggle",
                                              },
                                            ],
                                            staticClass:
                                              "btn-block text-reset text-decoration-none",
                                            attrs: {
                                              href: "#what-is-token-recover",
                                            },
                                            on: {
                                              click: function (t) {
                                                t.preventDefault();
                                              },
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "name" } },
                                              [
                                                t._v(
                                                  "\n                                    What is Token Recover?\n                                "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    e(
                                      "b-collapse",
                                      {
                                        staticClass: "p-4",
                                        attrs: {
                                          id: "what-is-token-recover",
                                          accordion: "features-accordion",
                                        },
                                      },
                                      [
                                        e(
                                          "b-card-text",
                                          {
                                            attrs: {
                                              itemscope: "",
                                              itemprop: "acceptedAnswer",
                                              itemtype:
                                                "https://schema.org/Answer",
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "text" } },
                                              [
                                                t._v(
                                                  "\n                                    There are lots of tokens lost forever into Smart Contracts. Each Ethereum\n                                    contract is a potential token trap for BEP20 tokens. They can't be recovered so\n                                    it means money losses for end users."
                                                ),
                                                e("br"),
                                                t._v(
                                                  "\n                                    TokenRecover allows the contract owner to recover any BEP20 token sent into the\n                                    contract for error.\n                                    This behaviour is derived by ERC20 Token Recover.\n                                "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                        t._v(" "),
                                        e(
                                          "b-link",
                                          {
                                            staticClass: "card-link",
                                            attrs: {
                                              href: "https://digiswap-core.github.io/eth-token-recover/",
                                              target: "_blank",
                                            },
                                          },
                                          [
                                            t._v(
                                              "\n                                Discover Token Recover\n                            "
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
                                  "b-card",
                                  {
                                    attrs: {
                                      "no-body": "",
                                      "bg-variant": "light",
                                      itemscope: "",
                                      itemprop: "mainEntity",
                                      itemtype: "https://schema.org/Question",
                                    },
                                  },
                                  [
                                    e(
                                      "b-card-header",
                                      { attrs: { role: "tab" } },
                                      [
                                        e(
                                          "a",
                                          {
                                            directives: [
                                              {
                                                name: "b-toggle",
                                                rawName: "v-b-toggle",
                                              },
                                            ],
                                            staticClass:
                                              "btn-block text-reset text-decoration-none",
                                            attrs: {
                                              href: "#will-copyright-be-an-issue",
                                            },
                                            on: {
                                              click: function (t) {
                                                t.preventDefault();
                                              },
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "name" } },
                                              [
                                                t._v(
                                                  "\n                                    Will be having BEP20 Generator Copyright an issue?\n                                "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    e(
                                      "b-collapse",
                                      {
                                        staticClass: "p-4",
                                        attrs: {
                                          id: "will-copyright-be-an-issue",
                                          accordion: "features-accordion",
                                        },
                                      },
                                      [
                                        e(
                                          "b-card-text",
                                          {
                                            attrs: {
                                              itemscope: "",
                                              itemprop: "acceptedAnswer",
                                              itemtype:
                                                "https://schema.org/Answer",
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "text" } },
                                              [
                                                t._v(
                                                  '\n                                    No. BEP20 Generator code is released under MIT License so, using TestERC20 for\n                                    FREE or SimpleBEP20, you will have a view method in your Smart Contract named\n                                    "generator" showing a link to this page.\n                                    You will also have a disclaimer in source code.\n                                    It is not an issue for you because of your Token will be fully compliant with\n                                    BEP20 definition.\n                                    You can remove it by choosing a token type with remove Copyright feature.\n                                '
                                                ),
                                              ]
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
                          ]
                        ),
                        t._v(" "),
                        e(
                          "h5",
                          { staticClass: "font-weight-light text-white" },
                          [
                            e(
                              "a",
                              {
                                directives: [
                                  { name: "b-toggle", rawName: "v-b-toggle" },
                                ],
                                staticClass:
                                  "btn-block text-reset text-decoration-none",
                                attrs: { href: "#about-token-behaviours" },
                                on: {
                                  click: function (t) {
                                    t.preventDefault();
                                  },
                                },
                              },
                              [
                                e("b-icon-caret-down-fill"),
                                t._v(" Token Behaviours\n                "),
                              ],
                              1
                            ),
                          ]
                        ),
                        t._v(" "),
                        e(
                          "b-collapse",
                          {
                            staticClass: "mt-4",
                            attrs: {
                              id: "about-token-behaviours",
                              accordion: "main-accordion",
                            },
                          },
                          [
                            e(
                              "div",
                              {
                                staticClass: "accordion mb-3",
                                attrs: { role: "tablist" },
                              },
                              [
                                e(
                                  "b-card",
                                  {
                                    attrs: {
                                      "no-body": "",
                                      "bg-variant": "light",
                                      itemscope: "",
                                      itemprop: "mainEntity",
                                      itemtype: "https://schema.org/Question",
                                    },
                                  },
                                  [
                                    e(
                                      "b-card-header",
                                      { attrs: { role: "tab" } },
                                      [
                                        e(
                                          "a",
                                          {
                                            directives: [
                                              {
                                                name: "b-toggle",
                                                rawName: "v-b-toggle",
                                              },
                                            ],
                                            staticClass:
                                              "btn-block text-reset text-decoration-none",
                                            attrs: {
                                              href: "#where-is-my-token-address",
                                            },
                                            on: {
                                              click: function (t) {
                                                t.preventDefault();
                                              },
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "name" } },
                                              [
                                                t._v(
                                                  "\n                                    Where is my Token address?\n                                "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    e(
                                      "b-collapse",
                                      {
                                        staticClass: "p-4",
                                        attrs: {
                                          id: "where-is-my-token-address",
                                          accordion: "bep20-accordion",
                                        },
                                      },
                                      [
                                        e(
                                          "b-card-text",
                                          {
                                            attrs: {
                                              itemscope: "",
                                              itemprop: "acceptedAnswer",
                                              itemtype:
                                                "https://schema.org/Answer",
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "text" } },
                                              [
                                                t._v(
                                                  "\n                                    Once you confirm your transaction you will receive transaction hash (first) and\n                                    Token address (when transaction is confirmed). If your transaction will take\n                                    some time to be confirmed due to network status, you can monitor it and your\n                                    Token will be visible in transaction page. Watch the above video tutorial for\n                                    details.\n                                "
                                                ),
                                              ]
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
                                  "b-card",
                                  {
                                    attrs: {
                                      "no-body": "",
                                      "bg-variant": "light",
                                      itemscope: "",
                                      itemprop: "mainEntity",
                                      itemtype: "https://schema.org/Question",
                                    },
                                  },
                                  [
                                    e(
                                      "b-card-header",
                                      { attrs: { role: "tab" } },
                                      [
                                        e(
                                          "a",
                                          {
                                            directives: [
                                              {
                                                name: "b-toggle",
                                                rawName: "v-b-toggle",
                                              },
                                            ],
                                            staticClass:
                                              "btn-block text-reset text-decoration-none",
                                            attrs: {
                                              href: "#who-will-be-token-owner",
                                            },
                                            on: {
                                              click: function (t) {
                                                t.preventDefault();
                                              },
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "name" } },
                                              [
                                                t._v(
                                                  "\n                                    Who will be Token Owner?\n                                "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    e(
                                      "b-collapse",
                                      {
                                        staticClass: "p-4",
                                        attrs: {
                                          id: "who-will-be-token-owner",
                                          accordion: "bep20-accordion",
                                        },
                                      },
                                      [
                                        e(
                                          "b-card-text",
                                          {
                                            attrs: {
                                              itemscope: "",
                                              itemprop: "acceptedAnswer",
                                              itemtype:
                                                "https://schema.org/Answer",
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "text" } },
                                              [
                                                t._v(
                                                  "\n                                    Once your Token will be deployed you (your MetaMask address) will be the only\n                                    owner.\n                                "
                                                ),
                                              ]
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
                                  "b-card",
                                  {
                                    attrs: {
                                      "no-body": "",
                                      "bg-variant": "light",
                                      itemscope: "",
                                      itemprop: "mainEntity",
                                      itemtype: "https://schema.org/Question",
                                    },
                                  },
                                  [
                                    e(
                                      "b-card-header",
                                      { attrs: { role: "tab" } },
                                      [
                                        e(
                                          "a",
                                          {
                                            directives: [
                                              {
                                                name: "b-toggle",
                                                rawName: "v-b-toggle",
                                              },
                                            ],
                                            staticClass:
                                              "btn-block text-reset text-decoration-none",
                                            attrs: {
                                              href: "#where-token-supply-will-go",
                                            },
                                            on: {
                                              click: function (t) {
                                                t.preventDefault();
                                              },
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "name" } },
                                              [
                                                t._v(
                                                  "\n                                    Where will token supply go after deploy?\n                                "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    e(
                                      "b-collapse",
                                      {
                                        staticClass: "p-4",
                                        attrs: {
                                          id: "where-token-supply-will-go",
                                          accordion: "bep20-accordion",
                                        },
                                      },
                                      [
                                        e(
                                          "b-card-text",
                                          {
                                            attrs: {
                                              itemscope: "",
                                              itemprop: "acceptedAnswer",
                                              itemtype:
                                                "https://schema.org/Answer",
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "text" } },
                                              [
                                                t._v(
                                                  "\n                                    The initial token supply will be held by the address used to deploy the token\n                                    (your MetaMask address). This address will be Token Owner and will be able to\n                                    generate new tokens (in case you selected a token type with Mintable behaviour).\n                                "
                                                ),
                                              ]
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
                                  "b-card",
                                  {
                                    attrs: {
                                      "no-body": "",
                                      "bg-variant": "light",
                                      itemscope: "",
                                      itemprop: "mainEntity",
                                      itemtype: "https://schema.org/Question",
                                    },
                                  },
                                  [
                                    e(
                                      "b-card-header",
                                      { attrs: { role: "tab" } },
                                      [
                                        e(
                                          "a",
                                          {
                                            directives: [
                                              {
                                                name: "b-toggle",
                                                rawName: "v-b-toggle",
                                              },
                                            ],
                                            staticClass:
                                              "btn-block text-reset text-decoration-none",
                                            attrs: {
                                              href: "#which-wallet-support",
                                            },
                                            on: {
                                              click: function (t) {
                                                t.preventDefault();
                                              },
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "name" } },
                                              [
                                                t._v(
                                                  "\n                                    Which wallet will my Token be supported by?\n                                "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    e(
                                      "b-collapse",
                                      {
                                        staticClass: "p-4",
                                        attrs: {
                                          id: "which-wallet-support",
                                          accordion: "bep20-accordion",
                                        },
                                      },
                                      [
                                        e(
                                          "b-card-text",
                                          {
                                            attrs: {
                                              itemscope: "",
                                              itemprop: "acceptedAnswer",
                                              itemtype:
                                                "https://schema.org/Answer",
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "text" } },
                                              [
                                                t._v(
                                                  "\n                                    Your Token will be a fully BEP20 compatible token. Any BEP20 wallet will support\n                                    your Token.\n                                "
                                                ),
                                              ]
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
                                  "b-card",
                                  {
                                    attrs: {
                                      "no-body": "",
                                      "bg-variant": "light",
                                      itemscope: "",
                                      itemprop: "mainEntity",
                                      itemtype: "https://schema.org/Question",
                                    },
                                  },
                                  [
                                    e(
                                      "b-card-header",
                                      { attrs: { role: "tab" } },
                                      [
                                        e(
                                          "a",
                                          {
                                            directives: [
                                              {
                                                name: "b-toggle",
                                                rawName: "v-b-toggle",
                                              },
                                            ],
                                            staticClass:
                                              "btn-block text-reset text-decoration-none",
                                            attrs: {
                                              href: "#how-to-mint-new-tokens",
                                            },
                                            on: {
                                              click: function (t) {
                                                t.preventDefault();
                                              },
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "name" } },
                                              [
                                                t._v(
                                                  "\n                                    How to mint new tokens?\n                                "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    e(
                                      "b-collapse",
                                      {
                                        staticClass: "p-4",
                                        attrs: {
                                          id: "how-to-mint-new-tokens",
                                          accordion: "bep20-accordion",
                                        },
                                      },
                                      [
                                        e(
                                          "b-card-text",
                                          {
                                            attrs: {
                                              itemscope: "",
                                              itemprop: "acceptedAnswer",
                                              itemtype:
                                                "https://schema.org/Answer",
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "text" } },
                                              [
                                                t._v(
                                                  '\n                                    To generate new tokens you must use the "mint" function using token owner\n                                    wallet. You can doing this by using the Contract/Write tab on your BscScan\n                                    token page.'
                                                ),
                                                e("br"),
                                                t._v(" "),
                                                e("small", [
                                                  t._v(
                                                    "\n                                        Note: remember that your tokens has a number of decimals (usually 18), so\n                                        you must use the entire number with decimals."
                                                  ),
                                                  e("br"),
                                                  t._v(
                                                    "I.e. if you need to\n                                        generate 500 additional tokens, call the mint function by inserting\n                                        500000000000000000000.\n                                    "
                                                  ),
                                                ]),
                                              ]
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
                                  "b-card",
                                  {
                                    attrs: {
                                      "no-body": "",
                                      "bg-variant": "light",
                                      itemscope: "",
                                      itemprop: "mainEntity",
                                      itemtype: "https://schema.org/Question",
                                    },
                                  },
                                  [
                                    e(
                                      "b-card-header",
                                      { attrs: { role: "tab" } },
                                      [
                                        e(
                                          "a",
                                          {
                                            directives: [
                                              {
                                                name: "b-toggle",
                                                rawName: "v-b-toggle",
                                              },
                                            ],
                                            staticClass:
                                              "btn-block text-reset text-decoration-none",
                                            attrs: {
                                              href: "#will-my-token-be-verified",
                                            },
                                            on: {
                                              click: function (t) {
                                                t.preventDefault();
                                              },
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "name" } },
                                              [
                                                t._v(
                                                  "\n                                    Will my Token Source Code be verified on BscScan?\n                                "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    e(
                                      "b-collapse",
                                      {
                                        staticClass: "p-4",
                                        attrs: {
                                          id: "will-my-token-be-verified",
                                          accordion: "bep20-accordion",
                                        },
                                      },
                                      [
                                        e(
                                          "b-card-text",
                                          {
                                            attrs: {
                                              itemscope: "",
                                              itemprop: "acceptedAnswer",
                                              itemtype:
                                                "https://schema.org/Answer",
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "text" } },
                                              [
                                                t._v(
                                                  '\n                                    Yes, your token source code will be already verified by "Similar Match".\n                                    It means that your source code is similar to other tokens deployed using this\n                                    generator.\n                                '
                                                ),
                                              ]
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
                                  "b-card",
                                  {
                                    attrs: {
                                      "no-body": "",
                                      "bg-variant": "light",
                                      itemscope: "",
                                      itemprop: "mainEntity",
                                      itemtype: "https://schema.org/Question",
                                    },
                                  },
                                  [
                                    e(
                                      "b-card-header",
                                      { attrs: { role: "tab" } },
                                      [
                                        e(
                                          "a",
                                          {
                                            directives: [
                                              {
                                                name: "b-toggle",
                                                rawName: "v-b-toggle",
                                              },
                                            ],
                                            staticClass:
                                              "btn-block text-reset text-decoration-none",
                                            attrs: { href: "#can-i-add-logo" },
                                            on: {
                                              click: function (t) {
                                                t.preventDefault();
                                              },
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "name" } },
                                              [
                                                t._v(
                                                  "\n                                    Can I add logo and information to my token on BscScan?\n                                "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    e(
                                      "b-collapse",
                                      {
                                        staticClass: "p-4",
                                        attrs: {
                                          id: "can-i-add-logo",
                                          accordion: "bep20-accordion",
                                        },
                                      },
                                      [
                                        e(
                                          "b-card-text",
                                          {
                                            attrs: {
                                              itemscope: "",
                                              itemprop: "acceptedAnswer",
                                              itemtype:
                                                "https://schema.org/Answer",
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "text" } },
                                              [
                                                t._v(
                                                  "\n                                    Once your token will be deployed you will be able to add information on BscScan\n                                    using their procedure.\n                                "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                        t._v(" "),
                                        e(
                                          "b-link",
                                          {
                                            staticClass: "card-link",
                                            attrs: {
                                              href: "https://bscscan.freshdesk.com/support/solutions/articles/67000221190-how-to-update-token-information-on-bscscan-",
                                              target: "_blank",
                                            },
                                          },
                                          [
                                            t._v(
                                              "\n                                Update Token Information\n                            "
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
                          ]
                        ),
                        t._v(" "),
                        e(
                          "h5",
                          { staticClass: "font-weight-light text-white" },
                          [
                            e(
                              "a",
                              {
                                directives: [
                                  { name: "b-toggle", rawName: "v-b-toggle" },
                                ],
                                staticClass:
                                  "btn-block text-reset text-decoration-none",
                                attrs: { href: "#about-bsc" },
                                on: {
                                  click: function (t) {
                                    t.preventDefault();
                                  },
                                },
                              },
                              [
                                e("b-icon-caret-down-fill"),
                                t._v(
                                  " Binance Smart Chain and Ecosystem\n                "
                                ),
                              ],
                              1
                            ),
                          ]
                        ),
                        t._v(" "),
                        e(
                          "b-collapse",
                          {
                            staticClass: "mt-4",
                            attrs: {
                              id: "about-bsc",
                              accordion: "main-accordion",
                            },
                          },
                          [
                            e(
                              "div",
                              {
                                staticClass: "accordion mb-3",
                                attrs: { role: "tablist" },
                              },
                              [
                                e(
                                  "b-card",
                                  {
                                    attrs: {
                                      "no-body": "",
                                      "bg-variant": "light",
                                      itemscope: "",
                                      itemprop: "mainEntity",
                                      itemtype: "https://schema.org/Question",
                                    },
                                  },
                                  [
                                    e(
                                      "b-card-header",
                                      { attrs: { role: "tab" } },
                                      [
                                        e(
                                          "a",
                                          {
                                            directives: [
                                              {
                                                name: "b-toggle",
                                                rawName: "v-b-toggle",
                                              },
                                            ],
                                            staticClass:
                                              "btn-block text-reset text-decoration-none",
                                            attrs: { href: "#what-is-bsc" },
                                            on: {
                                              click: function (t) {
                                                t.preventDefault();
                                              },
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "name" } },
                                              [
                                                t._v(
                                                  "\n                                    What is Binance Smart Chain?\n                                "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    e(
                                      "b-collapse",
                                      {
                                        staticClass: "p-4",
                                        attrs: {
                                          id: "what-is-bsc",
                                          accordion: "bsc-accordion",
                                        },
                                      },
                                      [
                                        e(
                                          "b-card-text",
                                          {
                                            attrs: {
                                              itemscope: "",
                                              itemprop: "acceptedAnswer",
                                              itemtype:
                                                "https://schema.org/Answer",
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "text" } },
                                              [
                                                t._v(
                                                  "\n                                    Binance Chain was launched by Binance in April 2019. Its primary focus is to\n                                    facilitate fast, decentralized (or non-custodial) trading."
                                                ),
                                                e("br"),
                                                t._v(
                                                  "\n                                    Binance Smart Chain (BSC) is best described as a blockchain that runs in\n                                    parallel to the Binance Chain. Unlike Binance Chain, BSC boasts smart contract\n                                    functionality and compatibility with the Ethereum Virtual Machine (EVM).\n                                    The design goal here was to leave the high throughput of Binance Chain intact\n                                    while introducing smart contracts into its ecosystem.\n                                "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                        t._v(" "),
                                        e(
                                          "b-link",
                                          {
                                            staticClass: "card-link",
                                            attrs: {
                                              href: "https://docs.binance.org/smart-chain/guides/bsc-intro.html",
                                              target: "_blank",
                                            },
                                          },
                                          [
                                            t._v(
                                              "\n                                BSC official website\n                            "
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
                                  "b-card",
                                  {
                                    attrs: {
                                      "no-body": "",
                                      "bg-variant": "light",
                                      itemscope: "",
                                      itemprop: "mainEntity",
                                      itemtype: "https://schema.org/Question",
                                    },
                                  },
                                  [
                                    e(
                                      "b-card-header",
                                      { attrs: { role: "tab" } },
                                      [
                                        e(
                                          "a",
                                          {
                                            directives: [
                                              {
                                                name: "b-toggle",
                                                rawName: "v-b-toggle",
                                              },
                                            ],
                                            staticClass:
                                              "btn-block text-reset text-decoration-none",
                                            attrs: { href: "#explore-bsc" },
                                            on: {
                                              click: function (t) {
                                                t.preventDefault();
                                              },
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "name" } },
                                              [
                                                t._v(
                                                  "\n                                    How to explore the BSC blockchain?\n                                "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    e(
                                      "b-collapse",
                                      {
                                        staticClass: "p-4",
                                        attrs: {
                                          id: "explore-bsc",
                                          accordion: "bsc-accordion",
                                        },
                                      },
                                      [
                                        e(
                                          "b-card-text",
                                          {
                                            attrs: {
                                              itemscope: "",
                                              itemprop: "acceptedAnswer",
                                              itemtype:
                                                "https://schema.org/Answer",
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "text" } },
                                              [
                                                t._v(
                                                  "\n                                    A Block Explorer is basically a search engine that allows users to easily\n                                    lookup, confirm and validate transactions that have taken place on the Binance\n                                    Smart Chain.\n                                "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                        t._v(" "),
                                        e(
                                          "b-link",
                                          {
                                            staticClass: "card-link",
                                            attrs: {
                                              href: "https://bscscan.com",
                                              target: "_blank",
                                            },
                                          },
                                          [
                                            t._v(
                                              "\n                                BscScan\n                            "
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
                                  "b-card",
                                  {
                                    attrs: {
                                      "no-body": "",
                                      "bg-variant": "light",
                                      itemscope: "",
                                      itemprop: "mainEntity",
                                      itemtype: "https://schema.org/Question",
                                    },
                                  },
                                  [
                                    e(
                                      "b-card-header",
                                      { attrs: { role: "tab" } },
                                      [
                                        e(
                                          "a",
                                          {
                                            directives: [
                                              {
                                                name: "b-toggle",
                                                rawName: "v-b-toggle",
                                              },
                                            ],
                                            staticClass:
                                              "btn-block text-reset text-decoration-none",
                                            attrs: { href: "#what-is-a-dapp" },
                                            on: {
                                              click: function (t) {
                                                t.preventDefault();
                                              },
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "name" } },
                                              [
                                                t._v(
                                                  "\n                                    What is a DApp?\n                                "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    e(
                                      "b-collapse",
                                      {
                                        staticClass: "p-4",
                                        attrs: {
                                          id: "what-is-a-dapp",
                                          accordion: "bsc-accordion",
                                        },
                                      },
                                      [
                                        e(
                                          "b-card-text",
                                          {
                                            attrs: {
                                              itemscope: "",
                                              itemprop: "acceptedAnswer",
                                              itemtype:
                                                "https://schema.org/Answer",
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "text" } },
                                              [
                                                t._v(
                                                  "\n                                    DApp is an abbreviated form for decentralized application."
                                                ),
                                                e("br"),
                                                t._v(
                                                  "\n                                    A DApp has its backend code running on a decentralized peer-to-peer network.\n                                    Contrast this with an app where the backend code is running on centralized\n                                    servers."
                                                ),
                                                e("br"),
                                                t._v(
                                                  "\n                                    A DApp can have frontend code and user interfaces written in any language (just\n                                    like an app) that can make calls to its backend. Furthermore, its frontend can\n                                    be hosted on decentralized storage such as Swarm or IPFS."
                                                ),
                                                e("br"),
                                                t._v(
                                                  "\n                                    For an application to be considered a Dapp (pronounced Dee-app, similar to\n                                    Email) it must meet the following criteria:\n                                    "
                                                ),
                                                e("ul", [
                                                  e("li", [
                                                    t._v(
                                                      "\n                                            The application must be completely open-source, it must operate\n                                            autonomously, and with no entity controlling the majority of its tokens.\n                                            The application may adapt its protocol in response to proposed\n                                            improvements and market feedback but all changes must be decided by\n                                            consensus of its users.\n                                        "
                                                    ),
                                                  ]),
                                                  t._v(" "),
                                                  e("li", [
                                                    t._v(
                                                      "\n                                            The application's data and records of operation must be\n                                            cryptographically stored in a public, decentralized blockchain in order\n                                            to avoid any central points of failure.\n                                        "
                                                    ),
                                                  ]),
                                                  t._v(" "),
                                                  e("li", [
                                                    t._v(
                                                      "\n                                            The application must use a cryptographic token (bitcoin or a token\n                                            native to its system) which is necessary for access to the application\n                                            and any contribution of value from (miners / farmers) should be rewarded\n                                            in the application’s tokens.\n                                        "
                                                    ),
                                                  ]),
                                                  t._v(" "),
                                                  e("li", [
                                                    t._v(
                                                      "\n                                            The application must generate tokens according to a standard\n                                            crytptographic algorithm acting as a proof of the value nodes are\n                                            contributing to the application (Bitcoin uses the Proof of Work\n                                            Algorithm).\n                                        "
                                                    ),
                                                  ]),
                                                ]),
                                              ]
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
                                  "b-card",
                                  {
                                    attrs: {
                                      "no-body": "",
                                      "bg-variant": "light",
                                      itemscope: "",
                                      itemprop: "mainEntity",
                                      itemtype: "https://schema.org/Question",
                                    },
                                  },
                                  [
                                    e(
                                      "b-card-header",
                                      { attrs: { role: "tab" } },
                                      [
                                        e(
                                          "a",
                                          {
                                            directives: [
                                              {
                                                name: "b-toggle",
                                                rawName: "v-b-toggle",
                                              },
                                            ],
                                            staticClass:
                                              "btn-block text-reset text-decoration-none",
                                            attrs: {
                                              href: "#what-is-a-bep20-token",
                                            },
                                            on: {
                                              click: function (t) {
                                                t.preventDefault();
                                              },
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "name" } },
                                              [
                                                t._v(
                                                  "\n                                    What is a BEP20 token?\n                                "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    e(
                                      "b-collapse",
                                      {
                                        staticClass: "p-4",
                                        attrs: {
                                          id: "what-is-a-bep20-token",
                                          accordion: "bsc-accordion",
                                        },
                                      },
                                      [
                                        e(
                                          "b-card-text",
                                          {
                                            attrs: {
                                              itemscope: "",
                                              itemprop: "acceptedAnswer",
                                              itemtype:
                                                "https://schema.org/Answer",
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "text" } },
                                              [
                                                t._v(
                                                  "\n                                    BEP-20 is a token standard on Binance Smart Chain that extends ERC-20, the most\n                                    common Ethereum token standard. You can think of it as a blueprint for tokens\n                                    that defines how they can be spent, who can spend them, and other rules for\n                                    their usage. Due to its similarity to Binance Chain’s BEP-2 and Ethereum’s\n                                    ERC-20, it’s compatible with both."
                                                ),
                                                e("br"),
                                                t._v(
                                                  "\n                                    BEP-20 was conceived as a technical specification for Binance Smart Chain,\n                                    with the goal of providing a flexible format for developers to launch a\n                                    range of different tokens. These could represent anything from shares in a\n                                    business to dollars stored in a bank vault (i.e., a stablecoin).\n                                "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                        t._v(" "),
                                        e(
                                          "b-link",
                                          {
                                            staticClass: "card-link",
                                            attrs: {
                                              href: "https://github.com/binance-chain/BEPs/blob/master/BEP20.md",
                                              target: "_blank",
                                            },
                                          },
                                          [
                                            t._v(
                                              "\n                                BEP20 Technical specification\n                            "
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
                                  "b-card",
                                  {
                                    attrs: {
                                      "no-body": "",
                                      "bg-variant": "light",
                                      itemscope: "",
                                      itemprop: "mainEntity",
                                      itemtype: "https://schema.org/Question",
                                    },
                                  },
                                  [
                                    e(
                                      "b-card-header",
                                      { attrs: { role: "tab" } },
                                      [
                                        e(
                                          "a",
                                          {
                                            directives: [
                                              {
                                                name: "b-toggle",
                                                rawName: "v-b-toggle",
                                              },
                                            ],
                                            staticClass:
                                              "btn-block text-reset text-decoration-none",
                                            attrs: { href: "#what-is-gas" },
                                            on: {
                                              click: function (t) {
                                                t.preventDefault();
                                              },
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "name" } },
                                              [
                                                t._v(
                                                  "\n                                    What is GAS and how to set Gas price?\n                                "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    e(
                                      "b-collapse",
                                      {
                                        staticClass: "p-4",
                                        attrs: {
                                          id: "what-is-gas",
                                          accordion: "bsc-accordion",
                                        },
                                      },
                                      [
                                        e(
                                          "b-card-text",
                                          {
                                            attrs: {
                                              itemscope: "",
                                              itemprop: "acceptedAnswer",
                                              itemtype:
                                                "https://schema.org/Answer",
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "text" } },
                                              [
                                                t._v(
                                                  '\n                                    "Gas" is the name for a special unit used in BSC. It measures how much\n                                    "work" an action or set of actions takes to perform.'
                                                ),
                                                e("br"),
                                                t._v(
                                                  "\n                                    Every operation that can be performed by a transaction or contract on the\n                                    BSC platform costs a certain number of gas, with operations that require\n                                    more computational resources costing more gas than operations that require few\n                                    computational resources."
                                                ),
                                                e("br"),
                                                t._v(
                                                  "\n                                    The reason gas is important is that it helps to ensure an appropriate fee is\n                                    being paid by transactions submitted to the network. By requiring that a\n                                    transaction pay for each operation it performs (or causes a contract to\n                                    perform), we ensure that network doesn't become bogged down with performing\n                                    a lot of intensive work that isn't valuable to anyone.\n                                "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                        t._v(" "),
                                        e(
                                          "b-link",
                                          {
                                            staticClass: "card-link",
                                            attrs: {
                                              href: "https://bscscan.com/gastracker",
                                              target: "_blank",
                                            },
                                          },
                                          [
                                            t._v(
                                              "\n                                BscScan Gas tracker\n                            "
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
                                  "b-card",
                                  {
                                    attrs: {
                                      "no-body": "",
                                      "bg-variant": "light",
                                      itemscope: "",
                                      itemprop: "mainEntity",
                                      itemtype: "https://schema.org/Question",
                                    },
                                  },
                                  [
                                    e(
                                      "b-card-header",
                                      { attrs: { role: "tab" } },
                                      [
                                        e(
                                          "a",
                                          {
                                            directives: [
                                              {
                                                name: "b-toggle",
                                                rawName: "v-b-toggle",
                                              },
                                            ],
                                            staticClass:
                                              "btn-block text-reset text-decoration-none",
                                            attrs: {
                                              href: "#connect-metamask-to-bsc",
                                            },
                                            on: {
                                              click: function (t) {
                                                t.preventDefault();
                                              },
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "name" } },
                                              [
                                                t._v(
                                                  "\n                                    How to connect MetaMask to Binance Smart Chain\n                                "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    e(
                                      "b-collapse",
                                      {
                                        staticClass: "p-4",
                                        attrs: {
                                          id: "connect-metamask-to-bsc",
                                          accordion: "bsc-accordion",
                                        },
                                      },
                                      [
                                        e(
                                          "b-card-text",
                                          {
                                            attrs: {
                                              itemscope: "",
                                              itemprop: "acceptedAnswer",
                                              itemtype:
                                                "https://schema.org/Answer",
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "text" } },
                                              [
                                                t._v(
                                                  "\n                                    You need to access the "
                                                ),
                                                e("b", [t._v("Settings")]),
                                                t._v(
                                                  " to point the wallet towards Binance Smart\n                                    Chain nodes. On the Settings page, locate the "
                                                ),
                                                e("b", [t._v("Networks")]),
                                                t._v(
                                                  " menu.\n                                    Click "
                                                ),
                                                e("b", [t._v("Add Network")]),
                                                t._v(
                                                  " in the top-right corner to manually add the Binance\n                                    Smart Chain one."
                                                ),
                                                e("br"),
                                                t._v(
                                                  "\n                                    There are two networks we can use here:\n                                    the testnet or the mainnet. Below are the parameters to fill in for each.\n                                    "
                                                ),
                                                e("br"),
                                                e("br"),
                                                t._v(" "),
                                                e("b", [
                                                  t._v(
                                                    "Mainnet (This is the one you are probably looking for)"
                                                  ),
                                                ]),
                                                t._v(" "),
                                                e("ul", [
                                                  e("li", [
                                                    t._v(
                                                      "Network Name: Binance Smart Chain"
                                                    ),
                                                  ]),
                                                  t._v(" "),
                                                  e("li", [
                                                    t._v(
                                                      "New RPC URL: https://bsc-dataseed.binance.org/"
                                                    ),
                                                  ]),
                                                  t._v(" "),
                                                  e("li", [
                                                    t._v("ChainID: 56"),
                                                  ]),
                                                  t._v(" "),
                                                  e("li", [
                                                    t._v("Symbol: BNB"),
                                                  ]),
                                                  t._v(" "),
                                                  e("li", [
                                                    t._v(
                                                      "Block Explorer URL: https://bscscan.com"
                                                    ),
                                                  ]),
                                                ]),
                                                t._v(" "),
                                                e("b", [t._v("Testnet")]),
                                                t._v(" "),
                                                e("ul", [
                                                  e("li", [
                                                    t._v(
                                                      "Network Name: Binance Smart Chain - Testnet"
                                                    ),
                                                  ]),
                                                  t._v(" "),
                                                  e("li", [
                                                    t._v(
                                                      "New RPC URL: https://data-seed-prebsc-1-s1.binance.org:8545/"
                                                    ),
                                                  ]),
                                                  t._v(" "),
                                                  e("li", [
                                                    t._v("ChainID: 97"),
                                                  ]),
                                                  t._v(" "),
                                                  e("li", [
                                                    t._v("Symbol: BNB"),
                                                  ]),
                                                  t._v(" "),
                                                  e("li", [
                                                    t._v(
                                                      "Block Explorer URL: https://testnet.bscscan.com"
                                                    ),
                                                  ]),
                                                ]),
                                              ]
                                            ),
                                          ]
                                        ),
                                        t._v(" "),
                                        e(
                                          "b-link",
                                          {
                                            staticClass: "card-link",
                                            attrs: {
                                              href: "https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain",
                                              target: "_blank",
                                            },
                                          },
                                          [
                                            t._v(
                                              "\n                                More details\n                            "
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
                  [
                    e(
                      "b-col",
                      [
                        e(
                          "b-alert",
                          {
                            staticClass: "mt-4",
                            attrs: { show: "", variant: "warning" },
                          },
                          [
                            e("h4", { staticClass: "alert-heading" }, [
                              t._v("DISCLAIMER"),
                            ]),
                            t._v(" "),
                            e("p", [
                              t._v(
                                "\n                    BEP20 Token Generator and its author are free of any liability regarding Tokens built using\n                    this App, and the use that is made of them. Tokens built on BEP20 Token Generator, their\n                    projects, their teams, their use of Token (as well as anything related to Token) are in no way\n                    connected to BEP20 Token Generator or its author.\n                "
                              ),
                            ]),
                            t._v(" "),
                            e("hr"),
                            t._v(" "),
                            e("small", [
                              t._v(
                                "\n                    BEP20 Token Generator's code is provided under MIT License. Anyone can use it as per their\n                    needs. The App's purpose is to make people able to tokenize their ideas without coding or\n                    paying large amounts for it. Source code is public and well tested and continuously updated to\n                    reduce risk of bugs and introduce language optimizations. Anyway the purchase of tokens\n                    involves a high degree of risk. Before acquiring tokens, it is recommended to carefully weighs\n                    all the information and risks detailed in Token owner's Conditions.\n                "
                              ),
                            ]),
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
