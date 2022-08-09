import React from "react";
import QuestionsHeadCard from "../Cards/QuestionsHeadCard.js";
import ButtonGroup from "../Navigation/ButtonGroup.js";
import AddQuestionForm from "../Subject/AddQuestionForm.js";
import { useParams } from "react-router-dom";
import { getSubsection } from "../API/Subject.js";
import { toast } from "react-toastify";

import { createQuestion } from "../API/Question.js";
function Questions() {
  const params = useParams();
  const [subs, setSubs] = React.useState([]);
  const APICall = () => {
    params &&
      getSubsection(params?.subjectId, params?.subsectionId)
        .then((res) => setSubs(res.data))
        .catch((err) => {});
  };

  React.useEffect(() => {
    APICall();
  }, []);

  const [data, setData] = React.useState({
    question: "",
    optionA: "",
    optionB: "",
    optionC: "",
    optionD: "",
    ans: "",
  });
  const submitForm = () => {
    if (data.question === "") {
      toast.warning("Please Enter the Question");
      return;
    }
    if (data.optionA === "") {
      toast.warning("Please Enter the Option A");
      return;
    }
    if (data.optionB === "") {
      toast.warning("Please Enter the Option B");
      return;
    }
    if (data.optionC === "") {
      toast.warning("Please Enter the Option C");
      return;
    }
    if (data.optionD === "") {
      toast.warning("Please Enter the Option D");
      return;
    }
    if (data.ans === "") {
      toast.warning("Please Choose the Answer");
      return;
    }
    data.subject = params.subjectId;
    data.subsection = params.subsectionId;
    createQuestion(data)
      .then((res) => {
        toast.success("Question Created Successfully! 🎉");
        setData({
          question: "",
          optionA: "",
          optionB: "",
          optionC: "",
          optionD: "",
          ans: "",
        });
      })
      .catch((err) => toast.error("Error Creating the Question! 💥"));
  };

  return (
    <>
      <QuestionsHeadCard subs={subs} />
      <ButtonGroup
        subject={params?.subjectId}
        subsection={params?.subsectionId}
      />
      <AddQuestionForm data={data} setData={setData} submitForm={submitForm} />
    </>
  );
}

export default Questions;
