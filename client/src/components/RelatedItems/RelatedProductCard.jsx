import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Styles.jsx';
const { Card, CardImage, CardDetails, Star } = styles;

export default function RelatedProductCard({item}) {
  const [style, setStyle] = useState('');

  useEffect(() => {
    axios.get(`/overview/products/${item.id}/styles`)
      .then((response) => {
        const defaultStyle = response.data.results[0].photos[0].url;
        setStyle(defaultStyle);
      })
      .catch((err) => {
        console.log('Error retrieving style.', err);
        // throw (err);
      });
  }, [item]);


  return (
    <div>
      <Card id="product-card">
          <CardImage src={style}/>
          <CardDetails>
            <Star>&#9734;</Star>
          </CardDetails>
      </Card>
    </div>
  );
}
