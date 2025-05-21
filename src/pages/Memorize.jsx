import { useNavigate } from "react-router";
import MemoLayout from "../components/layouts/MemoLayout";
import { hideAlert, selectorAlert } from "../redux/progressBar";
import { useDispatch, useSelector } from "react-redux";
import ConfirmationAlert from "../components/fragments/ConfirmationAlert";

function Memorize() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isVisible = useSelector((state) => selectorAlert(state, "memorize"));

  const handleTimeSkipClick = () => {
    dispatch(hideAlert("memorize"));
    sessionStorage.setItem("timeLeft", 0);
    navigate("/quiz/instruction", { replace: true });
  };

  const handlePropagation = (e) => {
    e.stopPropagation();
    dispatch(hideAlert("memorize"));
  };

  return (
    <>
      {isVisible && (
        <ConfirmationAlert
          onClick={handleTimeSkipClick}
          handlePropagation={handlePropagation}
          img={"warning"}
          title="Warning !"
          text1="The time isn't up yet for memorize session"
          text2="Are you sure you want to begin ?"
          button1="Next page "
          button2="Cancel"
        ></ConfirmationAlert>
      )}
      <div className="background-3 font-family d-flex flex-column ">
        <MemoLayout></MemoLayout>
      </div>
    </>
  );
}

export default Memorize;
