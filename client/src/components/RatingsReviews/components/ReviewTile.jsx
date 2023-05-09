import React from 'react';

export default function ReviewTile({review}) {


  return (
    <div className='review-tile'>
      <div className='review-tile-top'>
        <span>★★★★★ | {review.rating}</span>
        <span>{review.reviewer_name}</span>
        <span>{review.date}</span>
      </div>

      <p>{review.summary}</p>
      <p>{review.body}</p>

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
