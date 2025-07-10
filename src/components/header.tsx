"use client"
import Link from "next/link"
import { Mountain } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"

export function Header() {
  const scrollToSection = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 py-3 shadow-sm backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <Mountain className="h-6 w-6 text-primary" />
          <span className="text-lg font-bold text-foreground">Ahmed's Portfolio</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <Link href="#about" onClick={scrollToSection('about')} className="transition-colors hover:text-primary" prefetch={false}>
            About
          </Link>
          <Link href="#skills" onClick={scrollToSection('skills')} className="transition-colors hover:text-primary" prefetch={false}>
            Skills
          </Link>
          <Link href="#projects" onClick={scrollToSection('projects')} className="transition-colors hover:text-primary" prefetch={false}>
            Projects
          </Link>
          <Link href="#contact" onClick={scrollToSection('contact')} className="transition-colors hover:text-primary" prefetch={false}>
            Contact
          </Link>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  )
}
