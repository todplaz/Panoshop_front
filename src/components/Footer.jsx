import {
  AddLocation,
  Facebook,
  Instagram,
  Mail,
  Phone,
  Twitter,
} from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  background-color: #d2dae2;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: left;
  flex-direction: column;
  padding: 20px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const Logo = styled.h1``;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>PANOPSHOP</Logo>
        <Desc>
          Panopshop est un site dédié a la vente d'articles recyclés afin de
          garantir la préservation de la planète.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <AddLocation style={{ marginRight: "10px" }} /> 2 Place de verdun,
          95340 Persan
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +33 6 50 16 43 67
        </ContactItem>
        <ContactItem>
          <Mail style={{ marginRight: "10px" }} /> alexbalomog.dev@gmail.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
