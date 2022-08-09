const question = require("../Models/question.js");
const subject = require("../Models/subject.js");
const subsection = require("../Models/subsection.js");
const Cryptr = require("cryptr");
const getAllSubsections = async (req, res) => {
  try {
    //get the parent
    const parent = await subject.findOne({ slug: req.params.subjectId });

    //find all subsections...
    const subs = await subsection
      .find({ parent: parent?._id })
      .populate("parent");

    res.status(200).json(subs);
  } catch (error) {
    res.status(401).json(error);
  }
};

const getQuestions = async (req, res) => {
  console.log(req.body);

  try {
    if (!req.body.subs) {
      throw "Subsections not Received!";
    }
    if (!req.body.qty) {
      throw "Number of Questions Error";
    }
    const allQuestions = await question.find({
      subsection: { $in: req.body.subs },
    });
    let random = allQuestions
      .sort(() => 0.5 - Math.random())
      .slice(0, req.body.qty);
    // let toString = random.stringify(allQuestions);
    console.log(random);
    res.status(200).json(random);
  } catch (error) {
    res.status(500).json(error);
  }
};
const obj = { getAllSubsections, getQuestions };
module.exports = obj;
