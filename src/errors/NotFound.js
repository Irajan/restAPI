const ApiError = require("./ApiError");

class NotFound extends ApiError {
  constructor(message) {
    const msg = message || "Given resource not found";
    super(msg, 404);
  }
}

module.exports = NotFound;
