import React from 'react';
import styles from './Styles';

const { Card, AddToOutFitButton } = styles;

export default function AddToOutfitCard({ product, addToOutfit }) {
  // const handleAddClick = (e) => {
  //   addToOutfit(product);
  // };

  return (
    <div>
      <Card
        id="add-to-outfit-card"
        onClick={() => {
          addToOutfit(product);
        }}
      >
        <AddToOutFitButton>&#43;</AddToOutFitButton>
      </Card>
    </div>
  );
}
