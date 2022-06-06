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
import HeaderSummary from './components/HeaderSummary';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Recap from './pages/Recap';
import Payment from './pages/Payment';
import Delivery from './pages/Delivery';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="products" element={<ProductList />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="cart" element={<HeaderSummary />}>
          <Route path="/cart/summary" element={<CartSummary />} />
          <Route path="/cart/delivery" element={<Delivery />} />
          <Route path="/cart/payment" element={<Payment />} />
          <Route path="/cart/recap" element={<Recap />} />
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
