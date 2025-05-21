import FormRegister from "../fragments/FormRegister";
import SignStart from "../fragments/SignStart";

function AuthRegister() {
  return (
    <div className="shadow d-flex justify-content-around align-items-center bg-white rounded-5 position-relative py-xxl-5 py-3 col-12 col-sm-9">
      <div className="overlay-2 position-absolute top-0 start-0 d-none d-lg-block"></div>
      <SignStart></SignStart>
      <FormRegister text={"Sign Up"}></FormRegister>
    </div>
  );
}

export default AuthRegister;
