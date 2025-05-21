import Hamburger from "../elements/Hamburger";
import MemorizeTable from "../fragments/MemorizeTable";
import NextArrow from "../fragments/NextArrow";
import TimerUi from "../fragments/TimerUi";
import { useDispatch } from "react-redux";
import { showAlert } from "../../redux/progressBar";

function MemoLayout() {
  const dispatch = useDispatch();

  const handleMemoNextArrow = () => {
    dispatch(showAlert("memorize"));
  };

  return (
    <>
      <div className="container p-2">
        <div className="d-flex justify-content-between align-items-center">
          <Hamburger></Hamburger>
          <TimerUi></TimerUi>
        </div>
        <div className=" d-flex justify-content-center align-items-center flex-column mt-2">
          <MemorizeTable></MemorizeTable>
        </div>
      </div>

      <NextArrow onClick={handleMemoNextArrow}></NextArrow>
    </>
  );
}

export default MemoLayout;
