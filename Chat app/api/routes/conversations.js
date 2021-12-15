const router = require("express").Router();
const {
  getConversation,
  newConversation,
  getConvid,
} = require("../controllers/conversationController");

//new conv

router.post("/", newConversation);

//get conv of a user

router.get("/find/:userId", getConversation);

router.get("/find/:firstUserId/:secondUserId", getConvid);

module.exports = router;
