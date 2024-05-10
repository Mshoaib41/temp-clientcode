module.exports = function (app) {
  app.use("/api", require("./auth.routes"));
  app.use("/api", require("./services.routes"));
};
