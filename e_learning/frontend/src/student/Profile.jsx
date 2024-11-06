import React, { useState, useEffect } from "react";
import "./Profile.css";

// This is a mock function to simulate fetching data from an API or backend
const fetchStudentProfile = () => {
  // Replace this with an actual API call to fetch student data
  return {
    stu_id: 1,
    stu_name: "John Doe",
    stu_email: "john.doe@example.com",
    stu_pass: "******",
    stu_occ: "Software Developer",
    stu_img: "https://via.placeholder.com/150", // Placeholder image
  };
};

function Profile() {
  const [profile, setProfile] = useState({
    stu_name: "",
    stu_email: "",
    stu_occ: "",
    stu_img: "",
  });

  useEffect(() => {
    // Simulate fetching student data on component mount
    const studentData = fetchStudentProfile();
    setProfile(studentData);
  }, []);

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2>Student Profile</h2>
      </div>
      <div className="profile-content">
        <div className="profile-img">
          <img src={profile.stu_img} alt="Student Profile" />
        </div>
        <div className="profile-info">
          <h3>{profile.stu_name}</h3>
          <p>
            <strong>Email: </strong>{profile.stu_email}
          </p>
          <p>
            <strong>Occupation: </strong>{profile.stu_occ}
          </p>
        </div>
      </div>
      <div className="profile-actions">
        <button className="btn btn-primary">Edit Profile</button>
        <button className="btn btn-secondary">Logout</button>
      </div>
    </div>
  );
}

export default Profile;
