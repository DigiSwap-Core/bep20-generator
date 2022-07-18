(window.webpackJsonp = window.webpackJsonp || []).push([
  [15],
  {
    239: function (a, t, e) {
      "use strict";
      e.r(t);
      var n = {
          name: "Header",
          props: { page: { type: String, default: null } },
        },
        r = e(15),
        o = Object(r.a)(
          n,
          function () {
            var a = this,
              t = a._self._c;
            return t(
              "b-navbar",
              { attrs: { toggleable: "md", type: "dark", variant: "dark" } },
              [
                t("b-navbar-toggle", { attrs: { target: "nav_collapse" } }),
                a._v(" "),
                t(
                  "b-navbar-brand",
                  { attrs: { to: "/" } },
                  [t("b-icon-house")],
                  1
                ),
                a._v(" "),
                t(
                  "b-collapse",
                  { attrs: { "is-nav": "", id: "nav_collapse" } },
                  [
                    t(
                      "b-navbar-nav",
                      [
                        t(
                          "b-nav-item",
                          {
                            attrs: {
                              to: "/create-token/",
                              active: "Generator" === a.page,
                            },
                          },
                          [a._v("Create BEP20 Token")]
                        ),
                      ],
                      1
                    ),
                    a._v(" "),
                    t(
                      "b-navbar-nav",
                      { staticClass: "ml-auto" },
                      [
                        t(
                          "b-nav-item",
                          { attrs: { to: "/", active: "Home" === a.page } },
                          [a._v("Home")]
                        ),
                        a._v(" "),
                        t(
                          "b-nav-item",
                          {
                            attrs: { to: "/docs/", active: "Docs" === a.page },
                          },
                          [a._v("Docs")]
                        ),
                        a._v(" "),
                        t(
                          "b-nav-item",
                          {
                            attrs: {
                              target: "_blank",
                              href: "https://digiswap-core.github.io/bep20-generator/",
                            },
                          },
                          [t("small", [a._v("Blog")])]
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
      t.default = o.exports;
    },
  },
]);
