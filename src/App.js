import './App.css';
import Home from './pages/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ProductList from './pages/ProductList';
import CartSummary from './pages/CartSummary';
import Product from './pages/Product';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="products" element={<ProductList />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="cart" element={<CartSummary />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
