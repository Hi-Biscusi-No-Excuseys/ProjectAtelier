import React, { useState } from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
// import App from './client/src/components/App.jsx';
// import Overview from './client/src/components/Overview/Overview.jsx'
// import QuestionsAnswers from './client/src/components/QuestionsAnswers/QuestionsAnswers.jsx';
import RelatedItems from './client/src/components/RelatedItems/RelatedItems.jsx';

// describe('renders all pieces to frontend', () => {
//   it('should render Overview outer div container', () => {
//     const { container } = render(<Overview />);
//     console.log('YNOWORK', container.firstChild)
//     expect(container.firstChild).toHaveClass('overview');
//   })
// })


test('RelatedItems renders', () => {
  const Wrapper = () => {
    // const testProduct = { id: 123 };
    const testProduct = {
      "id": 40349,
      "campus": "hr-rfp",
      "name": "Pumped Up Kicks",
      "slogan": "Faster than a just about anything",
      "description": "The Pumped Up serves up crisp court style with a modern look. These shoes show off tennis-whites shades and are constructed with a supple leather upper and a classic rubber cupsole.",
      "category": "Kicks",
      "default_price": "89.00",
      "created_at": "2021-08-13T14:38:44.509Z",
      "updated_at": "2021-08-13T14:38:44.509Z",
      "features": [
        {
          "feature": "Sole",
          "value": "Rubber"
        },
        {
          "feature": "Material",
          "value": "FullControlSkin"
        },
        {
          "feature": "Mid-Sole",
          "value": "ControlSupport Arch Bridge"
        },
        {
          "feature": "Stitching",
          "value": "Double Stitch"
        }
      ],
      "product_id": "40349",
      "results": [
        {
          "style_id": 240529,
          "name": "White",
          "original_price": "89.00",
          "sale_price": null,
          "default?": true,
          "photos": [
            {
              "thumbnail_url": "https://images.unsplash.com/photo-1477420143023-6a0e0b04b69a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
              "url": "https://images.unsplash.com/photo-1477420143023-6a0e0b04b69a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
            },
            {
              "thumbnail_url": "https://images.unsplash.com/photo-1518687338977-a84d3086a934?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
              "url": "https://images.unsplash.com/photo-1518687338977-a84d3086a934?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=652&q=80"
            },
            {
              "thumbnail_url": "https://images.unsplash.com/photo-1546367791-e7447b431084?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
              "url": "https://images.unsplash.com/photo-1546367791-e7447b431084?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
            },
            {
              "thumbnail_url": "https://images.unsplash.com/photo-1498168208808-4c2706938a2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
              "url": "https://images.unsplash.com/photo-1498168208808-4c2706938a2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1001&q=80"
            },
            {
              "thumbnail_url": "https://images.unsplash.com/photo-1556812191-381c7e7d96d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
              "url": "https://images.unsplash.com/photo-1556812191-381c7e7d96d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2982&q=80"
            },
            {
              "thumbnail_url": "https://images.unsplash.com/photo-1526330563440-3ae2174b6bce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
              "url": "https://images.unsplash.com/photo-1526330563440-3ae2174b6bce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1655&q=80"
            },
            {
              "thumbnail_url": "uhttps://images.unsplash.com/photo-1515243061678-14fc18b93935?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
              "url": "https://images.unsplash.com/photo-1515243061678-14fc18b93935?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
            },
            {
              "thumbnail_url": "https://images.unsplash.com/photo-1516199707327-5399434d0aa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
              "url": "https://images.unsplash.com/photo-1516199707327-5399434d0aa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1083&q=80"
            },
            {
              "thumbnail_url": "https://images.unsplash.com/photo-1541444446610-749d3299b35e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
              "url": "https://images.unsplash.com/photo-1541444446610-749d3299b35e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
            },
            {
              "thumbnail_url": "https://images.unsplash.com/photo-1548861216-17dd1ac80d5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
              "url": "https://images.unsplash.com/photo-1548861216-17dd1ac80d5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=664&q=80"
            },
            {
              "thumbnail_url": "https://images.unsplash.com/photo-1558422504-3d17542c1799?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
              "url": "https://images.unsplash.com/photo-1558422504-3d17542c1799?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
            }
          ],
          "skus": {
            "1394939": {
              "quantity": 14,
              "size": "7"
            },
            "1394940": {
              "quantity": 25,
              "size": "7.5"
            },
            "1394941": {
              "quantity": 9,
              "size": "8"
            },
            "1394942": {
              "quantity": 2,
              "size": "8.5"
            },
            "1394943": {
              "quantity": 18,
              "size": "9"
            },
            "1394944": {
              "quantity": 12,
              "size": "9.5"
            },
            "1394945": {
              "quantity": 10,
              "size": "10"
            },
            "1394946": {
              "quantity": 18,
              "size": "10.5"
            },
            "1394947": {
              "quantity": 11,
              "size": "11"
            },
            "1394948": {
              "quantity": 35,
              "size": "11.5"
            },
            "1394949": {
              "quantity": 25,
              "size": "12"
            }
          }
        },
        {
          "style_id": 240530,
          "name": "Black",
          "original_price": "89.00",
          "sale_price": null,
          "default?": false,
          "photos": [
            {
              "thumbnail_url": "https://images.unsplash.com/photo-1463100099107-aa0980c362e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
              "url": "https://images.unsplash.com/photo-1463100099107-aa0980c362e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
            },
            {
              "thumbnail_url": "https://images.unsplash.com/photo-1536830220630-ce146cccac84?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
              "url": "https://images.unsplash.com/photo-1536830220630-ce146cccac84?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
            },
            {
              "thumbnail_url": "https://images.unsplash.com/photo-1459947727010-6267d2c1232f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
              "url": "https://images.unsplash.com/photo-1459947727010-6267d2c1232f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
            },
            {
              "thumbnail_url": "https://images.unsplash.com/photo-1526113438757-122d6d54da4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
              "url": "https://images.unsplash.com/photo-1526113438757-122d6d54da4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1563&q=80"
            },
            {
              "thumbnail_url": "https://images.unsplash.com/photo-1523296357416-a4b3c4b9ee65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
              "url": "https://images.unsplash.com/photo-1523296357416-a4b3c4b9ee65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
            },
            {
              "thumbnail_url": "https://images.unsplash.com/photo-1510867759970-3d2ca293be77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
              "url": "https://images.unsplash.com/photo-1510867759970-3d2ca293be77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
            },
            {
              "thumbnail_url": "https://images.unsplash.com/photo-1534960680480-ca9853707e10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
              "url": "https://images.unsplash.com/photo-1534960680480-ca9853707e10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2384&q=80"
            },
            {
              "thumbnail_url": "https://images.unsplash.com/photo-1519330377309-9ee1c6783348?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
              "url": "https://images.unsplash.com/photo-1519330377309-9ee1c6783348?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
            },
            {
              "thumbnail_url": "https://images.unsplash.com/11/converse-fields.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
              "url": "https://images.unsplash.com/11/converse-fields.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=1570&q=80"
            },
            {
              "thumbnail_url": "https://images.unsplash.com/photo-1522032238811-74bc59578599?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
              "url": "https://images.unsplash.com/photo-1522032238811-74bc59578599?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
            },
            {
              "thumbnail_url": "https://images.unsplash.com/photo-1472186422470-1f3fbde547aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
              "url": "https://images.unsplash.com/photo-1472186422470-1f3fbde547aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1647&q=80"
            }
          ],
          "skus": {
            "1394950": {
              "quantity": 14,
              "size": "7"
            },
            "1394951": {
              "quantity": 25,
              "size": "7.5"
            },
            "1394952": {
              "quantity": 9,
              "size": "8"
            },
            "1394953": {
              "quantity": 2,
              "size": "8.5"
            },
            "1394954": {
              "quantity": 18,
              "size": "9"
            },
            "1394955": {
              "quantity": 12,
              "size": "9.5"
            },
            "1394956": {
              "quantity": 10,
              "size": "10"
            },
            "1394957": {
              "quantity": 18,
              "size": "10.5"
            },
            "1394958": {
              "quantity": 11,
              "size": "11"
            },
            "1394959": {
              "quantity": 35,
              "size": "11.5"
            },
            "1394960": {
              "quantity": 25,
              "size": "12"
            }
          }
        }
      ]
    };

    const [product, setProduct] = useState(testProduct);

    return <RelatedItems product={product} setProduct={setProduct}/>;
  };

  const { container } = render(<Wrapper />);
  expect(container.querySelector('#related-items-list')).toBeInTheDocument();
})