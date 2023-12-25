const {
  input,
  div,
  text,
  script,
  domReady,
  text_attr,
} = require("@saltcorn/markup/tags");

const nativeDate = {
  type: "Date",
  isEdit: true,
  run: (nm, v, attrs, cls) => {
    return (
      input({
        type: "date",
        class: ["form-control", cls],
        name: text_attr(nm),
        placeholder: attrs.placeholder,
        disabled: attrs.disabled,
        id: `input${text_attr(nm)}`,
        ...(typeof v !== "undefined" &&
          v !== null && {
            value: text_attr(
              typeof v === "string"
                ? v
                : v
                ? (typeof v === "number" ? new Date(v) : v).toISOString()
                : undefined
            ),
          }),
      }) 
    );
  },
};

module.exports = {
  sc_plugin_api_version: 1,
  fieldviews: { nativeDate },
  plugin_name: "sc-date"
};