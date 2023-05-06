import React, {useEffect} from 'react';
import ReviewTile from './ReviewTile.jsx';
import axios from 'axios';

export default function ReviewsList({productID}) {
  //^ use state and conditional to render write review if clicked
  //^ use state

  useEffect(() => {
    axios.get()
      .then((response) => {

      })
      .catch((err) => {

      })
  }, [productID])


  return (
    <div id="reviews-list">
      <ReviewTile />
      <div id='reviews-buttons'>
        <button>More Reviews</button>
        <button>Add a Review</button>
      </div>
    </div>
  );
}
