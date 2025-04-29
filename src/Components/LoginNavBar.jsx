import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Handshake } from 'lucide-react';
import '/custom.scss';

const LoginNavbar = ({ minimal = false }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="container py-2">
      <div className="d-flex justify-content-between align-items-center">
        <Link to="/" className="fw-bold fs-4 text-decoration-none text-primary">
        <Handshake /> VolunCore
        </Link>

        {!minimal && (
          <button
            className="btn d-md-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}
{/* 
        {!minimal && (
          <nav className="d-none d-md-flex gap-3">
            <a href="/" className="text-decoration-none text-dark">
              Home
            </a>
            <Link to="/activities" className="text-decoration-none text-dark">
              Find Activities
            </Link>
            <Link to="/organizations" className="text-decoration-none text-dark">
              Organizations
            </Link>
            <Link to="/about" className="text-decoration-none text-dark">
              About Us
            </Link>
          </nav>
        )} */}

        {!minimal && (
          <div className="d-none d-md-flex gap-2">
            <Link to="/" className="navbar-brand">
      <img src="/Assets/dp1.png" alt="Logo" style={{ width: '40px' }} />
    </Link>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {!minimal && mobileMenuOpen && (
        <div className="d-md-none mt-3 border-top pt-3">
          {/* <nav className="d-flex flex-column gap-2">
          <a href="/" className="text-decoration-none text-dark" onClick={() => setMobileMenuOpen(false)}>
              Home
            </a>
            <Link to="/activities" className="text-decoration-none text-dark" onClick={() => setMobileMenuOpen(false)}>
              Find activities
            </Link>
            <Link to="/organizations" className="text-decoration-none text-dark" onClick={() => setMobileMenuOpen(false)}>
              Organizations
            </Link>
            <Link to="/about" className="text-decoration-none text-dark" onClick={() => setMobileMenuOpen(false)}>
              About Us
            </Link>
          </nav> */}
          <div className="mt-3 d-flex flex-column gap-2">
          <Link to="/" className="navbar-brand" >
            <i className="bi bi-person-circle"></i>
            Profile
            </Link>

          </div>
        </div>
      )}
    </div>
  );
};

export default LoginNavbar;
