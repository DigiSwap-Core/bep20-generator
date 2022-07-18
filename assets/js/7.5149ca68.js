(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    256: function (e, t, a) {
      "use strict";
      a.r(t);
      a(93);
      var n = a(240),
        s = a(236),
        o = {
          name: "Generator",
          mixins: [n.a, s.a],
          data: () => ({
            loading: !0,
            currentNetwork: null,
            tokenType: "",
            trx: { hash: "", link: "" },
            transactionStarted: !1,
            makingTransaction: !1,
            formDisabled: !1,
            feeAmount: "0",
            agreement: "",
            token: {
              name: "",
              symbol: "",
              decimals: 18,
              cap: "",
              initialBalance: "",
              supplyType: "Fixed",
              accessType: "None",
              mintable: !1,
              burnable: !1,
              operable: !1,
              tokenRecover: !1,
              removeCopyright: !1,
            },
          }),
          mounted() {
            (this.tokenType = this.getParam("tokenType") || "SimpleBEP20"),
              (this.currentNetwork =
                this.getParam("network") || this.network.default),
              this.initDapp();
          },
          methods: {
            async initDapp() {
              this.network.current = this.network.list[this.currentNetwork];
              try {
                await this.initWeb3(this.currentNetwork, !0),
                  this.initService(this.currentNetwork),
                  await this.loadToken();
              } catch (e) {
                console.log(e),
                  this.makeToast("Some errors occurred", e, "danger");
              }
            },
            async loadToken() {
              Object.prototype.hasOwnProperty.call(
                this.tokenList,
                this.tokenType
              ) ||
                (this.makeToast(
                  "Some errors occurred",
                  "Selected token type does not exist!",
                  "danger"
                ),
                (this.tokenType = "SimpleBEP20")),
                this.initToken(this.tokenType),
                this.updateTokenDetails(),
                this.updateSupply(),
                this.updateCap();
              try {
                this.feeAmount = await this.promisify(
                  this.contracts.service.methods.getPrice(this.tokenType).call
                );
              } catch (e) {
                console.log(e.message),
                  "mainnet" === this.currentNetwork
                    ? (this.makeToast(
                        "Warning",
                        "We are having an issue with Current Network Provider. Please switch Network or try again later.",
                        "warning"
                      ),
                      (this.feeAmount = this.web3.utils.toWei("0", "ether")))
                    : (this.feeAmount = this.web3.utils.toWei(
                        "" + this.token.price,
                        "ether"
                      ));
              }
              "mainnet" === this.currentNetwork &&
                (this.gaSend("ViewContent", this.tokenType, ""),
                this.fbtrack("ViewContent", {
                  content_ids: [this.tokenType],
                  content_type: "product",
                })),
                (this.loading = !1);
            },
            async generateToken() {
              this.$refs.observer
                .validate()
                .then(async (e) => {
                  if (e) {
                    if (!this.metamask.installed)
                      return void this.makeToast(
                        "Warning",
                        "To create a Token please install MetaMask!",
                        "danger"
                      );
                    if (this.metamask.netId !== this.network.current.id)
                      return void this.makeToast(
                        "Warning",
                        `Your MetaMask in on the wrong network. Please switch on ${this.network.current.name} and try again!`,
                        "warning"
                      );
                    try {
                      (this.trx.hash = ""),
                        (this.trx.link = ""),
                        (this.formDisabled = !0),
                        (this.makingTransaction = !0),
                        "mainnet" === this.currentNetwork &&
                          (this.gaSend("AddToCart", this.tokenType, ""),
                          this.fbtrack("AddToCart", {
                            content_ids: [this.tokenType],
                            content_type: "product",
                          })),
                        await this.web3Provider.request({
                          method: "eth_requestAccounts",
                        });
                      const e = new this.web3.eth.Contract(
                          this.contracts.token.abi
                        ),
                        t = {
                          data: this.contracts.token.bytecode,
                          arguments: this.getDeployArguments(),
                        },
                        a = {
                          from: await this.promisify(this.web3.eth.getCoinbase),
                          value: this.feeAmount,
                          gasPrice: "10000000000",
                        };
                      (a.gas = await this.estimateDeployGas(e, t, a)),
                        e
                          .deploy(t)
                          .send(a)
                          .on("error", (e) => {
                            console.log(e.message),
                              (this.makingTransaction = !1),
                              (this.formDisabled = !1),
                              this.makeToast("Error!", e.message, "danger");
                          })
                          .on("transactionHash", (e) => {
                            (this.transactionStarted = !0),
                              (this.trx.hash = e),
                              (this.trx.link = `${this.network.current.explorerLink}/tx/${this.trx.hash}`),
                              "mainnet" === this.currentNetwork &&
                                (this.gaSend(
                                  "InitiateCheckout",
                                  this.tokenType,
                                  this.trx.hash
                                ),
                                this.fbtrack("InitiateCheckout"));
                          })
                          .on("receipt", (e) => {
                            (this.token.address = e.contractAddress),
                              (this.token.link =
                                this.network.current.explorerLink +
                                "/token/" +
                                this.token.address),
                              this.$forceUpdate(),
                              this.makeToast(
                                "Well done!",
                                "Your Token has been deployed!",
                                "success"
                              ),
                              "mainnet" === this.currentNetwork &&
                                (this.gaSend(
                                  "Purchase",
                                  this.tokenType,
                                  this.token.address
                                ),
                                this.fbtrack("Purchase", {
                                  value: this.web3.utils.fromWei(
                                    this.feeAmount,
                                    "ether"
                                  ),
                                  currency: "EUR",
                                  content_ids: [this.tokenType],
                                  content_type: "product",
                                }));
                          });
                    } catch (e) {
                      (this.makingTransaction = !1),
                        (this.formDisabled = !1),
                        this.makeToast(
                          "Some error occurred",
                          e.message,
                          "danger"
                        );
                    }
                  }
                })
                .catch((e) => {
                  console.log(e),
                    (this.makingTransaction = !1),
                    this.makeToast("Some error occurred", e.message, "danger");
                });
            },
            updateTokenDetails() {
              const e = this.tokenDetails.find(
                (e) => e.name === this.tokenType
              );
              (this.token.customizeDecimals = e.customizeDecimals),
                (this.token.verified = e.verified),
                (this.token.supplyType = e.supplyType),
                (this.token.accessType = e.accessType),
                (this.token.mintable = e.mintable),
                (this.token.burnable = e.burnable),
                (this.token.operable = e.operable),
                (this.token.tokenRecover = e.tokenRecover),
                (this.token.removeCopyright = e.removeCopyright),
                (this.token.price = e.price),
                (this.token.gas = this.web3.utils.toBN(e.gas)),
                (this.token.decimals = e.customizeDecimals
                  ? this.token.decimals
                  : 18);
            },
            updateCap() {
              this.token.cap = ["100k", "Fixed"].includes(this.token.supplyType)
                ? this.token.initialBalance
                : this.token.cap;
            },
            updateSupply() {
              this.token.initialBalance =
                "100k" === this.token.supplyType
                  ? 1e5
                  : this.token.initialBalance;
            },
            getDeployArguments() {
              const e = this.token.name,
                t = this.token.symbol,
                a = this.web3.utils.toBN(this.token.decimals),
                n = this.web3.utils
                  .toBN(this.token.cap)
                  .mul(this.web3.utils.toBN(Math.pow(10, this.token.decimals))),
                s = this.web3.utils
                  .toBN(this.token.initialBalance)
                  .mul(this.web3.utils.toBN(Math.pow(10, this.token.decimals))),
                o = [e, t];
              switch (this.tokenType) {
                case "HelloBEP20":
                  break;
                case "SimpleBEP20":
                  o.push(s);
                  break;
                case "StandardBEP20":
                case "BurnableBEP20":
                case "UnlimitedBEP20":
                case "AmazingBEP20":
                  o.push(a), o.push(s);
                  break;
                case "MintableBEP20":
                case "CommonBEP20":
                  o.push(a), o.push(n), o.push(s);
                  break;
                default:
                  throw new Error("Invalid Token Type");
              }
              return o.push(this.contracts.service.options.address), o;
            },
            async estimateDeployGas(e, t, a) {
              try {
                const n = await this.promisify(e.deploy(t).estimateGas, a);
                return this.web3.utils.toBN(n).muln(1.3);
              } catch (e) {
                return console.log(e), this.token.gas;
              }
            },
            async addToMetaMask() {
              try {
                await this.web3Provider.request({
                  method: "wallet_watchAsset",
                  params: {
                    type: "ERC20",
                    options: {
                      address: this.token.address,
                      symbol: this.token.symbol.substr(0, 5),
                      decimals: this.token.decimals,
                    },
                  },
                });
              } catch (e) {
                console.log(e);
              }
            },
          },
        },
        r = a(15),
        i = Object(r.a)(
          o,
          function () {
            var e = this,
              t = e._self._c;
            return t(
              "div",
              [
                t("b-jumbotron", {
                  staticClass: "mb-0 kingyna-gradient",
                  attrs: {
                    "text-variant": "white",
                    header: "Create your BEP20 Token",
                    fluid: "",
                  },
                  scopedSlots: e._u([
                    {
                      key: "lead",
                      fn: function () {
                        return [
                          e._v(
                            "\n            Easily deploy Smart Contract for a Standard, Capped, Mintable, Burnable BEP20 Token.\n            "
                          ),
                          t("br"),
                          e._v(
                            "\n            BEP20 Generator is the easiest and fastest way to create your own BEP20 token on the Binance Smart Chain network. No coding skills are required.\n        "
                          ),
                        ];
                      },
                      proxy: !0,
                    },
                  ]),
                }),
                e._v(" "),
                t(
                  "b-row",
                  { staticClass: "mx-0", attrs: { id: "token-generator" } },
                  [
                    t(
                      "b-col",
                      {
                        staticClass: "mb-3 p-0",
                        attrs: { lg: "12", xl: "10", "offset-xl": "1" },
                      },
                      [
                        e.loading
                          ? t(
                              "div",
                              { staticClass: "text-center p-5" },
                              [t("ui--loader", { attrs: { loading: !0 } })],
                              1
                            )
                          : e._e(),
                        e._v(" "),
                        e.loading
                          ? e._e()
                          : t(
                              "b-card",
                              {
                                attrs: {
                                  "bg-variant": "transparent",
                                  "border-variant": "0",
                                },
                              },
                              [
                                e.metamask.installed
                                  ? e._e()
                                  : t(
                                      "b-alert",
                                      {
                                        attrs: { show: "", variant: "danger" },
                                      },
                                      [
                                        t(
                                          "h4",
                                          { staticClass: "alert-heading" },
                                          [e._v("Alert")]
                                        ),
                                        e._v(" "),
                                        t(
                                          "p",
                                          [
                                            e._v(
                                              "\n                        To use this app please install\n                        "
                                            ),
                                            t(
                                              "b-link",
                                              {
                                                attrs: {
                                                  href: "https://metamask.io/",
                                                  target: "_blank",
                                                },
                                              },
                                              [e._v("MetaMask")]
                                            ),
                                            e._v(
                                              ".\n                        Use any other wallet at your own risk.\n                    "
                                            ),
                                          ],
                                          1
                                        ),
                                      ]
                                    ),
                                e._v(" "),
                                e.makingTransaction || e.transactionStarted
                                  ? t(
                                      "b-card",
                                      {
                                        staticClass: "mt-3",
                                        attrs: {
                                          header: "Making transaction...",
                                          "header-bg-variant": "info",
                                          "header-text-variant": "white",
                                        },
                                      },
                                      [
                                        e.trx.hash
                                          ? t("div", [
                                              t(
                                                "h6",
                                                { staticClass: "text-success" },
                                                [
                                                  e._v(
                                                    "Well! Transaction done!"
                                                  ),
                                                ]
                                              ),
                                              e._v(
                                                "\n                        Transaction Hash:\n                        "
                                              ),
                                              t(
                                                "a",
                                                {
                                                  attrs: {
                                                    href: e.trx.link,
                                                    target: "_blank",
                                                  },
                                                },
                                                [
                                                  t("span", {
                                                    domProps: {
                                                      innerHTML: e._s(
                                                        e.trx.hash
                                                      ),
                                                    },
                                                  }),
                                                ]
                                              ),
                                              t("br"),
                                              e._v(" "),
                                              t("hr"),
                                              e._v(" "),
                                              e.token.address
                                                ? t(
                                                    "div",
                                                    [
                                                      t(
                                                        "h6",
                                                        {
                                                          staticClass:
                                                            "text-info",
                                                        },
                                                        [e._v("Your Token:")]
                                                      ),
                                                      e._v(" "),
                                                      t("h5", [
                                                        e._v(
                                                          e._s(e.token.name) +
                                                            " (" +
                                                            e._s(
                                                              e.token.symbol
                                                            ) +
                                                            ")"
                                                        ),
                                                      ]),
                                                      e._v(" "),
                                                      t("h6", [
                                                        e._v(
                                                          "Address: " +
                                                            e._s(
                                                              e.token.address
                                                            )
                                                        ),
                                                      ]),
                                                      e._v(" "),
                                                      t(
                                                        "small",
                                                        {
                                                          staticClass:
                                                            "text-muted",
                                                        },
                                                        [
                                                          e._v(
                                                            "Supply: " +
                                                              e._s(
                                                                e.token
                                                                  .initialBalance
                                                              ) +
                                                              " " +
                                                              e._s(
                                                                e.token.symbol
                                                              )
                                                          ),
                                                        ]
                                                      ),
                                                      e._v(" "),
                                                      t("hr"),
                                                      e._v(" "),
                                                      t(
                                                        "b-link",
                                                        {
                                                          staticClass:
                                                            "btn btn-primary my-2",
                                                          attrs: {
                                                            href: e.token.link,
                                                            target: "_blank",
                                                          },
                                                        },
                                                        [
                                                          t(
                                                            "b-icon-arrow-up-right-circle-fill"
                                                          ),
                                                          e._v(
                                                            "\n                                View on BscScan\n                            "
                                                          ),
                                                        ],
                                                        1
                                                      ),
                                                      e._v(" "),
                                                      t(
                                                        "b-link",
                                                        {
                                                          staticClass:
                                                            "btn btn-success my-2",
                                                          on: {
                                                            click:
                                                              e.addToMetaMask,
                                                          },
                                                        },
                                                        [
                                                          t(
                                                            "b-icon-plus-circle-fill"
                                                          ),
                                                          e._v(
                                                            "\n                                Add to MetaMask\n                            "
                                                          ),
                                                        ],
                                                        1
                                                      ),
                                                    ],
                                                    1
                                                  )
                                                : t(
                                                    "div",
                                                    [
                                                      t("h6", [
                                                        e._v(
                                                          "Retrieving Token."
                                                        ),
                                                      ]),
                                                      e._v(" "),
                                                      t("p", [
                                                        e._v("Please wait..."),
                                                      ]),
                                                      e._v(" "),
                                                      t("ui--loader", {
                                                        attrs: { loading: !0 },
                                                      }),
                                                    ],
                                                    1
                                                  ),
                                            ])
                                          : t(
                                              "div",
                                              [
                                                t("p", [
                                                  e._v("Please wait..."),
                                                ]),
                                                e._v(" "),
                                                t("ui--loader", {
                                                  attrs: { loading: !0 },
                                                }),
                                              ],
                                              1
                                            ),
                                      ]
                                    )
                                  : e._e(),
                                e._v(" "),
                                e.makingTransaction
                                  ? e._e()
                                  : t(
                                      "ValidationObserver",
                                      {
                                        ref: "observer",
                                        attrs: { tag: "form" },
                                        on: {
                                          submit: function (t) {
                                            return (
                                              t.preventDefault(),
                                              e.generateToken()
                                            );
                                          },
                                        },
                                      },
                                      [
                                        t(
                                          "fieldset",
                                          {
                                            attrs: { disabled: e.formDisabled },
                                          },
                                          [
                                            t(
                                              "b-row",
                                              [
                                                t(
                                                  "b-col",
                                                  {
                                                    attrs: { md: "6", lg: "4" },
                                                  },
                                                  [
                                                    t(
                                                      "b-card",
                                                      {
                                                        staticClass: "mt-3",
                                                        attrs: {
                                                          header:
                                                            "Token Details",
                                                          "header-bg-variant":
                                                            "dark",
                                                          "header-text-variant":
                                                            "white",
                                                        },
                                                      },
                                                      [
                                                        t(
                                                          "ValidationProvider",
                                                          {
                                                            attrs: {
                                                              name: "token name",
                                                              rules: {
                                                                required: !0,
                                                              },
                                                            },
                                                            scopedSlots: e._u(
                                                              [
                                                                {
                                                                  key: "default",
                                                                  fn: function ({
                                                                    errors: a,
                                                                  }) {
                                                                    return [
                                                                      t(
                                                                        "b-form-group",
                                                                        {
                                                                          attrs:
                                                                            {
                                                                              description:
                                                                                "Choose a name for your token.",
                                                                              label:
                                                                                "Token Name *",
                                                                              "label-for":
                                                                                "tokenName",
                                                                            },
                                                                        },
                                                                        [
                                                                          t(
                                                                            "b-form-input",
                                                                            {
                                                                              class:
                                                                                {
                                                                                  "is-invalid":
                                                                                    a.length >
                                                                                    0,
                                                                                },
                                                                              attrs:
                                                                                {
                                                                                  id: "tokenName",
                                                                                  name: "tokenName",
                                                                                  placeholder:
                                                                                    "Your token name",
                                                                                  size: "lg",
                                                                                  maxlength:
                                                                                    "30",
                                                                                },
                                                                              model:
                                                                                {
                                                                                  value:
                                                                                    e
                                                                                      .token
                                                                                      .name,
                                                                                  callback:
                                                                                    function (
                                                                                      t
                                                                                    ) {
                                                                                      e.$set(
                                                                                        e.token,
                                                                                        "name",
                                                                                        "string" ==
                                                                                          typeof t
                                                                                          ? t.trim()
                                                                                          : t
                                                                                      );
                                                                                    },
                                                                                  expression:
                                                                                    "token.name",
                                                                                },
                                                                            }
                                                                          ),
                                                                          e._v(
                                                                            " "
                                                                          ),
                                                                          t(
                                                                            "small",
                                                                            {
                                                                              directives:
                                                                                [
                                                                                  {
                                                                                    name: "show",
                                                                                    rawName:
                                                                                      "v-show",
                                                                                    value:
                                                                                      a.length >
                                                                                      0,
                                                                                    expression:
                                                                                      "errors.length > 0",
                                                                                  },
                                                                                ],
                                                                              staticClass:
                                                                                "text-danger",
                                                                            },
                                                                            [
                                                                              e._v(
                                                                                "\n                                                " +
                                                                                  e._s(
                                                                                    a[0]
                                                                                  ) +
                                                                                  "\n                                            "
                                                                              ),
                                                                            ]
                                                                          ),
                                                                        ],
                                                                        1
                                                                      ),
                                                                    ];
                                                                  },
                                                                },
                                                              ],
                                                              null,
                                                              !1,
                                                              3102910013
                                                            ),
                                                          }
                                                        ),
                                                        e._v(" "),
                                                        t(
                                                          "ValidationProvider",
                                                          {
                                                            attrs: {
                                                              name: "token symbol",
                                                              rules: {
                                                                required: !0,
                                                              },
                                                            },
                                                            scopedSlots: e._u(
                                                              [
                                                                {
                                                                  key: "default",
                                                                  fn: function ({
                                                                    errors: a,
                                                                  }) {
                                                                    return [
                                                                      t(
                                                                        "b-form-group",
                                                                        {
                                                                          attrs:
                                                                            {
                                                                              description:
                                                                                "Choose a symbol for your token (usually 3-5 chars).",
                                                                              label:
                                                                                "Token Symbol *",
                                                                              "label-for":
                                                                                "tokenSymbol",
                                                                            },
                                                                        },
                                                                        [
                                                                          t(
                                                                            "b-form-input",
                                                                            {
                                                                              class:
                                                                                {
                                                                                  "is-invalid":
                                                                                    a.length >
                                                                                    0,
                                                                                },
                                                                              attrs:
                                                                                {
                                                                                  id: "tokenSymbol",
                                                                                  name: "tokenSymbol",
                                                                                  placeholder:
                                                                                    "Your token symbol",
                                                                                  size: "lg",
                                                                                  maxlength:
                                                                                    "10",
                                                                                },
                                                                              on: {
                                                                                update:
                                                                                  function (
                                                                                    t
                                                                                  ) {
                                                                                    e.token.symbol =
                                                                                      e.token.symbol.toUpperCase();
                                                                                  },
                                                                              },
                                                                              model:
                                                                                {
                                                                                  value:
                                                                                    e
                                                                                      .token
                                                                                      .symbol,
                                                                                  callback:
                                                                                    function (
                                                                                      t
                                                                                    ) {
                                                                                      e.$set(
                                                                                        e.token,
                                                                                        "symbol",
                                                                                        "string" ==
                                                                                          typeof t
                                                                                          ? t.trim()
                                                                                          : t
                                                                                      );
                                                                                    },
                                                                                  expression:
                                                                                    "token.symbol",
                                                                                },
                                                                            }
                                                                          ),
                                                                          e._v(
                                                                            " "
                                                                          ),
                                                                          t(
                                                                            "small",
                                                                            {
                                                                              directives:
                                                                                [
                                                                                  {
                                                                                    name: "show",
                                                                                    rawName:
                                                                                      "v-show",
                                                                                    value:
                                                                                      a.length >
                                                                                      0,
                                                                                    expression:
                                                                                      "errors.length > 0",
                                                                                  },
                                                                                ],
                                                                              staticClass:
                                                                                "text-danger",
                                                                            },
                                                                            [
                                                                              e._v(
                                                                                "\n                                                " +
                                                                                  e._s(
                                                                                    a[0]
                                                                                  ) +
                                                                                  "\n                                            "
                                                                              ),
                                                                            ]
                                                                          ),
                                                                        ],
                                                                        1
                                                                      ),
                                                                    ];
                                                                  },
                                                                },
                                                              ],
                                                              null,
                                                              !1,
                                                              1266156028
                                                            ),
                                                          }
                                                        ),
                                                        e._v(" "),
                                                        t(
                                                          "ValidationProvider",
                                                          {
                                                            attrs: {
                                                              name: "token Decimals",
                                                              rules: {
                                                                required: !0,
                                                                numeric: !0,
                                                                min_value: 0,
                                                                max_value: 36,
                                                              },
                                                            },
                                                            scopedSlots: e._u(
                                                              [
                                                                {
                                                                  key: "default",
                                                                  fn: function ({
                                                                    errors: a,
                                                                  }) {
                                                                    return [
                                                                      t(
                                                                        "b-form-group",
                                                                        {
                                                                          attrs:
                                                                            {
                                                                              description:
                                                                                "Insert the decimal precision of your token. If you don't know what to insert, use 18.",
                                                                              label:
                                                                                "Token decimals *",
                                                                              "label-for":
                                                                                "tokenDecimals",
                                                                            },
                                                                        },
                                                                        [
                                                                          t(
                                                                            "b-form-input",
                                                                            {
                                                                              class:
                                                                                {
                                                                                  "is-invalid":
                                                                                    a.length >
                                                                                    0,
                                                                                },
                                                                              attrs:
                                                                                {
                                                                                  id: "tokenDecimals",
                                                                                  name: "tokenDecimals",
                                                                                  placeholder:
                                                                                    "Your token decimals",
                                                                                  type: "number",
                                                                                  disabled:
                                                                                    !e
                                                                                      .token
                                                                                      .customizeDecimals,
                                                                                  size: "lg",
                                                                                  min: "0",
                                                                                  step: "1",
                                                                                },
                                                                              model:
                                                                                {
                                                                                  value:
                                                                                    e
                                                                                      .token
                                                                                      .decimals,
                                                                                  callback:
                                                                                    function (
                                                                                      t
                                                                                    ) {
                                                                                      e.$set(
                                                                                        e.token,
                                                                                        "decimals",
                                                                                        "string" ==
                                                                                          typeof t
                                                                                          ? t.trim()
                                                                                          : t
                                                                                      );
                                                                                    },
                                                                                  expression:
                                                                                    "token.decimals",
                                                                                },
                                                                            }
                                                                          ),
                                                                          e._v(
                                                                            " "
                                                                          ),
                                                                          t(
                                                                            "small",
                                                                            {
                                                                              directives:
                                                                                [
                                                                                  {
                                                                                    name: "show",
                                                                                    rawName:
                                                                                      "v-show",
                                                                                    value:
                                                                                      a.length >
                                                                                      0,
                                                                                    expression:
                                                                                      "errors.length > 0",
                                                                                  },
                                                                                ],
                                                                              staticClass:
                                                                                "text-danger",
                                                                            },
                                                                            [
                                                                              e._v(
                                                                                "\n                                                " +
                                                                                  e._s(
                                                                                    a[0]
                                                                                  ) +
                                                                                  "\n                                            "
                                                                              ),
                                                                            ]
                                                                          ),
                                                                        ],
                                                                        1
                                                                      ),
                                                                    ];
                                                                  },
                                                                },
                                                              ],
                                                              null,
                                                              !1,
                                                              1812990632
                                                            ),
                                                          }
                                                        ),
                                                        e._v(" "),
                                                        t(
                                                          "ValidationProvider",
                                                          {
                                                            attrs: {
                                                              name: "token initial supply",
                                                              rules: {
                                                                required: !0,
                                                                numeric: !0,
                                                                min_value:
                                                                  "Fixed" ===
                                                                  e.token
                                                                    .supplyType
                                                                    ? 1
                                                                    : 0,
                                                                max_value: 1e15,
                                                              },
                                                            },
                                                            scopedSlots: e._u(
                                                              [
                                                                {
                                                                  key: "default",
                                                                  fn: function ({
                                                                    errors: a,
                                                                  }) {
                                                                    return [
                                                                      t(
                                                                        "b-form-group",
                                                                        {
                                                                          attrs:
                                                                            {
                                                                              description:
                                                                                "Insert the initial number of tokens available. Will be put in your account.",
                                                                              label:
                                                                                "Initial Supply *",
                                                                              "label-for":
                                                                                "tokenInitialBalance",
                                                                            },
                                                                        },
                                                                        [
                                                                          t(
                                                                            "b-form-input",
                                                                            {
                                                                              class:
                                                                                {
                                                                                  "is-invalid":
                                                                                    a.length >
                                                                                    0,
                                                                                },
                                                                              attrs:
                                                                                {
                                                                                  id: "tokenInitialBalance",
                                                                                  name: "tokenInitialBalance",
                                                                                  placeholder:
                                                                                    "Your token initial supply",
                                                                                  type: "number",
                                                                                  size: "lg",
                                                                                  disabled:
                                                                                    "100k" ===
                                                                                    e
                                                                                      .token
                                                                                      .supplyType,
                                                                                  min: "0",
                                                                                  step: "1",
                                                                                },
                                                                              on: {
                                                                                update:
                                                                                  e.updateCap,
                                                                              },
                                                                              model:
                                                                                {
                                                                                  value:
                                                                                    e
                                                                                      .token
                                                                                      .initialBalance,
                                                                                  callback:
                                                                                    function (
                                                                                      t
                                                                                    ) {
                                                                                      e.$set(
                                                                                        e.token,
                                                                                        "initialBalance",
                                                                                        "string" ==
                                                                                          typeof t
                                                                                          ? t.trim()
                                                                                          : t
                                                                                      );
                                                                                    },
                                                                                  expression:
                                                                                    "token.initialBalance",
                                                                                },
                                                                            }
                                                                          ),
                                                                          e._v(
                                                                            " "
                                                                          ),
                                                                          t(
                                                                            "small",
                                                                            {
                                                                              directives:
                                                                                [
                                                                                  {
                                                                                    name: "show",
                                                                                    rawName:
                                                                                      "v-show",
                                                                                    value:
                                                                                      a.length >
                                                                                      0,
                                                                                    expression:
                                                                                      "errors.length > 0",
                                                                                  },
                                                                                ],
                                                                              staticClass:
                                                                                "text-danger",
                                                                            },
                                                                            [
                                                                              e._v(
                                                                                "\n                                                " +
                                                                                  e._s(
                                                                                    a[0]
                                                                                  ) +
                                                                                  "\n                                            "
                                                                              ),
                                                                            ]
                                                                          ),
                                                                        ],
                                                                        1
                                                                      ),
                                                                    ];
                                                                  },
                                                                },
                                                              ],
                                                              null,
                                                              !1,
                                                              1781880985
                                                            ),
                                                          }
                                                        ),
                                                        e._v(" "),
                                                        "Unlimited" !==
                                                        e.token.supplyType
                                                          ? t(
                                                              "ValidationProvider",
                                                              {
                                                                attrs: {
                                                                  name: "token max supply",
                                                                  rules: {
                                                                    required:
                                                                      !0,
                                                                    numeric: !0,
                                                                    min_value:
                                                                      e.token
                                                                        .initialBalance >
                                                                      0
                                                                        ? e
                                                                            .token
                                                                            .initialBalance
                                                                        : 1,
                                                                    max_value: 1e15,
                                                                  },
                                                                },
                                                                scopedSlots:
                                                                  e._u(
                                                                    [
                                                                      {
                                                                        key: "default",
                                                                        fn: function ({
                                                                          errors:
                                                                            a,
                                                                        }) {
                                                                          return [
                                                                            t(
                                                                              "b-form-group",
                                                                              {
                                                                                attrs:
                                                                                  {
                                                                                    description:
                                                                                      "Insert the maximum number of tokens available.",
                                                                                    label:
                                                                                      "Total Supply *",
                                                                                    "label-for":
                                                                                      "tokenCap",
                                                                                  },
                                                                              },
                                                                              [
                                                                                t(
                                                                                  "b-form-input",
                                                                                  {
                                                                                    class:
                                                                                      {
                                                                                        "is-invalid":
                                                                                          a.length >
                                                                                          0,
                                                                                      },
                                                                                    attrs:
                                                                                      {
                                                                                        id: "tokenCap",
                                                                                        name: "tokenCap",
                                                                                        placeholder:
                                                                                          "Your token max supply",
                                                                                        type: "number",
                                                                                        size: "lg",
                                                                                        disabled:
                                                                                          [
                                                                                            "100k",
                                                                                            "Fixed",
                                                                                          ].includes(
                                                                                            e
                                                                                              .token
                                                                                              .supplyType
                                                                                          ),
                                                                                        min: "1",
                                                                                        step: "1",
                                                                                      },
                                                                                    model:
                                                                                      {
                                                                                        value:
                                                                                          e
                                                                                            .token
                                                                                            .cap,
                                                                                        callback:
                                                                                          function (
                                                                                            t
                                                                                          ) {
                                                                                            e.$set(
                                                                                              e.token,
                                                                                              "cap",
                                                                                              "string" ==
                                                                                                typeof t
                                                                                                ? t.trim()
                                                                                                : t
                                                                                            );
                                                                                          },
                                                                                        expression:
                                                                                          "token.cap",
                                                                                      },
                                                                                  }
                                                                                ),
                                                                                e._v(
                                                                                  " "
                                                                                ),
                                                                                t(
                                                                                  "small",
                                                                                  {
                                                                                    directives:
                                                                                      [
                                                                                        {
                                                                                          name: "show",
                                                                                          rawName:
                                                                                            "v-show",
                                                                                          value:
                                                                                            a.length >
                                                                                            0,
                                                                                          expression:
                                                                                            "errors.length > 0",
                                                                                        },
                                                                                      ],
                                                                                    staticClass:
                                                                                      "text-danger",
                                                                                  },
                                                                                  [
                                                                                    e._v(
                                                                                      "\n                                                " +
                                                                                        e._s(
                                                                                          a[0]
                                                                                        ) +
                                                                                        "\n                                            "
                                                                                    ),
                                                                                  ]
                                                                                ),
                                                                              ],
                                                                              1
                                                                            ),
                                                                          ];
                                                                        },
                                                                      },
                                                                    ],
                                                                    null,
                                                                    !1,
                                                                    1465824721
                                                                  ),
                                                              }
                                                            )
                                                          : e._e(),
                                                      ],
                                                      1
                                                    ),
                                                  ],
                                                  1
                                                ),
                                                e._v(" "),
                                                t(
                                                  "b-col",
                                                  {
                                                    attrs: { md: "6", lg: "4" },
                                                  },
                                                  [
                                                    t(
                                                      "b-card",
                                                      {
                                                        staticClass: "mt-3",
                                                        attrs: {
                                                          header:
                                                            "Token Features",
                                                          "header-bg-variant":
                                                            "dark",
                                                          "header-text-variant":
                                                            "white",
                                                        },
                                                      },
                                                      [
                                                        t(
                                                          "b-form-group",
                                                          {
                                                            attrs: {
                                                              description: [
                                                                "100k",
                                                                "Fixed",
                                                                "Unlimited",
                                                                "Capped",
                                                              ].join(", "),
                                                              label:
                                                                "Supply Type",
                                                              "label-for":
                                                                "supplyType",
                                                            },
                                                          },
                                                          [
                                                            t(
                                                              "b-form-select",
                                                              {
                                                                attrs: {
                                                                  id: "supplyType",
                                                                  disabled: "",
                                                                  size: "sm",
                                                                },
                                                                model: {
                                                                  value:
                                                                    e.token
                                                                      .supplyType,
                                                                  callback:
                                                                    function (
                                                                      t
                                                                    ) {
                                                                      e.$set(
                                                                        e.token,
                                                                        "supplyType",
                                                                        t
                                                                      );
                                                                    },
                                                                  expression:
                                                                    "token.supplyType",
                                                                },
                                                              },
                                                              e._l(
                                                                [
                                                                  "100k",
                                                                  "Fixed",
                                                                  "Unlimited",
                                                                  "Capped",
                                                                ],
                                                                function (a) {
                                                                  return t(
                                                                    "option",
                                                                    {
                                                                      domProps:
                                                                        {
                                                                          value:
                                                                            a,
                                                                        },
                                                                    },
                                                                    [
                                                                      e._v(
                                                                        "\n                                                " +
                                                                          e._s(
                                                                            a
                                                                          ) +
                                                                          "\n                                            "
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
                                                        e._v(" "),
                                                        t(
                                                          "b-form-group",
                                                          {
                                                            attrs: {
                                                              description: [
                                                                "None",
                                                                "Ownable",
                                                                "Role Based",
                                                              ].join(", "),
                                                              label:
                                                                "Access Type",
                                                              "label-for":
                                                                "accessType",
                                                            },
                                                          },
                                                          [
                                                            t(
                                                              "b-form-select",
                                                              {
                                                                attrs: {
                                                                  id: "accessType",
                                                                  disabled: "",
                                                                  size: "sm",
                                                                },
                                                                model: {
                                                                  value:
                                                                    e.token
                                                                      .accessType,
                                                                  callback:
                                                                    function (
                                                                      t
                                                                    ) {
                                                                      e.$set(
                                                                        e.token,
                                                                        "accessType",
                                                                        t
                                                                      );
                                                                    },
                                                                  expression:
                                                                    "token.accessType",
                                                                },
                                                              },
                                                              e._l(
                                                                [
                                                                  "None",
                                                                  "Ownable",
                                                                  "Role Based",
                                                                ],
                                                                function (a) {
                                                                  return t(
                                                                    "option",
                                                                    {
                                                                      domProps:
                                                                        {
                                                                          value:
                                                                            a,
                                                                        },
                                                                    },
                                                                    [
                                                                      e._v(
                                                                        "\n                                                " +
                                                                          e._s(
                                                                            a
                                                                          ) +
                                                                          "\n                                            "
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
                                                        e._v(" "),
                                                        t(
                                                          "b-form-group",
                                                          {
                                                            attrs: {
                                                              description:
                                                                "Your Token Source Code will be automatically verified on BscScan.",
                                                            },
                                                          },
                                                          [
                                                            t(
                                                              "b-form-checkbox",
                                                              {
                                                                attrs: {
                                                                  size: "sm",
                                                                  disabled: "",
                                                                  switch: "",
                                                                },
                                                                model: {
                                                                  value:
                                                                    e.token
                                                                      .verified,
                                                                  callback:
                                                                    function (
                                                                      t
                                                                    ) {
                                                                      e.$set(
                                                                        e.token,
                                                                        "verified",
                                                                        t
                                                                      );
                                                                    },
                                                                  expression:
                                                                    "token.verified",
                                                                },
                                                              },
                                                              [
                                                                e._v(
                                                                  "\n                                            Verified Source Code\n                                        "
                                                                ),
                                                              ]
                                                            ),
                                                          ],
                                                          1
                                                        ),
                                                        e._v(" "),
                                                        t(
                                                          "b-form-group",
                                                          {
                                                            attrs: {
                                                              description:
                                                                "Remove the link pointing to this page from your contract.",
                                                            },
                                                          },
                                                          [
                                                            t(
                                                              "b-form-checkbox",
                                                              {
                                                                attrs: {
                                                                  size: "sm",
                                                                  disabled: "",
                                                                  switch: "",
                                                                },
                                                                model: {
                                                                  value:
                                                                    e.token
                                                                      .removeCopyright,
                                                                  callback:
                                                                    function (
                                                                      t
                                                                    ) {
                                                                      e.$set(
                                                                        e.token,
                                                                        "removeCopyright",
                                                                        t
                                                                      );
                                                                    },
                                                                  expression:
                                                                    "token.removeCopyright",
                                                                },
                                                              },
                                                              [
                                                                e._v(
                                                                  "\n                                            Remove Copyright\n                                        "
                                                                ),
                                                              ]
                                                            ),
                                                          ],
                                                          1
                                                        ),
                                                        e._v(" "),
                                                        t(
                                                          "b-form-group",
                                                          {
                                                            attrs: {
                                                              description:
                                                                "Your Token can be burnt.",
                                                            },
                                                          },
                                                          [
                                                            t(
                                                              "b-form-checkbox",
                                                              {
                                                                attrs: {
                                                                  size: "sm",
                                                                  disabled: "",
                                                                  switch: "",
                                                                },
                                                                model: {
                                                                  value:
                                                                    e.token
                                                                      .burnable,
                                                                  callback:
                                                                    function (
                                                                      t
                                                                    ) {
                                                                      e.$set(
                                                                        e.token,
                                                                        "burnable",
                                                                        t
                                                                      );
                                                                    },
                                                                  expression:
                                                                    "token.burnable",
                                                                },
                                                              },
                                                              [
                                                                e._v(
                                                                  "\n                                            Burnable\n                                        "
                                                                ),
                                                              ]
                                                            ),
                                                          ],
                                                          1
                                                        ),
                                                        e._v(" "),
                                                        t(
                                                          "b-form-group",
                                                          {
                                                            attrs: {
                                                              description:
                                                                "You will be able to generate tokens by minting them.",
                                                            },
                                                          },
                                                          [
                                                            t(
                                                              "b-form-checkbox",
                                                              {
                                                                attrs: {
                                                                  size: "sm",
                                                                  disabled: "",
                                                                  switch: "",
                                                                },
                                                                model: {
                                                                  value:
                                                                    e.token
                                                                      .mintable,
                                                                  callback:
                                                                    function (
                                                                      t
                                                                    ) {
                                                                      e.$set(
                                                                        e.token,
                                                                        "mintable",
                                                                        t
                                                                      );
                                                                    },
                                                                  expression:
                                                                    "token.mintable",
                                                                },
                                                              },
                                                              [
                                                                e._v(
                                                                  "\n                                            Mintable\n                                        "
                                                                ),
                                                              ]
                                                            ),
                                                          ],
                                                          1
                                                        ),
                                                        e._v(" "),
                                                        t(
                                                          "b-form-group",
                                                          {
                                                            attrs: {
                                                              description:
                                                                "Make a callback on the receiver contract.",
                                                            },
                                                          },
                                                          [
                                                            t(
                                                              "b-form-checkbox",
                                                              {
                                                                attrs: {
                                                                  size: "sm",
                                                                  disabled: "",
                                                                  switch: "",
                                                                },
                                                                model: {
                                                                  value:
                                                                    e.token
                                                                      .operable,
                                                                  callback:
                                                                    function (
                                                                      t
                                                                    ) {
                                                                      e.$set(
                                                                        e.token,
                                                                        "operable",
                                                                        t
                                                                      );
                                                                    },
                                                                  expression:
                                                                    "token.operable",
                                                                },
                                                              },
                                                              [
                                                                e._v(
                                                                  "\n                                            Operable (ERC1363)\n                                        "
                                                                ),
                                                              ]
                                                            ),
                                                          ],
                                                          1
                                                        ),
                                                        e._v(" "),
                                                        t(
                                                          "b-form-group",
                                                          {
                                                            attrs: {
                                                              description:
                                                                "Recover any BEP20 token sent into the contract for error.",
                                                            },
                                                          },
                                                          [
                                                            t(
                                                              "b-form-checkbox",
                                                              {
                                                                attrs: {
                                                                  size: "sm",
                                                                  disabled: "",
                                                                  switch: "",
                                                                },
                                                                model: {
                                                                  value:
                                                                    e.token
                                                                      .tokenRecover,
                                                                  callback:
                                                                    function (
                                                                      t
                                                                    ) {
                                                                      e.$set(
                                                                        e.token,
                                                                        "tokenRecover",
                                                                        t
                                                                      );
                                                                    },
                                                                  expression:
                                                                    "token.tokenRecover",
                                                                },
                                                              },
                                                              [
                                                                e._v(
                                                                  "\n                                            Token Recover\n                                        "
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
                                                e._v(" "),
                                                t(
                                                  "b-col",
                                                  {
                                                    attrs: {
                                                      md: "12",
                                                      lg: "4",
                                                    },
                                                  },
                                                  [
                                                    t(
                                                      "b-card",
                                                      {
                                                        staticClass: "mt-3",
                                                        attrs: {
                                                          header:
                                                            "Token Type and Network",
                                                          "header-bg-variant":
                                                            "dark",
                                                          "header-text-variant":
                                                            "white",
                                                        },
                                                      },
                                                      [
                                                        t(
                                                          "b-form-group",
                                                          {
                                                            attrs: {
                                                              description:
                                                                "Choose your Token Type.",
                                                              label:
                                                                "Token Type *",
                                                              "label-for":
                                                                "tokenType",
                                                            },
                                                          },
                                                          [
                                                            t(
                                                              "b-form-select",
                                                              {
                                                                attrs: {
                                                                  id: "tokenType",
                                                                  size: "sm",
                                                                },
                                                                on: {
                                                                  input:
                                                                    e.loadToken,
                                                                },
                                                                model: {
                                                                  value:
                                                                    e.tokenType,
                                                                  callback:
                                                                    function (
                                                                      t
                                                                    ) {
                                                                      e.tokenType =
                                                                        t;
                                                                    },
                                                                  expression:
                                                                    "tokenType",
                                                                },
                                                              },
                                                              e._l(
                                                                e.tokenList,
                                                                function (
                                                                  a,
                                                                  n
                                                                ) {
                                                                  return t(
                                                                    "option",
                                                                    {
                                                                      domProps:
                                                                        {
                                                                          value:
                                                                            n,
                                                                        },
                                                                    },
                                                                    [
                                                                      e._v(
                                                                        "\n                                                " +
                                                                          e._s(
                                                                            a.contractName
                                                                          ) +
                                                                          "\n                                            "
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
                                                        e._v(" "),
                                                        t(
                                                          "b-form-group",
                                                          {
                                                            attrs: {
                                                              description:
                                                                "Choose your Network.",
                                                              label:
                                                                "Network *",
                                                              "label-for":
                                                                "network",
                                                            },
                                                          },
                                                          [
                                                            t(
                                                              "b-form-select",
                                                              {
                                                                attrs: {
                                                                  id: "network",
                                                                  size: "sm",
                                                                },
                                                                on: {
                                                                  input:
                                                                    e.initDapp,
                                                                },
                                                                model: {
                                                                  value:
                                                                    e.currentNetwork,
                                                                  callback:
                                                                    function (
                                                                      t
                                                                    ) {
                                                                      e.currentNetwork =
                                                                        t;
                                                                    },
                                                                  expression:
                                                                    "currentNetwork",
                                                                },
                                                              },
                                                              e._l(
                                                                e.network.list,
                                                                function (
                                                                  a,
                                                                  n
                                                                ) {
                                                                  return t(
                                                                    "option",
                                                                    {
                                                                      domProps:
                                                                        {
                                                                          value:
                                                                            n,
                                                                        },
                                                                    },
                                                                    [
                                                                      e._v(
                                                                        e._s(
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
                                                          ],
                                                          1
                                                        ),
                                                        e._v(" "),
                                                        "mainnet" !==
                                                        e.currentNetwork
                                                          ? t(
                                                              "b-alert",
                                                              {
                                                                attrs: {
                                                                  show: "",
                                                                  variant:
                                                                    "warning",
                                                                },
                                                              },
                                                              [
                                                                t("strong", [
                                                                  e._v(
                                                                    "\n                                            You selected a TEST Network.\n                                        "
                                                                  ),
                                                                ]),
                                                                e._v(" "),
                                                                t("hr"),
                                                                e._v(
                                                                  "\n                                        To deploy on Main Network you must select Binance Smart Chain.\n                                    "
                                                                ),
                                                              ]
                                                            )
                                                          : e._e(),
                                                        e._v(" "),
                                                        t(
                                                          "b-link",
                                                          {
                                                            attrs: {
                                                              href: "https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain",
                                                              target: "_blank",
                                                            },
                                                          },
                                                          [
                                                            t("small", [
                                                              e._v(
                                                                "How to connect MetaMask to Binance Smart Chain?"
                                                              ),
                                                            ]),
                                                          ]
                                                        ),
                                                      ],
                                                      1
                                                    ),
                                                    e._v(" "),
                                                    t(
                                                      "b-card",
                                                      {
                                                        staticClass: "mt-3",
                                                        attrs: {
                                                          header: "Agreement",
                                                          "header-bg-variant":
                                                            "dark",
                                                          "header-text-variant":
                                                            "white",
                                                        },
                                                      },
                                                      [
                                                        t(
                                                          "ValidationProvider",
                                                          {
                                                            attrs: {
                                                              name: "Token Agreement",
                                                              rules: {
                                                                required: !0,
                                                              },
                                                            },
                                                            scopedSlots: e._u(
                                                              [
                                                                {
                                                                  key: "default",
                                                                  fn: function ({
                                                                    errors: a,
                                                                  }) {
                                                                    return [
                                                                      t(
                                                                        "b-form-group",
                                                                        {
                                                                          attrs:
                                                                            {
                                                                              "label-for":
                                                                                "tokenAgreement",
                                                                            },
                                                                        },
                                                                        [
                                                                          t(
                                                                            "b-form-checkbox",
                                                                            {
                                                                              class:
                                                                                {
                                                                                  "is-invalid":
                                                                                    a.length >
                                                                                    0,
                                                                                },
                                                                              attrs:
                                                                                {
                                                                                  id: "tokenAgreement",
                                                                                  name: "tokenAgreement",
                                                                                  value:
                                                                                    "accepted",
                                                                                  "unchecked-value":
                                                                                    "",
                                                                                  size: "sm",
                                                                                },
                                                                              model:
                                                                                {
                                                                                  value:
                                                                                    e.agreement,
                                                                                  callback:
                                                                                    function (
                                                                                      t
                                                                                    ) {
                                                                                      e.agreement =
                                                                                        t;
                                                                                    },
                                                                                  expression:
                                                                                    "agreement",
                                                                                },
                                                                            },
                                                                            [
                                                                              t(
                                                                                "p",
                                                                                [
                                                                                  e._v(
                                                                                    "\n                                                    I have read, understood and agreed to\n                                                    BEP20 Token Generator's\n                                                    "
                                                                                  ),
                                                                                  t(
                                                                                    "u",
                                                                                    {
                                                                                      directives:
                                                                                        [
                                                                                          {
                                                                                            name: "b-modal",
                                                                                            rawName:
                                                                                              "v-b-modal.modal-terms",
                                                                                            modifiers:
                                                                                              {
                                                                                                "modal-terms":
                                                                                                  !0,
                                                                                              },
                                                                                          },
                                                                                        ],
                                                                                    },
                                                                                    [
                                                                                      e._v(
                                                                                        "Terms of Use"
                                                                                      ),
                                                                                    ]
                                                                                  ),
                                                                                  e._v(
                                                                                    ".\n                                                "
                                                                                  ),
                                                                                ]
                                                                              ),
                                                                            ]
                                                                          ),
                                                                          e._v(
                                                                            " "
                                                                          ),
                                                                          t(
                                                                            "small",
                                                                            {
                                                                              directives:
                                                                                [
                                                                                  {
                                                                                    name: "show",
                                                                                    rawName:
                                                                                      "v-show",
                                                                                    value:
                                                                                      a.length >
                                                                                      0,
                                                                                    expression:
                                                                                      "errors.length > 0",
                                                                                  },
                                                                                ],
                                                                              staticClass:
                                                                                "text-danger",
                                                                            },
                                                                            [
                                                                              e._v(
                                                                                "\n                                                " +
                                                                                  e._s(
                                                                                    a[0]
                                                                                  ) +
                                                                                  "\n                                            "
                                                                              ),
                                                                            ]
                                                                          ),
                                                                        ],
                                                                        1
                                                                      ),
                                                                    ];
                                                                  },
                                                                },
                                                              ],
                                                              null,
                                                              !1,
                                                              2263364539
                                                            ),
                                                          }
                                                        ),
                                                      ],
                                                      1
                                                    ),
                                                    e._v(" "),
                                                    t(
                                                      "b-card",
                                                      {
                                                        staticClass: "mt-3",
                                                        attrs: {
                                                          header: "Transaction",
                                                          "header-bg-variant":
                                                            "info",
                                                          "header-text-variant":
                                                            "white",
                                                          "no-body": "",
                                                        },
                                                      },
                                                      [
                                                        t(
                                                          "b-list-group",
                                                          {
                                                            staticClass:
                                                              "payment-box",
                                                            attrs: {
                                                              flush: "",
                                                            },
                                                          },
                                                          [
                                                            t(
                                                              "b-list-group-item",
                                                              {
                                                                staticClass:
                                                                  "d-flex justify-content-between",
                                                              },
                                                              [
                                                                t(
                                                                  "span",
                                                                  [
                                                                    e._v(
                                                                      "\n                                                Commission Fee:\n                                                "
                                                                    ),
                                                                    t(
                                                                      "b-icon-info-circle",
                                                                      {
                                                                        directives:
                                                                          [
                                                                            {
                                                                              name: "b-popover",
                                                                              rawName:
                                                                                "v-b-popover.v-warning.hover.top",
                                                                              value:
                                                                                "Commission will be transferred directly to us through the BSC network as part of your payment. Commission will support BEP20 Token Generator to keep it safe, running and constantly updated.",
                                                                              expression:
                                                                                "\n                                                    'Commission will be transferred directly to us through the ' +\n                                                    'BSC network as part of your payment. ' +\n                                                    'Commission will support BEP20 Token Generator to keep it ' +\n                                                    'safe, running and constantly updated.'",
                                                                              modifiers:
                                                                                {
                                                                                  "v-warning":
                                                                                    !0,
                                                                                  hover:
                                                                                    !0,
                                                                                  top: !0,
                                                                                },
                                                                            },
                                                                          ],
                                                                      }
                                                                    ),
                                                                  ],
                                                                  1
                                                                ),
                                                                e._v(" "),
                                                                t(
                                                                  "b-badge",
                                                                  {
                                                                    attrs: {
                                                                      variant:
                                                                        "success",
                                                                    },
                                                                  },
                                                                  [
                                                                    e._v(
                                                                      "\n                                                " +
                                                                        e._s(
                                                                          e.web3.utils.fromWei(
                                                                            e.feeAmount,
                                                                            "ether"
                                                                          )
                                                                        ) +
                                                                        " BNB\n                                            "
                                                                    ),
                                                                  ]
                                                                ),
                                                              ],
                                                              1
                                                            ),
                                                            e._v(" "),
                                                            t(
                                                              "b-list-group-item",
                                                              {
                                                                staticClass:
                                                                  "d-flex justify-content-between",
                                                              },
                                                              [
                                                                t(
                                                                  "span",
                                                                  [
                                                                    e._v(
                                                                      "\n                                                Gas Fee:\n                                                "
                                                                    ),
                                                                    t(
                                                                      "b-icon-info-circle",
                                                                      {
                                                                        directives:
                                                                          [
                                                                            {
                                                                              name: "b-popover",
                                                                              rawName:
                                                                                "v-b-popover.v-warning.hover.top",
                                                                              value:
                                                                                "It depends on Gas Limit and on current Gas price average. MetaMask will suggest both. Do not decrease Gas Limit to avoid transaction to fail. If you want, you can decrease Gas Price but your transaction could remain pending for minutes/hours. Read how to calculate right value in our FAQ. Failed transaction can't be refunded.",
                                                                              expression:
                                                                                "\n                                                    'It depends on Gas Limit and on current Gas price average. ' +\n                                                    'MetaMask will suggest both. ' +\n                                                    'Do not decrease Gas Limit to avoid transaction to fail. ' +\n                                                    'If you want, you can decrease Gas Price but your ' +\n                                                    'transaction could remain pending for minutes/hours. ' +\n                                                    'Read how to calculate right value in our FAQ. ' +\n                                                    'Failed transaction can\\'t be refunded.'",
                                                                              modifiers:
                                                                                {
                                                                                  "v-warning":
                                                                                    !0,
                                                                                  hover:
                                                                                    !0,
                                                                                  top: !0,
                                                                                },
                                                                            },
                                                                          ],
                                                                      }
                                                                    ),
                                                                  ],
                                                                  1
                                                                ),
                                                                e._v(" "),
                                                                t(
                                                                  "b-badge",
                                                                  {
                                                                    attrs: {
                                                                      variant:
                                                                        "info",
                                                                    },
                                                                  },
                                                                  [
                                                                    e._v(
                                                                      "\n                                                Variable\n                                            "
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
                                                    e._v(" "),
                                                    t(
                                                      "b-button",
                                                      {
                                                        staticClass:
                                                          "mt-3 py-3 px-5 text-uppercase",
                                                        attrs: {
                                                          variant: "success",
                                                          size: "lg",
                                                          block: "",
                                                          type: "submit",
                                                        },
                                                      },
                                                      [
                                                        e._v(
                                                          "\n                                    Confirm\n                                "
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
      t.default = i.exports;
    },
  },
]);
