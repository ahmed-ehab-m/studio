import { Github, Linkedin, Mail } from "lucide-react";

export const portfolioData = {
  name: "Ahmed Ehab",
  title: "Expert Flutter Developer",
  description: "I build beautiful, high-performance mobile applications with Flutter, transforming ideas into reality.",
  about: {
    bio: "A passionate mobile developer with experience in Flutter, constantly learning and improving. Eager to build meaningful and user-friendly apps while embracing new challenges and opportunities.",
    journey: "With several years of experience, I have honed my skills in building robust and scalable applications from scratch. I thrive in collaborative environments and am committed to writing clean, efficient, and maintainable code. My goal is to leverage technology to solve real-world problems and bring value to users and businesses alike."
  },
  contact: {
    email: "ahmedehab56200@gmail.com",
    cv: "/cv/Ahmed Ehab - Mobile Developer.pdf",
    socials: [
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/ahmed-ehab-72052b21a",
        icon: Linkedin
      },
      {
        name: "GitHub",
        url: "https://github.com/ahmed-ehab-m",
        icon: Github
      }
    ]
  },
  skills: {
    frontend: ["Flutter", "Dart"],
    backend: ["Firebase", "REST APIs","Shared Prefrences", "Hive" , "Object Box"],
    tools: ["Git", "GitHub", "VS Code", "Android Studio", "Trello", "Figma" , "Postman"],
  },
  projects: [
    {
      title: "Stoor",
      description: "a smart Book Store App ,Integrates an AI bot for personalized recommendations and a short 5-line summary for each one.",
      tech: ["Flutter", "PHP Backend", "Gemini API"],
      category: "Mobile",
      image: "/projects/pm-2/stoor.jpg",
      github: "https://github.com/ahmed-ehab-m/Stoor",
      live: "https://www.linkedin.com/posts/ahmed-ehab-72052b21a_flutter-mobiledeveloplment-php-activity-7348699655431454720-CWh4?utm_source=share&utm_medium=member_desktop&rcm=ACoAADdATEgBfSBwLj8aInXLm-FvYMUWVWh6YbE",
      aiHint: "Stoor"
    },
    {
      title: "Foot Pulse",
      description: "Health monitoring app tracks data from smart shoes, provides alerts, daily/weekly PDF reports, and bilingual (Arabic/English) medical advice.",
      tech: ["Flutter", "Classic BlueTooth", "Local Storage"],
      category: "Mobile",
      image: "/projects/foot-pulse/Untitled.jpg",
      github: "#",
      live: "https://www.linkedin.com/posts/ahmed-ehab-72052b21a_%D8%A7%D9%84%D8%AD%D9%85%D8%AF-%D9%84%D9%84%D9%87-%D8%AE%D9%84%D8%B5%D9%86%D8%A7-%D9%85%D8%B4%D8%B1%D9%88%D8%B9-footpulse-%D9%88%D9%87%D9%88-activity-7339298499865260033-iY43?utm_source=share&utm_medium=member_desktop&rcm=ACoAADdATEgBfSBwLj8aInXLm-FvYMUWVWh6YbE",
      aiHint: "Foot Pulse"
    },
  
    {
      title: "AtmoSmart",
      description: "AI-powered Weather App delivers real-time weather details and a 3-day forecast, powered by  ML model (Flask API) predicting Weather's status.",
      tech: ["Flutter", "REST APIs", "ML Model"],
      category: "Mobile",
      image: "/projects/weather/2.png",
      github: "https://github.com/ahmed-ehab-m/ai_weather",
      live: "https://www.linkedin.com/posts/ahmed-ehab-72052b21a_flutter-machinelearning-weatherapp-activity-7309598069816201216-JRlP?utm_source=share&utm_medium=member_desktop&rcm=ACoAADdATEgBfSBwLj8aInXLm-FvYMUWVWh6YbE",
      aiHint: "AtmoSmart"
    },
    {
      title: "Notes Async",
      description: "A personal portfolio website showcasing projects and skills, developed using Flutter Web for a smooth, app-like feel.",
      tech: ["Flutter", "Hive" , "Cubit"],
      category: "Mobile",
      image: "/projects/notes/Notes Async (2).png",
      github: "https://github.com/ahmed-ehab-m/notes_app",
      live: "https://www.linkedin.com/posts/ahmed-ehab-72052b21a_exciting-update-im-excited-to-announce-activity-7275608241701556224-3ucJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAADdATEgBfSBwLj8aInXLm-FvYMUWVWh6YbE",
      aiHint: "Notes Async"
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
