const { newMessage, getMessages } = require("../controllers/messageController");

const router = require("express").Router();

//add
router.post("/", newMessage);
//get
router.get("/:conversationId", getMessages);

module.exports = router;
