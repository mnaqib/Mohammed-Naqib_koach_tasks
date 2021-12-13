const user = require("../models/userModel");
const bcrypt = require("bcryptjs");

exports.register = async (req, res) => {
  const { mobile, email, password } = req.body;

  try {
    const hashPassword = await bcrypt.hash(password, 12);
    const newUser = await user.create({
      mobile,
      email,
      password: hashPassword,
    });
    res.status(200).json({
      status: "success",
      data: {
        user: newUser,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
    });
  }
};
