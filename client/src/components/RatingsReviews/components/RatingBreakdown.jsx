import React, {useState, useEffect} from 'react';
import axios from 'axios';
import QuarterStars from './QuarterStars.jsx';

export default function RatingBreakdown({product, setAmount}) {
  const [metaData, setMetaData] = useState({});
  const [avg, setAvg] = useState(5);
//^ metaData obj:
//   {
//     "product_id": "40432",
//     "ratings": {
//         "3": "1",
//         "4": "2",
//         "5": "6"
//     },
//     "recommended": {
//         "false": "2",
//         "true": "7"
//     },
//     "characteristics": {
//         "Quality": {
//             "id": 135514,
//             "value": "4.6250000000000000"
//         }
//     }
// }

  useEffect(() => {
    //^ Sets total amount of reviews, meta data, and average review score
    axios.get('/reviews/meta', { params: {product_id: product} })
    .then((response) => {
      const ratings = response.data.ratings;
      let numOfReviews = 0;
      let numOfStars = 0;
      for (const key in ratings) {
        numOfStars = numOfStars + (key * ratings[key]);
        numOfReviews = numOfReviews + parseInt(ratings[key], 10);
      }
      const longAvg = numOfStars / numOfReviews;
      setAvg(Math.round(longAvg * 10) / 10);

      setAmount(parseInt(response.data.recommended.false, 10) + parseInt(response.data.recommended.true, 10));
      setMetaData(response.data);
    })
    .catch((err) => {
      console.error('Client failed to get reviews:', err);
    })
  }, [product])







  return (
    <div id="rating-breakdown">

      <div id='overall-rating'> {avg} <QuarterStars avg={avg} /> </div>

      <p>% of reviews recommend this product.</p>

      <div id='5-stars'>
        <a>5 stars</a>
        <span>% bar</span>
      </div>

    </div>
  );
}
