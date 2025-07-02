'use client';
import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    name: 'AI Ad Generator',
    description: 'Generate high-converting ads in seconds',
    subtitle: 'Automated creative generation',
    color: 'from-blue-500 to-blue-600',
    icon: '📱'
  },
  {
    name: 'Voice Clone Marketing',
    description: 'Personalized voice messages at scale',
    subtitle: 'AI voice synthesis for campaigns',
    color: 'from-purple-500 to-purple-600',
    icon: '🎵'
  },
  {
    name: 'Smart Email Campaigns',
    description: 'AI-powered email sequences that convert',
    subtitle: 'Intelligent email automation',
    color: 'from-green-500 to-emerald-600',
    icon: '📧'
  },
  {
    name: 'Video UGC Generator',
    description: 'Create authentic user-generated content',
    subtitle: 'AI video creation platform',
    color: 'from-orange-500 to-red-600',
    icon: '🎬'
  }
];

export default function CreationsSection() {
  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900">
            What will you <span className="text-[#FF5A1F]">create?</span>
          </h2>
          <p className="text-xl text-gray-600 font-mono">
            Build real AI-powered marketing campaigns that drive actual results and revenue.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Project Image/Preview */}
              <div className={`relative h-40 bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden`}>
                <motion.div
                  className="text-white text-4xl font-bold"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {project.icon}
                </motion.div>
                
                {/* Overlay pattern */}
                <div className="absolute inset-0 bg-black/10">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                
                {/* Link indicator */}
                <motion.div
                  className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="text-white text-sm">↗</span>
                </motion.div>
              </div>
              
              {/* Project Info */}
              <div className="p-6">
                <motion.h3 
                  className="text-xl font-bold mb-2 group-hover:text-[#FF5A1F] transition-colors"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                >
                  {project.name} ↗
                </motion.h3>
                
                <motion.p 
                  className="text-gray-600 text-sm mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.4 }}
                >
                  {project.description}
                </motion.p>
                
                <motion.p 
                  className="text-gray-400 text-xs font-mono"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.5 }}
                >
                  {project.subtitle}
                </motion.p>
              </div>
              
              {/* Hover effect overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-[#FF5A1F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              />
            </motion.div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.button
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-gray-300 text-gray-600 hover:border-[#FF5A1F] hover:text-[#FF5A1F] transition-all duration-300 font-mono"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Why Us? →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
} 