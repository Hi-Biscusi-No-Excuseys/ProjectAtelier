import React from 'react';
import Image from './productinfo/Image';
import Details from './productinfo/Details';
import Description from './productinfo/Description';

export default function ProductInfo() {
  return (
    <div className="ProductInfo">
      <Image />
      <Details />
      <Description />
    </div>
  );
}
