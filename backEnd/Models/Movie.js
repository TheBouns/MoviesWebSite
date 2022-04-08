const mongoose = require("mongoose");
const ObjectId = mongoose.SchemaType.ObjectId;

const MovieSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  year: {
    type: String,
  },
  score: {
    type: Number,
  },
  genre: {
    type: [String],
  },
  duration: {
    type: String,
  },
  imBdId: String,
  image: String,
  country: String,
  actors: [String],
  country: [String],
  director: String,
});

const Movie = mongoose.model("Movie", MovieSchema);

module.exports = Movie;