"use client"
import Link from "next/link"
import { Mountain, User, Wrench, FolderKanban, Award, MessageSquare } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { portfolioData } from "@/lib/data"

export function Header() {
  const scrollToSection = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  const navLinks = [
    { href: "#about", text: "About", icon: User },
    { href: "#skills", text: "Skills", icon: Wrench },
    { href: "#projects", text: "Projects", icon: FolderKanban },
    { href: "#certificates", text: "Certificates", icon: Award },
    { href: "#contact", text: "Contact", icon: MessageSquare }
  ];

  return (
    <header className="sticky top-0 z-50 flex justify-center p-4">
      <div className="flex h-16 w-full max-w-2xl items-center justify-between rounded-full bg-background/80 px-6 shadow-lg backdrop-blur-md">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <Mountain className="h-6 w-6 text-primary" />
          <span className="sr-only">Portfolio Home</span>
        </Link>
        <nav className="hidden items-center gap-4 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              onClick={scrollToSection(link.href.substring(1))} 
              className="flex items-center gap-2 transition-colors hover:text-primary" 
              prefetch={false}
            >
              <link.icon className="h-4 w-4" />
              {link.text}
            </Link>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  )
}
