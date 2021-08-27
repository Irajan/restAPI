const express = require("express");

const postController = require("../controllers/post");
const postPermission = require("../permissions/post");

const router = express.Router();

// /posts
router.route("/").post(postController.create).get(postController.fetch);

// /posts/:id
router
  .route("/:id")
  .get(postController.fetchById)
  .patch(postPermission.canEdit, postController.update)
  .delete(postPermission.canDelete, postController.remove);

module.exports = router;
