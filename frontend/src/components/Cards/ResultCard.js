import React from "react";
import styles from "./ResultCard.module.css";
const ResultCard = ({ right, skip, wrong, total }) => {
  return (
    <div>
      <div className={styles?.breakout}>
        <div className={styles?.classA}>
          <div className={styles?.classAA} style={{ color: "#0000ff" }}>
            {total}
          </div>
          <div className={styles?.classAAA} style={{ color: "#0000ff" }}>
            {total && total * 2}
          </div>
        </div>
        <div className={styles?.classA}>
          <div className={styles?.classAA} style={{ color: "green" }}>
            {right}
          </div>
          <div className={styles?.classAAA} style={{ color: "green" }}>
            +{right && right * 2}
          </div>
        </div>
        <div className={styles?.classA}>
          <div className={styles?.classAA} style={{ color: "red" }}>
            {wrong}
          </div>
          <div className={styles?.classAAA} style={{ color: "red" }}>
            -{wrong && wrong * 0.67}
          </div>
        </div>
        <div className={styles?.classA}>
          <div className={styles?.classAA} style={{ color: "grey" }}>
            {skip}
          </div>
          <div className={styles?.classAAA} style={{ color: "grey" }}>
            Skipped
          </div>
        </div>
      </div>
      <div className={styles?.breakout}>
        <div className={styles?.newClass}>
          Marks : {(right * 2 - wrong * 0.67).toFixed(2)} / {total * 2}
        </div>
        <div className={styles?.newClass}>
          Accuracy :{" "}
          {(((right * 2 - wrong * 0.67) / (total * 2)) * 100.0).toFixed(2)}%
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
