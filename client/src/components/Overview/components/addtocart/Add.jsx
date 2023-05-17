import React from 'react';

export default function Add({ handleAdd, selectedSizeCount }) {
  return (selectedSizeCount
    ? (
      <div className="add" data-testid="add">
        <button id="addCart" type="button" onClick={handleAdd}>Add to Bag</button>
      </div>
    )
    : (
      <div className="add" data-testid="add">
        <button id="addCart" type="button" onClick={handleAdd} disabled>Add to Bag</button>
      </div>
    )
  );
}
