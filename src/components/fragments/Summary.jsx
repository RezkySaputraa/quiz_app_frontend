import { useEffect, useState } from "react";
import Button from "../elements/Button";
import axios from "axios";
import { logout } from "../../services/auth.service";
import { useNavigate } from "react-router";

function Summary() {
  const [time, setTime] = useState({});
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleAlertTest = () => {
    // window.location.replace("/quiz");
    navigate("/quiz");
  };

  const date = time.createdAt ? new Date(time.createdAt) : "";

  const formattedDate = date
    ? date
        .toLocaleString("id-ID", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
        .replace(/\//g, "-")
    : "--:--";

  useEffect(() => {
    const fetch = async () => {
      try {
        const result = await axios.get(
          "http://localhost:3000/api/quiz/test/answer",
          { withCredentials: true }
        );
        const { data } = result.data;
        setTime(data);
      } catch (e) {
        const { errors } = e.response.data;
        console.log(errors);
      }
    };

    fetch();
  }, []);

  useEffect(() => {
    const fetching = async () => {
      try {
        const result = await axios.get(
          "http://localhost:3000/api/quiz/profile",
          { withCredentials: true }
        );
        const { data } = result.data;
        setName(data);
      } catch (e) {
        console.log(e);
      }
    };

    fetching();
  }, []);

  const handleLogout = async () => {
    try {
      const result = await logout();

      if (result) {
        localStorage.clear()
        sessionStorage.clear();
        window.location.replace("/");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className="shadow background-4 rounded-5 col-10 col-sm-11 col-md-6 col-lg-5 col-xl-4 py-2 px-1 py-sm-3 px-sm-3 py-md-4 px-lg-3 py-lg-3 px-xl-4">
        <div className="col-12 p-2 p-lg-3 p-xl-2">
          <div className="text-white">
            <h4 className="fw-bold responsive-text-head">Summary :</h4>
            <p className=" mb-0 responsive-text-normal-result">
              Nice work! Your result is currently
            </p>
            <p className="responsive-text-normal-result col-xxl-10">
              being reviewed and will be announced soon.
            </p>
          </div>
          <div className="d-flex justify-content-between">
            <div className="bg-black text-white rounded-3 ps-2 py-2 col-12 col-sm-7">
              <h5 className="fw-bold responsive-text-inside">{name.name}</h5>
              <h6 className="mb-2 mt-3 responsive-text-normal-result">
                {time.createdAt ? "Finished" : "Not Finished"}
              </h6>
              <span className="border border-warning px-2 rounded-3 mb-0 responsive-text-normal-result">
                {formattedDate}
              </span>
            </div>
            <div className="bg-black rounded-3 px-2 py-2 d-flex justify-content-center col-4 d-none d-sm-flex">
              <img
                src="/images/result/Cat.svg"
                className="d-block img-fluid"
                alt=""
              />
            </div>
          </div>
          <Button
            variant={
              "rounded-3 p-1 bg-memo col-12 align-self-center mt-4 mt-md-5 text-white fw-bold inner-shadow responsive-text-normal-head p-2"
            }
            type={"submit"}
            onClick={handleAlertTest}
          >
            Find Another Quiz
          </Button>
          <Button
            variant={
              "rounded-3 p-1 bg-white col-12 align-self-center mt-3 text-result fw-bold inner-shadow responsive-text-normal-head p-2"
            }
            type={"submit"}
            onClick={handleLogout}
          >
            Log Out
          </Button>
        </div>
      </div>

      <div className="shadow background-5 rounded-5 col-10 col-sm-9 col-md-5 col-lg-4 col-xl-3 col-xxl-3 px-4 py-0 py-xl-4 px-xl-4 h-100">
        <div className="col-12 p-1 p-sm-2 p-md-1 my-3 my-sm-2 my-md-3 my-lg-3 my-xl-0 p-xl-0 p-lg-1">
          <div className="text-white">
            <h4 className="fw-bold">Connect, Learn,</h4>
            <h4 className="fw-bold mb-3">Engage</h4>
          </div>

          <div className="rounded-4" style={{ backgroundColor: "#D8D1FF" }}>
            <img
              src="/images/result/mons2.svg"
              className="img-fluid d-block col-12"
              alt=""
              style={{ transform: "translateX(-12px)" }}
            />
          </div>

          <Button
            variant={
              "rounded-3 p-1 background-button-result col-12 align-self-center mt-4 mt-md-5 text-white fw-bold inner-shadow responsive-text-normal-head p-2"
            }
            type={"submit"}
            onClick={() => console.log("community")}
          >
            Explore Community
          </Button>
        </div>
      </div>
    </>
  );
}

export default Summary;
