import AOS from "aos";
import "aos/dist/aos.css";
import React, { useState, useEffect } from "react";
import VolunReviewForm from "./VolunReviewForm";
import VolunReviewList from "./VolunReviewList";
import LoginNavbar from "../Components/VolunLoginNavBar";
import VolunSidebar from "../Components/VolunSideBar";
import Footer from "../Components/Footer";
import axios from "axios";



const VolunReviewPage = () => {
  const initialReviews = [];
  const [reviews, setReviews] = useState(initialReviews);
  

  useEffect(() => {
    AOS.init();
    axios.get("http://localhost:8081/api/project/feedback")
      .then((res) => setReviews(res.data))
      .catch((err) => console.error("Error fetching reviews:", err));
  }, []);

  const handleNewReview = (review) => {
    axios.post("http://localhost:8081/api/project/feedback", review)
      .then((res) => setReviews((prev) => [res.data, ...prev]))
      .catch((err) => console.error("Error posting review:", err));
  };

  return (
    <>
      <header className="sticky-top bg-white border-bottom py-3 shadow-sm">
        <LoginNavbar />
      </header>

      <div className="d-flex">
        <VolunSidebar />
        <div className="container py-5">
          <h2 className="mb-4" data-aos="fade-up" data-aos-duration="800">
            Review Your Volunteering Experience
          </h2>
          <VolunReviewForm onSubmit={handleNewReview} data-aos="fade-up" data-aos-duration="1000" />
          <VolunReviewList reviews={reviews} data-aos="fade-up" data-aos-duration="1200" />
        </div>
      </div>

      <footer className="py-5 bg-secondary">
        <Footer />
      </footer>
    </>
  );
};

export default VolunReviewPage;
