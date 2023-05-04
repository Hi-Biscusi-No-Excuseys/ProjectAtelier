import React from 'react';
import RelatedProductCard from './RelatedProductCard';
import styles from './Styles.jsx';
const { ProductContainer, Title } = styles;

export default function YourOutfitList() {
  return (
    <div id="your-outfit-list">
      <Title>YOUR OUTFIT</Title>
      <ProductContainer>
        <RelatedProductCard />
        <RelatedProductCard />
        <RelatedProductCard />
        <RelatedProductCard />
      </ProductContainer>
  </div>
  );
}
