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
    if (sessionStorage.getItem('RelatedItems') && items.length === 0) {
      setItems(JSON.parse(sessionStorage.getItem('RelatedItems')));
    } else {
      axios.get(`/relateditems/related/${productID}`)
        .then((firstResponse) => {
          console.log('What did we get? : ', firstResponse.data);

          const promises = [];

          for (let i = 0; i < firstResponse.data.length; i++) {
            let relatedID = firstResponse.data[i].id;
            let url = `/overview/products/${relatedID}/styles`;
            // console.log('URL #', i, url);
            promises.push(axios.get(url));
          }

          axios.all(promises)
            .then((secondResponse) => {
              console.log('What styles did we get? : ', secondResponse);
              const styledItems = [];

              for (let i = 0; i < firstResponse.data.length; i++) {
                  // console.log('Ending up with: ', Object.assign(firstResponse.data[i], secondResponse[i].data));
                  styledItems.push(Object.assign(firstResponse.data[i], secondResponse[i].data));
              }

              setItems(styledItems);
              sessionStorage.setItem('RelatedItems', JSON.stringify(styledItems));
              console.log('We set something : ', JSON.parse(sessionStorage.getItem('RelatedItems')));
            })
            .catch((err) => {
              console.log('Error retrieving style.', err);
              throw (err);
            })
        })
        .catch((err) => {
          console.log('ERROR:', err);
        });
    }
  },[productID]);

  // useEffect(() => {
  //   axios.get(`/overview/products/${item.id}/styles`)
  //     .then((response) => {
  //       console.log('What styles did we get? : ', response.data);
  //       const defaultStyle = response.data.results[0].photos[0].url;
  //       setStyle(defaultStyle);
  //     })
  //     .catch((err) => {
  //       console.log('Error retrieving style.', err);
  //       // throw (err);
  //     });
  // }, [item]);

  return (
    <div id="related-items-component">
    <ListContainer>
      <RelatedProductsList items={items} setProductID={setProductID}/>
      <YourOutfitList productID={productID} outfit={outfit} setOutfit={setOutfit}/>

      {/* adding just to test */}
      <Comparison />

    </ListContainer>
    </div>
  );
}
