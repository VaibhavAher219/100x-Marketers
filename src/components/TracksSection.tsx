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
  return (
    <section className="w-full py-20 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-5 py-2 rounded-full bg-[#FF6B35]/10 text-[#FF6B35] text-sm font-bold tracking-wide mb-6">
            WHO&apos;S THIS FOR
          </span>
          <h2 className="font-bold mb-4 text-[#0A0A0A]">
            Perfect for <span className="text-[#FF6B35]">ambitious marketers</span>
          </h2>
          <p className="text-[#1A1A1A]/70 max-w-3xl mx-auto">
            Whether you&apos;re looking to advance your marketing career or build the next big AI marketing product
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-stretch">
          {/* Job Seekers Card */}
          <TrackCard content={cardContent.jobSeekers} />

          {/* Founders Card */}
          <TrackCard content={cardContent.founders} />
        </div>

        {/* Not Sure Section */}
        <div className="text-center mt-16 bg-[#F8F9FA] border border-[#E8E8E8] rounded-2xl p-10">
          <h3 className="font-bold text-[#0A0A0A] mb-4">
            Not sure which path is right for you?
          </h3>
          <p className="text-[#1A1A1A]/70 mb-6 max-w-2xl mx-auto">
            Our course is designed to give you skills for both career advancement and entrepreneurship. Many of our students end up doing both!
          </p>
          <a
            href="#"
            className="inline-block px-8 py-4 rounded-xl bg-[#FF6B35] text-white font-bold hover:bg-[#FF6B35]/90 transition-colors duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}

const TrackCard = ({ content }: { content: (typeof cardContent)['jobSeekers'] }) => (
  <div className="bg-white rounded-2xl p-10 border border-[#E8E8E8] hover:border-[#FF6B35]/30 transition-colors duration-300 flex flex-col h-full min-w-[300px]">
    <div className="flex items-center gap-4 mb-6">
      <div className="text-4xl bg-[#FF6B35]/10 p-3 rounded-2xl">
        {content.icon}
      </div>
      <div>
        <h3 className="font-bold text-[#FF6B35]">{content.title}</h3>
        <p className="font-semibold text-[#0A0A0A]">{content.subtitle}</p>
      </div>
    </div>
    
    <p className="text-[#1A1A1A]/70 mb-6 leading-relaxed flex-grow">
      {content.description}
    </p>
    
    <ul className="space-y-3 list-none mb-8">
      {content.features.map((item, i) => (
        <li key={i} className="flex items-center gap-3 text-[#1A1A1A]">
          <div className="w-5 h-5 bg-[#FF6B35] rounded-full flex items-center justify-center text-white text-xs font-bold">
            ✓
          </div>
          <span>{item}</span>
        </li>
      ))}
    </ul>
    
    <a
      href="#"
      className="block w-full text-center px-6 py-4 bg-[#0A0A0A] text-white rounded-xl font-bold hover:bg-[#FF6B35] transition-colors duration-300 mt-auto"
    >
      Start Your Journey →
    </a>
  </div>
); 