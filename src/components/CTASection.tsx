import React from 'react';

export default function CTASection() {
  return (
    <section className="w-full flex flex-col items-center py-20 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center">
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
              Ready to become a <span className="text-[#FF5A1F]">Marketing AI Wizard?</span>
            </h2>
            <p className="text-lg text-black/70 font-mono">
              Join the next cohort and transform your marketing career in 4 weeks
            </p>
          </div>
          <a
            href="#"
            className="inline-block px-8 py-3 rounded-lg bg-black text-white font-semibold text-lg shadow hover:bg-[#FF5A1F] hover:text-white transition-colors"
          >
            Join Waitlist
          </a>
        </div>
      </div>
    </section>
  );
} 