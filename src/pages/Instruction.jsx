import { useEffect } from "react";
import InstructionLayout from "../components/layouts/InstructionLayout";

function Instruction() {

  useEffect(() => {
      sessionStorage.setItem("timeLeft", 0);
    }, []);

  return (
    <>
      <div className="background-3 font-family d-flex flex-column">
        <InstructionLayout></InstructionLayout>
      </div>
    </>
  );
}

export default Instruction;
