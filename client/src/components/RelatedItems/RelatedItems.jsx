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
  const [allItems, setAllItems] = useState([]);

// move the sessionStorage (and/or change to localStorage) into the YourOutfit component. Not sure it's really needed here. But it was useful during development to avoid hitting the API so many times.
  useEffect(() => {
    // if (sessionStorage.getItem('RelatedItems') && items.length === 0) {
    //   // console.log('Snagging from sessionStorage:');
    //   setItems(JSON.parse(sessionStorage.getItem('RelatedItems')));
    // } else {
      axios.get(`/relateditems/related/${product.id}`)
        .then((firstResponse) => {
          console.log('What did we get? : ', firstResponse.data);
          let url = '';
          const promiseProductLevel = [];

          // need to check and see if related items are already saved,
          // if so, setItems with those instead of retrieving new ones.
          // console.log('What is in ALL items >>>>>>>> ', allItems);
          const unique = new Set();
          firstResponse.data.map((item) => unique.add(item));
          // console.log('Unique:', unique);

          const needIDs = [];
          const resultData = [];

          // for (let i = 0; i < firstResponse.data.length; i++) {
          for (const value of unique) {
            // console.log('What are we looking at: ', value);
            let foundItem = allItems.find((item) => {
              // console.log(item);
              return value === item.id;
            });

            if (foundItem) {
              // console.log('What are we pushing?', foundItem);
              resultData.push(foundItem);
            } else {
              needIDs.push(value);
            }
          }

          console.log('The IDs we still need.', needIDs);
          // console.log('Already saved in allItems: ', resultData);


          for (let i = 0; i < needIDs.length; i++) {
            // url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${needIDs[i]}`;
            url = `/overview/products/${needIDs[i]}`;
            console.log('URL #', i, url);
            promiseProductLevel.push(axios.get(url));
          }

          axios.all(promiseProductLevel)
            .then((secondResponse) => {
              const productInfo = [];

              for (let i = 0; i < secondResponse.length; i++) {
                productInfo.push(secondResponse[i].data);
              }


              // begin refactor here
              const promiseStyleLevel = [];

              for (let i = 0; i < productInfo.length; i++) {
                let relatedID = productInfo[i].id;
                // url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${relatedID}/styles`;
                url = `/overview/products/${relatedID}/styles`;
                console.log('URL #', i, url);
                promiseStyleLevel.push(axios.get(url));
              }

              axios.all(promiseStyleLevel)
                .then((thirdResponse) => {
                  // console.log('What styles did we get? : ', thirdResponse);
                  const styledItems = [];

                  for (let i = 0; i < productInfo.length; i++) {
                      // console.log('Ending up with: ', Object.assign(productInfo[i], thirdResponse[i].data));
                      if (styledItems.length === 0) {
                        styledItems.push(Object.assign(productInfo[i], thirdResponse[i].data));
                      } else {
                        let found = false;
                        for (let j = 0; j < styledItems.length; j++) {
                          if (styledItems[j].id === productInfo[i].id) {
                            found = true;
                            // console.log('>>>>> Found duplicate, do not save.');
                            break;
                          }
                        }

                        if (!found) {
                          // styledItems.push({
                          //   id: productInfo[i].id,
                          //   data: Object.assign(productInfo[i], thirdResponse[i].data)
                          // });
                          styledItems.push(Object.assign(productInfo[i], thirdResponse[i].data));
                        }
                      }
                  }

                  setItems([...resultData, ...styledItems]);
                  // console.log('>>>>>>>>>>>>>>> ', resultData, styledItems, allItems);
                  setAllItems([...allItems, ...styledItems]);

                  // console.log('>>>>>>>>>>>>>>> NEW DATA: ', styledItems);
                  // sessionStorage.setItem('RelatedItems', JSON.stringify(styledItems));
                  // console.log('We set something : ', JSON.parse(sessionStorage.getItem('RelatedItems')));
                  // res.status(200).send(styledItems);
                })
                .catch((err) => {
                  console.log('Error retrieving styles.', err);
                });
            })
            .catch((err) => {
              console.log('Error retrieving multiple products info from API.', err);
            });
        })
        .catch((err) => {
          console.log('ERROR with new GET request:', err);
        });
  },[product]);

  const addToOutfit = (item) => {
    // console.log(`What we received from addToOutfit card: ${item.name}`);
    setOutfit([...outfit, item]);
    // axios.get(`/overview/products/${item.id}/styles`)
    //   .then((response) => {
    //     setOutfit([...outfit, Object.assign(item, response.data)]);
    //     // console.log('Current outfit:', outfit);
    //   })
    //   .catch((err) => {
    //     console.log('Unable to add outfit: ', err);
    //   });
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
