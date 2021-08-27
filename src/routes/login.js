const bcrypt = require("bcrypt");
const express = require("express");
const jwt = require("jsonwebtoken");

const { token } = require("../config");
const userModel = require("../models/user");
const BadRequest = require("../errors/BadRequest");

const router = express.Router();

router.post("/", async function (req, res, next) {
  console.log(req.body);

  const email = req.body.email;
  const plainPassword = req.body.password;

  try {
    const user = await userModel.findOne(
      { email },
      { password: true, role: true }
    );

    if (!user) throw new BadRequest("Invalid Login");

    const hash = user.password;
    const result = await bcrypt.compare(plainPassword, hash);

    if (!result) throw new BadRequest("Invalid Login");

    const accessToken = jwt.sign(
      { id: user._id, role: user.role },
      token.accessToken
    );

    res.json({ accessToken });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
