import React from 'react';

export default function Add({handleAdd}) {
  return (
    <div className="add">
      <button onClick={handleAdd}>Add to Bag</button>
    </div>
  );
}
