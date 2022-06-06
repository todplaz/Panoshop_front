import { useSelector } from "react-redux";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import Input from "../components/Input";
import { useState } from "react";
import { getTotal } from "../helpers";
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

const Modal = styled.div`
    z-index: 2;
    background-color: #58B19F;
    padding: 3px;
    width: 100%;
    opacity: 0.8;
    height: 100%
    position: absolute;
`;

const ModalContent = styled.div`
  z-index: 2;
  background-color: #55e6c1;
  padding: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  align-item: flex-end;
`;

const ButtonModal = styled.button`
  width: 10%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Payment = () => {
  const cart = useSelector((state) => state.cart);
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const handlerClick = () => {
    setOpen(true);
  };

  return (
    <>
      <Container>
        <Wrapper>
          {open && (
            <Modal>
              <ModalContent>
                <ButtonModal onClick={() => setOpen(false)}>Close</ButtonModal>
                <div>Votre paiement a bien été éffectué</div>
              </ModalContent>
            </Modal>
          )}
          <Title>PAIEMENT</Title>
          <Bottom>
            <Info>
              <Input label="Nom : " />
              <Input label="Prénom : " />
              <Input label="votre numéro de téléphone : " />
              <Input label="Numéro de la carte CB : " />
              <Input label="Date d'expiration : " />
              <Input label="Sécurité code: " />
              <Link to="/cart/recap">
                <Button onClick={handlerClick}>Valider</Button>
              </Link>
              <Hr />
            </Info>
            <Summary>
              <SummaryTitle>RECAPITULATIF DE LA COMMANDE</SummaryTitle>
              <SummaryItem type="total">
                <SummaryItemText>TOTAL</SummaryItemText>
                <SummaryItemPrice>{getTotal(cart.products)}€</SummaryItemPrice>
              </SummaryItem>
            </Summary>
          </Bottom>
        </Wrapper>
      </Container>
    </>
  );
};

export default Payment;
