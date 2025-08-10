'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: 'HTML5', level: 95, icon: '🌐', category: 'Frontend' },
  { name: 'CSS3', level: 90, icon: '🎨', category: 'Frontend' },
  { name: 'JavaScript', level: 92, icon: '⚡', category: 'Frontend' },
  { name: 'TypeScript', level: 88, icon: '📘', category: 'Frontend' },
  { name: 'React', level: 94, icon: '⚛️', category: 'Frontend' },
  { name: 'Next.js', level: 90, icon: '▲', category: 'Framework' },
  { name: 'Tailwind CSS', level: 95, icon: '💨', category: 'Styling' },
  { name: 'Bootstrap', level: 85, icon: '🅱️', category: 'Styling' },
  { name: 'Sass', level: 88, icon: '💎', category: 'Styling' },
  { name: 'Node.js', level: 85, icon: '🟢', category: 'Backend' },
  { name: 'Express.js', level: 82, icon: '🚀', category: 'Backend' },
  { name: 'MongoDB', level: 80, icon: '🍃', category: 'Database' },
  { name: 'Git', level: 88, icon: '🔧', category: 'Tools' },
  { name: 'Figma', level: 80, icon: '🎯', category: 'Design' },
];

const categories = ['All', 'Frontend', 'Framework', 'Styling', 'Backend', 'Database', 'Tools', 'Design'];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate skill cards
      gsap.fromTo(
        '.skill-card',
        {
          y: 60,
          opacity: 0,
          scale: 0.8,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: skillsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Animate skill bars
      gsap.fromTo(
        '.skill-bar',
        {
          scaleX: 0,
        },
        {
          scaleX: 1,
          duration: 1.2,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: skillsRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 lg:py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/5 to-purple-900/5" />
      
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
            <span className="text-white">My </span>
            <span className="text-transparent bg-clip-text bg-neon-gradient">Skills</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
          <div className="w-20 h-1 bg-neon-gradient rounded-full mx-auto mt-6" />
        </motion.div>

        {/* Skills Grid */}
        <div ref={skillsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                boxShadow: '0 20px 40px rgba(0, 210, 255, 0.2)',
              }}
              whileTap={{ scale: 0.95 }}
              className="skill-card glass-effect rounded-xl p-6 border border-white/10 hover:border-neon-blue/30 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 to-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                {/* Skill Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <div>
                      <h3 className="text-lg font-poppins font-semibold text-white">
                        {skill.name}
                      </h3>
                      <span className="text-xs text-gray-400 uppercase tracking-wider">
                        {skill.category}
                      </span>
                    </div>
                  </div>
                  <span className="text-neon-blue font-bold text-lg">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="relative">
                  <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="skill-bar h-full bg-neon-gradient rounded-full origin-left transform-gpu"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  
                  {/* Animated Glow */}
                  <motion.div
                    className="absolute inset-0 bg-neon-gradient rounded-full opacity-0 blur-sm"
                    animate={{
                      opacity: [0, 0.3, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  />
                </div>

                {/* Floating Particles */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-neon-blue rounded-full opacity-0 group-hover:opacity-100"
                      style={{
                        left: `${20 + i * 30}%`,
                        top: `${20 + i * 20}%`,
                      }}
                      animate={{
                        y: [-10, 10, -10],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { label: 'Frontend Frameworks', count: '5+' },
              { label: 'Design Tools', count: '3+' },
              { label: 'Years Experience', count: '2+' },
              { label: 'Projects Delivered', count: '10+' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 glass-effect rounded-lg border border-white/10"
              >
                <div className="text-2xl font-poppins font-bold text-neon-blue mb-1">
                  {stat.count}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}