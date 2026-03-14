"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "BugCure",
    companyLink: "https://www.linkedin.com/company/bugcuredigital/",
    location: "Remote",
    period: "Sep 2025 - Feb 2026",
    description:
      "Owned frontend delivery for product-facing interfaces, focusing on reusable UI systems, performance-aware implementation, and maintainable React architecture.",
    responsibilities: [
      "Built reusable components and interface patterns that improved consistency across product surfaces",
      "Optimized rendering behavior and frontend structure for smoother interactions in larger interfaces",
      "Collaborated with product and design teams to translate requirements into polished, production-ready UI",
      "Integrated APIs with stronger handling for loading, empty, and error states",
      "Improved implementation quality through cleaner component boundaries and lighter page composition",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Figma",
      "API Integration",
    ],
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Salk AI",
    companyLink: "https://salk.ai/",
    location: "Remote",
    period: "Jan 2025 - Jul 2025",
    description:
      "Contributed to product UI delivery with a focus on scalable components, responsive implementation, and strong collaboration across design and backend teams.",
    responsibilities: [
      "Developed responsive product interfaces using React, TypeScript, and modern frontend tooling",
      "Implemented UI with attention to accessibility, responsiveness, and interaction quality",
      "Worked with backend and design stakeholders to ship API-driven features",
      "Improved maintainability by organizing components around reuse instead of page-specific duplication",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Git",
    ],
  },
  {
    id: 3,
    title: "Frontend Developer",
    company: "Salk AI",
    companyLink: "https://salk.ai/",
    location: "Remote",
    period: "Jan 2024 - Jun 2024",
    description:
      "Built interactive frontend experiences and improved implementation quality across multiple web projects.",
    responsibilities: [
      "Built responsive web interfaces with modern React-based workflows",
      "Translated designs into clean, reusable UI components",
      "Improved page behavior and frontend quality with better implementation practices",
      "Supported teammates through review feedback and collaboration",
    ],
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".timeline-item",
        {
          x: -100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".timeline-line",
        {
          scaleY: 0,
        },
        {
          scaleY: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: timelineRef.current,
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
      id="experience"
      ref={sectionRef}
      className="py-20 lg:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-l from-purple-900/5 to-blue-900/5" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-poppins font-bold mb-4">
            <span className="text-white">Product </span>
            <span className="text-transparent bg-clip-text bg-neon-gradient">
              Experience
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Roles where I focused on shipping frontend interfaces, building
            reusable UI, collaborating across functions, and improving
            implementation quality over time.
          </p>
          <div className="w-20 h-1 bg-neon-gradient rounded-full mx-auto mt-6" />
        </motion.div>

        <div ref={timelineRef} className="relative">
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-blue to-neon-purple timeline-line origin-top" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`timeline-item relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-neon-gradient rounded-full border-4 border-gray-900 z-10" />

                <div
                  className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                    index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="glass-effect rounded-xl p-6 border border-white/10 hover:border-neon-blue/30 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-poppins font-semibold text-white mb-1">
                          {exp.title}
                        </h3>
                        <h4 className="text-lg text-neon-blue font-medium mb-2">
                          <Link
                            href={exp.companyLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {exp.company}
                          </Link>
                        </h4>
                      </div>
                      <Briefcase className="w-6 h-6 text-neon-purple ml-4 flex-shrink-0" />
                    </div>

                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {exp.responsibilities.map((responsibility) => (
                        <li
                          key={responsibility}
                          className="text-sm text-gray-400 flex items-start gap-2"
                        >
                          <span className="w-1.5 h-1.5 bg-neon-blue rounded-full mt-2 flex-shrink-0" />
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium bg-neon-blue/10 text-neon-blue rounded-full border border-neon-blue/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                <div className="hidden md:block w-2/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
