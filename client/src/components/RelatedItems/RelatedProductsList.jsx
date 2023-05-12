import React from 'react';
import RelatedProductCard from './RelatedProductCard';
import styles from './Styles.jsx';
const { ProductContainer, Title } = styles;

export default function RelatedProductsList({ product, items, setProduct }) {
  // console.log('The ITEMS passed to the list:', items);

  return (
    <div id="related-items-list">
      <Title>RELATED PRODUCTS</Title>
      <ProductContainer>
        {items.map((item) => {
          return product.id !== item.id && <RelatedProductCard key={item.id} item={item} setProduct={setProduct}/>;
        })}
      </ProductContainer>
    </div>
  );
}
