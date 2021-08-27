const ApiError = require("./ApiError");

class Validation extends ApiError {
  constructor(err) {
    const key = Object.keys(err.errors)[0];

    const message = err.errors[key].message;

    const msg = message || "Given data is not valid";
    super(msg, 400);
  }
}

module.exports = Validation;
