const express = require("express");
const {
  createGroup,
  getOneGroup,
  updateGroup,
  deleteGroup,
  getAllGroups,
} = require("../controllers/groupController");

const router = express.Router();

router.route("/").get(getAllGroups).post(createGroup);

router
  .route("/:grp_id")
  .get(getOneGroup)
  .patch(updateGroup)
  .delete(deleteGroup);

module.exports = router;
