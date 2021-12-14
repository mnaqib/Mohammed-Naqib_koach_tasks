const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  std_name: {
    type: String,
    required: [true, "Student name is required"],
  },

  std_code: {
    type: String,
    required: [true, "Student code is required"],
  },
  std_id: {
    type: String,
    required: [true, "Student id is required"],
    unique: true,
  },
  status: {
    type: String,
    required: [true, "student status is required"],
  },
  grp_id: {
    type: String,
    required: [true, "student group id is required"],
  },
});

module.exports = mongoose.model("Student", studentSchema);
