import React from 'react';
import styles from './Styles.jsx';
const { Card } = styles;

export default function RelatedProductCard({product}) {
  return (
    <div>
      <Card id="product-card">
        <p>Hello I&apos;m a card.</p>
      </Card>
    </div>
  );
}
