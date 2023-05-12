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
  const [allItems, setAllItems] = useState([]);
  const [outfit, setOutfit] = useState([]);
  const [compare, setCompare] = useState({});

// move the sessionStorage (and/or change to localStorage) into the YourOutfit component. Not sure it's really needed here. But it was useful during development to avoid hitting the API so many times.
  useEffect(() => {
    // if (sessionStorage.getItem('RelatedItems') && items.length === 0) {
    //   // console.log('Snagging from sessionStorage:');
    //   setItems(JSON.parse(sessionStorage.getItem('RelatedItems')));
    // } else {
      axios.get(`/relateditems/related/${product.id}`)
        .then((firstResponse) => {
          console.log('1) :', firstResponse);
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
            // console.log('What are we looking at: ', value, product.id);
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

          // console.log('The IDs we still need.', needIDs);
          // console.log('Already saved in allItems: ', resultData);


          for (let i = 0; i < needIDs.length; i++) {
            // url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${needIDs[i]}`;
            url = `/overview/products/${needIDs[i]}`;
            // console.log('URL #', i, url);
            promiseProductLevel.push(axios.get(url));
          }

          axios.all(promiseProductLevel)
            .then((secondResponse) => {
              console.log('2) :', secondResponse);
              const productInfo = [];

              for (let i = 0; i < secondResponse.length; i++) {
                let { data } = secondResponse[i];
                console.log('What is this: ', data);
                // productInfo.push(secondResponse[i].data);
                productInfo.push(data);
              }

              const promiseStyleLevel = [];

              for (let i = 0; i < productInfo.length; i++) {
                let relatedID = productInfo[i].id;
                // url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${relatedID}/styles`;
                url = `/overview/products/${relatedID}/styles`;
                // console.log('URL #', i, url);
                promiseStyleLevel.push(axios.get(url));
              }

              axios.all(promiseStyleLevel)
                .then((thirdResponse) => {
                  console.log('3) :', thirdResponse);
                  // console.log('What styles did we get? : ', thirdResponse);
                  const styledItems = [];

                  for (let i = 0; i < productInfo.length; i++) {
                      // console.log('Ending up with: ', Object.assign(productInfo[i], thirdResponse[i].data));
                      let { data } = thirdResponse[i];
                      if (styledItems.length === 0) {
                        // styledItems.push(Object.assign(productInfo[i], thirdResponse[i].data));
                        console.log('What is this: ', productInfo[i], data);
                        styledItems.push(Object.assign(productInfo[i], data));
                      } else {
                        let found = false;
                        for (let j = 0; j < styledItems.length; j++) {
                          if (styledItems[j].id === productInfo[i].id) {
                            found = true;
                            // console.log('>>>>>>>>>>>>>>>>>>>>>> Found duplicate, do not save.');
                            break;
                          }
                        }

                        if (!found) {
                          // styledItems.push({
                          //   id: productInfo[i].id,
                          //   data: Object.assign(productInfo[i], thirdResponse[i].data)
                          // });
                          // styledItems.push(Object.assign(productInfo[i], thirdResponse[i].data));
                          console.log('What is this: ', productInfo[i], data);
                          styledItems.push(Object.assign(productInfo[i], data));
                        }
                      }
                  }

                  const metaInfo = [];
                  const promiseMetaLevel = [];

                  for (let i = 0; i < styledItems.length; i++) {
                    let relatedID = styledItems[i].id;
                    // url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${relatedID}/styles`;
                    url = '/reviews/meta';
                    // console.log('URL #', i, url, relatedID);
                    promiseMetaLevel.push(axios.get(url, { params: {product_id: relatedID} }));
                  }
                  // console.log('Dis:', styledItems);

                  axios.all(promiseMetaLevel)
                  .then((fourthResponse) => {
                      console.log('4) ', fourthResponse);
                      for (let i = 0; i < fourthResponse.length; i++) {
                        let { data } = fourthResponse[i];
                        // metaInfo.push(Object.assign(styledItems[i], fourthResponse[i]));
                        console.log('What is this: ', styledItems[i], data);
                        metaInfo.push(Object.assign(styledItems[i], data));
                      }

                      setItems([...resultData, ...metaInfo]);
                      setAllItems([...allItems, ...metaInfo]);

                      const updatedProduct = [...allItems, ...metaInfo].find((item) => {
                        return item.id === product.id;
                      });

                      console.log('Did we get it: ', updatedProduct);
                      setProduct(updatedProduct);
                    })
                    .catch((err) => {
                      console.log('Error with META.', err);
                      throw (err);
                    });
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
    setOutfit([...outfit, item]);
  };

  return (
    <div id="related-items-component">
    <ListContainer>
      <RelatedProductsList product={product} items={items} setProduct={setProduct}/>
      <YourOutfitList product={product} outfit={outfit} addToOutfit={addToOutfit}/>

      {/* adding just to test */}
      <Comparison product={product} setCompare={setCompare}/>

    </ListContainer>
    </div>
  );
}
