"use client"
import Link from "next/link"
import { User, Wrench, FolderKanban, Award } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"

export function Header() {
  const scrollToSection = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  const navLinks = [
    { href: "#hero", text: "About", icon: User },
    { href: "#skills", text: "Skills", icon: Wrench },
    { href: "#projects", text: "Projects", icon: FolderKanban },
    { href: "#certificates", text: "Certificates", icon: Award },
  ];

  return (
    <header className="sticky top-0 z-50 flex justify-center p-4">
      <div className="flex h-16 w-full max-w-xl items-center justify-between rounded-3xl bg-background/80 px-6 shadow-lg backdrop-blur-md">
        <nav className="flex w-full items-center justify-center gap-4 text-sm font-medium md:gap-6">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              onClick={scrollToSection(link.href.substring(1))} 
              className="flex items-center gap-2 transition-colors hover:text-primary" 
              prefetch={false}
            >
              <link.icon className="h-4 w-4" />
              <span className="hidden sm:inline">{link.text}</span>
            </Link>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  )
}
