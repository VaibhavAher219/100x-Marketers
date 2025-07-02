'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center py-20 pt-32 bg-gradient-to-br from-gray-50 via-orange-50 to-pink-50 overflow-hidden">
      {/* Curved Background Elements - Matching Screenshot */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Left Curved Shape */}
        <motion.div
          className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96"
          initial={{ x: -200, opacity: 0, rotate: -10 }}
          animate={{ x: 0, opacity: 1, rotate: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className="w-full h-full bg-gradient-to-br from-orange-200/40 via-pink-200/30 to-orange-300/40 rounded-[40%_60%_70%_30%/60%_30%_70%_40%] blur-sm transform rotate-12" />
        </motion.div>

        {/* Right Curved Shape */}
        <motion.div
          className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96"
          initial={{ x: 200, opacity: 0, rotate: 10 }}
          animate={{ x: 0, opacity: 1, rotate: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        >
          <div className="w-full h-full bg-gradient-to-bl from-pink-200/40 via-orange-200/30 to-pink-300/40 rounded-[60%_40%_30%_70%/40%_70%_30%_60%] blur-sm transform -rotate-12" />
        </motion.div>

        {/* Main Central Curved Background - Matching the Screenshot Pattern */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
        >
          {/* Top curved line */}
          <svg 
            className="absolute top-32 w-full h-64" 
            viewBox="0 0 1200 300" 
            preserveAspectRatio="none"
          >
            <motion.path 
              d="M0,150 Q300,50 600,120 T1200,100" 
              stroke="url(#gradient1)" 
              strokeWidth="2" 
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, ease: "easeInOut", delay: 1 }}
            />
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{stopColor: '#FED7D7', stopOpacity: 0.6}} />
                <stop offset="50%" style={{stopColor: '#FBB6CE', stopOpacity: 0.8}} />
                <stop offset="100%" style={{stopColor: '#F687B3', stopOpacity: 0.6}} />
              </linearGradient>
            </defs>
          </svg>

          {/* Bottom curved line */}
          <svg 
            className="absolute bottom-32 w-full h-64" 
            viewBox="0 0 1200 300" 
            preserveAspectRatio="none"
          >
            <motion.path 
              d="M0,150 Q300,250 600,180 T1200,200" 
              stroke="url(#gradient2)" 
              strokeWidth="2" 
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, ease: "easeInOut", delay: 1.5 }}
            />
            <defs>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{stopColor: '#FED7D7', stopOpacity: 0.6}} />
                <stop offset="50%" style={{stopColor: '#FBB6CE', stopOpacity: 0.8}} />
                <stop offset="100%" style={{stopColor: '#F687B3', stopOpacity: 0.6}} />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Floating gradient orbs */}
        <motion.div
          className="absolute top-20 left-20 w-24 h-24 bg-gradient-to-br from-pink-300/30 to-orange-300/30 rounded-full blur-xl"
          animate={{ 
            y: [0, -15, 0],
            x: [0, 10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div
          className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-bl from-orange-300/30 to-pink-300/30 rounded-full blur-xl"
          animate={{ 
            y: [0, 15, 0],
            x: [0, -10, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-br from-pink-200/40 to-orange-200/40 rounded-full blur-lg"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center max-w-5xl mx-auto px-8">
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-black mb-6 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <motion.span
            className="block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Become a
          </motion.span>
          <motion.span
            className="text-[#FF5A1F] relative inline-block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6, ease: "backOut" }}
          >
            Generative-AI Wizard
            <motion.div
              className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#FF5A1F] to-orange-400"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
            />
          </motion.span>
        </motion.h1>
        
        <motion.div
          className="space-y-2 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <motion.p 
            className="text-xl md:text-2xl text-black/80 font-mono"
            whileInView={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            From Zero to Pro in 6 months.
          </motion.p>
          <motion.p 
            className="text-xl md:text-2xl text-black/80 font-mono font-bold"
            whileInView={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          >
            NOT another ChatGPT course.
          </motion.p>
        </motion.div>
        
        <motion.p 
          className="text-lg text-black/60 font-mono mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          Next Cohort starts <span className="font-semibold text-black">December</span>. Stay Tuned
        </motion.p>
        
        <motion.button
          className="group relative inline-block px-12 py-4 rounded-xl bg-black text-white font-bold text-xl shadow-2xl transition-all duration-300 overflow-hidden"
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 1.8, duration: 0.6, ease: "backOut" }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 25px 50px -12px rgba(255, 90, 31, 0.4)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10">Join Waitlist</span>
          
          {/* Button background animation */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#FF5A1F] to-orange-400"
            initial={{ x: "-100%" }}
            whileHover={{ x: "0%" }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Ripple effect */}
          <motion.div
            className="absolute inset-0 rounded-xl border-2 border-white/20"
            animate={{ scale: [1, 1.1, 1], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.button>
        
        {/* Floating elements around the button */}
        <motion.div
          className="absolute -top-4 -right-4 w-3 h-3 bg-orange-400 rounded-full"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div
          className="absolute -bottom-2 -left-2 w-2 h-2 bg-pink-400 rounded-full"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.6 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-black/30 rounded-full flex justify-center cursor-pointer hover:border-[#FF5A1F] transition-colors"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.1 }}
        >
          <motion.div
            className="w-1 h-3 bg-black/50 rounded-full mt-2"
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
      );
} 