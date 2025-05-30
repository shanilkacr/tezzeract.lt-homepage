import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#000000] to-[#353535] text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12 ">
          {/* Company Info */}
          <div className="space-y-4 ">
            <div className="flex items-center space-x-3 max-w-[40%]">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-white rounded"></div>
              </div>
              <div>
                <p className="text-sm text-gray-300">
                  Tezzeract (Pvt) Ltd specializing in digital scalability,
                  offering businesses seamless access to remote teams of highly
                  skilled professionals.
                </p>
              </div>
            </div>

            <div className="space-y-3 text-sm text-gray-300">
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
          <div className="max-w-[60%]">
            <h3 className="text-2xl font-light mb-4 ">Company</h3>
            <ul className="space-y-2 text-gray-300 font-thin">
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
          <div>
            <h3 className="text-2xl font-light mb-4">Socials</h3>
            <ul className="space-y-2 text-gray-300">
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
      </div>
    </footer>
  );
};

export default Footer;
