const express = require("express");
const userController = require("../controllers/user");

const router = express.Router();

router.post("/", userController.create);

module.exports = router;
