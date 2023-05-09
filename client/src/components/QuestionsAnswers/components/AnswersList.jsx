import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import AnswersListEntry from './AnswersListEntry.jsx';

export default function AnswersList({answers, request, setRequest }) {
  const sortByHelpfulness = (a, b) => b.helpfulness - a.helpfulness;
  console.log('these are answers', answers.sort(sortByHelpfulness));
  return (
    <div style={{marginLeft: '4px'}}>
       {answers.length > 0 ? (
      answers.sort(sortByHelpfulness).map((answer) => {
        return (
          <AnswersListEntry answer={answer} key={answer.id} request={request} setRequest={setRequest}/>
        )
      })) : <div>No Answers found</div>}
    </div>

  )
}