import AOS from "aos";
import "aos/dist/aos.css";
import React, { useState, useEffect } from "react";
import VolunReviewForm from "./VolunReviewForm";
import VolunReviewList from "./VolunReviewList";
import LoginNavbar from "../Components/LoginNavBar";
import VolunSidebar from "../Components/VolunSideBar";
import Footer from "../Components/Footer";

// Initial demo reviews
const initialReviews = [
  {
    rating: 5,
    comment: "Amazing experience! The organization was supportive and the activity was meaningful.",
    date: "2025-04-15T10:30:00Z",
  },
  {
    rating: 4,
    comment: "Great initiative. A little more coordination would make it perfect.",
    date: "2025-04-12T15:45:00Z",
  },
  {
    rating: 3,
    comment: "It was okay. The team was kind, but I wish the tasks were more structured.",
    date: "2025-04-10T09:20:00Z",
  },
  {
    rating: 5,
    comment: "Loved every moment! Would definitely volunteer again.",
    date: "2025-04-08T13:00:00Z",
  },
];

const VolunReviewPage = () => {
  const [reviews, setReviews] = useState(initialReviews);

  const handleNewReview = (review) => {
    setReviews((prev) => [review, ...prev]);
  };

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
