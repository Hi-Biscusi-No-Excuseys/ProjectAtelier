require('dotenv').config();
const express = require('express');
const router = express.Router();
const axios = require('axios');

const auth = process.env.TOKEN;

router.get('/products', (req, res) => {
  console.log('This is the request body: ', req.body);
  let url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/`
  let options = {
    headers: {
      'Authorization': auth
    }
  }
  axios.get(url, options)
    .then((response)=>{
      console.log('This is the response: ', response.data);
      res.json(response.data);
    })
    .catch((err)=>{
      console.log('server error: ', err.response.data)
      res.status(500).send('Error fetching data from API');
    })
});

module.exports = router;
