import React from 'react';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Search from './components/Search';
import QuestionsList from './components/QuestionsList';
import AddQuestion from './components/AddQuestion';
import axios from 'axios';
//40432
export default function QuestionsAnswers({product}) {
  const [questions, setQuestions] = useState([]);
  const [filterText, setFilterText] = useState('');
  const [request, setRequest] =useState(false);
  const [showAllQuestions, setShowAllQuestions] = useState(false);
  const[addQuestionForm, setAddQuestionForm] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:3000/questionsanswers/questions/?product_id=${product.id}`)
    .then(({data}) => {
      // console.log('this is DATA!', data.results); // add this line to confirm data is being retrieved
      setQuestions(data.results)
    })

    .catch((err) => console.log(`error getting questions: ${err}`))
  }, [request, product]);

  const questionsToRender = showAllQuestions ? questions : questions.slice(0, 4);
  const buttonText = showAllQuestions ? "COLLAPSE ANSWERED QUESTIONS" : "MORE ANSWERED QUESTIONS";
  return (
    <div className="QuestionsAnswers">
      <h1>Questions & Answers</h1>
      <Search filterText={filterText} setFilterText={setFilterText} />
      <QuestionsList productName={product.name} filterText={filterText} questions={questionsToRender} request={request} setRequest={setRequest}/>

      <div className="twoButtons">
        {questions.length > 2 &&
          <button className="moreAnsweredQuestionsButton" onClick={() => setShowAllQuestions(!showAllQuestions)}>{buttonText}</button>
        }

        {!addQuestionForm ?
           <button className="addAQuestionButton"
           onClick={() =>setAddQuestionForm(!addQuestionForm)}> ADD A QUESTION +</button>

            : createPortal(
              <AddQuestion onClose={() => setAddQuestionForm(!addQuestionForm)} questions={questions} request={request} product={product} productName={product.name} setRequest={setRequest} />,
              document.body
            )
          }
      </div>
    </div>
  );
}
