import React, {useState, useEffect} from 'react';
import PartialStars from './PartialStars.jsx';
import StarBar from './StarBar.jsx';

export default function RatingBreakdown({amount, metaData, avg, starFilter, setStarFilter}) {
  const stars = [5, 4, 3, 2, 1];

  return (
    metaData && 
    <div id="rating-breakdown">
      <div id='overall-rating'> {avg} <PartialStars avg={avg}/> </div>
      <p>{
        Math.round((parseInt(metaData.recommended.true, 10) / (parseInt(metaData.recommended.true, 10) + parseInt(metaData.recommended.false, 10))) * 100)
      }% of reviews recommend this product.
      </p>

      {stars.map((star) => (
        <div key={`${star}-stars`} className={`star-filter ${starFilter[star] ? 'star-filtered' : null}`} onClick={() => setStarFilter({...starFilter, [star]: !starFilter[star]})}>
          <a>{star} Stars</a>
          <StarBar percentage={Math.floor((parseInt(metaData.ratings[star.toString()], 10) / amount) * 100)} />
          ({metaData.ratings[star.toString()] ? metaData.ratings[star.toString()] : '0'})
        </div>
      ))}
    </div>
  )
}
