import React from 'react';
import RelatedProductCard from './RelatedProductCard';
import styles from './Styles.jsx';
const { ProductContainer, Title } = styles;

export default function RelatedProductsList() {
  return (
    <div id="related-items-list">
      <Title>RELATED PRODUCTS</Title>
      <ProductContainer>
        <RelatedProductCard />
        <RelatedProductCard />
        <RelatedProductCard />
        <RelatedProductCard />
      </ProductContainer>
    </div>
  );
}
