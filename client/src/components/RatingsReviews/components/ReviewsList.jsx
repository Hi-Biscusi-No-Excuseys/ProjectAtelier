import React, {useEffect, useState} from 'react';
import ReviewTile from './ReviewTile.jsx';
import axios from 'axios';

export default function ReviewsList({amount, reviews}) {
  const [reviewsShown, setReviewsShown] = useState(reviews.slice(0, 2))
  const [slice, setSlice] = useState({start: 0, end: 2});

  useEffect(() => {
    setReviewsShown(reviews.slice(0,2));
  }, [reviews])

  function handleMore () {
    setSlice({start: slice.start += 2, end: slice.end += 2});
    setReviewsShown([...reviewsShown, ...reviews.slice(slice.start, slice.end)])
  };


  return (
    <div id='reviews-container'>

      <div id="reviews-list">
        {reviewsShown.map((review) => {
          return <ReviewTile review={review} key={review.review_id}/>
        })}
      </div>

      <div id='reviews-buttons'>
        {amount > 2 && reviewsShown.length < amount ? <button onClick={handleMore}>More Reviews</button> : null}
        <button>Add a Review</button>
      </div>

    </div>
  );
}
