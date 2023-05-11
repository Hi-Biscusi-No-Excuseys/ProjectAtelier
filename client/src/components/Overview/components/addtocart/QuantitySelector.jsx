import React, {useState, useEffect} from 'react';

export default function QuantitySelector({styles, currentStyle, overview, selectedSizeCount}) {
  const [maxCount, setMaxCount] = useState(0);
  const [quantityCount, setQuantityCount] = useState([]);

  useEffect(()=>{
    if (selectedSizeCount) {
      const count = Math.min(selectedSizeCount, 15)
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
  }, [currentStyle, selectedSizeCount])

  return (
    <div className="quantityselector">
      <select disabled={!selectedSizeCount} defaultValue={1}>
        {quantityCount?.map((option, i)=>{
          return <option key={i} value={option}>{option}</option>
        })}
      </select>
    </div>
  );
}
