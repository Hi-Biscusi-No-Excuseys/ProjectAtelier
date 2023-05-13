import React, { useState } from 'react';
import PartialStars from '../RatingsReviews/components/PartialStars';
import styles from './Styles';

const {
  Card, CardImageContainer, CardImage, CardDetails, Star, Cancel,
} = styles;

export default function RelatedProductCard({
  item, setProduct, setCompare, isRelatedCard, removeOutfit,
}) {
  // const [avg, setAvg] = useState(0);
  // console.log('What dis', item);
  const [showCompare, setShowCompare] = useState(false);

  let avg = 0;
  let numOfReviews = 0;
  let numOfStars = 0;
  for (const key in item.ratings) {
    numOfStars += (key * item.ratings[key]);
    numOfReviews += parseInt(item.ratings[key], 10);
  }
  const longAvg = numOfStars / numOfReviews;
  avg = (Math.round(longAvg * 10) / 10);

  const handleActionClick = () => {
    console.log('Action clicked.', item.id, item);
    if (isRelatedCard) {
      setCompare(item);
    } else {
      removeOutfit(item);
    }
  };

  const handleImageClick = () => {
    console.log('Image Clicked: ', item.id);
    setProduct(item);
  };

  return (
    <div>
      <Card id="product-card">
        <CardImageContainer>
          <CardImage src={item.results[0].photos[0].url} onClick={handleImageClick} />
          {isRelatedCard && <Star onClick={handleActionClick}>&#x2605;</Star>}
          {!isRelatedCard && <Cancel onClick={handleActionClick}>&#x2716;</Cancel>}
        </CardImageContainer>
        <CardDetails>
          <div>{item.category}</div>
          <div>{item.name}</div>
          <div>{item.default_price}</div>
          <PartialStars avg={avg} />
        </CardDetails>
      </Card>
    </div>
  );
}
