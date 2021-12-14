const express = require("express");
const connectDB = require("./db/connect");
require("dotenv").config();
const app = express();
const studentRouter = require("./routes/studentRoutes");
const groupRouter = require("./routes/groupRoutes");
const collegeRouter = require("./routes/collegeRoutes");

app.use(express.json());

app.use("/api/v1/students", studentRouter);
app.use("/api/v1/groups", groupRouter);
app.use("/api/v1/colleges", collegeRouter);

const port = process.env.PORT || 3003;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (err) {
    console.log(err);
  }
};

start();
