import NewSubjectForm from "./NewSubjectForm.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createSubject } from "../API/Subject.js";

import { toast } from "react-toastify";
function NewSubject() {
  const navigate = useNavigate();
  const [subName, setSubName] = useState("");
  const submitSubject = () => {
    setLoading(true);
    createSubject({ name: subName })
      .then((res) => {
        toast.success(`${res.data} 🎉`);
        setLoading(false);
        navigate("/");
      })

      .catch((err) => {
        toast.error("Please Try Again!");
        setLoading(false);
        setSubName("");
      });
  };
  const [loading, setLoading] = useState(false);
  return (
    <NewSubjectForm
      subName={subName}
      setSubName={setSubName}
      submitSubject={submitSubject}
      loading={loading}
      setLoading={setLoading}
    />
  );
}

export default NewSubject;
