import InputForm from "../elements/Input/InputForm";
import Button from "../elements/Button";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";
import { login } from "../../services/auth.service";
import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const testToken = uuidv4();

function FormLogin({ text }) {
  const logRef = useRef(null);

  useEffect(() => {
    logRef.current?.focus();
  }, []);

  const [inputLog, setInputLog] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (value.length > 100) {
      return;
    }

    setInputLog((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const result = async () => {
      try {
        const response = await login(inputLog);
        if (response) {
          toast.success("Login Berhasil");
          localStorage.removeItem("status");
          
          localStorage.setItem("test-token", testToken);
          
          setTimeout(() => {
            window.location.replace("/");
          }, 1100);
        }
      } catch (e) {
        toast.error(e.response.data.errors);
      } finally {
        setInputLog({
          username: "",
          password: "",
        });
      }
    };

    result();
  };

  return (
    <>
      <div className="col-8 col-lg-8">
        <h1 className="mb-4 fw-bold text-center fs-1">{text}</h1>
        <form
          className="d-flex flex-column row-gap-3 fw-bold"
          onSubmit={handleLogin}
        >
          <InputForm
            ref={logRef}
            htmlFor="username"
            type={"text"}
            placeholder={"Username"}
            label={"Username"}
            name={"username"}
            id={"username"}
            value={inputLog.username}
            onChange={handleChange}
          ></InputForm>

          <InputForm
            htmlFor="password"
            type={"password"}
            placeholder={"*******"}
            label={"Password"}
            name={"password"}
            id={"password"}
            value={inputLog.password}
            onChange={handleChange}
          ></InputForm>

          <Button
            variant={
              "btn btn-success col-12 align-self-center my-3 text-white fw-bold"
            }
            type={"submit"}
          >
            Login
          </Button>
        </form>

        <p className="text-center fw-medium col-12" style={{ fontSize: "87%" }}>
          Don't have an account yet ? {""}
          <Link to={"/users"} className="text-decoration-none">
            Register here
          </Link>
        </p>
      </div>
    </>
  );
}

export default FormLogin;
