import Button from "../elements/Button";

function ConfirmationAlert({
  onClick,
  handlePropagation,
  img,
  title,
  text1,
  text2,
  button1,
  button2
}) {
  return (
    <>
      <div className="overlay z-2" onClick={handlePropagation}></div>
      <div className="backround-alert position-absolute top-50 translate-middle start-50 col-8 col-sm-6 col-md-4 col-xl-3 col-xxl-3 rounded-4 d-flex flex-column justify-content-center align-items-center pb-4 inner-shadow z-3">
        <div className="d-flex flex-column justify-content-center align-items-center text-white px-2">
          <img
            src={`/images/alerts/${img}.svg`}
            className="img-fluid col-8 col-sm-9 col-md-7 col-lg-10 col-xl-8 col-xxl-8 d-block"
            alt="Alert"
          />
          <h3 className="text-center">{title}</h3>
          <p className="text-center m-0 responsive-text-normal2">{text1}</p>
          <p className="text-center responsive-text-normal2">{text2}</p>
        </div>
        <div className="d-flex align-items-center justify-content-evenly col-11 col-sm-11 col-md-12 col-lg-11 col-xl-11 col-xxl-8">
          <Button
            type={"button"}
            variant={
              "btn btn-primary text-white inner-shadow-2 col-5 col-md-5 col-xl-5 responsive-text-normal2"
            }
            onClick={onClick}
          >
            {button1}
          </Button>
          <Button
            type={"button"}
            variant={
              "btn btn-success text-white inner-shadow-2 col-5 col-md-5 col-xl-5 responsive-text-normal2"
            }
            onClick={handlePropagation}
          >
            {button2}
          </Button>
        </div>
      </div>
    </>
  );
}

export default ConfirmationAlert;
