
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          Tezzeract
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-white/90 hover:text-white transition-colors">Services</a>
          <a href="#solutions" className="text-white/90 hover:text-white transition-colors">Solutions</a>
          <a href="#about" className="text-white/90 hover:text-white transition-colors">About</a>
          <a href="#contact" className="text-white/90 hover:text-white transition-colors">Contact</a>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-tezzeract-darkblue">
            Get Started
          </Button>
          <Button className="bg-white text-tezzeract-darkblue hover:bg-white/90">
            Book a Call
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
            <a href="#services" className="block text-white/90 hover:text-white transition-colors">Services</a>
            <a href="#solutions" className="block text-white/90 hover:text-white transition-colors">Solutions</a>
            <a href="#about" className="block text-white/90 hover:text-white transition-colors">About</a>
            <a href="#contact" className="block text-white/90 hover:text-white transition-colors">Contact</a>
            <div className="pt-4 space-y-2">
              <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-tezzeract-darkblue">
                Get Started
              </Button>
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
