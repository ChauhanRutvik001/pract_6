const express = require("express");
const router = express.Router();
const dataControl = require("../controller/SendData");

router.post("/reason", dataControl.sendData);

module.exports = router;