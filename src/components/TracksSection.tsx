'use client';
import React from 'react';
import { motion } from 'framer-motion';

const cardContent = {
  jobSeekers: {
    icon: '👨‍💻',
    title: 'For Job Seekers',
    subtitle: '> Get A Job In Gen-AI',
    description: 'Build a killer portfolio of Gen-AI products. Get personalised mentoring on interview prep and resume building. Land your dream GenAI job.',
    features: ['Learn the skills', 'Prep for interviews', 'Get hired'],
  },
  founders: {
    icon: '🚀',
    title: 'For Founders',
    subtitle: '> Build A Gen-AI Product',
    description: 'Create a new Gen-AI product or integrate AI into an existing product. Gain access to our alumni network of 100+ Gen AI startup founders and industry experts to guide you.',
    features: [
      'Hire best Gen AI talent',
      'Network to build your dream team',
      'Problem statements directly from Industry leading entrepreneurs',
    ],
  },
};

export default function TracksSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="w-full py-20 bg-[#F8F9FA]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="inline-block px-5 py-2 rounded-full bg-[#FF6B35]/10 text-[#FF6B35] text-sm font-bold tracking-wide mb-6">
            WHO&apos;S THIS FOR
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-[#0A0A0A]">
            Perfect for <span className="text-[#FF6B35]">ambitious marketers</span>
          </h2>
          <p className="text-xl text-[#1A1A1A]/70 max-w-3xl mx-auto">
            Whether you&apos;re looking to advance your marketing career or build the next big AI marketing product
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Job Seekers Card */}
          <TrackCard content={cardContent.jobSeekers} />

          {/* Founders Card */}
          <TrackCard content={cardContent.founders} />
        </motion.div>

        {/* Not Sure Section */}
        <motion.div
          className="text-center mt-16 bg-white border border-[#E8E8E8] rounded-3xl p-10 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
        >
          <h3 className="text-3xl font-bold text-[#0A0A0A] mb-4">
            Not sure which path is right for you?
          </h3>
          <p className="text-lg text-[#1A1A1A]/70 mb-6 max-w-2xl mx-auto">
            Our course is designed to give you skills for both career advancement and entrepreneurship. Many of our students end up doing both!
          </p>
          <motion.a
            href="#"
            className="inline-block px-8 py-4 rounded-xl bg-[#FF6B35] text-white font-bold text-lg hover:bg-black transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

const TrackCard = ({ content }: { content: (typeof cardContent)['jobSeekers'] }) => (
  <motion.div
    className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
    variants={{
      hidden: { opacity: 0, y: 30, scale: 0.98 },
      visible: { opacity: 1, y: 0, scale: 1 }
    }}
    whileHover={{ y: -8, scale: 1.02 }}
    transition={{ duration: 0.4 }}
  >
    <div className="flex items-center gap-4 mb-6">
      <div className="text-5xl bg-[#FF6B35]/10 p-3 rounded-full">
        {content.icon}
      </div>
      <div>
        <h3 className="text-2xl font-bold text-[#FF6B35]">{content.title}</h3>
        <p className="text-lg font-semibold text-[#0A0A0A]">{content.subtitle}</p>
      </div>
    </div>
    
    <p className="text-gray-600 mb-6 text-base leading-relaxed flex-grow">
      {content.description}
    </p>
    
    <ul className="space-y-3 list-none mb-8">
      {content.features.map((item, i) => (
        <motion.li
          key={i}
          className="flex items-center gap-3 text-base text-[#1A1A1A]"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
        >
          <div className="w-5 h-5 bg-[#FF6B35] rounded-full flex items-center justify-center text-white text-xs font-bold">
            ✓
          </div>
          <span>{item}</span>
        </motion.li>
      ))}
    </ul>
    
    <motion.a
      href="#"
      className="block w-full text-center px-6 py-4 bg-[#0A0A0A] text-white rounded-xl font-bold text-lg hover:bg-[#FF6B35] transition-all duration-300 mt-auto"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Start Your Journey →
    </motion.a>
  </motion.div>
); 