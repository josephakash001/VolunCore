import React from "react";
import { format } from "date-fns";

const VolunReviewList = ({ reviews }) => {
  if (reviews.length === 0) return <p>No reviews yet.</p>;

  return (
    <div className="mt-3">
      <h5 className="mb-3">Volunteer Reviews</h5>
      {reviews.map((review, index) => (
        <div key={index} className="card mb-3 p-3 shadow-sm">
          <div className="d-flex justify-content-between">
            <strong>{review.rating} ★</strong>
            <small className="text-muted">
              {review.date ? format(new Date(review.date), "PPP") : "Unknown Date"}
            </small>
          </div>
          {review.name && <p className="mb-1"><strong>Name:</strong> {review.name}</p>}
          {review.activity && <p className="mb-1"><strong>Activity:</strong> {review.activity}</p>}
          <p className="mt-2 mb-0">{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default VolunReviewList;
