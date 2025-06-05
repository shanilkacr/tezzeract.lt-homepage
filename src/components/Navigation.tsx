import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div>
          <Link to="/">
            <img src="/logowhite.webp" alt="Tezzeract Logo" className="h-6" />
          </Link>
        </div>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
        <Link
            to="/"
            className="text-white/90 hover:text-white transition-colors"
          >
       Home </Link>
          <a
            href="#solutions"
            className="text-white/90 hover:text-white transition-colors"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#solutions")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Solutions
          </a>
          <Link
            to="/AboutUs"
            className="text-white/90 hover:text-white transition-colors"
          >
            About
          </Link>

          <Link
            to="/Contact"
            className="text-white/90 hover:text-white transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <Button className="bg-gradient-to-tr from-[#00378AB0] to-[#00A9EE] hover:bg-gradient-to-r hover:from-white hover:to-[#D8F4FF] shadow-[0_0px_70px_0_rgba(255,255,255,0.22)] hover:shadow-[0_-5px_70px_0_rgba(255,255,255,0.22)] border border-[#FFFFFF7A] rounded-xl px-8 py-4 text-white font-thin hover:text-[#005D8A] transition-all duration-300 sm:px-12 sm:py-5">
            Get on a call
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-tezzeract-darkblue/95 backdrop-blur-lg border-t border-white/20">
          <div className="px-6 py-4 space-y-4">
            <a
              href="#services"
              className="block text-white/90 hover:text-white transition-colors"
            >
              Services
            </a>
            <a
              href="#solutions"
              className="block text-white/90 hover:text-white transition-colors"
            >
              Solutions
            </a>
            <a
              href="#about"
              className="block text-white/90 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="block text-white/90 hover:text-white transition-colors"
            >
              Contact
            </a>
            <div className="pt-4 space-y-2">
              <Button className="w-full bg-white text-tezzeract-darkblue hover:bg-white/90">
                Book a Call
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
