import React from 'react';
import axios from 'axios';
import styles from './Styles.jsx';
const { Card } = styles;

export default function AddToOutfitCard( {productID, setOutfit} ) {

  const handleAddClick = (e) => {
    // will make request to /overview/products/${productID}
  };

  return (
    <div>
      <Card id="add-to-outfit-card" onClick={handleAddClick}>
        <p>Hello I&apos;m gonna be a button. CLICK ME TO ADD TO OUTFIT</p>
      </Card>
    </div>
  );
}
