'use client';
import React from 'react';
import { motion } from 'framer-motion';

const tools = [
  { name: 'ChatGPT', icon: '💬', category: 'AI Chat' },
  { name: 'Jasper', icon: '✍️', category: 'Content' },
  { name: 'Midjourney', icon: '🎨', category: 'Images' },
  { name: 'Runway', icon: '🎬', category: 'Video' },
  { name: 'HeyGen', icon: '👤', category: 'Avatar' },
  { name: 'ElevenLabs', icon: '🎵', category: 'Voice' },
  { name: 'Synthesia', icon: '📹', category: 'Video AI' },
  { name: 'AdCreative.ai', icon: '📊', category: 'Ads' },
  { name: 'Pika', icon: '⚡', category: 'Quick AI' },
  { name: 'Mesha', icon: '🚀', category: 'Platform' }
];

export default function ToolsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      }
    }
  };

  const toolVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
      }
    }
  };

  return (
    <section className="relative w-full py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-[#F8F9FA] to-white overflow-hidden">
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#FF6B35]/10 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#FF6B35]/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}/>
      </div>

      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="inline-block px-5 py-2 rounded-full bg-[#FF6B35]/10 text-[#FF6B35] text-sm font-bold tracking-wide mb-6">
            AI MARKETING STACK
          </span>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0A0A0A] mb-6 leading-tight">
            What will you <span className="text-[#FF6B35]">master?</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-[#1A1A1A]/70 max-w-3xl mx-auto leading-relaxed">
            Master the most powerful AI tools transforming modern marketing from day one.
          </p>
        </motion.div>

        {/* Tools Grid */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 lg:gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              className="group bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#E8E8E8] flex flex-col items-center text-center"
              variants={toolVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.05,
                boxShadow: "0 25px 50px -12px rgba(255, 107, 53, 0.2)"
              }}
            >
              <div
                className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gray-800 to-black flex items-center justify-center mb-5 shadow-xl group-hover:bg-gradient-to-br group-hover:from-[#FF6B35] group-hover:to-orange-500 transition-all duration-300"
              >
                <span className="text-4xl font-bold">
                  {tool.icon}
                </span>
              </div>
              
              <h3 className="font-bold text-lg text-[#0A0A0A] mb-1">
                {tool.name}
              </h3>
              
              <span className="text-sm text-[#1A1A1A]/60 font-medium">
                {tool.category}
              </span>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Bottom Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
        >
          <div className="bg-white rounded-3xl p-8 sm:p-10 lg:p-12 shadow-xl border border-[#E8E8E8] max-w-4xl mx-auto">
            <h3 className="text-3xl sm:text-4xl font-bold mb-4 text-[#0A0A0A]">
              From Content Creation to <span className="text-[#FF6B35]">Revenue Generation</span>
            </h3>
            <p className="text-[#1A1A1A]/70 text-lg sm:text-xl mb-8 leading-relaxed max-w-2xl mx-auto">
              Learn to use AI tools for copywriting, image generation, video creation, 
              voice synthesis, and complete marketing automation workflows.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {[
                { icon: '✍️', text: 'AI Writing' },
                { icon: '🎨', text: 'Visual Content' },
                { icon: '🎬', text: 'Video Creation' },
                { icon: '🚀', text: 'Automation' }
              ].map((feature, index) => (
                <div
                  key={feature.text}
                  className="flex flex-col items-center gap-3 p-4 bg-[#F8F9FA] rounded-2xl border border-[#E8E8E8]"
                >
                  <span className="text-3xl">{feature.icon}</span>
                  <span className="text-sm font-semibold text-[#1A1A1A] text-center">{feature.text}</span>
                </div>
              ))}
            </div>
            
            <motion.a
              href="#"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#0A0A0A] text-white rounded-2xl font-bold text-lg hover:bg-[#FF6B35] transition-all duration-300 shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Explore The Curriculum</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 