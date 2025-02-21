import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/innovator-profile', label: 'Innovator Profile' },
  { path: '/products', label: 'Products' },
  { path: '/contact', label: 'Contact' },
];

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="fixed w-full z-50 mt-4">
        <nav className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="backdrop-blur-md bg-white/70 rounded-lg shadow-lg mx-4 p-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="text-2xl font-bold text-[#1A959C]">
                InnovateLab
              </Link>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-sm font-medium transition-colors hover:text-[#1A959C] ${
                      location.pathname === link.path ? 'text-[#1A959C]' : 'text-gray-600'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 rounded-md text-gray-600 hover:text-[#1A959C]"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden absolute w-full px-4 pt-2"
            >
              <div className="backdrop-blur-md bg-white/70 rounded-lg shadow-lg p-4 mt-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block py-2 text-sm font-medium transition-colors hover:text-[#1A959C] ${
                      location.pathname === link.path ? 'text-[#1A959C]' : 'text-gray-600'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600">
              © {year} InnovateLab. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-[#1A959C]" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#1A959C]" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#1A959C]" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#1A959C]" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}