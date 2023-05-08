const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();


router.get('/list', (req, res) => {
  // clients params should look like:
  // {
  //   page: 1,
  //   count: 2,
  //   sort: 'relevant',
  //   product_id: 40432 
  // }
  const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews?product_id=${req.query.product_id}&page=${req.query.page}&count=${req.query.count}&sort=${req.query.sort}`;

  axios.get(url, {
    headers:
      { Authorization: process.env.AUTH }
  })
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => {
      console.error('Failed to get reviews:', err.response.data);
      res.sendStatus(err.response.status);
    })
});


router.get('/meta', (req, res) => {
  // clients req.body should look like:
  // {
  //   product_id: 40432 
  // }
  const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta?product_id=${req.query.product_id}`;

  axios.get(url, {
    headers:
      { Authorization: process.env.AUTH }
  })
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => {
      console.error('Failed to get metadata:', err.response.data);
      res.send(err.response.status);
    })
});


router.post('/', (req, res) => {
  // clients req.body should look like:
  // {
  //   product_id: 40344,
  //   rating: 5,
  //   summary: 'Perfect for the beach',
  //   body: 'Style and quality is top notch. Will be buying more styles <3.',
  //   recommend: true,
  //   name: 'Kode',
  //   email: 'required@m.com',
  //   photos: ['url', 'url'],
  //   characteristics: {135400: 4, 135403: 5}
  // }
  const config = {
    headers: { Authorization: process.env.AUTH }
  };
  axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews', req.body, config)
    .then((response) => {
      res.sendStatus(response.status);
    })
    .catch((err) => {
      console.error('Failed to post review:', err.response.data);
      res.sendStatus(err.response.status);
    })
});


router.put('/helpful', (req, res) => {
  // clients req.body should look like:
  // {
  //   review_id: 40344 
  // }

  axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/${req.body.review_id}/helpful`, {}, { headers: { Authorization: process.env.AUTH } })
    .then((response) => {
      res.sendStatus(response.status);
    })
    .catch((err) => {
      console.error('Failed to mark helpful:', err.response.data);
      res.sendStatus(err.response.status);
    })
});


router.put('/report', (req, res) => {
  // clients req.body should look like:
  // {
  //   review_id: 40344 
  // }

  axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/${req.body.review_id}/report`, {}, { headers: { Authorization: process.env.AUTH } })
    .then((response) => {
      res.sendStatus(response.status);
    })
    .catch((err) => {
      console.error('Failed to report:', err.response.data);
      res.sendStatus(err.response.status);
    })
});



module.exports = router;
