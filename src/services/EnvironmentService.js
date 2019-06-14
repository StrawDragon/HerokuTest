// import { DEFAULT_ENV } from "constants/common/enviroment";

const EnviromentService = new Proxy(
  {},
  {
    get: (target, name) => {
      return process.env[name];
    }
  }
);

module.exports = EnviromentService;
