import React from "react";
import HeroImage from "../assets/hero-image.jpg";

const Hero = () => {
  return (
    <div className="bg-[#0f172a] text-white text-center py-16  " id="home">
      <img
        src={HeroImage}
        alt=""
        className="mx-auto  mb-8 w-48 h-48 rounded-full object-cover  transform transition-transform duration-300 hover:scale-105"
        style={{ objectPosition: "center top" }}
      />
      <h1 className="text-4xl font-bold">
        {" "}
        I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Areej Hagag
        </span>
        ,Full-Stack Developer
      </h1>
      <p className="mt-4 text-lg text-gray-300  ">
        I specialize in building modern and responsive web applications.
      </p>
      <div className="mt-8 space-x-4">
        <a
          href="#contact"
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300
      hover:scale-105 px-6 py-2 rounded-full"
        >
          Contact with Me
        </a>
        <a
          href="/Areej_Anwer_Hagag_cv.pdf"
          download
          className="bg-gradient-to-r from-pink-500 to-purple-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-6 py-2 rounded-full"
        >
          Download CV
        </a>
      </div>
    </div>
  );
};

export default Hero;
