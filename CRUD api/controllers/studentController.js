const Student = require("../models/student");

exports.createStudent = async (req, res) => {
  const { std_name, std_code, std_id, status, grp_id } = req.body;

  try {
    const newStudent = await Student.create({
      std_name,
      std_code,
      std_id,
      status,
      grp_id,
    });
    res.status(200).json({
      status: "success",
      data: {
        user: newStudent,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
    });
  }
};

exports.getAllStudent = async (req, res) => {
  try {
    const students = await Student.find();

    res.status(200).json({
      status: "Success",
      results: students.length,
      data: { students },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
    });
  }
};

exports.getOneStudent = async (req, res) => {
  console.log(req.params.std_id);
  try {
    const student = await Student.findOne({ std_id: req.params.std_id });

    res.status(200).json({
      status: "Success",
      data: { student },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
    });
  }
};

exports.updateStudent = async (req, res) => {
  try {
    const student = await Student.findOneAndUpdate(
      { std_id: req.params.std_id },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      status: "Success",
      data: { student },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
    });
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    const student = await Student.findOneAndDelete({
      std_id: req.params.std_id,
    });

    res.status(200).json({
      status: "Success",
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
    });
  }
};
