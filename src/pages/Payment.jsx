// import { useSelector } from "react-redux";
// import styled from "styled-components";
// import { useDispatch } from "react-redux";
// import Input from "../components/Input";
// import { useState } from "react";
// import { getTotal } from "../helpers";
// import { Link, useNavigate } from "react-router-dom";
// import { addPayment } from "../redux/paymentRedux";

// const Container = styled.div``;

// const Wrapper = styled.div`
//   padding: 20px;
// `;

// const Title = styled.h1`
//   font-weight: 300;
//   text-align: center;
//   margin-bottom: 50px;
// `;

// const Bottom = styled.div`
//   display: flex;
//   justify-content: space-between;
// `;

// const Summary = styled.div`
//   flex: 1;
//   border: 0.5px solid lightgray;
//   border-radius: 10px;
//   padding: 20px;
//   height: 50vh;
// `;

// const Info = styled.div`
//   flex: 3;
//   margin: auto;
//   padding: 0 10%;
// `;

// const Hr = styled.hr`
//   background-color: #eee;
//   border: none;
//   height: 1px;
// `;

// const SummaryTitle = styled.h1`
//   font-weight: 200;
// `;

// const SummaryItem = styled.div`
//   margin: 30px 0px;
//   display: flex;
//   justify-content: space-between;
//   font-weight: ${(props) => props.type === "total" && "500"};
//   font-size: ${(props) => props.type === "total" && "24px"};
// `;

// const SummaryItemText = styled.span``;

// const SummaryItemPrice = styled.span``;

// const Button = styled.button`
//   width: 100%;
//   padding: 10px;
//   background-color: black;
//   color: white;
//   font-weight: 600;
// `;

// const Modal = styled.div`
//     z-index: 2;
//     background-color: #58B19F;
//     padding: 3px;
//     width: 100%;
//     opacity: 0.8;
//     height: 100%
//     position: absolute;
// `;

// const ModalContent = styled.div`
//   z-index: 2;
//   background-color: #55e6c1;
//   padding: 20px;
//   width: 100%;
//   height: 100%;
//   display: flex;
//   align-item: flex-end;
// `;

// const ButtonModal = styled.button`
//   width: 10%;
//   padding: 10px;
//   background-color: black;
//   color: white;
//   font-weight: 600;
// `;

// const Payment = () => {
//   const cart = useSelector((state) => state.cart);
//   const [open, setOpen] = useState(false);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const infoPay = {
//     name: "",
//     surname: "",
//     phone: "",
//     bank: "",
//     expiration: "",
//     security: "",
//   };

//   const [payData, setPayData] = useState(infoPay);

//   const handleChange = (e) => {
//     setPayData({
//       ...payData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handlerClick = (e) => {
//     setOpen(true);
//     e.preventDefault();
//     dispatch(addPayment(payData));
//     navigate("/cart/recap");
//   };

//   return (
//     <>
//       <Container>
//         <Wrapper>
//           {open && (
//             <Modal>
//               <ModalContent>
//                 <ButtonModal onClick={() => setOpen(false)}>Close</ButtonModal>
//                 <div>Votre paiement a bien été éffectué</div>
//               </ModalContent>
//             </Modal>
//           )}
//           <Title>PAIEMENT</Title>
//           <Bottom>
//             <Info>
//               <Input
//                 placeholder="Nom"
//                 name="name"
//                 label="Name : "
//                 onChange={handleChange}
//                 value={payData.name}
//               />
//               <Input
//                 placeholder="Prénom"
//                 name="surname"
//                 label="Prénom : "
//                 onChange={handleChange}
//                 value={payData.surname}
//               />
//               <Input
//                 placeholder="votre numéro de téléphone : "
//                 name="phone"
//                 label="votre numéro de téléphone : "
//                 onChange={handleChange}
//                 value={payData.phone}
//               />
//               <Input
//                 placeholder="Numéro de la carte CB : "
//                 name="bank"
//                 label="Numéro de la carte CB : "
//                 onChange={handleChange}
//                 value={payData.bank}
//               />
//               <Input
//                 placeholder="Date d'expiration : "
//                 name="expiration"
//                 label="Ville : "
//                 onChange={handleChange}
//                 value={payData.expiration}
//               />
//               <Input
//                 placeholder="Sécurité code: "
//                 name="security"
//                 label="Sécurité code: "
//                 onChange={handleChange}
//                 value={payData.security}
//               />
//               <Link to="/cart/recap">
//                 <Button onClick={handlerClick}>Valider</Button>
//               </Link>
//               <Hr />
//             </Info>
//             <Summary>
//               <SummaryTitle>TOTAL DE LA COMMANDE</SummaryTitle>
//               <SummaryItem type="total">
//                 <SummaryItemText>Somme à payer</SummaryItemText>
//                 <SummaryItemPrice>{getTotal(cart.products)}€</SummaryItemPrice>
//               </SummaryItem>
//             </Summary>
//           </Bottom>
//         </Wrapper>
//       </Container>
//     </>
//   );
// };

// export default Payment;

import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getTotal } from "../helpers";
import { addPayment } from "../redux/paymentRedux";

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
  justify-content: space-between;
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
  align-item: center;
  justify-content: space-around;
`;

const ButtonModal = styled.button`
  width: 10%;
  padding: 10px;
  background-color: #22a6b3;
  color: white;
  font-weight: 300;
  font-size: 18px
`;

const Text = styled.div`
font-weight: 300;
font-size: 21px;
`;



const Payment = () => {
  const cart = useSelector((state) => state.cart);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const infoPay = {
    name: "",
    surname: "",
    phone: "",
    bank: "",
    expiration: "",
    security: "",
  };

  const [payData, setPayData] = useState(infoPay);

  const handleChange = (e) => {
    setPayData({
      ...payData,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (e) => {
    setOpen(true);
    e.preventDefault();
    dispatch(addPayment(payData));
    // navigate("/cart/recap");
  };
  return (
    <>
        {open && (
          <Modal>
            <ModalContent>
              <ButtonModal onClick={() => {setOpen(false); navigate("/cart/recap");}}>Passez au recapitulatif</ButtonModal>
              <Text>Votre paiement a bien été éffectué</Text>
            </ModalContent>
          </Modal>
        )}
    <Container>
      <Wrapper>
        <Title>ADRESSE DE LIVRAISON</Title>
        <Form>
          <Input
            placeholder="Nom"
            name="name"
            label="Name : "
            onChange={handleChange}
            value={payData.name}
          />
          <Input
            placeholder="Prénom"
            name="surname"
            label="Prénom : "
            onChange={handleChange}
            value={payData.surname}
          />
          <Input
            placeholder="votre numéro de téléphone : "
            name="phone"
            label="votre numéro de téléphone : "
            onChange={handleChange}
            value={payData.phone}
          />
          <Input
            placeholder="Numéro de la carte CB : "
            name="bank"
            label="Numéro de la carte CB : "
            onChange={handleChange}
            value={payData.bank}
          />
          <Input
            placeholder="Date d'expiration : "
            name="expiration"
            label="Ville : "
            onChange={handleChange}
            value={payData.expiration}
          />
          <Input
            placeholder="Sécurité code: "
            name="security"
            label="Sécurité code: "
            onChange={handleChange}
            value={payData.security}
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
    </>
  );
};

export default Payment;
