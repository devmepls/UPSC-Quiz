import Navigation from "./components/Navigation/Navigation.js";
import { ToastContainer } from "react-toastify";
import { Routes, Route, useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Menu from "./components/Menu/Menu.js";
import NewSubject from "./components/NewSubject/NewSubject.js";
import Subject from "./components/Subject/Subject.js";
import SubjectSubpart from "./components/NewSubject/SubjectSubpart.js/SubjectSubpart.js";
import Questions from "./components/Pages/Questions.js";
import AllQuestion from "./components/Pages/AllQuestion.js";
import Quiz from "./components/Pages/Quiz.js";
import QuizPage from "./components/Quiz/QuizPage.js";
function App() {
  return (
    <>
      <Navigation />
      <ToastContainer />
      <Routes>
        <Route
          path="/"
          exact
          element={
            <>
              <Menu />
            </>
          }
        />
        <Route
          path="/add-new-subject"
          exact
          element={
            <>
              <NewSubject />
            </>
          }
        />
        <Route
          path="/subject/:subjectId"
          exact
          element={
            <>
              <Subject />
            </>
          }
        />
        <Route
          path="/subject/:subjectId/add-subsection"
          exact
          element={
            <>
              <SubjectSubpart />
            </>
          }
        />
        <Route
          path="/subject/:subjectId/subsection/:subsectionId/questions"
          exact
          element={
            <>
              <Questions />
            </>
          }
        />
        <Route
          path="/subject/:subjectId/subsection/:subsectionId/all-questions"
          exact
          element={
            <>
              <AllQuestion />
            </>
          }
        />
        <Route
          path="/subject/:subjectId/quiz-form"
          exact
          element={
            <>
              <Quiz />
            </>
          }
        />
        <Route
          path="/quiz/questions"
          exact
          element={
            <>
              <QuizPage />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
