import React from 'react';

export default function SizeSelector({overview, currentStyle, handleSelectedSize, setSkuID, setSelectedSize, setSelectedSizeCount}) {
  let sizes = [];
  let quantity = 0;
  for (let key in currentStyle?.skus) {
    // console.log(key);
    quantity += currentStyle?.skus[key]?.quantity
    sizes.push({value: currentStyle?.skus[key], key: key})
  }
  // console.log((currentStyle?.skus));

  // going to need if conditionals depending on item category
  if (overview.category === "Pants" || overview.category === "Jackets") {
    return (
      <div className="sizeselector">
        {quantity !== 0 ? <select defaultValue='Select Size' onChange={(e)=>{
          handleSelectedSize(e.target.value)
          }}>
          <option disabled>Select Size</option>
          {sizes.map((prop, i)=>{
            if (prop.quantity !== 0) {
              setSkuID(prop['key']);
              // setSelectedSize(prop.value.size);
              setSelectedSizeCount(prop.value.quantity);
              return <option value={prop.value.size} key={i}>{prop.value.size}</option>}
            }
            )}
        </select> : <select defaultValue='OUT OF STOCK'>
          <option disabled>OUT OF STOCK</option>
        </select>}
      </div>
    );
  } else if (overview.category === "Kicks" || overview.category ===  "Dress Shoes") {
    return (
      <div className="sizeselector">
        {quantity !== 0 ? <select defaultValue='Select Size' onChange={(e)=>{
          handleSelectedSize(e.target.value)
          }}>
          <option disabled>Select Size</option>
          {sizes.map((prop, i)=>{
            if (prop.quantity !== 0) {
              setSkuID(prop['key']);
              // setSelectedSize(prop.value.size);
              setSelectedSizeCount(prop.value.quantity);
              return <option value={prop.value.size} key={i}>{prop.value.size}</option>}
            }
            )}
        </select> : <select defaultValue='OUT OF STOCK'>
          <option disabled>OUT OF STOCK</option>
        </select>}
      </div>
    );
  } else {
    return (
      <div className="sizeselector">
        {quantity !== 0 ? <select defaultValue='Select Size' onChange={(e)=>{
          handleSelectedSize(e.target.value)
          }}>
          <option disabled>Select Size</option>
          {sizes.map((prop, i)=>{
            if (prop.quantity !== 0) {
              setSkuID(prop['key']);
              // setSelectedSize(prop.value.size);
              setSelectedSizeCount(prop.value.quantity);
              return <option value={prop.value.size} key={i}>{prop.value.size}</option>}
            }
            )}
        </select> : <select defaultValue='OUT OF STOCK'>
          <option disabled>OUT OF STOCK</option>
        </select>}
      </div>
    );
  }
}
