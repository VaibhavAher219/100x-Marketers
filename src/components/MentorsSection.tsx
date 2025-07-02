'use client';
import React from 'react';
import { motion } from 'framer-motion';

const mentors = [
  {
    name: 'Sarah Chen',
    title: 'Ex-Meta Marketing AI Lead',
    description: 'Led AI marketing initiatives at Meta, scaled campaigns to $100M+ spend',
    color: 'from-blue-500 to-blue-700'
  },
  {
    name: 'Marcus Rodriguez',
    title: 'Mesha Co-founder',
    description: 'Built AI marketing platform used by 500+ agencies worldwide',
    color: 'from-purple-500 to-purple-700'
  },
  {
    name: 'Priya Sharma',
    title: 'DTC Brand Growth Expert',
    description: 'Scaled 15+ DTC brands from 0 to 8-figures using AI marketing',
    color: 'from-green-500 to-green-700'
  },
  {
    name: 'Alex Thompson',
    title: 'Creative AI Specialist',
    description: 'Generated $50M+ in revenue through AI-powered creative campaigns',
    color: 'from-orange-500 to-orange-700'
  }
];

export default function MentorsSection() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gray-100 text-gray-500 text-sm font-mono tracking-wide mb-6">
            Who&apos;s Teaching
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Learn from <span className="text-[#FF5A1F]">Marketing AI Experts</span>
          </h2>
          <p className="text-xl text-gray-600 font-mono">
            Get mentored by leaders who&apos;ve built and scaled AI marketing systems
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mentors.map((mentor, i) => (
            <motion.div
              key={i}
              className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Photo */}
              <motion.div 
                className="relative mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`w-full h-48 rounded-xl bg-gradient-to-br ${mentor.color} flex items-center justify-center overflow-hidden shadow-lg`}>
                  {/* Placeholder for actual photos - in real implementation, use actual images */}
                  <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <span className="text-white text-4xl font-bold">
                      {mentor.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                
                {/* Orange accent */}
                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-[#FF5A1F] rounded-full border-4 border-white"></div>
              </motion.div>
              
              {/* Name */}
              <motion.h3 
                className="text-xl font-bold mb-3 group-hover:text-[#FF5A1F] transition-colors duration-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.3 }}
              >
                <span className="text-[#FF5A1F]">&gt; </span>
                {mentor.name}
              </motion.h3>
              
              {/* Description */}
              <motion.p 
                className="text-gray-600 text-sm font-mono leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.5 }}
              >
                {mentor.description}
              </motion.p>
              
              {/* Hover effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-[#FF5A1F]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              />
            </motion.div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.p
            className="text-gray-600 font-mono mb-6"
            whileHover={{ scale: 1.05 }}
          >
            Ready to learn from the best?
          </motion.p>
          <motion.button
            className="px-8 py-3 bg-[#FF5A1F] text-white rounded-xl font-bold hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join Waitlist
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
} 