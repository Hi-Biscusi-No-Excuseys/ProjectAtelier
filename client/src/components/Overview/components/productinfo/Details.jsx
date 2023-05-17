import React from 'react';
import PartialStars from '../../../RatingsReviews/components/PartialStars';

export default function Details({
  overview, reviews, currentStyle, avg,
}) {
  return (
    <div className="productDetails" data-testid="productdetails">
      <PartialStars avg={avg} />
      <div>
        {reviews}
        {' '}
        Reviews
      </div>
      {/* change this to proper review ID */}
      <button
        type="button"
        className="reviewScrollButton"
        onClick={() => {
          const element = document.getElementById('reviews-list');
          element.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        Read All Reviews
      </button>
      <h3 className="productCategory">{overview.category}</h3>
      <h1 className="productName">{overview.name}</h1>
      {currentStyle?.sale_price === null ? (
        <p>
          $
          {overview.default_price}
        </p>
      ) : (
        <p className="sale">
          $
          {currentStyle?.sale_price}
          {' '}
          <strike id="strikethrough">
            $
            {overview.default_price}
          </strike>
        </p>
      )}
    </div>
  );
}
