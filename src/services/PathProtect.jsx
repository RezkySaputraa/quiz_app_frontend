import { Navigate, Outlet } from "react-router";

function PathProtect() {
  const token = document.cookie.includes("token");

  if (!token) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}

function TokenTest() {
  const token = document.cookie.includes("token");
  const sessionToken = localStorage.getItem("test-token");

  if (!token) {
    return <Navigate to="/" replace />;
  }

  if (!sessionToken) {
    return <Navigate to="/quiz" replace />;
  }

  return <Outlet />;
}

export { PathProtect, TokenTest };
