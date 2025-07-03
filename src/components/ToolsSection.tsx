'use client';
import React from 'react';
import { motion } from 'framer-motion';

const tools = [
  { name: 'ChatGPT', icon: '💬', color: 'from-green-500 to-emerald-600', category: 'AI Chat' },
  { name: 'Jasper', icon: '✍️', color: 'from-purple-500 to-purple-600', category: 'Content' },
  { name: 'Midjourney', icon: '🎨', color: 'from-blue-500 to-blue-600', category: 'Images' },
  { name: 'Runway', icon: '🎬', color: 'from-pink-500 to-pink-600', category: 'Video' },
  { name: 'HeyGen', icon: '👤', color: 'from-orange-500 to-orange-600', category: 'Avatar' },
  { name: 'ElevenLabs', icon: '🎵', color: 'from-indigo-500 to-indigo-600', category: 'Voice' },
  { name: 'Synthesia', icon: '📹', color: 'from-red-500 to-red-600', category: 'Video AI' },
  { name: 'AdCreative.ai', icon: '📊', color: 'from-teal-500 to-teal-600', category: 'Ads' },
  { name: 'Pika', icon: '⚡', color: 'from-yellow-500 to-yellow-600', category: 'Quick AI' },
  { name: 'Mesha', icon: '🚀', color: 'from-[#FF6B35] to-orange-600', category: 'Platform' }
];

export default function ToolsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6
      }
    }
  };

  const toolVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-32 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-32 right-1/4 w-80 h-80 bg-gradient-to-tl from-[#FF6B35]/10 to-pink-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F8F9FA] border border-[#E8E8E8] text-[#1A1A1A]/60 text-sm font-medium mb-6 shadow-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="w-2 h-2 bg-[#FF6B35] rounded-full animate-pulse"></span>
            AI MARKETING TOOLS
          </motion.span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A0A0A] mb-6 leading-tight">
            What will you{' '}
            <span className="text-[#FF6B35] relative">
              master?
              <motion.div
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#FF6B35] to-[#FF6B35]/60 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-[#1A1A1A]/70 max-w-3xl mx-auto leading-relaxed">
            Master the most powerful AI tools transforming modern marketing
          </p>
        </motion.div>

        {/* Tools Grid */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {tools.map((tool, i) => (
            <motion.div
              key={i}
              className="group bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#E8E8E8] flex flex-col items-center text-center"
              variants={toolVariants}
              whileHover={{ 
                y: -8, 
                scale: 1.05,
                boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.15)"
              }}
            >
              {/* Icon */}
              <motion.div
                className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center mb-3 sm:mb-4 shadow-lg relative overflow-hidden`}
                whileHover={{ 
                  rotate: [0, -10, 10, 0],
                  scale: 1.1 
                }}
                transition={{ 
                  duration: 0.6,
                  type: "spring",
                  stiffness: 300 
                }}
              >
                <span className="text-white text-lg sm:text-2xl font-bold relative z-10">
                  {tool.icon}
                </span>
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
              
              {/* Tool Name */}
              <motion.h3 
                className="font-bold text-sm sm:text-base text-[#0A0A0A] mb-1 sm:mb-2 group-hover:text-[#FF6B35] transition-colors duration-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.05 + 0.3, duration: 0.5 }}
              >
                {tool.name}
              </motion.h3>
              
              {/* Category */}
              <motion.span
                className="text-xs text-[#1A1A1A]/50 font-medium"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.05 + 0.4, duration: 0.5 }}
              >
                {tool.category}
              </motion.span>
              
              {/* Hover effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-[#FF6B35]/5 to-transparent rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
            </motion.div>
          ))}
        </motion.div>
        
        {/* Bottom Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.div
            className="bg-gradient-to-br from-white to-[#F8F9FA] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg border border-[#E8E8E8] max-w-4xl mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-[#0A0A0A]">
              From Content Creation to{' '}
              <span className="text-[#FF6B35]">Revenue Generation</span>
            </h3>
            <p className="text-[#1A1A1A]/70 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto">
              Learn to use AI tools for copywriting, image generation, video creation, 
              voice synthesis, and complete marketing automation workflows.
            </p>
            
            {/* Feature highlights */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-8">
              {[
                { icon: '✍️', text: 'AI Writing' },
                { icon: '🎨', text: 'Visual Content' },
                { icon: '🎬', text: 'Video Creation' },
                { icon: '🚀', text: 'Automation' }
              ].map((feature, index) => (
                <motion.div
                  key={feature.text}
                  className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-[#E8E8E8] shadow-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.05, borderColor: '#FF6B35' }}
                >
                  <span className="text-lg">{feature.icon}</span>
                  <span className="text-sm font-medium text-[#1A1A1A]">{feature.text}</span>
                </motion.div>
              ))}
            </div>
            
            <motion.button
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#FF6B35] text-white rounded-2xl font-semibold hover:bg-[#FF6B35]/90 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Start Learning</span>
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
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 