(window.webpackJsonp = window.webpackJsonp || []).push([
  [13],
  {
    262: function (t, e, o) {
      "use strict";
      o.r(e);
      var s = {
          name: "Loader",
          props: {
            loading: { type: Boolean, default: !1 },
            color: { type: String, default: "#ffc107" },
            size: { type: Number, default: 12 },
          },
        },
        l = o(15),
        a = Object(l.a)(
          s,
          function () {
            var t = this._self._c;
            return this.loading
              ? t("PulseLoader", {
                  staticClass: "my-3",
                  attrs: {
                    loading: this.loading,
                    color: this.color,
                    size: this.size,
                  },
                })
              : this._e();
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = a.exports;
    },
  },
]);
