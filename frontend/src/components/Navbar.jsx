import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "./Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="absolute inset-x-0 top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center space-x-2">
            <div className="w-8 h-8 bg-[#C8302D] rounded-md flex items-center justify-center rotate-45">
              <span className="text-white font-bold -rotate-45">T</span>
            </div>
            <span className="text-xl font-bold text-white drop-shadow">
              MinangGo
            </span>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8 text-sm font-medium text-white/90">
              <a href="#library" className="hover:text-white transition-colors">
                Beranda
              </a>
              <a href="#map" className="hover:text-white transition-colors">
                Kamus Pepatah
              </a>
              <a href="#forum" className="hover:text-white transition-colors">
                Komunitas
              </a>
              <a href="#about" className="hover:text-white transition-colors">
                Peta Budaya
              </a>
            </div>
          </div>

          {/* Tombol Auth Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="tertiary"
              className="bg-white/90 text-gray-800 hover:bg-white px-4 py-2 rounded-l-3xl rounded-r-3xl"
            >
              Sign Up
            </Button>
            <Button
              variant="primary"
              className="px-5 py-2 rounded-l-3xl rounded-r-3xl"
            >
              Sign In
            </Button>
          </div>

          {/* Tombol Menu Mobile */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white/90 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white/50"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile (Dropdown) */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/60 backdrop-blur">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#library"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/10"
            >
              Cultural Library
            </a>
            <a
              href="#map"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/10"
            >
              Cultural Map
            </a>
            <a
              href="#forum"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/10"
            >
              Forum
            </a>
            <a
              href="#about"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/10"
            >
              About Us
            </a>
          </div>
          <div className="pt-4 pb-5 border-t border-white/20 px-5 flex gap-3">
            <Button
              variant="tertiary"
              className="bg-white text-gray-800 w-1/2 rounded-full justify-center"
            >
              Sign Up
            </Button>
            <Button
              variant="primary"
              className="w-1/2 rounded-full justify-center"
            >
              Sign In
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
