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
    <section className="relative w-full py-24 bg-white">
      <div className="container mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-6 py-3 rounded-full bg-[#FF6B35]/10 text-[#FF6B35] text-sm font-bold tracking-wide mb-8">
            AI TOOLS & PLATFORMS
          </span>
          
          <h2 className="font-bold text-[#0A0A0A] mb-8">
            Master the <span className="text-[#FF6B35]">AI Marketing Stack</span>
          </h2>
          
          <p className="text-[#1A1A1A]/60 max-w-3xl mx-auto text-lg leading-relaxed">
            Learn to use the most powerful AI tools for marketing automation, content creation, and campaign optimization.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-16">
          {tools.map((tool, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-3xl p-6 border border-[#E8E8E8] shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col items-center text-center">
                {/* Tool Icon */}
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#FF6B35]/10 to-[#FF6B35]/20 rounded-2xl mb-4 group-hover:scale-105 transition-transform duration-300">
                  <span className="text-2xl">{tool.icon}</span>
                </div>
                
                {/* Tool Info */}
                <div className="space-y-2">
                  <h3 className="font-bold text-[#0A0A0A] text-lg">
                    {tool.name}
                  </h3>
                  <p className="text-[#1A1A1A]/50 text-sm font-medium uppercase tracking-wider">
                    {tool.category}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-[#F8F9FA] to-[#F0F0F0] rounded-3xl p-12 border border-[#E8E8E8]">
          <h3 className="font-bold text-[#0A0A0A] text-2xl mb-4">
            Ready to Master AI Marketing?
          </h3>
          <p className="text-[#1A1A1A]/60 mb-8 max-w-2xl mx-auto text-lg">
            Join thousands of marketers who&apos;ve transformed their careers with AI
          </p>
          <a
            href="#"
            className="inline-block px-10 py-5 rounded-2xl bg-[#FF6B35] text-white font-bold text-lg hover:bg-[#0A0A0A] transition-colors duration-300"
          >
            Start Learning Today
          </a>
        </div>
      </div>
    </section>
  );
} 