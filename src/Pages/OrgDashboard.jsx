import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../Components/NavBar";
import Footer from "../Components/Footer";
import OrgSidebar from "../Components/OrgSideBar";
import LoginNavbar from "../Components/LoginNavBar";

export default function OrganizationDashboard() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const stats = {
    eventsHosted: 12,
    volunteersEngaged: 45,
    applicationsReceived: 18,
    impactScore: 91,
  };

  const recentApplications = [
    { id: 1, name: "Alice Johnson", role: "Teaching Assistant", status: "Approved" },
    { id: 2, name: "Daniel Smith", role: "Web Designer", status: "Pending" },
    { id: 3, name: "Lily Brown", role: "Event Coordinator", status: "Rejected" },
  ];

  const upcomingEvents = [
    { name: "Tree Plantation Drive", date: "April 25, 2025" },
    { name: "Beach Cleanup", date: "May 3, 2025" },
  ];

  return (
    <>
      <header className="sticky-top bg-white border-bottom py-3 shadow-sm">
        <LoginNavbar />
      </header>
      <div className="d-flex">
        <OrgSidebar />
        <div className="container my-5">
          <h2 className="fw-bold" data-aos="fade-down">Organization Dashboard</h2>
          <p className="text-muted" data-aos="fade-down">
            Welcome back! Here’s a quick summary of your organization’s activity.
          </p>

          {/* Stats */}
          <div className="row g-3 my-4" data-aos="zoom-in-up">
            <StatCard title="Events Hosted" value={stats.eventsHosted} subtitle="+2 this month" icon="bi bi-calendar-event" />
            <StatCard title="Volunteers Engaged" value={stats.volunteersEngaged} subtitle="Active: 30" icon="bi bi-people-fill" />
            <StatCard title="Applications Received" value={stats.applicationsReceived} subtitle="5 new this week" icon="bi bi-inbox-fill" />
            <StatCard title="Impact Score" value={stats.impactScore} subtitle="+8 since last month" icon="bi bi-graph-up-arrow" />
          </div>

          {/* Applications + Events */}
          <div className="row g-4" data-aos="zoom-in-up">
            {/* Volunteer Applications */}
            <div className="col-md-6">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Recent Volunteer Applications</h5>
                  <p className="text-muted">Review the latest volunteer sign-ups</p>
                  {recentApplications.map(app => (
                    <div className="d-flex justify-content-between align-items-center border-bottom py-2" key={app.id}>
                      <div>
                        <div className="fw-medium">{app.name}</div>
                        <small className="text-muted">{app.role}</small>
                      </div>
                      <span className={`badge ${getStatusClass(app.status)}`}>{app.status}</span>
                    </div>
                  ))}
                </div>
                <div className="card-footer bg-white">
                  <button className="btn btn-primary btn-sm">View All Applications</button>
                </div>
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="col-md-6">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Upcoming Events</h5>
                  <p className="text-muted">Stay prepared for upcoming activities</p>
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="mb-2">
                      <div className="fw-medium">{event.name}</div>
                      <small className="text-muted">{event.date}</small>
                    </div>
                  ))}
                </div>
                <div className="card-footer bg-white">
                  <button className="btn btn-primary btn-sm">Manage Events</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="py-5 bg-secondary">
        <Footer />
      </footer>
    </>
  );
}

function StatCard({ title, value, subtitle, icon }) {
  return (
    <div className="col-md-6 col-lg-3">
      <div className="card h-100">
        <div className="card-body">
          <div className="d-flex justify-content-between mb-2">
            <small className="fw-bold">{title}</small>
            <i className={icon}></i>
          </div>
          <h4>{value}</h4>
          <small className="text-muted">{subtitle}</small>
        </div>
      </div>
    </div>
  );
}

function getStatusClass(status) {
  switch (status) {
    case "Approved":
      return "bg-success";
    case "Pending":
      return "bg-warning text-dark";
    case "Rejected":
      return "bg-danger";
    default:
      return "bg-secondary";
  }
}
