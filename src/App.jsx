import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Cart from './pages/Cart.jsx';
import Admin from './pages/Admin.jsx';
import Account from './pages/Account.jsx';
import Login from './components/user/Login.jsx';
import Register from './components/user/Register.jsx';
import ProductCard from './components/common/ProductCard.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import Shop from './pages/Shop.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/account" element={<Account />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/products" element={<ProductCard />} />
      <Route path="/products/:id" element={<ProductDetail />} />
      <Route path="/shop" element={<Shop />} />
      {/* Optional: <Route path="/shop/navy-day" element={<NavyDayPage />} /> (create if needed)*/}
      {/* Add more routes as needed, e.g., /products/:id */}
    </Routes>
  );
}

export default App;

