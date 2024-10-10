const express = require("express");
const router = express.Router();
const dataControl = require("../controller/admin_application");
const protectMid = require("../Middleware/protect");

router.route("/admin_application").get(protectMid.protect, dataControl.fetchUserData3);

module.exports = router;