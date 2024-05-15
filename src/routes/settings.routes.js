const express = require("express");

const { SettingController } = require("../controller");
const auth = require("../middleware/auth");


const router = express.Router();
router.post("/settings", auth, SettingController.create);
module.exports = router;
