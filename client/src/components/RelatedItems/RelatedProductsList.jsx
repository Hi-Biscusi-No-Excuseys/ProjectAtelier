import React, { useState } from 'react';
import RelatedProductCard from './RelatedProductCard';

export default function RelatedProductsList({
  product, items, setProduct, setCompare, isRelatedCard, setShowCompare
}) {
  // console.log('The ITEMS passed to the list:', items);

  const [transformVal, setTransformVal] = useState(0);

  const handleForwardClick = () => {
    // console.log('Forward clicked!', items.length);
    if (transformVal < items.length - 1) {
      setTransformVal(transformVal + 1);
    }
  };

  const handleBackwardClick = () => {
    // console.log('Backwards clicked!');
    if (transformVal > 0) {
      setTransformVal(transformVal - 1);
    }
  };

  return (
    <div id="related-items-list">
      <div className="Title">RELATED PRODUCTS</div>
      <div className="ProductContainer">
        <div className="Directional" onClick={handleBackwardClick}>&#60;</div>
        <div className="CarouselView">
          <div className="InnerList" style={{ transform: `translateX(-${transformVal * 272.22}px)` }}>
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
        <div className="Directional" onClick={handleForwardClick}>&#62;</div>
      </div>
    </div>
  );
}
