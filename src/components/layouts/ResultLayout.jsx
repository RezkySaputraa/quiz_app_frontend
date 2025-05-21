import Hamburger from "../elements/Hamburger";
import Summary from "../fragments/Summary";
function ResultLayout() {
  return (
    <>
      <div className="container p-2">
        <Hamburger></Hamburger>
        <div className="d-flex justify-content-center col-12 gap-3 flex-wrap">
          <Summary></Summary>
        </div>
      </div>
    </>
  );
}

export default ResultLayout;
