import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import OrgSidebar from "../Components/OrgSideBar";
import LoginNavbar from "../Components/LoginNavBar";
import Footer from "../Components/Footer";

export default function ManageVolunteers() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const volunteers = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com", phone: "9876543210", role: "Event Helper", status: "Active" },
    { id: 2, name: "Bob Mathews", email: "bob@example.com", phone: "9123456780", role: "Mentor", status: "Pending" },
    { id: 3, name: "Charlie Rose", email: "charlie@example.com", phone: "9988776655", role: "Coordinator", status: "Active" },
    { id: 4, name: "Diana Cooper", email: "diana@example.com", phone: "9012345678", role: "Admin Support", status: "Inactive" },
    { id: 5, name: "Evan Thomas", email: "evan@example.com", phone: "9123454321", role: "Field Volunteer", status: "Active" },
    // Add more volunteers for pagination
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const volunteersPerPage = 4;

  const indexOfLast = currentPage * volunteersPerPage;
  const indexOfFirst = indexOfLast - volunteersPerPage;
  const currentVolunteers = volunteers.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(volunteers.length / volunteersPerPage);

  return (
    <>
      <header className="sticky-top bg-white border-bottom py-3 shadow-sm">
        <LoginNavbar />
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
                  <th>Role</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentVolunteers.map((volunteer) => (
                  <tr key={volunteer.id}>
                    <td>{volunteer.name}</td>
                    <td>{volunteer.email}</td>
                    <td>{volunteer.phone}</td>
                    <td>{volunteer.role}</td>
                    <td>
                      <span className={`badge ${
                        volunteer.status === "Active" ? "bg-success" :
                        volunteer.status === "Pending" ? "bg-warning text-dark" :
                        "bg-secondary"
                      }`}>
                        {volunteer.status}
                      </span>
                    </td>
                    <td>
                      <div className="btn-group">
                        <button className="btn btn-sm btn-outline-primary">View</button>
                        <button className="btn btn-sm btn-outline-danger">Remove</button>
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
