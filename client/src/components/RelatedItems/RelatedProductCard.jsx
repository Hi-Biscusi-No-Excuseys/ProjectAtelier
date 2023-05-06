import React from 'react';
import styles from './Styles.jsx';
const { Card } = styles;

export default function RelatedProductCard({item}) {
  return (
    <div>
      <Card id="product-card">
        <div>
          {item.name}
        </div>
      </Card>
    </div>
  );
}
