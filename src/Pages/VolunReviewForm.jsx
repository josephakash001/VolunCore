import React, { useState } from "react";

const VolunReviewForm = ({ onSubmit }) => {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ rating, comment, date: new Date().toISOString() });
    setComment("");
    setRating(5);
  };

  return (
    <form onSubmit={handleSubmit} className="card p-4 shadow-sm mb-4">
      <h5 className="mb-3">Leave Your Feedback</h5>
      <div className="mb-3">
        <label className="form-label">Rating</label>
        <div>
            {[1, 2, 3, 4, 5].map((val) => (
            <button
                key={val}
                type="button"
                className={`btn ${val <= rating ? 'btn-warning' : 'btn-outline-warning'} me-1`}
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
