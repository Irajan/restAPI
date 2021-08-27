const postModel = require("../models/post");
const ValidationErr = require("../errors/Validation");

function add(data) {
  const post = new postModel(data);
  const err = post.validateSync();

  if (err) throw new ValidationErr(err);

  return post.save();
}

function fetch(filter = {}) {
  return postModel.find(filter, {}).exec();
}

function fetchById(id) {
  return postModel.findById(id).exec();
}

function update(id, post) {
  const updatedPost = { ...post, updatedAt: new Date() };

  return postModel.updateOne({ _id: id }, updatedPost);
}

function remove(id) {
  return postModel.remove({ _id: id });
}

module.exports = { add, fetch, fetchById, update, remove };
