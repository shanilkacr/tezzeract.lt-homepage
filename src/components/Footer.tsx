import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import TezzeractTypeface from "@/assets/Tezzeract - Text Logo (Gradient).webp";

const Footer = () => {
  return (
    <footer
      className="bg-gradient-to-br from-[#000000] to-[#353535] text-white pt-20 min-h-[50vh] sm:min-h-[50vh] relative"
    >
      <div className="w-[83%] flex flex-col h-full min-h-[60vh] sm:min-h-[60vh] justify-between mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="flex flex-row  lg:flex-row gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-10 lg:mb-12">
          {/* Company Info */}
          <div className="space-y-4 w-full lg:w-1/2">
            <div className="flex items-center space-x-3 w-full sm:w-3/4 lg:w-2/3">
  <div className="w-10  flex-shrink-0">
    <img
      src="/src/assets/Tezzeract - Symbolic Logo (Light).webp"
      alt="Tezzeract Logo"
      className="w-full h-full object-cover rounded-lg"
    />
  </div>
  <div>
    <p className="text-xs sm:text-sm text-gray-300 font-thin">
      Tezzeract (Pvt) Ltd specializing in digital scalability,
      offering businesses seamless access to remote teams of highly
      skilled professionals.
    </p>
  </div>
</div>


            <div className="space-y-3 text-xs sm:text-sm text-gray-300 font-thin">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>+1 346 999 8698</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>info@tezzeract.net</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>
                  No 752, Dr Danister De Silva Mawatha, Colombo 00900, Sri Lanka
                </span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="w-full sm:w-1/2 lg:w-1/4">
            <h3 className="text-xl sm:text-2xl font-light mb-3 sm:mb-4">Company</h3>
            <ul className="space-y-2 text-gray-300 font-thin text-xs sm:text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Reach out to us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Downloads
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="w-full sm:w-1/2 lg:w-1/4">
            <h3 className="text-xl sm:text-2xl font-light mb-3 sm:mb-4">Socials</h3>
            <ul className="space-y-2 text-gray-300 font-thin text-xs sm:text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  X.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* TezzeractTypeface Logo */}
        <div className="flex justify-center mt-10 sm:mt-6">
          <img
            src={TezzeractTypeface}
            alt="Tezzeract Logo"
            className="w-[100%] "
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;