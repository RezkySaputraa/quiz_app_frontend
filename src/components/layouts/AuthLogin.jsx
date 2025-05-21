import FormLogin from "../fragments/LoginForm";

function AuthLogin() {
  return (
    <div className="shadow height d-flex justify-content-center align-items-center bg-white rounded-5 col-11 col-sm-9 col-md-8 col-lg-5 col-xxl-4 py-4">
      <FormLogin text={"Log In"}></FormLogin>
    </div>
  );
}

export default AuthLogin;
