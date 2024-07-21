const messageRouter = require("express").Router();

const messageController = require("../controllers/messageController.js");

messageRouter.post("/addData", messageController.addMessageData);
messageRouter.get("/getAllData", messageController.getAllMessageData);
messageRouter.get("/getDataById", messageController.getMessageDataById);
messageRouter.get(
  "/getDataByReviewId/:id",
  messageController.getMessageDataByReviewId
);
messageRouter.post("/updateData/:id", messageController.updateMessageData);
messageRouter.get("/deleteData", messageController.deleteMessageData);
messageRouter.get(
  "/getPatientAllData/:id",
  messageController.getPatientAllData
);

module.exports = messageRouter;
