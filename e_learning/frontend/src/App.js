import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loginsignup from "./loginPage/loginsignup";
import Home from "./student/home.jsx";
import Courses from "./student/Courses.jsx";
import Profile from "./student/Profile.jsx";
import About from "./student/about.jsx";
import Feedback from "./student/feedback.jsx";
import CourseDetails from "./student/coursedetails.jsx";

// import PrivateRoute from "./student/PrivateRoute"; // Uncomment if you want to add route protection

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Public routes */}
          <Route path="/login" element={<Loginsignup />} />
          
          {/* Protected routes - Add PrivateRoute if needed */}
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/courses/:courseId" element={<CourseDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
