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
      .catch((err) => {
        console.log('Unable to fetch data: ', err);
      });
    axios.get(`/overview/products/${productID}`)
      .then((response) => {
        setOverview(response.data);
      })
      .catch((err) => {
        console.log('Unable to fetch data: ', err);
      })
  }, [productID])

console.log('this is overview: ', overview);
console.log('this is style: ', styles);

  return (
    <div className="overview">
      <ImageGallery styles={styles}/>
      <div>
        <ProductInfo overview={overview}/>
        <StyleSelector styles={styles}/>
        <AddToCart styles={styles}/>
      </div>
      <Description overview={overview}/>
      </div>
  );
}
