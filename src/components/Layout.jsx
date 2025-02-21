import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, } from 'lucide-react';
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
          <div className="backdrop-blur-md bg-[#1A959C] rounded-lg shadow-lg mx-4 p-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="text-2xl font-bold text-[white]">
                IKE-DIAN
              </Link>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-sm font-medium transition-colors hover:text-[white] ${
                      location.pathname === link.path ? 'text-[white]' : 'text-gray-600'
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
    </div>
  );
}