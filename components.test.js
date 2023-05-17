import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@testing-library/jest-dom';
import App from './client/src/components/App';
import Overview from './client/src/components/Overview/Overview';
import ImageGallery from './client/src/components/Overview/components/ImageGallery';
import QuestionsAnswers from './client/src/components/QuestionsAnswers/QuestionsAnswers';

describe('QuestionsAnswers Component', () => {
  test('QuestionsAnswers renders', () => {
    const product = { id: 123 };
    const { container } = render(<QuestionsAnswers product={product} />)
    expect(container.querySelector('.QuestionsAnswers')).toBeInTheDocument();
  })
})
