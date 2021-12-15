const { getUsers } = require("../controllers/userController");

const router = require("express").Router();

//get users
router.get("/:id", getUsers);

module.exports = router;
