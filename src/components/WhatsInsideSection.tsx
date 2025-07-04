'use client';
import React from 'react';

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



export default function WhatsInsideSection() {
  return (
    <section className="relative w-full py-24 bg-white">
      <div className="container mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-6 py-3 rounded-full bg-[#FF6B35]/10 text-[#FF6B35] text-sm font-bold tracking-wide mb-8">
            WHAT&apos;S INSIDE
          </span>
          
          <h2 className="font-bold text-[#0A0A0A] mb-8">
            Everything you need to <span className="text-[#FF6B35]">succeed</span>
          </h2>
          
          <p className="text-[#1A1A1A]/60 max-w-3xl mx-auto text-lg leading-relaxed">
            A comprehensive program designed to take you from beginner to AI marketing expert
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-3xl p-8 border border-[#E8E8E8] shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                {/* Feature Icon */}
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#FF6B35]/10 to-[#FF6B35]/20 rounded-2xl mb-6 group-hover:scale-105 transition-transform duration-300">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                
                {/* Feature Content */}
                <div className="space-y-4">
                  <h3 className="font-bold text-[#0A0A0A] text-xl text-center">
                    {feature.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="bg-gradient-to-r from-[#F8F9FA] to-[#F0F0F0] rounded-3xl p-12 border border-[#E8E8E8]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#FF6B35] mb-2">
                4
              </div>
              <div className="text-[#1A1A1A]/60 font-medium">
                Weeks of Intensive Training
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#FF6B35] mb-2">
                $10,000+
              </div>
              <div className="text-[#1A1A1A]/60 font-medium">
                Total Value Included
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#FF6B35] mb-2">
                100%
              </div>
              <div className="text-[#1A1A1A]/60 font-medium">
                Practical, Hands-on Learning
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 