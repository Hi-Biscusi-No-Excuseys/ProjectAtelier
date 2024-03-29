const express = require('express');
const axios = require('axios');

const router = express.Router();

const options = {
  headers: {
    Authorization: process.env.AUTH,
  },
};

router.get('/related/:product_id', (req, res) => {
  const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${req.params.product_id}/related`;

  axios.get(url, options)
    .then((firstResponse) => {
      res.status(200).send(firstResponse.data);
    })
    .catch((err) => {
      console.log('Error retrieving related products from API.', err);
      res.sendStatus(500);
    });
});

module.exports = router;
