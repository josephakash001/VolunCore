import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Handshake } from 'lucide-react';
import '/custom.scss';

const Navbar = ({ minimal = false }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollToActivities = () => {
    const activitiesSection = document.getElementById('activity');
    if (activitiesSection) {
      activitiesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToAboutUs = () => {
    const aboutUsSection = document.getElementById('aboutUs');
    if (aboutUsSection) {
      aboutUsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToOrganizations = () => {
    const organizationsSection = document.getElementById('organization');
    if (organizationsSection) {
      organizationsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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

        {!minimal && (
          <nav className="d-none d-md-flex gap-3">
            <a href="/" className="text-decoration-none text-dark">
              Home
            </a>
            <nav>
            <button className="text-decoration-none text-dark border-0 bg-transparent" onClick={scrollToActivities}>
              Find Activities
            </button>
          </nav>
          <nav>
            <button className="text-decoration-none text-dark border-0 bg-transparent" onClick={scrollToOrganizations}>
              Organizations
            </button>
          </nav>
          <nav>
            <button className="text-decoration-none text-dark border-0 bg-transparent" onClick={scrollToAboutUs}>
              About Us
            </button>
          </nav>
          </nav>
        )}

        {!minimal && (
          <div className="d-none d-md-flex gap-2">
            <Link to="/signin" className="btn btn-outline-secondary">
              Sign In
            </Link>
            <Link to="/signup" className="btn-primary btn text-white">
              Join Now
            </Link>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {!minimal && mobileMenuOpen && (
        <div className="d-md-none mt-3 border-top pt-3">
          
          <div className="mt-3 d-flex flex-column gap-2">
            <Link to="/signin" className="btn btn-outline-secondary" onClick={() => setMobileMenuOpen(false)}>
              Sign In
            </Link>
            <Link to="/signup" className="btn btn-dark text-white" onClick={() => setMobileMenuOpen(false)}>
              Join Now
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
