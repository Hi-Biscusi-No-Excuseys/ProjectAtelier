// import React, { useState } from 'react';
// import {
//   render, fireEvent, screen, waitFor,
// } from '@testing-library/react';
// import '@testing-library/jest-dom';
// import userEvent from '@testing-library/user-event'
// // import preview from 'jest-preview';
// import App from './client/src/components/App.jsx';
// import RelatedItems from './client/src/components/RelatedItems/RelatedItems';
// import RelatedProductsList from './client/src/components/RelatedItems/RelatedProductsList';
// import YourOutfitList from './client/src/components/RelatedItems/YourOutfitList';
// import Comparison from './client/src/components/RelatedItems/Comparison';

// describe('RelatedItems tests', () => {
//   const relatedMock = {
//     id: 40347,
//     campus: 'hr-rfp',
//     name: "Slacker's Slacks",
//     slogan: 'Comfortable for everything, or nothing',
//     description: "I'll tell you how great they are after I nap for a bit.",
//     category: 'Pants',
//     default_price: '65.00',
//     created_at: '2021-08-13T14:38:44.509Z',
//     updated_at: '2021-08-13T14:38:44.509Z',
//     features: [
//       {
//         feature: 'Fabric',
//         value: '99% Cotton 1% Elastic',
//       },
//       {
//         feature: 'Cut',
//         value: 'Loose',
//       },
//     ],
//     product_id: '40347',
//     results: [
//       {
//         style_id: 240516,
//         name: 'Black',
//         original_price: '65.00',
//         sale_price: null,
//         'default?': true,
//         photos: [
//           {
//             thumbnail_url: 'https://images.unsplash.com/photo-1554260570-9140fd3b7614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//             url: 'https://images.unsplash.com/photo-1554260570-9140fd3b7614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
//           },
//           {
//             thumbnail_url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//             url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
//           },
//           {
//             thumbnail_url: 'https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//             url: 'https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80',
//           },
//           {
//             thumbnail_url: 'https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//             url: 'https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80',
//           },
//           {
//             thumbnail_url: 'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//             url: 'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
//           },
//           {
//             thumbnail_url: 'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//             url: 'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',
//           },
//         ],
//         skus: {
//           1394841: {
//             quantity: 8,
//             size: 'XS',
//           },
//           1394842: {
//             quantity: 16,
//             size: 'S',
//           },
//           1394843: {
//             quantity: 17,
//             size: 'M',
//           },
//           1394844: {
//             quantity: 10,
//             size: 'L',
//           },
//           1394845: {
//             quantity: 15,
//             size: 'XL',
//           },
//           1394846: {
//             quantity: 6,
//             size: 'XXL',
//           },
//         },
//       },
//       {
//         style_id: 240517,
//         name: 'Olive Green',
//         original_price: '65.00',
//         sale_price: null,
//         'default?': false,
//         photos: [
//           {
//             thumbnail_url: 'https://images.unsplash.com/photo-1534481909716-9a482087f27d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//             url: 'https://images.unsplash.com/photo-1534481909716-9a482087f27d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
//           },
//           {
//             thumbnail_url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//             url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
//           },
//           {
//             thumbnail_url: 'https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//             url: 'https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80',
//           },
//           {
//             thumbnail_url: 'https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//             url: 'https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80',
//           },
//           {
//             thumbnail_url: 'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//             url: 'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
//           },
//           {
//             thumbnail_url: 'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//             url: 'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',
//           },
//         ],
//         skus: {
//           1394847: {
//             quantity: 8,
//             size: 'XS',
//           },
//           1394848: {
//             quantity: 16,
//             size: 'S',
//           },
//           1394849: {
//             quantity: 17,
//             size: 'M',
//           },
//           1394850: {
//             quantity: 10,
//             size: 'L',
//           },
//           1394851: {
//             quantity: 15,
//             size: 'XL',
//           },
//           1394852: {
//             quantity: 6,
//             size: 'XXL',
//           },
//         },
//       },
//       {
//         style_id: 240518,
//         name: 'Grey',
//         original_price: '65.00',
//         sale_price: null,
//         'default?': false,
//         photos: [
//           {
//             thumbnail_url: 'https://images.unsplash.com/photo-1459501462159-97d5bded1416?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//             url: 'https://images.unsplash.com/photo-1459501462159-97d5bded1416?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
//           },
//           {
//             thumbnail_url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//             url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
//           },
//           {
//             thumbnail_url: 'https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//             url: 'https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80',
//           },
//           {
//             thumbnail_url: 'https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//             url: 'https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80',
//           },
//           {
//             thumbnail_url: 'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//             url: 'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
//           },
//           {
//             thumbnail_url: 'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//             url: 'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',
//           },
//         ],
//         skus: {
//           1394853: {
//             quantity: 8,
//             size: 'XS',
//           },
//           1394854: {
//             quantity: 16,
//             size: 'S',
//           },
//           1394855: {
//             quantity: 17,
//             size: 'M',
//           },
//           1394856: {
//             quantity: 10,
//             size: 'L',
//           },
//           1394857: {
//             quantity: 15,
//             size: 'XL',
//           },
//           1394858: {
//             quantity: 6,
//             size: 'XXL',
//           },
//         },
//       },
//       {
//         style_id: 240519,
//         name: 'Tan',
//         original_price: '65.00',
//         sale_price: null,
//         'default?': false,
//         photos: [
//           {
//             thumbnail_url: 'https://images.unsplash.com/photo-1479756212843-6314ad5121dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//             url: 'https://images.unsplash.com/photo-1479756212843-6314ad5121dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
//           },
//           {
//             thumbnail_url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//             url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
//           },
//           {
//             thumbnail_url: 'https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//             url: 'https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80',
//           },
//           {
//             thumbnail_url: 'https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//             url: 'https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80',
//           },
//           {
//             thumbnail_url: 'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//             url: 'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
//           },
//           {
//             thumbnail_url: 'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//             url: 'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',
//           },
//         ],
//         skus: {
//           1394859: {
//             quantity: 8,
//             size: 'XS',
//           },
//           1394860: {
//             quantity: 16,
//             size: 'S',
//           },
//           1394861: {
//             quantity: 17,
//             size: 'M',
//           },
//           1394862: {
//             quantity: 10,
//             size: 'L',
//           },
//           1394863: {
//             quantity: 15,
//             size: 'XL',
//           },
//           1394864: {
//             quantity: 6,
//             size: 'XXL',
//           },
//         },
//       },
//       {
//         style_id: 240520,
//         name: 'Red',
//         original_price: '65.00',
//         sale_price: null,
//         'default?': false,
//         photos: [
//           {
//             thumbnail_url: 'https://images.unsplash.com/photo-1461551449292-b63f7419ac93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//             url: 'https://images.unsplash.com/photo-1461551449292-b63f7419ac93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1970&q=80',
//           },
//           {
//             thumbnail_url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//             url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
//           },
//           {
//             thumbnail_url: 'https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//             url: 'https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80',
//           },
//           {
//             thumbnail_url: 'https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//             url: 'https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80',
//           },
//           {
//             thumbnail_url: 'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//             url: 'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
//           },
//           {
//             thumbnail_url: 'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//             url: 'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',
//           },
//         ],
//         skus: {
//           1394865: {
//             quantity: 8,
//             size: 'XS',
//           },
//           1394866: {
//             quantity: 16,
//             size: 'S',
//           },
//           1394867: {
//             quantity: 17,
//             size: 'M',
//           },
//           1394868: {
//             quantity: 10,
//             size: 'L',
//           },
//           1394869: {
//             quantity: 15,
//             size: 'XL',
//           },
//           1394870: {
//             quantity: 6,
//             size: 'XXL',
//           },
//         },
//       },
//       {
//         style_id: 240521,
//         name: 'Pinstripe',
//         original_price: '65.00',
//         sale_price: null,
//         'default?': false,
//         photos: [
//           {
//             thumbnail_url: 'https://images.unsplash.com/photo-1511766566737-1740d1da79be?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//             url: 'https://images.unsplash.com/photo-1511766566737-1740d1da79be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
//           },
//           {
//             thumbnail_url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//             url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
//           },
//           {
//             thumbnail_url: 'https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//             url: 'https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80',
//           },
//           {
//             thumbnail_url: 'https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//             url: 'https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80',
//           },
//           {
//             thumbnail_url: 'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//             url: 'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
//           },
//           {
//             thumbnail_url: 'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//             url: 'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',
//           },
//         ],
//         skus: {
//           1394871: {
//             quantity: 8,
//             size: 'XS',
//           },
//           1394872: {
//             quantity: 16,
//             size: 'S',
//           },
//           1394873: {
//             quantity: 17,
//             size: 'M',
//           },
//           1394874: {
//             quantity: 10,
//             size: 'L',
//           },
//           1394875: {
//             quantity: 15,
//             size: 'XL',
//           },
//           1394876: {
//             quantity: 6,
//             size: 'XXL',
//           },
//         },
//       },
//       {
//         style_id: 240522,
//         name: 'Khaki',
//         original_price: '65.00',
//         sale_price: null,
//         'default?': false,
//         photos: [
//           {
//             thumbnail_url: 'https://images.unsplash.com/photo-1560095633-6803ba0461cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//             url: 'https://images.unsplash.com/photo-1560095633-6803ba0461cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80',
//           },
//           {
//             thumbnail_url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//             url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
//           },
//           {
//             thumbnail_url: 'https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//             url: 'https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80',
//           },
//           {
//             thumbnail_url: 'https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//             url: 'https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80',
//           },
//           {
//             thumbnail_url: 'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//             url: 'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
//           },
//           {
//             thumbnail_url: 'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//             url: 'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',
//           },
//         ],
//         skus: {
//           1394877: {
//             quantity: 8,
//             size: 'XS',
//           },
//           1394878: {
//             quantity: 16,
//             size: 'S',
//           },
//           1394879: {
//             quantity: 17,
//             size: 'M',
//           },
//           1394880: {
//             quantity: 10,
//             size: 'L',
//           },
//           1394881: {
//             quantity: 15,
//             size: 'XL',
//           },
//           1394882: {
//             quantity: 6,
//             size: 'XXL',
//           },
//         },
//       },
//       {
//         style_id: 240523,
//         name: 'Plaid',
//         original_price: '65.00',
//         sale_price: null,
//         'default?': false,
//         photos: [
//           {
//             thumbnail_url: 'https://images.unsplash.com/photo-1544701758-5241eb611a48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//             url: 'https://images.unsplash.com/photo-1544701758-5241eb611a48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
//           },
//           {
//             thumbnail_url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//             url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
//           },
//           {
//             thumbnail_url: 'https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//             url: 'https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80',
//           },
//           {
//             thumbnail_url: 'https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//             url: 'https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80',
//           },
//           {
//             thumbnail_url: 'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//             url: 'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
//           },
//           {
//             thumbnail_url: 'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//             url: 'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',
//           },
//         ],
//         skus: {
//           1394883: {
//             quantity: 8,
//             size: 'XS',
//           },
//           1394884: {
//             quantity: 16,
//             size: 'S',
//           },
//           1394885: {
//             quantity: 17,
//             size: 'M',
//           },
//           1394886: {
//             quantity: 10,
//             size: 'L',
//           },
//           1394887: {
//             quantity: 15,
//             size: 'XL',
//           },
//           1394888: {
//             quantity: 6,
//             size: 'XXL',
//           },
//         },
//       },
//       {
//         style_id: 240524,
//         name: 'White',
//         original_price: '65.00',
//         sale_price: null,
//         'default?': false,
//         photos: [
//           {
//             thumbnail_url: 'https://images.unsplash.com/photo-1519722417352-7d6959729417?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//             url: 'https://images.unsplash.com/photo-1519722417352-7d6959729417?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
//           },
//           {
//             thumbnail_url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//             url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
//           },
//           {
//             thumbnail_url: 'https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//             url: 'https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80',
//           },
//           {
//             thumbnail_url: 'https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//             url: 'https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80',
//           },
//           {
//             thumbnail_url: 'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//             url: 'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
//           },
//           {
//             thumbnail_url: 'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//             url: 'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',
//           },
//         ],
//         skus: {
//           1394889: {
//             quantity: 8,
//             size: 'XS',
//           },
//           1394890: {
//             quantity: 16,
//             size: 'S',
//           },
//           1394891: {
//             quantity: 17,
//             size: 'M',
//           },
//           1394892: {
//             quantity: 10,
//             size: 'L',
//           },
//           1394893: {
//             quantity: 15,
//             size: 'XL',
//           },
//           1394894: {
//             quantity: 6,
//             size: 'XXL',
//           },
//         },
//       },
//     ],
//     ratings: {
//       1: '5',
//       2: '3',
//       3: '81',
//       4: '22',
//       5: '12',
//     },
//     recommended: {
//       false: '14',
//       true: '109',
//     },
//     characteristics: {
//       Fit: {
//         id: 135228,
//         value: '3.1500000000000000',
//       },
//       Length: {
//         id: 135229,
//         value: '3.1500000000000000',
//       },
//       Comfort: {
//         id: 135230,
//         value: '3.3684210526315789',
//       },
//       Quality: {
//         id: 135231,
//         value: '3.6842105263157895',
//       },
//     },
//   };

//   test('RelatedItems components render', async () => {
//     render(<RelatedItems product={relatedMock} />);

//     waitFor(() => {
//       expect(screen.queryByText(/RELATED PRODUCTS/)).toBeInTheDocument();
//       expect(screen.queryByText(/YOUR OUTFIT/)).toBeInTheDocument();
//       expect(screen.getByTestId('card-category')).toBeInTheDocument();
//       expect(screen.getByTestId('card-name')).toBeInTheDocument();
//       expect(screen.getByTestId('card-price')).toBeInTheDocument();
//       expect(screen.getByText(/Camo Onesie/)).toBeInTheDocument();
//       expect(screen.getByText(/YEasy 350/)).toBeInTheDocument();
//       expect(screen.getByRole('PartialStars')).toBeInTheDocument();
//     });
//   });

//   const listMock = [
//     {
//       id: 40344,
//       campus: 'hr-rfp',
//       name: 'Camo Onesie',
//       slogan: 'Blend in to your crowd',
//       description: 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
//       category: 'Jackets',
//       default_price: '140.00',
//       created_at: '2021-08-13T14:38:44.509Z',
//       updated_at: '2021-08-13T14:38:44.509Z',
//       features: [
//         {
//           feature: 'Fabric',
//           value: 'Canvas',
//         },
//         {
//           feature: 'Buttons',
//           value: 'Brass',
//         },
//       ],
//       product_id: '40344',
//       results: [
//         {
//           style_id: 240500,
//           name: 'Forest Green & Black',
//           original_price: '140.00',
//           sale_price: null,
//           'default?': true,
//           photos: [
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
//             },
//           ],
//           skus: {
//             1394769: {
//               quantity: 8,
//               size: 'XS',
//             },
//             1394770: {
//               quantity: 16,
//               size: 'S',
//             },
//             1394771: {
//               quantity: 17,
//               size: 'M',
//             },
//             1394772: {
//               quantity: 10,
//               size: 'L',
//             },
//             1394773: {
//               quantity: 15,
//               size: 'XL',
//             },
//             1394774: {
//               quantity: 4,
//               size: 'XL',
//             },
//           },
//         },
//         {
//           style_id: 240501,
//           name: 'Desert Brown & Tan',
//           original_price: '140.00',
//           sale_price: null,
//           'default?': false,
//           photos: [
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1533779183510-8f55a55f15c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1533779183510-8f55a55f15c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1560567546-4c6dbc16877b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1560567546-4c6dbc16877b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1458253329476-1ebb8593a652?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1458253329476-1ebb8593a652?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1422557379185-474fa15bf770?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1422557379185-474fa15bf770?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1490723286627-4b66e6b2882a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1490723286627-4b66e6b2882a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1447958272669-9c562446304f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1447958272669-9c562446304f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2800&q=80',
//             },
//           ],
//           skus: {
//             1394775: {
//               quantity: 8,
//               size: 'XS',
//             },
//             1394776: {
//               quantity: 16,
//               size: 'S',
//             },
//             1394777: {
//               quantity: 17,
//               size: 'M',
//             },
//             1394778: {
//               quantity: 10,
//               size: 'L',
//             },
//             1394779: {
//               quantity: 15,
//               size: 'XL',
//             },
//             1394780: {
//               quantity: 6,
//               size: 'XXL',
//             },
//           },
//         },
//         {
//           style_id: 240502,
//           name: 'Ocean Blue & Grey',
//           original_price: '140.00',
//           sale_price: '100.00',
//           'default?': false,
//           photos: [
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1556304653-cba65c59b3c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1556304653-cba65c59b3c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2761&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1544131750-2985d621da30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1544131750-2985d621da30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1557760257-b02421ae77fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1557760257-b02421ae77fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1551506448-074afa034c05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1551506448-074afa034c05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=938&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1556268652-ad74ebb8f1e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1556268652-ad74ebb8f1e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1557394976-32cc983558ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1557394976-32cc983558ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
//             },
//           ],
//           skus: {
//             1394781: {
//               quantity: 8,
//               size: 'XS',
//             },
//             1394782: {
//               quantity: 16,
//               size: 'S',
//             },
//             1394783: {
//               quantity: 17,
//               size: 'M',
//             },
//             1394784: {
//               quantity: 10,
//               size: 'L',
//             },
//             1394785: {
//               quantity: 15,
//               size: 'XL',
//             },
//             1394786: {
//               quantity: 6,
//               size: 'XXL',
//             },
//           },
//         },
//         {
//           style_id: 240503,
//           name: 'Digital Red & Black',
//           original_price: '140.00',
//           sale_price: null,
//           'default?': false,
//           photos: [
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1530092376999-2431865aa8df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1530092376999-2431865aa8df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1487174244970-cd18784bb4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1487174244970-cd18784bb4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1488554378835-f7acf46e6c98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1488554378835-f7acf46e6c98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1486025402772-bc179c8dfb0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1486025402772-bc179c8dfb0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1473691955023-da1c49c95c78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1473691955023-da1c49c95c78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1517456837005-d757b959ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60',
//               url: 'https://images.unsplash.com/photo-1517456837005-d757b959ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
//             },
//           ],
//           skus: {
//             1394787: {
//               quantity: 8,
//               size: 'XS',
//             },
//             1394788: {
//               quantity: 16,
//               size: 'S',
//             },
//             1394789: {
//               quantity: 17,
//               size: 'M',
//             },
//             1394790: {
//               quantity: 10,
//               size: 'L',
//             },
//             1394791: {
//               quantity: 15,
//               size: 'XL',
//             },
//             1394792: {
//               quantity: 6,
//               size: 'XXL',
//             },
//           },
//         },
//         {
//           style_id: 240504,
//           name: 'Sky Blue & White',
//           original_price: '140.00',
//           sale_price: '100.00',
//           'default?': false,
//           photos: [
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1448526478325-616f2b15b04e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1448526478325-616f2b15b04e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1519098635131-4c8f806d1e82?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1519098635131-4c8f806d1e82?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1483056293146-9eac9521932f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1483056293146-9eac9521932f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1515992854631-13de43baeba1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1515992854631-13de43baeba1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1525141741567-f89ef016dfeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1525141741567-f89ef016dfeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1418985991508-e47386d96a71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1418985991508-e47386d96a71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
//             },
//           ],
//           skus: {
//             1394793: {
//               quantity: 8,
//               size: 'XS',
//             },
//             1394794: {
//               quantity: 16,
//               size: 'S',
//             },
//             1394795: {
//               quantity: 17,
//               size: 'M',
//             },
//             1394796: {
//               quantity: 10,
//               size: 'L',
//             },
//             1394797: {
//               quantity: 15,
//               size: 'XL',
//             },
//             1394798: {
//               quantity: 6,
//               size: 'XXL',
//             },
//           },
//         },
//         {
//           style_id: 240505,
//           name: 'Dark Grey & Black',
//           original_price: '170.00',
//           sale_price: null,
//           'default?': false,
//           photos: [
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1514866726862-0f081731e63f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1514866726862-0f081731e63f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1519689373023-dd07c7988603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1519689373023-dd07c7988603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1506932248762-69d978912b80?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1506932248762-69d978912b80?ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1535639818669-c059d2f038e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1535639818669-c059d2f038e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1498098662025-04e60a212db4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1498098662025-04e60a212db4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1421941027568-40ab08ee5592?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1421941027568-40ab08ee5592?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',
//             },
//           ],
//           skus: {
//             1394799: {
//               quantity: 8,
//               size: 'XS',
//             },
//             1394800: {
//               quantity: 16,
//               size: 'S',
//             },
//             1394801: {
//               quantity: 17,
//               size: 'M',
//             },
//             1394802: {
//               quantity: 10,
//               size: 'L',
//             },
//             1394803: {
//               quantity: 15,
//               size: 'XL',
//             },
//             1394804: {
//               quantity: 6,
//               size: 'XXL',
//             },
//           },
//         },
//       ],
//       ratings: {
//         1: '145',
//         2: '204',
//         3: '321',
//         4: '311',
//         5: '694',
//       },
//       recommended: {
//         false: '424',
//         true: '1251',
//       },
//       characteristics: {
//         Fit: {
//           id: 135219,
//           value: '3.2741935483870968',
//         },
//         Length: {
//           id: 135220,
//           value: '3.3130165289256198',
//         },
//         Comfort: {
//           id: 135221,
//           value: '3.3547334058759521',
//         },
//         Quality: {
//           id: 135222,
//           value: '3.3222698072805139',
//         },
//       },
//     },
//     {
//       id: 40345,
//       campus: 'hr-rfp',
//       name: 'Bright Future Sunglasses',
//       slogan: "You've got to wear shades",
//       description: "Where you're going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.",
//       category: 'Accessories',
//       default_price: '69.00',
//       created_at: '2021-08-13T14:38:44.509Z',
//       updated_at: '2021-08-13T14:38:44.509Z',
//       features: [
//         {
//           feature: 'Lenses',
//           value: 'Ultrasheen',
//         },
//         {
//           feature: 'UV Protection',
//           value: null,
//         },
//         {
//           feature: 'Frames',
//           value: 'LightCompose',
//         },
//       ],
//       product_id: '40345',
//       results: [
//         {
//           style_id: 240506,
//           name: 'Black Lenses & Black Frame',
//           original_price: '69.00',
//           sale_price: null,
//           'default?': false,
//           photos: [
//             {
//               thumbnail_url: null,
//               url: null,
//             },
//           ],
//           skus: {
//             null: {
//               quantity: null,
//               size: null,
//             },
//           },
//         },
//         {
//           style_id: 240507,
//           name: 'Black Lenses & Gold Frame',
//           original_price: '69.00',
//           sale_price: null,
//           'default?': true,
//           photos: [
//             {
//               thumbnail_url: null,
//               url: null,
//             },
//           ],
//           skus: {
//             null: {
//               quantity: null,
//               size: null,
//             },
//           },
//         },
//         {
//           style_id: 240508,
//           name: 'Gold Lenses & Black Frame',
//           original_price: '69.00',
//           sale_price: null,
//           'default?': false,
//           photos: [
//             {
//               thumbnail_url: null,
//               url: null,
//             },
//           ],
//           skus: {
//             null: {
//               quantity: null,
//               size: null,
//             },
//           },
//         },
//         {
//           style_id: 240509,
//           name: 'Gold Lenses & Gold Frame',
//           original_price: '69.00',
//           sale_price: null,
//           'default?': false,
//           photos: [
//             {
//               thumbnail_url: null,
//               url: null,
//             },
//           ],
//           skus: {
//             null: {
//               quantity: null,
//               size: null,
//             },
//           },
//         },
//       ],
//       ratings: {
//         1: '6',
//         2: '4',
//         3: '8',
//         4: '96',
//         5: '26',
//       },
//       recommended: {
//         false: '28',
//         true: '112',
//       },
//       characteristics: {
//         Quality: {
//           id: 135223,
//           value: '3.5208333333333333',
//         },
//       },
//     },
//     {
//       id: 40347,
//       campus: 'hr-rfp',
//       name: "Slacker's Slacks",
//       slogan: 'Comfortable for everything, or nothing',
//       description: "I'll tell you how great they are after I nap for a bit.",
//       category: 'Pants',
//       default_price: '65.00',
//       created_at: '2021-08-13T14:38:44.509Z',
//       updated_at: '2021-08-13T14:38:44.509Z',
//       features: [
//         {
//           feature: 'Fabric',
//           value: '99% Cotton 1% Elastic',
//         },
//         {
//           feature: 'Cut',
//           value: 'Loose',
//         },
//       ],
//       product_id: '40347',
//       results: [
//         {
//           style_id: 240516,
//           name: 'Black',
//           original_price: '65.00',
//           sale_price: null,
//           'default?': true,
//           photos: [
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1554260570-9140fd3b7614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1554260570-9140fd3b7614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',
//             },
//           ],
//           skus: {
//             1394841: {
//               quantity: 8,
//               size: 'XS',
//             },
//             1394842: {
//               quantity: 16,
//               size: 'S',
//             },
//             1394843: {
//               quantity: 17,
//               size: 'M',
//             },
//             1394844: {
//               quantity: 10,
//               size: 'L',
//             },
//             1394845: {
//               quantity: 15,
//               size: 'XL',
//             },
//             1394846: {
//               quantity: 6,
//               size: 'XXL',
//             },
//           },
//         },
//         {
//           style_id: 240517,
//           name: 'Olive Green',
//           original_price: '65.00',
//           sale_price: null,
//           'default?': false,
//           photos: [
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1534481909716-9a482087f27d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1534481909716-9a482087f27d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',
//             },
//           ],
//           skus: {
//             1394847: {
//               quantity: 8,
//               size: 'XS',
//             },
//             1394848: {
//               quantity: 16,
//               size: 'S',
//             },
//             1394849: {
//               quantity: 17,
//               size: 'M',
//             },
//             1394850: {
//               quantity: 10,
//               size: 'L',
//             },
//             1394851: {
//               quantity: 15,
//               size: 'XL',
//             },
//             1394852: {
//               quantity: 6,
//               size: 'XXL',
//             },
//           },
//         },
//         {
//           style_id: 240518,
//           name: 'Grey',
//           original_price: '65.00',
//           sale_price: null,
//           'default?': false,
//           photos: [
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1459501462159-97d5bded1416?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1459501462159-97d5bded1416?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',
//             },
//           ],
//           skus: {
//             1394853: {
//               quantity: 8,
//               size: 'XS',
//             },
//             1394854: {
//               quantity: 16,
//               size: 'S',
//             },
//             1394855: {
//               quantity: 17,
//               size: 'M',
//             },
//             1394856: {
//               quantity: 10,
//               size: 'L',
//             },
//             1394857: {
//               quantity: 15,
//               size: 'XL',
//             },
//             1394858: {
//               quantity: 6,
//               size: 'XXL',
//             },
//           },
//         },
//         {
//           style_id: 240519,
//           name: 'Tan',
//           original_price: '65.00',
//           sale_price: null,
//           'default?': false,
//           photos: [
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1479756212843-6314ad5121dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1479756212843-6314ad5121dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',
//             },
//           ],
//           skus: {
//             1394859: {
//               quantity: 8,
//               size: 'XS',
//             },
//             1394860: {
//               quantity: 16,
//               size: 'S',
//             },
//             1394861: {
//               quantity: 17,
//               size: 'M',
//             },
//             1394862: {
//               quantity: 10,
//               size: 'L',
//             },
//             1394863: {
//               quantity: 15,
//               size: 'XL',
//             },
//             1394864: {
//               quantity: 6,
//               size: 'XXL',
//             },
//           },
//         },
//         {
//           style_id: 240520,
//           name: 'Red',
//           original_price: '65.00',
//           sale_price: null,
//           'default?': false,
//           photos: [
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1461551449292-b63f7419ac93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1461551449292-b63f7419ac93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1970&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',
//             },
//           ],
//           skus: {
//             1394865: {
//               quantity: 8,
//               size: 'XS',
//             },
//             1394866: {
//               quantity: 16,
//               size: 'S',
//             },
//             1394867: {
//               quantity: 17,
//               size: 'M',
//             },
//             1394868: {
//               quantity: 10,
//               size: 'L',
//             },
//             1394869: {
//               quantity: 15,
//               size: 'XL',
//             },
//             1394870: {
//               quantity: 6,
//               size: 'XXL',
//             },
//           },
//         },
//         {
//           style_id: 240521,
//           name: 'Pinstripe',
//           original_price: '65.00',
//           sale_price: null,
//           'default?': false,
//           photos: [
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1511766566737-1740d1da79be?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1511766566737-1740d1da79be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',
//             },
//           ],
//           skus: {
//             1394871: {
//               quantity: 8,
//               size: 'XS',
//             },
//             1394872: {
//               quantity: 16,
//               size: 'S',
//             },
//             1394873: {
//               quantity: 17,
//               size: 'M',
//             },
//             1394874: {
//               quantity: 10,
//               size: 'L',
//             },
//             1394875: {
//               quantity: 15,
//               size: 'XL',
//             },
//             1394876: {
//               quantity: 6,
//               size: 'XXL',
//             },
//           },
//         },
//         {
//           style_id: 240522,
//           name: 'Khaki',
//           original_price: '65.00',
//           sale_price: null,
//           'default?': false,
//           photos: [
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1560095633-6803ba0461cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1560095633-6803ba0461cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',
//             },
//           ],
//           skus: {
//             1394877: {
//               quantity: 8,
//               size: 'XS',
//             },
//             1394878: {
//               quantity: 16,
//               size: 'S',
//             },
//             1394879: {
//               quantity: 17,
//               size: 'M',
//             },
//             1394880: {
//               quantity: 10,
//               size: 'L',
//             },
//             1394881: {
//               quantity: 15,
//               size: 'XL',
//             },
//             1394882: {
//               quantity: 6,
//               size: 'XXL',
//             },
//           },
//         },
//         {
//           style_id: 240523,
//           name: 'Plaid',
//           original_price: '65.00',
//           sale_price: null,
//           'default?': false,
//           photos: [
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1544701758-5241eb611a48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1544701758-5241eb611a48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',
//             },
//           ],
//           skus: {
//             1394883: {
//               quantity: 8,
//               size: 'XS',
//             },
//             1394884: {
//               quantity: 16,
//               size: 'S',
//             },
//             1394885: {
//               quantity: 17,
//               size: 'M',
//             },
//             1394886: {
//               quantity: 10,
//               size: 'L',
//             },
//             1394887: {
//               quantity: 15,
//               size: 'XL',
//             },
//             1394888: {
//               quantity: 6,
//               size: 'XXL',
//             },
//           },
//         },
//         {
//           style_id: 240524,
//           name: 'White',
//           original_price: '65.00',
//           sale_price: null,
//           'default?': false,
//           photos: [
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1519722417352-7d6959729417?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1519722417352-7d6959729417?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',
//             },
//           ],
//           skus: {
//             1394889: {
//               quantity: 8,
//               size: 'XS',
//             },
//             1394890: {
//               quantity: 16,
//               size: 'S',
//             },
//             1394891: {
//               quantity: 17,
//               size: 'M',
//             },
//             1394892: {
//               quantity: 10,
//               size: 'L',
//             },
//             1394893: {
//               quantity: 15,
//               size: 'XL',
//             },
//             1394894: {
//               quantity: 6,
//               size: 'XXL',
//             },
//           },
//         },
//       ],
//       ratings: {
//         1: '5',
//         2: '5',
//         3: '81',
//         4: '22',
//         5: '12',
//       },
//       recommended: {
//         false: '14',
//         true: '111',
//       },
//       characteristics: {
//         Fit: {
//           id: 135228,
//           value: '3.1363636363636364',
//         },
//         Length: {
//           id: 135229,
//           value: '3.1363636363636364',
//         },
//         Comfort: {
//           id: 135230,
//           value: '3.5238095238095238',
//         },
//         Quality: {
//           id: 135231,
//           value: '3.8095238095238095',
//         },
//       },
//     },
//     {
//       id: 40348,
//       campus: 'hr-rfp',
//       name: 'Heir Force Ones',
//       slogan: 'A sneaker dynasty',
//       description: "Now where da boxes where I keep mine? You should peep mine, maybe once or twice but never three times. I'm just a sneaker pro, I love Pumas and shell toes, but can't nothin compare to a fresh crispy white pearl",
//       category: 'Kicks',
//       default_price: '99.00',
//       created_at: '2021-08-13T14:38:44.509Z',
//       updated_at: '2021-08-13T14:38:44.509Z',
//       features: [
//         {
//           feature: 'Sole',
//           value: 'Rubber',
//         },
//         {
//           feature: 'Material',
//           value: 'FullControlSkin',
//         },
//         {
//           feature: 'Mid-Sole',
//           value: 'ControlSupport Arch Bridge',
//         },
//         {
//           feature: 'Stitching',
//           value: 'Double Stitch',
//         },
//       ],
//       product_id: '40348',
//       results: [
//         {
//           style_id: 240525,
//           name: 'White & White',
//           original_price: '99.00',
//           sale_price: null,
//           'default?': true,
//           photos: [
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1514590734052-344a18719611?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1514590734052-344a18719611?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1555274175-6cbf6f3b137b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1555274175-6cbf6f3b137b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1447879027584-9d17c2ca0333?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1447879027584-9d17c2ca0333?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1422728221357-57980993ea99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1422728221357-57980993ea99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1488778578932-0f84d315fcae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1488778578932-0f84d315fcae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=658&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1527431016-15eb83515018?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1527431016-15eb83515018?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1534550017194-5df79ed78967?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1534550017194-5df79ed78967?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1525896650794-60ad4ec40d0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1525896650794-60ad4ec40d0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1560857792-215f9e3534ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1560857792-215f9e3534ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
//             },
//           ],
//           skus: {
//             1394895: {
//               quantity: 14,
//               size: '7',
//             },
//             1394896: {
//               quantity: 25,
//               size: '7.5',
//             },
//             1394897: {
//               quantity: 9,
//               size: '8',
//             },
//             1394898: {
//               quantity: 2,
//               size: '8.5',
//             },
//             1394899: {
//               quantity: 18,
//               size: '9',
//             },
//             1394900: {
//               quantity: 12,
//               size: '9.5',
//             },
//             1394901: {
//               quantity: 10,
//               size: '10',
//             },
//             1394902: {
//               quantity: 18,
//               size: '10.5',
//             },
//             1394903: {
//               quantity: 11,
//               size: '11',
//             },
//             1394904: {
//               quantity: 35,
//               size: '11.5',
//             },
//             1394905: {
//               quantity: 25,
//               size: '12',
//             },
//           },
//         },
//         {
//           style_id: 240526,
//           name: 'White & Red',
//           original_price: '99.00',
//           sale_price: null,
//           'default?': false,
//           photos: [
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1542280756-74b2f55e73ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1542280756-74b2f55e73ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1521093470119-a3acdc43374a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1521093470119-a3acdc43374a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1474494819794-90f9664b530d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1474494819794-90f9664b530d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1465877783223-4eba513e27c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1465877783223-4eba513e27c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1428790031246-698d71b6fe3f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1428790031246-698d71b6fe3f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1470282312847-28b943046dc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1470282312847-28b943046dc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1652&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1428790067070-0ebf4418d9d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1428790067070-0ebf4418d9d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1451256656121-9ffc0c898a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1451256656121-9ffc0c898a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1524604519054-2365ac11e431?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1524604519054-2365ac11e431?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1541006008768-d181e7f9f3d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1541006008768-d181e7f9f3d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1568&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1430390456011-25ac9244999c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1430390456011-25ac9244999c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
//             },
//           ],
//           skus: {
//             1394906: {
//               quantity: 14,
//               size: '7',
//             },
//             1394907: {
//               quantity: 25,
//               size: '7.5',
//             },
//             1394908: {
//               quantity: 9,
//               size: '8',
//             },
//             1394909: {
//               quantity: 2,
//               size: '8.5',
//             },
//             1394910: {
//               quantity: 18,
//               size: '9',
//             },
//             1394911: {
//               quantity: 12,
//               size: '9.5',
//             },
//             1394912: {
//               quantity: 10,
//               size: '10',
//             },
//             1394913: {
//               quantity: 18,
//               size: '10.5',
//             },
//             1394914: {
//               quantity: 11,
//               size: '11',
//             },
//             1394915: {
//               quantity: 35,
//               size: '11.5',
//             },
//             1394916: {
//               quantity: 25,
//               size: '12',
//             },
//           },
//         },
//         {
//           style_id: 240527,
//           name: 'White & Black',
//           original_price: '99.00',
//           sale_price: null,
//           'default?': false,
//           photos: [
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1542702942-161ceb2e3d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1542702942-161ceb2e3d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1503449377594-32dd9ac4467c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1503449377594-32dd9ac4467c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1457968867385-9f877f3f2bce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1457968867385-9f877f3f2bce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1469617833234-8a6843da14d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1469617833234-8a6843da14d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2764&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1499852848443-3004d6dc4cfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1499852848443-3004d6dc4cfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1511499008188-de491bbbae98?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1511499008188-de491bbbae98?ixlib=rb-1.2.1&auto=format&fit=crop&w=988&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1522653216850-4f1415a174fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1522653216850-4f1415a174fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1519396317879-83334cb422f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1519396317879-83334cb422f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1517583010307-3f789911b89c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1517583010307-3f789911b89c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1558191053-c03db2757e3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1558191053-c03db2757e3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1518894781321-630e638d0742?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1518894781321-630e638d0742?ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80',
//             },
//           ],
//           skus: {
//             1394917: {
//               quantity: 14,
//               size: '7',
//             },
//             1394918: {
//               quantity: 25,
//               size: '7.5',
//             },
//             1394919: {
//               quantity: 9,
//               size: '8',
//             },
//             1394920: {
//               quantity: 2,
//               size: '8.5',
//             },
//             1394921: {
//               quantity: 18,
//               size: '9',
//             },
//             1394922: {
//               quantity: 12,
//               size: '9.5',
//             },
//             1394923: {
//               quantity: 10,
//               size: '10',
//             },
//             1394924: {
//               quantity: 18,
//               size: '10.5',
//             },
//             1394925: {
//               quantity: 11,
//               size: '11',
//             },
//             1394926: {
//               quantity: 35,
//               size: '11.5',
//             },
//             1394927: {
//               quantity: 25,
//               size: '12',
//             },
//           },
//         },
//         {
//           style_id: 240528,
//           name: 'White & Blue',
//           original_price: '99.00',
//           sale_price: null,
//           'default?': false,
//           photos: [
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1553981834-a23f5b69e3ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1553981834-a23f5b69e3ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1531091087823-cb600a47ab79?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1531091087823-cb600a47ab79?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1514613818067-e207c3441db0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1514613818067-e207c3441db0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1503146695898-afdf8ce5d5a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1503146695898-afdf8ce5d5a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1512023983263-7e94bf6b913e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1512023983263-7e94bf6b913e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1501813722636-45de2fe4f9b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1501813722636-45de2fe4f9b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1507464098880-e367bc5d2c08?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1507464098880-e367bc5d2c08?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1558682596-dea9bf84c219?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1558682596-dea9bf84c219?ixlib=rb-1.2.1&auto=format&fit=crop&w=2098&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1504281623087-1a6dd8f827c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1504281623087-1a6dd8f827c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1462833867037-0f06eab31cc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1462833867037-0f06eab31cc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
//             },
//           ],
//           skus: {
//             1394928: {
//               quantity: 14,
//               size: '7',
//             },
//             1394929: {
//               quantity: 25,
//               size: '7.5',
//             },
//             1394930: {
//               quantity: 9,
//               size: '8',
//             },
//             1394931: {
//               quantity: 2,
//               size: '8.5',
//             },
//             1394932: {
//               quantity: 18,
//               size: '9',
//             },
//             1394933: {
//               quantity: 12,
//               size: '9.5',
//             },
//             1394934: {
//               quantity: 10,
//               size: '10',
//             },
//             1394935: {
//               quantity: 18,
//               size: '10.5',
//             },
//             1394936: {
//               quantity: 11,
//               size: '11',
//             },
//             1394937: {
//               quantity: 35,
//               size: '11.5',
//             },
//             1394938: {
//               quantity: 25,
//               size: '12',
//             },
//           },
//         },
//       ],
//       ratings: {
//         1: '29',
//         2: '11',
//         3: '74',
//         4: '34',
//         5: '69',
//       },
//       recommended: {
//         false: '32',
//         true: '185',
//       },
//       characteristics: {
//         Size: {
//           id: 135232,
//           value: '2.8393782383419689',
//         },
//         Width: {
//           id: 135233,
//           value: '2.8924050632911392',
//         },
//         Comfort: {
//           id: 135234,
//           value: '3.2095808383233533',
//         },
//         Quality: {
//           id: 135235,
//           value: '3.3353293413173653',
//         },
//       },
//     },
//     {
//       id: 40351,
//       campus: 'hr-rfp',
//       name: 'YEasy 350',
//       slogan: 'Just jumped over jumpman',
//       description: 'These stretchy knit shoes show off asymmetrical lacing and a big sculpted rubber midsole. In a nod to adidas soccer heritage.',
//       category: 'Kicks',
//       default_price: '450.00',
//       created_at: '2021-08-13T14:38:44.509Z',
//       updated_at: '2021-08-13T14:38:44.509Z',
//       features: [
//         {
//           feature: 'Sole',
//           value: 'Rubber',
//         },
//         {
//           feature: 'Material',
//           value: 'FullControlSkin',
//         },
//         {
//           feature: 'Stitching',
//           value: 'Double Stitch',
//         },
//       ],
//       product_id: '40351',
//       results: [
//         {
//           style_id: 240536,
//           name: 'Zebra Stripe',
//           original_price: '900.00',
//           sale_price: null,
//           'default?': false,
//           photos: [
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1551489186-cf8726f514f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1551489186-cf8726f514f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1525&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1558014356-f7c41bc744f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1558014356-f7c41bc744f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1542818212-9899bafcb9db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1542818212-9899bafcb9db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1526&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1515110371136-7e393289662c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1515110371136-7e393289662c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1656&q=80',
//             },
//           ],
//           skus: {
//             1395016: {
//               quantity: 14,
//               size: '7',
//             },
//             1395017: {
//               quantity: 25,
//               size: '7.5',
//             },
//             1395018: {
//               quantity: 9,
//               size: '8',
//             },
//             1395019: {
//               quantity: 2,
//               size: '8.5',
//             },
//             1395020: {
//               quantity: 18,
//               size: '9',
//             },
//             1395021: {
//               quantity: 12,
//               size: '9.5',
//             },
//             1395022: {
//               quantity: 10,
//               size: '10',
//             },
//             1395023: {
//               quantity: 18,
//               size: '10.5',
//             },
//             1395024: {
//               quantity: 11,
//               size: '11',
//             },
//             1395025: {
//               quantity: 35,
//               size: '11.5',
//             },
//             1395026: {
//               quantity: 25,
//               size: '12',
//             },
//           },
//         },
//         {
//           style_id: 240537,
//           name: 'Oreo',
//           original_price: '750.00',
//           sale_price: null,
//           'default?': false,
//           photos: [
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1520904549193-5ab0027b3fa6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1520904549193-5ab0027b3fa6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1525&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
//             },
//           ],
//           skus: {
//             1395027: {
//               quantity: 14,
//               size: '7',
//             },
//             1395028: {
//               quantity: 25,
//               size: '7.5',
//             },
//             1395029: {
//               quantity: 9,
//               size: '8',
//             },
//             1395030: {
//               quantity: 2,
//               size: '8.5',
//             },
//             1395031: {
//               quantity: 18,
//               size: '9',
//             },
//             1395032: {
//               quantity: 12,
//               size: '9.5',
//             },
//             1395033: {
//               quantity: 10,
//               size: '10',
//             },
//             1395034: {
//               quantity: 18,
//               size: '10.5',
//             },
//             1395035: {
//               quantity: 11,
//               size: '11',
//             },
//             1395036: {
//               quantity: 35,
//               size: '11.5',
//             },
//             1395037: {
//               quantity: 25,
//               size: '12',
//             },
//           },
//         },
//         {
//           style_id: 240538,
//           name: 'Red Supply',
//           original_price: '450.00',
//           sale_price: null,
//           'default?': false,
//           photos: [
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1473396413399-6717ef7c4093?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1473396413399-6717ef7c4093?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1558014356-f7c41bc744f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1558014356-f7c41bc744f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1525&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
//             },
//           ],
//           skus: {
//             1395038: {
//               quantity: 14,
//               size: '7',
//             },
//             1395039: {
//               quantity: 25,
//               size: '7.5',
//             },
//             1395040: {
//               quantity: 9,
//               size: '8',
//             },
//             1395041: {
//               quantity: 2,
//               size: '8.5',
//             },
//             1395042: {
//               quantity: 18,
//               size: '9',
//             },
//             1395043: {
//               quantity: 12,
//               size: '9.5',
//             },
//             1395044: {
//               quantity: 10,
//               size: '10',
//             },
//             1395045: {
//               quantity: 18,
//               size: '10.5',
//             },
//             1395046: {
//               quantity: 11,
//               size: '11',
//             },
//             1395047: {
//               quantity: 35,
//               size: '11.5',
//             },
//             1395048: {
//               quantity: 25,
//               size: '12',
//             },
//           },
//         },
//         {
//           style_id: 240539,
//           name: 'White',
//           original_price: '450.00',
//           sale_price: null,
//           'default?': true,
//           photos: [
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1505248254168-1de4e1abfa78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1505248254168-1de4e1abfa78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1649&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1525&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
//             },
//           ],
//           skus: {
//             1395049: {
//               quantity: 14,
//               size: '7',
//             },
//             1395050: {
//               quantity: 25,
//               size: '7.5',
//             },
//             1395051: {
//               quantity: 9,
//               size: '8',
//             },
//             1395052: {
//               quantity: 2,
//               size: '8.5',
//             },
//             1395053: {
//               quantity: 18,
//               size: '9',
//             },
//             1395054: {
//               quantity: 12,
//               size: '9.5',
//             },
//             1395055: {
//               quantity: 10,
//               size: '10',
//             },
//             1395056: {
//               quantity: 18,
//               size: '10.5',
//             },
//             1395057: {
//               quantity: 11,
//               size: '11',
//             },
//             1395058: {
//               quantity: 35,
//               size: '11.5',
//             },
//             1395059: {
//               quantity: 25,
//               size: '12',
//             },
//           },
//         },
//         {
//           style_id: 240540,
//           name: 'Black',
//           original_price: '950.00',
//           sale_price: null,
//           'default?': false,
//           photos: [
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1519482816300-1490fdf2c2bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1519482816300-1490fdf2c2bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1542818212-9899bafcb9db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1542818212-9899bafcb9db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1526&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1515110371136-7e393289662c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1515110371136-7e393289662c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1656&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1512521952190-7e1a47820ff4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1512521952190-7e1a47820ff4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=978&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1470434767159-ac7bf1b43351?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1470434767159-ac7bf1b43351?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1547597456-4c18a06d9073?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1547597456-4c18a06d9073?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1525&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
//             },
//           ],
//           skus: {
//             1395060: {
//               quantity: 14,
//               size: '7',
//             },
//             1395061: {
//               quantity: 25,
//               size: '7.5',
//             },
//             1395062: {
//               quantity: 9,
//               size: '8',
//             },
//             1395063: {
//               quantity: 2,
//               size: '8.5',
//             },
//             1395064: {
//               quantity: 18,
//               size: '9',
//             },
//             1395065: {
//               quantity: 12,
//               size: '9.5',
//             },
//             1395066: {
//               quantity: 10,
//               size: '10',
//             },
//             1395067: {
//               quantity: 18,
//               size: '10.5',
//             },
//             1395068: {
//               quantity: 11,
//               size: '11',
//             },
//             1395069: {
//               quantity: 35,
//               size: '11.5',
//             },
//             1395070: {
//               quantity: 25,
//               size: '12',
//             },
//           },
//         },
//         {
//           style_id: 240541,
//           name: 'Pink',
//           original_price: '450.00',
//           sale_price: null,
//           'default?': false,
//           photos: [
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1554735490-80893c93b06f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1554735490-80893c93b06f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1525&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
//             },
//           ],
//           skus: {
//             1395071: {
//               quantity: 14,
//               size: '7',
//             },
//             1395072: {
//               quantity: 25,
//               size: '7.5',
//             },
//             1395073: {
//               quantity: 9,
//               size: '8',
//             },
//             1395074: {
//               quantity: 2,
//               size: '8.5',
//             },
//             1395075: {
//               quantity: 18,
//               size: '9',
//             },
//             1395076: {
//               quantity: 12,
//               size: '9.5',
//             },
//             1395077: {
//               quantity: 10,
//               size: '10',
//             },
//             1395078: {
//               quantity: 18,
//               size: '10.5',
//             },
//             1395079: {
//               quantity: 11,
//               size: '11',
//             },
//             1395080: {
//               quantity: 35,
//               size: '11.5',
//             },
//             1395081: {
//               quantity: 25,
//               size: '12',
//             },
//           },
//         },
//         {
//           style_id: 240542,
//           name: 'Green',
//           original_price: '450.00',
//           sale_price: null,
//           'default?': false,
//           photos: [
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1550188053-b4e1e8e4f94f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1550188053-b4e1e8e4f94f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1525&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
//             },
//           ],
//           skus: {
//             1395082: {
//               quantity: 14,
//               size: '7',
//             },
//             1395083: {
//               quantity: 25,
//               size: '7.5',
//             },
//             1395084: {
//               quantity: 9,
//               size: '8',
//             },
//             1395085: {
//               quantity: 2,
//               size: '8.5',
//             },
//             1395086: {
//               quantity: 18,
//               size: '9',
//             },
//             1395087: {
//               quantity: 12,
//               size: '9.5',
//             },
//             1395088: {
//               quantity: 10,
//               size: '10',
//             },
//             1395089: {
//               quantity: 18,
//               size: '10.5',
//             },
//             1395090: {
//               quantity: 11,
//               size: '11',
//             },
//             1395091: {
//               quantity: 35,
//               size: '11.5',
//             },
//             1395092: {
//               quantity: 25,
//               size: '12',
//             },
//           },
//         },
//         {
//           style_id: 240543,
//           name: 'Butter',
//           original_price: '450.00',
//           sale_price: '400.00',
//           'default?': false,
//           photos: [
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1548369735-f548cbe6a294?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1548369735-f548cbe6a294?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=977&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1525&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
//             },
//           ],
//           skus: {
//             1395093: {
//               quantity: 14,
//               size: '7',
//             },
//             1395094: {
//               quantity: 25,
//               size: '7.5',
//             },
//             1395095: {
//               quantity: 9,
//               size: '8',
//             },
//             1395096: {
//               quantity: 2,
//               size: '8.5',
//             },
//             1395097: {
//               quantity: 18,
//               size: '9',
//             },
//             1395098: {
//               quantity: 12,
//               size: '9.5',
//             },
//             1395099: {
//               quantity: 10,
//               size: '10',
//             },
//             1395100: {
//               quantity: 18,
//               size: '10.5',
//             },
//             1395101: {
//               quantity: 11,
//               size: '11',
//             },
//             1395102: {
//               quantity: 35,
//               size: '11.5',
//             },
//             1395103: {
//               quantity: 25,
//               size: '12',
//             },
//           },
//         },
//         {
//           style_id: 240544,
//           name: 'Grey',
//           original_price: '450.00',
//           sale_price: null,
//           'default?': false,
//           photos: [
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1536181211993-cf4b2c100475?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1536181211993-cf4b2c100475?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1525&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
//             },
//             {
//               thumbnail_url: 'https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//               url: 'https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
//             },
//           ],
//           skus: {
//             1395104: {
//               quantity: 14,
//               size: '7',
//             },
//             1395105: {
//               quantity: 25,
//               size: '7.5',
//             },
//             1395106: {
//               quantity: 9,
//               size: '8',
//             },
//             1395107: {
//               quantity: 2,
//               size: '8.5',
//             },
//             1395108: {
//               quantity: 18,
//               size: '9',
//             },
//             1395109: {
//               quantity: 12,
//               size: '9.5',
//             },
//             1395110: {
//               quantity: 10,
//               size: '10',
//             },
//             1395111: {
//               quantity: 18,
//               size: '10.5',
//             },
//             1395112: {
//               quantity: 11,
//               size: '11',
//             },
//             1395113: {
//               quantity: 35,
//               size: '11.5',
//             },
//             1395114: {
//               quantity: 25,
//               size: '12',
//             },
//           },
//         },
//       ],
//       ratings: {
//         1: '16',
//         2: '9',
//         3: '34',
//         4: '12',
//         5: '75',
//       },
//       recommended: {
//         false: '38',
//         true: '108',
//       },
//       characteristics: {
//         Size: {
//           id: 135244,
//           value: '3.0000000000000000',
//         },
//         Width: {
//           id: 135245,
//           value: '3.0520833333333333',
//         },
//         Comfort: {
//           id: 135246,
//           value: '3.7473684210526316',
//         },
//         Quality: {
//           id: 135247,
//           value: '3.9052631578947368',
//         },
//       },
//     },
//   ];

//   test('RelatedProductsList render', async () => {
//     render(<RelatedProductsList product={relatedMock} items={listMock} isRelatedCard={true} />);

//     waitFor(() => {
//       expect(screen.getByRole('RelatedProductCard')).toBeInTheDocument();
//       expect(screen.getByTestId('card-image')).toBeInTheDocument();
//       userEvent.click(screen.getByTestId('card-image'));
//       expect(screen.getByTestId('forward')).toBeInTheDocument();
//       userEvent.click(screen.getByTestId('forward'));
//       expect(screen.getByTestId('backward')).toBeInTheDocument();
//       userEvent.click(screen.getByTestId('backward'));
//     });
//   });

//   test('YourOutfitList render', async () => {
//     render(<YourOutfitList outfit={listMock} isRelatedCard={false} />);

//     waitFor(() => {
//       expect(screen.getByRole('RelatedProductCard')).toBeInTheDocument();
//       expect(screen.getByTestId('card-image')).toBeInTheDocument();
//       userEvent.click(screen.getByTestId('card-image'));
//       expect(screen.getByTestId('forward')).toBeInTheDocument();
//       userEvent.click(screen.getByTestId('forward'));
//       expect(screen.getByTestId('backward')).toBeInTheDocument();
//       userEvent.click(screen.getByTestId('backward'));
//     });
//   });

//   test('Comparison render', async () => {
//     render(<Comparison product={relatedMock} compare={relatedMock} setShowCompare={true}/>);

//     waitFor(() => {
//       expect(screen.getByRole('TableRow')).toBeInTheDocument();
//     });
//   });

//   test('RelatedList useEffect', async () => {
//     render(<RelatedProductsList product={relatedMock} items={listMock} isRelatedCard={true} />);

//     waitFor(() => {
//       userEvent.click(screen.getByTestId('card-image'));
//       expect(screen.getByRole('RelatedProductCard')).toBeInTheDocument();
//       expect(screen.getByTestId('card-image')).toBeInTheDocument();
//     });
//   });
// });
