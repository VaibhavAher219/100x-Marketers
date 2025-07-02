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
    color: 'bg-blue-500',
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
    color: 'bg-purple-500',
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
    color: 'bg-green-500',
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
    color: 'bg-orange-500',
    icon: '💰'
  }
];

export default function CurriculumSection() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-5xl mx-auto px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gray-100 text-gray-500 text-sm font-mono tracking-wide mb-6">
            CURRICULUM
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            What will you <span className="text-[#FF5A1F]">learn?</span>
          </h2>
          <p className="text-xl text-gray-600 font-mono">
            Gen AI x Marketing: 4-Week Intensive Course
          </p>
          <p className="text-lg text-gray-500 font-mono mt-2">
            From Zero to Marketing AI Wizard in 4 weeks.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>
          
          <div className="space-y-8">
            {modules.map((module, i) => (
              <motion.div
                key={i}
                className="relative flex items-start gap-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                {/* Week indicator */}
                <div className="flex flex-col items-center">
                  <motion.div
                    className={`flex-shrink-0 w-16 h-16 ${module.color} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg z-10`}
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="text-2xl">{module.icon}</span>
                  </motion.div>
                </div>
                
                {/* Content */}
                <motion.div 
                  className="flex-1 bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                  whileHover={{ y: -2, scale: 1.01 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="text-xs text-gray-500 font-mono mb-1">
                        WEEK {module.week}
                      </div>
                      <div className="text-xs text-gray-400 font-mono mb-2">
                        {module.subtitle}
                      </div>
                      <h3 className="text-xl font-bold text-black mb-2">
                        {module.title}
                      </h3>
                    </div>
                    
                    {/* Stats */}
                    <div className="flex items-center gap-4 text-sm">
                      <span className="flex items-center gap-1 text-red-500">
                        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                        {module.sessions} LIVE SESSION
                      </span>
                      <span className="flex items-center gap-1 text-orange-500">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        {module.assignments} ASSIGNMENT
                      </span>
                    </div>
                  </div>
                  
                  {/* Lessons */}
                  <div className="space-y-2">
                    {module.lessons.slice(0, 3).map((lesson, j) => (
                      <div key={j} className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-blue-600 text-xs">📚</span>
                        </div>
                        <span className="font-mono text-sm text-gray-700">{lesson}</span>
                      </div>
                    ))}
                    
                    {module.lessons.length > 3 && (
                      <div className="text-center py-2">
                        <span className="text-sm text-gray-500 font-mono">
                          +{module.lessons.length - 3} more topics
                        </span>
                      </div>
                    )}
                  </div>
                  
                  {/* Capstone Project for Week 4 */}
                  {module.week === 4 && (
                    <div className="mt-4 p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border border-orange-200">
                      <h4 className="font-bold text-orange-800 mb-2">🏆 Capstone Project</h4>
                      <p className="text-orange-700 text-sm font-mono">
                        Deliver a working AI-powered marketing campaign with creative generation, 
                        agent design, AEO optimization, and launch via Mesha.
                      </p>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* View More Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.button
            className="px-8 py-3 border-2 border-[#FF5A1F] text-[#FF5A1F] rounded-xl font-bold hover:bg-[#FF5A1F] hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Full Curriculum
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
} 