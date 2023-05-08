import React from 'react';

export default function Image({styles}) {

  return (
    <div className="productImage">
      {/* <h1>{styles[0].name}</h1> */}
      <img src={styles[0]?.photos[0]?.url} alt={styles[0]?.name} height="400" width="500" />
    </div>
  );
}
