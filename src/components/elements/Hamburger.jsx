import { logout } from "../../services/auth.service";

function Hamburger() {
  const handleLogout = async () => {
    try {
      const result = await logout();

      if (result) {
        localStorage.clear();
        sessionStorage.clear();
        window.location.replace("/");
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="fs-1 text-white mb-1" onClick={handleLogout}>
      <i className="fa-solid fa-bars"></i>
    </div>
  );
}

export default Hamburger;
