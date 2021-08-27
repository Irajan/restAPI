class ApiError {
  constructor(message, code = 500) {
    this.message = message;
    this.code = code;
  }
}

module.exports = ApiError;
