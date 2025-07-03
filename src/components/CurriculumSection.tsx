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
      'Tools Landscape Overview: ChatGPT, Jasper, Midjourney, Synthesia',
      'Prompt Engineering Basics for Marketers'
    ],
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    textColor: 'text-blue-600',
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
      'Case Studies: DTC Brands Using AI Creatives',
      'Creative Fatigue & Iteration Speed',
      'Prompting for Visual + Video Generation'
    ],
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    textColor: 'text-purple-600',
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
      'Example Workflow: UGC Ad Testing Loop',
      'How Agents Learn: Feedback & Performance Loops'
    ],
    color: 'from-emerald-500 to-emerald-600',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    textColor: 'text-emerald-600',
    icon: '🤖'
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
      'ROAS Optimization via AI',
      'AEO (AI Engine Optimization): Getting Found on AI Tools'
    ],
    color: 'from-[#FF6B35] to-orange-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
    textColor: 'text-[#FF6B35]',
    icon: '💰'
  }
];

export default function CurriculumSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  };

  const moduleVariants = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#F8F9FA] to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E8E8E8] text-[#1A1A1A]/60 text-sm font-medium mb-6 shadow-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="w-2 h-2 bg-[#FF6B35] rounded-full animate-pulse"></span>
            CURRICULUM
          </motion.span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A0A0A] mb-6 leading-tight">
            What will you{' '}
            <span className="text-[#FF6B35] relative">
              learn?
              <motion.div
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#FF6B35] to-[#FF6B35]/60 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </span>
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
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line - Hidden on mobile, visible on desktop */}
          <div className="hidden lg:block absolute left-12 top-16 bottom-0 w-0.5 bg-gradient-to-b from-[#FF6B35] via-[#FF6B35]/50 to-transparent"></div>
          
          <motion.div
            className="space-y-8 sm:space-y-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {modules.map((module, i) => (
              <motion.div
                key={i}
                className="relative"
                variants={moduleVariants}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8">
                  
                  {/* Week Indicator */}
                  <div className="flex lg:flex-col items-center lg:items-center gap-4 lg:gap-2 mb-4 lg:mb-0 lg:w-24 lg:flex-shrink-0">
                    <motion.div
                      className={`relative w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br ${module.color} rounded-2xl flex items-center justify-center shadow-lg z-10`}
                      whileHover={{ 
                        scale: 1.1, 
                        rotate: [0, -10, 10, 0],
                        boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.25)"
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className="text-2xl lg:text-3xl">{module.icon}</span>
                      <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                    
                    <div className="lg:text-center">
                      <div className="text-sm font-bold text-[#1A1A1A] lg:text-xs lg:text-[#1A1A1A]/60">
                        WEEK {module.week}
                      </div>
                    </div>
                  </div>
                  
                  {/* Content Card */}
                  <motion.div 
                    className="flex-1 bg-white rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#E8E8E8] group"
                    whileHover={{ y: -8 }}
                  >
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                      <div className="flex-1">
                        <div className="text-xs text-[#1A1A1A]/50 font-medium uppercase tracking-wider mb-2">
                          {module.subtitle}
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-[#0A0A0A] leading-tight group-hover:text-[#FF6B35] transition-colors duration-300">
                          {module.title}
                        </h3>
                      </div>
                      
                      {/* Stats */}
                      <div className="flex flex-wrap gap-3 sm:gap-4">
                        <motion.div 
                          className="flex items-center gap-2 px-3 py-1 bg-red-50 rounded-full border border-red-200"
                          whileHover={{ scale: 1.05 }}
                        >
                          <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                          <span className="text-xs font-medium text-red-600">
                            {module.sessions} LIVE SESSION
                          </span>
                        </motion.div>
                        <motion.div 
                          className="flex items-center gap-2 px-3 py-1 bg-amber-50 rounded-full border border-amber-200"
                          whileHover={{ scale: 1.05 }}
                        >
                          <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                          <span className="text-xs font-medium text-amber-600">
                            {module.assignments} ASSIGNMENT
                          </span>
                        </motion.div>
                      </div>
                    </div>
                    
                    {/* Lessons Grid */}
                    <div className="space-y-3 mb-6">
                      {module.lessons.slice(0, 4).map((lesson, j) => (
                        <motion.div 
                          key={j} 
                          className="flex items-start gap-3 p-3 bg-[#F8F9FA] rounded-xl border border-[#E8E8E8] hover:border-[#FF6B35]/30 transition-colors duration-300"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: j * 0.1, duration: 0.5 }}
                          whileHover={{ scale: 1.02 }}
                        >
                          <div className={`w-8 h-8 ${module.bgColor} ${module.borderColor} border rounded-full flex items-center justify-center flex-shrink-0`}>
                            <span className="text-sm">📚</span>
                          </div>
                          <span className="text-sm sm:text-base text-[#1A1A1A]/80 leading-relaxed">
                            {lesson}
                          </span>
                        </motion.div>
                      ))}
                      
                      {module.lessons.length > 4 && (
                        <motion.div 
                          className="text-center py-3"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                        >
                          <span className="text-sm text-[#1A1A1A]/50 font-medium">
                            +{module.lessons.length - 4} more topics covered
                          </span>
                        </motion.div>
                      )}
                    </div>
                    
                    {/* Capstone Project for Week 4 */}
                    {module.week === 4 && (
                      <motion.div 
                        className="p-6 bg-gradient-to-br from-[#FF6B35]/10 to-orange-50 rounded-2xl border border-[#FF6B35]/20"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="flex items-start gap-3 mb-3">
                          <span className="text-2xl">🏆</span>
                          <h4 className="font-bold text-[#FF6B35] text-lg">
                            Capstone Project
                          </h4>
                        </div>
                        <p className="text-[#1A1A1A]/80 text-sm sm:text-base leading-relaxed">
                          Deliver a complete AI-powered marketing campaign with creative generation, 
                          agent design, AEO optimization, and launch via Mesha platform.
                        </p>
                      </motion.div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.button
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl border-2 border-[#E8E8E8] text-[#1A1A1A] hover:border-[#FF6B35] hover:text-[#FF6B35] transition-all duration-300 bg-white shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="font-semibold">View Full Curriculum</span>
            <motion.svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </motion.svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
} 