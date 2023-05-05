import React from 'react';
import ProductInfo from './components/ProductInfo';
import StyleSelector from './components/StyleSelector';
import AddToCart from './components/AddToCart';
import ImageGallery from './components/ImageGallery';
import Description from './components/Description';


export default function Overview() {
  return (
    <div className="overview">
      <ImageGallery />
      <div>
        <ProductInfo />
        <StyleSelector />
        <AddToCart />
      </div>
      <Description />
      </div>
  );
}
