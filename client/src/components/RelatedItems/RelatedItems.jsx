import React from 'react';
import axios from 'axios';
import RelatedProductsList from './RelatedProductsList';
import YourOutfitList from './YourOutfitList';
import Comparison from './Comparison';
import styles from './Styles.jsx';

const { ListContainer } = styles;
const { useState, useEffect } = React;

export default function RelatedItems( {productID} ) {
  const [items, setItems] = useState([]);

  // useEffect(() => {
  //   axios.get(`/related/${productID}`, {
  //     headers: {
  //       Authorization: process.env.AUTH
  //     }
  //   })
  //     .then((response) => {
  //       setItems(response.data);
  //     })
  //     .catch((err) => {
  //       console.log('ERROR:', err);
  //     });
  // },[productID]);

  return (
    <div id="related-items-component">
    <ListContainer>
      <RelatedProductsList items={items}/>

      {/* adding just to test */}
      <Comparison />

      <YourOutfitList />
    </ListContainer>
    </div>
  );
}
