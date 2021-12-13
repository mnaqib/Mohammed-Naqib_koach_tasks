const express = require("express");
const connectDB = require("./db/connect");
require("dotenv").config();
const cors = require("cors");
const loginRouter = require("./routes/loginRoute");

const app = express();

app.use(express.json());
app.use(cors({}));

app.get("/", (req, res) => {
  res.end("Login Api");
});

app.use("/api/v1/users", loginRouter);

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
