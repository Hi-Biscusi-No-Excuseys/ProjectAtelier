const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();


router.get('/list', (req, res) => {
  // req.body should look like:
  // {
  //   page: 1,
  //   count: 2,
  //   sort: 'relevant',
  //   product_id: 40344 
  // }
  const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews?product_id=${req.body.product_id}&page=${req.body.page}&count=${req.body.count}&sort=${req.body.sort}`;

  axios.get(url, {
    headers:
      { Authorization: process.env.AUTH }
  })
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      console.error('API call failed:', err);
      res.send(err);
    })
});

module.exports = router;
