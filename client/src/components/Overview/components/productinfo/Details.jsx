import React from 'react';

export default function Details({overview, reviews, currentStyle}) {

  return (
    <div className="productDetails">
      <div>⭐️⭐️⭐️⭐️⭐️</div>
      <div>{reviews} Review</div>
      {/* change this to proper review ID */}
      <button type="button" className="reviewScrollButton" onClick={()=>{
        let element = document.getElementById('reviews-list')
        element.scrollIntoView({ behavior: 'smooth' });
      }}>Read All Reviews</button>
      <h3>{overview.category}</h3>
      <h1>{overview.name}</h1>
      {currentStyle?.sale_price === null ? <p>${overview.default_price}</p> : <p className='sale'>${currentStyle?.sale_price} <strike id='strikethrough'>${overview.default_price}</strike></p>}
    </div>
  );
}
