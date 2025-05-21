import { useSelector } from "react-redux";
import { useAlert } from "../../context/Alert";
import Square from "../elements/Square";
import { toast } from "sonner";
import { useNavigate } from "react-router";

function HomeOption() {
  const { setIsAlertOpen } = useAlert();
  const status = useSelector((state) => state.progressBar.isToggle);
  const navigate = useNavigate();

  const handleAlertTest = () => {
    if (status) {
      navigate("/quiz/result");
    } else {
      setIsAlertOpen(true);
    }
  };

  return (
    <>
      <div className="d-flex col-12 col-md-11 col-lg-12 col-xl-11 col-xxl-12 justify-content-center mb-4 mb-md-3 flex-wrap gap-2 gap-lg-2">
        <div className="background-color text-white d-flex justify-content-between rounded-4 inner-shadow p-3 col-10 col-sm-10 col-md-8 col-lg-6">
          <div className="mt-xxl-4 ms-xxl-1 0">
            <h2 className="responsive-text-inside fw-bold">Refer and earn !</h2>
            <h2 className="responsive-text-normal fw-normal">
              Now earn reward for every
            </h2>
            <h2 className=" responsive-text-normal fw-normal">
              week for IST test, especially in
            </h2>
            <h2 className=" responsive-text-normal fw-normal">
              29th February 2024
            </h2>
          </div>
          <img
            src="/images/home/rocket.svg"
            className="img-fluid d-sm-block d-none col-4"
            alt=""
          />
        </div>
        <div className="background-color text-white rounded-4 p-3 inner-shadow col-10 col-sm-10 col-md-8 col-lg-4 d-flex justify-content-between">
          <div className="col-12 col-sm-7 mt-xxl-4">
            <h2 className="fw-bold mb-3 responsive-text-inside">Community</h2>
            <div className="col-12">
              <h2 className="responsive-text-normal fw-normal">
                You can find us :
              </h2>
              <h2 className="responsive-text-normal">
                <a
                  href={"https://www.instagram.com/mrezkyas"}
                  className="text-decoration-none text-white"
                  target="_blank"
                >
                  <img
                    src="/images/home/instagram.svg"
                    className="d-inline-block me-2 "
                    alt=""
                  />
                  Instagram
                </a>
              </h2>
              <h2 className="d responsive-text-normal">
                <a
                  href={"https://www.youtube.com/"}
                  className={"text-decoration-none text-white"}
                  target="_blank"
                >
                  <img
                    src="/images/home/youtube.svg"
                    className="d-inline-block me-2"
                    alt=""
                  />
                  Youtube
                </a>
              </h2>
            </div>
          </div>
          <img
            src="/images/home/community.svg"
            className="img-fluid d-sm-block d-none col-4 col-lg-5 me-sm-2 col-xxl-6"
            alt=""
          />
        </div>
      </div>

      <div className="d-flex flex-column col-9 col-sm-9 col-md-12 col-xl-11 col-xxl-12 mb-4 mb-md-3 gap-1 gap-md-2">
        <h3 className="text-white ms-sm-3 mb-0 ms-md-5 responsive-text">
          Recently
        </h3>
        <div className="d-flex justify-content-center flex-wrap gap-1 gap-md-2 ">
          <Square
            src="/images/home/mbti.svg"
            percent={"50%"}
            variant={"bg-secondary inner-shadow "}
            text={"text-muted"}
            line={"progress-bar"}
            onClick={() => toast.info("Soon Avalaible")}
          >
            MBTI
          </Square>
          <Square
            src="/images/home/bigfive.svg"
            percent={"25%"}
            variant={"bg-secondary inner-shadow"}
            text={"text-muted"}
            line={"progress-bar"}
            onClick={() => toast.info("Soon Avalaible")}
          >
            Big 5
          </Square>
        </div>
      </div>

      <div className="d-flex flex-column col-9 col-sm-9 col-md-12 col-xl-11 col-xxl-12 gap-1 gap-md-2">
        <h3 className="text-white ms-sm-3 mb-0 ms-md-5 responsive-text">
          Let's Play
        </h3>
        <div className="d-flex justify-content-center flex-wrap gap-1 gap-md-2">
          <Square
            src="/images/home/ist.svg"
            percent={status ? "100%" : "0%"}
            variant={"background-color inner-shadow"}
            text={"text-white"}
            line={"bg-primary"}
            onClick={handleAlertTest}
          >
            IST
          </Square>
          <Square
            src="/images/home/wais.svg"
            percent={"34%"}
            variant={"bg-secondary inner-shadow"}
            text={"text-muted"}
            line={"progress-bar"}
            onClick={() => toast.info("Soon Avalaible")}
          >
            WAIS
          </Square>
        </div>
        <div className="d-flex  justify-content-center flex-wrap gap-1 gap-md-2">
          <Square
            src="/images/home/riasec.svg"
            percent={"63%"}
            variant={"bg-secondary inner-shadow"}
            text={"text-muted"}
            line={"progress-bar"}
            onClick={() => toast.info("Soon Avalaible")}
          >
            RIASEC
          </Square>
          <Square
            src="/images/home/16pf.svg"
            percent={"20%"}
            variant={"bg-secondary inner-shadow"}
            text={"text-muted"}
            line={"progress-bar"}
            onClick={() => toast.info("Soon Avalaible")}
          >
            16PF
          </Square>
        </div>
      </div>
    </>
  );
}

export default HomeOption;
