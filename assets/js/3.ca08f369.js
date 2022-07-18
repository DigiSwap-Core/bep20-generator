(window.webpackJsonp = window.webpackJsonp || []).push([
  [3, 14, 15],
  {
    235: function (t, e, a) {},
    237: function (t, e, a) {
      "use strict";
      a(235);
    },
    238: function (t, e, a) {
      "use strict";
      a.r(e);
      var r = { name: "Footer" },
        s = a(15),
        n = Object(s.a)(
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
      e.default = n.exports;
    },
    239: function (t, e, a) {
      "use strict";
      a.r(e);
      var r = {
          name: "Header",
          props: { page: { type: String, default: null } },
        },
        s = a(15),
        n = Object(s.a)(
          r,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "b-navbar",
              { attrs: { toggleable: "md", type: "dark", variant: "dark" } },
              [
                e("b-navbar-toggle", { attrs: { target: "nav_collapse" } }),
                t._v(" "),
                e(
                  "b-navbar-brand",
                  { attrs: { to: "/" } },
                  [e("b-icon-house")],
                  1
                ),
                t._v(" "),
                e(
                  "b-collapse",
                  { attrs: { "is-nav": "", id: "nav_collapse" } },
                  [
                    e(
                      "b-navbar-nav",
                      [
                        e(
                          "b-nav-item",
                          {
                            attrs: {
                              to: "/create-token/",
                              active: "Generator" === t.page,
                            },
                          },
                          [t._v("Create BEP20 Token")]
                        ),
                      ],
                      1
                    ),
                    t._v(" "),
                    e(
                      "b-navbar-nav",
                      { staticClass: "ml-auto" },
                      [
                        e(
                          "b-nav-item",
                          { attrs: { to: "/", active: "Home" === t.page } },
                          [t._v("Home")]
                        ),
                        t._v(" "),
                        e(
                          "b-nav-item",
                          {
                            attrs: { to: "/docs/", active: "Docs" === t.page },
                          },
                          [t._v("Docs")]
                        ),
                        t._v(" "),
                        e(
                          "b-nav-item",
                          {
                            attrs: {
                              target: "_blank",
                              href: "https://digiswap-core.github.io/bep20-generator/",
                            },
                          },
                          [e("small", [t._v("Blog")])]
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
      e.default = n.exports;
    },
    253: function (t, e, a) {
      "use strict";
      a.r(e);
      var r = a(239),
        s = a(238),
        n = {
          components: { SiteHeader: r.default, SiteFooter: s.default },
          computed: {
            page() {
              return this.$page.frontmatter.component || null;
            },
          },
        },
        i = (a(237), a(15)),
        o = Object(i.a)(
          n,
          function () {
            var t = this._self._c;
            return t(
              "div",
              { staticClass: "page-wrapper" },
              [
                t("site-header", { attrs: { page: this.page } }),
                this._v(" "),
                t(
                  "transition",
                  { attrs: { name: "fade", mode: "out-in" } },
                  [
                    this.page
                      ? t(this.page, { key: this.page, tag: "component" })
                      : this._e(),
                  ],
                  1
                ),
                this._v(" "),
                t("site-footer"),
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
