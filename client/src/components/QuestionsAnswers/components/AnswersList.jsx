import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import AnswersListEntry from './AnswersListEntry.jsx';

export default function AnswersList({answers, request, setRequest }) {
    const sortByHelpfulness = (a, b) => {
      if (a.answerer_name === "Seller" && b.answerer_name !== "Seller") {
        return -1;
      } else if (b.answerer_name === "Seller" && a.answerer_name !== "Seller") {
        return 1;
      } else {
        return b.helpfulness - a.helpfulness;
      }
    };
  return (
    <div style={{marginLeft: '4px', flexDirection: 'column'}}>
       {answers.length > 0 ? (
      answers.sort(sortByHelpfulness).map((answer) => {
        return (
          <AnswersListEntry answer={answer} key={answer.id} request={request} setRequest={setRequest}/>
        )
      })) : <div>No Answers found</div>}
    </div>

  )
}