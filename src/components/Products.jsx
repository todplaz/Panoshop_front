import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";




const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`; 



const Products = ({filters}) => {

  const [products, setproducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/api/v1/products?filters=${filters}`);
        setproducts(res.data);
      } catch (err) {}
    }
    getProducts();
  },[filters])

  useEffect(() => {
    filters && setFilteredProducts(
      products.filter((item) => Object.entries(filters).every(([key, value]) => item[key].includes(value)))
    )
  }, [products, filters]);

  return (
    <Container>
      {filteredProducts.map((item) => (
        <Product item={item} key={item.id}/>
      ))}
    </Container>
  );
}

export default Products;