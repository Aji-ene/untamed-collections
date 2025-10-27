import React from 'react';
import { useCart } from '../context/CartContext';
import CartItem from '../components/product/CartItem';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const Cart = () => {
  const { cart, totalPrice } = useCart();

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl mb-4">Shopping Cart</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty. <a href="/" className="text-blue-600 underline">Continue Shopping</a></p>
        ) : (
          <>
            {cart.map(item => <CartItem key={item.id} item={item} />)}
            <div className="text-right mt-4 p-4 bg-white rounded shadow">
              <h2 className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</h2>
              <button className="bg-green-600 text-white px-6 py-2 rounded mt-2 hover:bg-green-700">Proceed to Checkout</button>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;

