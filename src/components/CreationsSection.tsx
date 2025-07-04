'use client';
import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    name: 'AI Ad Generator',
    description: 'Generate high-converting ads in seconds using advanced AI algorithms',
    subtitle: 'Automated creative generation',
    color: 'bg-gradient-to-br from-blue-500 to-indigo-600',
    icon: '🚀',
    category: 'Creative'
  },
  {
    name: 'Voice Clone Marketing',
    description: 'Create personalized voice messages at scale for your campaigns',
    subtitle: 'AI voice synthesis for campaigns',
    color: 'bg-gradient-to-br from-purple-500 to-pink-600',
    icon: '🎵',
    category: 'Voice AI'
  },
  {
    name: 'Smart Email Campaigns',
    description: 'Build AI-powered email sequences that automatically convert',
    subtitle: 'Intelligent email automation',
    color: 'bg-gradient-to-br from-emerald-500 to-teal-600',
    icon: '📧',
    category: 'Automation'
  },
  {
    name: 'Video UGC Generator',
    description: 'Create authentic user-generated video content with AI',
    subtitle: 'AI video creation platform',
    color: 'bg-gradient-to-br from-orange-500 to-red-600',
    icon: '🎬',
    category: 'Video AI'
  }
];

export default function CreationsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="relative w-full py-20 bg-white overflow-hidden">
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#FF6B35]/10 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#FF6B35]/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}/>
      </div>

      <div className="container mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-[60px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0A0A0A] mb-6 leading-tight">
            What will you <span className="text-[#FF6B35]">create?</span>
          </h2>
          <p className="text-lg sm:text-xl text-[#1A1A1A]/70 max-w-3xl mx-auto leading-relaxed">
            Build real AI-powered marketing campaigns that drive measurable results and revenue growth.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.name}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-xl transition-all duration-300 border border-[#E8E8E8] min-h-[400px]"
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.03,
                boxShadow: "0 20px 25px -5px rgba(255, 107, 53, 0.2)"
              }}
            >
              <div className="p-1">
                <div className={`relative h-56 rounded-3xl flex items-center justify-center overflow-hidden ${project.color}`}>
                  <div className="absolute inset-0 bg-black/10" />
                  <motion.div
                    className="relative z-10 text-7xl"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {project.icon}
                  </motion.div>
                  <span className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full font-semibold border border-white/30">
                    {project.category}
                  </span>
                  <span className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 text-white font-bold group-hover:rotate-45 transition-transform duration-300">
                    ↗
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#0A0A0A]">
                  {project.name}
                </h3>
                <p className="text-[#1A1A1A]/70 text-base mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex items-center justify-between text-xs text-[#1A1A1A]/50 font-medium uppercase tracking-wider">
                  <span>{project.subtitle}</span>
                  <span className="group-hover:text-[#FF6B35] transition-colors duration-300">
                    Learn More →
                  </span>
                </div>
              </div>
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            {[
              { icon: '⚡', text: 'Real Projects' },
              { icon: '🎯', text: 'Proven Results' },
              { icon: '🚀', text: 'Portfolio Ready' },
              { icon: '💡', text: 'Industry Standard' }
            ].map((feature, index) => (
              <motion.div
                key={feature.text}
                className="flex flex-col items-center justify-center gap-3 p-6 bg-white rounded-2xl border border-[#E8E8E8] shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, ease: 'easeOut' }}
                whileHover={{ scale: 1.05, y: -5, borderColor: '#FF6B35' }}
              >
                <span className="text-4xl">{feature.icon}</span>
                <span className="text-base font-semibold text-[#1A1A1A] text-center">{feature.text}</span>
              </motion.div>
            ))}
          </div>

          <motion.a
            href="#"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#0A0A0A] text-white rounded-2xl font-bold text-lg hover:bg-[#FF6B35] transition-all duration-300 shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>See What You&apos;ll Build</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
} 