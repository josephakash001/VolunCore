import React, { useEffect } from "react";
import LoginNavbar from '../Components/VolunLoginNavBar'; 
import VolunSidebar from "../Components/VolunSideBar"; 
import Footer from '../Components/Footer'; 
import AOS from "aos";
import "aos/dist/aos.css";

const VolunNotificationPage = () => {
  const notifications = [
    {
      id: 1,
      title: "New Volunteer Opportunity",
      message: "A new volunteer opportunity is available at Helping Hands Org. Check it out now!",
      timestamp: new Date(Date.now() - 5 * 60 * 1000).toLocaleString(), // 5 minutes ago
    },
    {
      id: 2,
      title: "Application Received",
      message: "Your application to Wildlife Alliance has been successfully submitted.",
      timestamp: new Date(Date.now() - 20 * 60 * 60 * 1000).toLocaleString(), // 20 hours ago
    },
    {
      id: 3,
      title: "Event Reminder",
      message: "Reminder: You have a scheduled volunteer event tomorrow at Literacy First.",
      timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toLocaleString(), // 2 days ago
    },
  ];

  // Initialize AOS
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <header className="sticky-top bg-white border-bottom py-3 shadow-sm">
        <LoginNavbar />
      </header>
      <div className="d-flex">
        <VolunSidebar />
        <div className="container mt-4">
          <h2>Notifications</h2>
          <div className="list-group">
            {notifications.map((notification) => (
              <div 
                className="list-group-item" 
                key={notification.id} 
                data-aos="fade-up" // Adding the AOS fade-up animation
                data-aos-duration="1000" // Duration of the animation
              >
                <h5 className="mb-1">{notification.title}</h5>
                <p className="mb-1">{notification.message}</p>
                <small>{notification.timestamp}</small>
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
};

export default VolunNotificationPage;
