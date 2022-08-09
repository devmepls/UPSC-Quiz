import React from "react";
import styles from "./ButtonGroup.module.css";
import { Link } from "react-router-dom";
function ButtonGroup({ subject, subsection }) {
  return (
    <div className={styles.wrapper}>
      <button type="button" class="btn btn-primary btn-block">
        <Link
          to={`/subject/${subject}/subsection/${subsection}/all-questions`}
          style={{ textDecoration: "none", color: "#fff" }}
        >
          View All Questions
        </Link>
      </button>

      <button type="button" class="btn btn-warning btn-block">
        <Link
          to={`/subject/${subject}/quiz-form`}
          style={{ textDecoration: "none", color: "#000" }}
        >
          Start Quiz
        </Link>
      </button>
    </div>
  );
}

export default ButtonGroup;
