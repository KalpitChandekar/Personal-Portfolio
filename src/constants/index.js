import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  figma,
  salk,
  metaverse,
  travel,
  tictactoe,
  threejs,
  nextjs,
  sass,
  github,
  vscode,
  vercel,
  netlify,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "testimonials",
    title: "Testimonials",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Next JS Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Sass",
    icon: sass,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "github",
    icon: github,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "vscode",
    icon: vscode,
  },
  {
    name: "netlify",
    icon: netlify,
  },
  {
    name: "vercel",
    icon: vercel,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Salk AI",
    icon: salk,
    iconBg: "#100d25",
    date: "Jan 2024 - June 2024",
    points: [
      "Developing and maintaining web applications using Next.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Salk AI",
    icon: salk,
    iconBg: "#100d25",
    date: "Jan 2025 - Present",
    points: [
      "Leading the frontend development of Salk AI's core product (https://sales.salk.ai/), building scalable and high-performance user interfaces with Next.js and modern web technologies.",
      "Developing and maintaining the official company website (https://salk.ai/) to ensure a seamless, engaging, and responsive user experience for clients and prospects.",
      "Collaborating closely with product, design, and backend teams to deliver new features, optimize workflows, and ensure consistent branding across platforms.",
      "Implementing real-time chat and AI-driven features to enhance lead qualification, instant responses, and automated scheduling for B2B sales clients.",
      "Ensuring accessibility, cross-browser compatibility, and mobile responsiveness across all web properties.",
      "Monitoring analytics and user feedback to drive continuous improvement and deliver measurable business impact.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Kalpit consistently delivers high-quality work and brings innovative solutions to our product. His dedication is a key asset to Salk AI.",
    name: "Prathmesh Tokekar",
    designation: "CEO",
    company: "Salk AI",
    image: "/testimonial/prathmesh.jpeg",
  },
  {
    testimonial:
      "Working with Kalpit is always a pleasure. He is proactive, reliable, and a true team player.",
    name: "Rohit Ghivdonde",
    designation: "COO",
    company: "Salk AI",
    image: "/testimonial/rohit.jpeg",
  },
  {
    testimonial:
      "Kalpit's technical skills and attention to detail make him a standout developer on our team.",
    name: "Karan Chandekar",
    designation: "Frontend Developer",
    company: "Salk AI",
    image: "/testimonial/karan.jpeg",
  },
];

const projects = [
  {
    name: "Metaverse",
    description:
      "Metaversus is a virtual reality platform allowing users to explore immersive, realistic worlds with VR devices. Users can choose different environments and track friends for a shared experience.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: metaverse,
    source_code_link: "https://github.com/KalpitChandekar/Metaverse",
    live_link: "https://metaverse-one-blond.vercel.app/",
  },
  {
    name: "Travel_UI",
    description:
      "Travel-UI is a comprehensive travel app offering offline maps, augmented reality guidance, and adventure scheduling. It helps users explore new locations with ease, featuring real-time navigation and community-shared experiences.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: travel,
    source_code_link: "https://github.com/KalpitChandekar/Travel_UI",
    live_link: "https://travel-ui-gilt.vercel.app/",
  },
  {
    name: "Tic-Tac-Toe",
    description:
      "Tic Tac Toe is a classic game implemented for the web, allowing players to enjoy a simple and interactive experience of the traditional X and O game against an opponent or the computer.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tictactoe,
    source_code_link: "https://github.com/KalpitChandekar/Tic-Tac-Toe",
    live_link: "https://tictactoekc.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
