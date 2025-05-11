import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import OrgLogNavbar from "../Components/OrgLoginNavBar";
import OrgSidebar from "../Components/OrgSideBar";
import Footer from "../Components/Footer";
import axios from "axios";


export default function OrgFeedbackPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [feedbacks, setFeedbacks] = useState([]);
  const orgName = sessionStorage.getItem("orgName"); 



  useEffect(() => {
  AOS.init({ duration: 1000, once: true });

  
  const orgName = JSON.parse(sessionStorage.getItem("orgName"));

  axios.get("http://localhost:8081/api/project/feedback")
    .then((res) => {
      const allFeedbacks = res.data || [];
      const filtered = allFeedbacks.filter(fb => fb.orgName === orgName);
      setFeedbacks(filtered);
    })
    .catch((err) => console.error("Error fetching feedbacks:", err));
}, []);


  return (
    <>
      <header className="sticky-top bg-white border-bottom py-3 shadow-sm">
      <OrgLogNavbar />
      </header>
      <div className="d-flex">
        <OrgSidebar />
        <div className="container my-5">
          <h2 className="fw-bold mb-4" data-aos="fade-down">
            Volunteer Feedback
          </h2>
          <div className="row row-cols-1 row-cols-md-2 g-4" data-aos="zoom-in-up">
            {feedbacks && feedbacks.map((fb) => (
              <div className="col" key={fb.id}>
                <div className="card h-100 border-0 shadow-sm rounded-4">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h5 className="card-title mb-0">{fb.name}</h5>
                      <small className="text-muted">
                          {new Date(fb.date).toLocaleDateString()} {new Date(fb.date).toLocaleTimeString()}
                        </small>
                    </div>
                    <h6 className="text-primary small mb-2">Activity: {fb.activity}</h6>
                    <p className="card-text">{fb.comment}</p>
                    <div>
                      {[...Array(5)].map((_, i) => (
                        <i
                          key={i}
                          className={`bi ${
                            i < fb.rating ? "bi-star-fill text-warning" : "bi-star text-muted"
                          } me-1`}
                        ></i>
                      ))}
                    </div>
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
}
