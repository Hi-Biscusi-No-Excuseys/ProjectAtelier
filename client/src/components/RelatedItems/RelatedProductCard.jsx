import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import PartialStars from '../RatingsReviews/components/PartialStars';

export default function RelatedProductCard({
  item, setProduct, setCompare, isRelatedCard, removeOutfit, setShowCompare,
}) {
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
    if (isRelatedCard) {
      setCompare(item);
      setShowCompare(true);
    } else {
      removeOutfit(item);
    }
  };

  const handleImageClick = () => {
    setProduct(item);
  };

  return (
    <div className="Card" data-testid="product-card">
      <div className="CardImageContainer">
        <img className="CardImage" data-testid="card-image" src={item.results[0].photos[0].url} onClick={handleImageClick} alt="Product Image" />
        <div className="IconContainer">
          {isRelatedCard && <div className="Star" onClick={handleActionClick}><FontAwesomeIcon icon={faStar} beat /></div>}
          {!isRelatedCard && <div className="Cancel" onClick={handleActionClick}><FontAwesomeIcon icon={faCircleXmark}/></div>}
        </div>
      </div>
      <div className="CardDetails">
        <div data-testid="card-category">{item.category}</div>
        <div data-testid="card-name" style={{ fontSize: '16px', fontWeight: 'bold' }}>{item.name}</div>
        <div data-testid="card-price" style={{ fontSize: '12px' }}>
          $
          {item.default_price}
        </div>
      </div>
      <PartialStars avg={avg} style={{ justifySelf: 'flex-end' }} />
    </div>
  );
}
