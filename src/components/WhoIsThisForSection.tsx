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
    <section className="w-full py-20 bg-[#F8F9FA]">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-white border border-[#E8E8E8] text-[#1A1A1A]/60 text-sm font-medium mb-6">
            Who&apos;s This For
          </span>
          <h2 className="font-bold mb-4 text-[#0A0A0A]">
            Perfect for <span className="text-[#FF6B35]">ambitious marketers</span>
          </h2>
          <p className="text-[#1A1A1A]/70 max-w-3xl mx-auto">
            Whether you&apos;re looking to advance your marketing career or build the next big AI marketing product
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {targetAudience.map((audience, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-10 border border-[#E8E8E8] hover:border-[#FF6B35]/30 transition-colors duration-300 min-w-[300px]"
            >
              {/* Icon and Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${audience.color} flex items-center justify-center`}>
                  <span className="text-2xl">{audience.icon}</span>
                </div>
                <div>
                  <h3 className="font-bold text-[#0A0A0A] mb-1">
                    For <span className="text-[#FF6B35]">{audience.title}</span>
                  </h3>
                  <p className="text-sm text-[#1A1A1A]/60">
                    {audience.subtitle}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-[#1A1A1A]/70 mb-6 leading-relaxed">
                {audience.description}
              </p>

              {/* Points */}
              <div className="space-y-3 mb-8">
                {audience.points.map((point, j) => (
                  <div key={j} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[#FF6B35] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-[#1A1A1A]/80">{point}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href="#"
                className="block w-full text-center px-6 py-4 bg-[#0A0A0A] text-white rounded-xl font-bold hover:bg-[#FF6B35] transition-colors duration-300"
              >
                Start Your Journey →
              </a>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 border border-[#E8E8E8] max-w-2xl mx-auto">
            <h3 className="font-bold mb-4 text-[#0A0A0A]">
              Not sure which path is right for you?
            </h3>
            <p className="text-[#1A1A1A]/70 mb-6">
              Our course is designed to give you skills for both career advancement and entrepreneurship. 
              Many of our students end up doing both!
            </p>
            <a
              href="#"
              className="inline-block px-8 py-3 bg-[#FF6B35] text-white rounded-xl font-bold hover:bg-[#FF6B35]/90 transition-colors duration-300"
            >
              Talk to an Advisor
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 