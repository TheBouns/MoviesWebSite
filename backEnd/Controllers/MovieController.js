const axios = require("axios");
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
          scoreImbd: Number(data.imdbRating),
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

      res.send("DB created");
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
  async findByImdbId(req, res) {
    try {
      const movie = await Movie.findOne({ imBdId: req.params.imBdId });
      if (!movie) return res.send("Movie not avaible");
      res.send(movie);
    } catch (error) {
      console.error(error);
    }
  },
  async findByGenre(req, res) {
    try {
      const movies = await Movie.find();
      const selected = movies.filter((item) => {
        if (item.genre.indexOf(req.params.genre) != -1) return item;
      });
      res.send(selected);
    } catch (error) {
      console.error(error);
    }
  },
  async findByActor(req, res) {
    try {
      const movies = await Movie.find();
      const selected = movies.filter((item) => {
        if (item.actors.indexOf(req.params.actor) != -1) return item;
      });
      res.send(selected);
    } catch (error) {
      console.error(error);
    }
  },
  async sortByScore(req, res) {
    const movies = await Movie.find().sort({ scoreImbd: -1 });
    res.send(movies);
  },
  async addMovie(req, res) {
    const movie = await Movie.findOne({ imBdId: req.body.imbdid });
    try {
      if (!movie) {
        const response = await axios.get(
          `http://www.omdbapi.com/?i=${req.body.imbdid}&apikey=f9068f22`
        );
        const data = response.data;
        console.log(data);
        await Movie.create({
          title: data.Title,
          description: data.Plot,
          year: data.Year,
          scoreImbd: data.imdbRating !== "N/A" ? Number(data.imdbRating) : "",
          metaScore: data.Metascore,
          genre: data.Genre,
          duration: data.Runtime,
          imBdId: data.imdbID,
          image: data.Poster,
          director: data.Director,
          actors: data.Actors,
          country: data.Country,
        });
        res.send("Movie Added To WebSite :D");
      } else {
        return res.send("Movie already in DB");
      }
    } catch (error) {
      console.error(error);
    }
  },
};

module.exports = MovieController;
