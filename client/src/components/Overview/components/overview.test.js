import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../../App.jsx';
import Overview from '../Overview.jsx';
import ImageGallery from './ImageGallery.jsx';


// describe('renders all pieces to frontend', () => {
//   it('should render Overview outer div container', () => {
//     const { container } = render(<Overview />);
//     console.log('YNOWORK', container.firstChild)
//     expect(container.firstChild).toHaveClass('overview');
//   })
// })

describe('Overview Component', () => {
  test('Overview component renders', () => {
    let product = {id: 40347}
    const { container } = render(<Overview product={product} />)
    expect(container.querySelector('.overview')).toBeInTheDocument();
  })
})