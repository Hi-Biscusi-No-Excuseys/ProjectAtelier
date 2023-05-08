import React from 'react';

export default function Description({overview}) {
console.log('these are overview features: ', overview);
const features = overview.features
  return (
    <div className="productDescription">
      <span><strong>{overview.slogan}</strong></span>
      <div className="descBox">
      <div>
        {/* eslint-disable-next-line max-len */}
        <p>{overview.description}</p>
      </div>
      <div>
        {features?.map((list, i) => {
          if (list.value !== null) {
            return <ul key={i}>{list.feature}, {list.value}</ul>
          } else {
            return <ul key={i}>{list.feature}</ul>
          }
        })}
      </div>
      </div>
    </div>
  );
}
