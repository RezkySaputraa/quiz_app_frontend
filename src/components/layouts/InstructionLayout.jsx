import { useNavigate} from "react-router";
import Hamburger from "../elements/Hamburger";
import InstructionSquare from "../fragments/InstructionSquare";
import NextArrow from "../fragments/NextArrow";

function InstructionLayout() {
  const navigate = useNavigate();

  const handleInstruductionNextArrow = () => {
    navigate(`/quiz/question/1`);
  };

  return (
    <>
      <div className="container p-2">
        <div className="d-flex justify-content-between align-items-center">
          <Hamburger></Hamburger>
        </div>
        <div className=" d-flex justify-content-center align-items-center flex-column mt-2">
          <InstructionSquare></InstructionSquare>
        </div>
      </div>

      <NextArrow onClick={handleInstruductionNextArrow}></NextArrow>
    </>
  );
}

export default InstructionLayout;
