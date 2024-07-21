const commonService = require("../services/commonService.js");
const db = require("../relationship");

const addStaffData = async (req, res) => {
  let data = {
    staff_id_str: req.body.staffId,
    NRIC: req.body.NRIC,
    user_name: req.body.user_name,
    password: req.body.password,
    email: req.body.email,
    gender: req.body.gender,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    gender: req.body.gender,
    birth_date: req.body.birth_date,
    position: req.body.position,
    role: req.body.role,
    start_date: req.body.start_date,
    end_date: req.body.end_date,
  };

  let result = await commonService.addData(db.medicalStaff, data);
  res.status(200).send(result);
};

const getAllStaffData = async (req, res) => {
  let result = await commonService.getAlldata(db.medicalStaff);
  res.status(200).send(result);
};

const login = async (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  let dataList = await commonService.getAlldata(db.medicalStaff);
  let result = dataList.filter((d) => d.user_name == username);
  if (result.length === 0) {
    res.send({ status: 404, message: "User did not registered!" });
  } else {
    let data = result[0];
    if (data.password == password) {
      res.send({ status: 200, user: data });
    } else {
      res.send({ status: 400, message: "Password does not match!" });
    }
  }
};

const getStaffDataById = async (req, res) => {
  let result = await commonService.getDataByStuffId(db.medicalStaff, req.params.id);
  res.status(200).send(result);
};

const getStaffDataByEmail = async (req, res) => {
  let result = await commonService.getDataByEmail(
    db.medicalStaff,
    req.param.email
  );
  res.status(200).send(result);
};

const updateStaffData = async (req, res) => {
  let data = {
    NRIC: req.body.NRIC,
    user_name: req.body.user_name,
    password: req.body.password,
    email: req.body.email,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    gender: req.body.gender,
    birth_date: req.body.birth_date,
    position: req.body.position,
    role: req.body.role,
    start_date: req.body.start_date,
    end_date: req.body.end_date,
  };

  let result = await commonService.updateData(
    db.medicalStaff,
    data,
    req.params.id
  );
  res.status(200).send(result);
};

const deleteStaffData = async (req, res) => {
  let data = {
    deleted_by: req.body.deleted_by,
    deleted_at: req.body.deleted_at,
  };

  let result = await commonService.softDeletedData(
    db.medicalStaff,
    data,
    req.params.id
  );
  res.status(200).send(result);
};

module.exports = {
  addStaffData,
  getAllStaffData,
  getStaffDataById,
  getStaffDataByEmail,
  updateStaffData,
  deleteStaffData,
  login,
};
