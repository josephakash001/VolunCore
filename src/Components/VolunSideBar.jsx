import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import '/custom.scss';
import { useLocation } from "react-router-dom";

const VolunSidebar = () => {

  const location = useLocation();
  const { firstName, lastName } = location.state || {};
  const [user, setUser] = useState(null); // Declare useState outside of useEffect

  useEffect(() => {
    const email = localStorage.getItem("userEmail"); // Replace with actual method to get the email

    if (email) {
      axios.get(`http://localhost:8081/api/volunteers?email=${email}`)
        .then(response => {
          setUser(response.data);  // Store user data in state
        })
        .catch(error => {
          console.error("Error fetching user data:", error);
        });
    }
  }, []); // Only run once when component mounts

  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-light vh-100" style={{ width: '250px' }}>
      <div className="d-flex flex-column align-items-start mb-3 mb-md-0 me-md-auto">
        <div>
           <span className="fs-4 fw-bold text-primary">{firstName} {lastName}</span> {/* Display user name */}
        </div>
        <div>
          <span className="text-muted">Volunteer</span>
        </div>
      </div>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <NavLink to="/volundashboard" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            <i className="bi bi-speedometer2 me-2"></i> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/activities" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            <i className="bi bi-calendar-event-fill me-2"></i> Activities
          </NavLink>
        </li>
        <li>
          <NavLink to="/organizations" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            <i className="bi bi-briefcase-fill me-2"></i> Organizations
          </NavLink>
        </li>
        <li>
          <NavLink to="/volunnotification" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            <i className="bi bi-bell-fill me-2"></i> Notifications
          </NavLink>
        </li>
        <li>
          <NavLink to="/volunmessage" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            <i className="bi bi-chat-dots-fill me-2"></i> Messages
          </NavLink>
        </li>
        <li>
          <NavLink to="/volunfeedback" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            <i className="bi bi-star-fill me-2"></i> Feedback
          </NavLink>
        </li>
        <li>
          <NavLink to="/volunsettings" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            <i className="bi bi-gear-fill me-2"></i> Settings
          </NavLink>
        </li>
      </ul>

      {/* Logout Section */}
      <div className="mt-auto">
        <button
          className="btn btn-outline-danger w-100"
          onClick={() => alert("Logged out!")}
        >
          <i className="bi bi-box-arrow-right me-2"></i> Logout
        </button>
      </div>
    </div>
  );
};

export default VolunSidebar;
