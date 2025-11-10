import React from "react";
import { BookOpen, MapPin, Users } from "lucide-react";
import Button from "../components/Button";

const FeaturesSection = () => {
  const features = [
    {
      title: "Cultural Library & Petatah",
      desc: "Dive into a vast collection of traditional wisdom, stories, and proverbs (Petatah Petitih).",
      img: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2xkJTIwYm9va3N8ZW58MHx8MHx8fDA%3D",
      btnText: "Explore Library",
      icon: <BookOpen className="w-6 h-6 text-[#C8302D]" />,
    },
    {
      title: "Cultural Locations Map",
      desc: "Explore significant Minangkabau historical sites and cultural landmarks on our interactive map.",
      img: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFwfGVufDB8fDB8fHww",
      btnText: "Open Interactive Map",
      icon: <MapPin className="w-6 h-6 text-[#C8302D]" />,
    },
    {
      title: "Community Forum",
      desc: "Join discussions, ask questions, and connect with others. Trending: Adat, Randai, Kuliner.",
      img: "https://cdn.antaranews.com/cache/1200x800/2021/08/12/antarafoto-adat-minangkabau-120821-igg-3.jpg",
      btnText: "Enter Forum",
      icon: <Users className="w-6 h-6 text-[#C8302D]" />,
    },
  ];

  return (
    <section id="features" className="py-20 px-4 md:px-8 bg-[#FFFBF2]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Discover Our Features
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Dive into the heart of Minangkabau culture with our curated
            collection of digital resources.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col group border border-gray-100"
            >
              <div className="h-56 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="text-white font-semibold text-lg border-2 border-white px-4 py-2 rounded-full">
                    View Details
                  </span>
                </div>
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center mb-4 space-x-3">
                  <div className="p-2 bg-[#FFFBF2] rounded-lg">{item.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
                  {item.desc}
                </p>
                <Button variant="tertiary" className="w-full py-3">
                  {item.btnText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
