const express = require("express");
const userController = require("../controllers/user");
const authorize = require("../permissions/authorize");
const userPermission = require("../permissions/user");

const router = express.Router();

// /users
router
  .route("/")
  .get(userController.fetch)
  .post(authorize("ADMIN"), userController.create);

// /users/:id
router
  .route("/:id")
  .get(userController.fetchById)
  .patch(userPermission.canEdit, userController.update)
  .delete(userPermission.canDelete, userController.remove);

module.exports = router;
