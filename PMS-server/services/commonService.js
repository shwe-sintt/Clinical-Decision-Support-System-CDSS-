const addData = async (Model, data) => {
  const response = await Model.create(data);
  return response;
};

const getAlldata = async (Model) => {
  let response = await Model.findAll({ deleted_by: null });
  return response;
};

const getDataWithReview = async (Model, _id) => {
  let response = await Model.findAll({
    include: [
      {
        model: Model,
        as: "review",
      },
    ],
    where: { id: _id },
  });
  return response;
};

const getDataById = async (Model, _id) => {
  const response = await Model.findOne({ where: { id: _id } });
  return response;
};

const getPatientAllergyDataById = async (Model, _id) => {
  const response = await Model.findOne({ where: { patient_allergy_id: _id } });
  return response;
};
const getDataByConditionId = async (Model, _id) => {
  const response = await Model.findOne({ where: { condition_id: _id } });
  return response;
};
const getDataByPatientId = async (Model, _id) => {
  const response = await Model.findOne({ where: { patient_id: _id } });
  return response;
};
const getDataByMedicationId = async (Model, _id) => {
  const response = await Model.findOne({ where: { medication_id: _id } });
  return response;
};

const getDataByStuffId = async (Model, _id) => {
  const response = await Model.findOne({ where: { staff_id: _id } });
  return response;
};

const getDataByPatientConditionId = async (Model, _id) => {
  const response = await Model.findOne({
    where: { patient_condition_id: _id },
  });
  return response;
};

const getDataByClassId = async (Model, _id) => {
  const response = await Model.findOne({
    where: { class_id: _id },
  });
  return response;
};

const getDataByPatientConditionId1 = async (Model, _id) => {
  const response = await Model.findOne({ where: { condition_id: _id } });
  return response;
};

const getDataByReportId = async (Model, _id) => {
  const response = await Model.findOne({ where: { report_id: _id } });
  return response;
};

const getReportByPatientId = async (Model, _id) => {
  const response = await Model.findOne({ where: { patient_id: _id } });
  return response;
};

const getPatientMedicineByPatientMedicineId = async (Model, _id) => {
  const response = await Model.findAll({
    where: { patient_id: _id },
  });
  return response;
};

const getPatientConditionByPatientId = async (Model, _id) => {
  const response = await Model.findAll({
    where: { patient_id: _id },
  });
  return response;
};

const getAllegyDataByPatientId = async (Model, _id) => {
  const response = await Model.findAll({
    where: { patient_id: _id },
  });
  return response;
};

const getReviewByPatientId = async (Model, _id) => {
  const response = await Model.findAll({
    where: { patient_id: _id },
  });
  return response;
};

const getDataByReviewId = async (Model, _id) => {
  const response = await Model.findOne({
    where: { review_id: _id },
  });
  return response;
};

const closeReview = async (Model, data, _id) => {
  const updated = await Model.update(data, { where: { review_id: _id } });
  return updated;
};

const getDataByPatientMedicineId = async (Model, _id) => {
  const response = await Model.findOne({
    where: { patient_medication_id: _id },
  });
  return response;
};

const getMessageDataByReviewId = async (Model, _id) => {
  const response = await Model.findAll({
    where: { review_id: _id },
  });
  return response;
};

const getDataByEmail = async (Model, email) => {
  const response = await Model.findOne({ where: { id: email } });
  return response;
};

const updateData = async (Model, data, _id) => {
  const updated = await Model.update(data, { where: { id: _id } });
  return updated;
};

const updateDataPatient = async (Model, data, _id) => {
  const updated = await Model.update(data, { where: { patient_id: _id } });
  return updated;
};

const updateReport = async (Model, data, _id) => {
  const updated = await Model.update(data, { where: { report_id: _id } });
  return updated;
};

const deletedData = async (Model, _id) => {
  const deleted = await Model.destroy({ where: { id: _id } });
  return deleted;
};

const softDeletedData = async (Model, _id) => {
  const softDeleted = await Model.update(data, { where: { id: _id } });
  return softDeleted;
};

const softDeletedPatient = async (Model,data, _id) => {
  const softDeleted = await Model.update(data, { where: { patient_id: _id } });
  return softDeleted;
};

const softDeletedDataPatientMedicine = async (Model, data, _id) => {
  const softDeleted = await Model.update(data, {
    where: { patient_medication_id: _id },
  });
  return softDeleted;
};

const updatePatientMedicationData = async (Model, data, _id) => {
  const softDeleted = await Model.update(data, {
    where: { patient_medication_id: _id },
  });
  return softDeleted;
};

const updateMessage = async (Model, data, _id) => {
  const softDeleted = await Model.update(data, {
    where: { message_id: _id },
  });
  return softDeleted;
};

const softDeletedDataPatientCondition = async (Model, data, _id) => {
  const softDeleted = await Model.update(data, {
    where: { patient_condition_id: _id },
  });
  return softDeleted;
};

const updatePatientConditionData = async (Model, data, _id) => {
  const softDeleted = await Model.update(data, {
    where: { patient_condition_id: _id },
  });
  return softDeleted;
};

const softDeletedDataPatientAllergy = async (Model, data, _id) => {
  const softDeleted = await Model.update(data, {
    where: { patient_allergy_id: _id },
  });
  return softDeleted;
};

const updateDataPatientAllergy = async (Model, data, _id) => {
  const updated = await Model.update(data, {
    where: { patient_allergy_id: _id },
  });
  return updated;
};

module.exports = {
  addData,
  getAlldata,
  getDataWithReview,
  getDataByEmail,
  getDataById,
  updateData,
  deletedData,
  softDeletedData,
  getDataByPatientId,
  updateDataPatient,
  getDataByConditionId,
  getDataByMedicationId,
  getDataByStuffId,
  getDataByPatientConditionId,
  getDataByReportId,
  updateReport,
  getReportByPatientId,
  getPatientMedicineByPatientMedicineId,
  getDataByPatientMedicineId,
  getAllegyDataByPatientId,
  getPatientConditionByPatientId,
  softDeletedDataPatientMedicine,
  getPatientAllergyDataById,
  softDeletedDataPatientAllergy,
  softDeletedDataPatientCondition,
  updateDataPatientAllergy,
  updatePatientConditionData,
  updatePatientMedicationData,
  getReviewByPatientId,
  getDataByReviewId,
  closeReview,
  getMessageDataByReviewId,
  updateMessage,
  getDataByClassId,
  softDeletedPatient
};
