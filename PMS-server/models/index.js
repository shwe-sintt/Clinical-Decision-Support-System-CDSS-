const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("node_sequelize_api_db", "root", "", {
  host: "localhost",
  dialect:"mysql",
  operatorsAliases: false,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("connected..");
  })
  .catch((err) => {
    console.log("Error" + err);
  });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.message = require("./messageModel.js")(sequelize, DataTypes);
db.report = require("./reportModel.js")(sequelize, DataTypes);
db.patientCondition = require("./patientConditionModel.js")(sequelize, DataTypes);
db.patient = require("./patientModel.js")(sequelize, DataTypes);
db.review = require("./reviewModel.js")(sequelize, DataTypes);
db.medicalStaff = require("./medicalStaffModel.js")(sequelize, DataTypes);
db.medicationClass = require("./medicationClassModel.js")(sequelize, DataTypes);
db.medicationCondition = require("./medicationConditionModel.js")(sequelize, DataTypes);
db.medication = require("./medicationModel.js")(sequelize, DataTypes);
db.patientAllergy = require("./patientAllergyModel.js")(sequelize, DataTypes);
db.patientMedication = require("./patientMedicationModel.js")(sequelize, DataTypes);

db.sequelize.sync({ force: false }).then(() => {
  console.log("yes re-sync done!");
});

module.exports = db;
