'use client';
import React from 'react';

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
  return (
    <section className="relative w-full py-20 bg-white">
      <div className="container mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF6B35]/10 text-[#FF6B35] text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-[#FF6B35] rounded-full"></span>
            WHO&apos;S TEACHING
          </span>
          
          <h2 className="font-bold text-[#0A0A0A] mb-6">
            Learn from{' '}
            <span className="text-[#FF6B35]">Marketing AI Experts</span>
          </h2>
          
          <p className="text-[#1A1A1A]/70 max-w-3xl mx-auto">
            Get mentored by industry leaders who&apos;ve built and scaled AI marketing systems
          </p>
        </div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {mentors.map((mentor, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 border border-[#E8E8E8] hover:border-[#FF6B35]/30 transition-colors duration-300"
            >
              {/* Photo */}
              <div className="relative mb-6">
                <div className={`w-full h-48 rounded-xl bg-gradient-to-br ${mentor.color} flex items-center justify-center relative`}>
                  {/* Avatar */}
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-white/30">
                    <span className="text-white text-2xl font-bold">
                      {mentor.role}
                    </span>
                  </div>
                </div>
                
                {/* Status indicator */}
                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-[#FF6B35] rounded-full border-4 border-white flex items-center justify-center">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                </div>
              </div>
              
              {/* Content */}
              <div>
                {/* Name & Title */}
                <h3 className="font-bold mb-2 text-[#0A0A0A]">
                  {mentor.name}
                </h3>
                
                <p className="text-[#FF6B35] text-sm font-semibold mb-4">
                  {mentor.title}
                </p>
                
                {/* Description */}
                <p className="text-[#1A1A1A]/70 text-sm leading-relaxed mb-6">
                  {mentor.description}
                </p>
                
                {/* Stats */}
                <div className="space-y-3 mb-6">
                  {Object.entries(mentor.stats).map(([key, value]) => (
                    <div
                      key={key}
                      className="flex items-center justify-between p-3 bg-[#F8F9FA] rounded-lg border border-[#E8E8E8]"
                    >
                      <span className="text-xs font-medium text-[#1A1A1A]/60 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                      <span className="text-sm font-bold text-[#FF6B35]">{value}</span>
                    </div>
                  ))}
                </div>
                
                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-2">
                  {mentor.expertise.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-white border border-[#E8E8E8] text-[#1A1A1A] rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-[#1A1A1A]/70 mb-8">
            Ready to learn from the best in the industry?
          </p>
          
          <a
            href="#"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#FF6B35] text-white rounded-xl font-bold hover:bg-[#FF6B35]/90 transition-colors duration-300"
          >
            <span>Join Waitlist</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
} 