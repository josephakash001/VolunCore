import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "../Components/NavBar";
import Footer from "../Components/Footer";
import VolunSidebar from "../Components/VolunSideBar";
import OrgLogNavbar from "../Components/OrgLoginNavBar";

const organizations = [
  {
    id: "1",
    name: "Literacy First",
    category: "Education",
    description:
      "Dedicated to improving literacy rates and providing educational resources to underserved communities.",
    location: "New York, NY",
    established: 2005,
    volunteers: 120,
    opportunities: 5,
    logo: "/Assets/dp1.png",
  },
  {
    id: "2",
    name: "Wildlife Alliance",
    category: "Environment",
    description:
      "Working to protect endangered species and their habitats through conservation efforts and education.",
    location: "San Francisco, CA",
    established: 1998,
    volunteers: 85,
    opportunities: 3,
    logo: "/Assets/dp1.png",
  },
  {
    id: "3",
    name: "Community Food Network",
    category: "Humanitarian",
    description:
      "Fighting hunger by distributing food to those in need and addressing the root causes of food insecurity.",
    location: "Chicago, IL",
    established: 2010,
    volunteers: 200,
    opportunities: 8,
    logo: "/Assets/dp1.png",
  },
];

export default function OrganizationList() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
    <header className="sticky-top bg-white border-bottom py-3 shadow-sm">
    <OrgLogNavbar />
      </header>
      <div className="d-flex">
        <VolunSidebar />
    {/* <section className="py-5 bg-light text-center" data-aos="fade-up"> */}
      <div className="container py-5 text-center">
        <h2 className="display-5 fw-bold mb-3" data-aos="fade-down">Explore Organizations</h2>
        <p className="text-muted mb-4" data-aos="fade-down" data-aos-delay="100">
          Connect with NGOs making a difference across various causes and locations
        </p>

        <div className="d-flex justify-content-center gap-2 mb-4 flex-wrap" data-aos="zoom-in-up" data-aos-delay="200">
          <button className="btn-primary btn text-white">All</button>
          <button className="btn btn-outline-secondary">Education</button>
          <button className="btn btn-outline-secondary">Environment</button>
          <button className="btn btn-outline-secondary">Humanitarian</button>
          <button className="btn btn-outline-secondary d-flex align-items-center">
            <i className="bi bi-funnel-fill me-2"></i> Filters
          </button>
        </div>

        <div className="row row-cols-1 row-cols-md-3 g-4">
          {organizations.map((org, index) => (
            <div className="col" key={org.id} data-aos="zoom-in-up" data-aos-delay={index * 100}>
              <div className="card h-100 border rounded-4 shadow-sm">
                <div className="card-body text-start">
                  <div className="d-flex align-items-center mb-3">
                    <img
                      src={org.logo}
                      alt={org.name}
                      className="rounded-circle me-3"
                      width="50"
                      height="50"
                    />
                    <div>
                      <h5 className="card-title mb-0">{org.name}</h5>
                      <small className="text-muted">{org.category}</small>
                    </div>
                  </div>
                  <p className="text-muted small">{org.description}</p>
                  <ul className="list-unstyled small mb-3">
                    <li><i className="bi bi-geo-alt-fill me-2"></i>{org.location}</li>
                    <li><i className="bi bi-calendar-event me-2"></i>Established: {org.established}</li>
                    <li><i className="bi bi-people-fill me-2"></i>{org.volunteers} volunteers</li>
                  </ul>
                </div>
                <div className="card-footer bg-transparent border-top d-flex justify-content-between align-items-center">
                  <small className="text-muted">{org.opportunities} opportunities</small>
                  <a href="#" className="btn btn-outline-secondary btn-sm">View More</a>
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
