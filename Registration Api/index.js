const express = require("express");
const connectDB = require("./db/connect");
require("dotenv").config();
const registrationRouter = require("./routes/registrationRoute");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.end("Registration Api");
});

app.use("/api/v1/users", registrationRouter);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (err) {
    console.log(err);
  }
};

start();
