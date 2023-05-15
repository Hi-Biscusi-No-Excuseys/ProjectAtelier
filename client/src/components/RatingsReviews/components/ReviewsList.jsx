import React, { useEffect, useState } from 'react';
import ReviewTile from './ReviewTile';
import AddReview from './AddReview';

export default function ReviewsList({ reviews, starFilter }) {
  const [reviewsShown, setReviewsShown] = useState(null);
  const [reviewsFiltered, setReviewsFiltered] = useState(null);
  const [slice, setSlice] = useState({ start: 0, end: 2 });
  const [showAddReviewModal, setShowAddReviewModal] = useState(false);

  useEffect(() => {
    let filteredReviews;

    // ^ if any starFilters are true filteredReviews = [], else filteredReviews = reviews
    function anyFilters() {
      return Object.keys(starFilter).some((key) => starFilter[key]);
    }

    if (anyFilters()) {
      filteredReviews = Object.keys(starFilter)
        .filter((key) => starFilter[key])
        .reduce((acc, key) => {
          const filtered = reviews.filter((review) => review.rating === parseInt(key, 10));
          return [...acc, ...filtered];
        }, []);
    } else {
      filteredReviews = reviews;
    }

    setReviewsFiltered(filteredReviews);
    setReviewsShown(filteredReviews.slice(0, 2));
    setSlice({ start: 0, end: 2 });
  }, [reviews, starFilter]);

  function handleMore() {
    setSlice({ start: slice.start += 2, end: slice.end += 2 });
    setReviewsShown([...reviewsShown, ...reviewsFiltered.slice(slice.start, slice.end)]);
  }

  return (
    <>
      {reviewsShown && (
      <div id="reviews-container">

        <div id="reviews-list">
          {reviewsShown.map((review) => <ReviewTile review={review} key={review.review_id} />)}
        </div>

        <div id="reviews-buttons">
          {reviewsFiltered.length > 2 && reviewsShown.length < reviewsFiltered.length
            ? <button type="button" onClick={handleMore}>More Reviews</button> : null}
          <button type="button" onClick={() => setShowAddReviewModal(true)}>Add a Review</button>
        </div>

      </div>
      )}

      {showAddReviewModal && <AddReview setShowAddReviewModal={setShowAddReviewModal} />}
    </>
  );
}
