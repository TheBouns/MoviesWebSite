const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use("/movies", require("./Routes/movies"));
app.use("/user", require("./Routes/users"));

const port = process.env.PORT;
const mongo = process.env.MONGO_URI;

mongoose
  .connect(mongo, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log("conected to MongoDB"))
  .catch((err) => console.error(err));

app.listen(port, console.log(`server running in port: ${port}`));
