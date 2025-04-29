import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import OrgSidebar from "../Components/OrgSideBar";
import LoginNavbar from "../Components/LoginNavBar";
import Footer from "../Components/Footer";

export default function ManageActivities() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const activities = [
    {
      id: 1,
      title: "Beach Cleanup",
      orgName: "Ocean Savers",
      mode: "Offline",
      description: "Help clean up plastic and waste from the local beach.",
      location: "Kovalam Beach",
      schedule: "April 28, 2025",
      duration: "3 hrs",
      skills: ["Teamwork", "Environmental Awareness"],
      applicants: 35,
    },
    {
      id: 2,
      title: "Health Camp",
      orgName: "HealthFirst",
      mode: "Offline",
      description: "Join our health camp and assist in registration & coordination.",
      location: "City Hall",
      schedule: "April 10, 2025",
      duration: "5 hrs",
      skills: ["Coordination", "Communication"],
      applicants: 20,
    },
    {
      id: 3,
      title: "Online Tutoring",
      orgName: "EduBridge",
      mode: "Online",
      description: "Volunteer to tutor underprivileged kids in Math and English.",
      location: "Remote",
      schedule: "May 2, 2025",
      duration: "1 hr/week",
      skills: ["Teaching", "Patience", "Online Tools"],
      applicants: 42,
    },
    // Add more entries as needed for testing pagination
  ];

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
            <button className="btn btn-success">+ Add New Activity</button>
          </div>
        </div>
      </div>
      <footer className="py-5 bg-secondary">
        <Footer />
      </footer>
    </>
  );
}
