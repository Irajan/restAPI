require("dotenv").config();

const database = {
  string: process.env.DATABASE_STRING,
};

const port = process.env.PORT || 8080;

const token = {
  accessToken: process.env.ACCESS_TOKEN_SECRET,
};

module.exports = { database, port, token };
