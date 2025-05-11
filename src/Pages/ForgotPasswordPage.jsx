import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginNavbar from "../Components/VolunLoginNavBar";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
  e.preventDefault();
  setMessage(null);
  setError(null);
  setIsSubmitting(true);

  let isRegistered = false;
  let userType = null;

  try {
    // 1) Try volunteers
    let res = await fetch(
      `http://localhost:8081/api/project/volunteers/email/${email}`
    );
    if (res.ok) {
      isRegistered = true;
      
    } else {
      // 2) Fallback to organizations
      res = await fetch(
        `http://localhost:8081/api/project/organizations/email/${email}`
      );
      if (res.ok) {
        isRegistered = true;
        
      }
    }
  } catch (err) {
    // network error—treat as not registered
  }

  if (!isRegistered) {
    setError("Email not registered.");
    setIsSubmitting(false);
    return;
  }

  // 3) Registered — now send reset link
  try {
    const response = await fetch("http://localhost:8081/api/reset/request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email}), 
    });

    const data = await response.json();
    if (response.ok) {
      setMessage(data.message || "Reset link sent successfully!");
    } else {
      setError(data.error || "Something went wrong.");
    }
  } catch {
    setError("An error occurred. Please try again later.");
  } finally {
    setIsSubmitting(false);
  }
};



  return (
    <>
      <LoginNavbar minimal />
      <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light px-3">
      
            <div className="card shadow p-4 p-sm-5 w-100" style={{ maxWidth: "500px" }}>
              <div className="card-body">
                <h3 className="card-title text-center text-primary">Forgot Password</h3>
                <p className="text-center text-muted">
                  Enter your registered email and we'll send you a reset link.
                </p>

                {message && <div className="alert alert-success">{message}</div>}
                {error && <div className="alert alert-danger">{error}</div>}

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="Enter your email"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary w-100"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Reset Link"}
                  </button>
                </form>

                <div className="text-center mt-3">
                  <Link to="/signin" className="text-primary">Back to Login</Link>
                </div>
              </div>
            </div>
          </div>
    </>
  );
};

export default ForgotPasswordPage;
