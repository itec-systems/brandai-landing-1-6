import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onOpenForm: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenForm }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav 
      data-section="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-200' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 group transition-all duration-200 hover:scale-105"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span 
                data-edit="navbar-logo-text"
                className={`font-bold text-xl transition-colors duration-300 ${
                  scrolled ? 'text-gray-900' : 'text-white'
                }`}
              >
                SoloBrand
              </span>
            </button>
          </div>

          {/* CTA Button */}
          <div className="flex-shrink-0">
            <button
              onClick={onOpenForm}
              className={`px-6 py-2.5 font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 ${
                scrolled
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-md hover:shadow-lg'
                  : 'bg-white/10 backdrop-blur-sm text-white border border-white/30 hover:bg-white/20 hover:border-white/50'
              }`}
            >
              <span data-edit="navbar-cta-text">Agendar Demo</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;