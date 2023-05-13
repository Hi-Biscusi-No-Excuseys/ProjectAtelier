import React from 'react';
import axios from 'axios';
import RelatedProductsList from './RelatedProductsList';
import YourOutfitList from './YourOutfitList';
import Comparison from './Comparison';
import styles from './Styles';

const { ListContainer } = styles;
const { useState, useEffect } = React;

export default function RelatedItems({ product, setProduct }) {
  const [items, setItems] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const [outfit, setOutfit] = useState([]);
  const [compare, setCompare] = useState(null);

  useEffect(() => {
    axios.get(`/relateditems/related/${product.id}`)
      .then((firstResponse) => {
        // console.log('1) :', firstResponse);
        let url = '';
        const promiseProductLevel = [];
        const unique = new Set();

        firstResponse.data.map((item) => unique.add(item));

        const needIDs = [];
        const resultData = [];

        for (const value of unique) {
          const foundItem = allItems.find((item) => value === item.id);

          if (foundItem) {
            resultData.push(foundItem);
          } else {
            needIDs.push(value);
          }
        }

        // console.log('The IDs we still need.', needIDs);

        for (let i = 0; i < needIDs.length; i += 1) {
          url = `/overview/products/${needIDs[i]}`;
          // console.log('URL #', i, url);
          promiseProductLevel.push(axios.get(url));
        }

        axios.all(promiseProductLevel)
          .then((secondResponse) => {
            // console.log('2) :', secondResponse);
            const productInfo = [];

            for (let i = 0; i < secondResponse.length; i += 1) {
              const { data } = secondResponse[i];
              // console.log('What is this: ', data);
              productInfo.push(data);
            }

            const promiseStyleLevel = [];

            for (let i = 0; i < productInfo.length; i += 1) {
              const relatedID = productInfo[i].id;
              url = `/overview/products/${relatedID}/styles`;
              // console.log('URL #', i, url);
              promiseStyleLevel.push(axios.get(url));
            }

            axios.all(promiseStyleLevel)
              .then((thirdResponse) => {
                // console.log('3) :', thirdResponse);
                const styledItems = [];

                for (let i = 0; i < productInfo.length; i += 1) {
                  const { data } = thirdResponse[i];
                  if (styledItems.length === 0) {
                    // console.log('What is this: ', productInfo[i], data);
                    styledItems.push(Object.assign(productInfo[i], data));
                  } else {
                    let found = false;
                    for (let j = 0; j < styledItems.length; j += 1) {
                      if (styledItems[j].id === productInfo[i].id) {
                        found = true;
                        // console.log('>>>>>>>>>>>>>>>>>>>>>> Found duplicate, do not save.');
                        break;
                      }
                    }

                    if (!found) {
                      // console.log('What is this: ', productInfo[i], data);
                      styledItems.push(Object.assign(productInfo[i], data));
                    }
                  }
                }

                const metaInfo = [];
                const promiseMetaLevel = [];

                for (let i = 0; i < styledItems.length; i += 1) {
                  const relatedID = styledItems[i].id;
                  url = '/reviews/meta';
                  // console.log('URL #', i, url, relatedID);
                  promiseMetaLevel.push(axios.get(url, { params: { product_id: relatedID } }));
                }

                axios.all(promiseMetaLevel)
                  .then((fourthResponse) => {
                    // console.log('4) ', fourthResponse);
                    for (let i = 0; i < fourthResponse.length; i += 1) {
                      const { data } = fourthResponse[i];
                      // console.log('What is this: ', styledItems[i], data);
                      metaInfo.push(Object.assign(styledItems[i], data));
                    }

                    setItems([...resultData, ...metaInfo]);
                    setAllItems([...allItems, ...metaInfo]);

                    const updatedProduct = [...allItems, ...metaInfo].find(
                      (item) => item.id === product.id,
                    );

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
  }, [product]);

  const addToOutfit = (item) => {
    setOutfit([...outfit, item]);
  };

  const removeOutfit = (find) => {
    console.log(find);
    const index = outfit.findIndex((item) => item.id === find.id);
    setOutfit(outfit.toSpliced(index, 1));
  };

  const isRelatedCard = true;

  return (
    <div id="related-items-component">
      <ListContainer>
        <RelatedProductsList
          product={product}
          items={items}
          setProduct={setProduct}
          setCompare={setCompare}
          isRelatedCard={isRelatedCard}
        />
        <YourOutfitList
          product={product}
          outfit={outfit}
          addToOutfit={addToOutfit}
          removeOutfit={removeOutfit}
          isRelatedCard={!isRelatedCard}
        />

        {/* adding just to test */}
        {product && compare && <Comparison product={product} compare={compare} />}
        {/* {<Comparison product={product} compare={compare}/>} */}

      </ListContainer>
    </div>
  );
}
