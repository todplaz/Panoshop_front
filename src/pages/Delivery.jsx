import { useSelector } from "react-redux";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import Input from "../components/Input";
import { Link } from "react-router-dom";


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
    margin: auto;
    padding: 0 10%;
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

const Delivery = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  

  return (
    <Container>
      <Wrapper>
        <Title>ADRESSE DE LIVRAISON</Title>
        <Bottom>
          <Info>
            <Input label="votre adresse : "/>
            <Input label="votre code postal : "/>
            <Input label="votre ville : "/>
            <Input label="votre numéro de téléphone : "/>
            <Link to="/cart/payment">
              <Button>Valider</Button>
            </Link>
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>RECAPITULATIF DE LA COMMANDE</SummaryTitle>
            <SummaryItem type="total">
              <SummaryItemText>TOTAL</SummaryItemText>
              <SummaryItemPrice>{cart.total}€</SummaryItemPrice>
            </SummaryItem>
          </Summary>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Delivery;
