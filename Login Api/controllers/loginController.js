const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        status: "fail",
        message: "user not found",
      });
    }
    const isCorrect = await bcrypt.compare(password, user.password);
    if (isCorrect) {
      res.status(200).json({
        status: "Success",
        message: `You have successfully logged in with ${user.email}`,
      });
    } else {
      res.status(401).json({
        status: "fail",
        message: "Incorrect password or email",
      });
    }
  } catch (e) {
    res.status(500).json({
      status: "fail",
    });
  }
};
