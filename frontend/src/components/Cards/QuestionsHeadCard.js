import React from "react";
import styles from "./QuestionsHeadCard.module.css";
import moment from "moment";
function QuestionsHeadCard({ subs }) {
  return (
    <center>
      <div className={styles.heading}>
        {subs?.parent?.name} {"/"} {subs?.name}
      </div>
      <div className={styles.heading1}>
        Subsection Code :<b>{subs?.slug}</b>
      </div>
      <div className={styles.heading2}>
        Created On : {moment(new Date(subs?.createdAt)).format("LLLL")}
      </div>
    </center>
  );
}

export default QuestionsHeadCard;
