import React from 'react';
import Slider from 'react-slick';
import { FaGithub } from 'react-icons/fa';
import htmlImage from '../assets/htmlandcssimage.PNG';
import htmlImage2 from '../assets/htmlandcssimage2.PNG';
import htmlImage3 from '../assets/htmlandcssimage3.PNG';
import reactImage from '../assets/reactimage1.PNG';
import reactImage2 from '../assets/reactimage2.PNG';
import reactImage3 from '../assets/reactimage3.PNG';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import djangoImage1 from '../assets/djangoimage1.PNG';
import djangoImage2 from '../assets/djangoimage2.PNG';
import djangoImage3 from '../assets/djangoimage3.PNG';
import AthrImage1 from '../assets/Athr1.jpg';
import AthrImage2 from '../assets/Athr2.jpg';
import AthrImage3 from '../assets/Athr3.jpg';


const projects = [
  {
    id: 1,
    title: "BizLaunch",
    description:
      "A comprehensive business management platform designed to streamline operations, enhance productivity, and drive growth.",
    technologies: ["Html", "Css"],
    images: [htmlImage, htmlImage2, htmlImage3],
    github: "https://github.com/areghagag/Html-CSS-Project-ITI",
  },
  {
    id: 2,
    title: "My Shop",
    description:
      "An e-commerce platform that offers a seamless shopping experience, featuring a user-friendly interface and secure payment options.",
    technologies: ["React", "Bootstrap", "CSS"],
    images: [reactImage, reactImage2, reactImage3],
    github: "https://github.com/areghagag/Shop-app",
  },
  {
  id: 3,
  title: "ITI",
  description:
    "ITI Management System is a web application built with Django that provides a simple and efficient interface for managing trainees and courses at the ITI center. The system allows administrators to securely log in, add new trainees and courses, view lists of all trainees and courses, and log out safely. It streamlines the management process and enhances data organization for training centers.",
  technologies: ["Django", "Python", "HTML", "CSS"],
  images: [djangoImage1, djangoImage2, djangoImage3],
  github: "https://github.com/areghagag/Django-lab5"
},
{
    id: 4,
    title:"Athr",
    description:"A sustainable donation platform built to create impact that lives on. Empowering transparent giving, real stories, and lasting change.",
    technologies: ["React", "Tailwind CSS", "Django"],
    images:[AthrImage1,AthrImage2,AthrImage3],
    github: "https://github.com/dinamagdyrashed/crowd-frontend",
}
];

const sliderSettings = {
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

const Projects = () => {
  return (
    <div className="bg-[#0f172a] text-white py-20" id="projects">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project) => (
            <div key={project.id} className="bg-[#181c2e] rounded-2xl p-4 shadow-lg relative">
              {/* GitHub Icon */}
   <a
  href={project.github}
  target="_blank"
  rel="noopener noreferrer"
  className="absolute top-4 right-4 z-10 hover:opacity-80"
>
  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-black">
    <FaGithub className="text-2xl text-white" />
  </span>
</a>

              {/* Image Slider */}
              <div className="rounded-xl overflow-hidden mb-4">
                <Slider {...sliderSettings}>
                  {project.images.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`${project.title} screenshot ${index}`}
                      className="w-full h-56 object-cover"
                    />
                  ))}
                </Slider>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm mb-4">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="text-sm text-cyan-400 bg-[#1f2235] px-2 py-1 rounded-md"
                  >
                    #{tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Projects;