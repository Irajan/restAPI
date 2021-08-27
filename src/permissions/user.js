function canEdit(req, res, next) {
  if (req.loggedUser.id == req.params.id) return next();

  res.statusCode = 401;
  res.json({ message: "You are not authorized" });
}

function canDelete(req, res, next) {
  if (req.loggedUser.role === "ADMIN") return next();

  res.statusCode = 401;
  res.json({ message: "You are not authorized" });
}

module.exports = { canEdit, canDelete };
