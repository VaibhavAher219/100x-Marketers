'use client';
import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    name: 'AI Ad Generator',
    description: 'Generate high-converting ads in seconds using advanced AI algorithms',
    subtitle: 'Automated creative generation',
    color: 'from-blue-500 to-indigo-600',
    icon: '🚀',
    category: 'Creative'
  },
  {
    name: 'Voice Clone Marketing',
    description: 'Create personalized voice messages at scale for your campaigns',
    subtitle: 'AI voice synthesis for campaigns',
    color: 'from-purple-500 to-pink-600',
    icon: '🎵',
    category: 'Voice AI'
  },
  {
    name: 'Smart Email Campaigns',
    description: 'Build AI-powered email sequences that automatically convert',
    subtitle: 'Intelligent email automation',
    color: 'from-emerald-500 to-teal-600',
    icon: '📧',
    category: 'Automation'
  },
  {
    name: 'Video UGC Generator',
    description: 'Create authentic user-generated video content with AI',
    subtitle: 'AI video creation platform',
    color: 'from-orange-500 to-red-600',
    icon: '🎬',
    category: 'Video AI'
  }
];

export default function CreationsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7
      }
    }
  };

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#FF6B35]/10 to-[#FF6B35]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-blue-500/10 to-purple-500/5 rounded-full blur-3xl" />
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A0A0A] mb-6 leading-tight">
            What will you{' '}
            <span className="text-[#FF6B35] relative">
              create?
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
            Build real AI-powered marketing campaigns that drive measurable results and revenue growth
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#E8E8E8]"
              variants={cardVariants}
              whileHover={{ 
                y: -12, 
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
            >
              {/* Project Preview */}
              <div className={`relative h-48 sm:h-52 bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden`}>
                
                {/* Animated Background Pattern */}
                <div className="absolute inset-0">
                  <motion.div
                    className="absolute inset-0 opacity-20"
                    animate={{
                      background: [
                        "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.3) 0%, transparent 50%)",
                        "radial-gradient(circle at 80% 80%, rgba(255,255,255,0.3) 0%, transparent 50%)",
                        "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.3) 0%, transparent 50%)"
                      ]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>
                
                {/* Icon */}
                <motion.div
                  className="relative z-10 text-6xl sm:text-7xl"
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: [0, -10, 10, 0],
                    filter: "drop-shadow(0 0 20px rgba(255,255,255,0.8))"
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300,
                    damping: 10 
                  }}
                >
                  {project.icon}
                </motion.div>
                
                {/* Category Badge */}
                <motion.div
                  className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full font-semibold border border-white/30"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                >
                  {project.category}
                </motion.div>
                
                {/* External Link Indicator */}
                <motion.div
                  className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30"
                  whileHover={{ scale: 1.2, rotate: 45 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <span className="text-white text-sm font-bold">↗</span>
                </motion.div>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
              
              {/* Project Info */}
              <div className="p-6 sm:p-8">
                <motion.h3 
                  className="text-xl sm:text-2xl font-bold mb-3 text-[#0A0A0A] group-hover:text-[#FF6B35] transition-colors duration-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.1 + 0.4 }}
                >
                  {project.name}
                </motion.h3>
                
                <motion.p 
                  className="text-[#1A1A1A]/70 text-sm sm:text-base mb-4 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.1 + 0.5 }}
                >
                  {project.description}
                </motion.p>
                
                <motion.div
                  className="flex items-center justify-between"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.1 + 0.6 }}
                >
                  <span className="text-[#1A1A1A]/50 text-xs font-medium uppercase tracking-wider">
                    {project.subtitle}
                  </span>
                  
                  <motion.div
                    className="w-6 h-6 rounded-full bg-[#F8F9FA] flex items-center justify-center group-hover:bg-[#FF6B35] transition-colors duration-300"
                    whileHover={{ scale: 1.2 }}
                  >
                    <span className="text-xs group-hover:text-white transition-colors duration-300">→</span>
                  </motion.div>
                </motion.div>
              </div>
              
              {/* Hover Gradient Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
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
          {/* Feature Highlights */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mb-8">
            {[
              { icon: '⚡', text: 'Real Projects' },
              { icon: '🎯', text: 'Proven Results' },
              { icon: '🚀', text: 'Portfolio Ready' },
              { icon: '💡', text: 'Industry Standard' }
            ].map((feature, index) => (
              <motion.div
                key={feature.text}
                className="flex items-center gap-2 px-4 py-2 bg-[#F8F9FA] rounded-full border border-[#E8E8E8]"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, borderColor: '#FF6B35' }}
              >
                <span className="text-lg">{feature.icon}</span>
                <span className="text-sm font-medium text-[#1A1A1A]">{feature.text}</span>
              </motion.div>
            ))}
          </div>
          
          {/* CTA Button */}
          <motion.button
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl border-2 border-[#E8E8E8] text-[#1A1A1A] hover:border-[#FF6B35] hover:text-[#FF6B35] transition-all duration-300 bg-white shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="font-semibold">See What You&apos;ll Build</span>
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
      </div>
    </section>
  );
} 