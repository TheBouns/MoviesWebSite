const axios = require("axios");
const { response } = require("express");
const { findById } = require("../Models/Movie");
const Movie = require("../Models/Movie");

const MovieController = {
  async dbMovies(req, res) {
    try {
      const response = await axios.get(
        " https://imdb-api.com/en/API/Top250Movies/k_6dng2a27"
      );
      const data = response.data.items;
      data.map(async (item) => {
        const response = await axios.get(
          `http://www.omdbapi.com/?i=${item.id}&apikey=f9068f22`
        );
        const data = response.data;
        await Movie.create({
          title: data.Title,
          description: data.Plot,
          year: data.Year,
          scoreImbd: data.imdbRating,
          metaScore: data.Metascore,
          genre: data.Genre,
          duration: data.Runtime,
          imBdId: data.imdbID,
          image: data.Poster,
          director: data.Director,
          actors: data.Actors,
          country: data.Country,
        });
      });

      res.send("creacion de la base de datos completada");
    } catch (error) {
      console.error(error);
    }
  },
  async getAll(req, res) {
    try {
      res.send(await Movie.find());
    } catch (error) {
      console.error(error);
    }
  },
  async findById(req, res) {
    try {
      const movie = await Movie.findById(req.params._id);
      if (!movie) return res.send("Movie not avaible");
      res.send(movie);
    } catch (error) {
      console.error(error);
    }
  },
};

module.exports = MovieController;
