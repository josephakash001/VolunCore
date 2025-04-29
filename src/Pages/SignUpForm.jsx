// src/SignUpForm.jsx
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Components/NavBar";
import AOS from "aos";
import axios from 'axios';
import "aos/dist/aos.css";



const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmpassword:"",
    location: "",
  });

  const [orgData,setOrgData]= useState({
    name: "",
    email: "",
    password: "",
    confirmpassword:"",
    location: "",
    website: "",
    description: "",

  });
  const [activeTab, setActiveTab] = useState("volunteer");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh();
  }, []);

  const navigate = useNavigate();

  const handleChange = (e) => {
    if (activeTab === "volunteer") {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    } else {
      setOrgData({ ...orgData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (activeTab === "volunteer" && formData.password !== formData.confirmpassword) {
      alert("Passwords do not match!");
      return;
    }
    
    if (activeTab === "organization" && orgData.password !== orgData.confirmpassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const endpoint =
        activeTab === "volunteer"
          ? "http://localhost:8081/api/project/volunteers"
          : "http://localhost:8081/api/project/organizations"; // Change endpoint for organizations

      const response = await axios.post(endpoint, activeTab === "volunteer" ? formData : orgData);
      console.log(response.data);
      alert("Registration successful!");
      navigate("/signin"); // 🔁 Redirect to sign-in page
    } catch (err) {
      console.log(err);
      alert("Registration failed!");
    }
  };

  return (
    <>
      <Navbar minimal />
      <div className="d-flex justify-content-center align-items-start min-vh-100 bg-light px-3 pt-5">
        <div
          className="card shadow p-4 p-sm-5 w-100"
          style={{ maxWidth: "600px" }}
          data-aos="fade-up"
        >
          <div className="mb-3">
                <Link to="/" className="text-decoration-none text-secondary d-flex align-items-center">
                  <i className="bi bi-arrow-left me-2"></i>Back to Home
              </Link>
               </div>
          {/* Tabs */}
          <div className="d-flex border-bottom mb-4">
            <button
              className={`flex-fill btn ${
                activeTab === "volunteer"
                  ? "btn-primary border-bottom border-2 border-primary fw-semibold"
                  : "btn-outline-secondary"
              }`}
              onClick={() => setActiveTab("volunteer")}
              aria-selected={activeTab === "volunteer"}
            >
              Volunteer
            </button>
            <button
              className={`flex-fill btn ${
                activeTab === "organization"
                  ? "btn-primary border-bottom border-2 border-dark fw-semibold"
                  : "btn-outline-secondary"
              }`}
              onClick={() => setActiveTab("organization")}
              aria-selected={activeTab === "organization"}
            >
              Organization
            </button>
          </div>


          {/* Header */}
          <div className="text-center mb-4" data-aos="zoom-in">
            <h2 className="fw-bold">
              {activeTab === "organization"
                ? "Register your Organization"
                : "Create a Volunteer Account"}
            </h2>
            <p className="text-muted">
              {activeTab === "organization"
                ? "Connect with volunteers who are passionate about your cause."
                : "Join our community and start making a difference today."}
            </p>
          </div>

          {/* Form */}
          <form className="row g-3" onSubmit={handleSubmit}>
            {activeTab === "volunteer" && (
              <>
                <div className="col-sm-6">
                  <label className="form-label">First name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter your first name"
                  />
                </div>
                <div className="col-sm-6">
                  <label className="form-label">Last name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter your last name"
                  />
                </div>

                <div className="col-12">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="col-12">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Create a password"
                  />
                </div>

                <div className="col-12">
                  <label className="form-label">Confirm Password</label>
                  <input
                    type="password"
                    name="confirmpassword"
                    value={formData.confirmpassword}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Confirm password"
                  />
                </div>

                <div className="col-12">
                  <label className="form-label">Location</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="City, Country"
                  />
                </div>
              </>
            )}

            {activeTab === "organization" && (
              <>
                <div className="col-12">
                  <label className="form-label">Organization name</label>
                  <input
                    type="text"
                    name="name"
                    value={orgData.name}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter your organization name"
                  />
                </div>

                <div className="col-12">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={orgData.email}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter your organization email"
                  />
                </div>

                <div className="col-12">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={orgData.password}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Create a password"
                  />
                </div>
                <div className="col-12">
                  <label className="form-label">Confirm Password</label>
                  <input
                    type="password"
                    name="confirmpassword"
                    value={orgData.confirmpassword}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Confirm password"
                  />
                </div>

                <div className="col-12">
                  <label className="form-label">Website</label>
                  <input
                    type="url"
                    name="website"
                    value={orgData.website}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="https://your-organization.org"
                  />
                </div>

                <div className="col-12">
                  <label className="form-label">Description</label>
                  <textarea
                    name="description"
                    value={orgData.description}
                    onChange={handleChange}
                    className="form-control"
                    rows="3"
                    placeholder="Tell us about your organization and its mission"
                  />
                </div>
              </>
            )}

            <div className="col-12">
              <button type="submit" className="btn btn-primary w-100">
                {activeTab === "organization"
                  ? "Register organization"
                  : "Create account"}
              </button>
            </div>
          </form>

          <p className="text-center mt-4 text-muted">
            Already have an account?{" "}
            <Link
              to="/signin"
              className="fw-semibold text-decoration-none text-primary"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
