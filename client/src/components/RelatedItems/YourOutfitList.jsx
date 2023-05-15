import React from 'react';
import RelatedProductCard from './RelatedProductCard';
import AddToOutfitCard from './AddToOutfitCard';

export default function YourOutfitList({
  product, outfit, addToOutfit, isRelatedCard, removeOutfit, setProduct,
}) {
  // need to make sure we can remove an Outfit item.

  return (
    <div id="your-outfit-list">
      <div className="Title">YOUR OUTFIT</div>
      <div className="ProductContainer">
        <AddToOutfitCard product={product} addToOutfit={addToOutfit} />
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
  );
}
