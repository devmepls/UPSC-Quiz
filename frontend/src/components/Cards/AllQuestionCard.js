import React from "react";
import QuestionDisplayCard from "./QuestionDisplayCard.js";
const AllQuestionCard = ({ qs }) => {
  return (
    <>
      {qs &&
        qs.length > 0 &&
        qs.map((curr, index) => {
          return <QuestionDisplayCard data={curr} key={index} idx={index} />;
        })}
    </>
  );
};

export default AllQuestionCard;
