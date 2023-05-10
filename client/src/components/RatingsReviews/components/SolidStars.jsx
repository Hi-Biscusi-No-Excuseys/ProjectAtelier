import React from 'react';

export default function SolidStars ({rating}) {
  const activeStars = rating;

  return (
    <span>
      {[...new Array(5)].map((arr, index) => {
        return index < activeStars ? '★' : '☆';
      })}
    </span>
  )
}