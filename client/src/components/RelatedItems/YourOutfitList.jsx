import React from 'react';
import RelatedProductCard from './RelatedProductCard';
import AddToOutfitCard from './AddToOutfitCard';
import styles from './Styles';

const { ProductContainer, Title } = styles;

export default function YourOutfitList({
  product, outfit, addToOutfit, isRelatedCard, removeOutfit,
}) {
  // need to make sure we can remove an Outfit item.

  return (
    <div id="your-outfit-list">
      <Title>YOUR OUTFIT</Title>
      <ProductContainer>
        <AddToOutfitCard product={product} addToOutfit={addToOutfit} />
        {outfit.map((item) => (
          <RelatedProductCard
            key={item.id}
            item={item}
            isRelatedCard={isRelatedCard}
            removeOutfit={removeOutfit}
          />
        ))}
      </ProductContainer>
    </div>
  );
}
