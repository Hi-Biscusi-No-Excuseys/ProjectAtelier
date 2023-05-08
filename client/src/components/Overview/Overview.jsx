import React, {useState, useEffect} from 'react';
import ProductInfo from './components/ProductInfo';
import StyleSelector from './components/StyleSelector';
import AddToCart from './components/AddToCart';
import ImageGallery from './components/ImageGallery';
import Description from './components/Description';
const axios = require('axios');

export default function Overview({product}) {
  const [overview, setOverview] = useState([]);
  const [styles, setStyles] = useState([]);

  useEffect(()=>{
    axios.get(`/overview/products/${product}/styles`)
      .then((response) => {
        setStyles(response.data);
      });
  }, [])

  return (
    <div className="overview">
      <ImageGallery styles={styles}/>
      <div>
        <ProductInfo styles={styles}/>
        <StyleSelector styles={styles}/>
        <AddToCart styles={styles}/>
      </div>
      <Description styles={styles}/>
      </div>
  );
}
