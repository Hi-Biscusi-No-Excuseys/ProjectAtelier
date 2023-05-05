import React from 'react';
import styles from './Styles.jsx';
const { ComparisonContainer, Table, TableRow, TableCol } = styles;

export default function Comparison() {

  return (
    <ComparisonContainer>
      <Table>
        <TableRow>
          COMPARING
        </TableRow>
        <TableRow>
          <TableCol>Product 1</TableCol>
          <TableCol>Product 2</TableCol>
        </TableRow>
        <TableRow>
          <TableCol>Current Product Value</TableCol>
          <TableCol>Characteristic</TableCol>
          <TableCol>Compared Product Value</TableCol>
        </TableRow>
        <TableRow>
          <TableCol>Current Product Value</TableCol>
          <TableCol>Characteristic</TableCol>
          <TableCol>Compared Product Value</TableCol>
        </TableRow>
        <TableRow>
          <TableCol>Current Product Value</TableCol>
          <TableCol>Characteristic</TableCol>
          <TableCol>Compared Product Value</TableCol>
        </TableRow>
        <TableRow>
          <TableCol>Current Product Value</TableCol>
          <TableCol>Characteristic</TableCol>
          <TableCol>Compared Product Value</TableCol>
        </TableRow>
        <TableRow>
          <TableCol>Current Product Value</TableCol>
          <TableCol>Characteristic</TableCol>
          <TableCol>Compared Product Value</TableCol>
        </TableRow>
      </Table>
    </ComparisonContainer>
  );
};