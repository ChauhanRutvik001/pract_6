const express = require("express");
const router = express.Router();
const dataControl = require("../controller/HistoryData");
const protectMid = require("../Middleware/protect");

router.route("/history").get(protectMid.protect, dataControl.fetchUserData2);

module.exports = router;