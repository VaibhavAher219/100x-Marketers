'use client';
import React from 'react';
import { motion } from 'framer-motion';

const modules = [
  { 
    week: 1, 
    title: 'Foundations of Generative AI in Marketing', 
    subtitle: 'WHAT IS GENERATIVE AI?',
    sessions: 1, 
    assignments: 1,
    lessons: [
      'What is Generative AI?',
      'Key Concepts: LLMs, Transformers, Diffusion Models',
      'Marketing Shifts Enabled by AI',
      'Marketing Use Cases: Copy, Images, Video, Strategy',
      'The New Marketing Stack: AI Strategist, Prompt Engineer',
    ],
    color: 'from-blue-500 to-sky-500',
    icon: '🤖'
  },
  { 
    week: 2, 
    title: 'Creative Automation & Content Generation', 
    subtitle: 'AI-POWERED CONTENT TYPES',
    sessions: 1, 
    assignments: 1,
    lessons: [
      'Creative Bottlenecks in Traditional Marketing',
      'AI-Powered Content Types: Image, Video, Copy, Voice',
      'UGC Generation & Use Cases',
      'Best Tools: Runway, Pika, ElevenLabs, HeyGen, AdCreative.ai',
      'Prompting for Visual + Video Generation'
    ],
    color: 'from-purple-500 to-fuchsia-500',
    icon: '🎨'
  },
  { 
    week: 3, 
    title: 'AI Agents in Marketing Workflows', 
    subtitle: 'WHAT IS AN AI AGENT?',
    sessions: 1, 
    assignments: 1,
    lessons: [
      'What is an AI Agent? (vs. tools, vs. workflows)',
      'Popular Frameworks: LangChain, AutoGPT, CrewAI',
      'Agent Use Cases: Lead Nurturing, Ad Scaling, Follow-Up',
      'Anatomy of a Marketing Agent (input, memory, tools, output)',
      'Agent Playbooks (e.g., Post-Engagement Retargeting)',
    ],
    color: 'from-emerald-500 to-green-500',
    icon: '⚙️'
  },
  { 
    week: 4, 
    title: 'Revenue, AEO, and Conversions with Mesha', 
    subtitle: 'LAUNCH WITH MESHA',
    sessions: 1, 
    assignments: 1,
    lessons: [
      'What is Mesha? Overview of the Platform',
      'Core Products: Ad Agent, Marcus (Billing), Max (Close)',
      'Case Studies: SaaS, Agencies, DTC Brands',
      'Mesha&apos;s Workflow: Brief to Campaign to Revenue',
      'UGC Automation + Message-Matched Landing Pages',
    ],
    color: 'from-amber-500 to-orange-500',
    icon: '💰'
  }
];

export default function CurriculumSection() {
  return (
    <section className="relative w-full py-20 bg-white">
      <div className="container mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-5 py-2 rounded-full bg-[#FF6B35]/10 text-[#FF6B35] text-sm font-bold tracking-wide mb-6">
            4-WEEK CURRICULUM
          </span>
          
          <h2 className="font-bold text-[#0A0A0A] mb-6">
            What will you <span className="text-[#FF6B35]">learn?</span>
          </h2>
          
          <div className="space-y-3 mb-8">
            <p className="text-[#1A1A1A]/80 font-semibold">
              Gen AI × Marketing: 4-Week Intensive Course
            </p>
            <p className="text-[#1A1A1A]/60">
              From Zero to Marketing AI Wizard in 4 weeks
            </p>
          </div>
        </div>

        {/* Curriculum Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {modules.map((module, i) => (
            <div key={module.week} className="relative mb-12 last:mb-0">
              
              {/* Week Header */}
              <div className="flex items-center gap-6 mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${module.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                  <span className="text-2xl">{module.icon}</span>
                </div>
                <div>
                  <div className="text-xs text-[#1A1A1A]/50 font-medium uppercase tracking-wider mb-1">
                    WEEK {module.week} • {module.subtitle}
                  </div>
                  <h3 className="font-bold text-[#0A0A0A] leading-tight">
                    {module.title}
                  </h3>
                </div>
              </div>

              {/* Module Content */}
              <div className="bg-white rounded-2xl p-8 border border-[#E8E8E8] shadow-sm">
                
                {/* Session Info */}
                <div className="flex flex-wrap gap-3 mb-6">
                  <div className="flex items-center gap-2 px-3 py-1 bg-red-50 rounded-full border border-red-200">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    <span className="text-xs font-semibold text-red-600">
                      {module.sessions} LIVE SESSION
                    </span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 bg-amber-50 rounded-full border border-amber-200">
                    <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                    <span className="text-xs font-semibold text-amber-600">
                      {module.assignments} ASSIGNMENT
                    </span>
                  </div>
                </div>
                
                {/* Lessons */}
                <div className="space-y-3">
                  {module.lessons.map((lesson, j) => (
                    <div key={j} className="flex items-start gap-4 p-4 bg-[#F8F9FA] rounded-xl">
                      <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-white rounded-lg border border-[#E8E8E8]">
                        <span className="text-sm">💡</span>
                      </div>
                      <span className="text-sm font-medium text-[#1A1A1A]/80 leading-relaxed">{lesson}</span>
                    </div>
                  ))}
                  <div className="text-center pt-4">
                    <span className="text-sm text-[#1A1A1A]/50">+ 3 more topics covered</span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Capstone Project Section */}
          <div className="relative text-center mt-16">
            <div className="bg-gradient-to-br from-[#0A0A0A] to-[#1A1A1A] text-white rounded-2xl p-12 shadow-lg">
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#FF6B35] mb-4">CAPSTONE PROJECT</h3>
              <h2 className="font-bold mb-6 text-white">Build a Real AI Marketing Product</h2>
              <p className="text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
                Apply everything you've learned to build a fully functional AI-powered marketing campaign or tool from scratch. This project will be the centerpiece of your portfolio.
              </p>
              <a
                href="#"
                className="inline-block px-8 py-4 rounded-xl bg-[#FF6B35] text-white font-bold hover:bg-white hover:text-[#FF6B35] transition-colors duration-300"
              >
                See Project Examples
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 