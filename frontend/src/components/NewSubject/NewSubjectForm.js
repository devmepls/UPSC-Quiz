import React from "react";

function NewSubjectForm({
  subName,
  setSubName,
  submitSubject,
  loading,
  setLoading,
}) {
  return (
    <div style={{ margin: "40px 400px" }}>
      <center>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submitSubject();
          }}
        >
          <div className="form-group mx-sm-3 mb-2">
            <label htmlFor="inputPassword2">
              Enter Subject Name (4 or more letters)
            </label>
            <input
              type="text"
              className="form-control"
              id="inputPassword2"
              placeholder="Subject Name Here"
              onChange={(e) => setSubName(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary mb-2"
            disabled={subName.length <= 3 || loading}
          >
            {loading ? "Please Wait" : "Add Subject"}
          </button>
        </form>
      </center>
    </div>
  );
}

export default NewSubjectForm;
