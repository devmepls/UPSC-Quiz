import { useEffect, useState } from "react";
import Card from "../Cards/Card.js";
import styles from "./Menu.module.css";
import { Link } from "react-router-dom";
import { getSubjects } from "../API/Subject.js";
import { toast } from "react-toastify";
function Menu() {
  const [subs, setSubs] = useState([]);
  const getAllSubjects = () => {
    getSubjects()
      .then((res) => setSubs(res.data))
      .catch((err) =>
        toast.error("Failed to Load! Please Reload the Page and Try Again")
      );
  };

  useEffect(() => {
    getAllSubjects();
  }, []);
  return (
    <div>
      <div className={styles.wrapper1}>Quiz-App</div>
      <center>
        <div className={styles.button}>
          <Link to="/add-new-subject" style={{ textDecoration: "none" }}>
            <button type="button" class="btn btn-primary btn-lg btn-block">
              Add New Subject
            </button>
          </Link>
        </div>
      </center>
      <center>
        <div className={styles.wrapper}>
          {subs && subs.length === 0 && "No Subjects Added"}
          {subs &&
            subs.length > 0 &&
            subs.map((curr, key) => {
              return (
                <Card
                  url={`/subject/${curr?.slug}`}
                  key={curr?.slug}
                  name={curr?.name}
                  subjectId={curr?.slug}
                />
              );
            })}
        </div>
      </center>
    </div>
  );
}

export default Menu;
