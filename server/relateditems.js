const express = require('express');
const axios = require('axios');
const router = express.Router();

// Need current product ID - Discuss.
// TEMP to use for testing
// const productID = 40344;

const options = {
  headers: {
    Authorization: process.env.AUTH
  }
};

// get data for RelatedItems from API
// will need to return to client app so it
// can be rendered
router.get('/related/:product_id', (req, res) => {
  // const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products?page=1&count=3`;
  let url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${req.params.product_id}/related`;


  axios.get(url, options)
    .then((firstResponse) => {
      const promiseProductLevel = [];
      console.log('URL #', url);
      console.log('List of related IDs:', firstResponse.data);

      // for (let i = 0; i < firstResponse.data.length; i++) {
      //   url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${firstResponse.data[i]}`;
      //   console.log('URL #', i, url);
      //   promiseProductLevel.push(axios.get(url, options));
      // }

      // axios.all(promiseProductLevel)
      //   .then((secondResponse) => {
      //     const productInfo = [];

      //     for (let i = 0; i < secondResponse.length; i++) {
      //       productInfo.push(secondResponse[i].data);
      //     }


      //     // begin refactor here
      //     const promiseStyleLevel = [];

      //     for (let i = 0; i < productInfo.length; i++) {
      //       let relatedID = productInfo[i].id;
      //       url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${relatedID}/styles`;
      //       // url = `/overview/products/${relatedID}/styles`;
      //       console.log('URL #', i, url);
      //       promiseStyleLevel.push(axios.get(url, options));
      //     }

      //     axios.all(promiseStyleLevel)
      //       .then((thirdResponse) => {
      //         // console.log('What styles did we get? : ', thirdResponse);
      //         const styledItems = [];

      //         for (let i = 0; i < productInfo.length; i++) {
      //             // console.log('Ending up with: ', Object.assign(productInfo[i], thirdResponse[i].data));
      //             if (styledItems.length === 0) {
      //               styledItems.push(Object.assign(productInfo[i], thirdResponse[i].data));
      //             } else {
      //               let found = false;
      //               for (let j = 0; j < styledItems.length; j++) {
      //                 if (styledItems[j].id === productInfo[i].id) {
      //                   found = true;
      //                   // console.log('>>>>> Found duplicate, do not save.');
      //                   break;
      //                 }
      //               }

      //               if (!found) {
      //                 styledItems.push(Object.assign(productInfo[i], thirdResponse[i].data));
      //               }
      //             }
      //         }

      //         // setItems(styledItems);
      //         // console.log('>>>>>>>>>>>>>>> NEW DATA: ', styledItems);
      //         // sessionStorage.setItem('RelatedItems', JSON.stringify(styledItems));
      //         // console.log('We set something : ', JSON.parse(sessionStorage.getItem('RelatedItems')));
      //         res.status(200).send(styledItems);
      //       })
      //       .catch((err) => {
      //         console.log('Error retrieving styles.', err);
      //         res.sendStatus(500);
      //       });
      //   })
      //   .catch((err) => {
      //     console.log('Error retrieving multiple products info from API.', err);
      //     res.sendStatus(500);
      //   });
      res.status(200).send(firstResponse.data);
    })
    .catch((err) => {
      console.log('Error retrieving related products from API.', err);
      res.sendStatus(500);
    });
  });

// this one will take user selections and add
// them to the YourOutfit list.
//
// May need to leverage below:
// sessionStorage.setItem('key', 'value');
router.post('/youroutfit', (req, res) => {
  res.send('About your outfits items.');
});

module.exports = router;
