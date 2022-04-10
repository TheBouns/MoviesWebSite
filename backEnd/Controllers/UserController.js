const User = require("../Models/User");
const Movie = require("../Models/Movie");

const UserController = {
  async createUser(req, res) {
    try {
      const user = await User.create({ ...req.body });
      res.status(201).send({ user, message: "user has been created" });
    } catch (error) {
      console.error(error);
    }
  },
};
module.exports = UserController;
