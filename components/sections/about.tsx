'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code2, Lightbulb, Users, Target, Rocket, Heart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable, and efficient code'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Always exploring new technologies and creative solutions'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Working effectively with cross-functional teams'
  },
  {
    icon: Target,
    title: 'User-Focused',
    description: 'Creating experiences that solve real user problems'
  },
  {
    icon: Rocket,
    title: 'Performance',
    description: 'Optimizing for speed, accessibility, and SEO'
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'Genuinely love what I do and continuous learning'
  }
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      });

      tl.fromTo(
        contentRef.current?.children || [],
        {
          y: 60,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 lg:py-32 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-blue-900/10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={contentRef} className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-poppins font-bold">
                <span className="text-white">About </span>
                <span className="text-transparent bg-clip-text bg-neon-gradient">Me</span>
              </h2>
              <div className="w-20 h-1 bg-neon-gradient rounded-full mt-4" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a frontend developer with experience in{' '}
                <span className="text-neon-blue font-semibold">JavaScript</span> and{' '}
                <span className="text-neon-purple font-semibold">TypeScript</span>, proficient in 
                frameworks like React, Next.js, and styled with CSS.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a quick learner and collaborator, focused on creating{' '}
                <span className="text-neon-blue font-semibold">user-friendly solutions</span>{' '}
                that solve real-world problems. Let's work together to bring your ideas to life!
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { number: '2+', label: 'Years Experience' },
                { number: '10+', label: 'Projects Completed' },
                { number: '5+', label: 'Technologies' },
                { number: '100%', label: 'Client Satisfaction' },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 glass-effect rounded-lg border border-white/10"
                >
                  <div className="text-2xl font-poppins font-bold text-neon-blue mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Interactive Skills Grid */}
            <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05, 
                    rotateY: 5,
                    boxShadow: '0 10px 30px rgba(0, 210, 255, 0.2)'
                  }}
                  viewport={{ once: true }}
                  className="glass-effect p-4 rounded-xl border border-white/10 hover:border-neon-blue/30 transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex flex-col items-center text-center space-y-2">
                    <div className="w-10 h-10 bg-neon-gradient rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="w-5 h-5 text-black" />
                    </div>
                    <h4 className="text-sm font-poppins font-semibold text-white group-hover:text-neon-blue transition-colors duration-300">
                      {value.title}
                    </h4>
                    <p className="text-xs text-gray-400 leading-tight">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Central connecting lines */}
            <div className="absolute inset-0 pointer-events-none">
              <svg className="w-full h-full opacity-20">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00D2FF" />
                    <stop offset="100%" stopColor="#8B5CF6" />
                  </linearGradient>
                </defs>
                {/* Connecting lines between cards */}
                <motion.path
                  d="M 25% 25% Q 50% 50% 75% 25%"
                  stroke="url(#lineGradient)"
                  strokeWidth="1"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 0.5 }}
                />
                <motion.path
                  d="M 25% 75% Q 50% 50% 75% 75%"
                  stroke="url(#lineGradient)"
                  strokeWidth="1"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 0.7 }}
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}