const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema({
  grp_name: {
    type: String,
    required: [true, "Group name is required"],
  },

  grp_code: {
    type: String,
    required: [true, "Group code is required"],
  },
  grp_id: {
    type: String,
    required: [true, "Group id is required"],
    unique: true,
  },
  status: {
    type: String,
    required: [true, "Group status  is required"],
  },
  clg_id: {
    type: String,
    required: [true, "group college id is required"],
  },
});

module.exports = mongoose.model("Group", groupSchema);
