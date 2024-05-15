const {sanitize} = require('../middleware')
const routes = [
  require("./auth.routes"),
  require("./settings.routes")
]


module.exports = function (app) {
  app.use("/api",
    sanitize,
    routes
  );
};
