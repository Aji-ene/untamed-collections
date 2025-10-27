import React, { createContext, useState, useContext, useEffect } from 'react';
import { products } from '../data/products.jsx';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (productId, quantity = 1) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === productId);
      let updated;
      if (existing) {
        updated = prev.map(item =>
          item.id === productId ? { ...item, quantity: item.quantity + quantity } : item
        );
      } else {
        const product = products.find(p => p.id === productId);
        if (product) {
          updated = [...prev, { ...product, quantity }];
        } else {
          return prev; // Product not found
        }
      }
      return updated;
    });
  };

  const removeFromCart = (productId) => {
    setCart(prev => {
      const updated = prev.filter(item => item.id !== productId);
      return updated;
    });
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};


