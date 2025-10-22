import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#0f172a] text-white px-4 md:px-16 lg:px-24 fixed top-0 w-full z-50">
      <div className="container py-2 flex justify-between items-center">
        <div className="text-2xl font-bold">Areej Hagag</div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:space-x-6 absolute md:static bg-black md:bg-transparent top-12 left-0 w-full md:w-auto p-4 md:p-0`}
        >
          <a
            href="#home"
            className="block md:inline hover:text-gray-400 py-2 md:py-0"
          >
            Home
          </a>
          <a
            href="#about"
            className="block md:inline hover:text-gray-400 py-2 md:py-0"
          >
            About Me
          </a>
          <a
            href="#services"
            className="block md:inline hover:text-gray-400 py-2 md:py-0"
          >
            Services
          </a>
          <a
            href="#skills"
            className="block md:inline hover:text-gray-400 py-2 md:py-0"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="block md:inline hover:text-gray-400 py-2 md:py-0"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block md:inline hover:text-gray-400 py-2 md:py-0"
          >
            Contact
          </a>
        </div>

       <a
  href={`${window.location.origin}/Areej_Anwer_Hagag_cv2.pdf`}
  target="_blank"
  rel="noopener noreferrer"
  className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-6 py-2 rounded-full"
>
  View / Download CV
</a>


      </div>
    </nav>
  );
};

export default Navbar;
