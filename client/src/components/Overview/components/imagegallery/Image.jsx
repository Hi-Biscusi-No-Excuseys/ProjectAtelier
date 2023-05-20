import React from 'react';

export default function Image({
  style, imgSwitch, index, currentIndex, expanded, zoomLevel,
}) {
  if (zoomLevel === 2.5) {
    return (
      <> </>
    );
  }
  return (
    <div className="iconContainer">
      {expanded
        ? (
          <img
            className={`expandedIcon ${currentIndex === index ? 'highlight' : ''}`}
            src={style.thumbnail_url}
            alt={index}
            onClick={() => { imgSwitch(style, index); }}
          />
        )
        : (
          <img
            className={`productIcon ${currentIndex === index ? 'highlight' : ''}`}
            src={style.thumbnail_url}
            alt={index}
            onClick={() => { imgSwitch(style, index); }}
          />
        )}
    </div>
  );
}
