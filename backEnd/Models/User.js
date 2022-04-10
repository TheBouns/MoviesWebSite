const mongoose = require("mongoose");
const ObjectId = mongoose.SchemaType.ObjectId;

const UserSchema = new mongoose.Schema({
  email: { type: String },
  password: { type: String },
  favourites: [{ type: ObjectId, ref: "Movie" }],
  pending: [{ type: ObjectId, ref: "Movie" }],
  age: { type: Number },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
