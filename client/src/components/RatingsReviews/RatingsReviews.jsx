import React from 'react';
import RatingBreakdown from './components/RatingBreakdown.jsx';
import ProductBreakdown from './components/ProductBreakdown.jsx';
import SortOptions from './components/SortOptions.jsx';
import ReviewsList from './components/ReviewsList.jsx';

export default function RatingsReviews({productID}) {

  return (
    <div id='reviews'>
      <h3>Ratings & Reviews</h3>

      <div id='breakdown-list'>
        <aside>
          <RatingBreakdown productID={productID}/>
          <ProductBreakdown productID={productID}/>
        </aside>

        <div id='sort-and-list'>
          <SortOptions />
          <ReviewsList productID={productID}/>
        </div>
      </div>

    </div>
  );
}
