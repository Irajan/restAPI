const jwt = require("jsonwebtoken");
const { token } = require("../config");
const BadRequest = require("../errors/BadRequest");

function authenticate(req, res, next) {
  const auth = req.headers.authorization;

  try {
    if (!(auth && auth.split(" ")[1]))
      throw new BadRequest("You are not logged in");

    const accessToken = auth.split(" ")[1];

    const data = jwt.verify(accessToken, token.accessToken);

    if (!data) throw new BadRequest("Session Expired");

    req.loggedUser = data;

    next();
  } catch (err) {
    next(err);
  }
}

module.exports = authenticate;
