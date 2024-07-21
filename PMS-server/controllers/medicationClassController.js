const commonService = require("../services/commonService.js");
const db = require("../relationship");

const addMedicationClassData = async (req, res) => {
  let data = {
    class_id_str:req.body.classId,
    class_name: req.body.class_name,
    indication: req.body.indication
  };

  let result = await commonService.addData(db.medicationClass, data);
  res.status(200).send(result);
};

const getAllMedicationClassData = async (req, res) => {
  let result = await commonService.getAlldata(db.medicationClass);
  res.status(200).send(result);
};

const getMedicationClassDataById = async (req, res) => {
  let result = await commonService.getDataByClassId(db.medicationClass, req.params.id);
  res.status(200).send(result);
};

const updateMedicationClassData = async (req, res) => {
  let data = {
    class_name: req.body.class_name,
    indication: req.body.indication,
    updated_at: req.body.updated_at,
  };

  let result = await commonService.updateData(db.medicationClass, data, req.params.id);
  res.status(200).send(result);
};

const deleteMedicationClassData = async (req, res) => {
  let data = {
    deleted_by: req.body.deleted_by,
    deleted_at: req.body.deleted_at,
  }

  let result = await commonService.softDeletedData(db.medicationClass, data, req.params.id);
  res.status(200).send(result);
};

module.exports = {
  addMedicationClassData,
  getAllMedicationClassData,
  getMedicationClassDataById,
  updateMedicationClassData,
  deleteMedicationClassData
};