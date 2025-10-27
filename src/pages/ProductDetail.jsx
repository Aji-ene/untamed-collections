
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useUser } from '../context/UserContext';
import { products } from '../data/products';

import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { user, likes, toggleLike } = useUser();
  // const product = products.find(p => p.id === parseInt(id));
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div className="min-h-screen bg-gray-100 flex items-center justify-center">Product not found.</div>;
}


  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || '#000000');
  const [selectedFit, setSelectedFit] = useState('Male');
  const [selectedStyle, setSelectedStyle] = useState('Classic');
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [showFullDesc, setShowFullDesc] = useState(false);
  const isLiked = user && likes.includes(product?.id);

  useEffect(() => {
    if (!product) navigate('/'); // Redirect if no product
  }, [product, navigate]);

  if (!product) return <div className="min-h-screen bg-gray-100 flex items-center justify-center">Product not found.</div>;


  const description = product.description || "";
  const truncatedDesc = showFullDesc
    ? description
    : `${description.split(' ').slice(0, 20).join(' ')}...`;


  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size.');
      return;
    }
    addToCart(product.id, quantity, { color: selectedColor, fit: selectedFit, style: selectedStyle, size: selectedSize });
    alert(`${quantity} x ${product.title} added to cart!`);
  };

  const incrementQuantity = () => setQuantity(Math.min(quantity + 1, 99));
  const decrementQuantity = () => setQuantity(Math.max(quantity - 1, 1));

  const imageUrl = `${product.image}?color=${encodeURIComponent(selectedColor)}`; // Mock color change

  // const truncatedDesc = showFullDesc ? product.description : `${product.description.split(' ').slice(0, 20).join(' ')}...`;



  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="container mx-auto py-8 px-4">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-4">
          <button onClick={() => navigate('/')} className="hover:underline">Home</button> / {product.title}
        </nav>

        {/* Main Content: Responsive flex */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Image Column: Left on desktop, full on mobile */}
          <div className="lg:w-2/5">
            <img src={imageUrl} alt={product.title} className="w-full h-64 lg:h-96 object-cover rounded-lg shadow-lg mb-4" />
            {/* Color Swatches */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              <label className="text-sm font-medium text-gray-700 mr-2">Color:</label>
              {(product.colors || []).map(color => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-6 h-6 rounded-full border-2 transition ${
                    selectedColor === color ? 'border-blue-600 ring-2 ring-blue-600 ring-opacity-50' : 'border-gray-300'
                  }`}
                  style={{ backgroundColor: color }}
                  title={color}
                />
              ))}
              <span className="text-sm text-gray-700 ml-2">{selectedColor === '#000000' ? 'Black' : 'Other'}</span> {/* Mock label */}
            </div>
          </div>

          {/* Details Column: Right on desktop, full on mobile */}
          <div className="lg:w-3/5 space-y-6">
            {/* Title & Info */}
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">{product.title}</h1>
              <h2 className="text-lg font-semibold text-gray-700 mb-2">{product.subtitle || `${product.category} T-Shirt`}</h2>
              <p className="text-sm text-gray-600 mb-4">designed and sold by {product.artist}</p>
              <div className="flex items-center mb-4">
                <span className="text-2xl font-bold text-gray-900 mr-2">${product.price}</span>
                <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
              </div>
              <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold inline-block mb-4">
                Special Offer: Save 30%
              </div>
              <button
                onClick={() => toggleLike(product.id)}
                className="flex items-center text-gray-600 hover:text-red-500 text-xl mr-4"
                disabled={!user}
              >
                ♡ {isLiked ? 'Liked' : 'Like'}
              </button>
            </div>

            {/* Selectors */}
            <div className="space-y-4">
              {/* Fit */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Fit</label>
                <select
                  value={selectedFit}
                  onChange={e => setSelectedFit(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                >
                  {(product.fits || []).map(fit => <option key={fit} value={fit}>{fit} Fit</option>)}
                </select>
              </div>

              {/* Style */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Style</label>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                  {(product.styles || []).map(style => (
                    <button
                      key={style}
                      onClick={() => setSelectedStyle(style)}
                      className={`p-2 border rounded-md text-sm ${
                        selectedStyle === style
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'bg-white border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {style}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium text-gray-700">Size</label>
                  <button className="text-sm text-blue-600 hover:underline">View Size Chart</button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {(product.sizes || []).map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border rounded-md text-sm font-medium ${
                        selectedSize === size
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'bg-white border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                <div className="flex items-center border border-gray-300 rounded-md overflow-hidden w-32">
                  <button
                    onClick={decrementQuantity}
                    className="px-3 py-2 hover:bg-gray-100"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={e => setQuantity(Math.max(1, parseInt(e.target.value)))}
                    className="w-12 text-center border-0 focus:outline-none"
                    min="1"
                    max="99"
                  />
                  <button
                    onClick={incrementQuantity}
                    className="px-3 py-2 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-bold text-lg transition-colors disabled:opacity-50"
              disabled={!selectedSize || !product.inStock}
            >
              ADD TO CART
            </button>

            {/* Guarantee */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white mr-2">✓</div>
                <h3 className="font-bold text-blue-900">TeePublic Guarantee</h3>
              </div>
              <p className="text-sm text-gray-700 mb-1">Don’t love it? We’ll fix it. For free.</p>
              <a href="#" className="text-sm text-blue-600 underline">TeePublic Guarantee</a>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
              <p className="text-sm text-gray-700">{truncatedDesc}</p>
              <button
                onClick={() => setShowFullDesc(!showFullDesc)}
                className="text-sm text-blue-600 hover:underline mt-2"
              >
                {showFullDesc ? 'Read less' : 'Read more'}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;