import React from 'react';
import { Link } from 'react-router-dom';
import { footerLinks, socialMedia, paymentMethods } from '../../data/products';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/4">
            <div className="bg-blue-600 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
              <div className="text-center">
                <div className="text-xs">NYC</div>
                <div className="text-lg font-bold">Untamed Collections</div>
                <div className="text-xs">Untamed Guarantee</div>
                <div className="text-xs">Est. 2013</div>
              </div>
            </div>
            <p className="text-center mb-4">Don't love it? We'll fix it. For free. 100% Free Exchanges.</p>
            <p className="text-center"><Link to="/guarantee" className="underline">Untamed Guarantee</Link></p>
          </div>
          <div className="md:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-bold mb-4">Support</h3>
                {footerLinks.Support.map((link, index) => (
                  <div key={index} className="mb-2">
                    <Link to={`/${link.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-300 hover:text-white">{link}</Link>
                  </div>
                ))}
              </div>
              <div>
                <h3 className="font-bold mb-4">About Us</h3>
                {footerLinks.AboutUs.map((link, index) => (
                  <div key={index} className="mb-2">
                    <Link to={`/${link.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-300 hover:text-white">{link}</Link>
                  </div>
                ))}
              </div>
              <div>
                <h3 className="font-bold mb-4">Explore</h3>
                {footerLinks.Explore.map((link, index) => (
                  <div key={index} className="mb-2">
                    <Link to={`/${link.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-300 hover:text-white">{link}</Link>
                  </div>
                ))}
              </div>
              <div>
                <h3 className="font-bold mb-4">Artists</h3>
                {footerLinks.Artists.map((link, index) => (
                  <div key={index} className="mb-2">
                    <Link to={`/${link.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-300 hover:text-white">{link}</Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            {socialMedia.map((social, index) => (
              <div key={index} className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                {social.icon}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h3 className="font-bold mb-4">We Accept</h3>
          <div className="flex flex-wrap gap-4">
            {paymentMethods.map((method, index) => (
              <div key={index} className="w-12 h-8 bg-white rounded flex items-center justify-center">
                <img src={method.icon} alt={method.name} className="w-full h-full object-contain" />
              </div>
            ))}
            <div className="w-24 h-8 bg-blue-800 rounded flex items-center justify-center">
              <div className="text-white text-xs">BBB</div>
              <div className="text-white text-xs ml-1">ACCREDITED BUSINESS</div>
            </div>
            <div className="w-24 h-8 bg-gray-800 rounded flex items-center justify-center">
              <div className="text-white text-xs">0.0 ★★★★☆</div>
              <div className="text-white text-xs ml-1">No rating available</div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm">© UC Apparel LLC 2012 - 2025</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <span className="text-sm">United States - $ USD</span>
              </div>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap justify-center gap-4">
            <Link to="/product-safety" className="text-xs text-gray-400 hover:text-white">Product Safety</Link>
            <Link to="/intellectual-property-policy" className="text-xs text-gray-400 hover:text-white">Intellectual Property Policy</Link>
            <Link to="/ca-do-not-sell" className="text-xs text-gray-400 hover:text-white">CA: Do Not Sell My Personal Information</Link>
            <Link to="/privacy-policy" className="text-xs text-gray-400 hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="text-xs text-gray-400 hover:text-white">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



