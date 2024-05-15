const Joi = require("joi");
const schemaLogin = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

module.exports = schemaLogin;
