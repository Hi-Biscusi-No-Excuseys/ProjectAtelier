import React, {useState} from 'react';
import { createPortal } from 'react-dom';
import SolidStars from './SolidStars.jsx';

export default function ReviewTile({review}) {
  const [showMore, setShowMore] = useState(false);
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const [photoURL, setPhotoURL] = useState('');

  const date = new Date(review.date);
  const formattedDate = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

  function handlePhotoModal(url) {
    setPhotoURL(url);
    setShowPhotoModal(true);
  };

  return (
    <div className='review-tile'>
      <div className='review-tile-top'>
        <SolidStars rating={review.rating} />
        <span>{review.reviewer_name}, {formattedDate}</span>
      </div>

      <p className='review-summary'>{review.summary}</p>
      <p className='review-body'>
        {showMore ? review.body : review.body.substring(0, 250)}
        {review.body.length > 250 ? 
        <button onClick={() => setShowMore(!showMore)}>{showMore ? 'Show less' : 'Show more'}</button>
        : null}
      </p>

      {review.photos.length ? 
        <div className='review-photos'>
          {review.photos.map((photo) => {
            return <img className="review-photo-thumb" src={photo.url} key={photo.id} onClick={() => handlePhotoModal(photo.url)}/>
          })}
        </div>
      : null}

      {showPhotoModal && createPortal(
      <div id='review-photo-modal'>
        <img id='review-photo' src={photoURL}></img>
        <button onClick={() => setShowPhotoModal(false)}>Close</button>
      </div>
      , document.body)}

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
