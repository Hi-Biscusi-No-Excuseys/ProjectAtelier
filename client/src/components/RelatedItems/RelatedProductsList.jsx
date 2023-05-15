import React, { useState } from 'react';
import RelatedProductCard from './RelatedProductCard';

export default function RelatedProductsList({
  product, items, setProduct, setCompare, isRelatedCard, setShowCompare,
}) {
  // console.log('The ITEMS passed to the list:', items);

  return (
    <div id="related-items-list">
      <div className="Title">RELATED PRODUCTS</div>
      <div className="ProductContainer">
        {items.map((item) => product.id !== item.id
         && (
         <RelatedProductCard
           key={item.id}
           item={item}
           setProduct={setProduct}
           setCompare={setCompare}
           isRelatedCard={isRelatedCard}
           setShowCompare={setShowCompare}
         />
         ))}
      </div>
    </div>
  );
}
