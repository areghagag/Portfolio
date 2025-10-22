import React from 'react';
import { FaGithub } from 'react-icons/fa';
import htmlImage from '../assets/htmlandcssimage.PNG';
import reactImage from '../assets/reactimage1.PNG';
import djangoImage1 from '../assets/djangoimage1.PNG';
import AthrImage1 from '../assets/Athr1.jpg';
import resonanceImage from '../assets/resonance.png'; // ← أضيفي الصورة هنا

const projects = [
  {
    id: 1,
    title: "BizLaunch",
    description:
      "A comprehensive business management platform designed to streamline operations, enhance productivity, and drive growth.",
    technologies: ["HTML", "CSS"],
    image: htmlImage,
    github: "https://github.com/areghagag/Html-CSS-Project-ITI",
    live: "",
  },
  {
    id: 2,
    title: "My Shop",
    description:
      "An e-commerce platform that offers a seamless shopping experience, featuring a user-friendly interface and secure payment options.",
    technologies: ["React", "Bootstrap", "CSS"],
    image: reactImage,
    github: "https://github.com/areghagag/Shop-app",
    live: "",
  },
  {
    id: 3,
    title: "ITI Management System",
    description:
      "A Django-based system for managing trainees and courses at the ITI center, enhancing data organization and efficiency.",
    technologies: ["Django", "Python", "HTML", "CSS"],
    image: djangoImage1,
    github: "https://github.com/areghagag/Django-lab5",
    live: "",
  },
  {
    id: 4,
    title: "Athr",
    description:
      "A sustainable donation platform built to create impact that lives on. Empowering transparent giving, real stories, and lasting change.",
    technologies: ["React", "Tailwind CSS", "Django"],
    image: AthrImage1,
    github: "https://github.com/dinamagdyrashed/crowd-frontend",
    live: "",
  },
  {
    id: 5,
    title: "Resonance Aura Pro",
    description:
      "A sleek and modern React project showcasing audio products with elegant UI and responsive design.",
    technologies: ["React", "Tailwind CSS"],
    image: resonanceImage,
    github: "https://github.com/areghagag/resonance-aura-pro",
    live: "https://resonance-aura-pro.vercel.app/",
  },
];

const Projects = () => {
  return (
    <div className="bg-[#0f172a] text-white py-20" id="projects">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.live || project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#181c2e] rounded-2xl p-4 shadow-lg relative hover:scale-[1.02] transition-transform duration-300"
            >
              {/* GitHub Icon */}
              <div className="absolute top-4 right-4 z-10">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()} // عشان ما يفتحش الرابط مرتين
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-black shadow-md hover:bg-gray-200 transition"
                >
                  <FaGithub className="text-2xl" />
                </a>
              </div>

              {/* Image */}
              <div className="rounded-xl overflow-hidden mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover"
                />
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
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
