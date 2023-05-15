import React from 'react';
// import axios from 'axios';
import { createPortal } from 'react-dom';

export default function AddReview({ setShowAddReviewModal }) {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    createPortal(
      <div id="add-review-modal">
        <form action="submit" onSubmit={(e) => handleSubmit(e)}>
          <h3>Write Your Review</h3>
          <h4>About the -product-</h4>

          <label htmlFor="summary">
            Title
            <input type="text" name="summary" />
          </label>

          <label htmlFor="review-body">
            Review
            <input type="text" name="review-body" />
          </label>

          <button type="submit">Submit</button>
        </form>
        <button type="button" onClick={() => setShowAddReviewModal(false)}>Close</button>
      </div>,
      document.body,
    )
  );
}
