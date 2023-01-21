require('dotenv').config();
const express = require("express");

const cors = require("cors");
const users = require("./src/feature/routes/user.routes")
const reports = require("./src/feature/routes/report.routes")
const Connect = require("./src/config/db");
const PORT = process.env.PORT;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/user', users)
app.use('/report', reports)

app.get("/", (req, res) => res.send("hello"));

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  await Connect();
});