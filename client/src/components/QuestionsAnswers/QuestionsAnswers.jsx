import React from 'react';
import { useState, useEffect } from 'react';
import Search from './components/Search';
import QuestionsList from './components/QuestionsList';
import MoreAnsweredQ from './components/MoreAnsweredQ';
import AddQuestion from './components/AddQuestion';

export default function QuestionsAnswers() {
  const [questions, setQuestions] = useState([]);
  const [filterText, setFilterText] = useState('');

  return (
    <div>
      <h1>Questions & Answers</h1>
      <Search filterText={filterText} setFilterText={setFilterText} />
      <QuestionsList filterText={filterText} />
      <MoreAnsweredQ />
      <AddQuestion />
    </div>
  );
}
