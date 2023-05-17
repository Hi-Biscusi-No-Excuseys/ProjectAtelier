import React from 'react';
import { createPortal } from 'react-dom';
import axios from 'axios';
import RelatedProductsList from './RelatedProductsList';
import YourOutfitList from './YourOutfitList';
import Comparison from './Comparison';

const { useState, useEffect } = React;

export default function RelatedItems({ product, setProduct }) {
  const [items, setItems] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const [outfit, setOutfit] = useState([]);
  const [compare, setCompare] = useState(null);
  const [showCompare, setShowCompare] = useState(false);

  // Making things work... refactor someday.
  useEffect(() => {
    // console.log('What we start with:', product);
    let url = `/overview/products/${product.id}/styles`;
    let updated = {};
    axios.get(url)
      .then((firstResponse) => {
      // console.log('Style info:', firstResponse.data);
        updated = Object.assign(product, firstResponse.data);
        url = '/reviews/meta';
        axios.get(url, { params: { product_id: product.id } })
          .then((secondResponse) => {
            // console.log('Meta info:', secondResponse.data);
            updated = Object.assign(updated, secondResponse.data);
            // console.log('OUR NEW UPDATED PRODUCT: ', updated);
            setProduct(updated);
          })
          .catch((err) => {
            console.log('Problem snagging meta information', err);
          });
      })
      .catch((err) => {
        console.log('Problem snagging the style information', err);
      });
  }, []);

  useEffect(() => {
    axios.get(`/relateditems/related/${product.id}`)
      .then((firstResponse) => {
        // console.log('1) :', firstResponse);
        // console.log('What product ID are we looking for:', product.id);
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
              // console.log('What is this: ', data.features);
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
                    console.log([...resultData, ...metaInfo]);

                    // const updatedProduct = [...allItems, ...metaInfo].find(
                    //   (item) => item.id === product.id,
                    // );

                    // console.log('What is in here: ', [...allItems, ...metaInfo]);
                    // console.log('Did we get it: ', updatedProduct);
                    // setProduct(updatedProduct);
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

  // Persist the data in localStorage.
  const addToOutfit = (find) => {
    const search = outfit.find((item) => item.id === find.id);

    if (!search) {
      setOutfit([...outfit, find]);
    } else {
      console.log('Already saved!');
    }
  };

  const removeOutfit = (find) => {
    // console.log(find);
    const index = outfit.findIndex((item) => item.id === find.id);
    setOutfit(outfit.toSpliced(index, 1));
  };
  //

  useEffect(() => {
    // console.log('Retrieving previous outfit:\n');
    const prevEntry = JSON.parse(localStorage.getItem('saved-outfit'));
    // console.log(prevEntry);
    if (prevEntry !== '[]') {
      setOutfit(JSON.parse(localStorage.getItem('saved-outfit')));
      // console.log('Go ahead?');
    }
  }, []);

  useEffect(() => {
    // console.log('Setting new outfit entry\n', outfit);
    localStorage.setItem('saved-outfit', JSON.stringify(outfit));
  }, [outfit]);

  const isRelatedCard = true;
  const compareRoot = document.getElementById('related-items');

  return (
    <div id="related-items" data-testid='related-items'>
      <div className="ListContainer">
        <RelatedProductsList
          product={product}
          items={items}
          setProduct={setProduct}
          setCompare={setCompare}
          isRelatedCard={isRelatedCard}
          showCompare={showCompare}
          setShowCompare={setShowCompare}
        />
        <YourOutfitList
          product={product}
          outfit={outfit}
          setProduct={setProduct}
          addToOutfit={addToOutfit}
          removeOutfit={removeOutfit}
          isRelatedCard={!isRelatedCard}
        />

        {showCompare && createPortal(<Comparison
          product={product}
          compare={compare}
          setShowCompare={setShowCompare}
        />, compareRoot)}

      </div>
    </div>
  );
}
