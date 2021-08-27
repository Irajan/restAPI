// Create Read Update Delete
const postService = require("../services/post");

async function create(req, res, next) {
  try {
    const post = { ...req.body, userId: req.loggedUser.id };
    const result = await postService.add(post);

    res.json(result);
  } catch (err) {
    next(err);
  }
}

async function fetch(req, res, next) {
  try {
    const result = await postService.fetch();

    res.json(result);
  } catch (err) {
    next(err);
  }
}

async function fetchById(req, res, next) {
  try {
    const id = req.params.id;
    const result = await postService.fetchById(id);

    res.json(result);
  } catch (err) {
    next(err);
  }
}

async function update(req, res, next) {
  try {
    const post = req.body;
    const id = req.params.id;

    const result = await postService.update(id, post);

    res.json(result);
  } catch (err) {
    console.log(err);
    next(err);
  }
}

async function remove(req, res, next) {
  try {
    const id = req.params.id;
    const result = await postService.remove(id);

    res.json(result);
  } catch (err) {
    next(err);
  }
}

module.exports = { create, fetch, fetchById, update, remove };
