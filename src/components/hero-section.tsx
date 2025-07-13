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
          <div className="order-2 space-y-4 text-center md:order-1 md:text-left">
            <h1 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              {portfolioData.name}
            </h1>
            <h2 className="font-headline text-4xl font-bold tracking-tighter text-secondary sm:text-5xl md:text-6xl">
              {portfolioData.title}
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
          <div className="order-1 flex justify-center md:order-2">
            <Image
              src="/my_images/personalmage.jpeg"
              width="500"
              height="500"
              alt={`${portfolioData.name}'s Portrait`}
              className="aspect-square overflow-hidden rounded-full object-cover shadow-lg"
              data-ai-hint="professional portrait"
              priority
            />
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
