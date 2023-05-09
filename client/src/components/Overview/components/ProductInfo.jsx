import React from 'react';
import Details from './productinfo/Details';

export default function ProductInfo({overview, reviews}) {
  return (
    <div className="ProductInfo">
      <Details overview={overview} reviews={reviews}/>
    </div>
  );
}
