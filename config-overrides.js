const path = require("path");
module.exports = function override(config, env) {
  config.resolve.alias = {
    ...config.resolve.alias,
    components: path.resolve(__dirname, "src/components"),
    constants: path.resolve(__dirname, "src/constants"),
    styles: path.resolve(__dirname, "src/styles"),
    static: path.resolve(__dirname, "src/static"),
    services: path.resolve(__dirname, "src/services")
  };
  return config;
};
