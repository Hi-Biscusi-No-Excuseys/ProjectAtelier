import React, { useState } from 'react';
import RelatedProductCard from './RelatedProductCard';
import AddToOutfitCard from './AddToOutfitCard';

export default function YourOutfitList({
  product, outfit, addToOutfit, isRelatedCard, removeOutfit, setProduct,
}) {
  const [transformVal, setTransformVal] = useState(0);

  const handleForwardClick = () => {
    if (transformVal < outfit.length - 1) {
      setTransformVal(transformVal + 1);
    }
  };

  const handleBackwardClick = () => {
    if (transformVal > 0) {
      setTransformVal(transformVal - 1);
    }
  };

  return (
    <div id="your-outfit-list" data-testid="your-outfit-list">
      <div className="Title">YOUR OUTFIT</div>
      <div className="list-wrapper">
        <div className="DirectionalContainer">
          {transformVal > 0 && <div className="Directional" data-testid="backward" onClick={handleBackwardClick} id="backward">&#60;</div>}
          <div className="empty" />
          {outfit && (transformVal < outfit.length - 1) && <div className="Directional" data-testid="forward" onClick={handleForwardClick} id="forward">&#62;</div>}
        </div>
        <div className="ProductContainer">
          <AddToOutfitCard product={product} addToOutfit={addToOutfit} />
          <div className="CarouselView">
            <div className="InnerList" style={{ transform: `translateX(-${transformVal * 235}px)` }}>
              {outfit && outfit.map((item) => (
                <RelatedProductCard
                  key={item.id}
                  item={item}
                  isRelatedCard={isRelatedCard}
                  removeOutfit={removeOutfit}
                  setProduct={setProduct}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
