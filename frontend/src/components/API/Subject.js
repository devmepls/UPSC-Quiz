import axios from "axios";

const createSubject = async (data) => {
  const result = await axios({
    method: "POST",
    url: `${process.env.REACT_APP_BACKEND_URL}/add-subject`,
    data: data,
  });
  return result;
};
const getSubjects = async () => {
  const result = await axios({
    method: "GET",
    url: `${process.env.REACT_APP_BACKEND_URL}/all-subjects`,
  });
  return result;
};
const getSubjectDetail = async (data) => {
  const result = await axios({
    method: "GET",
    url: `${process.env.REACT_APP_BACKEND_URL}/get-subject/${data}`,
  });
  return result;
};

//--------------------------------------------------------------------------
const createSubsection = async (data) => {
  const result = await axios({
    method: "POST",
    url: `${process.env.REACT_APP_BACKEND_URL}/add-subsection`,
    data: data,
  });
  return result;
};
const getAllSubsections = async (data) => {
  const result = await axios({
    method: "GET",
    url: `${process.env.REACT_APP_BACKEND_URL}/all-subsections/${data}`,
  });
  return result;
};
const getSubsection = async (section, subsection) => {
  const result = await axios({
    method: "GET",
    url: `${process.env.REACT_APP_BACKEND_URL}/get-subsection/${section}/${subsection}`,
  });
  return result;
};
export {
  createSubject,
  getSubjects,
  getSubjectDetail,
  createSubsection,
  getAllSubsections,
  getSubsection,
};
