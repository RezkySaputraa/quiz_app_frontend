import ConfirmationAlert from "../components/fragments/ConfirmationAlert";
import HomeLayout from "../components/layouts/HomeLayout";
import { useAlert } from "../context/Alert";
import { useSelector } from "react-redux";
import { deleteAnswer } from "../services/auth.service";
import { useEffect } from "react";

function Homepage() {
  const { isAlertOpen, setIsAlertOpen } = useAlert();
  const status = useSelector((state) => state.progressBar.isToggle);

  const handleBeginTest = () => {
    const result = deleteAnswer();
    if (result) {
      window.location.replace("/quiz/memorize");
      localStorage.setItem("status", true);
      setIsAlertOpen(!isAlertOpen);
    }
  };

  const handlePropagation = (e) => {
    e.stopPropagation();
    setIsAlertOpen(!isAlertOpen);
  };

  useEffect(() => {
    if (status) {
      sessionStorage.clear();
      localStorage.removeItem("test-token");
    }
  }, [status]);

  return (
    <>
      {isAlertOpen && (
        <ConfirmationAlert
          onClick={handleBeginTest}
          handlePropagation={handlePropagation}
          img="danger"
          title="Quick Tips"
          text1="The test must be completed in one session"
          text2="If you leave, your progress will be lost"
          button1="Begin Test"
          button2="Cancel"
        ></ConfirmationAlert>
      )}
      <div className="background-2 font-family">
        <HomeLayout></HomeLayout>
      </div>
    </>
  );
}

export default Homepage;
