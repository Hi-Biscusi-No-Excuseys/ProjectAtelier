import styled from 'styled-components';

const Container = styled.div`
border-style: solid;
border-width: 1px;
`;

const ComparisonContainer = styled(Container)`
width: 500px;
padding 5px;
`;


const ListContainer = styled.div`
display: flex;
flex-direction: column;
border-style: solid;
border-width: 2px;
`;

const ProductContainer = styled.div`
display: flex;
flex-direction: row;
border-style: solid;
border-width: 2px;
`;

const Title = styled.div`
display: block;
border-style: solid;
border-width: 1px;
`;

const Card = styled.div`
height: 400px;
width: 300px;
border-style: solid;
border-width: 2px;
`;

const Table = styled.div`
display: flex;
flex-direction: column;
border-style: solid;
border-width: 1px;
`;

const TableRow = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
border-style: solid;
border-width: 1px;
padding: 10px;
`;

const TableCol = styled.div`
font-size: 12px;
border-style: solid;
border-width: 1px;
padding: 10px;
`;

export default {
  Container: Container,
  ComparisonContainer: ComparisonContainer,
  ListContainer: ListContainer,
  ProductContainer: ProductContainer,
  Title: Title,
  Card: Card,
  Table: Table,
  TableRow: TableRow,
  TableCol: TableCol,
}
