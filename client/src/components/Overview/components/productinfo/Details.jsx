import React from 'react';
import PartialStars from '../../../RatingsReviews/components/PartialStars';

export default function Details({
  overview, reviews, currentStyle, avg,
}) {
  return (
    <div className="productDetails" data-testid="productdetails">
      <PartialStars avg={avg} />
      <div className="productReviews">
        <div>
          {reviews}
          {' '}
          Reviews
        </div>
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
      </div>
      <div className="productDetailsContainer">
        <span className="productCategory">{overview.category}</span>
        <span className="productName">{overview.name}</span>
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
      <div className="socialMediaContainer">
        <a data-pin-do="buttonBookmark" data-pin-tall="true" href="https://www.pinterest.com/pin/create/button/">Save</a>
        <div className="fb-share-button" data-href="http://13.57.236.58:3000/" data-layout="button" data-size="large"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2F13.57.236.58%3A3000%2F&amp;src=sdkpreparse" className="fb-xfbml-parse-ignore" rel="noreferrer">Share</a></div>
        <a
          className="twitter-share-button"
          href="https://twitter.com/intent/tweet"
          data-size="large"
          data-text="custom share text"
          data-url="https://dev.twitter.com/web/tweet-button"
          data-hashtags="example,demo"
          data-via="twitterdev"
          data-related="twitterapi,twitter"
        >
          Tweet
        </a>
      </div>
    </div>
  );
}
