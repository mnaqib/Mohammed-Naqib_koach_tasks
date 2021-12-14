const express = require("express");
const {
  createCollege,
  getOneCollege,
  updateCollege,
  deleteCollege,
  getAllCollege,
} = require("../controllers/collegeController");

const router = express.Router();

router.route("/").get(getAllCollege).post(createCollege);

router
  .route("/:clg_id")
  .get(getOneCollege)
  .patch(updateCollege)
  .delete(deleteCollege);

module.exports = router;
