/* eslint-disable react/prop-types */
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
// import { useAuth } from "../context/AuthProvider";

function Logout({ authUser, setAuthUser }) {
  const handleLogout = () => {
    try {
      setAuthUser({
        ...authUser,
        user: null,
      });
      localStorage.removeItem("User");
      toast.success("Successfully Logout");
      setTimeout(() => window.location.reload(), 2000);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div>
      <Link
        className="px-3 py-1 bg-red-500 text-white rounded-lg"
        onClick={handleLogout}
        to={"/"}
      >
        Logout
      </Link>
    </div>
  );
}

export default Logout;
