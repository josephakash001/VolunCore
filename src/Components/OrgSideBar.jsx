import React from "react";
import { NavLink } from "react-router-dom";

const OrgSidebar = () => {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-light vh-100" style={{ width: '250px' }}>
      <div className="d-flex flex-column align-items-start mb-3 mb-md-0 me-md-auto">
        <div>
          <span className="fs-4 fw-bold text-primary">GREEN HOPE ORG</span>
        </div>
        <div>
          <span className="text-muted">Organization Admin</span>
        </div>
      </div>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <NavLink to="/orgdashboard" className="nav-link" activeClassName="active">
            <i className="bi bi-speedometer2 me-2"></i>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/manageactivities" className="nav-link" activeClassName="active">
            <i className="bi bi-calendar2-event-fill me-2"></i>
            Manage Activities
          </NavLink>
        </li>
        <li>
          <NavLink to="/managevolunteers" className="nav-link" activeClassName="active">
            <i className="bi bi-people-fill me-2"></i>
            Volunteers
          </NavLink>
        </li>
        <li>
          <NavLink to="/orgmessage" className="nav-link" activeClassName="active">
            <i className="bi bi-chat-dots-fill me-2"></i>
            Messages
          </NavLink>
        </li>
        <li>
          <NavLink to="/orgnotification" className="nav-link" activeClassName="active">
            <i className="bi bi-bell-fill me-2"></i>
            Notifications
          </NavLink>
        </li>
        <li>
          <NavLink to="/orgfeedback" className="nav-link" activeClassName="active">
            <i className="bi bi-star-fill me-2"></i>
            Feedback
          </NavLink>
        </li>
        <li>
          <NavLink to="/orgsetting" className="nav-link" activeClassName="active">
            <i className="bi bi-gear-fill me-2"></i>
            Settings
          </NavLink>
        </li>
      </ul>
      <div className="mt-auto">
        <button className="btn btn-outline-danger w-100" onClick={() => alert("Logged out!")}>
          <i className="bi bi-box-arrow-right me-2"></i>
          Logout
        </button>
      </div>
    </div>
  );
};

export default OrgSidebar;
