import React from 'react';
import axios from 'axios';
import RelatedProductsList from './RelatedProductsList';
import YourOutfitList from './YourOutfitList';
import Comparison from './Comparison';
import styles from './Styles.jsx';

const { ListContainer } = styles;
const { useState, useEffect } = React;

export default function RelatedItems( {productID, setProductID} ) {
  const [items, setItems] = useState([]);
  const [outfit, setOutfit] = useState([]);

  useEffect(() => {
    axios.get(`/relateditems/related/${productID}`)
      .then((response) => {
        console.log(response.data);
        setItems(response.data);
      })
      .catch((err) => {
        console.log('ERROR:', err);
      });
  },[productID]);

  return (
    <div id="related-items-component">
    <ListContainer>
      <RelatedProductsList items={items} setProductID={setProductID}/>
      <YourOutfitList outfit={outfit} setOutfit={setOutfit}/>

      {/* adding just to test */}
      <Comparison />

    </ListContainer>
    </div>
  );
}
