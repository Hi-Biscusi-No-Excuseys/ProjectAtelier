import React, { useState } from 'react';
import axios from 'axios';

export default function AddAnswer({
  question, onClose, productName, setAnswers, answers, request, setRequest,
}) {
  const [answer, setAnswer] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [images, setImages] = useState([]);
  // const [imageURLs, setImageURLs] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleImageUpload = (image) => {
    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', 'FECimages');

    return axios
      .post('https://api.cloudinary.com/v1_1/pwang0407/image/upload', formData)
      .then((response) => response.data.secure_url)
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log('Error uploading image:', error);
        return null;
      });
  };

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

    const newAnswer = {
      body: answer,
      name: nickname,
      email,
      photos: [],
    };
    Promise.all(images.map((image) => handleImageUpload(image)))
      .then((uploadedImageURLs) => {
        newAnswer.photos = uploadedImageURLs.filter((url) => url !== null);

        axios.post(`http://localhost:3000/questionsanswers/questions/${questionID}/answers`, newAnswer)
          .then(() => {
            setAnswers([newAnswer, ...answers]);
            setRequest(!request);
          })
          // eslint-disable-next-line no-console
          .catch(() => console.log('Error posting new answer'));
      })
      // eslint-disable-next-line no-console
      .catch((error) => console.log('Error uploading images:', error));
  };

  function onImageChange(e) {
    const { files } = e.target;
    const newImages = Array.from(files);

    if (newImages.length + images.length > 5) {
      return;
    }

    setImages([...images, ...newImages]);
  }

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
                multiple
                accept="image/*"
                onChange={onImageChange}
              />
            </label>
            {/* {imageURLs.map((imageSrc) => <img src={imageSrc} alt="" />)} */}
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
