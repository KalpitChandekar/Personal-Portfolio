'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    text: "Kalpit consistently delivers high-quality work and brings innovative solutions to our product. His dedication is a key asset to Salk AI.",
    author: "Sarah Johnson",
    role: "Product Manager",
    company: "Salk AI",
    rating: 5,
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2",
  },
  {
    id: 2,
    text: "Working with Kalpit is always a pleasure. He is proactive, reliable, and a true team player.",
    author: "Michael Chen",
    role: "Lead Developer",
    company: "Tech Solutions",
    rating: 5,
    avatar: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2",
  },
  {
    id: 3,
    text: "Kalpit's technical skills and attention to detail make him a standout developer on our team.",
    author: "Emily Rodriguez",
    role: "Engineering Manager",
    company: "Innovation Labs",
    rating: 5,
    avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.testimonial-header',
        {
          y: 60,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Auto-play testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-20 lg:py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-blue-900/10" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="testimonial-header text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-poppins font-bold mb-4">
            <span className="text-white">Client </span>
            <span className="text-transparent bg-clip-text bg-neon-gradient">Testimonials</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            What colleagues and clients say about working with me
          </p>
          <div className="w-20 h-1 bg-neon-gradient rounded-full mx-auto mt-6" />
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <div className="relative min-h-[400px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100, rotateY: 15 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                exit={{ opacity: 0, x: -100, rotateY: -15 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="w-full"
              >
                <div className="glass-effect rounded-3xl p-8 lg:p-12 border border-white/10 hover:border-neon-blue/30 transition-all duration-500 relative">
                  {/* Quote Icon */}
                  <div className="absolute -top-6 -left-6 w-12 h-12 bg-neon-gradient rounded-full flex items-center justify-center">
                    <Quote className="w-6 h-6 text-black" />
                  </div>

                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-xl lg:text-2xl text-white leading-relaxed mb-8 font-light">
                    "{testimonials[currentIndex].text}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    <motion.img
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      src={testimonials[currentIndex].avatar}
                      alt={testimonials[currentIndex].author}
                      className="w-16 h-16 rounded-full border-2 border-neon-blue/30"
                      loading="lazy"
                    />
                    <div>
                      <h4 className="text-lg font-poppins font-semibold text-white mb-1">
                        {testimonials[currentIndex].author}
                      </h4>
                      <p className="text-neon-blue font-medium">
                        {testimonials[currentIndex].role}
                      </p>
                      <p className="text-gray-400 text-sm">
                        {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </div>

                  {/* Background Particles */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
                    {[...Array(10)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-neon-blue/20 rounded-full"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.2, 0.6, 0.2],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: i * 0.3,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-12">
            {/* Previous Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="w-12 h-12 glass-effect rounded-full border border-white/20 flex items-center justify-center text-white hover:border-neon-blue/50 hover:text-neon-blue transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-neon-blue scale-125'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="w-12 h-12 glass-effect rounded-full border border-white/20 flex items-center justify-center text-white hover:border-neon-blue/50 hover:text-neon-blue transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Auto-play Indicator */}
          <motion.div
            initial={{ width: '100%' }}
            animate={{ width: isAutoPlaying ? '0%' : '100%' }}
            transition={{ duration: 5, ease: 'linear' }}
            className="h-1 bg-neon-gradient rounded-full mt-8 mx-auto max-w-xs"
            key={currentIndex}
          />
        </div>
      </div>
    </section>
  );
}