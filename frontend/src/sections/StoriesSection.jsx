import React from "react";

const PostCard = ({ user, title, subtitle, img }) => (
  <div className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-200">
    <div className="flex items-center gap-3 px-4 py-3">
      <div className="h-8 w-8 rounded-full bg-gray-200" />
      <div className="text-sm">
        <p className="font-semibold text-gray-900">{user}</p>
        <p className="text-xs text-gray-500">{subtitle}</p>
      </div>
    </div>
    <div className="h-44 w-full overflow-hidden">
      <img src={img} alt={title} className="h-full w-full object-cover" />
    </div>
    <div className="px-4 py-3">
      <h4 className="text-sm font-semibold text-gray-900">{title}</h4>
    </div>
    <div className="flex items-center gap-4 px-4 pb-4 text-gray-500">
      <span>♡</span>
      <span>💬</span>
      <span>↗</span>
    </div>
  </div>
);

const StoriesSection = () => {
  const cards = [
    {
      user: "Rudi Firmansyah",
      title: "Indahnya Jam Gadang di Bukittinggi",
      subtitle: "Detik momentum yang saya abadikan",
      img: "https://awsimages.detik.net.id/community/media/visual/2022/06/18/tiga-spot-asyik-untuk-menikmati-dan-mengabadikan-jam-gadang-1_169.jpeg?w=1200",
    },
    {
      user: "Saperti Intan",
      title: "Salah Satu Tradisi Khas di Minangkabau",
      subtitle: "Lihat betapa uniknya tradisi pacu kerbau ini",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbl_Hl_42Lr3ti3J7SRcn-3N43PQezYoCs8w&s",
    },
    {
      user: "Deny Jamariswan",
      title: "Indahnya Jam Gadang",
      subtitle: "Detik momentum yang saya abadikan",
      img: "https://awsimages.detik.net.id/community/media/visual/2022/06/18/tiga-spot-asyik-untuk-menikmati-dan-mengabadikan-jam-gadang-1_169.jpeg?w=1200",
    },
  ];
  return (
    <section className="bg-[#EFEFEF] px-4 py-12 md:px-8 md:py-16">
      <div className="mx-auto max-w-6xl">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
          Berbagi Cerita Tentang{" "}
          <span className="text-[#C8302D]">Ranah Minang</span>
        </h3>
        <p className="mt-2 text-gray-900 text-2xl md:text-3xl font-bold">
          Menciptakan Persatuan
        </p>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {cards.map((c, i) => (
            <PostCard key={i} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;
