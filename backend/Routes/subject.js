const express = require("express");
const {
  createNewSubject,
  allSubjects,
  getSubject,
  createSubsection,
  allSubsections,
  getSubsection,
} = require("../Controllers/subject.js");
const SubjectRouter = express.Router();

SubjectRouter.route("/add-subject").post(createNewSubject);
SubjectRouter.route("/all-subjects").get(allSubjects);
SubjectRouter.route("/get-subject/:subjectId").get(getSubject);

SubjectRouter.route("/add-subsection").post(createSubsection);
SubjectRouter.route("/all-subsections/:subsectionId").get(allSubsections);
SubjectRouter.route("/get-subsection/:sectionId/:subsectionId").get(
  getSubsection
);
module.exports = SubjectRouter;
