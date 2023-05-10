import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ReviewTile from './ReviewTile';

describe('ReviewTile', () => {
  const mockReview = {
    reviewer_name: 'John Doe',
    date: new Date().toISOString(),
    rating: 4,
    summary: 'Good product',
    body: 'I found this product very useful.',
    helpfulness: 3,
    photos: [],
    recommend: true,
    response: null
  };

  test('renders ReviewTile component', () => {
    render(<ReviewTile review={mockReview} />);

    // Check for a specific element
    expect(screen.getByText(/Good product/i)).toBeInTheDocument();
  });
});
