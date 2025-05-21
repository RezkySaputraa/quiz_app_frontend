import { useEffect } from "react";
import ResultLayout from "../components/layouts/ResultLayout";

function Result() {
  useEffect(() => {
    sessionStorage.clear();
    localStorage.removeItem("test-token");
  }, []);

  return (
    <>
      <div className="background-2 font-family">
        <ResultLayout></ResultLayout>
      </div>
    </>
  );
}

export default Result;
