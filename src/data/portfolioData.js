import { Code2, Database, Github, Linkedin, Mail, Server, Twitter, Wrench } from "lucide-react";
import taskflowImg from "../assets/project-taskflow.jpg";
import shopnestImg from "../assets/project-shopnest.jpg";
import chatsphereImg from "../assets/project-chatsphere.jpg";
import blogverseImg from "../assets/project-blogverse.jpg";
export const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "journey", label: "Journey" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export const typingPhrases = [
  "I Build Web Apps",
  "I Love Clean Code",
  "I'm Always Learning",
  "Let's Work Together",
];

export const aboutStats = [
  { icon: "🎓", title: "CSE Graduate" },
  { icon: "💻", title: "4 Real Projects" },
  { icon: "📚", title: "Always Learning" },
  { icon: "🟢", title: "Open to Work" },
];

export const skillGroups = [
  {
    title: "Frontend",
    icon: Code2,
    color: "from-violet-500/30 to-fuchsia-500/30",
    items: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: Server,
    color: "from-cyan-500/30 to-blue-500/30",
    items: ["Node.js", "Express.js"],
  },
  {
    title: "Database",
    icon: Database,
    color: "from-emerald-500/30 to-teal-500/30",
    items: ["MongoDB", "Mongoose"],
  },
  {
    title: "Tools",
    icon: Wrench,
    color: "from-amber-500/30 to-orange-500/30",
    items: ["Git", "GitHub", "VS Code", "Postman", "Figma (basics)"],
  },
];

export const projects = [
 {
     num: "01",
     title: "TaskFlow",
     desc: "Full-stack task management app",
     solves: "Helps teams organize daily tasks efficiently.",
     stack: ["React", "Node.js", "Express", "MongoDB"],
     gradient: "from-violet-500 to-purple-600",
     glowColor: "hover:shadow-[0_0_40px_hsl(270_80%_65%_/_0.3)]",
     learned: "REST APIs, JWT authentication, CRUD operations, and responsive design patterns.",
     category: "fullstack",
     image: taskflowImg,
   },
   {
     num: "02",
     title: "ShopNest",
     desc: "E-commerce platform with cart & auth",
     solves: "Online shopping experience with user accounts.",
     stack: ["React", "Express", "MongoDB", "Tailwind"],
     gradient: "from-cyan-500 to-blue-600",
     glowColor: "hover:shadow-[0_0_40px_hsl(200_80%_55%_/_0.3)]",
     learned: "State management, payment flow logic, and user authentication patterns.",
     category: "fullstack",
     image: shopnestImg,
   },
   {
     num: "03",
     title: "ChatSphere",
     desc: "Real-time chat app with rooms & emoji",
     solves: "Instant messaging between users in real-time.",
     stack: ["React", "Node.js", "Socket.io", "MongoDB"],
     gradient: "from-pink-500 to-rose-600",
     glowColor: "hover:shadow-[0_0_40px_hsl(340_80%_55%_/_0.3)]",
     learned: "WebSockets, real-time event handling, and room-based architecture.",
     category: "fullstack",
     image: chatsphereImg,
   },
   {
     num: "04",
     title: "BlogVerse",
     desc: "Full-stack blogging platform with editor",
     solves: "Writers publishing and managing content online.",
     stack: ["React", "Node.js", "MongoDB", "TailwindCSS"],
     gradient: "from-orange-500 to-amber-500",
     glowColor: "hover:shadow-[0_0_40px_hsl(30_80%_55%_/_0.3)]",
     learned: "Rich text editor integration, auth flows, and image upload handling.",
     category: "fullstack",
     image: blogverseImg,
   },
];

export const timelineItems = [
  {
    icon: "📚",
    title: "Started learning HTML & CSS",
    date: "Jan 2023",
    description: "Built static pages and learned how structure and styling work together.",
  },
  {
    icon: "⚡",
    title: "Built first JavaScript project",
    date: "Mar 2023",
    description: "Moved from static UI to interactive behavior and logic.",
  },
  {
    icon: "⚛️",
    title: "Learned React & Tailwind CSS",
    date: "Jun 2023",
    description: "Started component-based development and modern utility-first styling.",
  },
  {
    icon: "🌿",
    title: "Dived into Node.js + MongoDB",
    date: "Sep 2023",
    description: "Understood APIs, servers, and storing app data in the database.",
  },
  {
    icon: "🚀",
    title: "Built first full-stack MERN app",
    date: "Dec 2023",
    description: "Connected frontend and backend into one complete product.",
  },
  {
    icon: "💬",
    title: "Built real-time chat with Socket.io",
    date: "Feb 2024",
    description: "Learned real-time events, sockets, and live communication UX.",
  },
  {
    icon: "🎯",
    title: "Actively seeking first job/internship",
    date: "Present",
    description: "Focused on growth, shipping projects, and contributing professionally.",
  },
];

export const certifications = [
  {
    title: "Meta Front-End Developer",
    issuer: "Coursera",
    year: "2023",
    gradient: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "MongoDB Basics",
    issuer: "MongoDB University",
    year: "2023",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    title: "JavaScript Algorithms & DS",
    issuer: "freeCodeCamp",
    year: "2024",
    gradient: "from-cyan-500 to-blue-500",
  },
];

export const socials = [
  { label: "GitHub", href: "https://github.com", icon: Github, color: "hover:text-violet-300" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin, color: "hover:text-cyan-300" },
  { label: "Twitter/X", href: "https://x.com", icon: Twitter, color: "hover:text-sky-300" },
  { label: "Email", href: "mailto:aryan@example.com", icon: Mail, color: "hover:text-emerald-300" },
];

export const stackTagClass = {
  React: "bg-blue-500/20 text-blue-200 border-blue-400/40",
  "Node.js": "bg-green-500/20 text-green-200 border-green-400/40",
  Express: "bg-yellow-500/20 text-yellow-200 border-yellow-400/40",
  MongoDB: "bg-emerald-500/20 text-emerald-200 border-emerald-400/40",
  Tailwind: "bg-cyan-500/20 text-cyan-200 border-cyan-400/40",
  TailwindCSS: "bg-cyan-500/20 text-cyan-200 border-cyan-400/40",
  "Socket.io": "bg-rose-500/20 text-rose-200 border-rose-400/40",
};
