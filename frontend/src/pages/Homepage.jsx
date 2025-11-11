import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../sections/HeroSection";
import IntroSection from "../sections/IntroSection";
import WisdomSection from "../sections/WisdomSection";
import StoriesSection from "../sections/StoriesSection";
import ExploreSection from "../sections/ExploreSection";
import AskSection from "../sections/AskSection";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-[#D9D9D9] font-sans text-gray-900">
      <Navbar />
      <main>
        <HeroSection />
        <IntroSection />
        <WisdomSection />
        <StoriesSection />
        <ExploreSection />
        <AskSection />
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;
