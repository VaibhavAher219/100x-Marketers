'use client';
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 100]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#F8F9FA] via-white to-[#F8F9FA]">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-[#FF6B35]/10 to-[#FF6B35]/5 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tl from-[#FF6B35]/8 to-[#FF6B35]/3 rounded-full blur-3xl"
          animate={{
            x: [0, -20, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main Content */}
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

        {/* Main Headline */}
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold text-[#0A0A0A] leading-tight mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="block mb-4">
            Transform Your
          </span>
          <span className="relative inline-block">
            <span className="text-[#FF6B35]">
              Marketing Career
            </span>
            <motion.div
              className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#FF6B35] to-[#FF6B35]/60 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            />
          </span>
          <span className="block mt-4">
            with AI
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-lg sm:text-xl lg:text-2xl text-[#1A1A1A]/80 mb-8 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Join the elite community of AI-powered marketers and master cutting-edge strategies 
          that deliver 10x growth in just 4 weeks
        </motion.p>

        {/* Program Features */}
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