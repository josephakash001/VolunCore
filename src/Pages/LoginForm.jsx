// src/Pages/SignIn.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginNavbar from "../Components/LoginNavBar";
import axios from 'axios';


const SignIn = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState("volun");
  const [isLoading, setIsLoading] = useState(false);
 
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [orgData, setOrgData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    if (userType === "volun") {
      setFormData((prev) => ({ ...prev, [name]: value }));
    } else {
      setOrgData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
  
    // Determine endpoint based on userType
    const endpoint =
      userType === "volun"
        ? `http://localhost:8081/api/project/volunteers/email/${formData.email}`
        : `http://localhost:8081/api/project/organizations/email/${orgData.email}`;
  
    try {
      const response = await axios.get(endpoint);
  
      if (response.status === 200 && response.data) {
        const user = response.data;

        const firstName = user.firstName
        const LastName = user.lastName
        const Name = user.name
      
        
  
        // Match password (for now it's plain text — later you'll use hash + JWT)
        if (user.password === (userType === "volun" ? formData.password : orgData.password)) {
        
          alert("Signed in successfully!");
          // Save to localStorage
          sessionStorage.setItem("userName", JSON.stringify(`${firstName} ${LastName}`));
          sessionStorage.setItem("orgName", JSON.stringify(`${Name}`));
          // Navigate to dashboard
          navigate(`/${userType}dashboard`);
          window.scrollTo(0, 0);
        } else {
          alert("Incorrect password.");
        }
      } else {
        alert("Email not found. Please sign up.");
      }
    } catch (error) {
      console.error(error);
      alert("Invalid credentials or server error.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <LoginNavbar minimal />
      <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light px-3">
        <div className="card shadow p-4 p-sm-5 w-100" style={{ maxWidth: "500px" }}>
          <div className="mb-3">
            <Link to="/" className="text-decoration-none text-secondary d-flex align-items-center">
              <i className="bi bi-arrow-left me-2"></i>Back to Home
            </Link>
          </div>

          <div className="text-center mb-4">
            <h2 className="fw-bold">Sign in</h2>
            <p className="text-muted">Enter your email and password to access your account</p>
          </div>

          <form onSubmit={handleSubmit}>
          <div className="mb-4">
              <label className="form-label">I am signing in as:</label>
              
              <div className="d-flex gap-2">
                <button
                  type="button"
                  className={`btn ${userType === "volun" ? "btn-primary" : "btn-outline-primary"} w-50`}
                  onClick={() => setUserType("volun")}
                >
                  Volunteer
                </button>
                <button
                  type="button"
                  className={`btn ${userType === "org" ? "btn-primary" : "btn-outline-primary"} w-50`}
                  onClick={() => setUserType("org")}
                >
                  Organization
                </button>
              </div>
            </div>
            <div className="mb-3 text-start">
              <label htmlFor="email" className="form-label">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={userType === "volun" ? formData.email : orgData.email}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-3 text-start">
              <div className="d-flex justify-content-between align-items-center">
                <label htmlFor="password" className="form-label">Password</label>
                
              </div>
              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                value={userType === "volun" ? formData.password : orgData.password}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter your password"
              />
            </div>
            <div className="mb-3 text-end">
            <Link to="/forgot-password" className="text-decoration-none small text-primary  ">
                  Forgot password?
                </Link>
            </div>

            

            <button type="submit" className="btn btn-primary w-100" disabled={isLoading}>
              {isLoading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <p className="text-center mt-4 text-muted">
            Don't have an account?{" "}
            <Link to="/signup" className="text-decoration-none fw-semibold text-primary">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignIn;
