import React from 'react';
import axios from 'axios';
import { useState } from 'react';

export default function AddQuestion({product, questions, request, setRequest, onClose, productName }) {
  const[question, setQuestion] = useState('');
  const[nickname, setNickname] = useState('');
  const[email, setEmail] = useState('');

  const handleAddAnswer = (productID, question, nickname, email) => {
    if (!question || !nickname || !email) {
      setErrorMessage('You must enter the following: Answer, Nickname, Email');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address');
      return;
    }
    axios.post(`http://localhost:3000/questionsanswers/questions/`, {
      body: question,
      name: nickname,
      email: email,
      product_id: productID
    })
      .then(() => {
        setRequest(!request);
      })
      .catch(() => console.log('error posting new question'));
  }
  return (
    <div>
      <div className="addAnswer-modal-content">
          <h2>Ask Your Question</h2>
          <h3>About the {productName}</h3>
            <form method="post" onSubmit={(e) => {
              e.preventDefault();
              handleAddAnswer(product.id, question, nickname, email);
              onClose();
            }}>
              <div className="form-group">
                <label htmlFor="question">Your Question *</label>
                <textarea
                  maxLength={1000}
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="nickname">What is your nickname? *</label>
                <input
                  type="text"
                  maxLength={60}
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                  placeholder="Example: jackson11!!"
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
              <button type="submit">Add A Question +</button>
              <button onClick={(e) => {
                onClose();
                setQuestion('');
                setNickname('');
                setEmail('');
              }}>Cancel</button>
            </form>
      </div>
    </div>
  );
}
