import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/common/ProductCard';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { products, featuredStores, giftCategories, artistSpotlight, productTypes, tshirtFeatures } from '../data/products';

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-gray-50 to-stone-100 min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-16 px-4 overflow-hidden bg-gradient-to-r from-amber-500 via-orange-600 to-rose-600 text-white">
        <div className="absolute inset-0 bg-black/15"></div>
        <div className="absolute top-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/4 animate-pulse"></div>
        <div className="absolute top-1/2 right-0 w-40 h-40 bg-indigo-400/20 rounded-full flex items-center justify-center text-white text-lg font-bold animate-bounce">
          UP TO 35% OFF!
        </div>
        <div className="container mx-auto relative z-10 grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">Spooktacular Sale</h1>
            <p className="text-lg md:text-xl text-amber-100 opacity-90">Up to 35% Off Everything – Limited Time!</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-amber-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">Shop Now</button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-amber-600 transition-all duration-300">Learn More</button>
            </div>
          </div>
          <div className="relative animate-slide-up">
            <img 
              src="https://placehold.co/500x600/FFA500/FFFFFF?text=Spooky+Model" 
              alt="Spooky Model" 
              className="w-full h-auto max-w-md mx-auto lg:max-w-none rounded-3xl shadow-2xl drop-shadow-xl" 
            />
            <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-violet-400 to-pink-500 rounded-full blur-2xl animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Featured Stores */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-black text-center mb-12 text-slate-800">Featured Stores</h2>
          <div className="flex overflow-x-auto space-x-6 pb-8 snap-x snap-mandatory scrollbar-hide">
            {featuredStores.map((store, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-72 md:w-80 bg-gradient-to-br from-slate-50 to-gray-100 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 snap-center hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img src={store.image} alt={store.title} className="w-full h-40 md:h-48 object-cover transition-transform duration-500 hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-4 text-slate-800">{store.title}</h3>
                  <button className="w-full bg-gradient-to-r from-indigo-500 to-blue-600 text-white py-3 rounded-xl font-semibold hover:from-indigo-600 hover:to-blue-700 transition-all duration-300 shadow-lg">Explore Store</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Best Sellers */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-indigo-600 mb-4">Best Sellers</h2>
            <p className="text-xl text-slate-600">Top picks from our marketplace – fan favorites.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-4 bg-gradient-to-br from-slate-50 to-white rounded-3xl shadow-inner">
            {products.slice(0, 8).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Gift Finder */}
      <section className="py-16 px-4 bg-gradient-to-b from-slate-900 via-gray-900 to-slate-900 text-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-black text-center mb-6">Gift Ideas?</h2>
          <p className="text-center mb-12 text-slate-300 text-lg">Perfect merch for every fan – discover now.</p>
          <div className="flex flex-col items-center gap-6 mb-12">
            <span className="text-slate-300 text-lg">Perfect</span>
            <select className="bg-slate-800/50 border border-slate-600 text-white px-6 py-4 rounded-2xl focus:outline-none focus:border-indigo-500 text-lg w-full max-w-md">
              <option>T-Shirt</option>
              <option>Hoodie</option>
              <option>Poster</option>
            </select>
            <span className="text-slate-300 text-lg">for your fave:</span>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {giftCategories.map((category, index) => (
              <button
                key={index}
                className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 text-sm md:text-base shadow-lg ${
                  index === 0 
                    ? 'bg-gradient-to-r from-indigo-500 to-blue-600 text-white hover:shadow-2xl hover:scale-105' 
                    : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-600 hover:border-slate-500'
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

      

      {/* Featured Products */}
      <section className="py-16 px-4 bg-gradient-to-b from-slate-900 to-slate-950 text-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black mb-4">Featured Products</h2>
            <p className="text-xl text-slate-300">Apparel & accessories that turn heads.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {productTypes.map((type, index) => (
              <div 
                key={index} 
                className={`flex flex-col items-center p-6 rounded-3xl transition-all duration-300 hover:scale-110 ${
                  index === 0 ? 'bg-white text-slate-900 shadow-2xl' : 'bg-slate-800/30 backdrop-blur-md border border-slate-700/50'
                }`}
              >
                <img src={type.image} alt={type.name} className="w-12 h-12 md:w-16 md:h-16 mb-3 rounded-2xl object-cover" />
                <span className="text-sm md:text-base font-bold">{type.name}</span>
              </div>
            ))}
          </div>
          <div className="bg-slate-800/30 backdrop-blur-md rounded-3xl p-8 border border-slate-700/30">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://placehold.co/500x500/4169E1/FFFFFF?text=Model+T-Shirt" 
                  alt="Model wearing T-Shirt" 
                  className="w-full h-auto max-w-sm mx-auto lg:max-w-none rounded-3xl shadow-2xl" 
                />
              </div>
              <div className="space-y-6">
                <h3 className="text-3xl font-black mb-4">T-Shirts</h3>
                <p className="text-slate-300 mb-6 text-lg">Timeless style, endless vibes.</p>
                <div className="space-y-4">
                  {tshirtFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 mt-1">✓</div>
                      <div>
                        <h4 className="font-bold text-white mb-1 text-lg">{feature.title}</h4>
                        <p className="text-slate-300 text-base">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link to="/shop">
                  <button className="w-full lg:w-auto bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 mt-4 shadow-xl hover:shadow-2xl">
                    Shop T-Shirts →
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Products to Explore */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-black text-slate-800 mb-8">Explore More</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {['Pillows', 'Crewnecks', 'Wall Art', 'Magnets', 'Tanks'].map((category, index) => (
              <button 
                key={index} 
                className="text-indigo-600 hover:text-indigo-800 font-bold px-6 py-3 rounded-2xl border-b-2 border-transparent hover:border-indigo-600 transition-all duration-300 text-lg hover:scale-105"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Editor's Picks */}
      <section className="py-16 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-indigo-600 mb-4">Editor's Picks</h2>
            <p className="text-xl text-slate-600">Curated weekly drops – exclusive vibes.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {products.slice(8, 16).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Newsletter - Kept and enhanced */}
      <section className="py-16 px-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/20">
            <h2 className="text-4xl font-black text-center mb-4">Next Sale Alert</h2>
            <p className="text-center mb-8 text-indigo-100 text-lg">Stay in the loop for exclusives & drops!</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-grow relative">
                <input
                  type="email"
                  className="w-full p-5 bg-white/20 border-2 border-white/30 rounded-2xl text-white placeholder-indigo-200 focus:outline-none focus:border-white transition-all duration-300 text-lg"
                  placeholder="Enter your email..."
                />
                <div className="absolute inset-y-0 right-4 flex items-center text-indigo-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <button className="bg-white hover:bg-gray-100 text-indigo-600 px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl">Subscribe</button>
            </div>
            <p className="text-sm mt-6 text-center text-indigo-200">
              By subscribing, you agree to our <a href="#" className="underline hover:text-white font-semibold">Privacy Policy</a>. Opt out anytime.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;