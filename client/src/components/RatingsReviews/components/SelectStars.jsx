import React from 'react';

export default function SelectStars({ activeStar, setActiveStar }) {
  const handleClick = (i) => {
    setActiveStar(i + 1);
  };

  return (
    <span id="select-stars">
      {[...new Array(5)].map((_, i) => (i < activeStar ? <button type="button" onClick={() => handleClick(i)}>★</button>
        : <button type="button" onClick={() => handleClick(i)}>☆</button>))}
    </span>
  );
}
