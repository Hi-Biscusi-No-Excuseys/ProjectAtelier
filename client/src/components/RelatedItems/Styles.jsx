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
display: flex;
height: 400px;
width: 260px;
border-style: solid;
border-width: 2px;
position: relative;
`;

const CardImage = styled.img`
position: relative;
height: 280px;
width: 260px;
z-index: 1;
`;

const CardDetails = styled(Card)`
position: absolute;
z-index: 2;
`;

const Star = styled(CardDetails)`
justify-content: flex-end;
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
  CardImage: CardImage,
  CardDetails: CardDetails,
  Star: Star,
  Table: Table,
  TableRow: TableRow,
  TableCol: TableCol,
}
