import React from 'react';

export default function SizeSelector({
  currentStyle, handleSelectedSize,
}) {
  const sizes = [];
  let quantity = 0;
  for (const key in currentStyle?.skus) {
    quantity += currentStyle?.skus[key]?.quantity;
    sizes.push({ value: currentStyle?.skus[key], key });
  }

  return (
    <div className="sizeselector" id="sizeselector" data-testid="sizeselector">
      {quantity !== 0 ? (
        <select
          id="select"
          defaultValue="Select Size"
          onChange={(e) => {
            const skuId = e.target.value === 'Select Size' ? null : sizes.find((size) => size.value.size === e.target.value).key;
            const count = e.target.value === 'Select Size' ? null : sizes.find((size) => size.value.size === e.target.value).value.quantity;
            handleSelectedSize(e.target.value, skuId, count);
          }}
        >
          <option disabled>Select Size</option>
          {sizes.map((prop, i) => {
            if (prop.quantity !== 0) {
              return <option value={prop.value.size} key={i}>{prop.value.size}</option>;
            }
          })}
        </select>
      ) : (
        <select defaultValue="OUT OF STOCK">
          <option disabled>OUT OF STOCK</option>
        </select>
      )}
    </div>
  );
}
