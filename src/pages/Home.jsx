import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/common/ProductCard';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { products, featuredStores, giftCategories, artistSpotlight, productTypes, tshirtFeatures } from '../data/products';

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-cyan-50 min-h-screen">
      <Header />

      {/* Hero Section - Artistic & Fun */}
      <section className="relative py-32 px-4 overflow-hidden bg-gradient-to-br from-fuchsia-400 via-violet-500 to-cyan-400">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-40 h-40 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-bounce"></div>
          <div className="absolute top-20 right-20 w-60 h-60 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 left-1/3 w-52 h-52 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl animate-bounce" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-40 right-1/4 w-48 h-48 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Floating Shapes */}
        <div className="absolute top-1/4 left-1/4 w-20 h-20 border-4 border-white/30 rotate-45 animate-spin" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-16 h-16 bg-white/20 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-12 h-12 border-4 border-yellow-300/50 rounded-full animate-ping"></div>

        <div className="container mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block bg-white/30 backdrop-blur-sm px-6 py-2 rounded-full text-white font-bold mb-4 border-2 border-white/50">
              🎃 HALLOWEEN VIBES
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-white drop-shadow-2xl">
              Spooktacular
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-orange-200">
                Sale Alert!
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-white/90 font-bold drop-shadow-lg">
              Up to 35% Off Everything ✨
            </p>
            <p className="text-lg text-white/80">Limited time only – grab your faves before they vanish!</p>
          </div>
          
          {/* Hero Image with Overlaid Buttons */}
          <div className="relative animate-slide-up">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <img 
                src="https://placehold.co/600x700/FF6B9D/FFFFFF?text=Spooky+Vibes" 
                alt="Spooky Model" 
                className="w-full h-auto" 
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              
              {/* Buttons Overlaid on Image */}
              <div className="absolute bottom-8 left-0 right-0 flex flex-col sm:flex-row gap-4 px-8">
                <button className="flex-1 bg-white text-fuchsia-600 px-8 py-4 rounded-full font-black text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:bg-yellow-300">
                  Shop Now 🛍️
                </button>
                <button className="flex-1 border-3 border-white bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-fuchsia-600 transition-all duration-300">
                  Learn More ✨
                </button>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-300 rounded-full opacity-80 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-pink-400 rounded-full opacity-60 blur-xl animate-bounce"></div>
            <div className="absolute top-1/2 -right-8 text-6xl animate-spin" style={{ animationDuration: '4s' }}>⭐</div>
          </div>
        </div>

        {/* Floating Badge */}
        <div className="absolute top-8 right-8 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-black text-center shadow-2xl animate-bounce border-4 border-white">
          <div>
            <div className="text-3xl">35%</div>
            <div className="text-xs">OFF!</div>
          </div>
        </div>
      </section>

      {/* Featured Stores - Artistic Cards */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-purple-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-cyan-600">
              Featured Stores ✨
            </h2>
            <p className="text-xl text-gray-600">Handpicked collections just for you</p>
          </div>
          <div className="flex overflow-x-auto space-x-8 pb-8 snap-x snap-mandatory scrollbar-hide">
            {featuredStores.map((store, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-80 md:w-96 bg-white rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 snap-center hover:scale-105 border-4 border-purple-200"
              >
                <div className="relative overflow-hidden">
                  <img src={store.image} alt={store.title} className="w-full h-56 object-cover transition-transform duration-500 hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-yellow-400 text-purple-900 px-4 py-2 rounded-full font-black text-sm rotate-12">
                    HOT! 🔥
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-black text-2xl mb-6 text-gray-800">{store.title}</h3>
                  <button className="w-full bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white py-4 rounded-2xl font-black text-lg hover:from-fuchsia-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    Explore Store →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers - Playful Grid */}
      <section className="py-20 px-4 bg-gradient-to-br from-cyan-100 via-purple-100 to-pink-100">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-orange-400 to-pink-500 text-white px-8 py-3 rounded-full font-black mb-6 text-sm tracking-wide">
              ⭐ TRENDING NOW
            </div>
            <h2 className="text-5xl font-black text-gray-800 mb-4">
              Best Sellers 🎯
            </h2>
            <p className="text-2xl text-gray-600 font-bold">Top picks loved by our community!</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 p-8 bg-white/50 backdrop-blur-sm rounded-[3rem] shadow-2xl border-4 border-white">
            {products.slice(0, 8).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Gift Finder - Fun & Interactive */}
      <section className="py-20 px-4 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-300 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-black mb-6">🎁 Gift Finder</h2>
            <p className="text-2xl text-purple-100 font-bold">Perfect merch for every vibe!</p>
          </div>
          
          <div className="flex flex-col items-center gap-8 mb-16 max-w-2xl mx-auto">
            <div className="text-center">
              <span className="text-3xl font-black text-yellow-300">Find the perfect</span>
            </div>
            <select className="bg-white/20 backdrop-blur-md border-4 border-white/40 text-white px-8 py-6 rounded-3xl focus:outline-none focus:border-yellow-300 text-2xl font-black w-full shadow-2xl">
              <option className="text-gray-800">🎽 T-Shirt</option>
              <option className="text-gray-800">👕 Hoodie</option>
              <option className="text-gray-800">🖼️ Poster</option>
            </select>
            <div className="text-center">
              <span className="text-3xl font-black text-cyan-300">for your fave:</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-16">
            {giftCategories.map((category, index) => (
              <button
                key={index}
                className={`px-10 py-5 rounded-3xl font-black transition-all duration-300 text-lg shadow-xl transform hover:scale-110 hover:rotate-3 ${
                  index === 0 
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 shadow-yellow-500/50' 
                    : 'bg-white/20 backdrop-blur-md text-white border-3 border-white/40 hover:bg-white/30'
                }`}
              >
                {category.icon} {category.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {products.slice(0, 4).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products - Bold & Artistic */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-4 h-full">
            {[...Array(48)].map((_, i) => (
              <div key={i} className="border border-purple-500"></div>
            ))}
          </div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">
              Featured Products 🌟
            </h2>
            <p className="text-2xl text-gray-300 font-bold">Apparel that makes you unforgettable</p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mb-16">
            {productTypes.map((type, index) => (
              <div 
                key={index} 
                className={`flex flex-col items-center p-8 rounded-3xl transition-all duration-300 hover:scale-110 transform hover:rotate-6 ${
                  index === 0 
                    ? 'bg-gradient-to-br from-yellow-400 to-orange-500 text-gray-900 shadow-2xl shadow-yellow-500/50' 
                    : 'bg-white/10 backdrop-blur-md border-3 border-white/20'
                }`}
              >
                <img src={type.image} alt={type.name} className="w-20 h-20 mb-4 rounded-2xl object-cover shadow-xl" />
                <span className="text-lg font-black">{type.name}</span>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-xl rounded-[3rem] p-12 border-4 border-purple-500/30 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-[3rem] blur-2xl opacity-30 animate-pulse"></div>
                <img 
                  src="https://placehold.co/600x600/8B5CF6/FFFFFF?text=Fresh+Tee" 
                  alt="Model wearing T-Shirt" 
                  className="relative w-full h-auto rounded-[3rem] shadow-2xl border-4 border-white/20" 
                />
              </div>

              <div className="space-y-8">
                <div className="inline-block bg-yellow-400 text-gray-900 px-6 py-2 rounded-full font-black mb-4">
                  ⚡ STAFF PICK
                </div>
                <h3 className="text-5xl font-black mb-6">T-Shirts</h3>
                <p className="text-gray-300 text-2xl font-bold mb-8">Timeless style, endless vibes ✨</p>
                
                <div className="space-y-6">
                  {tshirtFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-6 bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                      <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-pink-500 rounded-2xl flex items-center justify-center text-white font-black text-2xl flex-shrink-0 shadow-lg">
                        ✓
                      </div>
                      <div>
                        <h4 className="font-black text-white mb-2 text-xl">{feature.title}</h4>
                        <p className="text-gray-300 text-lg">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Link to="/shop">
                  <button className="w-full lg:w-auto bg-gradient-to-r from-cyan-500 to-pink-500 text-white px-12 py-6 rounded-3xl font-black text-xl hover:from-cyan-600 hover:to-pink-600 transition-all duration-300 mt-8 shadow-2xl hover:shadow-cyan-500/50 transform hover:scale-105">
                    Shop T-Shirts Now →
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore More - Fun Category Pills */}
      <section className="py-20 px-4 bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-100">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-black text-gray-800 mb-6">Explore More Magic ✨</h2>
          <p className="text-xl text-gray-600 mb-12 font-bold">So many vibes, so little time!</p>
          <div className="flex flex-wrap justify-center gap-6">
            {['Pillows 🛋️', 'Crewnecks 👕', 'Wall Art 🖼️', 'Magnets 🧲', 'Tanks 💪'].map((category, index) => (
              <button 
                key={index} 
                className="bg-white text-purple-600 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white font-black px-10 py-5 rounded-full transition-all duration-300 text-xl shadow-lg hover:shadow-2xl transform hover:scale-110 hover:rotate-3 border-4 border-purple-200"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Editor's Picks - Gallery Style */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-orange-400 to-red-500 text-white px-8 py-3 rounded-full font-black mb-6 text-sm tracking-wide">
              👑 CURATED BY US
            </div>
            <h2 className="text-5xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Editor's Picks
            </h2>
            <p className="text-2xl text-gray-600 font-bold">Weekly drops of pure fire 🔥</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
            {products.slice(8, 16).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter - Vibrant & Eye-catching */}
      <section className="py-20 px-4 bg-gradient-to-r from-fuchsia-500 via-purple-600 to-cyan-500 text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="bg-white/20 backdrop-blur-2xl p-12 rounded-[3rem] shadow-2xl border-4 border-white/30">
            <div className="text-6xl mb-6 text-center">📬</div>
            <h2 className="text-5xl font-black text-center mb-6">Next Sale Alert!</h2>
            <p className="text-center mb-12 text-white/90 text-2xl font-bold">Join the club for exclusive drops & surprises! ✨</p>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-8">
              <div className="flex-grow relative">
                <input
                  type="email"
                  className="w-full p-7 bg-white/30 backdrop-blur-sm border-4 border-white/50 rounded-3xl text-white placeholder-white/70 focus:outline-none focus:border-yellow-300 transition-all duration-300 text-xl font-bold"
                  placeholder="your@email.com"
                />
                <div className="absolute inset-y-0 right-6 flex items-center text-white/60">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 px-14 py-7 rounded-3xl font-black text-xl transition-all duration-300 shadow-2xl hover:shadow-yellow-500/50 transform hover:scale-105">
                Subscribe! 🎉
              </button>
            </div>
            
            <p className="text-sm text-center text-white/80">
              By subscribing, you agree to our <a href="#" className="underline hover:text-yellow-300 font-bold">Privacy Policy</a>. Unsubscribe anytime – no hard feelings! 💜
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;