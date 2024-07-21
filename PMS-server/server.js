const express = require("express");
const cors = require("cors");
require('dotenv').config()

// import routers
const medicalStaffRouter = require("./routes/medicalStaffRouter.js");
const medicationClassRouter = require("./routes/medicationClassRouter.js");
const medicationConditionRouter = require("./routes/medicationConditionRouter.js");
const medicationRouter = require("./routes/medicationRouter.js");
const messageRouter = require("./routes/messageRouter.js");
const patientConditionRouter = require("./routes/patientConditionRouter.js");
const patientRouter = require("./routes/patientRouter.js");
const patientMedicationRouter = require("./routes/patientMedicationRouter.js");
const reportRouter = require("./routes/reportRouter.js");
const reviewRouter = require("./routes/reviewRouter.js");
const patientAllergyRouter = require("./routes/patientAllergyRouter.js");

const app = express();

//middle ware
app.use(cors()) 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routers
app.use("/api/medicalStaff", medicalStaffRouter);
app.use("/api/medicationClass", medicationClassRouter);
app.use("/api/medicationCondition", medicationConditionRouter);
app.use("/api/medication", medicationRouter);
app.use("/api/message", messageRouter);
app.use("/api/patientCondition", patientConditionRouter);
app.use("/api/patient", patientRouter);
app.use("/api/patientMedication", patientMedicationRouter);
app.use("/api/report", reportRouter);
app.use("/api/patientAllergy", patientAllergyRouter);
app.use("/api/review", reviewRouter);
 
const PORT = process.env.PORT || 8001;
// const ip = '10.175.4.73';
// app.listen(PORT, ip , () => {
//     console.log(`Server is running at [http://$%7bip%7d:$%7bport%7d%60]http://${ip}:${PORT}`);
// });
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
