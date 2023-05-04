import React from 'react';
// import styled from 'styled-components';
import RelatedProductsList from './RelatedProductsList';
import YourOutfitList from './YourOutfitList';

import styles from './Styles.jsx';
const { ListContainer } = styles;

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   border-style: solid;
//   `;

export default function RelatedItems() {
  return (
    <div id="related-items-component">
    <ListContainer>
      <RelatedProductsList />
      <YourOutfitList />
    </ListContainer>
    </div>
  );
}
