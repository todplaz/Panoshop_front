import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Container = styled.div`

`;

const Wrapper = styled.div`
    padding: 20px;
`;

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props)=>props.type === "filled" && "none"};
    background-color: ${(props)=>props.type === "filled" ? "black" : "transparent"};
    color: ${(props)=>props.type === "filled" && "white"};
`;

const TopTexts = styled.div``;

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`;

const Info = styled.div`
    flex: 3;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`;

const Image = styled.img`
    width: 200px;
`;

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props)=>props.color}
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-item: center;
    margin-bottom: 20px;
`;

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
`;

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;




const CartSummary = () => {
  return (
    <Container>
      <Navbar/>
      <Wrapper>
        <Title>VOTRE PANIER</Title>
        <Top>
          <TopButton>CONTINUEZ VOS ACHATS</TopButton>
          <TopTexts>
            <TopText>VOS ACHATS(2)</TopText>
          </TopTexts>
          <TopButton type="filled">PASSEZ A LA CAISSE</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://www.lamaisondelhomme.fr/wp-content/uploads/2018/12/1051_VESTE-GILET-PANTALON.jpg"/>
                <Details>
                  <ProductName><b>Article:</b>Veste Homme</ProductName>
                  <ProductId><b>ID:</b>15</ProductId>
                  <ProductColor color="blue"/>
                  <ProductSize><b>Taille</b>XL</ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add/>
                  <ProductAmount>4</ProductAmount>
                  <Remove/>
                </ProductAmountContainer>
                <ProductPrice>800€</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr/>
            <Product>
              <ProductDetail>
                <Image src="https://global-uploads.webflow.com/6256995755a7ea0a3d8fbd11/6264608dc2a008c5703c41cb_1.jpg"/>
                <Details>
                  <ProductName><b>Article:</b>Veste Homme</ProductName>
                  <ProductId><b>ID:</b>9</ProductId>
                  <ProductColor color="blue"/>
                  <ProductSize><b>Taille</b>XL</ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add/>
                  <ProductAmount>4</ProductAmount>
                  <Remove/>
                </ProductAmountContainer>
                <ProductPrice>400€</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr/>
            <Product>
              <ProductDetail>
                <Image src="https://media.neimanmarcus.com/f_auto,q_auto:low,ar_4:5,c_fill,dpr_2.0,w_456/01/nm_4080056_100101_a"/>
                <Details>
                  <ProductName><b>Article:</b>Veste Homme</ProductName>
                  <ProductId><b>ID:</b>13</ProductId>
                  <ProductColor color="blue"/>
                  <ProductSize><b>Taille</b>XL</ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add/>
                  <ProductAmount>4</ProductAmount>
                  <Remove/>
                </ProductAmountContainer>
                <ProductPrice>700€</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>
              RECAPITULATIF DE LA COMMANDE
            </SummaryTitle>
            <SummaryItem type="total">
              <SummaryItemText>TOTAL</SummaryItemText>
              <SummaryItemPrice>1900€</SummaryItemPrice>
            </SummaryItem>
            <Button>PASSEZ LA COMMANDE</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer/>
    </Container>
  );
}

export default CartSummary;