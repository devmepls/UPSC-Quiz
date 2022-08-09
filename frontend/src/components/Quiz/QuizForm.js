import React from "react";

const QuizForm = ({ data, qty, setQty, topics, setTopics }) => {
  return (
    <form style={{ margin: "20px 400px" }}>
      {qty}
      {JSON.stringify(topics)}
      <div className="form-group">
        <label htmlFor="exampleFormControlInput1">Email address</label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Subject Name"
          value={data[0]?.parent?.name}
          disabled={true}
        />
      </div>

      <div className="form-group">
        <label htmlFor="exampleFormControlSelect1">Example select</label>
        <select
          className="form-control"
          id="exampleFormControlSelect1"
          onChange={(e) => setQty(e.target.value)}
        >
          <option>5</option>
          <option>10</option>
          <option>15</option>
          <option>20</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlSelect2">
          Select Multiple Topics :
        </label>
        <div className="form-check">
          {data &&
            data.length > 0 &&
            data.map((curr, index) => {
              return (
                <div key={index}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={curr?.slug}
                    value={curr?.slug}
                    onClick={(e) => {
                      if (topics.indexOf(e.target.value) === -1)
                        setTopics([...topics, e.target.value]);
                      else {
                        let x = topics.filter(
                          (curr) => curr !== e.target.value
                        );
                        setTopics(x);
                      }
                    }}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    {curr?.name}
                  </label>
                </div>
              );
            })}
        </div>
      </div>
    </form>
  );
};

export default QuizForm;
