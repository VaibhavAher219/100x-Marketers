'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center py-20 pt-32 bg-gradient-to-br from-white via-gray-50 to-orange-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Main background shape */}
        <motion.div
          className="absolute left-1/2 top-1/2 w-[800px] h-[400px] -translate-x-1/2 -translate-y-1/2"
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-full h-full bg-gradient-to-r from-orange-200/30 via-pink-200/20 to-orange-300/30 rounded-full blur-3xl" />
        </motion.div>
        
        {/* Floating elements */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-orange-200/40 rounded-full blur-2xl"
          animate={{ 
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-24 h-24 bg-pink-200/40 rounded-full blur-2xl"
          animate={{ 
            y: [0, 20, 0],
            x: [0, -15, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Geometric shapes */}
        <motion.div
          className="absolute top-32 right-32 w-16 h-16 border-2 border-orange-300/50 rounded-lg"
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-32 left-32 w-12 h-12 bg-orange-400/30 rounded-full"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto px-8">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold text-black mb-6 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Become a{" "}
          <motion.span
            className="text-[#FF5A1F] relative inline-block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6, ease: "backOut" }}
          >
            Generative-AI Wizard
            <motion.div
              className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#FF5A1F] to-orange-400"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
            />
          </motion.span>
        </motion.h1>
        
        <motion.div
          className="space-y-2 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <p className="text-xl md:text-2xl text-black/80 font-mono">
            From Zero to Pro in 6 months.
          </p>
          <p className="text-xl md:text-2xl text-black/80 font-mono font-bold">
            NOT another ChatGPT course.
          </p>
        </motion.div>
        
        <motion.p 
          className="text-lg text-black/60 font-mono mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          Next Cohort starts <span className="font-semibold text-black">December</span>. Stay Tuned
        </motion.p>
        
        <motion.a
          href="#"
          className="group relative inline-block px-10 py-4 rounded-xl bg-black text-white font-bold text-xl shadow-2xl transition-all duration-300"
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 1.4, duration: 0.6, ease: "backOut" }}
          whileHover={{ 
            scale: 1.05,
            backgroundColor: "#FF5A1F",
            boxShadow: "0 25px 50px -12px rgba(255, 90, 31, 0.4)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10">Join Waitlist</span>
          
          {/* Button glow effect */}
          <motion.div
            className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#FF5A1F] to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            whileHover={{ scale: 1.1 }}
          />
          
          {/* Ripple effect */}
          <motion.div
            className="absolute inset-0 rounded-xl border-2 border-white/20"
            animate={{ scale: [1, 1.1, 1], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.a>
        
        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-black/30 rounded-full flex justify-center"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div
              className="w-1 h-3 bg-black/50 rounded-full mt-2"
              animate={{ scaleY: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 