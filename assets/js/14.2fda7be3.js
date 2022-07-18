(window.webpackJsonp = window.webpackJsonp || []).push([
  [14],
  {
    238: function (t, e, s) {
      "use strict";
      s.r(e);
      var r = { name: "Footer" },
        a = s(15),
        i = Object(a.a)(
          r,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "b-container",
              { staticClass: "footer", attrs: { fluid: "" } },
              [
                e(
                  "b-row",
                  { staticClass: "bg-dark text-light py-4" },
                  [
                    e(
                      "b-col",
                      { attrs: { lg: "12", xl: "8", "offset-xl": "2" } },
                      [
                        e(
                          "b-row",
                          [
                            e(
                              "b-col",
                              { attrs: { lg: "4" } },
                              [
                                e(
                                  "b-list-group",
                                  { attrs: { flush: "" } },
                                  [
                                    e(
                                      "b-list-group-item",
                                      {
                                        staticClass: "text-light",
                                        attrs: { to: "/" },
                                      },
                                      [
                                        t._v(
                                          "\n                            BEP20 Token Generator\n                        "
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    e(
                                      "b-list-group-item",
                                      {
                                        staticClass: "text-light",
                                        attrs: { to: "/docs/" },
                                      },
                                      [
                                        t._v(
                                          "\n                            Documentation\n                        "
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
                              "b-col",
                              { attrs: { lg: "4" } },
                              [
                                e(
                                  "b-list-group",
                                  { attrs: { flush: "" } },
                                  [
                                    e(
                                      "b-list-group-item",
                                      {
                                        staticClass: "text-light",
                                        attrs: { to: "/create-token/" },
                                      },
                                      [
                                        t._v(
                                          "\n                            Create BEP20 Token\n                        "
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    e(
                                      "b-list-group-item",
                                      {
                                        staticClass: "text-warning",
                                        attrs: {
                                          href: "https://digiswap-core.github.io/erc20-generator/",
                                          target: "_blank",
                                        },
                                      },
                                      [
                                        t._v(
                                          "\n                            Create ERC20 Token\n                        "
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
                    ),
                    t._v(" "),
                    e(
                      "b-col",
                      { attrs: { lg: "12", xl: "8", "offset-xl": "2" } },
                      [
                        e("hr"),
                        t._v(" "),
                        e(
                          "b-list-group",
                          { attrs: { flush: "" } },
                          [
                            e("b-list-group-item", [
                              e(
                                "small",
                                [
                                  t._v(
                                    "\n                        by\n                        "
                                  ),
                                  e(
                                    "b-link",
                                    {
                                      staticClass: "text-warning",
                                      attrs: {
                                        href: "https://digiswap.finance",
                                        target: "_blank",
                                      },
                                    },
                                    [
                                      t._v(
                                        "\n                            DigiSwap Finance\n                        "
                                      ),
                                    ]
                                  ),
                                ],
                                1
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
                e(
                  "b-modal",
                  {
                    attrs: {
                      id: "modal-terms",
                      title: "Terms of Use",
                      size: "lg",
                      centered: "",
                      "hide-footer": "",
                    },
                  },
                  [
                    e("b-embed", {
                      attrs: {
                        type: "iframe",
                        aspect: "4by3",
                        src: "https://digiswap-core.github.io/bep20-generator-terms/",
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
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = i.exports;
    },
  },
]);
