'use client';
import React from 'react';
import { motion } from 'framer-motion';

const features = [
  '24 Weeks Cohort',
  'Build Your Own GenAI Products',
  'Professional Certificate',
  '150+ Hours of Learning',
  'Elite Developer Community',
  'Expert Instructors',
  'Project-based Learning',
  'Live Classes',
  'GPU credits from AWS for 5 projects',
];

const companies = [
  'unacademy',
  'Mahindra',
  'sentient',
  'NEROLAC'
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function WhatsInsideSection() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-4xl mx-auto px-8">
        {/* Companies Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gray-600 font-mono text-lg mb-8">
            Students working with top companies like
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            {companies.map((company, i) => (
              <motion.div
                key={company}
                className="text-2xl font-bold text-gray-400 tracking-wide"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.6, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.1, opacity: 0.8 }}
              >
                {company}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gray-100 text-gray-500 text-sm font-mono tracking-wide mb-6">
            Overview
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            What's <span className="text-[#FF5A1F]">inside?</span>
          </h2>
          <p className="text-xl text-gray-600 font-mono">
            Again - not another ChatGPT course. Just saying.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="group flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.02, x: 5 }}
            >
              <motion.div
                className="flex-shrink-0 w-8 h-8 bg-[#FF5A1F] rounded-full flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <motion.span 
                  className="text-white text-sm font-bold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  ➤
                </motion.span>
              </motion.div>
              <span className="text-lg font-mono group-hover:text-[#FF5A1F] transition-colors duration-300">
                {feature}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <motion.a
            href="#"
            className="inline-block px-8 py-4 rounded-xl bg-[#FF5A1F] text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 25px -5px rgba(255, 90, 31, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Join the Waitlist
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
} 