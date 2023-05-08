import React from 'react';
import axios from 'axios';
import { useState } from 'react';

export default function AddAnswer({question, request, setRequest, addAnswerForm, setAddAnswerForm}) {
  const[answer, setAnswer] = useState('');
  const[name, setName] = useState('');
  const[email, setEmail] = useState('');

  const handleAddAnswer = (questionID, answer, name, email) => {
    axios.post(`http://localhost:3000/questionsanswers/questions/${questionID}/answers`, {
      body: answer,
      name: name,
      email: email
    })
    .then(() => setRequest(!request))
    .catch(() => console.log('error posting new answer'))
  }
  return(
    <div>
      <form method="post" onSubmit={(e) => {
        e.preventDefault();
        handleAddAnswer(question.question_id, answer, name, email);
        setAnswerAddForm(!addAnswerForm);
      }}>
      <label>
        Answer: <input value={answer}
                  onChange={e => setAnswer(e.target.value)}
                  type="text" />
      </label>
      <label>
        Name: <input value={name}
                  onChange={e => setName(e.target.value)}
                  type="text" />
      </label>
      <label>
        email: <input value={email}
                  onChange={e => setEmail(e.target.value)}
                  type="text" />
      </label>
      <button type="submit">Add Answer</button>
      </form>
    </div>
  )
}