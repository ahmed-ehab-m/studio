"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "./animated-section"
import { portfolioData } from "@/lib/data"
import { Download } from "lucide-react"
import { cn } from "@/lib/utils"

export function HeroSection() {
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
            <div id="contact" className="flex flex-col items-center gap-4 pt-4 md:items-start">
              <div className="flex flex-col gap-4 sm:flex-row">
                 <Button asChild variant="default" size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                    <a href={portfolioData.contact.cv} download>
                        <Download className="mr-2 h-5 w-5" />
                        Download CV
                    </a>
                </Button>
              </div>
              <div className="flex items-center gap-4 pt-2">
                {portfolioData.contact.socials.map((social) => (
                    <Link 
                      key={social.name} 
                      href={social.url} 
                      aria-label={social.name} 
                      className={cn(
                        "text-muted-foreground transition-colors",
                        social.hoverColor
                      )}
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <social.icon className="h-8 w-8" />
                    </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="order-1 flex justify-center md:order-2">
            <Image
              src="/my_images/personalmage.jpeg"
              width="300"
              height="300"
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
