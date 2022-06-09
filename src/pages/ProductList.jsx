import styled from "styled-components";
import Products from "../components/Products";
import { useState } from "react";
import { mobile } from "../responsive";

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
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;

const Option = styled.option``;

const ProductList = () => {
  const [filters, setFilters] = useState({});

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <Container>
      <Title>Articles</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filtre par:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled>Couleur</Option>
            <Option>gray</Option>
            <Option>indigo</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>white</Option>
            <Option>brown</Option>
            <Option>green</Option>
            <Option>khaki</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled>Taille</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products filters={filters} />
    </Container>
  );
};

export default ProductList;
