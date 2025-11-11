import React from "react";

const AskSection = () => {
  return (
    <section className="bg-[#EFEFEF] px-4 py-12 md:px-8 md:py-16">
      <div className="mx-auto max-w-6xl rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
        <h3 className="text-lg font-semibold text-[#C8302D]">Tanya Datuak</h3>
        <p className="mt-1 text-sm text-gray-600">
          Pengetahuan Minangkabau kini hanya sejauh ketikan. Ajukan pertanyaan
          kompleks, dan dapatkan jawaban instan tentang adat, petatah, atau
          sejarah Minang.
        </p>
        <div className="mt-4 rounded-full border border-gray-300 bg-[#F7F7F7] p-3">
          <input
            className="w-full bg-transparent px-3 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none"
            placeholder="Apa yang ingin kamu tanyakan pada Datuak?"
          />
        </div>
      </div>
    </section>
  );
};

export default AskSection;

