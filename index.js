const nativedate = {
  name: "Native date",
  sql_name: "date",
  fieldviews: {
    show: { isEdit: false, run: (s) => `${s}` },
    edit: {
      isEdit: true,
      run: (nm, v, attrs, cls) =>
        `<input type="date" class="form-control ${cls}" name="${nm}" id="input${nm}" ${
          v || v === 0 ? `value="${v}"` : ""
        }>`,
    },
  },
  read: (v) => {
    return v; 
  },
};

module.exports = { sc_plugin_api_version: 1, types: [nativedate] };
