const commonService = require("../services/commonService.js");
const db = require("../relationship");

const addPatientConditionData = async (req, res) => {
  let data = {
    severity: req.body.severity,
    remarks: req.body.remarks,
    patient_id: req.body.patient_id,
    condition_id: req.body.condition_id,
    start_date: req.body.start_date,
    end_date: req.body.end_date,
  };

  let result = await commonService.addData(db.patientCondition, data);
  res.status(200).send(result);
};

const getAllPatientConditionData = async (req, res) => {
  let result = await commonService.getAlldata(db.patientCondition);
  res.status(200).send(result);
};

const getPatientConditionDataById = async (req, res) => {
  let result = await commonService.getDataByPatientConditionId(
    db.patientCondition,
    req.params.id
  );
  res.status(200).send(result);
};

const updatePatientConditionData = async (req, res) => {
  let data = {
    severity: req.body.severity,
    remarks: req.body.remarks,
    condition_id: req.body.condition_id,
    start_date: req.body.start_date,
    end_date: req.body.end_date,
  };

  let result = await commonService.updatePatientConditionData(
    db.patientCondition,
    data,
    req.params.id
  );
  res.status(200).send(result);
};

const deletePatientConditionData = async (req, res) => {
  let data = {
    deleted_by: req.body.deleted_by,
  };

  let result = await commonService.softDeletedDataPatientCondition(
    db.patientCondition,
    data,
    req.params.id
  );
  res.status(200).send(result);
};

const getPatientConditionByPatientId = async (req, res) => {
  let result = await commonService.getPatientConditionByPatientId(
    db.patientCondition,
    req.params.id
  );
  res.status(200).send(result);
};

module.exports = {
  addPatientConditionData,
  getAllPatientConditionData,
  getPatientConditionDataById,
  updatePatientConditionData,
  deletePatientConditionData,
  getPatientConditionByPatientId,
};
