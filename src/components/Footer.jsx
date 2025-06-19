import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaGithub, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-300 py-6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Left side - copyright */}
        <p className="text-sm mb-4 md:mb-0 font-bold">
          © Areej Hagag 2025. <span className="font-bold text-white">All rights reserved.</span>
        </p>

        {/* Right side - social icons */}
        <div className="flex space-x-6 text-lg">
          <a href="https://www.facebook.com/share/1UWep2nQRX/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaFacebookF />
          </a>
          <a href="www.linkedin.com/in/areej-hagag-121350260" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/areghagag" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaGithub />
          </a>
          <a href="https://wa.me/201067317532" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
