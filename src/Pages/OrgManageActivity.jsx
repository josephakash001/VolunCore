import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import OrgSidebar from "../Components/OrgSideBar";
import LoginNavbar from "../Components/LoginNavBar";
import Footer from "../Components/Footer";
import { useNavigate } from 'react-router-dom'; 
import axios from "axios";

export default function ManageActivities() {
  const navigate = useNavigate();  // Initialize navigate function

  const [activities, setActivities] = useState([]);  // State to store fetched activities
  const [loading, setLoading] = useState(true);  // Loading state for the fetch
  const [error, setError] = useState(null);  // State to store any error during the fetch

  // Function to fetch activities from backend
  const fetchActivities = async () => {
    try {
      const response = await axios.get("http://localhost:8081/api/project/activities");  // Fetch data from your backend
      setActivities(response.data);  // Set activities to state
      setLoading(false);  // Stop loading
    } catch (error) {
      setError("Failed to fetch activities");  // Handle any error
      setLoading(false);  // Stop loading
    }
  };


  
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    fetchActivities(); 
  }, []);
  
  
  

  // Pagination logic
  const [currentPage, setCurrentPage] = useState(1);
  const activitiesPerPage = 5;

  const indexOfLast = currentPage * activitiesPerPage;
  const indexOfFirst = indexOfLast - activitiesPerPage;
  const currentActivities = activities.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(activities.length / activitiesPerPage);

  const changePage = (num) => setCurrentPage(num);

  return (
    <>
      <header className="sticky-top bg-white border-bottom py-3 shadow-sm">
        <LoginNavbar />
      </header>
      <div className="d-flex">
        <OrgSidebar />
        <div className="container my-5">
          <h2 className="fw-bold mb-4" data-aos="fade-down">Manage Activities</h2>
          <p className="text-muted mb-4" data-aos="fade-down">
            View, edit, or delete your organization’s volunteering activities.
          </p>

          <div className="table-responsive" data-aos="fade-up">
            <table className="table table-hover align-middle">
              <thead className="table-light">
                <tr>
                  <th>Title</th>
                  <th>Organization</th>
                  <th>Mode</th>
                  <th>Location</th>
                  <th>Schedule</th>
                  <th>Duration</th>
                  <th>Applicants</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentActivities.map((activity) => (
                  <tr key={activity.id}>
                    <td>{activity.title}</td>
                    <td>{activity.orgName}</td>
                    <td><span className="badge bg-secondary">{activity.mode}</span></td>
                    <td>{activity.location}</td>
                    <td>{activity.schedule}</td>
                    <td>{activity.duration}</td>
                    <td>{activity.applicants}</td>
                    <td>
                      <div className="btn-group">
                        <button className="btn btn-sm btn-outline-primary">View</button>
                        <button className="btn btn-sm btn-outline-warning">Edit</button>
                        <button
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => alert(`Delete activity: ${activity.title}`)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <nav>
            <ul className="pagination justify-content-center mt-4">
              {[...Array(totalPages)].map((_, i) => (
                <li
                  key={i}
                  className={`page-item ${currentPage === i + 1 ? "active" : ""}`}
                >
                  <button className="page-link" onClick={() => changePage(i + 1)}>
                    {i + 1}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-3 text-end">
            <button className="btn btn-success" onClick={() => navigate("/manageactivities/orgactivityform")}>+ Add New Activity</button>
          </div>
        </div>
      </div>
      <footer className="py-5 bg-secondary">
        <Footer />
      </footer>
    </>
  );
}
