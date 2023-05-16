import React, { useState } from 'react';
import axios from 'axios';

export default function AddAnswer({
  question, request, setRequest, onClose, productName, setAnswers, answers,
}) {
  const [answer, setAnswer] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [images, setImages] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleAddAnswer = (questionID) => {
    // check if mandatory fields are filled
    if (!answer || !nickname || !email) {
      setErrorMessage('You must enter the following: Answer, Nickname, Email');
      return;
    }

    // check if email is in correct format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address');
      return;
    }

    // make the post request
    const newAnswer = {
      body: answer,
      name: nickname,
      email,
      photos: [],
    };
    axios.post(`http://localhost:3000/questionsanswers/questions/${questionID}/answers`, newAnswer)
      .then(() => {
        setAnswers([newAnswer, ...answers]);
        // setRequest(!request);
      })
      // eslint-disable-next-line no-console
      .catch(() => console.log('error posting new answer'));
  };
  console.log('these are ANSWERSSSSS', answers);
  return (
    <div id="addAnswer-modal">
      <div className="addAnswer-modal-content">
        <h2>Submit your Answer</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <h3>
          {productName}
          :
          {' '}
          {question.question_body}
        </h3>
        <form
          method="post"
          onSubmit={(e) => {
            e.preventDefault();
            handleAddAnswer(question.question_id, answer, nickname, email);
            onClose();
          }}
        >
          <div className="form-group">
            <label htmlFor="answer">
              Your Answer *
              <textarea
                required
                name="answer"
                maxLength={1000}
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="nickname">
              What is your nickname? *
              <input
                required
                name="nickname"
                type="text"
                maxLength={60}
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                placeholder="Example: jack543!"
              />
            </label>
            <p className="text-muted">For privacy reasons, do not use your full name or email address</p>
          </div>
          <div className="form-group">
            <label htmlFor="email">
              Your email *
              <input
                required
                name="email"
                value={email}
                type="email"
                maxLength={60}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Example: jack@email.com"
              />
            </label>
            <p className="text-muted">For authentication reasons, you will not be emailed</p>
          </div>
          <div className="form-group">
            <label htmlFor="images">
              Upload your photos
              <input
                type="file"
                id="images"
                multiple
                onChange={(e) => {
                  const { files } = e.target;
                  const selectedImages = [];
                  for (let i = 0; i < files.length && i < 5; i + 1) {
                    selectedImages.push(files[i]);
                  }
                  setImages(selectedImages);
                }}
              />
            </label>
            {images.map((image, index) => (
              <img src={URL.createObjectURL(image)} alt={`${index}`} />
            ))}
          </div>
          <button type="submit">Add Answer</button>
          <button
            type="button"
            onClick={() => {
              onClose();
              setAnswer('');
              setNickname('');
              setEmail('');
            }}
          >
            Cancel

          </button>
        </form>
      </div>
    </div>
  );
}
