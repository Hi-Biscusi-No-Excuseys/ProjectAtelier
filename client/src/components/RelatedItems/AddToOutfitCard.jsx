import React from 'react';
import axios from 'axios';
import styles from './Styles.jsx';
const { Card, AddToOutFitButton } = styles;

export default function AddToOutfitCard( {productID, setOutfit} ) {

  const handleAddClick = (e) => {
    // will make request to /overview/products/${productID}
  };

  return (
    <div>
      <Card id="add-to-outfit-card" onClick={handleAddClick}>
        <AddToOutFitButton>&#43;</AddToOutFitButton>
      </Card>
    </div>
  );
}
