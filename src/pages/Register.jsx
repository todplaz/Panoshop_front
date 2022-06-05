import styled from "styled-components";

const Container = styled.div`
    width: 100vw;
    height: 100vh;    
    background: linear-gradient(
      rgba(255,255,255,0.5),
      rgba(255,255,255,0.5)
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
    flex-wrap: wrap;
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



const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREER VOTRE COMPTE</Title>
        <Form>
          <Input placeholder="nom"/>
          <Input placeholder="prenom"/>
          <Input placeholder="nom d'utilisateur"/>
          <Input placeholder="email"/>
          <Input placeholder="mot de passe"/>
          <Input placeholder="confirmer mot de passe"/>
          <Button>CREER</Button>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default Register;