import React from 'react';
import RelatedProductCard from './RelatedProductCard';
import AddToOutfitCard from './AddToOutfitCard';
import styles from './Styles.jsx';
const { ProductContainer, Title } = styles;

export default function YourOutfitList() {
  return (
    <div id="your-outfit-list">
      <Title>YOUR OUTFIT</Title>
      <ProductContainer>
        <AddToOutfitCard />
        <RelatedProductCard />
        <RelatedProductCard />
      </ProductContainer>
    </div>
  );
}
