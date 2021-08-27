const postService = require("../services/post");
const NotFoundErr = require("../errors/NotFound");

async function canEdit(req, res, next) {
  try {
    const post = await postService.fetchById(req.params.id);

    if (req.loggedUser.id == post.userId) return next();
  } catch (err) {
    return next(new NotFoundErr());
  }

  res.statusCode = 401;
  res.json({ message: "You are not authorized" });
}

async function canDelete(req, res, next) {
  try {
    const post = await postService.fetchById(req.params.id);

    if (req.loggedUser.role === "ADMIN") return next();
    if (req.loggedUser.id == post.userId) return next();
  } catch (err) {
    return next(new NotFoundErr());
  }

  res.statusCode = 401;
  res.json({ message: "You are not authorized" });
}

module.exports = { canEdit, canDelete };
