import { useNavigate, useParams } from "react-router";
import QuestionLayout from "../components/layouts/QuestionLayout";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideAlert, selectorAlert, showAlert } from "../redux/progressBar";
import axios from "axios";
import { toast } from "sonner";
import ConfirmationAlert from "../components/fragments/ConfirmationAlert";

function Question() {
  const isVisible = useSelector((state) => selectorAlert(state, "question"));
  const { id } = useParams();

  const navigate = useNavigate();
  const [answers, setAnswers] = useState(() => {
    const savedAnswers = sessionStorage.getItem("answers");
    return savedAnswers ? JSON.parse(savedAnswers) : {};
  });
  const dispatch = useDispatch();

  const handleNextQuestionAlert = () => {
    if (Number(id) >= 20) {
      dispatch(showAlert("question"));
    } else {
      const nextId = Number(id) + 1;
      navigate(`/quiz/question/${nextId}`);
    }
  };

  const handleNextQuestion = async () => {
    try {
      const response = await handleSubmit();
      if (response) {
        dispatch(hideAlert("question"));
        sessionStorage.clear();
        localStorage.removeItem("test-token");

        toast.success(response.data.message);
        setTimeout(() => {
          navigate("/quiz/result", { replace: true });
        }, 1200);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleSubmit = async () => {
    try {
      const dataSend = {
        answers: Object.entries(answers).map(([key, value]) => ({
          question_id: Number(key),
          answer: value,
        })),
      };

      const result = await axios.post(
        "http://localhost:3000/api/quiz/test",
        dataSend,
        {
          withCredentials: true,
        }
      );

      return result;
    } catch (e) {
      dispatch(hideAlert("question"));
      toast.error(e.response.data.errors);
    }
  };

  const handleBeforeQuestion = () => {
    if (Number(id) <= 1) {
      navigate(`/quiz/instruction`);
    } else {
      const beforeId = Number(id) - 1;
      navigate(`/quiz/question/${beforeId}`);
    }
  };

  const handleAnswer = (questionId, option) => {
    setAnswers((prevAnswer) => ({
      ...prevAnswer,
      [questionId]: option,
    }));
  };

  const handlePropagation = (e) => {
    e.stopPropagation();
    dispatch(hideAlert("question"));
  };

  useEffect(() => {
    sessionStorage.setItem("timeLeft", 0);
  }, []);

  return (
    <>
      {isVisible && (
        <ConfirmationAlert
          onClick={handleNextQuestion}
          handlePropagation={handlePropagation}
          img={"check"}
          title="Congratulations !"
          text1="Are you sure you want to finish the test now?"
          text2="Ensure all questions are answered"
          button1="Submit"
          button2="Cancel"
        ></ConfirmationAlert>
      )}

      <div className="background-3 font-family d-flex flex-column">
        <QuestionLayout
          handleAnswer={handleAnswer}
          answers={answers}
          setAnswers={setAnswers}
          handleBeforeQuestion={handleBeforeQuestion}
          handleNextQuestionAlert={handleNextQuestionAlert}
        ></QuestionLayout>
      </div>
    </>
  );
}

export default Question;
