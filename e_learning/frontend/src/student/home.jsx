import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    // Optionally show a message or redirect
    navigate("/login");
  };

  const handleViewCourses = () => {
    navigate("/courses");
  };

  const handleAbout = () => {
    navigate("/about");
  };

  const handleFeedback = () => {
    navigate("/feedback");
  };
  const handleProfile = () => {
    navigate("/Profile");
  };

  return (
    <div className="home">
      <h1>Welcome to the E-learning Platform</h1>
      <p>Hi! You're logged in and ready to learn!</p>
      <button aria-label="View Courses" onClick={handleViewCourses}>View Courses</button>
      <button aria-label="About Us" onClick={handleAbout}>About Us</button>
      <button aria-label="Give Feedback" onClick={handleFeedback}>Feedback</button>
      <button aria-label="Profile" onClick={handleProfile}>Profile</button>
      <button className="logout-btn" aria-label="Logout" onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Home;