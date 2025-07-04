'use client';
import React from 'react';

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
    <section className="relative w-full py-24 bg-[#F8F9FA]">
      <div className="container mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-6 py-3 rounded-full bg-[#FF6B35]/10 text-[#FF6B35] text-sm font-bold tracking-wide mb-8">
            WHO&apos;S THIS FOR
          </span>
          
          <h2 className="font-bold text-[#0A0A0A] mb-8">
            Perfect for <span className="text-[#FF6B35]">ambitious marketers</span>
          </h2>
          
          <p className="text-[#1A1A1A]/60 max-w-3xl mx-auto text-lg leading-relaxed">
            Whether you&apos;re looking to advance your marketing career or build the next big AI marketing product
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {targetAudience.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-3xl p-8 border border-[#E8E8E8] shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                {/* Feature Icon */}
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#FF6B35]/10 to-[#FF6B35]/20 rounded-2xl mb-6 group-hover:scale-105 transition-transform duration-300">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                
                {/* Feature Content */}
                <div className="space-y-4">
                  <h3 className="font-bold text-[#0A0A0A] text-xl">
                    {feature.title}
                  </h3>
                  
                  <p className="text-[#1A1A1A]/70 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Points */}
                  <div className="space-y-3 pt-4">
                    {feature.points.map((point, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center bg-[#FF6B35]/10 rounded-full mt-1">
                          <span className="text-[#FF6B35] text-xs">✓</span>
                        </div>
                        <span className="text-[#1A1A1A]/80 text-sm font-medium leading-relaxed">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-white to-[#F8F9FA] rounded-3xl p-12 border border-[#E8E8E8]">
          <h3 className="font-bold text-[#0A0A0A] text-2xl mb-4">
            Ready to Transform Your Marketing Career?
          </h3>
          <p className="text-[#1A1A1A]/60 mb-8 max-w-2xl mx-auto text-lg">
            Join thousands of marketers who are already using AI to 10x their results
          </p>
          <a
            href="#"
            className="inline-block px-10 py-5 rounded-2xl bg-[#FF6B35] text-white font-bold text-lg hover:bg-[#0A0A0A] transition-colors duration-300"
          >
            Start Your Journey Today
          </a>
        </div>
      </div>
    </section>
  );
} 