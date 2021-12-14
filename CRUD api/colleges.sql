/* Create query */
const { clg_name, clg_code, clg_id, status } = req.body;
College.create({
      clg_name,
      clg_code,
      clg_id,
      status,
    });

/* read queries read all and read one */
College.find();
College.findOne({ clg_id: req.params.clg_id });

/* update query */
College.findOneAndUpdate(
      { clg_id: req.params.clg_id },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

/* delete query */
College.findOneAndDelete({
      clg_id: req.params.clg_id,
    });