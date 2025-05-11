import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import OrgSidebar from "../Components/OrgSideBar";
import OrgLogNavbar from "../Components/OrgLoginNavBar";
import Footer from "../Components/Footer";
import axios from "axios";

export default function ManageVolunteers() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [applications, setApplications] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const volunteersPerPage = 4;

  const indexOfLast = currentPage * volunteersPerPage;
  const indexOfFirst = indexOfLast - volunteersPerPage;
  const currentVolunteers = applications.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(applications.length / volunteersPerPage);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  
    const OrgName = JSON.parse(sessionStorage.getItem("orgName"));
  
    axios.get(`http://localhost:8081/api/project/applications/${OrgName}`)
    .then((res) => {
      setApplications(res.data);
      setLoading(false);
    })
    .catch((err) => {
      console.error("Error fetching applications:", err);
      setError("Failed to load data");
      setLoading(false);
    });
}, []);
const handleApprove = (id) => {
  axios.put(`http://localhost:8081/api/project/applications/status/${id}`)
    .then((res) => {
      // Optionally update the application list in the UI without full reload
      setApplications(prev =>
        prev.map(app => app.id === id ? { ...app, status: "Active" } : app)
      );
    })
    .catch(err => console.error("Error approving application:", err));
};
const handleRemove = (id) => {
  axios.put(`http://localhost:8081/api/project/applications/status/${id}`)
  .then((res) => {
    // Optionally update the application list in the UI without full reload
    setApplications(prev =>
      prev.map(app => app.id === id ? { ...app, status: "Rejected" } : app)
    );
  })
  .catch(err => console.error("Error approving application:", err));
};

  return (
    <>
      <header className="sticky-top bg-white border-bottom py-3 shadow-sm">
        <OrgLogNavbar />
      </header>
      <div className="d-flex">
        <OrgSidebar />
        <div className="container my-5">
          <h2 className="fw-bold mb-4" data-aos="fade-down">Manage Volunteers</h2>
          <p className="text-muted mb-4" data-aos="fade-down">View, approve, or manage volunteers participating in your organization’s activities.</p>

          <div className="table-responsive" data-aos="fade-up">
            <table className="table table-hover align-middle">
              <thead className="table-light">
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Activity</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentVolunteers.map((application) => (
                  <tr key={application.id}>
                    <td>{application.volunteerName}</td> {/* Assuming your backend sends the volunteer name */}
                    <td>{application.volunteerEmail}</td>
                    <td>{application.volunteerPhone}</td>
                    <td>{application.activityName}</td> {/* Assuming your backend sends the activity name */}
                    <td>
                      <span className={`badge ${
                        application.status === "Active" ? "bg-success" :
                        application.status === "Rejected" ? "bg-danger" :
                        application.status === "Pending" ? "bg-warning text-dark" :
                        "bg-secondary"
                      }`}>
                        {application.status}
                      </span>
                    </td>
                    <td>
                    <div className="btn-group">
                      <button className="btn btn-sm btn-outline-success" onClick={() => handleApprove(application.id)}>Approve</button>
                      {/* <button className="btn btn-sm btn-outline-primary">View</button> */}
                      <button className="btn btn-sm btn-outline-danger" onClick={() => handleRemove(application.id)}>Reject</button>
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
                <li key={i} className={`page-item ${currentPage === i + 1 ? "active" : ""}`}>
                  <button className="page-link" onClick={() => setCurrentPage(i + 1)}>
                    {i + 1}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="text-end mt-3">
            <button className="btn btn-success">+ Add New Volunteer</button>
          </div>
        </div>
      </div>
      <footer className="py-5 bg-secondary">
        <Footer />
      </footer>
    </>
  );
}
