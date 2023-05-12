import React, {useEffect, useState} from 'react';
import ReviewTile from './ReviewTile.jsx';

export default function ReviewsList({reviews, starFilter}) {
  const [reviewsShown, setReviewsShown] = useState(null)
  const [reviewsFiltered, setReviewsFiltered] = useState(null)
  const [slice, setSlice] = useState({start: 0, end: 2});

  useEffect(() => {
    let filteredReviews;

    //^ if any starFilters are true filteredReviews = [], else filteredReviews = reviews
    function anyFilters () {
      for (const key in starFilter) {
        if (starFilter[key]) {
          return true;
        }
      }
      return false;
    };

    if (anyFilters()) {
      filteredReviews = [];
      for (const key in starFilter) {
        if (starFilter[key]) {
          filteredReviews = [...filteredReviews, ...reviews.filter(review => review.rating === parseInt(key, 10))]
        }
      }
    } else {
      filteredReviews = reviews;
    }
    
    setReviewsFiltered(filteredReviews);
    setReviewsShown(filteredReviews.slice(0, 2));
    setSlice({start: 0, end: 2});

  }, [reviews, starFilter]);
  
  
  function handleMore () {
    setSlice({start: slice.start += 2, end: slice.end += 2});
    setReviewsShown([...reviewsShown, ...reviewsFiltered.slice(slice.start, slice.end)])
  };
  
  
  return (
    reviewsShown &&
    <div id='reviews-container'>

      <div id="reviews-list">
        {reviewsShown.map((review) => {
          return <ReviewTile review={review} key={review.review_id}/>
        })}
      </div>

      <div id='reviews-buttons'>
        {reviewsFiltered.length > 2 && reviewsShown.length < reviewsFiltered.length ? <button onClick={handleMore}>More Reviews</button> : null}
        <button>Add a Review</button>
      </div>

    </div>
  );
}
