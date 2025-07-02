'use client';
import React from 'react';
import { motion } from 'framer-motion';

const tools = [
  { name: 'ChatGPT', icon: '💬', color: 'from-green-400 to-green-600' },
  { name: 'Jasper', icon: '✍️', color: 'from-purple-400 to-purple-600' },
  { name: 'Midjourney', icon: '🎨', color: 'from-blue-400 to-blue-600' },
  { name: 'Runway', icon: '🎬', color: 'from-pink-400 to-pink-600' },
  { name: 'HeyGen', icon: '👤', color: 'from-orange-400 to-orange-600' },
  { name: 'ElevenLabs', icon: '🎵', color: 'from-indigo-400 to-indigo-600' },
  { name: 'Synthesia', icon: '📹', color: 'from-red-400 to-red-600' },
  { name: 'AdCreative.ai', icon: '📊', color: 'from-teal-400 to-teal-600' },
  { name: 'Pika', icon: '⚡', color: 'from-yellow-400 to-yellow-600' },
  { name: 'Mesha', icon: '🚀', color: 'from-cyan-400 to-cyan-600' }
];

export default function ToolsSection() {
  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gray-200 text-gray-600 text-sm font-mono tracking-wide mb-6">
            AI Marketing Tools
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900">
            What will you <span className="text-[#FF5A1F]">master?</span>
          </h2>
          <p className="text-xl text-gray-600 font-mono">
            Master the most powerful AI tools transforming marketing today
          </p>
        </motion.div>

        <motion.div 
                     className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
        >
          {tools.map((tool, i) => (
            <motion.div
              key={i}
              className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.05 }}
            >
              {/* Icon */}
              <motion.div
                className={`w-16 h-16 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center mb-4 shadow-lg`}
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-white text-2xl font-bold">
                  {tool.icon}
                </span>
              </motion.div>
              
              {/* Tool Name */}
              <motion.h3 
                className="font-bold text-sm text-gray-800 group-hover:text-[#FF5A1F] transition-colors duration-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.3 }}
              >
                {tool.name}
              </motion.h3>
              
              {/* Hover effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-[#FF5A1F]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
        
                 {/* Bottom section */}
         <motion.div
           className="text-center mt-16"
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.8, duration: 0.6 }}
         >
           <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
             <h3 className="text-2xl font-bold mb-4 text-gray-800">
               From Content Creation to Revenue Generation
             </h3>
             <p className="text-gray-600 font-mono mb-6">
               Learn to use AI tools for copywriting, image generation, video creation, 
               voice synthesis, and complete marketing automation workflows.
             </p>
             <motion.button
               className="px-6 py-3 bg-[#FF5A1F] text-white rounded-xl font-bold hover:bg-orange-600 transition-all duration-300"
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
             >
               Start Learning →
             </motion.button>
           </div>
         </motion.div>
      </div>
    </section>
  );
} 