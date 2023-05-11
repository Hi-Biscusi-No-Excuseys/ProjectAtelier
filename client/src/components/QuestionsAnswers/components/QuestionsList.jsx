import React from 'react';
import QuestionsListEntry from './QuestionsListEntry.jsx';
import { useState } from 'react';
//
export default function QuestionsList({questions, request, setRequest, productName}) {
  // console.log('these are questions', questions)
  const sortByHelpfulness = (a, b) => b.question_helpfulness - a.question_helpfulness;
  return (
    <div className="questionsList">
     {questions.length > 0 ? (
      questions.sort(sortByHelpfulness).map((question) => {
        return (
          <QuestionsListEntry key={question.question_id} productName={productName} question={question} request={request} setRequest={setRequest} />
        )
      })) : <div>No questions found</div>}
    </div>
  );
}
