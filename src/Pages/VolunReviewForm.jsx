import React, { useState, useEffect } from "react";
import axios from "axios";

const VolunReviewForm = ({ onSubmit }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [orgName, setOrgName] = useState("");
  const [activity, setActivity] = useState(""); // optional
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  useEffect(() => {
    const emailFromStorage = JSON.parse(sessionStorage.getItem("Email"));
    if (emailFromStorage) {
      axios
        .get(`http://localhost:8081/api/project/volunteers/${emailFromStorage}`)
        .then((res) => {
          setFirstName(res.data.firstName); // Assuming firstName is part of profile
          setLastName(res.data.lastName); // Assuming lastName is part of profile
          setEmail(res.data.email); // Assuming email is part of profile
        })
        .catch((err) => console.error("Error fetching profile:", err));
    }
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      name: `${firstName} ${lastName}`, // Combining first and last name
      orgName: orgName.trim(),
      activity: activity.trim() || null,
      comment,
      rating,
      email,
      date: new Date().toISOString(),
    };
    onSubmit(newReview);
    setActivity("");
    setComment("");
    setRating(5);
  };



  return (
    <form onSubmit={handleSubmit} className="card p-4 shadow-sm mb-4">
      <h5 className="mb-3">Leave Your Feedback</h5>

      <div className="mb-3">
        <label className="form-label">Your Name </label>
        <input
          type="text"
          className="form-control"
          placeholder="John Doe"
          value={`${firstName} ${lastName}`} 
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          value={email}
          disabled
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Organization Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="e.g., Green Earth Foundation"
          value={orgName}
          onChange={(e) => setOrgName(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Activity Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="e.g., Beach Cleanup"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Rating</label>
        <div>
          {[1, 2, 3, 4, 5].map((val) => (
            <button
              key={val}
              type="button"
              className={`btn ${val <= rating ? "btn-warning" : "btn-outline-warning"} me-1`}
              onClick={() => setRating(val)}
            >
              <i className="bi bi-star-fill"></i>
            </button>
          ))}
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label">Comment</label>
        <textarea
          className="form-control"
          rows="4"
          placeholder="Write your experience..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </div>

      <button className="btn btn-primary" type="submit" disabled={!comment.trim()}>
        Submit Review
      </button>
    </form>
  );
};

export default VolunReviewForm;
