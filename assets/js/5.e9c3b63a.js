(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    236: function (e, t, i) {
      "use strict";
      t.a = {
        data: () => ({
          tokenDetails: [
            {
              name: "HelloBEP20",
              version: "2.0.0",
              standard: !0,
              verified: !0,
              detailed: !0,
              customizeDecimals: !1,
              supplyType: "100k",
              accessType: "Ownable",
              mintable: !1,
              burnable: !1,
              operable: !1,
              tokenRecover: !1,
              removeCopyright: !1,
              originalPrice: 0.1,
              price: 0,
              gas: 1330639,
            },
            {
              name: "SimpleBEP20",
              version: "2.0.0",
              standard: !0,
              verified: !0,
              detailed: !0,
              customizeDecimals: !1,
              supplyType: "Fixed",
              accessType: "Ownable",
              mintable: !1,
              burnable: !1,
              operable: !1,
              tokenRecover: !1,
              removeCopyright: !1,
              originalPrice: 0.5,
              price: 0.15,
              gas: 1333276,
            },
            {
              name: "StandardBEP20",
              version: "2.0.0",
              standard: !0,
              verified: !0,
              detailed: !0,
              customizeDecimals: !0,
              supplyType: "Fixed",
              accessType: "Ownable",
              mintable: !1,
              burnable: !1,
              operable: !1,
              tokenRecover: !1,
              removeCopyright: !0,
              originalPrice: 0.75,
              price: 0.25,
              gas: 1260139,
            },
            {
              name: "BurnableBEP20",
              version: "2.0.0",
              standard: !0,
              verified: !0,
              detailed: !0,
              customizeDecimals: !0,
              supplyType: "Fixed",
              accessType: "Ownable",
              mintable: !1,
              burnable: !0,
              operable: !1,
              tokenRecover: !1,
              removeCopyright: !0,
              originalPrice: 1,
              price: 0.45,
              gas: 1444650,
            },
            {
              name: "MintableBEP20",
              version: "2.0.0",
              standard: !0,
              verified: !0,
              detailed: !0,
              customizeDecimals: !0,
              supplyType: "Capped",
              accessType: "Ownable",
              mintable: !0,
              burnable: !1,
              operable: !1,
              tokenRecover: !1,
              removeCopyright: !0,
              originalPrice: 1.25,
              price: 0.55,
              gas: 1524151,
            },
            {
              name: "CommonBEP20",
              version: "2.0.0",
              standard: !0,
              verified: !0,
              detailed: !0,
              customizeDecimals: !0,
              supplyType: "Capped",
              accessType: "Ownable",
              mintable: !0,
              burnable: !0,
              operable: !1,
              tokenRecover: !1,
              removeCopyright: !0,
              originalPrice: 1.5,
              price: 1,
              gas: 1708581,
            },
            {
              name: "UnlimitedBEP20",
              version: "2.0.0",
              standard: !0,
              verified: !0,
              detailed: !0,
              customizeDecimals: !0,
              supplyType: "Unlimited",
              accessType: "Ownable",
              mintable: !0,
              burnable: !0,
              operable: !1,
              tokenRecover: !1,
              removeCopyright: !0,
              originalPrice: 1.75,
              price: 1.25,
              gas: 1637163,
            },
            {
              name: "AmazingBEP20",
              version: "2.0.0",
              standard: !0,
              verified: !0,
              detailed: !0,
              customizeDecimals: !0,
              supplyType: "Unlimited",
              accessType: "Ownable",
              mintable: !0,
              burnable: !0,
              operable: !0,
              tokenRecover: !0,
              removeCopyright: !0,
              originalPrice: 2,
              price: 1.5,
              gas: 2254686,
            },
          ],
        }),
      };
    },
    263: function (e, t, i) {
      "use strict";
      i.r(t);
      var a = {
          name: "PricingTable",
          mixins: [i(236).a],
          data: () => ({ carousel: null, slide: null }),
          mounted() {
            i.e(19)
              .then(i.t.bind(null, 252, 7))
              .then((e) => {
                (this.carousel = e.Carousel), (this.slide = e.Slide);
              })
              .catch((e) => {
                console.log(e);
              });
          },
        },
        s = i(15),
        n = Object(s.a)(
          a,
          function () {
            var e = this,
              t = e._self._c;
            return t(
              "div",
              { staticClass: "pricing-table" },
              [
                t(
                  "b-row",
                  { staticClass: "mb-5" },
                  [
                    t("b-col", { attrs: { lg: "10", "offset-lg": "1" } }, [
                      t(
                        "h4",
                        {
                          staticClass:
                            "text-center font-weight-light text-light",
                        },
                        [
                          e._v(
                            "\n                Choose between " +
                              e._s(e.tokenDetails.length) +
                              " different Token types.\n            "
                          ),
                        ]
                      ),
                      e._v(" "),
                      t(
                        "p",
                        {
                          staticClass:
                            "text-center font-weight-light text-light",
                        },
                        [
                          e._v(
                            "\n                What are your Token requirements?\n            "
                          ),
                        ]
                      ),
                    ]),
                  ],
                  1
                ),
                e._v(" "),
                e.carousel
                  ? t(
                      e.carousel,
                      {
                        tag: "component",
                        attrs: {
                          perPageCustom: [
                            [0, 1],
                            [576, 2],
                            [992, 3],
                            [1536, 4],
                          ],
                          paginationColor: "#343a40",
                          paginationActiveColor: "#f8f9fa",
                        },
                      },
                      e._l(e.tokenDetails, function (i, a) {
                        return e.slide
                          ? t(
                              e.slide,
                              { tag: "component" },
                              [
                                t(
                                  "b-card",
                                  {
                                    staticClass: "mb-3 mx-3",
                                    attrs: {
                                      "no-body": "",
                                      itemscope: "",
                                      itemtype: "http://schema.org/Product",
                                    },
                                  },
                                  [
                                    t(
                                      "b-card-title",
                                      {
                                        staticClass:
                                          "pt-5 font-weight-light text-center",
                                        attrs: { itemprop: "name" },
                                      },
                                      [
                                        e._v(
                                          "\n                    " +
                                            e._s(i.name) +
                                            "\n                "
                                        ),
                                      ]
                                    ),
                                    e._v(" "),
                                    t(
                                      "p",
                                      { staticClass: "card-price text-center" },
                                      [
                                        i.originalPrice !== i.price
                                          ? t(
                                              "b-badge",
                                              { attrs: { variant: "danger" } },
                                              [
                                                t("s", [
                                                  e._v(
                                                    e._s(i.originalPrice) + " "
                                                  ),
                                                  t("small", [e._v("BNB")]),
                                                ]),
                                              ]
                                            )
                                          : e._e(),
                                        e._v(" "),
                                        t(
                                          "span",
                                          {
                                            staticClass: "align-middle",
                                            attrs: {
                                              itemprop: "offers",
                                              itemscope: "",
                                              itemtype:
                                                "http://schema.org/Offer",
                                            },
                                          },
                                          [
                                            t(
                                              "span",
                                              { attrs: { itemprop: "price" } },
                                              [e._v(e._s(i.price))]
                                            ),
                                            e._v(" "),
                                            t(
                                              "small",
                                              {
                                                staticClass: "term",
                                                attrs: {
                                                  itemprop: "priceCurrency",
                                                },
                                              },
                                              [e._v("BNB")]
                                            ),
                                          ]
                                        ),
                                      ],
                                      1
                                    ),
                                    e._v(" "),
                                    t(
                                      "b-list-group",
                                      { attrs: { flush: "" } },
                                      [
                                        t(
                                          "b-list-group-item",
                                          {
                                            staticClass:
                                              "d-flex justify-content-between align-items-center",
                                          },
                                          [
                                            e._v(
                                              "\n                        BEP20 Compliant "
                                            ),
                                            t("ui--checkmark", {
                                              attrs: { value: i.standard },
                                            }),
                                          ],
                                          1
                                        ),
                                        e._v(" "),
                                        t(
                                          "b-list-group-item",
                                          {
                                            staticClass:
                                              "d-flex justify-content-between align-items-center",
                                          },
                                          [
                                            e._v(
                                              "\n                        Verified Source Code "
                                            ),
                                            t("ui--checkmark", {
                                              attrs: { value: i.verified },
                                            }),
                                          ],
                                          1
                                        ),
                                        e._v(" "),
                                        t(
                                          "b-list-group-item",
                                          {
                                            staticClass:
                                              "d-flex justify-content-between align-items-center",
                                          },
                                          [
                                            e._v(
                                              "\n                        Detailed "
                                            ),
                                            t("ui--checkmark", {
                                              attrs: { value: i.detailed },
                                            }),
                                          ],
                                          1
                                        ),
                                        e._v(" "),
                                        t(
                                          "b-list-group-item",
                                          {
                                            staticClass:
                                              "d-flex justify-content-between align-items-center",
                                          },
                                          [
                                            e._v(
                                              "\n                        Customizable Decimals "
                                            ),
                                            t("ui--checkmark", {
                                              attrs: {
                                                value: i.customizeDecimals,
                                              },
                                            }),
                                          ],
                                          1
                                        ),
                                        e._v(" "),
                                        t(
                                          "b-list-group-item",
                                          {
                                            staticClass:
                                              "d-flex justify-content-between align-items-center",
                                          },
                                          [
                                            e._v(
                                              "\n                        Remove Copyright "
                                            ),
                                            t("ui--checkmark", {
                                              attrs: {
                                                value: i.removeCopyright,
                                              },
                                            }),
                                          ],
                                          1
                                        ),
                                        e._v(" "),
                                        t(
                                          "b-list-group-item",
                                          {
                                            staticClass:
                                              "d-flex justify-content-between align-items-center",
                                          },
                                          [
                                            e._v(
                                              "\n                        Supply Type\n                        "
                                            ),
                                            t(
                                              "b-badge",
                                              {
                                                attrs: {
                                                  variant:
                                                    "Capped" === i.supplyType
                                                      ? "success"
                                                      : "Unlimited" ===
                                                        i.supplyType
                                                      ? "info"
                                                      : "Fixed" === i.supplyType
                                                      ? "warning"
                                                      : "danger",
                                                },
                                              },
                                              [
                                                e._v(
                                                  "\n                            " +
                                                    e._s(i.supplyType) +
                                                    "\n                        "
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
                                              "d-flex justify-content-between align-items-center",
                                          },
                                          [
                                            e._v(
                                              "\n                        Access Type\n                        "
                                            ),
                                            t(
                                              "b-badge",
                                              {
                                                attrs: {
                                                  variant:
                                                    "Role Based" ===
                                                    i.accessType
                                                      ? "success"
                                                      : "Ownable" ===
                                                        i.accessType
                                                      ? "info"
                                                      : "warning",
                                                },
                                              },
                                              [
                                                e._v(
                                                  "\n                            " +
                                                    e._s(i.accessType) +
                                                    "\n                        "
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
                                              "d-flex justify-content-between align-items-center",
                                          },
                                          [
                                            e._v(
                                              "\n                        Burnable "
                                            ),
                                            t("ui--checkmark", {
                                              attrs: { value: i.burnable },
                                            }),
                                          ],
                                          1
                                        ),
                                        e._v(" "),
                                        t(
                                          "b-list-group-item",
                                          {
                                            staticClass:
                                              "d-flex justify-content-between align-items-center",
                                          },
                                          [
                                            e._v(
                                              "\n                        Mintable "
                                            ),
                                            t("ui--checkmark", {
                                              attrs: { value: i.mintable },
                                            }),
                                          ],
                                          1
                                        ),
                                        e._v(" "),
                                        t(
                                          "b-list-group-item",
                                          {
                                            staticClass:
                                              "d-flex justify-content-between align-items-center",
                                          },
                                          [
                                            e._v(
                                              "\n                        Operable (ERC1363) "
                                            ),
                                            t("ui--checkmark", {
                                              attrs: { value: i.operable },
                                            }),
                                          ],
                                          1
                                        ),
                                        e._v(" "),
                                        t(
                                          "b-list-group-item",
                                          {
                                            staticClass:
                                              "d-flex justify-content-between align-items-center",
                                          },
                                          [
                                            e._v(
                                              "\n                        Token Recover "
                                            ),
                                            t("ui--checkmark", {
                                              attrs: { value: i.tokenRecover },
                                            }),
                                          ],
                                          1
                                        ),
                                        e._v(" "),
                                        t(
                                          "b-list-group-item",
                                          {
                                            staticClass:
                                              "justify-content-between align-items-center text-center py-3",
                                            attrs: {
                                              variant: "warning",
                                              to: {
                                                path: "/create-token/",
                                                query: { tokenType: i.name },
                                              },
                                              itemprop: "url",
                                            },
                                          },
                                          [
                                            e._v(
                                              "\n                        Create\n                    "
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
                            )
                          : e._e();
                      }),
                      1
                    )
                  : e._e(),
                e._v(" "),
                t(
                  "b-row",
                  [
                    t(
                      "b-col",
                      {
                        staticClass: "mt-4",
                        attrs: { lg: "6", "offset-lg": "3" },
                      },
                      [
                        t("p", { staticClass: "text-center text-light" }, [
                          e._v(
                            "\n                * GAS fee will be added to final amount\n            "
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
      t.default = n.exports;
    },
  },
]);
