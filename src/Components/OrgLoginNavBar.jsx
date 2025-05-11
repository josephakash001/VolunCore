import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Handshake } from "lucide-react";
import { useNavigate } from "react-router-dom";


const OrgLogNavbar = ({ minimal = false }) => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const dropdownRef = useRef(null);

  const email = sessionStorage.getItem("Email");

  useEffect(() => {
    const email = sessionStorage.getItem("Email")?.replace(/"/g, "");
  
    if (email) {
      fetch(`http://localhost:8081/api/project/organizations/email/${email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.profileImage) {
            setProfileImage(data.profileImage); // <--- Must match actual file name like 'payment gateway.jpg'
          } else {
            setProfileImage("./dp1.png");
          }
        })
        .catch((err) => {
          console.error("Error fetching profile:", err);
          setProfileImage("./dp1.png");
        });
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    sessionStorage.clear();
    alert("Logged out!");
    navigate("/");  // Redirect to home page
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
          <div className="d-none d-md-flex gap-2 position-relative" ref={dropdownRef}>
            <img
              src={`http://localhost:8081/api/uploads/${encodeURIComponent(profileImage)}`}
              alt="Profile"
              className="rounded-circle border"
              style={{ width: '50px', height: '50px', objectFit: 'cover', backgroundColor: '#ccc' }}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            />
            {dropdownOpen && (
              <ul className="dropdown-menu dropdown-menu-end show mt-2" style={{ display: "block", position: "absolute", right: 0 }}>
                <li><Link to="/orgdashboard" className="dropdown-item">Profile</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><button className="dropdown-item" onClick={handleLogout}>Logout</button></li>
              </ul>
            )}
          </div>
        )}
      </div>

      {!minimal && mobileMenuOpen && (
        <div className="d-md-none mt-3 border-top pt-3">
          <div className="mt-3 d-flex flex-column gap-2">
            <Link to="/orgdashboard" className="text-decoration-none text-dark" onClick={() => setMobileMenuOpen(false)}>
              <i className="bi bi-person-circle"></i> Profile
            </Link>
            <button className="btn btn-link text-start text-dark p-0" onClick={handleLogout}>
              <i className="bi bi-box-arrow-right"></i> Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrgLogNavbar;
