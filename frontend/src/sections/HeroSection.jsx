import React from "react";
import { Search } from "lucide-react";
import Button from "../components/Button";

const HeroSection = () => (
  <section className="relative h-[500px] md:h-[600px] flex items-center justify-center mx-4 md:mx-8 my-6 rounded-3xl overflow-hidden shadow-2xl">
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[2000ms] hover:scale-105"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1631782537819-1a4e98127447?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
    </div>

    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
      <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 drop-shadow-xl tracking-tight">
        Tambo: Explore Minangkabau <br className="hidden md:block" />
        Wisdom & Tradition
      </h1>
      <p className="text-gray-200 text-lg md:text-xl mb-10 max-w-2xl mx-auto drop-shadow-md leading-relaxed">
        Your AI-powered guide to the rich culture, history, and heritage of the
        Minangkabau people.
      </p>

      <div className="w-full max-w-2xl">
        <div className="bg-[#FFFBF2]/95 backdrop-blur-sm p-2 rounded-full flex items-center shadow-2xl transform transition-all hover:-translate-y-1 hover:shadow-[#C8302D]/20">
          <Search className="text-gray-500 ml-4 w-6 h-6 flex-shrink-0" />
          <input
            type="text"
            placeholder="Ask anything about Minang culture..."
            className="flex-grow bg-transparent border-none focus:ring-0 text-gray-800 px-4 py-3 text-base md:text-lg outline-none w-full placeholder-gray-500"
          />
          <Button
            variant="secondary"
            className="hidden md:block ml-2 rounded-full px-8"
          >
            Submit
          </Button>
        </div>
        <div className="mt-4 md:hidden w-full px-2">
          <Button
            variant="secondary"
            className="w-full rounded-full py-3 text-lg shadow-lg"
          >
            Submit Question
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
