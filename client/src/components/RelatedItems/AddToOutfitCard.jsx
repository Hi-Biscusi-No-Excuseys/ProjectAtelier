import React from 'react';

export default function AddToOutfitCard({ product, addToOutfit }) {
  return (
    <div
      className="Card AddToOutfitButton"
      onClick={() => {
        addToOutfit(product);
      }}
      data-testid="add-to-outfit-card"
    >
      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        fontSize: '20px',
        height: '100%',
        flexDirection: 'column',
        width: '225px',
      }}
      >
        Add To Outfit
        <div style={{
          fontSize: '100px',
          justifySelf: 'center',
        }}
        >
          &#43;
        </div>
      </div>
    </div>
  );
}
