import React from 'react';
import RelatedProductCard from './RelatedProductCard';
import styles from './Styles.jsx';
const { ProductContainer, Title } = styles;

export default function RelatedProductsList({ items, setProduct }) {


  // need to make sure we dont display items already in our Outfit list and/or the current Product.
  // At the moment, both display.

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
