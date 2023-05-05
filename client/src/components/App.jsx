import {React, useState} from 'react';
import Overview from './Overview/Overview';
import QuestionsAnswers from './QuestionsAnswers/QuestionsAnswers';
import RatingsReviews from './RatingsReviews/RatingsReviews';
import RelatedItems from './RelatedItems/RelatedItems';

export default function App() {
  const [productID, setProductID] = useState(40432);

  return (
    <>
      <Overview productID={productID} />
      <RelatedItems productID={productID} setProductID={setProductID}/>
      <QuestionsAnswers productID={productID} />
      <RatingsReviews productID={productID} />
    </>
  );
}
