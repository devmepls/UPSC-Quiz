import React from "react";
import { getQuestions } from "../API/Quiz.js";
import { toast } from "react-toastify";
import QuestionCard from "../Cards/QuestionCard.js";
import ResultCard from "../Cards/ResultCard.js";
import { useNavigate } from "react-router-dom";
const QuizPage = () => {
  const navigate = useNavigate();
  const [subs, setSubs] = React.useState(null);
  const [ques, setQues] = React.useState(null);
  const [correct, setCorrect] = React.useState(null);
  const [ans, setAns] = React.useState(null);
  const function2 = (subs) => {
    getQuestions(subs)
      .then((res) => {
        toast.success("Your Quiz Starts Now! Good Luck");
        setQues(res.data);
      })
      .catch((err) =>
        toast.error("Failed to start Test! Please Try Again! 😓")
      );
  };
  const function1 = () => {
    if (
      window.localStorage.getItem(
        process.env.REACT_APP_LOCALSTORAGE_SUBSECTIONS_FOR_QUIZZES
      ) &&
      window.localStorage.getItem(
        process.env.REACT_APP_LOCALSTORAGE_QUESTION_NUMBER
      )
    ) {
      setSubs({
        subs: JSON.parse(
          window.localStorage.getItem(
            process.env.REACT_APP_LOCALSTORAGE_SUBSECTIONS_FOR_QUIZZES
          )
        ),
        qty: JSON.parse(
          window.localStorage.getItem(
            process.env.REACT_APP_LOCALSTORAGE_QUESTION_NUMBER
          )
        ),
      });
    }
  };

  const function3 = () => {
    let temp = ques?.map((curr, index) => {
      return curr?.answer;
    });
    setCorrect(temp);
    let Valid = [];
    for (let i = 0; i < ques?.length; i++) {
      Valid.push("");
    }
    setAns(Valid);
  };
  React.useEffect(() => {
    window && function1();
  }, [window]);
  React.useEffect(() => {
    subs && function2(subs);
  }, [subs]);
  React.useEffect(() => {
    ques && function3();
  }, [ques]);
  const handleThis = (index, val) => {
    let temp = ans;

    temp[index] = val;
    console.log(temp);
    setAns(temp);
  };
  const [showCard, setShowCard] = React.useState(false);
  const [right, setRight] = React.useState(0);
  const [skip, setSkip] = React.useState(0);
  const [wrong, setWrong] = React.useState(0);
  const handleButton = () => {
    if (window.confirm("Do you really want to finish the Quiz?")) {
      let right = 0;
      let wrong = 0;
      let skip = 0;
      for (let i = 0; i < ans.length; i++) {
        if (ans[i] === "") {
          skip += 1;
        } else if (ans[i] !== correct[i]) {
          wrong += 1;
        } else {
          right += 1;
        }
      }
      setRight(right);
      setWrong(wrong);
      setSkip(skip);
      setShowCard(true);
      toast("Quiz has been ended. Results are Out! Please Check");
    }
  };
  const closeQuiz = () => {
    setRight(0);
    setWrong(0);
    setSkip(0);
    setShowCard(false);
    window.localStorage.removeItem(
      process.env.REACT_APP_LOCALSTORAGE_SUBSECTIONS_FOR_QUIZZES
    );
    window.localStorage.removeItem(
      process.env.REACT_APP_LOCALSTORAGE_QUESTION_NUMBER
    );
    navigate("/");
    toast.success("Thanks for Playing Quiz!");
  };
  return (
    <>
      {/* <div>{JSON.stringify(ques)}</div>
      <div>{JSON.stringify(correct)}</div>
      <div>{JSON.stringify(ans)}</div> */}
      {ques &&
        ques.length > 0 &&
        ques.map((curr, key) => {
          return (
            <QuestionCard
              key={key}
              piece={curr}
              index={key}
              ans={ans}
              setAns={setAns}
              handleThis={handleThis}
              showCard={showCard}
            />
          );
        })}
      {showCard === false && (
        <button
          type="button"
          class="btn btn-success btn-block btn-lg mb-3"
          onClick={handleButton}
        >
          Finish Quiz
        </button>
      )}
      {showCard === true && (
        <button
          type="button"
          class="btn btn-warning btn-block btn-lg mb-3"
          onClick={closeQuiz}
        >
          Close Quiz
        </button>
      )}
      {showCard && (
        <ResultCard
          right={right}
          skip={skip}
          wrong={wrong}
          total={ans.length}
        />
      )}
    </>
  );
};

export default QuizPage;
