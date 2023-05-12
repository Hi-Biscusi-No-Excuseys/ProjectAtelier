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
flex-direction: column;
// position: absolute;
align-content: center;
justify-content: center;
`;

const CardImageContainer = styled.div`
display: flex;
height: 280px;
width: 260px;
flex-direction: row-reverse;
`;

const CardImage = styled.img`
position: absolute;
height: 280px;
width: 260px;
z-index: 1;
`;


const CardDetails = styled.div`
height: 120px;
width: 260px;
`;

const CardHeader = styled.div`
`;

const CardTitle = styled.div`
`;

const AddToOutFitButton = styled.span`
align-self: center;
font-size: 200px;
`;

const StarContainer = styled.div`

`;

const Star = styled.div`
// color: white;
font-size: 30px;
// font-weight: 1100;
align-self: flex-start;
padding-right: 10px;
z-index: 10;
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
  CardImageContainer: CardImageContainer,
  CardImage: CardImage,
  Star: Star,
  StarContainer: StarContainer,
  CardDetails: CardDetails,
  CardTitle: CardTitle,
  CardHeader: CardHeader,
  AddToOutFitButton: AddToOutFitButton,
  Table: Table,
  TableRow: TableRow,
  TableCol: TableCol,
}
