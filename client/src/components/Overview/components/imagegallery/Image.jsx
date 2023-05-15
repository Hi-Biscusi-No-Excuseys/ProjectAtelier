import React from 'react';

export default function Image({ style, imgSwitch }) {
  return (
    <div>
      <img className="productIcon" id="test" src={style.thumbnail_url} alt={style.name} height="75" width="75" onClick={() => { imgSwitch(style); }} />
    </div>
  );
}
