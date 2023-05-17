import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@testing-library/jest-dom';
import axios from 'axios';
import QuestionsAnswers from './client/src/components/QuestionsAnswers/QuestionsAnswers';
import QuestionsList from './client/src/components/QuestionsAnswers/components/QuestionsList';
import QuestionsListEntry from './client/src/components/QuestionsAnswers/components/QuestionsListEntry';
import AddAnswer from './client/src/components/QuestionsAnswers/components/AddAnswer';
import AddQuestion from './client/src/components/QuestionsAnswers/components/AddQuestion';
import AnswersList from './client/src/components/QuestionsAnswers/components/AnswersList';
import AnswersListEntry from './client/src/components/QuestionsAnswers/components/AnswersListEntry';
import Search from './client/src/components/QuestionsAnswers/components/Search';

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: { results: [] } })),
  post: jest.fn(() => Promise.resolve()),
  put: jest.fn(() => Promise.resolve()),
}));

describe('QuestionsAnswers Component', () => {
  test('renders QuestionsAnswers component', () => {
    const product = { id: 123 };
    render(<QuestionsAnswers product={product} />);
    expect(screen.getByText('Questions & Answers')).toBeInTheDocument();
  });
});

// questions List

describe('QuestionsList', () => {
  const questions = [
    {
      question_id: 1,
      question_body: 'Question 1',
      question_helpfulness: 5,
    },
    {
      question_id: 2,
      question_body: 'Question 2',
      question_helpfulness: 10,
    },
    {
      question_id: 3,
      question_body: 'Question 3',
      question_helpfulness: 3,
    },
  ];

  const request = jest.fn();
  const setRequest = jest.fn();

  it('renders questions correctly', () => {
    const { getByText } = render(
      <QuestionsList
        questions={questions}
        request={request}
        setRequest={setRequest}
        productName="Product Name"
        filterText=""
      />
    );

    expect(getByText('Question 2')).toBeInTheDocument();
    expect(getByText('Question 1')).toBeInTheDocument();
    expect(getByText('Question 3')).toBeInTheDocument();
  });

  it('renders "No questions found" when questions array is empty', () => {
    const { getByText } = render(
      <QuestionsList
        questions={[]}
        request={request}
        setRequest={setRequest}
        productName="Product Name"
        filterText=""
      />
    );

    expect(getByText('No questions found')).toBeInTheDocument();
  });

  it('renders filtered questions correctly', () => {
    const { getByText, queryByText } = render(
      <QuestionsList
        questions={questions}
        request={request}
        setRequest={setRequest}
        productName="Product Name"
        filterText="2"
      />
    );

    expect(getByText('Question 2')).toBeInTheDocument();
    expect(queryByText('Question 1')).toBeNull();
    expect(queryByText('Question 3')).toBeNull();
  });
});

// questionsListEntry


describe('QuestionsListEntry', () => {
  const question = {
    question_id: 1,
    question_body: 'Question 1',
    question_helpfulness: 5,
  };

  const request = jest.fn();
  const setRequest = jest.fn();

  it('renders question correctly', () => {
    const { getByText } = render(
      <QuestionsListEntry
        question={question}
        request={request}
        setRequest={setRequest}
        productName="Product Name"
      />
    );

    expect(getByText('Q: Question 1')).toBeInTheDocument();
  });

  it('handles helpful button click', () => {
    axios.put.mockResolvedValueOnce();
    const { getByText } = render(
      <QuestionsListEntry
        question={question}
        request={request}
        setRequest={setRequest}
        productName="Product Name"
      />
    );

    const helpfulButton = getByText('Yes');
    fireEvent.click(helpfulButton);

    expect(axios.put).toHaveBeenCalledWith(
      `http://localhost:3000/questionsanswers/questions/${question.question_id}/helpful`
    );
    expect(request).toHaveBeenCalledTimes(1);
  });

  it('renders add answer form when Add Answer button is clicked', () => {
    const { getByText, queryByText } = render(
      <QuestionsListEntry
        question={question}
        request={request}
        setRequest={setRequest}
        productName="Product Name"
      />
    );

    const addAnswerButton = getByText('Add Answer');
    fireEvent.click(addAnswerButton);

    expect(queryByText('Add Answer')).toBeNull();
    expect(queryByText('Submit')).toBeInTheDocument();
    expect(queryByText('Cancel')).toBeInTheDocument();
  });

  it('renders answers correctly', () => {
    const answers = [
      {
        answer_id: 1,
        body: 'Answer 1',
        helpfulness: 3,
      },
      {
        answer_id: 2,
        body: 'Answer 2',
        helpfulness: 8,
      },
    ];

    axios.get.mockResolvedValueOnce({ data: { results: answers } });

    const { getByText } = render(
      <QuestionsListEntry
        question={question}
        request={request}
        setRequest={setRequest}
        productName="Product Name"
      />
    );

    expect(axios.get).toHaveBeenCalledWith(
      `http://localhost:3000/questionsanswers/questions/${question.question_id}/answers`
    );

    expect(getByText('A:')).toBeInTheDocument();
    expect(getByText('Answer 1')).toBeInTheDocument();
    expect(getByText('Answer 2')).toBeInTheDocument();
    expect(getByText('See more answers')).toBeInTheDocument();
  });
});
