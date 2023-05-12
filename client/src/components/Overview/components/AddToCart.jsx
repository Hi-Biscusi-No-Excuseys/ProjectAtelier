import React, {useState, useEffect} from 'react';
import QuantitySelector from './addtocart/QuantitySelector';
import SizeSelector from './addtocart/SizeSelector';
import Add from './addtocart/Add';
import Favorite from './addtocart/Favorite';
const axios = require('axios');

export default function AddToCart({overview, styles, currentStyle}) {
  const [skuID, setSkuID] = useState(null);
  const [selectedSizeCount, setSelectedSizeCount] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [chosenCount, setChosenCount] = useState(null);
  const [params, setParams] = useState({});

  const handleSelectedSize = (size) => {
    setSelectedSize(size);
  }

  useEffect(()=>{
    setParams({sku_id: skuID, size: selectedSize, count: chosenCount});
  }, [skuID, selectedSize, chosenCount])

  const handleAdd = () => {
    axios.post('overview/cart', params)
  }

  return (
    <div className="addtocart">
      {/* <form onSubmit={(e)=>{e.preventDefault()}}> */}
        <SizeSelector currentStyle={currentStyle} overview={overview} handleSelectedSize={handleSelectedSize} setSkuID={setSkuID} setSelectedSize={setSelectedSize} setSelectedSizeCount={setSelectedSizeCount}/>
        <QuantitySelector currentStyle={currentStyle} selectedSize={selectedSize} selectedSizeCount={selectedSizeCount} setChosenCount={setChosenCount}/>
        <Add handleAdd={handleAdd} />
        <Favorite />
      {/* </form> */}
    </div>
  );
}
