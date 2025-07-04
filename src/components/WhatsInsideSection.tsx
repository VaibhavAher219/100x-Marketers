'use client';
import React from 'react';
import { motion } from 'framer-motion';

const features = [
  { name: '24 Weeks Cohort', icon: '🎓' },
  { name: 'Build Your Own GenAI Products', icon: '🚀' },
  { name: 'Professional Certificate', icon: '📜' },
  { name: '150+ Hours of Learning', icon: '⏰' },
  { name: 'Elite Developer Community', icon: '🤝' },
  { name: 'Expert Instructors', icon: '👩‍🏫' },
  { name: 'Project-based Learning', icon: '💻' },
  { name: 'Live Classes', icon: '🔴' },
  { name: 'GPU credits from AWS for 5 projects', icon: '☁️' },
];

const companies = [
  'unacademy',
  'Mahindra',
  'sentient',
  'NEROLAC'
];

export default function WhatsInsideSection() {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-white to-[#F8F9FA]">
      <div className="container mx-auto">
        {/* Companies Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[#1A1A1A]/60 font-medium text-lg mb-8">
            Students working with top companies like
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
            {companies.map((company, i) => (
              <motion.div
                key={company}
                className="text-3xl font-bold text-[#1A1A1A]/40 tracking-wider"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, color: '#FF6B35' }}
              >
                {company}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="bg-white rounded-3xl shadow-2xl border border-[#E8E8E8] p-8 md:p-12 lg:p-16">
          <motion.div
            className="text-center mb-[60px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-5 py-2 rounded-full bg-[#FF6B35]/10 text-[#FF6B35] text-sm font-bold tracking-wide mb-6">
              PROGRAM OVERVIEW
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-[#0A0A0A]">
              What&apos;s <span className="text-[#FF6B35]">Inside?</span>
            </h2>
            <p className="text-xl text-[#1A1A1A]/70 max-w-2xl mx-auto">
              This isn&apos;t just another course. It&apos;s a career transformation program.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.05 }}
          >
            {features.map((feature) => (
              <motion.div
                key={feature.name}
                className="group flex items-center gap-4 p-6 rounded-2xl bg-[#F8F9FA] border border-transparent hover:border-[#FF6B35]/50 hover:bg-white transition-all duration-300"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ scale: 1.03, y: -5 }}
              >
                <div
                  className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl border border-[#E8E8E8] group-hover:bg-[#FF6B35]/10 group-hover:border-[#FF6B35] transition-all duration-300"
                >
                  {feature.icon}
                </div>
                <span className="text-base font-semibold text-[#1A1A1A] group-hover:text-[#FF6B35] transition-colors duration-300">
                  {feature.name}
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
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.a
              href="#"
              className="inline-block px-10 py-5 rounded-2xl bg-[#0A0A0A] text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#FF6B35]"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Secure Your Spot
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 