import React, { useState } from 'react';

export default function SelectStars({ activeStar, setActiveStar }) {
  const handleClick = (i) => {
    setActiveStar(i + 1);
  };
console.log(activeStar)
  return (
    <span style={{cursor: 'pointer'}}>
      {[...new Array(5)].map((_, i) => (i < activeStar ? <span onClick={() => handleClick(i)}>★</span> : <span onClick={() => handleClick(i)}>☆</span>))}
    </span>
  );
}
