const express = require("express");
const { getAllSubsections, getQuestions } = require("../Controllers/quiz.js");
const QuizRouter = express.Router();

QuizRouter.route("/quiz/get-all-subsections/:subjectId").get(getAllSubsections);
QuizRouter.route("/quiz/get-questions").post(getQuestions);
module.exports = QuizRouter;
