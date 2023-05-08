import React, {useState, useEffect} from 'react';
import ProductInfo from './components/ProductInfo';
import StyleSelector from './components/StyleSelector';
import AddToCart from './components/AddToCart';
import ImageGallery from './components/ImageGallery';
import Description from './components/Description';
const axios = require('axios');

export default function Overview({productID}) {
  const [overview, setOverview] = useState([]);
  const [styles, setStyles] = useState([]);

  useEffect(()=>{
    axios.get(`/overview/products/${productID}/styles`)
      .then((response) => {
        setStyles(response.data.results);
      })
      .catch((err)=>{
        console.log(err);
      });
  }, [productID])

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
