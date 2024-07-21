const commonService = require("../services/commonService.js");
const db = require("../relationship");

const addMessageData = async (req, res) => {
  let data = {
    message_type: req.body.message_type,
    message_text: req.body.message_text,
    review_id: req.body.review_id,
    created_by: req.body.created_by,
  };

  let result = await commonService.addData(db.message, data);
  res.status(200).send(result);
};

const getAllMessageData = async (req, res) => {
  let result = await commonService.getAlldata(db.message);
  res.status(200).send(result);
};

const getMessageDataById = async (req, res) => {
  let result = await commonService.getDataById(db.message, req.params.id);
  res.status(200).send(result);
};

const getMessageDataByReviewId = async (req, res) => {
  let result = await commonService.getMessageDataByReviewId(
    db.message,
    req.params.id
  );
  res.status(200).send(result);
};

const updateMessageData = async (req, res) => {
  let data = {
    message_text: req.body.message_text,
    created_by: req.body.created_by,
  };

  let result = await commonService.updateMessage(
    db.message,
    data,
    req.params.id
  );
  res.status(200).send(result);
};

const deleteMessageData = async (req, res) => {
  let data = {
    deleted_by: req.body.deleted_by,
    deleted_at: req.body.deleted_at,
  };
  let result = await commonService.softDeletedData(
    db.message,
    data,
    req.params.id
  );
  res.status(200).send(result);
};

const getPatientAllData = async (req, res) => {
  let id = req.params.id;
  let review = await commonService.getDataByReviewId(db.review, id);
  let patient_id = review.patient_id;
  let patient = await commonService.getDataByPatientId(db.patient, patient_id);
  let dob = new Date(patient.birth_date);
  let currentDate = new Date();
  let differenceInMilliseconds = currentDate - dob;
  let millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25;
  let age = Math.ceil(differenceInMilliseconds / millisecondsInYear);
  let report = await commonService.getReportByPatientId(db.report, patient_id);
  let allergies = await commonService.getAllegyDataByPatientId(
    db.patientAllergy,
    patient_id
  );
  let drugs = await commonService.getPatientMedicineByPatientMedicineId(
    db.patientMedication,
    patient_id
  );
  let conditions = await commonService.getPatientConditionByPatientId(
    db.patientCondition,
    patient_id
  );
  let data = {
    age,
    gender: patient.gender,
    allergies,
    drugs,
    conditions,
    weight: report.weigth,
    height: report.height,
    bloodPressureSystolic: report.blood_pressure_systolic,
    bloodPressureDiastolic: report.blood_pressure_diastolic,
    renalFunction: report.renal_function,
    potassiumLevel: report.potassium_level,
    sodiumLevel: report.sodium_level,
    calciumLevel: report.calcium_level,
    bloodGucose: report.blood_glucose,
    tubeFeedingStatus: report.tube_feeding_status,
    estimatedPrognosis: report.estimated_prognosisLT1Y,
    mobilityCatStatus: report.mobility_cat_status,
    severeFunctionalOrCognitiveDisability:
      report.severe_funtional_or_cognitive_disability,
    therapeuticGoals: report.goals_towards_symptoms_control,
  };
  res.status(200).send(data);
};

module.exports = {
  addMessageData,
  getAllMessageData,
  getMessageDataById,
  updateMessageData,
  deleteMessageData,
  getMessageDataByReviewId,
  getPatientAllData,
};

