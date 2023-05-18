import React, { useState, useEffect } from 'react';
import Overview from './Overview/Overview';
import QuestionsAnswers from './QuestionsAnswers/QuestionsAnswers';
import RatingsReviews from './RatingsReviews/RatingsReviews';
import RelatedItems from './RelatedItems/RelatedItems';

const axios = require('axios');

export default function App() {
  // eslint-disable-next-line no-unused-vars
  const [defaultProductID, setDefaultProductID] = useState(40347);

  const [product, setProduct] = useState(null);
  useEffect(() => {
    axios.get(`/overview/products/${defaultProductID}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log('Unable to fetch data: ', err);
      });
  }, [defaultProductID]);

  return (
    
      {product && (
      <div>
        <Overview product={product} />
        <RelatedItems product={product} setProduct={setProduct} />
        <QuestionsAnswers product={product} />
        <RatingsReviews product={product} />
      </div>
      ) }

  );
}
