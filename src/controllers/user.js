const userService = require("../services/user");

async function create(req, res, next) {
  try {
    const user = req.body;
    const result = await userService.add(req.body);

    res.json(result);
  } catch (err) {
    next(err);
  }
}

async function fetch(req, res, next) {
  try {
    const result = await userService.fetch();

    res.json(result);
  } catch (err) {
    next(err);
  }
}

async function fetchById(req, res, next) {
  try {
    const result = await userService.fetchById(req.params.id);

    res.json(result);
  } catch (err) {
    next(err);
  }
}

async function update(req, res, next) {
  try {
    const id = req.params.id;
    const updateBody = req.body;
    const result = await userService.update(id, updateBody);

    res.json(result);
  } catch (err) {
    next(err);
  }
}

async function remove(req, res, next) {
  try {
    const result = await userService.remove(req.params.id);

    res.json(result);
  } catch (err) {
    next(err);
  }
}

module.exports = { create, fetch, fetchById, update, remove };
