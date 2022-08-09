const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const SubsectionSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    parent: {
      type: Schema.Types.ObjectId,
      ref: "subject",
    },
  },
  { timestamps: true }
);

const subsection = mongoose.model("subsection", SubsectionSchema);
module.exports = subsection;
