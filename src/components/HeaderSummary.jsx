import React from "react";
import styled from "styled-components";
import { Link, Outlet } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  background-color: #c7ecee;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LinkStyle = styled(Link)`
  color: gray;
  text-decoration: none;
`;


const Center = styled.div`
  display: flex;
  align-item: center;
  text-align: center;
  justify-content: space-between;
  width: 100%
`;


const HeaderSummary = () => {
  // const quantity = useSelector(state => state.cart.quantity)

  return (
    <>
      <Container>
        <Wrapper>
          <Center>
            <LinkStyle to="/cart/summary">Panier</LinkStyle>
            <LinkStyle to="/cart/delivery">Adresse de Livraison</LinkStyle>
            <LinkStyle to="/cart/payment">Paiement</LinkStyle>
            <LinkStyle to="/cart/recap">Recapitulatif de votre commande</LinkStyle>
          </Center>
        </Wrapper>
      </Container>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default HeaderSummary;
