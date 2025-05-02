import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "../Components/Footer";
import OrgSidebar from "../Components/OrgSideBar";
import LoginNavbar from "../Components/LoginNavBar";

const OrgActivityForm = () => {
  const [formData, setFormData] = useState({
    orgName: '',
    title: '',
    description: '',
    location: '',
    schedule: '',
    duration: '',
    skills: '',
    applicants: '',
    mode: '',
    requirements: '',
    responsibilities: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState('');
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (!value) newErrors[key] = 'This field is required';
    });
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError('');
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await axios.post('http://localhost:8081/api/project/activities', formData);
      console.log('Server response:', response.data);
      setSubmitted(true);
      setFormData({
        orgName: '',
        title: '',
        description: '',
        location: '',
        schedule: '',
        duration: '',
        skills: '',
        applicants: '',
        mode: '',
        requirements: '',
        responsibilities: ''
      });
    } catch (error) {
      console.error('Submission error:', error);
      setServerError('Failed to submit activity. Please try again.');
    }
  };

  return (
    <>
    <header className="sticky-top bg-white border-bottom py-3 shadow-sm">
        <LoginNavbar />
      </header>
      <div className="d-flex">
        <OrgSidebar />
    <div className="container my-5">
    <div className="row justify-content-center">
        <div className="col-md-10 col-lg-8">
        <Link to="/manageactivities" className="text-decoration-none mb-4 d-block text-muted">
            <i className="bi bi-arrow-left me-1"></i> Back to Manage Activities
          </Link> 
      <h3 className="text-center mb-4">Post Volunteer Activity</h3>
      {submitted && (
        <div className="alert alert-success">Activity posted successfully!</div>
      )}
      {serverError && (
        <div className="alert alert-danger">{serverError}</div>
      )}
      <form onSubmit={handleSubmit}>
      <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Organization Name</label>
            <input
              type="text"
              name="orgName"
              value={formData.orgName}
              onChange={handleChange}
              className={`form-control ${errors.orgName ? 'is-invalid' : ''}`}
              placeholder="Organization name"
            />
            <div className="invalid-feedback">{errors.orgName}</div>
          </div>
          <div className="col-md-6">
            <label className="form-label">Activity Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={`form-control ${errors.title ? 'is-invalid' : ''}`}
              placeholder="Activity title"
            />
            <div className="invalid-feedback">{errors.title}</div>
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className={`form-control ${errors.description ? 'is-invalid' : ''}`}
            rows="3"
            placeholder="Activity description"
          />
          <div className="invalid-feedback">{errors.description}</div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className={`form-control ${errors.location ? 'is-invalid' : ''}`}
              placeholder="Location"
            />
            <div className="invalid-feedback">{errors.location}</div>
          </div>
          <div className="col-md-6">
            <label className="form-label">Schedule (Date)</label>
            <input
              type="date"
              name="schedule"
              value={formData.schedule}
              onChange={handleChange}
              className={`form-control ${errors.schedule ? 'is-invalid' : ''}`}
            />
            <div className="invalid-feedback">{errors.schedule}</div>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Duration</label>
            <input
              type="text"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              className={`form-control ${errors.duration ? 'is-invalid' : ''}`}
              placeholder="e.g., 3 hours"
            />
            <div className="invalid-feedback">{errors.duration}</div>
          </div>
          <div className="col-md-6">
            <label className="form-label">Skills Required</label>
            <input
              type="text"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              className={`form-control ${errors.skills ? 'is-invalid' : ''}`}
              placeholder="e.g., communication, teamwork"
            />
            <div className="invalid-feedback">{errors.skills}</div>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Applicants Needed</label>
            <input
              type="number"
              name="applicants"
              value={formData.applicants}
              onChange={handleChange}
              className={`form-control ${errors.applicants ? 'is-invalid' : ''}`}
              placeholder="e.g., 5"
            />
            <div className="invalid-feedback">{errors.applicants}</div>
          </div>
          <div className="col-md-6">
            <label className="form-label">Mode</label>
            <select
              name="mode"
              value={formData.mode}
              onChange={handleChange}
              className={`form-select ${errors.mode ? 'is-invalid' : ''}`}
            >
              <option value="">Select mode</option>
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
            </select>
            <div className="invalid-feedback">{errors.mode}</div>
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Requirements</label>
          <textarea
            name="requirements"
            value={formData.requirements}
            onChange={handleChange}
            className={`form-control ${errors.requirements ? 'is-invalid' : ''}`}
            rows="2"
            placeholder="Minimum qualifications, prerequisites, etc."
          />
          <div className="invalid-feedback">{errors.requirements}</div>
        </div>

        <div className="mb-3">
          <label className="form-label">Responsibilities</label>
          <textarea
            name="responsibilities"
            value={formData.responsibilities}
            onChange={handleChange}
            className={`form-control ${errors.responsibilities ? 'is-invalid' : ''}`}
            rows="2"
            placeholder="What will the volunteer do?"
          />
          <div className="invalid-feedback">{errors.responsibilities}</div>
        </div>
        <div className="d-flex justify-content-center">
        <button type="submit" className="btn btn-primary text-center">
          Submit Activity
        </button>
        </div>
      </form>
    </div>
    </div>
    </div>
    </div>
    <footer className="py-5 bg-secondary">
            <Footer />
          </footer>
    </>
  );
};

export default OrgActivityForm;
