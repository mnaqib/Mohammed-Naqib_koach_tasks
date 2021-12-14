const College = require("../models/college");

exports.createCollege = async (req, res) => {
  const { clg_name, clg_code, clg_id, status } = req.body;

  try {
    const newCollege = await College.create({
      clg_name,
      clg_code,
      clg_id,
      status,
    });
    res.status(200).json({
      status: "success",
      data: {
        user: newCollege,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
    });
  }
};

exports.getAllCollege = async (req, res) => {
  try {
    const colleges = await College.find();

    res.status(200).json({
      status: "Success",
      results: colleges.length,
      data: { colleges },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
    });
  }
};

exports.getOneCollege = async (req, res) => {
  try {
    const college = await College.findOne({ clg_id: req.params.clg_id });

    res.status(200).json({
      status: "Success",
      data: { college },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
    });
  }
};

exports.updateCollege = async (req, res) => {
  try {
    const college = await College.findOneAndUpdate(
      { clg_id: req.params.clg_id },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      status: "Success",
      data: { college },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
    });
  }
};

exports.deleteCollege = async (req, res) => {
  try {
    const college = await College.findOneAndDelete({
      clg_id: req.params.clg_id,
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
