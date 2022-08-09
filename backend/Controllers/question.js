const question = require("../Models/question.js");
const uniqid = require("uniqid");
var shuffle = require("shuffle-array");
const createQuestion = async (req, res) => {
  try {
    const slug1 = uniqid();
    const slug2 = uniqid();
    const slug3 = uniqid();
    const slug4 = uniqid();
    const slug5 = uniqid(); //for question

    let answerSlug = slug1;
    if (req.body.ans === "B") {
      answerSlug = slug2;
    } else if (req.body.ans === "C") {
      answerSlug = slug3;
    }
    if (req.body.ans === "D") {
      answerSlug = slug4;
    }
    const obj = {
      subject: req.body.subject,
      subsection: req.body.subsection,
      title: req.body.question,
      optionA: { text: req.body.optionA, code: slug1 },
      optionB: { text: req.body.optionB, code: slug2 },
      optionC: { text: req.body.optionC, code: slug3 },
      optionD: { text: req.body.optionD, code: slug4 },
      answer: answerSlug,
      slug: slug5,
    };
    const query = new question(obj);
    const result = await query.save();
    // console.log(result);
    res.status(201).json("Question Created Successfully!");
  } catch (error) {
    res.status(402).json(error);
  }
};
const allQuestionsSubsectionWise = async (req, res) => {
  try {
    const allquestions = await question.find({
      subject: req.params.subject,
      subsection: req.params.section,
    });
    r = shuffle(allquestions);
    res.status(200).json(r);
  } catch (error) {
    res.status(400).json(error);
  }
};
const obj = { createQuestion, allQuestionsSubsectionWise };
module.exports = obj;
