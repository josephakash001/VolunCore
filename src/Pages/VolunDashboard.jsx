import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../Components/NavBar";
import Footer from "../Components/Footer";
import VolunSidebar from "../Components/VolunSideBar";
import LoginNavbar from "../Components/VolunLoginNavBar";
import { useLocation } from "react-router-dom";


export default function VolunteerDashboard() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
      }, []);
    
  const stats = {
    totalHours: 42.5,
    applications: 3,
    upcomingEvents: 2,
    impactScore: 78
  };

  const applications = [
    { id: 1, title: 'Literacy Program Volunteer', org: 'Literacy First', status: 'Approved' },
    { id: 2, title: 'Web Developer for Conservation Project', org: 'Wildlife Alliance', status: 'Pending' },
    { id: 3, title: 'Food Bank Assistant', org: 'Community Food Network', status: 'Approved' },
  ];

  const skills = [
    { name: 'Teaching', level: 75 },
    { name: 'Web Development', level: 60 },
    { name: 'Communication', level: 85 },
    { name: 'Project Management', level: 45 },
  ];
  

  return (
    
    <>
    <header className="sticky-top bg-white border-bottom py-3 shadow-sm">
        <LoginNavbar />
      </header>
      <div className="d-flex">
        <VolunSidebar />
    <div className="container my-5">
      <h2 className="fw-bold" data-aos="fade-down">Volunteer Dashboard</h2>
      <p className="text-muted" data-aos="fade-down">Welcome back, Here's an overview of your volunteer activities.</p>

      {/* Stats */}
      <div className="row g-3 my-4" data-aos="zoom-in-up" data-aos-delay={stats.delay}>
        <StatCard title="Total Hours" value={stats.totalHours} subtitle="+2.5 hours this month" icon="bi bi-clock" />
        <StatCard title="Applications" value={stats.applications} subtitle="2 approved, 1 pending" icon="bi bi-heart" />
        <StatCard title="Upcoming Events" value={stats.upcomingEvents} subtitle="Next: Tomorrow, 10:00 AM" icon="bi bi-calendar" />
        <StatCard title="Impact Score" value={stats.impactScore} subtitle="+12 from last month" icon="bi bi-currency-dollar" />
      </div>

      {/* Applications + Skills */}
      <div className="row g-4"  data-aos="zoom-in-up" >
        {/* Applications */}
        <div className="col-md-6">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Your Applications</h5>
              <p className="text-muted">Track the status of your volunteer applications</p>
              {applications.map(app => (
                <div className="d-flex justify-content-between align-items-center border-bottom py-2" key={app.id}>
                  <div>
                    <div className="fw-medium">{app.title}</div>
                    <small className="text-muted">{app.org}</small>
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

        {/* Skills */}
        <div className="col-md-6">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Skills Progress</h5>
              <p className="text-muted">Track your volunteer skill development</p>
              {skills.map(skill => (
                <div className="mb-3" key={skill.name}>
                  <div className="d-flex justify-content-between">
                    <span>{skill.name}</span>
                    <small>{skill.level}%</small>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar bg-primary"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="card-footer bg-white">
              <button className="btn btn-primary btn-sm">View All Skills</button>
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
