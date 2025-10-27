import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/common/ProductCard';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { products, featuredStores, giftCategories, artistSpotlight, productTypes, tshirtFeatures } from '../data/products';

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-16 px-4 overflow-hidden bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/20 rounded-full blur-xl -translate-x-1/2 translate-y-1/4"></div>
        <div className="absolute top-1/2 right-0 w-48 h-48 bg-blue-600/30 rounded-full flex items-center justify-center text-white text-lg font-bold animate-pulse">
          UP TO 35% OFF!
        </div>
        <div className="container mx-auto relative z-10 grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">Spooktacular Sale</h1>
            <p className="text-xl text-orange-100">Up to 35% Off Everything</p>
            <div className="flex gap-4">
              <button className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-shadow">Shop Now</button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-orange-600 transition-colors">Learn More</button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://placehold.co/500x600/FFA500/FFFFFF?text=Spooky+Model" 
              alt="Spooky Model" 
              className="w-full rounded-2xl shadow-2xl drop-shadow-lg" 
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full blur-xl"></div>
          </div>
        </div>
      </section>

      {/* Featured Stores */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Featured Stores</h2>
          <div className="flex overflow-x-auto space-x-6 pb-6 snap-x snap-mandatory scrollbar-hide">
            {featuredStores.map((store, index) => (
              <div key={index} className="flex-shrink-0 w-80 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 snap-center">
                <img src={store.image} alt={store.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-3 text-gray-800">{store.title}</h3>
                  <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all">Explore</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pop Culture Section */}
      <section className="py-12 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Pop Culture Essentials</h2>
          <p className="text-lg text-gray-600 mb-6">T-shirts, posters, merch – for fans, by fans.</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-md">
            <span className="text-gray-700 font-semibold">Excellent</span>
            <div className="flex text-yellow-400 text-2xl">★★★★★</div>
            <span className="text-gray-600">4.5 / 5 (535k+)</span>
            <div className="flex items-center gap-2 text-green-600">
              <span className="text-2xl">★</span>
              <span className="font-semibold">Trustpilot</span>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-12 px-4 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-xl">
            <h2 className="text-3xl font-bold text-center mb-3 text-gray-800">Join the Haunt</h2>
            <p className="text-center mb-6 text-gray-600">For sales, drops & exclusives!</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-grow relative">
                <input
                  type="email"
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="Enter your email..."
                />
                <div className="absolute inset-y-0 right-3 flex items-center text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl">Subscribe</button>
            </div>
            <p className="text-xs mt-4 text-center text-gray-500">
              Agree to <a href="#" className="underline hover:text-blue-600">Privacy Policy</a>. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-blue-600 mb-2">Best Sellers</h2>
            <p className="text-lg text-gray-600">Top picks from our marketplace.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 p-4 bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-inner">
            {products.slice(0, 8).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Gift Finder */}
      <section className="py-12 px-4 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Gift Ideas?</h2>
          <p className="text-center mb-8 text-gray-300">Perfect merch for fans.</p>
          <div className="flex flex-col items-center gap-4 mb-8">
            <span className="text-gray-300">Perfect</span>
            <select className="bg-gray-800/50 border border-gray-600 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-blue-500">
              <option>T-Shirt</option>
              <option>Hoodie</option>
              <option>Poster</option>
            </select>
            <span className="text-gray-300">for your fave:</span>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {giftCategories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  index === 0 
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg hover:shadow-xl' 
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600'
                }`}
              >
                {category.icon} {category.name}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products.slice(0, 4).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Artist Spotlight */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-blue-600 mb-2">Artist Spotlight</h2>
            <p className="text-lg text-gray-600">Meet the creator.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg text-center">
              <div className="bg-gradient-to-r from-black to-gray-900 rounded-xl p-6 mb-6">
                <h3 className="text-2xl font-bold text-white mb-4">{artistSpotlight.name}</h3>
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-4 shadow-lg"></div>
              </div>
              <h3 className="font-bold text-xl mb-2">{artistSpotlight.name}</h3>
              <p className="text-gray-600 mb-2">{artistSpotlight.handle}</p>
              <div className="space-y-2 text-sm text-gray-500 mb-4">
                <p>📅 Joined {artistSpotlight.joined}</p>
                <p>{artistSpotlight.designs} Designs</p>
              </div>
              <div className="text-orange-500 font-semibold mb-4">
                On sale for {artistSpotlight.saleDuration}
              </div>
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl font-semibold w-full hover:from-blue-700 hover:to-blue-800 transition-all">View Store</button>
            </div>
            <div className="lg:col-span-2">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {artistSpotlight.products.map((product, index) => (
                  <ProductCard key={index} product={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 px-4 bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Featured Products</h2>
            <p className="text-lg text-gray-300">Apparel & accessories.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {productTypes.map((type, index) => (
              <div key={index} className={`flex flex-col items-center p-4 rounded-2xl transition-all ${
                index === 0 ? 'bg-white text-black shadow-lg' : 'bg-gray-800/50 backdrop-blur-sm'
              } hover:scale-105`}>
                <img src={type.image} alt={type.name} className="w-16 h-16 mb-3 rounded-xl" />
                <span className="text-sm font-semibold">{type.name}</span>
              </div>
            ))}
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-6">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src="https://placehold.co/500x500/4169E1/FFFFFF?text=Model+T-Shirt" 
                  alt="Model wearing T-Shirt" 
                  className="w-full rounded-2xl shadow-2xl" 
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold mb-2">T-Shirts</h3>
                <p className="text-gray-300 mb-4">Classic Style</p>
                <div className="space-y-3">
                  {tshirtFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">✓</div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                        <p className="text-gray-300 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link to="/shop">
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all mt-2">
                    Shop T-Shirts →
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Products to Explore */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Explore More</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {['Pillows', 'Crewnecks', 'Wall Art', 'Magnets', 'Tanks'].map((category, index) => (
              <button key={index} className="text-blue-600 hover:text-blue-800 font-semibold px-4 py-2 rounded-lg border-b-2 border-transparent hover:border-blue-600 transition-all">
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Editor's Picks */}
      <section className="py-12 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-blue-600 mb-2">Editor's Picks</h2>
            <p className="text-lg text-gray-600">Curated weekly drops.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {products.slice(8, 16).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Newsletter */}
      <section className="py-12 px-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-3xl shadow-2xl">
            <h2 className="text-3xl font-bold text-center mb-3">Next Sale Alert</h2>
            <p className="text-center mb-6 text-blue-100">For exclusives & more!</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-grow">
                <input
                  type="email"
                  className="w-full p-4 bg-white/20 border-2 border-white/30 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:border-white"
                  placeholder="Enter your email..."
                />
              </div>
              <button className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl">Subscribe</button>
            </div>
            <p className="text-xs mt-4 text-center text-blue-200">
              Agree to <a href="#" className="underline hover:text-white">Privacy Policy</a>. Opt out anytime.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;