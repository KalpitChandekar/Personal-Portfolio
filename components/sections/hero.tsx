"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Sphere,
  MeshDistortMaterial,
  Float,
} from "@react-three/drei";
import { ChevronDown, Code, Palette, Zap } from "lucide-react";
import { gsap } from "gsap";

function AnimatedSphere() {
  return (
    <Float speed={1.4} rotationIntensity={1} floatIntensity={2}>
      <Sphere args={[1, 100, 200]} scale={2.4}>
        <MeshDistortMaterial
          color="#00D2FF"
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0.4}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
}

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate hero text on load
      gsap.fromTo(
        textRef.current?.children || [],
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: "power3.out",
        }
      );

      // Removed parallax that translated the entire hero section to avoid creating a gap
      // Previously: gsap.to(heroRef.current, { yPercent: -50, scrollTrigger: { ... } })
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-30">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <AnimatedSphere />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={true}
            autoRotate
            autoRotateSpeed={1}
          />
        </Canvas>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-purple-900/30 to-blue-900/50" />

      {/* Interactive Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-neon-blue/20 rounded-full"
          animate={{
            x: mousePosition.x * 20,
            y: mousePosition.y * 20,
            rotate: mousePosition.x * 10,
          }}
          transition={{ type: "spring", stiffness: 100, damping: 30 }}
        />
        <motion.div
          className="absolute bottom-32 right-32 w-24 h-24 border border-neon-purple/20 rounded-lg"
          animate={{
            x: mousePosition.x * -15,
            y: mousePosition.y * -15,
            rotate: mousePosition.y * -10,
          }}
          transition={{ type: "spring", stiffness: 80, damping: 25 }}
        />
        <motion.div
          className="absolute top-1/2 right-20 w-16 h-16 bg-neon-blue/10 rounded-full blur-xl"
          animate={{
            x: mousePosition.x * 25,
            y: mousePosition.y * 25,
            scale: 1 + mousePosition.x * 0.1,
          }}
          transition={{ type: "spring", stiffness: 120, damping: 40 }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <motion.div ref={textRef} className="space-y-8 lg:pr-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="inline-flex items-center gap-2 px-4 py-2 glass-effect rounded-full border border-neon-blue/30 text-neon-blue text-sm font-medium"
              >
                <Zap className="w-4 h-4" />
                Available for new opportunities
              </motion.div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-poppins font-bold leading-tight">
                <span className="text-white">Hi, I'm </span>
                <span className="neon-text text-transparent bg-clip-text bg-neon-gradient block lg:inline">
                  Kalpit Chandekar
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-6"
            >
              <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
                I develop{" "}
                <span className="text-neon-blue font-medium">
                  user interfaces
                </span>{" "}
                and{" "}
                <span className="text-neon-purple font-medium">
                  web applications
                </span>{" "}
                that solve real-world problems
              </p>

              {/* Feature highlights */}
              <div className="flex flex-wrap gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Code className="w-4 h-4 text-neon-blue" />
                  <span>Frontend Development</span>
                </div>
                <div className="flex items-center gap-2">
                  <Palette className="w-4 h-4 text-neon-purple" />
                  <span>UI/UX Design</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(0, 210, 255, 0.5)",
                  y: -2,
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-4 bg-neon-gradient text-gray-900 font-poppins font-semibold rounded-full transition-all duration-300 hover:shadow-lg shadow-neon-blue/25 relative overflow-hidden group"
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-4 glass-effect border border-neon-blue/30 text-white font-poppins font-semibold rounded-full transition-all duration-300 hover:border-neon-blue/50 hover:bg-neon-blue/10 relative overflow-hidden group"
              >
                <span className="relative z-10">Get In Touch</span>
                <div className="absolute inset-0 bg-neon-blue/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Enhanced Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-96 flex items-center justify-center">
              {/* Central glowing orb */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="w-32 h-32 bg-neon-gradient rounded-full blur-sm opacity-60"
              />

              {/* Orbiting elements */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-4 h-4 bg-neon-blue rounded-full"
                  style={{
                    left: "50%",
                    top: "50%",
                  }}
                  animate={{
                    rotate: [0, 360],
                    x: Math.cos((i * 60 * Math.PI) / 180) * (80 + i * 20),
                    y: Math.sin((i * 60 * Math.PI) / 180) * (80 + i * 20),
                  }}
                  transition={{
                    duration: 10 + i * 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              ))}

              {/* Floating code symbols */}
              {["</", "{}", "()", "[]", "/>", "&&"].map((symbol, i) => (
                <motion.div
                  key={symbol}
                  className="absolute text-neon-blue/40 font-mono text-lg font-bold"
                  style={{
                    left: `${20 + Math.random() * 60}%`,
                    top: `${20 + Math.random() * 60}%`,
                  }}
                  animate={{
                    y: [-20, 20, -20],
                    opacity: [0.2, 0.8, 0.2],
                    rotate: [-5, 5, -5],
                  }}
                  transition={{
                    duration: 4 + Math.random() * 2,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                >
                  {symbol}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-neon-blue/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-50"
        onClick={scrollToNext}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-gray-400 hover:text-neon-blue transition-colors"
        >
          <span className="text-sm mb-2 font-medium">Scroll Down</span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}
