'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Navigation items as specified
  const navItems = [
    { name: 'Overview', href: '#overview' },
    { name: 'Jobs', href: 'https://meshajobs.com', external: true },
    { name: 'Curriculum', href: '#curriculum' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Blog', href: '#blog' },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen && !(event.target as Element).closest('.mobile-menu')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <>
      {/* Announcement Banner */}
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="w-full bg-gradient-to-r from-[#FF6B35] to-[#FF8A65] text-white py-3 px-4 text-center relative z-50"
      >
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-4">
          <motion.div
            className="flex items-center gap-2"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <span className="text-sm md:text-base font-medium">
              🚀 <span className="font-bold">100x Marketers</span> Program Starting Soon
            </span>
          </motion.div>
          <motion.a
            href="#waitlist"
            className="text-white underline hover:no-underline font-semibold text-sm md:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join Waitlist →
          </motion.a>
        </div>
      </motion.div>

      {/* Main Header */}
      <motion.header 
        className={`fixed top-12 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-xl border-b border-[#E8E8E8] shadow-lg' 
            : 'bg-white/80 backdrop-blur-sm'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="font-bold text-2xl tracking-tight">
                <span className="text-[#FF6B35]">100x</span>
                <span className="text-[#0A0A0A]">Marketers</span>
              </div>
              <motion.div
                className="w-2 h-2 bg-[#FF6B35] rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="relative text-[#1A1A1A] hover:text-[#FF6B35] transition-colors duration-200 font-medium group"
                  whileHover={{ y: -1 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.name}
                  {item.external && (
                    <motion.svg
                      className="w-3 h-3 ml-1 inline-block opacity-60"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      whileHover={{ scale: 1.1 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </motion.svg>
                  )}
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FF6B35] origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </nav>

            {/* Auth Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <motion.button
                className="text-[#1A1A1A] hover:text-[#FF6B35] transition-colors duration-200 font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Login
              </motion.button>
              <motion.button
                className="px-6 py-2 bg-[#0A0A0A] text-white rounded-xl font-bold hover:bg-[#FF6B35] transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Sign Up
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-2 mobile-menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle mobile menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <motion.span
                  className={`w-full h-0.5 bg-[#0A0A0A] transition-all duration-300 ${
                    isMenuOpen ? 'rotate-45 translate-y-1' : ''
                  }`}
                />
                <motion.span
                  className={`w-full h-0.5 bg-[#0A0A0A] transition-all duration-300 mt-1 ${
                    isMenuOpen ? 'opacity-0' : ''
                  }`}
                />
                <motion.span
                  className={`w-full h-0.5 bg-[#0A0A0A] transition-all duration-300 mt-1 ${
                    isMenuOpen ? '-rotate-45 -translate-y-1' : ''
                  }`}
                />
              </div>
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-[#E8E8E8] mobile-menu"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <nav className="py-6 space-y-4">
                  {navItems.map((item, i) => (
                    <motion.a
                      key={i}
                      href={item.href}
                      {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="block text-[#1A1A1A] hover:text-[#FF6B35] transition-colors duration-200 font-medium py-3 px-4 rounded-xl hover:bg-[#F8F9FA] flex items-center gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.3 }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                      {item.external && (
                        <svg className="w-4 h-4 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      )}
                    </motion.a>
                  ))}
                  
                  {/* Mobile Auth Buttons */}
                  <div className="px-4 pt-4 space-y-3 border-t border-[#E8E8E8]">
                    <motion.button
                      className="w-full text-left text-[#1A1A1A] hover:text-[#FF6B35] transition-colors duration-200 font-medium py-3 px-4 rounded-xl hover:bg-[#F8F9FA]"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: navItems.length * 0.1, duration: 0.3 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Login
                    </motion.button>
                    <motion.button
                      className="w-full px-6 py-3 bg-[#0A0A0A] text-white rounded-xl font-bold hover:bg-[#FF6B35] transition-all duration-300 shadow-lg"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: (navItems.length + 1) * 0.1, duration: 0.3 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Sign Up
                    </motion.button>
                  </div>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>
    </>
  );
} 