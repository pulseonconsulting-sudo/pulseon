
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Activity } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-navy-900/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-sky-500 p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
              <Activity className="text-white w-6 h-6" />
            </div>
            <span className={`text-xl font-bold tracking-tight ${scrolled ? 'text-white' : 'text-slate-900 md:text-white'}`}>
              PULSEON <span className="text-sky-500">CONSULTING</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold transition-colors ${
                  location.pathname === link.path 
                    ? 'text-sky-500' 
                    : scrolled ? 'text-slate-300 hover:text-white' : 'text-slate-100 hover:text-sky-400'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-sky-500 hover:bg-sky-600 text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-sky-500/20 active:scale-95"
            >
              Book Audit
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled ? 'text-white' : 'text-slate-900 md:text-white'}`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-navy-900 border-t border-slate-800 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-4 text-lg font-semibold rounded-lg ${
                  location.pathname === link.path ? 'bg-sky-500/10 text-sky-500' : 'text-slate-300'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-sky-500 text-white px-3 py-4 rounded-lg font-bold mt-4"
            >
              Book Audit
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
