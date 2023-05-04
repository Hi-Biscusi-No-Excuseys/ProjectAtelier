import React from 'react';
// import styled from 'styled-components';
import RelatedProductCard from './RelatedProductCard';

import styles from './Styles.jsx';
const { ProductContainer, Title } = styles;

// const Container = styled.div`
//   display: flex;
//   flex-direction: row;
//   border-style: solid;
//   `;

// const Title = styled.div`
// display: block;
// border-style: solid;
// `;

export default function YourOutfitList() {
  return (
    <div id="your-outfit-list">
      <Title>YOUR OUTFIT</Title>
      <ProductContainer>
        <RelatedProductCard />
        <RelatedProductCard />
        <RelatedProductCard />
        <RelatedProductCard />
      </ProductContainer>
  </div>
  );
}
