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
    .then((response) => {
      const promises = [];

      for (let i = 0; i < response.data.length; i++) {
        url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${response.data[i]}`;
        // console.log('URL #', i, url);
        promises.push(axios.get(url, options));
      }

      axios.all(promises)
        .then((result) => {
          const productInfo = [];

          for (let i = 0; i < result.length; i++) {
            productInfo.push(result[i].data);
          }

          res.status(200).send(productInfo);
        })
        .catch((err) => {
          console.log('Error retrieving multiple products info from API.', err);
          res.sendStatus(500);
        });
    })
    .catch((err) => {
      console.log('Error retrieving related products from API.');
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
