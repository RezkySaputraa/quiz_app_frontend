import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

function DirectHandler() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const tokenExist = document.cookie.includes("token");

    if (
      tokenExist &&
      (location.pathname === "/" || location.pathname === "/users")
    ) {
      navigate("/quiz");
    }
  }, []);

  return null;
}

export default DirectHandler;
