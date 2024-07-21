const commonService = require("../services/commonService.js");
const db = require("../relationship");

const addPatientMedicationData = async (req, res) => {
  let data = {
    patient_id: req.body.patient_id,
    medication_id: req.body.medication_id,
    duration: req.body.duration,
    start_date: req.body.start_date,
    end_date: req.body.end_date,
    prescribed_by: req.body.prescribed_by,
  };

  let result = await commonService.addData(db.patientMedication, data);
  res.status(200).send(result);
};

const getAllPatientMedicationData = async (req, res) => {
  let result = await commonService.getAlldata(db.patientMedication);
  res.status(200).send(result);
};

const getDataById = async (req, res) => {
  let result = await commonService.getDataByPatientMedicineId(
    db.patientMedication,
    req.params.id
  );
  res.status(200).send(result);
};

const getPatientMedicationDataById = async (req, res) => {
  let result = await commonService.getPatientMedicineByPatientMedicineId(
    db.patientMedication,
    req.params.id
  );
  res.status(200).send(result);
};

const updatePatientMedicationData = async (req, res) => {
  let data = {
    dosage: req.body.dosage,
    dosage_unit: req.body.dosage_unit,
    frequency: req.body.frequency,
    duration: req.body.duration,
    medication_id: req.body.medication_id,
    prescribed_by: req.body.prescribed_by,
    start_date: req.body.start_date,
    end_date: req.body.end_date,
  };

  let result = await commonService.updatePatientMedicationData(
    db.patientMedication,
    data,
    req.params.id
  );
  res.status(200).send(result);
};

const deletePatientMedicationData = async (req, res) => {
  let data = {
    deleted_by: req.body.deleted_by,
  };

  let result = await commonService.softDeletedDataPatientMedicine(
    db.patientMedication,
    data,
    req.params.id
  );
  res.status(200).send(result);
};

module.exports = {
  addPatientMedicationData,
  getAllPatientMedicationData,
  getPatientMedicationDataById,
  updatePatientMedicationData,
  deletePatientMedicationData,
  getDataById,
};
