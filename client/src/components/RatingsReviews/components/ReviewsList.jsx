import React from 'react';
import ReviewTile from './ReviewTile.jsx';

export default function ReviewsList() {
  //^ use state and conditional to render write review if clicked

  return (
    <div id="reviews-list">
      <ReviewTile />

    <button>More Reviews</button>
    <button>Add a Review</button>
    </div>
  );
}
