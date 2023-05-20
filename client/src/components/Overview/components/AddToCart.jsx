import React, { useState, useEffect } from 'react';
import QuantitySelector from './addtocart/QuantitySelector';
import SizeSelector from './addtocart/SizeSelector';
import Add from './addtocart/Add';

const axios = require('axios');

export default function AddToCart({ currentStyle }) {
  const [skuID, setSkuID] = useState(null);
  const [selectedSizeCount, setSelectedSizeCount] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [chosenCount, setChosenCount] = useState(1);
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
    axios.post('overview/cart', params)
      .then(() => {
        alert('Added to cart!');
      });
  };

  return (
    <div className="addtocart" data-testid="addtocart">
      <SizeSelector
        currentStyle={currentStyle}
        handleSelectedSize={handleSelectedSize}
      />
      <QuantitySelector
        currentStyle={currentStyle}
        selectedSize={selectedSize}
        selectedSizeCount={selectedSizeCount}
        setChosenCount={setChosenCount}
      />
      <Add handleAdd={handleAdd} selectedSizeCount={selectedSizeCount} />
    </div>
  );
}
