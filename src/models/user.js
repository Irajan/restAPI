const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const BadRequest = require("../errors/BadRequest");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "User must have name"],
  },

  email: {
    type: String,
    required: [true, "Email of user should be provided"],
    unique: true,
  },

  role: {
    type: String,
    enum: {
      values: ["USER", "ADMIN"],
      message: "{VALUE} is not desired role it must be ADMIN or USER",
    },
    default: "USER",
  },

  password: {
    type: String,
    required: [true, "Password in mandatory"],
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },

  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

userSchema.pre("save", async function (next) {
  const plainPassword = this.password;
  const saltRounds = 8;

  const salt = await bcrypt.genSalt(saltRounds);
  const hash = await bcrypt.hash(plainPassword, salt);

  this.password = hash;
  next();
});

userSchema.post("save", handleDuplicate);

function handleDuplicate(err, doc, next) {
  if (err.code === 11000) {
    next(new BadRequest("Email already registered"));
    return;
  }
  next();
}

const user = mongoose.model("User", userSchema);

module.exports = user;
