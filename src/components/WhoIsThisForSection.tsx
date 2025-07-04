'use client';
import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.8,
      staggerChildren: 0.2 
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const targetAudience = [
  {
    title: 'Job Seekers',
    subtitle: 'Get A Job In Gen-AI Marketing',
    description: 'Build a killer portfolio of Gen-AI marketing campaigns. Get personalized mentoring on interview prep and resume building. Land your dream marketing job.',
    points: ['Learn the skills', 'Prep for interviews', 'Get hired'],
    icon: '💼',
    color: 'from-blue-500 to-blue-700'
  },
  {
    title: 'Founders',
    subtitle: 'Build A Gen-AI Marketing Product',
    description: 'Create a new Gen-AI marketing product or integrate AI into an existing marketing workflow. Gain access to our alumni network of 100+ marketing founders and industry experts.',
    points: ['Hire best marketing talent', 'Network to build your dream team', 'Problem statements directly from industry leaders'],
    icon: '🚀',
    color: 'from-orange-500 to-orange-700'
  }
];

export default function WhoIsThisForSection() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-[60px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gray-100 text-gray-500 text-sm font-mono tracking-wide mb-6">
            Who&apos;s This For
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Perfect for <span className="text-[#FF5A1F]">ambitious marketers</span>
          </h2>
          <p className="text-xl text-gray-600 font-mono max-w-3xl mx-auto">
                         Whether you&apos;re looking to advance your marketing career or build the next big AI marketing product
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10">
          {targetAudience.map((audience, i) => (
            <motion.div
              key={i}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-10 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 min-w-[300px]"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Icon and Header */}
              <motion.div 
                className="flex items-center gap-4 mb-6"
                variants={itemVariants}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${audience.color} flex items-center justify-center shadow-lg`}>
                  <span className="text-2xl">{audience.icon}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    For <span className="text-[#FF5A1F]">{audience.title}</span>
                  </h3>
                  <p className="text-sm font-mono text-gray-600">
                    {audience.subtitle}
                  </p>
                </div>
              </motion.div>

              {/* Description */}
              <motion.p 
                className="text-gray-700 mb-6 leading-relaxed"
                variants={itemVariants}
              >
                {audience.description}
              </motion.p>

              {/* Points */}
              <motion.div 
                className="space-y-3"
                variants={itemVariants}
              >
                {audience.points.map((point, j) => (
                  <motion.div
                    key={j}
                    className="flex items-center gap-3"
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-6 h-6 bg-[#FF5A1F] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700 font-medium">{point}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA */}
              <motion.div 
                className="mt-8"
                variants={itemVariants}
              >
                <motion.button
                  className="w-full py-3 bg-black text-white rounded-xl font-bold hover:bg-[#FF5A1F] transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Start Your Journey →
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Not sure which path is right for you?
            </h3>
            <p className="text-gray-600 mb-6 font-mono">
              Our course is designed to give you skills for both career advancement and entrepreneurship. 
              Many of our students end up doing both!
            </p>
            <motion.button
              className="px-8 py-3 bg-[#FF5A1F] text-white rounded-xl font-bold hover:bg-orange-600 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Talk to an Advisor
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 