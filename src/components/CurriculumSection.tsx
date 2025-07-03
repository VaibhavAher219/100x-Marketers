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
    <section className="relative w-full py-20 sm:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="inline-block px-5 py-2 rounded-full bg-[#FF6B35]/10 text-[#FF6B35] text-sm font-bold tracking-wide mb-6">
            4-WEEK CURRICULUM
          </span>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0A0A0A] mb-6 leading-tight">
            What will you <span className="text-[#FF6B35]">learn?</span>
          </h2>
          
          <div className="space-y-2">
            <p className="text-lg sm:text-xl text-[#1A1A1A]/80 font-semibold">
              Gen AI × Marketing: 4-Week Intensive Course
            </p>
            <p className="text-base sm:text-lg text-[#1A1A1A]/60">
              From Zero to Marketing AI Wizard in 4 weeks
            </p>
          </div>
        </motion.div>

        {/* Curriculum Timeline */}
        <div className="relative">
          {/* Vertical Line for desktop */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-10 bottom-10 w-1 bg-[#E8E8E8] rounded-full"></div>

          {modules.map((module, i) => (
            <div key={module.week} className="relative lg:grid lg:grid-cols-2 lg:gap-16 items-center mb-12">
              <div className={`lg:col-start-${i % 2 === 0 ? 1 : 2} lg:row-start-1`}>
                <motion.div
                  className="bg-white rounded-3xl p-8 shadow-2xl border border-[#E8E8E8] group"
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  whileHover={{ y: -8, scale: 1.02, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)' }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                    <div className="flex-1">
                      <div className="text-xs text-[#1A1A1A]/50 font-medium uppercase tracking-wider mb-2">
                        {module.subtitle}
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-[#0A0A0A] leading-tight group-hover:text-[#FF6B35] transition-colors duration-300">
                        {module.title}
                      </h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-3">
                      <div className="flex items-center gap-2 px-3 py-1 bg-red-100/50 rounded-full border border-red-200">
                        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                        <span className="text-xs font-semibold text-red-600">
                          {module.sessions} LIVE SESSION
                        </span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1 bg-amber-100/50 rounded-full border border-amber-200">
                        <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                        <span className="text-xs font-semibold text-amber-600">
                          {module.assignments} ASSIGNMENT
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {module.lessons.map((lesson, j) => (
                      <div key={j} className="flex items-center gap-3 p-3 bg-[#F8F9FA] rounded-xl border border-[#E8E8E8]">
                        <span className="text-lg">💡</span>
                        <span className="text-sm font-medium text-[#1A1A1A]/80">{lesson}</span>
                      </div>
                    ))}
                    <div className="text-center pt-2">
                      <span className="text-sm font-medium text-[#1A1A1A]/50">+ 3 more topics covered</span>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              <div className="hidden lg:flex justify-center items-center lg:col-start-1 lg:row-start-1" style={{ gridColumn: i % 2 === 0 ? 2 : 1 }}>
                <motion.div
                  className={`relative w-24 h-24 bg-gradient-to-br ${module.color} rounded-full flex items-center justify-center shadow-xl z-10`}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <span className="text-4xl">{module.icon}</span>
                </motion.div>
                <div className="absolute font-black text-8xl text-[#E8E8E8]/50 -translate-y-2 select-none">
                  {module.week}
                </div>
              </div>

              {/* Mobile Week Indicator */}
              <div className="lg:hidden flex items-center gap-4 mt-6">
                  <motion.div
                    className={`relative w-16 h-16 bg-gradient-to-br ${module.color} rounded-full flex items-center justify-center shadow-lg z-10`}
                  >
                    <span className="text-3xl">{module.icon}</span>
                  </motion.div>
                  <div className="text-5xl font-black text-[#1A1A1A]/10 select-none">
                    WEEK {module.week}
                  </div>
              </div>
            </div>
          ))}

          {/* Capstone Project Section */}
          <div className="relative text-center mt-20">
            <motion.div
              className="bg-gradient-to-br from-[#0A0A0A] to-[#1A1A1A] text-white rounded-3xl p-10 lg:p-16 shadow-2xl"
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#FF6B35] mb-4">CAPSTONE PROJECT</h3>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Build a Real AI Marketing Product</h2>
              <p className="text-lg lg:text-xl text-white/70 max-w-3xl mx-auto mb-8">
                Apply everything you've learned to build a fully functional AI-powered marketing campaign or tool from scratch. This project will be the centerpiece of your portfolio.
              </p>
              <motion.a
                href="#"
                className="inline-block px-8 py-4 rounded-xl bg-[#FF6B35] text-white font-bold text-lg hover:bg-white hover:text-[#FF6B35] transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                See Project Examples
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 