import React, {useState, useEffect} from 'react';
import ProductInfo from './components/ProductInfo';
import StyleSelector from './components/StyleSelector';
import AddToCart from './components/AddToCart';
import ImageGallery from './components/ImageGallery';
import Description from './components/Description';
const axios = require('axios');

export default function Overview({product}) {
  const [overview, setOverview] = useState(product);
  const [styles, setStyles] = useState([]);
  const [reviews, setReviews] = useState(0);

  useEffect(()=>{
    axios.get(`/overview/products/${product.id}/styles`)
      .then((response) => {
        setStyles(response.data.results);
      })
      .catch((err) => {
        console.log('Unable to fetch data: ', err);
      });
    axios.get('/reviews/meta', { params: {product_id: product.id} })
      .then((response) => {
        // console.log('This is the response: ', response);
        setReviews(parseInt(response.data.recommended.false, 10) + parseInt(response.data.recommended.true, 10))
      })
      .catch((err) => {
        console.error('Client failed to get reviews:', err);
      })
  }, [product])

// console.log('this is overview: ', overview);
// console.log('this is style: ', styles);
// console.log(reviews)

  return (
    <div className="overview">
      <ImageGallery styles={styles}/>
      <div>
        <ProductInfo overview={overview} styles={styles} reviews={reviews}/>
        <StyleSelector styles={styles}/>
        <AddToCart styles={styles}/>
      </div>
      <Description overview={overview}/>
      </div>
  );
}
