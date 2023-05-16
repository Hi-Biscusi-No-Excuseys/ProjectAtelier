import React, { useState } from 'react';

export default function Favorite() {
  const [favorite, setFavorite] = useState(false);
  // need conditional here if item is already favorited &#9733;
  if (!favorite) {
    return (
      <div className="favorite">
        <button
          type="button"
          onClick={() => {
            setFavorite(!favorite);
          }}
        >
          &#9734;
        </button>
      </div>
    );
  }
  return (
    <div className="favorite">
      <button
        type="button"
        onClick={() => {
          setFavorite(!favorite);
        }}
      >
        &#9733;
      </button>
    </div>
  );
}
