'use client';
import React from 'react';
import { motion } from 'framer-motion';

const mentors = [
  {
    name: 'Sarah Chen',
    role: 'SC',
    title: 'Ex-Meta Marketing AI Lead',
    description: 'Led AI marketing initiatives at Meta, scaled campaigns to $100M+ spend with cutting-edge ML models',
    expertise: ['AI Strategy', 'Scale Marketing', 'ML Models'],
    color: 'from-blue-500 to-blue-700',
    stats: { experience: '8 Years', revenue: '$100M+', campaigns: '500+' }
  },
  {
    name: 'Marcus Rodriguez',
    role: 'MR',
    title: 'Mesha Co-founder',
    description: 'Built AI marketing platform used by 500+ agencies worldwide, pioneer in marketing automation',
    expertise: ['Platform Building', 'Marketing Automation', 'AI Tools'],
    color: 'from-purple-500 to-purple-700',
    stats: { experience: '10 Years', clients: '500+', growth: '300%' }
  },
  {
    name: 'Priya Sharma',
    role: 'PS',
    title: 'DTC Brand Growth Expert',
    description: 'Scaled 15+ DTC brands from 0 to 8-figures using AI marketing strategies and automation',
    expertise: ['DTC Growth', 'E-commerce', 'AI Marketing'],
    color: 'from-emerald-500 to-emerald-700',
    stats: { experience: '6 Years', brands: '15+', revenue: '8-Figures' }
  },
  {
    name: 'Alex Thompson',
    role: 'AT',
    title: 'Creative AI Specialist',
    description: 'Generated $50M+ in revenue through AI-powered creative campaigns and content automation',
    expertise: ['Creative AI', 'Content Strategy', 'Campaign Design'],
    color: 'from-orange-500 to-orange-700',
    stats: { experience: '7 Years', revenue: '$50M+', creatives: '10K+' }
  }
];

export default function MentorsSection() {
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

  const mentorVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section className="relative w-full py-20 bg-gradient-to-br from-[#F8F9FA] to-white">
      <div className="container mx-auto">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-[60px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E8E8E8] text-[#1A1A1A]/60 text-sm font-medium mb-6 shadow-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="w-2 h-2 bg-[#FF6B35] rounded-full animate-pulse"></span>
            WHO&apos;S TEACHING
          </motion.span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A0A0A] mb-6 leading-tight">
            Learn from{' '}
            <span className="text-[#FF6B35] relative">
              Marketing AI
              <motion.div
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#FF6B35] to-[#FF6B35]/60 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </span>
            <br />
            <span className="text-[#FF6B35]">Experts</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-[#1A1A1A]/70 max-w-3xl mx-auto leading-relaxed">
            Get mentored by industry leaders who&apos;ve built and scaled AI marketing systems
          </p>
        </motion.div>

        {/* Mentors Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {mentors.map((mentor, i) => (
            <motion.div
              key={i}
              className="group bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8E8] shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
              variants={mentorVariants}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Photo */}
              <motion.div 
                className="relative mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`w-full h-48 sm:h-56 rounded-2xl bg-gradient-to-br ${mentor.color} flex items-center justify-center overflow-hidden shadow-lg relative`}>
                  {/* Animated background pattern */}
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
                  
                  {/* Avatar */}
                  <motion.div 
                    className="w-28 h-28 sm:w-32 sm:h-32 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-white/30 relative z-10"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-white text-2xl sm:text-3xl font-bold">
                      {mentor.role}
                    </span>
                  </motion.div>
                </div>
                
                {/* Status indicator */}
                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-[#FF6B35] rounded-full border-4 border-white flex items-center justify-center">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                </div>
              </motion.div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Name & Title */}
                <motion.h3 
                  className="text-xl sm:text-2xl font-bold mb-2 text-[#0A0A0A] group-hover:text-[#FF6B35] transition-colors duration-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
                >
                  {mentor.name}
                </motion.h3>
                
                <motion.p
                  className="text-[#FF6B35] text-sm font-semibold mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.1 + 0.4, duration: 0.5 }}
                >
                  {mentor.title}
                </motion.p>
                
                {/* Description */}
                <motion.p 
                  className="text-[#1A1A1A]/70 text-sm leading-relaxed mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.1 + 0.5, duration: 0.5 }}
                >
                  {mentor.description}
                </motion.p>
                
                {/* Stats */}
                <div className="grid grid-cols-1 gap-3 mb-6">
                  {Object.entries(mentor.stats).map(([key, value], index) => (
                    <motion.div
                      key={key}
                      className="flex items-center justify-between p-3 bg-[#F8F9FA] rounded-lg border border-[#E8E8E8] group-hover:border-[#FF6B35]/30 transition-colors duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 + index * 0.1 + 0.6, duration: 0.3 }}
                    >
                      <span className="text-xs font-medium text-[#1A1A1A]/60 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                      <span className="text-sm font-bold text-[#FF6B35]">{value}</span>
                    </motion.div>
                  ))}
                </div>
                
                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-2">
                  {mentor.expertise.map((skill, index) => (
                    <motion.span
                      key={skill}
                      className="px-3 py-1 bg-white border border-[#E8E8E8] text-[#1A1A1A] rounded-full text-xs font-medium group-hover:border-[#FF6B35] transition-colors duration-300"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 + index * 0.1 + 0.8, duration: 0.3 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Bottom CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.p
            className="text-[#1A1A1A]/70 text-lg sm:text-xl mb-8"
            whileHover={{ scale: 1.02 }}
          >
            Ready to learn from the best in the industry?
          </motion.p>
          
          <motion.button
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#FF6B35] text-white rounded-2xl font-semibold hover:bg-[#FF6B35]/90 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Join Waitlist</span>
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