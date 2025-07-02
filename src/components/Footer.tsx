'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-8">
        {/* Main CTA Section */}
        <motion.div
          className="bg-gradient-to-r from-[#FF5A1F] to-orange-400 rounded-3xl p-12 mb-16 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="none">
              <path d="M0,100 Q300,50 600,100 T1200,100 L1200,400 L0,400 Z" fill="url(#footerGradient)" />
              <defs>
                <linearGradient id="footerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{stopColor: '#ffffff', stopOpacity: 0.1}} />
                  <stop offset="100%" style={{stopColor: '#ffffff', stopOpacity: 0.05}} />
                </linearGradient>
              </defs>
            </svg>
          </div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-4 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Be a part of a new era in programming.
          </motion.h2>
          <motion.h3 
            className="text-3xl md:text-4xl font-bold text-white mb-8 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Be a 100x Engineer!
          </motion.h3>
          
          <motion.button
            className="px-10 py-4 bg-black text-white rounded-xl font-bold text-lg hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl relative z-10"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join Waitlist
          </motion.button>
        </motion.div>

        {/* Company Info and Contact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Logo and Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="font-bold text-3xl tracking-tight mb-4">
              <span className="text-black">100x</span>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              CODIBLE VENTURES LLP © 2023
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <a href="#" className="text-gray-600 hover:text-[#FF5A1F] transition-colors">Terms & Conditions</a>
              <a href="#" className="text-gray-600 hover:text-[#FF5A1F] transition-colors">Refund Policy</a>
              <a href="#" className="text-gray-600 hover:text-[#FF5A1F] transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-[#FF5A1F] transition-colors">Contact us</a>
            </div>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-[#FF5A1F] rounded-full flex items-center justify-center">
                <span className="text-white text-sm">📞</span>
              </div>
              <span className="font-mono text-gray-800">9880036985</span>
            </div>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-[#FF5A1F] rounded-full flex items-center justify-center">
                <span className="text-white text-sm">📧</span>
              </div>
              <div>
                <p className="text-gray-600 text-sm">For Program Related Enquiries</p>
                <p className="font-mono text-gray-800">info@100xengineers.com</p>
              </div>
            </div>
          </motion.div>
          
          {/* Business Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#FF5A1F] rounded-full flex items-center justify-center">
                <span className="text-white text-sm">💼</span>
              </div>
              <div>
                <p className="text-gray-600 text-sm">For Business Related Enquiries</p>
                <p className="font-mono text-gray-800">hello@100xengineers.com</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
} 