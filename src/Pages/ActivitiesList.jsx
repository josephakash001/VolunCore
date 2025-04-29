import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import AOS from "aos";
import "aos/dist/aos.css";
import '/custom.scss';
import Navbar from "../Components/NavBar";
import Footer from "../Components/Footer";
import VolunSidebar from "../Components/VolunSideBar";
import LoginNavbar from "../Components/LoginNavBar";
import axios from "axios";


export default function ActivitiesDetail(){
  const [activities, setActivities] = useState([]);

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });

        axios.get("http://localhost:8081/api/project/activities")
      .then(response => {
        setActivities(response.data);
      })
      .catch(error => {
        console.error("Error fetching activities:", error);
      });
      }, []);
  

  return (
    <>
      <header className="sticky-top bg-white border-bottom py-3 shadow-sm">
        <LoginNavbar />
      </header>
      <div className="d-flex">
        <VolunSidebar />
    <div className="container py-5">
     
      <h2 className="display-5 fw-bold mb-5 text-center" data-aos="fade-down">All Activities</h2>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {activities.map((activity) => (
          <div className="col" key={activity.id} data-aos="zoom-in-up" data-aos-delay="100">
            <div className="card h-100 border rounded-4 shadow-sm">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <strong>{activity.orgName}</strong>
                  <span className="badge bg-secondary">{activity.mode}</span>
                </div>
                <h5 className="card-title">{activity.title}</h5>
                <p className="text-muted small">{activity.description}</p>
                <ul className="list-unstyled text-start small mb-2">
                  <li><i className="bi bi-geo-alt-fill me-1"></i> {activity.location}</li>
                  <li><i className="bi bi-calendar-week-fill me-1"></i> {activity.schedule}</li>
                  <li><i className="bi bi-clock me-1"></i> {activity.duration}</li>
                </ul>
                <div className="mb-3">
                      {activity.skills && activity.skills.split(",").map((skill, i) => (
                        <span key={i} className="badge bg-secondary me-1">{skill.trim()}</span>
                      ))}
                    </div>
              </div>
              <div className="card-footer bg-transparent border-top d-flex justify-content-between align-items-center">
                <small className="text-muted">{activity.applicants} applicants</small>
                <Link to={`/activities/${activity.id}`} className="btn btn-outline-secondary btn-sm">
                View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    <footer className="py-5 bg-secondary">
          <Footer />
    </footer>
    </>
  );
};


