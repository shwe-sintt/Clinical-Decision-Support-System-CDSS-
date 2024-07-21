const commonService = require("../services/commonService.js");
const db = require("../relationship");

const addData = async (req, res) => {
  let users = await commonService.addData(db.medicalStaff);
  res.status(200).send(users);
};


module.exports = {
  addData,
};
