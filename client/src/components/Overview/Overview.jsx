import React from 'react';
import ProductInfo from './components/ProductInfo';
import StyleSelector from './components/StyleSelector';
import AddToCart from './components/AddToCart';

export default function Overview() {
  return (
    <div className="overview">
      <ProductInfo />
      <StyleSelector />
      <AddToCart />
    </div>
  );
}
