import React from 'react';
import { useState, useEffect } from 'react';
import Search from './Search';
import QuestionsList from './QuestionsList';
import MoreAnsweredQ from './MoreAnsweredQ';
import AddQuestion from './AddQuestion';

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
