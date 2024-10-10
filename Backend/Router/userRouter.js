const express = require("express");
const router = express.Router();
const authControll = require("../controller/userController");

router.post("/signup", authControll.signup); // Use router.post for signup route
router.post("/login", authControll.login);   // Use router.post for login route

module.exports = router; // Corrected exports statement
