import React from 'react';
import RelatedProductCard from './RelatedProductCard';
import AddToOutfitCard from './AddToOutfitCard';
import styles from './Styles.jsx';
const { ProductContainer, Title } = styles;

export default function YourOutfitList( {product, outfit, addToOutfit} ) {
  return (
    <div id="your-outfit-list">
      <Title>YOUR OUTFIT</Title>
      <ProductContainer>
        <AddToOutfitCard product={product} addToOutfit={addToOutfit}/>
        {outfit.map((item) => {
          // console.log('>>>> What outfit item:', item.id, item);
          return <RelatedProductCard key={item.id} item={item}/>;
        })}
      </ProductContainer>
    </div>
  );
}
