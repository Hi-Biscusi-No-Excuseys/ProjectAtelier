import React, {useState, useEffect} from 'react';
import ProductInfo from './components/ProductInfo';
import StyleSelector from './components/StyleSelector';
import AddToCart from './components/AddToCart';
import ImageGallery from './components/ImageGallery';
import Description from './components/Description';
const axios = require('axios');

export default function Overview({product}) {
  const [overview, setOverview] = useState(product);
  const [styles, setStyles] = useState([]);
  const [reviews, setReviews] = useState(0);
  const [avg, setAvg] = useState(null);
  const [currentStyle, setCurrentStyle] = useState(undefined)

  useEffect(()=>{
    setOverview(product);
    axios.get(`/overview/products/${product.id}/styles`)
      .then((response) => {
        setStyles(response.data.results);
        setCurrentStyle(response.data.results[0]);
      })
      .catch((err) => {
        console.log('Unable to fetch data: ', err);
      });
    axios.get('/reviews/meta', { params: {product_id: product.id} })
      .then((response) => {
        const ratings = response.data.ratings;
        let numOfReviews = 0;
        let numOfStars = 0;
        for (const key in ratings) {
          numOfStars += (key * ratings[key]);
          numOfReviews += parseInt(ratings[key], 10);
        }
        const longAvg = numOfStars / numOfReviews;
        setAvg(Math.round(longAvg * 10) / 10);
        setReviews(parseInt(response.data.recommended.false, 10) + parseInt(response.data.recommended.true, 10))
      })
      .catch((err) => {
        console.error('Client failed to get reviews:', err);
      })
  }, [product])

  const styleSwap = (style) => {
    setCurrentStyle(style);
  }

  return (
    <div className="overview">
      <ImageGallery currentStyle={currentStyle}/>
      <div>
        <ProductInfo overview={overview} reviews={reviews} currentStyle={currentStyle} avg={avg}/>
        <StyleSelector styles={styles} currentStyle={currentStyle} styleSwap={styleSwap}/>
        <AddToCart overview={overview} styles={styles} currentStyle={currentStyle}/>
      </div>
      <Description overview={overview}/>
      </div>
  );
}
