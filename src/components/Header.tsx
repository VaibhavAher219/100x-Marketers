'use client';
import React, { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-xl border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">100x</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-white font-bold text-xl">100x Marketers</h1>
                <p className="text-white/60 text-xs">AI Marketing Mastery</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#curriculum" className="text-white/80 hover:text-white transition-colors duration-200 font-medium">
              Curriculum
            </a>
            <a href="#mentors" className="text-white/80 hover:text-white transition-colors duration-200 font-medium">
              Mentors
            </a>
            <a href="#projects" className="text-white/80 hover:text-white transition-colors duration-200 font-medium">
              Projects
            </a>
            <a href="#pricing" className="text-white/80 hover:text-white transition-colors duration-200 font-medium">
              Pricing
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-6 py-2 text-white/80 hover:text-white transition-colors duration-200 font-medium">
              Login
            </button>
            <button className="px-6 py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105">
              Join Waitlist
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10">
            <div className="px-4 py-6 space-y-4">
              <a href="#curriculum" className="block text-white/80 hover:text-white transition-colors duration-200 font-medium py-2">
                Curriculum
              </a>
              <a href="#mentors" className="block text-white/80 hover:text-white transition-colors duration-200 font-medium py-2">
                Mentors
              </a>
              <a href="#projects" className="block text-white/80 hover:text-white transition-colors duration-200 font-medium py-2">
                Projects
              </a>
              <a href="#pricing" className="block text-white/80 hover:text-white transition-colors duration-200 font-medium py-2">
                Pricing
              </a>
              <div className="pt-4 space-y-3">
                <button className="block w-full text-left text-white/80 hover:text-white transition-colors duration-200 font-medium py-2">
                  Login
                </button>
                <button className="w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold rounded-xl">
                  Join Waitlist
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 