import styled from "styled-components";

const Container = styled.div`
    width: 100vw;
    height: 100vh;    
    background: linear-gradient(
      rgba(255,255,255,0.5),
      rgba(255,255,255,0.5)
      ), 
      url("https://assets.hermes.com/is/image/hermesproduct/short-run-h--257670HA06-worn-1-0-0-800-800_b.jpg") 
      center;
      background-size: cover;
      display: flex;
      align-items: center;
      justify-content: center;
`;

const Wrapper = styled.div`
    width: 30%;
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
    margin: 10px 0px;
    padding: 10px;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: #22a6b3;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
`;

const Link = styled.a`
    margin: 10px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`;



const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>S'IDENTIFIER</Title>
        <Form>
          <Input placeholder="nom d'utilisateur"/>
          <Input placeholder="mot de passe"/>
          <Button>CONNEXION</Button>
          <Link>Mot de passe oublié?</Link>
          <Link>CREER UN NOUVEAU COMPTE</Link>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default Login;