'use client';
import React from 'react';

const projects = [
  {
    name: 'AI Ad Generator',
    description: 'Generate high-converting ads in seconds using advanced AI algorithms',
    subtitle: 'Automated creative generation',
    color: 'from-blue-500 to-indigo-600',
    icon: '🚀',
    category: 'Creative'
  },
  {
    name: 'Voice Clone Marketing',
    description: 'Create personalized voice messages at scale for your campaigns',
    subtitle: 'AI voice synthesis for campaigns',
    color: 'from-purple-500 to-pink-600',
    icon: '🎵',
    category: 'Voice AI'
  },
  {
    name: 'Smart Email Campaigns',
    description: 'Build AI-powered email sequences that automatically convert',
    subtitle: 'Intelligent email automation',
    color: 'from-emerald-500 to-teal-600',
    icon: '📧',
    category: 'Automation'
  },
  {
    name: 'Video UGC Generator',
    description: 'Create authentic user-generated video content with AI',
    subtitle: 'AI video creation platform',
    color: 'from-orange-500 to-red-600',
    icon: '🎬',
    category: 'Video AI'
  }
];

export default function CreationsSection() {
  return (
    <section className="relative py-32 bg-gradient-to-br from-[#0A0A0A] via-[#1A1A2E] to-[#16213E] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-24 animate-fade-in">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-orange-500/20 to-pink-500/20 border border-orange-500/30 backdrop-blur-sm mb-8">
            <span className="text-white/90 text-sm font-medium">
              🎨 STUDENT PROJECTS
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
            From Content Creation to <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">Revenue Generation</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed">
            See what our students have built using AI tools for copywriting, image generation, video creation, 
            voice synthesis, and complete marketing automation workflows.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group animate-fade-in-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="relative bg-white/5 rounded-3xl overflow-hidden border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:border-orange-500/30 h-full">
                {/* Project Image */}
                <div className={`relative h-48 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <span className="relative z-10 text-6xl opacity-80">{project.icon}</span>
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                    <span className="text-white text-xs font-bold">{project.category}</span>
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="p-6 lg:p-8">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
                        {project.name}
                      </h3>
                      <p className="text-white/50 text-sm font-medium">
                        {project.subtitle}
                      </p>
                    </div>
                    
                    <p className="text-white/70 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <div className="relative bg-gradient-to-r from-orange-500/10 to-pink-500/10 rounded-3xl p-12 border border-orange-500/20 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-pink-500/5 rounded-3xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Build Your Own AI Marketing Projects?
              </h3>
              
              <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
                Join our program and create portfolio-worthy projects that will set you apart in the AI marketing space
              </p>
              
              <button className="group relative px-10 py-5 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold text-lg rounded-2xl hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105">
                <span className="relative z-10">Start Building Today</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 