import React from 'react';
import RelatedProductCard from './RelatedProductCard';
import styles from './Styles';

const { ProductContainer, Title } = styles;

export default function RelatedProductsList({
  product, items, setProduct, setCompare, isRelatedCard,
}) {
  // console.log('The ITEMS passed to the list:', items);

  return (
    <div id="related-items-list">
      <Title>RELATED PRODUCTS</Title>
      <ProductContainer>
        {items.map((item) => product.id !== item.id
         && (
         <RelatedProductCard
           key={item.id}
           item={item}
           setProduct={setProduct}
           setCompare={setCompare}
           isRelatedCard={isRelatedCard}
         />
         ))}
      </ProductContainer>
    </div>
  );
}
