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

  // const forceStyle = {
  //   background: 'linear-gradient(to right,  rgba(255,255,255,0) 0%,rgba(255,255,255,1) 100%)',
  // };

  return (
    <div id="related-items-list" data-testid='related-items-list'>
      <div className="Title">RELATED PRODUCTS</div>
      <div className="list-wrapper">
        <div className="DirectionalContainer">
          {transformVal > 0 && <div className="Directional" onClick={handleBackwardClick} data-testid='backward' id='backward'>&#60;</div>}
          <div className="empty"></div>
          {(transformVal < items.length - 2) && <div className="Directional" onClick={handleForwardClick} data-testid='forward' id='forward'>&#62;</div>}
        </div>
        <div className="ProductContainer">
          <div className="CarouselView">
            <div className="InnerList" style={{ transform: `translateX(-${transformVal * 235}px)` }}>
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
        </div>
      </div>
    </div>
  );
}
