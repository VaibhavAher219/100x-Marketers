'use client';
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const [currentHeadline, setCurrentHeadline] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 100]);

  // 5 Headline Variations focusing on benefits to the user
  const headlines = [
    {
      main: "Become an AI-Powered",
      accent: "Performance Marketer",
      description: "Master the future of marketing with AI-driven strategies that deliver 10x growth"
    },
    {
      main: "Unlock Your 100x",
      accent: "Marketing Potential",
      description: "Transform from beginner to AI marketing expert in just 4 weeks"
    },
    {
      main: "Master AI & Dominate",
      accent: "Your Market",
      description: "Learn cutting-edge AI tools and strategies used by top marketers worldwide"
    },
    {
      main: "Transform Your Marketing",
      accent: "Career with AI",
      description: "Join the elite community of AI-powered marketers driving unprecedented results"
    },
    {
      main: "Scale Your Impact with",
      accent: "AI Marketing",
      description: "Build automated marketing systems that work while you sleep"
    }
  ];

  // 5 Subheadline Variations focusing on results
  const subheadlines = [
    "Learn the skills to drive 10x growth with AI-powered automation",
    "Get certified and build a career in AI marketing that pays 6-figures",
    "Join a community of elite AI marketers and scale your impact",
    "Master the tools used by Fortune 500 companies to dominate markets",
    "Build automated marketing systems that generate leads 24/7"
  ];

  // Cycle through headlines every 4 seconds
  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentHeadline((prev) => (prev + 1) % headlines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#F8F9FA] via-white to-[#F8F9FA]">
      {/* Sophisticated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-[#FF6B35]/20 to-[#FF6B35]/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tl from-[#FF6B35]/15 to-[#FF6B35]/5 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 20, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating Elements */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-3 h-3 bg-[#FF6B35] rounded-full opacity-60"
          animate={{
            y: [0, -20, 0],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-[#FF6B35] rounded-full opacity-40"
          animate={{
            y: [0, 15, 0],
            x: [0, 10, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Geometric Shapes */}
        <motion.div
          className="absolute top-1/2 left-10 w-16 h-16 border-2 border-[#FF6B35]/20 rotate-45"
          animate={{
            rotate: [45, 405, 45],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Parallax Content Container */}
      <motion.div
        style={{ y }}
        className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center"
      >
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white/80 backdrop-blur-sm border border-[#E8E8E8] rounded-full shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="w-2 h-2 bg-[#FF6B35] rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-[#0A0A0A]">
            Next Cohort Starting Soon
          </span>
        </motion.div>

        {/* Dynamic Headlines */}
        <div className="mb-6 h-32 sm:h-40 lg:h-48 flex items-center justify-center">
          <motion.h1
            key={currentHeadline}
            className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold text-[#0A0A0A] leading-tight"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 1.1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="block mb-2">
              {headlines[currentHeadline].main}
            </span>
            <span className="relative inline-block">
              <span className="text-[#FF6B35]">
                {headlines[currentHeadline].accent}
              </span>
              <motion.div
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#FF6B35] to-[#FF6B35]/60 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              />
            </span>
          </motion.h1>
        </div>

        {/* Dynamic Subheadlines */}
        <motion.p
          key={`sub-${currentHeadline}`}
          className="text-lg sm:text-xl lg:text-2xl text-[#1A1A1A]/80 mb-8 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {headlines[currentHeadline].description}
        </motion.p>

        {/* Additional Context */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-12 text-[#1A1A1A]/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#FF6B35] rounded-full"></div>
            <span className="text-sm font-medium">4-Week Intensive Program</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#FF6B35] rounded-full"></div>
            <span className="text-sm font-medium">Industry-Certified</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#FF6B35] rounded-full"></div>
            <span className="text-sm font-medium">100% Practical</span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {/* Primary CTA */}
          <motion.button
            className="group relative px-8 py-4 bg-[#0A0A0A] text-white rounded-2xl font-bold text-lg shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-3xl"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 25px 50px -12px rgba(255, 107, 53, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            aria-label="Join the waitlist for 100x Marketers program"
          >
            <span className="relative z-10 flex items-center gap-2">
              Join Waitlist
              <motion.svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </span>
            
            {/* Hover Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#FF6B35] to-[#FF6B35]/90"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          {/* Secondary CTA */}
          <motion.button
            className="group px-8 py-4 border-2 border-[#E8E8E8] text-[#0A0A0A] rounded-2xl font-bold text-lg hover:border-[#FF6B35] hover:text-[#FF6B35] transition-all duration-300 bg-white/80 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Learn more about the curriculum"
          >
            <span className="flex items-center gap-2">
              View Curriculum
              <motion.svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                whileHover={{ rotate: 90 }}
                transition={{ duration: 0.3 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </motion.svg>
            </span>
          </motion.button>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-[#0A0A0A] mb-1">500+</div>
            <div className="text-sm text-[#1A1A1A]/60">Students Trained</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#0A0A0A] mb-1">95%</div>
            <div className="text-sm text-[#1A1A1A]/60">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#0A0A0A] mb-1">50+</div>
            <div className="text-sm text-[#1A1A1A]/60">AI Tools Mastered</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-[#FF6B35]/40 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="w-1 h-3 bg-[#FF6B35] rounded-full mt-2"
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
} 