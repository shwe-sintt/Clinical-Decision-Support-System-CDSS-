const { Sequelize, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

const sequelize = new Sequelize("tda", "root", "", {
  host: "localhost",
  port: 3306,
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

db.user    = require("./userModel.js")(sequelize, DataTypes);
db.beersT1 = require("./beersT2Model.js")(sequelize, DataTypes);
db.beersT2 = require("./beersT3Model.js")(sequelize, DataTypes);
db.beersT3 = require("./beersT4Model.js")(sequelize, DataTypes);
db.beersT4 = require("./beersT5Model.js")(sequelize, DataTypes);
db.beersT5 = require("./beersT6Model.js")(sequelize, DataTypes);

sequelize.sync({ alter: true })
  .then(async () => {
    console.log("Database tables synchronized successfully!");
    const count = await db.user.count();
    if (count == 0) {
        await createUser(db.user,'admin', 'password', '1');
    }
  })
  .catch((error) => {
    console.error("Error synchronizing database tables:", error);
});

async function createUser(Model,username, password, role) {
    try {
      // Hash the password
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(password, salt);
  
      // Create the user in the database
      const newUser = await Model.create({
        username: username,
        password: hash,
        role: role
      });
      console.log("User created:", newUser);
    } catch (error) {
      console.error("Error creating user:", error);
    }
};

module.exports = db;
