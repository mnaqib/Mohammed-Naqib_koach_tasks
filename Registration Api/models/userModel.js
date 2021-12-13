const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "User must have a email"],
    unique: true,
  },

  password: {
    type: String,
    required: [true, "User must have a password"],
  },

  mobile: {
    type: String,
    required: [true, "User must have a mobile"],
  },
});

const user = mongoose.model("User", userSchema);
module.exports = user;
