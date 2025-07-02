'use client';
import React from 'react';
import { motion } from 'framer-motion';

const modules = [
  { 
    week: 0, 
    title: 'Essential Prerequisites', 
    subtitle: 'FREE PREVIEW',
    sessions: 2, 
    assignments: 0,
    lessons: [
      'Intro to Generative AI',
      'Master Midjourney'
    ],
    color: 'bg-blue-500',
    icon: '⛵'
  },
  { 
    week: 1, 
    title: 'Dive Straight in the Deep End', 
    subtitle: 'DIVE STRAIGHT IN THE DEEP END',
    sessions: 3, 
    assignments: 1,
    lessons: [],
    color: 'bg-purple-500',
    icon: '🚀'
  },
  { 
    week: 2, 
    title: 'Intro to Stable Diffusion', 
    subtitle: 'PROMPTS, PARAMETERS, SCRIPTS & MORE',
    sessions: 1, 
    assignments: 1,
    lessons: [],
    color: 'bg-blue-600',
    icon: '🎨'
  },
  { 
    week: 3, 
    title: 'Advanced Stable Diffusion', 
    subtitle: 'IMG2IMG, EXTENSION & INPAINTING',
    sessions: 2, 
    assignments: 1,
    lessons: [],
    color: 'bg-blue-600',
    icon: '🎭'
  },
  { 
    week: 4, 
    title: 'Intro to Finetuning', 
    subtitle: 'DREAMBOOTH, CONTROLNET & IP ADAPTERS',
    sessions: 2, 
    assignments: 0,
    lessons: [],
    color: 'bg-pink-500',
    icon: '🎯'
  },
  { 
    week: 5, 
    title: 'Advanced Finetuning', 
    subtitle: 'LORA DATASETS, PARAMETERS, KOHYA SS',
    sessions: 2, 
    assignments: 0,
    lessons: [],
    color: 'bg-orange-500',
    icon: '⚙️'
  },
  { 
    week: 6, 
    title: 'ComfyUI', 
    subtitle: 'STABLE DIFFUSION GUI',
    sessions: 2, 
    assignments: 1,
    lessons: [],
    color: 'bg-green-500',
    icon: '🔗'
  },
  { 
    week: 7, 
    title: 'Advanced ComfyUI', 
    subtitle: 'WORKFLOWS',
    sessions: 2, 
    assignments: 0,
    lessons: [],
    color: 'bg-green-600',
    icon: '⚡'
  },
  { 
    week: 8, 
    title: 'Mid-Cohort Capstone Project', 
    subtitle: 'CHEERS, YOU MADE IT THIS FAR!',
    sessions: 1, 
    assignments: 0,
    lessons: [],
    color: 'bg-gray-400',
    icon: '🏆'
  },
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
            The most beginner-friendly curriculum in Generative AI.
          </p>
          <p className="text-lg text-gray-500 font-mono mt-2">
            Zero to Pro in 6 months.
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
                    <span className="text-xs">WEEK {module.week}</span>
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
                        MODULE {module.week}
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
                      {module.sessions > 0 && (
                        <span className="flex items-center gap-1 text-red-500">
                          <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                          {module.sessions} LIVE SESSION{module.sessions > 1 ? 'S' : ''}
                        </span>
                      )}
                      {module.lessons && module.lessons.length > 0 && (
                        <span className="flex items-center gap-1 text-gray-600">
                          <span className="w-2 h-2 bg-gray-600 rounded-full"></span>
                          {module.lessons.length} VIDEO LESSON{module.lessons.length > 1 ? 'S' : ''}
                        </span>
                      )}
                      {module.assignments > 0 && (
                        <span className="flex items-center gap-1 text-orange-500">
                          <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                          {module.assignments} ASSIGNMENT{module.assignments > 1 ? 'S' : ''}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* Lessons */}
                  {module.lessons && module.lessons.length > 0 && (
                    <div className="space-y-2">
                      {module.lessons.map((lesson, j) => (
                        <div key={j} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                              <span className="text-blue-600 text-sm">📚</span>
                            </div>
                            <span className="font-mono text-sm">{lesson}</span>
                          </div>
                          <motion.button
                            className="px-4 py-1 bg-[#FF5A1F] text-white text-xs rounded-full font-bold"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Watch for free ▶
                          </motion.button>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {/* Special content for Week 0 */}
                  {module.week === 0 && (
                    <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <p className="text-blue-700 text-sm font-mono">
                        🎁 Free preview lessons to get you started
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
            View More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
} 