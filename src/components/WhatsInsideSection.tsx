'use client';
import React from 'react';

const features = [
  { name: '24 Weeks Cohort', icon: '🎓' },
  { name: 'Build Your Own GenAI Products', icon: '🚀' },
  { name: 'Professional Certificate', icon: '📜' },
  { name: '150+ Hours of Learning', icon: '⏰' },
  { name: 'Elite Developer Community', icon: '🤝' },
  { name: 'Expert Instructors', icon: '👩‍🏫' },
  { name: 'Project-based Learning', icon: '💻' },
  { name: 'Live Classes', icon: '🔴' },
  { name: 'GPU credits from AWS for 5 projects', icon: '☁️' },
];

const companies = [
  'unacademy',
  'Mahindra',
  'sentient',
  'NEROLAC'
];

export default function WhatsInsideSection() {
  return (
    <section className="w-full py-20 bg-[#F8F9FA]">
      <div className="container mx-auto">
        {/* Companies Section */}
        <div className="text-center mb-20">
          <p className="text-[#1A1A1A]/60 font-medium mb-8">
            Students working with top companies like
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
            {companies.map((company) => (
              <div
                key={company}
                className="text-2xl font-bold text-[#1A1A1A]/40 tracking-wider hover:text-[#FF6B35] transition-colors duration-300"
              >
                {company}
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl border border-[#E8E8E8] p-12">
          <div className="text-center mb-16">
            <span className="inline-block px-5 py-2 rounded-full bg-[#FF6B35]/10 text-[#FF6B35] text-sm font-bold tracking-wide mb-6">
              PROGRAM OVERVIEW
            </span>
            <h2 className="font-bold mb-4 text-[#0A0A0A]">
              What&apos;s <span className="text-[#FF6B35]">Inside?</span>
            </h2>
            <p className="text-[#1A1A1A]/70 max-w-2xl mx-auto">
              This isn&apos;t just another course. It&apos;s a career transformation program.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="flex items-center gap-4 p-6 rounded-xl bg-[#F8F9FA] border border-[#E8E8E8] hover:border-[#FF6B35]/50 hover:bg-white transition-colors duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl border border-[#E8E8E8]">
                  {feature.icon}
                </div>
                <span className="font-semibold text-[#1A1A1A]">
                  {feature.name}
                </span>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <a
              href="#"
              className="inline-block px-10 py-4 rounded-xl bg-[#0A0A0A] text-white font-bold hover:bg-[#FF6B35] transition-colors duration-300"
            >
              Secure Your Spot
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 