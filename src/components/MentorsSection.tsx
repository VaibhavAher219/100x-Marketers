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
    <section className="relative w-full py-24 bg-[#F8F9FA]">
      <div className="container mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-6 py-3 rounded-full bg-[#FF6B35]/10 text-[#FF6B35] text-sm font-bold tracking-wide mb-8">
            EXPERT MENTORS
          </span>
          
          <h2 className="font-bold text-[#0A0A0A] mb-8">
            Learn from <span className="text-[#FF6B35]">Industry Leaders</span>
          </h2>
          
          <p className="text-[#1A1A1A]/60 max-w-3xl mx-auto text-lg leading-relaxed">
            Get guidance from marketing experts who have built successful AI-powered campaigns for top brands.
          </p>
        </div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {mentors.map((mentor, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-3xl p-8 border border-[#E8E8E8] shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                {/* Mentor Avatar */}
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#FF6B35]/10 to-[#FF6B35]/20 rounded-2xl mb-6 group-hover:scale-105 transition-transform duration-300">
                  <span className="text-xl font-bold text-[#FF6B35]">{mentor.role}</span>
                </div>
                
                {/* Mentor Info */}
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-[#0A0A0A] text-xl mb-2">
                      {mentor.name}
                    </h3>
                    <p className="text-[#1A1A1A]/50 text-sm font-medium">
                      {mentor.title}
                    </p>
                  </div>
                  
                  <p className="text-[#1A1A1A]/70 leading-relaxed">
                    {mentor.description}
                  </p>
                  
                  {/* Experience */}
                  <div className="pt-4 border-t border-[#E8E8E8]">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[#FF6B35] text-sm">⚡</span>
                      <span className="text-[#1A1A1A]/60 text-sm font-medium">
                        {mentor.stats.experience}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {mentor.expertise.map((skill, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1 bg-[#F8F9FA] text-[#1A1A1A]/60 text-sm rounded-full border border-[#E8E8E8]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-white to-[#F8F9FA] rounded-3xl p-12 border border-[#E8E8E8]">
          <h3 className="font-bold text-[#0A0A0A] text-2xl mb-4">
            Get Personal Mentorship
          </h3>
          <p className="text-[#1A1A1A]/60 mb-8 max-w-2xl mx-auto text-lg">
            Work directly with industry experts who will guide your AI marketing journey
          </p>
          <a
            href="#"
            className="inline-block px-10 py-5 rounded-2xl bg-[#FF6B35] text-white font-bold text-lg hover:bg-[#0A0A0A] transition-colors duration-300"
          >
            Meet Your Mentors
          </a>
        </div>
      </div>
    </section>
  );
} 