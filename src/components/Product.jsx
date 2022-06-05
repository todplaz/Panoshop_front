import { ShoppingCartOutlined } from "@mui/icons-material";
import styled from "styled-components";


const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 1s ease;
    cursor: pointer;
`;

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fcf1ed;
    position: relative;
    &:hover ${Info}{
      opacity: 1;
    }
`;

const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: #fcf1ed;
    position: absolute;
`;

const Image = styled.img`
    height: 75%;
    z-index: 2;
`;

const Icon = styled.div`
    width: 60px;
    height: 60px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    &:hover {
      background-color: #e9f5f5;
      transform: scale(1.4);
    }
`;



const Product = ({item}) => {
  return (
    <Container>
      <Circle/>
      <Image src={item.image}/>
      <Info>
        <Icon>
          <ShoppingCartOutlined/>
        </Icon>
      </Info>
    </Container>
  );
}

export default Product;