import React from 'react';

export default function CTASection() {
  return (
    <section className="w-full py-20 bg-[#F8F9FA]">
      <div className="container mx-auto">
        <div className="text-center">
          <div className="mb-12">
            <h2 className="font-bold text-[#0A0A0A] mb-4">
              Ready to become a <span className="text-[#FF6B35]">Marketing AI Wizard?</span>
            </h2>
            <p className="text-[#1A1A1A]/70">
              Join the next cohort and transform your marketing career in 4 weeks
            </p>
          </div>
          <a
            href="#"
            className="inline-block px-8 py-4 rounded-xl bg-[#0A0A0A] text-white font-bold hover:bg-[#FF6B35] transition-colors duration-300"
          >
            Join Waitlist
          </a>
        </div>
      </div>
    </section>
  );
} 