const express = require("express");
const MovieController = require("../Controllers/MovieController");
const router = express.Router();

router.get("/create", MovieController.dbMovies);

module.exports = router;
