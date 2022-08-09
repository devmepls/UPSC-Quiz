import React from "react";

import { getAllSubsections } from "../API/Quiz.js";
import { useParams } from "react-router-dom";
import QuizForm from "../Quiz/QuizForm.js";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Quiz = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [subs, setSubs] = React.useState([]);
  const function1 = () => {
    params &&
      getAllSubsections(params?.subjectId)
        .then((res) => setSubs(res.data))
        .catch((err) => {});
  };

  const function2 = () => {
    if (window.localStorage !== undefined) {
      if (window.localStorage.getItem("quizfields")) {
        window.localStorage.removeItem("quizfields");
      }
    }
  };
  React.useEffect(() => {
    function1();
    window && function2();
  }, []);

  const [qty, setQty] = React.useState(5);
  const [topics, setTopics] = React.useState([]);

  //initialise a local stor
  const handleSubmission = () => {
    //what if not selected?
    if (topics.length === 0) {
      toast("No Subsection selected for Quiz!");
      return;
    }

    window.localStorage.setItem(
      process.env.REACT_APP_LOCALSTORAGE_SUBSECTIONS_FOR_QUIZZES,
      JSON.stringify(topics)
    );
    window.localStorage.setItem(
      process.env.REACT_APP_LOCALSTORAGE_QUESTION_NUMBER,
      JSON.stringify(qty)
    );
    navigate("/quiz/questions");
  };
  return (
    <>
      {JSON.stringify(topics)}
      <QuizForm
        data={subs}
        qty={qty}
        setQty={setQty}
        topics={topics}
        setTopics={setTopics}
      />

      <button
        type="button"
        class="btn btn-primary btn-block"
        onClick={handleSubmission}
      >
        Start Quiz
      </button>
    </>
  );
};

export default Quiz;
