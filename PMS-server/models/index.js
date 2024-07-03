const { Sequelize, DataTypes } = require("sequelize");

const username = 'root';
const password = ''; 
const host = 'localhost'; 
const port = 3306; 
const dialect = 'mysql';
const databaseName = 'pms'; 


const sequelize = new Sequelize(databaseName, username, password, {
  host: host,
  dialect: dialect,
  port: port,
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
db.review = require("./reviewModel.js")(sequelize, DataTypes);
db.medicalStaff = require("./medicalStaffModel.js")(sequelize, DataTypes);
db.medicationClass = require("./medicationClassModel.js")(sequelize, DataTypes);
db.medicationCondition = require("./medicationConditionModel.js")(sequelize, DataTypes);
db.medication = require("./medicationModel.js")(sequelize, DataTypes);
db.patientCondition = require("./patientConditionModel.js")(sequelize, DataTypes);
db.patient = require("./patientModel.js")(sequelize, DataTypes);
db.patientAllergy = require("./patientAllergyModel.js")(sequelize, DataTypes);
db.patientMedication = require("./patientMedicationModel.js")(sequelize, DataTypes);

db.sequelize.sync({ force: false }).then(async() => {
  console.log("yes re-sync done!");
  const count = await db.medicalStaff.count();
    if (count == 0) {
        await createUser();
    }
});

async function createUser() {
  try {
    
      let data = {
        staff_id_str: "stuff1",
        NRIC: "no",
        user_name: "user",
        password: "password",
        email: "user@gmail.com",
        gender:" ",
        first_name: " ",
        last_name: " ",
        gender: " ",
        birth_date: "",
        position: "admin",
        role: "admin",
        start_date: " ",
        end_date: " ",
      };
      db.medicalStaff.create(data)
    console.log("User created:", newUser);
  } catch (error) {
    console.error("Error creating user:", error);
  }
};

module.exports = db;
