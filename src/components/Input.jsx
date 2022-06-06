import styled from "styled-components";




const Container = styled.div`
    padding: 15px;
    display: flex;
    flex-direction: column;
`;


const Label = styled.label`
    margin-bottom: 10px;
    font-weight: 500;
`;
const InputStyle = styled.input`
    padding: 15px;
    border: 1px solid gray;
`;



const Input = ({label, value, type="text", placeholder, onChange}) => {

  return (
    <Container>
      <Label>
        {label}
      </Label>
      <InputStyle type={type} value={value} onChange={onChange} placeholder={placeholder}/>
    </Container>
  );
}

export default Input;