import React from 'react';

export default function Details({overview}) {
  console.log(overview);
  return (
    <div className="productDetails">
      <div>⭐️⭐️⭐️⭐️⭐️</div>
      <div>1 Review</div>
      <button type="button" className="reviewScrollButton">Read All Reviews</button>
      <h3>{overview.category}</h3>
      <h1>{overview.name}</h1>
      <p>${overview.default_price}</p>
    </div>
  );
}
