import React from 'react';
import Details from './productinfo/Details';

export default function ProductInfo({overview}) {
  return (
    <div className="ProductInfo">
      <Details overview={overview}/>
    </div>
  );
}
