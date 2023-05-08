import React from 'react';
import AddAnswer from './AddAnswer.jsx';
import axios from 'axios';
import { useState } from 'react';
//
export default function QuestionsListEntry({question, request, setRequest}) {
  console.log('question.question_body', question.question_body);
  const[helpfulClicked, setHelpfulClicked] = useState(false);
  const[addAnswerForm, setAddAnswerForm] = useState(false);

  const handleQHelpfulClick = (questionID) => {
    if(!helpfulClicked) {
      axios.put(`http://localhost:3000/questionsanswers/questions/${questionID}/helpful`)
      .then(() => {
        setRequest(!request);
        setHelpfulClicked(!helpfulClicked);
      })
      .catch(() => console.log('error updating helpful'))
    }
  }

  return (
    <div>
      <div style={{display: 'flex'}}>
        <div><strong>Q:{question.question_body}</strong></div>
        <div>Helpful?
          <span style={{textDecoration: 'underline'}}
          onClick={() => handleQHelpfulClick(question.question_id)}>Yes</span>
          ({question.question_helpfulness})
        </div>
          | {!addAnswerForm ?
           <div>
           <span style={{textDecoration: 'underline'}}
           onClick={() =>setAddAnswerForm(!addAnswerForm)}> Add Answer</span>
         </div>
            :  <AddAnswer question={question} request={request} setRequest={setRequest}addAnswerForm={addAnswerForm} setAddAnswerForm={setAddAnswerForm}/>}


      </div>
      <strong>A:</strong> <text>will be rendering answers here</text>
    </div>
  );
}
