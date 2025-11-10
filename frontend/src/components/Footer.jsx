import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => (
  <footer className="bg-white border-t border-gray-100 py-12 md:py-16 px-4 md:px-8">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
      {/* Kolom 1: Logo & Deskripsi */}
      <div className="col-span-1 md:col-span-1">
        <div className="flex items-center space-x-2 mb-6">
          <div className="w-8 h-8 bg-[#C8302D] rounded-md flex items-center justify-center rotate-45">
            <span className="text-white font-bold -rotate-45">T</span>
          </div>
          <span className="text-2xl font-bold text-gray-900">Tambo</span>
        </div>
        <p className="text-gray-500 text-sm leading-relaxed pr-4">
          Preserving and sharing the wisdom of Minangkabau culture for
          generations to come through modern technology.
        </p>
      </div>

      {/* Kolom 2: Sitemap */}
      <div>
        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-6">
          Sitemap
        </h4>
        <ul className="space-y-3">
          <li>
            <a
              href="#library"
              className="text-gray-600 hover:text-[#C8302D] text-sm transition-colors"
            >
              Cultural Library
            </a>
          </li>
          <li>
            <a
              href="#map"
              className="text-gray-600 hover:text-[#C8302D] text-sm transition-colors"
            >
              Cultural Map
            </a>
          </li>
          <li>
            <a
              href="#forum"
              className="text-gray-600 hover:text-[#C8302D] text-sm transition-colors"
            >
              Forum
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-gray-600 hover:text-[#C8302D] text-sm transition-colors"
            >
              About Us
            </a>
          </li>
        </ul>
      </div>

      {/* Kolom 3: Contact */}
      <div>
        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-6">
          Contact
        </h4>
        <ul className="space-y-3 text-sm text-gray-600">
          <li>contact@tambo.com</li>
          <li>Padang, West Sumatra</li>
          <li>Indonesia</li>
        </ul>
      </div>

      {/* Kolom 4: Connect */}
      <div>
        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-6">
          Connect
        </h4>
        <div className="flex space-x-4">
          <a
            href="#"
            className="text-gray-400 hover:text-[#1877F2] transition-colors"
          >
            <span className="sr-only">Facebook</span>
            <Facebook className="h-6 w-6" />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-[#E4405F] transition-colors"
          >
            <span className="sr-only">Instagram</span>
            <Instagram className="h-6 w-6" />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-[#1DA1F2] transition-colors"
          >
            <span className="sr-only">Twitter</span>
            <Twitter className="h-6 w-6" />
          </a>
        </div>
      </div>
    </div>

    {/* Copyright */}
    <div className="mt-12 pt-8 border-t border-gray-100 text-center">
      <p className="text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Team Tambo. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
