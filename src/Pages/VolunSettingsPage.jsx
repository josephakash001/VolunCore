import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LoginNavbar from "../Components/LoginNavBar";
import VolunSidebar from "../Components/VolunSideBar";
import Footer from "../Components/Footer";

export default function VolunSettingsPage() {
  const [volunDetails, setVolunDetails] = useState({
    name: "John Doe",
    email: "john.doe@gmail.com",
    phone: "+91 9123456789",
    bio: "A passionate volunteer eager to make a positive impact.",
  });

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVolunDetails({ ...volunDetails, [name]: value });
  };

  const handleSave = () => {
    alert("Settings saved successfully!");
    // Add backend integration logic here
  };

  return (
    <>
      <header className="sticky-top bg-white border-bottom py-3 shadow-sm">
        <LoginNavbar />
      </header>
      <div className="d-flex">
        <VolunSidebar />
        <div className="container my-5">
          <h2 className="fw-bold mb-4" data-aos="fade-down">Volunteer Settings</h2>

          <div className="row g-4" data-aos="zoom-in-up">
            {/* Profile Info */}
            <div className="col-md-6">
              <div className="card shadow-sm border-0 rounded-4 h-100">
                <div className="card-body">
                  <h5 className="card-title">Profile Information</h5>
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" name="name" value={volunDetails.name} onChange={handleInputChange} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" value={volunDetails.email} onChange={handleInputChange} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input type="text" className="form-control" name="phone" value={volunDetails.phone} onChange={handleInputChange} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Bio</label>
                    <textarea className="form-control" name="bio" rows="3" value={volunDetails.bio} onChange={handleInputChange}></textarea>
                  </div>
                  <button className="btn btn-primary w-100" onClick={handleSave}>Save Changes</button>
                </div>
              </div>
            </div>

            {/* Change Password */}
            <div className="col-md-6">
              <div className="card shadow-sm border-0 rounded-4 h-100">
                <div className="card-body">
                  <h5 className="card-title">Change Password</h5>
                  <div className="mb-3">
                    <label className="form-label">Current Password</label>
                    <input type="password" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">New Password</label>
                    <input type="password" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Confirm New Password</label>
                    <input type="password" className="form-control" />
                  </div>
                  <button className="btn btn-outline-primary w-100" onClick={() => alert("Password changed!")}>Update Password</button>
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
