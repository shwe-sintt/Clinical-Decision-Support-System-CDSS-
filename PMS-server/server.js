const express = require("express");
const cors = require("cors");
require('dotenv').config()

// import routers
const userRouter = require("./routes/userRouter.js");

const app = express();

//middle ware
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routers
app.use("/api/user", userRouter);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
