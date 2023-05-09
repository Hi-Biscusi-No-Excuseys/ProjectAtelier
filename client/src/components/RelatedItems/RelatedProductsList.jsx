import React from 'react';
import RelatedProductCard from './RelatedProductCard';
import styles from './Styles.jsx';
const { ProductContainer, Title } = styles;

export default function RelatedProductsList({ items, setProduct }) {



  return (
    <div id="related-items-list">
      <Title>RELATED PRODUCTS</Title>
      <ProductContainer>
        {items.map((item) => {
          return <RelatedProductCard key={item.id} item={item} setProduct={setProduct}/>;
        })}
      </ProductContainer>
    </div>
  );
}
