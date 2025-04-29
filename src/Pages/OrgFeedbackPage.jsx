import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LoginNavbar from "../Components/LoginNavBar";
import OrgSidebar from "../Components/OrgSideBar";
import Footer from "../Components/Footer";

const feedbacks = [
  {
    id: 1,
    name: "Alice Johnson",
    activity: "Tree Plantation",
    comment: "Great experience! The team was welcoming and the event was well-organized.",
    rating: 5,
    date: "2025-04-20",
  },
  {
    id: 2,
    name: "Bob Mathews",
    activity: "Beach Cleanup",
    comment: "Loved contributing to the environment. Would suggest better tools next time.",
    rating: 4,
    date: "2025-04-18",
  },
  {
    id: 3,
    name: "Sarah Lee",
    activity: "Food Distribution",
    comment: "It was a bit crowded, but overall a fulfilling experience.",
    rating: 4,
    date: "2025-04-15",
  },
];

export default function OrgFeedbackPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <header className="sticky-top bg-white border-bottom py-3 shadow-sm">
        <LoginNavbar />
      </header>
      <div className="d-flex">
        <OrgSidebar />
        <div className="container my-5">
          <h2 className="fw-bold mb-4" data-aos="fade-down">
            Volunteer Feedback
          </h2>
          <div className="row row-cols-1 row-cols-md-2 g-4" data-aos="zoom-in-up">
            {feedbacks.map((fb) => (
              <div className="col" key={fb.id}>
                <div className="card h-100 border-0 shadow-sm rounded-4">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h5 className="card-title mb-0">{fb.name}</h5>
                      <small className="text-muted">{fb.date}</small>
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
