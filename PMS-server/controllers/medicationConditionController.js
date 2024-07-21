const commonService = require("../services/commonService.js");
const db = require("../relationship");

const addMedicationConditionData = async (req, res) => {
  let data = {
    condition: req.body.condition,
    condition_id_str: req.body.conditionId,
  };

  let result = await commonService.addData(db.medicationCondition, data);
  res.status(200).send(result);
};

const getAllMedicationConditionData = async (req, res) => {
  let result = await commonService.getAlldata(db.medicationCondition);
  res.status(200).send(result);
};

const getMedicationConditionDataById = async (req, res) => {
  let result = await commonService.getDataByConditionId(db.medicationCondition, req.params.id);
  res.status(200).send(result);
};

const updateMedicationConditionData = async (req, res) => {
  let data = {
    condition: req.body.condition,
    updated_at: req.body.updated_at,
  };

  let result = await commonService.updateData(db.medicationCondition, data, req.params.id);
  res.status(200).send(result);
};

const deleteMedicationConditionData = async (req, res) => {
  let data = {
    deleted_by: req.body.deleted_by,
    deleted_at: req.body.deleted_at,
  }

  let result = await commonService.softDeletedData(db.medicationCondition, data, req.params.id);
  res.status(200).send(result);
};

module.exports = {
  addMedicationConditionData,
  getAllMedicationConditionData,
  getMedicationConditionDataById,
  updateMedicationConditionData,
  deleteMedicationConditionData
};