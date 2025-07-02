import React from 'react';

export default function CTASection() {
  return (
    <section className="w-full flex flex-col items-center py-20 bg-gray-50">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
          Become a <span className="text-[#FF5A1F]">Generative-AI Wizard</span>
        </h2>
        <p className="text-lg text-black/70 font-mono mb-8">
          Join the next cohort and transform your career in 6 months
        </p>
        <a
          href="#"
          className="inline-block px-8 py-3 rounded-lg bg-black text-white font-semibold text-lg shadow hover:bg-[#FF5A1F] hover:text-white transition-colors"
        >
          Join Waitlist
        </a>
      </div>
    </section>
  );
} 