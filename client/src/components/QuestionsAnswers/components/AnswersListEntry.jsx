import React, { useState } from 'react';
import axios from 'axios';
import { createPortal } from 'react-dom';

export default function AnswersListEntry({ answer, request, setRequest }) {
  const [helpfulClicked, setHelpfulClicked] = useState(false);
  const [reportClicked, setReportClicked] = useState(false);
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const [photoURL, setPhotoURL] = useState('');

  const handleAHelpfulClick = (answerID) => {
    if (!helpfulClicked) {
      axios.put(`http://localhost:3000/questionsanswers/answers/${answerID}/helpful`)
        .then(() => {
          setRequest(!request);
          setHelpfulClicked(!helpfulClicked);
        })
        // eslint-disable-next-line no-console
        .catch(() => console.log('error updating the answer as helpful'));
    }
  };

  const handleReportClick = (answerID) => {
    if (!reportClicked) {
      axios.put(`http://localhost:3000/questionsanswers/answers/${answerID}/report`)
        .then(() => {
          setRequest(!request);
          setReportClicked(!reportClicked);
        })
        // eslint-disable-next-line no-console
        .catch(() => console.log('error updating the answer as helpful'));
    }
  };

  function handlePhotoModal(url) {
    console.log('photomodal CLICKED');
    setPhotoURL(url);
    setShowPhotoModal(true);
  }
  // function handlePhotoError() {
  //   setShowPhotoModal(false);
  //   setPhotoURL('');
  // }

  const date = new Date(answer.date);
  const formattedDate = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  return (
    <div className="singleAnswer">
      <div className="singleAnswerBody">
        {answer.body}
        {' '}
        <br />
      </div>
      {answer.photos.length
        ? (
          <div className="answer_photos">
            {answer.photos.map((photo) => (
              <button
                type="button"
                key={photo.id}
                onClick={() => handlePhotoModal(photo.url)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handlePhotoModal(photo.url);
                  }
                }}
              >
                <img
                  alt=""
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                  className="answer_photo_thumb"
                  src={photo.url}
                />

              </button>
            ))}
          </div>
        )
        : null}

      {showPhotoModal && createPortal(
        <div id="answer_photo_modal">
          <img id="answer_photo" src={photoURL} alt="" />
          <button
            type="button"
            onClick={() => setShowPhotoModal(false)}
          >
            Close
          </button>
        </div>,
        document.body,
      )}

      <div className="singleAnswerUserInfo_HelpfulYes_Report" style={{ display: 'flex' }}>
        <div>
          {answer.answerer_name === 'Seller'
            ? (
              <div>
                by
                <span className="seller">
                  {answer.answerer_name}
                  ,
                </span>
                {formattedDate}
                  &nbsp; | &nbsp;
              </div>
            )
            : (
              <div>
                by &nbsp;
                {answer.answerer_name}
                , &nbsp;
                {formattedDate}
                &nbsp; | &nbsp;
              </div>
            )}
        </div>

        <div>
          Helpful? &nbsp;
          <span
            className="helpfulYesButton"
            role="button"
            tabIndex="0"
            onClick={() => handleAHelpfulClick(answer.answer_id)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleAHelpfulClick(answer.answer_id);
              }
            }}
          >
            Yes

          </span>
          (
          {answer.helpfulness}
          ) &nbsp; | &nbsp;
        </div>
        <div>
          {!reportClicked
            ? (
              <span
                className="reportButton"
                role="button"
                tabIndex="0"
                onClick={() => handleReportClick(answer.answer_id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleAHelpfulClick(answer.answer_id);
                  }
                }}
              >
                Report

              </span>
            )
            : <span>Reported</span>}

        </div>
      </div>

    </div>

  );
}
