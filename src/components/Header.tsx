'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    'Overview',
    'Mentors', 
    'Curriculum',
    'FAQs',
    'About Us',
    'Careers',
    'Contact Us'
  ];

  return (
    <>
      {/* Notification Banner */}
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="w-full bg-[#FF5A1F] text-white py-3 px-4 text-center font-medium relative z-50"
      >
        <span className="text-sm md:text-base">
                      The 100xEngineers&apos; <span className="font-bold">GEN AI BUILDATHON</span>
        </span>
        <motion.a
          href="#"
          className="ml-4 text-white underline hover:no-underline font-semibold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Register Now →
        </motion.a>
      </motion.div>

      {/* Main Header */}
      <motion.header 
        className="fixed top-12 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div 
              className="font-bold text-2xl tracking-tight"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-[#FF5A1F]">100x</span>
              <span className="text-black">Engineers</span>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, i) => (
                <motion.a
                  key={i}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-gray-700 hover:text-[#FF5A1F] transition-colors duration-200 font-medium"
                  whileHover={{ y: -1 }}
                  transition={{ duration: 0.2 }}
                >
                  {item}
                </motion.a>
              ))}
            </nav>

            {/* CTA Button */}
            <motion.button
              className="hidden lg:block px-6 py-2 bg-black text-white rounded-xl font-bold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Waitlist
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <motion.span
                  className={`w-full h-0.5 bg-black transition-all duration-300 ${
                    isMenuOpen ? 'rotate-45 translate-y-1' : ''
                  }`}
                />
                <motion.span
                  className={`w-full h-0.5 bg-black transition-all duration-300 mt-1 ${
                    isMenuOpen ? 'opacity-0' : ''
                  }`}
                />
                <motion.span
                  className={`w-full h-0.5 bg-black transition-all duration-300 mt-1 ${
                    isMenuOpen ? '-rotate-45 -translate-y-1' : ''
                  }`}
                />
              </div>
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <motion.div
            className={`lg:hidden overflow-hidden ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}
            initial={false}
            animate={{ height: isMenuOpen ? 'auto' : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <nav className="py-4 space-y-4">
              {navItems.map((item, i) => (
                <motion.a
                  key={i}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block text-gray-700 hover:text-[#FF5A1F] transition-colors duration-200 font-medium py-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : -20 }}
                  transition={{ delay: i * 0.1, duration: 0.3 }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </motion.a>
              ))}
              <motion.button
                className="w-full mt-4 px-6 py-3 bg-black text-white rounded-xl font-bold hover:bg-gray-800 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : 20 }}
                transition={{ delay: navItems.length * 0.1, duration: 0.3 }}
                whileTap={{ scale: 0.95 }}
              >
                Join Waitlist
              </motion.button>
            </nav>
          </motion.div>
        </div>
      </motion.header>
    </>
  );
} 