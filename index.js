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

const nativeDate = ({
  type: "Date",
  isEdit: true,
  run: (nm, v, attrs, cls, required, field) => {
    return (
      input({
        type: "date",
        class: ["form-control", "dt", cls],
        name: text_attr(nm),
        placeholder: attrs.placeholder,
        disabled: attrs.disabled,
        id: `input${text_attr(nm)}`,
        value: v && new Date(Date.parse(v)).toISOString().substr(0,10),
      })
    );
  },
});

module.exports = {
  sc_plugin_api_version: 1,
  fieldviews: { nativeDate },
  plugin_name: "sc-date"
};