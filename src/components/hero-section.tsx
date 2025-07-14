"use client"

import Image from "next/image"
import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "./animated-section"
import { portfolioData } from "@/lib/data"
import { Download, Briefcase, GraduationCap } from "lucide-react"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface TimelineItem {
  title: string;
  period: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
  title: string;
  icon: LucideIcon;
}

const Timeline = ({ items, title, icon: Icon }: TimelineProps) => (
  <div className="w-full max-w-4xl mx-auto">
    <h3 className="font-headline text-2xl font-bold tracking-tighter text-primary sm:text-3xl text-center mb-12">{title}</h3>
    <div className="relative pl-6 md:pl-0">
      <div className="absolute left-6 md:left-1/2 h-full w-0.5 bg-primary -translate-x-1/2"></div>
      <div className="space-y-12">
        {items.map((item, index) => (
          <div key={index} className={cn(
            "relative flex items-start md:items-center w-full flex-col md:flex-row",
            index % 2 === 0 ? "md:justify-start" : "md:justify-end"
          )}>
            <div className="absolute left-6 md:left-1/2 top-1 h-5 w-5 rounded-full bg-primary border-4 border-background flex items-center justify-center -translate-x-1/2 z-10">
              <Icon className="h-3 w-3 text-primary-foreground" />
            </div>
            <div className={cn(
              "w-full md:w-[calc(50%-2.5rem)]",
              index % 2 === 0 ? "md:order-1" : "md:order-0"
            )}>
              <Card className="shadow-lg transition-transform duration-300 hover:scale-[1.02]">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-secondary">{item.title}</CardTitle>
                  <CardDescription className="text-sm text-accent font-semibold pt-1">{item.period}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export function HeroSection() {
  const { experience, education } = portfolioData.about;

  return (
    <AnimatedSection id="hero" className="pt-12 md:pt-24 lg:pt-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center gap-8 text-center">
          <div className="flex justify-center">
            <Image
              src="/my_images/personalmage.jpeg"
              width="300"
              height="300"
              alt={`${portfolioData.name}'s Portrait`}
              className="aspect-square overflow-hidden rounded-full object-cover shadow-lg"
              data-ai-hint="professional portrait"
              priority
              quality={100}
              unoptimized
            />
          </div>
          <div className="space-y-4">
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-lg font-medium text-muted-foreground sm:text-xl">
                Hi, I'm
              </span>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                {portfolioData.name}
              </h1>
            </div>
            <h2 className="font-headline text-10xl font-bold tracking-tighter text-secondary sm:text-6xl md:text-7xl">
              {portfolioData.title}
            </h2>
            <p className="mx-auto max-w-xl text-muted-foreground md:text-lg/relaxed">
              {portfolioData.about.bio}
            </p>
            <div className="flex flex-col items-center gap-4 pt-4">
              <Button asChild variant="default" size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <a href={portfolioData.contact.cv} download>
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </a>
              </Button>
              <div className="flex items-center gap-4 pt-4">
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
        </div>

        <div id="about" className="mt-24 grid gap-16">
          <Timeline items={experience} title="My Experience" icon={Briefcase} />
          <Timeline items={education} title="My Education" icon={GraduationCap} />
        </div>
      </div>
    </AnimatedSection>
  )
}
