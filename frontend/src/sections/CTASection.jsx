import React from "react";
import Button from "../components/Button";

const CTASection = () => (
  <section className="py-20 px-4 md:px-8">
    <div className="max-w-5xl mx-auto bg-[#FFF8E7] rounded-3xl p-8 md:p-16 text-center shadow-xl border border-[#F4B41A]/20 relative overflow-hidden">
      {/* Hiasan Background */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-[#F4B41A]/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#C8302D]/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>

      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
          Level Up Your Cultural Understanding
        </h2>
        <p className="text-gray-700 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          Engage with our daily quizzes and challenges to deepen your knowledge
          and earn badges.
        </p>
        <Button
          variant="primary"
          className="text-lg px-10 py-4 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
        >
          Take Today's Quiz
        </Button>
      </div>
    </div>
  </section>
);

export default CTASection;
