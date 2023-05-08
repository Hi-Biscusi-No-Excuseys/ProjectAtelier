import React from 'react';

export default function Details({overview}) {

  return (
    <div className="productDetails">
      <div>⭐️⭐️⭐️⭐️⭐️</div>
      <div>1 Review</div>
      {/* change this to proper review ID */}
      <button type="button" className="reviewScrollButton" onClick={()=>{
        let element = document.getElementById('reviews-list')
        element.scrollIntoView({ behavior: 'smooth' });
      }}>Read All Reviews</button>
      <h3>{overview.category}</h3>
      <h1>{overview.name}</h1>
      <p>${overview.default_price}</p>
    </div>
  );
}
