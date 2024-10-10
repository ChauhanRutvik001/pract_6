const express = require("express");
const router = express.Router();
const dataControl = require("../controller/request");
const protectMid = require("../Middleware/protect");

router.route("/request").post(dataControl.fetchUserData4);

module.exports = router;