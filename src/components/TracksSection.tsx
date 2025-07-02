'use client';
import React from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
    }
  }
};

export default function TracksSection() {
  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gray-200 text-gray-600 text-sm font-mono tracking-wide mb-6">
            TRACKS
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Meet your goals with tailored <span className="text-[#FF5A1F]">tracks</span>
          </h2>
          <p className="text-xl text-gray-600 font-mono">
            Forget the one-size-fits-all approach
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Job Seekers Card */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <motion.div
                className="text-5xl"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                👨‍💻
              </motion.div>
              <div>
                <span className="text-xl font-semibold text-gray-700">For </span>
                <span className="text-xl font-bold text-[#FF5A1F]">Job Seekers</span>
              </div>
            </div>
            
            <motion.div 
              className="font-mono text-lg mb-3 font-bold text-black"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              &gt; Get A Job In Gen-AI
            </motion.div>
            
            <motion.p 
              className="text-gray-600 font-mono mb-6 text-sm leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Build a killer portfolio of Gen-AI products. Get personalised mentoring on interview prep and resume building. Land your dream GenAI job.
            </motion.p>
            
            <motion.ul 
              className="space-y-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              {['Learn the skills', 'Prep for interviews', 'Get hired'].map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-center gap-3 text-sm font-mono group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + i * 0.1, duration: 0.4 }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    className="w-2 h-2 bg-[#FF5A1F] rounded-full"
                    whileHover={{ scale: 1.5 }}
                  />
                  <span className="group-hover:text-[#FF5A1F] transition-colors duration-300">
                    {item}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Founders Card */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <motion.div
                className="text-5xl"
                whileHover={{ scale: 1.2, rotate: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                👨‍💼
              </motion.div>
              <div>
                <span className="text-xl font-semibold text-gray-700">For </span>
                <span className="text-xl font-bold text-[#FF5A1F]">Founders</span>
              </div>
            </div>
            
            <motion.div 
              className="font-mono text-lg mb-3 font-bold text-black"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              &gt; Build A Gen-AI Product
            </motion.div>
            
            <motion.p 
              className="text-gray-600 font-mono mb-6 text-sm leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              Create a new Gen-AI product or integrate AI into an existing product. Gain access to our alumni network of 100+ Gen AI startup founders and industry experts to guide you.
            </motion.p>
            
            <motion.ul 
              className="space-y-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              {[
                'Hire best Gen AI talent',
                'Network to build your dream team',
                'Problem statements directly from Industry leading entrepreneurs'
              ].map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-center gap-3 text-sm font-mono group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.0 + i * 0.1, duration: 0.4 }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    className="w-2 h-2 bg-[#FF5A1F] rounded-full"
                    whileHover={{ scale: 1.5 }}
                  />
                  <span className="group-hover:text-[#FF5A1F] transition-colors duration-300">
                    {item}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 