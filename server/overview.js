require('dotenv').config();
const express = require('express');

const router = express.Router();
const axios = require('axios');

const auth = process.env.AUTH;

router.get('/products', (req, res) => {
  console.log('This is the request body: ', req.body);
  const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/';
  const options = {
    headers: {
      Authorization: auth,
    },
  };
  axios.get(url, options)
    .then((response)=>{
      // console.log('These are the products: ', response.data);
      res.json(response.data);
    })
    .catch((err)=>{
      // console.log('server error: ', err.response.data)
      res.status(500).send('Error fetching data from API');
    });
});

router.get('/products/:product_id', (req, res) => {
  const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${req.params.product_id}/`;
  const options = {
    headers: {
      Authorization: auth,
    },
  };
  axios.get(url, options)
    .then((response) => {
      console.log('This is the product data: ', response.data);
      res.json(response.data);
    })
    .catch((err) => {
      console.log('server error: ', err.response.data);
      res.status(500).send('Error fetching data from API');
    });
});

router.get('/products/:product_id/styles', (req, res) => {
  const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${req.params.product_id}/styles`;
  const options = {
    headers: {
      Authorization: auth,
    },
  };
  axios.get(url, options)
    .then((response) => {
      // console.log("These are the product's styles: ", response.data);
      res.json(response.data);
    })
    .catch((err) => {
      console.log('server error: ', err.response.data);
      res.status(500).send('Error fetching data from API');
    });
});

router.get('/cart', (req, res) => {
  const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/cart';
  const options = {
    headers: {
      Authorization: auth,
    },
  };
  axios.get(url, options)
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => {
      console.log('server error: ', err.response.data);
      res.status(500).send('Error fetching cart data from API');
    });
});

router.post('/cart', (req, res) => {
  console.log('This is the request: ', req.body);
  const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/cart';
  const options = {
    headers: {
      Authorization: auth,
    },
  };
  axios.post(url, req.body, options)
    .then((response) => {
      res.status(201).json(response.data);
    })
    .catch((err) => {
      console.log('server error: ', err.response.data);
      res.status(500).send('Error sending data to cart API');
    });
});

module.exports = router;
