require('dotenv').config();
const express = require('express');
const router = express.Router();
const axios = require('axios');


const API_HOST = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp';
const PATH = '/qa/questions';

router.get('/questions', (req, res) => {
  // console.log('this is req.query', req)
  axios.get(`${API_HOST}${PATH}`, {
    headers: {
      Authorization: process.env.AUTH,
    },
    params: {
      product_id: req.query.product_id || 40399, // set a default value if product_id is not provided
      page: req.query.page || 1,
      count: req.query.count ||100,
    },
  })
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('Error fetching data from API');
    });
});

router.get('/questions/:question_id/answers', (req, res) => {
  axios.get(`${API_HOST}/qa/questions/${req.params.question_id}/answers`, {
    headers: {
      Authorization: process.env.AUTH,
    },
    params: {
      page: req.query.page || 1,
      count: req.query.count || 100,
    },
  })
    .then((response) => {
      //response.data.results = arrays of answers(objects)
      res.json(response.data);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('Error fetching data from API');
    });
});

router.post('/questions', (req, res) => {
  const { body, name, email, product_id } = req.body;

  axios.post(`${API_HOST}${PATH}`, {
      body,
      name,
      email,
      product_id
    }, {
      headers: {
        Authorization: process.env.AUTH,
      }
    }
  )
    .then((response) => {
      res.status(201).json(response.data);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('Error posting data to API');
    });
});

router.post('/questions/:question_id/answers', (req, res) => {
  const { body, name, email, photos} = req.body;
  axios.post(`${API_HOST}/qa/questions/${req.params.question_id}/answers`, {
      body,
      name,
      email,
      photos
    }, {
      headers: {
        Authorization: process.env.AUTH,
      }
    }
  )
    .then((response) => {
      // console.log('this is response.data', response.data)
      res.status(201).json(response.data);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('Error posting data to API');
    });
});

//Questions
router.put('/questions/:question_id/helpful', (req, res) => {
  axios.put(`${API_HOST}/qa/questions/${req.params.question_id}/helpful`, {}, {
    headers: {
      Authorization: process.env.AUTH,
    }
  })
  .then((response) => {
    res.status(204).send();
  })
  .catch((error) => {
    console.error(error);
    res.status(500).send('Error updating question helpfulness');
  });
})

router.put('/questions/:question_id/report', (req, res) => {
  axios.put(`${API_HOST}/qa/questions/${req.params.question_id}/report`, {}, {
    headers: {
      Authorization: process.env.AUTH,
    }
  })
  .then((response) => {
    res.status(204).send();
  })
  .catch((error) => {
    console.error(error);
    res.status(500).send('Error updating question to being reported');
  });
})
//Answers
router.put('/answers/:answer_id/helpful', (req, res) => {
  axios.put(`${API_HOST}/qa/answers/${req.params.answer_id}/helpful`, {}, {
    headers: {
      Authorization: process.env.AUTH,
    }
  })
  .then((response) => {
    res.status(204).send();
  })
  .catch((error) => {
    console.error(error);
    res.status(500).send('Error updating answer helpfulness');
  });
})

router.put('/answers/:answer_id/report', (req, res) => {
  axios.put(`${API_HOST}/qa/answers/${req.params.answer_id}/report`, {}, {
    headers: {
      Authorization: process.env.AUTH,
    }
  })
  .then((response) => {
    res.status(204).send();
  })
  .catch((error) => {
    console.error(error);
    res.status(500).send('Error updating answer to being reported');
  });
})
module.exports = router;
