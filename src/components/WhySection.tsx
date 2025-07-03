'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function WhySection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#F8F9FA] to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A0A0A] mb-4 leading-tight">
            Why become a{' '}
            <span className="text-[#FF6B35] relative">
              Gen-AI Marketing
              <motion.div
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#FF6B35] to-[#FF6B35]/60 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              />
            </span>
            <br />
            <span className="text-[#FF6B35]">Wizard?</span>
          </h2>
          <p className="text-lg sm:text-xl text-[#1A1A1A]/70 max-w-3xl mx-auto leading-relaxed">
            Join the elite community of AI-powered marketers who are reshaping the industry
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          
          {/* Elite Marketing AI Community */}
          <motion.div 
            className="group relative bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#E8E8E8] overflow-hidden"
            variants={itemVariants}
            whileHover={{ y: -8 }}
          >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Profile Pictures Grid - Better Aligned */}
            <div className="relative mb-8 h-48 sm:h-56 flex items-center justify-center">
              <div className="relative w-full h-full">
                
                {/* Center Large Profile */}
                <motion.div 
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gradient-to-br from-[#FF6B35] to-[#FF8A65] border-4 border-white shadow-xl flex items-center justify-center z-10"
                  whileHover={{ scale: 1.1, zIndex: 20 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="text-white font-bold text-lg">AI</span>
                </motion.div>
                
                {/* Surrounding Profiles */}
                <motion.div 
                  className="absolute top-8 left-8 w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 border-3 border-white shadow-lg flex items-center justify-center"
                  whileHover={{ scale: 1.1, zIndex: 20 }}
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <span className="text-white font-bold text-sm">JS</span>
                </motion.div>
                
                <motion.div 
                  className="absolute top-6 right-12 w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 border-3 border-white shadow-lg flex items-center justify-center"
                  whileHover={{ scale: 1.1, zIndex: 20 }}
                  animate={{ 
                    y: [0, 8, 0],
                    rotate: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                >
                  <span className="text-white font-bold">MK</span>
                </motion.div>
                
                <motion.div 
                  className="absolute bottom-12 left-12 w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-600 border-3 border-white shadow-lg flex items-center justify-center"
                  whileHover={{ scale: 1.1, zIndex: 20 }}
                  animate={{ 
                    y: [0, -8, 0],
                    rotate: [0, 3, 0]
                  }}
                  transition={{ 
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                >
                  <span className="text-white font-bold text-xs">LP</span>
                </motion.div>
                
                <motion.div 
                  className="absolute bottom-8 right-8 w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 border-3 border-white shadow-lg flex items-center justify-center"
                  whileHover={{ scale: 1.1, zIndex: 20 }}
                  animate={{ 
                    y: [0, 12, 0],
                    rotate: [0, -3, 0]
                  }}
                  transition={{ 
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                >
                  <span className="text-white font-bold">RH</span>
                </motion.div>
                
                <motion.div 
                  className="absolute top-20 left-1/2 transform -translate-x-1/2 w-14 h-14 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 border-3 border-white shadow-lg flex items-center justify-center"
                  whileHover={{ scale: 1.1, zIndex: 20 }}
                  animate={{ 
                    y: [0, -6, 0],
                    rotate: [0, 4, 0]
                  }}
                  transition={{ 
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5
                  }}
                >
                  <span className="text-white font-bold text-sm">AS</span>
                </motion.div>
                
                {/* Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
                  <motion.path
                    d="M 50% 50% L 20% 20%"
                    stroke="#FF6B35"
                    strokeWidth="2"
                    strokeOpacity="0.3"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />
                  <motion.path
                    d="M 50% 50% L 80% 20%"
                    stroke="#FF6B35"
                    strokeWidth="2"
                    strokeOpacity="0.3"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
                  />
                </svg>
              </div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-[#FF6B35]">
                Elite Marketing AI Community
              </h3>
              <p className="text-[#1A1A1A]/70 leading-relaxed text-base sm:text-lg">
                Join the exclusive network of AI Marketing Wizards who are pioneering the future of marketing. 
                Get mentorship, collaborate on projects, and build lifelong connections.
              </p>
              
              {/* Stats */}
              <div className="flex items-center gap-6 mt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#FF6B35]">500+</div>
                  <div className="text-sm text-[#1A1A1A]/60">Members</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#FF6B35]">24/7</div>
                  <div className="text-sm text-[#1A1A1A]/60">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#FF6B35]">∞</div>
                  <div className="text-sm text-[#1A1A1A]/60">Access</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Learn from Marketing AI Experts */}
          <motion.div 
            className="group relative bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#E8E8E8] overflow-hidden"
            variants={itemVariants}
            whileHover={{ y: -8 }}
          >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Expert Profiles */}
            <div className="relative mb-8 h-48 sm:h-56 flex items-center justify-center">
              <div className="relative">
                <motion.div
                  className="flex items-center justify-center gap-4"
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Expert 1 */}
                  <motion.div 
                    className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#0A0A0A] to-[#1A1A1A] border-4 border-white shadow-xl flex items-center justify-center relative overflow-hidden"
                    whileHover={{ scale: 1.1, rotate: 3 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-white font-bold text-lg">AI</span>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                  
                  {/* Expert 2 */}
                  <motion.div 
                    className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#FF6B35] to-[#FF8A65] border-4 border-white shadow-xl flex items-center justify-center relative overflow-hidden"
                    whileHover={{ scale: 1.1, rotate: -3 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-white font-bold text-lg">EX</span>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                </motion.div>
                
                {/* Floating badges */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-[#FF6B35] text-white text-xs px-3 py-1 rounded-full font-bold"
                  animate={{ 
                    y: [0, -8, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  Expert
                </motion.div>
                
                <motion.div
                  className="absolute -bottom-4 -left-4 bg-[#0A0A0A] text-white text-xs px-3 py-1 rounded-full font-bold"
                  animate={{ 
                    y: [0, 8, 0],
                    rotate: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5
                  }}
                >
                  Mentor
                </motion.div>
              </div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-[#FF6B35]">
                Learn from Marketing AI Experts
              </h3>
              <p className="text-[#1A1A1A]/70 leading-relaxed text-base sm:text-lg">
                Your mentors are industry pioneers with decades of experience building AI marketing systems 
                that generated millions in revenue. Learn from the best in the field.
              </p>
              
              {/* Expertise Areas */}
              <div className="flex flex-wrap gap-3 mt-6">
                {['AI Strategy', 'Automation', 'Analytics', 'Growth'].map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 bg-[#F8F9FA] text-[#1A1A1A] rounded-full text-sm font-medium border border-[#E8E8E8]"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    whileHover={{ scale: 1.05, borderColor: '#FF6B35' }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 