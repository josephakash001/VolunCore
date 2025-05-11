import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LoginNavbar from "../Components/VolunLoginNavBar";
import VolunSidebar from "../Components/VolunSideBar";
import Footer from "../Components/Footer";
import axios from "axios";

export default function VolunSettingsPage() {
  const [email, setEmail] = useState("");
  
  
  const [volunDetails, setVolunDetails] = useState({
    profileImage: ""
  });
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    const storedEmail = sessionStorage.getItem("Email");
    if (storedEmail) {
      setEmail(JSON.parse(storedEmail));
    } else {
      console.warn("No userEmail found in sessionStorage.");
      alert("You're not logged in. Please log in again.");
      // You might want to redirect to login page here
    } // Replace with actual method to get the email

   
  }, []);

 

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setVolunDetails({
        ...volunDetails,
        profileImageFile: file, // store file to send to backend
        profileImage: URL.createObjectURL(file), // for preview
      });
    }
  };
  

  const handleSave = async () => {
    try {
       // properly get email
  
      const formData = new FormData();
      
        formData.append("image", volunDetails.profileImageFile); // ✅ actual file
      
  
      await axios.post(`http://localhost:8081/api/project/volunteers/profile_image?email=${email}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
      alert("Profile image updated successfully!");
    } catch (error) {
      console.error("Error saving profile image:", error);
      alert("Failed to save profile image. Please try again.");
    }
  };
  const handleChangePassword = async () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      return alert("All password fields are required.");
    }
    if (newPassword !== confirmPassword) {
      return alert("New passwords do not match.");
    }

    try {
      await axios.post(`http://localhost:8081/api/project/volunteers/password?email=${email}`, {
        currentPassword,
        newPassword
      });
      alert("Password changed successfully!");
      // Optionally reset fields
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.error("Password change failed:", error);
      alert("Failed to change password. Please ensure your current password is correct.");
    }
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
              <div className="card-body text-center">
                <h5 className="card-title mb-4">Update Profile</h5>

                {/* Profile Image Preview */}
                <div className="mb-3">
                  <img
                    src={volunDetails.profileImage || "/Assets/default-dp.png"}
                    alt="Profile"
                    className="rounded-circle"
                    style={{ width: "100px", height: "100px", objectFit: "cover" }}
                  />
                </div>

                {/* Upload New Image */}
                <div className="mb-3">
                  <label className="form-label">Change Profile Image</label>
                  <input
                    type="file"
                    className="form-control"
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                </div>

                {/* Save Button */}
                <button className="btn btn-primary w-100" onClick={handleSave}>
                  Save Changes
                </button>
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
                  <button className="btn btn-outline-primary w-100" onClick={handleChangePassword}>Update Password</button>
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
