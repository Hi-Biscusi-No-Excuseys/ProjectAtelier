import React, {useState, useEffect} from 'react';
import ProductInfo from './components/ProductInfo';
import StyleSelector from './components/StyleSelector';
import AddToCart from './components/AddToCart';
import ImageGallery from './components/ImageGallery';
import Description from './components/Description';
const axios = require('axios');

export default function Overview() {
  const [overview, setOverview] = useState([]);

  useEffect(()=>{
    axios.get('/overview/products')
      .then((response) => {
        console.log(response);
      });
  }, [])

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
