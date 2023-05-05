import React from 'react';
import RatingBreakdown from './components/RatingBreakdown.jsx';
import ProductBreakdown from './components/ProductBreakdown.jsx';
import SortOptions from './components/SortOptions.jsx';
import ReviewsList from './components/ReviewsList.jsx';

export default function RatingsReviews() {
  return (
    <>
      <h3>Ratings & Reviews</h3>
      <aside>
        <RatingBreakdown />
        <ProductBreakdown />
      </aside>
      <SortOptions />
      <ReviewsList />
    </>
  );
}
