import Hamburger from "../elements/Hamburger";
import NextArrow from "../fragments/NextArrow";
import MultiChoice from "../fragments/MultiChoice";
import BackArrow from "../fragments/BackArrow";

function QuestionLayout({
  handleAnswer,
  setAnswers,
  answers,
  handleBeforeQuestion,
  handleNextQuestionAlert,
}) {
  return (
    <>
      <div className="container p-2">
        <div className="d-flex justify-content-between align-items-center">
          <Hamburger></Hamburger>
        </div>
        <div className=" d-flex justify-content-center align-items-center flex-column mt-2">
          <MultiChoice
            handleAnswer={handleAnswer}
            setAnswers={setAnswers}
            answers={answers}
          ></MultiChoice>
        </div>
        <NextArrow onClick={handleNextQuestionAlert}></NextArrow>
        <BackArrow onClick={handleBeforeQuestion}></BackArrow>
      </div>
    </>
  );
}

export default QuestionLayout;
