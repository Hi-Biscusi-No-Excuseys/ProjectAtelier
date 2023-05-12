import React from 'react';
import axios from 'axios';
import styles from './Styles.jsx';
const { Card, AddToOutFitButton } = styles;

export default function AddToOutfitCard( {product, addToOutfit} ) {

  // const handleAddClick = (e) => {
  //   addToOutfit(product);
  // };

  return (
    <div>
      <Card id="add-to-outfit-card" onClick={(e) => {
        addToOutfit(product);
      }}>
        <AddToOutFitButton>&#43;</AddToOutFitButton>
      </Card>
    </div>
  );
}
