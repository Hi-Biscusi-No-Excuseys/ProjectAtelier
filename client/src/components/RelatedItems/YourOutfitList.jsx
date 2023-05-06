import React from 'react';
import RelatedProductCard from './RelatedProductCard';
import AddToOutfitCard from './AddToOutfitCard';
import styles from './Styles.jsx';
const { ProductContainer, Title } = styles;

export default function YourOutfitList( {productID, outfit, setOutfit} ) {
  return (
    <div id="your-outfit-list">
      <Title>YOUR OUTFIT</Title>
      <ProductContainer>
        <AddToOutfitCard productID={productID} setOutfit={setOutfit}/>
        {outfit.map((item) => {
          return <RelatedProductCard key={item.id} item={item}/>;
        })}

        {/* <RelatedProductCard />
        <RelatedProductCard /> */}
      </ProductContainer>
    </div>
  );
}
