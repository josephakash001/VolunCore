import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const OrgSidebar = () => {
  const navigate = useNavigate();
    const location = useLocation();
    const storeName = sessionStorage.getItem("orgName");
    const [orgName, setOrgName] = useState(storeName ? JSON.parse(storeName) : "");
    const [user, setUser] = useState(null);
    const handleLogout = () => {
      sessionStorage.clear();
      alert("Logged out!");
      navigate("/");
    };

    useEffect(() => {
      const email = sessionStorage.getItem("userEmail"); // Replace with actual method to get the email
  
      if (email) {
        axios.get(`http://localhost:8081/api/organizations?email=${email}`)
          .then(response => {
            setUser(response.data);  // Store user data in state
          })
          .catch(error => {
            console.error("Error fetching user data:", error);
          });
      }
    }, []);
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-light vh-100" style={{ width: '250px' }}>
      <div className="d-flex flex-column align-items-start mb-3 mb-md-0 me-md-auto">
        <div>
        <span className="fs-4 fw-bold text-primary">{user?.name || orgName}</span>
        </div>
        <div>
          <span className="text-muted">Organization Admin</span>
        </div>
      </div>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <NavLink to="/orgdashboard" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            <i className="bi bi-speedometer2 me-2"></i>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/manageactivities" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            <i className="bi bi-calendar2-event-fill me-2"></i>
            Manage Activities
          </NavLink>
        </li>
        <li>
          <NavLink to="/managevolunteers" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            <i className="bi bi-people-fill me-2"></i>
            Volunteers
          </NavLink>
        </li>
        <li>
          <NavLink to="/orgmessage" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            <i className="bi bi-chat-dots-fill me-2"></i>
            Messages
          </NavLink>
        </li>
        <li>
          <NavLink to="/orgnotification" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            <i className="bi bi-bell-fill me-2"></i>
            Notifications
          </NavLink>
        </li>
        <li>
          <NavLink to="/orgfeedback" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            <i className="bi bi-star-fill me-2"></i>
            Feedback
          </NavLink>
        </li>
        <li>
          <NavLink to="/orgsetting" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            <i className="bi bi-gear-fill me-2"></i>
            Settings
          </NavLink>
        </li>
      </ul>
      <div className="mt-auto">
      <button className="btn btn-outline-danger w-100" onClick={handleLogout}>
          <i className="bi bi-box-arrow-right me-2"></i>
          Logout
        </button>
      </div>
    </div>
  );
};

export default OrgSidebar;
