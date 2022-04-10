const express = require("express");
const router = express.Router();
const UserController = require("../Controllers/UserController");

router.post("/register", UserController.createUser);

module.exports = router;
