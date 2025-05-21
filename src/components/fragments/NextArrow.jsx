import { useEffect, useState } from "react";
import { useParams} from "react-router";

function NextArrow({ onClick }) {
  const [next, setNext] = useState(false);

  const { id } = useParams();
  useEffect(() => {
    setNext(Number(id) === 20);
  }, [id]);

  return (
    <div className="text-white d-flex align-items-center justify-content-end px-2 px-md-3 px-lg-4 px-xl-4 position-fixed bottom-0 end-0 mb-4 mb-sm-5 mb-md-2 mb-xxl-5">
      <div
        className="d-flex align-items-center gap-2"
        style={{ cursor: "pointer" }}
        onClick={onClick}
      >
        <h1 className="mb-0 responsive-text-normal-rightarrow fw-bold d-none d-sm-block">
          {next ? "Finish" : "Next"}
        </h1>
        <img
          src="/images/quiz/ArrowRight.svg"
          className="d-block img-fluid"
          alt="test"
          style={{ maxHeight: "2.35rem" }}
        />
      </div>
    </div>
  );
}

export default NextArrow;
