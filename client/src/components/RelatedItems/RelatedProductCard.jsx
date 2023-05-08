import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Styles.jsx';
const { Card, CardImageContainer, CardImage, CardDetails, Star } = styles;

export default function RelatedProductCard({item}) {
  console.log('What dis', item);
  // const [style, setStyle] = useState('');

  // useEffect(() => {
  //   axios.get(`/overview/products/${item.id}/styles`)
  //     .then((response) => {
  //       console.log('What styles did we get? : ', response.data);
  //       const defaultStyle = response.data.results[0].photos[0].url;
  //       setStyle(defaultStyle);
  //     })
  //     .catch((err) => {
  //       console.log('Error retrieving style.', err);
  //       // throw (err);
  //     });
  // }, [item]);


  return (
    <div>
      <Card id="product-card">
        <CardImageContainer>
          <CardImage src={item.results[0].photos[0].url}/>
          <Star>&#x2729;</Star>
        </CardImageContainer>
        <CardDetails>
          <div>{item.category}</div>
          <div>{item.name}</div>
          <div>{item.default_price}</div>
          <small>STAR COMPONENT PLACEHOLDER</small>
        </CardDetails>
      </Card>
    </div>
  );
}
