import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/common/ProductCard';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { products, featuredStores, giftCategories, artistSpotlight, productTypes, tshirtFeatures } from '../data/products';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-8 px-4 bg-orange-500 text-white">
        <div className="container mx-auto relative">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full opacity-80"></div>
          <div className="absolute top-16 right-0 w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
            GET UP TO<br/>35% OFF<br/>EVERYTHING!
          </div>
          <div className="relative z-10 flex items-center">
            <div className="w-1/2 pr-8">
              <h1 className="text-4xl font-bold mb-2">Time for a Spooktacular Sale</h1>
              <p className="text-xl mb-4">Up to 35% Off Everything!</p>
              <button className="bg-white text-black px-6 py-2 rounded">Shop Now</button>
            </div>
            <div className="w-1/2">
              <img src="https://placehold.co/400x500/FFA500/FFFFFF?text=Spooky+Model" alt="Spooky Model" className="rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Stores */}
      <section className="py-8 px-4 bg-white">
        <div className="container mx-auto">
          <div className="flex overflow-x-auto space-x-4 pb-4">
            {featuredStores.map((store, index) => (
              <div key={index} className="flex-shrink-0 w-80 bg-gray-100 rounded-lg overflow-hidden">
                <img src={store.image} alt={store.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="font-bold mb-2">{store.title}</h3>
                  <button className="bg-white text-black px-4 py-2 rounded">{store.button}</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pop Culture Section */}
      <section className="py-8 px-4 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-blue-600 text-center mb-4">Original pop culture t-shirts, posters, merch, and more</h2>
          <div className="flex items-center justify-center space-x-4">
            <span>Excellent</span>
            <div className="flex text-green-500">★★★★★</div>
            <span>4.5 out of 5 based on 535,851 reviews</span>
            <div className="flex items-center">
              <span className="text-green-500">★</span>
              <span>Trustpilot</span>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-8 px-4 bg-blue-50">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-center mb-2">Subscribe to Our Newsletter</h2>
            <p className="text-center mb-6">For sales, exclusive content, and more!</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-grow">
                <label className="block text-sm mb-1">Email Address *</label>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Enter your email"
                />
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded self-start">Subscribe</button>
            </div>
            <p className="text-xs mt-4 text-gray-600">
              By clicking Subscribe, you agree to our <a href="#" className="underline">Privacy Policy</a> and to receive our promotional emails (opt out anytime).
            </p>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-8 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-blue-600 text-center mb-2">Best Sellers</h2>
          <p className="text-center mb-8">Check out the most popular products on the Untamed Collections Marketplace!</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 p-2 bg-gray-50 rounded-2xl">
            {products.slice(0, 8).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Gift Finder */}
      <section className="py-8 px-4 bg-gray-900 text-white">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4">Need to Find a Gift?</h2>
          <div className="flex justify-center mb-4">
            <span className="mr-2">Find the perfect</span>
            <select className="bg-gray-800 text-white px-3 py-1 rounded">
              <option>T-Shirt</option>
              <option>Hoodie</option>
              <option>Poster</option>
            </select>
            <span className="ml-2">for your favorite:</span>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {giftCategories.map((category, index) => (
              <button
                key={index}
                className={`px-3 py-2 rounded ${index === 0 ? 'bg-blue-600 text-white' : 'bg-gray-800 text-white'}`}
              >
                {category.icon} {category.name}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products.slice(0, 4).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Artist Spotlight */}
      <section className="py-8 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-blue-600 text-center mb-2">Artist Spotlight</h2>
          <p className="text-center mb-8">Take a look at this show-stopping artist shining in the spotlight!</p>
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="lg:w-1/3 bg-white rounded-lg shadow p-6">
              <div className="bg-black rounded-lg p-4 mb-4">
                <h3 className="text-2xl font-bold text-white mb-2">{artistSpotlight.name}</h3>
                <div className="w-16 h-16 bg-white rounded-full mx-auto mb-2"></div>
              </div>
              <h3 className="font-bold text-center mb-2">{artistSpotlight.name}</h3>
              <p className="text-center text-gray-600 mb-2">{artistSpotlight.handle}</p>
              <div className="text-center text-sm mb-2">
                <span>📅 Joined {artistSpotlight.joined}</span>
              </div>
              <div className="text-center text-sm mb-2">
                <span>{artistSpotlight.designs} Designs</span>
              </div>
              <div className="text-center text-sm text-orange-600 mb-4">
                Store on sale for {artistSpotlight.saleDuration}
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full">View Artist Storefront</button>
            </div>
            <div className="lg:w-2/3">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {artistSpotlight.products.map((product, index) => (
                  <ProductCard key={index} product={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-8 px-4 bg-gray-900 text-white">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-center mb-2">Featured Products</h2>
          <p className="text-center mb-8">Learn about the most popular Apparel, Accessories, and more!</p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {productTypes.map((type, index) => (
              <div key={index} className={`flex flex-col items-center p-3 rounded ${index === 0 ? 'bg-white text-black' : 'bg-gray-800'}`}>
                <img src={type.image} alt={type.name} className="w-12 h-12 mb-2" />
                <span className="text-xs">{type.name}</span>
              </div>
            ))}
          </div>
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/2">
                <img src="https://placehold.co/400x400/4169E1/FFFFFF?text=Model+T-Shirt" alt="Model wearing T-Shirt" className="w-full rounded-lg" />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-xl font-bold mb-2">T-Shirts</h3>
                <p className="text-sm mb-4">Style Shown: Classic T-Shirt</p>
                <div className="grid grid-cols-2 gap-4">
                  {tshirtFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black mr-3">✓</div>
                      <div>
                        <h4 className="font-semibold mb-1">{feature.title}</h4>
                        <p className="text-xs">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link to="/shop">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded mt-4">
                    Shop T-Shirts →
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Products to Explore */}
      <section className="py-8 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4">Other Products To Explore</h2>
          <div className="flex justify-center space-x-4 mb-6">
            {['Pillows', 'Crewneck Sweatshirts', 'Wall Art', 'Magnets', 'Tank Tops'].map((category, index) => (
              <button key={index} className="text-blue-600 underline">{category}</button>
            ))}
          </div>
        </div>
      </section>

      {/* Editor's Picks */}
      <section className="py-8 px-4 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-blue-600 text-center mb-2">Editor's Picks</h2>
          <p className="text-center mb-8">Designs curated by Untamed Collections's Community Team - updated weekly!</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products.slice(8, 16).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Newsletter */}
      <section className="py-8 px-4 bg-blue-600 text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-blue-700 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-center mb-2">Subscribe to Our Newsletter</h2>
            <p className="text-center mb-6">For sales, exclusive content, and more!</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-grow">
                <label className="block text-sm mb-1">Email Address</label>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Enter your email"
                />
              </div>
              <button className="bg-black hover:bg-gray-800 text-white px-6 py-2 rounded self-start">Subscribe</button>
            </div>
            <p className="text-xs mt-4 text-gray-300">
              By clicking Subscribe, you agree to our <a href="#" className="underline">Privacy Policy</a> and to receive our promotional emails (opt out anytime).
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;


