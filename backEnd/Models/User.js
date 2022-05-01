const mongoose = require("mongoose");
const ObjectId = mongoose.SchemaTypes.ObjectId;

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  favourites: [
    {
      type: ObjectId,
      ref: "Movie",
    },
  ],
  pending: [
    {
      type: ObjectId,
      ref: "Movie",
    },
  ],
  verified: {
    type: Boolean,
    default: true,
  },
  admin: {
    type: Boolean,
    default: true,
  },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
