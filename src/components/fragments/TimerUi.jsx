import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function TimerUi() {
  const [timeLeft, setTimeLeft] = useState(() => {
    const savedTime = sessionStorage.getItem("timeLeft");
    return savedTime ? parseInt(savedTime) : 180;
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (timeLeft <= 0) {
      navigate("/quiz/instruction", { replace: true });
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prevState) => {
        const newTime = prevState - 1;
        sessionStorage.setItem("timeLeft", newTime);
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const minute = Math.floor(timeLeft / 60);
  const second = timeLeft % 60;

  const formattedTime = `${String(minute).padStart(2, "0")}:${String(
    second
  ).padStart(2, "0")}`;

  return (
    <div className="text-center text-white mb-1">
      <h3 className="mb-0 border rounded-3 col-12 py-1 px-2 responsive-text-normal-time">
        {formattedTime}
      </h3>
    </div>
  );
}

export default TimerUi;
