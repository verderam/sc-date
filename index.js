const {
  input,
  div,
  a,
  text,
  script,
  text_attr,
  domReady,
  style,
} = require("@saltcorn/markup/tags");

const nativeDate = (dt) => ({
  type: "Date",
  isEdit: true,
  run: (nm, v, attrs, cls, required, field) => {
    return (
      input({
        type: "date",
        name: text_attr(nm),
        id: `input${text_attr(nm)}`,
        value: v,
      })
    );
  },
});

module.exports = {
  sc_plugin_api_version: 1,
  fieldviews: { nativeDate },
  plugin_name: "sc-date"
};