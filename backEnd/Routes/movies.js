const express = require("express");
const MovieController = require("../Controllers/MovieController");
const router = express.Router();

router.get("/", MovieController.movies);

module.exports = router;
