import React from 'react';

export default function Comparison({ product, compare, setShowCompare }) {
  const combined = {};

  // console.log('COMPARING: ', product.features.length, compare.features.length, combined);

  const closeModal = () => {
    setShowCompare(false);
  };

  // for (let i = 0; i < product.features.length; i += 1) {
  //   combined[product.features[i].value] = [<>&#10003;</>, undefined];
  // }

  // for (let i = 0; i < compare.features.length; i += 1) {
  //   combined[compare.features[i].value] = combined[compare.features[i].value]
  //     ? [combined[compare.features[i].value][0], <>&#10003;</>]
  //     : [undefined, <>&#10003;</>];
  // }

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

  // console.log(Object.entries(combined));

  const rows = Object.entries(combined);
  // console.log('Items:', rows);

  return (
  // <div id="ModalBackdrop">
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
  // </div>
  );
}
