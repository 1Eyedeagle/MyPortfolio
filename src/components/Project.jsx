import React from "react";
import { motion } from "framer-motion";
import Group from "../images/Group.png";

const projects = [
  { id: 1, name: "Portfolio", tech: "HTML, CSS", link: "#" },
  { id: 2, name: "To-Do List", tech: "HTML, CSS, JavaScript", link: "#" },
  { id: 3, name: "Coinryze", tech: "React", link: "#" },
  { id: 4, name: "Weather App", tech: "React, API", link: "#" },
  { id: 5, name: "Portfolio", tech: "React", link: "#" },
];

const Projects = () => {
  return (
    <section id="projects" className="ms-5  p-5 pb-3">
      <div className="text-center mb-4">
        <h2>
          My <strong>Projects</strong>
        </h2>
      </div>
      <div className="row d-flex align-items-center">
        {/* Left Side - Project List */}
        <div className="col-12 col-md-6">
          <div className="project-list">
            {projects.map((project) => (
              <motion.a
                key={project.id}
                href={project.link}
                className="project-card"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <h4>{project.name}</h4>
                <p className="text-black ">{project.tech}</p>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="col-12 col-md-6 text-center">
          <motion.img
            src={Group}
            alt="Projects"
            className="img-fluid project-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
