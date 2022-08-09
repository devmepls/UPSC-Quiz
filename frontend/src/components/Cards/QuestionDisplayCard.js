import React from "react";
import styles from "./QuestionDisplayCard.module.css";
import RemoveRedEyeRoundedIcon from "@mui/icons-material/RemoveRedEyeRounded";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";

function finaliseAnswer(data) {
  const answerSlug = data?.answer;
  if (answerSlug === data?.optionA?.code) {
    return data?.optionA?.text;
  } else if (answerSlug === data?.optionB?.code) {
    return data?.optionB?.text;
  } else if (answerSlug === data?.optionC?.code) {
    return data?.optionC?.text;
  } else if (answerSlug === data?.optionD?.code) {
    return data?.optionD?.text;
  }
}
const QuestionDisplayCard = ({ data, idx }) => {
  const [display, setDisplay] = React.useState(false);
  return (
    <div className={styles.wrapper}>
      <div className={styles.col1}>
        <b># {idx + 1} </b>({data?.slug})
      </div>
      <div className={styles.col2}>{data?.title}</div>
      {/* <div className={styles.col3}> */}
      <button
        type="button"
        class="btn btn-warning"
        className={styles.col3}
        onClick={(e) => setDisplay(!display)}
      >
        {!display ? <RemoveRedEyeRoundedIcon /> : finaliseAnswer(data)}
      </button>
      {/* </div> */}
    </div>
  );
};

export default QuestionDisplayCard;
