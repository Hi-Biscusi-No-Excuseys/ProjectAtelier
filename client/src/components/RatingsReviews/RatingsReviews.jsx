import React from 'react';
import RatingBreakdown from './components/RatingBreakdown.jsx';
import ProductBreakdown from './components/ProductBreakdown.jsx';
import SortOptions from './components/SortOptions.jsx';
import ReviewsList from './components/ReviewsList.jsx';

export default function RatingsReviews({product}) {

  return (
    <div id='reviews'>
      <h3>Ratings & Reviews</h3>

      <div id='breakdown-list'>
        <aside>
          <RatingBreakdown product={product.id}/>
          <ProductBreakdown product={product.id}/>
        </aside>

        <div id='sort-and-list'>
          <SortOptions />
          <ReviewsList product={product.id}/>
        </div>
      </div>

    </div>
  );
}
