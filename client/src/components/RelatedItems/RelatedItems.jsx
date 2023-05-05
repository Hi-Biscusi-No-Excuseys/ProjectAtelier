import React from 'react';
import RelatedProductsList from './RelatedProductsList';
import YourOutfitList from './YourOutfitList';
import Comparison from './Comparison';

import styles from './Styles.jsx';
const { ListContainer } = styles;

export default function RelatedItems() {
  return (
    <div id="related-items-component">
    <ListContainer>
      <RelatedProductsList />

      {/* adding just to test */}
      <Comparison />

      <YourOutfitList />
    </ListContainer>
    </div>
  );
}
