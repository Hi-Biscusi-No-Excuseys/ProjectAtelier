import React from 'react';
import styles from './Styles';

const {
  ComparisonContainer, Table, TableRow, TableCol,
} = styles;

export default function Comparison({ product, compare }) {
  const combined = {};

  console.log('COMPARING: ', product.features.length, compare.features.length, combined);

  for (let i = 0; i < product.features.length; i += 1) {
    combined[product.features[i].feature] = [product.features[i].value, undefined];
  }

  for (let i = 0; i < compare.features.length; i += 1) {
    combined[compare.features[i].feature] = combined[compare.features[i].feature]
      ? [combined[compare.features[i].feature][0], compare.features[i].value]
      : [undefined, compare.features[i].value];
  }

  console.log(Object.entries(combined));

  const rows = Object.entries(combined);

  return (
    <ComparisonContainer>
      {product && compare && (
      <Table>
        <TableRow>
          COMPARING
        </TableRow>
        <TableRow>
          <TableCol>{product.name}</TableCol>
          <TableCol>{compare.name}</TableCol>
        </TableRow>
        {rows.map((item) => {
          console.log(item);
          return (
            <TableRow>
              <TableCol>{item[1][0]}</TableCol>
              <TableCol>{item[0]}</TableCol>
              <TableCol>{item[1][1]}</TableCol>
            </TableRow>
          );
        })}
      </Table>
      )}
    </ComparisonContainer>
  );
}
