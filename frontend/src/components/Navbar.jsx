import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "./Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#FFFBF2] sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center space-x-2">
            <div className="w-8 h-8 bg-[#C8302D] rounded-md flex items-center justify-center rotate-45">
              <span className="text-white font-bold -rotate-45">T</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Tambo</span>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8 text-sm font-medium text-gray-700">
              <a
                href="#library"
                className="hover:text-[#C8302D] transition-colors"
              >
                Cultural Library
              </a>
              <a href="#map" className="hover:text-[#C8302D] transition-colors">
                Cultural Map
              </a>
              <a
                href="#forum"
                className="hover:text-[#C8302D] transition-colors"
              >
                Forum
              </a>
              <a
                href="#about"
                className="hover:text-[#C8302D] transition-colors"
              >
                About Us
              </a>
            </div>
          </div>

          {/* Tombol Login Desktop */}
          <div className="hidden md:block">
            <Button variant="primary">Login/Register</Button>
          </div>

          {/* Tombol Menu Mobile */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#C8302D] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#C8302D]"
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
        <div className="md:hidden bg-[#FFFBF2] shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#library"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#C8302D] hover:bg-gray-50"
            >
              Cultural Library
            </a>
            <a
              href="#map"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#C8302D] hover:bg-gray-50"
            >
              Cultural Map
            </a>
            <a
              href="#forum"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#C8302D] hover:bg-gray-50"
            >
              Forum
            </a>
            <a
              href="#about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#C8302D] hover:bg-gray-50"
            >
              About Us
            </a>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200 px-5">
            <Button variant="primary" className="w-full justify-center">
              Login/Register
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
