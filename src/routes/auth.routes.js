const express = require("express");

const { UserController } = require("../controller");
const validateRequest = require("../validator");
const schemaLogin = require("../validator/loginValidator");
const router = express.Router();

router.post("/login", validateRequest(schemaLogin, "body"), UserController.login);
router.post("/register", validateRequest(schemaLogin, "body"), UserController.register);

module.exports = router;
