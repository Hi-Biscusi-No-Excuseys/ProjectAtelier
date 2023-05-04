import React from 'react';
import Overview from './Overview/Overview';
import QuestionsAnswers from './QuestionsAnswers/QuestionsAnswers';
import RatingsReviews from './RatingsReviews/RatingsReviews';
import RelatedItems from './RelatedItems/RelatedItems';

export default function App() {
  return (
    <>
      <Overview />
      <RelatedItems />
      <QuestionsAnswers />
      <RatingsReviews />
    </>
  );
}
