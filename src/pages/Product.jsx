import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import { Add, Remove } from "@mui/icons-material";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";



const Container = styled.div``;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`;

const ImgContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`;

const Title = styled.h1`
    font-weight: 300;
    margin: 20px 0px;
`;

const Price = styled.span`
    font-weight: 100;
    font-size: 30px;
`;

const Value =styled.span`
    font-weight: 300;
    margin: 10px;
`;

const FilterContainer = styled.div`
    width: 50%;
    display: flex;
    margin: 30px 0px;
    justify-content: space-between;
`;

const Filter = styled.div`
    display: flex;
    align-items: center;
`;

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`;

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    margin: 0px 3px;
    cursor: pointer;
`;

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`;

const FilterSizeOption = styled.option`

`;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #c7ecee;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid #c7ecee;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover{
      background-color: #dff9fb;
  }
`;



const Product = () => {

  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/v1/products/find/" + id)
        setProduct(res.data);
      } catch (err) {

      }
    }
    getProduct();
  }, [id])

  return (
    <Container>
      <Navbar/>
      <Wrapper>
        <ImgContainer>
          <Image src={product.image}/>
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Price>
            300<Value>€</Value>
          </Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Couleur </FilterTitle>
              <FilterColor color="Red"/>
              <FilterColor color="Blue"/>
              <FilterColor color="Black"/>
            </Filter>
            <Filter>
              <FilterTitle>Taille</FilterTitle>
              <FilterSize>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove/>
              <Amount>1</Amount>
              <Add/>
            </AmountContainer>
            <Button>AJOUTER AU PANIER</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Footer/>
    </Container>
  );
}

export default Product;