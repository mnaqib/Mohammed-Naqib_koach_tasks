/* Create query */
const { grp_name, grp_code, grp_id, status, clg_id } = req.body;
Group.create({
       grp_name,
      grp_code,
      grp_id,
      status,
      clg_id,
    });

/* read queries read all and read one */
Group.find();
Group.findOne({ grp_id: req.params.grp_id });

/* update query */
Group.findOneAndUpdate(
      { grp_id: req.params.grp_id },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

/* delete query */
Group.findOneAndDelete({
      grp_id: req.params.grp_id,
    });