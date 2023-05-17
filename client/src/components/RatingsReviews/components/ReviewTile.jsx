import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import axios from 'axios';
import SolidStars from './SolidStars';

export default function ReviewTile({ review }) {
  const [showMore, setShowMore] = useState(false);
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const [photoURL, setPhotoURL] = useState('');
  const [helpfulClicked, setHelpfulClicked] = useState(false);

  const date = new Date(review.date);
  const formattedDate = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

  function handlePhotoModal(url) {
    setPhotoURL(url);
    setShowPhotoModal(true);
  }

  function handleHelpful() {
    axios.put('/reviews/helpful', { review_id: review.review_id })
      .then(() => {
        // eslint-disable-next-line no-param-reassign
        review.helpfulness += 1;
        setHelpfulClicked(true);
      })
      .catch((err) => {
        console.error('Failed to mark review helpful:', err);
      });
  }

  return (
    <div className="review-tile">
      <div className="review-tile-top">
        <SolidStars rating={review.rating} />
        <span>
          {review.reviewer_name}
          ,
          {' '}
          {formattedDate}
        </span>
      </div>
      <p className="review-summary">{review.summary}</p>
      <p className="review-body">
        {showMore ? review.body : review.body.substring(0, 250)}
        {review.body.length > 250
          ? <button type="button" onClick={() => setShowMore(!showMore)}>{showMore ? 'Show less' : 'Show more'}</button>
          : null}
      </p>

      {review.photos.length
        ? (
          <div className="review-photos">
            {review.photos.map((photo) => (
              <button
                type="button"
                key={photo.id}
                onClick={() => handlePhotoModal(photo.url)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') {
                    handlePhotoModal(photo.url);
                  }
                }}
              >
                <img
                  alt=""
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                  className="review-photo-thumb"
                  src={photo.url}
                />
              </button>

            ))}
          </div>
        )
        : null}

      {showPhotoModal && createPortal(
        <div id="review-photo-modal" data-testid="review-photo-modal">
          <img alt="" id="review-photo" src={photoURL} />
          <button type="button" onClick={() => setShowPhotoModal(false)}>Close</button>
        </div>,
        document.body,
      )}

      {review.recommend ? <div className="recommend">✓ I recommend this product</div> : null}

      {review.response
        ? (
          <div className="response">
            <div>Response:</div>
            <div>review.response</div>
          </div>
        ) : null}

      <div id="review-tile-buttons">
        <label htmlFor="helpful">
          Helpful?
          <button type="button" name="helpful" onClick={handleHelpful} disabled={helpfulClicked}>
            Yes (
            {review.helpfulness}
            )
          </button>
        </label>
        <button type="button">Report</button>
      </div>
    </div>
  );
}
