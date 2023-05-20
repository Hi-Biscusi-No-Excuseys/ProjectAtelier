// import React from 'react';
// import { render, fireEvent, screen } from '@testing-library/react';
// import '@testing-library/jest-dom';
// import App from '../../App';
// import Overview from '../Overview';
// import ImageGallery from './ImageGallery';
// import ProductInfo from './ProductInfo';
// import Details from './productinfo/Details';
// import PartialStars from '../../RatingsReviews/components/PartialStars';
// import StyleSelector from './StyleSelector';
// import mockStyles from './mockStyles.json';
// import StyleIcon from './styleselector/StyleIcon';
// import AddToCart from './AddToCart';
// import SizeSelector from './addtocart/SizeSelector';
// import QuantitySelector from './addtocart/QuantitySelector';
// import Add from './addtocart/Add';

// const axios = require('axios');

// const testProduct = {
//   id: 40347,
//   campus: 'hr-rfp',
//   name: "Slacker's Slacks",
//   slogan: 'Comfortable for everything, or nothing',
//   description: "I'll tell you how great they are after I nap for a bit.",
//   category: 'Pants',
//   default_price: '65.00',
//   created_at: '2021-08-13T14:38:44.509Z',
//   updated_at: '2021-08-13T14:38:44.509Z',
//   features: [
//     {
//       feature: 'Fabric',
//       value: '99% Cotton 1% Elastic',
//     },
//     {
//       feature: 'Cut',
//       value: 'Loose',
//     },
//   ],
// };

// const currentStyle = {
//   style_id: 240516,
//   name: 'Black',
//   original_price: '65.00',
//   sale_price: null,
//   'default?': true,
//   photos: [
//     {
//       thumbnail_url: 'https://images.unsplash.com/photo-1554260570-9140fd3b7614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//       url: 'https://images.unsplash.com/photo-1554260570-9140fd3b7614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
//     },
//     {
//       thumbnail_url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//       url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
//     },
//     {
//       thumbnail_url: 'https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//       url: 'https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80',
//     },
//     {
//       thumbnail_url: 'https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//       url: 'https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80',
//     },
//     {
//       thumbnail_url: 'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//       url: 'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
//     },
//     {
//       thumbnail_url: 'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//       url: 'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',
//     },
//   ],
//   skus: {
//     1394841: {
//       quantity: 8,
//       size: 'XS',
//     },
//     1394842: {
//       quantity: 16,
//       size: 'S',
//     },
//     1394843: {
//       quantity: 17,
//       size: 'M',
//     },
//     1394844: {
//       quantity: 10,
//       size: 'L',
//     },
//     1394845: {
//       quantity: 15,
//       size: 'XL',
//     },
//     1394846: {
//       quantity: 6,
//       size: 'XXL',
//     },
//   },
// };

// jest.mock('axios');

// describe('Overview Widget', () => {
//   beforeEach(() => {
//     axios.get.mockResolvedValue({ data: testProduct });
//     axios.get.mockResolvedValue({ data: currentStyle });
//     axios.get.mockResolvedValue({ data: mockStyles });
//   });

//   test('Overview component exists', () => {
//     render(<Overview product={testProduct} />);
//     expect(screen.getByTestId(/overviewtest/i)).toBeTruthy();
//   });

//   test('Image Gallery component renders', () => {
//     render(<ImageGallery currentStyle={currentStyle} />);
//     expect(screen.getByTestId(/imagegallery/i)).toBeTruthy();
//   });

//   test('Product Info component renders', () => {
//     render(<ProductInfo overview={testProduct} reviews={125} currentStyle={currentStyle} avg={3.2} />);
//     expect(screen.getByTestId(/productinfo/i)).toBeTruthy();
//   });

//   test('Details from Product Info component renders', () => {
//     render(<Details overview={testProduct} reviews={125} currentStyle={currentStyle} avg={3.2} />);
//     expect(screen.getByTestId(/productdetails/i)).toBeTruthy();
//   });

//   test('Details Read All Reviews button scrolls to Ratings and Reviews', () => {
//     const { getByText } = render(<Details
//       overview={testProduct}
//       reviews={125}
//       currentStyle={currentStyle}
//       avg={3.2}
//     />);
//     const button = getByText('Read All Reviews');
//     const scrollIntoViewMock = jest.fn();

//     document.getElementById = jest.fn(() => ({
//       scrollIntoView: scrollIntoViewMock,
//     }));

//     fireEvent.click(button);

//     expect(document.getElementById).toHaveBeenCalledWith('reviews-list');
//     expect(scrollIntoViewMock).toHaveBeenCalledWith({ behavior: 'smooth' });
//   });

//   test('Style Selector component renders', () => {
//     render(<StyleSelector styles={mockStyles} currentStyle={currentStyle} />);
//     expect(screen.getByTestId(/styleselector/i)).toBeTruthy();
//   });

//   test('Style Icon from Style Selector component renders', () => {
//     render(<StyleIcon style={currentStyle} selected />);
//     expect(screen.getByTestId(/styleicon/i)).toBeTruthy();
//   });

//   test('Add to Cart component renders', () => {
//     render(<AddToCart currentStyle={currentStyle} />);
//     expect(screen.getByTestId(/addtocart/i)).toBeTruthy();
//   });

//   test('Size Selector from Add to Cart component renders', () => {
//     render(<SizeSelector currentStyle={currentStyle} setSkuID={1394877} />);
//     expect(screen.getByTestId(/sizeselector/i)).toBeTruthy();
//   });

//   test('Quantity Selector from Add to Cart component renders', () => {
//     render(<QuantitySelector
//       currentStyle={currentStyle}
//       selectedSize="L"
//       selectedSizeCount={15}
//       setChosenCount={2}
//     />);
//     expect(screen.getByTestId(/quantityselector/i)).toBeTruthy();
//   });

//   test('Add Button from Add to Cart component renders', () => {
//     render(<Add selectedSizeCount={15} />);
//     expect(screen.getByTestId(/add/i)).toBeTruthy();
//   });
// });

// // test('Overview component renders', () => {
// //   render(<Overview product={product} />);
// //   expect(screen.getByText('Read All Reviews')).toBeInTheDocument();
// // });
// // describe('Product Info Component', () => {
// //   test('Reviews render', () => {
// //     const { container } = render(<ProductInfo />);
// //     expect(container.firstChild).toHaveClass('productDetails');
// //   });
// // });

// // describe('Image Gallery Component', () => {
// //   test('Main image renders', () => {
// //     const { container } = render(<ImageGallery />);
// //     // const mainimage = screen.getByTestId('mainImg');
// //     expect(container.querySelector('.mainImg')).toBeInTheDocument();
// //   });
// // });

// // getByTestId(/id here/i)).toBeTruthy();
