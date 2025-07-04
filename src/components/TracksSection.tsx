'use client';
import React from 'react';

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

const tracks = [
  {
    ...cardContent.jobSeekers,
    color: 'from-blue-500 to-blue-700',
    benefits: cardContent.jobSeekers.features
  },
  {
    ...cardContent.founders,
    color: 'from-purple-500 to-purple-700',
    benefits: cardContent.founders.features
  }
];

const companies = [
  { name: 'Synthesia', icon: '🎬' },
  { name: 'AdCreative.ai', icon: '📊' },
  { name: 'Pika', icon: '⚡' },
  { name: 'Mesha', icon: '🚀' }
];

export default function TracksSection() {
  return (
    <section className="relative w-full py-24 bg-white">
      <div className="container mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-6 py-3 rounded-full bg-[#FF6B35]/10 text-[#FF6B35] text-sm font-bold tracking-wide mb-8">
            CAREER PATHS
          </span>
          
          <h2 className="font-bold text-[#0A0A0A] mb-8">
            Not sure which path is right for you?
          </h2>
          
          <p className="text-[#1A1A1A]/60 max-w-3xl mx-auto text-lg leading-relaxed mb-12">
            Our course is designed to give you skills for both career advancement and entrepreneurship. Many of our students end up doing both!
          </p>
        </div>

        {/* Tracks Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {tracks.map((track, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-3xl p-10 border border-[#E8E8E8] shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                {/* Track Header */}
                <div className="flex items-center gap-6 mb-8">
                  <div className={`w-20 h-20 bg-gradient-to-br ${track.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                    <span className="text-3xl">{track.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0A0A0A] text-2xl mb-2">
                      {track.title}
                    </h3>
                    <p className="text-[#1A1A1A]/50 text-sm font-medium uppercase tracking-wider">
                      {track.subtitle}
                    </p>
                  </div>
                </div>
                
                {/* Track Description */}
                <p className="text-[#1A1A1A]/70 leading-relaxed mb-8 text-lg">
                  {track.description}
                </p>
                
                {/* Benefits List */}
                <div className="space-y-4 mb-8">
                  {track.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center bg-[#FF6B35]/10 rounded-full mt-1">
                        <span className="text-[#FF6B35] text-sm">✓</span>
                      </div>
                      <span className="text-[#1A1A1A]/80 font-medium leading-relaxed">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
                
                {/* CTA Button */}
                <div className="pt-6 border-t border-[#E8E8E8]">
                  <a
                    href="#"
                    className="inline-block w-full px-8 py-4 rounded-2xl bg-[#0A0A0A] text-white font-bold text-center hover:bg-[#FF6B35] transition-colors duration-300"
                  >
                    Start Your Journey →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center bg-gradient-to-r from-[#F8F9FA] to-[#F0F0F0] rounded-3xl p-12 border border-[#E8E8E8]">
          <h3 className="font-bold text-[#0A0A0A] text-2xl mb-6">
            Students working with top companies like
          </h3>
          
          {/* Company Logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center mb-8">
            {companies.map((company, index) => (
              <div key={index} className="flex items-center justify-center">
                <div className="bg-white rounded-2xl p-6 border border-[#E8E8E8] shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="text-3xl">{company.icon}</div>
                  <div className="text-sm font-medium text-[#1A1A1A]/60 mt-2">
                    {company.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-[#1A1A1A]/60 text-lg">
            Join the next generation of AI-powered marketers
          </p>
        </div>
      </div>
    </section>
  );
} 