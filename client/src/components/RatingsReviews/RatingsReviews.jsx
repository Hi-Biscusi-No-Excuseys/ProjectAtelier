/* eslint-disable no-restricted-syntax */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RatingBreakdown from './components/RatingBreakdown';
import ProductBreakdown from './components/ProductBreakdown';
import SortOptions from './components/SortOptions';
import ReviewsList from './components/ReviewsList';

export default function RatingsReviews({ product }) {
  // product.id = 40432;
  const [sort, setSort] = useState('relevant');
  const [amount, setAmount] = useState(null);
  const [metaData, setMetaData] = useState(null);
  const [avg, setAvg] = useState(null);
  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [starFilter, setStarFilter] = useState({
    1: false, 2: false, 3: false, 4: false, 5: false,
  });
  const [reviewAdded, setReviewAdded] = useState(0);

  useEffect(() => {
    axios.get('/reviews/meta', { params: { product_id: product.id } })
      .then((response) => {
      // ^ Sets average review rating to nearest 10th decimal place
        const { ratings } = response.data;
        let numOfReviews = 0;
        let numOfStars = 0;
        for (const key in ratings) {
          if (ratings[key]) {
            numOfReviews += parseInt(ratings[key], 10);
            numOfStars += (key * ratings[key]);
          }
        }
        const longAvg = numOfStars / numOfReviews;
        setAvg(Math.round(longAvg * 10) / 10);

        // ^ Sets number of reviews
        setAmount(parseInt(response.data.recommended.false, 10)
        + parseInt(response.data.recommended.true, 10));

        // ^ Sets meta data
        setMetaData(response.data);

        return axios.get('/reviews/list', {
          params: {
            page: 1,
            count: parseInt(response.data.recommended.false, 10)
            + parseInt(response.data.recommended.true, 10),
            sort,
            product_id: product.id,
          },
        });
      })
      .then((response) => {
        setReviews(response.data.results);
        setLoading(false);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error('Client failed to get reviews:', err);
        setLoading(false);
      });
  }, [product, sort]); // TODO: Add new review posted and star filter dependencies

  return (
    !loading
      ? (
        <div id="reviews">
          <h3>Ratings & Reviews</h3>

          <div id="breakdown-list">
            <aside>
              <RatingBreakdown
                amount={amount}
                metaData={metaData}
                avg={avg}
                setStarFilter={setStarFilter}
                starFilter={starFilter}
              />
              <ProductBreakdown characteristics={metaData.characteristics} />
            </aside>

            <div id="sort-and-list">
              <SortOptions sort={sort} setSort={setSort} amount={amount} />
              <ReviewsList
                reviews={reviews}
                starFilter={starFilter}
                product={product}
                characteristics={metaData.characteristics}
                reviewAdded={reviewAdded}
                setReviewAdded={setReviewAdded}
              />
            </div>
          </div>

        </div>
      )
      : (
        <div id="reviews">
          <h3>Ratings & Reviews</h3>
          <p id="loading">Loading...</p>
        </div>
      )
  );
}
