import React from "react";

const OverlayCard = ({ img, children }) => (
  <div className="relative h-48 w-full overflow-hidden rounded-xl">
    <img src={img} className="h-full w-full object-cover" />
    <div className="absolute inset-0 bg-black/35" />
    <div className="absolute inset-0 flex items-end">
      <div className="w-full p-4 text-white">{children}</div>
    </div>
  </div>
);

const WisdomSection = () => {
  return (
    <section className="bg-[#EFEFEF] px-4 py-10 md:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
        <OverlayCard img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHuvRfc7EA5-UKlFj214Uq6W3VVWbSNn4R8A&s">
          <p className="text-sm leading-snug">
            <span className="font-semibold text-xl">
              Adat Basandi Syarak, Syarak Basandi Kitabullah
            </span>
          </p>
          <div className="mt-3 inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-sm">
            Falsafah Hidup Minangkabau
          </div>
        </OverlayCard>
        <OverlayCard img="https://static.republika.co.id/uploads/member/images/news/610cff0494252-1355694599.jpg">
          <p className="text-xl font-semibold leading-snug">
            Kearifan tak hanya tertulis, tapi juga terpatri di setiap jejak
          </p>
          <div className="mt-2 inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-sm opacity-90">
            Jelajahi Peta Budaya
          </div>
        </OverlayCard>
      </div>
    </section>
  );
};

export default WisdomSection;
