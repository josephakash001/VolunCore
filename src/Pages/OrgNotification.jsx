import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LoginNavbar from "../Components/LoginNavBar";
import OrgSidebar from "../Components/OrgSideBar";
import Footer from "../Components/Footer";

const notifications = [
  {
    id: 1,
    title: "New Volunteer Application",
    message: "Alice Johnson applied for 'Beach Cleanup Drive'.",
    time: "2 hours ago",
    type: "application",
  },
  {
    id: 2,
    title: "Event Reminder",
    message: "'Tree Plantation' starts tomorrow at 9:00 AM.",
    time: "1 day ago",
    type: "reminder",
  },
  {
    id: 3,
    title: "Application Approved",
    message: "You approved Bob Mathews for 'Food Distribution'.",
    time: "3 days ago",
    type: "approval",
  },
  {
    id: 4,
    title: "Feedback Received",
    message: "New feedback received from volunteer Sarah.",
    time: "5 days ago",
    type: "feedback",
  },
];

const typeIcon = {
  application: "bi bi-person-plus-fill",
  reminder: "bi bi-calendar-event-fill",
  approval: "bi bi-check-circle-fill",
  feedback: "bi bi-chat-dots-fill",
};

export default function OrgNotificationPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <header className="sticky-top bg-white border-bottom py-3 shadow-sm">
        <LoginNavbar />
      </header>
      <div className="d-flex">
        <OrgSidebar />
        <div className="container my-5">
          <h2 className="fw-bold mb-4" data-aos="fade-down">
            Notifications
          </h2>
          <div className="list-group" data-aos="zoom-in-up">
            {notifications.map((note) => (
              <div
                key={note.id}
                className="list-group-item list-group-item-action d-flex justify-content-between align-items-start rounded-3 mb-2 shadow-sm"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">
                    <i className={`${typeIcon[note.type]} me-2 text-primary`}></i>
                    {note.title}
                  </div>
                  <small className="text-muted">{note.message}</small>
                </div>
                <span className="text-muted small">{note.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <footer className="py-5 bg-secondary">
        <Footer />
      </footer>
    </>
  );
}
