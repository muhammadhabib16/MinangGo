import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../sections/HeroSection";
import FeaturesSection from "../sections/FeaturesSection";
import CTASection from "../sections/CTASection";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-[#FFFBF2] font-sans text-gray-900">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;
