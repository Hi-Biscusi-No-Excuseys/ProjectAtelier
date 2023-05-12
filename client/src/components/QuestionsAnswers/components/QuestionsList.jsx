import React from 'react';
import QuestionsListEntry from './QuestionsListEntry';
//
export default function QuestionsList({
  questions, request, setRequest, productName, filterText,
}) {
  // console.log('these are questions', questions)
  const sortByHelpfulness = (a, b) => b.question_helpfulness - a.question_helpfulness;

  return (
    <div className="questionsList">
      {questions.length > 0 ? (
        // eslint-disable-next-line array-callback-return, consistent-return
        questions.sort(sortByHelpfulness).map((question) => {
          if (filterText.length < 3
            || question.question_body.toLowerCase().includes(filterText.toLowerCase())) {
            return (
              <QuestionsListEntry
                key={question.question_id}
                roductName={productName}
                question={question}
                request={request}
                setRequest={setRequest}
              />
            );
          }
        }))
        : <div>No questions found</div>}
    </div>
  );
}
