import React, { useState, useEffect } from 'react';
import ProductInfo from './components/ProductInfo';
import StyleSelector from './components/StyleSelector';
import AddToCart from './components/AddToCart';
import ImageGallery from './components/ImageGallery';
import Description from './components/Description';

const axios = require('axios');

export default function Overview({ product }) {
  const [overview, setOverview] = useState(product);
  const [styles, setStyles] = useState([]);
  const [reviews, setRevs] = useState(0);
  const [avg, setAvg] = useState(null);
  const [currentStyle, setCurrentStyle] = useState(undefined);

  useEffect(() => {
    setOverview(product);
    axios.get(`/overview/products/${product.id}/styles`)
      .then((res) => {
        setStyles(res.data.results);
        setCurrentStyle(res.data.results[0]);
      })
      .catch((err) => {
        console.error('Unable to fetch data: ', err);
      });
    axios.get('/reviews/meta', { params: { product_id: product.id } })
      .then((res) => {
        const { ratings } = res.data;
        let numOfReviews = 0;
        let numOfStars = 0;
        for (const key in ratings) {
          numOfStars += (key * ratings[key]);
          numOfReviews += parseInt(ratings[key], 10);
        }
        const longAvg = numOfStars / numOfReviews;
        setAvg(Math.round(longAvg * 10) / 10);
        setRevs(parseInt(res.data.recommended.false, 10) + parseInt(res.data.recommended.true, 10));
      })
      .catch((err) => {
        console.error('Client failed to get reviews:', err);
      });
  }, [product]);

  const styleSwap = (style) => {
    setCurrentStyle(style);
  };

  return (
    <div className="overview" data-testid="overviewtest">
      <div className="productContainer">
        <ImageGallery currentStyle={currentStyle} />
        <div className="product">
          <ProductInfo overview={overview} reviews={reviews} currentStyle={currentStyle} avg={avg} />
          <StyleSelector styles={styles} currentStyle={currentStyle} styleSwap={styleSwap} />
          <AddToCart currentStyle={currentStyle} />
        </div>
      </div>
      <Description overview={overview} />
    </div>
  );
}
