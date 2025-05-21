import InputForm from "../elements/Input/InputForm";
import Button from "../elements/Button";
import { Link, useNavigate } from "react-router";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { register } from "../../services/auth.service";

function FormRegister({ text }) {
  const navigate = useNavigate();
  const usernameRef = useRef(null);

  const [input, setInput] = useState({
    username: "",
    name: "",
    birth_date: "",
    age: "",
    motivation: "",
    password: "",
  });

  useEffect(() => {
    usernameRef.current?.focus();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (value.length > 100) {
      return;
    }

    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const hasil = async () => {
      try {
        const response = await register(input);
        if (response) {
          toast.success("Berhasil Daftar Akun !");
          setTimeout(() => {
            navigate("/", { replace: true });
          }, 1000);
        }
      } catch (e) {
        return toast.error(e.response.data.errors);
      } finally {
        setInput({
          username: "",
          name: "",
          birth_date: "",
          age: "",
          motivation: "",
          password: "",
        });
      }
    };

    hasil();
  };

  return (
    <>
      <div style={{ minWidth: "35%" }} className="py-4 col-8 col-lg-4">
        <h1 className="mb-4 fw-bold text-center text-lg-start">{text}</h1>
        <form
          className="d-flex flex-column row-gap-2 fw-bold"
          onSubmit={handleRegister}
        >
          <InputForm
            ref={usernameRef}
            htmlFor="username"
            type={"text"}
            placeholder={"Username"}
            label={"Username"}
            name={"username"}
            id={"username"}
            onChange={handleChange}
            value={input.username}
          ></InputForm>

          <InputForm
            htmlFor="nama"
            type={"text"}
            placeholder={"Nama"}
            label={"Nama"}
            name={"name"}
            id={"name"}
            onChange={handleChange}
            value={input.name}
          ></InputForm>

          <InputForm
            htmlFor="date"
            type={"date"}
            label={"Tanggal Lahir"}
            name={"birth_date"}
            id={"birth_date"}
            onChange={handleChange}
            value={input.birth_date}
          ></InputForm>

          <InputForm
            htmlFor="usia"
            type={"text"}
            placeholder={"Usia"}
            label={"Usia"}
            name={"age"}
            id={"age"}
            onChange={handleChange}
            value={input.age}
          ></InputForm>

          <InputForm
            htmlFor="tujuan"
            type={"text"}
            placeholder={"Tujuan Tes"}
            label={"Tujuan Tes"}
            name={"motivation"}
            id={"motivation"}
            onChange={handleChange}
            value={input.motivation}
          ></InputForm>

          <InputForm
            htmlFor="password"
            type={"password"}
            placeholder={"*******"}
            label={"Password"}
            name={"password"}
            id={"password"}
            onChange={handleChange}
            value={input.password}
          ></InputForm>

          <Button
            variant={
              "btn btn-success col-12 align-self-center my-3 text-white fw-bold"
            }
            type={"submit"}
          >
            Create Account
          </Button>
        </form>

        <p className="text-center fw-medium col-12" style={{ fontSize: "95%" }}>
          Have an account ? {""}
          <Link to={"/"} className="text-decoration-none">
            Login here
          </Link>
        </p>
      </div>
    </>
  );
}

export default FormRegister;
