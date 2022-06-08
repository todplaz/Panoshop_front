import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getTotal } from "../helpers";
import { addDelivery } from "../redux/deliveryRedux";

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 50px 40px;
  display: flex;
  justify-content: space-around;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1043850770.jpg?crop=0.6666xw:1xh;center,top&resize=980:*")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #22a6b3;
  color: white;
  cursor: pointer;
  margin-top: 20px;
`;

const Delivery = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const infoInput = {
    address: "",
    postal: "",
    city: "",
    phone: "",
  };

  const [formData, setFormData] = useState(infoInput);

  const handleChange = (e) => {    
    setFormData({
      ...formData, 
      [e.target.name]: e.target.value
    })
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(addDelivery(formData))
    navigate("/cart/payment")
  };

  return (
    <Container>
      <Wrapper>
        <Title>ADRESSE DE LIVRAISON</Title>
        <Form >
          <Input
            placeholder="Adresse"
            name="address"
            label="Adresse : "
            onChange={handleChange}
            value={formData.address}
          />
          <Input
            placeholder="Code postal"
            name="postal"
            label="Code postal : "
            onChange={handleChange}
            value={formData.postal}
          />
          <Input
            placeholder="Ville"
            name="city"
            label="Ville : "
            onChange={handleChange}
            value={formData.city}
          />
          <Input
            placeholder="Numéro de téléphone"
            name="phone"
            label="Numéro de téléphone : "
            onChange={handleChange}
            value={formData.phone}
          />
            <Button onClick={handleClick}>VALIDER</Button>
        </Form>
      </Wrapper>
      <Wrapper>
        <Summary>
          <SummaryTitle>RECAPITULATIF DE LA COMMANDE</SummaryTitle>
          <SummaryItem type="total">
            <SummaryItemText>TOTAL : </SummaryItemText>
            <SummaryItemPrice>{getTotal(cart.products)}€</SummaryItemPrice>
          </SummaryItem>
        </Summary>
      </Wrapper>
    </Container>
  );
};

export default Delivery;
