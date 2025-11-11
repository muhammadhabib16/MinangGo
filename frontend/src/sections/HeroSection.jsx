import React from "react";
import { Search } from "lucide-react";
import Button from "../components/Button";

const HeroSection = () => (
  <section className="relative h-[560px] md:h-[640px] flex items-center justify-center overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          'url("https://responradio.com/wp-content/uploads/2023/12/Mengungkap-Keunikan-dan-Asal-Usul-Rumah-Gadang-1160x560.jpg")',
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
    </div>

    <div className="relative z-10 text-center px-4 max-w-3xl mx-auto flex flex-col items-center">
      <h1 className="text-white text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-xl tracking-tight">
        Eksplor Tradisi dan Budaya Minangkabau
      </h1>
      <p className="text-white/90 text-base md:text-lg mt-4 mb-8 max-w-2xl mx-auto drop-shadow">
        Pintu gerbang digitalmu menuju filosofi, adat, dan keindahan Ranah
        Minang yang tak lekang oleh waktu.
      </p>

      <div className="w-full max-w-3xl">
        <div className="bg-white/95 backdrop-blur p-2 rounded-full flex items-center shadow-lg">
          <Search className="text-gray-500 ml-4 w-5 h-5 flex-shrink-0" />
          <input
            type="text"
            placeholder="Telusuri budaya Minang…"
            className="flex-grow bg-transparent border-none focus:ring-0 text-gray-800 px-4 py-3 text-sm md:text-base outline-none w-full placeholder-gray-500"
          />
          <Button
            variant="secondary"
            className="hidden md:block ml-2 rounded-l-3xl rounded-r-3xl px-6"
          >
            Submit
          </Button>
        </div>
        <div className="mt-4 md:hidden w-full px-2">
          <Button
            variant="secondary"
            className="w-full rounded-full py-3 text-lg shadow-lg"
          >
            Cari
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
