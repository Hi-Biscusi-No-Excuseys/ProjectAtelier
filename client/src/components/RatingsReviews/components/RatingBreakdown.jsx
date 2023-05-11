import React, {useState, useEffect} from 'react';
import axios from 'axios';
import PartialStars from './PartialStars.jsx';
import StarBar from './StarBar.jsx';

export default function RatingBreakdown({product, amount, setAmount}) {
  const [metaData, setMetaData] = useState(null);
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
    axios.get('/reviews/meta', { params: {product_id: product} })
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
    })
    .catch((err) => {
      console.error('Client failed to get reviews:', err);
    })
  }, [product])


  return (
    metaData && 
    (<div id="rating-breakdown">
  
      <div id='overall-rating'> {avg} <PartialStars avg={avg} /> </div>

      <p>{
        Math.round((parseInt(metaData.recommended.true, 10) / (parseInt(metaData.recommended.true, 10) + parseInt(metaData.recommended.false, 10))) * 100)
        }% of reviews recommend this product.
      </p>

      <div id='5-stars'>
        <a>5 Stars</a>
        <StarBar percentage={Math.floor((parseInt(metaData.ratings["5"], 10) / amount) * 100)} />
      </div>

      <div id='4-stars'>
        <a>4 Stars</a>
        <StarBar percentage={Math.floor((parseInt(metaData.ratings["4"], 10) / amount) * 100)} />
      </div>

      <div id='3-stars'>
        <a>3 Stars</a>
        <StarBar percentage={Math.floor((parseInt(metaData.ratings["3"], 10) / amount) * 100)} />
      </div>

      <div id='2-stars'>
        <a>2 Stars</a>
        <StarBar percentage={Math.floor((parseInt(metaData.ratings["2"], 10) / amount) * 100)} />
      </div>
      
      <div id='1-stars'>
        <a>1 Stars</a>
        <StarBar percentage={Math.floor((parseInt(metaData.ratings["1"], 10) / amount) * 100)} />
      </div>
  
    </div>)
    
  )
}
