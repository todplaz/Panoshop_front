import { useSelector } from "react-redux";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setQuantity } from "../redux/cartRedux";

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
  align-item: center;
  justify-content: center;
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

const Recap = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleQuantity = (type, product) => {
    dispatch(setQuantity({ type, product }));
  };

  return (
    <Container>
      <Wrapper>
        <Title>RECAPITULATIF</Title>
        <Bottom>
          <Info>
            Nom: Alex <br />
            <Hr />
            Prénom: Stéphane <br />
            <Hr />
            Téléphone: 36576879 <br />
            <Hr />
            Paiement par CB: ****** <br />
            <Hr />
            Adresse de livraison: Alex <br />
            <Hr />
            Code postal: Stéphane <br />
            <Hr />
            Ville: 36576879 <br />
            <Hr />
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
                    <ProductAmount>{product.quantity}</ProductAmount>
                  </ProductAmountContainer>
                  <ProductPrice>
                    {product.price * product.quantity}€
                  </ProductPrice>
                </PriceDetail>
              </Product>
            ))}
          </Info>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Recap;
