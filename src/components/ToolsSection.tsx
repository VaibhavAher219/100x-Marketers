'use client';
import React from 'react';

const tools = [
  { name: 'ChatGPT', icon: '💬', category: 'AI Chat' },
  { name: 'Jasper', icon: '✍️', category: 'Content' },
  { name: 'Midjourney', icon: '🎨', category: 'Images' },
  { name: 'Runway', icon: '🎬', category: 'Video' },
  { name: 'HeyGen', icon: '👤', category: 'Avatar' },
  { name: 'ElevenLabs', icon: '🎵', category: 'Voice' },
  { name: 'Synthesia', icon: '📹', category: 'Video AI' },
  { name: 'AdCreative.ai', icon: '📊', category: 'Ads' },
  { name: 'Pika', icon: '⚡', category: 'Quick AI' },
  { name: 'Mesha', icon: '🚀', category: 'Platform' }
];

export default function ToolsSection() {
  return (
    <section className="relative w-full py-20 bg-[#F8F9FA]">
      <div className="container mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-5 py-2 rounded-full bg-[#FF6B35]/10 text-[#FF6B35] text-sm font-bold tracking-wide mb-6">
            AI MARKETING STACK
          </span>
          
          <h2 className="font-bold text-[#0A0A0A] mb-6">
            What will you <span className="text-[#FF6B35]">master?</span>
          </h2>
          
          <p className="text-[#1A1A1A]/70 max-w-3xl mx-auto">
            Master the most powerful AI tools transforming modern marketing from day one.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 mb-16">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="bg-white rounded-2xl p-6 border border-[#E8E8E8] hover:border-[#FF6B35]/30 transition-colors duration-300 flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-xl bg-[#0A0A0A] group-hover:bg-[#FF6B35] transition-colors duration-300 flex items-center justify-center mb-4">
                <span className="text-2xl">
                  {tool.icon}
                </span>
              </div>
              
              <h3 className="font-bold text-[#0A0A0A] mb-1">
                {tool.name}
              </h3>
              
              <span className="text-sm text-[#1A1A1A]/60">
                {tool.category}
              </span>
            </div>
          ))}
        </div>
        
        {/* Bottom Section */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-10 border border-[#E8E8E8] max-w-4xl mx-auto">
            <h3 className="font-bold mb-4 text-[#0A0A0A]">
              From Content Creation to <span className="text-[#FF6B35]">Revenue Generation</span>
            </h3>
            <p className="text-[#1A1A1A]/70 max-w-2xl mx-auto mb-8">
              Learn to use AI tools for copywriting, image generation, video creation, 
              voice synthesis, and complete marketing automation workflows.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { icon: '✍️', text: 'AI Writing' },
                { icon: '🎨', text: 'Visual Content' },
                { icon: '🎬', text: 'Video Creation' },
                { icon: '🚀', text: 'Automation' }
              ].map((feature) => (
                <div
                  key={feature.text}
                  className="flex flex-col items-center gap-3 p-4 bg-[#F8F9FA] rounded-xl border border-[#E8E8E8]"
                >
                  <span className="text-2xl">{feature.icon}</span>
                  <span className="text-sm font-semibold text-[#1A1A1A]">{feature.text}</span>
                </div>
              ))}
            </div>
            
            <a
              href="#"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#0A0A0A] text-white rounded-xl font-bold hover:bg-[#FF6B35] transition-colors duration-300"
            >
              <span>Explore The Curriculum</span>
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
      </div>
    </section>
  );
} 