import React from "react";

const Tile = ({ title, subtitle }) => (
  <div className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100">
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FCE7E0]">
      <span className="text-[#C8302D] text-lg font-bold">▣</span>
    </div>
    <div className="flex flex-col">
      <p className="text-base font-semibold text-gray-900">{title}</p>
      <p className="mt-2 text-xs text-gray-500">
        {subtitle} <span className="ml-1">→</span>
      </p>
    </div>
  </div>
);

const PhotoCard = ({ src, label }) => (
  <div className="relative overflow-hidden rounded-2xl shadow-sm h-80">
    <img src={src} className="h-72 w-full object-cover md:h-96" />
    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
    <div className="absolute bottom-3 left-3 right-3">
      <p className="text-white text-sm md:text-base font-semibold drop-shadow">
        {label}
      </p>
    </div>
  </div>
);

const ExploreSection = () => {
  return (
    <section className="bg-[#F3F4F6] px-4 py-12 md:px-8 md:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-5">
          <div className="md:col-span-2 space-y-4">
            <p className="text-xs text-gray-500 uppercase tracking-wider">
              Eksplor budaya yang ada di Minangkabau sekarang
            </p>
            <h3 className="mt-1 text-xl md:text-2xl font-bold text-gray-900 mb-8 ">
              Menjelajahi Keindahan Warisan di Tanah Kito
            </h3>
            <Tile title="Kamus Pepatah" subtitle="Lihat lebih lanjut" />
            <Tile title="Peta Budaya" subtitle="Lihat lebih lanjut" />
          </div>
          <div className="md:col-span-3 grid grid-cols-3 gap-4">
            <PhotoCard
              src="https://awsimages.detik.net.id/community/media/visual/2022/06/18/tiga-spot-asyik-untuk-menikmati-dan-mengabadikan-jam-gadang-1_169.jpeg?w=1200"
              label="Jam Gadang"
            />
            <PhotoCard
              src="https://awsimages.detik.net.id/community/media/visual/2022/06/18/tiga-spot-asyik-untuk-menikmati-dan-mengabadikan-jam-gadang-1_169.jpeg?w=1200"
              label="Istano Pagaruyuang"
            />
            <PhotoCard
              src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop"
              label="Randai"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
