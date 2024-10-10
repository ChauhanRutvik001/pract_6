const express = require("express");
const router = express.Router();
const dataControl = require("../controller/fetchData");
const protectMid = require("../Middleware/protect");

router.route("/userdata").get(protectMid.protect, dataControl.fetchUserData);

module.exports = router;
