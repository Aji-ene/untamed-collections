import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useUser } from '../../context/UserContext';
import { categories, productTypes } from '../../data/products';

const Header = () => {
  const { totalItems } = useCart();
  const { user, logout } = useUser();
  const [timeLeft, setTimeLeft] = useState({
    days: 1, hours: 20, minutes: 9, seconds: 31
  });
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // New: Drawer toggle
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <>

      {/* Sale Banner: Orange bg, white text, centered countdown */}
      <div className="bg-orange-500 text-white py-3 px-4 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left">
        <div className="flex items-center space-x-2 mb-2 sm:mb-0">
          <span className="font-medium">Current offer expires in</span>
          <div className="flex space-x-1 bg-white bg-opacity-20 px-2 py-1 rounded">
            <div className="text-lg font-bold">{timeLeft.days}d</div>
            <div className="text-lg font-bold">{timeLeft.hours}h</div>
            <div className="text-lg font-bold">{timeLeft.minutes}m</div>
            <div className="text-lg font-bold">{timeLeft.seconds}s</div>
          </div>
        </div>
        <div className="flex items-center space-x-4 text-sm">
          <span>Up to 35% off, $16 Tees and $8 off Pillows!</span>
          <Link to="/" className="bg-white text-orange-500 px-4 py-2 rounded font-bold hover:bg-gray-100">SHOP NOW</Link>
          <button className="text-white hover:text-gray-200">×</button>
        </div>
      </div>

      {/* Main Header: White bg, black text, centered search */}
      <header className="bg-white border-b border-gray-200 p-4 shadow-sm">
        <div className="container mx-auto flex items-center justify-between">
          <button onClick={toggleDrawer} className="lg:hidden text-gray-700 text-2xl">☰</button> {/* Hamburger: Mobile only */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">UC</div>
            <div className="text-xl font-bold text-gray-900">UNTAMED COLLECTIONS</div>
          </Link>
          <div className="w-full max-w-md">
            <input
              type="text"
              placeholder="Search your favorite topics..."
              className="w-full p-3 rounded-full border border-gray-300 focus:outline-none focus:border-orange-500 text-sm"
            />
          </div>
          <div className="flex items-center space-x-6">
            <Link to="/account" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
              <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-gray-600">👤</div>
              <span className="hidden sm:inline text-sm">{user ? `Hi, ${user.email}` : 'Account'}</span>
            </Link>
            <Link to="/cart" className="flex items-center space-x-2 relative text-gray-700 hover:text-gray-900">
              <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-gray-600">🛒</div>
              <span className="hidden sm:inline text-sm">Cart ({totalItems})</span>
              {totalItems > 0 && <span className="absolute -top-2 -right-0 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">{totalItems}</span>}
            </Link>
            {!user && <Link to="/login"><button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-bold text-sm">Sign In</button></Link>}
            {user && <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-full font-bold text-sm">Logout</button>}
          </div>
        </div>
        {/* Categories: Smaller, gray buttons */}
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={`/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
              className={`px-4 py-2 rounded-full text-sm font-medium ${index === 0 ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              {category.icon} {category.name}
            </Link>
          ))}
        </div>
      </header>

      {/* Navigation Drawer: Slide from left */}
      <div className={`fixed inset-0 z-50 lg:z-auto transition-transform duration-300 ease-in-out ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:w-64 bg-gray-900 text-white p-4 overflow-y-auto`}>
        {/* Overlay: Close on click (mobile) */}
        {isDrawerOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-0 lg:hidden" onClick={toggleDrawer}></div>}
        
        <div className="relative z-10 h-full flex flex-col">
          {/* Close button (mobile) */}
          <button onClick={toggleDrawer} className="lg:hidden mb-4 self-end text-white text-xl">×</button>

          {/* Shop Designs Section */}
          <div className="mb-6">
            <h2 className="text-lg font-bold mb-2">Shop Designs</h2>
            <p className="text-sm text-gray-300 mb-4">Discover a classic design or new favorite artist</p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <span className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">👕</span>
                <span className="text-sm">Apparel</span>
                <span className="text-xs text-gray-400 ml-auto">Shop for Adults & Kids</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-6 h-6 bg-green-600 rounded flex items-center justify-center">📱</span>
                <span className="text-sm">Accessories</span>
                <span className="text-xs text-gray-400 ml-auto">Express yourself with stickers and more</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-6 h-6 bg-purple-600 rounded flex items-center justify-center">🏠</span>
                <span className="text-sm">Home Goods</span>
                <span className="text-xs text-gray-400 ml-auto">Decorate with pillows, tapestries, and more</span>
              </div>
            </div>
          </div>

          {/* Popular Products: Icon grid */}
          <div className="mb-6">
            <h2 className="text-lg font-bold mb-2">Popular Products</h2>
            <div className="grid grid-cols-2 gap-2">
              {productTypes.slice(0, 6).map((type, i) => ( // Use existing productTypes icons
                <div key={i} className="flex items-center space-x-2 text-sm">
                  <img src={type.image} alt={type.name} className="w-6 h-6" />
                  <span>{type.name}</span>
                </div>
              ))}
              <div className="col-span-2 flex items-center space-x-2 text-sm">
                <span className="w-6 h-6 bg-yellow-500 rounded flex items-center justify-center text-black">🆕</span>
                <span>New</span>
              </div>
            </div>
          </div>

          {/* Browse All Topics: Category buttons */}
          <div className="mb-6">
            <h2 className="text-lg font-bold mb-2">Browse All Topics</h2>
            <div className="grid grid-cols-2 gap-2">
              {categories.slice(0, 10).map((cat, i) => ( // Use existing categories
                <Link key={i} to={`/${cat.name.toLowerCase().replace(/\s+/g, '-')}`} className="flex items-center space-x-2 text-sm p-2 rounded hover:bg-gray-800" onClick={toggleDrawer}>
                  <span>{cat.icon}</span>
                  <span>{cat.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Support */}
          <div className="mb-6">
            <h2 className="text-lg font-bold mb-2">Support</h2>
            <div className="space-y-2 text-sm">
              <Link to="/order-status" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-800" onClick={toggleDrawer}>
                <span className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center">📦</span>
                <span>Order Status</span>
              </Link>
              <Link to="/contact" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-800" onClick={toggleDrawer}>
                <span className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center">💬</span>
                <span>Contact Us</span>
              </Link>
            </div>
          </div>

          {/* Bottom Button */}
          <Link to="/shop" className="mt-auto bg-blue-600 text-white py-3 rounded-md text-center font-bold" onClick={toggleDrawer}>
            Shop All Designs
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;