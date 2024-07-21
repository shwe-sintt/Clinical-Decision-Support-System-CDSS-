const commonService = require("../services/commonService.js");
const db = require("../relationship");

const addPatientData = async (req, res) => {
  let data = {
    patient_id_str: req.body.id,
    NRIC: req.body.NRIC,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    gender: req.body.gender,
    birth_date: req.body.birth_date,
    admission_date: req.body.admission_date,
    discharge_date: req.body.discharge_date,
    ward: req.body.ward,
    bed: req.body.bed,
  };
  let result = await commonService.addData(db.patient, data);
  res.status(200).send({ message: result });
};

const getAllPatientData = async (req, res) => {
  let result = await commonService.getAlldata(db.patient);
  res.status(200).send(result);
};

const getPatientDataById = async (req, res) => {
  let result = await commonService.getDataByPatientId(
    db.patient,
    req.params.id
  );
  res.status(200).send(result);
};

const updatePatientData = async (req, res) => {
  let data = {
    patient_id_str: req.body.id,
    NRIC: req.body.NRIC,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    gender: req.body.gender,
    birth_date: req.body.birth_date,
    admission_date: req.body.admission_date,
    discharge_date: req.body.discharge_date,
    ward: req.body.ward,
    bed: req.body.bed,
  };
  console.log(data);
  let result = await commonService.updateDataPatient(
    db.patient,
    data,
    req.params.id
  );
  console.log(result);
  res.status(200).send(result);
};

const deletePatientData = async (req, res) => {
  let data = {
    deleted_by: req.body.deleted_by,
  };

  let result = await commonService.softDeletedPatient(
    db.patient,
    data,
    req.params.id
  );
  res.status(200).send(result);
};

module.exports = {
  addPatientData,
  getAllPatientData,
  getPatientDataById,
  updatePatientData,
  deletePatientData,
};
