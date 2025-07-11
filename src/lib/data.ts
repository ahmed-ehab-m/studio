import { Github, Linkedin, Mail } from "lucide-react";

export const portfolioData = {
  name: "Ahmed Ehab",
  title: "Expert Flutter Developer",
  description: "I build beautiful, high-performance mobile applications with Flutter, transforming ideas into reality.",
  about: {
    bio: "I am a dedicated Flutter developer with a passion for creating seamless and engaging user experiences. My journey in tech began with a curiosity for how things work, which led me to the world of mobile development.",
    journey: "With several years of experience, I have honed my skills in building robust and scalable applications from scratch. I thrive in collaborative environments and am committed to writing clean, efficient, and maintainable code. My goal is to leverage technology to solve real-world problems and bring value to users and businesses alike."
  },
  contact: {
    email: "ahmed.flutter.dev@email.com",
    cv: "/ahmed-cv.pdf",
    socials: [
      {
        name: "LinkedIn",
        url: "#",
        icon: Linkedin
      },
      {
        name: "GitHub",
        url: "#",
        icon: Github
      }
    ]
  },
  skills: {
    frontend: ["Flutter", "Dart", "React", "Next.js", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"],
    backend: ["Node.js", "Firebase", "Supabase", "REST APIs", "GraphQL", "PostgreSQL"],
    tools: ["Git", "GitHub", "VS Code", "Android Studio", "Xcode", "Jira", "Figma"],
  },
  projects: [
    {
      title: "E-Commerce App",
      description: "A full-featured e-commerce mobile application built with Flutter, providing a seamless shopping experience.",
      tech: ["Flutter", "Firebase", "Stripe API"],
      category: "Mobile",
      image: "https://placehold.co/600x400.png",
      github: "#",
      live: "#",
      aiHint: "e-commerce app"
    },
    {
      title: "Task Management Web App",
      description: "A responsive web application for task management and team collaboration, built with Flutter Web.",
      tech: ["Flutter Web", "Dart", "Firebase"],
      category: "Web",
      image: "https://placehold.co/600x400.png",
      github: "#",
      live: "#",
      aiHint: "task management"
    },
    {
      title: "Fitness Tracker",
      description: "A mobile app to track workouts, set fitness goals, and monitor progress with detailed analytics.",
      tech: ["Flutter", "Supabase", "Google Fit API"],
      category: "Mobile",
      image: "https://placehold.co/600x400.png",
      github: "#",
      live: "#",
      aiHint: "fitness tracker"
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing projects and skills, developed using Flutter Web for a smooth, app-like feel.",
      tech: ["Flutter Web", "Dart"],
      category: "Web",
      image: "https://placehold.co/600x400.png",
      github: "#",
      live: "#",
      aiHint: "portfolio website"
    },
  ],
  testimonials: [
    {
      quote: "Ahmed is a brilliant developer who brings not only technical expertise but also a creative and problem-solving mindset to the table. His work on our Flutter app was exceptional.",
      name: "Jane Doe",
      title: "Project Manager, Tech Solutions Inc.",
      avatar: "JD",
      image: "https://placehold.co/100x100.png",
      aiHint: "woman portrait"
    },
    {
      quote: "Working with Ahmed was a pleasure. He is a great communicator, meets deadlines without fail, and the quality of his code is top-notch. Highly recommended.",
      name: "John Smith",
      title: "CEO, Innovate Co.",
      avatar: "JS",
      image: "https://placehold.co/100x100.png",
      aiHint: "man portrait"
    },
    {
      quote: "His attention to detail and dedication to creating a perfect user experience is what sets Ahmed apart. He transformed our app's UI and performance.",
      name: "Emily White",
      title: "Lead Designer, Creative Minds",
      avatar: "EW",
      image: "https://placehold.co/100x100.png",
      aiHint: "woman professional"
    },
  ],
};
