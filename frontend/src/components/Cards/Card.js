import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/avatars-jdenticon-sprites";
const Card = ({ name, subjectId, url }) => {
  let svg = createAvatar(style, {
    // ... and other options
  });
  function createMarkup(body) {
    return { __html: body };
  }
  return (
    <div className={styles.eachCard}>
      <Link to={url} style={{ textDecoration: "none" }}>
        <div
          className={styles.img}
          style={{ height: "200px", width: "200px" }}
          dangerouslySetInnerHTML={createMarkup(svg)}
        ></div>
        <div className={styles.textCard}>{name}</div>
      </Link>
    </div>
  );
};

export default Card;
