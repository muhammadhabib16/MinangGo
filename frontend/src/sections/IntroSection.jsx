import React from "react";
import Button from "../components/Button";

const IntroSection = () => {
  return (
    <section className="bg-[#F3F4F6] px-4 py-12 md:px-8 md:py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Kearifan Tanah Minang, Dalam Genggaman Digital Kamu
          </h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Selami filosofi Adat Basandi Syarak, berinteraksi dengan komunitas,
            dan temukan setiap sudut budaya Minangkabau.
          </p>
          <Button variant="primary" className="mt-6 rounded-full px-6 py-3">
            Kunjungi Forum
          </Button>
        </div>
        <div className="grid grid-cols-3 grid-rows-2 gap-3">
          <img
            className="col-span-2 row-span-2 h-56 w-full rounded-xl object-cover md:h-64"
            src="https://www.sumbar.bwi.go.id/wp-content/uploads/2022/06/Masjid-Raya-Sumatera-Barat.jpg"
            alt="Masjid Gadang"
          />
          <img
            className="h-28 w-full rounded-xl object-cover md:h-32"
            src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop"
            alt="Busana adat"
          />
          <img
            className="h-28 w-full rounded-xl object-cover md:h-32"
            src="https://seringjalan.com/wp-content/uploads/2021/05/Batagak-Pangulu.jpg"
            alt="Ritual"
          />
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
