import React from 'react';
import styles from './Styles.jsx';
const { ComparisonContainer, Table, TableRow, TableCol } = styles;

export default function Comparison( { product, compare } ) {
  const rows = [];

  console.log('COMPARING: ', product.features, compare.features);

  for (let i = 0; i < product.features.length; i++) {
    rows.push({
      currentFeature: product.features[i].value,
      feature: product.features[i].feature,
      compareFeature: compare.features[i].value,
    });
  }

  return (
    <ComparisonContainer>
      {product && compare && <Table>
        <TableRow>
          COMPARING
        </TableRow>
        <TableRow>
          <TableCol>{product.name}</TableCol>
          <TableCol>{compare.name}</TableCol>
        </TableRow>
        {rows.map((item) => {
          <TableRow>
            <TableCol>{item.currentFeature}</TableCol>
            <TableCol>{item.feature}</TableCol>
            <TableCol>{item.compareFeature}</TableCol>
        </TableRow>
        })}
        <TableRow>
          <TableCol>Current Product Value</TableCol>
          <TableCol>Characteristic</TableCol>
          <TableCol>Compared Product Value</TableCol>
        </TableRow>
      </Table>}
    </ComparisonContainer>
  );
};