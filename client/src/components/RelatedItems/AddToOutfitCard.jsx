import React from 'react';

export default function AddToOutfitCard({ product, addToOutfit }) {
  // const handleAddClick = (e) => {
  //   addToOutfit(product);
  // };

  const wtfStyle = {
    alignSelf: 'center',
    fontSize: '200px',
  };

  return (
    <div
      className="Card"
      onClick={() => {
        addToOutfit(product);
      }}
      data-testid='add-to-outfit-card'
    >
      <div className="AddToOutfitButton" style={wtfStyle}>&#43;</div>
    </div>
  );
}
