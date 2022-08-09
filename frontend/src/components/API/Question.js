import axios from "axios";

const createQuestion = async (data) => {
  const result = await axios({
    method: "POST",
    url: `${process.env.REACT_APP_BACKEND_URL}/create-question`,
    data: data,
  });
  return result;
};

const allQuestionsSubsectionWise = async (section, subsection) => {
  const result = await axios({
    method: "GET",
    url: `${process.env.REACT_APP_BACKEND_URL}/all-questions/${section}/${subsection}`,
  });
  return result;
};
export { createQuestion, allQuestionsSubsectionWise };
