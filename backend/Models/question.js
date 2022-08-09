const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const QuestionSchema = new Schema(
  {
    subject: {
      type: String,
      required: true,
    },
    subsection: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    optionA: {
      text: { type: String, required: true },
      code: { type: String, required: true },
    },
    optionB: {
      text: { type: String, required: true },
      code: { type: String, required: true },
    },
    optionC: {
      text: { type: String, required: true },
      code: { type: String, required: true },
    },
    optionD: {
      text: { type: String, required: true },
      code: { type: String, required: true },
    },
    answer: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const question = mongoose.model("question", QuestionSchema);
module.exports = question;
