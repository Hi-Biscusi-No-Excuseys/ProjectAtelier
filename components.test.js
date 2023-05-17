import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@testing-library/jest-dom';
import App from './client/src/components/App';
import Overview from './client/src/components/Overview/Overview';
import ImageGallery from './client/src/components/Overview/components/ImageGallery';

describe('Overview Component', () => {
  test('Overview component renders', () => {
    let product = {id: 40347}
    const { container } = render(<Overview product={product} />)
    expect(container.querySelector('.overview')).toBeInTheDocument();
  })
})
