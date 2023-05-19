import React from 'react';
import {
  render, fireEvent, screen, waitFor, act,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
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
  test('renders QuestionsAnswers component', async () => {
    const product = { id: 123 };
    axios.get.mockResolvedValue({ data: { results: [] } });

    await act(async () => {
      render(<QuestionsAnswers product={product} />);
    });

    expect(screen.getByText('Questions & Answers')).toBeInTheDocument();
  });
});

// Questions List
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

  it('renders questions correctly', async () => {
    await act(async () => {
      render(
        <QuestionsList
          questions={questions}
          request={request}
          setRequest={setRequest}
          productName="Product Name"
          filterText=""
        />,
      );
    });

    expect(screen.getByText('Question 2')).toBeInTheDocument();
    expect(screen.getByText('Question 1')).toBeInTheDocument();
    expect(screen.getByText('Question 3')).toBeInTheDocument();
  });

  it('renders "No questions found" when questions array is empty', async () => {
    await act(async () => {
      render(
        <QuestionsList
          questions={[]}
          request={request}
          setRequest={setRequest}
          productName="Product Name"
          filterText=""
        />,
      );
    });

    expect(screen.getByText('No questions found')).toBeInTheDocument();
  });

  it('renders filtered questions correctly', async () => {
    await act(async () => {
      render(
        <QuestionsList
          questions={questions}
          request={request}
          setRequest={setRequest}
          productName="Product Name"
          filterText="2"
        />,
      );
    });

    expect(screen.getByText('Question 2')).toBeInTheDocument();
    expect(screen.queryByText('Question 1')).toBeNull();
    expect(screen.queryByText('Question 3')).toBeNull();
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
      />,
    );

    expect(getByText('Q: Question 1')).toBeInTheDocument();
  });

  it('handles helpful button click', async () => {
    axios.put.mockResolvedValueOnce();
    const { getByText } = render(
      <QuestionsListEntry
        question={question}
        request={request}
        setRequest={setRequest}
        productName="Product Name"
      />,
    );

    const helpfulButton = getByText('Yes');
    await act(async () => {
      fireEvent.click(helpfulButton);
    });

    expect(axios.put).toHaveBeenCalledWith(
      `http://localhost:3000/questionsanswers/questions/${question.question_id}/helpful`,
    );
    expect(request).toHaveBeenCalledTimes(1);
  });

  it('renders add answer form when Add Answer button is clicked', async () => {
    const { getByText, queryByText } = render(
      <QuestionsListEntry
        question={question}
        request={request}
        setRequest={setRequest}
        productName="Product Name"
      />,
    );

    const addAnswerButton = getByText('Add Answer');
    await act(async () => {
      fireEvent.click(addAnswerButton);
    });

    expect(queryByText('Add Answer')).toBeNull();
    expect(queryByText('Submit')).toBeInTheDocument();
    expect(queryByText('Cancel')).toBeInTheDocument();
  });

  it('renders answers correctly', async () => {
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
      />,
    );

    expect(axios.get).toHaveBeenCalledWith(
      `http://localhost:3000/questionsanswers/questions/${question.question_id}/answers`,
    );

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    expect(getByText('A:')).toBeInTheDocument();
    expect(getByText('Answer 1')).toBeInTheDocument();
    expect(getByText('Answer 2')).toBeInTheDocument();
    expect(getByText('See more answers')).toBeInTheDocument();
  });
});

// answersList

describe('AnswersList Component', () => {
  const answers = [
    {
      answer_id: 1,
      answerer_name: 'User1',
      helpfulness: 5,
    },
    {
      answer_id: 2,
      answerer_name: 'User2',
      helpfulness: 3,
    },
    {
      answer_id: 3,
      answerer_name: 'Seller',
      helpfulness: 8,
    },
  ];

  const request = true;
  const setRequest = jest.fn();

  test('renders AnswersList component', () => {
    render(
      <AnswersList
        answers={answers}
        request={request}
        setRequest={setRequest}
      />,
    );

    expect(screen.getByText('User1')).toBeInTheDocument();
    expect(screen.getByText('User2')).toBeInTheDocument();
    expect(screen.getByText('Seller')).toBeInTheDocument();
  });

  test('sorts answers by helpfulness', () => {
    render(
      <AnswersList
        answers={answers}
        request={request}
        setRequest={setRequest}
      />,
    );

    const answerElements = screen.getAllByTestId('answer-entry');

    expect(answerElements[0]).toHaveTextContent('Seller');
    expect(answerElements[1]).toHaveTextContent('User1');
    expect(answerElements[2]).toHaveTextContent('User2');
  });

  test('displays "No Answers found" message when there are no answers', () => {
    render(
      <AnswersList
        answers={[]}
        request={request}
        setRequest={setRequest}
      />,
    );

    expect(screen.getByText('No Answers found')).toBeInTheDocument();
  });
});

// AddQuestion
describe('AddQuestion Component', () => {
  const product = {
    id: 1,
    name: 'Product Name',
  };

  const request = true;
  const setRequest = jest.fn();
  const onClose = jest.fn();

  test('renders AddQuestion component', () => {
    render(
      <AddQuestion
        product={product}
        request={request}
        setRequest={setRequest}
        onClose={onClose}
        productName={product.name}
      />,
    );

    expect(screen.getByText('Ask Your Question')).toBeInTheDocument();
    expect(screen.getByText(`About the ${product.name}`)).toBeInTheDocument();
  });

  test('handles form submission with valid inputs', async () => {
    axios.post.mockResolvedValueOnce();
    render(
      <AddQuestion
        product={product}
        request={request}
        setRequest={setRequest}
        onClose={onClose}
        productName={product.name}
      />,
    );

    const questionInput = screen.getByLabelText('Your Question *');
    const nicknameInput = screen.getByLabelText('What is your nickname? *');
    const emailInput = screen.getByLabelText('Your email *');
    const submitButton = screen.getByText('Add A Question +');

    fireEvent.change(questionInput, { target: { value: 'Question' } });
    fireEvent.change(nicknameInput, { target: { value: 'Nickname' } });
    fireEvent.change(emailInput, { target: { value: 'email@example.com' } });

    await fireEvent.click(submitButton);

    expect(axios.post).toHaveBeenCalledWith('http://localhost:3000/questionsanswers/questions/', {
      body: 'Question',
      name: 'Nickname',
      email: 'email@example.com',
      product_id: product.id,
    });
    expect(setRequest).toHaveBeenCalledTimes(1);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  test('displays error message for missing inputs', async () => {
    render(
      <AddQuestion
        product={product}
        request={request}
        setRequest={setRequest}
        onClose={onClose}
        productName={product.name}
      />,
    );

    const submitButton = screen.getByText('Add A Question +');

    await fireEvent.click(submitButton);

    expect(screen.queryByText('You must enter the following: Answer, Nickname, Email')).not.toBeNull();
    expect(axios.post).not.toHaveBeenCalled();
    expect(setRequest).not.toHaveBeenCalled();
    expect(onClose).not.toHaveBeenCalled();
  });

  test('displays error message for invalid email format', async () => {
    render(
      <AddQuestion
        product={product}
        request={request}
        setRequest={setRequest}
        onClose={onClose}
        productName={product.name}
      />,
    );

    const emailInput = screen.getByLabelText('Your email *');
    const submitButton = screen.getByText('Add A Question +');

    fireEvent.change(emailInput, { target: { value: 'invalid_email' } });
    await fireEvent.click(submitButton);

    expect(screen.getByText('Please enter a valid email address')).toBeInTheDocument();
    expect(axios.post).not.toHaveBeenCalled();
    expect(setRequest).not.toHaveBeenCalled();
    expect(onClose).not.toHaveBeenCalled();
  });
});

// AddAnswer

describe('AddAnswer Component', () => {
  const question = {
    question_id: 1,
    question_body: 'Question Body',
  };

  const onClose = jest.fn();
  const productName = 'Product Name';
  const setAnswers = jest.fn();
  const answers = [];
  const request = true;
  const setRequest = jest.fn();

  test('renders AddAnswer component', () => {
    render(
      <AddAnswer
        question={question}
        onClose={onClose}
        productName={productName}
        setAnswers={setAnswers}
        answers={answers}
        request={request}
        setRequest={setRequest}
      />,
    );

    expect(screen.getByText('Submit your Answer')).toBeInTheDocument();
    expect(screen.getByText(`${productName}: ${question.question_body}`)).toBeInTheDocument();
  });

  test('handles form submission with valid inputs', async () => {
    axios.post.mockResolvedValueOnce();
    render(
      <AddAnswer
        question={question}
        onClose={onClose}
        productName={productName}
        setAnswers={setAnswers}
        answers={answers}
        request={request}
        setRequest={setRequest}
      />,
    );

    const answerInput = screen.getByLabelText('Your Answer *');
    const nicknameInput = screen.getByLabelText('What is your nickname? *');
    const emailInput = screen.getByLabelText('Your email *');
    const submitButton = screen.getByText('Add Answer');

    fireEvent.change(answerInput, { target: { value: 'Answer' } });
    fireEvent.change(nicknameInput, { target: { value: 'Nickname' } });
    fireEvent.change(emailInput, { target: { value: 'email@example.com' } });

    await fireEvent.click(submitButton);

    expect(axios.post).toHaveBeenCalledWith(
      `http://localhost:3000/questionsanswers/questions/${question.question_id}/answers`,
      {
        body: 'Answer',
        name: 'Nickname',
        email: 'email@example.com',
        photos: [],
      },
    );
    expect(setAnswers).toHaveBeenCalledTimes(1);
    expect(setRequest).toHaveBeenCalledTimes(1);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  test('displays error message for missing inputs', async () => {
    render(
      <AddAnswer
        question={question}
        onClose={onClose}
        productName={productName}
        setAnswers={setAnswers}
        answers={answers}
        request={request}
        setRequest={setRequest}
      />,
    );

    const submitButton = screen.getByText('Add Answer');

    await fireEvent.click(submitButton);

    expect(screen.getByText('You must enter the following: Answer, Nickname, Email')).toBeInTheDocument();
    expect(axios.post).not.toHaveBeenCalled();
    expect(setAnswers).not.toHaveBeenCalled();
    expect(setRequest).not.toHaveBeenCalled();
    expect(onClose).not.toHaveBeenCalled();
  });

  test('displays error message for invalid email format', async () => {
    render(
      <AddAnswer
        question={question}
        onClose={onClose}
        productName={productName}
        setAnswers={setAnswers}
        answers={answers}
        request={request}
        setRequest={setRequest}
      />,
    );

    const emailInput = screen.getByLabelText('Your email *');
    const submitButton = screen.getByText('Add Answer');
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });

    await fireEvent.click(submitButton);

    expect(screen.getByText('Please enter a valid email address')).toBeInTheDocument();
    expect(axios.post).not.toHaveBeenCalled();
    expect(setAnswers).not.toHaveBeenCalled();
    expect(setRequest).not.toHaveBeenCalled();
    expect(onClose).not.toHaveBeenCalled();
  });
});

// answerListentry

describe('AnswersListEntry Component', () => {
  const answer = {
    answer_id: 1,
    body: 'Answer Body',
    photos: [],
    helpfulness: 0,
    answerer_name: 'John',
    date: new Date(),
  };

  const request = true;
  const setRequest = jest.fn();

  test('renders AnswersListEntry component', () => {
    render(
      <AnswersListEntry
        answer={answer}
        request={request}
        setRequest={setRequest}
      />
    );

    expect(screen.getByText(answer.body)).toBeInTheDocument();
    expect(screen.getByText(`by ${answer.answerer_name},`)).toBeInTheDocument();
  });

  test('handles helpful click', async () => {
    axios.put.mockResolvedValueOnce();
    render(
      <AnswersListEntry
        answer={answer}
        request={request}
        setRequest={setRequest}
      />
    );

    const helpfulButton = screen.getByText('Yes');

    fireEvent.click(helpfulButton);

    expect(axios.put).toHaveBeenCalledWith(`http://localhost:3000/questionsanswers/answers/${answer.answer_id}/helpful`);
    expect(setRequest).toHaveBeenCalledTimes(1);
  });

  test('handles report click', async () => {
    axios.put.mockResolvedValueOnce();
    render(
      <AnswersListEntry
        answer={answer}
        request={request}
        setRequest={setRequest}
      />
    );

    const reportButton = screen.getByText('Report');

    fireEvent.click(reportButton);

    expect(axios.put).toHaveBeenCalledWith(`http://localhost:3000/questionsanswers/answers/${answer.answer_id}/report`);
    expect(setRequest).not.toHaveBeenCalled();
  });

  test('handles photo modal', () => {
    render(
      <AnswersListEntry
        answer={answer}
        request={request}
        setRequest={setRequest}
      />
    );

    const photoButton = screen.getByRole('button');

    fireEvent.click(photoButton);

    expect(screen.getByAltText('')).toBeInTheDocument();
  });
});