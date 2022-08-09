import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./Subject.module.css";
import { getSubjectDetail, getAllSubsections } from "../API/Subject.js";
import moment from "moment";
import Card from "../Cards/Card.js";
function Subject() {
  const [subject, setSubject] = useState({});
  const params = useParams();
  const getSubject = () => {
    getSubjectDetail(params?.subjectId)
      .then((res) => setSubject(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getSubject();
  }, []);

  const [subs, setSubs] = useState([]);
  const getAllSubs = () => {
    getAllSubsections(subject?._id)
      .then((res) => setSubs(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    subject !== undefined && getAllSubs();
  }, [subject]);

  return (
    <div>
      <center>
        <div className={styles.heading}>{subject?.name}</div>
        <div className={styles.heading1}>
          Subject Code : <b>{subject?.slug}</b>
        </div>
        <div className={styles.heading2}>
          Created On : {moment(new Date(subject?.createdAt)).format("LLLL")}
        </div>
        <div className={styles.button}>
          <Link
            to={`/subject/${params?.subjectId}/add-subsection`}
            style={{ textDecoration: "none" }}
          >
            <button type="button" class="btn btn-warning btn-lg btn-block">
              {`Add New Subsection of ${subject?.name} `}
            </button>
          </Link>
        </div>
      </center>
      <center>
        <div className={styles.wrapper}>
          {subs && subs.length === 0 && "No Subsections Added"}
          {subs &&
            subs.length > 0 &&
            subs.map((curr, key) => {
              console.log(curr);
              return (
                <Card
                  key={curr?.slug}
                  name={curr?.name}
                  subjectId={curr?.slug}
                  url={`/subject/${subject?.slug}/subsection/${curr?.slug}/questions`}
                />
              );
            })}
        </div>
      </center>
    </div>
  );
}

export default Subject;
