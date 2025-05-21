function BackArrow({ onClick }) {
  return (
    <div className="text-white d-flex align-items-center justify-content-center px-2 px-md-3 px-lg-4 px-xl-4 position-fixed bottom-0 start-0 mb-4 mb-sm-5 mb-md-2 mb-xxl-5">
      <div
        className="d-flex align-items-center gap-2"
        style={{ cursor: "pointer" }}
        onClick={onClick}
      >
        <img
          src="/images/quiz/ArrowLeft.svg"
          className="d-block img-fluid"
          alt=""
          style={{ maxHeight: "2.35rem" }}
        />
        <h1 className="mb-0 responsive-text-normal-rightarrow fw-bold d-none d-sm-block">
          Back
        </h1>
      </div>
    </div>
  );
}

export default BackArrow;
