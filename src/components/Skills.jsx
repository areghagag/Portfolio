import React from "react";
import { motion } from "framer-motion";
import {
  FaPython,
  FaGitAlt,
  FaDocker,
  FaReact,
  FaUbuntu,
} from "react-icons/fa";
import {
  SiDjango,
  SiFastapi,
  SiPostgresql,
  SiFlask,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiJquery,
  SiBootstrap,
  SiFigma,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiGnubash,
  SiApacheairflow,
   SiTailwindcss,
  SiOdoo,
} from "react-icons/si";
import { HiCode } from "react-icons/hi";
import { MdApi, MdDevices } from "react-icons/md";
import { GrMysql } from "react-icons/gr";
const skillSections = [
  {
    title: "Backend using Python",
    skills: [
      { name: "Python", icon: <FaPython /> },
      { name: "OOP", icon: <HiCode /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "Advanced Database", icon: <GrMysql /> },
      { name: "Django", icon: <SiDjango /> },
      { name: "Django REST Framework", icon: <MdApi /> },
      { name: "Flask", icon: <SiFlask /> },
      { name: "FastAPI", icon: <SiFastapi /> },
      { name: "RESTful API", icon: <MdApi /> },
      { name: "Odoo", icon: <SiOdoo /> },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: <SiHtml5 /> },
      { name: "HTML5", icon: <SiHtml5 /> },
      { name: "CSS", icon: <SiCss3 /> },
      { name: "CSS3", icon: <SiCss3 /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "ES6", icon: <SiJavascript /> },
      { name: "Bootstrap", icon: <SiBootstrap /> },
      { name: "jQuery", icon: <SiJquery /> },
      { name: "ReactJS", icon: <FaReact /> },
      { name: "Responsive Web Design" },
    ],
  },
  {
    title: "UI/UX Design",
    skills: [
      { name: "Figma", icon: <SiFigma /> },
      { name: "Photoshop", icon: <SiAdobephotoshop /> },
      { name: "Illustrator", icon: <SiAdobeillustrator /> },
    ],
  },
  {
    title: "Version Control",
    skills: [{ name: "Git & GitHub", icon: <FaGitAlt /> }],
  },
  {
    title: "Other Tools",
    skills: [
      { name: "Ubuntu", icon: <FaUbuntu /> },
      { name: "Apache", icon: <SiApacheairflow /> },
      { name: "Bash", icon: <SiGnubash /> },
      { name: "Docker", icon: <FaDocker /> },
    ],
  },
];

const Skills = () => {
  return (
    <section className="bg-[#0f172a] text-white py-20 px-4" id="skills">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          My Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillSections.map((section, index) => (
            <motion.div
              key={index}
              className="bg-[#181c2e] p-6 rounded-2xl shadow-lg text-left"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.skills.map((skill, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-sm text-gray-300"
                  >
                    {skill.icon && (
                      <span className="text-lg text-cyan-400">
                        {skill.icon}
                      </span>
                    )}
                    {skill.name}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
