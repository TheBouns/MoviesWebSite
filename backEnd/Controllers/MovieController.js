const axios = require("axios");
const { response } = require("express");
const Movie = require("../Models/Movie");

const MovieController = {
  async movies(req, res) {
    try {
      const response = await axios.get(
        " https://imdb-api.com/en/API/Top250Movies/k_6dng2a27"
      );
      const data = response.data.items;
      const movie = data.map(async (item) => {
        const response = await axios.get(
          `http://www.omdbapi.com/?i=${item.id}&apikey=f9068f22`
        );
        const data = response.data;
        await Movie.create({
          title: data.Title,
          // year: item.year,
          // score: item.imDbRating,
          // imBdId: item.id,
          // image: item.image,
          // country: item.country,
        });
      });

      res.send("creacion de la base de datos completada");
    } catch (error) {
      console.error(error);
    }
  },
};

module.exports = MovieController;
