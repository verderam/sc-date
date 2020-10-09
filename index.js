const { input } = require("@saltcorn/markup/tags");

const angle = {
  name: "Angle",
  sql_name: "double precision",
  fieldviews: {
    show: { isEdit: false, run: (s) => text(s) },
    edit: {
      isEdit: true,
      run: (nm, v, attrs, cls) =>
        input({
          type: "number",
          class: ["form-control", cls],
          name: text_attr(nm),
          disabled: attrs.disabled,
          id: `input${text_attr(nm)}`,
          ...((v || v === 0) && { value: text_attr(v) }),
        }),
    },
  },
  read: (v) => {
    switch (typeof v) {
      case "number":
        return v;
      case "string":
        const parsed = parseFloat(v);
        return isNaN(parsed) ? undefined : parsed;
      default:
        return undefined;
    }
  },
};

module.exports = { sc_plugin_api_version: 1, types: [angle] };
