import React from 'react';
import {
  render,
  fireEvent,
  screen,
  waitFor,
  act,
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

    expect(screen.getByText('QUESTIONS & ANSWERS')).toBeInTheDocument();
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

  it('renders question details', async () => {
    await act(async () => {
      render(
        <QuestionsListEntry
          question={question}
          request={request}
          setRequest={setRequest}
          productName="Product Name"
        />,
      );
    });

    expect(screen.getByText('Question 1')).toBeInTheDocument();
    expect(screen.getByText('Helpful?')).toBeInTheDocument();
    expect(screen.getByText('Yes')).toBeInTheDocument();
    expect(screen.getByText('Report')).toBeInTheDocument();
  });
  it('increases helpfulness when "Yes" is clicked', async () => {
    await act(async () => {
      render(
        <QuestionsListEntry
          question={question}
          request={request}
          setRequest={setRequest}
          productName="Product Name"
        />,
      );
    });

    const helpfulButton = screen.getByText('Yes');

    await act(async () => {
      fireEvent.click(helpfulButton);
    });

    expect(request).toHaveBeenCalledWith('questions/1/helpful');
  });

  it('opens the "Add Answer" form when "Add Answer" is clicked', async () => {
    await act(async () => {
      render(
        <QuestionsListEntry
          question={question}
          request={request}
          setRequest={setRequest}
          productName="Product Name"
        />,
      );
    });

    const addAnswerButton = screen.getByText('Add Answer');

    await act(async () => {
      fireEvent.click(addAnswerButton);
    });

    expect(screen.getByText('Your Answer')).toBeInTheDocument();
  });
});
// AddAnswer
describe('AddAnswer', () => {
  const question = {
    question_id: 1,
    question_body: 'Question 1',
    question_helpfulness: 5,
  };

  const request = jest.fn();
  const setRequest = jest.fn();

  it('renders the AddAnswer form correctly', async () => {
    await act(async () => {
      render(
        <AddAnswer
          question={question}
          request={request}
          setRequest={setRequest}
          productName="Product Name"
        />,
      );
    });

    expect(screen.getByText('Your Answer')).toBeInTheDocument();
    expect(screen.getByText('Nickname')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('Submit Answer')).toBeInTheDocument();
  });

  it('submits the answer form when "Submit Answer" is clicked', async () => {
    await act(async () => {
      render(
        <AddAnswer
          question={question}
          request={request}
          setRequest={setRequest}
          productName="Product Name"
        />,
      );
    });

    const submitButton = screen.getByText('Submit Answer');

    await act(async () => {
      fireEvent.click(submitButton);
    });

    expect(request).toHaveBeenCalledWith('questions/1/answers', 'POST');
  });
});
// AddQuestion

describe('AddQuestion', () => {
  const request = jest.fn();
  const setRequest = jest.fn();

  it('renders the AddQuestion form correctly', async () => {
    await act(async () => {
      render(
        <AddQuestion request={request} setRequest={setRequest} />,
      );
    });

    expect(screen.getByText('Ask Your Question')).toBeInTheDocument();
    expect(screen.getByText('Your Question')).toBeInTheDocument();
    expect(screen.getByText('Nickname')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('Submit Question')).toBeInTheDocument();
  });

  it('submits the question form when "Submit Question" is clicked', async () => {
    await act(async () => {
      render(
        <AddQuestion request={request} setRequest={setRequest} />,
      );
    });

    const submitButton = screen.getByText('Submit Question');

    await act(async () => {
      fireEvent.click(submitButton);
    });

    expect(request).toHaveBeenCalledWith('questions', 'POST');
  });
});
// AnswersList

describe('AnswersList', () => {
  const answers = [
    {
      answer_id: 1,
      body: 'Answer 1',
      date: '2023-05-20T00:00:00.000Z',
      helpfulness: 5,
      answerer_name: 'User 1',
      photos: [],
    },
    {
      answer_id: 2,
      body: 'Answer 2',
      date: '2023-05-21T00:00:00.000Z',
      helpfulness: 10,
      answerer_name: 'User 2',
      photos: [],
    },
  ];

  const request = jest.fn();
  const setRequest = jest.fn();

  it('renders answers correctly', async () => {
    act(async () => {
      render(
        <AnswersList
          answers={answers}
          request={request}
          setRequest={setRequest}
        />,
      );
    });

    expect(screen.getByText('Answer 1')).toBeInTheDocument();
    expect(screen.getByText('Answer 2')).toBeInTheDocument();
  });

  it('renders "No answers found" when answers array is empty', async () => {
    await act(async () => {
      render(
        <AnswersList
          answers={[]}
          request={request}
          setRequest={setRequest}
        />,
      );
    });

    expect(screen.getByText('No answers found')).toBeInTheDocument();
  });
});
// AnswersListEntry

describe('AnswersListEntry', () => {
  const answer = {
    answer_id: 1,
    body: 'Answer 1',
    date: '2023-05-20T00:00:00.000Z',
    helpfulness: 5,
    answerer_name: 'User 1',
    photos: [],
  };

  const request = jest.fn();
  const setRequest = jest.fn();

  it('renders answer details', async () => {
    await act(async () => {
      render(
        <AnswersListEntry
          answer={answer}
          request={request}
          setRequest={setRequest}
        />,
      );
    });

    expect(screen.getByText('Answer 1')).toBeInTheDocument();
    expect(screen.getByText('by User 1, May 20, 2023')).toBeInTheDocument();
    expect(screen.getByText('Helpful?')).toBeInTheDocument();
    expect(screen.getByText('Yes')).toBeInTheDocument();
    expect(screen.getByText('Report')).toBeInTheDocument();
  });

  it('increases helpfulness when "Yes" is clicked', async () => {
    await act(async () => {
      render(
        <AnswersListEntry
          answer={answer}
          request={request}
          setRequest={setRequest}
        />,
      );
    });

    const helpfulButton = screen.getByText('Yes');

    await act(async () => {
      fireEvent.click(helpfulButton);
    });

    expect(request).toHaveBeenCalledWith('answers/1/helpful');
  });

  it('displays image thumbnail when photos are available', async () => {
    const answerWithPhotos = {
      ...answer,
      photos: ['image1.jpg', 'image2.jpg'],
    };

    await act(async () => {
      render(
        <AnswersListEntry
          answer={answerWithPhotos}
          request={request}
          setRequest={setRequest}
        />,
      );
    });

    const imageThumbnails = screen.getAllByAltText('Answer Photo');

    expect(imageThumbnails.length).toBe(2);
    expect(imageThumbnails[0]).toHaveAttribute('src', 'image1.jpg');
    expect(imageThumbnails[1]).toHaveAttribute('src', 'image2.jpg');
  });
});
// Search

describe('Search', () => {
  const setFilterText = jest.fn();

  it('calls setFilterText with the entered value when Search button is clicked', async () => {
    await act(async () => {
      render(<Search setFilterText={setFilterText} />);
    });

    const searchInput = screen.getByPlaceholderText('Search for a question');

    await act(async () => {
      fireEvent.change(searchInput, { target: { value: 'question' } });
    });

    const searchButton = screen.getByText('Search');

    await act(async () => {
      fireEvent.click(searchButton);
    });

    expect(setFilterText).toHaveBeenCalledWith('question');
  });
});
