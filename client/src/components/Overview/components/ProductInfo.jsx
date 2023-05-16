import React from 'react';
import Details from './productinfo/Details';

export default function ProductInfo({
  overview, reviews, currentStyle, avg,
}) {
  return (
    <div className="ProductInfo">
      <Details overview={overview} reviews={reviews} currentStyle={currentStyle} avg={avg} />
    </div>
  );
}
