import React from "react";
import styles from "./AddQuestionForm.module.css";
const AddQuestionForm = ({ data, setData, submitForm }) => {
  return (
    <>
      <div className={styles.head}>Add Question</div>

      <div className={styles.wrapper}>
        <form
          style={{ width: "60%" }}
          onSubmit={(e) => {
            e.preventDefault();
            submitForm();
          }}
        >
          <div className="form-group row">
            <div className="form-group col-md-12">
              <label htmlFor="inputEmail4">Question</label>
              <input
                type="text"
                className="form-control"
                id="inputEmail4"
                placeholder="Question Here"
                value={data.question}
                onChange={(e) => setData({ ...data, question: e.target.value })}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-3">
              <label htmlFor="inputEmail4">Option A</label>
              <input
                type="text"
                className="form-control"
                id="inputEmail4"
                placeholder="Option A"
                onChange={(e) => setData({ ...data, optionA: e.target.value })}
                value={data.optionA}
              />
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="inputPassword4">Option B</label>
              <input
                type="text"
                className="form-control"
                id="inputPassword4"
                placeholder="Option B"
                onChange={(e) => setData({ ...data, optionB: e.target.value })}
                value={data.optionB}
              />
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="inputPassword4">Option C</label>
              <input
                type="text"
                className="form-control"
                id="inputPassword4"
                placeholder="Option C"
                onChange={(e) => setData({ ...data, optionC: e.target.value })}
                value={data.optionC}
              />
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="inputPassword4">Option D</label>
              <input
                type="text"
                className="form-control"
                id="inputPassword4"
                placeholder="Option D"
                onChange={(e) => setData({ ...data, optionD: e.target.value })}
                value={data.optionD}
              />
            </div>
          </div>

          <div className="form-group col-md-12">
            <label htmlFor="inputState">Choose Answer</label>
            <select
              id="inputState"
              className="form-control"
              // value={data.ans}
              onChange={(e) => {
                if (
                  e.target.value[0] === "A" ||
                  e.target.value[0] === "B" ||
                  e.target.value[0] === "C" ||
                  e.target.value[0] === "D"
                )
                  setData({ ...data, ans: e.target.value[0] });
                else {
                  setData({ ...data, ans: "" });
                }
              }}
            >
              <option selected defaultValue="">
                Pick Answer...
              </option>
              <option>A. {data?.optionA}</option>
              <option>B. {data?.optionB}</option>
              <option>C. {data?.optionC}</option>
              <option>D. {data?.optionD}</option>
            </select>
          </div>

          <div className="form-group row">
            <div className="col-sm-12">
              <button type="submit" className="btn btn-info btn-block">
                Add Question
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddQuestionForm;
