const commonService = require("../services/commonService.js");
const db = require("../relationship");

const addReviewData = async (req, res) => {
  let data = {
    review_status: req.body.review_status,
    patient_id: req.body.patient_id,
    review_start_date: req.body.start_date,
    review_end_date: req.body.end_date,
  };

  let result = await commonService.addData(db.review, data);
  res.status(200).send(result);
};

const getAllReviewData = async (req, res) => {
  let result = await commonService.getAlldata(db.review);
  res.status(200).send(result);
};

const getDataByPatientId = async (req, res) => {
  let result = await commonService.getReviewByPatientId(
    db.review,
    req.params.id
  );
  res.status(200).send(result);
};

const getReviewDataById = async (req, res) => {
  let result = await commonService.getDataByReviewId(db.review, req.params.id);
  res.status(200).send(result);
};

const getDataWithReview = async (req, res) => {
  let result = await commonService.getDataWithReview(db.review, req.params.id);
  res.status(200).send(result);
};

const updateReviewData = async (req, res) => {
  let data = {
    review_status: req.body.review_status,
    patient_id: req.body.patient_id,
    closed_by: req.body.closed_by,
    review_start_date: req.body.review_start_date,
    review_end_date: req.body.review_end_date,
  };

  let result = await commonService.updateData(db.review, data, req.params.id);
  res.status(200).send(result);
};

const getReviewClose = async (req, res) => {
  let currentDate = new Date();
  let year = currentDate.getFullYear();
  let month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  let day = currentDate.getDate().toString().padStart(2, "0");
  let data = {
    review_status: "close",
    closed_by: req.body.closed_by,
    review_end_date: `${year}-${month}-${day}`,
  };

  let result = await commonService.closeReview(db.review, data, req.params.id);
  res.status(200).send(result);
};

const deleteReviewData = async (req, res) => {
  let data = {
    deleted_by: req.body.deleted_by,
    deleted_at: req.body.deleted_at,
  };

  let result = await commonService.softDeletedData(
    db.review,
    data,
    req.params.id
  );
  res.status(200).send(result);
};

module.exports = {
  addReviewData,
  getAllReviewData,
  getReviewDataById,
  getDataWithReview,
  updateReviewData,
  deleteReviewData,
  getDataByPatientId,
  getReviewClose,
};
