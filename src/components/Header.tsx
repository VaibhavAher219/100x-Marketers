'use client';
import React, { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [bannerHeight, setBannerHeight] = useState(48); // Default banner height

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

    const banner = document.getElementById('announcement-banner');
    if (banner) {
      setBannerHeight(banner.clientHeight);
    }

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
      <div 
        id="announcement-banner"
        className="w-full bg-gradient-to-r from-[#FF6B35] to-[#FF8A65] text-white py-3 px-4 text-center z-50"
      >
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-4">
          <span className="text-sm md:text-base font-medium">
            🚀 <span className="font-bold">100x Marketers</span> Program Starting Soon
          </span>
          <a
            href="#waitlist"
            className="text-white underline hover:no-underline font-semibold text-sm md:text-base"
          >
            Join Waitlist →
          </a>
        </div>
      </div>

      {/* Main Header */}
      <header 
        className={`fixed left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'top-0 bg-white/95 backdrop-blur-xl border-b border-[#E8E8E8] shadow-lg' 
            : 'bg-transparent'
        }`}
        style={{ top: isScrolled ? '0' : `${bannerHeight}px` }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              <span className="font-bold text-2xl tracking-tight text-[#FF6B35]">100x</span>
              <span className="font-bold text-2xl tracking-tight text-[#0A0A0A]">Marketers</span>
              <div className="w-2.5 h-2.5 bg-[#FF6B35] rounded-full"></div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target={item.external ? '_blank' : '_self'}
                  rel={item.external ? 'noopener noreferrer' : ''}
                  className="relative text-[#1A1A1A] hover:text-[#FF6B35] transition-colors duration-200 font-medium group text-base"
                >
                  {item.name}
                  {item.external && (
                    <svg
                      className="w-3 h-3 ml-1 inline-block opacity-60"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF6B35] transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* Auth Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <a href="#" className="text-[#1A1A1A] hover:text-[#FF6B35] transition-colors duration-200 font-medium px-4 py-2">
                Login
              </a>
              <a href="#" className="px-6 py-3 bg-[#0A0A0A] text-white rounded-xl font-bold hover:bg-[#FF6B35] transition-all duration-300 shadow-lg hover:shadow-xl text-base">
                Sign Up
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <div className="w-6 h-1 bg-[#0A0A0A] rounded-full"></div>
              <div className="w-6 h-1 bg-[#0A0A0A] rounded-full mt-1.5"></div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl shadow-lg transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <nav className="flex flex-col gap-4 p-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target={item.external ? '_blank' : '_self'}
                rel={item.external ? 'noopener noreferrer' : ''}
                className="text-[#1A1A1A] font-medium text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="border-t border-gray-200 mt-4 pt-4 flex flex-col gap-4">
              <a href="#" className="text-center text-[#1A1A1A] font-medium text-lg">
                Login
              </a>
              <a href="#" className="text-center px-6 py-3 bg-[#0A0A0A] text-white rounded-xl font-bold text-lg">
                Sign Up
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
} 