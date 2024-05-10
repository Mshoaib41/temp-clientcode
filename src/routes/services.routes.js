const express = require("express");
//const { upload } = require("../middleware");

const { ServicesController } = require("../controller");
const router = express.Router();

router.post("/postService", ServicesController.postService);
router.get("/getService", ServicesController.getAllServices);
router.patch("/updateService/:id", ServicesController.updateService);
router.delete("/deleteService/:id", ServicesController.deleteService);

module.exports = router;
