const express = require("express");
const MovieController = require("../Controllers/MovieController");
const router = express.Router();

router.get("/create", MovieController.dbMovies);
router.get("/", MovieController.getAll);
router.get("/search/:_id", MovieController.findById);
router.get("/searchimbd/:imBdId", MovieController.findByImdbId);
router.get("/search/genres/:genre", MovieController.findByGenre);
module.exports = router;
