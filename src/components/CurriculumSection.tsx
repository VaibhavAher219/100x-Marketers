'use client';
import React from 'react';

const modules = [
  {
    week: 1,
    icon: '🧠',
    title: 'Foundations of Generative AI Marketing',
    subtitle: 'CORE FUNDAMENTALS',
    color: 'from-blue-500 to-indigo-600',
    sessions: '1',
    assignments: '1',
    lessons: [
      'Marketing Shifts Enabled by AI',
      'Marketing Use Cases: Copy, Images, Video, Strategy',
      'The New Marketing Stack: AI Strategist, Prompt Engineer'
    ]
  },
  {
    week: 2,
    icon: '🎨',
    title: 'Creative Automation & Content Generation',
    subtitle: 'AI-POWERED CONTENT TYPES',
    color: 'from-purple-500 to-pink-600',
    sessions: '1',
    assignments: '1',
    lessons: [
      'Creative Bottlenecks in Traditional Marketing',
      'AI-Powered Content Types: Image, Video, Copy, Voice',
      'Building Scalable Content Workflows'
    ]
  },
  {
    week: 3,
    icon: '⚡',
    title: 'AI Agents in Marketing Workflows',
    subtitle: 'AUTOMATION & OPTIMIZATION',
    color: 'from-emerald-500 to-teal-600',
    sessions: '1',
    assignments: '1',
    lessons: [
      'Understanding AI Marketing Agents',
      'Workflow Automation Strategies',
      'Performance Optimization Techniques'
    ]
  },
  {
    week: 4,
    icon: '🚀',
    title: 'Revenue, ROI, and Conversions with Mesha',
    subtitle: 'REVENUE OPTIMIZATION',
    color: 'from-orange-500 to-red-600',
    sessions: '1',
    assignments: '1',
    lessons: [
      'Revenue Attribution Models',
      'Conversion Optimization with AI',
      'ROI Measurement and Scaling'
    ]
  }
];

export default function CurriculumSection() {
  return (
    <section className="relative py-32 bg-gradient-to-br from-[#16213E] via-[#1A1A2E] to-[#0A0A0A] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-24 animate-fade-in">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 backdrop-blur-sm mb-8">
            <span className="text-white/90 text-sm font-medium">
              📚 4-WEEK CURRICULUM
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
            What will you <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">learn?</span>
          </h2>
          
          <div className="space-y-4 mb-12">
            <p className="text-2xl md:text-3xl text-white/90 font-bold">
              Gen AI × Marketing: 4-Week Intensive Course
            </p>
            <p className="text-xl md:text-2xl text-white/60">
              From Zero to Marketing AI Wizard in 4 weeks
            </p>
          </div>
        </div>

        {/* Curriculum Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {modules.map((module, index) => (
            <div 
              key={module.week} 
              className="relative mb-24 last:mb-0 animate-fade-in-up"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              
              {/* Week Header */}
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 mb-10">
                <div className={`w-24 h-24 bg-gradient-to-br ${module.color} rounded-3xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-4xl">{module.icon}</span>
                </div>
                <div className="flex-1">
                  <div className="text-sm text-white/50 font-bold uppercase tracking-widest mb-3">
                    WEEK {module.week} • {module.subtitle}
                  </div>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                    {module.title}
                  </h3>
                </div>
              </div>

              {/* Module Content */}
              <div className="relative bg-white/5 rounded-3xl p-10 lg:p-12 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 ml-0 lg:ml-16">
                
                {/* Session Info */}
                <div className="flex flex-wrap gap-6 mb-10">
                  <div className="flex items-center gap-4 px-6 py-3 bg-red-500/20 rounded-full border border-red-500/30 backdrop-blur-sm">
                    <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-bold text-red-200">
                      {module.sessions} LIVE SESSION
                    </span>
                  </div>
                  <div className="flex items-center gap-4 px-6 py-3 bg-amber-500/20 rounded-full border border-amber-500/30 backdrop-blur-sm">
                    <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-bold text-amber-200">
                      {module.assignments} ASSIGNMENT
                    </span>
                  </div>
                </div>
                
                {/* Lessons */}
                <div className="space-y-6">
                  {module.lessons.map((lesson, j) => (
                    <div key={j} className="flex items-start gap-6 p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                      <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-gradient-to-r from-orange-500/20 to-pink-500/20 rounded-xl border border-orange-500/30">
                        <span className="text-xl">💡</span>
                      </div>
                      <span className="text-lg font-medium text-white/90 leading-relaxed pt-2">{lesson}</span>
                    </div>
                  ))}
                  <div className="text-center pt-8">
                    <span className="text-lg text-white/50 font-medium">+ 3 more topics covered</span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Capstone Project Section */}
          <div className="relative text-center mt-32 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            <div className="relative bg-gradient-to-br from-[#0A0A0A] to-[#1A1A1A] text-white rounded-3xl p-16 lg:p-20 shadow-2xl border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-pink-500/5 rounded-3xl"></div>
              
              <div className="relative z-10">
                <h3 className="text-sm font-bold uppercase tracking-widest text-orange-400 mb-8">CAPSTONE PROJECT</h3>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10 text-white">Build a Real AI Marketing Product</h2>
                <p className="text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed text-xl">
                  Apply everything you&apos;ve learned to build a fully functional AI-powered marketing campaign or tool from scratch. This project will be the centerpiece of your portfolio.
                </p>
                <button className="group relative px-12 py-6 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold text-xl rounded-2xl hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105">
                  <span className="relative z-10">See Project Examples</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 