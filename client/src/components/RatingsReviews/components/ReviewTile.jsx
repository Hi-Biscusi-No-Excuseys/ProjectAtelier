import React, {useState} from 'react';
import SolidStars from './SolidStars.jsx';

export default function ReviewTile({review}) {
  const [showMore, setShowMore] = useState(false);
  const date = new Date(review.date);
  const formattedDate = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });


  return (
    <div className='review-tile'>
      <div className='review-tile-top'>
        <SolidStars rating={review.rating} />
        <span>{review.reviewer_name}, {formattedDate}</span>
      </div>

      <p className='summary'>{review.summary}</p>
      <p>
        {showMore ? review.body : review.body.substring(0, 250)}
        {review.body.length > 250 ? 
        <button onClick={() => setShowMore(!showMore)}>{showMore ? 'Show less' : 'Show more'}</button>
        : null}
      </p>

      {review.recommend ? <div className='recommend'>✓ I recommend this product</div> : null}
      
      {review.response ?       
      <div className='response'>
        <div>Response:</div>
        <div>review.response</div>
      </div> : null}


      <div id='review-tile-buttons'>
        <label htmlFor="helpful">Helpful?</label>
        <button name='helpful'>Yes ({review.helpfulness})</button>
        <button>Report</button>
      </div>
    </div>
  );
}
