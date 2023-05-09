import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './client/src/components/App.jsx';
import Overview from './client/src/components/Overview/Overview.jsx'
import QuestionsAnswers from './client/src/components/QuestionsAnswers/QuestionsAnswers.jsx';


test('QuestionsAnswers renders', () => {
  const product = { id: 123 };
  const { container } = render(<QuestionsAnswers product={product} />)
  expect(container.querySelector('.QuestionsAnswers')).toBeInTheDocument()
})
