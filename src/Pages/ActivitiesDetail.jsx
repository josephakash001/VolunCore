import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import AOS from "aos";
import "aos/dist/aos.css";
import '/custom.scss';
import axios from "axios";
import Footer from "../Components/Footer";
import VolunSidebar from "../Components/VolunSideBar";
import LoginNavbar from "../Components/LoginNavBar";

export default function ActivitiesDetail() {
  const { id } = useParams();
  const [opportunity, setOpportunity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);   // 👈 new

  useEffect(() => {
    AOS.init({ duration: 1000 });

    console.log("Activity ID from URL:", id);  // 👀
    
    axios.get(`http://localhost:8081/api/project/activities/${id}`)
      .then(response => {
        console.log("Fetched Activity Data:", response.data);  // 👀
        if (response.data && response.data.id) {
          setOpportunity(response.data);
        } else {
          setError(true);
        }
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching activity:", error);
        setError(true);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error || !opportunity) {
    return (
      <div className="text-center mt-5">
        <h3 className="text-danger">Opportunity Not Found</h3>
        <Link to="/activities" className="btn btn-primary mt-3">Back to Activities</Link>
      </div>
    );
  }

  return (
    <>
      <header className="sticky-top bg-white border-bottom py-3 shadow-sm">
        <LoginNavbar/>
      </header>
      
      <div className="d-flex">
        <VolunSidebar />
        <div className="container py-5">
          <Link to="/activities" className="text-decoration-none mb-4 d-block text-muted">
            <i className="bi bi-arrow-left me-1"></i> Back to Activities
          </Link>

          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <h2 className="fw-bold">{opportunity.title}</h2>
              <p className="mb-1">{opportunity.orgName} 
                {opportunity.mode && (
                  <span className="badge bg-secondary text-white ms-2">{opportunity.mode}</span>
                )}
              </p>
            </div>
            <div>
              <button className="btn btn-primary me-2">Apply Now</button>
              <button className="btn btn-outline-secondary">Save</button>
            </div>
          </div>

          <div className="d-flex flex-wrap gap-3 mb-4">
            {opportunity.location && (
              <div className="border rounded-3 px-4 py-3 d-flex align-items-center gap-2">
                <i className="bi bi-geo-alt-fill"></i> 
                <span><strong>Location:</strong> {opportunity.location}</span>
              </div>
            )}
            {opportunity.schedule && (
              <div className="border rounded-3 px-4 py-3 d-flex align-items-center gap-2">
                <i className="bi bi-calendar-event-fill"></i> 
                <span><strong>Commitment:</strong> {opportunity.schedule}</span>
              </div>
            )}
            {opportunity.duration && (
              <div className="border rounded-3 px-4 py-3 d-flex align-items-center gap-2">
                <i className="bi bi-clock-history"></i> 
                <span><strong>Duration:</strong> {opportunity.duration}</span>
              </div>
            )}
          </div>

          <div className="mb-4">
            <div className="p-4 border rounded">
              <h5>Description</h5>
              <p>{opportunity.description}</p>

              {opportunity.impact && (
                <>
                  <h5>Impact</h5>
                  <p>{opportunity.impact}</p>
                </>
              )}

              <h6>Skills Needed</h6>
              {opportunity.skills && opportunity.skills.split(',').map((skill, i) => (
                <span key={i} className="badge bg-secondary text-white border me-3">{skill.trim()}</span>
              ))}
            </div>

            <div className="p-4 border rounded mt-4">
              <h5 className="mb-3">Requirements</h5>
              <ul className="mb-0 list-unstyled">
                {opportunity.requirements && opportunity.requirements.split(',').map((req, index) => (
                  <li key={index} className="mb-2">
                    <i className="bi bi-check-circle text-primary me-2"></i>{req.trim()}</li>
                ))}
              </ul>
            </div>

            <div className="p-4 border rounded mt-4">
              <h5 className="mb-3">Responsibilities</h5>
              <ul className="mb-0 list-unstyled">
              {opportunity.responsibilities && opportunity.responsibilities.split(',').map((resp, index) => (
                <li key={index} className="mb-2">
                  <i className="bi bi-check-circle text-primary me-2"></i>{resp.trim()}</li>
              ))}
              </ul>
            </div>
          </div>

        </div>
      </div>

      <footer className="py-5 bg-secondary">
        <Footer />
      </footer>
    </>
  )
}
