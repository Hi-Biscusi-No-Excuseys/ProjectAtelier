import React, { useState, useEffect } from 'react';

export default function QuantitySelector({
  currentStyle, selectedSize, selectedSizeCount, setChosenCount,
}) {
  const [maxCount, setMaxCount] = useState(0);
  const [quantityCount, setQuantityCount] = useState([]);

  useEffect(() => {
    if (selectedSize) {
      const count = Math.min(selectedSizeCount, 15);
      setMaxCount(count);
      const options = [];
      for (let i = 1; i <= count; i++) {
        options.push(i);
      }
      setQuantityCount(options);
    } else {
      setMaxCount(0);
      setQuantityCount(['-']);
    }
  }, [currentStyle, selectedSize]);

  const handleQuantityChange = (e) => {
    // Handle changes to the quantity dropdown
    const newQuantity = parseInt(e.target.value, 10);
    setChosenCount(newQuantity);
  };

  return (
    <div className="quantityselector" data-testid="quantityselector">
      <select disabled={!selectedSize} defaultValue={1} onChange={handleQuantityChange}>
        {quantityCount?.map((option, i) => <option key={i} value={option}>{option}</option>)}
      </select>
    </div>
  );
}
