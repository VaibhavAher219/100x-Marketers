'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function WhySection() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <motion.h2 
          className="text-4xl md:text-6xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Why become a <span className="text-[#FF5A1F]">Gen-AI Marketing Wizard?</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Elite Developer Community */}
          <motion.div 
            className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ y: -5 }}
          >
            {/* Profile Pictures Grid */}
            <div className="relative mb-6 h-48">
              {/* Scattered profile pictures */}
              <motion.div 
                className="absolute top-4 left-8 w-16 h-16 rounded-full bg-gray-200 border-4 border-white shadow-md overflow-hidden"
                whileHover={{ scale: 1.1, zIndex: 10 }}
              >
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold">
                  JD
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute top-12 right-12 w-14 h-14 rounded-full bg-gray-200 border-4 border-white shadow-md overflow-hidden"
                whileHover={{ scale: 1.1, zIndex: 10 }}
              >
                <div className="w-full h-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white font-bold text-sm">
                  AS
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute bottom-8 left-12 w-12 h-12 rounded-full bg-gray-200 border-4 border-white shadow-md overflow-hidden"
                whileHover={{ scale: 1.1, zIndex: 10 }}
              >
                <div className="w-full h-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white font-bold text-xs">
                  MK
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute top-8 left-1/2 w-18 h-18 rounded-full bg-gray-200 border-4 border-white shadow-md overflow-hidden"
                whileHover={{ scale: 1.1, zIndex: 10 }}
              >
                <div className="w-full h-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold">
                  RH
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute bottom-4 right-8 w-14 h-14 rounded-full bg-gray-200 border-4 border-white shadow-md overflow-hidden"
                whileHover={{ scale: 1.1, zIndex: 10 }}
              >
                <div className="w-full h-full bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center text-white font-bold text-sm">
                  SK
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute bottom-12 left-1/3 w-16 h-16 rounded-full bg-gray-200 border-4 border-white shadow-md overflow-hidden"
                whileHover={{ scale: 1.1, zIndex: 10 }}
              >
                <div className="w-full h-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white font-bold">
                  LP
                </div>
              </motion.div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 text-[#FF5A1F]">Elite Marketing AI Community</h3>
            <p className="text-gray-700 leading-relaxed font-mono text-sm">
              Join the community of Marketing AI Wizards - the ones at the forefront of a new era in marketing. Network, seek help, get mentorship and have a guide for life as you navigate AI-powered marketing.
            </p>
          </motion.div>

          {/* Learn from the Best Mentors */}
          <motion.div 
            className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ y: -5 }}
          >
            {/* Mentor Images */}
            <div className="relative mb-6 h-48 flex items-center justify-center">
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.05 }}
              >
                {/* Two overlapping mentor photos */}
                <div className="flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-gray-300 border-4 border-white shadow-lg overflow-hidden -mr-4 z-10">
                    <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center text-white font-bold">
                      M1
                    </div>
                  </div>
                  <div className="w-24 h-24 rounded-full bg-gray-300 border-4 border-white shadow-lg overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-gray-500 to-gray-700 flex items-center justify-center text-white font-bold">
                      M2
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 text-[#FF5A1F]">Learn from Marketing AI Experts</h3>
            <p className="text-gray-700 leading-relaxed font-mono text-sm">
              Your mentors in this course are the ones who have been there, done that! With decades of collective experience & having built real-world AI marketing systems that generated millions in revenue.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 