import {
  render, screen, fireEvent, waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';
import ReviewTile from './ReviewTile';
import RatingsReviews from '../RatingsReviews';
import SortOptions from './SortOptions';
import AddReview from "./AddReview";
import ProductBreakdown from "./ProductBreakdown";

jest.mock('axios');

describe('RatingsReviews', () => {
  // Resets mock before each test
  beforeEach(() => {
    axios.get.mockReset();
  });

  it('renders loading screen first', () => {
    const mockPromise = new Promise(() => { });
    axios.get.mockImplementationOnce(() => mockPromise);

    render(<RatingsReviews product={{ id: 99 }} />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders main components', async () => {
    axios.get
      .mockResolvedValueOnce({
        data: {
          ratings: {},
          recommended: { false: '0', true: '0' },
          characteristics: {},
        },
      })
      .mockResolvedValueOnce({
        data: {
          results: [], // or some mock reviews
        },
      });

    render(<RatingsReviews product={{ id: 99 }} />);

    await screen.findByTestId('breakdown-list');

    expect(screen.getByTestId('rating-breakdown')).toBeInTheDocument();
  });
});

describe('ReviewTile', () => {
  const mockReview = {
    reviewer_name: 'John Doe',
    date: new Date().toISOString(),
    rating: 4,
    summary: 'Good product',
    body: 'Nam quis nulla. Integer malesuada. In in enim a arcu imperdiet malesuada. Sed vel lectus. Donec odio urna, tempus molestie, porttitor ut, iaculis quis, sem. Phasellus rhoncus. Aenean id metus id velit ullamcorper pulvinar. Vestibulum fermentum tortor id mi.',
    helpfulness: 3,
    photos: [{ id: 1, url: 'https://test.com/photo1.jpg' }],
    recommend: true,
    response: null,
  };

  it('renders ReviewTile component', () => {
    render(<ReviewTile review={mockReview} />);

    expect(screen.getByText(/Good product/i)).toBeInTheDocument();
  });

  it('renders photo modal upon thumbnail click', () => {
    render(<ReviewTile review={mockReview} />);

    fireEvent.click(screen.getByAltText(''));

    expect(screen.getByTestId('review-photo-modal')).toBeInTheDocument();

    const thumbnailAndModalImage = screen.getAllByAltText('');
    thumbnailAndModalImage.forEach((image) => {
      expect(image).toHaveAttribute('src', 'https://test.com/photo1.jpg');
    });
  });

  it('changes show more button to show less upon click', () => {
    render(<ReviewTile review={mockReview} />);

    fireEvent.click(screen.getByText('Show more'));

    expect(screen.getByText('Show less')).toBeInTheDocument();
  });

  it('renders thumbnail photos', () => {
    const { container } = render(<ReviewTile review={mockReview} />);

    expect(container.getElementsByClassName('review-photo-thumb').length).toBe(1);
  });

  it('renders recommended when true', () => {
    render(<ReviewTile review={mockReview} />);

    expect(screen.getByText('✓ I recommend this product')).toBeInTheDocument();
  });

  it('doesnt render recommended when false', () => {
    const mockReview = {
      reviewer_name: 'John Doe',
      date: new Date().toISOString(),
      rating: 4,
      summary: 'Good product',
      body: 'Nam quis nulla.',
      helpfulness: 3,
      photos: [{ id: 1, url: 'https://test.com/photo1.jpg' }],
      recommend: false,
      response: null,
    };

    render(<ReviewTile review={mockReview} />);

    expect(screen.queryByText('I recommend this product')).toBeNull();
  });
});

describe('SortOptions', () => {
  it('renders the helpful option', () => {
    render(<SortOptions />);

    expect(screen.getByText('Helpful')).toBeInTheDocument();
  });

  it('calls setSort with correct argument when value changes', () => {
    const mockSetSort = jest.fn();

    render(<SortOptions setSort={mockSetSort} />);

    const selectBox = screen.getByRole('combobox', { name: /sort/i });

    fireEvent.change(selectBox, { target: { value: 'newest' } });

    expect(mockSetSort).toHaveBeenCalledWith('newest');
  });
});

describe('AddReview', () => {
  const mockSetShowAddReviewModal = jest.fn();
  const mockSetReviewAdded = jest.fn();

  const mockProps = {
    setShowAddReviewModal: mockSetShowAddReviewModal,
    product: { id: 1, name: 'Test Product' },
    characteristics: { Size: { id: 1 }, Width: { id: 2 } },
    setReviewAdded: mockSetReviewAdded,
  };

  it('renders correctly', () => {
    render(<AddReview {...mockProps} />);

    expect(screen.getByText('Write Your Review')).toBeInTheDocument();
    expect(screen.getByText(`About the ${mockProps.product.name}`)).toBeInTheDocument();
  });

  it('handles form submission', async () => {
    axios.post.mockResolvedValueOnce();
    axios.post.mockImplementation(() => Promise.resolve({ data: {} }));
    render(<AddReview {...mockProps} />);


    fireEvent.change(screen.getByLabelText('Nickname'), { target: { value: 'Test User' } });
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'testuser@example.com' } });
    fireEvent.change(screen.getByLabelText('Review Summary'), { target: { value: 'Test Summary' } });
    fireEvent.change(screen.getByLabelText('Review'), { target: { value: 'This is a test and it definitely contains more than fifty characters.' } });
    fireEvent.click(screen.getByLabelText('Do you recommend this product?'));

    const starButtons = screen.getAllByRole('button');
    fireEvent.click(starButtons[4]);

    const submitButton = screen.getByText('Submit');
    fireEvent.click(submitButton);

    await waitFor(() => expect(mockSetReviewAdded).toHaveBeenCalledTimes(1));
  });
});

describe('ProductBreakdown', () => {
  const mockCharacteristics = {
    Size: { id: 1, value: 4.5 },
    Width: { id: 2, value: 3.5 },
    Comfort: { id: 3, value: 2.5 },
    Quality: { id: 4, value: 1.5 },
    Length: { id: 5, value: 0.5 }
  };

  it('renders correctly', () => {
    render(<ProductBreakdown characteristics={mockCharacteristics} />);

    expect(screen.getByText('Size')).toBeInTheDocument();
    expect(screen.getByText('Width')).toBeInTheDocument();
    expect(screen.getByText('Comfort')).toBeInTheDocument();
    expect(screen.getByText('Quality')).toBeInTheDocument();
    expect(screen.getByText('Length')).toBeInTheDocument();
  });

  it('displays characteristics and decides labels correctly', () => {
    render(<ProductBreakdown characteristics={mockCharacteristics} />);

    // Check for Size labels
    expect(screen.getByText('1 Size Small')).toBeInTheDocument();
    expect(screen.getByText('1 Size Big')).toBeInTheDocument();

    // Check for Width labels
    expect(screen.getByText('Too Narrow')).toBeInTheDocument();
    expect(screen.getByText('Too Wide')).toBeInTheDocument();

    // Check for Quality labels
    expect(screen.getByText('As Expected')).toBeInTheDocument();

    // Check for Length labels
    expect(screen.getByText('Too Short')).toBeInTheDocument();
    expect(screen.getByText('Too Long')).toBeInTheDocument();
  });
});
