import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear user session data
    localStorage.removeItem("userToken"); // Adjust if your token key is different
    
    // Redirect to login page
    navigate("/login");
  }, [navigate]);

  return null;
}

export default Logout;
