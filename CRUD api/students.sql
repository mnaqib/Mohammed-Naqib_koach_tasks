/* Create query */
const { std_name, std_code, std_id, status, grp_id } = req.body;
Student.create({
      std_name,
      std_code,
      std_id,
      status,
      grp_id,
    });

/* read queries read all and read one */
Student.find();
Student.findOne({ std_id: req.params.std_id });

/* update query */
Student.findOneAndUpdate(
      { std_id: req.params.std_id },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

/* delete query */
Student.findOneAndDelete({
      std_id: req.params.std_id,
    });