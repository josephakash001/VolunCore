import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../Components/Footer";
import VolunSidebar from "../Components/VolunSideBar";
import LoginNavbar from "../Components/VolunLoginNavBar";
import axios from "axios";

export default function VolunProfile() {
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    dateOfBirth: "",
    location: "",
    gender: "",
    availability: "",
    preferredMode: "",
    skills: "",
    interests: ""
  });

  const [isEditing, setIsEditing] = useState(false);


  useEffect(() => {
    const email = JSON.parse(sessionStorage.getItem("Email")); // or from auth
    axios.get(`http://localhost:8081/api/project/volunteers/${email}`)
      .then(res => {
        setProfile(res.data);
      })
      .catch(err => console.error("Error fetching profile:", err));
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProfile = {
      ...profile,
      firstName:profile.firstName,
      lastName:profile.lastName,
      gender: profile.gender,
      availability: profile.availability,
      preferredMode: profile.preferredMode,
      skills: profile.skills,
      interests: profile.interests,
      phoneNumber: profile.phoneNumber,
      dateOfBirth: profile.dateOfBirth
    };

    axios.put(`http://localhost:8081/api/project/volunteers/update`, updatedProfile)
      .then(() => {
        setIsEditing(false);
        setUpdateSuccess(true);
        console.log("Profile updated successfully!");
      })
      .catch(err => console.error("Error updating profile:", err));
      setUpdateSuccess(false);
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
            
          {updateSuccess && (
              <div className="alert alert-success alert-dismissible fade show" role="alert">
                Profile updated successfully!
                <button type="button" className="btn-close" onClick={() => setUpdateSuccess(false)}></button>
              </div>
            )}
            <form onSubmit={handleSubmit}>
            {isEditing && (
                  <p className="text-muted mt-2" role="button" onClick={() => setIsEditing(false)}>
                    <i className="bi bi-arrow-left me-1"></i>Cancel editing and return to profile view
                  </p>
                )}
              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={profile.firstName}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="form-control"
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={profile.lastName}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="form-control"
                  />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={profile.email}
                    disabled
                    className="form-control"
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="text"
                    name="phoneNumber"
                    value={profile.phoneNumber}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="form-control"
                  />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">Date of Birth</label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={profile.dateOfBirth}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="form-control"
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Location</label>
                  <input
                    type="text"
                    name="location"
                    value={profile.location}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="form-control"
                  />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label" htmlFor="gender">Gender</label>
                  <select
                    id="gender"
                    name="gender"
                    className="form-select"
                    value={profile.gender}
                    onChange={handleChange}
                    disabled={!isEditing}
                  >
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Availability</label>
                  <select
                    name="availability"
                    className="form-select"
                    value={profile.availability}
                    onChange={handleChange}
                    disabled={!isEditing}
                  >
                    <option value="">Select</option>
                    <option value="Weekdays">Weekdays</option>
                    <option value="Weekends">Weekends</option>
                    <option value="Flexible">Flexible</option>
                  </select>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">Preferred Mode</label>
                  <select
                    name="preferredMode"
                    className="form-select"
                    value={profile.preferredMode}
                    onChange={handleChange}
                    disabled={!isEditing}
                  >
                    <option value="">Select</option>
                    <option value="Onsite">Onsite</option>
                    <option value="Remote">Remote</option>
                    <option value="Both">Both</option>
                  </select>
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Skills</label>
                <input
                  type="text"
                  name="skills"
                  value={profile.skills}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Interests</label>
                <input
                  type="text"
                  name="interests"
                  value={profile.interests}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="form-control"
                />
              </div>

              <div className="d-flex justify-content-end">
                <button
                  type="button"
                  onClick={() => setIsEditing(true)}
                  hidden={isEditing}
                  className="btn btn-primary me-2"
                >
                  Edit
                </button>
                <button
                  type="submit"
                  hidden={!isEditing}
                  className="btn btn-success"
                >
                  Update Profile
                </button>
                
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
