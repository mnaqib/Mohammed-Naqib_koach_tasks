const mongoose = require("mongoose");

const collegeSchema = new mongoose.Schema({
  clg_name: {
    type: String,
    required: [true, "college name is required"],
  },

  clg_code: {
    type: String,
    required: [true, "college code is required"],
  },
  clg_id: {
    type: String,
    required: [true, "college id is required"],
    unique: true,
  },
  status: {
    type: String,
    required: [true, "college status must be given"],
  },
});

module.exports = mongoose.model("College", collegeSchema);
