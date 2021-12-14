const Group = require("../models/group");

exports.createGroup = async (req, res) => {
  const { grp_name, grp_code, grp_id, status, clg_id } = req.body;

  try {
    const newGroup = await Group.create({
      grp_name,
      grp_code,
      grp_id,
      status,
      clg_id,
    });
    res.status(200).json({
      status: "success",
      data: {
        user: newGroup,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
    });
  }
};

exports.getAllGroups = async (req, res) => {
  try {
    const groups = await Group.find();

    res.status(200).json({
      status: "Success",
      results: groups.length,
      data: { groups },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
    });
  }
};

exports.getOneGroup = async (req, res) => {
  try {
    const group = await Group.findOne({ grp_id: req.params.grp_id });

    res.status(200).json({
      status: "Success",
      data: { group },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
    });
  }
};

exports.updateGroup = async (req, res) => {
  try {
    const group = await Group.findOneAndUpdate(
      { grp_id: req.params.grp_id },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      status: "Success",
      data: { group },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
    });
  }
};

exports.deleteGroup = async (req, res) => {
  try {
    const group = await Group.findOneAndDelete({ grp_id: req.params.grp_id });

    res.status(200).json({
      status: "Success",
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
    });
  }
};
