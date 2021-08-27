const express = require("express");
const mongoose = require("mongoose");
const config = require("./config");
const cors = require("cors");

const app = express();

app.use(cors());
//Global Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(function (req, res, next) {
  console.log(`${req.method} ==> ${req.url}`);
  next();
});

//Possible Routes
app.use(require("./routes"));

//Error Handeling Middleware
app.use(require("./middlewares/errorHandler"));

// Not found Middleware
app.use(function (req, res) {
  res.statusCode = 404;
  res.json({ message: "Resource not found make sure to check url" });
});

app.listen(config.port, function () {
  console.log(`Server is up and running on port ${config.port}`);
});

mongoose.connect(config.database.string, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
