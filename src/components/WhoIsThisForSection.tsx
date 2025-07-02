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
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 }
  }
};

const iconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15
    }
  }
};

export default function WhoIsThisForSection() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Content Card */}
          <motion.div 
            className="bg-black rounded-3xl p-12 flex-1 text-white shadow-2xl"
            initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Who is this <span className="text-[#FF5A1F]">for?</span>
            </motion.h2>
            
            <motion.p 
              className="text-lg font-mono mb-8 text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              From complete programming noobs to experienced professionals. No prior coding experience required, but surely helpful.
            </motion.p>
            
            <motion.ul 
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                'Looking to upskill in GenAI',
                'Looking to change career paths into GenAI',
                'Looking to build your own GenAI Products',
                'Generally curious about this field'
              ].map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-center gap-4 text-lg font-mono group"
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                >
                  <motion.div
                    className="w-3 h-3 bg-[#FF5A1F] rounded-full flex-shrink-0"
                    whileHover={{ scale: 1.5, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="group-hover:text-[#FF5A1F] transition-colors duration-300">
                    {item}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          
          {/* Icons Section */}
          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-80 h-80">
              {/* Central icon */}
              <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl z-10"
                variants={iconVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#FF5A1F] to-orange-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">AI</span>
                </div>
              </motion.div>
              
              {/* Orbiting icons */}
              {[
                { icon: '🐍', color: 'bg-blue-500', delay: 0.2, angle: 0 },
                { icon: '⚛️', color: 'bg-cyan-500', delay: 0.4, angle: 72 },
                { icon: '🐙', color: 'bg-gray-800', delay: 0.6, angle: 144 },
                { icon: '🤖', color: 'bg-green-500', delay: 0.8, angle: 216 },
                { icon: '💻', color: 'bg-purple-500', delay: 1.0, angle: 288 }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="absolute w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `translate(-50%, -50%) rotate(${item.angle}deg) translateY(-120px) rotate(-${item.angle}deg)`
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: item.delay, 
                    duration: 0.6,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ scale: 1.2, y: -5 }}

                >
                  <div className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center`}>
                    <span className="text-xl">{item.icon}</span>
                  </div>
                </motion.div>
              ))}
              
              {/* Connecting lines */}
              <motion.div
                className="absolute inset-0 border-2 border-dashed border-gray-300 rounded-full opacity-30"
                initial={{ scale: 0, rotate: 0 }}
                whileInView={{ scale: 1, rotate: 360 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut" }}
                animate={{ rotate: 360 }}
                style={{
                  animation: "spin 30s linear infinite"
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 