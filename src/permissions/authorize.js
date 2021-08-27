function authorize(role) {
  return function (req, res, next) {
    if (req.loggedUser.role === role) {
      return next();
    }

    res.statusCode = 401;
    res.json({ message: "You are not authorized" });
  };
}

module.exports = authorize;
