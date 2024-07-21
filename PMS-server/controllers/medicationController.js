const commonService = require("../services/commonService.js");
const db = require("../relationship");

const addMedicationData = async (req, res) => {
  let data = {
    generic_name: req.body.generic_name,
    dosage: req.body.dosage,
    dosage_unit: req.body.dosage_unit,
    frequency: req.body.frequency,
    class_id: req.body.class_id,
  };

  let result = await commonService.addData(db.medication, data);
  res.status(200).send(result);
};

const getAllMedicationData = async (req, res) => {
  let result = await commonService.getAlldata(db.medication);
  res.status(200).send(result);
};

const getMedicationDataById = async (req, res) => {
  let result = await commonService.getDataByMedicationId(db.medication, req.params.id);
  res.status(200).send(result);
};

const updateMedicationData = async (req, res) => {
  let data = {
    generic_name: req.body.generic_name,
    dosage: req.body.dosage,
    dosage_unit: req.body.dosage_unit,
    frequency: req.body.frequency,
    class_id: req.body.class_id,
    updated_at: req.body.updated_at,
  };

  let result = await commonService.updateData(db.medication, data, req.params.id);
  res.status(200).send(result);
};

const deleteMedicationData = async (req, res) => {
  let data = {
    deleted_by: req.body.deleted_by,
    deleted_at: req.body.deleted_at,
  }

  let result = await commonService.softDeletedData(db.medication, data, req.params.id);
  res.status(200).send(result);
};

module.exports = {
  addMedicationData,
  getAllMedicationData,
  getMedicationDataById,
  updateMedicationData,
  deleteMedicationData
};