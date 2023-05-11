import React, {useState, useEffect} from 'react';
import RatingBreakdown from './components/RatingBreakdown.jsx';
import ProductBreakdown from './components/ProductBreakdown.jsx';
import SortOptions from './components/SortOptions.jsx';
import ReviewsList from './components/ReviewsList.jsx';
import axios from 'axios';

export default function RatingsReviews({product}) {
  // product.id = 40432;
  const [sort, setSort] = useState('relevant');
  const [amount, setAmount] = useState(null);
  const [metaData, setMetaData] = useState(null);
  const [avg, setAvg] = useState(null);
  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [starFilter, setStarFilter] = useState({1: false, 2: false, 3: false, 4: false, 5: false});



  useEffect(() => {
    // setLoading(true);
    axios.get('/reviews/meta', { params: {product_id: product.id} })
    .then((response) => {
      //^ Sets average review rating to nearest 10th decimal place
      const ratings = response.data.ratings;
      let numOfReviews = 0;
      let numOfStars = 0;
      for (const key in ratings) {
        numOfStars = numOfStars + (key * ratings[key]);
        numOfReviews = numOfReviews + parseInt(ratings[key], 10);
      }
      const longAvg = numOfStars / numOfReviews;
      setAvg(Math.round(longAvg * 10) / 10);

      //^ Sets number of reviews
      setAmount(parseInt(response.data.recommended.false, 10) + parseInt(response.data.recommended.true, 10));

      //^ Sets meta data
      setMetaData(response.data);

      return axios.get('/reviews/list', { params: {
        page: 1,
        count: parseInt(response.data.recommended.false, 10) + parseInt(response.data.recommended.true, 10),
        sort: sort,
        product_id: product.id
      }})
    })
    .then((response) => {
      setReviews(response.data.results);
      setLoading(false);
    })
    .catch((err) => {
      console.error('Client failed to get reviews:', err);
      setLoading(false);
    })
  }, [product, sort]) //TODO: Add new review posted and star filter dependencies



  return (
    !loading ?
    <div id='reviews'>
      <h3>Ratings & Reviews</h3>

      <div id='breakdown-list'>
        <aside>
          <RatingBreakdown product={product.id} amount={amount} metaData={metaData} avg={avg} setStarFilter={setStarFilter} starFilter={starFilter}/>
          <ProductBreakdown product={product.id}/>
        </aside>

        <div id='sort-and-list'>
          <SortOptions sort={sort} setSort={setSort} amount={amount} />
          <ReviewsList product={product.id} sort={sort} amount={amount} reviews={reviews}/>
        </div>
      </div>

    </div>
    : 
    <div id='loading-container'>
    <h3>Ratings & Reviews</h3>
    <p id='loading'>Loading...</p>
    </div>
  );
}
