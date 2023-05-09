import React from 'react';
import axios from 'axios';
import RelatedProductsList from './RelatedProductsList';
import YourOutfitList from './YourOutfitList';
import Comparison from './Comparison';
import styles from './Styles.jsx';

const { ListContainer } = styles;
const { useState, useEffect } = React;

export default function RelatedItems( {product, setProduct} ) {
  const [items, setItems] = useState([]);
  const [outfit, setOutfit] = useState([]);

// move the sessionStorage (and/or change to localStorage) into the YourOutfit component. Not sure it's really needed here. But it was useful during development to avoid hitting the API so many times.
  useEffect(() => {
    if (sessionStorage.getItem('RelatedItems') && items.length === 0) {
      // console.log('Snagging from sessionStorage:');
      setItems(JSON.parse(sessionStorage.getItem('RelatedItems')));
    } else {
      axios.get(`/relateditems/related/${product.id}`)
        .then((firstResponse) => {
          // console.log('What did we get? : ', firstResponse.data);

          const promises = [];

          for (let i = 0; i < firstResponse.data.length; i++) {
            let relatedID = firstResponse.data[i].id;
            let url = `/overview/products/${relatedID}/styles`;
            // console.log('URL #', i, url);
            promises.push(axios.get(url));
          }

          axios.all(promises)
            .then((secondResponse) => {
              // console.log('What styles did we get? : ', secondResponse);
              const styledItems = [];

              for (let i = 0; i < firstResponse.data.length; i++) {
                  // console.log('Ending up with: ', Object.assign(firstResponse.data[i], secondResponse[i].data));
                  if (styledItems.length === 0) {
                    styledItems.push(Object.assign(firstResponse.data[i], secondResponse[i].data));
                  } else {
                    let found = false;
                    for (let j = 0; j < styledItems.length; j++) {
                      if (styledItems[j].id === firstResponse.data[i].id) {
                        found = true;
                        // console.log('>>>>> Found duplicate, do not save.');
                        break;
                      }
                    }

                    if (!found) {
                      styledItems.push(Object.assign(firstResponse.data[i], secondResponse[i].data));
                    }
                  }

              }

              setItems(styledItems);
              sessionStorage.setItem('RelatedItems', JSON.stringify(styledItems));
              // console.log('We set something : ', JSON.parse(sessionStorage.getItem('RelatedItems')));
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
  },[product]);

  const addToOutfit = (item) => {
    // console.log(`What we received from addToOutfit card: ${item.name}`);
    axios.get(`/overview/products/${item.id}/styles`)
      .then((response) => {
        setOutfit([...outfit, Object.assign(item, response.data)]);
        // console.log('Current outfit:', outfit);
      })
      .catch((err) => {
        console.log('Unable to add outfit: ', err);
      });
  };

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
      <RelatedProductsList items={items} setProduct={setProduct}/>
      <YourOutfitList product={product} outfit={outfit} addToOutfit={addToOutfit}/>

      {/* adding just to test */}
      <Comparison />

    </ListContainer>
    </div>
  );
}
