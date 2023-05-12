import React, { useState, useEffect } from 'react';
import PartialStars from '../RatingsReviews/components/PartialStars.jsx';
import axios from 'axios';
import styles from './Styles.jsx';
const { Card, CardImageContainer, CardImage, CardDetails, Star } = styles;

export default function RelatedProductCard({item, setProduct, setCompare}) {
  // const [avg, setAvg] = useState(0);
  // console.log('What dis', item);
  const [showCompare, setShowCompare] = useState(false);

  let avg = 0;
  let numOfReviews = 0;
  let numOfStars = 0;
  for (const key in item.ratings) {
    numOfStars = numOfStars + (key * item.ratings[key]);
    numOfReviews = numOfReviews + parseInt(item.ratings[key], 10);
  }
  const longAvg = numOfStars / numOfReviews;
  avg = (Math.round(longAvg * 10) / 10);

  const handleStarClick = (e) => {
    console.log('Compare Clicked.', item.id);
    setCompare(item);
  };

  const handleImageClick = (e) => {
    console.log('Image Clicked: ', item.id);
    setProduct(item);
  };


  return (
    <div>
      <Card id="product-card">
        <CardImageContainer>
            <CardImage src={item.results[0].photos[0].url} onClick={handleImageClick}></CardImage>
          <Star onClick={handleStarClick}>&#x2729;</Star>
        </CardImageContainer>
        <CardDetails>
          <div>{item.category}</div>
          <div>{item.name}</div>
          <div>{item.default_price}</div>
          <PartialStars avg={avg}/>
        </CardDetails>
      </Card>
    </div>
  );
}
