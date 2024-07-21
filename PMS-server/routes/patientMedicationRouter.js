const patientMedicationRouter = require("express").Router();

const patientMedicationController = require("../controllers/patientMedicationController.js");

patientMedicationRouter.post(
  "/addData",
  patientMedicationController.addPatientMedicationData
);
patientMedicationRouter.get(
  "/getAllData",
  patientMedicationController.getAllPatientMedicationData
);
patientMedicationRouter.get(
  "/getDataById/:id",
  patientMedicationController.getDataById
);
patientMedicationRouter.get(
  "/getDataByPatientId/:id",
  patientMedicationController.getPatientMedicationDataById
);
patientMedicationRouter.post(
  "/updateData/:id",
  patientMedicationController.updatePatientMedicationData
);
patientMedicationRouter.post(
  "/deleteData/:id",
  patientMedicationController.deletePatientMedicationData
);

module.exports = patientMedicationRouter;
