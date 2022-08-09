const subject = require("../Models/subject.js");
const subsection = require("../Models/subsection.js");
const uniqid = require("uniqid");
const createNewSubject = async (req, res) => {
  try {
    const id = uniqid();
    const obj = {
      name: req.body.name,
      slug: id,
    };

    const query = new subject(obj);
    const result = await query.save();
    res.status(201).json(`${result?.name} Created Successfully`);
  } catch (error) {
    console.log(error);
    res.status(402).json(error);
  }
};
const allSubjects = async (req, res) => {
  try {
    const result = await subject.find({});
    res.status(200).json(result);
  } catch (error) {
    res.status(402).json(error);
  }
};

const getSubject = async (req, res) => {
  try {
    const re = await subject.findOne({ slug: req.params.subjectId });
    res.status(200).json(re);
  } catch (error) {
    console.log(error);
    res.status(402).json(error);
  }
};

const createSubsection = async (req, res) => {
  try {
    const id = uniqid();
    const obj = {
      name: req.body.name,
      parent: req.body.parent,
      slug: id,
    };
    const query = new subsection(obj);
    const result = await query.save();
    res.status(201).json(`${req.body.name} Created Successfully!`);
  } catch (error) {
    console.log(error);
    res.status(402).json(error);
  }
};
const allSubsections = async (req, res) => {
  console.log(req.params);
  try {
    const re = await subsection.find({ parent: req.params.subsectionId });
    res.status(200).json(re);
  } catch (error) {
    console.log(error);
    res.status(402).json(error);
  }
};
const getSubsection = async (req, res) => {
  try {
    const { sectionId, subsectionId } = req.params;
    const child = await subsection
      .findOne({ slug: subsectionId })
      .populate("parent");
    res.status(200).json(child);
  } catch (error) {
    res.status(402).json(error);
  }
};
const obj = {
  createNewSubject,
  allSubjects,
  getSubject,
  createSubsection,
  allSubsections,
  getSubsection,
};
module.exports = obj;
