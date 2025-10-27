import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useUser } from '../../context/UserContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { user, likes, toggleLike } = useUser();
  const isLiked = user && likes.includes(product.id);

  return (
    <div
      className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
    >
      {/* Image Section */}
      <div className="relative bg-gray-50 aspect-square flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />

        {/* Best Seller Badge */}
        <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-md shadow-sm">
          Best Seller
        </div>

        {/* Like Button */}
        <button
          onClick={() => toggleLike(product.id)}
          className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md"
          disabled={!user}
        >
          <div className={`text-lg ${isLiked ? 'text-red-500 fill-current' : 'text-gray-300'}`}>
            ♥ {/* Use ♥ instead of ♡ for filled look */}
          </div>
        </button>
      </div>

      {/* Product Info */}
      <div className="p-4 flex flex-col">
        <h3 className="font-semibold text-gray-800 text-sm truncate mb-1">{product.title}</h3>
        <p className="text-xs text-gray-500 mb-2">{product.artist}</p>

        <Link
          to={`/products/${product.id}`}
          className="text-xs text-blue-600 hover:underline mb-3"
        >
          View Details
        </Link>

        {/* Price Section */}
        <div className="flex items-center mb-3">
          <span className="text-orange-600 font-bold text-sm">${product.price}</span>
          {product.originalPrice && (
            <span className="text-gray-400 line-through ml-2 text-xs">
              ${product.originalPrice}
            </span>
          )}
        </div>

        {/* Add to Cart */}
        <button
          onClick={() => addToCart(product.id)}
          className={`rounded-lg text-sm font-medium py-2 w-full transition ${
            product.inStock
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-gray-300 text-gray-600 cursor-not-allowed'
          }`}
          disabled={!product.inStock}
        >
          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
