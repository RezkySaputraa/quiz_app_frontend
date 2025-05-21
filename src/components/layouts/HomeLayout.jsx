import Hamburger from "../elements/Hamburger";
import HomeOption from "../fragments/HomeOption";

function HomeLayout() {
  return (
    <>
      <div className="container p-2">
        <Hamburger></Hamburger>
        <div className="d-flex justify-content-center align-items-center flex-column col-12">
          <HomeOption></HomeOption>
        </div>
      </div>
    </>
  );
}

export default HomeLayout;
