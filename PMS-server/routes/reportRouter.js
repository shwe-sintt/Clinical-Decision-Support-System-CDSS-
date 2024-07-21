const reportRouter = require("express").Router();

const reportController = require("../controllers/reportController.js");

reportRouter.post("/addData", reportController.addReportData);
reportRouter.get("/getAllData", reportController.getAllReportData);
reportRouter.get("/getDataById/:id", reportController.getReportDataById);
reportRouter.post("/updateData/:id", reportController.updateReportData);
reportRouter.post("/deleteData/:id", reportController.deleteReportData);
reportRouter.get(
  "/getReportByPatientId/:id",
  reportController.getReportByPatientId
);

module.exports = reportRouter;
