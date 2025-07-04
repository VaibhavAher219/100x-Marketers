'use client';
import React from 'react';

const projects = [
  {
    name: 'AI Ad Generator',
    description: 'Generate high-converting ads in seconds using advanced AI algorithms',
    subtitle: 'Automated creative generation',
    color: 'bg-gradient-to-br from-blue-500 to-indigo-600',
    icon: '🚀',
    category: 'Creative'
  },
  {
    name: 'Voice Clone Marketing',
    description: 'Create personalized voice messages at scale for your campaigns',
    subtitle: 'AI voice synthesis for campaigns',
    color: 'bg-gradient-to-br from-purple-500 to-pink-600',
    icon: '🎵',
    category: 'Voice AI'
  },
  {
    name: 'Smart Email Campaigns',
    description: 'Build AI-powered email sequences that automatically convert',
    subtitle: 'Intelligent email automation',
    color: 'bg-gradient-to-br from-emerald-500 to-teal-600',
    icon: '📧',
    category: 'Automation'
  },
  {
    name: 'Video UGC Generator',
    description: 'Create authentic user-generated video content with AI',
    subtitle: 'AI video creation platform',
    color: 'bg-gradient-to-br from-orange-500 to-red-600',
    icon: '🎬',
    category: 'Video AI'
  }
];

export default function CreationsSection() {
  return (
    <section className="relative w-full py-24 bg-[#F8F9FA]">
      <div className="container mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-6 py-3 rounded-full bg-[#FF6B35]/10 text-[#FF6B35] text-sm font-bold tracking-wide mb-8">
            STUDENT PROJECTS
          </span>
          
          <h2 className="font-bold text-[#0A0A0A] mb-8">
            From Content Creation to <span className="text-[#FF6B35]">Revenue Generation</span>
          </h2>
          
          <p className="text-[#1A1A1A]/60 max-w-3xl mx-auto text-lg leading-relaxed">
            See what our students have built using AI tools for copywriting, image generation, video creation, voice synthesis, and complete marketing automation workflows.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-3xl overflow-hidden border border-[#E8E8E8] shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-[#FF6B35]/10 to-[#FF6B35]/20 flex items-center justify-center">
                  <span className="text-6xl opacity-50">{project.icon}</span>
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
                
                {/* Project Content */}
                <div className="p-8">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-bold text-[#0A0A0A] text-xl mb-2">
                        {project.name}
                      </h3>
                      <p className="text-[#1A1A1A]/50 text-sm font-medium uppercase tracking-wider">
                        {project.category}
                      </p>
                    </div>
                    
                    <p className="text-[#1A1A1A]/70 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Project Details */}
                    <div className="pt-4 border-t border-[#E8E8E8]">
                      <p className="text-[#1A1A1A]/60 text-sm font-medium">
                        {project.subtitle}
                      </p>
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
            Ready to Build Your Own AI Marketing Projects?
          </h3>
          <p className="text-[#1A1A1A]/60 mb-8 max-w-2xl mx-auto text-lg">
            Join our program and create portfolio-worthy projects that will set you apart in the AI marketing space
          </p>
          <a
            href="#"
            className="inline-block px-10 py-5 rounded-2xl bg-[#FF6B35] text-white font-bold text-lg hover:bg-[#0A0A0A] transition-colors duration-300"
          >
            Start Building Today
          </a>
        </div>
      </div>
    </section>
  );
} 