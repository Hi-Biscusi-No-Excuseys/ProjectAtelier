import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Styles.jsx';
const { Card, CardImageContainer, CardImage, CardDetails, Star } = styles;

export default function RelatedProductCard({item, setProduct}) {
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
        <CardImageContainer onClick={(e) => {
          // console.log('CLICKED: ', item.id);
          setProduct(item.data);
        }}>
          <CardImage src={item.data.results[0].photos[0].url}/>
          <Star>&#x2729;</Star>
        </CardImageContainer>
        <CardDetails>
          <div>{item.data.category}</div>
          <div>{item.data.name}</div>
          <div>{item.data.default_price}</div>
          <small>STAR COMPONENT PLACEHOLDER</small>
        </CardDetails>
      </Card>
    </div>
  );
}
