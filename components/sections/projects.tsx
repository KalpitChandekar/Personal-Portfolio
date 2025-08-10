"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Github, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "TaskFlow - Project Manager",
    description:
      "A comprehensive project management application with task tracking, team collaboration, and real-time updates. Built with modern TypeScript and responsive design.",
    image:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: ["TypeScript", "React", "Node.js", "MongoDB"],
    liveUrl: "https://github.com/KalpitChandekar/TaskFlow__Project-Manager",
    githubUrl: "https://github.com/KalpitChandekar/TaskFlow__Project-Manager",
    featured: true,
  },
  {
    id: 2,
    title: "User MongoDB System",
    description:
      "A full-stack user management system with authentication, CRUD operations, and database integration. Features secure user registration and profile management.",
    image:
      "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: ["JavaScript", "MongoDB", "Express.js", "Node.js"],
    liveUrl: "https://github.com/KalpitChandekar/user-mongodb",
    githubUrl: "https://github.com/KalpitChandekar/user-mongodb",
    featured: true,
  },
  {
    id: 3,
    title: "Metaverse Experience",
    description:
      "An immersive VR/metaverse-themed project showcasing cutting-edge 3D interactions and modern web technologies with TypeScript.",
    image:
      "https://images.pexels.com/photos/8728382/pexels-photo-8728382.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: ["TypeScript", "Three.js", "WebGL", "React"],
    liveUrl: "https://github.com/KalpitChandekar/Metaverse",
    githubUrl: "https://github.com/KalpitChandekar/Metaverse",
    featured: true,
  },
  {
    id: 4,
    title: "Magma Interactive",
    description:
      "A creative web application featuring HTML5 Canvas animations and GSAP interactions. Demonstrates advanced animation techniques and user engagement.",
    image:
      "https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: ["JavaScript", "HTML5 Canvas", "GSAP", "CSS3"],
    liveUrl: "https://github.com/KalpitChandekar/Magma",
    githubUrl: "https://github.com/KalpitChandekar/Magma",
    featured: false,
  },
  {
    id: 5,
    title: "Quiz Application",
    description:
      "An interactive quiz application with dynamic questions, scoring system, and responsive design. Perfect for educational and entertainment purposes.",
    image:
      "https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: ["JavaScript", "HTML5", "CSS3", "Local Storage"],
    liveUrl: "https://github.com/KalpitChandekar/Quize-App",
    githubUrl: "https://github.com/KalpitChandekar/Quize-App",
    featured: false,
  },
  {
    id: 6,
    title: "Tic-Tac-Toe",
    description:
      "A classic game reimagined with modern UI design and smart game logic. Features smooth animations and an engaging user experience.",
    image:
      "https://images.pexels.com/photos/278888/pexels-photo-278888.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: ["JavaScript", "CSS3", "HTML5", "Game Logic"],
    liveUrl: "https://github.com/KalpitChandekar/Tic-Tac-Toe",
    githubUrl: "https://github.com/KalpitChandekar/Tic-Tac-Toe",
    featured: false,
  },
  {
    id: 7,
    title: "Drum Kit Interactive",
    description:
      "A fun and interactive drum kit web application created with vanilla JavaScript. Play different drum sounds with keyboard or mouse interactions.",
    image:
      "https://images.pexels.com/photos/164743/pexels-photo-164743.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: ["JavaScript", "HTML5", "CSS3", "Audio API"],
    liveUrl: "https://github.com/KalpitChandekar/Drum-Kit",
    githubUrl: "https://github.com/KalpitChandekar/Drum-Kit",
    featured: false,
  },
  {
    id: 8,
    title: "Sidcup Family Golf",
    description:
      "A beautiful and responsive website for a family golf club, showcasing modern web design principles and smooth user interactions.",
    image:
      "https://images.pexels.com/photos/1325735/pexels-photo-1325735.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    liveUrl: "https://github.com/KalpitChandekar/sidcup-family-golf",
    githubUrl: "https://github.com/KalpitChandekar/sidcup-family-golf",
    featured: false,
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".project-card",
        {
          y: 80,
          opacity: 0,
          rotateX: 15,
        },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: projectsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 lg:py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-purple-900/10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-poppins font-bold mb-4">
            <span className="text-white">Featured </span>
            <span className="text-transparent bg-clip-text bg-neon-gradient">
              Projects
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
          <div className="w-20 h-1 bg-neon-gradient rounded-full mx-auto mt-6" />
        </motion.div>

        {/* Projects Grid */}
        <div
          ref={projectsRef}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              whileHover={{
                y: -10,
                rotateY: 5,
                scale: 1.02,
              }}
              whileTap={{ scale: 0.98 }}
              className={`project-card group relative overflow-hidden rounded-2xl glass-effect border border-white/10 hover:border-neon-blue/30 transition-all duration-500 ${
                project.featured && index === 0 ? "lg:col-span-2" : ""
              }`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Hover Actions */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-white/10 border-white/20 text-white hover:bg-neon-blue hover:border-neon-blue hover:text-black transition-all duration-300"
                    onClick={() => window.open(project.liveUrl, "_blank")}
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    Preview
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-white/10 border-white/20 text-white hover:bg-neon-purple hover:border-neon-purple hover:text-black transition-all duration-300"
                    onClick={() => window.open(project.githubUrl, "_blank")}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </motion.div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-neon-gradient text-black text-xs font-semibold rounded-full">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-poppins font-semibold text-white mb-3 group-hover:text-neon-blue transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs font-medium bg-gray-800/50 text-gray-300 rounded border border-gray-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => window.open(project.liveUrl, "_blank")}
                    className="flex items-center gap-2 text-neon-blue hover:text-neon-purple transition-colors duration-300 text-sm font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </button>
                  <button
                    onClick={() => window.open(project.githubUrl, "_blank")}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 text-sm font-medium"
                  >
                    <Github className="w-4 h-4" />
                    Source
                  </button>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute -inset-0.5 bg-neon-gradient rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500 -z-10" />

              {/* Floating Particles */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-neon-blue rounded-full opacity-0 group-hover:opacity-100"
                    style={{
                      left: `${20 + Math.random() * 60}%`,
                      top: `${20 + Math.random() * 60}%`,
                    }}
                    animate={{
                      y: [-20, 20, -20],
                      x: [-10, 10, -10],
                      scale: [1, 1.5, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            className="bg-transparent border-2 border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-black transition-all duration-300 font-poppins font-semibold px-8"
          >
            View All Projects
          </Button>
        </motion.div> */}
      </div>
    </section>
  );
}
