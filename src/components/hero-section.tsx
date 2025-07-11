"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "./animated-section"
import { portfolioData } from "@/lib/data"

export function HeroSection() {
    const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <AnimatedSection id="hero">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="space-y-4 text-center md:text-left">
            <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl">
              {portfolioData.title}
            </h1>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              {portfolioData.name}
            </h2>
            <p className="max-w-xl text-muted-foreground md:text-xl/relaxed">
              {portfolioData.description}
            </p>
            <div className="flex justify-center gap-2 md:justify-start">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="#contact" onClick={scrollToContact}>Contact Me</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="/my_images/personalmage.jpeg"
              width="250"
              height="250"
              alt={`${portfolioData.name}'s Portrait`}
              className="aspect-square overflow-hidden rounded-full object-cover shadow-lg"
              data-ai-hint="professional portrait"
            />
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
