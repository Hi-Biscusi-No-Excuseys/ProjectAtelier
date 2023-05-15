import React from 'react';

export default function Comparison({ product, compare }) {
  const combined = {};

  console.log('COMPARING: ', product.features.length, compare.features.length, combined);

  // for (let i = 0; i < product.features.length; i += 1) {
  //   combined[product.features[i].feature] = [product.features[i].value, undefined];
  // }

  // for (let i = 0; i < compare.features.length; i += 1) {
  //   combined[compare.features[i].feature] = combined[compare.features[i].feature]
  //     ? [combined[compare.features[i].feature][0], compare.features[i].value]
  //     : [undefined, compare.features[i].value];
  // }

  for (let i = 0; i < product.features.length; i += 1) {
    combined[product.features[i].value] = [<>&#10003;</>, undefined];
  }

  for (let i = 0; i < compare.features.length; i += 1) {
    combined[compare.features[i].value] = combined[compare.features[i].value]
      ? [combined[compare.features[i].value][0], <>&#10003;</>]
      : [undefined, <>&#10003;</>];
  }

  console.log(Object.entries(combined));

  const rows = Object.entries(combined);

  return (
    <div id="ComparisonContainer">
      {product && compare && (
      <div className="Table">
        <div className="TableRow">
          COMPARING
        </div>
        <div className="TableRow">
          <div className="Left">{product.name}</div>
          <div className="Right">{compare.name}</div>
        </div>
        {rows.map((item) => {
          console.log(item);
          return (
            <div className="TableRow" key={item[0]}>
              <div className="Left">{item[1][0]}</div>
              <div className="Center">{item[0]}</div>
              <div className="Right">{item[1][1]}</div>
            </div>
          );
        })}
      </div>
      )}
    </div>
  );
}
