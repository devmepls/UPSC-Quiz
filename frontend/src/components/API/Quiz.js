import axios from "axios";

const getAllSubsections = async (data) => {
  const result = await axios({
    method: "GET",
    url: `${process.env.REACT_APP_BACKEND_URL}/quiz/get-all-subsections/${data}`,
    data: data,
  });
  return result;
};

const getQuestions = async (data) => {
  console.log("AXIOS", data);
  const result = await axios({
    method: "POST",
    url: `${process.env.REACT_APP_BACKEND_URL}/quiz/get-questions`,
    data: data,
  });
  return result;
};

export { getAllSubsections, getQuestions };
