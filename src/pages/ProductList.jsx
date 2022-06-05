import styled from "styled-components";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Footer from "../components/Footer";
import { useState } from "react";


const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

const ProductList = () => {

  const [filters, setFilters] = useState({}); 
  const [sort, setSort] = useState("asc")
  
  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    })
  }


  return (
    <Container>
      <Navbar />
      <Title>Articles</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filtre par:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled>
              Couleur
            </Option>
            <Option>Gris</Option>
            <Option>Bicouleur</Option>
            <Option>Bleu</Option>
            <Option>Jaune</Option>
            <Option>Noir</Option>
            <Option>Rouge</Option>
            <Option>Blanc</Option>
            <Option>Marron</Option>
            <Option>Vert</Option>
            <Option>Kaki</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled>
              Taille
            </Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Trier par:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="asc">Prix (asc)</Option>
            <Option value="desc">Prix (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products filters={filters} sort={sort}/>
      <Footer />
    </Container>
  );
};

export default ProductList;