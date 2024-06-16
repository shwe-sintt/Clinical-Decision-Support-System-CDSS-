const express = require("express");
const cors = require("cors");
const db = require('./models')

require('dotenv').config()

// import routers
const beersT1Router = require("./routes/beersT1Router.js");               
const userRouter = require("./routes/userRouter.js");     
const authRouter = require("./routes/authRouter.js");     

const app = express();

//middle ware
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routers
app.use("/api/beerT1/getAlldata", beersT1Router);
app.use("/api/user/", userRouter);
app.use("/api/auth/", authRouter);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
