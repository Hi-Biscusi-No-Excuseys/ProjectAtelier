import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import axios from 'axios';
import SelectStars from './SelectStars';

export default function AddReview({ setShowAddReviewModal, product }) {
  const [activeStar, setActiveStar] = useState(-1);

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    createPortal(
      <div id="add-review-modal">
        <form action="submit" onSubmit={(e) => handleSubmit(e)}>
          <h3>Write Your Review</h3>
          <h4>
            About the
            {' '}
            {product.name}
            {' '}
          </h4>

          <SelectStars activeStar={activeStar} setActiveStar={setActiveStar} />

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
