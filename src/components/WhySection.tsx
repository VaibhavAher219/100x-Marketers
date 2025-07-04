'use client';
import React from 'react';

const reasons = [
  {
    icon: '🚀',
    title: 'Career Acceleration',
    description: 'Transform from traditional marketer to AI marketing expert in just 4 weeks',
    stats: '10x faster career growth'
  },
  {
    icon: '💰',
    title: 'Revenue Impact',
    description: 'Build campaigns that generate millions in revenue using cutting-edge AI tools',
    stats: '$2M+ revenue generated'
  },
  {
    icon: '🎯',
    title: 'Industry Recognition',
    description: 'Join the elite 1% of marketers who truly understand and leverage AI',
    stats: '98% placement rate'
  },
  {
    icon: '🔮',
    title: 'Future-Proof Skills',
    description: 'Master the tools and strategies that will dominate marketing for the next decade',
    stats: 'Next-gen expertise'
  }
];

export default function WhySection() {
  return (
    <section className="relative py-32 bg-gradient-to-br from-[#0A0A0A] via-[#1A1A2E] to-[#16213E] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 backdrop-blur-sm mb-8">
            <span className="text-white/90 text-sm font-medium">
              ⚡ Why become an AI Marketing Wizard?
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
            The Future of Marketing
            <br />
            <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              is AI-Powered
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed">
            While others struggle with outdated tactics, you&apos;ll be building campaigns that generate 
            millions in revenue using cutting-edge AI tools and strategies.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-20">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="group animate-fade-in-up"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="relative bg-white/5 rounded-3xl p-8 lg:p-10 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:border-orange-500/30">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-pink-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">{reason.icon}</span>
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl lg:text-3xl font-bold text-white">
                      {reason.title}
                    </h3>
                    
                    <p className="text-white/70 text-lg leading-relaxed">
                      {reason.description}
                    </p>
                    
                    {/* Stats */}
                    <div className="pt-4 border-t border-white/10">
                      <div className="flex items-center justify-between">
                        <span className="text-white/50 text-sm font-medium">
                          Impact
                        </span>
                        <span className="text-orange-400 font-bold text-lg">
                          {reason.stats}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center animate-fade-in-up" style={{animationDelay: '0.8s'}}>
          <div className="relative bg-gradient-to-r from-orange-500/10 to-pink-500/10 rounded-3xl p-12 border border-orange-500/20 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-pink-500/5 rounded-3xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Join the AI Marketing Revolution?
              </h3>
              
              <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
                Don&apos;t get left behind while the industry transforms. Secure your spot in the next cohort.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group relative px-10 py-5 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold text-lg rounded-2xl hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105">
                  <span className="relative z-10">Start Your Transformation</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                
                <button className="px-10 py-5 border border-white/20 text-white font-bold text-lg rounded-2xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                  View Success Stories
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 