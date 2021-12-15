const User = require("../models/User");
const bcrypt = require("bcryptjs");

//REGISTER
exports.register = async (req, res) => {
  try {
    const { username, password, email, mobile } = req.body;
    //generate new password
    const hashedPassword = await bcrypt.hash(password, 12);

    //save user and respond
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
      mobile,
    });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

//LOGIN
exports.login = async (req, res) => {
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
      res.status(200).json(user);
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
