import React from "react";

function SubjectSubpartForm({
  subjectName,
  loading,
  setLoading,
  subName,
  setSubName,
  submitForm,
}) {
  return (
    <div style={{ margin: "40px 400px" }}>
      <center>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submitForm();
          }}
        >
          <div className="form-group mx-sm-3 mb-2">
            <label htmlFor="inputPassword2">Subject Name</label>
            <input
              type="text"
              className="form-control"
              id="inputPassword2"
              placeholder="Subject Name Here"
              disabled={true}
              value={subjectName}
            />
          </div>
          <div className="form-group mx-sm-3 mb-2">
            <label htmlFor="inputPassword2">
              Enter Subsection Name (4 or more letters)
            </label>
            <input
              type="text"
              className="form-control"
              id="inputPassword2"
              placeholder="Subsection Name Here"
              onChange={(e) => setSubName(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary mb-2"
            disabled={subName.length <= 3 || loading}
          >
            {loading ? "Please Wait" : "Add Subsection"}
          </button>
        </form>
      </center>
    </div>
  );
}

export default SubjectSubpartForm;
