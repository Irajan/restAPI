const express = require("express");

const router = express.Router();

//Public Routes

router.get("/", function (req, res) {
  res.json({ message: "Rest API" });
});

router.use("/login", require("./routes/login"));
router.use("/register", require("./routes/register"));

//Private Routes

router.use(require("./middlewares/authenticate"));

router.use("/users", require("./routes/user"));
router.use("/posts", require("./routes/post"));

module.exports = router;
