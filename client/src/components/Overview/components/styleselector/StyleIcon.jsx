import React from 'react';

export default function StyleIcon({ style, selected, styleSwap }) {
  return (
    <div data-testid="styleicon">
      <img
        className="styleIcon"
        src={style.photos[0]?.thumbnail_url}
        alt={style.name}
        height="75"
        width="75"
        onClick={() => { styleSwap(style); }}
      />
      {selected && <input label="checked" type="checkbox" checked readOnly />}
    </div>
  );
}
