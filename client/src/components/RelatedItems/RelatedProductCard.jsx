import React, { useState, useEffect } from 'react';
import PartialStars from '../RatingsReviews/components/PartialStars.jsx';
import axios from 'axios';
import styles from './Styles.jsx';
const { Card, CardImageContainer, CardImage, CardDetails, Star } = styles;

export default function RelatedProductCard({item, setProduct}) {
  // const [avg, setAvg] = useState(0);
  // console.log('What dis', item);

  let avg = 0;
  let numOfReviews = 0;
  let numOfStars = 0;
  for (const key in item.data.ratings) {
    numOfStars = numOfStars + (key * item.data.ratings[key]);
    numOfReviews = numOfReviews + parseInt(item.data.ratings[key], 10);
  }
  const longAvg = numOfStars / numOfReviews;
  avg = (Math.round(longAvg * 10) / 10);


  return (
    <div>
      <Card id="product-card">
        <CardImageContainer onClick={(e) => {
          // console.log('CLICKED: ', item.id);
          setProduct(item);
        }}>
          <CardImage src={item.results[0].photos[0].url}/>
          <Star>&#x2729;</Star>
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
