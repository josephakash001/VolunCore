import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../Components/Footer";
import VolunSidebar from "../Components/VolunSideBar";
import LoginNavbar from "../Components/LoginNavBar";

export default function VolunProfile() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    alert("Profile updated successfully!");
  };

  return (
    <>
      <header className="sticky-top bg-white border-bottom py-3 shadow-sm">
        <LoginNavbar />
      </header>
      <div className="d-flex">
        <VolunSidebar />
        <div className="container my-5">
          <h2 className="fw-bold" data-aos="fade-down">Volunteer Profile</h2>
          <p className="text-muted" data-aos="fade-down">View or update your profile details.</p>

          <div className="card shadow p-4" data-aos="zoom-in-up">
            <form onSubmit={handleUpdate}>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">Full Name</label>
                  <input type="text" className="form-control" defaultValue="Joseph Akash" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" defaultValue="joseph@example.com" />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">Phone Number</label>
                  <input type="text" className="form-control" defaultValue="+91-9876543210" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Date of Birth</label>
                  <input type="date" className="form-control" defaultValue="2000-01-01" />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">Location</label>
                  <input type="text" className="form-control" defaultValue="Chennai" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Gender</label>
                  <select className="form-select" defaultValue="Male">
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <hr />

              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">Availability</label>
                  <select className="form-select" defaultValue="Weekends">
                    <option>Weekdays</option>
                    <option>Weekends</option>
                    <option>Flexible</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Preferred Mode</label>
                  <select className="form-select" defaultValue="Onsite">
                    <option>Onsite</option>
                    <option>Remote</option>
                    <option>Both</option>
                  </select>
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Skills</label>
                <input type="text" className="form-control" defaultValue="Teamwork, Communication" />
              </div>

              <div className="mb-3">
                <label className="form-label">Interests</label>
                <input type="text" className="form-control" defaultValue="Food Distribution, Teaching" />
              </div>

              <div className="d-flex justify-content-end">
                <button type="submit" className="btn btn-primary">Update Profile</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <footer className="py-5 bg-secondary">
        <Footer />
      </footer>
    </>
  );
}
