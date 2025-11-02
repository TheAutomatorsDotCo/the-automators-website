import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Assessment', path: '/assessment' },
    { name: 'Services', path: '/services' },
    { name: 'Results', path: '/case-studies' },
    { name: 'Pricing', path: '/pricing' },
  ];

  return (
    <header className="fixed top-6 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className={`glass px-6 border border-white/10 shadow-2xl transition-all ${
          mobileMenuOpen ? 'rounded-[2.5rem]' : 'rounded-full'
        }`}>
          <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/"
            className="flex items-center space-x-3 group"
          >
            <div className="relative">
              <div className="w-10 h-10 flex items-center justify-center transform transition-transform group-hover:scale-110">
                <img src="/logo.png" alt="The Automators Logo" className="w-full h-full" />
              </div>
              <div className="absolute inset-0 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity" style={{ background: 'linear-gradient(135deg, #FF6B6B 0%, #C44569 50%, #5F27CD 100%)' }}></div>
            </div>
            <span className="text-white text-lg tracking-tight">The Automators</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 text-sm rounded-full transition-all ${
                  location.pathname === item.path
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/50'
                    : 'text-white/80 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-2 btn-3d bg-gradient-to-r from-pink-500 to-rose-500 text-white px-5 py-2 text-sm rounded-full"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2 rounded-xl hover:bg-white/5"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="lg:hidden pt-4 pb-4 space-y-2 border-t border-white/10">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block w-full text-center px-4 py-2.5 text-sm rounded-full transition-all ${
                    location.pathname === item.path
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white'
                      : 'text-white/80 hover:bg-white/5'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center px-4 py-2.5 text-sm bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full"
              >
                Contact Us
              </Link>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
