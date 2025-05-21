import { useEffect, useState } from "react";
import Button from "../elements/Button";
import { useParams } from "react-router";
import axios from "axios";

function MultiChoice({ handleAnswer, answers, setAnswers }) {
  const categories = ["Bunga", "Perkakas", "Burung", "Kesenian", "Binatang"];
  const [questions, setQuestions] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const answersSession = sessionStorage.getItem("answers");
    if (answersSession) {
      setAnswers(JSON.parse(answersSession));
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem("answers", JSON.stringify(answers));
  }, [answers]);

  useEffect(() => {
    const getQuestion = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/quiz/test/question/${id}`,
          { withCredentials: true }
        );
        const { data } = response.data;
        setQuestions(data);
      } catch (e) {
        console.log(e);
      }
    };

    getQuestion();
  }, [id]);

  return (
    <>
      {questions ? (
        <div className="text-white col-11 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
          <h2 className=" fw-bold text-secondary">
            Question {questions.id}/20
          </h2>
          <p className=" responsive-text-normal-headqu">
            Kata yang mempunyai huruf permulaan - {questions.question} - adalah
            ?
          </p>
          <div className="d-flex flex-column gap-2 mt-4">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={`fw-bold responsive-text-normal-textquestion text-white border border-primary rounded-3 py-2 ps-3 ${
                  answers[questions.id] === category
                    ? "bg-success"
                    : "bg-transparent"
                }`}
                onClick={() => handleAnswer(questions.id, category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
}

export default MultiChoice;
