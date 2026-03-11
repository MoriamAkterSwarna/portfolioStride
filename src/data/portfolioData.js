import { Code2, Database, Github, Linkedin, Mail, Server, Twitter, Wrench } from "lucide-react";

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
    id: 1,
    number: "01",
    title: "TaskFlow",
    category: "Full Stack",
    description: "Full-stack task management app",
    problem: "Helps teams organize daily tasks with clarity and accountability.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    learned: "Learned REST APIs, JWT auth, and production-style CRUD workflows.",
    gradient: "from-violet-500 to-purple-500",
    glow: "hover:shadow-[0_20px_60px_rgba(139,92,246,0.35)]",
  },
  {
    id: 2,
    number: "02",
    title: "ShopNest",
    category: "Frontend",
    description: "E-commerce platform with cart and auth",
    problem: "Makes online shopping smoother with user-friendly account flows.",
    stack: ["React", "Express", "MongoDB", "Tailwind"],
    learned: "Improved state management skills and understood checkout/payment flow basics.",
    gradient: "from-cyan-500 to-blue-500",
    glow: "hover:shadow-[0_20px_60px_rgba(14,165,233,0.35)]",
  },
  {
    id: 3,
    number: "03",
    title: "ChatSphere",
    category: "Full Stack",
    description: "Real-time chat app with rooms and emoji",
    problem: "Enables instant messaging between users in shared spaces.",
    stack: ["React", "Node.js", "Socket.io", "MongoDB"],
    learned: "Understood WebSockets, event-driven architecture, and real-time UX polish.",
    gradient: "from-pink-500 to-rose-500",
    glow: "hover:shadow-[0_20px_60px_rgba(244,63,94,0.35)]",
  },
  {
    id: 4,
    number: "04",
    title: "BlogVerse",
    category: "UI/UX",
    description: "Full-stack blogging platform with editor",
    problem: "Helps writers publish, format, and share ideas online.",
    stack: ["React", "Node.js", "MongoDB", "TailwindCSS"],
    learned: "Built confidence with rich text editing, auth logic, and image upload handling.",
    gradient: "from-orange-500 to-amber-500",
    glow: "hover:shadow-[0_20px_60px_rgba(245,158,11,0.35)]",
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
