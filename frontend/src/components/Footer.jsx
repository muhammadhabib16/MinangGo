import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => (
  <footer className="bg-[#C8302D] text-white px-4 py-12 md:px-8 md:py-16">
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-3">
      <div>
        <h3 className="text-xl font-bold tracking-wide">MinangGo</h3>
        <p className="mt-2 text-sm text-white/90">
          ©{new Date().getFullYear()} MinangGo. All Rights Reserved
        </p>
      </div>
      <div>
        <h4 className="text-sm font-semibold">Navigation</h4>
        <ul className="mt-3 space-y-2 text-sm text-white/90">
          <li>Beranda</li>
          <li>Kamus Pepatah</li>
          <li>Komunitas</li>
          <li>Peta Budaya</li>
        </ul>
      </div>
      <div>
        <h4 className="text-sm font-semibold">Sosial Media</h4>
        <div className="mt-4 flex items-center gap-4 text-white/90">
          <Facebook className="h-5 w-5" />
          <Instagram className="h-5 w-5" />
          <Twitter className="h-5 w-5" />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
