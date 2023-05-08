import React from 'react';
import QuestionsListEntry from './QuestionsListEntry.jsx';
import { useState } from 'react';
//
export default function QuestionsList({questions, request, setRequest}) {
  console.log('these are questions', questions)
  const sortByHelpfulness = (a, b) => b.question_helpfulness - a.question_helpfulness;
  return (
    <div>
     {questions.length > 0 ? (
      questions.sort(sortByHelpfulness).map((question) => {
        return (
          <QuestionsListEntry question={question} request={request} setRequest={setRequest} />
        )
      })) : <div>No questions found</div>}
    </div>
  );
}
