import { Github, Linkedin, Mail, Code, Database, Palette, Cpu, Wrench, Network, Smartphone, Package, Layers, Bluetooth, Bell, CodeXml, Bug, Users, Waypoints, Rocket, Binary, Blocks, FileJson, GitCommitHorizontal, PenTool, GitFork, Languages } from "lucide-react";
import { MvvmIcon } from "@/components/icons/mvvm-icon";
import { CleanArchitectureIcon } from "@/components/icons/clean-architecture-icon";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { FlutterIcon } from "@/components/icons/flutter-icon";
import { HiveIcon } from "@/components/icons/hive-icon";
import { ObjectBoxIcon } from "@/components/icons/objectbox-icon";
import { PostmanIcon } from "@/components/icons/postman-icon";
import { FigmaIcon } from "@/components/icons/figma-icon";


export const portfolioData = {
  name: "Ahmed Ehab",
  title: "Junior Mobile Developer",
  description: "I build beautiful, high-performance mobile applications with Flutter, transforming ideas into reality.",
  about: {
    bio: "A passionate mobile developer with experience in Flutter, constantly learning and improving. Eager to build meaningful and user-friendly apps while embracing new challenges and opportunities.",
    journey: [
      {
        title: "Freelancer Flutter Developer",
        period: "Feb 2025 - Apr 2025",
        description: "Collaborated with a team of embedded systems engineers to integrate IoT solutions, successfully leading the development of a single IoT project."
      },
      {
        title: "Internship at Cellula Technologies",
        period: "Feb 2025 - Apr 2025",
        description: "Developed 2 AI-integrated projects under mentorship, using Agile methodologies and Trello for task management"
      },
      {
        title: "Flutter Developer Summer Internship, ITI",
        period: "Summer 2023",
        description: "Improved code quality by applying instructor feedback, resulting in cleaner and more maintainable codebases."
      },
      
    ]
  },
  contact: {
    email: "ahmedehab56200@gmail.com",
    cv: "/cv/Ahmed_Ehab_Mobile_Developer.pdf",
    whatsapp: "201140590860", // Add your number here without '+' or '00'
    socials: [
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/ahmed-ehab-72052b21a",
        icon: Linkedin,
        hoverColor: "hover:text-linkedin-blue"
      },
      {
        name: "GitHub",
        url: "https://github.com/ahmed-ehab-m",
        icon: Github,
        hoverColor: "hover:text-black dark:hover:text-white"
      },
       {
        name: "Email",
        url: "mailto:ahmedehab56200@gmail.com",
        icon: Mail,
        hoverColor: "hover:text-google-red"
      },
      {
        name: "WhatsApp",
        url: "https://wa.me/201150700695", // Add your number here
        icon: WhatsAppIcon,
        hoverColor: "hover:text-whatsapp-green"
      },
    ]
  },
  skills: [
  
    {
      category: "Core Technologies & Architecture",
      icon: Network,
      skills: [
        { name: "Dart", icon: CodeXml },
        { name: "Flutter", icon: Smartphone },
        { name: "Bloc (Cubit)", icon: Package },
        { name: "Riverpod", icon: GitCommitHorizontal },
        { name: "MVVM", icon: MvvmIcon },
        { name: "Clean Arch", icon: CleanArchitectureIcon },
        { name: "Localization", icon: Languages },
        { name: "Rest API", icon: CodeXml }
      ]
    },
    {
      category: "Hardware & System Integration",
      icon: Cpu,
      skills: [
        { name: "Bluetooth", icon: Bluetooth },
        { name: "IOT", icon: Cpu },
        { name: "Notifications", icon: Bell }
      ]
    },
    {
      category: "UI/UX & Frontend",
      icon: Palette,
      skills: [
        { name: "Animations", icon: Layers },
        { name: "Dynamic Theme", icon: Palette },
        { name: "Responsive UI", icon: Smartphone }
      ]
    },
     {
      category: "Database & Local Storage",
      icon: Database,
      skills: [
        { name: "Firebase", icon: Database },
        { name: "FireStore", icon: Database },
        { name: "Crashlytics", icon: Database },
        { name: "Sentry", icon: Database },
        { name: "Hive", icon: HiveIcon },
        { name: "ObjectBox", icon: ObjectBoxIcon },
        { name: "Shared Prefs", icon: FileJson }
      ]
    },
    {
      category: "Development Tools & Platforms",
      icon: Wrench,
      skills: [
        { name: "Git & GitHub", icon: Github },
        { name: "VS Code", icon: Code },
        { name: "Android Studio", icon: Smartphone },
        { name: "Postman", icon: PostmanIcon },
        { name: "Figma", icon: FigmaIcon }
      ]
    },
    {
      category: "Software Engineering Principles",
      icon: Code,
      skills: [
        { name: "OOP", icon: Blocks },
        { name: "Data Structures", icon: Binary },
        { name: "Algorithms", icon: Waypoints },
        { name: "Debugging", icon: Bug },
      ]
    },

  ],
  projects: [
    {
      title: "Stoor",
      description: "a smart Book Store App ,Integrates an AI bot for personalized recommendations and a short 5-line summary for each one.",
      tech: ["Flutter","MVVM" ,  "PHP Backend", "Gemini API"],
      category: "Mobile",
      image: "/projects/pm-2/stoor.jpg",
      github: "https://github.com/ahmed-ehab-m/Stoor",
      live: "https://www.linkedin.com/posts/ahmed-ehab-72052b21a_flutter-mobiledeveloplment-php-activity-7348699655431454720-CWh4?utm_source=share&utm_medium=member_desktop&rcm=ACoAADdATEgBfSBwLj8aInXLm-FvYMUWVWh6YbE",
      aiHint: "Stoor"
    },
    {
      title: "Foot Pulse",
      description: "Health monitoring app tracks data from smart shoes, provides alerts, daily/weekly PDF reports, and bilingual (Arabic/English) medical advice.",
      tech: ["Flutter","MVVM", "Bluetooth Classic", "Esp32"],
      category: "Mobile",
      image: "/projects/foot-pulse/footpulse.png",
      github: "#",
      live: "https://www.linkedin.com/posts/ahmed-ehab-72052b21a_%D8%A7%D9%84%D8%AD%D9%85%D8%AF-%D9%84%D9%84%D9%87-%D8%AE%D9%84%D8%B5%D9%86%D8%A7-%D9%85%D8%B4%D8%B1%D9%88%D8%B9-footpulse-%D9%88%D9%87%D9%88-activity-7339298499865260033-iY43?utm_source=share&utm_medium=member_desktop&rcm=ACoAADdATEgBfSBwLj8aInXLm-FvYMUWVWh6YbE",
      aiHint: "Foot Pulse"
    },
  
    {
      title: "AtmoSmart",
      description: "AI-powered Weather App delivers real-time weather details and a 3-day forecast, powered by  ML model (Flask API) predicting Weather's status.",
      tech: ["Flutter","Clean Architecture", "REST APIs", "ML Model"],
      category: "Mobile",
      image: "/projects/weather/2.png",
      github: "https://github.com/ahmed-ehab-m/ai_weather",
      live: "https://www.linkedin.com/posts/ahmed-ehab-72052b21a_flutter-machinelearning-weatherapp-activity-7309598069816201216-JRlP?utm_source=share&utm_medium=member_desktop&rcm=ACoAADdATEgBfSBwLj8aInXLm-FvYMUWVWh6YbE",
      aiHint: "AtmoSmart"
    },
    {
      title: "Shoe",
      description: "A ECommerce app that allows users to browse and purchase shoes and apparel.",
      tech: ["Flutter", "API", "Local Storage"],
      category: "Mobile",
      image: "/projects/shoe/Untitled design (23).png",
      github: "https://github.com/ahmed-ehab-m/SHOE",
      live: "https://www.linkedin.com/posts/ibrahim-meshref_flutter-mobiledevelopment-teamwork-ugcPost-7227741720627625984-A1IT?utm_source=share&utm_medium=member_desktop&rcm=ACoAADdATEgBfSBwLj8aInXLm-FvYMUWVWh6YbE",
      aiHint: "Shoe"
    },
    {
      title: "Notes Async",
      description: "A personal portfolio website showcasing projects and skills, developed using Flutter Web for a smooth, app-like feel.",
      tech: ["Flutter", "Cubit" , "Cubit"],
      category: "Mobile",
      image: "/projects/notes/Notes Async (2).png",
      github: "https://github.com/ahmed-ehab-m/notes_app",
      live: "https://www.linkedin.com/posts/ahmed-ehab-72052b21a_exciting-update-im-excited-to-announce-activity-7275608241701556224-3ucJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAADdATEgBfSBwLj8aInXLm-FvYMUWVWh6YbE",
      aiHint: "Notes Async"
    },
  ],
  certificates: {
    " Experience & Internships ": [
      {
        title: "Completion of the Flutter Internship and Recommendation Letter",
        issuer: "Cellula Technologies",
        date: "Apr 2025",
        url: "https://drive.google.com/file/d/1van5EjAKY8UrX1cGJp8PalAQl8Y41uxG/view?usp=drive_link",
      },
      {
        title: "Mobile Application Development Using Flutter (120 Hrs)",
        issuer: "ITI",
        date: "Sep 2023",
        url: "https://drive.google.com/file/d/1BGBCl707D5vAyAe-J96Zb-NdgBxwYtkK/view",
      },
    ],
    "Online Courses": [
      {
        title: "Flutter Advanced Course Bloc and MVVM Pattern [Arabic]",
        issuer: "Udemy",
        date: "Apr 2025",
        url: "https://drive.google.com/file/d/1PYspnEg8htwMYQdGazQLy7sD2CGBjWmn/view?usp=drive_link",
      },
      {
        title: "Complete Flutter & Dart Development Course [Arabic]",
        issuer: "Udemy",
        date: "Oct 2024",
        url: "https://drive.google.com/file/d/1I7VLaNNVoCaSufqsY_X7p6iXnJ3S2IDB/view?usp=drive_link",
      },
    ]
  }
};
