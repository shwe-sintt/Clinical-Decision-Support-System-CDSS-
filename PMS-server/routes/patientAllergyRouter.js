const patientAllergyRouter = require("express").Router();

const patientAllergyController = require("../controllers/patientAllergyController.js");

patientAllergyRouter.post(
  "/addData",
  patientAllergyController.addPatientAllergyData
);
patientAllergyRouter.get(
  "/getAllData",
  patientAllergyController.getAllPatientAllergyData
);
patientAllergyRouter.get(
  "/getDataById/:id",
  patientAllergyController.getPatientAllergyDataById
);
patientAllergyRouter.post(
  "/updateData/:id",
  patientAllergyController.updatePatientAllergyData
);
patientAllergyRouter.post(
  "/deleteData/:id",
  patientAllergyController.deletePatientAllergyData
);
patientAllergyRouter.get(
  "/getDataByPatientId/:id",
  patientAllergyController.getAllegyDataByPatientId
);

module.exports = patientAllergyRouter;
