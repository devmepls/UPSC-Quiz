const express = require("express");
const {
  createQuestion,
  allQuestionsSubsectionWise,
} = require("../Controllers/question.js");
const QuestionRouter = express.Router();

QuestionRouter.route("/create-question").post(createQuestion);

QuestionRouter.route("/all-questions/:subject/:section").get(
  allQuestionsSubsectionWise
);
module.exports = QuestionRouter;
