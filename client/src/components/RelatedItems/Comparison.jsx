import React from 'react';

export default function Comparison({ product, compare, setShowCompare }) {
  const combined = {};

  const closeModal = () => {
    setShowCompare(false);
  };

  for (let i = 0; i < product.features.length; i += 1) {
    const value = product.features[i].value === null ? <>&#10003;</> : product.features[i].value;
    combined[product.features[i].feature] = [value, undefined];
  }

  for (let i = 0; i < compare.features.length; i += 1) {
    const value = compare.features[i].value === null ? <>&#10003;</> : compare.features[i].value;
    combined[compare.features[i].feature] = combined[compare.features[i].feature]
      ? [combined[compare.features[i].feature][0], value]
      : [undefined, value];
  }

  const rows = Object.entries(combined);

  return (
    <div id="ComparisonContainer" data-testid='comparison-container' onClick={closeModal}>
      {product && compare && (
        <div>
          <div className="Table Header">
            <div className="TableRow">
              COMPARING
            </div>
            <div className="TableRow">
              <div className="Left">{product.name}</div>
              <div className="Right">{compare.name}</div>
            </div>
          </div>
          <div className="Table TableBody">
            {rows.map((item) => (
              <div className="TableRow" key={item[0]}>
                <div className="Left">{item[1][0]}</div>
                <div className="Center">{item[0]}</div>
                <div className="Right">{item[1][1]}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
