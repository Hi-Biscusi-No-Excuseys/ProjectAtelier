import React from 'react';
import axios from 'axios';
import { useState } from 'react';

export default function AddAnswer({question, request, setRequest, onClose, productName }) {
  const[answer, setAnswer] = useState('');
  const[nickname, setNickname] = useState('');
  const[email, setEmail] = useState('');
  const [images, setImages] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleAddAnswer = (questionID, answer, nickname, email) => {
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
    axios.post(`http://localhost:3000/questionsanswers/questions/${questionID}/answers`, {
      body: answer,
      name: nickname,
      email: email
    })
      .then(() => {
        setRequest(!request);
      })
      .catch(() => console.log('error posting new answer'));
  }
  return(
    <div>
        <div className="modal-content">
          <h2>Submit your Answer</h2>
          <h3>{productName}: {question.question_body}</h3>
          <form method="post" onSubmit={(e) => {
            e.preventDefault();
            handleAddAnswer(question.question_id, answer, nickname, email);
            onClose();
          }}>
          <div className="form-group">
                <label htmlFor="answer">Your Answer *</label>
                <textarea
                  maxLength={1000}
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="nickname">What is your nickname? *</label>
                <input
                  type="text"
                  maxLength={60}
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                  placeholder="Example: jack543!"
                />
                <p className="text-muted">For privacy reasons, do not use your full name or email address</p>
              </div>
              <div className="form-group">
                <label htmlFor="email">Your email *</label>
                <input value={email}
                  type="email"
                  maxLength={60}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Example: jack@email.com"
                />
                <p className="text-muted">For authentication reasons, you will not be emailed</p>
              </div>
              <div className="form-group">
                <label htmlFor="images">Upload your photos</label>
                <input
                  type="file"
                  id="images"
                  multiple onChange={(e) => {
                    const files = e.target.files;
                    const selectedImages = [];
                    for (let i = 0; i < files.length && i < 5; i++) {
                      selectedImages.push(files[i]);
                    }
                    setImages(selectedImages);
                  }}
                />
                {images.map((image, index) => (
                  <img key={index} src={URL.createObjectURL(image)} alt={`Image ${index}`} />
                ))}
              </div>
          <button type="submit">Add Answer</button>
          <button onClick={(e) => {
            onClose();
            setAnswer('');
            setNickname('');
            setEmail('');
          }}>Cancel</button>
          </form>
        </div>
    </div>
  )
}