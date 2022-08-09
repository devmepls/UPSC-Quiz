import React from "react";

const QuestionCard = ({ piece, index, ans, setAns, handleThis, showCard }) => {
  const correctAnswer = () => {
    let ans = piece?.optionA?.text;
    if (piece?.answer === piece?.optionB?.code) {
      ans = piece?.optionB?.text;
    } else if (piece?.answer === piece?.optionC?.code) {
      ans = piece?.optionC?.text;
    } else if (piece?.answer === piece?.optionD?.code) {
      ans = piece?.optionD?.text;
    }
    return ans;
  };

  const youMarked = () => {
    if (ans) {
      if (ans[index] === "") {
        return "Skipped";
      }
      let myAns = ans[index];
      if (myAns === piece?.optionA?.code) {
        return piece?.optionA?.text;
      } else if (myAns === piece?.optionB?.code) {
        return piece?.optionB?.text;
      } else if (myAns === piece?.optionC?.code) {
        return piece?.optionC?.text;
      } else if (myAns === piece?.optionD?.code) {
        return piece?.optionD?.text;
      }
    }
    return "";
  };

  const yourVerdict = () => {
    let l = correctAnswer();
    let m = youMarked();
    if (m === "Skipped") {
      return "Skipped ❔";
    } else if (l === m) {
      return "Correct ✅";
    } else return "Wrong ❌";
  };
  return (
    <div className="container-fluid">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4>
              #{index + 1} {piece?.title}
            </h4>
          </div>
          <div className="modal-body">
            <div className="col-xs-3 5"> </div>
            <div className="quiz" id="quiz" data-toggle="buttons">
              <label className="element-animation1 btn btn-lg btn-danger btn-block">
                <span className="btn-label">
                  <i className="glyphicon glyphicon-chevron-right" />
                </span>{" "}
                <input
                  type="radio"
                  name="q_answer"
                  readOnly={showCard === true}
                  //   defaultValue={piece?.optionA?.code}
                  onChange={(e) => handleThis(index, e.target.value)}
                  value={piece?.optionA?.code}
                />{" "}
                {piece?.optionA?.text}
              </label>
              <label className="element-animation2 btn btn-lg btn-danger btn-block">
                <span className="btn-label">
                  <i className="glyphicon glyphicon-chevron-right" />
                </span>{" "}
                <input
                  type="radio"
                  name="q_answer"
                  readOnly={showCard === true}
                  //   defaultValue={piece?.optionB?.code}
                  value={piece?.optionB?.code}
                  onChange={(e) => handleThis(index, e.target.value)}
                />{" "}
                {piece?.optionB?.text}
              </label>
              <label className="element-animation3 btn btn-lg btn-danger btn-block">
                <span className="btn-label">
                  <i className="glyphicon glyphicon-chevron-right" />
                </span>{" "}
                <input
                  type="radio"
                  name="q_answer"
                  readOnly={showCard === true}
                  //   defaultValue={piece?.optionC?.code}
                  value={piece?.optionC?.code}
                  onChange={(e) => handleThis(index, e.target.value)}
                />{" "}
                {piece?.optionC?.text}
              </label>
              <label className="element-animation4 btn btn-lg btn-danger btn-block">
                <span className="btn-label">
                  <i className="glyphicon glyphicon-chevron-right" />
                </span>{" "}
                <input
                  type="radio"
                  name="q_answer"
                  readOnly={showCard === true}
                  //   defaultValue={piece?.optionD?.code}
                  value={piece?.optionD?.code}
                  onChange={(e) => handleThis(index, e.target.value)}
                />{" "}
                {piece?.optionD?.text}{" "}
              </label>{" "}
              {showCard === true && (
                <div>Correct Answer : {correctAnswer()}</div>
              )}
              {showCard && <div>Your Answer : {youMarked()}</div>}
              {showCard && <div>Verdict : {yourVerdict()}</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
