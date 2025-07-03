'use client';
import React, { useState, useEffect } from 'react';

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
      <div className="w-full bg-gradient-to-r from-[#FF6B35] to-[#FF8A65] text-white py-3 px-4 text-center relative z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span className="text-sm md:text-base font-medium">
              🚀 <span className="font-bold">100x Marketers</span> Program Starting Soon
            </span>
          </div>
          <a
            href="#waitlist"
            className="text-white underline hover:no-underline font-semibold text-sm md:text-base transition-all duration-200"
          >
            Join Waitlist →
          </a>
        </div>
      </div>

      {/* Main Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-xl border-b border-[#E8E8E8] shadow-lg' 
            : 'bg-white/80 backdrop-blur-sm'
        }`}
        style={{ top: isScrolled ? '0' : '48px' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="font-bold text-2xl tracking-tight">
                <span className="text-[#FF6B35]">100x</span>
                <span className="text-[#0A0A0A]">Marketers</span>
              </div>
              <div className="w-2 h-2 bg-[#FF6B35] rounded-full"></div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="relative text-[#1A1A1A] hover:text-[#FF6B35] transition-colors duration-200 font-medium group"
                >
                  {item.name}
                  {item.external && (
                    <svg
                      className="w-3 h-3 ml-1 inline-block opacity-60"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  )}
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FF6B35] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </a>
              ))}
            </nav>

            {/* Auth Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <button className="text-[#1A1A1A] hover:text-[#FF6B35] transition-colors duration-200 font-medium">
                Login
              </button>
              <button className="px-6 py-2 bg-[#0A0A0A] text-white rounded-xl font-bold hover:bg-[#FF6B35] transition-all duration-300 shadow-lg hover:shadow-xl">
                Sign Up
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 mobile-menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`w-full h-0.5 bg-[#0A0A0A] transition-all duration-300 ${
                    isMenuOpen ? 'rotate-45 translate-y-1' : ''
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-[#0A0A0A] transition-all duration-300 mt-1 ${
                    isMenuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-[#0A0A0A] transition-all duration-300 mt-1 ${
                    isMenuOpen ? '-rotate-45 -translate-y-1' : ''
                  }`}
                />
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden bg-white/95 backdrop-blur-xl border-t border-[#E8E8E8] mobile-menu overflow-hidden transition-all duration-300 ${
              isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <nav className="py-6 space-y-4">
              {navItems.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="block text-[#1A1A1A] hover:text-[#FF6B35] transition-colors duration-200 font-medium py-3 px-4 rounded-xl hover:bg-[#F8F9FA] flex items-center gap-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                  {item.external && (
                    <svg
                      className="w-4 h-4 opacity-60"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  )}
                </a>
              ))}
              
              {/* Mobile Auth Buttons */}
              <div className="pt-4 space-y-3 px-4">
                <button className="w-full text-left text-[#1A1A1A] hover:text-[#FF6B35] transition-colors duration-200 font-medium py-3">
                  Login
                </button>
                <button className="w-full px-4 py-3 bg-[#0A0A0A] text-white rounded-xl font-bold hover:bg-[#FF6B35] transition-all duration-300">
                  Sign Up
                </button>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
} 