import React from 'react';
import { useCart } from '../../context/CartContext';

const CartItem = ({ item }) => {
  const { removeFromCart } = useCart();

  return (
    <div className="flex items-center p-4 border-b">
      <img src={item.image} alt={item.title} className="w-20 h-20 object-cover mr-4 rounded" />
      <div className="flex-grow">
        <h3 className="font-semibold">{item.title}</h3>
        <p className="text-gray-600">{item.artist}</p>
        <p>Qty: {item.quantity}</p>
        <p className="text-orange-600 font-bold">${(item.price * item.quantity).toFixed(2)}</p>
      </div>
      <button onClick={() => removeFromCart(item.id)} className="bg-red-600 text-white px-4 py-2 rounded ml-4">Remove</button>
    </div>
  );
};

export default CartItem;

