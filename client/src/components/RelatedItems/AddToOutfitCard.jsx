import React from 'react';

export default function AddToOutfitCard({ product, addToOutfit }) {
  // const handleAddClick = (e) => {
  //   addToOutfit(product);
  // };

  const forceStyle = {
    alignSelf: 'center',
    fontSize: '100px',
    width: '100px',
    margin: 'auto',
  };

  return (
    <div
      className="Card AddToOutfitButton"
      onClick={() => {
        addToOutfit(product);
      }}
      data-testid='add-to-outfit-card'
    >
      <div style={forceStyle}>&#43;</div>
    </div>
  );
}
