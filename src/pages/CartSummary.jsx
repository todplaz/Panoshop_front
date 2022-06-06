import { Add, Remove } from "@mui/icons-material";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setQuantity } from "../redux/cartRedux";
import { Link } from "react-router-dom";
import { getTotal } from "../helpers";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
  margin-bottom: 50px;
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
  background-color: ${(props) => props.color};
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
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleQuantity = (type, product) => {

    dispatch(setQuantity({ type, product }));
  };

  return (
    <Container>
      <Wrapper>
        <Title>VOTRE PANIER</Title>
        <Bottom>
          <Info>
            {cart.products.map((product) => (
              <Product>
                <ProductDetail>
                  <Image src={product.image} />
                  <Details>
                    <ProductName>
                      <b>Article:</b> {product.title}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b>
                      {product.id}
                    </ProductId>
                    <ProductColor color={product.color} />
                    <ProductSize>
                      <b>Taille</b>
                      {product.size}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add onClick={() => handleQuantity("increase", product)} />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <Remove
                      onClick={() => handleQuantity("decrease", product)}
                    />
                  </ProductAmountContainer>
                  <ProductPrice>
                    {product.price * product.quantity}€
                  </ProductPrice>
                </PriceDetail>
              </Product>
            ))}
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>RECAPITULATIF DE LA COMMANDE</SummaryTitle>
            <SummaryItem type="total">
              <SummaryItemText>TOTAL</SummaryItemText>
              <SummaryItemPrice>{getTotal(cart.products)}€</SummaryItemPrice>
            </SummaryItem>
            <Link to="/cart/delivery">
              <Button>PASSEZ LA COMMANDE</Button>
            </Link>
          </Summary>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default CartSummary;
