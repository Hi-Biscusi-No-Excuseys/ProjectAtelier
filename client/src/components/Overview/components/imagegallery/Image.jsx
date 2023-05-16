import React from 'react';

export default function Image({
  style, imgSwitch, index, currentIndex,
}) {
  return (
    <div className="iconContainer">
      <img
        className={`productIcon ${currentIndex === index ? 'highlight' : ''}`}
        src={style.thumbnail_url}
        alt={style.name}
        onClick={() => { imgSwitch(style, index); }}
      />
    </div>
  );
}
