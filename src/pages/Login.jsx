import { useNavigate } from "react-router";
import AuthLogin from "../components/layouts/AuthLogin";

function Login() {
  
  return (
    <>
      <div className="background-1 d-flex">
        <div className=" container d-flex justify-content-center align-items-center scale">
          <AuthLogin></AuthLogin>
        </div>
      </div>
    </>
  );
}

export default Login;
