import React from 'react';

export default function QuarterStars ({rating}) {
  const totalStars = 5;
  const activeStars = rating;

  return (
    <span>
      {[...new Array(totalStars)].map((arr, index) => {
        return index < activeStars ? '★' : '☆';
      })}
    </span>
  )
}