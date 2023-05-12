import React from 'react';
import axios from 'axios';
import { useState } from 'react';


export default function AnswersListEntry({answer, request, setRequest }) {
  const[helpfulClicked, setHelpfulClicked] = useState(false);
  const[reportClicked, setReportClicked] = useState(false);

  const handleAHelpfulClick = (answerID) => {
    if(!helpfulClicked ) {
      axios.put(`http://localhost:3000/questionsanswers/answers/${answerID}/helpful`)
      .then(() => {
        setRequest(!request);
        setHelpfulClicked(!helpfulClicked);
      })
      .catch(() => console.log('error updating the answer as helpful'))
    }
  }

  const handleReportClick = (answerID) => {
    if(!reportClicked ) {
      axios.put(`http://localhost:3000/questionsanswers/answers/${answerID}/report`)
      .then(() => {
        setRequest(!request);
        setReportClicked(!reportClicked);
      })
      .catch(() => console.log('error updating the answer as helpful'))
    }
  }

  const date = new Date(answer.date);
  const formattedDate = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  return(
    <div className="singleAnswer">
      <div className="singleAnswerBody">
        {answer.body} <br/>
      </div>
      <div className="singleAnswerUserInfo_HelpfulYes_Report" style={{display: 'flex' }}>
        <div>
          {answer.answerer_name === "Seller" ?
          <div>by <span className="seller">{answer.answerer_name},</span> {formattedDate}&nbsp; | &nbsp; </div>
          : <div>by {answer.answerer_name}, {formattedDate}&nbsp; | &nbsp; </div>}

        </div>

        <div>Helpful? &nbsp;
          <span className="helpfulYesButton"
                onClick={() => handleAHelpfulClick(answer.answer_id)}>Yes</span>
                ({answer.helpfulness}) &nbsp; | &nbsp;
        </div>
        <div>
          {!reportClicked ?
            <span className="reportButton"
            onClick={() => handleReportClick(answer.answer_id)}>Report</span>
          : <span>Reported</span>}

        </div>
      </div>

    </div>

  )
}