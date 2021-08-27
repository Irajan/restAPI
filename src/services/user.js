const userModel = require("../models/user");
const ValidationErr = require("../errors/Validation");

function add(data) {
  const user = new userModel(data);
  const err = user.validateSync();

  if (err) throw new ValidationErr(err);

  return user.save();
}

function fetch(filter = {}) {
  return userModel.find(filter, { password: false }).exec();
}

function fetchById(id) {
  return userModel.findById(id, { password: false }).exec();
}

function update(id, updateBody) {
  return userModel.updateOne({ _id: id }, updateBody);
}

function remove(id) {
  return userModel.remove({ _id: id });
}

module.exports = { add, fetch, fetchById, remove, update };
