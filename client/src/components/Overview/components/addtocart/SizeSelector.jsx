import React from 'react';

export default function SizeSelector() {
  // going to need if conditionals depending on item category
  return (
    <div className="sizeselector">
      <select>
        <option selected disabled>Select Size</option>
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
      </select>
    </div>
  );
}
