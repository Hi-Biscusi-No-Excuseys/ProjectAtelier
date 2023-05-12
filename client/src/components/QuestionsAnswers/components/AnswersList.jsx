import React from 'react';
import AnswersListEntry from './AnswersListEntry';

export default function AnswersList({ answers, request, setRequest }) {
  const sortByHelpfulness = (a, b) => {
    if (a.answerer_name === 'Seller' && b.answerer_name !== 'Seller') {
      return -1;
    } if (b.answerer_name === 'Seller' && a.answerer_name !== 'Seller') {
      return 1;
    }
    return b.helpfulness - a.helpfulness;
  };
  return (
    <div className="answersList">
      {answers.length > 0 ? (
        answers.sort(sortByHelpfulness).map((answer) => (
          <AnswersListEntry
            answer={answer}
            key={answer.id}
            request={request}
            setRequest={setRequest}
          />
        ))) : <div>No Answers found</div>}
    </div>

  );
}
