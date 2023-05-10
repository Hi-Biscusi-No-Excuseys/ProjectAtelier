import React, {useEffect, useState} from 'react';
import ReviewTile from './ReviewTile.jsx';
import axios from 'axios';

export default function ReviewsList({product, sort, amount, setAmount}) {
  // product = 40432;
  const [reviews, setReviews] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const opt = {
      params: {
        page: page,
        count: 2,
        sort: sort,
        product_id: product
      }
    }
    //^ Sets initial 2 reviews
    axios.get('/reviews/list', opt)
      .then((response) => {
        setReviews(response.data.results);
      })
      .catch((err) => {
        console.error('Client failed to get reviews:', err);
      })
    //^ Sets total amount of reviews
    axios.get('/reviews/meta', { params: {product_id: product} })
      .then((response) => {
        setAmount(parseInt(response.data.recommended.false, 10) + parseInt(response.data.recommended.true, 10))
      })
      .catch((err) => {
        console.error('Client failed to get reviews:', err);
      })
  }, [product, sort]); //TODO: Add new review posted dependency


  function handleMore () {
    const opt = {
      params: {
        page: page + 1,
        count: 2,
        sort: 'relevant',
        product_id: product
      }
    }
    axios.get('/reviews/list', opt)
      .then((response) => {
        setReviews([...reviews, ...response.data.results]);
        setPage(page + 1);
      })
      .catch((err) => {
        console.error('Client failed to get reviews:', err);
      })
  };


  return (
    <div id='reviews-container'>

      <div id="reviews-list">
        {reviews.map((review) => {
          return <ReviewTile review={review} key={review.review_id}/>
        })}
      </div>

      <div id='reviews-buttons'>
        {amount > 2 && reviews.length < amount ? <button onClick={handleMore}>More Reviews</button> : null}
        <button>Add a Review</button>
      </div>

    </div>
  );
}
