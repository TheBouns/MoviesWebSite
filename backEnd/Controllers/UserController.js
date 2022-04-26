const User = require("../Models/User");
const bcrypt = require("bcryptjs");
const Movie = require("../Models/Movie");

const UserController = {
  async createUser(req, res) {
    try {
      const hash = bcrypt.hashSync(req.body.password, 12);
      const user = await User.create({ ...req.body, password: hash });
      res.status(201).send({ user, message: "user has been created" });
    } catch (error) {
      console.error(error);
    }
  },
};
module.exports = UserController;
