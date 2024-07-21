const commonService = require("../services/commonService.js");
const db = require("../relationship");

const addPatientAllergyData = async (req, res) => {
  let data = {
    discover_date: req.body.discover_date,
    remarks: req.body.remarks,
    patient_id: req.body.patient_id,
    medication_id: req.body.medication_id,
  };

  let result = await commonService.addData(db.patientAllergy, data);
  res.status(200).send(result);
};

const getAllPatientAllergyData = async (req, res) => {
  let result = await commonService.getAlldata(db.patientAllergy);
  res.status(200).send(result);
};

const getPatientAllergyDataById = async (req, res) => {
  let result = await commonService.getPatientAllergyDataById(
    db.patientAllergy,
    req.params.id
  );
  res.status(200).send(result);
};

const updatePatientAllergyData = async (req, res) => {
  let data = {
    discover_date: req.body.discover_date,
    remarks: req.body.remarks,
    // patient_id: req.body.patient_id,
    medication_id: req.body.medication_id,
  };

  let result = await commonService.updateDataPatientAllergy(
    db.patientAllergy,
    data,
    req.params.id
  );
  res.status(200).send(result);
};

const deletePatientAllergyData = async (req, res) => {
  let data = {
    deleted_by: req.body.deleted_by,
  };

  let result = await commonService.softDeletedDataPatientAllergy(
    db.patientAllergy,
    data,
    req.params.id
  );
  res.status(200).send(result);
};

const getAllegyDataByPatientId = async (req, res) => {
  let result = await commonService.getAllegyDataByPatientId(
    db.patientAllergy,
    req.params.id
  );
  res.status(200).send(result);
};

module.exports = {
  addPatientAllergyData,
  getAllPatientAllergyData,
  getPatientAllergyDataById,
  updatePatientAllergyData,
  deletePatientAllergyData,
  getAllegyDataByPatientId,
};
