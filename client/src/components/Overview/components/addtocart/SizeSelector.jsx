import React from 'react';

export default function SizeSelector({overview, styles, currentStyle}) {
  console.log(overview);
  let sizes = [];
  let quantity = 0;
  for (let key in currentStyle?.skus) {
    quantity += currentStyle?.skus[key]?.quantity
  }
  for (let key in currentStyle?.skus) {
    sizes.push(currentStyle?.skus[key])
  }

  sizes.map((prop)=>{console.log(prop.size, prop.quantity)})
  console.log('total quantity: ', quantity)

  // going to need if conditionals depending on item category
  if (overview.category === "Pants" || overview.category === "Jackets") {
    return (
      <div className="sizeselector">
        {quantity !== 0 ? <select defaultValue='Select Size'>
          <option disabled>Select Size</option>
          {sizes.map((prop, i)=>{
            if (prop.quantity !== 0) {
              return <option value={prop.size} key={i}>{prop.size}</option>}
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
        {quantity !== 0 ? <select defaultValue='Select Size'>
          <option disabled>Select Size</option>
          {sizes.map((prop, i)=>{
            if (prop.quantity !== 0) {
              return <option value={prop.size} key={i}>{prop.size}</option>}
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
        {quantity !== 0 ? <select defaultValue='Select Size'>
          <option disabled>Select Size</option>
          {sizes.map((prop, i)=>{
            if (prop.quantity !== 0) {
              return <option value={prop.size} key={i}>{prop.size}</option>}
            }
            )}
        </select> : <select defaultValue='OUT OF STOCK'>
          <option disabled>OUT OF STOCK</option>
        </select>}
      </div>
    );
  }
}
