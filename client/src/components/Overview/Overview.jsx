import React, {useState, useEffect} from 'react';
import ProductInfo from './components/ProductInfo';
import StyleSelector from './components/StyleSelector';
import AddToCart from './components/AddToCart';
import ImageGallery from './components/ImageGallery';
import Description from './components/Description';
const axios = require('axios');

<<<<<<< HEAD
export default function Overview({productID}) {
=======
export default function Overview({product}) {
>>>>>>> overview-api
  const [overview, setOverview] = useState({});
  const [styles, setStyles] = useState([]);

  useEffect(()=>{
    axios.get(`/overview/products/${product.id}/styles`)
      .then((response) => {
        setStyles(response.data.results);
      })
      .catch((err) => {
        console.log('Unable to fetch data: ', err);
      });
    axios.get(`/overview/products/${product.id}`)
      .then((response) => {
        setOverview(response.data);
      })
      .catch((err) => {
        console.log('Unable to fetch data: ', err);
      })
  }, [product])

console.log('this is overview: ', overview);
console.log('this is style: ', styles);

  return (
    <div className="overview">
      <ImageGallery styles={styles}/>
      <div>
        <ProductInfo overview={overview} styles={styles}/>
        <StyleSelector styles={styles}/>
        <AddToCart />
      </div>
      <Description overview={overview}/>
      </div>
  );
}
