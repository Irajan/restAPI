const ApiError = require("../errors/ApiError");

function errorHandler(err, req, res, next) {
  if (err instanceof ApiError) {
    res.statusCode = err.code;
    return res.json(err); // message
  }

  console.log(`${req.method} => ${req.url}`);
  console.log(err);

  const error = { message: "Oops! Something Went Wrong !!" };
  res.statusCode = 500;
  res.json(error);
}

module.exports = errorHandler;
