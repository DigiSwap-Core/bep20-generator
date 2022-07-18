(window.webpackJsonp = window.webpackJsonp || []).push([
  [9],
  {
    258: function (a, e, n) {
      "use strict";
      n.r(e);
      var c = {
          name: "Checkmark",
          props: { value: { type: Boolean, default: !1 } },
        },
        l = n(15),
        t = Object(l.a)(
          c,
          function () {
            var a = this._self._c;
            return a(
              "span",
              [
                this.value
                  ? a("b-icon-check-circle-fill", {
                      attrs: { variant: "success" },
                    })
                  : a("b-icon-x-circle-fill", { attrs: { variant: "danger" } }),
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
      e.default = t.exports;
    },
  },
]);
