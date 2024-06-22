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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  salk,
  salkbg,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
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
    id: "work",
    title: "Work",
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
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Kalpit proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Kalpit does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Kalpit optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
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
