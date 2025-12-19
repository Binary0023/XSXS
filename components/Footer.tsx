import React from 'react';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1d1d1d] text-white pt-20 pb-10">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: About */}
          <div className="space-y-6">
            <h4 className="font-heading text-sm font-bold uppercase tracking-widest text-white">About Clomaná</h4>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Premium makeup brand created in the Lake District by makeup artist, Chloe Walsh. Famous for the viral Marshmallow Sponge and luxury beauty essentials.
            </p>
            <div className="flex gap-5 text-gray-400">
              <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Column 2: Customer Service */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-widest text-white mb-6">Customer Care</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Delivery & Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-widest text-white mb-6">Shop</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Best Sellers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bundles</a></li>
              <li><a href="#" className="hover:text-white transition-colors">CMFRT Loungewear</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gift Cards</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-widest text-white mb-6">Join the Community</h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <form className="flex flex-col gap-3">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-[#2a2a2a] border border-gray-700 pl-10 pr-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
                />
              </div>
              <button className="bg-white text-black px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors">
                Sign Up
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} CLOMANÁ Beauty. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
             <span className="hover:text-white cursor-pointer transition-colors">United Kingdom (GBP £)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;