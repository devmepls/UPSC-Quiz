const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const SubjectSchema = new Schema(
  {
    name: {
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

const subject = mongoose.model("subject", SubjectSchema);
module.exports = subject;
