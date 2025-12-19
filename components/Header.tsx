import React, { useState } from 'react';
import { ShoppingBag, Search, User, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-white text-clomana-text text-[11px] md:text-xs py-2 text-center tracking-widest uppercase font-medium border-b border-gray-100 font-sans">
        FREE UK SHIPPING OVER £35
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-[#f7f5f4]/95 backdrop-blur-sm border-b border-gray-200 transition-all duration-300">
        <div className="max-w-[1400px] mx-auto px-4 h-20 flex items-center justify-between">
          
          {/* Logo - Left aligned on Desktop */}
          <div className="flex-shrink-0">
            <a href="/" className="block">
              <img 
                src="https://clomana.com/cdn/shop/files/CLOMANA_RGB_Black.png?v=1707475662&width=240" 
                alt="CLOMANÁ Beauty" 
                className="h-6 md:h-8 w-auto object-contain"
              />
            </a>
          </div>

          {/* Desktop Navigation - Center */}
          <nav className="hidden lg:flex gap-8 items-center">
            <a href="/collections/shop-all" className="text-sm font-medium uppercase tracking-wide hover:text-clomana-accent transition-colors font-sans">Shop All</a>
            <a href="/collections/shop-all-clomana" className="text-sm font-medium uppercase tracking-wide hover:text-clomana-accent transition-colors font-sans">Clomaná</a>
            <a href="/pages/cmfrt" className="text-sm font-medium uppercase tracking-wide hover:text-clomana-accent transition-colors font-sans">CMFRT</a>
            <a href="/pages/marshmallow-quiz" className="text-sm font-medium uppercase tracking-wide hover:text-clomana-accent transition-colors font-sans">Quiz</a>
            <a href="/pages/loyalty" className="text-sm font-medium uppercase tracking-wide hover:text-clomana-accent transition-colors font-sans">Loyalty</a>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-4 md:gap-6">
            <button className="p-1 hover:opacity-70 transition-opacity">
              <Search className="w-5 h-5 text-clomana-text" />
            </button>
            <button className="hidden md:block p-1 hover:opacity-70 transition-opacity">
              <User className="w-5 h-5 text-clomana-text" />
            </button>
            <button className="p-1 hover:opacity-70 transition-opacity relative">
              <ShoppingBag className="w-5 h-5 text-clomana-text" />
              <span className="absolute -top-1 -right-1 bg-clomana-dark text-white text-[9px] w-3.5 h-3.5 flex items-center justify-center rounded-full">0</span>
            </button>
            <button 
              className="lg:hidden p-1"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6 text-clomana-text" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] flex lg:hidden">
          <div className="w-full max-w-sm bg-[#f7f5f4] h-full shadow-2xl p-6 flex flex-col">
            <div className="flex justify-between items-center mb-8">
              <span className="font-heading font-semibold text-lg uppercase tracking-widest">Menu</span>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex flex-col gap-6 text-lg font-medium font-heading">
              <a href="#" className="border-b border-gray-200 pb-2">Shop All</a>
              <a href="#" className="border-b border-gray-200 pb-2">Clomaná</a>
              <a href="#" className="border-b border-gray-200 pb-2">CMFRT</a>
              <a href="#" className="border-b border-gray-200 pb-2">Marshmallow Quiz</a>
              <a href="#" className="border-b border-gray-200 pb-2">Loyalty</a>
            </nav>
          </div>
          <div className="flex-1 bg-black/20 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}></div>
        </div>
      )}
    </>
  );
};

export default Header;