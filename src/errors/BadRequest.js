const ApiError = require("./ApiError");

class BadRequest extends ApiError {
  constructor(message) {
    const msg = message || "Given request can't be handled";
    super(msg, 400);
  }
}

module.exports = BadRequest;
