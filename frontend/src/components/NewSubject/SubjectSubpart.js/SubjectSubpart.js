import { useState, useEffect } from "react";
import SubjectSubpartForm from "./SubjectSubpartForm.js";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getSubjectDetail, createSubsection } from "../../API/Subject.js";
import { toast } from "react-toastify";
function SubjectSubpart() {
  const navigate = useNavigate();
  const params = useParams();
  const [subject, setSubject] = useState({});
  const getSubject = () => {
    getSubjectDetail(params?.subjectId)
      .then((res) => setSubject(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getSubject();
  }, []);

  const [loading, setLoading] = useState(false);
  const [subName, setSubName] = useState("");

  const submitForm = () => {
    const dt = {
      parent: subject?._id,
      name: subName,
    };
    createSubsection(dt)
      .then((res) => {
        toast.success(res.data);
        navigate(`/subject/${subject?.slug}`);
      })
      .catch((err) => {
        toast.error("Please Try Again!");
        setSubName("");
      });
  };
  return (
    <>
      <SubjectSubpartForm
        subjectName={subject?.name}
        loading={loading}
        setLoading={setLoading}
        subName={subName}
        setSubName={setSubName}
        submitForm={submitForm}
      />
    </>
  );
}

export default SubjectSubpart;
