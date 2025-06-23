import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/KalpitChandekar",
    icon: <Github />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/kalpit-chandekar-50a487255/",
    icon: <Linkedin />,
  },
  {
    name: "Twitter",
    url: "https://x.com/KalpitChandekar",
    icon: <Twitter />,
  },
];

const Footer = () => {
  return (
    <footer className="w-full bg-black-100 py-8 px-4 mt-10 border-t border-secondary">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <img
            src="/testimonial/kalpit.jpg"
            alt="Kalpit Chandekar"
            className="w-14 h-14 rounded-full object-cover border-2 border-secondary bg-white"
          />
          <div className="text-center md:text-left">
            <h2 className="text-white text-xl font-bold">Kalpit Chandekar</h2>
            <p className="text-secondary text-sm">Frontend Developer</p>
          </div>
        </div>
        <div className="flex gap-6 mt-4 md:mt-0">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="text-secondary hover:text-[#915EFF] transition-colors duration-200"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="mt-6 text-center text-xs text-secondary">
        &copy; {new Date().getFullYear()} Kalpit Chandekar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
