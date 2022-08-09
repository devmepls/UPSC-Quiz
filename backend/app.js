const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");

//creating an express application :
const app = express();
//requiring ENV variables
require("dotenv").config();
//initialsing body to handle JSON Type Data
app.use(bodyParser.json({ limit: "2mb" }));
//using Cross Origin Resource Sharing so that, our front end at localhost:3000 can communicate with backend at local host:8000
app.use(cors());
//Using Morgan to display requests :
app.use(morgan("dev"));

const mongoConnectionString = process.env.MONGO_SRV.replace(
  "<password>",
  process.env.MONGO_PASSWORD
);
// const mongoConnectionString = process.env.MONGO_LOCALHOST;
mongoose
  .connect(mongoConnectionString)
  .then((res) => console.log("Database is Connected!"))
  .catch((err) => console.log(err));

const SubjectRouter = require("./Routes/subject.js");
const QuestionRouter = require("./Routes/question.js");
const QuizRouter = require("./Routes/quiz.js");
app.use("/api/v1", SubjectRouter);

app.use("/api/v1", QuestionRouter);

app.use("/api/v1", QuizRouter);
module.exports = app;
