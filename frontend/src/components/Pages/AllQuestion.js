import React from "react";
import QuestionsHeadCard from "../Cards/QuestionsHeadCard.js";
import { useParams } from "react-router-dom";
import { getSubsection } from "../API/Subject.js";
import { allQuestionsSubsectionWise } from "../API/Question.js";

import AllQuestionCard from "../Cards/AllQuestionCard.js";
const AllQuestion = () => {
  const params = useParams();
  const [subs, setSubs] = React.useState([]);
  const APICall = () => {
    params &&
      getSubsection(params?.subjectId, params?.subsectionId)
        .then((res) => setSubs(res.data))
        .catch((err) => {});
  };

  React.useEffect(() => {
    APICall();
  }, []);

  const [qs, setQs] = React.useState([]);
  const allQuestions = () => {
    params !== undefined &&
      allQuestionsSubsectionWise(params?.subjectId, params?.subsectionId)
        .then((res) => setQs(res.data))
        .catch((err) => {});
  };

  React.useEffect(() => {
    allQuestions();
  }, []);
  return (
    <>
      <QuestionsHeadCard subs={subs} />
      <AllQuestionCard qs={qs} />
    </>
  );
};

export default AllQuestion;
