const express = require("express");
const {
  createStudent,
  getAllStudent,
  getOneStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentController");

const router = express.Router();

router.route("/").get(getAllStudent).post(createStudent);

router
  .route("/:std_id")
  .get(getOneStudent)
  .patch(updateStudent)
  .delete(deleteStudent);

module.exports = router;
