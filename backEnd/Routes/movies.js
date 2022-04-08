const express = require("express");
const MovieController = require("../Controllers/MovieController");
const router = express.Router();

router.get("/create", MovieController.dbMovies);
router.get("/", MovieController.getAll);
router.get("/search/:_id", MovieController.findById);

module.exports = router;
