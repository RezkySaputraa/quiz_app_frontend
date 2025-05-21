function Square({ src, children, percent, variant, text, line, onClick }) {
  return (
    <div
      className={`${variant} rounded-3 d-flex justify-content-between align-items-center px-1 py-0 col-11 col-md-5 pointer`} onClick={onClick}
    >
      <img
        className="img-fluid pb-2 d-block col-3 col-md-3 col-lg-2"
        src={src}
        alt="gambar"
      />
      <div className="w-75 me-4">
        <div className="d-flex align-items-center justify-content-between">
          <h6 className={`fw-bold ${text} responsive-text-inside`}>
            {children}
          </h6>
          <h4 className={`${text} responsive-text-inside`}>{percent}</h4>
        </div>
        <div className="progress-container w-100 rounded-1">
          <div
            className={`h-100 rounded-1 ${line}`}
            style={{ width: percent }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Square;
