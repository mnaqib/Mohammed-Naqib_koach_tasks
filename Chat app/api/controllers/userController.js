const User = require("../models/User");

//get users
exports.getUsers = async (req, res) => {
  const userId = req.params.id;
  try {
    const users = await User.find({ _id: { $nin: [userId] } }).select(
      "username"
    );
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};
