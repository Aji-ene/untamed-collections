import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/common/ProductCard';
import { products, categories, navyDayProducts } from '../data/products';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const Shop = () => {
  const [searchQuery, setSearchQuery] = useState(''); // Search state

  // Filter products
  const filteredProducts = products.filter(p =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.artist.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sections: Mock based on screenshot (use filtered or specific slices)
  const inspiredByInterests = filteredProducts.slice(0, 4) || products.slice(0, 4);
  const bestSellers = filteredProducts.slice(4, 8) || products.slice(4, 8);
  const funnyProducts = filteredProducts.filter(p => p.category === 'Funny').slice(0, 4) || products.filter(p => p.category === 'Funny').slice(0, 4);

  const Section = ({ title, products, badge = null, seeAllLink = '/shop' }) => (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
        {badge && <span className="bg-yellow-400 text-black px-2 py-1 rounded text-sm font-bold">{badge}</span>}
        <Link to={seeAllLink} className="text-blue-600 hover:underline text-sm">See All</Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map(product => <ProductCard key={product.id} product={product} />)}
      </div>
    </div>
  );

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />

      {/* Search Bar: Full-width */}
      <div className="bg-white py-4 px-4 border-b border-gray-200">
        <div className="container mx-auto">
          <input
            type="text"
            placeholder="Or search your favorite genre..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full p-3 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500 text-sm"
          />
          <div className="flex justify-center space-x-8 mt-2 text-sm text-gray-600">
            <span>Explore Categories</span>
            <span>Popular Products</span>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {categories.map((cat, i) => (
              <button key={i} className="px-4 py-2 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 text-sm">
                {cat.icon} {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto py-8 px-4">
        {/* Inspired by Your Interests */}
        <Section
          title="Inspired by Your Interests"
          products={inspiredByInterests}
          badge="✨ Your Interests"
        />

        {/* Best Sellers */}
        <Section title="Best Sellers" products={bestSellers} />

        {/* Oct 27 Navy Day */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Oct 27 is Navy Day</h2>
            <span className="text-blue-600 text-sm">⚓</span>
            <Link to="/shop/navy-day" className="text-blue-600 hover:underline text-sm">See All</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {navyDayProducts.map(product => <ProductCard key={product.id} product={product} />)}
          </div>
        </div>

        {/* Funny */}
        <Section title="Funny" products={funnyProducts} />
      </div>

      <Footer />
    </div>
  );
};

export default Shop;