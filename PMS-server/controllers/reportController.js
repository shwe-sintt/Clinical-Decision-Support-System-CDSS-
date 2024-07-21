const commonService = require("../services/commonService.js");
const db = require("../relationship");

const addReportData = async (req, res) => {
  let data = {
    report_date: req.body.report_date,
    weigth: req.body.weigth,
    height: req.body.height,
    blood_pressure_systolic: req.body.blood_pressure_systolic,
    blood_pressure_diastolic: req.body.blood_pressure_diastolic,
    renal_function: req.body.renal_function,
    potassium_level: req.body.potassium_level,
    sodium_level: req.body.sodium_level,
    calcium_level: req.body.calcium_level,
    blood_glucose: req.body.blood_glucose,
    tube_feeding_status: req.body.tube_feeding_status,
    estimated_prognosisLT1Y: req.body.estimated_prognosisLT1Y,
    mobility_cat_status: req.body.mobility_cat_status,
    eng_stage_disease: req.body.eng_stage_disease,
    severe_funtional_or_cognitive_disability:
      req.body.severe_funtional_or_cognitive_disability,
    goals_towards_symptoms_control: req.body.goals_towards_symptoms_control,
    patient_id: req.body.patient_id,
    patient_condition_id: req.body.patient_condition_id,
    entered_by: req.body.entered_by,
  };
  let result = await commonService.addData(db.report, data);
  res.status(200).send(result);
};

const getAllReportData = async (req, res) => {
  let result = await commonService.getAlldata(db.report);
  res.status(200).send(result);
};

const getReportDataById = async (req, res) => {
  let result = await commonService.getDataByReportId(db.report, req.params.id);
  res.status(200).send(result);
};

const getReportByPatientId = async (req, res) => {
  let result = await commonService.getReportByPatientId(
    db.report,
    req.params.id
  );
  res.status(200).send(result);
};

const updateReportData = async (req, res) => {
  let data = {
    report_date: req.body.report_date,
    weigth: req.body.weigth,
    height: req.body.height,
    blood_pressure_systolic: req.body.blood_pressure_systolic,
    blood_pressure_diastolic: req.body.blood_pressure_diastolic,
    renal_function: req.body.renal_function,
    potassium_level: req.body.potassium_level,
    sodium_level: req.body.sodium_level,
    calcium_level: req.body.calcium_level,
    blood_glucose: req.body.blood_glucose,
    tube_feeding_status: req.body.tube_feeding_status,
    estimated_prognosisLT1Y: req.body.estimated_prognosisLT1Y,
    mobility_cat_status: req.body.mobility_cat_status,
    eng_stage_disease: req.body.eng_stage_disease,
    severe_funtional_or_cognitive_disability:
      req.body.severe_funtional_or_cognitive_disability,
    goals_towards_symptoms_control: req.body.goals_towards_symptoms_control,
    patient_condition_id: req.body.patient_condition_id,
    entered_by: req.body.entered_by,
  };
  let result = await commonService.updateReport(db.report, data, req.params.id);
  res.status(200).send(result);
};

const deleteReportData = async (req, res) => {
  let data = {
    deleted_by: req.body.deleted_by,
    deleted_at: req.body.deleted_at,
  };

  let result = await commonService.softDeletedData(
    db.report,
    data,
    req.params.id
  );
  res.status(200).send(result);
};

module.exports = {
  addReportData,
  getAllReportData,
  getReportDataById,
  updateReportData,
  deleteReportData,
  getReportByPatientId,
};
