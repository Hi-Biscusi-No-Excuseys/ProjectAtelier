import React from 'react';
import { useState, useEffect } from 'react';
import Search from './components/Search';
import QuestionsList from './components/QuestionsList';
import MoreAnsweredQ from './components/MoreAnsweredQ';
import AddQuestion from './components/AddQuestion';
import axios from 'axios';
//40432
export default function QuestionsAnswers({productID}) {
  const [questions, setQuestions] = useState([]);
  const [filterText, setFilterText] = useState('');
  const [request, setRequest] =useState(false);

  useEffect(() => {
    axios.get(`http://localhost:3000/questionsanswers/questions/?product_id=${productID}`)
    .then(({data}) => {
      // console.log('this is DATA!', data.results); // add this line to confirm data is being retrieved
      setQuestions(data.results)
    })
    .catch((err) => console.log(`error getting questions: ${err}`))
  }, [request]);


  return (
    <div>
      <h1>Questions & Answers</h1>
      <Search filterText={filterText} setFilterText={setFilterText} />
      <QuestionsList filterText={filterText} questions={questions} request={request} setRequest={setRequest}/>
      <MoreAnsweredQ />
      <AddQuestion />
    </div>
  );
}
