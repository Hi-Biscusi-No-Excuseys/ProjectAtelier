import React from 'react';
// import styled from 'styled-components';

import styles from './Styles.jsx';
const { Card } = styles;

// const Container = styled.div`
//   height: 400px;
//   width: 300px;
//   border-style: solid;
//   border-width: 2px;
//   `;

export default function RelatedProductCard({product}) {
  return (
    <Card id="product-card">
      <p>Hello I&apos;m a card.</p>
    </Card>
  );
}
