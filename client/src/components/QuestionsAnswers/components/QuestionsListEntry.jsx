import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import AddAnswer from './AddAnswer.jsx';
import AnswersList from './AnswersList.jsx';

export default function QuestionsListEntry({question, request, setRequest, productName}) {
  // console.log('question.question_body', question.question_body);
  const[helpfulClicked, setHelpfulClicked] = useState(false);
  const[addAnswerForm, setAddAnswerForm] = useState(false);
  const[answers, setAnswers] = useState([]);
  const [showAllAnswers, setShowAllAnswers] = useState(false);

  const handleQHelpfulClick = (questionID) => {
    if(!helpfulClicked ) {
      axios.put(`http://localhost:3000/questionsanswers/questions/${questionID}/helpful`)
      .then(() => {
        setRequest(!request);
        setHelpfulClicked(!helpfulClicked);
      })
      .catch(() => console.log('error updating question as helpful'))
    }
  }

  useEffect(() => {
    axios.get(`http://localhost:3000/questionsanswers/questions/${question.question_id}/answers`)
    .then(({data}) => {
      // console.log('this is question id', question.question_id);
      // console.log('these are answersLIST!', data.results); // add this line to confirm data is being retrieved
      setAnswers(data.results)
    })
    .catch((err) => console.log(`error getting questions: ${err}`))
  }, [request]);


  const buttonText = showAllAnswers ? 'Collapse answers' : 'See more answers';
  const answersToRender = showAllAnswers ? answers : answers.slice(0, 2);


  return (
    <div className="questionsBody" >

      <div className="singleQuestion" style={{display: 'flex', marginBottom: '8px'}} >
        <div><strong>Q: {question.question_body}</strong></div> &nbsp;&nbsp;
        <div>Helpful?
          <span style={{textDecoration: 'underline'}}
          onClick={() => handleQHelpfulClick(question.question_id)}>Yes</span>
          ({question.question_helpfulness}) &nbsp;
        </div>
          | &nbsp; {!addAnswerForm ?
           <div>
           <span style={{textDecoration: 'underline'}}
           onClick={() =>setAddAnswerForm(!addAnswerForm)}> Add Answer</span>
         </div>
            : createPortal(
              <AddAnswer onClose={() => setAddAnswerForm(!addAnswerForm)} question={question} request={request} productName={productName} setRequest={setRequest} />,
              document.body
            )
          }
      </div>


      <div className="answerBody">
        <span><strong >A:</strong></span>
        <div className='answersAndButton' >
          <AnswersList
            answers={answersToRender}
            request={request}
            setRequest={setRequest}
          />
          {answers.length > 2 &&
            <button className='seeMoreAnswersButton' onClick={() => setShowAllAnswers(!showAllAnswers)}>{buttonText}</button>
          }
        </div>
      </div>


    </div>
  );
}

