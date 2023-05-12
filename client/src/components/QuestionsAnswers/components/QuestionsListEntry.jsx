import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import AddAnswer from './AddAnswer';
import AnswersList from './AnswersList';

export default function QuestionsListEntry({
  question, request, setRequest, productName,
}) {
  // console.log('question.question_body', question.question_body);
  const [helpfulClicked, setHelpfulClicked] = useState(false);
  const [addAnswerForm, setAddAnswerForm] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [showAllAnswers, setShowAllAnswers] = useState(false);

  const handleQHelpfulClick = (questionID) => {
    if (!helpfulClicked) {
      axios.put(`http://localhost:3000/questionsanswers/questions/${questionID}/helpful`)
        .then(() => {
          setRequest(!request);
          setHelpfulClicked(!helpfulClicked);
        })
        // eslint-disable-next-line no-console
        .catch(() => console.log('error updating question as helpful'));
    }
  };

  useEffect(() => {
    axios.get(`http://localhost:3000/questionsanswers/questions/${question.question_id}/answers`)
      .then(({ data }) => {
      // console.log('this is question id', question.question_id);
        setAnswers(data.results);
      })
      // eslint-disable-next-line no-console
      .catch((err) => console.log(`error getting questions: ${err}`));
  }, [request]);

  const buttonText = showAllAnswers ? 'Collapse answers' : 'See more answers';
  const answersToRender = showAllAnswers ? answers : answers.slice(0, 2);

  return (
    <div className="questionsBody">

      <div className="singleQuestion_Helpful_AddAnswer">
        <div className="singleQuestion">
          Q:
          {' '}
          {question.question_body}
        </div>

        <div className="helpful_addAnswer">
          <div>
            Helpful? &nbsp;
            <button
              type="button"
              className="helpfulYesButton"
              onClick={() => handleQHelpfulClick(question.question_id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleQHelpfulClick(question.question_id);
                }
              }}
            >
              Yes

            </button>
            (
            {question.question_helpfulness}
            ) &nbsp;
          </div>
          | &nbsp;
          {' '}
          {!addAnswerForm
            ? (
              <div>
                <button
                  type="button"
                  className="addAnswerButton"
                  onClick={() => setAddAnswerForm(!addAnswerForm)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleQHelpfulClick(question.question_id);
                    }
                  }}
                >
                  Add Answer
                </button>
              </div>
            )
            : createPortal(
              <AddAnswer
                onClose={() => setAddAnswerForm(!addAnswerForm)}
                question={question}
                request={request}
                productName={productName}
                setRequest={setRequest}
              />,
              document.body,
            )}
        </div>
      </div>

      <div className="answerBodyContainer">
        <span className="bold">A:</span>
        <div className="answersAndButton">
          <AnswersList
            answers={answersToRender}
            request={request}
            setRequest={setRequest}
          />
          {answers.length > 2
            && (
            <button
              type="button"
              className="seeMoreAnswersButton"
              onClick={() => setShowAllAnswers(!showAllAnswers)}
            >
              {buttonText}
            </button>
            )}
        </div>
      </div>

    </div>
  );
}
