import React, { useState } from 'react';
import RelatedProductCard from './RelatedProductCard';
import AddToOutfitCard from './AddToOutfitCard';

export default function YourOutfitList({
  product, outfit, addToOutfit, isRelatedCard, removeOutfit, setProduct,
}) {
  // need to make sure we can remove an Outfit item.

  const [transformVal, setTransformVal] = useState(0);

  const handleForwardClick = () => {
    // console.log('Forward clicked!', items.length);
    if (transformVal < outfit.length - 1) {
      setTransformVal(transformVal + 1);
    }
  };

  const handleBackwardClick = () => {
    // console.log('Backwards clicked!');
    if (transformVal > 0) {
      setTransformVal(transformVal - 1);
    }
  };

  return (
    <div id="your-outfit-list">
      <div className="Title">YOUR OUTFIT</div>
      <div className="ProductContainer">
        <AddToOutfitCard product={product} addToOutfit={addToOutfit} />
        {transformVal > 0 && <div className="Directional" onClick={handleBackwardClick}>&#60;</div>}
        <div className="CarouselView">
          <div className="InnerList" style={{ transform: `translateX(-${transformVal * 272.22}px)` }}>
            {outfit.map((item) => (
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
        {(transformVal < outfit.length - 1) && <div className="Directional" onClick={handleForwardClick}>&#62;</div>}
      </div>
    </div>
  );
}
