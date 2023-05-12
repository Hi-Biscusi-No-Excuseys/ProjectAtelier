import React, { useState, useEffect } from 'react';
import QuantitySelector from './addtocart/QuantitySelector';
import SizeSelector from './addtocart/SizeSelector';
import Add from './addtocart/Add';
import Favorite from './addtocart/Favorite';

const axios = require('axios');

export default function AddToCart({ currentStyle }) {
  const [skuID, setSkuID] = useState(null);
  const [selectedSizeCount, setSelectedSizeCount] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [chosenCount, setChosenCount] = useState(null);
  const [params, setParams] = useState({});

  const handleSelectedSize = (size, skuId, count) => {
    setSelectedSize(size);
    setSkuID(skuId);
    setSelectedSizeCount(count);
  };

  useEffect(() => {
    setParams({ sku_id: skuID, size: selectedSize, count: chosenCount });
  }, [skuID, selectedSize, chosenCount]);

  const handleAdd = () => {
    if (params.sku_id === null || params.selectedSize === null || params.count === null) {
      alert('Please select a size');
      return;
    }
    axios.post('overview/cart', params);
  };

  return (
    <div className="addtocart">
      <SizeSelector
        currentStyle={currentStyle}
        handleSelectedSize={handleSelectedSize}
        setSkuID={setSkuID}
      />
      <QuantitySelector
        currentStyle={currentStyle}
        selectedSize={selectedSize}
        selectedSizeCount={selectedSizeCount}
        setChosenCount={setChosenCount}
      />
      <Add handleAdd={handleAdd} />
      <Favorite />
    </div>
  );
}
