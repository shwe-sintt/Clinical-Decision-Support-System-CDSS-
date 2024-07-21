const reviewRouter = require("express").Router();

const reviewController = require("../controllers/reviewController.js");

reviewRouter.post("/addData", reviewController.addReviewData);
reviewRouter.get("/getAllData", reviewController.getAllReviewData);
reviewRouter.get(
  "/getDataByPatientId/:id",
  reviewController.getDataByPatientId
);
reviewRouter.get("/getDataById/:id", reviewController.getReviewDataById);
reviewRouter.post("/closeReview/:id", reviewController.getReviewClose);
reviewRouter.get("/getDataWithReview", reviewController.getDataWithReview);
reviewRouter.get("/updateData", reviewController.updateReviewData);
reviewRouter.get("/deleteData", reviewController.deleteReviewData);

module.exports = reviewRouter;
